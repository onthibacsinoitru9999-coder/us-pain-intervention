# Clinical Data Package for Deepak Sebastian MSK Screening
import sys
import os
import json
import re

# Load the exact 279 catalog figures
catalog_path = os.path.join(os.path.dirname(__file__), '..', '..', 'data', 'deepak_figures_catalog_exact.json')
with open(catalog_path, 'r', encoding='utf-8') as f:
    raw_figures = json.load(f)

figs_by_file = {f['file']: f for f in raw_figures}

def enrich_fig(file_path, role_type="general", custom_title=None, custom_caption_vi=None, custom_fig_number=None):
    if file_path not in figs_by_file:
        raise ValueError(f"Figure file not found: {file_path}")
    fig = figs_by_file[file_path]
    title = custom_title or fig.get('formal_title', '')
    title_clean = re.sub(r'^Figs?\b\.?\s*\d+[\.\-]\d+[A-Z\s,to]*:\s*', '', title, flags=re.I).strip()
    fig_num = re.search(r'Fig(?:ure)?s?\s*\.?\s*(\d+[\.\-]\d+[A-Z\s,to]*)', title, re.I)
    fig_number = custom_fig_number or (fig_num.group(1) if fig_num else f"Trang {fig['page']}")
    
    badge = {
        "exam": "🩺 Thao tác khám",
        "redflag": "🚨 Phim X-quang / Cờ đỏ",
        "visceral": "🫀 Chuyển đau tạng / Giải phẫu",
        "somatic": "🧬 Cơ sinh học & Diện khớp",
        "anatomy": "📐 Giải phẫu & Sờ nắn",
        "general": "📸 Hình ảnh lâm sàng"
    }.get(role_type, "📸 Hình ảnh lâm sàng")
    
    caption_vi = custom_caption_vi or f"{badge}: {title_clean}"

    return {
        "file": fig['file'],
        "page": fig['page'],
        "fig_number": fig_number,
        "caption_en": title,
        "caption_vi": caption_vi,
        "role_type": role_type,
        "width": fig['width'],
        "height": fig['height']
    }
