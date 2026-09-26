import os
import re
import json
import sys

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

print("=== KIỂM TRA CHUYÊN SÂU WEB 2 CLINICAL GUIDEMAP ===")

# 1. Check screening.html assets
with open('screening.html', 'r', encoding='utf-8') as f:
    html = f.read()

scripts = re.findall(r'<script src="([^"]+)"', html)
css = re.findall(r'<link rel="stylesheet" href="([^"]+)"', html)

for s in scripts:
    clean = s.split('?')[0]
    assert os.path.exists(clean), f"Missing script: {clean}"
    print(f"  [OK] Script {clean} ({os.path.getsize(clean)} bytes)")

for c in css:
    clean = c.split('?')[0]
    assert os.path.exists(clean), f"Missing CSS: {clean}"
    print(f"  [OK] CSS {clean} ({os.path.getsize(clean)} bytes)")

# 2. Check data/screening.js contents
with open('data/screening.js', 'r', encoding='utf-8') as f:
    js_text = f.read()

assert 'SCREENING_DATA' in js_text
assert 'GUIDEMAP_ALGORITHM' in js_text
assert 'RED_FLAGS_MASTER' in js_text
assert 'LAB_TESTS_GUIDE' in js_text
assert 'DRUG_INDUCED_PAIN_GUIDE' in js_text
print("  [OK] data/screening.js chứa đầy đủ 5 cấu trúc dữ liệu Guidemap!")

# 3. Check data/screening.fallback.js contents
with open('data/screening.fallback.js', 'r', encoding='utf-8') as f:
    fb_text = f.read()

assert 'STABLE_SCREENING_FALLBACK' in fb_text
assert 'STABLE_GUIDEMAP_ALGORITHM' in fb_text
assert 'STABLE_RED_FLAGS_MASTER' in fb_text
assert 'STABLE_LAB_TESTS_GUIDE' in fb_text
assert 'STABLE_DRUG_INDUCED_PAIN_GUIDE' in fb_text
print("  [OK] data/screening.fallback.js chứa đầy đủ 5 lá chắn dự phòng Fallback!")

# 4. Check figures integrity
with open('data/deepak_figures_enriched.json', 'r', encoding='utf-8') as f:
    figs = json.load(f)

assert len(figs) == 279, f"Expected 279 figures, got {len(figs)}"
for fig in figs:
    assert os.path.exists(fig['file']), f"Missing file: {fig['file']}"

print(f"  [OK] Toàn bộ 279 hình ảnh Atlas Deepak Sebastian đều tồn tại 100% trên đĩa!")

print("\n>>> TẤT CẢ KIỂM TRA CHUYÊN SÂU WEB 2 ĐỀU ĐẠT CHUẨN XUẤT SẮC! <<<")
