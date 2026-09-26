# -*- coding: utf-8 -*-
"""
Rebuild Clinical Guidemap Screening Database based on Symptom Approach:
8 Master Clinical Symptom Modules:
1. 🌐 Đau Toàn Thân / Đa Khớp & Đau do Thuốc (Systemic, Widespread, Fibromyalgia, Ch 1-3)
2. 👤 Đau Cổ - Vai - Gáy (Cervical Spine, Radiculopathy, Cổ Chẩm, Ch 4)
3. 🏹 Đau Khớp Vai & Đai Vai (Shoulder Girdle, Rotator Cuff, AC Joint, Ch 9)
4. 🛡️ Đau Ngực & Cột Sống Ngực (Thoracic Spine, Costovertebral, Red Flags Tim Mạch/Phổi, Ch 5)
5. 🦴 Đau Lưng & Thắt Lưng - Chậu (Low Back, Lumbopelvic, SI Joint, Sciatica, Ch 6)
6. 👖 Đau Khớp Háng & Vùng Bẹn (Hip, Groin, AVN, FAI, Trochanteric, Ch 7)
7. 🦵 Đau Khớp Gối, Cẳng Chân & Bàn Chân (Knee, Leg, Ankle, Foot, Sụn Chêm, DVT, Ch 8)
8. 🖐️ Đau Khuỷu, Cổ Tay & Bàn Tay (Elbow, Wrist, Hand, Carpal Tunnel, De Quervain, Ch 10)

Also embeds figures directly into corresponding:
- examination_procedures
- red_flags
- visceral_referrals
"""

import sys
import os
import json
import re

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

# Load the exact figure catalog
with open('data/deepak_figures_catalog_exact.json', 'r', encoding='utf-8') as f:
    raw_figures = json.load(f)

# Load existing screening.js to reuse rich medical descriptions
with open('data/screening.js', 'r', encoding='utf-8') as f:
    text = f.read()

prefix = 'const SCREENING_DATA = '
start = text.find(prefix) + len(prefix)
end = text.find(';\n\nconst GUIDEMAP_ALGORITHM =')
old_modules = json.loads(text[start:end])

# Also load algorithm, red_flags_master, lab_tests_guide, drug_induced_pain_guide
def extract_js_var(var_name, src_text):
    p = f'const {var_name} = '
    s = src_text.find(p)
    if s == -1: return None
    s += len(p)
    # find next const or if statement
    e = src_text.find(';\n\nconst ', s)
    if e == -1:
        e = src_text.find(';\n\nif', s)
    return json.loads(src_text[s:e].strip())

guidemap_algorithm = extract_js_var('GUIDEMAP_ALGORITHM', text)
red_flags_master = extract_js_var('RED_FLAGS_MASTER', text)
lab_tests_guide = extract_js_var('LAB_TESTS_GUIDE', text)
drug_induced_pain_guide = extract_js_var('DRUG_INDUCED_PAIN_GUIDE', text)

# Map old modules by chapter
ch_map = {m['chapter']: m for m in old_modules}

# Figures by chapter
figs_by_ch = {}
for f in raw_figures:
    ch = f['chapter']
    figs_by_ch.setdefault(ch, []).append(f)

print(f"Loaded {len(raw_figures)} figures across {len(figs_by_ch)} chapters.")

# Helper to enrich figure with Vietnamese caption and category
def enrich_fig(fig):
    title = fig.get('formal_title', '')
    title_clean = re.sub(r'^Figs?\b\.?\s*\d+[\.\-]\d+[A-Z\s,to]*:\s*', '', title, flags=re.I).strip()
    
    # Determine category
    t_lower = (title + ' ' + ' '.join(fig.get('all_titles', []))).lower()
    
    is_exam = any(k in t_lower for k in [
        'test', 'maneuver', 'palpat', 'assess', 'reflex', 'spurling', 'distraction',
        'slump', 'faber', 'fadir', 'neer', 'hawkins', 'jobe', 'yergason', 'speed',
        'obrien', 'lachman', 'drawer', 'mcmurray', 'apley', 'pivot', 'phalen',
        'tinel', 'finkelstein', 'waddell', 'allen', 'provoc', 'position', 'sign',
        'scouring', 'stork', 'flexion test', 'thomas', 'ober', 'trendelenburg',
        'hoffa', 'crossover', 'lift off', 'gerber', 'cozen', 'mill', 'durkan'
    ])
    
    is_redflag = any(k in t_lower for k in [
        'fracture', 'tear', 'bruit', 'rupture', 'lesion', 'impingement',
        'herniation', 'spondylolysis', 'defect', 'entrapment', 'stenosis',
        'subluxation', 'dislocation', 'avascular', 'necrosis', 'malignan', 'tumor'
    ])
    
    is_visceral = any(k in t_lower for k in [
        'quadrant', 'bruit', 'artery', 'vein', 'vasculature', 'nerve',
        'cutaneous', 'dermatome', 'sclerotome', 'autonomic', 'visceral', 'lymph'
    ])
    
    cat = 'general_atlas'
    if is_exam:
        cat = 'examination'
    elif is_redflag:
        cat = 'redflags_pathology'
    elif is_visceral:
        cat = 'anatomy_visceral'
        
    return {
        "file": fig['file'],
        "page": fig['page'],
        "fig_number": re.search(r'Fig(?:ure)?s?\s*\.?\s*(\d+[\.\-]\d+[A-Z\s,to]*)', title, re.I).group(1) if re.search(r'Fig(?:ure)?s?\s*\.?\s*(\d+[\.\-]\d+[A-Z\s,to]*)', title, re.I) else f"Trang {fig['page']}",
        "caption_en": title,
        "caption_vi": f"Hình ảnh giải phẫu & lâm sàng: {title_clean}",
        "category": cat,
        "width": fig['width'],
        "height": fig['height']
    }

enriched_all_figs = [enrich_fig(f) for f in raw_figures]

def get_figs_for_ch(ch_num):
    return [enrich_fig(f) for f in figs_by_ch.get(ch_num, [])]

