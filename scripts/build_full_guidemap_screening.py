# -*- coding: utf-8 -*-
"""
Build Complete Clinical Guidemap Screening Database (10 Chapters)
Based on Prof. Deepak Sebastian: Differential Screening of Regional Pain in Musculoskeletal Practice
Dual-mode: Detailed Textbook Knowledge + Interactive Clinical Guidemap
"""

import json
import os
import sys

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

# Load enriched figures
with open('data/deepak_figures_enriched.json', encoding='utf-8') as f:
    enriched_figures = json.load(f)

figures_by_chapter = {}
for fig in enriched_figures:
    ch = fig['chapter']
    if ch not in figures_by_chapter:
        figures_by_chapter[ch] = []
    figures_by_chapter[ch].append(fig)

print(f"Loaded {len(enriched_figures)} figures across {len(figures_by_chapter)} chapters.")

# Define the 10 Comprehensive Screening Modules
modules = [
    # ----------------------------------------------------
    # CHAPTER 1: THOUGHT PROCESS & 3-STAGE GUIDEMAP
    # ----------------------------------------------------
    {
        "id": "ch01-thought-process",
        "chapter": 1,
        "region": "foundation",
        "region_vi": "Tư Duy Cốt Lõi & Thuật Toán",
        "title": "Introduction and Thought Process in Regional Pain",
        "title_vi": "Tư Duy 3 Giai Đoạn Sàng Lọc Lâm Sàng & Thuật Toán Guidemap Ca Đau Khó",
        "author": "GS. Deepak Sebastian (Chapter 1, pp. 1-6)",
        "summary": "Mô hình tư duy chẩn đoán phân biệt hiện đại (Direct Access MSK Model): Thoát khỏi lối mòn chỉ nghĩ đến 'Chấn thương & Thoái hóa', thiết lập tư duy sàng lọc toàn diện 10 nhóm căn nguyên hệ thống (Mạch máu, Nhiễm trùng, Ung thư, Bẩm sinh, Đau do thuốc, Nội tiết, Tự miễn, Dinh dưỡng, Chấn thương, Thoái hóa). Ứng dụng thuật toán 3 giai đoạn để phân định an toàn: Giai đoạn 1 (Rà soát Cờ đỏ & Bệnh hệ thống) -> Giai đoạn 2 (Xác định tổn thương mô & Rối loạn cơ sinh học hệ vận động (Somatic Dysfunctions)) -> Giai đoạn 3 (Định hướng can thiệp: Phục hồi chức năng, Tiêm siêu âm can thiệp hay Chuyển tuyến cấp cứu).",
        "stage_1_systemic_red_flags": [
            {
                "category": "10 Nhóm Căn Nguyên Hệ Thống Cần Rà Soát (The 10 Systemic Categories)",
                "signs": "1. Mạch máu (Phình bóc tách ĐMC, VBI, huyết khối tĩnh mạch, tắc mạch chi);\n2. Nhiễm trùng (Viêm khớp nhiễm trùng, viêm đĩa đệm đốt sống, áp-xe khoang sâu, lao);\n3. Ung thư ác tính (U xương nguyên phát: Osteosarcoma, Ewing; U di căn PB KTL: Tiền liệt tuyến, Vú, Thận, Tuyến giáp, Phổi; Đa u tủy xương);\n4. Bẩm sinh / Dị tật cấu trúc (Klippel-Feil, nứt gai sống, trượt đốt sống);\n5. Đau do thuốc / hóa chất (Statin gây tiêu cơ, Quinolone đứt gân, Steroid hoại tử chỏm, Aromatase inhibitors đau khớp);\n6. Nội tiết (Bệnh đái tháo đường, cường/suy cận giáp, to đầu chi, Cushing);\n7. Tự miễn (Viêm cột sống dính khớp HLA-B27, Viêm khớp dạng thấp Anti-CCP, Lupus ban đỏ hệ thống, Viêm đa cơ);\n8. Thiếu hụt dinh dưỡng & Chuyển hóa (Loãng xương xẹp đốt sống, nhuyễn xương thiếu Vitamin D, Gout tinh thể urate, Paget xương);\n9. Chấn thương cơ xương khớp (Gãy xương không vững, rách dây chằng/sụn chêm hoàn toàn, trật khớp);\n10. Thoái hóa cơ học (Hẹp ống sống, thoái hóa khớp, xung đột gân bao khớp).",
                "action": "Nếu có bất kỳ dấu hiệu gợi ý căn nguyên 1-8: Bắt buộc dừng chỉ định can thiệp thủ thuật tại chỗ, tiến hành xét nghiệm cận lâm sàng (Lab tests) và chẩn đoán hình ảnh chuyên sâu trước khi can thiệp."
            },
            {
                "category": "Cờ Vàng Tâm Lý & Dấu Hiệu Không Do Thực Thể (Yellow Flags & Non-organic Signs)",
                "signs": "Triệu chứng đau lan tỏa không phù hợp giải phẫu thần kinh, điểm đau nhảy nhót, niềm tin thảm họa hóa (Catastrophizing), lo âu/trầm cảm nặng, yếu tố vụ lợi thứ phát (Secondary gain: tranh chấp pháp lý tai nạn lao động, bồi thường bảo hiểm). Dấu hiệu Waddell dương tính.",
                "action": "Đánh giá thang điểm trầm cảm/lo âu (PHQ-9, GAD-7), giải thích tâm lý hành vi (CBT), tránh các can thiệp xâm lấn không cần thiết."
            }
        ],
        "red_flags": [
            {
                "category": "Cờ Đỏ Hệ Thống Cấp Cứu (Stage 1 Red Flags Triage)",
                "signs": "Sốt cao kèm sưng nóng đỏ đau 1 khớp đơn độc, đau dữ dội về đêm không liên quan vận động, sụt cân không chủ ý > 5kg/tháng, suy giảm thần kinh tiến triển nhanh (liệt, đại tiểu tiện không tự chủ), đau xé rách ngực lưng, mạch ngoại vi yếu/mất.",
                "action": "Chuyển viện/Cấp cứu chuyên khoa ngay trong ngày. Tuyệt đối KHÔNG tiêm giảm đau làm lu mờ triệu chứng."
            },
            {
                "category": "Nhận Diện Ca Đau Khớp Kháng Trị / Không Điển Hình",
                "signs": "Đau khớp điều trị thông thường > 6-12 tuần không thuyên giảm, đau tăng lên khi nghỉ ngơi, đau đối xứng nhiều khớp di chuyển, đáp ứng kém với NSAID/thuốc giảm đau bậc 2.",
                "action": "Kích hoạt Quy trình rà soát Ch 2 (Xét nghiệm miễn dịch/chuyển hóa) và Ch 3 (Tiền sử dùng thuốc dài ngày)."
            }
        ],
        "visceral_referrals": [
            {
                "source": "Tổng quan Nguyên lý Chuyển đau từ Tạng (Visceral Pain Referral Concepts)",
                "pattern": "Đau phát sinh từ xung động tạng truyền qua dây giao cảm/phó giao cảm vào cùng sừng sau tủy sống với cảm giác soma (Convergence-Projection Theory). Não bộ giải mã sai tín hiệu tạng thành đau vùng cơ xương khớp tương ứng khoanh tủy (Dermatome/Myotome).",
                "differential": "Đau tạng thường âm ỉ, sâu, co thắt, không có điểm đau khu trú nông khi sờ nắn, không đổi theo tư thế cơ học hoặc cử động khớp chủ động/thụ động."
            }
        ],
        "drug_induced": [
            "Khái niệm Iatrogenic Musculoskeletal Pain (Đau cơ xương khớp do thầy thuốc): Chiếm tới 10-15% ca đau khớp/cơ không rõ nguyên nhân ở phòng khám ngoại trú.",
            "Luôn khai thác tiền sử sử dụng: Statin, Quinolone, Corticoid, Kháng Estrogen/Aromatase, Bisphosphonate, Hóa chất ung thư, Thuốc ức chế miễn dịch."
        ],
        "examination_procedures": [
            {
                "name": "Quy trình Khám Sàng lọc Toàn diện 3 Bước (Sebastian 3-Stage Screening Protocol)",
                "technique": "Bước 1: Rà soát tiền sử 10 nhóm bệnh hệ thống & hỏi cờ đỏ (sốt, sụt cân, ung thư, tim mạch). Bước 2: Khám vận động chủ động/thụ động (AROM/PROM) tìm kiếm mô hình bao khớp (Capsular pattern), khám cơ lực từng cơ (Myotome), cảm giác (Dermatome) và phản xạ gân xương (DTR). Bước 3: Nghiệm pháp căng thần kinh và nghiệm pháp đặc hiệu vùng.",
                "significance": "Xác định rõ ràng nguồn gốc triệu chứng là Cơ học (Mechanical), Thần kinh (Neuropathic) hay Hệ thống (Systemic) trước khi ra quyết định điều trị."
            },
            {
                "name": "Đánh giá Dấu hiệu Thực thể Không do Cơ quan (Waddell's Non-organic Signs)",
                "technique": "5 nhóm dấu hiệu Waddell: 1. Ấn chẩn nông đau quá mức; 2. Nghiệm pháp mô phỏng (Xoay vai/chậu nguyên khối hoặc ấn dọc đỉnh đầu gây đau lưng); 3. Phân tán chú ý (Đo SLR tư thế ngồi so với nằm); 4. Yếu cơ từng lúc kiểu giật cục (Cogwheel weakness) không theo giải phẫu; 5. Phản ứng quá khích (la hét, thở dốc khi chạm nhẹ).",
                "significance": "Có >= 3/5 dấu hiệu cảnh báo yếu tố tâm lý xã hội hoặc vụ lợi thứ phát (Yellow Flags)."
            }
        ],
        "differential_table": [
            {"condition": "Đau cơ học thuần túy (Mechanical MSK Pain)", "onset": "Liên quan vận động, tư thế, chấn thương", "aggravating": "Tăng khi cử động/tải trọng, giảm khi nghỉ ngơi", "key_differentiator": "Khám tái hiện đau chính xác bằng động tác chuyên biệt, XN cận lâm sàng bình thường"},
            {"condition": "Đau chuyển từ tạng (Visceral Referred Pain)", "onset": "Đột ngột hoặc chu kỳ, không rõ chấn thương", "aggravating": "Liên quan bữa ăn, chu kỳ kinh, hô hấp, không đổi khi xoay vặn cột sống", "key_differentiator": "Không có điểm đau khu trú khi ấn nông, khám khớp bình thường"},
            {"condition": "Đau do viêm hệ thống / Ung thư (Systemic/Malignant)", "onset": "Âm ỉ, tiến triển liên tục, tăng về đêm", "aggravating": "Không giảm khi nằm nghỉ, kèm sốt nhẹ, mệt mỏi, sụt cân", "key_differentiator": "ESR/CRP tăng cao, thiếu máu mạn, tổn thương tiêu xương/đặc xương trên hình ảnh"}
        ],
        "figures": []
    },

    # ----------------------------------------------------
    # CHAPTER 2: BIOCHEMISTRY & LAB TESTS CHECKER
    # ----------------------------------------------------
    {
        "id": "ch02-biochemistry-lab-tests",
        "chapter": 2,
        "region": "foundation",
        "region_vi": "Xét Nghiệm Cận Lâm Sàng",
        "title": "Chemical Basis of the Human Body with Relevance to Regional Musculoskeletal Pain",
        "title_vi": "Cơ Sở Hóa Sinh & Bảng Tra Cứu Xét Nghiệm Cận Lâm Sàng Cơ Xương Khớp",
        "author": "GS. Deepak Sebastian (Chapter 2, pp. 7-63)",
        "summary": "Kho tàng cận lâm sàng thiết yếu cho bác sĩ cơ xương khớp: Phân tích toàn diện huyết học (CBC, ESR), sinh hóa (CRP, Acid Uric, Canxi, Phosphatase kiềm, Creatine Kinase), miễn dịch học (HLA-B27, RF, Anti-CCP, ANA, Điện di đạm Bence-Jones), phân tích nước tiểu và dấu ấn u xương/mô mềm. Hướng dẫn chi tiết giá trị bình thường, ngưỡng cảnh báo bệnh lý và ý nghĩa quyết định khi đối mặt với ca viêm khớp không điển hình, đau xương kháng trị, nghi ngờ ung thư di căn hoặc đa u tủy xương.",
        "stage_1_systemic_red_flags": [
            {
                "category": "Cờ Đỏ Tốc Độ Máu Lắng Tăng Cao Vọt (ESR > 100 mm/h)",
                "signs": "Đau xương âm ỉ toàn thân, đau cột sống dai dẳng tăng về đêm, mệt mỏi suy kiệt. Cần nghĩ ngay đến: Đa u tủy xương (Multiple Myeloma), Viêm động mạch thái dương (Temporal Arteritis / GCA), Viêm tủy xương (Osteomyelitis) hoặc Ung thư di căn xương.",
                "action": "Chỉ định Điện di đạm huyết thanh (SPEP), Định lượng chuỗi nhẹ Bence-Jones niệu, Chụp X-quang cột sống/khung chậu tìm ổ tiêu xương đục lỗ (punched-out lesions) và MRI."
            },
            {
                "category": "Cờ Đỏ Tăng Canxi Máu & Tăng Phosphatase Kiềm (ALP)",
                "signs": "Tăng Canxi (> 10.5 mg/dL) kèm đau xương, sỏi thận, lú lẫn, rối loạn tiêu hóa: Cường cận giáp nguyên phát hoặc tổn thương tiêu xương ác tính. ALP tăng vọt (> 150-500 U/L): Bệnh Paget xương, Ung thư xương nguyên phát (Osteosarcoma) hoặc di căn đặc xương từ ung thư tiền liệt tuyến/vú.",
                "action": "Định lượng PTH (Parathyroid Hormone), PSA, Chụp Xạ hình xương (Bone Scan) hoặc SPECT-CT toàn thân."
            },
            {
                "category": "Cờ Đỏ Tiêu Cơ Vân Cấp (Rhabdomyolysis / Extreme CPK Elevation)",
                "signs": "Creatine Kinase (CK/CPK) tăng > 1,000 - 50,000 U/L, cơ bắp căng đau cứng dữ dội, nước tiểu màu đỏ nâu sẫm như xá xị (Myoglobin niệu), thiểu niệu hoặc vô niệu.",
                "action": "Cấp cứu truyền dịch tĩnh mạch đệm kiềm hóa nước tiểu (Natri Bicarbonat) khẩn cấp để phòng hoại tử ống thận cấp suy thận cấp. Ngừng ngay lập tức Statin hoặc độc chất nghi ngờ."
            }
        ],
        "red_flags": [
            {
                "category": "Bạch Cầu Tăng Cao & Dịch Khớp Mủ (Septic Joint Warning)",
                "signs": "Bạch cầu máu > 12,000 - 20,000/mcL với bạch cầu đa nhân trung tính > 80-90%. Chọc hút dịch khớp có bạch cầu dịch khớp > 50,000 - 100,000/mcL (> 75% PMN), dịch đục mủ.",
                "action": "CẤP CỨU NGOẠI KHOA: Rửa khớp, dẫn lưu khớp qua nội soi hoặc mổ hở + Kháng sinh đường tĩnh mạch phổ rộng ngay lập tức. CHỐNG CHỈ ĐỊNH TIÊM CORTICOID VÀO KHỚP!"
            },
            {
                "category": "Dấu Ấn Ung Thư Di Căn Xương (PB KTL Metastases)",
                "signs": "PSA tăng vọt ở nam giới đau thắt lưng/khung chậu (K tiền liệt tuyến di căn); Tăng CA 15-3 (K vú), CEA (K đại tràng/phổi), AFP (K gan) kèm ổ khuyết xương trên phim.",
                "action": "Chuyển khoa Ung bướu hội chẩn sinh thiết tổn thương xương."
            }
        ],
        "visceral_referrals": [
            {
                "source": "Bệnh lý Chuyển hóa & Suy Thận (Metabolic & Renal Referral)",
                "pattern": "Axit Uric máu tăng lắng đọng tinh thể Urat tại thận gây sỏi thận và suy thận mạn. Ngược lại suy giảm chức năng thận (Creatinine tăng, eGFR giảm) làm giảm thải acid uric gây bùng phát viêm khớp gút tophi đa khớp kháng trị.",
                "differential": "Phân biệt viêm khớp gút (tinh thể hình kim lưỡng chiết quang âm tính) với viêm khớp vôi hóa giả gút CPPD (tinh thể Canxi Pyrophosphate hình thoi lưỡng chiết quang dương tính yếu)."
            }
        ],
        "drug_induced": [
            "Thuốc lợi tiểu Thiazide / Quai: Cạnh tranh bài tiết acid uric tại ống thận, là nguyên nhân hàng đầu gây bùng phát cơn Gút cấp.",
            "Thuốc độc tế bào ung thư: Hội chứng ly giải khối u làm acid uric tăng vọt gây suy thận cấp và đau khớp cấp tính."
        ],
        "examination_procedures": [
            {
                "name": "Bảng Kiểm 7 Nhóm Xét Nghiệm Miễn Dịch Khớp (MSK Immunology Checklist)",
                "technique": "Rút máu tĩnh mạch làm bộ 7 chỉ số: 1. HLA-B27; 2. Yếu tố dạng thấp RF; 3. Kháng thể kháng CCP; 4. Kháng thể kháng nhân ANA; 5. Kháng thể kháng ds-DNA; 6. Tốc độ máu lắng ESR; 7. Định lượng CRP độ nhạy cao (hs-CRP).",
                "significance": "Phân loại dứt khoát nhóm Viêm khớp cột sống huyết thanh âm tính (Seronegative Spondyloarthropathy: HLA-B27+) vs Viêm khớp dạng thấp (RF+, Anti-CCP+) vs Bệnh mô liên kết tự miễn (Lupus: ANA+, ds-DNA+)."
            },
            {
                "name": "Đánh Giá Xét Nghiệm Dịch Khớp (Synovial Fluid Analysis Protocol)",
                "technique": "Chọc dịch khớp vô khuẩn: Đánh giá độ nhớt, màu sắc, tế bào học (số lượng WBC), soi tìm tinh thể dưới kính hiển vi phân cực (MSU vs CPPD) và cấy vi khuẩn làm kháng sinh đồ.",
                "significance": "Tiêu chuẩn vàng phân biệt 4 nhóm dịch khớp: Nhóm 1 Không viêm (Thoái hóa: WBC < 2,000), Nhóm 2 Viêm (Gout/RA: WBC 2,000 - 50,000), Nhóm 3 Nhiễm trùng (WBC > 50,000), Nhóm 4 Tràn máu khớp (Chấn thương/U mạch)."
            }
        ],
        "differential_table": [
            {"condition": "Viêm cột sống dính khớp (Ankylosing Spondylitis)", "onset": "Nam trẻ tuổi 18-35, đau thắt lưng kiểu viêm", "aggravating": "Đau tăng khi nghỉ/sáng sớm, giảm sau vận động", "key_differentiator": "HLA-B27 dương tính (90-95%), X-quang thấy viêm khớp cùng chậu hai bên, cột sống hình cây tre"},
            {"condition": "Viêm khớp dạng thấp (Rheumatoid Arthritis)", "onset": "Nữ 30-55, sưng đau đối xứng các khớp nhỏ bàn tay", "aggravating": "Cứng khớp buổi sáng kéo dài > 1 giờ", "key_differentiator": "Anti-CCP (+) độ đặc hiệu 98%, RF (+), hạt thấp dưới da, tiêu hủy xương đầu khớp đối xứng"},
            {"condition": "Viêm khớp Gút cấp (Acute Gouty Arthritis)", "onset": "Đột ngột nửa đêm, khớp sưng nóng đỏ dữ dội (thường ngón I bàn chân)", "aggravating": "Sau bữa ăn giàu đạm, bia rượu, chấn thương nhẹ", "key_differentiator": "Axit Uric máu tăng, tìm thấy tinh thể Urate hình kim phân cực âm trong dịch khớp"},
            {"condition": "Đa u tủy xương (Multiple Myeloma)", "onset": "Người cao tuổi > 50, đau xương lưng/sườn âm ỉ tăng dần", "aggravating": "Vận động, tì đè lực", "key_differentiator": "ESR > 100 mm/h, Thiếu máu, Tăng canxi máu, Protein Bence-Jones niệu (+), X-quang khuyết xương hình bấm lỗ"}
        ],
        "figures": []
    },

    # ----------------------------------------------------
    # CHAPTER 3: DRUG-INDUCED REGIONAL PAIN
    # ----------------------------------------------------
    {
        "id": "ch03-drug-induced-pain",
        "chapter": 3,
        "region": "foundation",
        "region_vi": "Đau Do Thuốc & Độc Chất",
        "title": "Drug-induced Regional Pain",
        "title_vi": "Đau Cơ Xương Khớp & Bệnh Thần Kinh Ngoại Biên Do Thuốc (Drug-Induced Pain)",
        "author": "GS. Deepak Sebastian (Chapter 3, pp. 64-89)",
        "summary": "Cẩm nang chuyên sâu về các hội chứng đau cơ, viêm đứt gân, thoái hóa hoại tử vô mạch và bệnh thần kinh ngoại biên khởi phát do tác dụng phụ của thuốc tân dược. Chi tiết cơ chế bệnh sinh, nhóm đối tượng nguy cơ cao, biểu hiện lâm sàng đặc thù và phác đồ xử trí khẩn cấp cho các thủ phạm kinh điển: Statin (viêm cơ/tiêu cơ vân), Kháng sinh Fluoroquinolone (viêm hoại tử gân gót Achilles), Corticoid toàn thân (hoại tử vô mạch chỏm xương đùi AVN & xẹp đốt sống), Thuốc ức chế Aromatase (đau khớp AIMS ở bệnh nhân K vú), Bisphosphonate (đau xương bùng phát & gãy xương đùi không điển hình), và Hóa trị ung thư (bệnh đa dây thần kinh CIPN).",
        "stage_1_systemic_red_flags": [
            {
                "category": "Cờ Đỏ Tiêu Cơ Vân Cấp Do Statin (Statin-Induced Rhabdomyolysis)",
                "signs": "Đau cơ dữ dội đối xứng hai đùi/vai, yếu cơ gốc chi không nâng được tay/đứng dậy, nước tiểu màu xá xị sẫm màu. Nguy cơ tăng gấp 10 lần khi phối hợp Statin với Gemfibrozil, Amiodarone, Clarithromycin hoặc Cyclosporine.",
                "action": "Đo CK khẩn cấp. Nếu CK > 5-10 lần giới hạn trên: NGỪNG STATIN NGAY, nhập viện bù dịch kiềm hóa nước tiểu theo dõi chức năng thận."
            },
            {
                "category": "Cờ Đỏ Đứt Gân Gót Achilles Do Kháng Sinh Quinolone (FDA Black Box Warning)",
                "signs": "Bệnh nhân đang hoặc mới dùng Ciprofloxacin, Levofloxacin, Moxifloxacin (trong vòng 1-6 tháng) đột ngột đau nhói vùng gót chân, có cảm giác như bị đá sau gót, mất khả năng đứng nhón gót, Thompson test (+).",
                "action": "NGỪNG QUINOLONE NGAY TỨC THÌ khi có dấu hiệu đau gân đầu tiên. Bất động nẹp cổ chân, cấm chịu lực. Siêu âm Doppler gân gót đánh giá độ rách."
            },
            {
                "category": "Cờ Đỏ Hoại Tử Vô Mạch Chỏm Xương Đùi Do Corticosteroid (AVN / Osteonecrosis)",
                "signs": "Tiền sử dùng Methylprednisolone/Dexamethasone liều cao hoặc kéo dài (trong điều trị Covid-19, Lupus, ghép tạng, Hen phế quản) xuất hiện đau bẹn/háng âm ỉ, đi khập khiễng, đau tăng khi chịu lực.",
                "action": "Chụp MRI khớp háng hai bên khẩn cấp (X-quang giai đoạn sớm thường âm tính). Giải phóng tải trọng khớp (chống nạng), hội chẩn Chấn thương chỉnh hình khoan giảm áp hoặc thay khớp."
            }
        ],
        "red_flags": [
            {
                "category": "Gãy Xương Đùi Không Điển Hình Do Bisphosphonate Kéo Dài (AFF)",
                "signs": "Dùng Alendronate/Zoledronate > 3-5 năm, xuất hiện đau âm ỉ vùng dưới mấu chuyển hoặc thân xương đùi trước khi gãy xương tự phát khi đi lại nhẹ nhàng.",
                "action": "Chụp X-quang xương đùi hai bên tìm dày vỏ xương bên (Beaking sign) và đường nứt vỏ ngoài. Ngừng ngay Bisphosphonate, cân nhắc đóng đinh nội tủy phòng ngừa."
            },
            {
                "category": "Bệnh Thần Kinh Ngoại Biên Nặng Do Hóa Chất Trị Liệu (CIPN)",
                "signs": "Mất cảm giác sâu, mất thăng bằng, dị cảm buốt bỏng ngọn chi sau truyền Cisplatin, Oxaliplatin, Paclitaxel hoặc Vincristine.",
                "action": "Đo điện cơ (EMG), điều chỉnh giảm liều hóa trị, dùng Duloxetine 60mg/ngày."
            }
        ],
        "visceral_referrals": [
            {
                "source": "Độc Tính Thuốc Trên Nội Tạng Gây Đau Chuyển Vùng",
                "pattern": "NSAID dùng kéo dài gây viêm loét thủng dạ dày quy chiếu đau lưng ngực; Thuốc kháng lao (INH/Rifampicin) hoặc Paracetamol quá liều gây viêm gan cấp quy chiếu đau vùng dưới sườn và vai phải.",
                "differential": "Khai thác kỹ danh mục thuốc bệnh nhân đang uống mỗi ngày trước khi chỉ định can thiệp cơ xương khớp."
            }
        ],
        "drug_induced": [
            "Statins: Atorvastatin, Simvastatin, Rosuvastatin -> Myalgia, Myositis, Rhabdomyolysis.",
            "Fluoroquinolones: Ciprofloxacin, Levofloxacin -> Tendinitis & Achilles Tendon Rupture.",
            "Corticosteroids: Prednisone, Methylprednisolone -> AVN, Osteoporosis, Steroid Myopathy.",
            "Aromatase Inhibitors: Anastrozole, Letrozole, Exemestane -> Severe Hand/Knee Arthralgia (AIMS).",
            "Bisphosphonates: Alendronate, Zoledronic acid -> Acute Bone Pain, Atypical Femur Fracture, ONJ.",
            "Chemotherapy: Cisplatin, Oxaliplatin, Paclitaxel -> Sensory-Motor Peripheral Neuropathy (CIPN).",
            "Antiretrovirals (NRTIs): Zidovudine -> Mitochondrial Myopathy & Lactic Acidosis.",
            "Antirheumatics: Colchicine (độc tính thần kinh cơ khi dùng chung Statin), Leflunomide (bệnh dây TK)."
        ],
        "examination_procedures": [
            {
                "name": "Nghiệm Pháp Thompson Đánh Giá Đứt Gân Gót Do Quinolone (Thompson Squeeze Test)",
                "technique": "Bệnh nhân nằm sấp, bàn chân thả lỏng qua mép giường. Người khám dùng một tay bóp mạnh vào khối cơ bụng chân (Gastrocnemius - Soleus).",
                "significance": "Bình thường bàn chân sẽ gập lòng (plantarflexion). Nếu bàn chân bất động không gập -> Dương tính (Đứt hoàn toàn gân gót Achilles)."
            },
            {
                "name": "Khám Sàng Lọc Bệnh Đa Dây Thần Kinh Ngoại Biên Do Thuốc (Semmes-Weinstein & Tuning Fork)",
                "technique": "Dùng sợi cước đơn Monofilament 10g khám cảm giác xúc giác tại 10 điểm gan bàn chân; Dùng âm thoa tần số 128 Hz đặt vào mấu xương bàn chân ngón cái và mắt cá trong khám cảm giác rung vỏ xương.",
                "significance": "Mất cảm giác bảo vệ hoặc mất cảm giác rung âm thoa khẳng định tổn thương sợi trục thần kinh ngoại vi do độc chất/thuốc (Neuropathy)."
            }
        ],
        "differential_table": [
            {"condition": "Đau cơ do Statin (Statin-Induced Myalgia)", "onset": "Vài tuần đến vài tháng sau khi dùng/tăng liều statin", "aggravating": "Vận động thể lực, phối hợp Fibrate", "key_differentiator": "Đau mỏi cơ gốc chi đối xứng hai bên, CK có thể tăng hoặc bình thường, thuyên giảm rõ rệt sau ngưng thuốc 2-4 tuần"},
            {"condition": "Viêm đa cơ tự miễn (Polymyositis)", "onset": "Từ từ, không liên quan thuốc statin", "aggravating": "Tiến triển liên tục", "key_differentiator": "Yếu cơ gốc chi nặng, CK tăng rất cao (> 10-50 lần), kháng thể kháng Jo-1 (+), sinh thiết cơ hoại tử và thâm nhiễm viêm lympho"},
            {"condition": "Hội chứng đau khớp do Aromatase Inhibitor (AIMS)", "onset": "2 - 6 tháng sau khi bắt đầu điều trị ung thư vú", "aggravating": "Buổi sáng, thời tiết lạnh", "key_differentiator": "Đau khớp đối xứng bàn tay/cổ tay/gối, cứng khớp sáng > 30-60 phút, không tăng ESR/CRP, X-quang khớp không hẹp khe khớp"},
            {"condition": "Bệnh cơ do Corticosteroid (Steroid Myopathy)", "onset": "Dùng steroid liều cao kéo dài (> 4-6 tuần)", "aggravating": "Đứng lên từ ghế, leo cầu thang", "key_differentiator": "Yếu cơ đùi đối xứng nhưng KHÔNG ĐAU CƠ, nồng độ men CK hoàn toàn bình thường, hồi phục khi giảm liều"}
        ],
        "figures": []
    },

    # ----------------------------------------------------
    # CHAPTER 4: CERVICAL SPINE SCREENING
    # ----------------------------------------------------
    {
        "id": "ch04-cervical-spine",
        "chapter": 4,
        "region": "spine",
        "region_vi": "Cột Sống Cổ",
        "title": "Cervical Pain Differential Screening",
        "title_vi": "Sàng Lọc Chẩn Đoán Phân Biệt Đau Cột Sống Cổ",
        "author": "GS. Deepak Sebastian (Chapter 4, pp. 90-172)",
        "summary": "Tiếp cận 3 giai đoạn sàng lọc đau cổ chuyên sâu: Loại trừ triệt để cờ đỏ tủy cổ (Cervical Spondylotic Myelopathy), thiếu máu đốt sống thân nền (VBI với quy tắc 5D 3N), bóc tách động mạch đốt sống/động mạch cảnh, mất vững khớp đội trục (C1-C2 Instability), ung thư di căn và áp-xe vùng cổ. Phân biệt tổn thương bệnh học mô rễ thần kinh (Radiculopathy) vs diện khớp (Facet syndrome) vs đau cơ mạc (Myofascial) vs hội chứng lối thoát lồng ngực (TOS) vs đau chuyển từ tim và u đỉnh phổi Pancoast. Tích hợp trọn bộ 70 hình ảnh giải phẫu, cơ học trượt khớp và kỹ thuật khám từ giáo trình gốc.",
        "stage_1_systemic_red_flags": [
            {
                "category": "Cờ Đỏ Chèn Ép Tủy Cổ (Cervical Spondylotic Myelopathy - CSM)",
                "signs": "Dáng đi thất điều (gait ataxia, đi không vững trong bóng tối), bàn tay vụng về mất khéo léo (khó cài cúc áo, hay làm rơi đũa/chén), dấu hiệu Hoffman dương tính, phản xạ gân xương tăng vọt (hyperreflexia), giật rung bàn chân (Clonus +), dấu hiệu Babinski (+), dấu hiệu Lhermitte (cảm giác điện giật chạy dọc cột sống khi cúi cổ).",
                "action": "CHỐNG CHỈ ĐỊNH NẮN CHỈNH / KÉO GIÃN / TIÊM MÙ! Chụp MRI cột sống cổ khẩn cấp, chuyển khám chuyên khoa Phẫu thuật Thần kinh ngay lập tức."
            },
            {
                "category": "Cờ Đỏ Mạch Máu Cổ (VBI & Cervical Artery Dissection)",
                "signs": "Bộ quy tắc 5D: Dizziness (chóng mặt), Diplopia (nhìn đôi), Dysarthria (nói khó), Dysphagia (nuốt khó), Drop attacks (khuỵu ngã đột ngột nhưng không mất ý thức); Bộ 3N: Nausea (buồn nôn), Numbness (tê bì mặt hoặc nửa người), Nystagmus (rung giật nhãn cầu). Đau đầu - cổ dữ dội xuất hiện đột ngột như sét đánh (Thunderclap headache).",
                "action": "CẤP CỨU MẠCH MÁU NÃO: Chụp CTA hoặc MRA mạch não - cổ khẩn cấp. TUYỆT ĐỐI KHÔNG xoay bẻ cổ."
            },
            {
                "category": "Cờ Đỏ Mất Vững Khớp Đội - Trục (Atlantoaxial C1-C2 Instability)",
                "signs": "Cảm giác đầu lắc lư không vững, bệnh nhân phải dùng tay giữ đầu khi chuyển tư thế, dị cảm tứ chi khi cúi đầu. Thường gặp sau chấn thương giật cổ (Whiplash), bệnh nhân Viêm khớp dạng thấp lâu năm bào mòn dây chằng ngang, hoặc hội chứng Down.",
                "action": "Nẹp cổ cứng C-spine collar cố định ngay. Chụp X-quang cổ động cúi-ngửa (Flexion-Extension) hoặc CT scan đo khoảng cách mỏm nha - cung trước C1 (ADI > 3mm ở người lớn là mất vững)."
            },
            {
                "category": "Cờ Đỏ U Bướu & Nhiễm Trùng Cổ (Malignancy & Deep Neck Infection)",
                "signs": "Sốt, sưng đau hạch cổ cứng chắc, nuốt đau, khó thở, thở rít (stridor); đau cổ liên tục tăng về đêm không giảm khi nằm nghỉ, tiền sử ung thư vú/phổi/tiền liệt tuyến.",
                "action": "Nội soi tai mũi họng, chụp CT/MRI cổ ngực có tiêm thuốc cản quang, xét nghiệm công thức bạch cầu, CRP, ESR."
            }
        ],
        "red_flags": [
            {
                "category": "Cờ Đỏ Tủy Cổ & Động Mạch Đốt Sống",
                "signs": "CSM (Hoffman+, Babinski+, rối loạn dáng đi) & VBI (5D 3N, chóng mặt khi ngửa xoay cổ tối đa).",
                "action": "Chụp MRI/CTA cổ khẩn, chuyển Ngoại thần kinh / Đột quỵ."
            },
            {
                "category": "Áp-xe Thành Sau Họng & Viêm Màng Não",
                "signs": "Cổ cứng đờ không cúi được (gáy cứng), sốt cao rét run, há miệng hạn chế, khó nuốt, chảy nước dãi.",
                "action": "Chuyển viện cấp cứu chuyên khoa Tai Mũi Họng / Truyền nhiễm."
            }
        ],
        "visceral_referrals": [
            {
                "source": "U Đỉnh Phổi Pancoast (Pancoast Tumor / Superior Sulcus Tumor)",
                "pattern": "Khối u xâm lấn đám rối thần kinh cánh tay (rễ C8-T1) và hạch giao cảm cổ: Đau dữ dội mặt trong cánh tay, cẳng tay và ngón 4-5; teo các cơ bàn tay; Hội chứng Horner cùng bên (Sụp mi Ptosis, co đồng tử Miosis, giảm tiết mồ hôi Anhidrosis).",
                "differential": "Cực kỳ dễ nhầm với thoái hóa cột sống cổ chèn ép rễ C8 hoặc hội chứng ống cổ tay/ống Guyon. Bắt buộc chụp X-quang/CT lồng ngực ở người hút thuốc lá lớn tuổi đau tay kháng trị."
            },
            {
                "source": "Thiếu Máu Cơ Tim / Nhồi Máu Cơ Tim (Myocardial Ischemia / MI)",
                "pattern": "Đau thắt lan lên bờ trước cơ ức đòn chũm, hàm dưới, vai và cánh tay trái khi gắng sức hoặc xúc động mạnh, kèm vã mồ hôi, khó thở.",
                "differential": "Đo điện tim ECG và xét nghiệm Troponin I/T siêu nhạy (hs-cTnI) loại trừ bệnh mạch vành cấp."
            },
            {
                "source": "Bệnh Lý Tuyến Giáp (Thyroiditis & Carcinoma)",
                "pattern": "Đau cổ trước lan lên góc hàm và tai, kèm bướu cổ to, khó nuốt, khàn tiếng.",
                "differential": "Siêu âm tuyến giáp, xét nghiệm chức năng tuyến giáp FT4, TSH."
            }
        ],
        "drug_induced": [
            "Quinolone: Viêm gân và đau khớp vùng vai gáy.",
            "Corticoid kéo dài: Tiêu xương, xẹp đốt sống cổ loãng xương, hoại tử vô mạch mấu khớp.",
            "Statin: Viêm đau khối cơ thang (Trapezius) và cơ gối đầu (Splenius capitis)."
        ],
        "examination_procedures": [
            {
                "name": "Nghiệm Pháp Spurling (Spurling's Neck Compression Test)",
                "technique": "Bệnh nhân ngồi thẳng. Người khám cho bệnh nhân nghiêng đầu sang bên đau, sau đó dùng hai tay ép thẳng một lực dọc trục từ đỉnh đầu xuống (khoảng 7-10 kg lực).",
                "significance": "Dương tính khi tái hiện đau chói hoặc cảm giác tê giật lan xuống cánh tay theo dermatom rễ cổ. Độ đặc hiệu (Sp) cực cao: 92 - 100%, độ nhạy (Sn): 30 - 50% (Tiêu chuẩn vàng khám lâm sàng rễ cổ)."
            },
            {
                "name": "Nghiệm Pháp Kéo Giãn Cột Sống Cổ (Cervical Distraction Test)",
                "technique": "Bệnh nhân nằm ngửa thư giãn. Người khám một tay đặt dưới ụ chẩm, một tay đặt dưới cằm, nhẹ nhàng kéo dọc trục đầu lên phía trên một lực khoảng 10-15 kg.",
                "significance": "Dương tính khi triệu chứng đau cổ hoặc đau rễ cánh tay giảm rõ rệt hoặc biến mất hoàn toàn do mở rộng lỗ ghép thần kinh (Sp: 90 - 97%)."
            },
            {
                "name": "Dấu Hiệu Hoffman (Hoffman's Reflex - Tháp Tủy)",
                "technique": "Cố định đốt giữa ngón tay thứ 3 của bệnh nhân, người khám dùng móng tay ngón cái của mình gảy/bật mạnh vào móng tay ngón 3 của bệnh nhân theo hướng gập lòng.",
                "significance": "Dương tính khi ngón cái và ngón trỏ của bệnh nhân đột ngột gập và khép lại (phản xạ bệnh lý bó tháp do chèn ép tủy cổ từ C5 trở lên)."
            },
            {
                "name": "Bộ Nghiệm Pháp Căng Đám Rối Thần Kinh Cánh Tay (Upper Limb Tension Tests - ULTT)",
                "technique": "ULTT 1 (Thần kinh Giữa): Hạ vai, dạng cánh tay 110°, duỗi cổ tay và các ngón, ngửa cẳng tay, duỗi khuỷu, kết hợp nghiêng đầu sang bên đối diện.\nULTT 2 (Thần kinh Quay): Hạ vai, duỗi khuỷu, xoay trong toàn bộ cánh tay, sấp cẳng tay, gập cổ tay.\nULTT 3 (Thần kinh Trụ): Hạ vai, gập khuỷu tối đa, ngửa cẳng tay, duỗi cổ tay và áp mu tay vào vành tai.",
                "significance": "Độ nhạy cực cao (Sn: 97%) để loại trừ chèn ép rễ thần kinh cổ (khi ULTT âm tính, khả năng bị bệnh rễ cổ < 3%)."
            },
            {
                "name": "Nghiệm Pháp Roos (Elevated Arm Stress Test - EAST cho TOS)",
                "technique": "Bệnh nhân đứng hoặc ngồi, giạng hai cánh tay 90°, xoay ngoài vai 90°, gập khuỷu 90°. Yêu cầu bệnh nhân mở nắm hai bàn tay liên tục trong 3 phút.",
                "significance": "Dương tính khi bệnh nhân không duy trì được quá 1-2 phút do đau mỏi dữ dội, tê bì cánh cẳng tay, tay tái nhợt (Hội chứng lối thoát lồng ngực Thoracic Outlet Syndrome)."
            },
            {
                "name": "Nghiệm Pháp Sharp-Purser (Sharp-Purser Test cho Mất Vững C1-C2)",
                "technique": "Bệnh nhân ngồi hơi cúi cổ. Người khám đặt một ngón tay cái lên mỏm gai C2 để cố định, tay kia đặt lên trán bệnh nhân đẩy nhẹ đầu ra sau.",
                "significance": "Dương tính nếu thấy đầu trượt trượt ra sau kèm tiếng 'khục' và giảm triệu chứng chèn ép tủy (Tổn thương dây chằng ngang C1-C2)."
            }
        ],
        "differential_table": [
            {"condition": "Chèn ép rễ thần kinh cổ (Cervical Radiculopathy)", "onset": "Đột ngột sau khi cúi xoay cổ hoặc từ từ do thoái hóa chồi xương", "aggravating": "Nghiêng xoay cổ cùng bên, ho rặn hắt hơi", "key_differentiator": "Đau kèm tê/dị cảm theo đúng dải dermatom (C6 ngón cái, C7 ngón giữa, C8 ngón út), Spurling (+), Kéo giãn cổ (+), ULTT (+)"},
            {"condition": "Hội chứng diện khớp cổ (Cervical Facet Syndrome)", "onset": "Mạn tính âm ỉ, cứng cổ buổi sáng, khu trú cạnh sống", "aggravating": "Ngửa cổ kết hợp xoay và nghiêng về bên đau", "key_differentiator": "Đau KHÔNG lan qua bờ ngoài mỏm cùng vai, không có khiếm khuyết cảm giác/vận động thần kinh, ấn đau điểm diện khớp cạnh gai sống"},
            {"condition": "Đau cơ mạc cổ vai (Myofascial Pain Syndrome)", "onset": "Căng thẳng, ngồi máy tính sai tư thế kéo dài", "aggravating": "Lạnh, stress, ấn vào dải cơ căng", "key_differentiator": "Sờ thấy dải cơ căng cứng (Taut band) và điểm kích hoạt (Trigger point) tại cơ thang/cơ nâng vai, ấn gây đau lan đặc thù (Jump sign), phản xạ gân xương bình thường"},
            {"condition": "Hội chứng lối thoát lồng ngực (Thoracic Outlet Syndrome - TOS)", "onset": "Tư thế đưa tay qua đầu, mang vác nặng vùng đai vai", "aggravating": "Giữ tay giạng cao, xách vật nặng kéo xuôi vai", "key_differentiator": "Đau tê mặt trong cẳng tay bàn tay, mạch quay yếu khi quay đầu (Adson test +), Roos test (+), có thể kèm sưng phù tím tái bàn tay do chèn ép tĩnh mạch"}
        ],
        "stage_2_somatic_dysfunctions": [
            "Hạn chế mở diện khớp cổ (Opening Restriction / FRS - Flexed, Rotated, Sidebent): Mấu khớp dưới không trượt lên trên và ra trước được khi cúi nghiêng xoay đối bên.",
            "Hạn chế đóng diện khớp cổ (Closing Restriction / ERS - Extended, Rotated, Sidebent): Mấu khớp dưới không trượt xuống dưới và ra sau được khi ngửa nghiêng xoay cùng bên.",
            "Sai lệch vận động khớp chẩm - đội (OA Joint restriction): Giảm biên độ gật đầu (Nodding) của lồi cầu xương chẩm trên mặt khớp C1.",
            "Vẹo vặn trục đội - trục (AA Joint rotation dysfunction): Giới hạn xoay đầu sang một bên khi cổ đã gập tối đa (Flexion-Rotation Test)."
        ],
        "stage_3_guidemap_intervention": "Nếu không có cờ đỏ: Điều trị nội khoa & nắn chỉnh cơ sinh học giải phóng diện khớp; Trường hợp đau rễ cổ kháng trị hoặc viêm diện khớp cổ dai dẳng -> Chỉ định Tiêm can thiệp dưới hướng dẫn siêu âm (Xem Web 1: Tiêm rễ thần kinh cổ chọn lọc C5-C6-C7 hoặc Tiêm nhánh trong phong bế diện khớp cổ).",
        "figures": figures_by_chapter.get(4, [])
    },

    # ----------------------------------------------------
    # CHAPTER 5: THORACIC SPINE SCREENING
    # ----------------------------------------------------
    {
        "id": "ch05-thoracic-spine",
        "chapter": 5,
        "region": "spine",
        "region_vi": "Cột Sống Ngực & Thành Ngực",
        "title": "Thoracic Pain Differential Screening",
        "title_vi": "Sàng Lọc Chẩn Đoán Phân Biệt Đau Cột Sống Ngực & Thành Ngực",
        "author": "GS. Deepak Sebastian (Chapter 5, pp. 173-202)",
        "summary": "Vùng ngực là ngã tư chuyển đau phức tạp nhất trong cơ thể, nơi các bệnh lý nội tạng đe dọa tính mạng (bóc tách phình động mạch chủ ngực, nhồi máu cơ tim, thuyên tắc phổi, ung thư tụy, viêm túi mật) thường xuyên giả mạo đau cơ xương khớp. Hướng dẫn chi tiết quy trình sàng lọc cờ đỏ lồng ngực, phân biệt hội chứng T4, đau dây thần kinh liên sườn, viêm khớp ức sườn/sụn sườn (Tietze), hội chứng kẹp khoang liên sườn trước (AICS do chính GS. Deepak Sebastian phát hiện) và các rối loạn vận động lồng ngực quai thùng/đòn bẩy.",
        "stage_1_systemic_red_flags": [
            {
                "category": "Cờ Đỏ Bóc Tách Động Mạch Chủ Ngực (Thoracic Aortic Dissection)",
                "signs": "Cơn đau ngực - lưng dữ dội khởi phát đột ngột như xé rách (tearing/ripping pain) lan từ trước xương ức xuyên thẳng ra sau lưng giữa hai xương bả vai. Huyết áp hai tay chênh lệch > 20 mmHg, mất mạch ngoại vi.",
                "action": "CẤP CỨU HỒI SỨC TIM MẠCH TỐI KHẨN: Chụp CTA động mạch chủ ngực ngay lập tức. Nghiêm cấm mọi thao tác nắn bẻ cột sống lưng."
            },
            {
                "category": "Cờ Đỏ Thuyên Tắc Phổi & Tràn Khí Màng Phổi (Pulmonary Embolism / Pneumothorax)",
                "signs": "Đau ngực kiểu màng phổi (đau nhói tăng mạnh khi hít sâu hoặc ho), khó thở đột ngột, thở nhanh nông, nhịp tim nhanh, ho ra máu, tiền sử bất động kéo dài hoặc huyết khối tĩnh mạch sâu chi dưới (DVT).",
                "action": "Thở oxy, chụp CTA động mạch phổi (CTPA), đo D-dimer, chụp X-quang ngực thẳng."
            },
            {
                "category": "Cờ Đỏ Ung Thư Di Căn Cột Sống Ngực (Thoracic Spine Metastasis)",
                "signs": "Cột sống ngực là vị trí di căn xương phổ biến nhất (do mạng lưới tĩnh mạch không van Batson). Đau lưng liên tục cả ngày lẫn đêm, gõ đau chói tại mỏm gai đốt sống ngực, sụt cân, tiền sử K phổi/vú/tiền liệt tuyến.",
                "action": "Chụp MRI toàn bộ cột sống ngực có tiêm thuốc cản quang, xạ hình xương."
            },
            {
                "category": "Cờ Đỏ Chèn Ép Tủy Ngực (Thoracic Cord Compression)",
                "signs": "Tê bì mất cảm giác ngang mức khoanh tủy (Sensory level: ngang núm vú T4, ngang rốn T10), yếu liệt hai chi dưới tiến triển nhanh, đại tiểu tiện không tự chủ.",
                "action": "CẤP CỨU NGOẠI THẦN KINH: Phẫu thuật giải ép tủy ngực trong vòng 24-48 giờ để tránh liệt vĩnh viễn."
            }
        ],
        "red_flags": [
            {
                "category": "Bóc Tách Động Mạch Chủ & Nhồi Máu Cơ Tim Ngực",
                "signs": "Đau xé rách xuyên lưng giữa hai bả vai, khó thở, vã mồ hôi, chênh lệch huyết áp hai tay.",
                "action": "Cấp cứu Tim mạch - CTA ngực ngay."
            },
            {
                "category": "Nhiễm Trùng Đĩa Đệm Đốt Sống Ngực (Thoracic Spondylodiscitis / TB Spine)",
                "signs": "Sốt nhẹ về chiều, đổ mồ hôi trộm, đau lưng dữ dội, gù nhọn cột sống ngực (Lao cột sống Pott).",
                "action": "Chụp MRI ngực, xét nghiệm máu lắng ESR, QuantiFERON-TB."
            }
        ],
        "visceral_referrals": [
            {
                "source": "Bệnh Lý Túi Mật & Đường Mật (Cholecystitis & Cholelithiasis)",
                "pattern": "Đau quy chiếu lên góc dưới xương bả vai phải và vùng gian bả vai phải (do các nhánh thần kinh cảm giác T8-T9). Đau tăng sau bữa ăn nhiều dầu mỡ, dấu hiệu Murphy (+).",
                "differential": "Siêu âm ổ bụng tổng quát gan mật là chỉ định bắt buộc trước khi điều trị thoái hóa cột sống ngực bên phải."
            },
            {
                "source": "Bệnh Lý Tụy (Ung Thư Tụy & Viêm Tụy Cấp / Mạn)",
                "pattern": "Đau vùng thượng vị đâm xuyên thẳng ra sau lưng vùng khoang liên sườn T7-T9. Đặc điểm kinh điển: Đau tăng dữ dội khi nằm ngửa, giảm bớt khi ngồi cúi gập người ôm bụng.",
                "differential": "Xét nghiệm Amylase, Lipase máu; Chụp CT bụng có cản quang đánh giá nhu mô tụy."
            },
            {
                "source": "Bệnh Lý Thận & Niệu Quản (Renal & Ureteral Calculi)",
                "pattern": "Cơn đau quặn thận khởi phát từ góc sườn - sống (Costovertebral angle T10-L1) lan vòng ra trước bụng xuống vùng bẹn bìu, kèm đái máu.",
                "differential": "Rung thận (+), siêu âm hệ tiết niệu, tổng phân tích nước tiểu tìm hồng cầu vi thể."
            },
            {
                "source": "Bệnh Lý Dạ Dày & Thực Quản (Peptic Ulcer & GERD)",
                "pattern": "Đau nóng rát sau xương ức và giữa hai bả vai T5-T6, liên quan chu kỳ bữa ăn (đói đau trong loét tá tràng, no đau trong loét dạ dày).",
                "differential": "Nội soi thực quản dạ dày tá tràng."
            }
        ],
        "drug_induced": [
            "NSAID: Loét dạ dày thủng tạng rỗng gây đau lưng ngực cấp.",
            "Corticoid: Gãy lún đốt sống ngực do loãng xương (phổ biến nhất tại T7-T8 và T11-T12)."
        ],
        "examination_procedures": [
            {
                "name": "Nghiệm Pháp Thoracic Slump Test (Căng Màng Cứng & Rễ Ngực)",
                "technique": "Bệnh nhân ngồi thả lỏng gù toàn bộ lưng ngực, người khám ép đầu cổ cúi tối đa, sau đó cho duỗi gối và gập mu bàn chân.",
                "significance": "Tái hiện đau lan dọc thân mình hoặc khoang liên sườn ngực, giảm khi ngửa nhẹ cổ (chẩn đoán thoát vị đĩa đệm ngực hoặc chèn ép thần kinh rễ ngực)."
            },
            {
                "name": "Khám Hạn Chế Đóng/Mở Diện Khớp Ngực (Thoracic Opening/Closing ERS/FRS T1-T12)",
                "technique": "Bệnh nhân ngồi khoanh tay trước ngực. Người khám đặt hai ngón tay cái lên mấu ngang đốt sống ngực hai bên, hướng dẫn bệnh nhân cúi gập hoặc ngửa ưỡn kết hợp xoay nghiêng mình.",
                "significance": "Phát hiện đốt sống bị kẹt mở (ERS: không gập/mở được mấu khớp) hoặc kẹt đóng (FRS: không ngửa/đóng được mấu khớp)."
            },
            {
                "name": "Nghiệm Pháp Nhún Khớp Sườn - Sống & Sườn - Ngang (Costovertebral Joint Springing)",
                "technique": "Bệnh nhân nằm sấp. Người khám dùng gót bàn tay hoặc hai ngón cái ấn nhún tạo lực đàn hồi lên góc sườn ngay cạnh mỏm ngang đốt sống ngực.",
                "significance": "Tái hiện chính xác cơn đau ngực cơ học do viêm thoái hóa khớp sườn sống hoặc trượt khớp sườn ngang."
            },
            {
                "name": "Nghiệm Pháp Lindgren Đánh Giá Xương Sườn 1 Nhô Cao (Elevated First Rib Test)",
                "technique": "Bệnh nhân ngồi thẳng. Người khám cho bệnh nhân xoay đầu tối đa sang một bên, sau đó gập cằm về phía hõm ức cùng bên.",
                "significance": "Hạn chế biên độ gập cằm so với bên đối diện gợi ý xương sườn 1 bên đó bị kéo nhô cao do co thắt cơ bậc thang (nguyên nhân gây hội chứng lối thoát ngực và đau cổ ngực)."
            }
        ],
        "differential_table": [
            {"condition": "Hội chứng T4 (T4 Syndrome)", "onset": "Ngồi làm việc máy tính sai tư thế, phụ nữ 30-50 tuổi", "aggravating": "Ngồi lâu, xoay vặn lưng trên", "key_differentiator": "Đau lưng ngực T4 kèm dị cảm tê bì hai bàn tay kiểu găng tay, đau đầu đỉnh chẩm, ấn đau chói mỏm gai T4, vận động khớp ngực giảm triệu chứng"},
            {"condition": "Đau dây thần kinh liên sườn (Intercostal Neuralgia / Zona ngực)", "onset": "Đột ngột hoặc sau nhiễm virus, đau bỏng rát dọc một khoang gian sườn", "aggravating": "Hít sâu, ho, cọ xát quần áo", "key_differentiator": "Đau theo dải khoang liên sườn một bên, tăng cảm giác da (Allodynia), có thể xuất hiện ban phỏng nước đặc trưng sau vài ngày"},
            {"condition": "Hội chứng Tietze (Tietze Syndrome)", "onset": "Trẻ tuổi < 40, thường sau đợt ho kéo dài hoặc gắng sức", "aggravating": "Hít sâu, ấn trực tiếp vào khớp sụn sườn", "key_differentiator": "SƯNG NỀ RÕ RỆT, nóng đỏ đau tại khớp ức sườn số 2 hoặc số 3 (Khác với Costochondritis là đau nhiều sụn sườn nhưng KHÔNG CÓ SƯNG NỀ)"},
            {"condition": "Hội chứng Kẹp Khoang Liên Sườn Trước (AICS - Deepak Sebastian)", "onset": "Tư thế đầu đưa trước (Forward head) và vai nhô trước kéo dài", "aggravating": "Hít thở nông kéo dài, nâng tay cao", "key_differentiator": "Co rút cơ ngực bé (Pectoralis minor) làm hẹp khoang liên sườn trên, yếu cơ răng trước, ấn đau màng xương sườn và bó mạch TK liên sườn trước"}
        ],
        "stage_2_somatic_dysfunctions": [
            "Rối loạn chức năng xương sườn thì hít vào (Inhalation Somatic Dysfunction): Khung sườn bị kẹt ở vị trí hít vào tối đa, không xẹp xuống được khi thở ra.",
            "Rối loạn chức năng xương sườn thì thở ra (Exhalation Somatic Dysfunction): Khung sườn bị kẹt ở vị trí thở ra, không nâng lên được khi hít vào.",
            "Trượt mỏm ngang đốt sống ngực (Thoracic Rotational Malalignment): Đốt sống ngực xoay cố định sang một bên gây nhô mỏm ngang cạnh sống."
        ],
        "stage_3_guidemap_intervention": "Kỹ thuật kéo giãn mở khoang liên sườn kết hợp tập mạnh cơ răng trước; Phong bế dây thần kinh liên sườn hoặc phong bế mặt phẳng cơ dựng gai (ESP Block) dưới hướng dẫn siêu âm (Xem Web 1: Quy trình ESP Block & Intercostal Nerve Block).",
        "figures": figures_by_chapter.get(5, [])
    },

    # ----------------------------------------------------
    # CHAPTER 6: LUMBOPELVIC SPINE SCREENING
    # ----------------------------------------------------
    {
        "id": "ch06-lumbopelvic",
        "chapter": 6,
        "region": "spine",
        "region_vi": "Thắt Lưng - Khung Chậu",
        "title": "Lumbopelvic Pain Differential Screening",
        "title_vi": "Sàng Lọc Chẩn Đoán Phân Biệt Đau Thắt Lưng - Khung Chậu",
        "author": "GS. Deepak Sebastian (Chapter 6, pp. 203-285)",
        "summary": "Chuyên đề đồ sộ nhất với 83 trang textbook: Sàng lọc cấp cứu hội chứng chùm đuôi ngựa (Cauda Equina Syndrome), phình vỡ động mạch chủ bụng (AAA), viêm đĩa đệm đốt sống, ung thư di căn và các rối loạn cơ xương khớp vùng thắt lưng chậu. Điểm nhấn đột phá là hệ thống chẩn đoán rối loạn chức năng cơ học khung chậu chuyên sâu của GS. Deepak Sebastian: Phân định chi tiết sai lệch xoay xương chậu (Anterior/Posterior Innominate, Innominate Upslip) và xoay xương cùng (Sacral Torsions: Left-on-Left, Left-on-Right, Right-on-Right, Right-on-Left). Kèm 40 hình ảnh Atlas nguyên bản.",
        "stage_1_systemic_red_flags": [
            {
                "category": "Cờ Đỏ Hội Chứng Chùm Đuôi Ngựa (Cauda Equina Syndrome - CES)",
                "signs": "Bí tiểu cấp hoặc tiểu không tự chủ (tiểu tràn), mất cảm giác vùng yên ngựa (Saddle anesthesia: tê bì vùng bẹn, đáy chậu, quanh hậu môn), giảm trương lực cơ thắt hậu môn, yếu liệt vận động hai bàn chân (bàn chân rớt / Foot drop).",
                "action": "CẤP CỨU NGOẠI THẦN KINH TỐI KHẨN: Chụp MRI cột sống thắt lưng khẩn cấp. Phải phẫu thuật giải ép TRONG VÒNG 48 GIỜ ĐẦU để tránh tàn phế đại tiểu tiện và liệt vĩnh viễn!"
            },
            {
                "category": "Cờ Đỏ Phình Động Mạch Chủ Bụng (Abdominal Aortic Aneurysm - AAA)",
                "signs": "Đau âm ỉ hoặc quặn thắt vùng thắt lưng bụng không đổi theo tư thế, sờ thấy khối u đập nảy theo nhịp tim ở vùng bụng trên rốn, mạch đùi hai bên yếu hoặc bất đối xứng, tiền sử tăng huyết áp/hút thuốc ở nam giới > 60 tuổi.",
                "action": "TUYỆT ĐỐI KHÔNG NẮN BẺ LƯNG! Siêu âm Doppler mạch bụng hoặc chụp CTA bụng khẩn cấp. Vỡ AAA có tỷ lệ tử vong > 80%."
            },
            {
                "category": "Cờ Đỏ Nhiễm Trùng Cột Sống (Spinal Infection / Spondylodiscitis / Epidural Abscess)",
                "signs": "Sốt, rét run, đau thắt lưng dữ dội tăng dần, gõ đau chói tại gai sau đốt sống, không giảm khi nằm nghỉ. Tiền sử đái tháo đường, tiêm chích ma túy, chạy thận nhân tạo, hoặc vừa can thiệp thủ thuật xâm lấn.",
                "action": "Chụp MRI thắt lưng có cản quang, cấy máu, định lượng ESR và CRP."
            },
            {
                "category": "Cờ Đỏ Ung Thư Di Căn Cột Sống (Metastatic Spinal Disease)",
                "signs": "Người > 50 tuổi, đau lưng liên tục dữ dội về đêm đánh thức giấc ngủ, sụt cân không rõ nguyên nhân, tiền sử ung thư (PB KTL: Tiền liệt tuyến, Vú, Thận, Tuyến giáp, Phổi).",
                "action": "Chụp X-quang, MRI cột sống, xét nghiệm PSA, điện di protein huyết thanh."
            }
        ],
        "red_flags": [
            {
                "category": "Chùm Đuôi Ngựa & Phình Động Mạch Chủ Bụng",
                "signs": "Tê yên ngựa, mất kiểm soát bàng quang / ruột, khối u đập nảy bụng.",
                "action": "Cấp cứu Ngoại thần kinh / Phẫu thuật mạch máu ngay."
            },
            {
                "category": "Gãy Xẹp Đốt Sống Do Loãng Xương (Osteoporotic Vertebral Fracture)",
                "signs": "Đau nhói thắt lưng đột ngột sau ho rặn, cúi người hoặc chấn thương ngã dập mông ở người cao tuổi dùng corticoid.",
                "action": "X-quang, MRI đánh giá phù tủy xương đốt sống, cân nhắc tạo hình đốt sống bằng bơm xi măng (Vertebroplasty)."
            }
        ],
        "visceral_referrals": [
            {
                "source": "Sỏi Thận & Sỏi Niệu Quản (Nephrolithiasis)",
                "pattern": "Cơn đau quặn thận khởi phát từ góc sườn cột sống L1-L2 lan ra trước bụng xuống hố chậu và bẹn bìu/môi lớn, đau từng cơn dữ dội làm bệnh nhân lăn lộn.",
                "differential": "Siêu âm thận tiết niệu, xét nghiệm nước tiểu tìm hồng cầu vi thể."
            },
            {
                "source": "Bệnh Lý Phụ Khoa (Lạc Nội Mạc Tử Cung, U Xoắn Buồng Trứng, Thai Ngoài Tử Cung)",
                "pattern": "Đau vùng thắt lưng thấp và khung chậu liên quan chu kỳ kinh nguyệt, đau sâu khi giao hợp (Dyspareunia), trễ kinh kèm tụt huyết áp.",
                "differential": "Siêu âm đầu dò âm đạo, xét nghiệm Beta-hCG."
            },
            {
                "source": "Bệnh Tuyến Tiền Liệt (Prostatitis & Prostate Cancer)",
                "pattern": "Đau vùng xương cùng cụt và thắt lưng thấp kèm tiểu khó, tiểu ngắt quãng, tiểu đêm nhiều lần.",
                "differential": "Thăm trực tràng khám tuyến tiền liệt (DRE), xét nghiệm PSA toàn phần/tự do."
            },
            {
                "source": "Bệnh Lý Đại Tràng (Viêm Túi Thừa & Ung Thư Trực Tràng)",
                "pattern": "Đau thắt lưng chậu kèm thay đổi thói quen đại tiện (táo bón xen kẽ ỉa chảy), phân dẹt, đại tiện ra máu.",
                "differential": "Nội soi toàn bộ đại trực tràng."
            }
        ],
        "drug_induced": [
            "Corticosteroid: Tiêu xương chỏm xương đùi, loãng xương gãy xẹp đốt sống thắt lưng.",
            "Statin: Tiêu cơ vân khối cơ dựng gai thắt lưng và cơ thắt lưng chậu."
        ],
        "examination_procedures": [
            {
                "name": "Nghiệm Pháp Nâng Thẳng Chân (Straight Leg Raise - SLR / Lasegue Test)",
                "technique": "Bệnh nhân nằm ngửa, gối duỗi thẳng hoàn toàn. Người khám từ từ nâng chân bệnh nhân lên cao cho đến khi tái hiện triệu chứng.",
                "significance": "Dương tính khi tái hiện đau nhói như điện giật lan từ mông xuống dưới gối ở góc 30° - 70°. Nhạy cảm cao (Sn: 91%) với thoát vị đĩa đệm rễ L4-L5, L5-S1."
            },
            {
                "name": "Nghiệm Pháp SLR Chân Lành (Crossed SLR / Well-Leg Raise Test)",
                "technique": "Nâng thẳng chân bên KHÔNG đau của bệnh nhân lên cao.",
                "significance": "Dương tính khi nâng chân lành mà TÁI HIỆN ĐAU Ở CHÂN BỆNH. Độ đặc hiệu cực cao (Sp: 88 - 98%) khẳng định thoát vị đĩa đệm thể lớn hoặc thoát vị thể nách rễ thần kinh."
            },
            {
                "name": "Nghiệm Pháp Slump Test (Kéo Căng Toàn Bộ Trục Thần Kinh)",
                "technique": "Bệnh nhân ngồi thõng chân mép giường: Gù lưng -> Cúi cổ -> Duỗi thẳng gối -> Gập mu bàn chân tối đa.",
                "significance": "Tái hiện đau rễ thần kinh, giảm khi ngửa nhẹ đầu (Sn: 84%, Sp: 83% chẩn đoán kích thích rễ thần kinh thắt lưng)."
            },
            {
                "name": "Cụm Nghiệm Pháp Khám Khớp Cùng Chậu (Van der Wurff & Laslett SIJ Cluster)",
                "technique": "Thực hiện 4 nghiệm pháp: 1. Distraction Test (Dãn khớp cùng chậu); 2. Thigh Thrust Test (Đẩy dọc trục đùi); 3. Compression Test (Ép khớp cùng chậu); 4. Gaenslen's Test (Kéo căng khớp cùng chậu hai bên đối nghịch).",
                "significance": "Có ít nhất 2/4 hoặc 3/5 nghiệm pháp dương tính -> Độ đặc hiệu > 85-90% chẩn đoán nguồn đau phát sinh từ Khớp cùng chậu (SIJ Dysfunction)."
            },
            {
                "name": "Nghiệm Pháp Cúi Ngồi & Cúi Đứng (Sitting & Standing Flexion Tests)",
                "technique": "Người khám đặt hai ngón tay cái dưới gai chậu sau trên (PSIS) hai bên. Cho bệnh nhân cúi người ở tư thế đứng (Standing) và tư thế ngồi (Sitting).",
                "significance": "Nếu PSIS một bên di chuyển lên trên sớm hơn ở tư thế Đứng nhưng bình thường ở tư thế Ngồi -> Rối loạn chức năng xương chậu (Innominate problem). Nếu bất thường cả khi Ngồi -> Rối loạn chức năng xương cùng (Sacral problem)."
            },
            {
                "name": "Nghiệm Pháp Stork (Gillet Test / Stork Motion Test)",
                "technique": "Bệnh nhân đứng thẳng một chân, chân kia nâng gập háng và gối 90°. Người khám sờ PSIS và mào xương cùng.",
                "significance": "Đánh giá sự di động trượt xuống dưới của PSIS so với xương cùng khi co gập háng."
            }
        ],
        "differential_table": [
            {"condition": "Thoát vị đĩa đệm chèn ép rễ (Lumbar Radiculopathy)", "onset": "Đột ngột sau khi cúi bê vật nặng hoặc vặn xoắn", "aggravating": "Cúi gập người, ho rặn hắt hơi, ngồi lâu", "key_differentiator": "Đau lan xuống dưới gối theo dải rễ L4 (mặt trước đùi cẳng chân), L5 (mu bàn chân ngón cái), S1 (gót chân bờ ngoài), SLR (+)"},
            {"condition": "Hẹp ống sống thắt lưng (Lumbar Spinal Stenosis)", "onset": "Từ từ ở người cao tuổi > 60 tuổi, thoái hóa đa tầng", "aggravating": "Đi bộ hoặc đứng thẳng lâu (Khập khiễng cách hồi thần kinh)", "key_differentiator": "Đau tê mỏi hai chân khi đi bộ, BẮT BUỘC PHẢI NGỒI HOẶC CÚI GẬP NGƯỜI RA TRƯỚC MỚI GIẢM (Dấu hiệu đẩy xe đẩy siêu thị - Shopping cart sign), mạch mu chân bình thường"},
            {"condition": "Hội chứng diện khớp thắt lưng (Lumbar Facet Syndrome)", "onset": "Mạn tính, đau khu trú cạnh sống thắt lưng", "aggravating": "Ưỡn lưng ra sau kết hợp nghiêng xoay cùng bên (Kemp test)", "key_differentiator": "Đau không lan qua đầu gối, không tê bì thần kinh, ấn đau chói diện khớp cạnh cột sống, nằm ngửa co gối thì đỡ đau"},
            {"condition": "Đau khớp cùng chậu (Sacroiliac Joint Dysfunction - SIJD)", "onset": "Sau ngã đập mông, mang thai, lệch chiều dài hai chân", "aggravating": "Đứng một chân, bước lên cầu thang, ngồi bắt chéo chân", "key_differentiator": "Đau khu trú tại vùng rãnh khớp cùng chậu ngay dưới PSIS (Dấu hiệu chỉ ngón tay Fortin), cụm test Laslett dương tính (>= 3 test)"},
            {"condition": "Hội chứng cơ hình lê (Piriformis Syndrome)", "onset": "Ngồi lâu đè ví dày ở túi quần sau, co thắt cơ mông", "aggravating": "Khép và xoay trong khớp háng khi đang gập (FAIR test)", "key_differentiator": "Đau sâu vùng mông lan xuống mặt sau đùi, sờ thấy dải cơ hình lê co cứng đau chói, nghiệm pháp Freiberg (+) và Pace (+), không có đau rễ thắt lưng"}
        ],
        "stage_2_somatic_dysfunctions": [
            "Xoay xương chậu ra trước (Anterior Innominate Rotation): ASIS bên bệnh thấp hơn và PSIS cao hơn; chiều dài chân chức năng dài hơn ở tư thế nằm ngửa.",
            "Xoay xương chậu ra sau (Posterior Innominate Rotation): ASIS bên bệnh cao hơn và PSIS thấp hơn; chiều dài chân ngắn hơn ở tư thế nằm ngửa.",
            "Trượt xương chậu lên trên (Innominate Upslip): Cả ASIS và PSIS cùng bên đều bị kéo lệch lên trên so với bên lành do co thắt cơ vuông thắt lưng.",
            "Rối loạn xoay xương cùng Trái trên Trục Trái (Left-on-Left Sacral Torsion): Xương cùng xoay sang trái trên trục xiên trái, rãnh cùng bên phải sâu hơn, góc dưới bên (ILA) bên trái thấp và lồi hơn.",
            "Rối loạn xoay xương cùng Trái trên Trục Phải (Left-on-Right Sacral Torsion): Xương cùng xoay lùi ra sau, nghiệm pháp chống đẩy ngực (Prone Prop-up Test) làm tăng mức độ bất đối xứng rãnh cùng."
        ],
        "stage_3_guidemap_intervention": "Kỹ thuật nắn chỉnh cân bằng cơ sinh học khung chậu (Muscle Energy Technique - MET); Trường hợp viêm rễ thần kinh cấp hoặc viêm khớp cùng chậu dai dẳng -> Tiêm thẩm nhuận rễ thắt lưng chọn lọc (Transforaminal ESI) hoặc Tiêm khớp cùng chậu dưới hướng dẫn siêu âm (Xem Web 1: Quy trình Tiêm Khớp Cùng Chậu & Tiêm Rễ Thần Kinh Ngoài Màng Cứng).",
        "figures": figures_by_chapter.get(6, [])
    },

    # ----------------------------------------------------
    # CHAPTER 7: HIP & GROIN PAIN SCREENING
    # ----------------------------------------------------
    {
        "id": "ch07-hip-groin",
        "chapter": 7,
        "region": "lower_limb",
        "region_vi": "Khớp Háng & Vùng Bẹn",
        "title": "Hip Pain Differential Screening",
        "title_vi": "Sàng Lọc Chẩn Đoán Phân Biệt Đau Khớp Háng & Vùng Bẹn",
        "author": "GS. Deepak Sebastian (Chapter 7, pp. 286-318)",
        "summary": "Hướng dẫn sàng lọc lâm sàng vùng háng bẹn: Phân loại theo 3 khu vực giải phẫu chức năng (Đau trước - trong háng bẹn vs Đau ngoài mấu chuyển lớn vs Đau sau mông háng). Sàng lọc cờ đỏ khẩn cấp: Gãy cổ xương đùi, hoại tử vô mạch chỏm xương đùi (AVN), viêm khớp háng nhiễm trùng, trượt biểu mô chỏm đùi (SCFE) và Legg-Calvé-Perthes ở trẻ em. Chẩn đoán phân biệt chuyên sâu giữa thoái hóa khớp háng, xung đột xương đùi ổ cối (FAI), rách sụn viền, viêm bao hoạt dịch thắt lưng chậu, hội chứng dải chậu chày và đau mấu chuyển lớn (GTPS). Kèm trọn bộ 20 hình ảnh Atlas Deepak.",
        "stage_1_systemic_red_flags": [
            {
                "category": "Cờ Đỏ Gãy Cổ Xương Đùi & Gãy Khối Mấu Chuyển",
                "signs": "Người cao tuổi ngã đập mông hoặc háng, mất hoàn toàn khả năng chịu lực đứng tì đè, chi dưới bên gãy ngắn hơn và xoay ngoài điển hình, gõ dồn từ gót chân lên háng đau chói.",
                "action": "Bất động chi dưới, chụp X-quang khớp háng thẳng - nghiêng khẩn cấp, chuyển Chấn thương chỉnh hình phẫu thuật kết hợp xương hoặc thay khớp háng."
            },
            {
                "category": "Cờ Đỏ Hoại Tử Vô Mạch Chỏm Xương Đùi (Avascular Necrosis - AVN)",
                "signs": "Đau khớp háng âm ỉ tăng dần khi đi lại, tiền sử uống nhiều rượu bia hoặc dùng Corticosteroid kéo dài, bệnh hồng cầu hình liềm. Giai đoạn sớm X-quang có thể hoàn toàn bình thường!",
                "action": "Chụp MRI khớp háng hai bên khẩn cấp (Phương pháp nhạy nhất phát hiện AVN giai đoạn Ficat 1-2). Giảm tải trọng (chống nạng), hội chẩn phẫu thuật khoan giảm áp."
            },
            {
                "category": "Cờ Đỏ Viêm Khớp Háng Nhiễm Trùng (Septic Arthritis of the Hip)",
                "signs": "Sốt cao, đau háng dữ dội, khớp háng giữ ở tư thế hơi gập giạng và xoay ngoài để giảm áp lực nội khớp, mọi cử động thụ động đều đau chói làm co cứng cơ, không chịu được tì đè.",
                "action": "CẤP CỨU NGOẠI KHOA: Chọc hút dịch khớp xét nghiệm tế bào vi trùng + Phẫu thuật mổ mở rửa dẫn lưu khớp háng khẩn cấp tránh hoại tử chỏm xương đùi trong 24h."
            },
            {
                "category": "Cờ Đỏ Bệnh Khớp Háng Trẻ Em (SCFE & Perthes Disease)",
                "signs": "Trượt biểu mô chỏm xương đùi (SCFE): Trẻ vị thành niên (10-15 tuổi) béo phì đau bẹn hoặc đau gối đi khập khiễng, bàn chân xoay ngoài; Bệnh Perthes (Hoại tử chỏm thiếu máu): Bé trai 4-8 tuổi đi khập khiễng không đau hoặc đau nhẹ khớp gối/háng.",
                "action": "CẤM CHỊU TẢI TRỌNG! Chụp X-quang háng tư thế chân ếch (Frog-leg lateral view), chuyển viện Chấn thương chỉnh hình nhi ngay."
            }
        ],
        "red_flags": [
            {
                "category": "Gãy Cổ Xương Đùi & Viêm Khớp Nhiễm Trùng",
                "signs": "Chân ngắn xoay ngoài sau ngã, sốt cao co cứng khớp háng hoàn toàn.",
                "action": "Chụp X-quang/MRI háng, phẫu thuật cấp cứu."
            },
            {
                "category": "Thoát Vị Bẹn / Đùi Nghẹt (Strangulated Hernia)",
                "signs": "Khối phồng vùng bẹn đùi đau dữ dội, không đẩy lên được, kèm nôn mửa, chướng bụng, bí trung đại tiện.",
                "action": "Cấp cứu Ngoại tổng quát mổ giải phóng tạng nghẹt tránh hoại tử ruột."
            }
        ],
        "visceral_referrals": [
            {
                "source": "Áp-xe Cơ Thắt Lưng Chậu (Psoas Abscess)",
                "pattern": "Đau vùng bẹn và mặt trước trong khớp háng kèm sốt dao động, gầy sút cân. Bệnh nhân có tư thế gập háng và xoay trong để chùng cơ thắt lưng chậu; Duỗi háng thụ động gây đau dữ dội (Dấu hiệu cơ thắt lưng chậu / Psoas sign +).",
                "differential": "Chụp CT hoặc MRI vùng bụng chậu tìm ổ áp-xe trong cơ thắt lưng chậu."
            },
            {
                "source": "Bệnh Lý Thần Kinh Bì Đùi Ngoài (Meralgia Paresthetica)",
                "pattern": "Tê bì, bỏng rát, giảm cảm giác hình bầu dục ở mặt trước ngoài đùi do dây thần kinh bì đùi ngoài bị chèn ép dưới dây chằng bẹn (ở người béo phì, mặc quần chật, đeo thắt lưng đồ nghề nặng).",
                "differential": "Khám vận động cơ lực và phản xạ gân xương hoàn toàn bình thường (dây thần kinh thuần cảm giác)."
            }
        ],
        "drug_induced": [
            "Corticosteroid: Thủ phạm hàng đầu gây hoại tử vô mạch chỏm xương đùi (AVN).",
            "Quinolone: Viêm gân cơ thắt lưng chậu và viêm túi hoạt dịch cơ thẳng đùi."
        ],
        "examination_procedures": [
            {
                "name": "Nghiệm Pháp FADIR (Flexion-Adduction-Internal Rotation Test)",
                "technique": "Bệnh nhân nằm ngửa. Người khám gập khớp háng 90°, khép đùi vào trong và xoay trong khớp háng.",
                "significance": "Tái hiện đau chói sâu trong bẹn -> Dương tính với Xung đột xương đùi ổ cối (Femoroacetabular Impingement - FAI) và Rách sụn viền ổ cối (Acetabular Labral Tear). Độ nhạy cực cao (Sn: 94-99%)."
            },
            {
                "name": "Nghiệm Pháp FABER / Patrick (Flexion-Abduction-External Rotation)",
                "technique": "Bệnh nhân nằm ngửa, gập gối, giạng và xoay ngoài háng đặt mắt cá ngoài chân khám lên trên đầu gối chân đối diện (tạo hình số 4). Người khám một tay giữ gai chậu đối bên, một tay ấn nhẹ đầu gối chân khám xuống mặt bàn.",
                "significance": "Đau sâu mặt trước bẹn: Bệnh lý nội khớp háng (Thoái hóa/Sụn viền); Đau sau mông vùng khớp cùng chậu: Rối loạn chức năng khớp cùng chậu (SIJD)."
            },
            {
                "name": "Nghiệm Pháp Scouring / Hip Quadrant Test (Nghiệm Pháp Vét Khớp Háng)",
                "technique": "Bệnh nhân nằm ngửa. Người khám gập và khép háng tối đa, tác dụng một lực nén dọc trục xương đùi đồng thời di chuyển đùi theo hình vòng cung từ khép sang giạng.",
                "significance": "Tái hiện tiếng lạo xạo, đau chói hoặc cảm giác kẹt khớp -> Tổn thương thoái hóa sụn khớp hoặc rách sụn viền ổ cối."
            },
            {
                "name": "Nghiệm Pháp Thomas (Thomas Test Co Rút Cơ Gập Háng)",
                "technique": "Bệnh nhân nằm ngửa, ôm sát một gối vào ngực để làm phẳng cột sống thắt lưng. Quan sát chân còn lại trên mặt bàn.",
                "significance": "Nếu đùi chân kia bị nhấc bổng khỏi mặt bàn -> Co rút cơ thắt lưng chậu (Iliopsoas tightness); Nếu đùi chạm bàn nhưng cẳng chân bị duỗi ra -> Co rút cơ thẳng đùi (Rectus femoris)."
            },
            {
                "name": "Nghiệm Pháp Ober (Ober's Test Co Rút Dải Chậu Chày)",
                "technique": "Bệnh nhân nằm nghiêng bên lành, gối dưới gập. Người khám nâng chân trên, gập gối 90°, duỗi háng nhẹ và thả lỏng cho đùi rơi tự do khép xuống bàn.",
                "significance": "Nếu đùi không rơi xuống được mặt bàn mà lơ lửng trên không -> Co rút dải chậu chày (Iliotibial band contracture)."
            },
            {
                "name": "Dấu Hiệu Trendelenburg (Trendelenburg Sign Khám Cơ Mông Nhỡ)",
                "technique": "Yêu cầu bệnh nhân đứng một chân trên chân khám trong 30 giây.",
                "significance": "Nếu khung chậu bên chân đối diện bị sa sụp xuống thấp -> Yếu hoặc đứt rách gân cơ mông nhỡ / mông bé (Gluteus medius insufficiency)."
            }
        ],
        "differential_table": [
            {"condition": "Thoái hóa khớp háng (Hip Osteoarthritis)", "onset": "Người lớn tuổi > 50, đau bẹn âm ỉ tăng dần khi đi lại", "aggravating": "Tì đè chịu lực, đứng dậy từ ghế thấp", "key_differentiator": "Mô hình bao khớp kinh điển (Capsular pattern: Hạn chế gập, khép và xoay trong > giạng), X-quang hẹp khe khớp háng trên/ngoài, gai xương ổ cối"},
            {"condition": "Hội chứng đau mấu chuyển lớn (GTPS / Trochanteric Bursitis)", "onset": "Nữ trung niên, đau mặt ngoài khớp háng", "aggravating": "Nằm nghiêng đè lên bên đau, leo cầu thang", "key_differentiator": "Ấn đau chói ngay tại đỉnh mấu chuyển lớn xương đùi, đau khi giạng háng kháng lực, tầm vận động nội khớp háng (FABER/FADIR) hoàn toàn bình thường"},
            {"condition": "Rách sụn viền ổ cối (Acetabular Labral Tear)", "onset": "Người trẻ vận động viên sau động tác xoay vặn háng", "aggravating": "Ngồi lâu ghế thấp, xoay vặn khớp háng", "key_differentiator": "Cảm giác lục cục, kẹt khớp sâu trong bẹn, FADIR (+) rõ rệt, chụp MRI khớp háng có tiêm thuốc tương phản từ nội khớp (MR Arthrography)"},
            {"condition": "Bật khớp háng (Snapping Hip Syndrome)", "onset": "Vũ công, vận động viên điền kinh", "aggravating": "Gập duỗi khớp háng liên tục", "key_differentiator": "Bật ngoài (dải chậu chày trượt qua mấu chuyển lớn) hoặc Bật trong (gân cơ thắt lưng chậu trượt qua gờ chậu lược), nghe tiếng 'bật' rõ khi duỗi háng từ tư thế gập giạng"}
        ],
        "stage_2_somatic_dysfunctions": [
            "Trượt chỏm xương đùi ra trước (Anterior Femoral Glide): Chỏm đùi không trượt ra sau được khi gập háng làm đau nhói trước bẹn.",
            "Hạn chế bao khớp háng phía dưới sau (Inferoposterior Capsular Restriction): Gây cản trở động tác gập sâu và xoay trong háng.",
            "Co thắt cơ thắt lưng chậu và cơ hình lê thứ phát (Secondary Psoas & Piriformis Spasm)."
        ],
        "stage_3_guidemap_intervention": "Kỹ thuật kéo dãn trượt khớp háng ra sau (Posterior glide mobilization); Tiêm nội khớp háng dưới hướng dẫn siêu âm (xem Web 1: Tiêm Khớp Háng Đường Trước Ngoài) hoặc Tiêm túi thanh dịch mấu chuyển lớn / gân cơ mông nhỡ.",
        "figures": figures_by_chapter.get(7, [])
    },

    # ----------------------------------------------------
    # CHAPTER 8: KNEE, ANKLE & FOOT PAIN SCREENING
    # ----------------------------------------------------
    {
        "id": "ch08-knee-ankle-foot",
        "chapter": 8,
        "region": "lower_limb",
        "region_vi": "Khớp Gối, Cổ Chân & Bàn Chân",
        "title": "Knee, Ankle and Foot Pain Differential Screening",
        "title_vi": "Sàng Lọc Chẩn Đoán Phân Biệt Đau Khớp Gối, Cổ Chân & Bàn Chân",
        "author": "GS. Deepak Sebastian (Chapter 8, pp. 319-401)",
        "summary": "Cẩm nang sàng lọc chi dưới toàn diện: Phân tách rõ ràng các cờ đỏ tối khẩn (Huyết khối tĩnh mạch sâu DVT, Hội chứng khoang cẳng chân cấp 5P, Viêm tắc động mạch Buerger, Đứt hoàn toàn gân gót Achilles, Viêm khớp gối nhiễm trùng). Hướng dẫn chi tiết kỹ thuật thực hiện và giá trị độ nhạy/độ đặc hiệu của 12 nghiệm pháp khớp gối (Lachman, Pivot shift, McMurray, Clark, Hoffa...) và cổ bàn chân (Thompson, Squeeze, Mulder, Windlass...). Bảng đối chiếu chẩn đoán phân biệt chuyên sâu cho tổn thương dây chằng, sụn chêm, hội chứng bánh chè đùi, nang Baker, viêm cân gan chân và u thần kinh Morton. Tích hợp trọn vẹn 67 hình ảnh Atlas giáo trình gốc.",
        "stage_1_systemic_red_flags": [
            {
                "category": "Cờ Đỏ Huyết Khối Tĩnh Mạch Sâu Chi Dưới (Deep Vein Thrombosis - DVT)",
                "signs": "Bắp chân sưng to phù nề bất đối xứng (chu vi bắp chân chênh lệch > 3 cm so với bên lành), căng tức nóng đỏ bắp chân, dấu hiệu Homan dương tính (đau bắp chân khi gập mu bàn chân thụ động). Thường xuất hiện sau bất động, bó bột, phẫu thuật chỉnh hình hoặc đi máy bay đường dài.",
                "action": "CẤP CỨU MẠCH MÁU: Nguy cơ thuyên tắc động mạch phổi tử vong! Siêu âm Doppler mạch máu chi dưới khẩn cấp, xét nghiệm D-dimer. CẤM XOA BÓP BẮP CHÂN!"
            },
            {
                "category": "Cờ Đỏ Hội Chứng Khoang Cẳng Chân Cấp Tính (Acute Compartment Syndrome)",
                "signs": "Quy tắc kinh điển 5P: 1. Pain (Đau dữ dội quá mức tương xứng với chấn thương, đau tăng khi kéo căng cơ thụ động); 2. Paresthesia (Tê bì dị cảm mu chân); 3. Pallor (Da cẳng chân tái nhợt); 4. Pulselessness (Mất mạch mu chân/chày sau - dấu hiệu muộn); 5. Paralysis (Liệt vận động ngón chân).",
                "action": "CẤP CỨU NGOẠI CHẤN THƯƠNG TỐI KHẨN: Đo áp lực khoang (> 30 mmHg). PHẢI PHẪU THUẬT RẠCH MỞ CÂN GIẢI ÉP TRONG VÒNG 6 GIỜ để cứu chi khỏi hoại tử cắt cụt!"
            },
            {
                "category": "Cờ Đỏ Viêm Khớp Gối Nhiễm Trùng (Septic Knee Arthritis)",
                "signs": "Khớp gối sưng nóng đỏ đau dữ dội, tràn dịch lượng nhiều, sốt cao, co cứng không gấp duỗi được.",
                "action": "Chọc hút dịch khớp xét nghiệm khẩn cấp, cấy vi trùng, kháng sinh tĩnh mạch và nội soi rửa khớp ngay."
            },
            {
                "category": "Cờ Đỏ Viêm Tắc Mạch Máu Buerger (Thromboangiitis Obliterans)",
                "signs": "Nam giới trẻ tuổi nghiện thuốc lá nặng, đau buốt ngọn chi khi đi bộ hoặc nghỉ ngơi, tím tái đầu ngón chân, loét hoại tử khô đầu ngón chân, mất mạch chày sau và mu chân.",
                "action": "Cai thuốc lá tuyệt đối ngay lập tức, siêu âm Doppler và chụp mạch máu chi dưới, chuyển khoa Phẫu thuật Mạch máu."
            }
        ],
        "red_flags": [
            {
                "category": "Huyết Khối Tĩnh Mạch Sâu & Hội Chứng Khoang",
                "signs": "Bắp chân sưng nóng đỏ đau đột ngột, đau quá mức khi gập duỗi thụ động.",
                "action": "Siêu âm Doppler / Mở cân giải áp cấp cứu."
            },
            {
                "category": "Đứt Hoàn Toàn Gân Gót Achilles (Achilles Rupture)",
                "signs": "Cảm giác có người đá mạnh vào gót chân, tiếng 'bốp', sờ thấy ổ khuyết lõm trên gân gót, Thompson test (+).",
                "action": "Nẹp cổ chân gập lòng, siêu âm đánh giá, phẫu thuật nối gân khẩn cấp."
            }
        ],
        "visceral_referrals": [
            {
                "source": "Đau Chuyển Từ Khớp Háng Xuống Khớp Gối (Hip-to-Knee Referred Pain)",
                "pattern": "Bệnh lý khớp háng (Thoái hóa háng, Trượt biểu mô chỏm đùi SCFE, Viêm khớp háng) kích thích thần kinh bịt (Obturator nerve) quy chiếu đau xuống mặt trong và mặt trước khớp gối.",
                "differential": "Ở trẻ em hoặc người lớn tuổi than phiền đau gối nhưng khám gối hoàn toàn bình thường -> BẮT BUỘC PHẢI KHÁM KHỚP HÁNG!"
            },
            {
                "source": "Đau Rễ Thần Kinh Thắt Lưng (L3-L4-L5-S1 Radiculopathy)",
                "pattern": "Rễ L3-L4 đau mặt trước đùi và trước trong gối; Rễ L5 đau mặt ngoài cẳng chân và mu chân ngón cái; Rễ S1 đau bắp chân lan xuống gót và bờ ngoài bàn chân.",
                "differential": "Khám cột sống thắt lưng, nghiệm pháp SLR, Slump test và đánh giá phản xạ gân gót."
            }
        ],
        "drug_induced": [
            "Quinolone (Levofloxacin/Ciprofloxacin): Thủ phạm kinh điển gây đứt gân gót Achilles.",
            "Lợi tiểu Thiazide: Kích hoạt cơn Gút cấp tại khớp bàn ngón 1 (Podagra).",
            "Hóa trị ung thư (Paclitaxel/Cisplatin): Tê bì dị cảm bỏng rát hai bàn chân (CIPN)."
        ],
        "examination_procedures": [
            {
                "name": "Nghiệm Pháp Lachman (Tiêu Chuẩn Vàng Đứt Dây Chằng Chéo Trước ACL)",
                "technique": "Bệnh nhân nằm ngửa, gối gập 20° - 30°. Người khám một tay cố định đầu dưới xương đùi, một tay nắm đầu trên xương chày kéo thẳng ra trước.",
                "significance": "Độ dịch chuyển mâm chày ra trước tăng kèm mất điểm dừng cứng (Soft end-feel). Độ nhạy (Sn: 85 - 95%) và Độ đặc hiệu (Sp: 94 - 98%) vượt trội hơn nghiệm pháp Ngăn kéo trước."
            },
            {
                "name": "Nghiệm Pháp Pivot Shift (Mất Vững Xoay Khớp Gối Trong Đứt ACL)",
                "technique": "Bệnh nhân nằm ngửa. Người khám nâng chân, xoay trong cẳng chân, tác dụng lực vẹo ngoài (Valgus) lên đầu trên xương chày đồng thời từ từ gập khớp gối từ tư thế duỗi.",
                "significance": "Ở góc gập khoảng 30° - 40°, mâm chày ngoài đang bị bán trật ra trước sẽ đột ngột giật 'khục' trượt về vị trí cũ. Độ đặc hiệu cực cao (Sp: 98%) khẳng định mất vững khớp gối chức năng."
            },
            {
                "name": "Nghiệm Pháp McMurray (Khám Rách Sụn Chêm Trong & Ngoài)",
                "technique": "Bệnh nhân nằm ngửa, gập gối tối đa. Người khám một tay sờ khe khớp gối, tay kia cầm gót chân xoay ngoài cẳng chân (khám sụn chêm trong) hoặc xoay trong (khám sụn chêm ngoài) rồi từ từ duỗi khớp gối ra.",
                "significance": "Tái hiện tiếng 'lục cục' (clunk/click) kèm đau chói tại khe khớp gối tương ứng."
            },
            {
                "name": "Nghiệm Pháp Clark (Patellar Grind Test Khám Khớp Bánh Chè - Đùi)",
                "technique": "Bệnh nhân nằm ngửa duỗi thẳng gối. Người khám dùng bờ ngón tay cái và ngón trỏ ấn bờ trên xương bánh chè xuống dưới, yêu cầu bệnh nhân gồng cơ tứ đầu đùi.",
                "significance": "Đau chói dưới xương bánh chè và bệnh nhân không thể duy trì co cơ -> Dương tính trong Hội chứng đau bánh chè - đùi (PFPS) / Nhuyễn sụn bánh chè."
            },
            {
                "name": "Nghiệm Pháp Hoffa (Hoffa's Test Khám Viêm Đệm Mỡ Dưới Bánh Chè)",
                "technique": "Gập nhẹ gối, người khám ấn sâu hai ngón tay vào hai bên gân bánh chè (vào đệm mỡ Hoffa), sau đó yêu cầu bệnh nhân duỗi thẳng gối hoàn toàn.",
                "significance": "Đau chói dữ dội khi gối duỗi thẳng do đệm mỡ bị chèn kẹp giữa lồi cầu đùi và mâm chày."
            },
            {
                "name": "Nghiệm Pháp Thompson (Thompson Test Khám Đứt Gân Gót Achilles)",
                "technique": "Bệnh nhân nằm sấp buông thõng bàn chân ngoài mép bàn. Người khám dùng tay bóp mạnh khối cơ bắp chân.",
                "significance": "Bàn chân không tự động gập lòng -> Dương tính đứt hoàn toàn gân gót Achilles (Sp: 98%)."
            },
            {
                "name": "Nghiệm Pháp Squeeze Test (Khám Tổn Thương Khớp Chày Mác Dưới - Syndesmosis)",
                "technique": "Dùng hai tay bóp chặt xương chày và xương mác vào nhau ở đoạn giữa bắp chân.",
                "significance": "Tái hiện đau chói ở vùng khớp chày mác dưới ngay trên mắt cá ngoài -> Tổn thương bong gân khớp công-gô sụn sợi (High Ankle Sprain)."
            },
            {
                "name": "Dấu Hiệu Mulder (Mulder's Click Khám U Thần Kinh Morton)",
                "technique": "Dùng một tay bóp ép ngang các đầu xương bàn chân từ hai phía trong và ngoài, tay kia dùng ngón cái ấn từ gan chân lên khoảng gian ngón 3-4.",
                "significance": "Cảm nhận tiếng 'tách' (click) kèm cảm giác đau nhói phóng điện ra hai ngón chân -> U thần kinh Morton (Morton's neuroma)."
            },
            {
                "name": "Nghiệm Pháp Windlass (Windlass Test Khám Viêm Cân Gan Chân)",
                "technique": "Bệnh nhân đứng tì lực trên sàn. Người khám dùng tay bẻ gập mu tối đa ngón chân cái.",
                "significance": "Tái hiện đau chói tại vị trí bám của cân gan chân vào củ dưới trong xương gót -> Viêm cân gan chân (Plantar Fasciitis)."
            }
        ],
        "differential_table": [
            {"condition": "Rách sụn chêm khớp gối (Meniscal Tear)", "onset": "Sau chấn thương xoay vặn khi chân đang chịu lực hoặc thoái hóa", "aggravating": "Ngồi xổm, bước xuống cầu thang, xoay vặn gối", "key_differentiator": "Đau khu trú chính xác khe khớp gối, kẹt khớp (không thể duỗi thẳng gối), McMurray (+), Thessaly (+)"},
            {"condition": "Hội chứng đau bánh chè đùi (PFPS / Chondromalacia)", "onset": "Trẻ tuổi, vận động viên chạy bộ, nữ > nam", "aggravating": "Ngồi xổm, quỳ gối, ngồi xem phim lâu (Movie sign)", "key_differentiator": "Đau âm ỉ quanh hoặc sau xương bánh chè, Clark test (+), tiếng lạo xạo khi gập duỗi gối, không tràn dịch khớp"},
            {"condition": "Viêm gân bánh chè (Patellar Tendinopathy / Jumper's knee)", "onset": "Vận động viên bóng rổ, bóng chuyền sau động tác nhảy cao", "aggravating": "Bật nhảy, giảm tốc độ đột ngột khi chạy", "key_differentiator": "Ấn đau chói chính xác tại cực dưới xương bánh chè (nơi nguyên ủy gân), đau khi duỗi gối kháng lực"},
            {"condition": "Viêm cân gan chân (Plantar Fasciitis)", "onset": "Âm ỉ, người đứng nhiều hoặc thừa cân", "aggravating": "NHỮNG BƯỚC ĐI ĐẦU TIÊN KHI BƯỚC XUỐNG GIƯỜNG BUỔI SÁNG", "key_differentiator": "Đau giảm bớt sau khi đi lại một lúc nhưng đau tăng lại vào cuối ngày, ấn đau chói củ dưới trong xương gót, Windlass (+)"},
            {"condition": "U thần kinh Morton (Morton's Neuroma)", "onset": "Phụ nữ mang giày cao gót mũi nhọn thường xuyên", "aggravating": "Đi giày chật, đứng lâu trên mũi bàn chân", "key_differentiator": "Cảm giác như có hòn sỏi trong giày dưới gan chân ngón 3-4, đau buốt lan ra hai ngón kề cận, dấu hiệu Mulder (+)"}
        ],
        "stage_2_somatic_dysfunctions": [
            "Lệch xoay trong/xoay ngoài xương chày (Tibia Internal/External Rotation Dysfunction): Hạn chế cơ học khóa/mở khớp gối (Screw-home mechanism).",
            "Kẹt đầu trên xương mác ra trước hoặc ra sau (Anterior/Posterior Fibular Head restriction): Gây đau mặt ngoài khớp gối và chèn ép thần kinh mác chung.",
            "Khóa khớp sên gót (Subtalar Joint hypomobility): Hạn chế động tác sấp ngửa bàn chân gây tăng tải lệch trục lên khớp gối.",
            "Sa sụp khớp sên ghe (Talonavicular drop / Bàn chân bẹt): Gây xoay trong xương chày thứ phát và hội chứng đau bánh chè đùi."
        ],
        "stage_3_guidemap_intervention": "Kỹ thuật giải phóng di động đầu trên xương mác và diện khớp bánh chè; Tiêm chất nhờn Acid Hyaluronic hoặc PRP dưới hướng dẫn siêu âm vào ổ khớp gối (Xem Web 1: Tiêm Khớp Gối, Tiêm Dịch Khớp Khoeo / Nang Baker, Tiêm Cân Gan Chân).",
        "figures": figures_by_chapter.get(8, [])
    },

    # ----------------------------------------------------
    # CHAPTER 9: SHOULDER PAIN SCREENING
    # ----------------------------------------------------
    {
        "id": "ch09-shoulder",
        "chapter": 9,
        "region": "upper_limb",
        "region_vi": "Khớp Vai & Đai Vai",
        "title": "Shoulder Pain Differential Screening",
        "title_vi": "Sàng Lọc Chẩn Đoán Phân Biệt Đau Khớp Vai & Đai Vai",
        "author": "GS. Deepak Sebastian (Chapter 9, pp. 402-451)",
        "summary": "Tiếp cận sàng lọc toàn diện khớp vai và đai vai: Phân loại theo 4 vùng đau lâm sàng (Đau vai trên, Đau vai trước, Đau vai ngoài, Đau vai sau). Loại trừ cờ đỏ nội tạng cấp tính: Nhồi máu cơ tim, vỡ lách (Dấu hiệu Kehr), viêm túi mật / áp-xe gan, u đỉnh phổi Pancoast, hoại tử vô mạch chỏm xương cánh tay và trật khớp vai sau bị bỏ sót. Phân biệt tổn thương chóp xoay (Supraspinatus, Infraspinatus, Subscapularis), hội chứng xung đột dưới mỏm cùng (SAIS), tổn thương sụn viền SLAP, đông cứng khớp vai (Frozen shoulder) và rối loạn vận động xương bả vai (Scapular dyskinesis). Trọn vẹn 41 hình ảnh Atlas Deepak.",
        "stage_1_systemic_red_flags": [
            {
                "category": "Cờ Đỏ Thiếu Máu Cơ Tim / Nhồi Máu Cơ Tim (Cardiac Ischemia)",
                "signs": "Đau nhức vùng vai trái lan dọc bờ trong cánh tay và ngón 4-5 hoặc lan lên hàm, khởi phát khi gắng sức hoặc xúc động, kèm cảm giác đè nặng ngực, vã mồ hôi, khó thở, buồn nôn.",
                "action": "CẤP CỨU NỘI TIM MẠCH: Đo ECG 12 chuyển đạo ngay lập tức, xét nghiệm Troponin I/T siêu nhạy. Tuyệt đối không tiêm corticoid vào vai!"
            },
            {
                "category": "Cờ Đỏ Vỡ Lách / Chảy Máu Trong Ổ Bụng (Dấu Hiệu Kehr)",
                "signs": "Đau nhói dữ dội tại đỉnh vai trái (do máu hoặc dịch kích thích dây thần kinh hoành mặt dưới cơ hoành C3-C5), xuất hiện sau chấn thương ngực bụng kín hoặc tai nạn giao thông, kèm da niêm mạc nhợt, tụt huyết áp, bụng chướng.",
                "action": "CẤP CỨU NGOẠI TIÊU HÓA: Siêu âm bụng tại giường (FAST) tìm dịch ổ bụng, chuyển mổ khẩn cấp."
            },
            {
                "category": "Cờ Đỏ U Đỉnh Phổi Pancoast (Pancoast Tumor)",
                "signs": "Đau vai sau và rãnh gai bả vai âm ỉ liên tục tăng về đêm, lan dọc theo bờ trong cánh tay, sụt cân, tiền sử hút thuốc lá, có thể kèm sụp mi co đồng tử cùng bên (Hội chứng Horner).",
                "action": "Chụp X-quang và CT lồng ngực đánh giá vùng đỉnh phổi."
            },
            {
                "category": "Cờ Đỏ Trật Khớp Vai Sau Bị Bỏ Sót (Posterior Shoulder Dislocation)",
                "signs": "Khớp vai bị cố định ở tư thế khép và xoay trong, MẤT HOÀN TOÀN KHẢ NĂNG XOAY NGOÀI THỤ ĐỘNG. Rất dễ bị bỏ sót trên phim X-quang AP thông thường (dấu hiệu bóng đèn / Lightbulb sign), thường gặp sau cơn co giật động kinh hoặc bị điện giật.",
                "action": "Chụp X-quang khớp vai tư thế nách (Axillary view) hoặc chữ Y xương bả vai (Scapular Y view), nắn trật dưới vô cảm."
            }
        ],
        "red_flags": [
            {
                "category": "Nhồi Máu Cơ Tim & Vỡ Tạng Ổ Bụng",
                "signs": "Đau vai trái kèm đau ngực khó thở hoặc dấu hiệu Kehr sau ngã đụng bụng.",
                "action": "Đo ECG / Siêu âm FAST ổ bụng cấp cứu."
            },
            {
                "category": "Hoại Tử Vô Mạch Chỏm Xương Cánh Tay (Humeral Head AVN)",
                "signs": "Đau vai âm ỉ sâu, cứng khớp tiến triển ở bệnh nhân dùng corticoid liều cao kéo dài hoặc bệnh hồng cầu hình liềm.",
                "action": "Chụp MRI khớp vai đánh giá mức độ hoại tử dưới sụn."
            }
        ],
        "visceral_referrals": [
            {
                "source": "Bệnh Lý Gan & Túi Mật (Liver Abscess & Cholecystitis)",
                "pattern": "Kích thích cơ hoành phải quy chiếu đau lên đỉnh vai phải và vùng bờ trên cơ thang phải (qua thần kinh hoành C3-C5). Kèm sốt, vàng da, ấn đau hạ sườn phải.",
                "differential": "Siêu âm gan mật tụy, xét nghiệm men gan AST/ALT, Bilirubin."
            },
            {
                "source": "Đau Rễ Cổ C5 (Cervical Radiculopathy C5)",
                "pattern": "Đau nhức mặt ngoài cơ delta và đỉnh vai, tê bì dermatom C5, yếu cơ giạng vai (cơ delta).",
                "differential": "Spurling test (+), Kéo giãn cổ (+) làm giảm triệu chứng, cử động khớp vai nội khớp bình thường."
            }
        ],
        "drug_induced": [
            "Quinolone: Viêm gân và đứt gân cơ trên gai (Supraspinatus).",
            "Statin: Viêm cơ thang, cơ delta và cơ dưới gai đối xứng hai bên.",
            "Corticoid: Hoại tử vô mạch chỏm xương cánh tay (AVN)."
        ],
        "examination_procedures": [
            {
                "name": "Nghiệm Pháp Neer (Neer Impingement Test Xung Đột Dưới Mỏm Cùng)",
                "technique": "Người khám đứng sau, một tay cố định xương bả vai bệnh nhân, tay kia nâng toàn bộ cánh tay bệnh nhân gập tối đa ra trước trong tư thế xoay trong hoàn toàn.",
                "significance": "Tái hiện đau chói ở góc 70° - 120° do mấu động lớn kẹp gân cơ trên gai vào bờ trước dưới mỏm cùng vai (Sn: 79 - 88%)."
            },
            {
                "name": "Nghiệm Pháp Hawkins-Kennedy (Hawkins-Kennedy Impingement Test)",
                "technique": "Bệnh nhân gập vai 90°, gập khuỷu 90°. Người khám giữ khuỷu tay và thực hiện động tác xoay trong cánh tay đột ngột.",
                "significance": "Tái hiện đau chói mặt trước trên vai do gân cơ trên gai bị kẹp dưới dây chằng quạ - cùng vai (Sn: 87 - 92%)."
            },
            {
                "name": "Nghiệm Pháp Jobe / Empty Can (Khám Đứt/Viêm Gân Cơ Trên Gai)",
                "technique": "Bệnh nhân giạng hai cánh tay 90° trong mặt phẳng bả vai (hướng ra trước 30°), xoay trong cánh tay tối đa ngón cái chúc xuống đất. Người khám ấn hai tay xuống, yêu cầu bệnh nhân kháng lực.",
                "significance": "Đau chói hoặc yếu cơ rõ rệt không giữ được tay -> Dương tính tổn thương gân cơ trên gai (Supraspinatus)."
            },
            {
                "name": "Dấu Hiệu Trễ Xoay Ngoài (External Rotation Lag Sign - Cơ Dưới Gai & Tròn Bé)",
                "technique": "Bệnh nhân ngồi. Người khám nâng tay bệnh nhân gập khuỷu 90°, đưa vai ra sau và xoay ngoài thụ động gần tối đa (khoảng 80°), sau đó yêu cầu bệnh nhân giữ nguyên tư thế và buông tay ra.",
                "significance": "Cẳng tay bệnh nhân bị rơi bật ngược vào trong -> Rách lớn hoặc đứt hoàn toàn gân cơ dưới gai (Infraspinatus) và cơ tròn bé (Sp: 98%)."
            },
            {
                "name": "Nghiệm Pháp Gerber / Lift-off Test (Khám Cơ Dưới Vai - Subscapularis)",
                "technique": "Bệnh nhân đưa tay ra sau lưng, mu bàn tay áp vào vùng thắt lưng. Yêu cầu bệnh nhân chủ động đẩy mu bàn tay tách rời ra xa khỏi lưng.",
                "significance": "Bệnh nhân không thể nhấc tay ra khỏi lưng hoặc người khám ấn nhẹ bị sụp tay -> Rách gân cơ dưới vai (Subscapularis)."
            },
            {
                "name": "Nghiệm Pháp Speed & Yergason (Khám Đầu Dài Gân Nhị Đầu)",
                "technique": "Speed Test: Bệnh nhân duỗi thẳng khuỷu, ngửa cẳng tay, gập vai 90° kháng lực của người khám.\nYergason Test: Gập khuỷu 90°, áp sát cánh tay vào thân mình, bệnh nhân cố gắng ngửa cẳng tay và xoay ngoài vai kháng lại lực cản.",
                "significance": "Đau chói khu trú tại rãnh gian củ (Bicipital groove) -> Viêm gân đầu dài cơ nhị đầu hoặc mất vững gân nhị đầu."
            },
            {
                "name": "Nghiệm Pháp O'Brien (Active Compression Test Khám Rách Sụn Viền SLAP)",
                "technique": "Gập vai 90°, khép vào trong 10°, xoay trong cánh tay tối đa (ngón cái chỉ xuống sàn), ấn cánh tay xuống kháng lực (Vị trí 1). Lặp lại động tác với cẳng tay ngửa hoàn toàn (ngón cái chỉ lên trời - Vị trí 2).",
                "significance": "Đau sâu trong khớp vai ở Vị trí 1 và GIẢM HOẶC HẾT ĐAU ở Vị trí 2 -> Tổn thương rách sụn viền trên ổ chảo từ trước ra sau (SLAP Tear)."
            },
            {
                "name": "Nghiệm Pháp Cross-Body Adduction (Khám Khớp Cùng Đòn AC Joint)",
                "technique": "Bệnh nhân nâng tay gập 90°, người khám kéo khép tối đa cánh tay ngang qua ngực về phía vai đối diện.",
                "significance": "Tái hiện đau chói tại đỉnh khớp cùng đòn (Acromioclavicular Joint Arthrosis)."
            }
        ],
        "differential_table": [
            {"condition": "Hội chứng xung đột dưới mỏm cùng (Subacromial Impingement - SAIS)", "onset": "Từ từ sau các hoạt động đưa tay qua đầu thường xuyên", "aggravating": "Giạng tay trong cung đau 60° - 120° (Painful Arc)", "key_differentiator": "Neer (+), Hawkins (+), cơ lực còn tốt, tầm vận động thụ động PROM bình thường nhưng đau khi AROM chủ động"},
            {"condition": "Rách chóp xoay hoàn toàn (Full-Thickness Rotator Cuff Tear)", "onset": "Sau chấn thương ngã chống tay hoặc thoái hóa rách dần", "aggravating": "Nâng cánh tay, nằm nghiêng đè lên vai", "key_differentiator": "Yếu cơ rõ rệt khi thử cơ lực (Empty can +, Drop arm test +), Dấu hiệu trễ xoay ngoài (+), siêu âm/MRI thấy đứt liên tục sợi gân"},
            {"condition": "Đông cứng khớp vai (Adhesive Capsulitis / Frozen Shoulder)", "onset": "Âm ỉ, nữ 40-60 tuổi, tiền sử đái tháo đường/tuyến giáp", "aggravating": "Tất cả các hướng cử động, đau nhiều về đêm giai đoạn đầu", "key_differentiator": "MẤT TẦM VẬN ĐỘNG CẢ CHỦ ĐỘNG LẪN THỤ ĐỘNG THEO MÔ HÌNH BAO KHỚP: Xoay ngoài giảm nặng nhất > Giạng > Xoay trong (ER > ABD > IR)"},
            {"condition": "Viêm thoái hóa khớp cùng đòn (AC Joint Arthropathy)", "onset": "VĐV tập tạ ngực, người lao động nặng mang vác trên vai", "aggravating": "Đưa tay chéo qua ngực, nằm đè nghiêng vai", "key_differentiator": "Đau khu trú chính xác tại đỉnh mỏm cùng vai, ấn đau chói khớp AC, Cross-body adduction test (+), O'Brien đau nông ở mỏm cùng"}
        ],
        "stage_2_somatic_dysfunctions": [
            "Chỏm xương cánh tay trượt lên trên - ra trước (Anterosuperior Humeral Head Migration): Do mất cân bằng lực kéo chóp xoay và cơ delta.",
            "Rối loạn vận động xương bả vai (Scapular Dyskinesis - SICK Scapula): Xương bả vai chúc góc dưới (Type 1), nhô bờ trong (Type 2), hoặc nhô bờ trên (Type 3) làm hẹp khoang dưới mỏm cùng.",
            "Co rút bao khớp vai phía sau (Posterior Shoulder Capsule Tightness): Đẩy chỏm cánh tay trượt ra trước gây xung đột thứ phát.",
            "Khóa xương sườn 1 nhô cao (Elevated 1st rib): Gây chèn ép đám rối cánh tay và hạn chế hạ đai vai."
        ],
        "stage_3_guidemap_intervention": "Kỹ thuật giải phóng bao khớp sau và tập phục hồi vận động xương bả vai (Scapular stabilization); Tiêm khoang dưới mỏm cùng hoặc Tiêm nội khớp vai nong bao khớp dưới hướng dẫn siêu âm (Xem Web 1: Tiêm Khoang Dưới Mỏm Cùng, Tiêm Bao Gân Nhị Đầu, Tiêm Khớp Cùng Đòn).",
        "figures": figures_by_chapter.get(9, [])
    },

    # ----------------------------------------------------
    # CHAPTER 10: ELBOW, WRIST & HAND PAIN SCREENING
    # ----------------------------------------------------
    {
        "id": "ch10-elbow-wrist-hand",
        "chapter": 10,
        "region": "upper_limb",
        "region_vi": "Khớp Khuỷu, Cổ Tay & Bàn Tay",
        "title": "Elbow, Wrist and Hand Pain Differential Screening",
        "title_vi": "Sàng Lọc Chẩn Đoán Phân Biệt Đau Khớp Khuỷu, Cổ Tay & Bàn Tay",
        "author": "GS. Deepak Sebastian (Chapter 10, pp. 452-498)",
        "summary": "Sàng lọc chẩn đoán phân biệt chi trên ngọn chi: Nhận diện các cờ đỏ cấp cứu tối khẩn gồm Hội chứng khoang cẳng tay Volkmann, Hoại tử vô mạch xương nguyệt (Bệnh Kienböck), Gãy xương thuyền bỏ sót và đặc biệt là Viêm bao gân gấp mủ ngón tay (4 Dấu hiệu kinh điển Kanavel - cấp cứu rạch dẫn lưu tránh hoại tử bàn tay). Làm chủ các nghiệm pháp phân biệt kinh điển: Tennis Elbow (Cozen, Mill, Maudsley) vs Golfer's Elbow vs Hội chứng ống cổ tay (Phalen, Tinel, Durkan) vs Viêm bao gân De Quervain (Finkelstein, Eichhoff) vs Ngón tay lò xo và Hội chứng ống Guyon. Kèm trọn bộ 33 hình ảnh Atlas Deepak.",
        "stage_1_systemic_red_flags": [
            {
                "category": "Cờ Đỏ Viêm Bao Gân Gấp Mủ Bàn Tay (Kanavel's Four Cardinal Signs)",
                "signs": "Bốn dấu hiệu kinh điển của Kanavel: 1. Toàn bộ ngón tay sưng nề hình thoi (ngón tay xúc xích); 2. Ngón tay luôn giữ ở tư thế gập nhẹ; 3. Ấn đau chói dọc toàn bộ đường đi bao gân gấp; 4. ĐAU DỮ DỘI KHI DUỖI THỤ ĐỘNG NGÓN TAY (Dấu hiệu nhạy nhất!).",
                "action": "CẤP CỨU NGOẠI BÀN TAY TỐI KHẨN: Nguy cơ hoại tử gân và tàn phế bàn tay vĩnh viễn trong 24-48h! Phẫu thuật rạch mở dẫn lưu bao gân cấp cứu + Kháng sinh tĩnh mạch liều cao."
            },
            {
                "category": "Cờ Đỏ Hội Chứng Khoang Cẳng Tay & Co Rút Volkmann",
                "signs": "Đau dữ dội cẳng tay sau gãy trên lồi cầu xương cánh tay hoặc gãy hai xương cẳng tay, đau tăng khi duỗi thụ động các ngón tay, cẳng tay căng cứng như gỗ, mạch quay yếu, tê bì các ngón tay.",
                "action": "Tháo bỏ ngay bột/băng ép. Đo áp lực khoang cẳng tay và phẫu thuật mở cân cẳng tay khẩn cấp."
            },
            {
                "category": "Cờ Đỏ Gãy Xương Thuyền Bỏ Sót & Hoại Tử Tiêu Xương (Scaphoid Fracture & AVN)",
                "signs": "Ngã chống bàn tay duỗi, đau sưng cổ tay, ấn đau chói tại đáy hõm lào giải phẫu (Anatomical snuffbox tenderness) và củ xương thuyền ở mặt gan tay. Phim X-quang ban đầu có thể không thấy đường gãy!",
                "action": "Bất động nẹp ôm ngón cái ngay. Chụp MRI hoặc CT cổ tay để xác định gãy xương thuyền tránh biến chứng tiêu xương và khớp giả."
            },
            {
                "category": "Cờ Đỏ Hoại Tử Vô Mạch Xương Nguyệt (Kienböck's Disease)",
                "signs": "Đau cổ tay mạn tính vùng lưng cổ tay, sưng nề, giảm lực cầm nắm, gõ đau xương nguyệt ở người trẻ lao động thủ công hoặc dùng máy rung.",
                "action": "Chụp MRI cổ tay đánh giá hoại tử vô mạch xương nguyệt (Kienböck giai đoạn 1-4)."
            }
        ],
        "red_flags": [
            {
                "category": "Nhiễm Trùng Bao Gân Kanavel & Khoang Sâu Bàn Tay",
                "signs": "Ngón tay xúc xích, đau dữ dội khi duỗi ngón, sưng phồng ô mô cái / gan tay.",
                "action": "Rạch mổ dẫn lưu cấp cứu Ngoại chấn thương bàn tay."
            },
            {
                "category": "Tắc Mạch / Hoại Tử Ngón Tay (Raynaud Nặng / Allen Test Bất Thường)",
                "signs": "Ngón tay tím tái hoặc đen hoại tử đầu ngón, loét trợt, Allen test cho thấy tắc động mạch quay hoặc trụ.",
                "action": "Chuyển Phẫu thuật Mạch máu, khảo sát Doppler mạch ngọn chi."
            }
        ],
        "visceral_referrals": [
            {
                "source": "Đau Rễ Cổ C6 - C7 - C8 (Cervical Radiculopathy)",
                "pattern": "Đau lan từ cổ gáy dọc xuống chi trên: Rễ C6 đau lan ra ngón cái và ngón trỏ (dễ nhầm với De Quervain và HC ống cổ tay); Rễ C7 đau ngón giữa; Rễ C8 đau ngón út và bờ trụ bàn tay (dễ nhầm với HC ống Guyon).",
                "differential": "Khám Spurling cổ (+), nghiệm pháp căng đám rối cánh tay ULTT (+), cử động gập duỗi cổ tay không làm thay đổi triệu chứng."
            }
        ],
        "drug_induced": [
            "Thuốc ức chế Aromatase (Anastrozole/Letrozole): Gây cứng khớp bàn tay, ngón tay lò xo (Trigger finger) và hội chứng ống cổ tay ở bệnh nhân K vú.",
            "Fluoroquinolones: Viêm gân duỗi cổ tay và gân ngón cái.",
            "Hóa trị liệu (Cisplatin/Paclitaxel): Tê bì dị cảm bốt găng tay (CIPN)."
        ],
        "examination_procedures": [
            {
                "name": "Nghiệm Pháp Cozen (Khám Viêm Lồi Cầu Ngoài / Tennis Elbow)",
                "technique": "Bệnh nhân ngồi, gập khuỷu 90°, sấp cẳng tay, nắm chặt bàn tay và duỗi cổ tay. Người khám dùng ngón cái ấn lên mỏm lồi cầu ngoài, tay kia dùng lực ép cổ tay bệnh nhân gập xuống trong khi bệnh nhân kháng cự duỗi cổ tay.",
                "significance": "Tái hiện đau chói tại mỏm lồi cầu ngoài xương cánh tay (nơi bám gân cơ duỗi cổ tay quay ngắn ECRB)."
            },
            {
                "name": "Nghiệm Pháp Mill (Mill's Test Kéo Căng Gân Duỗi Khuỷu)",
                "technique": "Người khám sờ lồi cầu ngoài, thụ động làm động tác: Gập hoàn toàn cổ tay và các ngón, sấp cẳng tay tối đa, sau đó duỗi thẳng khớp khuỷu ra.",
                "significance": "Đau chói tại lồi cầu ngoài do kéo căng tối đa gân cơ duỗi."
            },
            {
                "name": "Nghiệm Pháp Maudsley (Maudsley's Test Duỗi Ngón 3 Kháng Lực)",
                "technique": "Yêu cầu bệnh nhân duỗi thẳng ngón tay thứ 3 (ngón giữa) kháng lại lực ép xuống của người khám.",
                "significance": "Đau chói tại lồi cầu ngoài do cơ duỗi chung các ngón và ECRB co thắt (đặc hiệu cao cho Tennis Elbow)."
            },
            {
                "name": "Nghiệm Pháp Phalen & Phalen Ngược (Phalen & Prayer Sign Khám Hội Chứng Ống Cổ Tay)",
                "technique": "Phalen Test: Bệnh nhân gập hai cổ tay 90° ép chặt mu hai bàn tay vào nhau trong 60 giây.\nPhalen Ngược (Prayer sign): Áp hai lòng bàn tay vào nhau duỗi cổ tay 90° như tư thế cầu nguyện trong 60 giây.",
                "significance": "Xuất hiện hoặc tăng cảm giác tê bì, dị cảm châm chích ở vùng chi phối thần kinh giữa (ngón 1, 2, 3 và nửa ngón 4) trong vòng 60 giây (Sn: 68 - 88%, Sp: 85%)."
            },
            {
                "name": "Dấu Hiệu Durkan (Durkan's Carpal Compression Test - Nhạy Nhất Cho Ống Cổ Tay)",
                "technique": "Người khám dùng hai ngón tay cái ấn trực tiếp một lực vừa phải (khoảng 30 mmHg) lên vị trí dây chằng vòng cổ tay (trên đường đi thần kinh giữa) trong 30 giây.",
                "significance": "Tái hiện tê bì dị cảm theo phân bố thần kinh giữa. Nghiệm pháp có độ nhạy (Sn: 87 - 91%) và độ đặc hiệu (Sp: 90%) cao nhất trong các nghiệm pháp khám ống cổ tay."
            },
            {
                "name": "Dấu Hiệu Tinel Ống Cổ Tay & Rãnh Khuỷu (Tinel's Sign)",
                "technique": "Dùng đầu ngón tay gõ nhẹ dọc theo đường đi của thần kinh giữa ở nếp gấp cổ tay hoặc thần kinh trụ tại rãnh ròng rọc khuỷu tay.",
                "significance": "Tái hiện cảm giác giật điện hoặc tê buốt phóng dọc theo đường đi của dây thần kinh ra các ngón tay."
            },
            {
                "name": "Nghiệm Pháp Finkelstein & Eichhoff (Khám Viêm Bao Gân De Quervain)",
                "technique": "Bệnh nhân gấp ngón tay cái vào trong lòng bàn tay và nắm chặt 4 ngón tay còn lại ôm trùm lên ngón cái. Người khám thụ động bẻ nghiêng cổ tay về phía xương trụ (Ulnar deviation).",
                "significance": "Đau chói dữ dội tại mỏm trâm quay (bao gân cơ dạng dài và duỗi ngắn ngón cái APL & EPB)."
            },
            {
                "name": "Nghiệm Pháp Allen (Allen's Test Đánh Giá Cung Động Mạch Bàn Tay)",
                "technique": "Bệnh nhân nắm chặt tay nhiều lần để dồn máu, người khám dùng hai ngón tay cái ép chặt đồng thời động mạch quay và động mạch trụ tại cổ tay. Yêu cầu bệnh nhân mở bàn tay ra (lòng bàn tay trắng bợt). Người khám thả tay khỏi động mạch trụ trong khi vẫn ép động mạch quay.",
                "significance": "Lòng bàn tay hồng trở lại trong vòng 3 - 5 giây: Cung động mạch gan tay thông suốt. Nếu sau 7 - 10 giây lòng bàn tay vẫn tái nhợt: Thiếu máu hoặc tắc động mạch trụ (bắt buộc kiểm tra trước khi chọc khí máu hoặc phẫu thuật)."
            }
        ],
        "differential_table": [
            {"condition": "Viêm lồi cầu ngoài (Tennis Elbow / Lateral Epicondylalgia)", "onset": "Lao động dùng cổ tay nhiều, chơi tennis, đánh máy", "aggravating": "Duỗi cổ tay kháng lực, nâng vật nặng tư thế sấp bàn tay", "key_differentiator": "Ấn đau chói lồi cầu ngoài, Cozen (+), Mill (+), Maudsley (+), cử động khớp khuỷu PROM bình thường"},
            {"condition": "Viêm lồi cầu trong (Golfer's Elbow / Medial Epicondylalgia)", "onset": "Chơi golf, ném bóng, xách xô nước nặng", "aggravating": "Gập cổ tay kháng lực, sấp cẳng tay kháng lực", "key_differentiator": "Ấn đau chói lồi cầu trong xương cánh tay, đau khi kéo căng nhóm gân gấp cổ tay"},
            {"condition": "Hội chứng ống cổ tay (Carpal Tunnel Syndrome - CTS)", "onset": "Từ từ, tê bì ngón 1-2-3 và nửa ngón 4 về đêm đánh thức giấc ngủ", "aggravating": "Cầm vô lăng lái xe, cầm điện thoại, gập cổ tay lâu", "key_differentiator": "Tê bì theo dermatom thần kinh giữa, teo cơ ô mô cái (thenar atrophy), Durkan (+), Phalen (+), Tinel (+), đo điện cơ EMG khẳng định tổn thương dẫn truyền"},
            {"condition": "Viêm bao gân De Quervain (De Quervain's Tenosynovitis)", "onset": "Phụ nữ sau sinh ẵm con (Mother's wrist), dùng điện thoại nhắn tin ngón cái", "aggravating": "Cử động ngón cái, bế em bé, vắt khăn", "key_differentiator": "Sưng và ấn đau chói tại mỏm trâm quay, Finkelstein (+) dữ dội, siêu âm thấy dày bao gân và tràn dịch quanh gân APL/EPB"},
            {"condition": "Ngón tay lò xo (Trigger Finger / Stenosing Tenosynovitis A1)", "onset": "Nắm bóp dụng cụ nhiều, bệnh nhân tiểu đường, K vú dùng AI", "aggravating": "Buổi sáng khi thức dậy, cố duỗi thẳng ngón tay", "key_differentiator": "Ngón tay bị kẹt ở tư thế gập, phải dùng tay kia bẻ mới bật thẳng ra được kèm tiếng 'tách', sờ thấy nốt gân xơ chai đau tại ranh giới khớp bàn ngón tay (A1 pulley)"}
        ],
        "stage_2_somatic_dysfunctions": [
            "Trượt chỏm xương quay ra sau (Posterior Radial Head dysfunction): Giới hạn động tác ngửa cẳng tay và duỗi khuỷu.",
            "Trượt chỏm xương quay ra trước (Anterior Radial Head dysfunction): Giới hạn động tác sấp cẳng tay và gập khuỷu.",
            "Xoay xương thuyền / xương nguyệt (Scaphoid/Lunate Somatic dysfunction): Hạn chế cử động trượt trơn tru các xương cổ tay sau bong gân.",
            "Chênh lệch độ dài xương trụ (Positive/Negative Ulnar Variance): Xương trụ dài hơn xương quay gây hội chứng chèn ép phức hợp sụn sợi tam giác (TFCC)."
        ],
        "stage_3_guidemap_intervention": "Kỹ thuật nắn chỉnh di động chỏm xương quay và xương cổ tay; Tiêm bao gân De Quervain, tiêm ròng rọc A1 ngón tay lò xo, hoặc tiêm thủy dịch giải ép thần kinh giữa ống cổ tay (Hydrodissection) dưới hướng dẫn siêu âm (Xem Web 1: Tiêm Ống Cổ Tay, Tiêm Gân De Quervain, Tiêm Ngón Tay Lò Xo, Tiêm Gân Lồi Cầu Ngoài).",
        "figures": figures_by_chapter.get(10, [])
    }
]

