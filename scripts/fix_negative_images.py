# -*- coding: utf-8 -*-
"""
Fix Inverted / Negative Images in assets/deepak_images/
Converts all DeviceN(1,DeviceCMYK,Black) and CMYK images to standard positive RGB format.
"""
import sys
import os
import json
import fitz
from PIL import Image
import numpy as np

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

pdf_path = 'SEBASTIAN DEEPAK - Differential Screening of Regional Pain in Musculoskeletal.pdf'
doc = fitz.open(pdf_path)

catalog_path = 'data/deepak_figures.json'
with open(catalog_path, 'r', encoding='utf-8') as f:
    figures = json.load(f)

print(f"Loaded {len(figures)} figures from {catalog_path}")

processed_count = 0
converted_count = 0

for fig in figures:
    pno = fig['page'] - 1
    page = doc[pno]
    imgs = page.get_images(full=True)
    
    for img in imgs:
        xref = img[0]
        b = doc.extract_image(xref)
        if b['width'] == fig['width'] and b['height'] == fig['height']:
            pix = fitz.Pixmap(doc, xref)
            
            # Check if conversion to RGB is needed
            needs_conversion = False
            if pix.colorspace and 'DeviceN' in str(pix.colorspace):
                needs_conversion = True
            elif pix.n >= 4 or (pix.colorspace and pix.colorspace.name == 'DeviceCMYK'):
                needs_conversion = True
            elif pix.colorspace and pix.colorspace.name != 'DeviceRGB':
                needs_conversion = True
            elif pix.alpha:
                needs_conversion = True
                
            if needs_conversion:
                rgb_pix = fitz.Pixmap(fitz.csRGB, pix)
                converted_count += 1
            else:
                rgb_pix = pix
                
            # Create PIL image from RGB bytes
            pil_img = Image.frombytes('RGB', (rgb_pix.width, rgb_pix.height), rgb_pix.samples)
            
            # Target file path
            target_path = fig['file']
            os.makedirs(os.path.dirname(target_path), exist_ok=True)
            
            # Save properly
            if target_path.lower().endswith('.png'):
                pil_img.save(target_path, format='PNG')
            else:
                pil_img.save(target_path, format='JPEG', quality=95)
                
            processed_count += 1
            break

print(f"Completed! Processed: {processed_count}/{len(figures)}, Converted to positive RGB: {converted_count}")

# Verify after conversion
print("\n--- Verifying all images after conversion ---")
negative_candidates = []
for fig in figures:
    target_path = fig['file']
    try:
        im = Image.open(target_path).convert('L')
        arr = np.array(im)
        corners = [arr[0,0], arr[0,-1], arr[-1,0], arr[-1,-1]]
        c_mean = float(np.mean(corners))
        overall_mean = float(np.mean(arr))
        # If corner mean is very dark and overall is very dark, check
        if c_mean < 40 and overall_mean < 40:
            negative_candidates.append((target_path, c_mean, overall_mean))
    except Exception as e:
        print(f"Error checking {target_path}: {e}")

print(f"Remaining suspicious dark images: {len(negative_candidates)}")
for p, c, m in negative_candidates:
    print(f"  {p}: corners={c:.1f}, mean={m:.1f}")
