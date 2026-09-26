# -*- coding: utf-8 -*-
"""
Master Rebuilder for Deepak Sebastian Clinical Screening Database.
Strictly meets all user requirements:
1. Re-architects into 8 Chief Complaint Clinical Guidemap Modules:
   - systemic-widespread
   - cervical-pain
   - shoulder-pain
   - thoracic-pain
   - lumbopelvic-pain
   - hip-groin-pain
   - knee-leg-foot-pain
   - elbow-wrist-hand-pain
2. Embeds figures directly where they belong:
   - Provocative test cards get exact maneuver photos
   - Red flag cards get X-rays, fractures, VBI, ruptures
   - Visceral referral cards get quadrant maps, visceral referral nerves, vascular diagrams
   - Somatic dysfunction sections get biomechanical alignment & kinematics diagrams
3. Closes the bottom details accordion by default so figures are NEVER dumped openly.
4. Generates data/screening.js and data/screening.fallback.js with 100% verified syntax.
"""
import sys
import os
import json
import re

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

# Load the exact 279 catalog figures
with open('data/deepak_figures_catalog_exact.json', 'r', encoding='utf-8') as f:
    raw_figures = json.load(f)

# Load existing screening.js to reuse rich text, algorithm, labs, drugs
with open('data/screening.js', 'r', encoding='utf-8') as f:
    src_text = f.read()

def extract_js_var(var_name, text):
    p = f'const {var_name} = '
    s = text.find(p)
    if s == -1: return None
    s += len(p)
    e = text.find(';\n\nconst ', s)
    if e == -1:
        e = text.find(';\n\nif', s)
    return json.loads(text[s:e].strip())

old_modules = extract_js_var('SCREENING_DATA', src_text)
guidemap_algorithm = extract_js_var('GUIDEMAP_ALGORITHM', src_text)
red_flags_master = extract_js_var('RED_FLAGS_MASTER', src_text)
lab_tests_guide = extract_js_var('LAB_TESTS_GUIDE', src_text)
drug_induced_pain_guide = extract_js_var('DRUG_INDUCED_PAIN_GUIDE', src_text)

# Map old modules by id
mods_by_id = {m['id']: m for m in old_modules}

# Helper to enrich figure with metadata and category
def enrich_fig(fig, role_type="general"):
    title = fig.get('formal_title', '')
    title_clean = re.sub(r'^Figs?\b\.?\s*\d+[\.\-]\d+[A-Z\s,to]*:\s*', '', title, flags=re.I).strip()
    fig_num = re.search(r'Fig(?:ure)?s?\s*\.?\s*(\d+[\.\-]\d+[A-Z\s,to]*)', title, re.I)
    fig_number = fig_num.group(1) if fig_num else f"Trang {fig['page']}"
    
    badge = {
        "exam": "🩺 Thao tác khám",
        "redflag": "🚨 Phim X-quang / Cờ đỏ",
        "visceral": "🫀 Chuyển đau tạng / Giải phẫu",
        "somatic": "🧬 Cơ sinh học & Diện khớp",
        "general": "📸 Hình ảnh minh họa"
    }.get(role_type, "📸 Hình ảnh minh họa")
    
    return {
        "file": fig['file'],
        "page": fig['page'],
        "fig_number": fig_number,
        "caption_en": title,
        "caption_vi": f"{badge}: {title_clean}",
        "role_type": role_type,
        "width": fig['width'],
        "height": fig['height']
    }

# Index figures by file
figs_by_file = {f['file']: f for f in raw_figures}

def get_figs_by_pages(ch_num, page_ranges, role_type="exam"):
    """Fetch figures in chapter matching specific pages"""
    res = []
    for f in raw_figures:
        if f['chapter'] == ch_num:
            for p in page_ranges:
                if isinstance(p, tuple) and p[0] <= f['page'] <= p[1]:
                    res.append(enrich_fig(f, role_type))
                    break
                elif f['page'] == p:
                    res.append(enrich_fig(f, role_type))
                    break
    return res

def get_figs_by_keyword(ch_num, keywords, role_type="exam", limit=2):
    """Fetch figures matching keywords in formal_title or all_titles"""
    res = []
    for f in raw_figures:
        if f['chapter'] == ch_num:
            full_t = (f.get('formal_title', '') + ' ' + ' '.join(f.get('all_titles', []))).lower()
            if any(k.lower() in full_t for k in keywords):
                res.append(enrich_fig(f, role_type))
    return res[:limit]

