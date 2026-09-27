import os
import sys
import json

sys.stdout.reconfigure(encoding='utf-8')

with open('data/procedures.js', 'r', encoding='utf-8') as f:
    text = f.read()

prefix = 'const PROCEDURES_DATA = '
start = text.find(prefix) + len(prefix)
end = text.find(';\n\nif')
json_str = text[start:end].strip()
data = json.loads(json_str)

print(f"Total procedures in data/procedures.js: {len(data)}")
assert len(data) == 51, f"Expected 51, got {len(data)}"

all_images = []
categories = {}
difficulties = {}
types = {}

for p in data:
    cat = p.get('category', 'unknown')
    categories[cat] = categories.get(cat, 0) + 1
    
    diff = p.get('difficulty', 'unknown')
    difficulties[diff] = difficulties.get(diff, 0) + 1
    
    ptype = p.get('type', 'unknown')
    types[ptype] = types.get(ptype, 0) + 1

    figs = p.get('figures', [])
    assert len(figs) > 0, f"Procedure {p['id']} has no figures!"
    for fig in figs:
        path = fig.get('path')
        assert path and os.path.exists(path), f"Image missing: {path} in procedure {p['id']}"
        all_images.append(path)

print("\n--- Categories Breakdown ---")
for k, v in sorted(categories.items()):
    print(f"  {k:15s}: {v:2d} procedures")

print("\n--- Difficulties Breakdown ---")
for k, v in sorted(difficulties.items()):
    print(f"  {k:15s}: {v:2d} procedures")

print("\n--- Types Breakdown ---")
for k, v in sorted(types.items()):
    print(f"  {k:20s}: {v:2d} procedures")

print(f"\nTotal image references: {len(all_images)}")
print(f"Unique images referenced: {len(set(all_images))}")
print("\n>>> ALL 51 PROCEDURES & FIGURES ARE 100% VALIDATED AND PASS INTEGRITY CHECKS! <<<")
