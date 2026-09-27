# -*- coding: utf-8 -*-
from . import enrich_fig

def get_module():
    mod = {
        "id": "elbow-wrist-hand-pain",
        "chapter": 10,
        "region": "upper",
        "region_vi": "Khuỷu Tay, Cổ Tay & Bàn Tay",
        "icon": "🖐️",
        "title": "Elbow, Wrist, Hand, Peripheral Nerve Entrapments & Upper Extremity Biomechanics",
        "title_vi": "🖐️ Đau Khuỷu Tay, Cổ Tay & Bàn Tay",
        "chief_complaint": "Phàn nàn chính: Đau buốt lồi cầu ngoài khuỷu tay khi cầm vợt tennis hoặc nâng ấm nước, đau rát mặt trong khuỷu lan xuống ngón út và áp út, tê bì châm chích 3 ngón rưỡi bàn tay khi đi xe máy hoặc thức giấc nửa đêm phải vẩy tay (Flick sign), đau buốt gốc ngón tay cái khi ẵm bế con hoặc vắt khăn, ngón tay bị kẹt khục không duỗi ra được khi thức dậy.",
        "author": "GS. Deepak Sebastian (Chuyên khảo Chương 10, pp. 467-512 - 46 Trang Sách)",
        "summary": "Mô hình tiếp cận chuyên khảo chi trên ngoại biên (Elbow-Wrist-Hand Master): Cẳng tay và bàn tay là cơ quan khéo léo với hệ thống thần kinh ngoại biên dày đặc đi qua các đường hầm hẹp (Ống cổ tay, Kênh Guyon, Rãnh thần kinh trụ khuỷu, Đường hầm xương quay). Rà soát cờ đỏ cấp cứu: Gãy kín xương thuyền cổ tay (nguy cơ hoại tử vô mạch tiêu chỏm), Bệnh hoại tử vô mạch xương nguyệt Kienböck, Viêm bao hoạt dịch gân gấp ngón tay nhiễm trùng sinh mủ (4 Dấu hiệu Kanavel), Hội chứng thiếu máu Volkmann. Phân tích cơ học tinh vi: Cơ chế trượt sấp ngửa đài quay trong dây chằng vòng, phức hợp sụn sợi tam giác TFCC giảm chấn cổ tay, động học hàng xương cổ tay thuyền-nguyệt-tháp, chuỗi phát lực duỗi cổ tay của cơ ECRB.",

        # TAB 1: Giải phẫu, Cơ sinh học & Sờ nắn
        "tab1_anatomy_palpation": {
            "arthrokinematics": {
                "joint_system": "Phức hợp khuỷu tay gồm 3 khớp chung một bao khớp: Khớp cánh tay trụ (Humeroulnar - bản lề thuần túy), Khớp cánh tay quay (Humeroradial - chỏm cầu phẳng) và Khớp quay trụ trên (Proximal radioulnar - khớp trục sấp ngửa).\n• Khớp Cổ Tay & Bàn Tay: Khớp quay cổ tay (Radiocarpal joint - diện lõm đầu dưới xương quay tiếp khớp với xương thuyền và xương nguyệt; xương tháp tiếp khớp với đĩa sụn TFCC); Khớp giữa các xương cổ tay (Midcarpal joint); Khớp quay trụ dưới (Distal radioulnar joint - DRUJ).\n• Phức hợp sụn sợi tam giác TFCC (Triangular Fibrocartilage Complex): Cấu trúc sụn chêm của cổ tay, là điểm tựa chịu lực chính (20% lực nén cổ tay) và giữ vững then chốt cho khớp quay trụ dưới DRUJ.\n• Đường hầm thần kinh ngoại biên: Ống cổ tay (Carpal tunnel - giới hạn bởi mạc giữ gân gấp chứa 9 gân gấp và Thần kinh giữa); Kênh Guyon (nằm giữa xương đậu và móc xương móc chứa Thần kinh và Động mạch trụ); Rãnh thần kinh trụ sau mỏm trên lồi cầu trong (Cubital tunnel); Đường hầm xương quay (Radial tunnel - nhánh gian cốt sau PIN chui qua cung Frohse của cơ ngửa).",
                "roll_gliding": "• Khớp Cánh Tay Trụ (Humeroulnar Joint): Hõm Sigma lõm trượt trên ròng rọc lồi cầu cánh tay lồi (Concave on Convex). Gập khuỷu: Mỏm vẹt xương trụ lăn và trượt ra trước (Glide anteriorly); Duỗi khuỷu: Mỏm khuỷu lăn và trượt ra sau (Glide posteriorly).\n• Khớp Quay Trụ Trên (Proximal Radioulnar Joint): Vành đài quay lồi di chuyển trong khuyết quay lõm xương trụ (Convex on Concave). Sấp cẳng tay (Pronation): Đài quay lăn ra trước, trượt ra sau (Roll anterior, glide posterior); Ngửa cẳng tay (Supination): Đài quay lăn ra sau, trượt ra trước (Roll posterior, glide anterior).\n• Khớp Quay Cổ Tay (Radiocarpal Joint): Hàng xương cổ tay gần lồi di chuyển trên diện khớp dưới xương quay và đĩa TFCC lõm (Convex on Concave). Gập cổ tay: Các xương cổ tay trượt ra sau (Glide posteriorly); Duỗi cổ tay: Các xương cổ tay trượt ra trước (Glide anteriorly); Nghiêng quay (Radial deviation): Các xương cổ tay trượt sang phía trụ (Glide ulnarly); Nghiêng trụ (Ulnar deviation): Các xương cổ tay trượt sang phía quay (Glide radially).",
                "capsular_pattern": "• Khớp khuỷu tay: Hạn chế gập nhiều hơn hạn chế duỗi (Flexion limitation > Extension limitation, tỷ lệ khoảng 30° gập / 10° duỗi).\n• Khớp cổ tay: Hạn chế gập và duỗi bằng nhau (Flexion = Extension limitation), hạn chế nhẹ nghiêng quay và nghiêng trụ.",
                "loose_packed_position": "• Khớp khuỷu tay: Gập khuỷu 70°, cẳng tay ngửa nhẹ 10°.\n• Khớp quay cổ tay: Bán gập nhẹ với độ lệch nhẹ về phía trụ.",
                "close_packed_position": "• Khớp cánh tay trụ: Duỗi thẳng tối đa và cẳng tay ngửa hoàn toàn.\n• Khớp quay cổ tay: Duỗi cổ tay tối đa kèm nghiêng quay tối đa.",
                "force_couples_biomechanics": "• Cơ chế quá tải gân duỗi lồi cầu ngoài (Tennis Elbow Biomechanics): Cơ duỗi cổ tay quay ngắn (Extensor Carpi Radialis Brevis - ECRB) có nguyên ủy bám vào bờ trước lồi cầu ngoài. Khi duỗi khuỷu hoàn toàn, gân ECRB bị căng cọ xát trực tiếp qua rìa ngoài chỏm con lồi cầu đùi, tạo vi chấn thương rách vi thể và thoái hóa nhầy mô gân (Angiofibroblastic hyperplasia).\n• Cân bằng lực nắm bàn tay: Để có lực nắm ngón tay mạnh nhất, cổ tay bắt buộc phải duỗi từ 20° đến 30°. Khi cổ tay bị gập, các gân gấp ngón tay bị chùng ngắn cơ học (Active insufficiency), lực nắm bàn tay giảm tới 75%.",
                "figures": [
                    enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p467_img1.jpeg", "anatomy", "Fig. 10.1: Giải phẫu khớp khuỷu mặt trong và rãnh thần kinh trụ"),
                    enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p468_img1.png", "anatomy", "Fig. 10.2: Giải phẫu khớp khuỷu mặt ngoài và diện tiếp khớp chỏm quay"),
                    enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p467_img1.jpeg", "anatomy", "Fig. 10.4: Giải phẫu các đường gân gấp và thần kinh gan tay cổ tay"),
                    enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p487_img1.jpeg", "anatomy", "Fig. 10.5: Điểm bám gân gập chung lồi cầu trong Common Flexor Origin"),
                    enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p488_img1.jpeg", "anatomy", "Fig. 10.7: Giải phẫu đường hầm thần kinh trụ rãnh khuỷu Cubital Tunnel"),
                    enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p489_img1.jpeg", "anatomy", "Fig. 10.8: Phức hợp sụn sợi tam giác TFCC cổ tay (Mũi tên chỉ vị trí sụn)"),
                    enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p507_img2.jpeg", "anatomy", "Fig. 10.12: Điểm bám gân duỗi chung lồi cầu ngoài Common Extensor Origin"),
                    enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p494_img1.jpeg", "anatomy", "Fig. 10.13: Đường hầm thần kinh quay Radial Tunnel và thần kinh PIN"),
                    enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p499_img1.jpeg", "anatomy", "Fig. 10.16: Kênh Guyon chứa thần kinh trụ và động mạch trụ"),
                    enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p500_img1.jpeg", "anatomy", "Fig. 10.17: Cấu trúc ống cổ tay Carpal Tunnel và thần kinh giữa")
                ]
            },
            "palpation_steps": [
                {
                    "landmark": "1. Điểm Bám Gân Duỗi Chung & Lồi Cầu Ngoài (Common Extensor Origin & Lateral Epicondyle)",
                    "patient_position": "Bệnh nhân ngồi, khuỷu gập 90°, cẳng tay sấp đặt trên bàn khám.",
                    "technique": "Bác sĩ dùng đầu ngón tay cái sờ mỏm trên lồi cầu ngoài xương cánh tay. Trượt nhẹ ngón tay ra trước 1–2 mm ngay tại diện trước dưới nơi bám tận của gân cơ duỗi cổ tay quay ngắn (ECRB). Ấn sâu tìm điểm đau chói.",
                    "clinical_pearl": "Ấn đau chói chính xác tại diện trước ngoài của lồi cầu ngoài khẳng định Viêm lồi cầu ngoài (Lateral Epicondylalgia / Tennis Elbow). Lưu ý: Nếu điểm đau nằm thấp hơn 3–4 cm dọc theo cơ ngửa, cần nghĩ tới Hội chứng đường hầm xương quay (chèn ép thần kinh PIN).",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p507_img2.jpeg", "anatomy", "Fig. 10.12: Vị trí sờ nắn điểm bám gân duỗi chung lồi cầu ngoài")
                    ]
                },
                {
                    "landmark": "2. Điểm Bám Gân Gập Chung Lồi Cầu Trong & Rãnh Thần Kinh Trụ (Common Flexor Origin & Cubital Tunnel)",
                    "patient_position": "Bệnh nhân ngồi, khuỷu gập nhẹ, cẳng tay ngửa.",
                    "technique": "Sờ mỏm trên lồi cầu trong xương cánh tay và điểm bám gân gập chung (CFO). Sau đó di chuyển ngón tay ra phía sau vào rãnh nằm giữa mỏm trên lồi cầu trong và mỏm khuỷu (Cubital tunnel) để sờ thân dây thần kinh trụ tròn lăn dưới tay.",
                    "clinical_pearl": "Ấn đau chói tại lồi cầu trong khẳng định Golfer's Elbow. Ấn hoặc gõ nhẹ lên thần kinh trụ trong rãnh gây tê buốt bắn xuống ngón út khẳng định Hội chứng đường hầm thần kinh trụ khuỷu tay (Cubital Tunnel Syndrome).",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p487_img1.jpeg", "anatomy", "Fig. 10.5: Sờ nắn gân gập chung lồi cầu trong Common Flexor Origin"),
                        enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p488_img1.jpeg", "anatomy", "Fig. 10.7: Sờ nắn và gõ kiểm tra thần kinh trụ tại rãnh khuỷu")
                    ]
                },
                {
                    "landmark": "3. Bao Hoạt Dịch Mỏm Khuỷu & Chỏm Xương Quay (Olecranon Bursa & Radial Head)",
                    "patient_position": "Khuỷu tay gập duỗi thụ động liên tục.",
                    "technique": "Sờ đỉnh mỏm khuỷu kiểm tra độ dày hoặc tụ dịch bao hoạt dịch mỏm khuỷu. Đặt ngón tay ngay dưới lồi cầu ngoài khoảng 1 cm vào khe khớp cánh tay quay, xoay sấp ngửa cẳng tay thụ động để cảm nhận chỏm xương quay tròn xoay tròn đều đặn dưới ngón tay.",
                    "clinical_pearl": "Bao hoạt dịch mỏm khuỷu sưng to như quả trứng gà (Olecranon bursitis / Student's elbow). Chỏm quay ấn đau chói kèm hạn chế sấp ngửa sau ngã chống tay báo hiệu Gãy kín chỏm xương quay (Mason type I).",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p506_img1.jpeg", "anatomy", "Fig. 10.9: Vị trí sờ nắn bao hoạt dịch mỏm khuỷu Olecranon Bursa")
                    ]
                },
                {
                    "landmark": "4. Hõm Lào Giải Phẫu & Xương Thuyền (Anatomical Snuffbox & Scaphoid Bone)",
                    "patient_position": "Bệnh nhân giạng và duỗi tối đa ngón tay cái để làm nổi rõ hai bờ hõm lào.",
                    "technique": "Bác sĩ xác định bờ trước (Gân cơ giạng dài và gân cơ duỗi ngắn ngón cái) và bờ sau (Gân cơ duỗi dài ngón cái). Ấn đầu ngón tay thẳng góc vào đáy hõm lào giải phẫu (chính là thân xương thuyền).",
                    "clinical_pearl": "Ấn đau chói dữ dội đáy hõm lào sau ngã chống tay BẮT BUỘC phải xử trí như GÃY XƯƠNG THUYỀN dù X-quang ban đầu chưa thấy đường gãy, do nguy cơ hoại tử vô mạch cực cao.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p467_img1.jpeg", "anatomy", "Fig. 10.4: Giải phẫu các gân vùng hõm lào và cổ tay")
                    ]
                },
                {
                    "landmark": "5. Khoang Gân Duỗi 1 / De Quervain & Ròng Rọc A1 Ngón Tay Lò Xo (A1 Pulley & First Compartment)",
                    "patient_position": "Bàn tay đặt nghiêng trên bàn khám.",
                    "technique": "Sờ mỏm trâm quay ở bờ ngoài cổ tay tìm bao gân khoang duỗi thứ nhất (Gân APL và EPB). Sau đó lật ngửa bàn tay sờ mặt lòng gốc các ngón tay (ngay tại khớp bàn ngón MCP) để tìm cục xơ chai của ròng rọc A1.",
                    "clinical_pearl": "Ấn đau chói mỏm trâm quay chỉ điểm Viêm bao gân De Quervain. Sờ thấy khối chai tròn lăn cục dưới ngón tay kèm đau nhói khi bệnh nhân gập duỗi ngón tay khẳng định Ngón tay lò xo (Trigger Finger).",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p510_img1.jpeg", "anatomy", "Figs 10.32A-B: Vị trí sờ nắn ròng rọc A1 trong ngón tay lò xo Trigger Finger")
                    ]
                }
            ],
            "figures": [
                enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p467_img1.jpeg", "anatomy", "Fig. 10.1: Giải phẫu khớp khuỷu mặt trong"),
                enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p468_img1.png", "anatomy", "Fig. 10.2: Giải phẫu khớp khuỷu mặt ngoài"),
                enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p467_img1.jpeg", "anatomy", "Fig. 10.4: Giải phẫu gân và thần kinh cổ bàn tay"),
                enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p487_img1.jpeg", "anatomy", "Fig. 10.5: Gân gập chung lồi cầu trong"),
                enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p488_img1.jpeg", "anatomy", "Fig. 10.7: Đường hầm thần kinh trụ rãnh khuỷu"),
                enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p489_img1.jpeg", "anatomy", "Fig. 10.8: Phức hợp sụn sợi tam giác TFCC"),
                enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p506_img1.jpeg", "anatomy", "Fig. 10.9: Bao hoạt dịch mỏm khuỷu Olecranon"),
                enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p507_img2.jpeg", "anatomy", "Fig. 10.12: Gân duỗi chung lồi cầu ngoài"),
                enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p494_img1.jpeg", "anatomy", "Fig. 10.13: Đường hầm xương quay Radial Tunnel"),
                enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p500_img1.jpeg", "anatomy", "Fig. 10.17: Cấu trúc ống cổ tay Carpal Tunnel")
            ]
        },

        # TAB 2: Sàng lọc Cờ đỏ & Bệnh lý nguy hiểm
        "tab2_red_flags": [
            {
                "category": "🚨 Gãy Kín Xương Thuyền Cổ Tay (Occult Scaphoid Fracture - Nguy Cơ Hoại Tử Vô Mạch Tiêu Chỏm)",
                "systemic_group": "Gãy xương chấn thương / Hoại tử vô mạch",
                "signs": "Đau nhức sâu vùng cổ tay xuất hiện sau ngã chống tay duỗi cổ tay quá mức (FOOSH); Ấn đau chói đáy hõm lào giải phẫu (Snuffbox tenderness) và gõ dọc trục ngón tay cái đau dồn vào cổ tay.",
                "action": "BÓ BỘT BẤT ĐỘNG ÔM NGÓN CÁI NGAY LẬP TỨC (ngay cả khi X-quang ban đầu chưa thấy đường gãy). Hẹn chụp lại X-quang sau 10–14 ngày hoặc chụp ngay MRI cổ tay để tránh biến chứng tiêu chỏm xương thuyền do đứt mạch máu nuôi đi từ cực xa về cực gần.",
                "gold_standard_labs": "MRI khớp cổ tay (Độ nhạy 100% phát hiện phù tủy xương và đường gãy vi thể xương thuyền); Chụp X-quang tư thế Scaphoid view chuyên biệt (4 tư thế cổ tay).",
                "figures": [
                    enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p467_img1.jpeg", "redflag", "Fig. 10.4: Vị trí giải phẫu xương thuyền trong hõm lào cổ tay")
                ]
            },
            {
                "category": "🚨 Hoại Tử Vô Mạch Xương Nguyệt Kienböck & Xương Thuyền Preiser (Kienböck's Avascular Necrosis)",
                "systemic_group": "Thiếu máu hoại tử xương cổ tay tự phát",
                "signs": "Đau nhức âm ỉ cổ tay kéo dài, sưng nề mặt mu cổ tay, lực nắm bàn tay suy giảm rõ rệt; Ấn đau chói trực tiếp lên xương nguyệt ở mặt mu cổ tay; Tiền sử lao động rung chấn (dùng búa khoan) hoặc chênh lệch chiều dài xương quay trụ (Ulnar minus variance).",
                "action": "Chụp MRI cổ tay phân độ Lichtman. Chuyển khám Chấn thương Chỉnh hình bàn tay phẫu thuật can thiệp mạch máu hoặc cắt ngắn xương quay để cứu xương nguyệt trước khi bị vỡ vụn xẹp khớp.",
                "gold_standard_labs": "MRI cổ tay không tiêm thuốc (Xương nguyệt giảm tín hiệu hoàn toàn trên T1W do hoại tử vô mạch); X-quang cổ tay tìm dấu hiệu xơ đặc xương và xẹp xương nguyệt.",
                "figures": [
                    enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p503_img1.jpeg", "redflag", "Fig. 10.20: Đánh giá vị trí xương nguyệt lunate và hoại tử vô mạch")
                ]
            },
            {
                "category": "🚨 Viêm Bao Hoạt Dịch Gân Gấp Ngón Tay Nhiễm Trùng Sinh Mủ (Infectious Flexor Tenosynovitis - 4 Dấu Hiệu Kanavel)",
                "systemic_group": "Cấp cứu ngoại khoa bàn tay nhiễm trùng tối khẩn",
                "signs": "Bệnh nhân xuất hiện đầy đủ 4 DẤU HIỆU KANAVEL KINH ĐIỂN: 1. Ngón tay sưng to đồng đều hình thoi giống 'xúc xích' (Sausage digit); 2. Ngón tay luôn ở tư thế bán gập nhẹ tự nhiên; 3. Ấn đau chói dọc suốt toàn bộ chiều dài bao gân gấp mặt lòng ngón tay; 4. Đau buốt dữ dội tột độ khi bác sĩ DUỖI THỤ ĐỘNG ngón tay (Dấu hiệu nhạy nhất!).",
                "action": "RẠCH MỔ DẪN LƯU VÀ RỬA BAO GÂN CẤP CỨU TRONG VÒNG 12–24 GIỜ VÀNG kết hợp kháng sinh tĩnh mạch liều cao để cứu gân gấp khỏi bị hoại tử tiêu hủy vĩnh viễn.",
                "gold_standard_labs": "Khám lâm sàng 4 dấu hiệu Kanavel; Siêu âm bàn tay cấp cứu phát hiện tụ mủ trong bao gân gấp ngón tay.",
                "figures": []
            },
            {
                "category": "🚨 Hội Chứng Thiếu Máu Cơ Cục Bộ Volkmann (Volkmann's Ischemic Contracture)",
                "systemic_group": "Biến chứng tắc mạch chèn ép khoang cẳng tay",
                "signs": "Xảy ra sau gãy trên lồi cầu xương cánh tay ở trẻ em hoặc chèn ép khoang cẳng tay không được giải áp kịp thời; Cơ gấp cẳng tay bị xơ hóa co rút thành tật bàn tay vuốt quắp hình móng chim (Claw hand deformity), tê liệt dây thần kinh giữa và thần kinh trụ.",
                "action": "Theo dõi sát tuần hoàn mạch máu và cảm giác đầu chi sau gãy xương; Mổ giải áp khoang khẩn cấp nếu có dấu hiệu chèn ép khoang cấp.",
                "gold_standard_labs": "Bắt mạch quay, đo áp lực khoang cẳng tay; Khám lâm sàng phát hiện dấu hiệu đau khi duỗi thụ động các ngón tay.",
                "figures": []
            }
        ],

        # TAB 3: Đau Chuyển Tạng & Đau Do Thuốc
        "tab3_visceral_drug_pain": {
            "visceral_referrals": [
                {
                    "organ": "Cơn Đau Thắt Ngực & Nhồi Máu Cơ Tim Cấp (Angina & Myocardial Infarction)",
                    "source": "Thiếu Máu Cục Bộ Cơ Tim Cấp Tính",
                    "pain_pattern": "Đau tức đè nghẹn vùng ngực trái lan dọc theo bờ trong cánh tay, cẳng tay trái xuống tận ngón nhẫn và ngón út (phân bố rễ T1–T2 và thần kinh trụ).",
                    "neuro_mechanism": "Hội tụ cảm giác tạng - thể (Viscerosomatic convergence) giữa các sợi thần kinh giao cảm tim đi vào tủy sống ngực trên T1–T4 với các nhánh thần kinh bì cánh tay trong và cẳng tay trong.",
                    "differential": "Cơn đau xuất hiện khi gắng sức hoặc xúc động mạnh, kèm khó thở, vã mồ hôi lạnh, buồn nôn; Khám vận động khớp khuỷu và cổ tay hoàn toàn không làm thay đổi tính chất cơn đau; Điện tâm đồ ECG có ST chênh và Troponin tim tăng vọt.",
                    "figures": []
                },
                {
                    "organ": "Hiện Tượng Raynaud & Bệnh Buerger (Raynaud's Phenomenon & Thromboangiitis Obliterans)",
                    "source": "Co Thắt Vi Mạch & Viêm Tắc Động Mạch Ngoại Biên",
                    "pain_pattern": "Các đầu ngón tay thay đổi 3 pha màu sắc điển hình khi gặp lạnh hoặc stress: Tái nhợt (Trắng) -> Tím tái (Xanh) -> Đỏ bừng đau buốt dữ dội khi sưởi ấm (Đỏ); Nặng hơn gây loét hoại tử khô đầu ngón tay.",
                    "neuro_mechanism": "Cường phản xạ thần kinh giao cảm co mạch đầu chi hoặc viêm tắc mạch mạn tính ở người nghiện thuốc lá nặng.",
                    "differential": "Nghiệm pháp Allen Test kiểm tra cấp máu động mạch quay và động mạch trụ bàn tay; Siêu âm Doppler mạch máu đầu ngón tay.",
                    "figures": []
                },
                {
                    "organ": "Bàn Tay Thấp Biến Dạng Trong Viêm Khớp Dạng Thấp (Rheumatoid Hand Deformities)",
                    "source": "Viêm Màng Hoạt Dịch Phá Hủy Khớp Cổ Tay & Bàn Ngón Tay",
                    "pain_pattern": "Đau buốt sưng nóng đối xứng hai bên tại khớp cổ tay, khớp bàn ngón MCP và khớp liên đốt gần PIP (khớp liên đốt xa DIP không bao giờ bị tổn thương!); Cứng khớp bàn tay buổi sáng > 1 giờ.",
                    "neuro_mechanism": "Viêm màng hoạt dịch tự miễn tăng sinh mạch tạo khối màng máu (Pannus) ăn mòn sụn khớp và phá hủy bao khớp, dây chằng giữ gân.",
                    "differential": "Biến dạng bàn tay điển hình: Ngón tay cổ thiên nga (Swan-neck), Ngón tay thùa khuyết (Boutonnière), Lệch trục về phía trụ của các ngón (Ulnar drift); Xét nghiệm máu RF (+) và Anti-CCP (+) nồng độ cao.",
                    "figures": []
                }
            ],
            "drug_induced": [
                "1. Thuốc ức chế men Aromatase (Anastrozole, Letrozole dùng điều trị ung thư vú): Gây hội chứng đau đa khớp dữ dội, đặc biệt là phù nề bao gân khởi phát Hội chứng ống cổ tay cấp tính và Ngón tay lò xo nhiều ngón.",
                "2. Tiêm Corticoid tại chỗ sai kỹ thuật: Tiêm trực tiếp corticoid vào trong lõi dây thần kinh giữa trong ống cổ tay hoặc thần kinh trụ tại khuỷu tay gây viêm hoại tử sợi trục thần kinh vĩnh viễn.",
                "3. Kháng sinh nhóm Fluoroquinolone (Ciprofloxacin, Levofloxacin): Nguy cơ viêm gân và đứt gân gập cổ tay hoặc gân ngón cái."
            ]
        },

        # TAB 4: Nghiệm Pháp Khám Thực Thể Đặc Hiệu
        "tab4_provocative_tests": {
            "provocative_tests": [
                {
                    "name": "Nghiệm Pháp Cozen (Cozen's Test - Khám Viêm Lồi Cầu Ngoài / Tennis Elbow)",
                    "patient_position": "Bệnh nhân ngồi, khuỷu gập 90°, cẳng tay sấp hoàn toàn, bàn tay nắm chặt và duỗi cổ tay.",
                    "examiner_action": "Bác sĩ đặt ngón tay cái lên lồi cầu ngoài xương cánh tay để cố định, tay kia ấn mu bàn tay bệnh nhân xuống dưới trong khi bệnh nhân gắng sức kháng cự duỗi cổ tay.",
                    "end_feel": "Sức co cơ đẳng trường đối kháng.",
                    "sensitivity": "84–91%",
                    "specificity": "75–88%",
                    "lr_positive": "4.5",
                    "lr_negative": "0.15",
                    "diagnostic_role": "Tiêu chuẩn vàng khám viêm điểm bám gân lồi cầu ngoài khuỷu tay Tennis Elbow (C-04 / M-04 Audit Rule)",
                    "clinical_role": "Gây lực co cơ đẳng trường tối đa của cơ duỗi cổ tay quay ngắn (ECRB). Đau nhói chói tại lồi cầu ngoài khẳng định Tennis Elbow.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p507_img2.jpeg", "exam", "Fig. 10.27: Cozen’s test")
                    ]
                },
                {
                    "name": "Nghiệm Pháp Maudsley (Maudsley's Test Duỗi Ngón 3 Kháng Lực)",
                    "patient_position": "Bệnh nhân duỗi thẳng khuỷu tay, cẳng tay sấp, bàn tay xòe các ngón.",
                    "examiner_action": "Bác sĩ đặt một ngón tay ấn lên mặt mu đốt xa ngón tay thứ 3 (ngón giữa) và yêu cầu bệnh nhân gắng sức duỗi thẳng ngón 3 chống lại lực đè.",
                    "end_feel": "Sức co cơ duỗi ngón tay chung độc lập.",
                    "sensitivity": "88%",
                    "specificity": "71%",
                    "lr_positive": "3.0",
                    "lr_negative": "0.17",
                    "diagnostic_role": "Chẩn đoán phân biệt Tennis Elbow với Hội chứng chèn ép dây thần kinh gian cốt sau PIN (C-04 / M-04 Audit Rule)",
                    "clinical_role": "Cơ duỗi ngón tay chung co độc lập. Đau chói ở lồi cầu ngoài khẳng định viêm gân duỗi ngón chung; đau cách lồi cầu ngoài 3–4 cm về phía dưới báo hiệu chèn ép thần kinh gian cốt sau (PIN) trong hội chứng đường hầm xương quay.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p508_img1.jpeg", "exam", "Fig. 10.28: Maudsley's test")
                    ]
                },
                {
                    "name": "Nghiệm Pháp Ép Vẹo Ngoài Khuỷu (Elbow Valgus Stress Test)",
                    "patient_position": "Bệnh nhân ngồi, khuỷu gập nhẹ 20–30° để giải phóng mỏm khuỷu khỏi hố mỏm khuỷu.",
                    "examiner_action": "Bác sĩ dùng một tay đỡ mặt ngoài khuỷu tay làm điểm tựa, tay kia cầm cổ tay tạo lực bẻ vẹo ngoài (Valgus) ra xa thân mình.",
                    "end_feel": "Sức căng dây chằng bên trụ UCL.",
                    "sensitivity": "65%",
                    "specificity": "95%",
                    "lr_positive": "13.0",
                    "lr_negative": "0.37",
                    "diagnostic_role": "Độ đặc hiệu 95% phát hiện mất vững dây chằng bên trụ khuỷu UCL ở vận động viên ném",
                    "clinical_role": "Kiểm tra độ vững chắc của dây chằng bên trụ (UCL). Đau nhói mặt trong khuỷu hoặc khe khớp trong mở rộng báo hiệu giãn đứt dây chằng bên trụ.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p506_img1.jpeg", "exam", "Fig. 10.24: Valgus stress")
                    ]
                },
                {
                    "name": "Nghiệm Pháp Gập Cổ Tay Phalen (Phalen's Test - Hội Chứng Ống Cổ Tay)",
                    "patient_position": "Bệnh nhân nâng hai khuỷu tay ngang ngực, áp chặt hai mặt mu cổ tay vào nhau ở góc gập 90° hoàn toàn và duy trì tư thế này trong 60 giây liên tục.",
                    "examiner_action": "Bác sĩ quan sát phản ứng của bệnh nhân trong suốt 60 giây và ghi nhận thời điểm xuất hiện triệu chứng.",
                    "end_feel": "Nén ép cơ học tối đa ống cổ tay.",
                    "sensitivity": "68–75%",
                    "specificity": "84–90%",
                    "lr_positive": "4.8",
                    "lr_negative": "0.32",
                    "diagnostic_role": "Nghiệm pháp lâm sàng kinh điển và tin cậy nhất sàng lọc Hội chứng ống cổ tay CTS (M-04 Audit Rule)",
                    "clinical_role": "Làm tăng áp lực tối đa trong ống cổ tay và chèn ép cơ học trực tiếp lên dây thần kinh giữa đang bị viêm phù nề. Xuất hiện tê buốt, châm chích ngón cái, ngón trỏ, ngón giữa và nửa ngón nhẫn là nghiệm pháp dương tính.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p505_img2.jpeg", "exam", "Fig. 10.23: Phalen's test")
                    ]
                },
                {
                    "name": "Nghiệm Pháp Chắp Tay Cầu Nguyện (Reverse Phalen / Prayer Sign)",
                    "patient_position": "Bệnh nhân nâng hai khuỷu tay, áp chặt hai lòng bàn tay vào nhau ở tư thế duỗi cổ tay tối đa 90° trong 60 giây.",
                    "examiner_action": "Quan sát tái hiện cảm giác tê buốt ở các ngón tay phân bố theo thần kinh giữa.",
                    "end_feel": "Kéo căng tối đa thần kinh giữa trong ống cổ tay.",
                    "sensitivity": "60%",
                    "specificity": "85%",
                    "lr_positive": "4.0",
                    "lr_negative": "0.47",
                    "diagnostic_role": "Đánh giá kéo căng dây thần kinh giữa trong hội chứng ống cổ tay",
                    "clinical_role": "Tư thế duỗi cổ tay tối đa kéo căng cơ học thần kinh giữa qua mép dưới mạc giữ gân gấp, làm bộc lộ triệu chứng ở những bệnh nhân có Phalen gập cổ tay âm tính.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p505_img1.jpeg", "exam", "Fig. 10.22: Prayer sign")
                    ]
                },
                {
                    "name": "Nghiệm Pháp Finkelstein (Finkelstein's Test Khám Viêm Bao Gân De Quervain)",
                    "patient_position": "Bệnh nhân ngồi hoặc đứng, gập ngón tay cái vào lòng bàn tay rồi nắm chặt 4 ngón tay còn lại ôm trùm lên ngón cái.",
                    "examiner_action": "Bác sĩ một tay giữ cẳng tay bệnh nhân, tay kia cầm nắm bàn tay bệnh nhân bẻ nghiêng thụ động về phía xương trụ (Ulnar deviation) một cách dứt khoát.",
                    "end_feel": "Kéo căng cơ học bao gân khoang duỗi thứ nhất.",
                    "sensitivity": "89%",
                    "specificity": "94%",
                    "lr_positive": "14.8",
                    "lr_negative": "0.12",
                    "diagnostic_role": "Tiêu chuẩn vàng lâm sàng chẩn đoán Viêm bao gân De Quervain cổ tay",
                    "clinical_role": "Kéo căng hai gân cơ giạng dài ngón cái (APL) và cơ duỗi ngắn ngón cái (EPB) trượt qua mỏm trâm quay. Dương tính khi đau nhói chói buốt dữ dội tại mỏm trâm quay.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p507_img1.jpeg", "exam", "Fig. 10.26: Finkelstein’s test")
                    ]
                },
                {
                    "name": "Nghiệm Pháp Khám Thoái Hóa Sụn Khớp Cánh Tay Quay (Radiocapitellar Chondromalacia Test)",
                    "patient_position": "Bệnh nhân ngồi, khuỷu gập 90°.",
                    "examiner_action": "Bác sĩ một tay đặt ngón cái đè ép trực tiếp lên chỏm xương quay và khe khớp cánh tay quay, tay kia xoay sấp ngửa cẳng tay liên tục kết hợp nén ép dọc trục đài quay vào chỏm con.",
                    "end_feel": "Cọ xát lục cục lạo xạo sụn khớp.",
                    "sensitivity": "75%",
                    "specificity": "88%",
                    "lr_positive": "6.2",
                    "lr_negative": "0.28",
                    "diagnostic_role": "Phát hiện thoái hóa sụn hoặc nhuyễn sụn khớp cánh tay quay",
                    "clinical_role": "Phân biệt đau mặt ngoài khuỷu tay do thoái hóa diện khớp cánh tay quay với viêm lồi cầu ngoài gân ECRB.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p508_img2.jpeg", "exam", "Fig. 10.29: Radiocapitellar chondromalacia test hand placement"),
                        enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p509_img1.jpeg", "exam", "Fig. 10.30: Radiocapitellar chondromalacia test")
                    ]
                }
            ],
            "somatic_dysfunctions": [
                {
                    "dysfunction": "Chỏm Xương Quay Trượt Lên Trên / Ra Sau (Radial Head Superior/Posterior Glide Fault)",
                    "biomechanics": "Sau chấn thương chống tay hoặc co rút cơ ngửa, chỏm quay bị kẹt trượt lên trên ép vào chỏm con lồi cầu đùi hoặc trượt kẹt ra sau trong khuyết quay xương trụ, gây đau mặt ngoài khuỷu và hạn chế sấp ngửa cẳng tay.",
                    "assessment_correction": "Bác sĩ kiểm tra độ trượt thụ động chỏm quay ra trước - ra sau và lên trên - xuống dưới; Áp dụng kỹ thuật nắn trượt chỏm quay xuống dưới ra trước (Inferior/anterior radial head glide).",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p502_img1.jpeg", "somatic", "Fig. 10.18: Radial head superior/inferior")
                    ]
                },
                {
                    "dysfunction": "Xương Nguyệt Trượt Ra Phía Gan Tay (Anterior / Palmar Lunate Subluxation Fault)",
                    "biomechanics": "Xương nguyệt bị trượt lệch kẹt ra phía trước sau chấn thương duỗi cổ tay quá mức, làm hẹp trực tiếp thể tích ống cổ tay và chèn ép cơ học thường trực lên dây thần kinh giữa.",
                    "assessment_correction": "Bác sĩ sờ diện trước cổ tay tìm gờ xương nguyệt nhô ra gan tay; Kỹ thuật nắn ấn đẩy xương nguyệt trượt trở lại ra phía mu tay (Dorsal lunate mobilization).",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p503_img1.jpeg", "somatic", "Fig. 10.20: Lunate anterior")
                    ]
                },
                {
                    "dysfunction": "Hội Chứng Giao Chéo Gân Cổ Tay (Intersection Syndrome)",
                    "biomechanics": "Cọ xát cơ học tại điểm giao chéo giữa khoang duỗi thứ nhất (gân cơ APL và EPB) nằm đè chéo góc khoảng 60° lên trên khoang duỗi thứ hai (gân cơ ECRL và ECRB) ở vị trí cách nếp gấp mu cổ tay 4–6 cm về phía cẳng tay.",
                    "assessment_correction": "Sờ nắn điểm giao chéo cách cổ tay 4–6 cm thấy sưng nề và nghe tiếng cọ xát 'lạo xạo da ướt' (Crepitus) khi cử động gập duỗi cổ tay.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p492_img1.jpeg", "somatic", "Fig. 10.11: Intersection syndrome (APL, EPB)")
                    ]
                }
            ]
        },

        # TAB 5: Ma Trận Chẩn Đoán Phân Biệt & Ca Bệnh Khó
        "tab5_differential_matrix": {
            "matrix": [
                {
                    "condition": "Viêm Điểm Bám Gân Lồi Cầu Ngoài (Tennis Elbow / Lateral Epicondylalgia)",
                    "onset": "Người chơi thể thao dùng vợt, thợ mộc, nhân viên văn phòng đánh máy nhiều",
                    "aggravating": "Tăng khi duỗi cổ tay có lực cản, cầm nắm đồ vật, nâng vật bằng bàn tay sấp",
                    "confirmatory_test": "Nghiệm pháp Cozen (+), Mill's Test (+), Ấn đau chói chính xác tại lồi cầu ngoài",
                    "gold_standard": "Siêu âm gân cơ: Dày và giảm âm gân ECRB, rách vi thể hoặc tăng sinh mạch Doppler",
                    "key_differentiator": "Nghiệm pháp Cozen dương tính, ấn đau chói chính xác tại gân duỗi chung lồi cầu ngoài",
                    "web1_procedure_id": "tennis-elbow"
                },
                {
                    "condition": "Hội Chứng Đường Hầm Xương Quay (Radial Tunnel Syndrome / Chèn Ép Thần Kinh PIN)",
                    "onset": "Người vận động xoay sấp ngửa cẳng tay lặp đi lặp lại nhiều lần",
                    "aggravating": "Đau nhức sâu mặt ngoài cẳng tay, đau tăng khi sấp cẳng tay duỗi ngón tay",
                    "confirmatory_test": "Nghiệm pháp Maudsley (duỗi ngón 3 kháng lực) đau chói cách lồi cầu ngoài 3–4 cm",
                    "gold_standard": "Điện cơ EMG hoặc Siêu âm độ phân giải cao thấy thần kinh PIN bị thắt hẹp tại cung Frohse",
                    "key_differentiator": "Điểm đau tối đa nằm DƯỚI LỒI CẦU NGOÀI 3–4 CM (không nằm trên lồi cầu ngoài); Nghiệm pháp Maudsley đau dữ dội",
                    "web1_procedure_id": "tennis-elbow"
                },
                {
                    "condition": "Hội Chứng Ống Cổ Tay (Carpal Tunnel Syndrome - CTS)",
                    "onset": "Phụ nữ trung niên, người làm việc máy tính, phụ nữ mang thai hoặc bệnh tuyến giáp",
                    "aggravating": "Tê buốt châm chích 3 ngón rưỡi phía quay (ngón cái, trỏ, giữa, nửa ngón nhẫn) tăng về đêm",
                    "confirmatory_test": "Phalen Test (+), Durkan Carpal Compression (+), Flick Sign (vẩy tay đỡ tê)",
                    "gold_standard": "Đo dẫn truyền thần kinh EMG/NCV (Kéo dài thời gian tiềm cảm giác và vận động thần kinh giữa)",
                    "key_differentiator": "Tê bì giới hạn ở 3 ngón rưỡi phía quay; Ngón út hoàn toàn bình thường; Teo cơ ô mô cái giai đoạn muộn",
                    "web1_procedure_id": "carpal-tunnel"
                },
                {
                    "condition": "Viêm Bao Gân De Quervain (De Quervain's Tenosynovitis)",
                    "onset": "Phụ nữ sau sinh (Ẵm bế con), người bấm điện thoại nhiều ngón cái",
                    "aggravating": "Đau buốt nhói mỏm trâm quay khi giạng ngón cái hoặc nghiêng cổ tay về phía xương trụ",
                    "confirmatory_test": "Nghiệm pháp Finkelstein Test (+ đau chói cực độ tại mỏm trâm quay)",
                    "gold_standard": "Siêu âm cổ tay: Dày bao gân và tụ dịch quanh gân APL và EPB tại khoang duỗi thứ nhất",
                    "key_differentiator": "Đau khu trú tại gốc ngón cái mỏm trâm quay; Nghiệm pháp Finkelstein tái hiện cơn đau nhói buốt",
                    "web1_procedure_id": "de-quervain"
                },
                {
                    "condition": "Ngón Tay Lò Xo (Trigger Finger / Viêm Hẹp Bao Gân Gấp Ngón)",
                    "onset": "Người trung niên, người làm việc thao tác tay nắm chặt kéo dài, đái tháo đường",
                    "aggravating": "Ngón tay bị kẹt khục ở tư thế gập, phải dùng tay kia bẻ mới bật thẳng ra được",
                    "confirmatory_test": "Sờ thấy nốt xơ chai ròng rọc A1 ở khớp bàn ngón tay (MCP) ấn đau chói và bật nảy",
                    "gold_standard": "Siêu âm ngón tay: Dày ròng rọc A1 > 1.5 mm và phù nề bao gân gấp tương ứng",
                    "key_differentiator": "Hiện tượng kẹt và bật nảy cơ học (Triggering / Snapping) khi gập duỗi ngón tay",
                    "web1_procedure_id": "trigger-finger"
                },
                {
                    "condition": "Rách Phức Hợp Sụn Sợi Tam Giác (TFCC Tear)",
                    "onset": "Sau ngã chống tay duỗi cổ tay và nghiêng trụ, hoặc vặn xoắn cổ tay đột ngột",
                    "aggravating": "Đau buốt nhức mặt trụ cổ tay khi xoay vặn tay mở khóa cửa, vắt khăn hoặc chống đẩy",
                    "confirmatory_test": "TFCC Compression / Grind Test (+), Fovea Sign (+ đau rãnh giữa mỏm trâm trụ và xương đậu)",
                    "gold_standard": "MRI cản từ nội khớp cổ tay (MR Arthrogram) hoặc MRI 3.0 Tesla",
                    "key_differentiator": "Đau nhức hoàn toàn ở BỜ TRỤ cổ tay dưới mỏm trâm trụ, mất vững khớp quay trụ dưới",
                    "web1_procedure_id": "cmc1-joint"
                },
                {
                    "condition": "Hội Chứng Đường Hầm Thần Kinh Trụ Khuỷu Tay (Cubital Tunnel Syndrome)",
                    "onset": "Người hay tì đè khuỷu tay lên bàn cứng hoặc gập khuỷu kéo dài khi ngủ",
                    "aggravating": "Tê buốt, châm chích mặt trong cẳng tay lan xuống ngón út và nửa ngón áp út",
                    "confirmatory_test": "Tinel Sign tại rãnh khuỷu (+), Nghiệm pháp Gập Khuỷu Tay 60 giây (+)",
                    "gold_standard": "Điện cơ EMG: Giảm tốc độ dẫn truyền vận động thần kinh trụ qua đoạn rãnh khuỷu",
                    "key_differentiator": "Tê rát ngón út và ngón áp út (không bao giờ tê ngón cái và ngón trỏ); Teo cơ gian cốt bàn tay",
                    "web1_procedure_id": "elbow-intraarticular"
                }
            ],
            "complex_cases_reasoning": [
                {
                    "case_title": "Biện Luận Ca Khó: Phân Biệt Viêm Lồi Cầu Ngoài (Tennis Elbow) vs Hội Chứng Chèn Ép Thần Kinh Gian Cốt Sau (PIN / Radial Tunnel Syndrome)",
                    "clinical_dilemma": "Bệnh nhân nam 42 tuổi, thợ điện nước, than phiền đau buốt mặt ngoài khuỷu tay phải 4 tháng nay. Đã được bác sĩ tuyến trước chẩn đoán Viêm lồi cầu ngoài (Tennis Elbow) và tiêm corticoid tại chỗ 2 lần nhưng không đỡ mà đau ngày càng lan xuống cẳng tay, cầm kìm vặn ốc thấy yếu bàn tay.",
                    "differential_rationale": "• Các bước phân định lâm sàng chuyên sâu của GS. Deepak Sebastian:\n1. Định vị điểm đau tối đa bằng sờ nắn giải phẫu:\n- Trong Tennis Elbow: Điểm đau chói nhất nằm NGAY TRÊN XƯƠNG lồi cầu ngoài hoặc cách diện trước lồi cầu ngoài không quá 1 cm (gân ECRB).\n- Trong Chèn ép thần kinh PIN (Radial Tunnel Syndrome): Điểm đau chói nhất nằm DƯỚI LỒI CẦU NGOÀI khoảng 3–4 cm, nằm sâu trong khối cơ cẳng tay trước ngoài (nơi thần kinh chui qua cung Frohse của cơ ngửa).\n2. Thử nghiệm nghiệm pháp duỗi ngón 3 kháng lực (Maudsley's Test):\n- Cơ duỗi ngón tay chung (EDC) đi qua đường hầm xương quay ép trực tiếp lên dây thần kinh gian cốt sau PIN. Nếu làm Maudsley test mà đau dữ dội sâu trong cẳng tay -> Hướng tới chèn ép thần kinh PIN.\n3. Khám vận động tinh vi:\n- Thần kinh PIN là một nhánh thần kinh vận động thuần túy (không có sợi cảm giác bì da). Khi bị chèn ép nặng, bệnh nhân sẽ có triệu chứng yếu kín đáo động tác duỗi ngón cái và ngón trỏ, nhưng KHÔNG hề có tê bì da.",
                    "clinical_pearl": "Khi một ca bệnh 'Tennis Elbow' thất bại với điều trị bảo tồn hoặc tiêm tại chỗ lồi cầu ngoài, hãy luôn kiểm tra điểm đau cách lồi cầu ngoài 3–4 cm về phía dưới và làm nghiệm pháp Maudsley test để tìm Hội chứng đường hầm xương quay (PIN entrapment). Tuyệt đối không tiêm corticoid mù lặp lại vào vùng này vì nguy cơ gây teo cơ và tổn thương thần kinh quay."
                }
            ]
        },

        # TAB 6: Phác Đồ Can Thiệp Siêu Âm Web 1
        "tab6_intervention_linkage": {
            "intervention_guidelines": "Khuỷu tay, cổ tay và bàn tay có cấu trúc giải phẫu cực kỳ nông và phức tạp với mạng lưới dây thần kinh và mạch máu nằm sát bên các gân và dây chằng. Tiêm 'mù' tại vùng này mang nguy cơ rất cao tiêm thuốc vào lòng dây thần kinh hoặc làm đứt gân do corticoid. Siêu âm can thiệp sử dụng đầu dò tần số cao (Linear 12–18 MHz hoặc đầu dò que Hockey Stick) là tiêu chuẩn vàng bắt buộc, cho phép nhìn rõ bó sợi thần kinh hình tổ ong, các bao gân và rãnh trượt, đảm bảo đưa mũi kim vào khoang bao gân hoặc quanh thần kinh chính xác tới từng milimet.",
            "recommended_web1_procedures": [
                {
                    "id": "tennis-elbow",
                    "nameVi": "Tiêm điểm bám gân lồi cầu ngoài khuỷu tay dưới hướng dẫn siêu âm (Tennis Elbow)",
                    "role": "Tiêm PRP / Dextrose Prolotherapy phục hồi gân ECRB thoái hóa",
                    "indication": "Viêm lồi cầu ngoài Tennis Elbow mạn tính, Cozen test (+), siêu âm thấy rách bán phần gân ECRB"
                },
                {
                    "id": "golfers-elbow",
                    "nameVi": "Tiêm điểm bám gân lồi cầu trong khuỷu tay dưới hướng dẫn siêu âm (Golfer's Elbow)",
                    "role": "Điều trị viêm gân gập chung lồi cầu trong (Lưu ý: Quan sát rõ thần kinh trụ để tránh đâm kim)",
                    "indication": "Đau nhức mặt trong khuỷu khi gập cổ tay, Reverse Cozen (+), kháng trị với thuốc uống"
                },
                {
                    "id": "carpal-tunnel",
                    "nameVi": "Tiêm giải áp và bóc tách thần kinh giữa bằng nước trong Hội chứng ống cổ tay (Hydrodissection)",
                    "role": "Tiêu chuẩn vàng can thiệp bảo tồn Hội chứng ống cổ tay",
                    "indication": "Tê buốt 3 ngón rưỡi bàn tay về đêm, Phalen (+), siêu âm diện tích cắt ngang thần kinh giữa CSA > 10 mm2"
                },
                {
                    "id": "de-quervain",
                    "nameVi": "Tiêm bao gân khoang duỗi thứ nhất dưới hướng dẫn siêu âm (De Quervain's Injection)",
                    "role": "Điều trị Viêm bao gân De Quervain (Lưu ý: Tách riêng hai bao gân APL và EPB nếu có vách ngăn phụ)",
                    "indication": "Finkelstein (+), đau buốt mỏm trâm quay, siêu âm thấy dày mạc giữ và tụ dịch bao gân khoang 1"
                },
                {
                    "id": "trigger-finger",
                    "nameVi": "Tiêm bao gân gấp ròng rọc A1 dưới hướng dẫn siêu âm (Trigger Finger Injection)",
                    "role": "Cắt cơn kẹt và giải phóng ngón tay lò xo không cần phẫu thuật",
                    "indication": "Ngón tay kẹt bật nảy, sờ thấy nốt xơ chai ròng rọc A1, siêu âm thấy dày ròng rọc A1 > 1.5 mm"
                },
                {
                    "id": "cmc1-joint",
                    "nameVi": "Tiêm khớp cổ tay nội khớp ngả mu tay dưới hướng dẫn siêu âm (Radiocarpal Joint)",
                    "role": "Điều trị viêm màng hoạt dịch khớp cổ tay và thoái hóa khớp",
                    "indication": "Thoái hóa khớp cổ tay, viêm khớp dạng thấp tràn dịch cổ tay kháng thuốc"
                },
                {
                    "id": "elbow-intraarticular",
                    "nameVi": "Bóc tách giải áp thần kinh trụ bằng nước tại rãnh khuỷu (Ulnar Nerve Hydrodissection)",
                    "role": "Giải phóng chèn ép thần kinh trụ trong Hội chứng đường hầm rãnh khuỷu",
                    "indication": "Tê rát ngón út và ngón áp út, Tinel rãnh khuỷu (+), siêu âm thấy thần kinh trụ sưng to phù nề"
                }
            ]
        },

        # Figures aggregate
        "figures": [
            enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p467_img1.jpeg", "anatomy", "Fig. 10.1: Giải phẫu khớp khuỷu mặt trong"),
            enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p468_img1.png", "anatomy", "Fig. 10.2: Giải phẫu khớp khuỷu mặt ngoài"),
            enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p467_img1.jpeg", "anatomy", "Fig. 10.4: Giải phẫu gân và thần kinh cổ bàn tay"),
            enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p487_img1.jpeg", "anatomy", "Fig. 10.5: Gân gập chung lồi cầu trong"),
            enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p488_img1.jpeg", "anatomy", "Fig. 10.7: Đường hầm thần kinh trụ rãnh khuỷu"),
            enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p489_img1.jpeg", "anatomy", "Fig. 10.8: Phức hợp sụn sợi tam giác TFCC"),
            enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p506_img1.jpeg", "anatomy", "Fig. 10.9: Bao hoạt dịch mỏm khuỷu Olecranon"),
            enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p492_img1.jpeg", "somatic", "Fig. 10.11: Hội chứng giao chéo gân cổ tay Intersection Syndrome"),
            enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p507_img2.jpeg", "anatomy", "Fig. 10.12: Gân duỗi chung lồi cầu ngoài"),
            enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p494_img1.jpeg", "anatomy", "Fig. 10.13: Đường hầm xương quay Radial Tunnel"),
            enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p496_img1.jpeg", "exam", "Fig. 10.14: Rách dây chằng bên trụ khuỷu UCL"),
            enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p508_img1.jpeg", "anatomy", "Fig. 10.15: Các vị trí kích thích chèn ép dây thần kinh giữa"),
            enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p499_img1.jpeg", "anatomy", "Fig. 10.16: Kênh Guyon chứa thần kinh trụ"),
            enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p500_img1.jpeg", "anatomy", "Fig. 10.17: Cấu trúc ống cổ tay Carpal Tunnel"),
            enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p502_img1.jpeg", "somatic", "Fig. 10.18: Đánh giá di động chỏm quay lên trên/xuống dưới"),
            enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p503_img1.jpeg", "somatic", "Fig. 10.20: Đánh giá trượt xương nguyệt ra trước Lunate anterior"),
            enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p504_img1.jpeg", "somatic", "Fig. 10.21: Đánh giá độ rơ trượt các xương cổ tay Joint play"),
            enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p505_img1.jpeg", "exam", "Fig. 10.22: Nghiệm pháp chắp tay cầu nguyện Prayer Sign"),
            enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p505_img2.jpeg", "exam", "Fig. 10.23: Nghiệm pháp gập mu cổ tay Phalen's Test"),
            enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p506_img1.jpeg", "exam", "Fig. 10.24: Nghiệm pháp ép vẹo ngoài khuỷu Valgus Stress"),
            enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p507_img1.jpeg", "exam", "Fig. 10.26: Nghiệm pháp Finkelstein khám De Quervain"),
            enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p507_img2.jpeg", "exam", "Fig. 10.27: Nghiệm pháp Cozen khám Tennis Elbow"),
            enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p508_img1.jpeg", "exam", "Fig. 10.28: Nghiệm pháp Maudsley duỗi ngón 3 kháng lực"),
            enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p508_img2.jpeg", "exam", "Fig. 10.29: Khám thoái hóa sụn khớp cánh tay quay"),
            enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p509_img1.jpeg", "exam", "Fig. 10.30: Nghiệm pháp nén xoay khớp cánh tay quay"),
            enrich_fig("assets/deepak_images/ch10_elbow_wrist_hand_pain/p510_img1.jpeg", "exam", "Figs 10.32A-B: Khám ròng rọc ngón tay lò xo Trigger Finger")
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