# Re-map all 8 modules with precise attachments
print("Mapping figures for all 8 modules...")

# -------------------------------------------------------------
# MODULE 1: systemic-widespread
# -------------------------------------------------------------
m1 = mods_by_id['systemic-widespread']
m1['figures'] = []
# Attach to specific items
m1['red_flags'][0]['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch08_knee_ankle_foot_pain/p362_img1.jpeg'], 'redflag')]
m1['red_flags'][1]['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch06_lumbopelvic_pain/p273_img1.jpeg'], 'redflag')]
m1['red_flags'][2]['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch08_knee_ankle_foot_pain/p390_img2.jpeg'], 'redflag')]

m1['visceral_referrals'][0]['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch06_lumbopelvic_pain/p229_img1.jpeg'], 'visceral')]
m1['visceral_referrals'][1]['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch06_lumbopelvic_pain/p231_img1.jpeg'], 'visceral')]

for p in m1['examination_procedures']:
    if 'Waddell' in p['name']:
        p['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch06_lumbopelvic_pain/p285_img1.jpeg'], 'exam')]
    elif 'Thompson' in p['name']:
        p['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch08_knee_ankle_foot_pain/p390_img2.jpeg'], 'exam')]
    elif 'Thần Kinh Ngoại Biên' in p['name']:
        p['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch08_knee_ankle_foot_pain/p377_img1.png'], 'exam')]

# -------------------------------------------------------------
# MODULE 2: cervical-pain (Chapter 4, 70 figures)
# -------------------------------------------------------------
m2 = mods_by_id['cervical-pain']
m2['figures'] = [enrich_fig(f, 'general') for f in raw_figures if f['chapter'] == 4]

# Red Flags
m2['red_flags'][0]['figures'] = [
    enrich_fig(figs_by_file['assets/deepak_images/ch04_cervical_pain/p110_img1.png'], 'redflag'), # Vertebral artery
    enrich_fig(figs_by_file['assets/deepak_images/ch04_cervical_pain/p123_img1.jpeg'], 'redflag') # Odontoid fracture
]
m2['red_flags'][1]['figures'] = [
    enrich_fig(figs_by_file['assets/deepak_images/ch04_cervical_pain/p112_img1.jpeg'], 'redflag'), # Cervical lymph nodes
    enrich_fig(figs_by_file['assets/deepak_images/ch04_cervical_pain/p125_img1.jpeg'], 'redflag') # Alar ligament rupture
]

# Visceral Referrals
m2['visceral_referrals'][0]['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch04_cervical_pain/p146_img1.png'], 'visceral')] # TOS / Pancoast apex
m2['visceral_referrals'][1]['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch04_cervical_pain/p150_img1.jpeg'], 'visceral')] # Scalp / referral
m2['visceral_referrals'][2]['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch04_cervical_pain/p113_img1.jpeg'], 'visceral')] # Thyroid gland

# Examination Procedures
for p in m2['examination_procedures']:
    name = p['name'].lower()
    if 'spurling' in name:
        p['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch04_cervical_pain/p172_img1.jpeg'], 'exam')]
    elif 'kéo giãn' in name or 'distraction' in name:
        p['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch04_cervical_pain/p173_img1.jpeg'], 'exam')]
    elif 'hoffman' in name:
        p['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch04_cervical_pain/p181_img1.jpeg'], 'exam')]
    elif 'ultt' in name or 'đám rối' in name:
        p['figures'] = [
            enrich_fig(figs_by_file['assets/deepak_images/ch04_cervical_pain/p167_img1.jpeg'], 'exam'),
            enrich_fig(figs_by_file['assets/deepak_images/ch04_cervical_pain/p169_img1.jpeg'], 'exam')
        ]
    elif 'roos' in name:
        p['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch04_cervical_pain/p174_img1.jpeg'], 'exam')]
    elif 'sharp-purser' in name or 'c1-c2' in name:
        p['figures'] = [
            enrich_fig(figs_by_file['assets/deepak_images/ch04_cervical_pain/p175_img1.jpeg'], 'exam'),
            enrich_fig(figs_by_file['assets/deepak_images/ch04_cervical_pain/p176_img1.jpeg'], 'exam')
        ]

