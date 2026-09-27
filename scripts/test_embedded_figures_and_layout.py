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
total_ep_figs = 0
bone_keywords = ['bone diagram', 'skeleton', 'pelvis diagram', 'khung chậu', 'sơ đồ xương']
bone_sketches_found = []

for m in modules:
    rf_figs = sum(len(rf.get('figures', [])) for rf in m.get('red_flags', []))
    ep_figs = sum(len(ep.get('figures', [])) for ep in m.get('examination_procedures', []))
    
    total_rf_figs += rf_figs
    total_ep_figs += ep_figs
    
    assert rf_figs > 0, f"Module {m['id']} must have embedded red flag figures"
    assert ep_figs > 0, f"Module {m['id']} must have embedded examination procedure figures"
    
    # Check 0 bone sketches in provocative physical examination tests
    for ep in m.get('examination_procedures', []):
        for fig in ep.get('figures', []):
            cap = (fig.get('caption', '') + ' ' + fig.get('caption_vi', '') + ' ' + fig.get('caption_en', '')).lower()
            for kw in bone_keywords:
                if kw in cap:
                    bone_sketches_found.append((m['id'], ep['name'], cap))

assert len(bone_sketches_found) == 0, f"Found bone sketches in examination procedures: {bone_sketches_found}"
assert total_rf_figs == 21, f"Expected 21 red flag figures, got {total_rf_figs}"
assert total_ep_figs == 37, f"Expected 37 provocative test figures, got {total_ep_figs}"
assert total_rf_figs + total_ep_figs == 58, f"Expected 58 total elite figures, got {total_rf_figs + total_ep_figs}"

print(f"[PASS] All 8 modules have in-context figures attached:")
print(f"       - Red Flags: {total_rf_figs} figures")
print(f"       - Provocative Tests: {total_ep_figs} figures")
print(f"       - Total Embedded: {total_rf_figs + total_ep_figs} elite figures (0 bone sketches)")

# Check screening.html
with open('screening.html', 'r', encoding='utf-8') as f:
    html = f.read()

assert 'class="sub-header-line"' in html, "sub-header-line class must be present in screening.html"
assert 'class="image-lightbox-modal hidden"' in html, "image-lightbox-modal must be used"
assert 'class="lightbox-nav-btn prev-btn"' in html, "lightbox-nav-btn prev-btn must be used"
assert 'name="viewport"' in html, "viewport meta tag must be present"
print("[PASS] screening.html has anti-collision sub-header layout and bullet-proof lightbox classes.")

# Check css/screening.css for Mobile & Lightbox CSS
with open('css/screening.css', 'r', encoding='utf-8') as f:
    css = f.read()

assert '.image-lightbox-modal' in css, "Lightbox modal class must be in css/screening.css"
assert 'position: fixed' in css and 'inset: 0' in css, "Lightbox must be fixed and inset 0"
assert 'backdrop-filter: blur(12px)' in css, "Lightbox must have backdrop-filter blur"
assert 'min-width: 44px' in css and 'min-height: 44px' in css, "Lightbox close button must meet 44x44px touch target"
assert '@media (max-width: 640px)' in css, "Mobile media query must be present in css/screening.css"
assert '[data-theme="dark"]' in css, "Dark theme tokens must be in css/screening.css"
print("[PASS] css/screening.css contains centered lightbox, 44px touch targets, mobile queries, and dark mode.")

# Check js/screening.js
with open('js/screening.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Verify that Section 7 is NOT open by default
assert '<!-- SECTION 7: EXPANDABLE ATLAS FIGURES (COLLAPSED BY DEFAULT FOR COMPACT READING) -->' in js, "Section 7 must be marked collapsed"
assert not re.search(r'SECTION 7[^\n]*\n\s*\$\{figuresList\.length > 0 \? `\s*<details[^>]*\bopen\b', js), "Section 7 details must NOT have 'open' attribute"
assert 'touchstart' in js and 'touchend' in js, "Touch swipe handling must be in js/screening.js"
print("[PASS] js/screening.js has collapsed Section 7 and touch swipe support for mobile lightbox.")

print("\n>>> ALL IN-CONTEXT EMBEDDED FIGURES & MOBILE LAYOUT CHECKS PASSED 100%! <<<")