def match_figs_for_exam(exam_name, candidates):
    name_low = exam_name.lower()
    matched = []
    
    keywords = []
    if 'spurling' in name_low: keywords = ['spurling']
    elif 'distraction' in name_low or 'kéo giãn' in name_low: keywords = ['distraction']
    elif 'hoffman' in name_low or 'phản xạ' in name_low: keywords = ['reflex', 'hoffman']
    elif 'ultt' in name_low or 'căng đám rối' in name_low: keywords = ['nerve', 'scalp', 'brachial']
    elif 'sharp-purser' in name_low or 'c1-c2' in name_low: keywords = ['alar', 'atlas', 'odontoid', 'jefferson']
    elif 'thoracic slump' in name_low or 'rễ ngực' in name_low: keywords = ['t2 spinal nerve', 'thoracic']
    elif 'mở' in name_low or 'đóng' in name_low or 'ers/frs' in name_low or 'opening' in name_low: keywords = ['opening', 'closing']
    elif 'sườn' in name_low or 'spring' in name_low: keywords = ['rib dysfunction', 'springing']
    elif 'slr' in name_low or 'lasegue' in name_low: keywords = ['tuck in', 'slr', 'lasegue', 'herniation']
    elif 'slump' in name_low: keywords = ['herniation', 'slump', 'nerve root']
    elif 'cùng chậu' in name_low or 'sij' in name_low or 'stork' in name_low or 'flexion test' in name_low: keywords = ['stork', 'flexion test', 'sacrum']
    elif 'fadir' in name_low or 'xung đột' in name_low: keywords = ['cam impingement', 'pincer impingement']
    elif 'faber' in name_low or 'patrick' in name_low: keywords = ['hip anterior view', 'vasculature']
    elif 'scour' in name_low or 'vét' in name_low: keywords = ['scouring']
    elif 'thomas' in name_low: keywords = ['thomas']
    elif 'trendelenburg' in name_low or 'mông nhỡ' in name_low: keywords = ['trochanteric', 'abduction firing']
    elif 'lachman' in name_low or 'chéo trước' in name_low: keywords = ['primary ligaments', 'meniscal tears']
    elif 'pivot shift' in name_low: keywords = ['pivot shift']
    elif 'mcmurray' in name_low or 'sụn chêm' in name_low: keywords = ['menisci', 'meniscal']
    elif 'bánh chè' in name_low or 'clark' in name_low: keywords = ['patella', 'patellar']
    elif 'hoffa' in name_low: keywords = ['hoffa']
    elif 'thompson' in name_low or 'gân gót' in name_low or 'achilles' in name_low: keywords = ['achilles', 'tendoachilles']
    elif 'squeeze' in name_low or 'syndesmosis' in name_low: keywords = ['right lower leg', 'anterior view']
    elif 'neer' in name_low: keywords = ['neer']
    elif 'hawkins' in name_low or 'trễ xoay ngoài' in name_low: keywords = ['external rotation lag', 'rotator cuff']
    elif 'jobe' in name_low or 'empty can' in name_low: keywords = ['overhead activity', 'rotator cuff']
    elif 'speed' in name_low or 'yergason' in name_low or 'nhị đầu' in name_low: keywords = ['speeds', 'bicipital']
    elif 'gerber' in name_low or 'lift-off' in name_low: keywords = ['lift off']
    elif 'cùng đòn' in name_low or 'cross-body' in name_low: keywords = ['crossover']
    elif 'cozen' in name_low or 'tennis' in name_low: keywords = ['common extensor', 'lateral aspect']
    elif 'mill' in name_low: keywords = ['common extensor', 'lateral aspect']
    elif 'phalen' in name_low or 'ống cổ tay' in name_low or 'durkan' in name_low: keywords = ['carpal tunnel', 'joint play']
    elif 'tinel' in name_low: keywords = ['cubital tunnel', 'carpal tunnel']
    elif 'finkelstein' in name_low or 'quervain' in name_low: keywords = ['common extensor', 'ulnar collateral']
    elif 'waddell' in name_low: keywords = ['tuck in']

    for c in candidates:
        cap = (c['caption_en'] + ' ' + c['caption_vi']).lower()
        if any(k in cap for k in keywords):
            matched.append(c)
            
    return matched[:2] # attach top 1-2 most specific figures

print("Configuring 8 Symptom-based Clinical Guidemap Modules...")