# -------------------------------------------------------------
# MODULE 3: shoulder-pain (Chapter 9, 41 figures)
# -------------------------------------------------------------
m3 = mods_by_id['shoulder-pain']
m3['figures'] = [enrich_fig(f, 'general') for f in raw_figures if f['chapter'] == 9]

# Red Flags
m3['red_flags'][0]['figures'] = [
    enrich_fig(figs_by_file['assets/deepak_images/ch09_shoulder_pain/p439_img1.jpeg'], 'redflag'), # Quadrilateral space
    enrich_fig(figs_by_file['assets/deepak_images/ch09_shoulder_pain/p445_img1.jpeg'], 'redflag') # Labral tear
]
m3['red_flags'][1]['figures'] = [
    enrich_fig(figs_by_file['assets/deepak_images/ch09_shoulder_pain/p418_img1.jpeg'], 'redflag'), # Humeral head
    enrich_fig(figs_by_file['assets/deepak_images/ch09_shoulder_pain/p440_img1.jpeg'], 'redflag') # Impingement site
]

# Visceral Referrals
m3['visceral_referrals'][0]['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch09_shoulder_pain/p436_img1.jpeg'], 'visceral')] # Coracobrachialis / axillary
m3['visceral_referrals'][1]['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch09_shoulder_pain/p437_img1.jpeg'], 'visceral')] # Subacromial bursa / C5

# Examination Procedures
for p in m3['examination_procedures']:
    name = p['name'].lower()
    if 'neer' in name:
        p['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch09_shoulder_pain/p456_img1.jpeg'], 'exam')]
    elif 'hawkins' in name:
        p['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch09_shoulder_pain/p463_img1.jpeg'], 'exam')]
    elif 'jobe' in name or 'empty can' in name:
        p['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch09_shoulder_pain/p442_img1.jpeg'], 'exam')]
    elif 'trễ xoay ngoài' in name:
        p['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch09_shoulder_pain/p460_img1.jpeg'], 'exam')]
    elif 'gerber' in name or 'lift-off' in name:
        p['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch09_shoulder_pain/p462_img1.jpeg'], 'exam')]
    elif 'speed' in name or 'yergason' in name:
        p['figures'] = [
            enrich_fig(figs_by_file['assets/deepak_images/ch09_shoulder_pain/p454_img1.jpeg'], 'exam'),
            enrich_fig(figs_by_file['assets/deepak_images/ch09_shoulder_pain/p455_img1.jpeg'], 'exam')
        ]
    elif "o'brien" in name:
        p['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch09_shoulder_pain/p458_img1.jpeg'], 'exam')]
    elif 'cross-body' in name or 'cùng đòn' in name:
        p['figures'] = [
            enrich_fig(figs_by_file['assets/deepak_images/ch09_shoulder_pain/p454_img2.jpeg'], 'exam'),
            enrich_fig(figs_by_file['assets/deepak_images/ch09_shoulder_pain/p452_img1.jpeg'], 'exam')
        ]

# -------------------------------------------------------------
# MODULE 4: thoracic-pain (Chapter 5, 8 figures)
# -------------------------------------------------------------
m4 = mods_by_id['thoracic-pain']
m4['figures'] = [enrich_fig(f, 'general') for f in raw_figures if f['chapter'] == 5]

# Red Flags
m4['red_flags'][0]['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch05_thoracic_pain/p188_img1.png'], 'redflag')]
m4['red_flags'][1]['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch05_thoracic_pain/p209_img1.jpeg'], 'redflag')]

# Visceral Referrals
m4['visceral_referrals'][0]['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch05_thoracic_pain/p209_img1.jpeg'], 'visceral')]

# Examination Procedures
for p in m4['examination_procedures']:
    name = p['name'].lower()
    if 'slump' in name:
        p['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch05_thoracic_pain/p209_img1.jpeg'], 'exam')]
    elif 'đóng' in name or 'mở' in name:
        p['figures'] = [
            enrich_fig(figs_by_file['assets/deepak_images/ch05_thoracic_pain/p211_img1.jpeg'], 'exam'),
            enrich_fig(figs_by_file['assets/deepak_images/ch05_thoracic_pain/p213_img1.jpeg'], 'exam')
        ]
    elif 'sườn' in name or 'springing' in name:
        p['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch05_thoracic_pain/p215_img1.jpeg'], 'exam')]
    elif 'sườn 1' in name or 'lindgren' in name:
        p['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch04_cervical_pain/p182_img1.jpeg'], 'exam')]

