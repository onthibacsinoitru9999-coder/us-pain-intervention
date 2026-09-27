# -*- coding: utf-8 -*-
from . import enrich_fig

def get_module():
    mod = {
        "id": "cervical-pain",
        "chapter": 4,
        "region": "spine",
        "region_vi": "Cột Sống Cổ & Rễ Thần Kinh",
        "icon": "👤",
        "title": "Cervical Pain, Cervical Radiculopathy & Craniovertebral Screening",
        "title_vi": "👤 Đau Cổ - Vai - Gáy & Bệnh Rễ Thần Kinh Cổ",
        "chief_complaint": "Phàn nàn chính: Đau mỏi vùng cổ gáy lan lên đầu hoặc lan xuống vai cánh tay, tê bì ngón tay theo khoanh cảm giác (Dermatome), cứng mỏi cổ khi thức dậy, chóng mặt khi quay đầu, cảm giác đầu nặng muốn rơi ra trước, yếu tay cầm nắm đồ vật hay đánh rơi.",
        "author": "GS. Deepak Sebastian (Chuyên khảo Chương 4, pp. 105-187 - 83 Trang Sách)",
        "summary": "Mô hình tiếp cận chuyên khảo toàn diện cột sống cổ (Cervical Spine Master): Phân biệt rạch ròi 3 nhóm bệnh cảnh: 1. Đau cơ học diện khớp / đĩa đệm lành tính; 2. Bệnh lý rễ thần kinh cổ (Cervical Radiculopathy); 3. Các cờ đỏ nguy hiểm tính mạng (Mất vững khớp đội - trục C1-C2, Thiểu năng động mạch đốt sống thân nền VBI, Bệnh lý tủy cổ thoái hóa CSM và U đỉnh phổi Pancoast). Nắm vững cơ sinh học trượt diện khớp (Arthrokinematics), quy tắc vận động kết hợp (Coupled motions) và quy trình khám sờ nắn lâm sàng chuẩn mực.",

        # TAB 1: Giải phẫu, Cơ sinh học & Sờ nắn
        "tab1_anatomy_palpation": {
            "arthrokinematics": {
                "joint_system": "Phức hợp cột sống cổ gồm 2 phân vùng chức năng: 1. Cột sống cổ trên (Craniovertebral junction: C0-C1 và C1-C2); 2. Cột sống cổ dưới (C2-C7 với các khớp mấu nghiêng 45° và khớp mỏm móc Luschka).",
                "roll_gliding": "• Khớp Chẩm - Đội (C0-C1): Khớp lồi cầu (Lồi cầu xương chẩm lồi trên diện khớp lõm của C1). Khi gập cổ (Flexion), lồi cầu chẩm lăn ra trước nhưng trượt ra sau (Roll anterior, glide posterior). Khi duỗi cổ (Extension), lồi cầu lăn ra sau và trượt ra trước (Roll posterior, glide anterior).\n• Khớp Đội - Trục (C1-C2): Khớp xoay trục. Đảm nhiệm tới 50% tổng biên độ xoay của toàn bộ cột sống cổ (khoảng 40° sang mỗi bên). Diện khớp trên của C2 hơi lồi, khớp với diện dưới của C1 cũng hơi lồi; khi xoay, C1 vừa trượt vừa hạ thấp xuống trục C2.\n• Cột sống cổ dưới (C2-C7): Diện khớp mấu tiếp xúc ở góc 45° so với mặt phẳng ngang. Khi gập cổ (Flexion), diện khớp trên trượt lên trên và ra trước (Up & Forward), làm mở rộng lỗ ghép thần kinh thêm 24%. Khi duỗi cổ (Extension), diện khớp trên trượt xuống dưới và ra sau (Down & Back), làm nén ép diện khớp và thu hẹp lỗ ghép 11%.\n• Vận động kết hợp (Coupled motions): Ở đoạn C2-C7, động tác nghiêng bên (Sidebending) luôn đi kèm với xoay (Rotation) cùng phía.",
                "capsular_pattern": "Mô hình hạn chế bao khớp (Capsular pattern): Hạn chế nghiêng bên và xoay bị hạn chế bằng nhau, tiếp theo là hạn chế động tác duỗi; tầm gập cổ được bảo tồn tốt nhất (Sidebending = Rotation > Extension > Flexion).",
                "loose_packed_position": "Vị trí nghỉ sinh lý (Loose-packed position): Hơi gập nhẹ (Slight flexion) - giảm tối đa áp lực nén lên các đĩa đệm và diện khớp.",
                "close_packed_position": "Vị trí khóa chặt (Close-packed position): Duỗi tối đa (Full extension) - các diện khớp khóa chặt hoàn toàn và lỗ ghép hẹp nhất.",
                "force_couples_biomechanics": "Dây chằng cánh (Alar ligament) căng chéo từ mỏm nha lên bờ lỗ chẩm, kiểm soát giới hạn xoay và nghiêng bên C1-C2. Dây chằng ngang (Transverse ligament) vắt ngang sau mỏm nha, giữ mỏm nha áp sát cung trước C1, bảo vệ an toàn tuyệt đối cho tủy sống cổ.",
                "figures": [
                    enrich_fig("assets/deepak_images/ch04_cervical_pain/p106_img1.png", "anatomy", "Fig. 4.1: Giải phẫu cột sống cổ nhìn từ phía sau và các khớp mấu"),
                    enrich_fig("assets/deepak_images/ch04_cervical_pain/p107_img1.jpeg", "anatomy", "Fig. 4.2: Vùng dưới chẩm (Suboccipital region) và khớp đội - trục C1-C2"),
                    enrich_fig("assets/deepak_images/ch04_cervical_pain/p108_img1.png", "anatomy", "Fig. 4.3: Dây chằng ngang C1 ôm giữ mỏm nha bảo vệ tủy sống"),
                    enrich_fig("assets/deepak_images/ch04_cervical_pain/p149_img1.png", "anatomy", "Fig. 4.19: Các cơ dưới chẩm (Suboccipital muscles) và thần kinh chẩm lớn")
                ]
            },
            "palpation_steps": [
                {
                    "landmark": "1. Mỏm Ngang Đốt Sống Đội C1 (Transverse Process of Atlas)",
                    "patient_position": "Bệnh nhân nằm ngửa hoặc ngồi thư giãn cổ.",
                    "technique": "Bác sĩ xác định mỏm chũm xương thái dương và góc sau xương hàm dưới. Đặt ngón tay vào rãnh giữa mỏm chũm và xương hàm dưới, ấn nhẹ theo hướng vào trong và hơi ra trước. Sờ thấy một khối xương gồ cứng sâu - đó là mỏm ngang C1. So sánh đối xứng hai bên.",
                    "clinical_pearl": "Đau chói hoặc mất đối xứng rõ rệt gợi ý bán trật khớp xoay C1-C2 (Atlantoaxial rotary subluxation) hoặc co cứng cơ nâng vai/cơ ức đòn chũm.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch04_cervical_pain/p150_img1.jpeg", "anatomy", "Fig. 4.20: Phân bố thần kinh vùng chẩm và da đầu")
                    ]
                },
                {
                    "landmark": "2. Mỏm Gai Đốt Sống Trục C2 & Gai Sống C7 (Vertebra Prominens)",
                    "patient_position": "Bệnh nhân ngồi gập nhẹ cổ.",
                    "technique": "• Mỏm gai C2: Bác sĩ sờ từ ụ chẩm ngoài đi dọc theo đường giữa xuống dưới qua rãnh cơ dưới chẩm. Điểm gồ xương nhô to đầu tiên chạm vào chính là mỏm gai C2 (mỏm gai chẻ đôi).\n• Gai sống C7: Yêu cầu bệnh nhân gập cổ tối đa, sờ ở chân cổ thấy mỏm gai nổi gồ to nhất. Giữ ngón tay trên mỏm gai và yêu cầu bệnh nhân ngửa cổ ra sau: nếu mỏm gai thụt vào trong là C6, nếu mỏm gai giữ nguyên không di động nhiều là C7.",
                    "clinical_pearl": "C7 là mốc chuẩn để đếm các đốt sống cổ trên (C3-C6) và đốt sống ngực (T1-T4).",
                    "figures": []
                },
                {
                    "landmark": "3. Cột Diện Khớp Cổ & Điểm Đau Khớp Mấu (Articular Pillars & Facet Tenderness)",
                    "patient_position": "Bệnh nhân nằm ngửa hoàn toàn, cơ vùng cổ mềm nhão.",
                    "technique": "Bác sĩ luồn các đầu ngón tay ra phía sau cổ, di chuyển từ đường giữa (mỏm gai) sang bên khoảng 1.5 – 2 cm vào vùng cột diện khớp (Articular pillar). Dùng đầu ngón tay ấn nhẹ vuông góc từ sau ra trước từng tầng C2-C3, C3-C4, C4-C5, C5-C6, C6-C7.",
                    "clinical_pearl": "Ấn đau chói khu trú tại một cột diện khớp tái hiện cảm giác đau nhức cổ gáy một bên là dấu hiệu đặc trưng của Hội chứng diện khớp cổ (Cervical Facet Syndrome).",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch04_cervical_pain/p185_img2.jpeg", "anatomy", "Fig. 4.62: Thao tác sờ nắn tìm điểm đau chói cột diện khớp cổ")
                    ]
                },
                {
                    "landmark": "4. Tam Giác Dưới Chẩm & Thần Kinh Chẩm Lớn (Suboccipital Triangle & GON)",
                    "patient_position": "Bệnh nhân nằm sấp hoặc nằm ngửa kê đầu nhẹ.",
                    "technique": "Xác định bờ dưới đường cong chẩm trên. Sờ vào hố lõm giữa cơ thang và cơ ức đòn chũm, cách đường giữa ụ chẩm ngoài khoảng 2.5 cm (khoảng 1/3 trong đường nối ụ chẩm ngoài tới mỏm chũm). Ấn sâu vào hướng cơ thẳng đầu sau lớn và cơ chéo đầu dưới.",
                    "clinical_pearl": "Điểm thoát của Thần kinh chẩm lớn (Greater Occipital Nerve - GON). Ấn đau chói kèm cảm giác điện giật tê buốt bắn lên đỉnh đầu và ra sau hốc mắt khẳng định Đau thần kinh chẩm (Occipital Neuralgia) hoặc Đau đầu do cổ (Cervicogenic Headache).",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch04_cervical_pain/p149_img1.png", "anatomy", "Fig. 4.19: Vùng cơ tam giác dưới chẩm và đường đi của dây thần kinh chẩm")
                    ]
                }
            ],
            "figures": [
                enrich_fig("assets/deepak_images/ch04_cervical_pain/p106_img1.png", "anatomy", "Fig. 4.1: Cột sống cổ nhìn từ phía sau"),
                enrich_fig("assets/deepak_images/ch04_cervical_pain/p107_img1.jpeg", "anatomy", "Fig. 4.2: Khớp đội - trục C1-C2 và vùng dưới chẩm"),
                enrich_fig("assets/deepak_images/ch04_cervical_pain/p108_img1.png", "anatomy", "Fig. 4.3: Dây chằng ngang bảo vệ tủy sống"),
                enrich_fig("assets/deepak_images/ch04_cervical_pain/p149_img1.png", "anatomy", "Fig. 4.19: Cơ dưới chẩm"),
                enrich_fig("assets/deepak_images/ch04_cervical_pain/p150_img1.jpeg", "anatomy", "Fig. 4.20: Bản đồ thần kinh da đầu"),
                enrich_fig("assets/deepak_images/ch04_cervical_pain/p185_img2.jpeg", "anatomy", "Fig. 4.62: Sờ nắn diện khớp cổ")
            ]
        },

        # TAB 2: Sàng lọc Cờ đỏ & Bệnh lý nguy hiểm
        "tab2_red_flags": [
            {
                "category": "🚨 Mất Vững Khớp Cổ Trên & Đứt Dây Chằng Ngang/Cánh (Craniovertebral Instability)",
                "systemic_group": "Chấn thương nặng / Bệnh tự miễn hủy xương",
                "signs": "Cảm giác nặng đầu dữ dội, đầu như muốn rơi tuột ra phía trước khi cúi cổ (Lump in throat / Clunk sign); Tê giật điện buốt tứ chi khi gập cổ (Dấu hiệu Lhermitte); Dị cảm lưỡi khi xoay cổ; Tiền sử chấn thương giật cổ mạnh (Whiplash), viêm khớp dạng thấp (RA mòn mỏm nha) hoặc hội chứng Down.",
                "action": "Cố định nẹp cổ cứng ngay lập tức! Tuyệt đối CẤM nắn chỉnh vặn cổ hay gập duỗi thụ động. Chuyển cấp cứu Ngoại Thần kinh.",
                "gold_standard_labs": "X-quang cột sống cổ động (Flexion/Extension views) đo khoảng cách răng - cung trước C1 (ADI > 3mm ở người lớn là bất thường), CT Scanner đa dãy tái tạo 3D xương cổ trên, MRI khảo sát dây chằng ngang.",
                "figures": [
                    enrich_fig("assets/deepak_images/ch04_cervical_pain/p123_img1.jpeg", "redflag", "Fig. 4.10: Gãy mỏm nha C2 (Odontoid Fracture Type 1, 2, 3) gây mất vững cổ trên"),
                    enrich_fig("assets/deepak_images/ch04_cervical_pain/p123_img2.png", "redflag", "Fig. 4.11: Gãy vỡ cung C1 (Jefferson Fracture do lực nén dọc trục)")
                ]
            },
            {
                "category": "🚨 Thiểu Năng Động Mạch Đốt Sống Thân Nền (Vertebrobasilar Insufficiency - VBI)",
                "systemic_group": "Mạch máu thần kinh sọ não",
                "signs": "Hội chứng 5D: Chóng mặt quay cuồng (Dizziness), Nhìn đôi (Diplopia), Khó nuốt (Dysphagia), Rối loạn phát âm nói ngọng (Dysarthria), Cơn ngất sụp mi đột ngột không mất ý thức (Drop attacks);\nHội chứng 3N: Buồn nôn (Nausea), Rung giật nhãn cầu (Nystagmus), Tê bì một bên mặt (Numbness);\nTriệu chứng xuất hiện hoặc tăng vọt khi ngửa cổ và xoay cổ hết cỡ (làm chèn ép động mạch đốt sống trong lỗ mỏm ngang).",
                "action": "Dừng ngay lập tức thao tác khám, đưa đầu bệnh nhân về vị trí thăng bằng. Bác sĩ theo dõi sát sinh hiệu và chuyển khám Chuyên khoa Thần kinh / Đột quỵ cấp cứu.",
                "gold_standard_labs": "Siêu âm Doppler màu động mạch cảnh - đốt sống, Chụp mạch cộng hưởng từ (MRA não - cổ) hoặc CT Angiography (CTA).",
                "figures": [
                    enrich_fig("assets/deepak_images/ch04_cervical_pain/p110_img1.png", "redflag", "Đường đi của động mạch đốt sống qua lỗ mỏm ngang và góc xoay nhạy cảm C1-C2")
                ]
            },
            {
                "category": "🚨 Bệnh Lý Tủy Cổ Do Thoái Hóa / Chèn Ép Tủy Cấp (Cervical Spondylotic Myelopathy - CSM)",
                "systemic_group": "Thần kinh trung ương",
                "signs": "Dáng đi loạng choạng, mất thăng bằng như người say rượu (Ataxic gait); Bàn tay vụng về không cài được cúc áo, đánh rơi đũa bát; Teo cơ liên cốt bàn tay; Tăng phản xạ gân xương chi dưới, Clonus xương bánh chè (+), Dấu hiệu Babinski (+), Dấu hiệu Hoffman (+).",
                "action": "Chuyển phẫu thuật Ngoại thần kinh giải ép tủy sống khẩn cấp. Tránh kéo giãn cổ cơ học lực lớn.",
                "gold_standard_labs": "Chụp cộng hưởng từ MRI cột sống cổ không cản quang: Đánh giá hẹp ống sống, mất dịch não tủy quanh tủy và tổn thương tăng tín hiệu tủy sống (Myelomalacia / T2 Hyperintensity).",
                "figures": [
                    enrich_fig("assets/deepak_images/ch04_cervical_pain/p181_img1.jpeg", "redflag", "Fig. 4.38: Dấu hiệu Hoffman - Búng móng tay giữa gây gập ngón cái gợi ý chèn ép tủy cổ")
                ]
            },
            {
                "category": "🚨 Khối U Đỉnh Phổi Pancoast (Pancoast Superior Sulcus Tumor)",
                "systemic_group": "Ung thư lồng ngực xâm lấn rễ cổ",
                "signs": "Đau nhức dữ dội góc cổ - vai và mặt trong cánh tay (vùng rễ C8-T1), teo cơ mô út và liên cốt bàn tay, tiền sử hút thuốc lá nặng; Kèm Hội chứng Horner: Sụp mi (Ptosis), Co đồng tử (Miosis), Giảm tiết mồ hôi nửa mặt cùng bên (Anhidrosis).",
                "action": "Chụp ngay X-quang và CT ngực độ phân giải cao phát hiện u đỉnh phổi. Chuyển chuyên khoa Ung bướu.",
                "gold_standard_labs": "CT Ngực có tiêm thuốc cản quang, Sinh thiết u qua da dưới hướng dẫn CT, Xạ hình xương toàn thân (Bone Scan).",
                "figures": [
                    enrich_fig("assets/deepak_images/ch04_cervical_pain/p146_img1.png", "redflag", "Vùng đỉnh phổi và khoang chèn ép đám rối cánh tay rễ C8-T1")
                ]
            }
        ],

        # TAB 3: Đau Chuyển Tạng & Đau Do Thuốc
        "tab3_visceral_drug_pain": {
            "visceral_referrals": [
                {
                    "organ": "Cơ Tim / Bệnh Động Mạch Vành (Myocardial Ischemia / Angina)",
                    "source": "Thiếu Máu Cơ Tim Cấp (Coronary Heart Disease)",
                    "pain_pattern": "Đau tức đè nặng sau xương ức quy chiếu lan lên góc hàm dưới bên trái, vùng cổ trước trái, bờ trên cơ thang trái và bờ trong cánh tay trái theo rễ C8-T1.",
                    "neuro_mechanism": "Sợi cảm giác đau tạng tim đi theo thần kinh giao cảm tim vào sừng sau tủy sống T1-T4, liên kết với phân đoạn cổ C3-C5.",
                    "differential": "Đau tăng khi gắng sức thể lực, xúc động mạnh; KHÔNG thay đổi khi xoay cổ, nghiêng cổ hoặc ấn các khớp mấu cổ.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch04_cervical_pain/p112_img1.jpeg", "visceral", "Hệ thống hạch bạch huyết cổ và cấu trúc mạch máu trung thất")
                    ]
                },
                {
                    "organ": "Túi Mật & Vòm Hoành (Gallbladder & Diaphragm / Kehr's Sign)",
                    "source": "Viêm Túi Mật Cấp / Kích Thích Dây Thần Kinh Hoành (Phrenic Nerve C3-C5)",
                    "pain_pattern": "Đau nhói vùng vai gáy phải và đỉnh bờ trên cơ thang phải (Dấu hiệu Boas và Kehr).",
                    "neuro_mechanism": "Thần kinh hoành (Phrenic nerve) xuất phát từ rễ C3, C4, C5 chi phối cảm giác cơ hoành và phúc mạc phủ gan mật. Khi vòm hoành bị kích thích (máu, mủ, viêm), xung động truyền về khoanh tủy C3-C5 gây cảm giác đau chói vùng cổ - vai.",
                    "differential": "Kèm theo buồn nôn, đau tức hạ sườn phải sau ăn nhiều dầu mỡ, dấu hiệu Murphy dương tính; Vận động cột sống cổ không làm thay đổi cơn đau.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch04_cervical_pain/p113_img1.jpeg", "visceral", "Tuyến giáp và tạng vùng cổ trước")
                    ]
                }
            ],
            "drug_induced": [
                "1. Thuốc chống loạn thần (Haloperidol, Risperidone, Metoclopramide): Gây cơn loạn trương lực cơ cổ cấp tính (Acute Cervical Dystonia / Torticollis) làm cổ bị vặn cứng đau dữ dội.",
                "2. Thuốc Triptans điều trị đau nửa đầu: Co thắt mạch máu não thoáng qua gây đau căng cứng cơ gáy sau dùng.",
                "3. Corticoid liều cao kéo dài: Gây loãng xương đốt sống cổ nặng dẫn đến gãy lún vi thể hoặc hoại tử chỏm xương."
            ]
        },

        # TAB 4: Nghiệm Pháp Khám Thực Thể Đặc Hiệu
        "tab4_provocative_tests": {
            "provocative_tests": [
                {
                    "name": "Nghiệm Pháp Spurling A (Cervical Radicular Compression Test)",
                    "patient_position": "Bệnh nhân ngồi thẳng trên ghế khám, hai tay đặt trên đùi.",
                    "examiner_action": "Bác sĩ đứng phía sau bệnh nhân, hướng dẫn bệnh nhân nghiêng đầu sang bên có triệu chứng đau. Bác sĩ đặt hai bàn tay lồng vào nhau trên đỉnh đầu bệnh nhân và tạo một lực ấn dồn dọc trục thẳng đứng xuống dưới (khoảng 7 kg).",
                    "end_feel": "Cảm giác cứng cơ học (Bony/Hard end-feel).",
                    "sensitivity": "50%",
                    "specificity": "93%",
                    "lr_positive": "7.1",
                    "lr_negative": "0.54",
                    "diagnostic_role": "SpPIn (Khẳng định bệnh rễ cổ khi dương tính)",
                    "clinical_role": "Dương tính khi tái hiện chính xác cơn đau nhói như điện giật bắn từ cổ lan dọc xuống cánh tay theo đường đi của rễ thần kinh (Radicular pain). Nghiệm pháp làm hẹp tối đa lỗ ghép bên đau.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch04_cervical_pain/p172_img1.jpeg", "exam", "Fig. 4.31: Thao tác nghiệm pháp ép cổ Spurling Test")
                    ]
                },
                {
                    "name": "Nghiệm Pháp Kéo Giãn Cổ Giảm Đau (Cervical Distraction Test)",
                    "patient_position": "Bệnh nhân nằm ngửa hoàn toàn, thả lỏng toàn bộ cơ vùng cổ.",
                    "examiner_action": "Bác sĩ đứng ở đầu bàn, một tay nâng đỡ dưới ụ chẩm, tay kia ôm giữ cằm bệnh nhân. Bác sĩ từ từ ngả người ra sau tạo lực kéo giãn dọc trục cột sống cổ khoảng 10–15 kg.",
                    "end_feel": "Cảm nhận sức căng mô liên kết (Tissue stretch end-feel).",
                    "sensitivity": "44%",
                    "specificity": "90%",
                    "lr_positive": "4.4",
                    "lr_negative": "0.62",
                    "diagnostic_role": "SpPIn",
                    "clinical_role": "Dương tính khi bệnh nhân thấy triệu chứng đau tê lan xuống cánh tay thuyên giảm rõ rệt hoặc biến mất trong khi kéo giãn (do lỗ ghép được mở rộng và giảm tải áp lực đĩa đệm).",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch04_cervical_pain/p173_img1.jpeg", "exam", "Fig. 4.33: Kỹ thuật kéo giãn cổ giải áp lỗ ghép Distraction Test")
                    ]
                },
                {
                    "name": "Nghiệm Pháp Căng Đám Rối Thần Kinh Chi Trên 1 (Upper Limb Neurodynamic Test 1 - ULNT1 / Elvey Test)",
                    "patient_position": "Bệnh nhân nằm ngửa sát mép bàn khám, không dùng gối kê đầu.",
                    "examiner_action": "Bác sĩ thực hiện tuần tự 6 bước kéo căng dây thần kinh giữa: 1. Hạ xương bả vai xuống; 2. Giạng khớp vai 110°; 3. Ngửa tối đa cổ tay và các ngón tay; 4. Ngửa cẳng tay; 5. Xoay ngoài khớp vai; 6. Từ từ duỗi thẳng khớp khuỷu. Cuối cùng yêu cầu bệnh nhân nghiêng cổ sang bên đối diện (Sensitization).",
                    "end_feel": "Cảm giác căng rát thần kinh (Neural tension end-feel).",
                    "sensitivity": "97%",
                    "specificity": "22%",
                    "lr_positive": "1.24",
                    "lr_negative": "0.12",
                    "diagnostic_role": "SnNOut (Loại trừ bệnh rễ thần kinh cổ khi âm tính)",
                    "clinical_role": "Nếu ULNT1 âm tính, độ tin cậy loại trừ Bệnh rễ thần kinh cổ lên tới 90-95%. Dương tính khi tái hiện triệu chứng tê rát quen thuộc và tăng lên khi nghiêng đầu sang bên đối diện.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch04_cervical_pain/p167_img1.jpeg", "exam", "Fig. 4.34A: Tư thế khởi đầu nghiệm pháp căng thần kinh chi trên ULNT1"),
                        enrich_fig("assets/deepak_images/ch04_cervical_pain/p169_img1.jpeg", "exam", "Fig. 4.34B: Tư thế kéo căng tối đa rễ thần kinh cánh tay")
                    ]
                },
                {
                    "name": "Nghiệm pháp Gập Cổ Khám Dây Chằng Ngang (Cervical Flexion / Testing Transverse Ligament Integrity)",
                    "patient_position": "Bệnh nhân nằm ngửa, đầu đặt vững trên bàn khám.",
                    "examiner_action": "Bác sĩ đặt hai ngón trỏ lên cung sau đốt sống C1 (Atlas), hai bàn tay đỡ giữ xương chẩm. Bác sĩ nhẹ nhàng nâng xương chẩm và C1 tịnh tiến thẳng ra trước trong khi thân C2 giữ nguyên.",
                    "end_feel": "Cảm nhận chặn cứng vững chắc của dây chằng (Firm ligamentous end-feel).",
                    "sensitivity": "65%",
                    "specificity": "99%",
                    "lr_positive": "65.0",
                    "lr_negative": "0.35",
                    "diagnostic_role": "SpPIn (Kiểm tra độ vững dây chằng ngang C1-C2)",
                    "clinical_role": "Dương tính khi xuất hiện cảm giác trống rỗng không có điểm chặn (Empty end-feel), kèm theo tê giật điện tứ chi, chóng mặt, buồn nôn hoặc cảm giác cục nghẹn trong cổ họng (Lump in throat).",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch04_cervical_pain/p177_img1.jpeg", "exam", "Fig. 4.52: Thao tác nâng C1 khám độ vững dây chằng ngang", "🩺 Thao tác khám: Thao tác nâng C1 khám độ vững dây chằng ngang", "4.52")
                    ]
                },
                {
                    "name": "Nghiệm Pháp Sharp-Purser (Sharp-Purser Test for Atlantoaxial Subluxation)",
                    "patient_position": "Bệnh nhân ngồi thẳng, cổ hơi gập nhẹ khoảng 20-30°.",
                    "examiner_action": "Bác sĩ dùng một bàn tay đặt ngón cái và ngón trỏ kẹp chặt cố định mỏm gai C2. Lòng bàn tay kia của bác sĩ đặt lên trán bệnh nhân và từ từ đẩy trán bệnh nhân ra phía sau.",
                    "end_feel": "Cảm nhận trượt lùi có điểm chặn.",
                    "sensitivity": "69%",
                    "specificity": "96%",
                    "lr_positive": "17.3",
                    "lr_negative": "0.32",
                    "diagnostic_role": "SpPIn (Đánh giá bán trật khớp C1 ra trước trên C2)",
                    "clinical_role": "Dương tính khi bác sĩ cảm nhận thấy chỏm C1 trượt 'khực' giật lùi về phía sau trên thân C2 kèm theo bệnh nhân cảm thấy giảm ngay cảm giác nặng đầu hay dị cảm thần kinh.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch04_cervical_pain/p175_img1.jpeg", "exam", "Fig. 4.25: Thao tác đẩy trán ra sau cố định gai C2 trong Sharp-Purser Test")
                    ]
                },
                {
                    "name": "Nghiệm Pháp Dây Chằng Cánh (Alar Ligament Stress Test)",
                    "patient_position": "Bệnh nhân nằm ngửa hoặc ngồi thư giãn cổ.",
                    "examiner_action": "Bác sĩ dùng ngón cái và ngón trỏ kẹp chặt mỏm gai C2. Tay kia nghiêng nhẹ đầu hoặc xoay nhẹ đầu bệnh nhân sang một bên.",
                    "end_feel": "Cảm giác cứng chắc tức thì của dây chằng cánh.",
                    "sensitivity": "80%",
                    "specificity": "95%",
                    "lr_positive": "16.0",
                    "lr_negative": "0.21",
                    "diagnostic_role": "SpPIn",
                    "clinical_role": "Bình thường mỏm gai C2 phải xoay ngay lập tức sang phía đối diện khi đầu nghiêng bên (do dây chằng cánh kéo). Nếu đầu nghiêng bên > 20-30° mà mỏm gai C2 vẫn đứng yên không nhúc nhích: Dương tính báo hiệu rách/giãn dây chằng cánh.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch04_cervical_pain/p176_img1.jpeg", "exam", "Fig. 4.26: Thao tác kẹp mỏm gai C2 kiểm tra dây chằng cánh")
                    ]
                },
                {
                    "name": "Nghiệm Pháp An Toàn Động Mạch Đốt Sống (Vertebral Artery Test - VAT / DeKleyn Test)",
                    "technique": "Bệnh nhân nằm ngửa hoàn toàn, đầu KHÔNG đưa ra ngoài mép bàn khám để đảm bảo kiểm soát an toàn tối đa. Quy trình thực hiện an toàn theo giáo trình Deepak Sebastian (p. 176): Bác sĩ kê gối mỏng hoặc đệm dưới vùng xương bả vai của bệnh nhân để nâng đỡ lồng ngực. Bác sĩ dùng hai tay nâng đỡ đầu bệnh nhân, từ từ đưa cổ vào tư thế duỗi nhẹ kết hợp nghiêng bên và xoay tối đa sang một bên. Duy trì tư thế này trong 15–20 giây. Trong suốt thời gian này, bác sĩ liên tục giao tiếp bằng mắt và yêu cầu bệnh nhân đếm ngược từ 15 về 1 để theo dõi sát tri giác và giọng nói. Dương tính nếu xuất hiện bất kỳ dấu hiệu nào của hội chứng 5D/3N (Chóng mặt, giật nhãn cầu nystagmus, buồn nôn, nhìn đôi, nói líu nhược cơ). Khi có dấu hiệu dương tính, bác sĩ phải hạ đầu bệnh nhân về vị trí trung tính/thăng bằng ngay lập tức và chuyển khám chuyên khoa mạch máu thần kinh.",
                    "patient_position": "Bệnh nhân nằm ngửa hoàn toàn, đầu KHÔNG đưa ra ngoài mép bàn khám để đảm bảo kiểm soát an toàn tối đa.",
                    "examiner_action": "Quy trình thực hiện an toàn theo giáo trình Deepak Sebastian (p. 176): Bác sĩ kê gối mỏng hoặc đệm dưới vùng xương bả vai của bệnh nhân để nâng đỡ lồng ngực. Bác sĩ dùng hai tay nâng đỡ đầu bệnh nhân, từ từ đưa cổ vào tư thế duỗi nhẹ kết hợp nghiêng bên và xoay tối đa sang một bên. Duy trì tư thế này trong 15–20 giây. Trong suốt thời gian này, bác sĩ liên tục giao tiếp bằng mắt và yêu cầu bệnh nhân đếm ngược từ 15 về 1 để theo dõi sát tri giác và giọng nói.",
                    "end_feel": "Không áp dụng (Đánh giá lưu lượng tưới máu não).",
                    "sensitivity": "60%",
                    "specificity": "90%",
                    "lr_positive": "6.0",
                    "lr_negative": "0.44",
                    "diagnostic_role": "Sàng lọc cờ đỏ mạch máu não",
                    "clinical_role": "Dương tính nếu xuất hiện bất kỳ dấu hiệu nào của hội chứng 5D/3N (Chóng mặt, giật nhãn cầu nystagmus, buồn nôn, nhìn đôi, nói líu nhược cơ). Khi có dấu hiệu dương tính, bác sĩ phải hạ đầu bệnh nhân về vị trí trung tính/thăng bằng ngay lập tức và chuyển khám chuyên khoa mạch máu thần kinh.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch04_cervical_pain/p179_img1.jpeg", "exam", "Fig. 4.36: Thao tác duỗi và xoay cổ đánh giá lưu thông động mạch đốt sống")
                    ]
                },
                {
                    "name": "Nghiệm Pháp Roos Đánh Giá Hội Chứng Lối Thoát Ngực (Roos Elevated Arm Stress Test / EAST)",
                    "patient_position": "Bệnh nhân ngồi thẳng, hai tay giạng 90°, khuỷu tay gập 90° (tư thế đầu hàng).",
                    "examiner_action": "Yêu cầu bệnh nhân nắm mở hai bàn tay chậm rãi liên tục trong vòng 3 phút.",
                    "end_feel": "Không áp dụng.",
                    "sensitivity": "84%",
                    "specificity": "83%",
                    "lr_positive": "4.9",
                    "lr_negative": "0.19",
                    "diagnostic_role": "Sàng lọc hội chứng chèn ép lối thoát ngực (TOS)",
                    "clinical_role": "Dương tính khi bệnh nhân không thể duy trì đủ 3 phút do mỏi rũ cánh tay, tê buốt bàn tay, nhợt nhạt đầu ngón tay do chèn ép bó mạch thần kinh dưới đòn.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch04_cervical_pain/p174_img1.jpeg", "exam", "Fig. 4.34: Tư thế giạng tay nâng cao trong nghiệm pháp Roos")
                    ]
                }
            ],
            "somatic_dysfunctions": [
                {
                    "dysfunction": "Rối Loạn Trượt Khóa Khớp Mấu Cổ Thể ERS / FRS (Deepak Cervical Somatic Dysfunctions)",
                    "biomechanics": "• Thể ERS (Extension-Rotation-Sidebending restriction): Đốt sống bị kẹt ở tư thế Duỗi - Xoay - Nghiêng bên, diện khớp bên đối diện không thể mở trượt lên trên ra trước khi gập cổ.\n• Thể FRS (Flexion-Rotation-Sidebending restriction): Đốt sống bị kẹt ở tư thế Gập - Xoay - Nghiêng bên, diện khớp cùng bên không thể đóng trượt xuống dưới ra sau khi duỗi cổ.",
                    "assessment_correction": "Bác sĩ sờ nắn cột diện khớp xác định đốt sống xoay lệch; Áp dụng kỹ năng kéo giãn mô mềm, trượt khớp thụ động (Passive articular mobilization) hoặc kỹ thuật năng lượng cơ (MET) giải phóng diện khớp.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch04_cervical_pain/p183_img1.jpeg", "somatic", "Fig. 4.60: Co rút cơ ngực bé và tư thế vai đưa ra trước gây rối loạn trục cổ ngực")
                    ]
                }
            ]
        },

        # TAB 5: Ma Trận Chẩn Đoán Phân Biệt & Ca Bệnh Khó
        "tab5_differential_matrix": {
            "matrix": [
                {
                    "condition": "Bệnh Rễ Thần Kinh Cổ (Cervical Radiculopathy - Thường C6, C7)",
                    "onset": "Từ từ hoặc đột ngột sau gập vặn cổ, đau lan nhói dọc cánh tay xuống ngón",
                    "aggravating": "Tăng khi gập/xoay cổ bên đau, ho, hắt hơi; Giảm khi đặt tay lên đỉnh đầu (Bakody sign)",
                    "confirmatory_test": "Spurling Test (+), Distraction Test (+), ULNT1 (+)",
                    "gold_standard": "MRI cột sống cổ: Thoát vị đĩa đệm hoặc chồi xương thoái hóa chèn ép rễ thần kinh tại lỗ ghép",
                    "key_differentiator": "Đau nhức lan theo dải khoanh da (Dermatome), giảm phản xạ gân xương tương ứng rễ (C6 gân cơ nhị đầu/quay, C7 gân cơ tam đầu)",
                    "web1_procedure_id": "cervical-nerve-root"
                },
                {
                    "condition": "Hội Chứng Khớp Mấu Cổ (Cervical Facet Arthropathy)",
                    "onset": "Âm ỉ, đau khu trú vùng cổ gáy lan ra góc trên bả vai, không vượt quá khớp khuỷu",
                    "aggravating": "Tăng khi ngửa cổ và nghiêng cổ bên đau (đóng diện khớp); Giảm khi gập cổ nhẹ",
                    "confirmatory_test": "Ấn đau chói cột diện khớp (Articular pillar tenderness); Spurling (-)",
                    "gold_standard": "Phong bế chẩn đoán nhánh trong (Medial Branch Block - MBB) giảm đau > 80%",
                    "key_differentiator": "Không có tê buốt cánh tay, phản xạ và cảm giác chi trên hoàn toàn bình thường",
                    "web1_procedure_id": "cervical-medial-branch-ton"
                },
                {
                    "condition": "Hội Chứng Lối Thoát Ngực (Thoracic Outlet Syndrome - TOS)",
                    "onset": "Người làm việc máy tính, mang vác nặng, dị tật xương sườn cổ (Cervical rib)",
                    "aggravating": "Tăng khi mang vác vật nặng buông thõng tay hoặc làm việc giơ tay qua đầu",
                    "confirmatory_test": "Roos Test (+), Adson Test bắt mạch quay biến mất khi xoay hít sâu",
                    "gold_standard": "Siêu âm Doppler mạch dưới đòn tư thế giạng tay, Điện cơ EMG đám rối cánh tay",
                    "key_differentiator": "Đau tê bàn tay kèm sưng nề mu tay, tái nhợt đầu ngón, bắt mạch quay yếu",
                    "web1_procedure_id": None
                },
                {
                    "condition": "Đau Đầu Do Cổ (Cervicogenic Headache - CGH)",
                    "onset": "Đau đầu nửa bên khởi phát từ vùng chẩm gáy lan ra thái dương và hốc mắt",
                    "aggravating": "Tăng khi giữ nguyên tư thế cổ lâu hoặc ấn vào cơ dưới chẩm và khớp C1-C2",
                    "confirmatory_test": "Flexion-Rotation Test (FRT) hạn chế biên độ xoay C1-C2 < 32°",
                    "gold_standard": "Phong bế thần kinh chẩm lớn (GON) hoặc khớp C1-C2 giúp cắt cơn đau đầu",
                    "key_differentiator": "Đau đầu không có triệu chứng tiền triệu Aura mạch đập như Migraine, không nôn ói nhiều",
                    "web1_procedure_id": "occipital-nerve"
                },
                {
                    "condition": "Hội Chứng Chèn Ép Tủy Cổ (Cervical Myelopathy - CSM)",
                    "onset": "Tiến triển chậm ở người lớn tuổi thoái hóa hẹp ống sống cổ",
                    "aggravating": "Không phụ thuộc rõ vào tư thế cổ, diễn tiến nặng dần",
                    "confirmatory_test": "Hoffman sign (+), Dáng đi thất điều (Ataxic gait), Babinski (+)",
                    "gold_standard": "MRI cột sống cổ: Tủy sống bị bẹp méo và tăng tín hiệu T2 trong chất tủy",
                    "key_differentiator": "Liệt cứng nơ-ron vận động trên (Upper Motor Neuron lesion), tăng phản xạ gân xương gối và gót",
                    "web1_procedure_id": None
                }
            ],
            "complex_cases_reasoning": [
                {
                    "case_title": "Biện Luận Ca Khó: Phân Biệt Bệnh Rễ Cổ C6/C7 Với Hội Chứng Kẹt Kép (Double Crush Syndrome)",
                    "clinical_dilemma": "Bệnh nhân nam 52 tuổi bị tê buốt ngón cái và ngón trỏ bàn tay phải kèm đau âm ỉ vùng cổ gáy. Điện cơ (EMG) ghi nhận hội chứng ống cổ tay mức độ trung bình. Tuy nhiên sau khi tiêm ống cổ tay, bệnh nhân chỉ giảm tê 30% và cơn đau buốt cổ lan xuống cẳng tay vẫn dai dẳng.",
                    "differential_rationale": "Đây là bệnh cảnh kinh điển của Hội chứng kẹt kép (Double Crush Syndrome): Dây thần kinh giữa bị tổn thương tại hai vị trí đồng thời: 1. Gốc rễ C6 tại lỗ ghép cột sống cổ; 2. Thân dây thần kinh giữa trong ống cổ tay. Tổn thương tắc nghẽn vận chuyển dưỡng bào (Axoplasmic flow) tại gốc rễ cổ khiến cho dây thần kinh ở ngoại biên trở nên cực kỳ nhạy cảm với bất kỳ lực chèn ép cơ học nhẹ nào.\n• Khám lâm sàng phân biệt: Thực hiện Spurling Test và Kéo giãn cổ (Distraction). Nếu Spurling tái hiện đúng cơn tê giật xuống ngón cái, chứng tỏ chèn ép rễ C6 vẫn đang đóng vai trò thủ phạm chính.",
                    "clinical_pearl": "Không vội vàng mổ giải ép ống cổ tay khi bệnh nhân có đau cổ kèm theo. Bắt buộc phải điều trị kiểm soát rễ cổ trước (bằng tiêm phong bế rễ thần kinh chọn lọc SNRB dưới siêu âm) để phục hồi dòng vận chuyển dưỡng bào trước khi can thiệp ngoại biên."
                }
            ]
        },

        # TAB 6: Phác Đồ Can Thiệp Siêu Âm Web 1
        "tab6_intervention_linkage": {
            "intervention_guidelines": "Cột sống cổ là khu vực giải phẫu có mật độ mạch máu và thần kinh cực kỳ đậm đặc (Động mạch đốt sống, động mạch cổ sâu, tủy sống, hạch giao cảm). Việc thực hiện can thiệp dưới hướng dẫn siêu âm thời gian thực (Real-time ultrasound guidance) với đầu dò tần số cao (Linear 12-18 MHz) và Doppler màu là tiêu chuẩn an toàn bắt buộc để tránh đâm kim vào mạch máu.",
            "recommended_web1_procedures": [
                {
                    "id": "cervical-nerve-root",
                    "nameVi": "Tiêm chọn lọc rễ thần kinh cổ dưới hướng dẫn siêu âm",
                    "role": "Tiêu chuẩn vàng can thiệp điều trị thoát vị đĩa đệm chèn ép rễ cổ C5, C6, C7",
                    "indication": "Đau rễ thần kinh cổ kháng trị với thuốc NSAID và vật lý trị liệu sau 4-6 tuần"
                },
                {
                    "id": "cervical-medial-branch-ton",
                    "nameVi": "Tiêm khớp mấu cột sống cổ (Cervical Facet Joint Injection)",
                    "role": "Kiểm soát đau trong thoái hóa khớp mấu cổ gây đau cổ gáy mạn tính",
                    "indication": "Đau cột diện khớp khu trú tái hiện khi duỗi nghiêng cổ, ấn chói cột diện khớp"
                },
                {
                    "id": "cervical-medial-branch-ton",
                    "nameVi": "Tiêm phong bế nhánh trong dây thần kinh sống cổ (Medial Branch Block)",
                    "role": "Phong bế chẩn đoán và điều trị giảm đau khớp mấu trước khi đốt sóng cao tần RFA",
                    "indication": "Đau diện khớp cổ mạn tính nghi ngờ cần nghiệm pháp phong bế khẳng định"
                },
                {
                    "id": "occipital-nerve",
                    "nameVi": "Phong bế thần kinh chẩm lớn dưới siêu âm (Greater Occipital Nerve Block)",
                    "role": "Điều trị Đau thần kinh chẩm (Occipital Neuralgia) và Đau đầu do cổ (CGH)",
                    "indication": "Đau buốt nửa đầu xuất phát từ vùng chẩm lan ra hốc mắt, ấn điểm Arnold đau chói"
                },
                {
                    "id": "stellate-ganglion",
                    "nameVi": "Phong bế hạch sao dưới hướng dẫn siêu âm (Stellate Ganglion Block)",
                    "role": "Điều trị hội chứng đau vùng phức hợp (CRPS Type 1/2) chi trên và rối loạn tuần hoàn",
                    "indication": "Đau bỏng rát loạn dưỡng thần kinh chi trên, co thắt mạch đầu chi"
                }
            ]
        },

        # Figures aggregate
        "figures": [
            enrich_fig("assets/deepak_images/ch04_cervical_pain/p106_img1.png", "anatomy", "Fig. 4.1: Cột sống cổ nhìn từ phía sau"),
            enrich_fig("assets/deepak_images/ch04_cervical_pain/p107_img1.jpeg", "anatomy", "Fig. 4.2: Khớp đội - trục C1-C2 và vùng dưới chẩm"),
            enrich_fig("assets/deepak_images/ch04_cervical_pain/p108_img1.png", "anatomy", "Fig. 4.3: Dây chằng ngang bảo vệ tủy sống"),
            enrich_fig("assets/deepak_images/ch04_cervical_pain/p110_img1.png", "redflag", "Đường đi của động mạch đốt sống qua lỗ mỏm ngang và góc xoay nhạy cảm C1-C2"),
            enrich_fig("assets/deepak_images/ch04_cervical_pain/p112_img1.jpeg", "visceral", "Hệ thống hạch bạch huyết cổ và cấu trúc mạch máu trung thất"),
            enrich_fig("assets/deepak_images/ch04_cervical_pain/p113_img1.jpeg", "visceral", "Tuyến giáp và tạng vùng cổ trước"),
            enrich_fig("assets/deepak_images/ch04_cervical_pain/p123_img1.jpeg", "redflag", "Fig. 4.10: Gãy mỏm nha C2 (Odontoid Fracture Type 1, 2, 3) gây mất vững cổ trên"),
            enrich_fig("assets/deepak_images/ch04_cervical_pain/p123_img2.png", "redflag", "Fig. 4.11: Gãy vỡ cung C1 (Jefferson Fracture do lực nén dọc trục)"),
            enrich_fig("assets/deepak_images/ch04_cervical_pain/p146_img1.png", "redflag", "Vùng đỉnh phổi và khoang chèn ép đám rối cánh tay rễ C8-T1"),
            enrich_fig("assets/deepak_images/ch04_cervical_pain/p149_img1.png", "anatomy", "Fig. 4.19: Vùng cơ tam giác dưới chẩm và đường đi của dây thần kinh chẩm"),
            enrich_fig("assets/deepak_images/ch04_cervical_pain/p150_img1.jpeg", "anatomy", "Fig. 4.20: Phân bố thần kinh vùng chẩm và da đầu"),
            enrich_fig("assets/deepak_images/ch04_cervical_pain/p167_img1.jpeg", "exam", "Fig. 4.34A: Tư thế khởi đầu nghiệm pháp căng thần kinh chi trên ULNT1"),
            enrich_fig("assets/deepak_images/ch04_cervical_pain/p169_img1.jpeg", "exam", "Fig. 4.34B: Tư thế kéo căng tối đa rễ thần kinh cánh tay"),
            enrich_fig("assets/deepak_images/ch04_cervical_pain/p172_img1.jpeg", "exam", "Fig. 4.31: Thao tác nghiệm pháp ép cổ Spurling Test"),
            enrich_fig("assets/deepak_images/ch04_cervical_pain/p173_img1.jpeg", "exam", "Fig. 4.33: Kỹ thuật kéo giãn cổ giải áp lỗ ghép Distraction Test"),
            enrich_fig("assets/deepak_images/ch04_cervical_pain/p174_img1.jpeg", "exam", "Fig. 4.34: Tư thế giạng tay nâng cao trong nghiệm pháp Roos"),
            enrich_fig("assets/deepak_images/ch04_cervical_pain/p175_img1.jpeg", "exam", "Fig. 4.25: Thao tác đẩy trán ra sau cố định gai C2 trong Sharp-Purser Test"),
            enrich_fig("assets/deepak_images/ch04_cervical_pain/p176_img1.jpeg", "exam", "Fig. 4.26: Thao tác kẹp mỏm gai C2 kiểm tra dây chằng cánh"),
            enrich_fig("assets/deepak_images/ch04_cervical_pain/p177_img1.jpeg", "exam", "Fig. 4.28: Thao tác nâng C1 khám độ vững dây chằng ngang"),
            enrich_fig("assets/deepak_images/ch04_cervical_pain/p179_img1.jpeg", "exam", "Fig. 4.36: Thao tác duỗi và xoay cổ đánh giá lưu thông động mạch đốt sống"),
            enrich_fig("assets/deepak_images/ch04_cervical_pain/p181_img1.jpeg", "redflag", "Fig. 4.38: Dấu hiệu Hoffman - Búng móng tay giữa gây gập ngón cái gợi ý chèn ép tủy cổ"),
            enrich_fig("assets/deepak_images/ch04_cervical_pain/p183_img1.jpeg", "somatic", "Fig. 4.60: Co rút cơ ngực bé và tư thế vai đưa ra trước gây rối loạn trục cổ ngực"),
            enrich_fig("assets/deepak_images/ch04_cervical_pain/p185_img2.jpeg", "anatomy", "Fig. 4.62: Thao tác sờ nắn tìm điểm đau chói cột diện khớp cổ")
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
