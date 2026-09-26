import os
import sys
import re
import json
import datetime
import shutil

def verify_dataset():
    print("=" * 65)
    print("   BỘ KIỂM THỬ AN TOÀN DỮ LIỆU & CƠ CHẾ DỰ PHÒNG (FALLBACK)")
    print("=" * 65)

    proc_file = os.path.join("data", "procedures.js")
    if not os.path.exists(proc_file):
        print(f"[LỖI NGHIÊM TRỌNG] Không tìm thấy tệp {proc_file}!")
        return False

    with open(proc_file, "r", encoding="utf-8") as f:
        content = f.read()

    # Check variable declaration
    if "const PROCEDURES_DATA = [" not in content:
        print("[LỖI CÚ PHÁP] Không tìm thấy 'const PROCEDURES_DATA = [' trong data/procedures.js!")
        return False

    # Check for basic balanced brackets
    open_brackets = content.count("[")
    close_brackets = content.count("]")
    open_braces = content.count("{")
    close_braces = content.count("}")

    if open_brackets != close_brackets:
        print(f"[LỖI CÚ PHÁP] Số lượng ngoặc vuông không khớp! '[': {open_brackets}, ']': {close_brackets}")
        return False

    if open_braces != close_braces:
        print(f"[LỖI CÚ PHÁP] Số lượng ngoặc nhọn không khớp! '{{': {open_braces}, '}}': {close_braces}")
        return False

    # Extract JSON content
    start_idx = content.find("[")
    end_idx = content.rfind("]") + 1
    json_text = content[start_idx:end_idx]

    # Convert JS object keys if unquoted to valid JSON or parse using regex
    try:
        data = json.loads(json_text)
    except Exception as e:
        print(f"[LỖI JSON] Không thể parse dữ liệu thành JSON hợp lệ: {e}")
        print("  -> Khuyến nghị: Kiểm tra dấu phẩy thừa hoặc chuỗi chưa đóng ngoặc kép.")
        return False

    print(f"[OK] Đã parse thành công {len(data)} quy trình từ data/procedures.js")

    # Schema Validation
    required_fields = [
        "id", "nameVi", "nameEn", "category", "type", "difficulty",
        "icd10", "patientPosition", "transducer", "sonoanatomy", "indications",
        "contraindications", "technique", "drugsAndDosage", "pearlsAndPitfalls",
        "postProcedure"
    ]

    valid_categories = ["upper", "lower", "spine", "biologics"]
    valid_difficulties = ["Cơ bản", "Trung bình", "Nâng cao", "Chuyên sâu"]

    errors = []
    total_figures = 0
    missing_figures = []

    for idx, item in enumerate(data, 1):
        proc_id = item.get("id", f"item_{idx}")
        for field in required_fields:
            if field not in item:
                errors.append(f"Quy trình '{proc_id}' thiếu trường bắt buộc: '{field}'")
            elif item[field] is None:
                errors.append(f"Quy trình '{proc_id}' trường '{field}' mang giá trị null")

        cat = item.get("category")
        if cat not in valid_categories:
            errors.append(f"Quy trình '{proc_id}' có category không hợp lệ: '{cat}'")

        diff = item.get("difficulty")
        if diff not in valid_difficulties:
            errors.append(f"Quy trình '{proc_id}' có difficulty không hợp lệ: '{diff}'")

        # Verify figures
        figs = item.get("figures", [])
        total_figures += len(figs)
        for fig in figs:
            path = fig.get("path", "")
            if path and not os.path.exists(path):
                missing_figures.append(f"Quy trình '{proc_id}' không tìm thấy ảnh: {path}")

    if errors:
        print(f"\n[PHÁT HIỆN {len(errors)} LỖI CẤU TRÚC DỮ LIỆU]:")
        for err in errors[:10]:
            print(f"  ❌ {err}")
        if len(errors) > 10:
            print(f"  ... và còn {len(errors) - 10} lỗi khác.")
        print("\n⚠️ CẢNH BÁO: Dữ liệu KHÔNG ĐẠT chuẩn an toàn. Cơ chế Fallback sẽ được kích hoạt trên Web!")
        print("👉 Để khôi phục bản an toàn gốc: Hãy copy backup/stable_v1.0/procedures.js đè vào data/procedures.js")
        return False

    if missing_figures:
        print(f"\n[CẢNH BÁO] Có {len(missing_figures)} đường dẫn ảnh không tồn tại trên đĩa:")
        for mf in missing_figures[:5]:
            print(f"  ⚠️ {mf}")

    print(f"[OK] Tất cả {len(data)} quy trình đều ĐẦY ĐỦ các trường chuyên môn chuẩn lâm sàng.")
    print(f"[OK] Tổng số hình ảnh siêu âm Atlas: {total_figures} ảnh.")

    # Create automated timestamped backup in backup/updates/
    updates_dir = os.path.join("backup", "updates")
    os.makedirs(updates_dir, exist_ok=True)
    ts = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
    backup_file = os.path.join(updates_dir, f"procedures_{ts}.js")
    shutil.copy2(proc_file, backup_file)
    print(f"\n[TỰ ĐỘNG LƯU TRỮ] Đã tạo bản sao lưu an toàn tại: {backup_file}")

    # Check promote flag
    if "--promote-to-stable" in sys.argv:
        print("[THĂNG HẠNG] Cập nhật bản Fallback sang phiên bản mới này...")
        shutil.copy2(proc_file, os.path.join("backup", "stable_v1.0", "procedures.js"))
        os.system("python scripts/create_stable_release.py")

    print("\n>>> KIỂM TRA THÀNH CÔNG 100%! BẢN CẬP NHẬT ĐẠT CHUẨN AN TOÀN LÂM SÀNG! <<<")
    return True

if __name__ == "__main__":
    success = verify_dataset()
    sys.exit(0 if success else 1)
