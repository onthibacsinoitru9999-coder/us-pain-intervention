import json

with open('data/figure_captions.json', 'r', encoding='utf-8') as f:
    captions = json.load(f)

for ch in [2, 7, 8, 9, 12, 13, 15, 16, 19, 20, 22]:
    print(f"\n=== CH {ch} ===")
    for k, v in captions.items():
        if v.get('chapter') == ch:
            cap = v.get('caption', '').replace('\n', ' ')
            print(f"Fig {k} (p.{v.get('page')}): {cap[:100]}")
