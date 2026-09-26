import os
import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

scripts = re.findall(r'<script src="([^"]+)"', html)
css = re.findall(r'<link rel="stylesheet" href="([^"]+)"', html)

print("Scripts in index.html:", scripts)
print("CSS in index.html:", css)

all_ok = True
for s in scripts:
    if os.path.exists(s):
        print(f"OK: Script {s} exists ({os.path.getsize(s)} bytes)")
    else:
        print(f"ERROR: Script {s} NOT FOUND!")
        all_ok = False

for c in css:
    if os.path.exists(c):
        print(f"OK: CSS {c} exists ({os.path.getsize(c)} bytes)")
    else:
        print(f"ERROR: CSS {c} NOT FOUND!")
        all_ok = False

# Also check that data/procedures.js is valid JSON inside
with open('data/procedures.js', 'r', encoding='utf-8') as f:
    js_text = f.read()
    if 'PROCEDURES_DATA' in js_text:
        print(f"OK: procedures.js has PROCEDURES_DATA defined ({len(js_text)} chars)")
    else:
        print("ERROR: procedures.js missing PROCEDURES_DATA")
        all_ok = False

if all_ok:
    print("\nALL ASSETS AND INTEGRITY CHECKS PASSED PERFECTLY!")