# Construct the 8 Symptom-Based Modules
symptom_modules = [
    # -------------------------------------------------------------------------
    # 1. ĐAU TOÀN THÂN / ĐA KHỚP & ĐAU DO THUỐC (Chương 1-3)
    # -------------------------------------------------------------------------
    {
        "id": "systemic-widespread",
        "chapter": 1,
        "region": "systemic",
        "region_vi": "Toàn Thân & Do Thuốc",
        "icon": "🌐",
        "title": "Systemic, Widespread MSK Pain, Drug-Induced Pain & Lab Screening",
        "title_vi": "🌐 Đau Toàn Thân / Đa Khớp, Đau do Thuốc & Rối Loạn Chuyển Hóa",
        "chief_complaint": "Phàn nàn chính: Đau mỏi toàn thân, đau nhức nhiều khớp di chuyển, đau xơ cơ (Fibromyalgia), đau đa cơ do thấp (PMR), đau mỏi cơ gân sau dùng thuốc Statin / Quinolone / Corticoid / Kháng Estrogen, sưng đau đa khớp kèm sốt nhẹ hoặc sút cân.",
        "author": "GS. Deepak Sebastian (Chuyên khảo Chương 1, 2, 3 - Tổng Hợp Lâm Sàng)",
        "summary": "Mô hình tiếp cận ca đau khó & đau lan tỏa: Tích hợp tư duy sàng lọc 3 giai đoạn (Stage 1 Red Flags -> Stage 2 Phân định mô tổn thương & Rối loạn cơ chế Somatic -> Stage 3 Định hướng can thiệp / Chuyển tuyến). Rà soát triệt để 10 nhóm nguyên nhân hệ thống, 15 nhóm thuốc gây đau cơ xương khớp thường gặp (Statin, Quinolone, Aromatase inhibitors, Bisphosphonate...) và bảng kiểm 7 nhóm xét nghiệm cận lâm sàng (ESR, CRP, Calci, ALP, Uric acid, CPK, HLA-B27, RF, Anti-CCP, ANA).",
        "stage_1_systemic_red_flags": ch_map[1]['stage_1_systemic_red_flags'] + (ch_map[2]['stage_1_systemic_red_flags'][:1] if 2 in ch_map else []),
        "red_flags": [
            {
                "category": "Cờ Đỏ Nhiễm Trùng Khớp Cấp / Viêm Khớp Nhiễm Khuẩn (Septic Arthritis)",
                "signs": "Sốt cao rét run kèm sưng nóng đỏ đau dữ dội 1 khớp đơn độc (gối, háng, vai), khớp co cứng hoàn toàn không thể cử động dù thụ động nhẹ nhất. Chọc hút dịch khớp có bạch cầu dịch khớp > 50,000 - 100,000/mcL (> 75% Neutrophils).",
                "action": "CẤP CỨU NGOẠI KHOA KHẨN: Rửa khớp, dẫn lưu dịch mủ qua nội soi hoặc mổ hở + Kháng sinh tĩnh mạch liều cao phổ rộng. CHỐNG CHỈ ĐỊNH TUYỆT ĐỐI TIÊM CORTICOID VÀO KHỚP!",
                "figures": []
            },
            {
                "category": "Cờ Đỏ Tốc Độ Máu Lắng Tăng Cực Cao (ESR > 100 mm/h) - Nghi Ngờ Đa U Tủy Xương / U Di Căn",
                "signs": "Đau xương âm ỉ dai dẳng toàn thân, đau cột sống tăng về đêm không liên quan tư thế, mệt mỏi suy nhược, sụt cân không chủ ý. Cần nghĩ ngay: Đa u tủy xương (Multiple Myeloma), Viêm động mạch thái dương (GCA), Ung thư di căn xương (PB KTL).",
                "action": "Chỉ định Điện di đạm huyết thanh (SPEP), Chuỗi nhẹ Bence-Jones niệu, X-quang xương sọ/khung chậu/cột sống tìm ổ tiêu xương đục lỗ (punched-out lesions) và hội chẩn Huyết học/Ung bướu.",
                "figures": []
            },
            {
                "category": "Cờ Đỏ Tiêu Cơ Vân Cấp Do Thuốc Statin (Rhabdomyolysis / Extreme CPK Elevation)",
                "signs": "Creatine Kinase (CK/CPK) tăng > 1,000 - 50,000 U/L, cơ bắp căng đau cứng dữ dội, nước tiểu sẫm màu nâu đen như nước xá xị (Myoglobin niệu), thiểu niệu hoặc vô niệu sau bắt đầu dùng Statin hoặc tăng liều.",
                "action": "Cấp cứu truyền dịch tĩnh mạch đệm kiềm hóa nước tiểu (Natri Bicarbonat) khẩn cấp để phòng hoại tử ống thận cấp suy thận cấp. Ngừng ngay lập tức Statin.",
                "figures": []
            }
        ],
        "visceral_referrals": [
            {
                "source": "Tổng quan Cơ chế Chuyển đau từ Tạng (Visceral Pain Referral Concepts)",
                "pattern": "Đau phát sinh từ xung động tạng truyền qua dây thần kinh giao cảm/phó giao cảm vào cùng sừng sau tủy sống với cảm giác soma (Thuyết hội tụ - phóng chiếu). Não bộ giải mã sai tín hiệu tạng thành đau vùng cơ xương khớp tương ứng khoanh tủy.",
                "differential": "Đau tạng thường âm ỉ, sâu, co thắt, không có điểm đau khu trú nông khi sờ nắn, không thay đổi theo tư thế cơ học hoặc cử động khớp chủ động/thụ động."
            },
            {
                "source": "Bệnh lý Chuyển hóa & Suy Thận (Metabolic & Renal Referral)",
                "pattern": "Axit Uric máu tăng lắng đọng tinh thể Urat tại thận gây sỏi thận và suy thận mạn. Ngược lại suy giảm chức năng thận làm giảm thải acid uric gây bùng phát viêm khớp gút tophi đa khớp kháng trị.",
                "differential": "Phân biệt viêm khớp gút (tinh thể hình kim lưỡng chiết quang âm tính) với viêm khớp vôi hóa giả gút CPPD (tinh thể Canxi Pyrophosphate hình thoi lưỡng chiết quang dương tính yếu)."
            }
        ],
        "drug_induced": [
            "Thuốc Statin (Atorvastatin, Rosuvastatin, Simvastatin): Đau cơ, yếu cơ gốc chi đối xứng, chuột rút, viêm cơ hoại tử tự miễn kháng HMGCR.",
            "Kháng sinh Quinolone (Ciprofloxacin, Levofloxacin): Viêm gân và đứt gân gót Achilles tự phát, nguy cơ tăng gấp bội khi dùng kèm Corticoid.",
            "Corticosteroid dài ngày: Hoại tử vô mạch chỏm xương đùi/xương cánh tay (AVN), loãng xương gãy lún đốt sống, bệnh cơ do steroid (Steroid myopathy).",
            "Thuốc ức chế Aromatase (Anastrozole, Letrozole, Exemestane): Hội chứng đau khớp do ức chế aromatase (AIA) gặp ở 50% phụ nữ điều trị ung thư vú.",
            "Bisphosphonate (Alendronate, Zoledronic acid): Đau cơ xương khớp dữ dội lan tỏa, gãy xương đùi không điển hình (Atypical femur fracture), hoại tử xương hàm (ONJ)."
        ],
        "examination_procedures": [
            {
                "name": "Quy trình Khám Sàng lọc Toàn diện 3 Bước (Sebastian 3-Stage Screening Protocol)",
                "technique": "Bước 1: Rà soát tiền sử 10 nhóm bệnh hệ thống & hỏi cờ đỏ (sốt, sụt cân, ung thư, tim mạch). Bước 2: Khám vận động chủ động/thụ động (AROM/PROM) tìm kiếm mô hình bao khớp (Capsular pattern), khám cơ lực từng cơ (Myotome), cảm giác (Dermatome) và phản xạ gân xương (DTR). Bước 3: Nghiệm pháp căng thần kinh và nghiệm pháp đặc hiệu vùng.",
                "significance": "Xác định rõ ràng nguồn gốc triệu chứng là Cơ học (Mechanical), Thần kinh (Neuropathic) hay Hệ thống (Systemic) trước khi ra quyết định điều trị.",
                "sensitivity": "95%",
                "specificity": "88%",
                "diagnostic_role": "Độ nhạy rất cao sàng lọc loại trừ căn nguyên hệ thống & cờ đỏ trước can thiệp",
                "figures": []
            },
            {
                "name": "Đánh giá Dấu hiệu Thực thể Không do Cơ quan (Waddell's Non-organic Signs)",
                "technique": "5 nhóm dấu hiệu Waddell: 1. Ấn chẩn nông đau quá mức; 2. Nghiệm pháp mô phỏng (Xoay vai/chậu nguyên khối hoặc ấn dọc đỉnh đầu gây đau lưng); 3. Phân tán chú ý (Đo SLR tư thế ngồi so với nằm); 4. Yếu cơ từng lúc kiểu giật cục (Cogwheel weakness) không theo giải phẫu; 5. Phản ứng quá khích (la hét, thở dốc khi chạm nhẹ).",
                "significance": "Có >= 3/5 dấu hiệu cảnh báo yếu tố tâm lý xã hội hoặc vụ lợi thứ phát (Yellow Flags).",
                "sensitivity": "80%",
                "specificity": "85%",
                "diagnostic_role": "Sàng lọc cờ vàng tâm lý và yếu tố phi thực thể (dương tính khi có >= 3/5 nhóm dấu hiệu)",
                "figures": []
            },
            {
                "name": "Nghiệm Pháp Thompson Đánh Giá Đứt Gân Gót Do Quinolone (Thompson Squeeze Test)",
                "technique": "Bệnh nhân nằm sấp, gập gối 90 độ hoặc bàn chân thò ra ngoài mép giường khám. Bác sĩ dùng tay bóp mạnh vào khối cơ bắp chân (bụng chân). Bình thường: Bàn chân gập mặt lòng thụ động (Plantarflexion). Bất thường (Dương tính): Bàn chân nằm im bất động.",
                "significance": "Dấu hiệu đứt hoàn toàn gân gót Achilles, thường xảy ra sau dùng Quinolone từ 2-14 ngày.",
                "sensitivity": "96%",
                "specificity": "98%",
                "diagnostic_role": "Tiêu chuẩn vàng khám lâm sàng đứt gân gót Achilles cấp",
                "figures": []
            },
            {
                "name": "Khám Sàng Lọc Bệnh Đa Dây Thần Kinh Ngoại Biên Do Thuốc & Hóa Chất",
                "technique": "Khám cảm giác rung âm thoa 128Hz tại khớp ngón cái và mắt cá trong; Khám cảm giác áp lực với sợi chỉ đơn Monofilament Semmes-Weinstein 10g tại 10 điểm gan chân; Khám phản xạ gân gót (Achilles DTR).",
                "significance": "Mất cảm giác rung âm thoa và mất phản xạ gân gót là dấu hiệu sớm nhất của tổn thương sợi trục thần kinh do thuốc.",
                "sensitivity": "88%",
                "specificity": "92%",
                "diagnostic_role": "Phát hiện sớm biến chứng thần kinh ngoại biên do hóa chất/đái tháo đường",
                "figures": []
            }
        ],
        "differential_table": [
            {"condition": "Đau xơ cơ (Fibromyalgia)", "onset": "Âm ỉ mạn tính > 3 tháng, đau lan tỏa 4 góc phần tư", "aggravating": "Căng thẳng, mất ngủ, thời tiết lạnh", "key_differentiator": "Đau nhiều điểm trigger points, XN ESR/CRP hoàn toàn bình thường, không teo cơ", "confirmatory_test": "Thang điểm WPI (Widespread Pain Index) >= 7 và SSS >= 5", "gold_standard": "Tiêu chuẩn chẩn đoán ACR 2016 Fibromyalgia"},
            {"condition": "Đau đa cơ do thấp (Polymyalgia Rheumatica - PMR)", "onset": "Đột ngột ở người > 50 tuổi, đau đai vai và đai chậu", "aggravating": "Tăng nhiều buổi sáng, cứng khớp buổi sáng > 45 phút", "key_differentiator": "Máu lắng ESR > 40-100 mm/h, CRP tăng vọt, đáp ứng thần kỳ với Prednisolone liều thấp 15mg/ngày sau 48h", "confirmatory_test": "Xét nghiệm ESR, CRP, Siêu âm khớp vai tìm viêm bao hoạt dịch dưới mỏm cùng", "gold_standard": "Tiêu chuẩn ACR/EULAR 2012 PMR"},
            {"condition": "Đau cơ do Statin (Statin-Induced Myopathy)", "onset": "Sau 2-8 tuần bắt đầu dùng hoặc tăng liều Statin", "aggravating": "Vận động nặng, phối hợp Fibrate hoặc thuốc ức chế CYP3A4", "key_differentiator": "Yếu cơ gốc chi đối xứng, CK tăng từ nhẹ đến > 10 lần bình thường, hết đau khi ngưng Statin 2-4 tuần", "confirmatory_test": "Định lượng Men cơ Creatine Kinase (CK), Kháng thể Anti-HMGCR", "gold_standard": "Thử nghiệm ngưng thuốc (De-challenge) và tái sử dụng liều thấp (Re-challenge)"}
        ],
        "figures": []
    },

    # -------------------------------------------------------------------------
    # 2. ĐAU CỔ - VAI - GÁY (Chương 4)
    # -------------------------------------------------------------------------
    {
        "id": "cervical-pain",
        "chapter": 4,
        "region": "cervical",
        "region_vi": "Cổ - Vai - Gáy",
        "icon": "👤",
        "title": "Cervical Spine, Suboccipital & Cervicobrachial Pain",
        "title_vi": "👤 Đau Cổ - Vai - Gáy & Bệnh Rễ Thần Kinh Cổ",
        "chief_complaint": "Phàn nàn chính: Đau mỏi vùng gáy lan lên đầu (đau đầu do cổ), đau cổ lan xuống vai và cánh tay/bàn tay kèm tê bì châm chích ngón tay, vẹo cổ cấp, cứng cổ hạn chế quay cổ.",
        "author": "GS. Deepak Sebastian (Chương 4, pp. 105-187)",
        "summary": "Sàng lọc phân biệt đau cột sống cổ: Phân biệt đau cơ học cân cơ, thoái hóa diện khớp cổ (Facet syndrome), thoát vị đĩa đệm chèn ép rễ cổ (Radiculopathy C5-C8) với các bệnh lý tủy cổ nặng (Cervical myelopathy). Rà soát khẩn cấp Cờ đỏ thiếu máu đốt sống thân nền (VBI 5D And 3N), bóc tách động mạch cảnh, mất vững dây chằng mỏm nha C1-C2 sau chấn thương hoặc trong viêm khớp dạng thấp, và u Pancoast đỉnh phổi.",
        "stage_1_systemic_red_flags": ch_map[4]['stage_1_systemic_red_flags'],
        "red_flags": ch_map[4]['red_flags'],
        "visceral_referrals": ch_map[4]['visceral_referrals'],
        "drug_induced": ch_map[4]['drug_induced'],
        "examination_procedures": ch_map[4]['examination_procedures'],
        "differential_table": ch_map[4]['differential_table'],
        "figures": get_figs_for_ch(4)
    },

    # -------------------------------------------------------------------------
    # 3. ĐAU KHỚP VAI & ĐAI VAI (Chương 9)
    # -------------------------------------------------------------------------
    {
        "id": "shoulder-pain",
        "chapter": 9,
        "region": "shoulder",
        "region_vi": "Khớp Vai & Đai Vai",
        "icon": "🏹",
        "title": "Shoulder Complex, Rotator Cuff & Shoulder Girdle Pain",
        "title_vi": "🏹 Đau Khớp Vai, Đai Vai & Xung Đột Chóp Xoay",
        "chief_complaint": "Phàn nàn chính: Đau khớp vai khi nhấc tay qua đầu, đau nhói mặt trước vai khi với tay ra sau, đau vai về đêm khi nằm nghiêng đè lên vai, đông cứng khớp vai không thể chải đầu hay cài cúc áo.",
        "author": "GS. Deepak Sebastian (Chương 9, pp. 417-466)",
        "summary": "Chẩn đoán phân biệt đau khớp vai toàn diện: Xung đột khoang dưới mỏm cùng (Subacromial Impingement), rách gân chóp xoay (Supraspinatus, Infraspinatus, Subscapularis), viêm gân đầu dài cơ nhị đầu, thoái hóa khớp cùng đòn (AC Joint), đông cứng khớp vai (Frozen Shoulder / Adhesive Capsulitis). Sàng lọc cờ đỏ nhồi máu cơ tim (quy chiếu vai trái), u đỉnh phổi Pancoast, bệnh lý gan mật (quy chiếu vai phải), vỡ lách tụ máu (dấu hiệu Kehr vai trái).",
        "stage_1_systemic_red_flags": ch_map[9]['stage_1_systemic_red_flags'],
        "red_flags": ch_map[9]['red_flags'],
        "visceral_referrals": ch_map[9]['visceral_referrals'],
        "drug_induced": ch_map[9]['drug_induced'],
        "examination_procedures": ch_map[9]['examination_procedures'],
        "differential_table": ch_map[9]['differential_table'],
        "figures": get_figs_for_ch(9)
    },

    # -------------------------------------------------------------------------
    # 4. ĐAU NGỰC & CỘT SỐNG NGỰC (Chương 5)
    # -------------------------------------------------------------------------
    {
        "id": "thoracic-pain",
        "chapter": 5,
        "region": "thoracic",
        "region_vi": "Ngực & Cột Sống Ngực",
        "icon": "🛡️",
        "title": "Thoracic Spine, Costovertebral & Chest Wall Pain",
        "title_vi": "🛡️ Đau Ngực, Cột Sống Ngực & Cờ Đỏ Tim Mạch - Phổi",
        "chief_complaint": "Phàn nàn chính: Đau nhói ngực khi hít sâu, đau tức thành ngực dọc theo cung liên sườn, đau lưng vùng giữa hai xương bả vai, đau tăng khi xoay vặn thân mình hoặc ho hắt hơi.",
        "author": "GS. Deepak Sebastian (Chương 5, pp. 188-217)",
        "summary": "Chẩn đoán phân biệt đau cột sống ngực và thành ngực: Rối loạn diện khớp sườn - sống và sườn - ngang, viêm sụn sườn (Hội chứng Tietze / Costochondritis), gãy xẹp đốt sống do loãng xương ở người cao tuổi, đau thần kinh liên sườn sau Zona. CỜ ĐỎ CẤP CỨU HÀNG ĐẦU: Bóc tách động mạch chủ ngực (đau xé rách ngực lưng), hội chứng vành cấp / nhồi máu cơ tim, thuyên tắc phổi (PE), tràn khí màng phổi tự phát, loét thủng dạ dày - tá tràng, viêm tụy cấp.",
        "stage_1_systemic_red_flags": ch_map[5]['stage_1_systemic_red_flags'],
        "red_flags": ch_map[5]['red_flags'],
        "visceral_referrals": ch_map[5]['visceral_referrals'],
        "drug_induced": ch_map[5]['drug_induced'],
        "examination_procedures": ch_map[5]['examination_procedures'],
        "differential_table": ch_map[5]['differential_table'],
        "figures": get_figs_for_ch(5)
    },

    # -------------------------------------------------------------------------
    # 5. ĐAU LƯNG & THẮT LƯNG - CHẬU (Chương 6)
    # -------------------------------------------------------------------------
    {
        "id": "lumbopelvic-pain",
        "chapter": 6,
        "region": "lumbopelvic",
        "region_vi": "Thắt Lưng - Chậu",
        "icon": "🦴",
        "title": "Low Back, Lumbopelvic, Sacroiliac & Sciatic Pain",
        "title_vi": "🦴 Đau Lưng, Thắt Lưng - Chậu & Thần Kinh Tọa",
        "chief_complaint": "Phàn nàn chính: Đau thắt lưng cấp/mạn, đau lưng lan xuống mông và mặt sau đùi cẳng chân bàn chân (đau thần kinh tọa), đau khớp cùng chậu khi đứng lâu, đau cách hồi rễ thần kinh khi đi bộ phải ngồi xổm để đỡ đau.",
        "author": "GS. Deepak Sebastian (Chương 6, pp. 218-300)",
        "summary": "Sàng lọc phân biệt đau vùng thắt lưng - chậu: Phân định chính xác 4 nhóm nguyên nhân cơ học thường gặp nhất: Thoát vị đĩa đệm (Disc Herniation), Thoái hóa diện khớp thắt lưng (Facet Syndrome), Viêm/rối loạn chức năng khớp cùng chậu (SIJ Dysfunction) và Hẹp ống sống thắt lưng (Lumbar Spinal Stenosis). Rà soát khẩn cấp Cờ đỏ Hội chứng chùm đuôi ngựa (Cauda Equina Syndrome), Phình bóc tách động mạch chủ bụng (AAA), Áp xe ngoài màng cứng cột sống, Ung thư di căn xương.",
        "stage_1_systemic_red_flags": ch_map[6]['stage_1_systemic_red_flags'],
        "red_flags": ch_map[6]['red_flags'],
        "visceral_referrals": ch_map[6]['visceral_referrals'],
        "drug_induced": ch_map[6]['drug_induced'],
        "examination_procedures": ch_map[6]['examination_procedures'],
        "differential_table": ch_map[6]['differential_table'],
        "figures": get_figs_for_ch(6)
    },

    # -------------------------------------------------------------------------
    # 6. ĐAU KHỚP HÁNG & VÙNG BẸN (Chương 7)
    # -------------------------------------------------------------------------
    {
        "id": "hip-groin-pain",
        "chapter": 7,
        "region": "hip",
        "region_vi": "Khớp Háng & Bẹn",
        "icon": "👖",
        "title": "Hip Joint, Groin, AVN & Greater Trochanteric Pain",
        "title_vi": "👖 Đau Khớp Háng, Vùng Bẹn, AVN & Mấu Chuyển Lớn",
        "chief_complaint": "Phàn nàn chính: Đau sâu vùng bẹn hình chữ C (dấu hiệu C-sign), đau khớp háng khi đứng lên ngồi xuống hoặc lên xuống cầu thang, đau mặt ngoài khớp háng khi nằm nghiêng (viêm túi thanh dịch mấu chuyển lớn), đi khập khiễng.",
        "author": "GS. Deepak Sebastian (Chương 7, pp. 301-333)",
        "summary": "Chẩn đoán phân biệt đau khớp háng và vùng bẹn: Thoái hóa khớp háng (Coxarthrosis), Hoại tử vô khuẩn chỏm xương đùi (Avascular Necrosis - AVN do corticoid/rượu), Xung đột xương chậu - đùi (FAI Cam/Pincer), Rách viền sụn khớp háng (Acetabular labral tear), Hội chứng đau mấu chuyển lớn (GTPS / Trochanteric bursitis). Sàng lọc cờ đỏ gãy cổ xương đùi người già, viêm khớp háng nhiễm trùng mủ, thoát vị bẹn nghẹt, u xương chậu.",
        "stage_1_systemic_red_flags": ch_map[7]['stage_1_systemic_red_flags'],
        "red_flags": ch_map[7]['red_flags'],
        "visceral_referrals": ch_map[7]['visceral_referrals'],
        "drug_induced": ch_map[7]['drug_induced'],
        "examination_procedures": ch_map[7]['examination_procedures'],
        "differential_table": ch_map[7]['differential_table'],
        "figures": get_figs_for_ch(7)
    },

    # -------------------------------------------------------------------------
    # 7. ĐAU KHỚP GỐI, CẲNG CHÂN & BÀN CHÂN (Chương 8)
    # -------------------------------------------------------------------------
    {
        "id": "knee-leg-foot-pain",
        "chapter": 8,
        "region": "knee_foot",
        "region_vi": "Gối, Cẳng & Bàn Chân",
        "icon": "🦵",
        "title": "Knee Joint, Lower Leg, Ankle & Foot Regional Pain",
        "title_vi": "🦵 Đau Khớp Gối, Cẳng Chân, Cổ Chân & Bàn Chân",
        "chief_complaint": "Phàn nàn chính: Sưng đau khớp gối sau chấn thương thể thao, kẹt khớp gối khi ngồi xổm (rách sụn chêm), đau gân gót Achilles khi chạy, đau nhói gót chân bước đầu tiên buổi sáng (viêm cân gan chân), sưng căng cứng bắp chân.",
        "author": "GS. Deepak Sebastian (Chương 8, pp. 334-416)",
        "summary": "Chẩn đoán phân biệt phức hợp gối - cổ chân - bàn chân: Tổn thương sụn chêm trong/ngoài, đứt dây chằng chéo trước/sau (ACL/PCL), thoái hóa khớp gối, hội chứng bánh chè - đùi (PFPS), nang Baker khoeo chân. Vùng cẳng & bàn chân: Viêm/đứt gân gót Achilles, viêm cân gan chân (Plantar Fasciitis), u thần kinh Morton, đau ngón chân cái do Gút cấp. CỜ ĐỎ KHẨN CẤP: Huyết khối tĩnh mạch sâu (DVT), Hội chứng chèn ép khoang cấp (5P), Viêm mủ khớp gối.",
        "stage_1_systemic_red_flags": ch_map[8]['stage_1_systemic_red_flags'],
        "red_flags": ch_map[8]['red_flags'],
        "visceral_referrals": ch_map[8]['visceral_referrals'],
        "drug_induced": ch_map[8]['drug_induced'],
        "examination_procedures": ch_map[8]['examination_procedures'],
        "differential_table": ch_map[8]['differential_table'],
        "figures": get_figs_for_ch(8)
    },

    # -------------------------------------------------------------------------
    # 8. ĐAU KHUỶU, CỔ TAY & BÀN TAY (Chương 10)
    # -------------------------------------------------------------------------
    {
        "id": "elbow-wrist-hand-pain",
        "chapter": 10,
        "region": "elbow_hand",
        "region_vi": "Khuỷu, Cổ & Bàn Tay",
        "icon": "🖐️",
        "title": "Elbow, Forearm, Wrist & Hand Regional Pain",
        "title_vi": "🖐️ Đau Khớp Khuỷu, Cổ Tay, Bàn Tay & Ống Cổ Tay",
        "chief_complaint": "Phàn nàn chính: Đau lồi cầu ngoài khuỷu tay khi cầm nắm (Tennis elbow), tê bì ngón 1-2-3 thức giấc nửa đêm (Hội chứng ống cổ tay), đau nhói gốc ngón cái khi ẵm con (Viêm gân De Quervain), ngón tay bị kẹt gập không duỗi được (Ngón tay lò xo).",
        "author": "GS. Deepak Sebastian (Chương 10, pp. 467-512)",
        "summary": "Chẩn đoán phân biệt chi trên ngoại vi: Viêm lồi cầu ngoài (Tennis Elbow), viêm lồi cầu trong (Golfer Elbow), chèn ép thần kinh trụ tại rãnh khuỷu (Cubital Tunnel). Bàn cổ tay: Hội chứng ống cổ tay (CTS - TK giữa), viêm bao gân De Quervain, ngón tay lò xo (Trigger Finger), nang hoạt dịch cổ tay, thoái hóa khớp bàn ngón cái (CMC-1). CỜ ĐỎ: Hội chứng chèn ép khoang cẳng tay (Volkmann), Nhiễm trùng bao gân gấp bàn tay (4 dấu hiệu Kanavel), Hoại tử vô mạch xương thuyền / xương nguyệt (Kienböck), Gãy xương thuyền bỏ sót.",
        "stage_1_systemic_red_flags": ch_map[10]['stage_1_systemic_red_flags'],
        "red_flags": ch_map[10]['red_flags'],
        "visceral_referrals": ch_map[10]['visceral_referrals'],
        "drug_induced": ch_map[10]['drug_induced'],
        "examination_procedures": ch_map[10]['examination_procedures'],
        "differential_table": ch_map[10]['differential_table'],
        "figures": get_figs_for_ch(10)
    }
]

