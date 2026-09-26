import fitz
import os
import sys
import json
import re

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

pdf_path = 'SEBASTIAN DEEPAK - Differential Screening of Regional Pain in Musculoskeletal.pdf'
doc = fitz.open(pdf_path)

output_base = os.path.join('assets', 'deepak_images')
os.makedirs(output_base, exist_ok=True)

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

total_extracted = 0
figure_catalog = []

for chap in chapters:
    ch_num = chap['ch']
    ch_name = chap['name']
    ch_dir = os.path.join(output_base, f"ch{ch_num:02d}_{ch_name}")
    os.makedirs(ch_dir, exist_ok=True)
    
    for pno in range(chap['start'] - 1, chap['end']):
        page = doc[pno]
        page_text = page.get_text('text')
        image_list = page.get_images(full=True)
        
        # Look for figure caption patterns in page text
        # e.g., "Fig. 4.1", "Fig. 4.1:", "Figure 4.1", "Figs 4.1A to C", etc.
        captions_found = re.findall(r'(Fig(?:ure)?s?\s*\.?\s*\d+[\.\-]\d+[^.\n\r]+(?:\.[^\n\r]+)?)', page_text, re.IGNORECASE)
        
        for idx, img in enumerate(image_list):
            xref = img[0]
            try:
                base_img = doc.extract_image(xref)
                w = base_img['width']
                h = base_img['height']
                img_bytes = base_img['image']
                ext = base_img['ext']
                
                # Filter out very tiny decorative icons / bars
                if w >= 150 and h >= 120 and len(img_bytes) > 10000:
                    filename = f"p{pno+1}_img{idx+1}.{ext}"
                    filepath = os.path.join(ch_dir, filename)
                    with open(filepath, 'wb') as f:
                        f.write(img_bytes)
                    total_extracted += 1
                    
                    rel_path = f"assets/deepak_images/ch{ch_num:02d}_{ch_name}/{filename}"
                    figure_catalog.append({
                        'chapter': ch_num,
                        'chapter_name': ch_name,
                        'page': pno + 1,
                        'file': rel_path,
                        'width': w,
                        'height': h,
                        'size_bytes': len(img_bytes),
                        'page_captions': captions_found[:3] if captions_found else []
                    })
            except Exception as e:
                pass

catalog_path = os.path.join('data', 'deepak_figures.json')
with open(catalog_path, 'w', encoding='utf-8') as f:
    json.dump(figure_catalog, f, ensure_ascii=False, indent=2)

print(f"Extraction complete! Total figures extracted: {total_extracted}")
print(f"Catalog saved to: {catalog_path}")