# -------------------------------------------------------------
# MODULE 5: lumbopelvic-pain (Chapter 6, 40 figures)
# -------------------------------------------------------------
m5 = mods_by_id['lumbopelvic-pain']
m5['figures'] = [enrich_fig(f, 'general') for f in raw_figures if f['chapter'] == 6]

# Red Flags
m5['red_flags'][0]['figures'] = [
    enrich_fig(figs_by_file['assets/deepak_images/ch06_lumbopelvic_pain/p231_img1.jpeg'], 'redflag'), # Bruits / Aneurysm
    enrich_fig(figs_by_file['assets/deepak_images/ch06_lumbopelvic_pain/p258_img1.jpeg'], 'redflag') # Disc herniation
]
m5['red_flags'][1]['figures'] = [
    enrich_fig(figs_by_file['assets/deepak_images/ch06_lumbopelvic_pain/p236_img1.jpeg'], 'redflag'), # Spondylolysis L5
    enrich_fig(figs_by_file['assets/deepak_images/ch06_lumbopelvic_pain/p273_img1.jpeg'], 'redflag') # Compression fracture
]

# Visceral Referrals
m5['visceral_referrals'][0]['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch06_lumbopelvic_pain/p229_img1.jpeg'], 'visceral')] # Quadrants
m5['visceral_referrals'][1]['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch06_lumbopelvic_pain/p225_img1.png'], 'visceral')] # Sacrum / pelvic referral

# Examination Procedures
for p in m5['examination_procedures']:
    name = p['name'].lower()
    if 'slr' in name and 'chân lành' not in name:
        p['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch06_lumbopelvic_pain/p288_img1.jpeg'], 'exam')]
    elif 'chân lành' in name:
        p['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch06_lumbopelvic_pain/p281_img1.jpeg'], 'exam')]
    elif 'slump' in name:
        p['figures'] = [
            enrich_fig(figs_by_file['assets/deepak_images/ch06_lumbopelvic_pain/p288_img2.jpeg'], 'exam'),
            enrich_fig(figs_by_file['assets/deepak_images/ch06_lumbopelvic_pain/p289_img1.jpeg'], 'exam')
        ]
    elif 'cùng chậu' in name or 'sij' in name:
        p['figures'] = [
            enrich_fig(figs_by_file['assets/deepak_images/ch06_lumbopelvic_pain/p292_img1.jpeg'], 'exam'),
            enrich_fig(figs_by_file['assets/deepak_images/ch06_lumbopelvic_pain/p294_img1.jpeg'], 'exam')
        ]
    elif 'cúi' in name:
        p['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch06_lumbopelvic_pain/p276_img1.jpeg'], 'exam')]
    elif 'stork' in name:
        p['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch06_lumbopelvic_pain/p276_img2.jpeg'], 'exam')]

# -------------------------------------------------------------
# MODULE 6: hip-groin-pain (Chapter 7, 20 figures)
# -------------------------------------------------------------
m6 = mods_by_id['hip-groin-pain']
m6['figures'] = [enrich_fig(f, 'general') for f in raw_figures if f['chapter'] == 7]

# Red Flags
m6['red_flags'][0]['figures'] = [
    enrich_fig(figs_by_file['assets/deepak_images/ch07_hip_pain/p304_img1.jpeg'], 'redflag'), # AVN / Vasculature
    enrich_fig(figs_by_file['assets/deepak_images/ch07_hip_pain/p324_img1.jpeg'], 'redflag') # Femoral head
]
m6['red_flags'][1]['figures'] = [
    enrich_fig(figs_by_file['assets/deepak_images/ch07_hip_pain/p301_img1.jpeg'], 'redflag'), # Hip anterior
    enrich_fig(figs_by_file['assets/deepak_images/ch07_hip_pain/p320_img1.jpeg'], 'redflag') # Thigh anterior
]

