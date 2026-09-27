# -*- coding: utf-8 -*-
from . import enrich_fig

def get_module():
    mod = {
        "id": "lumbopelvic-pain",
        "chapter": 6,
        "region": "spine",
        "region_vi": "Thắt Lưng - Chậu & Tọa",
        "icon": "🦴",
        "title": "Lumbopelvic Pain, Sciatica, Sacroiliac & Cauda Equina Triage",
        "title_vi": "🦴 Đau Lưng, Thắt Lưng - Chậu & Thần Kinh Tọa",
        "chief_complaint": "Phàn nàn chính: Đau vùng thắt lưng lan xuống mông và chân (Đau thần kinh tọa), đau buốt tăng khi ho hoặc rặn đi ngoài, cảm giác tê bì yếu chân, cứng lưng khó cúi gập, đau vùng khớp cùng chậu khi lật người trên giường, đau mỏi lưng tăng khi đứng lâu hoặc đi bộ.",
        "author": "GS. Deepak Sebastian (Chuyên khảo Chương 6, pp. 218-300 - 83 Trang Sách)",
        "summary": "Mô hình tiếp cận chuyên khảo vùng thắt lưng - khung chậu (Lumbopelvic Master): Tích hợp toàn diện các bệnh lý đĩa đệm, rễ thần kinh, diện khớp và khớp cùng chậu (SI Joint). Nắm vững cơ sinh học chuyển động xương cùng (Nutation/Counternutation), các dạng xoay vặn xương cánh chậu (Anterior/Posterior innominate rotation, Upslip) và các thể xoay xương cùng (Sacral torsions). Rà soát triệt để cờ đỏ cấp cứu ngoại thần kinh: Hội chứng chùm đuôi ngựa (Cauda Equina Syndrome) và Phình bóc tách động mạch chủ bụng (AAA).",

        # TAB 1: Giải phẫu, Cơ sinh học & Sờ nắn
        "tab1_anatomy_palpation": {
            "arthrokinematics": {
                "joint_system": "Phức hợp cột sống thắt lưng - chậu gồm: 5 đốt sống thắt lưng (L1-L5), xương cùng (Sacrum), hai xương cánh chậu (Innominate bones) tiếp khớp qua Khớp cùng chậu (Sacroiliac Joint - SIJ) và Khớp mu (Pubic symphysis). Đĩa đệm L4-L5 và L5-S1 là hai đĩa đệm chịu tải trọng cơ học và áp lực thủy tĩnh lớn nhất cơ thể.",
                "roll_gliding": "• Cột Sống Thắt Lưng (L1-L5): Diện khớp mấu định hướng theo mặt phẳng đứng dọc (Sagittal plane) để chống lại lực xoay trục. Khi gập lưng (Flexion), các diện khớp trên trượt lên trên (Upward glide), làm mở rộng lỗ ghép thần kinh thêm 24% và giảm áp lực nén lên diện khớp; khi duỗi lưng (Extension), các diện khớp trượt xuống dưới (Downward glide), nén chặt khớp mấu và thu hẹp lỗ ghép 11%.\n• Khớp Cùng Chậu (SIJ): Là khớp lưỡng hợp (Vừa là khớp hoạt dịch ở 1/3 trước dưới, vừa là khớp liên kết sợi ở 2/3 sau trên). Chuyển động của xương cùng so với xương chậu gồm:\n- Nutation (Gập xương cùng): Đáy xương cùng (Sacral base) chúc xuống dưới và ra trước, đỉnh xương cùng quay ra sau. Đây là tư thế khóa vững tự nhiên (Form closure) giúp khớp cùng chậu chịu lực vững vàng nhất khi đi đứng.\n- Counternutation (Ngửa xương cùng): Đáy xương cùng ngửa ra sau và lên trên.\n• Chuyển Động Xoay Xương Cánh Chậu (Innominate Rotation): Xương cánh chậu có thể xoay trước (Anterior rotation) hoặc xoay sau (Posterior rotation) quanh trục ngang qua đốt sống cùng S2 tương ứng với chu kỳ bước đi.",
                "capsular_pattern": "Mô hình bao khớp (Capsular pattern): Hạn chế nghiêng bên và xoay bị hạn chế bằng nhau, tiếp theo là hạn chế duỗi (Sidebending = Rotation > Extension).",
                "loose_packed_position": "Vị trí lỏng lẻo nghỉ sinh lý (Loose-packed position): Nằm ngửa, gập nhẹ háng và gối khoảng 30° có kê đệm mềm dưới khoeo chân.",
                "close_packed_position": "Vị trí khóa chặt (Close-packed position): Duỗi tối đa cột sống thắt lưng.",
                "force_couples_biomechanics": "Trục quay chéo của xương cùng (Sacral Oblique Axes: Left Oblique Axis - LOA và Right Oblique Axis - ROA). Sự phối hợp giữa cơ dựng sống, cơ nhiều chân (Multifidus), cơ hoành, cơ ngang bụng (Transversus abdominis) và cơ sàn chậu tạo nên 'Hộp cơ lõi' (Core cylinder) nén ép giữ vững cột sống thắt lưng.",
                "figures": [
                    enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p218_img1.jpeg", "anatomy", "Fig. 6.1: Đốt sống thắt lưng và cấu trúc diện khớp đứng dọc"),
                    enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p225_img1.png", "anatomy", "Fig. 6.2: Xương cùng và các trục quay chéo Oblique Axes của khung chậu")
                ]
            },
            "palpation_steps": [
                {
                    "landmark": "1. Gai Chậu Sau Trên (Posterior Superior Iliac Spine - PSIS) & Rãnh Cùng Chậu",
                    "patient_position": "Bệnh nhân nằm sấp hoặc đứng thẳng.",
                    "technique": "Bác sĩ tìm hai vết lõm hõm vệ nữ (Dimples of Venus) ở hai bên đáy thắt lưng. Đặt ngón tay cái sờ vào mỏm xương gồ lên dưới vết lõm - đó là PSIS (ngang mức đốt sống cùng S2). Trượt ngón tay vào trong 1 cm vào rãnh cùng chậu (Sacral sulcus) để đánh giá độ sâu rãnh.",
                    "clinical_pearl": "Rãnh cùng chậu một bên sâu hơn rõ rệt gợi ý Xương cùng bị xoay vẹo (Sacral torsion); PSIS một bên cao hơn bên kia gợi ý Lệch khung chậu hoặc Nâng xương chậu (Innominate upslip).",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p292_img1.jpeg", "anatomy", "Fig. 6.31: Sờ nắn tìm điểm đau và đánh giá khớp cùng chậu SIJ")
                    ]
                },
                {
                    "landmark": "2. Củ Mu (Pubic Tubercles) & Khớp Mu",
                    "patient_position": "Bệnh nhân nằm ngửa hoàn toàn.",
                    "technique": "Bác sĩ dùng gót bàn tay trượt từ rốn dọc theo đường giữa bụng xuống dưới cho đến khi chạm vào bờ trên xương mu. Dùng hai đầu ngón tay trỏ ấn nhẹ nhàng lên hai củ mu đối xứng hai bên khớp mu.",
                    "clinical_pearl": "Một củ mu bị lệch cao hơn bên đối diện > 0.5 cm kèm đau chói khi bước đi khẳng định Bán trật khớp mu (Pubic shear / Upslip) thường gặp sau sinh đẻ hoặc chấn thương ngã dập mông.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p277_img1.jpeg", "anatomy", "Fig. 6.12: Kỹ thuật sờ nắn củ mu tư thế nằm ngửa (Palpating pubic tubercles)")
                    ]
                },
                {
                    "landmark": "3. Đáy Xương Cùng & Góc Dưới Ngoài Xương Cùng (Sacral Base & ILA)",
                    "patient_position": "Bệnh nhân nằm sấp thả lỏng mông.",
                    "technique": "• Đáy xương cùng (Sacral base): Sờ từ PSIS di chuyển lên trên và vào trong khoảng 1.5 cm.\n• Góc dưới ngoài xương cùng (Inferior Lateral Angle - ILA): Sờ từ đỉnh xương cùng (gần khe mông) di chuyển chếch sang hai bên khoảng 2 cm.",
                    "clinical_pearl": "Đối chiếu độ sâu của Sacral base và độ nhô của ILA hai bên để chẩn đoán chính xác 4 thể xoay xương cùng: Xoay cùng chiều (L-on-L, R-on-R) hoặc Xoay ngược chiều (L-on-R, R-on-L).",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p278_img1.jpeg", "anatomy", "Fig. 6.13: Định vị góc dưới ngoài ILA của xương cùng"),
                        enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p279_img1.jpeg", "anatomy", "Fig. 6.15: Định vị đáy xương cùng Sacral Base")
                    ]
                },
                {
                    "landmark": "4. Mỏm Ngang L1-L5 & Cơ Nhiều Chân (Transverse Processes & Multifidus)",
                    "patient_position": "Bệnh nhân nằm sấp.",
                    "technique": "Bác sĩ xác định mỏm gai đốt sống thắt lưng, di chuyển ngón tay sang bên 3 cm xuyên qua khối cơ dựng sống để tiếp cận mỏm ngang. Đặt ngón tay sát cạnh mỏm gai để sờ nắn rãnh rễ cơ nhiều chân (Multifidus).",
                    "clinical_pearl": "Teo cơ nhiều chân khu trú một bên (Multifidus atrophy) là chỉ báo khách quan của đau thắt lưng cơ học mạn tính và mất vững cột sống.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p274_img1.jpeg", "anatomy", "Fig. 6.9: Sờ nắn mỏm ngang đốt sống thắt lưng"),
                        enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p288_img2.jpeg", "anatomy", "Fig. 6.27: Đánh giá cơ lực và trương lực cơ nhiều chân Multifidus")
                    ]
                }
            ],
            "figures": [
                enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p218_img1.jpeg", "anatomy", "Fig. 6.1: Đốt sống thắt lưng"),
                enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p225_img1.png", "anatomy", "Fig. 6.2: Xương cùng và trục chéo"),
                enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p274_img1.jpeg", "anatomy", "Fig. 6.9: Sờ nắn mỏm ngang thắt lưng"),
                enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p277_img1.jpeg", "anatomy", "Fig. 6.12: Sờ nắn củ mu"),
                enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p278_img1.jpeg", "anatomy", "Fig. 6.13: Định vị góc dưới ngoài ILA"),
                enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p279_img1.jpeg", "anatomy", "Fig. 6.15: Định vị đáy xương cùng"),
                enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p288_img2.jpeg", "anatomy", "Fig. 6.27: Khám cơ nhiều chân Multifidus"),
                enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p292_img1.jpeg", "anatomy", "Fig. 6.31: Sờ nắn khớp cùng chậu SIJ")
            ]
        },

        # TAB 2: Sàng lọc Cờ đỏ & Bệnh lý nguy hiểm
        "tab2_red_flags": [
            {
                "category": "🚨 Hội Chứng Chùm Đuôi Ngựa (Cauda Equina Syndrome - CES)",
                "systemic_group": "Cấp cứu ngoại thần kinh tối khẩn cấp",
                "signs": "1. Rối loạn cơ tròn bàng quang: Bí tiểu cấp tính hoặc tiểu không tự chủ tràn đầy (Overflow incontinence); 2. Rối loạn đại tiện: Mất trương lực cơ thắt hậu môn (Lax anal sphincter); 3. Tê bì mất cảm giác vùng đáy chậu hình yên ngựa (Saddle anesthesia: vùng mông, quanh hậu môn và cơ quan sinh dục); 4. Yếu liệt vận động chi dưới tiến triển nhanh cả hai bên.",
                "action": "Kích hoạt báo động đỏ Cấp cứu Ngoại Thần kinh! Phẫu thuật mổ mở giải ép chùm đuôi ngựa TRONG VÒNG 48 GIỜ VÀNG (tốt nhất trong 24 giờ đầu) để tránh biến chứng tàn phế liệt hai chân và mất kiểm soát tiêu tiểu vĩnh viễn.",
                "gold_standard_labs": "Chụp cộng hưởng từ MRI cột sống thắt lưng khẩn cấp (Emergency Lumbar MRI): Đánh giá thoát vị đĩa đệm thể trung tâm khổng lồ chèn ép toàn bộ chùm đuôi ngựa; Đo thể tích nước tiểu tồn dư sau bàng quang (PVR > 200 ml).",
                "figures": [
                    enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p258_img1.jpeg", "redflag", "Fig. 6.7: Thoát vị đĩa đệm chèn ép rễ thần kinh thắt lưng L2-L3")
                ]
            },
            {
                "category": "🚨 Phình Bóc Tách Động Mạch Chủ Bụng (Abdominal Aortic Aneurysm - AAA)",
                "systemic_group": "Mạch máu ngoại khoa cấp cứu",
                "signs": "Đau thắt lưng - bụng âm ỉ dữ dội liên tục không phụ thuộc cơ học; Sờ thấy khối u đập theo nhịp tim trên rốn rộng > 3 cm; Nghe có tiếng thổi tâm thu (Bruit) tại động mạch chủ bụng; Mạch bẹn hoặc mạch mu chân hai bên bắt yếu; Bệnh nhân nam cao tuổi có tiền sử hút thuốc lá và tăng huyết áp.",
                "action": "Chuyển viện cấp cứu phẫu thuật mạch máu ngay! Tuyệt đối CẤM nắn bóp nắn chỉnh cột sống hay ấn mạnh vào vùng bụng.",
                "gold_standard_labs": "Siêu âm Doppler mạch máu ổ bụng cấp cứu hoặc Chụp cắt lớp vi tính bụng có cản quang (CTA Abdomen) xác định đường kính túi phình và nguy cơ vỡ dọa rách nội mạc.",
                "figures": [
                    enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p231_img1.jpeg", "redflag", "Fig. 6.4: Các vị trí nghe tiếng thổi mạch máu bụng (Aortic / Renal bruits)")
                ]
            },
            {
                "category": "🚨 Trượt Đốt Sống & Gãy Eo Cuống L5 (Spondylolysis & Spondylolisthesis)",
                "systemic_group": "Mất vững cấu trúc xương cơ học",
                "signs": "Đau thắt lưng tăng dữ dội khi ngửa người ra sau (Extension), sờ thấy bậc thang lõm (Step-off deformity) trên mỏm gai L4-L5; Thường gặp ở thiếu niên tập thể dục dụng cụ, cử tạ hoặc người già thoái hóa mất vững.",
                "action": "Hạn chế động tác duỗi cột sống quá mức. Chụp X-quang và CT xác định mức độ trượt theo Meyerding.",
                "gold_standard_labs": "X-quang cột sống thắt lưng tư thế chếch 3/4 (Oblique view) tìm dấu hiệu đứt cổ chó Scotty (Scotty dog collar fracture) và CT Scanner đa dãy tái tạo lát mỏng.",
                "figures": [
                    enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p236_img1.jpeg", "redflag", "Fig. 6.5: Gãy eo đốt sống L5 (Spondylolysis L5) và dấu hiệu chó Scotty"),
                    enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p257_img1.png", "redflag", "Fig. 6.6: Thoái hóa đốt sống thắt lưng và gai xương hẹp ống sống")
                ]
            },
            {
                "category": "🚨 Gãy Xẹp Đốt Sống Do Nén Ép & Tổn Thương Cơ Răng Dưới (Compression & Serratus Muscle)",
                "systemic_group": "Chấn thương nén ép không do va đập",
                "signs": "Đau thắt lưng cấp tính sau khi bê vật nặng hoặc bước hụt chân ở người cao tuổi loãng xương; Đau dữ dội tại chỗ khi gõ vào gai sống; Co cứng cơ răng sau dưới.",
                "action": "Chụp X-quang hoặc MRI xác định tuổi của vết gãy (gãy mới có phù tủy xương vs gãy cũ) trước khi xem xét bơm xi măng sinh học tạo hình thân đốt sống (Vertebroplasty).",
                "gold_standard_labs": "MRI cột sống thắt lưng chuỗi xung STIR phát hiện phù tủy xương; Đo mật độ xương DEXA.",
                "figures": [
                    enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p273_img1.jpeg", "redflag", "Fig. 6.8: Các cấu trúc tổn thương trong chấn thương nén ép dọc trục không do va đập (C-03 Audit Rule)")
                ]
            }
        ],

        # TAB 3: Đau Chuyển Tạng & Đau Do Thuốc
        "tab3_visceral_drug_pain": {
            "visceral_referrals": [
                {
                    "organ": "Thận & Niệu Quản (Kidney & Ureter / Cơn Đau Quặn Thận)",
                    "source": "Sỏi Thận, Sỏi Niệu Quản, Viêm Đài Bể Thận Cấp",
                    "pain_pattern": "Đau quặn từng cơn dữ dội khởi phát từ góc sườn - cột sống lưng thắt lưng lan dọc theo đường đi niệu quản xuống hố chậu, bẹn và tinh hoàn/môi lớn.",
                    "neuro_mechanism": "Dây thần kinh tạng thắt lưng T10-L2 dẫn truyền cảm giác căng trướng bao thận vào tủy sống.",
                    "differential": "Kèm tiểu buốt, tiểu rắt, tiểu máu đại thể; Nghiệm pháp rung thận (Giordano sign) đau chói; Bệnh nhân lăn lộn không tìm được tư thế giảm đau (khác với đau cơ học thường nằm yên bất động).",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p229_img1.jpeg", "visceral", "Fig. 6.3: Phân khu ổ bụng và hướng lan của cơn đau quặn thận")
                    ]
                },
                {
                    "organ": "Cơ Quan Sinh Dục Nữ (Tử Cung, Buồng Trứng / Lạc Nội Mạc Tử Cung)",
                    "source": "Lạc Nội Mạc Tử Cung (Endometriosis), U Xơ Tử Cung, Thai Ngoài Tử Cung Vỡ",
                    "pain_pattern": "Đau âm ỉ sâu vùng thắt lưng thấp và xương cùng, lan ra hai hố chậu.",
                    "neuro_mechanism": "Đám rối thần kinh hạ vị và tủy cùng S2-S4.",
                    "differential": "Đau có tính chu kỳ liên quan mật thiết với chu kỳ kinh nguyệt (đau tăng trước và trong kỳ kinh), đau khi giao hợp (Dyspareunia); Khám cơ xương khớp thắt lưng bình thường.",
                    "figures": []
                },
                {
                    "organ": "Tuyến Tiền Liệt & Trực Tràng (Prostate & Rectum)",
                    "source": "Viêm Tuyến Tiền Liệt Mạn Tính & Ung Thư Tiền Liệt Tuyến Di Căn Xương",
                    "pain_pattern": "Đau nhức sâu vùng cùng chụt, đáy chậu lan ra sau thắt lưng.",
                    "neuro_mechanism": "Đám rối thần kinh cùng S2-S4.",
                    "differential": "Nam giới > 50 tuổi, rối loạn tiểu tiện (tiểu đêm nhiều lần, tia tiểu yếu), xét nghiệm PSA máu tăng cao.",
                    "figures": []
                }
            ],
            "drug_induced": [
                "1. Thuốc Statin: Gây tiêu cơ vân hoặc viêm cơ dựng sống thắt lưng và cơ mông hai bên.",
                "2. Thuốc kích thích tủy xương (Filgrastim / Pegfilgrastim / G-CSF): Tăng sinh dòng bạch cầu trong tủy xương xốp thắt lưng - chậu gây đau nhức xương cùng chậu dữ dội sau tiêm 48 giờ.",
                "3. Corticosteroid: Gây hoại tử vô mạch chỏm xương đùi (AVN) và loãng xương gãy xẹp đốt sống thắt lưng âm thầm."
            ]
        },

        # TAB 4: Nghiệm Pháp Khám Thực Thể Đặc Hiệu
        "tab4_provocative_tests": {
            "provocative_tests": [
                {
                    "name": "Nghiệm Pháp Nâng Thẳng Chân Lasegue (Straight Leg Raise - SLR / Lasegue Test)",
                    "patient_position": "Bệnh nhân nằm ngửa hoàn toàn, hai chân duỗi thẳng, không kê gối.",
                    "examiner_action": "Bác sĩ một tay đặt dưới gót chân nâng từ từ chân bệnh nhân lên cao trong khi tay kia đặt trên đầu gối giữ cho gối luôn duỗi thẳng tuyệt đối. Nâng cho đến khi bệnh nhân báo xuất hiện cơn đau lan.",
                    "end_feel": "Sức căng kéo dây thần kinh rễ tọa.",
                    "sensitivity": "91%",
                    "specificity": "26%",
                    "lr_positive": "1.2",
                    "lr_negative": "0.35",
                    "diagnostic_role": "SnNOut (Loại trừ chèn ép rễ thần kinh tọa L4-S1 khi âm tính)",
                    "clinical_role": "Dương tính khi tái hiện cơn đau nhói như điện giật bắn từ thắt lưng lan dọc xuống dưới khớp gối ở góc nâng từ 35° đến 70°. Dưới 35° dây thần kinh chưa bị kéo căng; trên 70° là căng cơ gân kheo thông thường.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p288_img2.jpeg", "exam", "Fig. 6.28: Nghiệm pháp nâng thẳng chân Lasegue (Straight Leg Raise - SLR)")
                    ]
                },
                {
                    "name": "Nghiệm Pháp Lasegue Bắt Chéo (Crossed Straight Leg Raise / Well-Leg Raise Test)",
                    "patient_position": "Bệnh nhân nằm ngửa, hai chân duỗi thẳng.",
                    "examiner_action": "Bác sĩ nâng thẳng chân BÊN LÀNH (chân không đau) lên cao tương tự như nghiệm pháp SLR.",
                    "end_feel": "Cảm giác căng thần kinh.",
                    "sensitivity": "29%",
                    "specificity": "88%",
                    "lr_positive": "4.3",
                    "lr_negative": "0.80",
                    "diagnostic_role": "SpPIn (Khẳng định thoát vị đĩa đệm thể trung tâm hoặc thể lớn)",
                    "clinical_role": "Dương tính khi nâng chân BÊN LÀNH mà lại tái hiện cơn đau buốt lan dọc xuống chân BÊN ĐAU. Đây là dấu hiệu lâm sàng có độ đặc hiệu rất cao khẳng định đĩa đệm thoát vị lớn chèn ép rễ thần kinh qua màng cứng.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p289_img1.jpeg", "exam", "Fig. 6.29: Nghiệm pháp Lasegue bắt chéo chân lành (Crossed Straight Leg Raise)")
                    ]
                },
                {
                    "name": "Nghiệm Pháp Kéo Căng Trục Thần Kinh Slump Test (Slump Test)",
                    "patient_position": "Bệnh nhân ngồi thả lỏng trên mép bàn khám, đùi tựa hoàn toàn trên mặt bàn, hai tay đan sau lưng.",
                    "examiner_action": "Thực hiện tuần tự 5 bước: 1. Bệnh nhân gù gập lưng hoàn toàn; 2. Bác sĩ ấn nhẹ gập cổ tối đa; 3. Duỗi thẳng khớp gối một bên; 4. Gập mu bàn chân tối đa; 5. Thả lỏng gập cổ (Cervical release) để kiểm tra triệu chứng có giảm không.",
                    "end_feel": "Cảm giác căng màng cứng và rễ thần kinh.",
                    "sensitivity": "84%",
                    "specificity": "83%",
                    "lr_positive": "4.9",
                    "lr_negative": "0.19",
                    "diagnostic_role": "Đánh giá sức căng màng cứng và rễ tọa",
                    "clinical_role": "Dương tính khi triệu chứng đau tê buốt tái hiện ở bước 3-4 và thuyên giảm rõ rệt ngay khi bệnh nhân ngửa đầu thả lỏng cổ ở bước 5.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p289_img1.jpeg", "exam", "Fig. 6.29: Nghiệm pháp Slump Test bước thả lỏng gập cổ giải phóng sức căng")
                    ]
                },
                {
                    "name": "Nghiệm Pháp Căng Dây Thần Kinh Đùi Nằm Nghiêng (Side Lying Knee Bend / Femoral Nerve Stretch)",
                    "patient_position": "Bệnh nhân nằm nghiêng bên lành, lưng thẳng, chân dưới gập nhẹ để ổn định.",
                    "examiner_action": "Bác sĩ đứng phía sau, một tay giữ cố định xương chậu ngăn cột sống thắt lưng ưỡn ra trước. Tay kia của bác sĩ cầm cẳng chân bên đau, từ từ gập khớp gối tối đa và duỗi khớp háng ra sau nhẹ nhàng.",
                    "end_feel": "Sức căng rễ thần kinh đùi.",
                    "sensitivity": "84%",
                    "specificity": "82%",
                    "lr_positive": "4.7",
                    "lr_negative": "0.20",
                    "diagnostic_role": "Đánh giá rễ thần kinh L2, L3, L4 (Bệnh rễ đùi)",
                    "clinical_role": "Dương tính khi xuất hiện cảm giác đau nhức hoặc tê rát bắn dọc mặt trước đùi xuống mặt trong cẳng chân (theo đường đi dây thần kinh đùi).",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p290_img1.jpeg", "exam", "Fig. 6.30: Thao tác căng dây thần kinh đùi tư thế nằm nghiêng Side Lying Knee Bend")
                    ]
                },
                {
                    "name": "Chùm Nghiệm Pháp Khiêu Khích Khớp Cùng Chậu Laslett (Laslett SIJ Provocation Cluster)",
                    "patient_position": "Bệnh nhân nằm ngửa và nằm nghiêng.",
                    "examiner_action": "Thực hiện chùm 4 nghiệm pháp theo trình tự Laslett: 1. Distraction Test (Nằm ngửa, ấn ép tách hai mào chậu ra ngoài); 2. Thigh Thrust (Nằm ngửa, gập háng 90°, ấn dồn dọc trục xương đùi xuống bàn); 3. Compression Test (Nằm nghiêng, ép nén hai mào chậu vào trong); 4. Sacral Thrust (Nằm sấp, ấn lực PA trực tiếp lên xương cùng).",
                    "end_feel": "Cản trở cơ học khớp cùng chậu.",
                    "sensitivity": "88%",
                    "specificity": "85%",
                    "lr_positive": "5.9",
                    "lr_negative": "0.14",
                    "diagnostic_role": "Tiêu chuẩn vàng khám lâm sàng Khớp Cùng Chậu (SIJ)",
                    "clinical_role": "Dương tính khẳng định đau do Khớp cùng chậu (SI Joint Pain) khi có ≥ 2/4 nghiệm pháp tái hiện đúng cơn đau nhức quen thuộc ở vùng mông/khớp cùng chậu.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p293_img1.jpeg", "exam", "Figs 6.32A & B: Nghiệm pháp ép tách khớp cùng chậu Distraction Test"),
                        enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p294_img1.jpeg", "exam", "Figs 6.32C-E: Nghiệm pháp đẩy đùi Thigh Thrust và nén khớp Compression Test")
                    ]
                },
                {
                    "name": "Nghiệm Pháp Mất Vững Cột Sống Nằm Sấp (Prone Instability Test)",
                    "patient_position": "Bệnh nhân nằm sấp, thân mình tựa trên bàn khám, hai chân thõng chạm đất.",
                    "examiner_action": "Bác sĩ dùng bờ trụ bàn tay ấn lực PA lên từng mỏm gai thắt lưng gây đau (P1). Sau đó yêu cầu bệnh nhân nhấc hai chân lên khỏi mặt đất (co cơ duỗi lưng) và bác sĩ ấn lại lực PA tương tự lên mỏm gai (P2).",
                    "end_feel": "Sức co cơ dựng sống và cơ nhiều chân.",
                    "sensitivity": "72%",
                    "specificity": "88%",
                    "lr_positive": "6.0",
                    "lr_negative": "0.32",
                    "diagnostic_role": "Đánh giá mất vững cột sống thắt lưng đáp ứng bài tập Core",
                    "clinical_role": "Dương tính khi cơn đau nhói thắt lưng ở tư thế thả lỏng biến mất hoặc giảm rõ rệt khi bệnh nhân nhấc chân co cơ dựng sống. Báo hiệu bệnh nhân sẽ đáp ứng xuất sắc với các bài tập tăng cường cơ lõi (Stabilization exercises).",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p295_img1.jpeg", "exam", "Figs 6.33A & B: Thao tác nghiệm pháp mất vững nằm sấp Prone Instability Test")
                    ]
                },
                {
                    "name": "Nghiệm Pháp Cò Đứng Một Chân Stork Test (Stork / Gillet Test for SIJ Mobility)",
                    "patient_position": "Bệnh nhân đứng thẳng hai chân.",
                    "examiner_action": "Bác sĩ ngồi phía sau, đặt một ngón cái lên PSIS và ngón cái kia lên mỏm gai cùng S2. Yêu cầu bệnh nhân đứng một chân và gập khớp háng gối bên thử nghiệm lên 90°.",
                    "end_feel": "Chuyển động trượt khớp cùng chậu.",
                    "sensitivity": "43%",
                    "specificity": "68%",
                    "lr_positive": "1.3",
                    "lr_negative": "0.84",
                    "diagnostic_role": "Đánh giá độ di động khớp cùng chậu",
                    "clinical_role": "Bình thường khi co gập háng, PSIS phải trượt xuống dưới so với S2. Dương tính khi PSIS không di chuyển xuống dưới hoặc di chuyển lên trên, chứng tỏ khớp cùng chậu bị khóa cứng (Hypomobility).",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p276_img1.jpeg", "exam", "Fig. 6.11: Nghiệm pháp cò đứng một chân Stork Test / Gillet Test")
                    ]
                },
                {
                    "name": "Nghiệm Pháp Nằm Ngửa Ngồi Dậy Đánh Giá Xoay Khung Chậu (Supine to Sit / Long-Sitting Test)",
                    "patient_position": "Bệnh nhân nằm ngửa, hai chân duỗi thẳng.",
                    "examiner_action": "Bác sĩ cầm hai mắt cá trong so sánh chiều dài hai chân ở tư thế nằm ngửa. Sau đó hướng dẫn bệnh nhân từ từ ngồi dậy duỗi thẳng chân trên bàn và bác sĩ quan sát sự thay đổi chiều dài mắt cá trong.",
                    "end_feel": "Không áp dụng.",
                    "sensitivity": "44%",
                    "specificity": "64%",
                    "lr_positive": "1.2",
                    "lr_negative": "0.88",
                    "diagnostic_role": "Phân biệt xoay trước vs xoay sau xương cánh chậu",
                    "clinical_role": "Nếu chân bên đau ngắn hơn ở tư thế nằm ngửa nhưng lại dài ra khi ngồi dậy -> Xương chậu xoay trước (Anterior Innominate Rotation). Nếu chân dài hơn ở tư thế nằm nhưng ngắn lại khi ngồi dậy -> Xương chậu xoay sau (Posterior Innominate Rotation).",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p282_img1.jpeg", "exam", "Fig. 6.18: Nghiệm pháp nằm ngửa ngồi dậy Supine to Sit Test"),
                        enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p281_img1.jpeg", "exam", "Fig. 6.16: Đánh giá độ chênh lệch chiều dài chân biểu kiến")
                    ]
                }
            ],
            "somatic_dysfunctions": [
                {
                    "dysfunction": "Xương Cánh Chậu Xoay Trước / Xoay Sau (Anterior / Posterior Innominate Rotation)",
                    "biomechanics": "Xương cánh chậu bị vặn xoay quanh trục S2 do mất cân bằng cơ: Cơ thắt lưng chậu và cơ tứ đầu kéo xoay trước; Cơ gân kheo và cơ mông lớn kéo xoay sau. Gây chênh lệch chiều dài chân biểu kiến và đau khớp cùng chậu một bên.",
                    "assessment_correction": "Đánh giá độ cao ASIS và PSIS hai bên; Sử dụng kỹ thuật năng lượng cơ (Muscle Energy Technique - MET) co đẳng trường cơ gân kheo để xoay sau, hoặc co cơ tứ đầu để xoay trước xương chậu.",
                    "figures": []
                },
                {
                    "dysfunction": "Xoay Vặn Xương Cùng (Sacral Torsion Dysfunctions)",
                    "biomechanics": "Xương cùng bị vặn quanh trục chéo (Left Oblique Axis hoặc Right Oblique Axis), đáy xương cùng một bên bị chúi sâu ra trước hoặc kẹt ngửa ra sau. Làm căng xoắn dây chằng cùng gai và cùng ụ ngồi.",
                    "assessment_correction": "Khám dấu hiệu ấn nẩy lò xo xương cùng (Springing test) và tư thế nằm sấp chống đẩy (Sphinx test); Kỹ thuật nắn trượt xương cùng và giải cơ hình lê.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p296_img1.jpeg", "somatic", "Fig. 6.34: Khám xoay trong khớp háng tư thế nằm sấp và ảnh hưởng lên xương cùng")
                    ]
                }
            ]
        },

        # TAB 5: Ma Trận Chẩn Đoán Phân Biệt & Ca Bệnh Khó
        "tab5_differential_matrix": {
            "matrix": [
                {
                    "condition": "Thoát Vị Đĩa Đệm Chèn Ép Rễ Tọa (Lumbar Disc Herniation / Radiculopathy)",
                    "onset": "Sau cúi bê vật nặng vặn người, đau lan dọc mặt sau/bên chân xuống ngón",
                    "aggravating": "Tăng khi ngồi lâu, cúi gập người, ho, hắt hơi, rặn đại tiện; Giảm khi nằm ngửa gập gối",
                    "confirmatory_test": "SLR Lasegue (+) ở góc < 60°, Lasegue chéo (+), Slump Test (+)",
                    "gold_standard": "MRI cột sống thắt lưng: Khối thoát vị đĩa đệm rách bao xơ chèn ép trực tiếp rễ thần kinh",
                    "key_differentiator": "Đau lan theo đúng khoanh cảm giác (L5 mặt ngoài cẳng chân/mu chân, S1 gót chân/lòng bàn chân); Giảm phản xạ gân gót (S1)",
                    "web1_procedure_id": "caudal-epidural"
                },
                {
                    "condition": "Hẹp Ống Sống Thắt Lưng (Lumbar Spinal Stenosis / Đau Cách Hồi Thần Kinh)",
                    "onset": "Từ từ ở người cao tuổi > 60 tuổi, thoái hóa dày dây chằng vàng và phì đại diện khớp",
                    "aggravating": "Đau mỏi tê buốt hai chân tăng dần khi đi bộ hoặc đứng thẳng lưng kéo dài",
                    "confirmatory_test": "Dấu hiệu đẩy xe đẩy siêu thị (Shopping Cart Sign): Cúi người ra trước giúp đi bộ được xa hơn",
                    "gold_standard": "MRI cột sống thắt lưng: Đường kính trước - sau ống sống < 10 mm, hẹp ngách bên đa tầng",
                    "key_differentiator": "Đau cách hồi thần kinh (Neurogenic Claudication): Đi bộ một đoạn phải ngồi xổm hoặc cúi gập lưng mới đỡ; Mạch mu chân bắt tốt",
                    "web1_procedure_id": "caudal-epidural"
                },
                {
                    "condition": "Hội Chứng Khớp Cùng Chậu (Sacroiliac Joint Dysfunction / Sacroiliitis)",
                    "onset": "Sau ngã dập mông, phụ nữ mang thai/sau sinh, hoặc trong Viêm cột sống dính khớp",
                    "aggravating": "Tăng khi lật người trên giường, đứng một chân, bước lên cầu thang, ngồi lâu",
                    "confirmatory_test": "Chùm nghiệm pháp Laslett (+ >= 2/4: Thigh thrust, Distraction, Compression, Sacral thrust)",
                    "gold_standard": "Tiêm phong bế khớp cùng chậu dưới hướng dẫn siêu âm / C-arm giảm đau > 75%",
                    "key_differentiator": "Điểm đau Fortin (Fortin Finger Test): Bệnh nhân dùng một ngón tay chỉ đúng điểm đau dưới PSIS 1 cm; Không đau quá đầu gối",
                    "web1_procedure_id": "sacroiliac-joint"
                },
                {
                    "condition": "Hội Chứng Khớp Mấu Thắt Lưng (Lumbar Facet Syndrome)",
                    "onset": "Thoái hóa diện khớp ở người trung niên và cao tuổi, đau thắt lưng lan xuống mông đùi",
                    "aggravating": "Tăng khi ngửa người ra sau kết hợp xoay nghiêng sang bên đau; Giảm khi ngồi cúi gập",
                    "confirmatory_test": "Kemp Test / Extension-Rotation Test (+ đau lưng cục bộ); SLR (-)",
                    "gold_standard": "Tiêm phong bế nhánh trong dây thần kinh sống thắt lưng (Lumbar MBB) giảm đau > 80%",
                    "key_differentiator": "Đau không bao giờ vượt quá khớp gối, không có dấu hiệu chèn ép rễ thần kinh",
                    "web1_procedure_id": "lumbar-medial-branch"
                },
                {
                    "condition": "Hội Chứng Cơ Hình Lê (Piriformis Syndrome)",
                    "onset": "Sau ngồi lâu trên ví tiền dày, chấn thương vùng mông, co thắt phì đại cơ hình lê",
                    "aggravating": "Tăng khi ngồi ghế cứng kéo dài, ngồi bắt chéo chân, gập khép xoay trong háng",
                    "confirmatory_test": "FAIR Test (Flexion, Adduction, Internal Rotation) (+), Beatty Test (+), Ấn chói cơ hình lê",
                    "gold_standard": "MRI chuyên biệt thần kinh (MR Neurography) thấy dây thần kinh tọa bị phì đại nén ép dưới cơ hình lê",
                    "key_differentiator": "Điểm đau chói sâu giữa mông, đau lưng không đáng kể, SLR chỉ đau ở thì khép háng",
                    "web1_procedure_id": "piriformis-muscle"
                },
                {
                    "condition": "Đau Cách Hồi Mạch Máu (Vascular Claudication / Tắc Động Mạch Chi Dưới)",
                    "onset": "Người cao tuổi xơ vữa động mạch, hút thuốc lá nhiều năm, đái tháo đường",
                    "aggravating": "Đau mỏi bắp chân sau một khoảng cách đi bộ cố định; Tăng khi đi nhanh",
                    "confirmatory_test": "Chỉ số huyết áp cổ chân - cánh tay (ABI < 0.9); Mạch chày sau và mu chân bắt yếu/mất",
                    "gold_standard": "Siêu âm Doppler động mạch chi dưới hoặc Chụp CT mạch máu chi dưới (CTA Legs)",
                    "key_differentiator": "Đau cách hồi mạch máu: Dừng lại đứng yên tại chỗ là hết đau ngay trong 2-3 phút (không cần ngồi cúi gập lưng); Chân lạnh teo lông móng",
                    "web1_procedure_id": None
                }
            ],
            "complex_cases_reasoning": [
                {
                    "case_title": "Biện Luận Ca Khó: Phân Biệt Đau Cách Hồi Thần Kinh (Do Hẹp Ống Sống) vs Đau Cách Hồi Mạch Máu (Do Tắc Mạch)",
                    "clinical_dilemma": "Bệnh nhân nam 67 tuổi có tiền sử hút thuốc lá 30 năm và đau lưng mạn tính. Bệnh nhân phàn nàn cứ đi bộ khoảng 150 mét là hai cẳng chân đau nhức mỏi rã rời, nặng trịch không thể bước tiếp. Bác sĩ cần phân định nguyên nhân do Hẹp ống sống thắt lưng hay Tắc hẹp động mạch chi dưới để chọn chuyên khoa can thiệp.",
                    "differential_rationale": "• Thử nghiệm lâm sàng phân biệt của Deepak Sebastian:\n1. Tư thế giảm đau: Cho bệnh nhân đi bộ trên máy thảm lăn (Treadmill) ở hai độ dốc: Khi đi trên mặt phẳng nằm ngang, bệnh nhân đau sau 150m; Khi nâng độ dốc thảm lăn lên 15° (bắt buộc bệnh nhân phải hơi cúi gập người ra trước giống đẩy xe siêu thị): Nếu bệnh nhân đi được quãng đường dài hơn nhiều mà không đau -> Khẳng định Đau cách hồi thần kinh do hẹp ống sống (vì cúi người làm mở rộng ống sống).\n2. Thời gian và tư thế hồi phục: Đau cách hồi mạch máu chỉ cần bệnh nhân đứng yên tại chỗ buông thõng chân là tưới máu cơ phục hồi và hết đau trong 2-3 phút; trong khi đau cách hồi thần kinh bắt buộc bệnh nhân phải ngồi xuống hoặc ngồi xổm gập lưng mới giảm đau.\n3. Khám mạch ngoại vi: Bắt mạch mu chân và mạch chày sau. Nếu mạch bắt nảy rõ, da ấm hồng -> Loại trừ nguyên nhân mạch máu.",
                    "clinical_pearl": "Luôn kiểm tra mạch mu chân ở mọi bệnh nhân cao tuổi có triệu chứng đau cách hồi khi đi bộ trước khi chỉ định phẫu thuật cột sống."
                }
            ]
        },

        # TAB 6: Phác Đồ Can Thiệp Siêu Âm Web 1
        "tab6_intervention_linkage": {
            "intervention_guidelines": "Can thiệp cột sống thắt lưng dưới hướng dẫn siêu âm ngày càng phát triển mạnh mẽ nhờ tính cơ động, không phơi nhiễm tia xạ X-quang và độ an toàn cao. Đặc biệt với các thủ thuật như tiêm khoang cùng ngoài màng cứng (Caudal epidural), tiêm khớp cùng chậu (SI Joint) và tiêm cơ hình lê (Piriformis), siêu âm là phương tiện dẫn đường lý tưởng giúp định vị kim chuẩn xác 100%.",
            "recommended_web1_procedures": [
                {
                    "id": "caudal-epidural",
                    "nameVi": "Tiêm ngoài màng cứng qua khe cùng dưới hướng dẫn siêu âm (Caudal Epidural)",
                    "role": "Tiêu chuẩn vàng can thiệp điều trị thoát vị đĩa đệm thắt lưng L4-L5, L5-S1 và hẹp ống sống",
                    "indication": "Đau rễ thần kinh tọa kháng trị thuốc uống, viêm đĩa đệm chèn ép rễ, đau sau mổ cột sống"
                },
                {
                    "id": "lumbar-medial-branch",
                    "nameVi": "Tiêm nhánh trong dây thần kinh sống thắt lưng (Lumbar Medial Branch Block)",
                    "role": "Phong bế chẩn đoán và điều trị Hội chứng khớp mấu thắt lưng trước khi đốt sóng cao tần RFA",
                    "indication": "Đau lưng mạn tính tái hiện khi ngửa xoay lưng, ấn chói diện khớp, Kemp test (+)"
                },
                {
                    "id": "sacroiliac-joint",
                    "nameVi": "Tiêm khớp cùng chậu dưới hướng dẫn siêu âm (Sacroiliac Joint Injection)",
                    "role": "Điều trị viêm khớp cùng chậu và đau khớp cùng chậu cơ học kháng trị",
                    "indication": "Chùm nghiệm pháp Laslett (+), viêm khớp cùng chậu SpA HLA-B27 dương tính"
                },
                {
                    "id": "piriformis-muscle",
                    "nameVi": "Tiêm cơ hình lê dưới hướng dẫn siêu âm (Piriformis Muscle Injection)",
                    "role": "Giải áp chèn ép dây thần kinh tọa trong Hội chứng cơ hình lê (Piriformis Syndrome)",
                    "indication": "Đau mông sâu lan chân, FAIR test (+), ấn chói cơ hình lê, thất bại với vật lý trị liệu"
                }
            ]
        },

        # Figures aggregate
        "figures": [
            enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p218_img1.jpeg", "anatomy", "Fig. 6.1: Đốt sống thắt lưng"),
            enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p225_img1.png", "anatomy", "Fig. 6.2: Xương cùng và trục chéo"),
            enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p229_img1.jpeg", "visceral", "Fig. 6.3: Phân khu ổ bụng"),
            enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p231_img1.jpeg", "redflag", "Fig. 6.4: Các vị trí nghe tiếng thổi mạch máu bụng AAA"),
            enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p236_img1.jpeg", "redflag", "Fig. 6.5: Gãy eo L5 Spondylolysis"),
            enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p257_img1.png", "redflag", "Fig. 6.6: Thoái hóa đốt sống thắt lưng"),
            enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p258_img1.jpeg", "redflag", "Fig. 6.7: Thoát vị đĩa đệm rễ thần kinh L2-L3"),
            enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p273_img1.jpeg", "redflag", "Fig. 6.8: Chấn thương nén ép dọc trục (C-03 Audit Rule)"),
            enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p274_img1.jpeg", "anatomy", "Fig. 6.9: Sờ nắn mỏm ngang thắt lưng"),
            enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p276_img1.jpeg", "exam", "Fig. 6.11: Nghiệm pháp Stork Test"),
            enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p277_img1.jpeg", "anatomy", "Fig. 6.12: Sờ nắn củ mu"),
            enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p278_img1.jpeg", "anatomy", "Fig. 6.13: Định vị góc dưới ngoài ILA"),
            enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p279_img1.jpeg", "anatomy", "Fig. 6.15: Định vị đáy xương cùng"),
            enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p281_img1.jpeg", "exam", "Fig. 6.16: Đánh giá chiều dài chân biểu kiến"),
            enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p282_img1.jpeg", "exam", "Fig. 6.18: Nghiệm pháp Supine to Sit"),
            enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p283_img1.jpeg", "exam", "Fig. 6.20: Phản xạ bánh chè L2-L3"),
            enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p288_img2.jpeg", "anatomy", "Fig. 6.27: Khám cơ nhiều chân Multifidus"),
            enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p289_img1.jpeg", "exam", "Fig. 6.29: Nghiệm pháp Slump Test"),
            enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p290_img1.jpeg", "exam", "Fig. 6.30: Nghiệm pháp căng thần kinh đùi"),
            enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p292_img1.jpeg", "anatomy", "Fig. 6.31: Sờ nắn khớp cùng chậu SIJ"),
            enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p293_img1.jpeg", "exam", "Figs 6.32A & B: Ép tách khớp cùng chậu Distraction"),
            enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p294_img1.jpeg", "exam", "Figs 6.32C-E: Thigh Thrust và Compression"),
            enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p295_img1.jpeg", "exam", "Figs 6.33A & B: Prone Instability Test"),
            enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p296_img1.jpeg", "somatic", "Fig. 6.34: Khám xoay trong háng tư thế sấp"),
            enrich_fig("assets/deepak_images/ch06_lumbopelvic_pain/p297_img1.jpeg", "exam", "Fig. 6.35: Nghiệm pháp Thomas Test")
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