# Clinical Guidemap Interactive Algorithm
guidemap_algorithm = {
    "title": "Thuật Toán Sàng Lọc Lâm Sàng 3 Giai Đoạn (Sebastian 3-Stage Decision Algorithm)",
    "description": "Bản đồ chỉ dẫn ra quyết định lâm sàng từng bước khi tiếp cận bệnh nhân đau khớp, đau cơ hoặc đau cột sống khó, không điển hình hoặc thất bại với các điều trị ban đầu.",
    "stages": [
        {
            "stage": 1,
            "name": "Stage 1: Sàng Lọc Hệ Thống & Phân Loại Cờ Đỏ (Systemic & Red Flags Triage)",
            "subtitle": "Mục tiêu: Đảm bảo tính an toàn - Xác định bệnh nhân có phù hợp điều trị cơ xương khớp hay cần chuyển viện cấp cứu",
            "steps": [
                {
                    "step_id": "1.1",
                    "title": "Kiểm tra 5 Nhóm Cờ Đỏ Cấp Cứu Tính Mạng / Tàn Phế",
                    "criteria": [
                        "Mạch máu: Nghi bóc tách ĐMC, phình ĐMC bụng, VBI (5D 3N), bóc tách ĐM đốt sống, hội chứng khoang 5P, DVT tĩnh mạch sâu.",
                        "Chèn ép thần kinh trung ương: Hội chứng chùm đuôi ngựa (CES - tê yên ngựa, bí tiểu), Chèn ép tủy cổ/ngực (Myelopathy - dáng đi thất điều, Hoffman+).",
                        "Nhiễm trùng cấp: Sốt cao, khớp sưng nóng đỏ mủ, viêm mủ bao gân Kanavel, áp-xe khoang sâu, viêm đĩa đệm đốt sống.",
                        "Gãy xương / Trật khớp không vững: Chấn thương nặng, biến dạng chi, trượt mất vững C1-C2, gãy cổ xương đùi.",
                        "Ung thư di căn / U ác tính: Đau xương liên tục tăng về đêm, sụt cân nhanh, tiền sử ung thư (PB KTL), hạch ngoại vi ác tính."
                    ],
                    "decision": {
                        "positive": "CHUYỂN VIỆN CẤP CỨU / NGOẠI KHOA NGAY LẬP TỨC. Tuyệt đối KHÔNG tiêm, KHÔNG nắn chỉnh.",
                        "negative": "Chuyển tiếp sang Bước 1.2"
                    }
                },
                {
                    "step_id": "1.2",
                    "title": "Rà Soát Đau Quy Chiếu Từ Nội Tạng (Visceral Referrals)",
                    "criteria": [
                        "Đau vai/cổ trái: Loại trừ thiếu máu cơ tim (ECG, Troponin) hoặc vỡ lách (Kehr sign).",
                        "Đau vai phải/lưng ngực phải: Loại trừ sỏi/viêm túi mật, áp-xe gan (Murphy sign, siêu âm bụng).",
                        "Đau lưng ngực T7-T9: Loại trừ bệnh lý tụy (Amylase, Lipase, tư thế cúi đỡ đau).",
                        "Đau thắt lưng bẹn bìu: Loại trừ cơn đau quặn thận, bệnh lý phụ khoa buồng trứng tử cung, tiền liệt tuyến."
                    ],
                    "decision": {
                        "positive": "Chuyển khám chuyên khoa Nội/Ngoại tổng quát tương ứng.",
                        "negative": "Chuyển tiếp sang Bước 1.3"
                    }
                },
                {
                    "step_id": "1.3",
                    "title": "Rà Soát Đau Do Thuốc & Cận Lâm Sàng Cơ Bản (Ch 2 & Ch 3)",
                    "criteria": [
                        "Bệnh nhân có đang dùng: Statin (đau cơ, CK?), Quinolone (đau gân Achilles?), Corticoid (hoại tử chỏm xương đùi?), Aromatase inhibitors (đau khớp?), Bisphosphonate?",
                        "Chỉ định xét nghiệm máu sàng lọc khi có đau đa khớp hoặc đau không rõ nguyên nhân: ESR, CRP, Acid Uric, Canxi, CBC, HLA-B27, RF, Anti-CCP."
                    ],
                    "decision": {
                        "positive": "Điều chỉnh danh mục thuốc nghi ngờ, điều trị bệnh nội khoa chuyển hóa/tự miễn phối hợp.",
                        "negative": "AN TOÀN BƯỚC VÀO GIAI ĐOẠN 2: Bệnh nhân thuộc phạm vi điều trị Cơ Xương Khớp."
                    }
                }
            ]
        },
        {
            "stage": 2,
            "name": "Stage 2: Xác Định Nguồn Đau Vùng & Rối Loạn Cơ Sinh Học Hệ Vận Động (Somatic Dysfunctions) (Lesion & Somatic Diagnosis)",
            "subtitle": "Mục tiêu: Định vị chính xác cấu trúc giải phẫu phát sinh đau và cơ chế sinh học gây rối loạn chức năng",
            "steps": [
                {
                    "step_id": "2.1",
                    "title": "Phân Định Nguồn Phát Sinh Đau (Pain Generator Localization)",
                    "options": [
                        "Đau nguồn gốc Đĩa đệm - Rễ thần kinh (Radicular / Discogenic): Đau lan theo dermatom, tê bì, teo cơ, SLR (+), Spurling (+).",
                        "Đau nguồn gốc Diện khớp (Facetogenic): Đau khu trú cạnh sống, tăng khi ngửa xoay cùng bên (Kemp test +), không lan qua khớp gối/khuỷu.",
                        "Đau nguồn gốc Nội khớp & Sụn viền (Articular / Labral / Meniscal): Tiếng lục cục, kẹt khớp, đau sâu trong khớp, FADIR (+), McMurray (+), O'Brien (+).",
                        "Đau nguồn gốc Gân & Bao hoạt dịch (Tendinopathy / Bursitis): Ấn đau chói điểm bám gân, đau khi co cơ kháng lực hoặc kéo căng thụ động, sưng nóng tại chỗ.",
                        "Đau nguồn gốc Thần kinh ngoại biên bị chèn kẹp (Entrapment Neuropathy): Tê bì theo phân vùng dây TK ngoại biên, Tinel (+), Phalen (+), Durkan (+)."
                    ]
                },
                {
                    "step_id": "2.2",
                    "title": "Chẩn Đoán Rối Loạn Cơ Sinh Học Hệ Vận Động (Somatic Dysfunctions) Cơ Học (Sebastian Somatic Diagnosis)",
                    "options": [
                        "Rối loạn mở/đóng diện khớp cột sống (ERS/FRS Dysfunctions): Giảm trượt mấu khớp khi cúi/ngửa.",
                        "Lệch xoay khung chậu & xương cùng (Innominate Rotations & Sacral Torsions): Gây mất cân bằng trục cột sống và đau thắt lưng kháng trị.",
                        "Sai lệch trượt chỏm xương (Humeral/Femoral/Fibular Head Glide Alterations): Trượt chỏm xương cánh tay lên trên trước, trượt chỏm đùi ra trước, kẹt đầu xương mác."
                    ]
                }
            ]
        },
        {
            "stage": 3,
            "name": "Stage 3: Định Hướng Can Thiệp Lâm Sàng Đích (Targeted Intervention Selection)",
            "subtitle": "Mục tiêu: Lựa chọn phương pháp can thiệp tối ưu dựa trên bằng chứng",
            "steps": [
                {
                    "step_id": "3.1",
                    "title": "Cây Phân Nhánh Can Thiệp (Intervention Roadmap)",
                    "branches": [
                        {
                            "type": "Can Thiệp Bằng Nắn Chỉnh Cơ Sinh Học & PHCN (Manual Therapy & Exercise)",
                            "indication": "Rối loạn cơ sinh học hệ vận động (Somatic Dysfunctions) thuần túy (Somatic dysfunctions: ERS/FRS, lệch xoay chậu cùng, co rút cơ mạc, hạn chế trượt khớp).",
                            "action": "Kỹ thuật năng lượng cơ (MET), trượt khớp, giải phóng điểm kích hoạt cơ mạc, tập ổn định lõi và cân bằng cơ."
                        },
                        {
                            "type": "Can Thiệp Tiêm Siêu Âm Can Thiệp Chuyên Sâu (Ultrasound-Guided Interventions - Philip Peng)",
                            "indication": "Viêm bao hoạt dịch cấp/mạn tính, viêm gân vôi hóa, rách bán phần gân chóp xoay, thoái hóa khớp gối/háng, hội chứng ống cổ tay, viêm diện khớp cột sống, đau rễ thần kinh dai dẳng kháng trị với thuốc uống.",
                            "action": "Chuyển sang CẨM NANG TIÊM CAN THIỆP WEB 1 (Philip Peng) để tra cứu quy trình chuẩn hóa: Tiêm nội khớp, tiêm bao gân, tiêm rễ ngoài màng cứng, tiêm nhánh trong diện khớp, giải ép thủy dịch thần kinh (Hydrodissection)."
                        },
                        {
                            "type": "Chỉ Định Phẫu Thuật Chấn Thương Chỉnh Hình",
                            "indication": "Rách đứt gân/dây chằng hoàn toàn mất vững khớp, thoái hóa khớp giai đoạn nặng phá hủy xương khớp, hẹp ống sống nặng có khiếm khuyết thần kinh tiến triển.",
                            "action": "Hội chẩn Chuyên khoa Phẫu thuật Chấn thương Chỉnh hình / Cột sống."
                        }
                    ]
                }
            ]
        }
    ]
}