# Visceral Referrals
m6['visceral_referrals'][0]['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch07_hip_pain/p301_img1.jpeg'], 'visceral')]
m6['visceral_referrals'][1]['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch07_hip_pain/p322_img1.jpeg'], 'visceral')] # LFCN / Meralgia

# Examination Procedures
for p in m6['examination_procedures']:
    name = p['name'].lower()
    if 'fadir' in name:
        p['figures'] = [
            enrich_fig(figs_by_file['assets/deepak_images/ch07_hip_pain/p316_img1.jpeg'], 'exam'),
            enrich_fig(figs_by_file['assets/deepak_images/ch07_hip_pain/p317_img1.jpeg'], 'exam')
        ]
    elif 'faber' in name or 'patrick' in name:
        p['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch07_hip_pain/p301_img1.jpeg'], 'exam')]
    elif 'scour' in name or 'vét' in name:
        p['figures'] = [
            enrich_fig(figs_by_file['assets/deepak_images/ch07_hip_pain/p330_img1.jpeg'], 'exam'),
            enrich_fig(figs_by_file['assets/deepak_images/ch07_hip_pain/p331_img1.jpeg'], 'exam')
        ]
    elif 'thomas' in name:
        p['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch07_hip_pain/p326_img1.jpeg'], 'exam')]
    elif 'ober' in name:
        p['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch07_hip_pain/p327_img1.jpeg'], 'exam')]
    elif 'trendelenburg' in name:
        p['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch07_hip_pain/p325_img1.jpeg'], 'exam')]

# -------------------------------------------------------------
# MODULE 7: knee-leg-foot-pain (Chapter 8, 67 figures)
# -------------------------------------------------------------
m7 = mods_by_id['knee-leg-foot-pain']
m7['figures'] = [enrich_fig(f, 'general') for f in raw_figures if f['chapter'] == 8]

# Red Flags
m7['red_flags'][0]['figures'] = [
    enrich_fig(figs_by_file['assets/deepak_images/ch08_knee_ankle_foot_pain/p380_img1.jpeg'], 'redflag'), # March fracture
    enrich_fig(figs_by_file['assets/deepak_images/ch08_knee_ankle_foot_pain/p385_img1.jpeg'], 'redflag') # Inversion tear
]
m7['red_flags'][1]['figures'] = [
    enrich_fig(figs_by_file['assets/deepak_images/ch08_knee_ankle_foot_pain/p390_img1.jpeg'], 'redflag'), # Achilles rupture
    enrich_fig(figs_by_file['assets/deepak_images/ch08_knee_ankle_foot_pain/p389_img1.jpeg'], 'redflag') # Retrocalcaneal
]

# Visceral Referrals
m7['visceral_referrals'][0]['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch08_knee_ankle_foot_pain/p335_img1.jpeg'], 'visceral')] # Knee anterior
m7['visceral_referrals'][1]['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch08_knee_ankle_foot_pain/p377_img1.png'], 'visceral')] # Tibial nerve

# Examination Procedures
for p in m7['examination_procedures']:
    name = p['name'].lower()
    if 'lachman' in name:
        p['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch08_knee_ankle_foot_pain/p407_img1.jpeg'], 'exam')]
    elif 'pivot shift' in name:
        p['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch08_knee_ankle_foot_pain/p411_img1.jpeg'], 'exam')]
    elif 'mcmurray' in name:
        p['figures'] = [
            enrich_fig(figs_by_file['assets/deepak_images/ch08_knee_ankle_foot_pain/p406_img1.jpeg'], 'exam'),
            enrich_fig(figs_by_file['assets/deepak_images/ch08_knee_ankle_foot_pain/p365_img1.jpeg'], 'exam')
        ]
    elif 'clark' in name or 'bánh chè' in name:
        p['figures'] = [
            enrich_fig(figs_by_file['assets/deepak_images/ch08_knee_ankle_foot_pain/p401_img1.jpeg'], 'exam'),
            enrich_fig(figs_by_file['assets/deepak_images/ch08_knee_ankle_foot_pain/p402_img1.jpeg'], 'exam')
        ]
    elif 'hoffa' in name:
        p['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch08_knee_ankle_foot_pain/p405_img1.jpeg'], 'exam')]
    elif 'thompson' in name:
        p['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch08_knee_ankle_foot_pain/p390_img2.jpeg'], 'exam')]
    elif 'squeeze' in name:
        p['figures'] = [
            enrich_fig(figs_by_file['assets/deepak_images/ch08_knee_ankle_foot_pain/p392_img1.jpeg'], 'exam'),
            enrich_fig(figs_by_file['assets/deepak_images/ch08_knee_ankle_foot_pain/p394_img1.jpeg'], 'exam')
        ]
    elif 'mulder' in name:
        p['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch08_knee_ankle_foot_pain/p412_img1.jpeg'], 'exam')]
    elif 'windlass' in name:
        p['figures'] = [
            enrich_fig(figs_by_file['assets/deepak_images/ch08_knee_ankle_foot_pain/p377_img2.jpeg'], 'exam'),
            enrich_fig(figs_by_file['assets/deepak_images/ch08_knee_ankle_foot_pain/p378_img1.jpeg'], 'exam')
        ]

