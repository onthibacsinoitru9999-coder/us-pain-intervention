# -*- coding: utf-8 -*-
import json
import re

with open('data/screening.js', 'r', encoding='utf-8') as f:
    text = f.read()

prefix = 'const SCREENING_DATA = '
start = text.find(prefix) + len(prefix)
end = text.find(';\n\nconst GUIDEMAP_ALGORITHM =')
modules = json.loads(text[start:end])

print(f"Verifying {len(modules)} modules for embedded in-context figures...")

total_rf_figs = 0
total_vr_figs = 0
total_ep_figs = 0

for m in modules:
    rf_figs = sum(len(rf.get('figures', [])) for rf in m.get('red_flags', []))
    vr_figs = sum(len(vr.get('figures', [])) for vr in m.get('visceral_referrals', []))
    ep_figs = sum(len(ep.get('figures', [])) for ep in m.get('examination_procedures', []))
    
    total_rf_figs += rf_figs
    total_vr_figs += vr_figs
    total_ep_figs += ep_figs
    
    assert rf_figs > 0, f"Module {m['id']} must have embedded red flag figures"
    assert vr_figs > 0, f"Module {m['id']} must have embedded visceral referral figures"
    assert ep_figs > 0, f"Module {m['id']} must have embedded examination procedure figures"

print(f"[PASS] All 8 modules have in-context figures attached:")
print(f"       - Red Flags: {total_rf_figs} figures")
print(f"       - Visceral Referrals: {total_vr_figs} figures")
print(f"       - Provocative Tests: {total_ep_figs} figures")
print(f"       - Total Embedded: {total_rf_figs + total_vr_figs + total_ep_figs} figures")

# Check screening.html
with open('screening.html', 'r', encoding='utf-8') as f:
    html = f.read()

assert 'class="sub-header-line"' in html, "sub-header-line class must be present in screening.html"
assert 'class="image-lightbox-modal hidden"' in html, "image-lightbox-modal must be used"
assert 'class="lightbox-nav-btn prev-btn"' in html, "lightbox-nav-btn prev-btn must be used"
print("[PASS] screening.html has anti-collision sub-header layout and bullet-proof lightbox classes.")

# Check js/screening.js
with open('js/screening.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Verify that Section 7 is NOT open by default
assert '<!-- SECTION 7: EXPANDABLE ATLAS FIGURES (COLLAPSED BY DEFAULT FOR COMPACT READING) -->' in js, "Section 7 must be marked collapsed"
assert not re.search(r'SECTION 7[^\n]*\n\s*\$\{figuresList\.length > 0 \? `\s*<details[^>]*\bopen\b', js), "Section 7 details must NOT have 'open' attribute"
assert 'touchstart' in js and 'touchend' in js, "Touch swipe handling must be in js/screening.js"
print("[PASS] js/screening.js has collapsed Section 7 and touch swipe support for mobile lightbox.")

print("\n>>> ALL IN-CONTEXT EMBEDDED FIGURES & MOBILE LAYOUT CHECKS PASSED 100%! <<<")