# Red Flags Master Database
red_flags_master = [
    {
        "id": "rf-01",
        "system": "Thần kinh Trung ương",
        "condition": "Hội chứng Chùm Đuôi Ngựa (Cauda Equina Syndrome)",
        "signs": "Bí tiểu, tiểu tràn, mất cảm giác yên ngựa bẹn hậu môn, yếu cơ hai chân",
        "investigation": "MRI cột sống thắt lưng khẩn cấp",
        "action": "CẤP CỨU NGOẠI THẦN KINH: Mổ giải ép trong vòng 48h",
        "urgency": "Tối khẩn"
    },
    {
        "id": "rf-02",
        "system": "Thần kinh Trung ương",
        "condition": "Chèn ép Tủy cổ (Cervical Spondylotic Myelopathy)",
        "signs": "Dáng đi thất điều, vụng bàn tay, Hoffman (+), Babinski (+), Clonus (+), Lhermitte (+)",
        "investigation": "MRI cột sống cổ khẩn cấp",
        "action": "Chống chỉ định nắn bẻ cổ, hội chẩn Phẫu thuật Thần kinh",
        "urgency": "Khẩn cấp"
    },
    {
        "id": "rf-03",
        "system": "Mạch máu",
        "condition": "Thiếu máu Đốt sống Thân nền (VBI) & Bóc tách ĐM Đốt sống",
        "signs": "Bộ quy tắc 5D 3N: Chóng mặt, nhìn đôi, nói khó, nuốt khó, khuỵu ngã; Buồn nôn, tê bì mặt, rung giật nhãn cầu. Đau đầu sét đánh",
        "investigation": "CTA hoặc MRA mạch não - cổ",
        "action": "Cấp cứu Đột quỵ / Mạch máu não, TUYỆT ĐỐI KHÔNG XOAY CỔ",
        "urgency": "Tối khẩn"
    },
    {
        "id": "rf-04",
        "system": "Mạch máu",
        "condition": "Phình Bóc tách Động mạch chủ Ngực & Bụng (Aortic Dissection / AAA)",
        "signs": "Đau ngực xé rách xuyên ra sau lưng giữa hai bả vai; Khối u đập nảy vùng bụng trên rốn, mạch đùi yếu, tụt huyết áp",
        "investigation": "CTA ngực bụng có cản quang",
        "action": "Hồi sức cấp cứu Tim mạch / Phẫu thuật Lồng ngực Mạch máu",
        "urgency": "Tối khẩn"
    },
    {
        "id": "rf-05",
        "system": "Mạch máu",
        "condition": "Huyết khối Tĩnh mạch sâu (DVT) & Hội chứng Khoang (5P)",
        "signs": "Bắp chân sưng to > 3cm, nóng đỏ đau, Homan (+); Hội chứng khoang: 5P (Đau quá mức, da tái, dị cảm, mất mạch, liệt)",
        "investigation": "Siêu âm Doppler tĩnh mạch sâu, đo áp lực khoang cẳng chân",
        "action": "DVT: Chống đông ngay, cấm xoa bóp; Khoang: Cấp cứu mổ mở cân trong 6h",
        "urgency": "Tối khẩn"
    },
    {
        "id": "rf-06",
        "system": "Nhiễm trùng",
        "condition": "Viêm Khớp Nhiễm Trùng (Septic Arthritis)",
        "signs": "Sốt cao rét run, khớp sưng nóng đỏ đau dữ dội, tràn mủ dịch khớp, co cứng khớp",
        "investigation": "Chọc hút dịch khớp xét nghiệm (WBC > 50,000/mcL, cấy VK), cấy máu, X-quang",
        "action": "CẤP CỨU NGOẠI: Mổ mở/nội soi rửa khớp + Kháng sinh IV, cấm tiêm corticoid",
        "urgency": "Tối khẩn"
    },
    {
        "id": "rf-07",
        "system": "Nhiễm trùng",
        "condition": "Viêm Bao Gân Gấp Mủ Bàn Tay (Kanavel Tenosynovitis)",
        "signs": "4 dấu hiệu Kanavel: Ngón tay xúc xích, ngón gập nhẹ, ấn đau bao gân, ĐAU DỮ DỘI KHI DUỖI NGÓN",
        "investigation": "Khám lâm sàng, xét nghiệm bạch cầu, CRP, siêu âm khẩn",
        "action": "CẤP CỨU NGOẠI BÀN TAY: Rạch mở dẫn lưu bao gân trong 24h",
        "urgency": "Tối khẩn"
    },
    {
        "id": "rf-08",
        "system": "Nhiễm trùng",
        "condition": "Viêm Đĩa đệm Đốt sống & Áp-xe Ngoài màng cứng (Spondylodiscitis / Abscess)",
        "signs": "Đau lưng dữ dội tăng dần, sốt nhẹ về chiều, gõ đau chói đốt sống, đổ mồ hôi trộm, suy kiệt",
        "investigation": "MRI cột sống có cản quang, cấy máu, ESR, CRP, QuantiFERON",
        "action": "Nhập viện điều trị kháng sinh trúng đích kéo dài hoặc phẫu thuật dẫn lưu",
        "urgency": "Khẩn cấp"
    },
    {
        "id": "rf-09",
        "system": "Ung thư / Ác tính",
        "condition": "Ung Thư Di Căn Xương Cột Sống (PB KTL Metastases) & Đa U Tủy Xương",
        "signs": "Người > 50 tuổi, đau xương liên tục tăng về đêm, sụt cân không rõ nguyên nhân, tiền sử ung thư (Tiền liệt tuyến, Vú, Thận, Tuyến giáp, Phổi); ESR > 100",
        "investigation": "X-quang, MRI toàn trục, Xạ hình xương, Điện di đạm huyết thanh (SPEP), Bence-Jones niệu, PSA",
        "action": "Chuyển chuyên khoa Ung bướu / Huyết học điều trị đa mô thức",
        "urgency": "Khẩn cấp"
    },
    {
        "id": "rf-10",
        "system": "Chấn thương cơ học",
        "condition": "Mất Vững Khớp Đội - Trục (C1-C2 Instability) & Gãy Cổ Xương Đùi",
        "signs": "Cảm giác đầu lỏng lẻo phải ôm đầu, dị cảm tứ chi khi cúi; Gãy cổ đùi: chi ngắn xoay ngoài sau ngã",
        "investigation": "X-quang cột sống cổ động (ADI > 3mm), CT scan; X-quang khớp háng thẳng nghiêng",
        "action": "Nẹp cổ cứng C-collar cố định / Bất động đùi chuyển mổ kết hợp xương",
        "urgency": "Tối khẩn"
    }
]