somatic_dysfunctions_map = {
    "systemic-widespread": [
        "Đau xơ cơ (Fibromyalgia): Rối loạn điều hòa cảm giác đau trung ương (Central Sensitization) với tăng nhạy cảm đau (Hyperalgesia) và loạn cảm đau (Allodynia).",
        "Đau đa cơ do thấp (PMR): Viêm bao hoạt dịch dưới mỏm cùng đai vai và bao hoạt dịch đai chậu đối xứng hai bên.",
        "Bệnh lý gân cơ do thuốc (Drug-induced Myopathy & Tendinopathy): Tổn thương ty thể tế bào cơ do Statin hoặc suy thoái chất nền collagen type I gân do Quinolone.",
        "Rối loạn chuyển hóa & Tinh thể: Lắng đọng vi tinh thể Urat (Gout) hoặc Calci Pyrophosphate (CPPD / Pseudogout) màng hoạt dịch và sụn khớp."
    ],
    "cervical-pain": [
        "Hạn chế mở diện khớp cổ (Opening Restriction / FRS - Flexed, Rotated, Sidebent): Mấu khớp dưới không trượt lên trên và ra trước được khi cúi nghiêng xoay đối bên.",
        "Hạn chế đóng diện khớp cổ (Closing Restriction / ERS - Extended, Rotated, Sidebent): Mấu khớp dưới không trượt xuống dưới và ra sau được khi ngửa nghiêng xoay cùng bên.",
        "Sai lệch vận động khớp chẩm - đội (OA Joint restriction): Giảm biên độ gật đầu (Nodding) của lồi cầu xương chẩm trên mặt khớp C1.",
        "Vẹo vặn trục đội - trục (AA Joint rotation dysfunction): Giới hạn xoay đầu sang một bên khi cổ đã gập tối đa (Flexion-Rotation Test)."
    ],
    "shoulder-pain": [
        "Rối loạn nhịp vận động bả vai - cánh tay (Scapulohumeral Rhythm Dysynergia): Xương bả vai không xoay lên trên đủ 1:2 so với cánh tay khi giạng.",
        "Co rút bao khớp sau khớp vai (Posterior Capsule Tightness): Đẩy chỏm xương cánh tay trượt ra trước và lên trên khi nâng tay, gây xung đột dưới mỏm cùng.",
        "Xung đột cơ học khoang dưới mỏm cùng (Subacromial Impingement - Neer stage I-III): Hẹp khoang dưới mỏm cùng chèn ép gân trên gai và bao hoạt dịch SASD."
    ],
    "thoracic-pain": [
        "Hạn chế mở / đóng diện khớp sườn - sống (Costovertebral joint restriction): Khóa khớp sườn sống gây đau buốt thành ngực mỗi nhịp thở sâu.",
        "Rối loạn chuyển động xương sườn khi hít vào / thở ra (Inhalation / Exhalation Rib dysfunction): Xương sườn kẹt ở thì hít vào hoặc thì thở ra.",
        "Khóa diện khớp liên đốt ngực T1-T12 (Thoracic Facet Locking): Hạn chế xoay thân mình sang bên tổn thương."
    ],
    "lumbopelvic-pain": [
        "Xoay xương chậu ra trước / ra sau (Anterior / Posterior Innominate Shear): Mất cân xứng chiều dài chi chức năng và đau khớp cùng chậu.",
        "Vặn xoắn xương cùng (Sacral Torsion on Oblique Axis - R on R, L on L): Gây căng cứng cơ hình lê và chèn ép rễ thần kinh tọa.",
        "Khóa diện khớp thắt lưng (Lumbar Facet ERS / FRS): Co thắt cơ nhiều tầng và đau nhói khi ưỡn lưng xoay người."
    ],
    "hip-groin-pain": [
        "Giảm trượt chỏm xương đùi ra sau (Posterior glide restriction): Hạn chế gập háng sâu và gây đau xung đột cấn mặt trước ổ cối.",
        "Co rút cơ thắt lưng chậu (Iliopsoas contracture) & cơ may: Làm tăng độ ưỡn cột sống thắt lưng và tăng áp lực lên khớp háng.",
        "Yếu cơ mông nhỡ và cơ xoay ngoài khớp háng: Dấu hiệu Trendelenburg, lệch trục chi dưới gây quá tải bao hoạt dịch mấu chuyển lớn."
    ],
    "knee-leg-foot-pain": [
        "Hạn chế di động đầu trên xương mác (Superior tibiofibular joint restriction): Gây đau mặt ngoài gối và cổ chân khi ngồi xổm hoặc chạy.",
        "Mất cân bằng bánh chè - đùi (Patellar lateral tracking & tilt): Kéo lệch xương bánh chè ra ngoài gây mòn sụn khớp bánh chè đùi.",
        "Mất độ ngửa cổ chân và khóa khớp sên - ghe (Subtalar joint pronation): Gây căng dãn quá mức cân gan chân và gân chày sau."
    ],
    "elbow-wrist-hand-pain": [
        "Sai lệch trượt chỏm xương quay ra trước / sau (Radial head anterior / posterior subluxation): Gây đau chói khi sấp ngửa cẳng tay.",
        "Khóa khớp thang - bàn ngón cái (CMC-1 restriction): Gây hạn chế đối chiếu ngón cái và đau buốt khi cầm nắm vật nặng.",
        "Hẹp khoang ống cổ tay do sụp vòm khối xương cổ tay (Carpal arch flattening): Tăng áp lực chèn ép cơ học lên thần kinh giữa."
    ]
}

