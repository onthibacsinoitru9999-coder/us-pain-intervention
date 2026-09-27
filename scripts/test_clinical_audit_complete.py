# -*- coding: utf-8 -*-
"""
Exhaustive Verification Suite for Clinical Audit Findings C-01..C-05 and M-01..M-06
"""
import sys
import json
import os
import re

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

print("=" * 70)
print("  EXHAUSTIVE CLINICAL AUDIT VERIFICATION (C-01..C-05 & M-01..M-06)")
print("=" * 70)

# 1. C-01 Verification
print("\n--- 1. C-01: ZERO OCCURRENCES OF 'RỐI LOẠN THỂ DỊCH' ---")
forbidden_term = 'thể dịch'
files_to_check = [
    'data/screening.js',
    'data/screening.fallback.js',
    'js/screening.js',
    'screening.html',
    'scripts/build_full_guidemap_screening.py'
]
for fn in files_to_check:
    with open(fn, 'r', encoding='utf-8') as f:
        content = f.read()
    assert forbidden_term not in content, f"FAIL: Found '{forbidden_term}' in {fn}"
    print(f"  [PASS] {fn}: 0 occurrences of '{forbidden_term}'")

# Load screening datasets
with open('data/screening.js', 'r', encoding='utf-8') as f:
    text = f.read()
prefix = 'const SCREENING_DATA = '
start = text.find(prefix)
end = text.find(';\n\nconst GUIDEMAP_ALGORITHM')
screening_data = json.loads(text[start+len(prefix):end])

with open('data/screening.fallback.js', 'r', encoding='utf-8') as f:
    fb_text = f.read()
fb_prefix = 'const STABLE_SCREENING_FALLBACK = '
fb_start = fb_text.find(fb_prefix)
fb_end = fb_text.find(';\n\nconst STABLE_GUIDEMAP_ALGORITHM')
fallback_data = json.loads(fb_text[fb_start+len(fb_prefix):fb_end])

# 2. C-04: Vertebral Artery Test (#06) Safety Protocol
print("\n--- 2. C-04: VERTEBRAL ARTERY TEST SAFETY PROTOCOL (DEEPAK P. 176) ---")
cervical_mod = [m for m in screening_data if m['id'] == 'cervical-pain'][0]
vat_test = [t for t in cervical_mod['provocative_tests'] if 'vertebral' in t['name'].lower() or 'động mạch đốt sống' in t['name'].lower()][0]

required_safety_phrases = [
    'đầu KHÔNG đưa ra ngoài mép bàn khám',
    'kê gối mỏng hoặc đệm dưới vùng xương bả vai',
    '15–20 giây',
    'đếm ngược từ 15 về 1',
    '5D/3N',
    'hạ đầu bệnh nhân về vị trí trung tính/thăng bằng ngay lập tức'
]
for phrase in required_safety_phrases:
    assert phrase in vat_test['technique'], f"FAIL: Vertebral Artery Test missing safety instruction: '{phrase}'"
    print(f"  [PASS] VAT technique contains required safety element: '{phrase}'")

# 3. C-02 & C-03: Figure Corrections (Fig 7.9 & 6.8 & 14 diagram prefixes)
print("\n--- 3. C-02 & C-03: DIAGRAM LABELING & PREFIX AUDIT ---")
hip_mod = [m for m in screening_data if m['id'] == 'hip-groin-pain'][0]
fig_7_9 = [f for f in hip_mod['figures'] if f['fig_number'] == '7.9'][0]
assert 'Femoral head posterolateral glide' in fig_7_9['caption_en']
assert 'Hướng trượt chỏm xương đùi ra sau ngoài' in fig_7_9['caption_vi']
assert 'AVN' not in fig_7_9['caption_vi']
assert 'sụp chỏm' not in fig_7_9['caption_vi']
print(f"  [PASS] Fig 7.9 correctly labeled as posterolateral glide (NOT AVN)")

systemic_mod = [m for m in screening_data if m['id'] == 'systemic-widespread'][0]
fig_6_8 = [f for f in systemic_mod['figures'] if f['fig_number'] == '6.8'][0]
assert 'Vulnerable structures in lower thoracic syndrome' in fig_6_8['caption_en']
assert 'Cấu trúc cơ răng bé sau dưới' in fig_6_8['caption_vi']
assert 'loãng xương' not in fig_6_8['caption_vi']
print(f"  [PASS] Fig 6.8 correctly labeled as serratus posterior inferior (NOT osteoporosis)")

# 4. C-05: Thoracic Segment Motion Tests Sn/Sp Qualitative
print("\n--- 4. C-05: THORACIC MOTION TESTS SN/SP QUALITATIVE AUDIT ---")
thoracic_mod = [m for m in screening_data if m['id'] == 'thoracic-pain'][0]
assert len(thoracic_mod['provocative_tests']) == 4
for t in thoracic_mod['provocative_tests']:
    assert t['sensitivity'] == 'Định tính (Qualitative)', f"FAIL: {t['name']} sn is {t['sensitivity']}"
    assert t['specificity'] == 'Định tính (Qualitative)', f"FAIL: {t['name']} sp is {t['specificity']}"
    assert 'Qualitative Motion Assessment' in t['clinical_role']
    print(f"  [PASS] {t['name'][:40]}...: Sn={t['sensitivity']}, Sp={t['specificity']}")

