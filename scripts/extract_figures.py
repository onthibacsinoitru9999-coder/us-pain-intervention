import fitz
import os
import sys

# Ensure UTF-8 output
if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

pdf_path = 'Philip Peng, Roderick Finlayson, Sang Hoon Lee, Anuj Bhatia - Ultrasound for Interventional Pain Management_ An Illustrated Procedural Guide (2020, Springer International Publishing) - libgen.lc (1).pdf'
doc = fitz.open(pdf_path)

output_base = 'assets/images'
os.makedirs(output_base, exist_ok=True)

chapters = [
    {'ch': 1, 'name': 'physics', 'start': 13, 'end': 43},
    {'ch': 2, 'name': 'occipital', 'start': 44, 'end': 53},
    {'ch': 3, 'name': 'cervical_sympathetic', 'start': 54, 'end': 62},
    {'ch': 4, 'name': 'suprascapular', 'start': 63, 'end': 70},
    {'ch': 5, 'name': 'intercostal', 'start': 71, 'end': 83},
    {'ch': 6, 'name': 'ilioinguinal', 'start': 84, 'end': 91},
    {'ch': 7, 'name': 'genitofemoral', 'start': 92, 'end': 101},
    {'ch': 8, 'name': 'pelvic_muscles', 'start': 102, 'end': 116},
    {'ch': 9, 'name': 'pudendal', 'start': 117, 'end': 127},
    {'ch': 10, 'name': 'lfn', 'start': 128, 'end': 136},
    {'ch': 11, 'name': 'esp', 'start': 137, 'end': 154},
    {'ch': 12, 'name': 'cervical_root', 'start': 155, 'end': 162},
    {'ch': 13, 'name': 'cervical_medial_branch', 'start': 163, 'end': 173},
    {'ch': 14, 'name': 'lumbar_medial_branch', 'start': 174, 'end': 188},
    {'ch': 15, 'name': 'sacroiliac_joint', 'start': 189, 'end': 194},
    {'ch': 16, 'name': 'sacroiliac_rfa', 'start': 195, 'end': 201},
    {'ch': 17, 'name': 'caudal_epidural', 'start': 202, 'end': 208},
    {'ch': 18, 'name': 'msk_principles', 'start': 209, 'end': 214},
    {'ch': 19, 'name': 'shoulder', 'start': 215, 'end': 233},
    {'ch': 20, 'name': 'elbow', 'start': 234, 'end': 247},
    {'ch': 21, 'name': 'wrist_hand', 'start': 248, 'end': 267},
    {'ch': 22, 'name': 'hip', 'start': 268, 'end': 282},
    {'ch': 23, 'name': 'knee', 'start': 283, 'end': 300},
    {'ch': 24, 'name': 'ankle_foot', 'start': 301, 'end': 316},
    {'ch': 25, 'name': 'prp', 'start': 317, 'end': 324},
    {'ch': 26, 'name': 'calcific_tendinitis', 'start': 325, 'end': 333},
    {'ch': 27, 'name': 'hip_knee_denervation', 'start': 334, 'end': 354}
]

total_extracted = 0
extracted_meta = {}

for chap in chapters:
    ch_num = chap['ch']
    ch_name = chap['name']
    ch_dir = os.path.join(output_base, f"ch{ch_num}_{ch_name}")
    os.makedirs(ch_dir, exist_ok=True)
    
    extracted_meta[ch_num] = []
    
    for pno in range(chap['start'] - 1, chap['end']):
        page = doc[pno]
        image_list = page.get_images(full=True)
        
        for idx, img in enumerate(image_list):
            xref = img[0]
            try:
                base_img = doc.extract_image(xref)
                w = base_img['width']
                h = base_img['height']
                img_bytes = base_img['image']
                ext = base_img['ext']
                
                # Filter out small icons or narrow bands
                if w >= 250 and h >= 180 and len(img_bytes) > 25000:
                    filename = f"p{pno+1}_img{idx+1}.{ext}"
                    filepath = os.path.join(ch_dir, filename)
                    with open(filepath, 'wb') as f:
                        f.write(img_bytes)
                    total_extracted += 1
                    rel_path = f"assets/images/ch{ch_num}_{ch_name}/{filename}"
                    extracted_meta[ch_num].append({
                        'page': pno + 1,
                        'file': rel_path,
                        'width': w,
                        'height': h
                    })
            except Exception as e:
                pass

print(f"Extraction complete! Total meaningful figures extracted: {total_extracted}")
