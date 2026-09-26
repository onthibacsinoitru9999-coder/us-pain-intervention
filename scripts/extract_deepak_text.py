import fitz
import json
import os
import sys
import re

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

pdf_path = 'SEBASTIAN DEEPAK - Differential Screening of Regional Pain in Musculoskeletal.pdf'
doc = fitz.open(pdf_path)

chapters = [
    {
        'id': 'ch01',
        'number': 1,
        'title': 'Introduction and Thought Process in Regional Pain',
        'title_vi': 'Giới thiệu & Tư duy Khám Sàng lọc Chẩn đoán Phân biệt Đau Vùng',
        'start_page': 16,
        'end_page': 21,
        'category': 'Foundations'
    },
    {
        'id': 'ch02',
        'number': 2,
        'title': 'Chemical Basis of the Human Body with Relevance to Regional Musculoskeletal Pain',
        'title_vi': 'Cơ sở Hóa sinh & Xét nghiệm Cận lâm sàng trong Đau Cơ Xương Khớp',
        'start_page': 22,
        'end_page': 78,
        'category': 'Diagnostics'
    },
    {
        'id': 'ch03',
        'number': 3,
        'title': 'Drug-induced Regional Pain',
        'title_vi': 'Đau Cơ Xương Khớp & Bệnh Thần kinh do Thuốc (Drug-Induced Pain)',
        'start_page': 79,
        'end_page': 104,
        'category': 'Pharmacology'
    },
    {
        'id': 'ch04',
        'number': 4,
        'title': 'Cervical Pain',
        'title_vi': 'Sàng lọc & Chẩn đoán Phân biệt Đau Cột sống Cổ',
        'start_page': 105,
        'end_page': 187,
        'category': 'Spine'
    },
    {
        'id': 'ch05',
        'number': 5,
        'title': 'Thoracic Pain',
        'title_vi': 'Sàng lọc & Chẩn đoán Phân biệt Đau Cột sống Ngực & Thành Ngực',
        'start_page': 188,
        'end_page': 217,
        'category': 'Spine'
    },
    {
        'id': 'ch06',
        'number': 6,
        'title': 'Lumbopelvic Pain',
        'title_vi': 'Sàng lọc & Chẩn đoán Phân biệt Đau Thắt lưng - Khung Chậu',
        'start_page': 218,
        'end_page': 300,
        'category': 'Spine & Pelvis'
    },
    {
        'id': 'ch07',
        'number': 7,
        'title': 'Hip Pain',
        'title_vi': 'Sàng lọc & Chẩn đoán Phân biệt Đau Khớp Háng & Vùng Bẹn',
        'start_page': 301,
        'end_page': 333,
        'category': 'Lower Limb'
    },
    {
        'id': 'ch08',
        'number': 8,
        'title': 'Knee, Ankle and Foot Pain',
        'title_vi': 'Sàng lọc & Chẩn đoán Phân biệt Đau Khớp Gối, Cổ chân & Bàn chân',
        'start_page': 334,
        'end_page': 416,
        'category': 'Lower Limb'
    },
    {
        'id': 'ch09',
        'number': 9,
        'title': 'Shoulder Pain',
        'title_vi': 'Sàng lọc & Chẩn đoán Phân biệt Đau Khớp Vai & Đai Vai',
        'start_page': 417,
        'end_page': 466,
        'category': 'Upper Limb'
    },
    {
        'id': 'ch10',
        'number': 10,
        'title': 'Elbow, Wrist and Hand Pain',
        'title_vi': 'Sàng lọc & Chẩn đoán Phân biệt Đau Khớp Khuỷu, Cổ tay & Bàn tay',
        'start_page': 467,
        'end_page': 512,
        'category': 'Upper Limb'
    }
]

# Extract chapter overview, key sections, red flags keywords
deepak_db = []

for ch in chapters:
    text_content = []
    red_flags = []
    tests = []
    
    for p in range(ch['start_page'] - 1, ch['end_page']):
        txt = doc[p].get_text('text')
        text_content.append(txt)
        
        # Simple extraction of red flags / examination sections
        rf_matches = re.findall(r'(?:Red Flag|Warning|Malignancy|Infection|Fracture|Myelopathy|Cauda equina|Vascular)[^\.\n\r]+', txt, re.IGNORECASE)
        for rf in rf_matches:
            rf_clean = rf.strip()
            if len(rf_clean) > 10 and rf_clean not in red_flags:
                red_flags.append(rf_clean)
                
        # Examination tests
        test_matches = re.findall(r'(?:Test|Sign|Maneuver|Exam)\s*:\s*[^\.\n\r]+', txt, re.IGNORECASE)
        for t in test_matches:
            t_clean = t.strip()
            if t_clean not in tests:
                tests.append(t_clean)

    full_text = "\n".join(text_content)
    
    deepak_db.append({
        'id': ch['id'],
        'number': ch['number'],
        'title': ch['title'],
        'title_vi': ch['title_vi'],
        'category': ch['category'],
        'pages': f"{ch['start_page']}-{ch['end_page']}",
        'page_count': ch['end_page'] - ch['start_page'] + 1,
        'word_count': len(full_text.split()),
        'sample_red_flags': red_flags[:10],
        'sample_tests': tests[:10]
    })

output_file = os.path.join('data', 'deepak_chapters_meta.json')
with open(output_file, 'w', encoding='utf-8') as f:
    json.dump(deepak_db, f, ensure_ascii=False, indent=2)

print(f"Extraction metadata saved to {output_file}")
for c in deepak_db:
    print(f"Ch {c['number']:02d}: {c['title']} | Pages {c['pages']} | Words: {c['word_count']}")