# Lab Tests Master Guide (From Chapter 2)
lab_tests_guide = [
    {
        "test_name": "Tốc độ máu lắng (ESR - Erythrocyte Sedimentation Rate)",
        "category": "Huyết học (Hematology)",
        "normal_range": "Nam: < 15-20 mm/h; Nữ: < 20-30 mm/h",
        "clinical_meaning": "Chỉ điểm tình trạng viêm toàn thân mạn tính. Tăng trong viêm khớp dạng thấp, lupus, nhiễm trùng mạn.",
        "red_flag_value": "ESR > 100 mm/h: Cờ đỏ đặc hiệu của Đa u tủy xương (Multiple Myeloma), Viêm động mạch thái dương (GCA), Ung thư di căn xương hoặc Viêm tủy xương."
    },
    {
        "test_name": "C-Reactive Protein (CRP & hs-CRP)",
        "category": "Sinh hóa (Biochemistry)",
        "normal_range": "< 5.0 mg/L (hoặc < 0.5 mg/dL)",
        "clinical_meaning": "Protein pha cấp do gan sản xuất dưới kích thích của IL-6. Phản ánh tình trạng viêm cấp tính nhạy hơn ESR, tăng nhanh trong 6-24h và giảm nhanh khi viêm thoái lui.",
        "red_flag_value": "CRP > 50 - 100 mg/L: Gợi ý mạnh mẽ Viêm khớp nhiễm trùng (Septic Arthritis) hoặc nhiễm trùng mô sâu."
    },
    {
        "test_name": "Axit Uric Máu (Serum Uric Acid)",
        "category": "Sinh hóa (Biochemistry)",
        "normal_range": "Nam: 4.3 - 8.0 mg/dL; Nữ: 2.3 - 6.0 mg/dL",
        "clinical_meaning": "Sản phẩm chuyển hóa thoái giáng của nhân Purin. Tăng acid uric máu lắng đọng tinh thể Monosodium Urate (MSU) gây viêm khớp Gút cấp và mạn tính tophi.",
        "red_flag_value": "> 9.0 mg/dL: Nguy cơ bùng phát cơn Gút cấp và lắng đọng tạo sỏi thận urate. Lưu ý: Trong cơn gút cấp, 30% bệnh nhân có acid uric bình thường."
    },
    {
        "test_name": "Canxi Toàn Phần & Canxi Ion Hóa (Calcium)",
        "category": "Sinh hóa (Biochemistry)",
        "normal_range": "Toàn phần: 8.5 - 10.5 mg/dL; Canxi ion: 4.5 - 5.6 mg/dL",
        "clinical_meaning": "Khoáng chất cấu tạo xương. Biến thiên nồng độ canxi ảnh hưởng trực tiếp đến co cơ, dẫn truyền thần kinh và mật độ xương.",
        "red_flag_value": "> 11.0 mg/dL (Tăng canxi máu): Cờ đỏ của Cường cận giáp nguyên phát (Hyperparathyroidism) hoặc Tiêu xương do ung thư di căn ác tính."
    },
    {
        "test_name": "Phosphatase Kiềm (ALP - Alkaline Phosphatase)",
        "category": "Sinh hóa (Biochemistry)",
        "normal_range": "30 - 120 U/L",
        "clinical_meaning": "Enzyme phản ánh hoạt động tạo xương của tạo cốt bào (Osteoblasts) và chuyển hóa đường mật.",
        "red_flag_value": "> 200 - 500 U/L: Tăng vọt trong Bệnh Paget xương, Ung thư xương nguyên phát (Osteosarcoma), hoặc Di căn xương tạo xương từ K tiền liệt tuyến."
    },
    {
        "test_name": "Creatine Kinase (CK / CPK)",
        "category": "Sinh hóa (Biochemistry)",
        "normal_range": "Nam: 55 - 170 U/L; Nữ: 30 - 135 U/L",
        "clinical_meaning": "Enzyme nội bào có nồng độ cao trong cơ vân và cơ tim. Giải phóng vào máu khi có tổn thương hủy hoại sợi cơ.",
        "red_flag_value": "> 1,000 - 50,000 U/L: TIÊU CƠ VÂN CẤP (Rhabdomyolysis do Statin, chấn thương đè đè, nhiễm độc), Viêm đa cơ tự miễn (Polymyositis)."
    },
    {
        "test_name": "Kháng Nguyên Phù Hợp Tổ Chức HLA-B27",
        "category": "Miễn dịch học (Immunology)",
        "normal_range": "Âm tính (Negative)",
        "clinical_meaning": "Kháng nguyên bề mặt tế bạch cầu lớp I. Dương tính ở 90-95% Viêm cột sống dính khớp, 70-80% Viêm khớp phản ứng (Reiter), Viêm khớp vảy nến.",
        "red_flag_value": "Dương tính ở bệnh nhân nam trẻ tuổi đau thắt lưng kiểu viêm tăng về đêm: Khẳng định nhóm bệnh Viêm cột sống huyết thanh âm tính."
    },
    {
        "test_name": "Kháng Thể Kháng CCP (Anti-Cyclic Citrullinated Peptide)",
        "category": "Miễn dịch học (Immunology)",
        "normal_range": "< 20 EU/mL (Âm tính)",
        "clinical_meaning": "Kháng thể tự miễn đặc hiệu nhất cho Viêm khớp dạng thấp (Rheumatoid Arthritis) với Độ đặc hiệu (Sp) > 96 - 98%, xuất hiện sớm nhiều năm trước khi có phá hủy khớp.",
        "red_flag_value": "> 60 EU/mL (Dương tính mạnh): Tiên lượng viêm khớp dạng thấp thể bào mòn nặng, tiến triển nhanh."
    },
    {
        "test_name": "Yếu Tố Dạng Thấp (Rheumatoid Factor - RF)",
        "category": "Miễn dịch học (Immunology)",
        "normal_range": "< 14 - 20 IU/mL (Âm tính)",
        "clinical_meaning": "Tự kháng thể kháng lại đoạn Fc của phân tử IgG. Dương tính ở 70-80% bệnh nhân viêm khớp dạng thấp, nhưng độ đặc hiệu thấp hơn Anti-CCP (có thể dương tính trong Sjögren, viêm gan C).",
        "red_flag_value": "> 50 IU/mL: Dương tính nồng độ cao gợi ý bệnh thấp khớp hệ thống nặng có biểu hiện ngoài khớp."
    },
    {
        "test_name": "Kháng Thể Kháng Nhân (ANA) & Kháng ds-DNA",
        "category": "Miễn dịch học (Immunology)",
        "normal_range": "Âm tính (Hiệu giá < 1:40 hoặc < 1:80)",
        "clinical_meaning": "Xét nghiệm sàng lọc ban đầu cho các bệnh mô liên kết tự miễn (Lupus ban đỏ hệ thống SLE, Xơ cứng bì, Viêm da cơ). Anti-dsDNA đặc hiệu cao cho tổn thương thận trong Lupus.",
        "red_flag_value": "Hiệu giá >= 1:160 kèm giảm tiểu cầu/bạch cầu: Nghi ngờ Lupus ban đỏ hệ thống bùng phát."
    },
    {
        "test_name": "Điện Di Đạm Huyết Thanh (SPEP) & Protein Bence-Jones Niệu",
        "category": "Hóa sinh & Nước tiểu",
        "normal_range": "Không có dải đơn dòng (Monoclonal spike); Bence-Jones âm tính",
        "clinical_meaning": "Phát hiện sự tăng sinh bất thường của một dòng tương bào sản xuất kháng thể đơn dòng (Paraprotein) và chuỗi nhẹ đào thải qua nước tiểu.",
        "red_flag_value": "Xuất hiện dải M-spike ở vùng Gamma và Protein Bence-Jones niệu (+): TIÊU CHUẨN VÀNG CHẨN ĐOÁN ĐA U TỦY XƯƠNG (Multiple Myeloma)."
    },
    {
        "test_name": "Kháng Nguyên Đặc Hiệu Tiền Liệt Tuyến (PSA - Total & Free)",
        "category": "Dấu ấn U (Tumor Marker)",
        "normal_range": "< 4.0 ng/mL (ở người < 60 tuổi: < 2.5 - 3.5 ng/mL)",
        "clinical_meaning": "Dấu ấn sàng lọc ung thư tuyến tiền liệt. Ung thư tiền liệt tuyến có ái tính đặc biệt di căn đến cột sống thắt lưng và khung chậu gây tổn thương đặc xương.",
        "red_flag_value": "PSA > 10 - 20 ng/mL ở bệnh nhân nam đau thắt lưng chậu: Cờ đỏ khẩn cấp của Ung thư tiền liệt tuyến di căn xương."
    }
]

