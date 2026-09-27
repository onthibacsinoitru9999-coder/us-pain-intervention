# -*- coding: utf-8 -*-
from . import enrich_fig

def get_module():
    mod = {
        "id": "shoulder-pain",
        "chapter": 9,
        "region": "upper",
        "region_vi": "Khớp Vai & Đai Vai",
        "icon": "🏹",
        "title": "Shoulder Complex Pain, Rotator Cuff & Glenohumeral Differential",
        "title_vi": "🏹 Đau Khớp Vai, Đai Vai & Xung Đột Chóp Xoay",
        "chief_complaint": "Phàn nàn chính: Đau nhức vùng mặt ngoài khớp vai lan xuống cơ delta, đau tăng khi giơ tay qua đầu (Overhead activity), đau nhói khi nằm nghiêng đè lên vai về đêm, cảm giác kẹt vướng khớp vai kèm tiếng lạo xạo (Crepitus), cứng khớp không với tay gãi lưng được, yếu lực nâng cánh tay.",
        "author": "GS. Deepak Sebastian (Chuyên khảo Chương 9, pp. 417-466 - 50 Trang Sách)",
        "summary": "Mô hình tiếp cận chuyên khảo phức hợp đai vai (Shoulder Complex Master): Đai vai là một cấu trúc chức năng thống nhất gồm 4 khớp: Khớp ổ chảo - cánh tay (GH), khớp cùng - đòn (AC), khớp ức - đòn (SC) và khớp bả vai - lồng ngực (ST). Nắm vững cơ sinh học lăn - trượt (Roll-gliding), nhịp bả vai - cánh tay (Scapulohumeral rhythm 2:1), phân định các thể tổn thương mô bệnh học (Rách gân trên gai, viêm bao hoạt dịch dưới mỏm cùng vai, rách sụn viền SLAP, viêm co rút bao khớp) và các dạng rối loạn cơ sinh học (Trượt chỏm ra trước, trượt chỏm lên trên, rối loạn xoay bả vai).",

        # TAB 1: Giải phẫu, Cơ sinh học & Sờ nắn
        "tab1_anatomy_palpation": {
            "arthrokinematics": {
                "joint_system": "Phức hợp 4 khớp vận động: 1. Khớp ổ chảo - cánh tay (Glenohumeral - GH); 2. Khớp cùng vai - đòn (Acromioclavicular - AC); 3. Khớp ức - đòn (Sternoclavicular - SC); 4. Khớp bả vai - lồng ngực (Scapulothoracic - ST). Hệ thống cơ chóp xoay (SITS: Supraspinatus, Infraspinatus, Teres minor, Subscapularis) đóng vai trò nén ép và kéo hạ chỏm xương cánh tay trong ổ chảo.",
                "roll_gliding": "• Khớp Ổ Chảo - Cánh Tay (GH): Khớp chỏm cầu lồi trên ổ chảo lõm (Convex on Concave).\n- Giạng vai (Abduction): Chỏm xương cánh tay lăn lên trên (Roll superiorly), đồng thời trượt xuống dưới (Glide inferiorly) và ra sau (Glide posteriorly). Ở tầm giữa (Mid-range 60-120°), cánh tay phải tự động xoay ngoài để củ lớn lách qua bờ dưới mỏm cùng vai tránh va đụng.\n- Xoay ngoài (External rotation): Chỏm xương cánh tay lăn ra ngoài và trượt ra trước (Roll posterior, glide anterior), xương bả vai khép lại.\n- Xoay trong (Internal rotation): Chỏm xương cánh tay lăn vào trong và trượt ra sau (Roll anterior, glide posterior), xương bả vai đưa ra trước (Protraction).\n• Khớp Cùng Đòn (AC) & Khớp Ức Đòn (SC): Khớp hình yên ngựa (Saddle joint). Đầu ngoài xương đòn di chuyển cùng hướng với xương bả vai; trong khi đầu trong xương đòn (tại khớp ức đòn) di chuyển theo hướng ngược lại (trừ chuyển động xoay trục): Gập/Giạng thì đầu trong trượt ra trước - xuống dưới; Duỗi/Khép thì đầu trong trượt ra sau - lên trên.\n• Nhịp Bả Vai - Cánh Tay (Scapulohumeral Rhythm): Tỷ lệ chuẩn 2:1 (Trong 180° giạng vai thì 120° từ khớp ổ chảo cánh tay và 60° từ khớp bả vai lồng ngực). Cặp lực (Force couples): Cơ thang trên, cơ thang dưới và cơ răng trước phối hợp tạo lực xoay bả vai lên trên (Upward rotation) mở rộng vòm mỏm cùng vai.",
                "capsular_pattern": "Mô hình bao khớp (Capsular pattern): Xoay ngoài bị giới hạn nhiều nhất, tiếp theo là giạng vai, ít nhất là xoay trong (External rotation > Abduction > Internal rotation). Gặp điển hình trong Viêm co rút bao khớp vai (Frozen shoulder).",
                "loose_packed_position": "Vị trí lỏng lẻo nghỉ sinh lý (Loose-packed position): Giạng vai 55°, khép ngang 30° (nằm trên mặt phẳng xương bả vai - Scaption plane).",
                "close_packed_position": "Vị trí khóa chặt (Close-packed position): Giạng vai tối đa và xoay ngoài tối đa.",
                "force_couples_biomechanics": "Cặp lực xoay bả vai (Trapezius / Serratus anterior) đảm bảo ổ chảo luôn nằm dưới chỏm xương cánh tay. Nếu cơ răng trước hoặc cơ thang dưới yếu, bờ trong xương bả vai sẽ bị nhô lên (Scapular winging), vòm mỏm cùng vai bị chúc xuống gây xung đột chóp xoay thứ phát.",
                "figures": [
                    enrich_fig("assets/deepak_images/ch09_shoulder_pain/p418_img2.jpeg", "anatomy", "Fig. 9.1: Giải phẫu khớp vai nhìn từ phía trước"),
                    enrich_fig("assets/deepak_images/ch09_shoulder_pain/p423_img1.png", "anatomy", "Fig. 9.3: Cơ sinh học giơ tay qua đầu và chuyển động trượt chỏm bình thường"),
                    enrich_fig("assets/deepak_images/ch09_shoulder_pain/p438_img1.jpeg", "anatomy", "Fig. 9.7: Khuyết trên vai và khuyết gai ổ chảo (Spinoglenoid notch) nhìn từ phía sau"),
                    enrich_fig("assets/deepak_images/ch09_shoulder_pain/p439_img1.jpeg", "anatomy", "Fig. 9.8: Khoang tứ giác (Quadrilateral space) và tam giác cánh tay - tam đầu")
                ]
            },
            "palpation_steps": [
                {
                    "landmark": "1. Khớp Cùng Vai - Đòn (Acromioclavicular Joint - AC Joint)",
                    "patient_position": "Bệnh nhân ngồi thả lỏng hai tay bên thân mình.",
                    "technique": "Bác sĩ dùng đầu ngón tay trượt dọc theo bờ trước xương đòn từ trong ra ngoài. Đến điểm gờ xương nhô lên nơi xương đòn tiếp khớp với mỏm cùng vai - đó là khớp AC. Dùng ngón tay ấn nhẹ trực tiếp lên khe khớp và làm động tác ép khép ngang cánh tay (Cross-body adduction).",
                    "clinical_pearl": "Ấn đau chói khu trú tại khe khớp AC khẳng định Thoái hóa khớp cùng đòn (AC Arthrosis) hoặc Giãn/bán trật khớp cùng đòn sau ngã đập vai.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch09_shoulder_pain/p452_img1.jpeg", "anatomy", "Fig. 9.18: Đánh giá độ di động và sờ nắn khớp cùng vai đòn AC")
                    ]
                },
                {
                    "landmark": "2. Rãnh Nhị Đầu & Gân Cơ Nhị Đầu Đầu Dài (Bicipital Groove & Long Head of Biceps)",
                    "patient_position": "Bệnh nhân ngồi, cánh tay để xuôi, cẳng tay gập 90°.",
                    "technique": "Bác sĩ xác định bờ trước ngoài mỏm cùng vai, di chuyển ngón tay xuống dưới khoảng 2.5 cm vào mặt trước đầu trên xương cánh tay. Tay kia của bác sĩ cầm cẳng tay bệnh nhân xoay ngoài nhẹ nhàng: bác sĩ sẽ sờ thấy củ lớn xoay ra ngoài và củ bé xoay vào trong, ở giữa là rãnh nhị đầu sâu có gân nhị đầu dài nảy dưới đầu ngón tay.",
                    "clinical_pearl": "Ấn đau chói dọc rãnh nhị đầu tái hiện cơn đau trước vai gợi ý Viêm bao gân nhị đầu dài (Biceps Tenosynovitis) hoặc mất vững gân nhị đầu trật ra khỏi rãnh.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch09_shoulder_pain/p434_img1.jpeg", "anatomy", "Fig. 9.4: Vị trí giải phẫu rãnh nhị đầu và gân cơ nhị đầu đầu dài")
                    ]
                },
                {
                    "landmark": "3. Bao Hoạt Dịch Dưới Mỏm Cùng Vai (Subacromial / Subdeltoid Bursa)",
                    "patient_position": "Bệnh nhân ngồi, tay duỗi nhẹ ra phía sau (Hyperextension).",
                    "technique": "Khi duỗi cánh tay ra sau, chỏm xương cánh tay trượt ra trước đẩy bao hoạt dịch dưới mỏm cùng vai và gân trên gai lộ ra khỏi bờ trước ngoài mỏm cùng vai. Bác sĩ dùng ngón cái ấn sâu ngay dưới gờ trước ngoài mỏm cùng vai.",
                    "clinical_pearl": "Điểm đau nhức sâu dưới mỏm cùng vai thuyên giảm khi bệnh nhân giơ tay lên cao (Dấu hiệu Dawbarn) gợi ý Viêm bao hoạt dịch dưới mỏm cùng vai (Subacromial Bursitis).",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch09_shoulder_pain/p437_img1.jpeg", "anatomy", "Fig. 9.6: Vị trí bao hoạt dịch dưới mỏm cùng vai (Subacromial bursa)")
                    ]
                },
                {
                    "landmark": "4. Mỏm Quạ & Điểm Bám Cơ Quạ Cánh Tay (Coracoid Process & Conjoint Tendon)",
                    "patient_position": "Bệnh nhân ngồi thẳng.",
                    "technique": "Sờ dọc bờ dưới xương đòn ra ngoài đến chỗ lõm rãnh delta - ngực (Deltopectoral groove), ấn sâu vào trong khoảng 2.5 cm dưới xương đòn sẽ chạm vào một ụ xương cứng sâu như đầu ngón tay - mỏm quạ. Sờ mặt trong và mỏm dưới nơi bám gân cơ quạ cánh tay và cơ ngực bé.",
                    "clinical_pearl": "Ấn đau chói mỏm quạ gặp trong Hội chứng xung đột mỏm quạ (Coracoid Impingement) hoặc co rút cơ ngực bé gây chèn ép mạch thần kinh.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch09_shoulder_pain/p436_img1.jpeg", "anatomy", "Fig. 9.5: Mỏm quạ và nguyên ủy cơ quạ cánh tay (Coracobrachialis)")
                    ]
                },
                {
                    "landmark": "5. Khớp Ức - Đòn (Sternoclavicular Joint - SC Joint)",
                    "patient_position": "Bệnh nhân ngồi thẳng.",
                    "technique": "Sờ từ cán xương ức di chuyển lên trên và sang hai bên tới hõm ức. Sờ thấy đầu trong xương đòn to tròn tiếp khớp với khuyết đòn của xương ức. Đánh giá độ gồ và độ di động khi bệnh nhân nhún vai.",
                    "clinical_pearl": "Sưng nóng đỏ đau khớp ức đòn ở bệnh nhân đái tháo đường hoặc nghiện ma túy là cờ đỏ Nhiễm trùng khớp ức đòn (Septic SC arthritis) do tụ cầu vàng.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch09_shoulder_pain/p453_img1.jpeg", "anatomy", "Fig. 9.19: Đánh giá độ di động và khớp ức đòn SC")
                    ]
                }
            ],
            "figures": [
                enrich_fig("assets/deepak_images/ch09_shoulder_pain/p418_img2.jpeg", "anatomy", "Fig. 9.1: Khớp vai nhìn trước"),
                enrich_fig("assets/deepak_images/ch09_shoulder_pain/p423_img1.png", "anatomy", "Fig. 9.3: Cơ sinh học giơ tay qua đầu"),
                enrich_fig("assets/deepak_images/ch09_shoulder_pain/p434_img1.jpeg", "anatomy", "Fig. 9.4: Rãnh nhị đầu"),
                enrich_fig("assets/deepak_images/ch09_shoulder_pain/p436_img1.jpeg", "anatomy", "Fig. 9.5: Mỏm quạ và cơ quạ cánh tay"),
                enrich_fig("assets/deepak_images/ch09_shoulder_pain/p437_img1.jpeg", "anatomy", "Fig. 9.6: Bao hoạt dịch dưới mỏm cùng vai"),
                enrich_fig("assets/deepak_images/ch09_shoulder_pain/p438_img1.jpeg", "anatomy", "Fig. 9.7: Khuyết trên vai và khuyết gai ổ chảo"),
                enrich_fig("assets/deepak_images/ch09_shoulder_pain/p439_img1.jpeg", "anatomy", "Fig. 9.8: Khoang tứ giác"),
                enrich_fig("assets/deepak_images/ch09_shoulder_pain/p452_img1.jpeg", "anatomy", "Fig. 9.18: Sờ nắn khớp cùng vai đòn AC"),
                enrich_fig("assets/deepak_images/ch09_shoulder_pain/p453_img1.jpeg", "anatomy", "Fig. 9.19: Sờ nắn khớp ức đòn SC")
            ]
        },

        # TAB 2: Sàng lọc Cờ đỏ & Bệnh lý nguy hiểm
        "tab2_red_flags": [
            {
                "category": "🚨 Hoại Tử Vô Mạch Chỏm Xương Cánh Tay (Aseptic Bone Necrosis / AVN of Humeral Head)",
                "systemic_group": "Mạch máu xương / Độc tính chuyển hóa",
                "signs": "Đau nhức sâu trong khớp vai tăng dần, đau cả khi nghỉ ngơi và ban đêm làm mất ngủ, mất vận động tiến triển; Tiền sử dùng thuốc Corticosteroid kéo dài, lạm dụng rượu mạn tính, bệnh hồng cầu hình liềm hoặc thợ lặn biển sâu (Deep sea diving / Bệnh giảm áp Caisson).",
                "action": "Ngừng chịu lực khớp vai. Chụp ngay MRI khớp vai. Chuyển khám Phẫu thuật Chấn thương Chỉnh hình khớp vai xem xét khoan giải áp sớm trước khi chỏm xương cánh tay bị xẹp lún.",
                "gold_standard_labs": "Chụp cộng hưởng từ MRI khớp vai không tiêm thuốc (Độ nhạy 98% phát hiện sớm phù tủy xương giai đoạn I-II), X-quang khớp vai thẳng và tư thế nách (Axillary view) tìm dấu hiệu đường viền hình liềm (Crescent sign).",
                "figures": [
                    enrich_fig("assets/deepak_images/ch09_shoulder_pain/p418_img1.jpeg", "redflag", "Vùng cấp máu nhạy cảm chỏm xương cánh tay và nguy cơ hoại tử vô mạch AVN")
                ]
            },
            {
                "category": "🚨 Rách Lớn Chóp Xoay Cấp Tính Do Chấn Thương (Massive Acute Rotator Cuff Tear)",
                "systemic_group": "Chấn thương cơ gân nặng",
                "signs": "Sau ngã chống tay hoặc giật mạnh cánh tay, bệnh nhân nghe tiếng 'bựt' kèm đau xé rách vai dữ dội; Mất hoàn toàn khả năng chủ động giạng cánh tay (Dấu hiệu cánh tay rơi 'Drop Arm Sign' dương tính: không thể giữ tay ở tư thế giạng 90° khi bác sĩ buông tay); Yếu liệt hoàn toàn cơ trên gai và cơ dưới gai.",
                "action": "Cố định vai bằng đai nâng tay (Sling). Chuyển khám chuyên khoa phẫu thuật nội soi khớp vai khẩn cấp. Thời gian vàng khâu phục hồi gân chóp xoay là trong vòng 3 tuần đầu trước khi cơ bị thoái hóa mỡ và co rút không thể kéo lại được.",
                "gold_standard_labs": "Chụp cộng hưởng từ MRI khớp vai độ phân giải cao hoặc Siêu âm cơ xương khớp đánh giá độ rộng vết rách, độ co rút gân (Patte classification) và thoái hóa mỡ cơ chóp xoay (Goutallier stage).",
                "figures": [
                    enrich_fig("assets/deepak_images/ch09_shoulder_pain/p442_img1.jpeg", "redflag", "Fig. 9.10: Các vị trí tổn thương rách gân chóp xoay (Supraspinatus / Infraspinatus)"),
                    enrich_fig("assets/deepak_images/ch09_shoulder_pain/p440_img1.jpeg", "redflag", "Fig. 9.9: Các điểm xung đột cơ học phá hủy gân dưới mỏm cùng vai")
                ]
            },
            {
                "category": "🚨 Nhiễm Trùng Khớp Vai & Viêm Mủ Bao Hoạt Dịch (Septic Arthritis of Shoulder)",
                "systemic_group": "Nhiễm trùng ngoại khoa cấp cứu",
                "signs": "Sưng nóng đỏ đau khớp vai dữ dội, sốt cao rét run hoặc sốt nhẹ ở người già suy giảm miễn dịch, co cứng cơ dữ dội chống lại mọi vận động thụ động dù là nhỏ nhất (Spasm end-feel); Khớp vai phồng căng dịch mủ.",
                "action": "Chuyển viện cấp cứu ngoại khoa ngay trong ngày! Chọc hút dịch khớp vai làm xét nghiệm tế bào, nhuộm Gram và cấy vi khuẩn. Kháng sinh đường tĩnh mạch liều cao và phẫu thuật nội soi rửa khớp dẫn lưu mủ.",
                "gold_standard_labs": "Chọc dịch khớp vai: Bạch cầu dịch khớp > 50,000/mm³ với > 75% bạch cầu đa nhân trung tính; Cấy vi khuẩn dương tính (thường gặp Staphylococcus aureus); Xét nghiệm máu: Bạch cầu tăng cao, Procalcitonin tăng, ESR/CRP tăng vọt.",
                "figures": []
            },
            {
                "category": "🚨 Rách Sụn Viền Ổ Chảo Phía Trên Từ Trước Ra Sau (SLAP Lesion Type II-IV)",
                "systemic_group": "Tổn thương cấu trúc nội khớp mất vững",
                "signs": "Đau sâu trong khớp vai sau chấn thương giật mạnh hoặc ở vận động viên ném bóng, cảm giác kẹt khớp (Catching/Locking), nghe tiếng 'cục' khi giơ tay xoay vai qua đầu; Giảm sút tốc độ ném bóng rõ rệt.",
                "action": "Hạn chế động tác giơ tay qua đầu chịu lực. Chụp MRI cản từ nội khớp (MR Arthrogram) đánh giá sụn viền và điểm bám gân nhị đầu dài.",
                "gold_standard_labs": "Chụp cộng hưởng từ tiêm thuốc đối quang từ nội khớp (MRA Shoulder) - Tiêu chuẩn vàng phát hiện rách sụn viền SLAP.",
                "figures": [
                    enrich_fig("assets/deepak_images/ch09_shoulder_pain/p445_img1.jpeg", "redflag", "Fig. 9.12: Các vị trí rách sụn viền ổ chảo (Labral tear sites - SLAP & Bankart)")
                ]
            }
        ],

        # TAB 3: Đau Chuyển Tạng & Đau Do Thuốc
        "tab3_visceral_drug_pain": {
            "visceral_referrals": [
                {
                    "organ": "Gan & Đường Mật (Liver, Gallbladder & Cholangitis)",
                    "source": "Viêm Túi Mật, Sỏi Mật, Viêm Đường Mật (Deepak Ch 9 Cholangitis & Liver Abscess)",
                    "pain_pattern": "Đau vùng hạ sườn phải lan xuyên ra sau lưng dưới góc dưới xương bả vai phải và đỉnh vai phải.",
                    "neuro_mechanism": "Túi mật và bao gan Glisson được chi phối bởi thần kinh giao cảm T7-T9 và các nhánh của thần kinh hoành phải (C3-C5). Xung động viêm kích thích sừng sau tủy sống C3-C5 gây đau chuyển lên đỉnh vai phải.",
                    "differential": "Kèm theo sốt, vàng da nhẹ, buồn nôn, đau tăng sau bữa ăn nhiều chất béo; Khám khớp vai phải hoàn toàn bình thường, không có điểm đau gân cơ khu trú.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch09_shoulder_pain/p436_img1.jpeg", "visceral", "Fig. 9.5: Cấu trúc vùng nách trước và liên hệ dẫn truyền thần kinh hoành")
                    ]
                },
                {
                    "organ": "Lách & Vòm Hoành Trái (Spleen / Kehr's Sign)",
                    "source": "Vỡ Lách Bao Hoạt Dịch / Tràn Máu Dưới Hoành Trái",
                    "pain_pattern": "Đau nhức nhối dữ dội đỉnh vai trái sau chấn thương vùng bụng ngực trái (Dấu hiệu Kehr dương tính).",
                    "neuro_mechanism": "Máu tụ dưới vòm hoành trái kích thích trực tiếp dây thần kinh hoành trái (Phrenic nerve C3-C5) quy chiếu đau lên phân đoạn da bờ trên cơ thang trái.",
                    "differential": "Bệnh nhân có tiền sử va chạm ngực bụng trái, da tái nhợt, tụt huyết áp, bụng chướng đau; Là cấp cứu ngoại khoa vỡ tạng đặc đe dọa sốc mất máu!",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch09_shoulder_pain/p437_img1.jpeg", "visceral", "Fig. 9.6: Vùng dưới mỏm cùng vai và phản xạ chuyển đau từ cơ hoành C3-C5")
                    ]
                },
                {
                    "organ": "Cơ Tim / Bệnh Động Mạch Vành (Coronary Artery Disease)",
                    "source": "Cơn Đau Thắt Ngực & Nhồi Máu Cơ Tim Cấp",
                    "pain_pattern": "Đau tức nghẹt đè nặng ngực trái lan ra mặt trước vai trái và bờ trong cánh tay trái theo rễ C8-T1.",
                    "neuro_mechanism": "Sợi thần kinh giao cảm tim hòa nhập vào tủy sống T1-T5 quy chiếu ra vùng vai ngực cùng bên.",
                    "differential": "Đau xuất hiện khi gắng sức, lạnh hoặc xúc động, kéo dài 5-20 phút, giảm khi ngậm Nitroglycerin; Vận động thụ động khớp vai không gây đau.",
                    "figures": []
                }
            ],
            "drug_induced": [
                "1. Nhóm Statin: Gây yếu cơ chóp xoay và đau mỏi cơ delta hai bên, dễ nhầm với hội chứng xung đột chóp xoay.",
                "2. Nhóm Fluoroquinolone: Gây đứt gân trên gai (Supraspinatus) hoặc gân nhị đầu dài tự phát khi cử động nhẹ.",
                "3. Corticosteroid toàn thân hoặc tiêm nội khớp lặp lại > 3 lần/năm: Gây teo mô mỡ dưới da, đứt gân chóp xoay thứ phát và hoại tử vô mạch chỏm xương cánh tay (AVN)."
            ]
        },

        # TAB 4: Nghiệm Pháp Khám Thực Thể Đặc Hiệu
        "tab4_provocative_tests": {
            "provocative_tests": [
                {
                    "name": "Nghiệm Pháp Neer (Neer Impingement Test)",
                    "patient_position": "Bệnh nhân ngồi hoặc đứng thẳng, cánh tay thả lỏng.",
                    "examiner_action": "Bác sĩ đứng phía sau, một tay đè cố định xương bả vai để ngăn bả vai xoay lên trên. Tay kia của bác sĩ cầm cẳng tay bệnh nhân đưa cánh tay vào tư thế xoay trong tối đa (ngón cái chúc xuống đất), sau đó từ từ nâng gập thụ động cánh tay ra trước lên cao tối đa qua đầu.",
                    "end_feel": "Cảm giác cứng nén ép giữa củ lớn và bờ trước mỏm cùng vai.",
                    "sensitivity": "79%",
                    "specificity": "53%",
                    "lr_positive": "1.7",
                    "lr_negative": "0.40",
                    "diagnostic_role": "SnNOut (Sàng lọc hội chứng xung đột dưới mỏm cùng vai)",
                    "clinical_role": "Dương tính khi tái hiện cơn đau nhói ở mặt trước ngoài vai ở tầm 70–120° (do củ lớn kẹp nén gân trên gai và bao hoạt dịch vào bờ trước dưới mỏm cùng vai).",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch09_shoulder_pain/p456_img1.jpeg", "exam", "Fig. 9.24: Thao tác nâng gập thụ động cánh tay trong nghiệm pháp Neer")
                    ]
                },
                {
                    "name": "Nghiệm Pháp Hawkins-Kennedy (Hawkins-Kennedy Impingement Test)",
                    "patient_position": "Bệnh nhân ngồi thẳng, hai tay thả lỏng.",
                    "examiner_action": "Bác sĩ nâng cánh tay bệnh nhân gập ra trước 90°, gập khuỷu tay 90°. Một tay bác sĩ nâng đỡ khuỷu tay, tay kia cầm cổ tay bệnh nhân từ từ xoay trong cánh tay thụ động một cách cưỡng bức (đè cổ tay chúc xuống sàn nhà).",
                    "end_feel": "Cảm nhận cản trở cơ học nén ép vào dây chằng quạ - cùng vai.",
                    "sensitivity": "79%",
                    "specificity": "59%",
                    "lr_positive": "1.9",
                    "lr_negative": "0.36",
                    "diagnostic_role": "SnNOut",
                    "clinical_role": "Dương tính khi xuất hiện cơn đau nhói ở mặt trước ngoài khớp vai do củ lớn bị ép sát vào dây chằng quạ - cùng vai (Coracoacromial ligament).",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch09_shoulder_pain/p463_img1.jpeg", "exam", "Fig. 9.35: Thao tác xoay trong cưỡng bức gập 90° trong Hawkins-Kennedy Test")
                    ]
                },
                {
                    "name": "Nghiệm Pháp Speed (Speed's Test for Biceps Tendon & SLAP)",
                    "patient_position": "Bệnh nhân ngồi hoặc đứng thẳng.",
                    "examiner_action": "Bệnh nhân đưa cánh tay gập ra trước 90°, duỗi thẳng khớp khuỷu, cẳng tay ngửa hoàn toàn (lòng bàn tay hướng lên trần nhà). Bác sĩ đặt một bàn tay lên cổ tay bệnh nhân và ấn xuống dưới, yêu cầu bệnh nhân gập vai chống lại lực ấn của bác sĩ. Tay kia của bác sĩ sờ nắn vào rãnh nhị đầu.",
                    "end_feel": "Cảm giác co cơ đẳng trường có sức đề kháng.",
                    "sensitivity": "68%",
                    "specificity": "56%",
                    "lr_positive": "1.5",
                    "lr_negative": "0.57",
                    "diagnostic_role": "Đánh giá gân nhị đầu dài & rách sụn viền SLAP",
                    "clinical_role": "Dương tính khi bệnh nhân thấy đau chói khu trú đúng tại rãnh nhị đầu ở mặt trước vai hoặc sâu trong khớp vai.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch09_shoulder_pain/p454_img1.jpeg", "exam", "Fig. 9.21: Thao tác đề kháng gập vai với cẳng tay ngửa trong Speed's Test")
                    ]
                },
                {
                    "name": "Nghiệm Pháp Yergason (Yergason's Test)",
                    "patient_position": "Bệnh nhân ngồi thẳng, cánh tay áp sát thân mình, khuỷu tay gập 90°, cẳng tay sấp.",
                    "examiner_action": "Bác sĩ một tay cầm nắm lấy cổ tay bệnh nhân, tay kia ôm giữ vùng rãnh nhị đầu của khớp vai. Yêu cầu bệnh nhân chủ động ngửa cẳng tay và xoay ngoài cánh tay chống lại lực cản cưỡng bức của bác sĩ.",
                    "end_feel": "Sức căng cơ bắp đẳng trường.",
                    "sensitivity": "43%",
                    "specificity": "96%",
                    "lr_positive": "10.8",
                    "lr_negative": "0.59",
                    "diagnostic_role": "SpPIn (Khẳng định viêm hoặc trật gân nhị đầu)",
                    "clinical_role": "Dương tính khi đau chói tại rãnh nhị đầu hoặc bác sĩ sờ thấy gân nhị đầu 'bật' trượt ra khỏi rãnh (do đứt dây chằng ngang xương cánh tay Transverse humeral ligament).",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch09_shoulder_pain/p455_img1.jpeg", "exam", "Fig. 9.22: Thao tác đề kháng ngửa cẳng tay và xoay ngoài trong Yergason's Test")
                    ]
                },
                {
                    "name": "Dấu Hiệu Trễ Xoay Ngoài (External Rotation Lag Sign - ERLS / Infraspinatus Test)",
                    "patient_position": "Bệnh nhân ngồi quay lưng về phía bác sĩ, cánh tay áp sát thân mình, khuỷu gập 90°.",
                    "examiner_action": "Bác sĩ cầm cổ tay và khuỷu tay bệnh nhân, thụ động đưa cánh tay vào tư thế xoay ngoài gần tối đa (khoảng 80°). Sau đó bác sĩ yêu cầu bệnh nhân tự giữ nguyên vị trí cánh tay rồi bác sĩ buông tay giữ cổ tay ra.",
                    "end_feel": "Không áp dụng.",
                    "sensitivity": "70%",
                    "specificity": "100%",
                    "lr_positive": "Vô cực",
                    "lr_negative": "0.30",
                    "diagnostic_role": "SpPIn tuyệt đối (Tiêu chuẩn vàng rách gân dưới gai)",
                    "clinical_role": "Bình thường bệnh nhân giữ được tư thế. Dương tính khi cẳng tay bệnh nhân bị 'rơi' tụt xoay vào trong (Lag sign), khẳng định rách hoàn toàn gân cơ dưới gai (Infraspinatus) hoặc cơ tròn bé.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch09_shoulder_pain/p460_img1.jpeg", "exam", "Fig. 9.31: Đánh giá dấu hiệu trễ xoay ngoài External Rotation Lag Sign")
                    ]
                },
                {
                    "name": "Nghiệm Pháp Nâng Rời Lưng Gerber (Gerber Lift-Off Test / Subscapularis)",
                    "patient_position": "Bệnh nhân đứng hoặc ngồi, đưa mu bàn tay ra sau lưng tựa vào vùng thắt lưng.",
                    "examiner_action": "Yêu cầu bệnh nhân chủ động nâng mu bàn tay rời xa khỏi mặt lưng ra phía sau. Nếu bệnh nhân làm được, bác sĩ tạo lực ấn đẩy bàn tay bệnh nhân trở lại lưng để thử cơ lực.",
                    "end_feel": "Sức căng cơ bắp nội xoay.",
                    "sensitivity": "82%",
                    "specificity": "92%",
                    "lr_positive": "10.3",
                    "lr_negative": "0.20",
                    "diagnostic_role": "SpPIn (Đánh giá rách gân cơ dưới vai Subscapularis)",
                    "clinical_role": "Dương tính khi bệnh nhân không thể nâng bàn tay rời khỏi mặt lưng hoặc cơ lực kháng cự rất yếu, khẳng định tổn thương rách gân cơ dưới vai (Subscapularis).",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch09_shoulder_pain/p462_img1.jpeg", "exam", "Fig. 9.33: Tư thế đặt tay sau lưng trong nghiệm pháp Gerber Lift-Off Test")
                    ]
                },
                {
                    "name": "Nghiệm Pháp Ép Chủ Động O'Brien (Active Compression Test of O'Brien)",
                    "patient_position": "Bệnh nhân đứng thẳng, cánh tay gập ra trước 90°, khép ngang 10-15°.",
                    "examiner_action": "Thực hiện 2 vị trí: Vị trí 1 (Xoay trong tối đa: cẳng tay sấp, ngón cái chúc xuống đất), bác sĩ ấn cổ tay xuống dưới trong khi bệnh nhân kháng cự; Vị trí 2 (Xoay ngoài tối đa: cẳng tay ngửa hoàn toàn, lòng bàn tay hướng lên), bác sĩ lặp lại lực ấn tương tự.",
                    "end_feel": "Sức đề kháng cơ học.",
                    "sensitivity": "67%",
                    "specificity": "85%",
                    "lr_positive": "4.5",
                    "lr_negative": "0.39",
                    "diagnostic_role": "Phát hiện rách sụn viền SLAP và bệnh khớp AC",
                    "clinical_role": "Dương tính khẳng định rách sụn viền SLAP khi bệnh nhân cảm thấy đau sâu trong khớp vai ở Vị trí 1 (ngón cái chúc xuống) và cơn đau thuyên giảm rõ rệt hoặc biến mất ở Vị trí 2 (ngửa bàn tay). Nếu đau nông trên đỉnh vai ở cả 2 vị trí -> Bệnh khớp cùng đòn AC.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch09_shoulder_pain/p458_img1.jpeg", "exam", "Fig. 9.28: Vị trí 2 nghiệm pháp nén ép chủ động O'Brien với cẳng tay ngửa")
                    ]
                },
                {
                    "name": "Nghiệm Pháp Crank Test Khám Rách Sụn Viền Ổ Chảo (Crank Test)",
                    "patient_position": "Bệnh nhân nằm ngửa hoặc ngồi, cánh tay giạng 160° trên mặt phẳng xương bả vai, khuỷu gập 90°.",
                    "examiner_action": "Bác sĩ dùng một tay đẩy dồn lực ép dọc trục xương cánh tay vào hõm ổ chảo, đồng thời tay kia xoay trong và xoay ngoài cánh tay liên tục.",
                    "end_feel": "Cảm giác lạo xạo kẹt khớp cơ học.",
                    "sensitivity": "76%",
                    "specificity": "80%",
                    "lr_positive": "3.8",
                    "lr_negative": "0.30",
                    "diagnostic_role": "Đánh giá rách sụn viền ổ chảo",
                    "clinical_role": "Dương tính khi tái hiện cơn đau nhói sâu trong khớp vai kèm theo tiếng lục cục hoặc cảm giác kẹt sụn viền.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch09_shoulder_pain/p457_img1.jpeg", "exam", "Fig. 9.26: Nghiệm pháp Crank Test tư thế nằm ngửa đẩy dọc trục")
                    ]
                },
                {
                    "name": "Dấu Hiệu Rãnh Hõm Sulcus (Sulcus Sign for Inferior Instability)",
                    "patient_position": "Bệnh nhân ngồi thẳng, hai tay thả lỏng buông thõng bên hông.",
                    "examiner_action": "Bác sĩ một tay ổn định đai vai, tay kia cầm cánh tay phía trên khuỷu và kéo thẳng cánh tay xuống phía dưới dọc trục.",
                    "end_feel": "Sức căng bao khớp dưới.",
                    "sensitivity": "72%",
                    "specificity": "93%",
                    "lr_positive": "10.3",
                    "lr_negative": "0.30",
                    "diagnostic_role": "Đánh giá mất vững khớp vai đa hướng / dưới",
                    "clinical_role": "Dương tính khi xuất hiện một rãnh hõm sâu (> 1 cm) ngay phía dưới mỏm cùng vai do chỏm xương cánh tay bị tụt xuống dưới.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch09_shoulder_pain/p459_img1.jpeg", "exam", "Fig. 9.30: Dấu hiệu rãnh hõm Sulcus Sign phát hiện mất vững khớp vai")
                    ]
                },
                {
                    "name": "Nghiệm Pháp Đề Kháng Xoay Trong Phân Biệt Xung Đột (Internal Rotation Resisted Strength Test - IRRST)",
                    "patient_position": "Bệnh nhân ngồi thẳng, cánh tay giạng 90°, xoay ngoài 80°, khuỷu gập 90°.",
                    "examiner_action": "Bác sĩ lần lượt thử cơ lực đề kháng động tác Xoay ngoài (ER) và Xoay trong (IR) đẳng trường tối đa.",
                    "end_feel": "Sức co cơ đẳng trường.",
                    "sensitivity": "88%",
                    "specificity": "96%",
                    "lr_positive": "22.0",
                    "lr_negative": "0.12",
                    "diagnostic_role": "Phân biệt Xung đột Dưới mỏm cùng vai vs Xung đột Nội khớp Sau Trên",
                    "clinical_role": "Nếu cơ lực Xoay ngoài (ER) yếu hơn Xoay trong (IR) -> Xung đột Dưới mỏm cùng vai kinh điển (Subacromial Impingement). Nếu cơ lực Xoay trong (IR) yếu hơn Xoay ngoài (ER) -> Xung đột Nội khớp Phía Sau Trên (Internal/Posterior-Superior Glenoid Impingement) thường gặp ở VĐV ném bóng.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch09_shoulder_pain/p464_img1.jpeg", "exam", "Fig. 9.38: Nghiệm pháp so sánh sức mạnh đề kháng xoay trong IRRST")
                    ]
                },
                {
                    "name": "Nghiệm Pháp Nghiêng Sau Xương Bả Vai (Scapula Backward Tipping Test - SBTT)",
                    "technique": "Nghiệm pháp độc quyền do GS. Deepak Sebastian nghiên cứu sáng chế (pp. 451, 464). Bác sĩ đứng phía sau, đặt một bàn tay nâng đỡ mỏm quạ từ phía trước và bàn tay kia đặt ở góc dưới xương bả vai, trợ lực nghiêng xương bả vai ra sau trong khi bệnh nhân giơ tay lên cao.",
                    "patient_position": "Bệnh nhân ngồi thẳng, hai tay thả lỏng.",
                    "examiner_action": "Bác sĩ đứng phía sau, đặt một bàn tay nâng đỡ mỏm quạ từ phía trước và bàn tay kia đặt ở góc dưới xương bả vai, trợ lực nghiêng xương bả vai ra sau trong khi bệnh nhân giơ tay lên cao.",
                    "end_feel": "Mô mềm trượt đàn hồi.",
                    "sensitivity": "75%",
                    "specificity": "82%",
                    "lr_positive": "4.2",
                    "lr_negative": "0.30",
                    "diagnostic_role": "Đánh giá rối loạn cơ sinh học bả vai (M-02 Audit Rule)",
                    "clinical_role": "Dương tính khi thao tác trợ lực nghiêng sau bả vai làm giảm ngay lập tức triệu chứng đau vai khi giơ tay, chứng tỏ đau vai xuất phát từ co rút cơ ngực bé và yếu cơ thang dưới.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch09_shoulder_pain/p464_img2.jpeg", "exam", "Fig. 9.39: Kỹ thuật khám nghiệm pháp nghiêng sau xương bả vai SBTT")
                    ]
                }
            ],
            "somatic_dysfunctions": [
                {
                    "dysfunction": "Chỏm Xương Cánh Tay Trượt Ra Trước (Anterior Humerus Translation Fault)",
                    "biomechanics": "Chỏm xương cánh tay bị đẩy nhô ra trước quá 1/3 bề dày mỏm cùng vai ở tư thế nghỉ, thường do bao khớp sau bị co cứng và cơ dưới vai bị suy yếu. Khi giơ tay, chỏm không thể trượt lùi ra sau, dẫn tới va quẹt liên tục vào mỏm cùng vai và gân nhị đầu.",
                    "assessment_correction": "Bác sĩ sờ nắn độ nhô chỏm từ phía sau; Thực hiện kỹ thuật trượt chỏm ra sau (Posterior glenohumeral glide mobilization) và kéo giãn bao khớp sau (Sleeper stretch).",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch09_shoulder_pain/p447_img1.jpeg", "somatic", "Fig. 9.13: Đánh giá độ trượt ra trước của chỏm xương cánh tay (Anterior Humerus)")
                    ]
                },
                {
                    "dysfunction": "Chỏm Xương Cánh Tay Trượt Lên Trên (Superior Humerus Migration Fault)",
                    "biomechanics": "Khoảng cách mỏm cùng - chỏm cánh tay bị thu hẹp (< 7 mm trên X-quang) do cơ trên gai bị rách hoặc suy yếu, mất lực kéo hạ chỏm. Khi cơ delta co, lực kéo hướng lên trên làm chỏm cánh tay đội thẳng vào vòm mỏm cùng vai.",
                    "assessment_correction": "Kỹ thuật trượt hạ chỏm xuống dưới (Inferior glide mobilization) và tập phục hồi chức năng cặp lực chóp xoay.",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch09_shoulder_pain/p448_img1.jpeg", "somatic", "Fig. 9.15: Đánh giá chỏm xương cánh tay trượt lên trên (Superior Humerus)")
                    ]
                },
                {
                    "dysfunction": "Rối Loạn Xoay Bả Vai Xuống Dưới & Nhô Ra Trước (Scapular Downward Rotation & Protraction)",
                    "biomechanics": "Xương bả vai bị xoay xuống dưới do cơ nâng vai và cơ trám co cứng, trong khi cơ thang dưới suy yếu. Bả vai bị nhô ra trước và nghiêng trước do cơ ngực bé co rút ngắn lại.",
                    "assessment_correction": "Kéo giãn giải phóng cơ ngực bé và cơ nâng vai; Tập kích hoạt cơ răng trước (Push-up plus) và cơ thang dưới (Prone Y-to-T raises).",
                    "figures": [
                        enrich_fig("assets/deepak_images/ch09_shoulder_pain/p449_img1.jpeg", "somatic", "Fig. 9.16: Đánh giá rối loạn xoay bả vai xuống dưới (Scapula Downward Rotation)"),
                        enrich_fig("assets/deepak_images/ch09_shoulder_pain/p450_img1.jpeg", "somatic", "Fig. 9.17: Đánh giá xương bả vai nhô ra trước (Protracted Scapula)")
                    ]
                }
            ]
        },

        # TAB 5: Ma Trận Chẩn Đoán Phân Biệt & Ca Bệnh Khó
        "tab5_differential_matrix": {
            "matrix": [
                {
                    "condition": "Hội Chứng Xung Đột Dưới Mỏm Cùng Vai (Subacromial Impingement Syndrome - SAIS)",
                    "onset": "Từ từ ở người làm việc giơ tay qua đầu, đau cung đau vận động (Painful Arc 60–120°)",
                    "aggravating": "Tăng khi giơ tay qua đầu, nằm nghiêng đè lên vai; Giảm khi xuôi tay bên hông",
                    "confirmatory_test": "Neer Test (+), Hawkins-Kennedy (+), Cung đau Painful arc (+)",
                    "gold_standard": "Nghiệm pháp tiêm thử Neer (Neer injection test): Tiêm Lidocaine vào bao hoạt dịch dưới mỏm cùng vai giúp hết đau tức thì",
                    "key_differentiator": "Tầm vận động thụ động PROM hoàn toàn bình thường, chỉ đau ở cung 60-120°",
                    "web1_procedure_id": "sasd-bursa"
                },
                {
                    "condition": "Rách Gân Trên Gai Chóp Xoay (Supraspinatus Tendon Tear)",
                    "onset": "Người lớn tuổi thoái hóa hoặc sau chấn thương ngã chống tay giật vai",
                    "aggravating": "Đau nhức dữ dội ban đêm, yếu cơ rõ rệt khi nhấc cánh tay lên cao",
                    "confirmatory_test": "Drop Arm Sign (+), External Rotation Lag Sign (+), Empty Can Test (+)",
                    "gold_standard": "MRI khớp vai hoặc Siêu âm độ phân giải cao: Thấy khuyết mất liên tục sợi gân, tụ dịch",
                    "key_differentiator": "Yếu cơ thực thể không do ức chế đau; Phân biệt rách bán phần (Partial) với toàn phần (Full-thickness)",
                    "web1_procedure_id": "sasd-bursa"
                },
                {
                    "condition": "Viêm Co Rút Bao Khớp Vai (Adhesive Capsulitis / Đông Cứng Khớp Vai)",
                    "onset": "Thường gặp ở phụ nữ 40-60 tuổi, đái tháo đường, sau bất động vai; Tiến triển 3 giai đoạn (Đóng băng -> Cứng khớp -> Tan băng)",
                    "aggravating": "Đau dữ dội về đêm giai đoạn 1, hạn chế tầm vận động chủ động VÀ thụ động ở giai đoạn 2",
                    "confirmatory_test": "Mô hình bao khớp: Mất xoay ngoài thụ động nghiêm trọng (> 50%) ngay cả khi cơ mềm nhão",
                    "gold_standard": "MRI khớp vai: Dày bao khớp và dây chằng quạ - cánh tay (CHL) > 4mm tại khoảng gian chóp xoay (Rotator interval)",
                    "key_differentiator": "Mất vận động thụ động (PROM) như nhau cả khi gây tê; X-quang khớp xương bình thường",
                    "web1_procedure_id": "glenohumeral-posterior"
                },
                {
                    "condition": "Viêm Bao Gân Cơ Nhị Đầu Đầu Dài (Biceps Tenosynovitis)",
                    "onset": "Thường đi kèm xung đột chóp xoay hoặc sau nâng vật nặng lặp lại",
                    "aggravating": "Tăng khi mang vác đồ vật phía trước, với tay ra sau lấy đồ",
                    "confirmatory_test": "Speed's Test (+), Yergason's Test (+), Ấn chói rãnh nhị đầu",
                    "gold_standard": "Siêu âm khớp vai: Tràn dịch bao quanh gân nhị đầu dài hình bia bắn (Target sign) trên mặt cắt ngang",
                    "key_differentiator": "Đau khu trú chính xác ở mặt trước vai dọc rãnh nhị đầu, xoay ngoài vai tự do không đau",
                    "web1_procedure_id": "biceps-tendon"
                },
                {
                    "condition": "Thoái Hóa Khớp Cùng Vai Đòn (Acromioclavicular Joint Arthrosis)",
                    "onset": "Người tập tạ (Bench press), lao động nặng, sau chấn thương đập vai",
                    "aggravating": "Tăng khi khép ngang cánh tay qua ngực (Cross-body adduction) hoặc với tay sang vai đối diện",
                    "confirmatory_test": "Cross-body Adduction Test (+), O'Brien Test đau nông đỉnh vai",
                    "gold_standard": "X-quang khớp AC tư thế Zanca (chếch 10-15° lên đầu): Hẹp khe khớp, gai xương mỏm đòn",
                    "key_differentiator": "Điểm đau khu trú nông ngay trên đỉnh khớp AC, sờ thấy phì đại khớp gồ lên",
                    "web1_procedure_id": "ac-joint"
                },
                {
                    "condition": "Rách Sụn Viền Ổ Chảo Phía Trên (SLAP Lesion)",
                    "onset": "Vận động viên ném bóng (Overhead athlete) hoặc ngã chống tay chịu lực dọc",
                    "aggravating": "Tăng khi phát lực ném bóng, nghe tiếng cục và kẹt khớp",
                    "confirmatory_test": "O'Brien Test (+ đau sâu), Crank Test (+), Biceps Load Test II (+)",
                    "gold_standard": "Chụp cộng hưởng từ cản từ nội khớp (MR Arthrogram - MRA)",
                    "key_differentiator": "Cảm giác lạo xạo kẹt khớp sâu trong ổ chảo, Speed test đau sâu",
                    "web1_procedure_id": None
                }
            ],
            "complex_cases_reasoning": [
                {
                    "case_title": "Biện Luận Ca Khó: Chẩn Đoán Sớm Viêm Co Rút Bao Khớp Vai Giai Đoạn 1 (Freezing) vs Rách Chóp Xoay",
                    "clinical_dilemma": "Bệnh nhân nữ 54 tuổi có tiền sử đái tháo đường type 2 phàn nàn đau dữ dội khớp vai trái 6 tuần, đau nhức buốt sâu tăng nhiều về đêm khiến mất ngủ. Khám lâm sàng giơ tay lên cao đau chói, Neer (+) và Hawkins (+). Siêu âm tại cơ sở khác đọc là 'Viêm gân trên gai rách bán phần'. Bệnh nhân được tiêm bao hoạt dịch dưới mỏm cùng vai 2 lần nhưng không đỡ đau.",
                    "differential_rationale": "• Sai lầm thường gặp: Nhầm lẫn giữa Viêm co rút bao khớp vai giai đoạn 1 (Freezing stage) với Hội chứng xung đột chóp xoay đơn thuần. Trong giai đoạn 1 của đông cứng khớp vai, phản ứng viêm màng hoạt dịch tăng sinh mạch dữ dội gây đau buốt ban đêm, nhưng tầm vận động khớp chưa bị dính cứng rõ rệt, dễ làm bác sĩ bỏ qua.\n• Thao tác khám then chốt của Deepak Sebastian: Đặt cánh tay bệnh nhân áp sát thân mình và nhẹ nhàng xoay ngoài thụ động (PROM External Rotation). So sánh với bên lành: Nếu xoay ngoài bên bệnh bị hạn chế từ 15-20° kèm cảm giác chặn cứng đàn hồi sớm (Capsular end-feel) -> Đây chắc chắn là Giai đoạn 1 của Đông Cứng Khớp Vai!",
                    "clinical_pearl": "Khi đã chẩn đoán Đông cứng khớp vai giai đoạn 1, việc tiêm bao hoạt dịch dưới mỏm cùng vai hoàn toàn vô tác dụng vì ổ viêm nằm trong khoang bao khớp ổ chảo cánh tay. Chỉ định can thiệp chính xác là: Tiêm nong bao khớp ổ chảo - cánh tay ngả sau (Glenohumeral Hydrodilatation) dưới hướng dẫn siêu âm kết hợp Corticoid nội khớp."
                }
            ]
        },

        # TAB 6: Phác Đồ Can Thiệp Siêu Âm Web 1
        "tab6_intervention_linkage": {
            "intervention_guidelines": "Khớp vai là vùng có chỉ định can thiệp siêu âm đa dạng và hiệu quả nhất trong chuyên ngành Cơ Xương Khớp. Định vị chính xác giải phẫu đích (Bao hoạt dịch dưới mỏm cùng vai, rãnh gân nhị đầu, khoang khớp ổ chảo cánh tay ngả sau hay thần kinh trên vai) dưới siêu âm thời gian thực giúp đưa thuốc trúng đích 100%, tránh nguy cơ tiêm nhầm vào sợi gân gây đứt gân.",
            "recommended_web1_procedures": [
                {
                    "id": "sasd-bursa",
                    "nameVi": "Tiêm bao hoạt dịch dưới mỏm cùng vai - dưới cơ delta (SASD Bursa)",
                    "role": "Thủ thuật can thiệp hàng đầu điều trị Hội chứng xung đột dưới mỏm cùng vai và viêm gân vôi hóa",
                    "indication": "Xung đột chóp xoay, viêm bao hoạt dịch dưới mỏm cùng vai kháng trị thuốc uống"
                },
                {
                    "id": "glenohumeral-posterior",
                    "nameVi": "Tiêm khớp ổ chảo - cánh tay ngả sau (Glenohumeral Posterior Approach)",
                    "role": "Tiêu chuẩn vàng tiêm nội khớp và nong bao khớp (Hydrodilatation) điều trị Đông cứng khớp vai",
                    "indication": "Viêm co rút bao khớp vai (Adhesive capsulitis), thoái hóa khớp vai, viêm màng hoạt dịch"
                },
                {
                    "id": "biceps-tendon",
                    "nameVi": "Tiêm quanh bao gân cơ nhị đầu đầu dài dưới hướng dẫn siêu âm",
                    "role": "Điều trị viêm bao gân nhị đầu dài kháng trị, đưa thuốc vào bao gân tránh đâm vào sợi gân",
                    "indication": "Đau rãnh nhị đầu dai dẳng, Speed test (+), siêu âm có dịch quanh gân"
                },
                {
                    "id": "ac-joint",
                    "nameVi": "Tiêm khớp cùng vai - đòn (AC Joint Injection)",
                    "role": "Điều trị thoái hóa khớp cùng đòn gây đau chói đỉnh vai khi khép tay",
                    "indication": "Thoái hóa khớp AC phì đại, đau khe khớp khi ấn chẩn và làm Cross-body adduction test"
                },
                {
                    "id": "suprascapular-nerve",
                    "nameVi": "Phong bế thần kinh trên vai tại hố trên gai (Suprascapular Nerve Block)",
                    "role": "Cắt cơn đau khớp vai cấp tính và mạn tính không dùng corticoid nội khớp",
                    "indication": "Đông cứng khớp vai nặng, đau sau phẫu thuật chóp xoay, chống chỉ định corticoid"
                },
                {
                    "id": "suprascapular-nerve",
                    "nameVi": "Phong bế thần kinh nách tại khoang tứ giác dưới siêu âm",
                    "role": "Phối hợp với phong bế thần kinh trên vai để vô cảm toàn diện khớp vai",
                    "indication": "Hội chứng khoang tứ giác (Quadrilateral space syndrome), đau khớp vai mạn tính"
                }
            ]
        },

        # Figures aggregate
        "figures": [
            enrich_fig("assets/deepak_images/ch09_shoulder_pain/p418_img2.jpeg", "anatomy", "Fig. 9.1: Khớp vai nhìn trước"),
            enrich_fig("assets/deepak_images/ch09_shoulder_pain/p418_img1.jpeg", "redflag", "Vùng cấp máu nhạy cảm chỏm xương cánh tay và nguy cơ hoại tử vô mạch AVN"),
            enrich_fig("assets/deepak_images/ch09_shoulder_pain/p423_img1.png", "anatomy", "Fig. 9.3: Cơ sinh học giơ tay qua đầu"),
            enrich_fig("assets/deepak_images/ch09_shoulder_pain/p434_img1.jpeg", "anatomy", "Fig. 9.4: Rãnh nhị đầu"),
            enrich_fig("assets/deepak_images/ch09_shoulder_pain/p436_img1.jpeg", "anatomy", "Fig. 9.5: Mỏm quạ và cơ quạ cánh tay"),
            enrich_fig("assets/deepak_images/ch09_shoulder_pain/p437_img1.jpeg", "anatomy", "Fig. 9.6: Bao hoạt dịch dưới mỏm cùng vai"),
            enrich_fig("assets/deepak_images/ch09_shoulder_pain/p438_img1.jpeg", "anatomy", "Fig. 9.7: Khuyết trên vai và khuyết gai ổ chảo"),
            enrich_fig("assets/deepak_images/ch09_shoulder_pain/p439_img1.jpeg", "anatomy", "Fig. 9.8: Khoang tứ giác"),
            enrich_fig("assets/deepak_images/ch09_shoulder_pain/p440_img1.jpeg", "redflag", "Fig. 9.9: Các điểm xung đột cơ học phá hủy gân dưới mỏm cùng vai"),
            enrich_fig("assets/deepak_images/ch09_shoulder_pain/p442_img1.jpeg", "redflag", "Fig. 9.10: Các vị trí tổn thương rách gân chóp xoay"),
            enrich_fig("assets/deepak_images/ch09_shoulder_pain/p445_img1.jpeg", "redflag", "Fig. 9.12: Các vị trí rách sụn viền ổ chảo"),
            enrich_fig("assets/deepak_images/ch09_shoulder_pain/p447_img1.jpeg", "somatic", "Fig. 9.13: Đánh giá độ trượt ra trước của chỏm xương cánh tay"),
            enrich_fig("assets/deepak_images/ch09_shoulder_pain/p448_img1.jpeg", "somatic", "Fig. 9.15: Đánh giá chỏm xương cánh tay trượt lên trên"),
            enrich_fig("assets/deepak_images/ch09_shoulder_pain/p449_img1.jpeg", "somatic", "Fig. 9.16: Đánh giá rối loạn xoay bả vai xuống dưới"),
            enrich_fig("assets/deepak_images/ch09_shoulder_pain/p450_img1.jpeg", "somatic", "Fig. 9.17: Đánh giá xương bả vai nhô ra trước"),
            enrich_fig("assets/deepak_images/ch09_shoulder_pain/p452_img1.jpeg", "anatomy", "Fig. 9.18: Sờ nắn khớp cùng vai đòn AC"),
            enrich_fig("assets/deepak_images/ch09_shoulder_pain/p453_img1.jpeg", "anatomy", "Fig. 9.19: Sờ nắn khớp ức đòn SC"),
            enrich_fig("assets/deepak_images/ch09_shoulder_pain/p454_img1.jpeg", "exam", "Fig. 9.21: Thao tác Speed's Test"),
            enrich_fig("assets/deepak_images/ch09_shoulder_pain/p455_img1.jpeg", "exam", "Fig. 9.22: Thao tác Yergason's Test"),
            enrich_fig("assets/deepak_images/ch09_shoulder_pain/p456_img1.jpeg", "exam", "Fig. 9.24: Thao tác Neer Test"),
            enrich_fig("assets/deepak_images/ch09_shoulder_pain/p457_img1.jpeg", "exam", "Fig. 9.26: Nghiệm pháp Crank Test"),
            enrich_fig("assets/deepak_images/ch09_shoulder_pain/p458_img1.jpeg", "exam", "Fig. 9.28: Vị trí 2 nghiệm pháp O'Brien"),
            enrich_fig("assets/deepak_images/ch09_shoulder_pain/p459_img1.jpeg", "exam", "Fig. 9.30: Dấu hiệu rãnh hõm Sulcus Sign"),
            enrich_fig("assets/deepak_images/ch09_shoulder_pain/p460_img1.jpeg", "exam", "Fig. 9.31: Dấu hiệu trễ xoay ngoài ERLS"),
            enrich_fig("assets/deepak_images/ch09_shoulder_pain/p462_img1.jpeg", "exam", "Fig. 9.33: Nghiệm pháp Gerber Lift-Off Test"),
            enrich_fig("assets/deepak_images/ch09_shoulder_pain/p463_img1.jpeg", "exam", "Fig. 9.35: Thao tác Hawkins-Kennedy Test"),
            enrich_fig("assets/deepak_images/ch09_shoulder_pain/p464_img1.jpeg", "exam", "Fig. 9.38: Nghiệm pháp so sánh IRRST"),
            enrich_fig("assets/deepak_images/ch09_shoulder_pain/p464_img2.jpeg", "exam", "Fig. 9.39: Kỹ thuật khám nghiệm pháp nghiêng sau xương bả vai SBTT")
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
