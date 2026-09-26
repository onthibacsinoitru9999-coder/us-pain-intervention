import json

with open('data/figure_captions.json', 'r', encoding='utf-8') as f:
    captions = json.load(f)

def print_ch_captions(ch_num):
    print(f"\n================ CHAPTER {ch_num} CAPTIONS ================")
    for k, v in captions.items():
        if v.get('chapter') == ch_num:
            print(f"Fig {k} (p.{v.get('page')}): {v.get('caption')[:120]}...")

for ch in [2, 7, 8, 9, 12, 13, 15, 16, 19, 20, 22, 23, 24, 27]:
    print_ch_captions(ch)