# Drug-Induced MSK Pain Master Guide (From Chapter 3)
drug_induced_pain_guide = [
    {
        "drug_class": "Thuốc hạ mỡ máu nhóm Statins",
        "examples": "Atorvastatin (Lipitor), Simvastatin (Zocor), Rosuvastatin (Crestor), Pravastatin",
        "symptoms": "Đau mỏi cơ bắp đối xứng hai bên gốc chi (vai, đùi), yếu cơ, chuột rút, căng tức cơ; Nặng nhất: Tiêu cơ vân cấp (Rhabdomyolysis với nước tiểu nâu xá xị).",
        "mechanism": "Ức chế HMG-CoA reductase làm suy giảm Coenzyme Q10 (Ubiquinone) trong ty thể tế bào cơ, rối loạn kênh Canxi nội bào và kích hoạt viêm cơ tự miễn kháng HMGCR.",
        "timeline": "Thường khởi phát sau 2 - 12 tuần dùng thuốc hoặc sau khi tăng liều, hoặc khi dùng chung Fibrate/Clarithromycin.",
        "management": "Xét nghiệm CK máu. Nếu CK > 5-10 lần giới hạn trên: Ngưng ngay lập tức, bù dịch tĩnh mạch. Nếu đau cơ nhẹ: Tạm ngừng 2-4 tuần, sau đó đổi sang Rosuvastatin liều thấp cách ngày hoặc Ezetimibe/PCSK9 inhibitor."
    },
    {
        "drug_class": "Kháng sinh nhóm Fluoroquinolones",
        "examples": "Ciprofloxacin (Cipro), Levofloxacin (Levaquin), Moxifloxacin (Avelox)",
        "symptoms": "Viêm gân (Tendinitis) và Đứt gân (Tendon Rupture) - đặc biệt gân gót Achilles (> 90% các ca), gân bánh chè, gân chóp xoay vai; Đau sưng nhiều khớp.",
        "mechanism": "Gây độc tế bào nuôi gân (Tenocytes), ức chế tổng hợp collagen type I, tăng enzyme thoái giáng chất nền Matrix Metalloproteinase (MMP) và chelate ion Magie.",
        "timeline": "Có thể xảy ra rất sớm chỉ sau 48 giờ dùng thuốc hoặc muộn đến vài tháng sau khi đã ngừng kháng sinh.",
        "management": "CẢNH BÁO HỘP ĐEN FDA: NGỪNG QUINOLONE NGAY TỨC THÌ khi có dấu hiệu đau/sưng gân đầu tiên. Bất động gân, tránh vận động gắng sức, chuyển kháng sinh nhóm khác."
    },
    {
        "drug_class": "Corticosteroids đường toàn thân",
        "examples": "Methylprednisolone (Medrol), Prednisone, Dexamethasone (uống hoặc tiêm truyền)",
        "symptoms": "Hoại tử vô mạch chỏm xương đùi & xương cánh tay (AVN / Osteonecrosis); Loãng xương thứ phát gãy lún đốt sống; Bệnh cơ do steroid (Steroid-induced proximal myopathy).",
        "mechanism": "Tắc nghẽn vi mạch cấp máu cho chỏm xương do phì đại tế bào mỡ tủy xương và tăng đông máu; Ức chế tạo cốt bào và tăng hủy xương; Thoái hóa sợi cơ type II.",
        "timeline": "AVN thường biểu hiện sau vài tuần đến vài tháng dùng corticoid liều tích lũy cao.",
        "management": "Chụp MRI khớp háng hai bên sớm để phát hiện AVN giai đoạn tiền X-quang. Giảm liều dần corticoid theo phác đồ, bổ sung Canxi, Vitamin D, cân nhắc Bisphosphonate."
    },
    {
        "drug_class": "Thuốc ức chế Aromatase (Aromatase Inhibitors - AI)",
        "examples": "Anastrozole (Arimidex), Letrozole (Femara), Exemestane (Aromasin) - Trị ung thư vú",
        "symptoms": "Hội chứng đau cơ xương khớp do AI (AIMS): Đau khớp đối xứng bàn tay, cổ tay, khớp gối; Cứng khớp buổi sáng > 30-60 phút; Dày bao gân gấp gây ngón tay lò xo, hội chứng ống cổ tay.",
        "mechanism": "Ức chế triệt để quá trình tổng hợp Estrogen làm mất tác dụng bảo vệ sụn khớp và giảm ngưỡng đau thần kinh trung ương.",
        "timeline": "Khởi phát đỉnh điểm sau 2 - 6 tháng bắt đầu dùng thuốc, gặp ở 50% phụ nữ điều trị.",
        "management": "Không tự ý ngừng thuốc chống ung thư! Điều trị hỗ trợ bằng tập thể dục nhịp điệu, châm cứu, Duloxetine 30-60 mg/ngày, hoặc đổi giữa nhóm non-steroidal sang steroidal AI."
    },
    {
        "drug_class": "Thuốc chống hủy xương Bisphosphonates",
        "examples": "Alendronate (Fosamax), Zoledronic acid (Aclasta), Ibandronate (Bonviva)",
        "symptoms": "Cơn đau xương, cơ, khớp dữ dội bùng phát sau truyền Zoledronate; Gãy xương đùi không điển hình (Atypical Femur Fracture - AFF); Hoại tử xương hàm (ONJ).",
        "mechanism": "Ức chế chu chuyển xương quá mức làm tích tụ các vi tổn thương cấu trúc vỏ xương đùi; Phản ứng pha cấp giải phóng Cytokine viêm (IL-6, TNF-alpha).",
        "timeline": "Cơn đau cấp: 1-3 ngày sau truyền tĩnh mạch; Gãy xương đùi AFF: Sau 3 - 5 năm dùng thuốc liên tục.",
        "management": "Nếu có đau âm ỉ vùng đùi ở người dùng thuốc > 3 năm: Chụp X-quang xương đùi tìm vết nứt vỏ xương bên ngoài, ngưng thuốc ngay lập tức."
    },
    {
        "drug_class": "Hóa chất điều trị ung thư (Chemotherapy)",
        "examples": "Cisplatin, Carboplatin, Oxaliplatin, Paclitaxel (Taxol), Docetaxel, Vincristine",
        "symptoms": "Bệnh thần kinh ngoại biên do hóa trị (CIPN): Tê bì, dị cảm châm chích, đau buốt bỏng rát hình bốt tất - găng tay ở bàn chân bàn tay; Đau cơ khớp cấp tính sau truyền Taxane.",
        "mechanism": "Độc tính trực tiếp lên sợi trục thần kinh cảm giác và hạch rễ sau (Dorsal Root Ganglion), tổn thương vi ống dẫn truyền thần kinh.",
        "timeline": "Phụ thuộc liều tích lũy, thường xuất hiện sau 2 - 4 chu kỳ hóa trị.",
        "management": "Đánh giá mức độ mất cảm giác bảo vệ bằng Monofilament. Điều trị giảm đau thần kinh với Duloxetine, Gabapentin, Pregabalin; Cân nhắc giảm liều hóa chất."
    },
    {
        "drug_class": "Thuốc chống thấp khớp (DMARDs) & Độc chất",
        "examples": "Colchicine (kèm suy thận hoặc phối hợp Statin), Leflunomide (Arava), Penicillamine",
        "symptoms": "Độc tính thần kinh - cơ của Colchicine (yếu cơ gốc chi, bệnh đa dây thần kinh); Bệnh thần kinh ngoại vi do Leflunomide; Nhược cơ do D-Penicillamine.",
        "mechanism": "Ức chế sự trùng hợp vi ống tế bào thần kinh cơ; Độc tế bào sợi trục.",
        "timeline": "Từ vài tuần đến vài tháng sau điều trị.",
        "management": "Theo dõi nồng độ thuốc, chỉnh liều Colchicine nghiêm ngặt theo mức lọc cầu thận eGFR, ngừng thuốc khi có dấu hiệu yếu cơ."
    }
]

# Write to data/screening.js
output_content = f"""// MSK-Differential Screening Pro & Clinical Guidemap Database
// Master Edition based on Prof. Deepak Sebastian: Differential Screening of Regional Pain in Musculoskeletal Practice (526 pages)
// 10 Comprehensive Chapters + 3-Stage Decision Algorithm + Red Flags Master + Lab Tests Checker + Drug-Induced Pain Checker + 279 Deepak Atlas Images

const SCREENING_DATA = {json.dumps(modules, ensure_ascii=False, indent=2)};

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

print(f"Successfully generated data/screening.js (Size: {os.path.getsize('data/screening.js')} bytes)")

# Also write to fallback file
fallback_content = f"""// MSK-Differential Screening Pro - Resilient Fallback Shield
// Auto-generated stable fallback dataset

const STABLE_SCREENING_FALLBACK = {json.dumps(modules, ensure_ascii=False, indent=2)};
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

print(f"Successfully generated data/screening.fallback.js (Size: {os.path.getsize('data/screening.fallback.js')} bytes)")
