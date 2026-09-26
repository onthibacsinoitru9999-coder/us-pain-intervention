import fitz
import sys
import json

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

pdf_path = 'SEBASTIAN DEEPAK - Differential Screening of Regional Pain in Musculoskeletal.pdf'
doc = fitz.open(pdf_path)

chapters = [
    {'ch': 1, 'name': 'intro_thought_process', 'start': 16, 'end': 21},
    {'ch': 2, 'name': 'chemical_basis', 'start': 22, 'end': 78},
    {'ch': 3, 'name': 'drug_induced_pain', 'start': 79, 'end': 104},
    {'ch': 4, 'name': 'cervical_pain', 'start': 105, 'end': 187},
    {'ch': 5, 'name': 'thoracic_pain', 'start': 188, 'end': 217},
    {'ch': 6, 'name': 'lumbopelvic_pain', 'start': 218, 'end': 300},
    {'ch': 7, 'name': 'hip_pain', 'start': 301, 'end': 333},
    {'ch': 8, 'name': 'knee_ankle_foot_pain', 'start': 334, 'end': 416},
    {'ch': 9, 'name': 'shoulder_pain', 'start': 417, 'end': 466},
    {'ch': 10, 'name': 'elbow_wrist_hand_pain', 'start': 467, 'end': 512}
]

print(f"Total pages in doc: {len(doc)}")
for ch in chapters:
    img_count = 0
    pages_with_imgs = []
    for p in range(ch['start'] - 1, ch['end']):
        imgs = doc[p].get_images()
        if imgs:
            img_count += len(imgs)
            pages_with_imgs.append(p + 1)
    print(f"Ch {ch['ch']:02d}: {ch['name']:25s} (p.{ch['start']:3d}-{ch['end']:3d}) -> {img_count:3d} images across {len(pages_with_imgs)} pages")