guidemap_intervention_map = {
    "systemic-widespread": "Điều trị toàn thân theo nguyên nhân gốc rễ: Điều chỉnh hoặc ngừng thuốc nghi ngờ (Statin/Quinolone/Steroid), tối ưu hóa kiểm soát acid uric và đường huyết, tập phục hồi chức năng đa phương thức. Nếu có điểm đau khu trú kháng trị có thể phối hợp tiêm can thiệp tại chỗ.",
    "cervical-pain": "Nếu không có cờ đỏ: Điều trị nội khoa & nắn chỉnh cơ sinh học giải phóng diện khớp; Trường hợp đau rễ cổ kháng trị hoặc viêm diện khớp cổ dai dẳng -> Chỉ định Tiêm can thiệp dưới hướng dẫn siêu âm (Xem Web 1: Tiêm rễ thần kinh cổ chọn lọc C5-C6-C7 hoặc Tiêm nhánh trong phong bế diện khớp cổ).",
    "shoulder-pain": "Kỹ thuật giải phóng bao khớp sau và tập phục hồi vận động xương bả vai (Scapular stabilization); Tiêm khoang dưới mỏm cùng hoặc Tiêm nội khớp vai nong bao khớp dưới hướng dẫn siêu âm (Xem Web 1: Tiêm Khoang Dưới Mỏm Cùng, Tiêm Bao Gân Nhị Đầu, Tiêm Khớp Cùng Đòn).",
    "thoracic-pain": "Kỹ thuật kéo giãn mở khoang liên sườn kết hợp tập mạnh cơ răng trước; Phong bế dây thần kinh liên sườn hoặc phong bế mặt phẳng cơ dựng gai (ESP Block) dưới hướng dẫn siêu âm (Xem Web 1: Quy trình ESP Block & Intercostal Nerve Block).",
    "lumbopelvic-pain": "Kỹ thuật nắn chỉnh cân bằng cơ sinh học khung chậu (Muscle Energy Technique - MET); Trường hợp viêm rễ thần kinh cấp hoặc viêm khớp cùng chậu dai dẳng -> Tiêm thẩm nhuận rễ thắt lưng chọn lọc (Transforaminal ESI) hoặc Tiêm khớp cùng chậu dưới hướng dẫn siêu âm (Xem Web 1: Quy trình Tiêm Khớp Cùng Chậu & Tiêm Rễ Thần Kinh Ngoài Màng Cứng).",
    "hip-groin-pain": "Kỹ thuật kéo dãn trượt khớp háng ra sau (Posterior glide mobilization); Tiêm nội khớp háng dưới hướng dẫn siêu âm (xem Web 1: Tiêm Khớp Háng Đường Trước Ngoài) hoặc Tiêm túi thanh dịch mấu chuyển lớn / gân cơ mông nhỡ.",
    "knee-leg-foot-pain": "Kỹ thuật giải phóng di động đầu trên xương mác và diện khớp bánh chè; Tiêm chất nhờn Acid Hyaluronic hoặc PRP dưới hướng dẫn siêu âm vào ổ khớp gối (Xem Web 1: Tiêm Khớp Gối, Tiêm Dịch Khớp Khoeo / Nang Baker, Tiêm Cân Gan Chân).",
    "elbow-wrist-hand-pain": "Kỹ thuật nắn chỉnh di động chỏm xương quay và xương cổ tay; Tiêm bao gân De Quervain, tiêm ròng rọc A1 ngón tay lò xo, hoặc tiêm thủy dịch giải ép thần kinh giữa ống cổ tay (Hydrodissection) dưới hướng dẫn siêu âm (Xem Web 1: Tiêm Ống Cổ Tay, Tiêm Gân De Quervain, Tiêm Ngón Tay Lò Xo, Tiêm Gân Lồi Cầu Ngoài)."
}

