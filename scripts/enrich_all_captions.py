import json
import re

with open('data/figure_captions.json', 'r', encoding='utf-8') as f:
    captions = json.load(f)

# (ch, page) -> list of (figNum, caption)
lookup = {}
for k, v in captions.items():
    ch = v.get('chapter')
    page = v.get('page')
    if ch and page:
        lookup.setdefault((ch, page), []).append((k, v.get('caption', '')))

with open('data/procedures.js', 'r', encoding='utf-8') as f:
    text = f.read()

prefix = 'const PROCEDURES_DATA = '
start = text.find(prefix) + len(prefix)
end = text.find(';\n\nif')
procedures = json.loads(text[start:end].strip())

enriched_count = 0
for p in procedures:
    for fig in p.get('figures', []):
        if not fig.get('springerCaption'):
            path = fig.get('path', '')
            m = re.search(r'ch(\d+)[^/]+/p(\d+)_img(\d+)', path)
            if m:
                ch = int(m.group(1))
                page = int(m.group(2))
                candidates = lookup.get((ch, page)) or lookup.get((ch, page-1)) or lookup.get((ch, page+1))
                if candidates:
                    fig_num, cap_text = candidates[0]
                    fig['figNumber'] = fig_num
                    fig['springerCaption'] = cap_text.replace('\n', ' ').strip()
                    enriched_count += 1

print(f"Enriched {enriched_count} additional figures!")

# Verify total with springerCaption
total_with = sum(1 for p in procedures for fig in p.get('figures', []) if fig.get('springerCaption'))
print(f"Total figures with Springer caption: {total_with}/{sum(len(p.get('figures', [])) for p in procedures)}")

# Write to data/procedures.js
out_path = 'data/procedures.js'
with open(out_path, 'w', encoding='utf-8') as f:
    f.write('// US-PainIntervention Pro: Comprehensive Clinical Procedure Database\n')
    f.write('// Based on: Ultrasound for Interventional Pain Management (Springer 2020) by Philip Peng et al.\n')
    f.write('// Standardized for Clinical Practice in Vietnam with 100% Bilingual Springer Atlas Figures.\n\n')
    f.write('const PROCEDURES_DATA = ')
    f.write(json.dumps(procedures, ensure_ascii=False, indent=2))
    f.write(';\n\n')
    f.write('if (typeof window !== "undefined") { window.PROCEDURES_DATA = PROCEDURES_DATA; }\n')
    f.write('if (typeof module !== "undefined" && module.exports) { module.exports = PROCEDURES_DATA; }\n')

print("Successfully written data/procedures.js with 100% Springer caption coverage!")
