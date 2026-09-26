import fitz
import json
import os
import sys
import re

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

pdf_path = 'SEBASTIAN DEEPAK - Differential Screening of Regional Pain in Musculoskeletal.pdf'
doc = fitz.open(pdf_path)

with open('data/deepak_figures.json', encoding='utf-8') as f:
    figures = json.load(f)

# Build a dictionary of captions per page
page_captions = {}

for pno in range(len(doc)):
    text = doc[pno].get_text('text')
    # Look for caption patterns like "Figs 4.1A to C: ...", "Fig. 4.5: ...", "Figure 8.12: ..."
    matches = re.findall(r'(Fig(?:ure)?s?\s*\.?\s*\d+[\.\-]\d+[A-Z\s,to]*:?\s*[\u2000-\u200f\s]*[^\n\r]+(?:\n[^\n\r]+)?)', text)
    if matches:
        cleaned = []
        for m in matches:
            c = " ".join(m.split()).strip()
            if len(c) > 7 and not c.endswith(')'):
                cleaned.append(c)
        if cleaned:
            page_captions[pno + 1] = cleaned

# Enrich figures with captions
for fig in figures:
    p = fig['page']
    fig['captions'] = page_captions.get(p, [])
    # Also check p-1 or p+1 if empty
    if not fig['captions']:
        fig['captions'] = page_captions.get(p - 1, []) or page_captions.get(p + 1, [])

with open('data/deepak_figures_enriched.json', 'w', encoding='utf-8') as f:
    json.dump(figures, f, ensure_ascii=False, indent=2)

print(f"Enriched {len(figures)} figures with exact captions from PDF!")