web1_mappings = {
    "cervical-pain": [
        {"id": "cervical-medial-branch-ton", "nameVi": "Phong bế nhánh trong cổ & thần kinh chẩm thứ 3 (TON)", "role": "Chẩn đoán & điều trị đau diện khớp cổ (Facet C2-C7) và đau đầu do căn nguyên cổ (Cervicogenic Headache)"},
        {"id": "cervical-nerve-root", "nameVi": "Phong bế rễ thần kinh gai sống cổ chọn lọc C5, C6, C7", "role": "Chèn ép rễ cổ do thoát vị đĩa đệm hoặc hẹp lỗ liên hợp gây đau lan tỏa cánh tay"},
        {"id": "occipital-nerve", "nameVi": "Phong bế thần kinh chẩm lớn và chẩm bé (GON & LON Block)", "role": "Đau dây thần kinh chẩm (Occipital Neuralgia) và đau nửa đầu migraine kháng trị"},
        {"id": "stellate-ganglion", "nameVi": "Phong bế chuỗi hạch giao cảm cổ / Hạch sao", "role": "Hội chứng đau cục bộ phức tạp (CRPS type I/II) chi trên, hội chứng Raynaud"}
    ],
    "thoracic-pain": [
        {"id": "esp-block", "nameVi": "Phong bế mặt phẳng cơ dựng gai (ESP Block)", "role": "Giảm đau toàn diện đa phân đoạn cột sống ngực, đau sau phẫu thuật ngực, đau thần kinh liên sườn"},
        {"id": "intercostal-nerve", "nameVi": "Phong bế dây thần kinh gian sườn (Intercostal Nerve Block)", "role": "Đau dây thần kinh liên sườn sau Zona (PHN), gãy xương sườn, đau sụn sườn Tietze"}
    ],
    "lumbopelvic-pain": [
        {"id": "sacroiliac-joint", "nameVi": "Tiêm khớp cùng chậu dưới siêu âm (SIJ Injection)", "role": "Viêm khớp cùng chậu do thoái hóa hoặc viêm cột sống dính khớp HLA-B27"},
        {"id": "sacral-lateral-branch", "nameVi": "Phong bế nhánh ngoài xương cùng S1–S3 (SLBB)", "role": "Xác định đau khớp cùng chậu trước khi đốt sóng cao tần RFA làm giảm đau lâu dài"},
        {"id": "sacroiliac-joint-rfa", "nameVi": "Đốt sóng cao tần (RFA) khớp cùng chậu (Strip Lesioning)", "role": "Can thiệp nhiệt đông hủy nhánh cảm giác khớp cùng chậu cho ca đau mạn kháng trị"},
        {"id": "lumbar-medial-branch", "nameVi": "Phong bế nhánh trong cột sống thắt lưng & rễ sau L5", "role": "Đau diện khớp thắt lưng (Lumbar Facet Syndrome) tăng khi ưỡn và xoay cột sống"},
        {"id": "caudal-epidural", "nameVi": "Tiêm ngoài màng cứng qua khe xương cùng (Caudal Epidural)", "role": "Thoát vị đĩa đệm thắt lưng, hẹp ống sống thắt lưng, đau rễ thần kinh tọa hai bên"},
        {"id": "piriformis-muscle", "nameVi": "Tiêm cơ hình lê dưới siêu âm (Piriformis Injection)", "role": "Hội chứng cơ hình lê (Piriformis Syndrome) chèn ép thần kinh tọa ở khuyết ngồi lớn"},
        {"id": "pudendal-nerve", "nameVi": "Phong bế thần kinh thẹn tại gai ngồi (Pudendal Nerve Block)", "role": "Hội chứng đau thần kinh thẹn kẹp giữa dây chằng cùng gai và cùng ụ ngồi"}
    ],
    "hip-groin-pain": [
        {"id": "hip-intraarticular", "nameVi": "Tiêm nội khớp háng (Tiếp cận dọc cổ xương đùi)", "role": "Thoái hóa khớp háng nguyên phát, rách sụn viền ổ cối, viêm bao hoạt dịch khớp háng"},
        {"id": "hip-lateral-approach", "nameVi": "Tiêm nội khớp háng tiếp cận lối ngoài", "role": "Lựa chọn thay thế tối ưu khi bệnh nhân béo phì hoặc khó tiếp cận ngách trước"},
        {"id": "hip-joint-denervation", "nameVi": "Diệt thần kinh cảm giác khớp háng (Hip Denervation / RFA)", "role": "Thoái hóa khớp háng nặng không thể phẫu thuật thay khớp nhân tạo"},
        {"id": "trochanteric-bursa", "nameVi": "Tiêm phức hợp mấu chuyển lớn & bao hoạt dịch (GTPS)", "role": "Hội chứng đau mấu chuyển lớn, viêm bao hoạt dịch và bệnh lý gân cơ mông nhỡ"},
        {"id": "iliopsoas-bursa", "nameVi": "Tiêm gân, cơ và bao hoạt dịch thắt lưng chậu (Iliopsoas)", "role": "Viêm bao hoạt dịch thắt lưng chậu, hội chứng háng bật tanh tách phía trước"},
        {"id": "lfcn-block", "nameVi": "Phong bế thần kinh bì đùi ngoài (LFCN Block)", "role": "Đau dị cảm mặt ngoài đùi (Meralgia Paresthetica) do chèn ép dưới dây chằng bẹn"},
        {"id": "ilioinguinal-nerve", "nameVi": "Phong bế thần kinh chậu bẹn & chậu hạ vị", "role": "Đau vùng bẹn bìu dai dẳng sau mổ thoát vị bẹn hoặc mổ bắt con"}
    ],
    "knee-leg-foot-pain": [
        {"id": "knee-suprapatellar", "nameVi": "Tiêm nội khớp gối qua ngách trên bánh chè (Suprapatellar Recess)", "role": "Thoái hóa khớp gối, tràn dịch khớp gối, tiêm Axit Hyaluronic hoặc Corticoid"},
        {"id": "genicular-nerves", "nameVi": "Phong bế & Diệt thần kinh cảm giác khớp gối (Genicular RFA)", "role": "Đau khớp gối mạn tính kháng trị do thoái hóa hoặc đau dai dẳng sau thay khớp gối"},
        {"id": "bakers-cyst", "nameVi": "Chọc hút, phá vách và tiêm nang hoạt dịch khoeo chân (Baker's Cyst)", "role": "Nang Baker căng tức vùng khoeo chèn ép mạch máu thần kinh"},
        {"id": "pes-anserinus", "nameVi": "Tiêm bao hoạt dịch gân chân ngỗng (Pes Anserinus Bursa)", "role": "Viêm bao hoạt dịch gân chân ngỗng mặt trong dưới gối"},
        {"id": "patellar-tendon-fenestration", "nameVi": "Can thiệp châm kim đa điểm và bóc tách gân bánh chè", "role": "Bệnh lý thoái hóa gân bánh chè (Jumper's Knee) kháng trị"},
        {"id": "distal-itb-bursa", "nameVi": "Tiêm bao hoạt dịch dải chậu chày xa (Distal ITB Bursa)", "role": "Hội chứng dải chậu chày (Runner's Knee) đau chói lồi cầu ngoài đùi"},
        {"id": "tibiotalar-joint", "nameVi": "Tiêm nội khớp cổ chân (Khớp chày - sên lối trước)", "role": "Thoái hóa khớp cổ chân, viêm màng hoạt dịch khớp chày sên sau chấn thương"},
        {"id": "subtalar-joint", "nameVi": "Tiêm nội khớp dưới sên tiếp cận lối ngoài", "role": "Đau vẹo trong bàn chân, thoái hóa khớp dưới sên sau gãy xương gót"},
        {"id": "ankle-nerve-blocks", "nameVi": "Bộ phong bế 5 dây thần kinh cảm giác cổ bàn chân", "role": "Giảm đau phẫu thuật bàn ngón chân, hội chứng ống cổ chân (Tarsal Tunnel)"},
        {"id": "plantar-fascia", "nameVi": "Tiêm cân gan chân điều trị Viêm cân gan chân (Plantar Fasciitis)", "role": "Viêm cân gan chân bám xương gót dai dẳng không đáp ứng vật lý trị liệu"}
    ],
    "shoulder-pain": [
        {"id": "sasd-bursa", "nameVi": "Tiêm bao hoạt dịch dưới mỏm cùng - dưới cơ delta (SASD Bursa)", "role": "Hội chứng xung đột dưới mỏm cùng (SAIS), viêm bao hoạt dịch dưới cơ delta"},
        {"id": "glenohumeral-posterior", "nameVi": "Tiêm khớp ổ chảo cánh tay lối sau (Posterior Glenohumeral)", "role": "Đông cứng khớp vai (Frozen Shoulder), thoái hóa khớp ổ chảo cánh tay"},
        {"id": "glenohumeral-anterior", "nameVi": "Tiêm khớp ổ chảo cánh tay tiếp cận lối trước", "role": "Tiếp cận thay thế khi bệnh nhân hạn chế xoay trong hoặc tổn thương bao khớp sau"},
        {"id": "biceps-tendon", "nameVi": "Tiêm bao gân đầu dài cơ nhị đầu cánh tay (LHBT Injection)", "role": "Viêm bao gân nhị đầu trong rãnh gian củ xương cánh tay"},
        {"id": "ac-joint", "nameVi": "Tiêm khớp cùng vai - đòn (Acromioclavicular Joint Injection)", "role": "Thoái hóa khớp cùng đòn, viêm khớp cùng đòn sau chấn thương va đập"},
        {"id": "suprascapular-nerve", "nameVi": "Phong bế thần kinh trên vai (Suprascapular Nerve Block)", "role": "Giảm đau toàn diện khớp vai trong rách chóp xoay không thể mổ, đông cứng khớp vai"},
        {"id": "calcific-tendinitis-barbotage", "nameVi": "Can thiệp vôi hóa gân chóp xoay - Chọc hút & rửa vôi (Barbotage)", "role": "Viêm gân vôi hóa cấp tính cơ trên gai/dưới gai gây đau vai dữ dội"},
        {"id": "prp-platelet-rich-plasma", "nameVi": "Liệu pháp Huyết tương giàu tiểu cầu (PRP) cơ xương khớp", "role": "Rách bán phần gân chóp xoay, thoái hóa gân mạn tính không đáp ứng corticoid"}
    ],
    "elbow-wrist-hand-pain": [
        {"id": "tennis-elbow", "nameVi": "Tiêm gân lồi cầu ngoài xương cánh tay (Tennis Elbow Injection)", "role": "Viêm gân cơ duỗi cổ tay quay ngắn (ECRB) mạn tính"},
        {"id": "golfers-elbow", "nameVi": "Tiêm gân lồi cầu trong xương cánh tay (Golfer's Elbow Injection)", "role": "Viêm gân cơ gấp cổ tay và cơ sấp tròn bám lồi cầu trong"},
        {"id": "elbow-intraarticular", "nameVi": "Tiêm nội khớp khuỷu tay (Khớp quay - lồi cầu con)", "role": "Thoái hóa khớp khuỷu, viêm màng hoạt dịch khớp khuỷu sau chấn thương"},
        {"id": "carpal-tunnel", "nameVi": "Bóc tách thủy dịch thần kinh giữa trong Hội chứng Ống Cổ Tay", "role": "Hội chứng ống cổ tay mức độ nhẹ đến trung bình, giảm áp lực bao dây thần kinh"},
        {"id": "de-quervain", "nameVi": "Tiêm bao gân De Quervain - Ngăn duỗi số 1 cổ tay", "role": "Viêm bao gân cơ dạng dài và duỗi ngắn ngón cái (APL & EPB)"},
        {"id": "trigger-finger", "nameVi": "Tiêm điều trị Ngón tay lò xo / Ngón tay cò súng (Trigger Finger)", "role": "Viêm dày ròng rọc A1 ngón tay, kẹt gân gấp khi cử động"},
        {"id": "cmc1-joint", "nameVi": "Tiêm khớp thang - bàn ngón cái (Khớp CMC-1 / Rhizarthrosis)", "role": "Thoái hóa khớp gốc ngón cái gây đau khi cầm nắm, vặn chìa khóa"}
    ],
    "systemic-widespread": []
}