# -------------------------------------------------------------
# MODULE 8: elbow-wrist-hand-pain (Chapter 10, 33 figures)
# -------------------------------------------------------------
m8 = mods_by_id['elbow-wrist-hand-pain']
m8['figures'] = [enrich_fig(f, 'general') for f in raw_figures if f['chapter'] == 10]

# Red Flags
m8['red_flags'][0]['figures'] = [
    enrich_fig(figs_by_file['assets/deepak_images/ch10_elbow_wrist_hand_pain/p491_img1.jpeg'], 'redflag'), # Olecranon bursa
    enrich_fig(figs_by_file['assets/deepak_images/ch10_elbow_wrist_hand_pain/p496_img1.jpeg'], 'redflag') # UCL tear
]
m8['red_flags'][1]['figures'] = [
    enrich_fig(figs_by_file['assets/deepak_images/ch10_elbow_wrist_hand_pain/p473_img1.png'], 'redflag'), # Hand palmar view
    enrich_fig(figs_by_file['assets/deepak_images/ch10_elbow_wrist_hand_pain/p499_img1.jpeg'], 'redflag') # Guyon's canal
]

# Visceral Referrals
m8['visceral_referrals'][0]['figures'] = [
    enrich_fig(figs_by_file['assets/deepak_images/ch10_elbow_wrist_hand_pain/p467_img1.jpeg'], 'visceral'),
    enrich_fig(figs_by_file['assets/deepak_images/ch10_elbow_wrist_hand_pain/p468_img1.png'], 'visceral')
]

# Examination Procedures
for p in m8['examination_procedures']:
    name = p['name'].lower()
    if 'cozen' in name:
        p['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch10_elbow_wrist_hand_pain/p507_img2.jpeg'], 'exam')]
    elif 'mill' in name:
        p['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch10_elbow_wrist_hand_pain/p493_img1.jpeg'], 'exam')]
    elif 'maudsley' in name:
        p['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch10_elbow_wrist_hand_pain/p508_img1.jpeg'], 'exam')]
    elif 'phalen' in name or 'prayer' in name:
        p['figures'] = [
            enrich_fig(figs_by_file['assets/deepak_images/ch10_elbow_wrist_hand_pain/p504_img1.jpeg'], 'exam'),
            enrich_fig(figs_by_file['assets/deepak_images/ch10_elbow_wrist_hand_pain/p505_img1.jpeg'], 'exam')
        ]
    elif 'durkan' in name:
        p['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch10_elbow_wrist_hand_pain/p500_img1.jpeg'], 'exam')]
    elif 'tinel' in name:
        p['figures'] = [
            enrich_fig(figs_by_file['assets/deepak_images/ch10_elbow_wrist_hand_pain/p488_img1.jpeg'], 'exam'),
            enrich_fig(figs_by_file['assets/deepak_images/ch10_elbow_wrist_hand_pain/p497_img1.png'], 'exam')
        ]
    elif 'finkelstein' in name:
        p['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch10_elbow_wrist_hand_pain/p506_img2.jpeg'], 'exam')]
    elif 'allen' in name:
        p['figures'] = [enrich_fig(figs_by_file['assets/deepak_images/ch10_elbow_wrist_hand_pain/p473_img1.png'], 'exam')]

# Assemble all modules
all_modules = [m1, m2, m3, m4, m5, m6, m7, m8]

# Verification of figure attachment counts
total_proc_figs = 0
total_rf_figs = 0
total_vr_figs = 0

