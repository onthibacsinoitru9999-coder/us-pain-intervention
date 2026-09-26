import fitz
import sys
import json
import re

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

pdf_path = 'SEBASTIAN DEEPAK - Differential Screening of Regional Pain in Musculoskeletal.pdf'
doc = fitz.open(pdf_path)

# Extract Table of Contents from Prelim pages 10-15
toc_text = ""
for p in range(9, 15):
    toc_text += doc[p].get_text('text') + "\n"

with open("data/deepak_raw_toc.txt", "w", encoding="utf-8") as f:
    f.write(toc_text)

print("TOC saved to data/deepak_raw_toc.txt")
print(toc_text[:1500])