# Now, attach figures, somatic dysfunctions, intervention guidance, and Web 1 procedures directly
for mod in symptom_modules:
    mod_id = mod['id']
    mod['stage_2_somatic_dysfunctions'] = somatic_dysfunctions_map.get(mod_id, [])
    mod['stage_3_guidemap_intervention'] = guidemap_intervention_map.get(mod_id, '')
    mod['recommended_web1_procedures'] = web1_mappings.get(mod_id, [])

    mod_figs = mod['figures']
    
    # 1. Attach figures to examination_procedures
    for proc in mod.get('examination_procedures', []):
        matched = match_figs_for_exam(proc['name'], mod_figs)
        proc['figures'] = matched
        
    # 2. Attach figures to red_flags
    for rf in mod.get('red_flags', []):
        rf_text = (rf.get('category', '') + ' ' + rf.get('signs', '')).lower()
        matched = []
        for f in mod_figs:
            f_text = (f['caption_en'] + ' ' + f['caption_vi']).lower()
            if any(k in rf_text and k in f_text for k in ['fracture', 'gãy', 'dens', 'alar', 'bruit', 'thổi', 'pars', 'spondylolysis', 'herniation', 'thoát vị', 'meniscal', 'sụn chêm', 'achilles', 'gân gót', 'avn', 'impingement', 'tear']):
                matched.append(f)
        rf['figures'] = matched[:2]
        
    # 3. Attach figures to visceral_referrals
    for vr in mod.get('visceral_referrals', []):
        vr_text = (vr.get('source', '') + ' ' + vr.get('pattern', '')).lower()
        matched = []
        for f in mod_figs:
            f_text = (f['caption_en'] + ' ' + f['caption_vi']).lower()
            if any(k in vr_text and k in f_text for k in ['quadrant', 'tạng', 'artery', 'động mạch', 'vein', 'vasculature', 'nerve', 'thần kinh', 'bruit', 'dermatome']):
                matched.append(f)
        vr['figures'] = matched[:2]

