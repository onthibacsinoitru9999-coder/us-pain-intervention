# -*- coding: utf-8 -*-
from . import enrich_fig

def get_module():
    mod = {
        "id": "hip-groin-pain",
        "chapter": 7,
        "region": "lower",
        "region_vi": "Khớp Háng & Vùng Bẹn",
        "icon": "👖",
        "title": "Hip Joint, Groin Pain, Avascular Necrosis & Trochanteric Differential",
        "title_vi": "👖 Đau Khớp Háng, Vùng Bẹn, AVN & Mấu Chuyển Lớn",
        "chief_complaint": "Phàn nàn chính: Đau sâu vùng bẹn (Dấu hiệu chữ C - 'C-sign'), đau nhói khi đứng lên từ ghế hoặc bước lên xe ô tô, đau buốt mặt ngoài đùi khi nằm nghiêng đè lên mấu chuyển lớn, đi khập khiễng, cảm giác cứng khớp háng khó cắt móng chân hoặc đi tất, tiền sử dùng thuốc corticoid.",
        "author": "GS. Deepak Sebastian (Chuyên khảo Chương 7, pp. 301-333 - 33 Trang Sách)",
        "summary": "Mô hình tiếp cận chuyên khảo khớp háng & vùng bẹn (Hip & Groin Master): Khớp háng là một khớp chỏm cầu chịu tải trọng cực lớn với cấu trúc mạch máu nuôi dưỡng tận cùng rất nhạy cảm. Rà soát cờ đỏ số một: Hoại tử vô mạch chỏm xương đùi (Avascular Necrosis - AVN / Osteonecrosis) để phát hiện sớm trước khi xẹp chỏm. Phân định rõ 3 vùng đau: 1. Đau vùng bẹn trước (Tổn thương nội khớp: Thoái hóa khớp, xung đột FAI, rách sụn viền); 2. Đau mặt ngoài háng (Hội chứng đau mấu chuyển lớn GTPS, viêm bao hoạt dịch); 3. Đau mặt sau mông (Khớp cùng chậu, rễ tọa, cơ hình lê).",

        # TAB 1: Giải phẫu, Cơ sinh học & Sờ nắn
        "tab1_anatomy_palpation": {
            "arthrokinematics": {
                "joint_system": "Khớp háng (Coxafemoral joint) là khớp chỏm cầu sâu (Enarthrodial / Ball-and-socket joint) có 3 bậc tự do vận động. Ổ cối được làm sâu thêm bởi Sụn viền ổ cối (Acetabular labrum). Hệ thống dây chằng bao khớp cực kỳ vững chắc: Dây chằng chậu đùi (Y-ligament of Bigelow - dây chằng khỏe nhất cơ thể, chịu lực kéo tới 350 kg), dây chằng mu đùi và dây chằng ngồi đùi.\n• Cung cấp máu cho chỏm xương đùi: Động mạch mũ đùi trong (Medial circumflex femoral artery) là nguồn cấp máu chính cho 80% chỏm xương đùi qua các nhánh động mạch ổ cối sau trên và sau dưới. Động mạch dây chằng tròn chỉ đóng góp một phần nhỏ. Do là mạng lưới tuần hoàn tận cùng, chỏm xương đùi rất dễ bị hoại tử thiếu máu khi có tắc mạch hoặc co thắt mạch.",
                "roll_gliding": "• Khớp Chỏm Xương Đùi - Ổ Cối: Chỏm xương đùi hình cầu lồi chuyển động trong ổ cối lõm (Convex on Concave).\n- Gập háng (Flexion): Chỏm xương đùi lăn ra trước (Roll anteriorly), đồng thời trượt ra sau và xuống dưới (Glide posteriorly & inferiorly).\n- Duỗi háng (Extension): Chỏm xương đùi lăn ra sau và trượt ra trước (Roll posterior, glide anterior).\n- Giạng háng (Abduction): Chỏm xương đùi lăn lên trên ra ngoài, trượt xuống dưới vào trong (Glide inferiorly & medially).\n- Áp háng (Adduction): Chỏm xương đùi lăn vào trong, trượt lên trên ra ngoài (Glide superiorly & laterally).\n- Xoay trong (Internal rotation): Chỏm xương đùi lăn ra trước vào trong, trượt ra sau (Glide posteriorly).\n- Xoay ngoài (External rotation): Chỏm xương đùi lăn ra sau, trượt ra trước (Glide anteriorly).",
                "capsular_pattern": "Mô hình bao khớp (Capsular pattern): Xoay trong bị hạn chế nặng nề nhất, tiếp theo là hạn chế giạng và gập háng; động tác duỗi bị hạn chế ít nhất (Internal rotation > Abduction > Flexion). Gặp điển hình trong Thoái hóa khớp háng (Coxarthrosis) và Viêm màng hoạt dịch khớp háng.",
                "loose_packed_position": "Vị trí lỏng lẻo nghỉ sinh lý (Loose-packed position): Gập háng 30°, giạng 30°, xoay ngoài nhẹ.",
                "close_packed_position": "Vị trí khóa chặt (Close-packed position): Duỗi háng tối đa, xoay trong và giạng nhẹ (hoặc duỗi tối đa làm vặn xoắn toàn bộ các dây chằng bao khớp ép chặt chỏm vào ổ cối).",
                "force_couples_biomechanics": "Cặp lực cơ mông nhỡ (Gluteus medius) và cơ vuông thắt lưng đối bên giữ vững thăng bằng khung chậu trên mặt phẳng trán khi đứng một chân (Cơ chế đòn bẩy Trendelenburg).",
                "figures": [
                    enrich_fig("assets/deepak_images/ch07_hip_pain/p304_img1.jpeg", "anatomy", "Fig. 7.1: Giải phẫu khớp háng và bao khớp nhìn từ phía trước"),
                    enrich_fig("assets/deepak_images/ch07_hip_pain/p304_img1.jpeg", "anatomy", "Fig. 7.2: Hệ thống mạch máu nuôi dưỡng chỏm xương đùi (Hip joint vasculature)"),
                    enrich_fig("assets/deepak_images/ch07_hip_pain/p315_img1.jpeg", "anatomy", "Fig. 7.4: Vị trí ma sát của dải chậu chày lên bao hoạt dịch mấu chuyển lớn"),
                    enrich_fig("assets/deepak_images/ch07_hip_pain/p320_img1.jpeg", "anatomy", "Fig. 7.7: Giải phẫu vùng đùi trước và tam giác đùi Scarpa")
                ]
            },
            "palpation_steps": [
                {
                    "landmark": "1. Mấu Chuyển Lớn Xương Đùi & Bao Hoạt Dịch Mấu Chuyển (Greater Trochanter & Bursa)",
                    "patient_position": "Bệnh nhân nằm nghiêng bên lành, gập nhẹ háng gối bên đau khoảng 45°.",
                    "technique": "Bác sĩ xác định bờ xương gồ to nhất ở mặt ngoài đầu trên xương đùi - mấu chuyển lớn. Dùng đầu ngón tay cái ấn sâu trực tiếp lên đỉnh, bờ trước (chỗ bám cơ mông bé), diện ngoài (chỗ bám cơ mông nhỡ) và bờ sau trên (vị trí bao hoạt dịch mấu chuyển lớn).",
                    "clinical_pearl": "Ấn đau chói khu trú tại bờ sau trên mấu chuyển lớn khẳng định Hội chứng đau mấu chuyển lớn (Greater Trochanteric Pain Syndrome - GTPS / Trochanteric Bursitis).",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch07_hip_pain/p328_img1.jpeg", "anatomy", "Fig. 7.15: Kỹ thuật sờ nắn tìm điểm đau bao hoạt dịch mấu chuyển lớn")
                    ]
                },
                {
                    "landmark": "2. Bao Hoạt Dịch Ụ Ngồi (Ischial / Ischiogluteal Bursa)",
                    "patient_position": "Bệnh nhân nằm sấp hoặc nằm nghiêng gập háng 90°.",
                    "technique": "Bác sĩ ấn sâu vào trung tâm nếp lằn mông (Gluteal fold) tiếp cận ụ ngồi - nơi bám của nguyên ủy cơ gân kheo (Hamstrings).",
                    "clinical_pearl": "Ấn đau chói ụ ngồi gặp ở người ngồi nhiều trên ghế cứng ('Bệnh mông thợ may - Weaver's bottom') hoặc viêm gân cơ gân kheo nguyên ủy.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch07_hip_pain/p329_img1.jpeg", "anatomy", "Fig. 7.16: Kỹ thuật sờ nắn tìm điểm đau bao hoạt dịch ụ ngồi")
                    ]
                },
                {
                    "landmark": "3. Tam Giác Đùi Scarpa & Gân Cơ Thắt Lưng Chậu (Femoral Triangle & Psoas)",
                    "patient_position": "Bệnh nhân nằm ngửa, chân hơi giạng và xoay ngoài nhẹ.",
                    "technique": "Bác sĩ sờ dưới nếp lằn bẹn: Bờ ngoài là cơ may, bờ trong là cơ khép dài, bờ trên là dây chằng bẹn. Bắt mạch đập của động mạch đùi ở giữa. Đặt ngón tay ngay phía ngoài động mạch đùi, ấn sâu vào đáy tam giác đùi để sờ gân cơ thắt lưng chậu và bao hoạt dịch thắt lưng chậu (Iliopectineal bursa).",
                    "clinical_pearl": "Ấn đau chói sâu hoặc sờ thấy khối phồng căng đau vùng ngoài động mạch đùi gợi ý Viêm bao hoạt dịch thắt lưng chậu hoặc Áp-xe cơ thắt lưng chậu (Psoas abscess).",
                    "figures": []
                },
                {
                    "landmark": "4. Thần Kinh Bì Đùi Ngoài & Gai Chậu Trước Trên (ASIS & LFCN)",
                    "patient_position": "Bệnh nhân nằm ngửa.",
                    "technique": "Bác sĩ xác định gai chậu trước trên (ASIS). Di chuyển ngón tay xuống dưới và vào trong khoảng 1–2 cm ngay dưới dây chằng bẹn, ấn sâu tìm điểm thoát của Dây thần kinh bì đùi ngoài (Lateral Femoral Cutaneous Nerve - LFCN).",
                    "clinical_pearl": "Ấn đau chói kèm cảm giác điện giật tê buốt bỏng rát bắn dọc mặt trước ngoài đùi khẳng định Dị cảm đau đùi ngoài (Meralgia Paresthetica).",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch07_hip_pain/p322_img1.jpeg", "anatomy", "Fig. 7.8: Các vị trí chèn ép dây thần kinh bì đùi ngoài LFCN")
                    ]
                }
            ],
            "figures": [
                enrich_fig("assets/deepak_images/ch07_hip_pain/p304_img1.jpeg", "anatomy", "Fig. 7.1: Khớp háng nhìn trước"),
                enrich_fig("assets/deepak_images/ch07_hip_pain/p304_img1.jpeg", "anatomy", "Fig. 7.2: Mạch máu nuôi chỏm xương đùi"),
                enrich_fig("assets/deepak_images/ch07_hip_pain/p315_img1.jpeg", "anatomy", "Fig. 7.4: Bao hoạt dịch mấu chuyển lớn"),
                enrich_fig("assets/deepak_images/ch07_hip_pain/p320_img1.jpeg", "anatomy", "Fig. 7.7: Giải phẫu đùi trước"),
                enrich_fig("assets/deepak_images/ch07_hip_pain/p322_img1.jpeg", "anatomy", "Fig. 7.8: Chèn ép thần kinh bì đùi ngoài LFCN"),
                enrich_fig("assets/deepak_images/ch07_hip_pain/p328_img1.jpeg", "anatomy", "Fig. 7.15: Sờ nắn bao hoạt dịch mấu chuyển lớn"),
                enrich_fig("assets/deepak_images/ch07_hip_pain/p329_img1.jpeg", "anatomy", "Fig. 7.16: Sờ nắn bao hoạt dịch ụ ngồi")
            ]
        },

        # TAB 2: Sàng lọc Cờ đỏ & Bệnh lý nguy hiểm
        "tab2_red_flags": [
            {
                "category": "🚨 Hoại Tử Vô Mạch Chỏm Xương Đùi (Avascular Necrosis of Femoral Head - AVN / Osteonecrosis)",
                "systemic_group": "Mạch máu xương / Độc tính Corticoid & Cồn",
                "signs": "Đau nhức sâu vùng bẹn hoặc mặt trước trong đùi tăng khi đứng chịu lực, về sau đau cả khi nằm nghỉ và ban đêm; Bệnh nhân đi khập khiễng né tránh chịu lực (Antalgic gait); Tiền sử sử dụng Corticoid (kể cả thuốc nam tẩm corticoid), uống nhiều rượu bia, chấn thương trật khớp háng hoặc gãy cổ xương đùi.",
                "action": "Ngừng chịu lực chân đau (dùng hai nạng chống nách). Chụp ngay MRI khớp háng hai bên. Chuyển khám chuyên khoa Chấn thương Chỉnh hình khớp háng xem xét phẫu thuật khoan giải áp (Core decompression) hoặc ghép xương cuống mạch TRƯỚC KHI CHỎM BỊ SỤP LÚN (Giai đoạn Ficat I-II).",
                "gold_standard_labs": "Chụp cộng hưởng từ MRI khớp háng không tiêm thuốc (Độ nhạy 99% - Tiêu chuẩn vàng tuyệt đối phát hiện AVN giai đoạn sớm khi X-quang còn hoàn toàn bình thường); X-quang khung chậu tư thế thẳng và tư thế chân ếch (Frog-leg view) tìm dấu hiệu hình liềm (Crescent sign).",
                "figures": [
                    enrich_fig("assets/deepak_images/ch07_hip_pain/p304_img1.jpeg", "redflag", "Fig. 7.2: Mạng lưới động mạch mũ đùi nhạy cảm với thiếu máu hoại tử chỏm AVN"),
                    enrich_fig("assets/deepak_images/ch07_hip_pain/p314_img1.jpeg", "redflag", "Fig. 7.3: Hậu quả thoái hóa phá hủy khớp háng thứ phát sau hoại tử chỏm")
                ]
            },
            {
                "category": "🚨 Hội Chứng Xung Đột Khớp Háng (Femoroacetabular Impingement - FAI: Cam & Pincer)",
                "systemic_group": "Dị dạng cấu trúc xương gây rách sụn viền",
                "signs": "Đau nhói vùng bẹn khi ngồi xổm, ngồi ghế thấp, xoay vặn người hoặc bước lên xe ô tô; Khám dấu hiệu chữ C (C-sign: bệnh nhân áp ngón cái và các ngón tay ôm lấy mặt ngoài trên mấu chuyển lớn đến vùng bẹn để mô tả cơn đau sâu); Giảm biên độ xoay trong khớp háng.",
                "action": "Chụp X-quang khớp háng chuyên biệt và MRI cản từ nội khớp (MRA). Tránh các tư thế gập khép xoay trong quá mức.",
                "gold_standard_labs": "X-quang khớp háng đo góc Alpha (> 55° chẩn đoán Dạng Cam - chỏm xương đùi gồ mất độ cong hình cầu) và dấu hiệu chéo góc (Cross-over sign chẩn đoán Dạng Pincer - ổ cối bao phủ quá mức chỏm); MRI MRA đánh giá rách sụn viền ổ cối (Acetabular labral tear).",
                "figures": [
                    enrich_fig("assets/deepak_images/ch07_hip_pain/p316_img1.jpeg", "redflag", "Fig. 7.5: Xung đột khớp háng Dạng Cam (Cam Impingement - gồ xương cổ đùi)"),
                    enrich_fig("assets/deepak_images/ch07_hip_pain/p317_img1.jpeg", "redflag", "Fig. 7.6: Xung đột khớp háng Dạng Pincer (Pincer Impingement - ổ cối trùm quá mức)")
                ]
            },
            {
                "category": "🚨 Gãy Cổ Xương Đùi Kín & Gãy Mệt Xương Đùi (Femoral Neck Stress Fracture)",
                "systemic_group": "Gãy xương chấn thương / Loãng xương",
                "signs": "Đau vùng bẹn xuất hiện đột ngột sau chạy bộ đường dài hoặc sau cú ngã nhẹ ở người già loãng xương; Mất hoàn toàn khả năng đứng chịu lực một chân (Inability to bear weight); Chân bên gãy có thể ngắn hơn và xoay ngoài nhẹ.",
                "action": "Cố định bất động chân đau ngay lập tức, chuyển viện bằng cáng thương. Chụp X-quang và MRI xác định đường gãy kín tránh nguy cơ di lệch gây đứt mạch máu nuôi chỏm.",
                "gold_standard_labs": "MRI khớp háng hoặc CT Scanner đa dãy tái tạo lát mỏng (phát hiện đường gãy kín khi X-quang chưa rõ ràng).",
                "figures": []
            },
            {
                "category": "🚨 Nhiễm Trùng Khớp Háng & Áp-Xe Cơ Thắt Lưng Chậu (Septic Hip & Psoas Abscess)",
                "systemic_group": "Nhiễm trùng ngoại khoa cấp cứu",
                "signs": "Sốt, rét run, đau dữ dội khớp háng khiến bệnh nhân luôn giữ chân ở tư thế Gập - Giạng - Xoay ngoài nhẹ để giảm áp lực nội khớp; Chống cự co cứng dữ dội khi bác sĩ xoay nhẹ chân (Log roll test đau chói); Nghiệm pháp duỗi háng kéo căng cơ psoas đau dữ dội.",
                "action": "Chuyển mổ cấp cứu dẫn lưu mủ và kháng sinh tĩnh mạch liều cao.",
                "gold_standard_labs": "Chọc hút dịch khớp háng dưới hướng dẫn siêu âm làm tế bào và cấy khuẩn; Siêu âm / CT ổ bụng phát hiện khối áp-xe cơ thắt lưng chậu.",
                "figures": []
            }
        ],

        # TAB 3: Đau Chuyển Tạng & Đau Do Thuốc
        "tab3_visceral_drug_pain": {
            "visceral_referrals": [
                {
                    "organ": "Ruột Thừa Cấp (Appendix / Psoas Sign)",
                    "source": "Viêm Ruột Thừa Thể Sau Manh Tràng & Áp-Xe Ruột Thừa",
                    "pain_pattern": "Đau vùng hố chậu phải lan xuống bẹn và mặt trước đùi phải, bệnh nhân đi khom lưng co chân phải.",
                    "neuro_mechanism": "Ổ viêm ruột thừa nằm áp sát lên bề mặt cơ thắt lưng chậu (Psoas major muscle), gây co thắt và kích thích thần kinh đùi.",
                    "differential": "Dấu hiệu Psoas Sign dương tính: Bác sĩ cho bệnh nhân nằm nghiêng trái và duỗi thụ động khớp háng phải ra sau làm căng cơ psoas gây đau chói dữ dội vùng bụng; Kèm sốt, buồn nôn, phản ứng thành bụng hố chậu phải.",
                    "figures": []
                },
                {
                    "organ": "Hệ Tiết Niệu Đoạn Thấp (Lower Ureter & Bladder)",
                    "source": "Sỏi Kẹt Đoạn Thành Bàng Quang & Viêm Bàng Quang Cấp",
                    "pain_pattern": "Đau quặn thắt vùng hạ vị lan dọc ống bẹn xuống mặt trong đùi và cơ quan sinh dục ngoài.",
                    "neuro_mechanism": "Dây thần kinh chậu bẹn và thần kinh sinh dục đùi (Genitofemoral L1-L2).",
                    "differential": "Tiểu buốt, tiểu rắt, tiểu ngắt quãng, xét nghiệm nước tiểu có hồng cầu và bạch cầu niệu; Khám khớp háng vận động tự do không đau.",
                    "figures": []
                },
                {
                    "organ": "Bệnh Lý Phụ Khoa Vùng Chậu (Gynecological Pelvic Pathologies)",
                    "source": "U Nang Buồng Trứng Xoắn, Thai Ngoài Tử Cung, Viêm Phần Phụ",
                    "pain_pattern": "Đau nhói hạ vị lan sang vùng bẹn đùi một bên.",
                    "neuro_mechanism": "Đám rối hạ vị và thần kinh tạng vùng chậu.",
                    "differential": "Phụ nữ trong độ tuổi sinh đẻ, trễ kinh, ra máu âm đạo bất thường, siêu âm đầu dò âm đạo phát hiện khối bất thường vùng chậu.",
                    "figures": []
                }
            ],
            "drug_induced": [
                "1. Corticosteroid: Thủ phạm hàng đầu gây Hoại tử vô mạch chỏm xương đùi (AVN). Cơ chế: Corticoid làm phì đại tế bào mỡ trong tủy xương, tăng áp lực nội tủy và gây tắc nghẽn vi mạch nuôi chỏm.",
                "2. Thuốc chống đông máu (Warfarin, Heparin, NOACs): Nguy cơ biến chứng tụ máu lớn tự phát trong cơ thắt lưng chậu (Iliopsoas Hematoma), gây khối căng đau vùng bẹn chèn ép dây thần kinh đùi gây liệt duỗi gối.",
                "3. Bisphosphonates uống kéo dài > 5 năm: Tăng nguy cơ gãy xương đùi không điển hình (Atypical Subtrochanteric Femoral Fracture) xuất phát từ một vết nứt vi thể ở vỏ xương ngoài dưới mấu chuyển."
            ]
        },

        # TAB 4: Nghiệm Pháp Khám Thực Thể Đặc Hiệu
        "tab4_provocative_tests": {
            "provocative_tests": [
                {
                    "name": "Nghiệm Pháp FADIR (Flexion, Adduction, Internal Rotation Test)",
                    "patient_position": "Bệnh nhân nằm ngửa hoàn toàn, hai chân duỗi thẳng.",
                    "examiner_action": "Bác sĩ nâng chân bên đau gập khớp háng 90°, khép háng qua đường giữa và từ từ xoay trong khớp háng thụ động.",
                    "end_feel": "Cản trở cơ học nén ép gờ xương cổ đùi vào sụn viền ổ cối.",
                    "sensitivity": "99%",
                    "specificity": "10%",
                    "lr_positive": "1.1",
                    "lr_negative": "0.10",
                    "diagnostic_role": "SnNOut tuyệt đối (Loại trừ tổn thương nội khớp háng khi âm tính)",
                    "clinical_role": "Dương tính khi tái hiện cơn đau nhói sâu trong vùng bẹn do cổ xương đùi va chạm trực tiếp vào sụn viền ổ cối trước trên (chẩn đoán Xung đột FAI và Rách sụn viền ổ cối). Nếu FADIR âm tính, khả năng cao loại trừ bệnh lý nội khớp háng.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch07_hip_pain/p330_img1.jpeg", "exam", "Fig. 7.18: Nghiệm pháp FADIR kiểm tra xung đột ổ cối - đùi trước")
                    ]
                },
                {
                    "name": "Nghiệm Pháp FABER / Patrick (Flexion, Abduction, External Rotation Test)",
                    "patient_position": "Bệnh nhân nằm ngửa, đặt mắt cá chân bên đau lên trên đầu gối chân đối diện (tư thế bắt chéo chân hình chữ số 4).",
                    "examiner_action": "Bác sĩ một tay đặt cố định lên mào chậu bên đối diện để giữ vững khung chậu. Bàn tay kia của bác sĩ đặt lên mặt trong đầu gối bên đau và nhẹ nhàng ấn ép đầu gối xuống mặt bàn khám.",
                    "end_feel": "Sức căng bao khớp trước háng và khớp cùng chậu.",
                    "sensitivity": "89%",
                    "specificity": "56%",
                    "lr_positive": "2.0",
                    "lr_negative": "0.20",
                    "diagnostic_role": "Phân biệt đau do Khớp Háng vs Khớp Cùng Chậu",
                    "clinical_role": "• Nếu đau xuất hiện ở vùng BẸN TRƯỚC -> Tổn thương khớp háng (Thoái hóa khớp háng, co thắt cơ thắt lưng chậu);\n• Nếu đau xuất hiện ở vùng MÔNG SAU -> Tổn thương Khớp cùng chậu (Sacroiliac joint dysfunction).",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch07_hip_pain/p326_img1.jpeg", "exam", "Fig. 7.12: Nghiệm pháp FABER / Patrick kiểm tra khớp háng và cùng chậu")
                    ]
                },
                {
                    "name": "Nghiệm Pháp Ép Xoay Khớp Háng Hip Scour (Hip Scouring / Grind Test)",
                    "patient_position": "Bệnh nhân nằm ngửa, háng gập tối đa.",
                    "examiner_action": "Bác sĩ đứng bên cạnh, hai tay ôm lấy đầu gối bệnh nhân, tạo một lực nén ép dọc trục xương đùi vào trong ổ cối, đồng thời xoay tròn khớp háng theo hình nón qua các vị trí gập - khép - xoay trong và gập - giạng - xoay ngoài.",
                    "end_feel": "Cảm giác lạo xạo cọ xát sụn khớp (Crepitus).",
                    "sensitivity": "62%",
                    "specificity": "75%",
                    "lr_positive": "2.5",
                    "lr_negative": "0.51",
                    "diagnostic_role": "Đánh giá tổn thương sụn khớp háng và sụn viền",
                    "clinical_role": "Dương tính khi xuất hiện cảm giác lục cục lạo xạo, kẹt khớp hoặc bệnh nhân thấy đau chói sâu trong ổ cối.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch07_hip_pain/p330_img1.jpeg", "exam", "Fig. 7.18: Nghiệm pháp ép xoay chỏm khớp háng Hip Scouring Test")
                    ]
                },
                {
                    "name": "Nghiệm Pháp Co Rút Cơ Thắt Lưng Chậu Thomas (Thomas Test)",
                    "patient_position": "Bệnh nhân nằm ngửa sát mép cuối bàn khám, hai chân buông thõng.",
                    "examiner_action": "Bác sĩ hướng dẫn bệnh nhân dùng hai tay ôm chặt một đầu gối bên lành gập sát vào ngực để làm phẳng hoàn toàn đoạn cong thắt lưng. Bác sĩ quan sát đùi và cẳng chân bên đối diện (chân thử nghiệm).",
                    "end_feel": "Sức căng co rút cơ thắt lưng chậu.",
                    "sensitivity": "89%",
                    "specificity": "92%",
                    "lr_positive": "11.1",
                    "lr_negative": "0.12",
                    "diagnostic_role": "Tiêu chuẩn vàng đánh giá co rút cơ thắt lưng chậu (Iliopsoas Tightness)",
                    "clinical_role": "Bình thường đùi chân thử nghiệm phải nằm áp sát thẳng trên mặt bàn khám. Dương tính khi đùi bị nhấc bổng lên khỏi mặt bàn (co rút cơ thắt lưng chậu); nếu cẳng chân bị duỗi thẳng ra -> co rút cơ thẳng đùi (Rectus femoris).",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch07_hip_pain/p326_img1.jpeg", "exam", "Fig. 7.12: Nghiệm pháp Thomas Test đánh giá độ co rút cơ thắt lưng chậu")
                    ]
                },
                {
                    "name": "Nghiệm Pháp Ober Đánh Giá Dải Chậu Chày (Ober's Test for ITB Tightness)",
                    "patient_position": "Bệnh nhân nằm nghiêng bên lành, lưng thẳng sát mép bàn, háng gối chân dưới gập 90° để ổn định khung chậu.",
                    "examiner_action": "Bác sĩ đứng phía sau, một tay giữ cố định mào chậu. Tay kia cầm cẳng chân bên trên gập gối 90°, giạng và duỗi khớp háng ra sau để dải chậu chày trượt qua mấu chuyển lớn, sau đó từ từ thả lỏng cho chân hạ khép tự nhiên xuống bàn.",
                    "end_feel": "Sức căng mạc đùi và dải chậu chày.",
                    "sensitivity": "82%",
                    "specificity": "88%",
                    "lr_positive": "6.8",
                    "lr_negative": "0.20",
                    "diagnostic_role": "Đánh giá dải chậu chày co rút trong Hội chứng đau mấu chuyển lớn (M-04 Audit Rule)",
                    "clinical_role": "Bình thường chân phải hạ khép xuống dưới mức mặt bàn khám. Dương tính khi đùi vẫn nằm lơ lửng trên cao không thể rơi xuống (do dải chậu chày và cơ căng mạc đùi TFL bị co cứng ngắn lại).",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch07_hip_pain/p327_img2.jpeg", "exam", "Fig. 7.14: Nghiệm pháp Ober's Test đánh giá co rút dải chậu chày (M-04 Audit Rule)")
                    ]
                },
                {
                    "name": "Nghiệm Pháp Stinchfield Đề Kháng Nâng Thẳng Chân (Stinchfield's Test)",
                    "patient_position": "Bệnh nhân nằm ngửa, hai chân duỗi thẳng.",
                    "examiner_action": "Bệnh nhân chủ động nâng thẳng chân lên cao 30° trong tư thế gối duỗi thẳng. Bác sĩ đặt bàn tay lên cổ chân bệnh nhân và ấn xuống dưới tạo lực đề kháng chống lại động tác nâng chân.",
                    "end_feel": "Sức co cơ háng đẳng trường.",
                    "sensitivity": "80%",
                    "specificity": "85%",
                    "lr_positive": "5.3",
                    "lr_negative": "0.24",
                    "diagnostic_role": "Phát hiện bệnh lý nội khớp háng hoặc gãy xương đùi (M-04 Audit Rule)",
                    "clinical_role": "Dương tính khi bệnh nhân thấy đau chói dữ dội trong vùng bẹn do lực nén ép chỏm xương đùi vào ổ cối tăng lên gấp 3 lần trọng lượng cơ thể.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch07_hip_pain/p331_img2.jpeg", "exam", "Fig. 7.20: Nghiệm pháp Stinchfield Test đề kháng nâng thẳng chân (M-04 Audit Rule)")
                    ]
                },
                {
                    "name": "Nghiệm Pháp Telescoping Khám Trật Khớp Háng (Hip Telescoping Test)",
                    "patient_position": "Bệnh nhân nằm ngửa, khớp háng và khớp gối gập 90°.",
                    "examiner_action": "Bác sĩ một tay đặt lên mào chậu cố định xương chậu. Tay kia cầm đầu gối bệnh nhân đẩy thẳng trục xương đùi xuống dưới rồi kéo nhấc thẳng trục xương đùi lên trên.",
                    "end_feel": "Độ trượt dọc trục khớp háng.",
                    "sensitivity": "70%",
                    "specificity": "95%",
                    "lr_positive": "14.0",
                    "lr_negative": "0.32",
                    "diagnostic_role": "Đánh giá mất vững khớp háng và trật khớp háng bẩm sinh",
                    "clinical_role": "Dương tính khi bác sĩ cảm nhận thấy xương đùi thụt vào và rút ra như một ống kính thiên văn (Telescoping motion) kèm tiếng lọc xọc.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch07_hip_pain/p331_img1.jpeg", "exam", "Fig. 7.19: Nghiệm pháp thụt đẩy ống lồng Hip Telescoping Test")
                    ]
                }
            ],
            "somatic_dysfunctions": [
                {
                    "dysfunction": "Chỏm Xương Đùi Trượt Ra Sau Ngoài (Posterolateral Femoral Head Translation Fault - C-02 Audit Rule)",
                    "biomechanics": "Chỏm xương đùi bị trượt kẹt lệch tâm ra phía sau ngoài trong ổ cối do cơ xoay ngoài co cứng và bao khớp sau dưới bị căng chặt. Khi gập háng, chỏm không thể trượt vào trong xuống dưới, dẫn tới va quẹt gờ xương vào sụn viền ổ cối trước trên.",
                    "assessment_correction": "Bác sĩ khám độ di động trượt chỏm thụ động; Kỹ thuật nắn trượt chỏm xương đùi ra trước vào trong (Anteromedial femoral head glide mobilization).",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch07_hip_pain/p324_img1.jpeg", "somatic", "Fig. 7.9: Femoral head posterolateral glide", "🧬 Cơ sinh học & Diện khớp: Hướng trượt chỏm xương đùi ra sau ngoài", "7.9")
                    ]
                },
                {
                    "dysfunction": "Rối Loạn Chuỗi Phát Lực Giạng Háng (Hip Abduction Firing Pattern Dysfunction)",
                    "biomechanics": "Trong cử động giạng háng bình thường, cơ mông nhỡ (Gluteus medius) phải kích hoạt đầu tiên. Khi có rối loạn, cơ vuông thắt lưng (Quadratus lumborum) hoặc cơ căng mạc đùi (TFL) kích hoạt trước, gây nhấc xếch khung chậu và quá tải khớp háng.",
                    "assessment_correction": "Quan sát trình tự kích hoạt cơ khi bệnh nhân nằm nghiêng giạng chân; Tập tái giáo dục thần kinh cơ kích hoạt cơ mông nhỡ cô lập.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch07_hip_pain/p325_img1.jpeg", "somatic", "Fig. 7.10: Kiểm tra chuỗi phát lực giạng khớp háng Hip Abduction Firing Pattern"),
                        enrich_fig("assets/deepak_images/ch07_hip_pain/p327_img1.jpeg", "somatic", "Fig. 7.13: Đánh giá cơ lực cơ mông nhỡ Gluteus Medius")
                    ]
                }
            ]
        },

        # TAB 5: Ma Trận Chẩn Đoán Phân Biệt & Ca Bệnh Khó
        "tab5_differential_matrix": {
            "matrix": [
                {
                    "condition": "Hoại Tử Vô Mạch Chỏm Xương Đùi (Avascular Necrosis - AVN)",
                    "onset": "Người trẻ và trung niên dùng corticoid/rượu, đau bẹn âm ỉ tăng dần",
                    "aggravating": "Tăng khi đứng chịu lực, đi lại; Giai đoạn muộn đau cả ban đêm và khi nghỉ",
                    "confirmatory_test": "FADIR (+), Stinchfield (+), Giảm xoay trong háng sớm",
                    "gold_standard": "MRI khớp háng: Dấu hiệu đường viền đôi (Double-line sign) trên xung T2",
                    "key_differentiator": "Tiền sử dùng corticoid/rượu; X-quang giai đoạn sớm hoàn toàn bình thường, chỉ MRI mới phát hiện được",
                    "web1_procedure_id": "hip-intraarticular"
                },
                {
                    "condition": "Thoái hóa khớp háng (Hip Osteoarthritis / Coxarthrosis)",
                    "onset": "Người cao tuổi > 55 tuổi, đau cứng khớp háng buổi sáng < 30 phút",
                    "aggravating": "Tăng khi bắt đầu đi lại (Khởi động đau), giảm sau khi vận động nhẹ một lúc",
                    "confirmatory_test": "Mô hình bao khớp: Giới hạn xoay trong < 15° và gập háng < 115°",
                    "gold_standard": "X-quang khớp háng: Hẹp khe khớp trên ngoài, gai xương ổ cối, đặc xương dưới sụn",
                    "key_differentiator": "Tuổi cao, tiến triển mạn tính nhiều năm, X-quang thấy rõ hẹp khe khớp",
                    "web1_procedure_id": "hip-intraarticular"
                },
                {
                    "condition": "Hội Chứng Đau Mấu Chuyển Lớn (Greater Trochanteric Pain Syndrome - GTPS)",
                    "onset": "Phụ nữ trung niên, đau nhức mặt ngoài khớp háng lan xuống ngoài đùi",
                    "aggravating": "Tăng khi nằm nghiêng đè lên bên đau, đứng một chân, bước lên dốc",
                    "confirmatory_test": "Ấn đau chói mấu chuyển lớn, Ober Test (+), Đứng một chân 30 giây đau",
                    "gold_standard": "Siêu âm khớp háng: Viêm bao hoạt dịch mấu chuyển lớn, rách bán phần gân cơ mông nhỡ",
                    "key_differentiator": "Đau hoàn toàn ở MẶT NGOÀI, vận động nội khớp háng (FADIR, Scour) không đau",
                    "web1_procedure_id": "trochanteric-bursa"
                },
                {
                    "condition": "Dị Cảm Đau Đùi Ngoài (Meralgia Paresthetica / Chèn Ép Thần Kinh LFCN)",
                    "onset": "Người béo phì, mang thắt lưng chặt, cảnh sát đeo bao súng, phụ nữ có thai",
                    "aggravating": "Tăng khi đứng thẳng lâu hoặc đi bộ nhiều; Giảm khi ngồi gập háng",
                    "confirmatory_test": "Gõ Tinel dưới ASIS (+), Ấn điểm thoát LFCN gây tê rát đùi",
                    "gold_standard": "Điện cơ EMG / Siêu âm thần kinh: Dây thần kinh bì đùi ngoài bị sưng nề dưới dây chằng bẹn",
                    "key_differentiator": "CHỈ CÓ RỐI LOẠN CẢM GIÁC NÔNG (bỏng rát, tê bì da mặt trước ngoài đùi); Vận động và phản xạ gân xương hoàn toàn bình thường",
                    "web1_procedure_id": "lfcn-block"
                },
                {
                    "condition": "Xung Đột Khớp Háng & Rách Sụn Viền (FAI & Labral Tear)",
                    "onset": "Vận động viên trẻ, người tập yoga/võ thuật, đau nhói bẹn khi gập xoay háng",
                    "aggravating": "Tăng khi ngồi xổm sâu, ngồi ghế xe hơi thấp kéo dài, vặn háng",
                    "confirmatory_test": "FADIR Test (+ rất nhạy), Dấu hiệu chữ C (C-Sign) (+)",
                    "gold_standard": "Chụp cộng hưởng từ cản từ nội khớp (MR Arthrogram - MRA)",
                    "key_differentiator": "Cảm giác kẹt vướng hoặc lục cục sâu trong khớp háng, X-quang thấy gồ xương Cam hoặc Pincer",
                    "web1_procedure_id": "hip-intraarticular"
                }
            ],
            "complex_cases_reasoning": [
                {
                    "case_title": "Biện Luận Ca Khó: Phân Biệt Đau Khớp Háng Nội Khớp vs Thoát Vị Đĩa Đệm L2-L3 vs Dị Cảm Đau Đùi Ngoài",
                    "clinical_dilemma": "Bệnh nhân nam 48 tuổi làm việc văn phòng than phiền đau buốt vùng bẹn lan xuống mặt trước ngoài đùi phải 2 tháng. Đi lại nhiều thấy đau tăng, ngồi ghế lâu thấy tê rát mặt ngoài đùi. Bác sĩ cần phân định đau do Khớp háng, Rễ thần kinh thắt lưng cao L2-L3 hay Thần kinh bì đùi ngoài (LFCN).",
                    "differential_rationale": "• Các bước phân định lâm sàng của Deepak Sebastian:\n1. Khám cảm giác nông: Dùng tăm bông quẹt nhẹ da mặt trước ngoài đùi. Nếu bệnh nhân thấy tê rát bỏng dữ dội (Hyperesthesia) nhưng khi khám cơ lực cơ tứ đầu đùi hoàn toàn khỏe và phản xạ bánh chè bình thường -> Hướng tới Meralgia Paresthetica.\n2. Khám rễ thần kinh: Làm nghiệm pháp Căng dây thần kinh đùi nằm nghiêng (Femoral Nerve Stretch Test). Nếu gập gối duỗi háng làm tái hiện cơn đau buốt lan từ thắt lưng xuống mặt trước đùi kèm giảm phản xạ gân bánh chè -> Tổn thương rễ thần kinh L2, L3 hoặc L4.\n3. Khám nội khớp háng: Làm nghiệm pháp FADIR và Hip Scour. Nếu xoay trong khớp háng thụ động tái hiện cơn đau sâu trong bẹn kèm hạn chế biên độ xoay trong -> Bệnh lý thực thể nội khớp háng.",
                    "clinical_pearl": "Nếu còn nghi ngờ giữa đau khớp háng và đau cột sống thắt lưng (Hội chứng Hip-Spine Syndrome), thực hiện nghiệm pháp Phong bế chẩn đoán nội khớp háng (Diagnostic Intraarticular Hip Block) dưới hướng dẫn siêu âm với 4 ml Lidocaine 1%. Nếu bệnh nhân hết đau ngay khi đi lại, khẳng định nguồn gốc đau là từ khớp háng."
                }
            ]
        },

        # TAB 6: Phác Đồ Can Thiệp Siêu Âm Web 1
        "tab6_intervention_linkage": {
            "intervention_guidelines": "Khớp háng nằm rất sâu và được che phủ bởi lớp cơ dày cùng bó mạch thần kinh đùi lớn. Tiêm 'mù' dựa vào mốc giải phẫu có tỷ lệ trượt nội khớp tới 30-40% và nguy cơ đâm vào bó mạch đùi. Siêu âm can thiệp khớp háng ngả trước (Anterior approach) sử dụng đầu dò Convex hoặc Linear sâu cho phép nhìn thấy rõ cổ xương đùi, chỏm xương đùi, bao khớp và đường đi của kim, đảm bảo an toàn tuyệt đối.",
            "recommended_web1_procedures": [
                {
                    "id": "hip-intraarticular",
                    "nameVi": "Tiêm khớp háng nội khớp ngả trước dưới hướng dẫn siêu âm (Anterior Approach)",
                    "role": "Tiêu chuẩn vàng điều trị thoái hóa khớp háng, viêm màng hoạt dịch và nong bao khớp",
                    "indication": "Thoái hóa khớp háng mức độ vừa - nặng, đau khớp háng nội khớp FADIR (+) kháng thuốc"
                },
                {
                    "id": "trochanteric-bursa",
                    "nameVi": "Tiêm bao hoạt dịch mấu chuyển lớn xương đùi (Trochanteric Bursa Injection)",
                    "role": "Điều trị Hội chứng đau mấu chuyển lớn (GTPS) và viêm gân cơ mông nhỡ",
                    "indication": "Đau nhức mặt ngoài háng dữ dội khi nằm nghiêng đè lên mấu chuyển, ấn chói mấu chuyển"
                },
                {
                    "id": "iliopsoas-bursa",
                    "nameVi": "Tiêm bao hoạt dịch thắt lưng chậu dưới hướng dẫn siêu âm",
                    "role": "Giải áp viêm bao hoạt dịch thắt lưng chậu gây đau bẹn sâu trước khớp háng",
                    "indication": "Đau bẹn trước, Thomas test (+), siêu âm thấy tụ dịch bao hoạt dịch psoas"
                },
                {
                    "id": "lfcn-block",
                    "nameVi": "Phong bế thần kinh bì đùi ngoài dưới siêu âm (LFCN Block)",
                    "role": "Cắt cơn đau bỏng rát trong Dị cảm đau đùi ngoài (Meralgia Paresthetica)",
                    "indication": "Tê buốt bỏng rát mặt ngoài đùi, gõ Tinel dưới ASIS (+), thất bại với điều trị nội khoa"
                }
            ]
        },

        # Figures aggregate
        "figures": [
            enrich_fig("assets/deepak_images/ch07_hip_pain/p304_img1.jpeg", "anatomy", "Fig. 7.1: Khớp háng nhìn trước"),
            enrich_fig("assets/deepak_images/ch07_hip_pain/p304_img1.jpeg", "anatomy", "Fig. 7.2: Mạch máu nuôi chỏm xương đùi"),
            enrich_fig("assets/deepak_images/ch07_hip_pain/p314_img1.jpeg", "redflag", "Fig. 7.3: Thoái hóa khớp háng nặng"),
            enrich_fig("assets/deepak_images/ch07_hip_pain/p315_img1.jpeg", "anatomy", "Fig. 7.4: Bao hoạt dịch mấu chuyển lớn"),
            enrich_fig("assets/deepak_images/ch07_hip_pain/p316_img1.jpeg", "redflag", "Fig. 7.5: Xung đột háng Dạng Cam"),
            enrich_fig("assets/deepak_images/ch07_hip_pain/p317_img1.jpeg", "redflag", "Fig. 7.6: Xung đột háng Dạng Pincer"),
            enrich_fig("assets/deepak_images/ch07_hip_pain/p320_img1.jpeg", "anatomy", "Fig. 7.7: Giải phẫu đùi trước"),
            enrich_fig("assets/deepak_images/ch07_hip_pain/p322_img1.jpeg", "anatomy", "Fig. 7.8: Chèn ép thần kinh bì đùi ngoài LFCN"),
            enrich_fig("assets/deepak_images/ch07_hip_pain/p324_img1.jpeg", "somatic", "Fig. 7.9: Femoral head posterolateral glide", "🧬 Cơ sinh học & Diện khớp: Hướng trượt chỏm xương đùi ra sau ngoài", "7.9"),
            enrich_fig("assets/deepak_images/ch07_hip_pain/p325_img1.jpeg", "somatic", "Fig. 7.10: Kiểm tra chuỗi phát lực giạng háng"),
            enrich_fig("assets/deepak_images/ch07_hip_pain/p326_img1.jpeg", "exam", "Fig. 7.12: Nghiệm pháp Thomas Test"),
            enrich_fig("assets/deepak_images/ch07_hip_pain/p327_img1.jpeg", "somatic", "Fig. 7.13: Đánh giá cơ lực cơ mông nhỡ"),
            enrich_fig("assets/deepak_images/ch07_hip_pain/p327_img2.jpeg", "exam", "Fig. 7.14: Nghiệm pháp Ober's Test (M-04 Audit Rule)"),
            enrich_fig("assets/deepak_images/ch07_hip_pain/p328_img1.jpeg", "anatomy", "Fig. 7.15: Sờ nắn bao hoạt dịch mấu chuyển lớn"),
            enrich_fig("assets/deepak_images/ch07_hip_pain/p329_img1.jpeg", "anatomy", "Fig. 7.16: Sờ nắn bao hoạt dịch ụ ngồi"),
            enrich_fig("assets/deepak_images/ch07_hip_pain/p330_img1.jpeg", "exam", "Fig. 7.18: Nghiệm pháp Hip Scouring Test"),
            enrich_fig("assets/deepak_images/ch07_hip_pain/p331_img1.jpeg", "exam", "Fig. 7.19: Nghiệm pháp Hip Telescoping Test"),
            enrich_fig("assets/deepak_images/ch07_hip_pain/p331_img2.jpeg", "exam", "Fig. 7.20: Nghiệm pháp Stinchfield Test (M-04 Audit Rule)")
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