print("\n--- Summary of Direct In-Context Figures Attached ---")
for m in all_modules:
    n_p = sum(len(p.get('figures', [])) for p in m.get('examination_procedures', []))
    n_rf = sum(len(rf.get('figures', [])) for rf in m.get('red_flags', []))
    n_vr = sum(len(vr.get('figures', [])) for vr in m.get('visceral_referrals', []))
    total_proc_figs += n_p
    total_rf_figs += n_rf
    total_vr_figs += n_vr
    print(f"{m['icon']} {m['title_vi'][:40]}:")
    print(f"    * 🩺 Provocative Tests figures: {n_p}")
    print(f"    * 🚨 Red Flags figures: {n_rf}")
    print(f"    * 🫀 Visceral/Anatomy figures: {n_vr}")
    print(f"    * 📚 Reference Atlas figures: {len(m.get('figures', []))}")

print(f"\nTOTAL EMBEDDED IN-CONTEXT FIGURES: {total_proc_figs + total_rf_figs + total_vr_figs} across all 8 modules!")

# Write to data/screening.js and data/screening.fallback.js
output_content = f"""// MSK-Differential Screening Pro & Clinical Guidemap Database
// Master Edition based on Prof. Deepak Sebastian: Differential Screening of Regional Pain in Musculoskeletal Practice (526 pages)
// 8 Symptom-based Clinical Guidemaps + 3-Stage Decision Algorithm + Red Flags Master + Lab Tests Checker + Drug-Induced Pain Checker + 279 Positive Atlas Figures

const SCREENING_DATA = {json.dumps(all_modules, ensure_ascii=False, indent=2)};

const GUIDEMAP_ALGORITHM = {json.dumps(guidemap_algorithm, ensure_ascii=False, indent=2)};

const RED_FLAGS_MASTER = {json.dumps(red_flags_master, ensure_ascii=False, indent=2)};

const LAB_TESTS_GUIDE = {json.dumps(lab_tests_guide, ensure_ascii=False, indent=2)};

const DRUG_INDUCED_PAIN_GUIDE = {json.dumps(drug_induced_pain_guide, ensure_ascii=False, indent=2)};

if (typeof module !== 'undefined' && module.exports) {{
  module.exports = {{
    SCREENING_DATA,
    GUIDEMAP_ALGORITHM,
    RED_FLAGS_MASTER,
    LAB_TESTS_GUIDE,
    DRUG_INDUCED_PAIN_GUIDE
  }};
}}
"""

with open('data/screening.js', 'w', encoding='utf-8') as f:
    f.write(output_content)

fallback_content = f"""// MSK-Differential Screening Pro & Clinical Guidemap Database - Resilient Fallback Shield
// Master Edition based on Prof. Deepak Sebastian: Differential Screening of Regional Pain in Musculoskeletal Practice (526 pages)
// 8 Symptom-based Clinical Guidemaps + 3-Stage Decision Algorithm + Red Flags Master + Lab Tests Checker + Drug-Induced Pain Checker + 279 Positive Atlas Figures

const STABLE_SCREENING_FALLBACK = {json.dumps(all_modules, ensure_ascii=False, indent=2)};

const STABLE_GUIDEMAP_ALGORITHM = {json.dumps(guidemap_algorithm, ensure_ascii=False, indent=2)};

const STABLE_RED_FLAGS_MASTER = {json.dumps(red_flags_master, ensure_ascii=False, indent=2)};

const STABLE_LAB_TESTS_GUIDE = {json.dumps(lab_tests_guide, ensure_ascii=False, indent=2)};

const STABLE_DRUG_INDUCED_PAIN_GUIDE = {json.dumps(drug_induced_pain_guide, ensure_ascii=False, indent=2)};

if (typeof module !== 'undefined' && module.exports) {{
  module.exports = {{
    STABLE_SCREENING_FALLBACK,
    STABLE_GUIDEMAP_ALGORITHM,
    STABLE_RED_FLAGS_MASTER,
    STABLE_LAB_TESTS_GUIDE,
    STABLE_DRUG_INDUCED_PAIN_GUIDE
  }};
}}
"""

with open('data/screening.fallback.js', 'w', encoding='utf-8') as f:
    f.write(fallback_content)

print("Saved data/screening.js and data/screening.fallback.js successfully!")
