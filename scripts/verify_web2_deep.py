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

# 4. Check figures integrity (57 Elite Curated Figures & 0 Bone Sketches)
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

screening_data = extract_js_var('SCREENING_DATA', js_text)
assert len(screening_data) == 8, f"Expected 8 modules, got {len(screening_data)}"

elite_figs = []
bone_keywords = ['bone diagram', 'skeleton', 'pelvis diagram', 'khung chậu', 'sơ đồ xương']
bone_sketches = []

for m in screening_data:
    figs = m.get('figures', [])
    for fig in figs:
        elite_figs.append(fig)
        assert os.path.exists(fig['file']), f"Missing file: {fig['file']}"
        cap = (fig.get('caption', '') + ' ' + fig.get('caption_vi', '') + ' ' + fig.get('caption_en', '')).lower()
        for kw in bone_keywords:
            if kw in cap:
                bone_sketches.append((m['id'], cap))

assert len(elite_figs) == 57, f"Expected 57 elite figures, got {len(elite_figs)}"
assert len(bone_sketches) == 0, f"Expected 0 bone sketches in elite figures, got {len(bone_sketches)}"

# Verify fallback synchronization (57 figures)
fb_screening_data = extract_js_var('STABLE_SCREENING_FALLBACK', fb_text)
fb_elite_figs = [fig for m in fb_screening_data for fig in m.get('figures', [])]
assert len(fb_elite_figs) == 57, f"Expected 57 fallback elite figures, got {len(fb_elite_figs)}"

print(f"  [OK] Toàn bộ 57 hình ảnh lâm sàng tinh hoa (0 sơ đồ xương) đã đồng bộ và tồn tại 100% trên đĩa!")

print("\n>>> TẤT CẢ KIỂM TRA CHUYÊN SÂU WEB 2 ĐỀU ĐẠT CHUẨN XUẤT SẮC! <<<")