print("Successfully structured 8 Symptom-based Clinical Modules!")
for m in symptom_modules:
    proc_fig_count = sum(len(p.get('figures', [])) for p in m.get('examination_procedures', []))
    rf_fig_count = sum(len(rf.get('figures', [])) for rf in m.get('red_flags', []))
    print(f"  {m['icon']} {m['title_vi'][:40]} -> {len(m.get('examination_procedures', []))} exams ({proc_fig_count} figs embedded), {len(m.get('figures', []))} total atlas figs")

# Write to data/screening.js
output_content = f"""// MSK-Differential Screening Pro & Clinical Guidemap Database
// Master Edition based on Prof. Deepak Sebastian: Differential Screening of Regional Pain in Musculoskeletal Practice (526 pages)
// 8 Symptom-based Clinical Guidemaps + 3-Stage Decision Algorithm + Red Flags Master + Lab Tests Checker + Drug-Induced Pain Checker + 279 Positive Atlas Figures

const SCREENING_DATA = {json.dumps(symptom_modules, ensure_ascii=False, indent=2)};

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

print(f"Successfully written data/screening.js (Size: {os.path.getsize('data/screening.js')} bytes)")

# Write to data/screening.fallback.js
fallback_content = f"""// MSK-Differential Screening Pro - Resilient Fallback Shield
// Auto-generated stable fallback dataset with 8 Symptom-based Clinical Guidemaps

const STABLE_SCREENING_FALLBACK = {json.dumps(symptom_modules, ensure_ascii=False, indent=2)};
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

print(f"Successfully written data/screening.fallback.js (Size: {os.path.getsize('data/screening.fallback.js')} bytes)")