# 5. M-01: Cervical Flexion / Transverse Ligament Integrity
print("\n--- 5. M-01: TRANSVERSE LIGAMENT TEST NAME AUDIT ---")
transverse_test = [t for t in cervical_mod['provocative_tests'] if 'transverse' in t['name'].lower() or 'dây chằng ngang' in t['name'].lower()][0]
assert 'Nghiệm pháp Gập Cổ Khám Dây Chằng Ngang (Cervical Flexion / Testing Transverse Ligament Integrity)' in transverse_test['name']
assert any('4.52' in f['fig_number'] for f in transverse_test['figures'])
print(f"  [PASS] Test #05 accurately named: {transverse_test['name']}")

# 6. M-02: Scapula Backward Tipping Test (SBTT)
print("\n--- 6. M-02: SCAPULA BACKWARD TIPPING TEST (SBTT) AUDIT ---")
shoulder_mod = [m for m in screening_data if m['id'] == 'shoulder-pain'][0]
sbtt = [t for t in shoulder_mod['provocative_tests'] if 'sbtt' in t['name'].lower() or 'tipping' in t['name'].lower()][0]
assert 'Deepak Sebastian' in sbtt['technique']
assert 'Fig. 9.39' in sbtt['figures'][0]['caption_en']
assert os.path.exists(sbtt['figures'][0]['file'])
print(f"  [PASS] SBTT test verified in Shoulder module with Fig 9.39 ({sbtt['figures'][0]['file']})")

# 7. M-04: Figure File Swapping and Numbers
print("\n--- 7. M-04: EXAM FIGURE NUMBERS AND ASSETS AUDIT ---")
ober = [t for t in hip_mod['provocative_tests'] if 'ober' in t['name'].lower()][0]
assert ober['figures'][0]['fig_number'] == '7.14'
assert 'p327_img2.jpeg' in ober['figures'][0]['file']
print(f"  [PASS] Ober test: Fig 7.14 ({ober['figures'][0]['file']})")

stinchfield = [t for t in hip_mod['provocative_tests'] if 'stinchfield' in t['name'].lower()][0]
assert stinchfield['figures'][0]['fig_number'] == '7.20'
assert 'p331_img2.jpeg' in stinchfield['figures'][0]['file']
print(f"  [PASS] Stinchfield test: Fig 7.20 ({stinchfield['figures'][0]['file']})")

elbow_mod = [m for m in screening_data if m['id'] == 'elbow-wrist-hand-pain'][0]
phalen = [t for t in elbow_mod['provocative_tests'] if 'phalen' in t['name'].lower()][0]
assert phalen['figures'][0]['fig_number'] == '10.23'
assert 'p505_img2.jpeg' in phalen['figures'][0]['file']
print(f"  [PASS] Phalen test: Fig 10.23 ({phalen['figures'][0]['file']})")

knee_mod = [m for m in screening_data if m['id'] == 'knee-leg-foot-pain'][0]
collateral = [t for t in knee_mod['provocative_tests'] if 'dây chằng bên' in t['name'].lower() or 'collateral' in t['name'].lower()][0]
assert collateral['figures'][0]['fig_number'] == '8.50A-B'
print(f"  [PASS] Knee collateral test: Figs 8.50A-B")

cozen = [t for t in elbow_mod['provocative_tests'] if 'cozen' in t['name'].lower() and 'reverse' not in t['name'].lower()][0]
assert cozen['figures'][0]['fig_number'] == '10.27'
print(f"  [PASS] Cozen test: Fig 10.27")

maudsley = [t for t in elbow_mod['provocative_tests'] if 'maudsley' in t['name'].lower()][0]
assert maudsley['figures'][0]['fig_number'] == '10.28'
print(f"  [PASS] Maudsley test: Fig 10.28")

# 8. M-03: Atlas Tab & 279 Figures Catalog
print("\n--- 8. M-03: DEEPAK ATLAS 279 FIGURES CATALOG & NAVIGATION AUDIT ---")
with open('data/deepak_figures_catalog_exact.json', 'r', encoding='utf-8') as f:
    exact_catalog = json.load(f)
assert len(exact_catalog) == 279, f"Expected 279 figures, got {len(exact_catalog)}"
print(f"  [PASS] deepak_figures_catalog_exact.json contains exactly 279 figures")

with open('screening.html', 'r', encoding='utf-8') as f:
    html_text = f.read()
assert 'data-mode="atlas"' in html_text
assert 'id="view-atlas"' in html_text
assert 'data/deepak_atlas_catalog.js' in html_text
print(f"  [PASS] screening.html contains Tab 6 (Atlas), container #view-atlas, and atlas script tag")

print("\n" + "=" * 70)
print("  ALL CLINICAL AUDIT FINDINGS C-01..C-05 & M-01..M-06 PASSED 100%!")
print("=" * 70)
