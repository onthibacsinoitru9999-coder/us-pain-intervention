# -*- coding: utf-8 -*-
from . import enrich_fig

def get_module():
    mod = {
        "id": "knee-leg-foot-pain",
        "chapter": 8,
        "region": "lower",
        "region_vi": "Khớp Gối, Cẳng Chân, Cổ Chân & Bàn Chân",
        "icon": "🦵",
        "title": "Knee Joint, Lower Leg, Ankle, Foot & Biomechanical Kinetic Chain",
        "title_vi": "🦵 Đau Khớp Gối, Cẳng Chân, Cổ Chân & Bàn Chân",
        "chief_complaint": "Phàn nàn chính: Đau nhói mặt trong hoặc mặt ngoài khớp gối khi bước xuống cầu thang hoặc ngồi xổm, sưng phù tràn dịch khớp gối sau chấn thương thể thao vặn xoắn, cảm giác kẹt cứng khớp gối không thể duỗi thẳng, đau buốt gót chân khi đặt bước chân đầu tiên xuống giường buổi sáng, tê rát bỏng bàn chân hoặc cảm giác dẫm phải hòn sỏi ở kẽ ngón chân.",
        "author": "GS. Deepak Sebastian (Chuyên khảo Chương 8, pp. 335-416 - 82 Trang Sách)",
        "summary": "Mô hình tiếp cận chuyên khảo chuỗi động lực học chi dưới (Lower Kinetic Chain Master): Khớp gối là một khớp bản lề có biến đổi (Modified hinge joint) nằm kẹp giữa khớp háng và cổ chân, chịu tác động cộng dồn của toàn bộ bất thường cơ sinh học từ bàn chân truyền lên và từ khung chậu truyền xuống. Rà soát cờ đỏ cấp cứu: Huyết khối tĩnh mạch sâu (DVT - Thang điểm Wells), Hội chứng chèn ép khoang cấp tính cẳng chân (6Ps), Đứt gân gót Achilles cấp, Nhiễm trùng khớp gối sinh mủ. Phân tích chi tiết chuỗi động học: Cơ chế vặn mở khớp Screw-home mechanism, quỹ đạo trượt xương bánh chè trong rãnh lồi cầu đùi (Patellofemoral tracking), sụn chêm chịu tải và phân bổ chấn động, vòm bàn chân và vị trí trung tính khớp dưới sên (Subtalar neutral).",

        # TAB 1: Giải phẫu, Cơ sinh học & Sờ nắn
        "tab1_anatomy_palpation": {
            "arthrokinematics": {
                "joint_system": "Khớp gối là một phức hợp gồm 2 khớp chính: Khớp đùi chày (Tibiofemoral joint) và Khớp đùi bánh chè (Patellofemoral joint), cùng với khớp chày mác trên hỗ trợ cơ học.\n• Sụn chêm (Menisci): Sụn chêm trong (Medial meniscus) hình chữ C lớn, gắn chặt vào dây chằng bên chày MCL và bao khớp nên kém di động, dễ bị rách khi xoay vặn. Sụn chêm ngoài (Lateral meniscus) hình chữ O tròn, di động linh hoạt hơn (gấp đôi sụn chêm trong).\n• Hệ thống dây chằng giữ vững: Dây chằng chéo trước (ACL) chống trượt mâm chày ra trước và chống xoay trong quá mức; Dây chằng chéo sau (PCL) chống trượt mâm chày ra sau; Dây chằng bên chày (MCL) chống lực vẹo ngoài (Valgus); Dây chằng bên mác (LCL) chống lực vẹo trong (Varus).\n• Khớp Cổ Chân & Bàn Chân: Khớp sên cẳng chân (Talocrural joint - mộng chày mác ôm lấy ròng rọc xương sên) tạo động tác gập mu và gập lòng; Khớp dưới sên (Subtalar joint) tạo động tác sấp (Pronation: xoay ngoài + giạng + gập mu) và ngửa (Supination: xoay trong + khép + gập lòng).",
                "roll_gliding": "• Khớp Đùi Chày (Tibiofemoral Joint):\n- Trong chuỗi động mở (Open Kinetic Chain - cẳng chân tự do): Mâm chày lõm di chuyển trên lồi cầu đùi lồi (Concave on Convex). Khi gập gối, mâm chày lăn và trượt ra sau (Roll & glide posteriorly); khi duỗi gối, mâm chày lăn và trượt ra trước (Roll & glide anteriorly).\n- Trong chuỗi động đóng (Closed Kinetic Chain - bàn chân chịu lực trên mặt đất): Lồi cầu đùi lồi di chuyển trên mâm chày lõm (Convex on Concave). Khi gập gối (ngồi xổm), lồi cầu đùi lăn ra sau nhưng trượt ra trước (Roll posterior, glide anterior) để tránh bị trượt rơi khỏi mâm chày; khi duỗi gối (đứng lên), lồi cầu đùi lăn ra trước và trượt ra sau.\n• Khớp Đùi Bánh Chè (Patellofemoral Joint): Xương bánh chè trượt lên trên khi duỗi gối và trượt xuống dưới vào trong rãnh ròng rọc lồi cầu đùi khi gập gối (ở 90° gập gối diện tiếp xúc đạt tối đa).\n• Khớp Cổ Chân (Talocrural Joint): Xương sên lồi di chuyển trong hốc lõm mộng chày mác. Gập mu chân (Dorsiflexion): Xương sên lăn ra trước, trượt ra sau; Gập lòng bàn chân (Plantarflexion): Xương sên lăn ra sau, trượt ra trước.",
                "capsular_pattern": "• Khớp gối: Biên độ gập bị hạn chế nhiều hơn rõ rệt so với biên độ duỗi (Flexion limitation > Extension limitation, tỷ lệ khoảng 90° gập / 5° duỗi).\n• Khớp cổ chân (Talocrural): Biên độ gập lòng bị hạn chế nhiều hơn biên độ gập mu (Plantarflexion limitation > Dorsiflexion limitation).",
                "loose_packed_position": "• Khớp gối: Gập nhẹ 25°–30° (tư thế thư giãn bao khớp tối đa, chứa được nhiều dịch nhất khi có tràn dịch).\n• Khớp cổ chân: Gập lòng nhẹ 10° và ở vị trí giữa lật trong - lật ngoài.",
                "close_packed_position": "• Khớp gối: Duỗi tối đa kèm xoay ngoài xương chày (vị trí khóa khớp Screw-Home Mechanism).\n• Khớp cổ chân: Gập mu chân tối đa (xương sên phần rộng nhất phía trước nêm chặt vào mộng chày mác).",
                "force_couples_biomechanics": "• Cơ chế Khóa Khớp Screw-Home Mechanism: Ở 30° cuối của động tác duỗi gối (chuỗi mở), mâm chày tự động xoay ngoài 5° so với lồi cầu đùi để khóa chặt khớp gối nhờ hình thể lồi cầu trong dài hơn lồi cầu ngoài. Để gập gối trở lại, cơ khoeo (Popliteus muscle) phải co để xoay trong xương chày, 'mở khóa' khớp gối.\n• Động học xương bánh chè & Góc Q: Góc Q tạo bởi đường nối gai chậu trước trên (ASIS) tới trung tâm xương bánh chè và đường nối trung tâm xương bánh chè tới lồi củ trước xương chày (Bình thường: 10°–15° ở nam, 15°–20° ở nữ). Góc Q tăng tạo lực véc-tơ kéo xương bánh chè trật lệch ra ngoài (Lateral patellar subluxation), gây mòn sụn đùi bánh chè.",
                "figures": [
                    enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p335_img1.jpeg", "anatomy", "Fig. 8.1: Giải phẫu xương và diện khớp phức hợp gối - bánh chè"),
                    enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p336_img1.jpeg", "anatomy", "Fig. 8.2: Hệ thống dây chằng và sụn chêm khớp gối nhìn từ phía trước"),
                    enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p337_img1.jpeg", "anatomy", "Fig. 8.3: Giải phẫu diện cắt ngang sụn chêm trong và sụn chêm ngoài"),
                    enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p361_img1.jpeg", "anatomy", "Fig. 8.5: Giải phẫu mặt trước khớp gối và xương bánh chè hai mảnh"),
                    enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p362_img1.jpeg", "anatomy", "Fig. 8.14: Đường đi dây thần kinh chày sau và các nhánh phân bố cẳng bàn chân"),
                    enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p378_img1.jpeg", "anatomy", "Fig. 8.15: Ống cổ chân Tarsal Tunnel và thần kinh chày sau")
                ]
            },
            "palpation_steps": [
                {
                    "landmark": "1. Khe Khớp Trong Khớp Gối & Sụn Chêm Trong (Medial Joint Line & Meniscus)",
                    "patient_position": "Bệnh nhân ngồi thả lỏng buông thõng cẳng chân ở mép bàn hoặc nằm ngửa gập gối 90°.",
                    "technique": "Bác sĩ xác định bờ dưới xương bánh chè và gân bánh chè. Trượt ngón tay sang phía trong vào rãnh ngang giữa lồi cầu đùi trong và mâm chày trong. Ấn miết dọc theo toàn bộ khe khớp trong từ trước ra sau.",
                    "clinical_pearl": "Ấn đau chói chính xác tại khe khớp trong (Joint line tenderness) có độ nhạy rất cao (85%) chỉ điểm Rách sụn chêm trong (Medial meniscus tear) hoặc Viêm thoái hóa sụn khớp khoang trong.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p365_img1.jpeg", "anatomy", "Fig. 8.9: Các hình thái rách sụn chêm và vị trí tương ứng khe khớp")
                    ]
                },
                {
                    "landmark": "2. Gân Chân Ngỗng & Bao Hoạt Dịch Chân Ngỗng (Pes Anserinus & Bursa)",
                    "patient_position": "Bệnh nhân nằm ngửa hoặc ngồi gập gối nhẹ.",
                    "technique": "Từ khe khớp trong, bác sĩ trượt ngón tay xuống dưới khoảng 4–5 cm và hơi ra trước ở mặt trước trong đầu trên xương chày, xác định điểm bám chung của 3 gân: Gân cơ may (Sartorius), Gân cơ thon (Gracilis), Gân cơ bán gân (Semitendinosus). Ấn sâu tìm điểm đau và phù nề bao hoạt dịch.",
                    "clinical_pearl": "Điểm đau chói chân ngỗng thường bị nhầm lẫn với rách sụn chêm trong hoặc thoái hóa khớp gối. Rất phổ biến ở phụ nữ thừa cân có gối vẹo ngoài (Genu valgum) hoặc người đái tháo đường.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p364_img1.jpeg", "anatomy", "Fig. 8.8: Vị trí sờ nắn các bao hoạt dịch khớp gối (Bao hoạt dịch chân ngỗng & trước bánh chè)")
                    ]
                },
                {
                    "landmark": "3. Lồi Củ Gerdy, Dải Chậu Chày & Chỏm Xương Mác (Gerdy Tubercle, ITB & Fibular Head)",
                    "patient_position": "Bệnh nhân nằm ngửa gập gối 30° hoặc nằm nghiêng chân đau bên trên.",
                    "technique": "Sờ mặt trước ngoài đầu trên mâm chày xác định lồi củ Gerdy (nơi dải chậu chày bám tận). Di chuyển ngón tay lên trên qua lồi cầu ngoài xương đùi để tìm điểm cọ xát của dải chậu chày. Di chuyển ra phía sau ngoài sờ chỏm xương mác tròn gồ và dây chằng bên mác LCL.",
                    "clinical_pearl": "Ấn đau chói ở lồi cầu ngoài xương đùi khi gập gối 30° là dấu hiệu điển hình của Hội chứng dải chậu chày (Iliotibial Band Syndrome - ITBS ở người chạy bộ). Ấn chỏm mác đau buốt gợi ý bán trật khớp chày mác trên hoặc chèn ép thần kinh mác chung.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p394_img1.jpeg", "anatomy", "Fig. 8.29: Kỹ thuật sờ nắn đánh giá đối xứng chỏm xương mác (Fibular Head Asymmetry)")
                    ]
                },
                {
                    "landmark": "4. Gân Gót Achilles, Bao Hoạt Dịch Sau Gót & Cân Gan Chân (Achilles Tendon & Plantar Fascia)",
                    "patient_position": "Bệnh nhân nằm sấp, bàn chân thả lỏng buông thõng ra ngoài mép bàn khám.",
                    "technique": "Bác sĩ dùng hai ngón tay kẹp bóp dọc toàn bộ thân gân gót từ chỗ nối cơ-gân tới chỗ bám vào củ gót (đặc biệt chú ý vùng thiểu dưỡng cách chỗ bám 2–6 cm). Sau đó sờ nắn điểm bám của Cân gan chân tại củ trong xương gót ở mặt lòng bàn chân.",
                    "clinical_pearl": "Ấn đau chói củ trong xương gót mặt lòng bàn chân khẳng định Viêm cân gan chân (Plantar Fasciitis). Sờ thấy gân gót phồng to mất tính liên tục hoặc hõm khuyết đột ngột cảnh báo Đứt gân gót Achilles.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p390_img1.jpeg", "anatomy", "Fig. 8.24: Sờ nắn thân gân gót Tendoachilles tìm điểm viêm thoái hóa"),
                        enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p389_img1.jpeg", "anatomy", "Fig. 8.23: Sờ nắn bao hoạt dịch sau gót chân Retrocalcaneal Bursitis")
                    ]
                },
                {
                    "landmark": "5. Rãnh Sau Mắt Cá Trong & Ống Cổ Chân (Tarsal Tunnel & Posterior Tibial Nerve)",
                    "patient_position": "Bệnh nhân nằm ngửa hoặc ngồi thả lỏng bàn chân xoay ngoài nhẹ.",
                    "technique": "Bác sĩ sờ ngay phía sau và dưới mắt cá trong (Medial malleolus), dọc theo đường đi của dây chằng hãm gân gấp (Flexor retinaculum). Sờ mạch đập động mạch chày sau và gõ nhẹ dọc theo đường đi của dây thần kinh chày sau.",
                    "clinical_pearl": "Gõ nhẹ làm xuất hiện luồng điện giật hoặc tê buốt bắn xuống lòng bàn chân và các ngón chân (Dấu hiệu Tinel dương tính) chẩn đoán Hội chứng ống cổ chân (Tarsal Tunnel Syndrome).",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p378_img1.jpeg", "anatomy", "Fig. 8.15: Giải phẫu ống cổ chân Tarsal Tunnel và thần kinh chày")
                    ]
                }
            ],
            "figures": [
                enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p335_img1.jpeg", "anatomy", "Fig. 8.1: Giải phẫu diện khớp phức hợp gối - bánh chè"),
                enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p336_img1.jpeg", "anatomy", "Fig. 8.2: Hệ thống dây chằng và sụn chêm khớp gối"),
                enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p337_img1.jpeg", "anatomy", "Fig. 8.3: Giải phẫu diện cắt ngang sụn chêm trong và ngoài"),
                enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p361_img1.jpeg", "anatomy", "Fig. 8.5: Giải phẫu khớp gối và xương bánh chè"),
                enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p364_img1.jpeg", "anatomy", "Fig. 8.8: Vị trí bao hoạt dịch chân ngỗng và quanh gối"),
                enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p365_img1.jpeg", "anatomy", "Fig. 8.9: Các hình thái rách sụn chêm"),
                enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p378_img1.jpeg", "anatomy", "Fig. 8.15: Ống cổ chân Tarsal Tunnel và thần kinh chày"),
                enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p389_img1.jpeg", "anatomy", "Fig. 8.23: Bao hoạt dịch sau gót Retrocalcaneal Bursa"),
                enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p390_img1.jpeg", "anatomy", "Fig. 8.24: Sờ nắn gân gót Achilles"),
                enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p394_img1.jpeg", "anatomy", "Fig. 8.29: Đánh giá chỏm xương mác")
            ]
        },

        # TAB 2: Sàng lọc Cờ đỏ & Bệnh lý nguy hiểm
        "tab2_red_flags": [
            {
                "category": "🚨 Huyết Khối Tĩnh Mạch Sâu Chi Dưới (Deep Vein Thrombosis - DVT / Thang Điểm Wells)",
                "systemic_group": "Cấp cứu mạch máu / Nguy cơ Thuyên tắc phổi chết người",
                "signs": "Bắp chân sưng to không đối xứng (chu vi bắp chân bên sưng chênh lệch > 3 cm so với bên lành, đo cách lồi củ chày 10 cm xuống dưới); Nóng đỏ da, ấn căng cứng bắp chân; Tiền sử nằm bất động lâu ngày, phẫu thuật chỉnh hình khớp háng/gối, ung thư đang điều trị, uống thuốc tránh thai.",
                "action": "BẤT ĐỘNG CHÂN BỆNH NHÂN TUYỆT ĐỐI (KHÔNG xoa bóp bắp chân tránh làm vỡ cục máu đông trôi về tim gây thuyên tắc phổi cấp!). Chuyển viện cấp cứu chụp siêu âm Doppler mạch máu.",
                "gold_standard_labs": "Siêu âm Doppler tĩnh mạch chi dưới (Tiêu chuẩn vàng phát hiện huyết khối không đè xẹp được); Định lượng D-dimer huyết tương (Độ nhạy > 95% để loại trừ khi âm tính ở nhóm nguy cơ thấp).",
                "figures": [
                    enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p380_img1.jpeg", "redflag", "Fig. 8.27: Khám vùng cẳng chân trước và rà soát phù nề mạch máu")
                ]
            },
            {
                "category": "🚨 Hội Chứng Chèn Ép Khoang Cấp Tính Cẳng Chân (Acute Compartment Syndrome - 6Ps)",
                "systemic_group": "Cấp cứu ngoại khoa thiếu máu hoại tử chi",
                "signs": "Đau dữ dội vượt quá mức chấn thương thông thường (Pain out of proportion); Đau buốt tăng lên tột độ khi kéo căng thụ động các ngón chân (Dấu hiệu nhạy nhất!); Bắp chân căng cứng như khúc gỗ; Xuất hiện dấu hiệu 6Ps: Pain (đau dữ dội), Pressure (căng khoang), Paresthesia (dị cảm tê bì), Pallor (tái nhợt), Paralysis (liệt vận động ngón), Pulselessness (mất mạch - dấu hiệu rất muộn).",
                "action": "RẠCH MỞ CÂN GIẢI ÁP CẤP CỨU (Fasciotomy) trong vòng 6 giờ vàng để cứu chi. Chống chỉ định băng ép hoặc nâng cao chân quá tim (làm giảm áp lực tưới máu mô).",
                "gold_standard_labs": "Đo trực tiếp áp lực khoang bằng kim áp lực (Áp lực khoang > 30 mmHg hoặc Áp lực tưới máu Delta-P = Huyết áp tâm trương - Áp lực khoang < 30 mmHg chỉ định mổ khẩn cấp).",
                "figures": []
            },
            {
                "category": "🚨 Nhiễm Trùng Khớp Gối Sinh Mủ (Septic Arthritis of Knee Joint)",
                "systemic_group": "Nhiễm trùng ngoại khoa phá hủy sụn khớp cấp",
                "signs": "Khớp gối sưng to căng tức bóng đỏ, nóng rát dữ dội; Bệnh nhân sốt cao rét run, bất động hoàn toàn chân đau; Mọi cử động gập duỗi gối dù là nhỏ nhất đều bị co cứng chống cự dữ dội (Severe guarded spasm).",
                "action": "Chọc hút dịch khớp xét nghiệm ngay lập tức và chuyển mổ nội soi rửa khớp cấp cứu kết hợp kháng sinh đường tĩnh mạch liều cao.",
                "gold_standard_labs": "Chọc dịch khớp gối: Số lượng bạch cầu dịch khớp > 50.000/mm3 với > 75% bạch cầu đa nhân trung tính; Soi tươi nhuộm Gram và cấy vi khuẩn dịch khớp.",
                "figures": []
            },
            {
                "category": "🚨 Đứt Hoàn Toàn Gân Gót Achilles Cấp Tính (Acute Achilles Tendon Rupture)",
                "systemic_group": "Đứt rách gân chấn thương chịu lực chính",
                "signs": "Bệnh nhân nghe tiếng 'bốp' hoặc 'tách' lớn ở sau gót chân khi đang nhảy hoặc tăng tốc, cảm giác như có ai đó đá mạnh vào sau gót; Mất khả năng đứng kiễng gót chân một bên; Sờ thấy vết lõm khuyết rõ rệt trên thân gân gót.",
                "action": "Nẹp bất động cổ chân ở tư thế gập lòng nhẹ (Equinus), chuyển chuyên khoa Chấn thương Chỉnh hình phẫu thuật nối gân sớm.",
                "gold_standard_labs": "Nghiệm pháp bóp bắp chân Thompson Test dương tính tuyệt đối; Siêu âm cơ xương khớp hoặc MRI gân gót xác định khoảng cách hai đầu gân đứt.",
                "figures": [
                    enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p390_img2.jpeg", "redflag", "Fig. 8.24B: Đánh giá tổn thương đứt gân gót Achilles qua nghiệm pháp ép cơ bắp chân")
                ]
            },
            {
                "category": "🚨 Gãy Mệt Xương Bàn Chân / Gãy Hành Quân (March Fracture / Stress Fracture)",
                "systemic_group": "Gãy xương quá tải cơ học kín",
                "signs": "Đau nhói buốt khu trú tại cổ hoặc thân xương bàn chân thứ 2 hoặc thứ 3 sau khi đi bộ đường dài, chạy marathon hoặc đứng gác lâu; Mu chân sưng nề khu trú; Ấn một ngón tay trực tiếp lên thân xương bàn chân đau chói dữ dội.",
                "action": "Ngừng chịu lực bàn chân bằng giày đế cứng hoặc bó bột bất động 4–6 tuần.",
                "gold_standard_labs": "MRI bàn chân hoặc Xạ hình xương Tc-99m (Phát hiện đường gãy mệt và phù tủy xương ngay trong 48 giờ đầu khi X-quang thường quy còn âm tính).",
                "figures": [
                    enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p380_img1.jpeg", "redflag", "Fig. 8.16: Hình ảnh gãy mệt xương bàn chân thứ hai (March Stress Fracture)"),
                    enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p380_img2.jpeg", "redflag", "Fig. 8.16B: Can xương gãy mệt xương bàn chân sau quá tải vận động")
                ]
            },
            {
                "category": "🚨 Tổn Thương Xương Sụn & Hoại Tử Lồi Cầu Đùi (Osteochondral Lesion & SONK)",
                "systemic_group": "Bong gãy sụn xương đùi chày",
                "signs": "Đau nhức dữ dội đột ngột ở người lớn tuổi hoặc sau chấn thương tiếp đất; Kẹt khớp gối cơ học liên tục do mảnh sụn xương tự do rơi vào ổ khớp (Loose body / Joint mouse).",
                "action": "Chụp MRI khớp gối đánh giá phân độ Berndt & Harty hoặc ICRS; Phẫu thuật nội soi gắp dị vật hoặc ghép xương sụn OATS.",
                "gold_standard_labs": "MRI khớp gối độ phân giải cao; X-quang khớp gối tư thế đường hầm (Tunnel view / Notch view).",
                "figures": [
                    enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p362_img1.jpeg", "redflag", "Fig. 8.7: Tổn thương sụn xương lồi cầu đùi (Osteochondral lesion of femur)"),
                    enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p383_img1.jpeg", "redflag", "Fig. 8.18: Tổn thương sụn xương vòm xương sên (Osteochondral lesion of talus)")
                ]
            }
        ],

        # TAB 3: Đau Chuyển Tạng & Đau Do Thuốc
        "tab3_visceral_drug_pain": {
            "visceral_referrals": [
                {
                    "organ": "Bệnh Động Mạch Ngoại Biên Chi Dưới (Peripheral Artery Disease - PAD / Thiếu Máu Chi Dưới)",
                    "source": "Xơ Vữa Tắc Hẹp Động Mạch Đùi - Khoeo - Chày",
                    "pain_pattern": "Đau co rút thắt chặt bắp chân xuất hiện đều đặn sau khi đi bộ một quãng đường nhất định (Đau cách hồi mạch máu - Vascular Claudication), bắt buộc phải dừng lại đứng nghỉ 2–5 phút thì đỡ đau hoàn toàn; Nặng hơn có đau khi nằm nghỉ ban đêm phải thõng chân xuống mép giường.",
                    "neuro_mechanism": "Thiếu máu cơ vân chi dưới do nhu cầu chuyển hóa oxy của mô cơ khi vận động vượt quá khả năng cấp máu qua mạch xơ vữa hẹp.",
                    "differential": "Phân biệt với Đau cách hồi thần kinh do hẹp ống sống thắt lưng: Đau cách hồi mạch máu giảm khi đứng nghỉ thẳng lưng; Đau cách hồi thần kinh chỉ đỡ khi ngồi cúi gập lưng ra trước (Dấu hiệu giỏ hàng siêu thị); Bắt mạch mu chân và chày sau yếu hoặc mất, da chân teo lạnh rụng lông, chỉ số huyết áp cổ chân - cánh tay ABI < 0.9.",
                    "figures": []
                },
                {
                    "organ": "Bệnh Thần Kinh Ngoại Biên Do Đái Tháo Đường & Bàn Chân Charcot (Diabetic Neuropathy)",
                    "source": "Viêm Đa Dây Thần Kinh Chuyển Hóa Mạn Tính",
                    "pain_pattern": "Tê bì, châm chích, nóng rát như kim châm phân bố đối xứng hai bên theo kiểu 'đi tất' (Glove and stocking pattern), đau tăng dữ dội về đêm; Mất cảm giác rung âm thoa và cảm giác bảo vệ monofilament.",
                    "neuro_mechanism": "Tổn thương vi mạch nuôi dưỡng sợi thần kinh nhỏ (Small fiber neuropathy) do tăng đường huyết mạn tính tích tụ sorbitol.",
                    "differential": "Tiền sử Đái tháo đường lâu năm; Khám mất phản xạ gân gót hai bên, bàn chân biến dạng vòm phẳng sụp khớp Charcot (Rocking chair foot) không đau tương xứng với tổn thương xương trên X-quang.",
                    "figures": []
                },
                {
                    "organ": "Cơn Gout Cấp Tính Ngón Chân Cái (Acute Gouty Arthritis / Podagra)",
                    "source": "Lắng Đọng Tinh Thể Urate Khớp Bàn Ngón Chân 1 (MTP 1)",
                    "pain_pattern": "Đau buốt dữ dội khởi phát đột ngột vào nửa đêm hoặc rạng sáng ở khớp ngón chân cái; Khớp sưng to đỏ ửng căng bóng, nhạy cảm tới mức chỉ một va chạm nhẹ của mép chăn đắp cũng gây đau không thể chịu nổi.",
                    "neuro_mechanism": "Thực bào tinh thể Monosodium Urate bởi bạch cầu đa nhân giải phóng cytokine gây viêm bùng phát cực độ.",
                    "differential": "Bệnh nhân nam tuổi trung niên sau bữa ăn giàu đạm hải sản hoặc uống nhiều bia; Acid uric máu tăng cao, soi dịch khớp dưới kính hiển vi phân cực thấy tinh thể hình kim phân cực âm lưỡng chiết.",
                    "figures": []
                }
            ],
            "drug_induced": [
                "1. Kháng sinh nhóm Quinolone/Fluoroquinolone (Ciprofloxacin, Levofloxacin): Nguy cơ đặc biệt cao gây viêm gân hoại tử và đứt gân gót Achilles tự phát, xảy ra trong vòng vài ngày đến vài tháng sau dùng thuốc (Đặc biệt nguy cơ nhân gấp bội khi dùng đồng thời với Corticoid).",
                "2. Thuốc hạ mỡ máu nhóm Statin (Atorvastatin, Rosuvastatin): Tác dụng phụ gây đau nhức cơ vân bắp chân (Statin-induced myopathy) và nguy cơ tiêu cơ vân cấp (Rhabdomyolysis) giải phóng myoglobin gây suy thận cấp.",
                "3. Thuốc lợi tiểu Thiazide và Furosemide: Cạnh tranh bài tiết acid uric tại ống thận, là nguyên nhân phổ biến nhất khởi phát cơn Viêm khớp Gout cấp tính ngón chân cái ở người cao tuổi điều trị tăng huyết áp."
            ]
        },

        # TAB 4: Nghiệm Pháp Khám Thực Thể Đặc Hiệu
        "tab4_provocative_tests": {
            "provocative_tests": [
                {
                    "name": "Nghiệm Pháp Lachman (Lachman Test - Khám Dây Chằng Chéo Trước ACL)",
                    "patient_position": "Bệnh nhân nằm ngửa hoàn toàn, thả lỏng toàn bộ cơ tứ đầu đùi, khớp gối gập nhẹ 20°–30°.",
                    "examiner_action": "Bác sĩ đứng cùng bên chân khám. Một tay giữ cố định đầu dưới xương đùi ở mặt trước ngoài; tay kia ôm lấy đầu trên xương chày ở mặt trong sau và kéo dứt khoát mâm chày trượt ra trước so với xương đùi.",
                    "end_feel": "Bình thường có điểm dừng vững chắc (Hard firm end-feel). Dương tính khi cảm giác điểm dừng mềm nhũn (Soft mushy end-feel) kèm độ di lệch mâm chày ra trước > 3 mm so với bên lành.",
                    "sensitivity": "85–95%",
                    "specificity": "94–98%",
                    "lr_positive": "10.2",
                    "lr_negative": "0.15",
                    "diagnostic_role": "Tiêu chuẩn vàng lâm sàng chính xác nhất chẩn đoán đứt dây chằng chéo trước ACL",
                    "clinical_role": "Độ nhạy và độ đặc hiệu cao nhất trong tất cả các nghiệm pháp khám ACL vì tư thế gập gối 20°–30° giải phóng sụn chêm và bao khớp sau khỏi lực nén cản trở trượt.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p407_img1.jpeg", "exam", "Fig. 8.49: Nghiệm pháp Lachman khám độ vững dây chằng chéo trước ACL")
                    ]
                },
                {
                    "name": "Nghiệm Pháp Ngăn Kéo Trước (Anterior Drawer Test Khớp Gối)",
                    "patient_position": "Bệnh nhân nằm ngửa, khớp gối gập 90°, bàn chân đặt áp phẳng trên mặt bàn khám.",
                    "examiner_action": "Bác sĩ ngồi lên mu bàn chân bệnh nhân để cố định chân. Hai bàn tay ôm lấy đầu trên cẳng chân, hai ngón tay cái đặt trên khe khớp lồi củ chày, dùng lực kéo mạnh cẳng chân ra trước.",
                    "end_feel": "Độ dịch chuyển mâm chày ra trước so với lồi cầu đùi.",
                    "sensitivity": "62–70%",
                    "specificity": "90–95%",
                    "lr_positive": "7.0",
                    "lr_negative": "0.35",
                    "diagnostic_role": "Đánh giá đứt dây chằng chéo trước ACL mạn tính",
                    "clinical_role": "Độ nhạy trong giai đoạn cấp thấp hơn Lachman do cơ gân kheo co cứng bảo vệ và sừng sau sụn chêm nêm kẹt cơ học ở tư thế gập 90°.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p410_img1.jpeg", "exam", "Fig. 8.52A: Nghiệm pháp ngăn kéo trước Anterior Drawer Test ở tư thế gập gối 90°")
                    ]
                },
                {
                    "name": "Nghiệm Pháp Ngăn Kéo Sau & Dấu Hiệu Lõm Xương Chày (Posterior Drawer & Sag Sign Khám PCL)",
                    "patient_position": "Bệnh nhân nằm ngửa gập gối 90°, bàn chân đặt phẳng trên bàn khám.",
                    "examiner_action": "Bác sĩ quan sát từ góc nghiêng xem mâm chày có bị tụt lõm ra sau trọng lực (Tibial Sag Sign); Sau đó dùng hai tay đẩy mâm chày trượt thẳng ra sau so với xương đùi.",
                    "end_feel": "Mất điểm dừng sau vững chắc, mâm chày trượt tụt sâu ra sau.",
                    "sensitivity": "90%",
                    "specificity": "99%",
                    "lr_positive": "90.0",
                    "lr_negative": "0.10",
                    "diagnostic_role": "Tiêu chuẩn vàng chẩn đoán đứt dây chằng chéo sau PCL",
                    "clinical_role": "Dương tính khi mâm chày trượt ra sau > 5 mm. Lưu ý: Phải quan sát Sag Sign trước để tránh nhầm lẫn ngăn kéo sau thành ngăn kéo trước giả tạo.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p410_img2.jpeg", "exam", "Fig. 8.52B: Nghiệm pháp ngăn kéo sau Posterior Drawer Test khám PCL")
                    ]
                },
                {
                    "name": "Nghiệm Pháp Chuyển Trục (Pivot Shift Maneuver Khám Mất Vững Xoay ACL)",
                    "patient_position": "Bệnh nhân nằm ngửa hoàn toàn, chân thả lỏng tối đa.",
                    "examiner_action": "Bác sĩ cầm gót chân nâng chân lên, tạo lực xoay trong xương chày kèm lực bẻ vẹo ngoài (Valgus) lên đầu trên xương chày, từ từ đưa khớp gối từ tư thế duỗi thẳng sang gập dần.",
                    "end_feel": "Cảm giác bán trật ra trước ở tư thế duỗi và bật nảy giật về vị trí cũ ở 30°–40° gập gối.",
                    "sensitivity": "40%",
                    "specificity": "98%",
                    "lr_positive": "20.0",
                    "lr_negative": "0.61",
                    "diagnostic_role": "Độ đặc hiệu 98% (SpPIn) khẳng định mất vững xoay trước ngoài do rách ACL",
                    "clinical_role": "Tái hiện cảm giác 'khụyu gối rỗng chân' mà bệnh nhân cảm thấy khi thi đấu thể thao.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p411_img1.jpeg", "exam", "Fig. 8.53: Thao tác làm nghiệm pháp chuyển trục Pivot Shift Maneuver")
                    ]
                },
                {
                    "name": "Nghiệm Pháp Khám Dây Chằng Bên Khớp Gối Vẹo Ngoài & Vẹo Trong (Collateral Ligament Stress Tests - Valgus & Varus Stress)",
                    "patient_position": "Bệnh nhân nằm ngửa, gối gập 30° (để giải phóng dây chằng chéo và bao khớp sau), sau đó thử lại ở tư thế duỗi thẳng 0°.",
                    "examiner_action": "• Khám Dây chằng bên chày MCL (Valgus Stress): Một tay bác sĩ đặt ở mặt ngoài gối làm điểm tựa, tay kia cầm cổ chân bẻ cẳng chân ra ngoài tạo lực vẹo ngoài.\n• Khám Dây chằng bên mác LCL (Varus Stress): Một tay đặt ở mặt trong gối làm điểm tựa, tay kia bẻ cẳng chân vào trong tạo lực vẹo trong.",
                    "end_feel": "Khe khớp trong hoặc ngoài mở rộng kèm cảm giác điểm dừng mềm nhão và đau buốt.",
                    "sensitivity": "86–90%",
                    "specificity": "99%",
                    "lr_positive": "99.0",
                    "lr_negative": "0.10",
                    "diagnostic_role": "Độ đặc hiệu 99% xác định tổn thương đứt dây chằng bên chày MCL và bên mác LCL khớp gối (M-04 Audit Rule)",
                    "clinical_role": "Nếu khe khớp mở rộng ở 30° gập gối: Tổn thương dây chằng bên đơn thuần. Nếu khe khớp mở rộng ngay ở tư thế duỗi 0°: Tổn thương phức hợp nặng nề cả dây chằng bên và dây chằng chéo/bao khớp sau.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p407_img2.jpeg", "exam", "Figs. 8.50A-B: Valgus and varus stress tests for collateral ligaments", custom_fig_number="8.50A-B")
                    ]
                },
                {
                    "name": "Nghiệm Pháp McMurray (McMurray's Test Khám Rách Sụn Chêm Khớp Gối)",
                    "patient_position": "Bệnh nhân nằm ngửa, gập khớp háng và gập khớp gối tối đa.",
                    "examiner_action": "Bác sĩ một tay đặt ngón tay cái và các ngón tay lên khe khớp trong và ngoài khớp gối; Tay kia cầm gót chân xoay ngoài xương chày kèm đẩy vẹo ngoài rồi từ từ duỗi gối (khám sụn chêm trong); Sau đó xoay trong xương chày kèm đẩy vẹo trong rồi từ từ duỗi gối (khám sụn chêm ngoài).",
                    "end_feel": "Tiếng 'lục cục' hoặc 'clunk' cơ học kèm đau chói tại khe khớp.",
                    "sensitivity": "70%",
                    "specificity": "71%",
                    "lr_positive": "2.4",
                    "lr_negative": "0.42",
                    "diagnostic_role": "Phát hiện rách sụn chêm trong và sụn chêm ngoài khớp gối",
                    "clinical_role": "Dương tính khi nghe hoặc sờ thấy tiếng khục kèm đau chói tái hiện cảm giác kẹt khớp của bệnh nhân do mảnh sụn chêm rách bị kẹp nén giữa hai diện khớp.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p406_img1.jpeg", "exam", "Fig. 8.47: Nghiệm pháp McMurray khám rách sụn chêm khớp gối")
                    ]
                },
                {
                    "name": "Nghiệm Pháp Đệm Mỡ Dưới Xương Bánh Chè Hoffa (Hoffa's Test)",
                    "patient_position": "Bệnh nhân nằm ngửa, gối gập 30°.",
                    "examiner_action": "Bác sĩ dùng hai ngón tay cái ấn sâu vào hai bên gân bánh chè (vị trí đệm mỡ Hoffa), sau đó yêu cầu bệnh nhân duỗi thẳng gối hết cỡ.",
                    "end_feel": "Đau buốt chói đột ngột khiến bệnh nhân giật nảy chân hoặc không dám duỗi tiếp.",
                    "sensitivity": "88%",
                    "specificity": "85%",
                    "lr_positive": "5.9",
                    "lr_negative": "0.14",
                    "diagnostic_role": "Chẩn đoán Viêm chèn ép đệm mỡ Hoffa (Hoffa Fat Pad Impingement)",
                    "clinical_role": "Phân biệt đau mặt trước gối do đệm mỡ Hoffa với bệnh lý gân bánh chè hoặc thoái hóa diện đùi bánh chè.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p405_img1.jpeg", "exam", "Figs 8.46A and B: Hoffa's test")
                    ]
                },
                {
                    "name": "Nghiệm Pháp Dải Nếp Gấp Hoạt Dịch Bánh Chè (Plica Test)",
                    "patient_position": "Bệnh nhân nằm ngửa, gối gập nhẹ.",
                    "examiner_action": "Bác sĩ dùng ngón tay cái ấn miết vào bờ trong trên xương bánh chè trong khi gấp duỗi khớp gối thụ động.",
                    "end_feel": "Cảm giác dải sợi dày sừng bật nảy dưới ngón tay kèm đau nhói.",
                    "sensitivity": "72%",
                    "specificity": "80%",
                    "lr_positive": "3.6",
                    "lr_negative": "0.35",
                    "diagnostic_role": "Phát hiện hội chứng nếp gấp màng hoạt dịch trong gối (Mediopatellar Plica Syndrome)",
                    "clinical_role": "Phân biệt đau mặt trong gối do nếp gấp hoạt dịch với rách sụn chêm trong.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p408_img1.jpeg", "exam", "Figs 8.51A and B: Plica test")
                    ]
                },
                {
                    "name": "Dấu Hiệu Kẹp Chân Mulder (Mulder's Click Test - Khám U Thần Kinh Morton)",
                    "patient_position": "Bệnh nhân ngồi thả lỏng bàn chân buông thõng.",
                    "examiner_action": "Bác sĩ dùng một tay bóp ép ngang các chỏm xương bàn chân 1 đến 5 vào nhau, đồng thời dùng ngón cái và ngón trỏ của tay kia ấn ép trực tiếp từ mặt lòng lên kẽ gian ngón chân 3–4 (hoặc 2–3).",
                    "end_feel": "Cảm nhận tiếng 'tách' hoặc 'click' cơ học trượt qua lại.",
                    "sensitivity": "88%",
                    "specificity": "92%",
                    "lr_positive": "11.0",
                    "lr_negative": "0.13",
                    "diagnostic_role": "Tiêu chuẩn vàng lâm sàng chẩn đoán U thần kinh gian ngón chân Morton (Morton's Neuroma)",
                    "clinical_role": "Tái hiện chính xác cảm giác thốn buốt phóng điện ra hai ngón chân khi bệnh nhân mang giày chật.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p412_img1.jpeg", "exam", "Fig. 8.55: Mulder click test")
                    ]
                },
                {
                    "name": "Nghiệm Pháp Bóp Bắp Chân Thompson (Thompson Squeeze Test Khám Đứt Gân Gót Achilles)",
                    "patient_position": "Bệnh nhân nằm sấp, hai bàn chân thò tự do ra ngoài mép bàn khám.",
                    "examiner_action": "Bác sĩ dùng bàn tay bóp mạnh vào khối cơ bắp chân (Cơ bụng chân Gastrocnemius và Cơ dép Soleus).",
                    "end_feel": "Đáp ứng cử động gập lòng thụ động của bàn chân.",
                    "sensitivity": "96%",
                    "specificity": "98%",
                    "lr_positive": "48.0",
                    "lr_negative": "0.04",
                    "diagnostic_role": "Tiêu chuẩn vàng tuyệt đối phát hiện Đứt hoàn toàn gân gót Achilles",
                    "clinical_role": "Bình thường khi bóp bắp chân, bàn chân sẽ tự động gập lòng (Plantarflexion). DƯƠNG TÍNH khi bàn chân nằm bất động hoàn toàn không có phản xạ gập lòng.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p390_img2.jpeg", "exam", "Fig. 8.24: Tendoachilles tendon")
                    ]
                }
            ],
            "somatic_dysfunctions": [
                {
                    "dysfunction": "Xương Bánh Chè Lệch Ngoài Lên Trên (Patella Superolateral Fault / Tracking Disorder)",
                    "biomechanics": "Mạc giữ bánh chè phía ngoài (Lateral retinaculum) và dải chậu chày bị co rút ngắn lại, kết hợp suy yếu cơ rộng trong (VMO), kéo xương bánh chè trượt lệch lên trên ra ngoài, cọ xát vào lồi cầu ngoài xương đùi gây đau mặt trước gối.",
                    "assessment_correction": "Đánh giá độ di động thụ động bánh chè vào trong; Kỹ thuật nắn di động xương bánh chè vào trong và xuống dưới (Medial & inferior patellar glide mobilization).",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p395_img1.jpeg", "somatic", "Fig. 8.31: Patella superolateral"),
                        enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p401_img1.jpeg", "somatic", "Fig. 8.41: Tenderness over the lateral retinaculum")
                    ]
                },
                {
                    "dysfunction": "Sai Vị Trí Chỏm Xương Mác (Fibular Head Anterior/Posterior Subluxation)",
                    "biomechanics": "Chỏm xương mác bị trượt kẹt ra sau (Posterior subluxation) do co cứng gân cơ nhị đầu đùi, hoặc trượt ra trước (Anterior subluxation) sau chấn thương lật cổ chân gập lòng lật trong.",
                    "assessment_correction": "Bác sĩ dùng ngón cái và ngón trỏ cầm chỏm xương mác lay ra trước và ra sau so với mâm chày; Nắn chỉnh trượt chỏm mác thụ động.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p394_img2.jpeg", "somatic", "Fig. 8.29: Assessing fibular head asymmetry")
                    ]
                },
                {
                    "dysfunction": "Khớp Dưới Sên Mất Vị Trí Trung Tính & Sấp Bàn Chân Quá Mức (Subtalar Neutral Fault & Overpronation)",
                    "biomechanics": "Khớp dưới sên bị sập vòm lật sấp quá mức khi chịu tải, làm xương sên gập lòng trượt vào trong, kéo theo xương chày xoay trong quá mức và làm tăng góc Q khớp gối, gây quá tải dải chậu chày và gân chân ngỗng.",
                    "assessment_correction": "Đưa khớp dưới sên về vị trí trung tính (Subtalar Neutral Position - sờ rãnh sên hai bên mắt cá cân bằng); Chỉ định lót giày chỉnh hình (Orthotics) nâng đỡ vòm trong.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p396_img1.jpeg", "somatic", "Fig. 8.32: Subtalar neutral")
                    ]
                },
                {
                    "dysfunction": "Xương Sên Gập Lòng Kẹt Khớp (Plantar Flexed Talus Fault)",
                    "biomechanics": "Xương sên bị kẹt di lệch ra phía trước trong mộng chày mác sau chấn thương lật cổ chân, hạn chế cử động gập mu chân khi bước đi, buộc cơ thể bù trừ bằng cách xoay ngoài bàn chân hoặc ưỡn gối quá mức.",
                    "assessment_correction": "Bác sĩ kiểm tra độ trượt ra sau của xương sên; Áp dụng kỹ thuật nắn đẩy xương sên trượt ra sau (Posterior talar glide manipulation).",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p397_img1.jpeg", "somatic", "Fig. 8.36: Plantar flexed talus")
                    ]
                }
            ]
        },

        # TAB 5: Ma Trận Chẩn Đoán Phân Biệt & Ca Bệnh Khó
        "tab5_differential_matrix": {
            "matrix": [
                {
                    "condition": "Rách Sụn Chêm Khớp Gối (Meniscus Tear - Trong / Ngoài)",
                    "onset": "Người trẻ sau chấn thương vặn gối khi chơi thể thao; Người già sau ngồi xổm đứng dậy đột ngột",
                    "aggravating": "Tăng khi ngồi xổm, vặn gối, bước xuống bậc thang; Có cảm giác lục cục và kẹt gối",
                    "confirmatory_test": "Ấn đau chói khe khớp (Joint line tenderness), McMurray Test (+), Thessaly Test (+)",
                    "gold_standard": "MRI khớp gối (Độ nhạy 93% sụn chêm trong, 88% sụn chêm ngoài phát hiện đường rách sụn)",
                    "key_differentiator": "Đau khu trú CHÍNH XÁC tại khe khớp; Có tiền sử kẹt khớp thực sự (True mechanical locking)",
                    "web1_procedure_id": "knee-suprapatellar"
                },
                {
                    "condition": "Viêm Bao Hoạt Dịch & Gân Chân Ngỗng (Pes Anserine Bursitis & Tendinopathy)",
                    "onset": "Phụ nữ trung niên béo phì, thoái hóa khớp gối kèm chân vòng kiềng (Genu varum)",
                    "aggravating": "Đau tăng khi đứng lên từ ghế, bước lên cầu thang, tì ép hai đầu gối vào nhau khi ngủ",
                    "confirmatory_test": "Ấn đau chói dưới khe khớp trong 4–5 cm tại mặt trước trong đầu trên xương chày",
                    "gold_standard": "Siêu âm khớp gối: Dày và tụ dịch bao hoạt dịch gân chân ngỗng, khe khớp trong bình thường",
                    "key_differentiator": "Điểm đau nằm DƯỚI KHE KHỚP 4–5 cm (không nằm trên khe khớp như rách sụn chêm); Không kẹt khớp",
                    "web1_procedure_id": "pes-anserinus"
                },
                {
                    "condition": "Hội Chứng Dải Chậu Chày (Iliotibial Band Syndrome - ITBS / Runner's Knee)",
                    "onset": "Người chạy bộ đường dài, đạp xe, tăng cự ly đột ngột",
                    "aggravating": "Đau nhói buốt mặt ngoài gối khi gối gập khoảng 30° (giai đoạn tiếp đất)",
                    "confirmatory_test": "Noble Compression Test (+), Renne Test (+), Ober Test (+) dải chậu chày co rút",
                    "gold_standard": "Siêu âm / MRI: Phù nề dày dải chậu chày và đệm mỡ tại lồi cầu ngoài xương đùi",
                    "key_differentiator": "Đau khu trú hoàn toàn ở MẶT NGOÀI lồi cầu đùi; Vận động nội khớp gối không đau",
                    "web1_procedure_id": "distal-itb-bursa"
                },
                {
                    "condition": "Viêm Khớp Thoái Hóa Khớp Gối (Knee Osteoarthritis / Gonarthrosis)",
                    "onset": "Người cao tuổi > 50 tuổi, đau âm ỉ tăng dần nhiều tháng nhiều năm",
                    "aggravating": "Tăng khi đi lại chịu lực, cứng khớp buổi sáng < 30 phút, tiếng lạo xạo cọ xát",
                    "confirmatory_test": "Mô hình bao khớp: Hạn chế gập gối nhiều hơn duỗi gối, phì đại xương khe khớp",
                    "gold_standard": "X-quang khớp gối đứng chịu lực: Hẹp khe khớp, gai xương rìa khớp, đặc xương dưới sụn",
                    "key_differentiator": "Tiến triển mạn tính, tuổi cao, X-quang điển hình phân độ Kellgren-Lawrence",
                    "web1_procedure_id": "knee-suprapatellar"
                },
                {
                    "condition": "Viêm Cân Gan Chân (Plantar Fasciitis)",
                    "onset": "Người đứng lâu, béo phì, chạy bộ, đi giày đế cứng hoặc vòm chân bẹt",
                    "aggravating": "Đau buốt nhói gót chân dữ dội khi ĐẶT BƯỚC CHÂN ĐẦU TIÊN xuống giường buổi sáng",
                    "confirmatory_test": "Windlass Test (+ khi gập mu ngón chân cái), Ấn đau chói củ trong xương gót",
                    "gold_standard": "Siêu âm cân gan chân: Bề dày cân gan chân > 4 mm tại điểm bám củ gót",
                    "key_differentiator": "Cơn đau bước chân đầu tiên buổi sáng sau đó đỡ dần khi đi lại vài phút",
                    "web1_procedure_id": "plantar-fascia"
                },
                {
                    "condition": "U Thần Kinh Gian Ngón Chân Morton (Morton's Neuroma)",
                    "onset": "Phụ nữ hay đi giày cao gót mũi nhọn, đau rát bỏng kẽ ngón 3–4",
                    "aggravating": "Tăng khi mang giày chật, có cảm giác như dẫm phải hòn sỏi hoặc nếp gấp tất chân",
                    "confirmatory_test": "Mulder's Click Test (+ tiếng tách kèm đau phóng điện ra hai ngón chân)",
                    "gold_standard": "Siêu âm bàn chân độ phân giải cao: Khối giảm âm tròn hình thoi tại kẽ gian ngón chân",
                    "key_differentiator": "Đau rát bỏng kẽ ngón chân và cảm giác dẫm phải sỏi; cởi giày xoa bóp thì đỡ đau",
                    "web1_procedure_id": "ankle-nerve-blocks"
                },
                {
                    "condition": "Hội Chứng Đường Hầm Cổ Chân (Tarsal Tunnel Syndrome)",
                    "onset": "Sau chấn thương lật cổ chân, u bao hoạt dịch hoặc viêm bao gân gập sau mắt cá trong",
                    "aggravating": "Tê buốt, châm chích, nóng rát toàn bộ lòng bàn chân tăng khi đứng lâu",
                    "confirmatory_test": "Tinel Sign sau mắt cá trong (+), Dorsiflexion-Eversion Test (+)",
                    "gold_standard": "Điện cơ EMG/NCV: Kéo dài thời gian tiềm vận động và cảm giác thần kinh chày sau",
                    "key_differentiator": "Tê rát phân bố theo vùng thần kinh chày ở lòng bàn chân; Gót chân có thể được bảo tồn",
                    "web1_procedure_id": "ankle-nerve-blocks"
                }
            ],
            "complex_cases_reasoning": [
                {
                    "case_title": "Biện Luận Ca Khó: Phân Biệt Rách Sừng Sau Sụn Chêm Trong vs Viêm Bao Hoạt Dịch Chân Ngỗng vs Hoại Tử Xương Tự Phát Khớp Gối (SONK)",
                    "clinical_dilemma": "Bệnh nhân nữ 62 tuổi, thừa cân (BMI 28), than phiền đau buốt nhức dữ dội mặt trong khớp gối phải 3 tuần nay sau một lần bước hụt bậc tam cấp. Đau nhiều khi đứng chịu lực và đi lại, ban đêm nằm ngủ cũng thấy nhức buốt. Bác sĩ tuyến dưới chẩn đoán Viêm khớp thoái hóa đơn thuần nhưng điều trị NSAIDs không đỡ.",
                    "differential_rationale": "• Các bước phân định lâm sàng chuyên khảo của Deepak Sebastian:\n1. Định vị vị trí điểm đau chính xác bằng sờ nắn giải phẫu:\n- Nếu đau chói khu trú ở mặt trước trong xương chày cách khe khớp 4–5 cm -> Viêm gân chân ngỗng (Pes anserine bursitis). Thử nghiệm co cơ gân chân ngỗng kháng lực (gập gối xoay trong cẳng chân) sẽ đau chói.\n- Nếu đau chói nằm ngay trên đường khe khớp trong -> Tổn thương nội khớp: Rách sừng sau sụn chêm trong hoặc Tổn thương sụn khớp khoang trong.\n2. Đánh giá cờ đỏ Hoại tử xương tự phát lồi cầu đùi (SONK / SPONK):\n- Điển hình ở phụ nữ > 60 tuổi, khởi phát đau ĐỘT NGỘT dữ dội sau động tác nhẹ, đau buốt cả ban đêm và khi nghỉ ngơi, ấn đau chói cực độ tại lồi cầu đùi trong (trên khe khớp 1–2 cm).\n- X-quang giai đoạn sớm hoàn toàn bình thường (dễ bị bỏ sót là thoái hóa thông thường), nhưng chỉ 2–3 tháng sau lồi cầu xương đùi sẽ xẹp lún phá hủy hoàn toàn khớp gối nếu tiếp tục đi lại chịu lực.",
                    "clinical_pearl": "Bất kỳ bệnh nhân nữ cao tuổi nào xuất hiện đau mặt trong gối dữ dội khởi phát đột ngột và đau cả ban đêm, BẮT BUỘC chỉ định chụp MRI khớp gối khẩn cấp để loại trừ Hoại tử xương tự phát (SONK) và Rách rễ sụn chêm sau trong (Meniscal Root Tear). Cho bệnh nhân chống hai nạng ngừng chịu lực chân đau ngay lập tức trong thời gian chờ chụp MRI."
                }
            ]
        },

        # TAB 6: Phác Đồ Can Thiệp Siêu Âm Web 1
        "tab6_intervention_linkage": {
            "intervention_guidelines": "Khớp gối, cổ chân và bàn chân là vùng có cấu trúc giải phẫu bề mặt rất thuận lợi cho can thiệp dưới hướng dẫn siêu âm. Siêu âm can thiệp sử dụng đầu dò phẳng tần số cao (Linear 10–15 MHz) cho phép phân giải chính xác bao hoạt dịch mỏng dưới 1 mm, các dây chằng, sụn chêm, gân gót và các nhánh thần kinh cảm giác (thần kinh hiển, thần kinh mác, thần kinh chày sau, thần kinh gối genicular), giúp tiêm trúng đích tuyệt đối và tránh tiêm vào lòng gân hoặc mạch máu.",
            "recommended_web1_procedures": [
                {
                    "id": "knee-suprapatellar",
                    "nameVi": "Tiêm khớp gối nội khớp ngả túi cùng trên bánh chè (Suprapatellar Bursa Approach)",
                    "role": "Tiêu chuẩn vàng tiêm acid hyaluronic, PRP hoặc corticosteroid điều trị thoái hóa khớp gối",
                    "indication": "Thoái hóa khớp gối từ độ II đến độ IV Kellgren-Lawrence, viêm màng hoạt dịch khớp gối tràn dịch"
                },
                {
                    "id": "pes-anserinus",
                    "nameVi": "Tiêm bao hoạt dịch gân chân ngỗng dưới hướng dẫn siêu âm (Pes Anserine Injection)",
                    "role": "Cắt cơn đau viêm bao hoạt dịch chân ngỗng kháng trị với thuốc uống",
                    "indication": "Đau nhức mặt trong dưới khe khớp gối 4–5 cm, ấn chói chân ngỗng, siêu âm thấy tụ dịch bao hoạt dịch"
                },
                {
                    "id": "distal-itb-bursa",
                    "nameVi": "Tiêm bao hoạt dịch dải chậu chày tại lồi cầu ngoài xương đùi (ITB Bursa Injection)",
                    "role": "Điều trị Hội chứng dải chậu chày (Runner's Knee) ở vận động viên",
                    "indication": "Đau buốt mặt ngoài lồi cầu đùi khi chạy bộ, Noble compression test (+), dày dải chậu chày trên siêu âm"
                },
                {
                    "id": "patellar-tendon-fenestration",
                    "nameVi": "Tiêm xơ hóa / PRP quanh gân bánh chè dưới hướng dẫn siêu âm (Jumper's Knee)",
                    "role": "Phục hồi tổn thương viêm thoái hóa gân bánh chè (Lưu ý: Không tiêm corticoid vào lõi gân)",
                    "indication": "Viêm gân bánh chè mạn tính ở vận động viên nhảy, dày gân và tăng sinh mạch trên Doppler năng lượng"
                },
                {
                    "id": "genicular-nerves",
                    "nameVi": "Phong bế thần kinh gối Genicular Nerves dưới hướng dẫn siêu âm",
                    "role": "Cắt đường truyền cảm giác đau khớp gối ở bệnh nhân thoái hóa nặng không thể phẫu thuật thay khớp",
                    "indication": "Thoái hóa gối giai đoạn muộn kháng thuốc, đau mạn tính sau phẫu thuật thay khớp gối toàn phần"
                },
                {
                    "id": "ankle-nerve-blocks",
                    "nameVi": "Tiêm giải áp bao gân và phong bế thần kinh chày sau trong Hội chứng ống cổ chân",
                    "role": "Điều trị Hội chứng ống cổ chân (Tarsal Tunnel Syndrome)",
                    "indication": "Tê rát bỏng lòng bàn chân, Tinel sign mắt cá trong (+), dày bao gân chèn ép thần kinh chày"
                },
                {
                    "id": "plantar-fascia",
                    "nameVi": "Tiêm quanh cân gan chân dưới hướng dẫn siêu âm (Plantar Fascia Injection)",
                    "role": "Điều trị Viêm cân gan chân mạn tính kháng thuốc",
                    "indication": "Đau buốt gót chân bước chân đầu tiên buổi sáng, dày cân gan chân > 4 mm, thất bại với vật lý trị liệu"
                },
                {
                    "id": "ankle-nerve-blocks",
                    "nameVi": "Tiêm dẫn lưu và phong bế u thần kinh Morton dưới siêu âm (Morton's Neuroma Block)",
                    "role": "Cắt cơn đau phóng điện kẽ ngón chân do U thần kinh Morton",
                    "indication": "Mulder's click test (+), siêu âm thấy khối u thần kinh kẽ ngón 3–4 kích thước > 5 mm"
                }
            ]
        },

        # Figures aggregate
        "figures": [
            enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p335_img1.jpeg", "anatomy", "Fig. 8.1: Giải phẫu diện khớp phức hợp gối - bánh chè"),
            enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p336_img1.jpeg", "anatomy", "Fig. 8.2: Hệ thống dây chằng và sụn chêm khớp gối"),
            enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p337_img1.jpeg", "anatomy", "Fig. 8.3: Giải phẫu diện cắt ngang sụn chêm trong và ngoài"),
            enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p361_img1.jpeg", "anatomy", "Fig. 8.5: Giải phẫu khớp gối và xương bánh chè"),
            enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p362_img1.jpeg", "redflag", "Fig. 8.7: Tổn thương sụn xương lồi cầu đùi"),
            enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p364_img1.jpeg", "anatomy", "Fig. 8.8: Vị trí bao hoạt dịch chân ngỗng và quanh gối"),
            enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p365_img1.jpeg", "anatomy", "Fig. 8.9: Các hình thái rách sụn chêm"),
            enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p378_img1.jpeg", "anatomy", "Fig. 8.15: Ống cổ chân Tarsal Tunnel và thần kinh chày"),
            enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p380_img1.jpeg", "redflag", "Fig. 8.16: Gãy mệt xương bàn chân thứ hai (March Stress Fracture)"),
            enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p380_img2.jpeg", "redflag", "Fig. 8.16B: Can xương gãy mệt xương bàn chân sau quá tải"),
            enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p383_img1.jpeg", "redflag", "Fig. 8.18: Tổn thương sụn xương vòm xương sên"),
            enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p389_img1.jpeg", "anatomy", "Fig. 8.23: Bao hoạt dịch sau gót Retrocalcaneal Bursa"),
            enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p390_img1.jpeg", "anatomy", "Fig. 8.24: Sờ nắn gân gót Achilles"),
            enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p390_img2.jpeg", "redflag", "Fig. 8.24B: Đánh giá đứt gân gót Achilles (Thompson Test)"),
            enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p380_img1.jpeg", "redflag", "Fig. 8.27: Khám vùng cẳng chân trước rà soát mạch máu"),
            enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p394_img1.jpeg", "anatomy", "Fig. 8.29: Đánh giá chỏm xương mác"),
            enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p394_img2.jpeg", "somatic", "Fig. 8.29B: Nắn chỉnh di động chỏm xương mác"),
            enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p395_img1.jpeg", "somatic", "Fig. 8.31: Đánh giá xương bánh chè lệch ngoài lên trên"),
            enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p396_img1.jpeg", "somatic", "Fig. 8.32: Xác định vị trí trung tính khớp dưới sên"),
            enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p397_img1.jpeg", "somatic", "Fig. 8.36: Nắn chỉnh kẹt khớp xương sên gập lòng"),
            enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p401_img1.jpeg", "somatic", "Fig. 8.41: Điểm đau co rút mạc giữ bánh chè ngoài"),
            enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p405_img1.jpeg", "exam", "Figs 8.46A-B: Nghiệm pháp Hoffa khám đệm mỡ"),
            enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p406_img1.jpeg", "exam", "Fig. 8.47: Nghiệm pháp McMurray khám rách sụn chêm"),
            enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p407_img1.jpeg", "exam", "Fig. 8.49: Nghiệm pháp Lachman khám ACL"),
            enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p407_img2.jpeg", "exam", "Figs. 8.50A-B: Valgus and varus stress tests for collateral ligaments", custom_fig_number="8.50A-B"),
            enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p408_img1.jpeg", "exam", "Figs 8.51A-B: Plica test nếp gấp hoạt dịch bánh chè"),
            enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p410_img1.jpeg", "exam", "Fig. 8.52A: Nghiệm pháp ngăn kéo trước Anterior Drawer"),
            enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p410_img2.jpeg", "exam", "Fig. 8.52B: Nghiệm pháp ngăn kéo sau Posterior Drawer"),
            enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p411_img1.jpeg", "exam", "Fig. 8.53: Nghiệm pháp chuyển trục Pivot Shift Maneuver"),
            enrich_fig("assets/deepak_images/ch08_knee_ankle_foot_pain/p412_img1.jpeg", "exam", "Fig. 8.55: Dấu hiệu Mulder's Click khám u thần kinh Morton")
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
