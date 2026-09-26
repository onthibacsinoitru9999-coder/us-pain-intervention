import os
import shutil
import hashlib
import json
import datetime

def sha256_file(filepath):
    hasher = hashlib.sha256()
    with open(filepath, 'rb') as f:
        while chunk := f.read(65536):
            hasher.update(chunk)
    return hasher.hexdigest()

def main():
    print("=== TẠO BẢN STABLE & HỆ THỐNG DỰ PHÒNG (FALLBACK) ===")
    
    # 1. Create backup directory
    backup_dir = os.path.join("backup", "stable_v1.0")
    os.makedirs(backup_dir, exist_ok=True)
    
    core_files = [
        "data/procedures.js",
        "data/figure_captions.json",
        "index.html",
        "css/style.css",
        "js/app.js",
        "js/calculator.js",
        "js/checklist.js"
    ]
    
    manifest = {
        "version": "1.0.0-stable",
        "created_at": datetime.datetime.now().isoformat(),
        "description": "Bản phát hành ổn định v1.0.0 - 51 quy trình siêu âm can thiệp, 111 hình ảnh Springer Atlas, UI mobile tối ưu cho màn hình 7.5 inch với header thu nhỏ và bottom navigation.",
        "author": "Antigravity Pair Programmer & Clinical Team",
        "files": {}
    }
    
    # Copy core files to backup
    for rel_path in core_files:
        if os.path.exists(rel_path):
            dest_path = os.path.join(backup_dir, os.path.basename(rel_path))
            shutil.copy2(rel_path, dest_path)
            file_hash = sha256_file(rel_path)
            file_size = os.path.getsize(rel_path)
            manifest["files"][rel_path] = {
                "sha256": file_hash,
                "size_bytes": file_size,
                "backup_file": os.path.basename(dest_path)
            }
            print(f"  [OK] Đã sao lưu: {rel_path} -> {dest_path} ({file_size} bytes)")
        else:
            print(f"  [CẢNH BÁO] Không tìm thấy file: {rel_path}")

    # Save manifest
    manifest_path = os.path.join(backup_dir, "manifest.json")
    with open(manifest_path, "w", encoding="utf-8") as f:
        json.dump(manifest, f, ensure_ascii=False, indent=2)
    print(f"  [OK] Đã tạo Manifest: {manifest_path}")

    # 2. Extract procedures data and create data/procedures.fallback.js
    # In procedures.js, it starts with "const PROCEDURES_DATA = [" and ends with "];"
    with open("data/procedures.js", "r", encoding="utf-8") as f:
        proc_js_content = f.read()
    
    # Generate procedures.fallback.js
    fallback_content = f"""/**
 * US-PainIntervention Pro - STABLE FALLBACK DATA (Bản sao dự phòng ổn định v1.0.0)
 * Tự động kích hoạt khi tệp dữ liệu chính data/procedures.js gặp lỗi cú pháp, bị hỏng hoặc mất kết nối.
 * Ngày tạo bản sao: {datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
 * Phiên bản: v1.0.0-stable (51 quy trình lâm sàng Springer)
 */

(function() {{
  try {{
    // Cung cấp bản sao ổn định vào biến toàn cục window.STABLE_PROCEDURES_FALLBACK
    window.STABLE_PROCEDURES_FALLBACK = {proc_js_content.replace('const PROCEDURES_DATA =', '').strip()};
    window.STABLE_VERSION_METADATA = {{
      version: '1.0.0-stable',
      timestamp: '{datetime.datetime.now().isoformat()}',
      procedureCount: window.STABLE_PROCEDURES_FALLBACK ? window.STABLE_PROCEDURES_FALLBACK.length : 0
    }};
    console.log('[US-PainIntervention] Stable Fallback Dataset v1.0.0 đã nạp sẵn sàng (' + (window.STABLE_PROCEDURES_FALLBACK ? window.STABLE_PROCEDURES_FALLBACK.length : 0) + ' quy trình)');
  }} catch (err) {{
    console.error('[US-PainIntervention] Lỗi nạp fallback dataset:', err);
  }}
}})();
"""
    fallback_file_path = os.path.join("data", "procedures.fallback.js")
    with open(fallback_file_path, "w", encoding="utf-8") as f:
        f.write(fallback_content)
    print(f"  [OK] Đã tạo tệp Fallback Client: {fallback_file_path} ({os.path.getsize(fallback_file_path)} bytes)")

    # Also backup to backup/stable_v1.0/procedures.fallback.js
    shutil.copy2(fallback_file_path, os.path.join(backup_dir, "procedures.fallback.js"))

    print("\n>>> HOÀN TẤT TẠO BẢN STABLE & CƠ CHẾ DỰ PHÒNG! <<<")

if __name__ == "__main__":
    main()
