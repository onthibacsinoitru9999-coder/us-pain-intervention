# -*- coding: utf-8 -*-
from . import enrich_fig

def get_module():
    mod = {
        "id": "systemic-widespread",
        "chapter": 1,
        "region": "systemic",
        "region_vi": "Toàn Thân & Do Thuốc",
        "icon": "🌐",
        "title": "Systemic, Widespread MSK Pain, Drug-Induced Pain & Lab Screening",
        "title_vi": "🌐 Đau Toàn Thân / Đa Khớp, Đau do Thuốc & Rối Loạn Chuyển Hóa",
        "chief_complaint": "Phàn nàn chính: Đau nhức mỏi toàn thân, đau đa khớp di chuyển, đau xơ cơ (Fibromyalgia), đau đa cơ do thấp (PMR), đau mỏi cơ gân sau dùng thuốc Statin / Quinolone / Corticoid / Kháng Estrogen, sưng đau đa khớp kèm sốt nhẹ hoặc sút cân không rõ nguyên nhân.",
        "author": "GS. Deepak Sebastian (Chuyên khảo Chương 1, 2, 3 - Tổng Hợp Lâm Sàng)",
        "summary": "Mô hình tư duy chẩn đoán phân biệt cấp độ Textbook (Direct Access MSK Screening Model): Tích hợp thuật toán sàng lọc 3 giai đoạn của GS. Deepak Sebastian nhằm phân định an toàn giữa đau cơ xương khớp cơ học lành tính với 10 nhóm căn nguyên hệ thống (Mạch máu, Nhiễm trùng, Ung thư, Bẩm sinh, Đau do thuốc, Nội tiết, Tự miễn, Dinh dưỡng, Chấn thương, Thoái hóa). Tra cứu chuyên sâu bảng kiểm xét nghiệm cận lâm sàng (ESR, CRP, Calci, ALP, Uric acid, CPK, HLA-B27, RF, Anti-CCP, ANA) và 15 nhóm thuốc gây độc tính cơ gân.",
        
        # TAB 1: Giải phẫu, Cơ sinh học & Sờ nắn
        "tab1_anatomy_palpation": {
            "arthrokinematics": {
                "joint_system": "Hệ thống trục vận động toàn thân: Tương tác giữa hệ thống thần kinh cảm thụ bản thể (Proprioceptive system), trục dưới đồi - tuyến yên - thượng thận (HPA axis) và cân mạc toàn thân (Myofascial web).",
                "roll_gliding": "Trong đau toàn thân và đau xơ cơ (Fibromyalgia), không có tổn thương trượt khớp (Roll-gliding) khu trú đơn độc mà là hiện tượng tăng cảm thụ đau trung ương (Central Sensitization) và rối loạn điều biến dẫn truyền đau đi xuống.",
                "capsular_pattern": "Phân biệt mô hình bao khớp (Capsular pattern) trong viêm đa khớp dạng thấp (hạn chế đối xứng đồng đều) với đau xơ cơ (tầm vận động khớp chủ động và thụ động bình thường nhưng đau chói khi ấn điểm kích hoạt).",
                "loose_packed_position": "Tư thế nghỉ sinh lý toàn thân: Nằm ngửa kê gối mềm dưới khớp gối và cột sống cổ, giảm tối đa lực căng cơ học lên hệ thống dây chằng.",
                "close_packed_position": "Tư thế chịu tải tối đa: Đứng thẳng hai chân chịu lực đều.",
                "force_couples_biomechanics": "Sự mất thăng bằng chuỗi cơ vận động (Muscle imbalance patterns - Janda upper/lower crossed syndromes) thường đi kèm đau mạn tính lan tỏa.",
                "figures": [
                    enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p273_img1.jpeg", "anatomy", "Fig. 6.8: Trục cơ học chịu lực cột sống và các cấu trúc nhạy cảm đau")
                ]
            },
            "palpation_steps": [
                {
                    "landmark": "18 Điểm Đau Xơ Cơ Chuẩn ACR (ACR 18 Tender Points)",
                    "patient_position": "Bệnh nhân ngồi hoặc nằm thư giãn hoàn toàn.",
                    "technique": "Bác sĩ dùng đầu ngón tay cái ấn với một lực chuẩn xác xấp xỉ 4 kg/cm² (lực đủ làm móng tay bác sĩ bắt đầu chuyển sang màu trắng). Ấn giữ trong 2 giây tại 9 vị trí đối xứng 2 bên: 1. Vùng chẩm (chỗ bám cơ dưới chẩm); 2. Cổ dưới (mặt trước mấu ngang C5-C7); 3. Cơ thang (điểm giữa bờ trên); 4. Cơ trên gai (trên gai bả vai gần bờ trong); 5. Khớp ức sườn 2 (mặt trước cạnh xương ức); 6. Mỏm trên lồi cầu ngoài (cách lồi cầu ngoài 2 cm về phía xa); 7. Mông (phần tư trên ngoài); 8. Mấu chuyển lớn (bờ sau); 9. Khớp gối (đệm mỡ mặt trong khớp gối).",
                    "clinical_pearl": "Dương tính khi bệnh nhân thấy đau chói (nhăn mặt, giật nẩy mình) tại ≥ 11/18 điểm, gợi ý chẩn đoán Hội chứng đau xơ cơ (Fibromyalgia).",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p362_img1.jpeg", "anatomy", "Fig. 8.7: Kiểm tra tổn thương sụn khớp và điểm đau quanh gối")
                    ]
                },
                {
                    "landmark": "Sờ Nắn Động Mạch Thái Dương (Temporal Artery Palpation)",
                    "patient_position": "Bệnh nhân ngồi thẳng, bộc lộ vùng trán và thái dương hai bên.",
                    "technique": "Bác sĩ đặt nhẹ 2-3 đầu ngón tay lên nhánh trước động mạch thái dương nông ngay phía trước trên gờ tai. Sờ dọc theo đường đi của động mạch lên trán.",
                    "clinical_pearl": "Nếu sờ thấy động mạch thái dương nổi gồ cứng như sợi dây thừng, mất mạch đập, ấn đau chói kèm đau đầu một bên ở bệnh nhân > 50 tuổi: Cần nghĩ ngay đến Viêm động mạch tế bào khổng lồ (GCA / Temporal Arteritis) - Cờ đỏ cấp cứu đe dọa mù lòa mắt!",
                    "figures": []
                }
            ],
            "figures": [
                enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p273_img1.jpeg", "anatomy", "Fig. 6.8: Trục cơ học chịu lực cột sống và các cấu trúc nhạy cảm đau"),
                enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p362_img1.jpeg", "anatomy", "Fig. 8.7: Kiểm tra tổn thương sụn khớp và điểm đau quanh gối")
            ]
        },

        # TAB 2: Sàng lọc Cờ đỏ & Bệnh lý nguy hiểm
        "tab2_red_flags": [
            {
                "category": "🚨 10 Nhóm Căn Nguyên Hệ Thống Cần Rà Soát (The 10 Systemic Categories)",
                "systemic_group": "Hệ thống toàn thân",
                "signs": "1. Mạch máu (Phình bóc tách ĐMC, VBI, huyết khối tĩnh mạch sâu chi dưới, tắc mạch cấp);\n2. Nhiễm trùng (Viêm khớp nhiễm trùng, viêm đĩa đệm đốt sống, áp-xe khoang sâu, lao xương khớp);\n3. Ung thư ác tính (U xương nguyên phát: Osteosarcoma, Ewing; U di căn PB KTL: Tiền liệt tuyến, Vú, Thận, Tuyến giáp, Phổi; Đa u tủy xương);\n4. Bẩm sinh / Dị tật cấu trúc (Klippel-Feil, nứt gai sống, trượt đốt sống);\n5. Đau do thuốc / hóa chất (Statin gây tiêu cơ vân, Quinolone đứt gân, Steroid hoại tử chỏm, Aromatase inhibitors đau khớp);\n6. Nội tiết (Bệnh đái tháo đường, cường/suy cận giáp, to đầu chi, hội chứng Cushing);\n7. Tự miễn (Viêm cột sống dính khớp HLA-B27, Viêm khớp dạng thấp Anti-CCP, Lupus ban đỏ hệ thống, Viêm đa cơ);\n8. Thiếu hụt dinh dưỡng & Chuyển hóa (Loãng xương xẹp đốt sống, nhuyễn xương thiếu Vitamin D, Gout tinh thể urate, Paget xương);\n9. Chấn thương cơ xương khớp (Gãy xương không vững, rách dây chằng/sụn chêm hoàn toàn, trật khớp);\n10. Thoái hóa cơ học (Hẹp ống sống, thoái hóa khớp, xung đột gân bao khớp).",
                "action": "Nếu có bất kỳ dấu hiệu gợi ý căn nguyên 1-8: Bắt buộc dừng chỉ định can thiệp thủ thuật tại chỗ, tiến hành xét nghiệm cận lâm sàng (Lab tests) và chẩn đoán hình ảnh chuyên sâu trước khi can thiệp.",
                "gold_standard_labs": "Tổng phân tích tế bào máu (CBC), Tốc độ máu lắng (ESR), Protein phản ứng C (CRP), Điện di protein huyết thanh (SPEP), Calci máu, Men gan (AST/ALT), Chức năng thận (Creatinine/eGFR).",
                "figures": [
                    enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p362_img1.jpeg", "redflag", "Fig. 8.7: Tổn thương phá hủy xương sụn hệ thống")
                ]
            },
            {
                "category": "🚨 Cờ Đỏ Tốc Độ Máu Lắng Tăng Vọt (ESR > 100 mm/h) & U Ác Tính Xương",
                "systemic_group": "Ung thư / Viêm mạch ác tính",
                "signs": "Đau xương âm ỉ toàn thân tăng về đêm, đau không thuyên giảm khi nằm nghỉ, mệt mỏi suy kiệt sút cân không rõ nguyên nhân. Tốc độ máu lắng ESR > 100 mm/h. Cần nghĩ ngay đến: 1. Đa u tủy xương (Multiple Myeloma); 2. Viêm động mạch thái dương (Temporal Arteritis / GCA); 3. Nhiễm trùng xương sâu (Osteomyelitis); 4. Ung thư di căn xương.",
                "action": "Chuyển gấp khám Huyết học - Ung bướu hoặc Miễn dịch lâm sàng. Làm ngay điện di miễn dịch protein huyết thanh (SPEP/IFE), tìm protein Bence-Jones nước tiểu 24h, X-quang sọ não và cột sống (tìm tổn thương tiêu xương dạng đục lỗ Punched-out lytic lesions).",
                "gold_standard_labs": "Điện di protein huyết thanh/nước tiểu, Định lượng chuỗi nhẹ tự do (Free light chains), Tủy đồ (Bone marrow biopsy), X-quang khảo sát toàn bộ khung xương (Skeletal survey).",
                "figures": [
                    enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p273_img1.jpeg", "redflag", "Fig. 6.8: Gãy xẹp đốt sống do hủy hoại xương thứ phát")
                ]
            },
            {
                "category": "🚨 Hội Chứng Độc Tính Gân Cơ Cấp Do Thuốc (Statin Myopathy & Quinolone Rupture)",
                "systemic_group": "Đau do độc tính thuốc",
                "signs": "Đau cơ gốc chi đối xứng dữ dội, yếu cơ tiến triển, nước tiểu màu nước ngọt sẫm màu (trà đặc / coca) sau dùng Statin (đặc biệt khi phối hợp với Fibrate hoặc thuốc ức chế CYP3A4). Hoặc đau nhói dữ dội gót chân đột ngột sau dùng kháng sinh nhóm Quinolone (Ciprofloxacin, Levofloxacin).",
                "action": "Ngừng ngay thuốc nghi ngờ. Xét nghiệm khẩn cấp Creatine Kinase (CPK) máu: Nếu CPK > 10 lần giới hạn trên bình thường -> Chẩn đoán Tiêu cơ vân cấp (Rhabdomyolysis), nhập viện truyền dịch kiềm hóa nước tiểu bảo vệ thận chống suy thận cấp do Myoglobin.",
                "gold_standard_labs": "Creatine Kinase (CPK toàn phần), Myoglobin niệu, Điện giải đồ, Chức năng thận (Ure, Creatinine).",
                "figures": [
                    enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p390_img2.jpeg", "redflag", "Fig. 8.24: Nguy cơ đứt gân gót tự phát do kháng sinh Fluoroquinolone")
                ]
            }
        ],

        # TAB 3: Đau Chuyển Tạng & Đau Do Thuốc
        "tab3_visceral_drug_pain": {
            "visceral_referrals": [
                {
                    "organ": "Nội Tạng Ổ Bụng (Gan Mật, Dạ Dày, Ruột, Tụy, Thận)",
                    "source": "Các Tạng Trong Ổ Bụng (Deepak Ch 6 Abdominal Quadrants)",
                    "pain_pattern": "Bệnh lý tại các tạng ổ bụng kích thích thần kinh tự chủ giao cảm tạng (Splanchnic nerves) truyền xung động vào sừng sau tủy ngực thấp - thắt lưng (T5-L2), quy chiếu đau ra vùng lưng, thắt lưng, chậu và hông đùi.",
                    "neuro_mechanism": "Hội tụ cảm giác soma - tạng tại sừng sau tủy sống (Convergence-Projection Theory).",
                    "differential": "Đau tạng có tính chất co thắt từng cơn hoặc âm ỉ sâu, liên quan mật thiết tới ăn uống, đại tiểu tiện, chu kỳ kinh nguyệt; KHÔNG có điểm đau cơ học nông khi sờ nắn cột sống; KHÔNG thay đổi khi gập duỗi vặn mình đơn thuần.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p229_img1.jpeg", "visceral", "Fig. 6.3: 4 Phân khu giải phẫu ổ bụng và hướng chuyển đau tạng")
                    ]
                },
                {
                    "organ": "Hệ Thống Mạch Máu Lớn (Động Mạch Chủ Bụng - AAA)",
                    "source": "Phình Bóc Tách Động Mạch Chủ Bụng (Deepak Ch 6 Vascular Bruits)",
                    "pain_pattern": "Đau thắt lưng - bụng dữ dội liên tục, đau sâu không phụ thuộc cơ học, sờ thấy khối đập theo nhịp tim trên rốn, nghe có tiếng thổi tâm thu (Bruit) tại các vị trí động mạch chủ và động mạch thận.",
                    "neuro_mechanism": "Căng giãn vỏ bao động mạch chủ kích thích đám rối thần kinh tạng thắt lưng.",
                    "differential": "Bệnh nhân có yếu tố nguy cơ tim mạch (nam giới cao tuổi, hút thuốc lá, tăng huyết áp). Siêu âm mạch máu bụng khẳng định đường kính ĐMC bụng > 3 cm.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p231_img1.jpeg", "visceral", "Fig. 6.4: Các vị trí nghe tiếng thổi mạch máu bụng (Aortic / Renal Bruits)")
                    ]
                }
            ],
            "drug_induced": [
                "1. Nhóm Statin (Atorvastatin, Simvastatin, Rosuvastatin): Gây đau cơ (Myalgia), viêm cơ (Myositis) và tiêu cơ vân cấp (Rhabdomyolysis) do ức chế tổng hợp Coenzyme Q10 ty thể.",
                "2. Nhóm Fluoroquinolone (Ciprofloxacin, Levofloxacin, Moxifloxacin): Gây hoại tử tế bào gân (Tenocyte toxicity), đặc biệt gân Achilles và gân chóp xoay vai, tăng nguy cơ đứt gân tự phát gấp 4 lần.",
                "3. Nhóm Corticosteroid kéo dài: Gây hoại tử vô mạch chỏm xương (AVN) đùi/cánh tay, loãng xương thứ phát gây gãy xẹp đốt sống không triệu chứng ban đầu.",
                "4. Nhóm Ức chế men Aromatase (Anastrozole, Letrozole, Exemestane): Gây đau cứng đa khớp đối xứng (Aromatase Inhibitor-Associated Arthralgia Syndrome - AIAAS) ở 50% bệnh nhân ung thư vú.",
                "5. Nhóm Bisphosphonates (Alendronate, Zoledronic acid): Gây đau nhức xương toàn thân cấp sau truyền, và gãy xương đùi không điển hình (Atypical Femoral Fracture) khi dùng kéo dài > 5 năm.",
                "6. Nhóm Ức chế điểm kiểm soát miễn dịch (Anti-PD1 / CTLA-4 Checkpoint Inhibitors): Gây viêm khớp tự miễn cấp tính và viêm đa cơ giả tự miễn."
            ]
        },

        # TAB 4: Nghiệm Pháp Khám Thực Thể Đặc Hiệu
        "tab4_provocative_tests": {
            "provocative_tests": [
                {
                    "name": "Khám 18 Điểm Đau Xơ Cơ Chuẩn ACR (ACR 18 Tender Points Examination)",
                    "patient_position": "Bệnh nhân ngồi hoặc nằm thả lỏng các nhóm cơ.",
                    "examiner_action": "Bác sĩ dùng đầu ngón cái ấn vuông góc với lực tăng dần đạt 4 kg/cm² tại 9 cặp điểm chuẩn đối xứng hai bên cơ thể.",
                    "end_feel": "Cảm giác mô mềm nén ép (Soft tissue compression end-feel).",
                    "sensitivity": "88%",
                    "specificity": "81%",
                    "lr_positive": "4.6",
                    "lr_negative": "0.15",
                    "diagnostic_role": "SnNOut & Phân loại lâm sàng",
                    "clinical_role": "Xác định hội chứng đau xơ cơ nguyên phát, phân biệt với đau do viêm khớp tự miễn hoặc bệnh lý thoái hóa cơ học khu trú.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p288_img2.jpeg", "exam", "Fig. 6.21: Thao tác đánh giá phản ứng đau và co cơ bảo vệ")
                    ]
                },
                {
                    "name": "Nghiệm Pháp Đánh Giá Dấu Hiệu Không Do Cơ Quan Waddell (Waddell's Non-Organic Signs)",
                    "patient_position": "Bệnh nhân đứng, ngồi và nằm ngửa.",
                    "examiner_action": "Bác sĩ thực hiện tuần tự 5 nhóm test: 1. Ấn chẩn nông đau quá mức; 2. Thao tác mô phỏng (Ấn nhẹ đỉnh đầu hoặc xoay cả vai và chậu cùng lúc); 3. Phân tán chú ý (Khám SLR tư thế ngồi đánh lạc hướng so với nằm ngửa); 4. Rối loạn cảm giác vùng không phù hợp rễ thần kinh; 5. Phản ứng quá khích.",
                    "end_feel": "Không áp dụng (Đánh giá phản ứng hành vi của bệnh nhân).",
                    "sensitivity": "85%",
                    "specificity": "88%",
                    "lr_positive": "7.1",
                    "lr_negative": "0.17",
                    "diagnostic_role": "SpPIn (Khẳng định yếu tố tâm lý/vụ lợi khi >= 3/5 nhóm (+))",
                    "clinical_role": "Phát hiện hội chứng đau giả bệnh, yếu tố tâm lý xã hội (Yellow Flags) hoặc yếu tố vụ lợi thứ phát (Secondary gain) để tránh phẫu thuật/can thiệp xâm lấn không cần thiết.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p288_img2.jpeg", "exam", "Fig. 6.21: Thao tác phân tán chú ý và co cơ bụng")
                    ]
                },
                {
                    "name": "Nghiệm Pháp Thompson Khám Đứt Gân Gót Achilles Tự Phát (Thompson Squeeze Test)",
                    "patient_position": "Bệnh nhân nằm sấp, cẳng chân gập 90° hoặc buông thõng bàn chân ngoài mép bàn khám.",
                    "examiner_action": "Bác sĩ dùng một tay bóp mạnh vào khối cơ bắp chân (Gastrocnemius - Soleus). Quan sát cử động gập lòng bàn chân thụ động.",
                    "end_feel": "Mất sức căng đàn hồi bình thường của gân.",
                    "sensitivity": "96%",
                    "specificity": "98%",
                    "lr_positive": "48.0",
                    "lr_negative": "0.04",
                    "diagnostic_role": "SpPIn & SnNOut (Tiêu chuẩn vàng khám lâm sàng gân gót)",
                    "clinical_role": "Bình thường khi bóp bắp chân, bàn chân sẽ gập lòng nhẹ. Nếu bàn chân bất động hoàn toàn: Dương tính khẳng định đứt gân gót Achilles hoàn toàn (thường gặp sau dùng thuốc Quinolone).",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p390_img2.jpeg", "exam", "Fig. 8.24: Nghiệm pháp bóp bắp chân Thompson đánh giá gân Achilles")
                    ]
                }
            ],
            "somatic_dysfunctions": [
                {
                    "dysfunction": "Hội Chứng Nhạy Cảm Trung Ương & Mất Cân Bằng Cân Mạc Toàn Thân (Central Sensitization & Myofascial Somatic Dysfunction)",
                    "biomechanics": "Ngưỡng kích hoạt của thụ thể nhận cảm đau ngoại vi (Nociceptors) giảm mạnh do giải phóng các chất trung gian gây viêm (Substance P, CGRP, Prostaglandin). Giảm nồng độ Serotonin và Norepinephrine ức chế đau tại sừng sau tủy sống.",
                    "assessment_correction": "Điều trị đa mô thức: Giải thích cơ chế đau thần kinh (Pain Neuroscience Education), tập vận động nhịp độ chậm tăng dần (Graded exercise), thuốc điều chỉnh chất dẫn truyền thần kinh (Duloxetine, Pregabalin), châm cứu hoặc tiêm điểm kích hoạt cơ (Trigger Point Injections) dưới siêu âm.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p362_img1.jpeg", "somatic", "Fig. 8.14: Sơ đồ dẫn truyền thần kinh ngoại vi và cảm giác da")
                    ]
                }
            ]
        },

        # TAB 5: Ma Trận Chẩn Đoán Phân Biệt & Ca Bệnh Khó
        "tab5_differential_matrix": {
            "matrix": [
                {
                    "condition": "Đau Xơ Cơ (Fibromyalgia Syndrome)",
                    "onset": "Mạn tính > 3 tháng, đau lan tỏa hai bên cơ thể trên và dưới thắt lưng",
                    "aggravating": "Tăng khi căng thẳng tâm lý, mất ngủ, thời tiết lạnh; giảm nhẹ khi tắm nước ấm",
                    "confirmatory_test": "18 Điểm Tender points ACR (+ >= 11/18), thang điểm WPI >= 7",
                    "gold_standard": "Chẩn đoán loại trừ: Công thức máu, ESR, CRP, chức năng tuyến giáp bình thường",
                    "key_differentiator": "Kèm mệt mỏi mạn tính, sương mù não (Brain fog), thức dậy không sảng khoái; Tầm vận động khớp bình thường",
                    "web1_procedure_id": None
                },
                {
                    "condition": "Đau Đa Cơ Do Thấp (Polymyalgia Rheumatica - PMR)",
                    "onset": "Bắt đầu đột ngột ở người cao tuổi (> 50 tuổi), cứng đau dữ dội khớp vai và khớp háng hai bên",
                    "aggravating": "Cứng khớp nặng nề vào buổi sáng kéo dài > 45 phút, không thể tự chải đầu hay mặc áo",
                    "confirmatory_test": "Giảm biên độ chủ động vai hai bên do đau, cơ lực thực sự bình thường khi giảm đau",
                    "gold_standard": "ESR > 40–50 mm/h, CRP tăng rất cao; Đáp ứng ngoạn mục với Prednisone 15mg/ngày trong 72h",
                    "key_differentiator": "Tuổi > 50, đáp ứng tức thì với liều corticoid thấp; cần tầm soát biến chứng Viêm động mạch thái dương GCA",
                    "web1_procedure_id": "sasd-bursa"
                },
                {
                    "condition": "Bệnh Cơ Do Statin (Statin-Induced Myopathy)",
                    "onset": "Sau bắt đầu dùng thuốc Statin vài tuần đến vài tháng",
                    "aggravating": "Đau nhức cơ gốc chi hai bên, tăng sau vận động nhẹ",
                    "confirmatory_test": "Đau khi bóp cơ gốc chi (cơ tứ đầu, cơ delta); Sức cơ giảm nhẹ",
                    "gold_standard": "Men CK (Creatine Kinase) tăng cao; Thuyên giảm hoàn toàn sau ngừng Statin 2-4 tuần",
                    "key_differentiator": "Tiền sử dùng Statin; Nếu CK > 10 lần bình thường là Tiêu cơ vân cấp đe dọa thận",
                    "web1_procedure_id": None
                },
                {
                    "condition": "Viêm Cột Sống Dính Khớp (Ankylosing Spondylitis)",
                    "onset": "Khởi phát từ từ ở nam thanh niên (< 40 tuổi), đau thắt lưng - mông kiểu viêm",
                    "aggravating": "Đau tăng về nửa đêm về sáng, cải thiện sau khi thức dậy vận động",
                    "confirmatory_test": "Nghiệm pháp Schober đo độ giãn thắt lưng < 4 cm; Nghiệm pháp ép khớp cùng chậu (+)",
                    "gold_standard": "HLA-B27 dương tính (90%), MRI khớp cùng chậu thấy phù tủy xương (Viêm khớp cùng chậu hoạt tính)",
                    "key_differentiator": "Đau kiểu viêm đáp ứng tốt với NSAID, kèm viêm gân bám (Enthesitis) gân gót và viêm màng bồ đào mắt",
                    "web1_procedure_id": "sacroiliac-joint"
                },
                {
                    "condition": "Đa U Tủy Xương (Multiple Myeloma)",
                    "onset": "Người lớn tuổi, đau xương thắt lưng sườn dai dẳng tăng dần",
                    "aggravating": "Đau liên tục cả ngày lẫn đêm, không giảm khi nằm nghỉ",
                    "confirmatory_test": "Ấn đau chói nhiều điểm xương sườn và gai sống",
                    "gold_standard": "Tứ chứng CRAB: Calci máu tăng, Suy Thận (Renal), Thiếu máu (Anemia), Tổn thương tiêu xương (Bone lytic lesions); Điện di SPEP có đỉnh đơn dòng Monoclonal",
                    "key_differentiator": "ESR thường > 100 mm/h, tổn thương tiêu xương đục lỗ trên X-quang sọ và cột sống",
                    "web1_procedure_id": None
                }
            ],
            "complex_cases_reasoning": [
                {
                    "case_title": "Ca Lâm Sàng Khó: Bệnh Nhân Cao Tuổi Đau Nhức Toàn Thân Kèm Tốc Độ Máu Lắng ESR > 80 mm/h",
                    "clinical_dilemma": "Bệnh nhân nữ 68 tuổi phàn nàn đau nhức dữ dội hai vai và hai mông, cứng khớp buổi sáng 2 giờ, sút 3kg trong 1 tháng. Xét nghiệm có ESR = 85 mm/h, CRP = 42 mg/L. Chẩn đoán phân biệt giữa Đau đa cơ do thấp (PMR), Viêm khớp dạng thấp khởi phát muộn (LORA), Viêm động mạch thái dương (GCA) và Đa u tủy xương.",
                    "differential_rationale": "1. Khai thác ngay triệu chứng đau đầu một bên, đau vùng thái dương khi chải tóc, đau khập khiễng hàm khi nhai thức ăn (Jaw claudication) hoặc nhìn mờ/nhìn đôi để loại trừ Viêm động mạch thái dương GCA;\n2. Khám các khớp bàn ngón tay (MCP), cổ tay tìm sưng khớp có dịch để loại trừ LORA (RF/Anti-CCP);\n3. Làm điện di protein huyết thanh (SPEP) và Calci máu để loại trừ Đa u tủy xương;\n4. Nếu không có cờ đỏ GCA hay u ác tính: Cho dùng thử nghiệm Prednisone 15mg/ngày. Nếu bệnh nhân thuyên giảm > 70% đau và cứng khớp trong vòng 48-72 giờ, khẳng định chẩn đoán Đau đa cơ do thấp (PMR).",
                    "clinical_pearl": "PMR đáp ứng ngoạn mục với corticoid liều thấp trong 3 ngày. Nếu sau 3 ngày dùng Prednisone 15mg mà triệu chứng không cải thiện rõ rệt, phải bắt buộc dừng lại và xem xét lại chẩn đoán, tìm kiếm ung thư ẩn tàng hoặc bệnh lý nhiễm trùng sâu!"
                }
            ]
        },

        # TAB 6: Phác Đồ Can Thiệp Siêu Âm Web 1
        "tab6_intervention_linkage": {
            "intervention_guidelines": "Trong đau toàn thân và bệnh lý hệ thống, điều trị nội khoa chuyên khoa (Corticoid, DMARDs, thuốc sinh học, điều chỉnh thần kinh) là nền tảng cốt lõi. Siêu âm can thiệp đóng vai trò điều trị hỗ trợ giải áp các điểm viêm bao hoạt dịch bộc phát (Flare-up) hoặc tiêm điểm kích hoạt cân cơ (Trigger point injection) nhằm cắt đứt vòng xoắn co cứng đau.",
            "recommended_web1_procedures": [
                {
                    "id": "sasd-bursa",
                    "nameVi": "Tiêm bao hoạt dịch dưới mỏm cùng vai - dưới cơ delta",
                    "role": "Giải áp viêm bao hoạt dịch hai vai cấp tính trong Đau đa cơ do thấp (PMR)",
                    "indication": "Viêm bao hoạt dịch dưới mỏm cùng vai trong đợt bùng phát PMR kháng trị hoặc chống chỉ định corticoid toàn thân liều cao"
                },
                {
                    "id": "trochanteric-bursa",
                    "nameVi": "Tiêm bao hoạt dịch mấu chuyển lớn xương đùi",
                    "role": "Kiểm soát đau viêm bao hoạt dịch vùng háng hai bên trong PMR hoặc viêm đa khớp",
                    "indication": "Đau nhức dữ dội mấu chuyển lớn hai bên cản trở dáng đi"
                },
                {
                    "id": "sacroiliac-joint",
                    "nameVi": "Tiêm khớp cùng chậu dưới hướng dẫn siêu âm",
                    "role": "Kiểm soát viêm khớp cùng chậu trong nhóm bệnh viêm cột sống dính khớp (SpA)",
                    "indication": "Viêm khớp cùng chậu hoạt tính HLA-B27 dương tính kháng NSAID"
                }
            ]
        },
        
        # Figures aggregate
        "figures": [
            enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p273_img1.jpeg", "anatomy", "Fig. 6.8: Vulnerable structures in lower thoracic syndrome", "📐 Giải phẫu & Sờ nắn: Cấu trúc cơ răng bé sau dưới", "6.8"),
            enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p362_img1.jpeg", "redflag", "Fig. 8.7: Tổn thương phá hủy xương sụn hệ thống"),
            enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p390_img2.jpeg", "redflag", "Fig. 8.24: Nguy cơ đứt gân gót tự phát do kháng sinh Fluoroquinolone"),
            enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p229_img1.jpeg", "visceral", "Fig. 6.3: 4 Phân khu giải phẫu ổ bụng và hướng chuyển đau tạng"),
            enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p231_img1.jpeg", "visceral", "Fig. 6.4: Các vị trí nghe tiếng thổi mạch máu bụng (Aortic / Renal Bruits)"),
            enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p288_img2.jpeg", "exam", "Fig. 6.21: Thao tác đánh giá phản ứng đau và co cơ bảo vệ"),
            enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p362_img1.jpeg", "somatic", "Fig. 8.14: Sơ đồ dẫn truyền thần kinh ngoại vi và cảm giác da")
        ]
    }

    # Compatibility bridges
    mod["red_flags"] = mod["tab2_red_flags"]
    mod["visceral_referrals"] = mod["tab3_visceral_drug_pain"]["visceral_referrals"]
    mod["drug_induced"] = mod["tab3_visceral_drug_pain"]["drug_induced"]
    mod["provocative_tests"] = mod["tab4_provocative_tests"]["provocative_tests"]
    mod["examination_procedures"] = mod["tab4_provocative_tests"]["provocative_tests"]
    mod["stage_2_somatic_dysfunctions"] = [f"{s['dysfunction']}: {s['biomechanics']}" for s in mod["tab4_provocative_tests"]["somatic_dysfunctions"]]
    mod["differential_matrix"] = mod["tab5_differential_matrix"]["matrix"]
    mod["differential_table"] = mod["tab5_differential_matrix"]["matrix"]
    mod["recommended_web1_procedures"] = mod["tab6_intervention_linkage"]["recommended_web1_procedures"]
    mod["stage_3_guidemap_intervention"] = mod["tab6_intervention_linkage"]["intervention_guidelines"]

    return mod
