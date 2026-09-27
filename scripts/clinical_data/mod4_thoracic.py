# -*- coding: utf-8 -*-
from . import enrich_fig

def get_module():
    mod = {
        "id": "thoracic-pain",
        "chapter": 5,
        "region": "spine",
        "region_vi": "Cột Sống Ngực & Thành Ngực",
        "icon": "🛡️",
        "title": "Thoracic Spine, Rib Cage Mechanics & Visceral Red Flags",
        "title_vi": "🛡️ Đau Ngực, Cột Sống Ngực & Cờ Đỏ Tim Mạch - Phổi",
        "chief_complaint": "Phàn nàn chính: Đau tức vùng lưng giữa hai xương bả vai, đau ngực nhói tăng lên khi hít thở sâu hoặc ho, đau buốt vòng theo xương sườn ra trước xương ức, cảm giác cứng ngực khó thở sâu, đau rát bỏng theo khoanh da một bên sườn.",
        "author": "GS. Deepak Sebastian (Chuyên khảo Chương 5, pp. 188-217 - 30 Trang Sách)",
        "summary": "Mô hình tiếp cận chuyên khảo lồng ngực & cột sống ngực (Thoracic Spine Master): Cột sống ngực có ống tủy hẹp và nguồn cấp máu nuôi mỏng manh nhất (Vùng giáp ranh Watershed T4-T8). Nhiệm vụ số một của bác sĩ lâm sàng là loại trừ tuyệt đối các CỜ ĐỎ CẤP CỨU NỘI NGOẠI KHOA (Phình bóc tách động mạch chủ ngực, hội chứng vành cấp, thuyên tắc phổi, tràn khí màng phổi áp lực, chèn ép tủy ngực) trước khi xem xét các nguyên nhân cơ học thành ngực (Viêm sụn sườn Tietze, kẹt trượt sườn đốt sống, khóa diện khớp ngực hay đau thần kinh liên sườn).",

        # TAB 1: Giải phẫu, Cơ sinh học & Sờ nắn
        "tab1_anatomy_palpation": {
            "arthrokinematics": {
                "joint_system": "Phức hợp cột sống ngực và lồng ngực gồm 12 đốt sống ngực (T1-T12), 12 đôi xương sườn với các khớp: 1. Khớp chỏm sườn (Costovertebral); 2. Khớp củ sườn - mỏm ngang (Costotransverse); 3. Khớp ức sườn (Sternocostal) và khớp sụn sườn (Costochondral).",
                "roll_gliding": "• Động Học Hô Hấp Của Xương Sườn (Arthrokinematics of Respiration):\n- Xương sườn trên (Xương sườn 1–5): Trục quay nằm theo mặt phẳng trán (Frontal plane). Khi hít vào, xương sườn chuyển động theo kiểu 'Cán bơm' (Pump-handle motion) làm nâng xương ức lên trên ra trước, làm tăng đường kính trước - sau của lồng ngực.\n- Xương sườn dưới (Xương sườn 6–10): Trục quay nằm theo mặt phẳng đứng dọc (Sagittal plane). Khi hít vào, xương sườn chuyển động theo kiểu 'Quai thùng' (Bucket-handle motion) làm nhấc bờ ngoài xương sườn lên trên ra ngoài, làm tăng đường kính ngang của lồng ngực.\n- Xương sườn tự do (Xương sườn 11–12): Chuyển động theo kiểu 'Gọng kìm' (Caliper motion) xòe ra sau và sang bên.\n• Cột Sống Ngực (T1-T12): Diện khớp mấu định hướng nghiêng 60° so với mặt phẳng ngang và xoay 20° ra ngoài. Khi gập ngực (Flexion), diện khớp trên trượt lên trên (Opening); khi duỗi ngực (Extension), diện khớp trên trượt xuống dưới (Closing). Động tác xoay bị hạn chế đáng kể bởi sự kiềm chế của khung lồng ngực.",
                "capsular_pattern": "Mô hình bao khớp (Capsular pattern): Hạn chế nghiêng bên và xoay bị hạn chế bằng nhau, sau đó là hạn chế duỗi (Sidebending = Rotation > Extension).",
                "loose_packed_position": "Vị trí nghỉ sinh lý (Loose-packed position): Đứng hoặc ngồi thẳng tự nhiên, cột sống ngực cong gù sinh lý nhẹ.",
                "close_packed_position": "Vị trí khóa chặt (Close-packed position): Duỗi tối đa (Full extension).",
                "force_couples_biomechanics": "Quy tắc số ba (Rule of Threes) của Deepak Sebastian để định vị mỏm gai đốt sống ngực tương quan với mỏm ngang: T1-T3 mỏm gai ngang mức mỏm ngang; T4-T6 mỏm gai chúc xuống nửa thân đốt dưới; T7-T9 mỏm gai chúc dài xuống bằng thân đốt dưới; T10-T12 mỏm gai nằm ngang trở lại.",
                "figures": [
                    enrich_fig("assets/deepak_images/ch05_thoracic_pain/p211_img1.jpeg", "anatomy", "Fig. 5.1: Đốt sống ngực điển hình và diện khớp tiếp khớp với xương sườn"),
                    enrich_fig("assets/deepak_images/ch05_thoracic_pain/p212_img1.jpeg", "anatomy", "Fig. 5.2: Phân bố giải phẫu và khoanh cảm giác thần kinh tủy ngực T2")
                ]
            },
            "palpation_steps": [
                {
                    "landmark": "1. Khớp Sườn - Cột Sống & Khớp Sườn - Mỏm Ngang (Costovertebral & Costotransverse Joints)",
                    "patient_position": "Bệnh nhân nằm sấp hoàn toàn, thả lỏng lồng ngực.",
                    "technique": "Bác sĩ xác định mỏm gai đốt sống ngực, di chuyển ngón tay sang bên 2.5 – 3 cm vào rãnh giữa mỏm ngang và xương sườn. Đặt ngón tay cái ấn sâu vuông góc từ sau ra trước lên củ sườn và diện khớp sườn - mỏm ngang. Đánh giá độ đàn hồi và cảm giác khóa khớp.",
                    "clinical_pearl": "Ấn đau chói khu trú tại khe khớp sườn mỏm ngang tái hiện cơn đau nhói khi hít sâu khẳng định Rối loạn khớp sườn đốt sống (Costovertebral Somatic Dysfunction).",
                    "figures": []
                },
                {
                    "landmark": "2. Khớp Ức - Sườn & Khớp Sụn - Sườn (Costochondral & Sternocostal Junctions)",
                    "patient_position": "Bệnh nhân nằm ngửa.",
                    "technique": "Bác sĩ dùng các đầu ngón tay sờ dọc theo bờ hai bên xương ức từ khớp ức sườn 1 đến 7. Ấn nhẹ vuông góc lên từng khớp ức sườn và khớp nối giữa sụn sườn và xương sườn.",
                    "clinical_pearl": "Sưng nề gồ lên, nóng đỏ đau chói khu trú tại sụn sườn 2 hoặc 3 gặp trong Hội chứng Tietze. Đau chói nhiều khớp sụn sườn nhưng KHÔNG sưng nề gặp trong Viêm sụn sườn lành tính (Costochondritis).",
                    "figures": []
                },
                {
                    "landmark": "3. Khoang Gian Sườn & Bó Mạch Thần Kinh Liên Sườn (Intercostal Space)",
                    "patient_position": "Bệnh nhân ngồi hoặc nằm nghiêng bên đối diện để mở rộng khoang gian sườn.",
                    "technique": "Bác sĩ dùng đầu ngón trỏ sờ dọc theo bờ dưới của xương sườn (rãnh sườn dưới chứa tĩnh mạch, động mạch và thần kinh liên sườn). Ấn tìm điểm đau chói hoặc u bao thần kinh.",
                    "clinical_pearl": "Ấn đau chói buốt bắn lan dọc bờ dưới xương sườn ra trước gặp trong Đau thần kinh liên sườn (Intercostal Neuralgia) hoặc giai đoạn tiền phát ban của Zona liên sườn.",
                    "figures": []
                }
            ],
            "figures": [
                enrich_fig("assets/deepak_images/ch05_thoracic_pain/p211_img1.jpeg", "anatomy", "Fig. 5.1: Đốt sống ngực điển hình"),
                enrich_fig("assets/deepak_images/ch05_thoracic_pain/p212_img1.jpeg", "anatomy", "Fig. 5.2: Phân bố thần kinh tủy ngực T2")
            ]
        },

        # TAB 2: Sàng lọc Cờ đỏ & Bệnh lý nguy hiểm
        "tab2_red_flags": [
            {
                "category": "🚨 Phình Bóc Tách Động Mạch Chủ Ngực (Thoracic Aortic Dissection)",
                "systemic_group": "Mạch máu cấp cứu tối khẩn cấp",
                "signs": "Đau ngực - lưng đột ngột dữ dội kiểu xé toạc (Tearing/Ripping pain) lan xuyên thẳng ra sau lưng giữa hai xương bả vai; Chênh lệch huyết áp hai tay > 20 mmHg; Mạch quay hoặc mạch bẹn một bên bắt yếu hoặc mất; Tiền sử tăng huyết áp nặng, hội chứng Marfan.",
                "action": "Kích hoạt báo động đỏ Cấp cứu Phẫu thuật Tim mạch lồng ngực ngay tức khắc! Hạ huyết áp khẩn trương, chống sốc, tuyệt đối KHÔNG xoay bẻ cột sống hay vận động.",
                "gold_standard_labs": "Chụp cắt lớp vi tính mạch máu ngực (CT Angiography - CTA): Tiêu chuẩn vàng phát hiện vết rách nội mạc động mạch chủ (Intimal flap) và lòng giả (False lumen); Siêu âm tim qua thực quản (TEE).",
                "figures": []
            },
            {
                "category": "🚨 Hội Chứng Vành Cấp & Nhồi Máu Cơ Tim Cấp (Acute Coronary Syndrome / STEMI)",
                "systemic_group": "Tim mạch cấp cứu",
                "signs": "Đau thắt ngực đè nặng nghẹt thở sau xương ức kéo dài > 20 phút, lan lên cằm, vai trái, cánh tay trái; Vã mồ hôi lạnh, khó thở, buồn nôn; Cơn đau KHÔNG thay đổi khi ấn sườn hay hít thở.",
                "action": "Chuyển khoa Cấp cứu can thiệp tim mạch (PCI) khẩn cấp! Đo điện tâm đồ 12 chuyển đạo trong vòng 10 phút đầu.",
                "gold_standard_labs": "Điện tâm đồ (ECG) thấy ST chênh lên hoặc sóng T âm sâu; Định lượng men tim siêu nhạy Troponin I/T máu tăng cao theo động học.",
                "figures": []
            },
            {
                "category": "🚨 Thuyên Tắc Động Mạch Phổi Cấp (Pulmonary Embolism - PE)",
                "systemic_group": "Mạch máu hô hấp cấp cứu",
                "signs": "Khó thở đột ngột, thở nhanh nông, đau ngực kiểu màng phổi (Pleuritic chest pain: đau nhói khi hít sâu), nhịp tim nhanh > 100 lần/phút, ho ra máu; Tiền sử bất động lâu ngày, phẫu thuật chỉnh hình khớp háng/gối, huyết khối tĩnh mạch sâu (DVT).",
                "action": "Chuyển viện cấp cứu hồi sức hô hấp. Thở oxy liều cao, dùng thuốc chống đông máu hoặc tiêu sợi huyết theo thang điểm Wells PE.",
                "gold_standard_labs": "CT Angiography động mạch phổi (CTPA) phát hiện huyết khối gây tắc nhánh động mạch phổi; Xét nghiệm D-dimer máu tăng rất cao; Siêu âm Doppler mạch máu chi dưới.",
                "figures": []
            },
            {
                "category": "🚨 Chèn Ép Tủy Ngực & Áp-xe Ngoài Màng Cứng (Thoracic Cord Compression & Epidural Abscess)",
                "systemic_group": "Thần kinh trung ương / Nhiễm trùng",
                "signs": "Đau cột sống ngực dữ dội kèm sốt, gõ đau chói gai sống ngực; Mất cảm giác ngang mức bờ sườn hoặc rốn (Sensory level cutoff); Yếu liệt cứng hai chi dưới tiến triển nhanh, bí tiểu tiện cấp tính hoặc tiểu tiện không tự chủ.",
                "action": "Chuyển mổ giải ép tủy sống khẩn cấp trong vòng 24 giờ để tránh liệt vĩnh viễn hai chân.",
                "gold_standard_labs": "Chụp cộng hưởng từ MRI toàn bộ cột sống ngực có tiêm thuốc đối quang từ: Đánh giá khối áp-xe, viêm đĩa đệm đốt sống (Spondylodiscitis) và mức độ chèn ép tủy.",
                "figures": []
            }
        ],

        # TAB 3: Đau Chuyển Tạng & Đau Do Thuốc
        "tab3_visceral_drug_pain": {
            "visceral_referrals": [
                {
                    "organ": "Tụy Tạng (Pancreas / Acute Pancreatitis)",
                    "source": "Viêm Tụy Cấp & Ung Thư Thân Tụy",
                    "pain_pattern": "Đau dữ dội vùng thượng vị đâm xuyên thẳng ra sau lưng đốt sống ngực thấp T10-L1.",
                    "neuro_mechanism": "Dây thần kinh tạng lớn và tạng bé truyền cảm giác đau từ tụy vào tủy ngực T6-T10.",
                    "differential": "Đặc điểm nhận diện lâm sàng cốt lõi: Cơn đau tăng dữ dội khi nằm ngửa thẳng người; thuyên giảm rõ rệt khi bệnh nhân ngồi dậy gập người ra phía trước hoặc nằm co quắp tư thế cò súng; kèm buồn nôn, chướng bụng, men Amylase/Lipase máu tăng cao.",
                    "figures": []
                },
                {
                    "organ": "Dạ Dày & Thực Quản (Stomach & Esophagus)",
                    "source": "Viêm Loét Dạ Dày Tá Tràng Thủng Mặt Sau & Co Thắt Thực Quản",
                    "pain_pattern": "Đau rát bỏng sau xương ức hoặc đau xuyên ra sau lưng vùng T5-T8.",
                    "neuro_mechanism": "Xung động giao cảm ngực T5-T8.",
                    "differential": "Cơn đau liên quan chặt chẽ đến bữa ăn (đau tăng sau ăn hoặc đói cồn cào), ợ chua, nấc nghẹn; Uống thuốc trung hòa acid (Antacid) giúp giảm đau nhanh chóng.",
                    "figures": []
                },
                {
                    "organ": "Dây Thần Kinh Liên Sườn / Zona (Herpes Zoster / Shingles)",
                    "source": "Nhiễm Trùng Virus Varicella Zoster Hạch Gai Cột Sống Ngực",
                    "pain_pattern": "Đau rát bỏng, tê buốt như dao đâm lan vòng theo một khoanh da thần kinh liên sườn một bên cơ thể.",
                    "neuro_mechanism": "Virus tái hoạt từ hạch rễ sau (Dorsal root ganglion) di chuyển dọc theo dây thần kinh liên sườn phá hủy bao myelin.",
                    "differential": "Trước khi mọc mụn nước 3-5 ngày, bệnh nhân chỉ có cảm giác đau rát da một bên sườn rất dễ nhầm với đau cơ khớp. Dấu hiệu cốt lõi: Chạm nhẹ vào da thấy tăng cảm giác đau rát dữ dội (Allodynia); sau đó xuất hiện chùm mụn nước mọc thành dải dọc theo khoanh sườn không vượt quá đường giữa.",
                    "figures": []
                }
            ],
            "drug_induced": [
                "1. Thuốc chống viêm không steroid (NSAIDs liều cao dài ngày): Gây viêm loét trợt dạ dày thủng mặt sau quy chiếu đau ra sau lưng đốt sống ngực T6-T9.",
                "2. Thuốc Bisphosphonates dạng uống (Alendronate): Gây viêm loét thực quản cấp nếu uống không đủ nước hoặc nằm ngay sau uống, gây đau nghẹn rát bỏng sau xương ức.",
                "3. Cocaine / Amphetamine: Gây co thắt động mạch vành cấp dẫn tới nhồi máu cơ tim gây đau thắt ngực dữ dội."
            ]
        },

        # TAB 4: Nghiệm Pháp Khám Thực Thể Đặc Hiệu
        "tab4_provocative_tests": {
            "provocative_tests": [
                {
                    "name": "Khám Cử Động Xương Sườn 1 (Lindgren Test / First Rib Mobility)",
                    "patient_position": "Bệnh nhân ngồi thẳng trên bàn khám, thả lỏng hai vai.",
                    "examiner_action": "Bác sĩ đứng phía sau, dùng hai tay xoay đầu bệnh nhân sang một bên tối đa, sau đó từ từ gập nghiêng cổ sang phía đối diện về phía ngực. So sánh biên độ nghiêng cổ hai bên.",
                    "end_feel": "Cảm giác chạm cứng cơ học của xương sườn 1 (Hard/Bony end-feel).",
                    "sensitivity": "Định tính (Qualitative)",
                    "specificity": "Định tính (Qualitative)",
                    "lr_positive": "N/A",
                    "lr_negative": "N/A",
                    "diagnostic_role": "Đánh giá xương sườn 1 bị nâng cao kẹt (Subluxated 1st Rib)",
                    "clinical_role": "Qualitative Motion Assessment: Dương tính khi động tác gập nghiêng cổ bị hạn chế rõ rệt kèm cảm giác xương sườn 1 chặn cứng cơ học, thường gặp trong Hội chứng lối thoát ngực (TOS) và đau vai gáy mạn tính.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch04_cervical_pain/p182_img1.jpeg", "exam", "Fig. 4.59: Thao tác khám cử động xương sườn 1 (Lindgren test / First rib mobility)")
                    ]
                },
                {
                    "name": "Khám Hạn Chế Mở Diện Khớp Ngực Trên (Upper Thoracic Opening Assessment)",
                    "patient_position": "Bệnh nhân ngồi thẳng, hai tay đan sau gáy.",
                    "examiner_action": "Bác sĩ đứng bên cạnh, luồn tay ra trước ngực bệnh nhân nâng đỡ khuỷu tay, tay kia đặt ngón tay cái lên mỏm gai và diện khớp đoạn T1-T4. Hướng dẫn bệnh nhân gập cổ ngực ra trước kết hợp xoay nghiêng sang bên.",
                    "end_feel": "Cảm nhận sức căng diện khớp.",
                    "sensitivity": "Định tính (Qualitative)",
                    "specificity": "Định tính (Qualitative)",
                    "lr_positive": "N/A",
                    "lr_negative": "N/A",
                    "diagnostic_role": "Đánh giá hạn chế trượt mở diện khớp ngực trên",
                    "clinical_role": "Qualitative Motion Assessment: Dương tính khi phát hiện diện khớp bị khóa cứng không thể trượt lên trên ra trước khi gập ngực, gây đau nhói cục bộ giữa hai bả vai.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch05_thoracic_pain/p211_img1.jpeg", "exam", "Fig. 5.3: Thao tác đánh giá hạn chế mở diện khớp cột sống ngực trên (Upper Thoracic)")
                    ]
                },
                {
                    "name": "Khám Hạn Chế Đóng Diện Khớp Ngực Dưới (Lower Thoracic Closing Assessment)",
                    "patient_position": "Bệnh nhân ngồi thẳng, hai tay ôm chéo trước ngực.",
                    "examiner_action": "Bác sĩ đứng phía sau, dùng một tay đỡ ngực đưa bệnh nhân vào tư thế duỗi cột sống ngực kết hợp nghiêng và xoay sang bên đau. Ngón tay cái của bác sĩ sờ nắn cột diện khớp T7-T12 cảm nhận chuyển động trượt đóng xuống dưới ra sau.",
                    "end_feel": "Cảm nhận chặn cứng đàn hồi của diện khớp.",
                    "sensitivity": "Định tính (Qualitative)",
                    "specificity": "Định tính (Qualitative)",
                    "lr_positive": "N/A",
                    "lr_negative": "N/A",
                    "diagnostic_role": "Đánh giá hạn chế trượt đóng diện khớp ngực thấp",
                    "clinical_role": "Qualitative Motion Assessment: Dương tính khi bệnh nhân đau chói cục bộ tại diện khớp ngực thấp khi ngửa người ra sau xoay bên đau, gợi ý Hội chứng khớp mấu ngực.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch05_thoracic_pain/p213_img1.jpeg", "exam", "Fig. 5.6: Thao tác đánh giá hạn chế đóng diện khớp ngực dưới (Lower Thoracic Closing)")
                    ]
                },
                {
                    "name": "Nghiệm Pháp Ấn Lò Xo Khớp Sườn - Sống (Costovertebral Springing Test)",
                    "patient_position": "Bệnh nhân nằm sấp, thả lỏng toàn bộ cơ lưng ngực.",
                    "examiner_action": "Bác sĩ đặt mô cái hoặc bờ trụ bàn tay lên góc xương sườn ngay sát cạnh ngoài cột sống ngực (cách mỏm gai 3 cm). Bác sĩ ấn một lực nhún lò xo nhịp nhàng theo hướng từ sau ra trước (PA pressure).",
                    "end_feel": "Độ nhún lò xo đàn hồi bình thường (Springy bounce).",
                    "sensitivity": "Định tính (Qualitative)",
                    "specificity": "Định tính (Qualitative)",
                    "lr_positive": "N/A",
                    "lr_negative": "N/A",
                    "diagnostic_role": "Khám kẹt khớp sườn cột sống",
                    "clinical_role": "Qualitative Motion Assessment: Dương tính khi mất độ nhún đàn hồi (khớp cứng đơ như gỗ) kèm theo bệnh nhân thấy đau nhói tái hiện cơn đau ngực quen thuộc khi hít sâu.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch05_thoracic_pain/p212_img1.jpeg", "exam", "Fig. 5.5: Đánh giá mở diện khớp cột sống ngực dưới và độ đàn hồi sườn")
                    ]
                }
            ],
            "somatic_dysfunctions": [
                {
                    "dysfunction": "Rối Loạn Xương Sườn Nhô Sau (Posterior Rib Somatic Dysfunction)",
                    "biomechanics": "Củ xương sườn bị trật kẹt ra phía sau tại khớp sườn - mỏm ngang, thường xảy ra sau ho dữ dội, hắt hơi mạnh hoặc vặn người đột ngột. Xương sườn bị kẹt không thể trượt ra trước khi hít thở, gây đau nhói như dao đâm mỗi khi thở sâu.",
                    "assessment_correction": "Bác sĩ sờ nắn bờ sau xương sườn thấy củ sườn nổi gồ rõ rệt và đau chói; Áp dụng kỹ thuật nắn trượt xương sườn ra trước (Anterior rib mobilization) hoặc kỹ thuật cơ năng lượng (MET).",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch05_thoracic_pain/p215_img1.jpeg", "somatic", "Figs 5.7A & B: Rối loạn xương sườn nhô sau bên phải (Posterior rib dysfunction right)")
                    ]
                }
            ]
        },

        # TAB 5: Ma Trận Chẩn Đoán Phân Biệt & Ca Bệnh Khó
        "tab5_differential_matrix": {
            "matrix": [
                {
                    "condition": "Đau Thần Kinh Liên Sườn Cơ Học (Intercostal Neuralgia)",
                    "onset": "Sau mang vác nặng, vặn sườn, chèn ép lỗ ghép ngực",
                    "aggravating": "Tăng khi nghiêng vặn thân mình, ho, hắt hơi, ấn dọc rãnh sườn",
                    "confirmatory_test": "Ấn đau chói dọc khoanh sườn; Slump test ngực (+)",
                    "gold_standard": "Điện cơ EMG cơ gian sườn; MRI loại trừ thoát vị đĩa đệm ngực hoặc u rễ thần kinh",
                    "key_differentiator": "Đau buốt như điện giật theo dải hẹp một bên sườn, không có triệu chứng khó thở hay vã mồ hôi",
                    "web1_procedure_id": "intercostal-nerve"
                },
                {
                    "condition": "Viêm Sụn Sườn Lành Tính (Costochondritis)",
                    "onset": "Từ từ, thường đau nhiều khớp sụn sườn 2–5 hai bên",
                    "aggravating": "Tăng khi ấn trực tiếp vào khớp ức sườn hoặc vươn vai căng lồng ngực",
                    "confirmatory_test": "Ấn đau chói nhiều khớp ức sườn; KHÔNG có sưng gồ tại chỗ",
                    "gold_standard": "Chẩn đoán lâm sàng: ECG và men tim bình thường, X-quang ngực bình thường",
                    "key_differentiator": "Đau tái hiện 100% khi ấn ngón tay vào khớp ức sườn, không có biến chứng nguy hiểm",
                    "web1_procedure_id": None
                },
                {
                    "condition": "Hội Chứng Tietze (Tietze Syndrome)",
                    "onset": "Thường sau nhiễm khuẩn hô hấp trên hoặc ho kéo dài",
                    "aggravating": "Đau nhức dữ dội khu trú tại 1 khớp sụn sườn duy nhất (thường sườn 2 hoặc 3)",
                    "confirmatory_test": "Sờ thấy khối sưng gồ cứng nổi rõ rệt tại khớp ức sườn, da ấm nhẹ",
                    "gold_standard": "Siêu âm sụn sườn: Dày màng sụn, tăng sinh mạch máu Doppler và tụ dịch quanh sụn",
                    "key_differentiator": "BẮT BUỘC phải có sưng nề nổi gồ thực thể tại khớp sụn sườn (khác với Costochondritis)",
                    "web1_procedure_id": None
                },
                {
                    "condition": "Đau Thắt Ngực Ổn Định (Angina Pectoris)",
                    "onset": "Khi gắng sức thể lực, đi bộ nhanh, leo cầu thang",
                    "aggravating": "Tăng khi tiếp tục gắng sức; Giảm sau 3-5 phút nghỉ ngơi hoặc ngậm Nitroglycerin",
                    "confirmatory_test": "Nghiệm pháp gắng sức tim mạch (Stress test) biến đổi đoạn ST",
                    "gold_standard": "Chụp cắt lớp vi tính mạch vành (Coronary CTA) hoặc Chụp mạch vành qua da (DSA)",
                    "key_differentiator": "Đau đè nặng như đá đè sau xương ức, ấn thành ngực hoàn toàn không đau",
                    "web1_procedure_id": None
                },
                {
                    "condition": "Zona Thần Kinh Liên Sườn (Herpes Zoster)",
                    "onset": "Giai đoạn sớm có sốt nhẹ, đau rát bỏng da một bên sườn",
                    "aggravating": "Tăng dữ dội khi chạm nhẹ áo quần vào da (Allodynia)",
                    "confirmatory_test": "Xuất hiện ban đỏ mụn nước mọc thành chùm theo khoanh da thần kinh liên sườn",
                    "gold_standard": "Xét nghiệm PCR virus Varicella-Zoster từ dịch mụn nước",
                    "key_differentiator": "Tổn thương da đặc trưng một bên không vượt qua đường giữa cơ thể",
                    "web1_procedure_id": "intercostal-nerve"
                }
            ],
            "complex_cases_reasoning": [
                {
                    "case_title": "Biện Luận Ca Khó: Đau Ngực Cấp Ở Bệnh Nhân Có Tiền Sử Tăng Huyết Áp",
                    "clinical_dilemma": "Bệnh nhân nam 62 tuổi vào viện vì đau nhói ngực trái lan ra sau lưng xuất hiện đột ngột 3 giờ trước. Bác sĩ ấn bờ sườn thấy có điểm đau tức nhẹ, nhịp tim 95 lần/phút, huyết áp tay phải 170/95 mmHg, huyết áp tay trái 145/85 mmHg. Bệnh nhân xin được tiêm giảm đau liên sườn.",
                    "differential_rationale": "• Cảnh giác nguy cơ chết người: Mặc dù ấn sườn có cảm giác đau tức, nhưng sự xuất hiện chênh lệch huyết áp hai tay > 20 mmHg kèm theo khởi phát đau ngực xé toạc xuyên lưng ở bệnh nhân tăng huyết áp là DẤU HIỆU CỜ ĐỎ CỰC KỲ NGUY HIỂM của Phình Bóc Tách Động Mạch Chủ Ngực (Thoracic Aortic Dissection Type A/B).\n• Điểm đau ấn sườn có thể chỉ là do co cơ phản ứng thứ phát do đau dữ dội.\n• Tuyệt đối CẤM tiêm can thiệp giảm đau tại chỗ hay nắn chỉnh lồng ngực vì có thể gây vỡ động mạch chủ dẫn đến tử vong trong vài giây!",
                    "clinical_pearl": "Trước mọi ca đau ngực - lưng cấp tính, bắt buộc đo huyết áp hai tay và bắt mạch ngoại vi hai bên. Nếu có chênh lệch huyết áp > 20 mmHg, chỉ định ngay Chụp CT mạch máu ngực (CTA) cấp cứu."
                }
            ]
        },

        # TAB 6: Phác Đồ Can Thiệp Siêu Âm Web 1
        "tab6_intervention_linkage": {
            "intervention_guidelines": "Can thiệp vùng thành ngực và cột sống ngực đòi hỏi sự chính xác tuyệt đối để tránh biến chứng đâm thủng màng phổi gây tràn khí màng phổi (Pneumothorax). Siêu âm thời gian thực với đầu dò Linear phân giải cao cho phép quan sát rõ lá thành, lá tạng màng phổi (dấu hiệu trượt màng phổi Lung sliding) và xương sườn, đảm bảo đầu kim nằm an toàn trên màng phổi.",
            "recommended_web1_procedures": [
                {
                    "id": "intercostal-nerve",
                    "nameVi": "Phong bế thần kinh liên sườn dưới hướng dẫn siêu âm",
                    "role": "Tiêu chuẩn vàng giảm đau thần kinh liên sườn, đau sau mổ lồng ngực và đau do Zona",
                    "indication": "Đau rát bỏng theo khoanh sườn dai dẳng, viêm thần kinh liên sườn kháng thuốc"
                },
                {
                    "id": "esp-block",
                    "nameVi": "Phong bế khoang cạnh sống ngực dưới siêu âm (Thoracic PVB)",
                    "role": "Vô cảm giảm đau sâu đa tầng cho thành ngực và màng phổi",
                    "indication": "Gãy nhiều xương sườn, đau thành ngực sau phẫu thuật lồng ngực"
                },
                {
                    "id": "esp-block",
                    "nameVi": "Tiêm mặt phẳng cơ dựng sống ngực (Thoracic ESP Block)",
                    "role": "Kỹ thuật can thiệp an toàn cao cách xa màng phổi điều trị đau lưng ngực và đau sườn",
                    "indication": "Đau cột sống ngực mạn tính, đau thần kinh liên sườn kháng trị thuốc uống"
                }
            ]
        },

        # Figures aggregate
        "figures": [
            enrich_fig("assets/deepak_images/ch05_thoracic_pain/p211_img1.jpeg", "anatomy", "Fig. 5.1: Đốt sống ngực điển hình"),
            enrich_fig("assets/deepak_images/ch05_thoracic_pain/p212_img1.jpeg", "anatomy", "Fig. 5.2: Phân bố thần kinh tủy ngực T2"),
            enrich_fig("assets/deepak_images/ch05_thoracic_pain/p211_img1.jpeg", "exam", "Fig. 5.3: Khám mở diện khớp ngực trên"),
            enrich_fig("assets/deepak_images/ch05_thoracic_pain/p212_img1.jpeg", "exam", "Fig. 5.5: Khám mở diện khớp ngực dưới"),
            enrich_fig("assets/deepak_images/ch05_thoracic_pain/p213_img1.jpeg", "exam", "Fig. 5.6: Khám đóng diện khớp ngực dưới"),
            enrich_fig("assets/deepak_images/ch05_thoracic_pain/p215_img1.jpeg", "somatic", "Figs 5.7A & B: Rối loạn xương sườn nhô sau phải")
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
