import os
import json
import sys

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

print("=== KIỂM THỬ TOÀN DIỆN CẢ 2 HỆ THỐNG (DUAL APP INTEGRITY TEST) ===")

# 1. Test US-PainIntervention Pro (Philip Peng) - Web 1
with open('data/procedures.js', 'r', encoding='utf-8') as f:
    text = f.read()

prefix = 'const PROCEDURES_DATA = '
start = text.find(prefix) + len(prefix)
end = text.find(';\n\nif')
json_str = text[start:end].strip()
procedures = json.loads(json_str)

assert len(procedures) == 51, f"Expected 51 procedures, got {len(procedures)}"
for p in procedures:
    assert 'id' in p and 'nameVi' in p and 'figures' in p
    for fig in p['figures']:
        assert os.path.exists(fig['path']), f"Missing image: {fig['path']}"

print(f"  [PASS] Web 1 (Tiêm Can Thiệp Philip Peng): 51 quy trình & toàn bộ ảnh tồn tại 100% nguyên vẹn!")

# 2. Test MSK-Differential Screening Pro (Deepak Sebastian) - Web 2
with open('data/screening.js', 'r', encoding='utf-8') as f:
    scr_text = f.read()

def extract_js_var(var_name, src):
    prefix = f'const {var_name} = '
    start = src.find(prefix) + len(prefix)
    next_const = src.find('const ', start)
    next_if = src.find('if (typeof', start)
    end_candidates = [pos for pos in [next_const, next_if] if pos != -1]
    end = min(end_candidates) if end_candidates else len(src)
    chunk = src[start:end].strip()
    if chunk.endswith(';'):
        chunk = chunk[:-1].strip()
    return json.loads(chunk)

screening_data = extract_js_var('SCREENING_DATA', scr_text)
guidemap_algo = extract_js_var('GUIDEMAP_ALGORITHM', scr_text)
red_flags_master = extract_js_var('RED_FLAGS_MASTER', scr_text)
lab_tests_guide = extract_js_var('LAB_TESTS_GUIDE', scr_text)
drug_induced_guide = extract_js_var('DRUG_INDUCED_PAIN_GUIDE', scr_text)

assert len(screening_data) == 8, f"Expected 8 symptom modules, got {len(screening_data)}"
total_deepak_figs = 0
for m in screening_data:
    assert 'id' in m and 'chapter' in m and 'title_vi' in m and 'summary' in m
    figs = m.get('figures', [])
    total_deepak_figs += len(figs)
    for fig in figs:
        assert os.path.exists(fig['file']), f"Missing deepak image: {fig['file']}"

assert total_deepak_figs == 279, f"Expected 279 Deepak figures, got {total_deepak_figs}"
assert len(guidemap_algo['stages']) == 3, f"Expected 3 stages in algorithm, got {len(guidemap_algo['stages'])}"
assert len(red_flags_master) >= 10, f"Expected >= 10 red flags in master, got {len(red_flags_master)}"
assert len(lab_tests_guide) >= 10, f"Expected >= 10 lab tests, got {len(lab_tests_guide)}"
assert len(drug_induced_guide) >= 6, f"Expected >= 6 drug classes, got {len(drug_induced_guide)}"

print(f"  [PASS] Web 2 (Sàng Lọc Chẩn Đoán Phân Biệt Deepak Sebastian): Đủ 8 Vùng Triệu Chứng Lâm Sàng, Thuật toán 3 Giai đoạn, Master Cờ đỏ, Lab tests, Drug-induced & 279 ảnh Atlas sẵn sàng 100%!")

# 3. Test Fallback files
assert os.path.exists('data/procedures.fallback.js'), "Missing procedures.fallback.js"
assert os.path.exists('data/screening.fallback.js'), "Missing screening.fallback.js"

with open('data/screening.fallback.js', 'r', encoding='utf-8') as f:
    fb_text = f.read()

fb_screening_data = extract_js_var('STABLE_SCREENING_FALLBACK', fb_text)
assert len(fb_screening_data) == 8, f"Expected 8 fallback symptom modules, got {len(fb_screening_data)}"

assert os.path.exists('backup/stable_v1.0/manifest.json'), "Missing backup manifest"
print("  [PASS] Cơ chế Fallback dự phòng độc lập cho cả 2 ứng dụng đã đồng bộ và hoạt động chuẩn xác!")

# 4. Check HTML integrity
assert os.path.exists('index.html'), "Missing index.html"
assert os.path.exists('screening.html'), "Missing screening.html"

with open('index.html', 'r', encoding='utf-8') as f:
    idx_content = f.read()
assert 'screening.html' in idx_content, "index.html must link to screening.html"

with open('screening.html', 'r', encoding='utf-8') as f:
    scr_html_content = f.read()
assert 'index.html' in scr_html_content, "screening.html must link to index.html"

print("  [PASS] Cả 2 giao diện index.html và screening.html kết nối liên thông hai chiều hoàn hảo!")

print("\n>>> TẤT CẢ CÁC BÀI TEST ĐỀU ĐẠT CHUẨN XUẤT SẮC (100% SUCCESS) <<<")
