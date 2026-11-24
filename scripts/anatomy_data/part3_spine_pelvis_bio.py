# -*- coding: utf-8 -*-
# Part 3: Spine, Head/Neck, Truncal/Pelvic Nerves & Biologics Procedures (18 procedures)
# Based on Philip Peng et al. - Ultrasound for Interventional Pain Management (Springer, 2020)

SPINE_PELVIS_BIO_ANATOMY_DATA = {
    "occipital-nerve": {
        "anatomy": {
            "overview": "Thần kinh chẩm lớn (Greater Occipital Nerve - GON) là nhánh trong của ngành sau thần kinh gai sống cổ C2 (lớn nhất trong các ngành sau cổ). Sau khi thoát ra giữa cung sau đốt đội (C1) và mảnh cung đốt trục (C2), GON vòng quanh bờ dưới cơ chéo đầu dưới (Obliquus Capitis Inferior - OCI), rồi chạy ngược lên trên và vào trong nằm trọn trong 'mặt phẳng cân cơ vàng' kẹp giữa mặt nông cơ chéo đầu dưới (OCI - ở sâu) và mặt sâu cơ bán gai đầu (Semispinalis capitis - SSC - ở nông), trước khi đâm xuyên qua cơ bán gai đầu và cân cơ thang để lên da đầu vùng đỉnh chẩm. Cách tiếp cận gần tại mức C2 (Proximal C2 approach của Greher & Peng) bắt giữ thân chính GON trước khi chia nhánh với tỷ lệ thành công gần như tuyệt đối.",
            "targetStructure": "Mặt phẳng cân cơ (Interfascial plane) nằm ngay giữa mặt nông cơ chéo đầu dưới (OCI) và mặt sâu cơ bán gai đầu (Semispinalis capitis) tại mức đốt sống C2.",
            "innervation": "GON (ngành sau C2) chi phối cảm giác vùng da đầu từ đường gáy trên vòm lên tận đỉnh sọ (Vertex); thần kinh chẩm bé (LON - nhánh trước C2, C3) chi phối vùng da sau tai và chẩm bên.",
            "vascularAndDangerZones": [
                "Động mạch đốt sống (Vertebral artery): Nằm ngay phía NGOÀI (lateral) sát đầu ngoài cơ chéo đầu dưới tại tam giác dưới chẩm và cung C1 – BẮT BUỘC đi kim từ TRONG RA NGOÀI hoặc kiểm soát đầu kim nằm trên bụng giữa cơ OCI, không trượt quá xa ra phía mỏm ngang C1!",
                "Tủy cổ cao / Khoang dưới nhện qua khoảng gian cung C1–C2 ở đường giữa: Luôn đảm bảo nhìn thấy bản xương mảnh cung C2 (C2 lamina) hoặc bụng cơ OCI nằm chắn phía sâu trước khi tiến kim!",
                "Động mạch cổ sâu và đám rối tĩnh mạch dưới chẩm đi trong lớp cơ gáy sâu (kiểm tra bằng Color Doppler)."
            ],
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_02_01_occipital_layers.jpg",
                    "figNumber": "2.1",
                    "title": "Giải phẫu 4 lớp cơ vùng gáy trên và đường đi thần kinh chẩm lớn trên cơ chéo đầu dưới (Fig. 2.1)",
                    "desc": "Thần kinh chẩm lớn (GON) vòng bờ dưới cơ chéo đầu dưới (OCI) rồi đi lên trong khoang cân dưới cơ bán gai đầu (Semispinalis capitis).",
                    "springerCaption": "Fig. 2.1 Four layers of suboccipital muscles relevant to the greater occipital nerve course over obliquus capitis inferior."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Ụ chẩm ngoài (External occipital protuberance - Inion): Gồ xương nhô rõ ở chính giữa sọ chẩm phía sau.",
                "Mỏm gai đốt sống trục C2 (Spinous process of C2): Mỏm gai chẻ đôi to đầu tiên sờ thấy ngay khi trượt tay từ ụ chẩm ngoài xuống hõm gáy (~3 - 4 cm dưới ụ chẩm ngoài; lưu ý đốt C1 không có mỏm gai!).",
                "Mỏm chũm xương thái dương (Mastoid process) ngay phía sau dái tai."
            ],
            "referenceLines": "Đường chếch C2 – C1 (Oblique suboccipital axis): Đường nối từ mỏm gai C2 (ở dưới – trong) chếch lên trên – ra ngoài hướng về phía mỏm ngang C1 / mỏm chũm chính là trục dọc thực sự của bụng cơ chéo đầu dưới (OCI).",
            "palpationSteps": [
                "1. Đặt bệnh nhân nằm sấp kê gối dưới ngực – trán để gập nhẹ cổ tối đa (tư thế 'cúi cằm mở rộng hõm gáy'), hoặc ngồi gục trán lên gối trên mặt bàn.",
                "2. Dùng ngón cái sờ ụ chẩm ngoài ở đường giữa, miết thẳng xuống hõm dưới chẩm cho tới khi chạm mấu xương cứng nổi rõ đầu tiên – đó chính là mỏm gai chẻ đôi của đốt C2.",
                "3. Dùng tay kia xác định đỉnh mỏm chũm sau tai để định hướng góc xoay chếch lên trên của đầu ngoài đầu dò."
            ],
            "probePlacement": "Phương pháp quét chuẩn Philip Peng: Đặt đầu dò Linear nằm ngang ở đường giữa trên ụ chẩm ngoài -> trượt thẳng xuống dưới qua khoảng tối C1 tới khi thấy mỏm gai C2 chẻ đôi ('dấu hiệu hai sừng' - Bifid spinous process) -> dịch nhẹ đầu dò sang bên đau và XOAY đầu ngoài của đầu dò chếch lên trên ~30 độ hướng về mỏm ngang C1 để cắt dọc trọn vẹn cơ chéo đầu dưới (OCI) nằm tựa trên mảnh cung C2 hình con thuyền.",
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_02_04_c2_level_scan.jpg",
                    "figNumber": "2.4",
                    "title": "Vị trí đặt đầu dò trên mốc mỏm gai chẻ đôi C2 vùng gáy cao (Fig. 2.4)",
                    "desc": "Đặt đầu dò ngang mức mỏm gai C2 nhận diện dấu hiệu mỏm gai chẻ đôi đặc trưng trước khi xoay đầu ngoài lên mỏm ngang C1 tìm cơ OCI.",
                    "springerCaption": "Fig. 2.4 Surface probe placement at the C2 spinous process level."
                }
            ]
        }
    },

    "lesser-occipital-nerve": {
        "anatomy": {
            "overview": "Thần kinh chẩm bé (Lesser Occipital Nerve - LON) là nhánh cao nhất của đám rối cổ nông (Superficial cervical plexus), cấu thành từ nhánh trước rễ cổ C2 (và đôi khi C3). Sau khi vòng quanh bờ sau phần giữa cơ ức đòn chũm (tại điểm thần kinh Erb's point ngang mức sụn giáp), LON chạy ngược thẳng lên trên dọc sát theo BỜ SAU CƠ ỨC ĐÒN CHŨM (Posterior border of Sternocleidomastoid - SCM), nằm nông ngay trên lớp cân cổ sâu bao phủ cơ gối đầu (Splenius capitis) và cơ nâng vai, để đi lên phân nhánh cảm giác vùng da sau vành tai, mỏm chũm và vùng chẩm thái dương bên.",
            "targetStructure": "Khoang mạc nông dọc theo bờ sau đầu trên cơ ức đòn chũm (ngay mặt nông cơ gối đầu Splenius capitis, cách đỉnh mỏm chũm 2 - 3 cm xuống dưới).",
            "innervation": "LON (nhánh trước C2, C3) chi phối cảm giác vùng da sau trên loa tai, vùng chũm và phần bên vùng chẩm.",
            "vascularAndDangerZones": [
                "Thần kinh phụ / Dây XI (Spinal accessory nerve - CN XI): Chạy chéo từ bờ sau 1/3 trên cơ ức đòn chũm qua tam giác cổ sau tới cơ thang ở lớp sâu hơn nhẹ – tuyệt đối chỉ tiêm thể tích nhỏ (2 - 3 ml) nông ngay sát bao cân bờ sau phần cao SCM để tránh gây yếu nhún vai!",
                "Tĩnh mạch cảnh ngoài (External jugular vein) và nhánh mỏm chũm động mạch chẩm.",
                "Động mạch đốt sống ở lớp rất sâu (nếu chọc kim quá sâu vào tam giác dưới chẩm)."
            ],
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_02_02_occipital_nerves_surface.jpg",
                    "figNumber": "2.2",
                    "title": "Tương quan giải phẫu bề mặt giữa thần kinh chẩm bé (1), thần kinh chẩm lớn và động mạch chẩm (2) (Fig. 2.2)",
                    "desc": "Thần kinh chẩm bé (1) đi dọc bờ sau phần bám tận cơ ức đòn chũm phía sau tai, nằm ngoài hơn hẳn so với thần kinh chẩm lớn (2).",
                    "springerCaption": "Fig. 2.2 Surface relationship of (1) lesser occipital nerve along posterior SCM border and (2) greater occipital nerve with occipital artery."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Mỏm chũm xương thái dương (Mastoid process): Gồ xương lớn ngay sau dái tai.",
                "Ụ chẩm ngoài (External occipital protuberance - Inion) ở đường giữa sau.",
                "Bờ sau cơ ức đòn chũm (Posterior border of SCM muscle)."
            ],
            "referenceLines": "Đường nối ụ chẩm ngoài – đỉnh mỏm chũm (Superior nuchal line): LON đi qua khoảng nối 1/3 ngoài và 2/3 trong của đường này (cách bờ sau mỏm chũm ~2 - 3 cm vào trong, hoặc dọc bờ sau SCM thấp hơn mỏm chũm 2 - 3 cm).",
            "palpationSteps": [
                "1. Đặt bệnh nhân nằm nghiêng sang bên lành (mặt bệnh hướng lên trên) hoặc nằm sấp xoay nhẹ đầu.",
                "2. Yêu cầu bệnh nhân hơi nâng đầu và xoay cằm sang bên đối diện có kháng lực nhẹ để toàn bộ dải cơ ức đòn chũm (SCM) nổi gồ rõ từ cổ lên mỏm chũm.",
                "3. Dùng ngón trỏ lần dọc theo bờ sau phần ba trên cơ ức đòn chũm hướng lên mỏm chũm và ấn tìm điểm Tinel / điểm đau chói lan lên sau tai."
            ],
            "probePlacement": "Đặt đầu dò Linear tần số cao (12 - 15 MHz) nằm ngang (Transverse oblique view) ngay dưới đường cong chẩm trên ~2 cm, vắt ngang qua bờ sau đầu trên cơ ức đòn chũm (SCM) để thấy LON là cấu trúc bầu dục giảm âm nhỏ nằm kẹp trên mặt mạc cơ gối đầu (Splenius capitis) ngay dưới mép thon bờ sau SCM.",
            "figures": [
                {
                    "path": "assets/images/ch2_occipital/p50_img1.jpeg",
                    "figNumber": "2.8",
                    "title": "Đặt đầu dò ngang qua bờ sau cơ ức đòn chũm định vị thần kinh chẩm bé (Fig. 2.8)",
                    "desc": "Hình ảnh siêu âm thần kinh chẩm bé nằm ngay mặt phẳng cân dưới bờ sau cơ ức đòn chũm (SCM) và phía trên cơ gối đầu.",
                    "springerCaption": "Fig. 2.8 Sonography and surface probe position showing the lesser occipital nerve at the posterior border of SCM."
                }
            ]
        }
    },

    "distal-gon": {
        "anatomy": {
            "overview": "Ở mức xa vùng chẩm (Distal / Classical Approach tại đường gáy trên – Superior nuchal line), thần kinh chẩm lớn (GON) đã đâm xuyên qua cơ bán gai đầu và cân gân cơ thang để thoát ra nằm nông ngay trên mặt xương chẩm (dưới lớp cân galea da đầu). Tại đúng vị trí đường cong chẩm trên này, GON chạy song song và nằm NGAY PHÍA TRONG (Medial) sát cạnh động mạch chẩm (Occipital artery – nhánh của động mạch cảnh ngoài). Lối tiếp cận xa rất nông (chỉ 0.5 - 1.2 cm dưới da) nhưng dễ bỏ sót nhánh nếu thần kinh đã chia sớm.",
            "targetStructure": "Khoang cân nông ngay sát mặt xương chẩm tại mức đường cong chẩm trên, nằm ngay phía TRONG (medial) động mạch chẩm.",
            "innervation": "Các nhánh tận da đầu vùng chẩm – đỉnh của thần kinh chẩm lớn (GON - C2).",
            "vascularAndDangerZones": [
                "Động mạch chẩm (Occipital artery): Nằm ngay sát bờ ngoài của GON trong cùng một mặt phẳng cân nông – BẮT BUỘC bật Color Doppler để định vị mạch đập động mạch chẩm vừa làm mốc dẫn đường vừa tránh chọc thủng gây tụ máu da đầu (Scalp hematoma)!",
                "Lớp da đầu có sọ xương chẩm ngay bên dưới (~5 - 10 mm), riêng bệnh nhân có tiền sử phẫu thuật mở sọ hố sau (Suboccipital craniectomy) có khuyết xương sọ: TUYỆT ĐỐI kiểm tra liên tục vỏ xương sọ nguyên vẹn dưới đầu dò tránh đâm vào màng cứng tiểu não!"
            ],
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_02_02_occipital_nerves_surface.jpg",
                    "figNumber": "2.2",
                    "title": "Giải phẫu lối thoát nông của thần kinh chẩm lớn đi kèm động mạch chẩm tại đường gáy trên (Fig. 2.2)",
                    "desc": "Tại đường cong chẩm trên, thần kinh chẩm lớn (2) đi sát bờ trong của động mạch chẩm ngay trên nền xương sọ chẩm.",
                    "springerCaption": "Fig. 2.2 Classical distal relationship of the greater occipital nerve medial to the occipital artery along the superior nuchal line."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Ụ chẩm ngoài (External occipital protuberance - Inion): Đỉnh gồ xương giữa vùng chẩm.",
                "Mỏm chũm (Mastoid process) ở phía sau tai.",
                "Đường cong chẩm trên (Superior nuchal line): Gờ xương ngang nối từ ụ chẩm ngoài ra mỏm chũm."
            ],
            "referenceLines": "Quy tắc 1/3 trong trên đường Inion – Mỏm chũm: Nối đường thẳng từ ụ chẩm ngoài tới đỉnh mỏm chũm (~9 cm); GON và động mạch chẩm đi qua điểm nối 1/3 trong và 2/3 ngoài (cách ụ chẩm ngoài khoảng 2.5 - 3 cm sang bên).",
            "palpationSteps": [
                "1. Bệnh nhân ngồi cúi đầu tựa trán lên gối trên bàn hoặc nằm sấp.",
                "2. Dùng ngón cái sờ rõ đỉnh ụ chẩm ngoài ở chính giữa.",
                "3. Trượt ngón trỏ từ ụ chẩm ngoài ngang sang bên đau khoảng 2.5 - 3 cm dọc theo gờ xương đường gáy trên để bắt mạch đập nảy của động mạch chẩm và ấn kiểm tra điểm đau chói Arnold."
            ],
            "probePlacement": "Đặt đầu dò Linear tần số cao (12 - 15 MHz, dùng nhiều gel xuyên qua tóc) nằm ngang ngay trên ụ chẩm ngoài, sau đó trượt ngang sang bên đau 2 - 3 cm dọc đường gáy trên đồng thời bật Color Doppler để thấy ngay động mạch chẩm đập tròn và GON nằm sát phía trong trên nền vỏ xương sọ sáng.",
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_02_03_occipital_protuberance_scan.jpg",
                    "figNumber": "2.3",
                    "title": "Đặt đầu dò khởi điểm trên ụ chẩm ngoài rồi trượt dọc đường gáy trên (Fig. 2.3)",
                    "desc": "Đầu dò đặt ngang mức ụ chẩm ngoài (*) xác định lớp cân nông da đầu trước khi trượt sang bên 2.5 - 3 cm tìm động mạch chẩm.",
                    "springerCaption": "Fig. 2.3 Initial transverse scan at the external occipital protuberance (*) along the superior nuchal line."
                }
            ]
        }
    },

    "stellate-ganglion": {
        "anatomy": {
            "overview": "Hạch sao / Hạch giao cảm cổ – ngực (Stellate / Cervicothoracic Ganglion) hình thành do sự hợp nhất của hạch giao cảm cổ dưới và hạch ngực T1 (có ở 80% dân số), nằm ngay phía trước cổ xương sườn 1 và mỏm ngang C7 – vùng cực kỳ nguy hiểm do sát đỉnh màng phổi và động mạch đốt sống trần. Tuy nhiên, chuỗi giao cảm cổ chạy dọc liên tục trong khoang cân dưới lá mạc trước sống (Subfascial prevertebral plane) nằm trên mặt nông của cơ dài cổ (Longus colli muscle). Do đó, thực hiện phong bế ở mức ĐỐT SỐNG C6 (ngang củ cảnh Chassaignac) cho phép thuốc tê lan dọc mặt phẳng dưới mạc trước sống xuống hạch sao ở C7–T1 an toàn vượt trội!",
            "targetStructure": "Mặt phẳng dưới lá mạc trước sống (Prevertebral fascia plane) nằm ngay phía trước bề mặt cơ dài cổ (Longus colli muscle), phía sau bao cảnh và phía trong củ trước mỏm ngang C6.",
            "innervation": "Chuỗi hạch giao cảm cổ chi phối giao cảm đầu mặt cổ, mắt (dấu hiệu Horner khi phong bế thành công: sụp mi, co đồng tử, sung huyết kết mạc, ấm mặt) và toàn bộ mạch máu chi trên.",
            "vascularAndDangerZones": [
                "Động mạch cảnh chung và Tĩnh mạch cảnh trong (Carotid artery & Internal jugular vein trong bao cảnh) nằm ngay phía trước – ngoài cơ dài cổ.",
                "Động mạch đốt sống (Vertebral artery): Ở 90% người đã chui vào lỗ ngang ở C6, NHƯNG có tới 10% biến thể động mạch đốt sống chưa chui vào lỗ ngang ở C6 mà nằm lộ ngay phía trước củ Chassaignac C6, cùng với động mạch giáp dưới (Inferior thyroid artery) và động mạch cổ lên vắt ngang hành trình kim – BẮT BUỘC bật Color Doppler quét kỹ trước khi chọc!",
                "Thực quản (Esophagus – đặc biệt lệch sang BÊN TRÁI C6–C7!) và Thần kinh thanh quản quặt ngược (Recurrent laryngeal nerve – nằm ở rãnh khí – thực quản phía trong, gây khàn tiếng nếu tiêm quá vào trong hoặc thể tích lớn)."
            ],
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_03_01_cervical_sympathetic_chain.jpg",
                    "figNumber": "3.1",
                    "title": "Giải phẫu chuỗi hạch giao cảm cổ, cơ dài cổ và các mạch máu lớn vùng cổ trước (Fig. 3.1)",
                    "desc": "Chuỗi giao cảm cổ chạy dọc mặt trước cơ dài cổ (Longus colli) phía sau bao cảnh; lưu ý động mạch đốt sống lộ trần ở mức C7.",
                    "springerCaption": "Fig. 3.1 Anatomy of the cervical sympathetic chain lying over the longus colli muscle."
                },
                {
                    "path": "assets/images/ch3_cervical_sympathetic/p58_img1.jpeg",
                    "figNumber": "3.4",
                    "title": "Thiết đồ cắt ngang cổ mức C6 đối chiếu lá mạc trước sống, cơ dài cổ và bao cảnh (Fig. 3.4)",
                    "desc": "Mặt cắt ngang chuẩn mức C6 hiển thị củ trước Chassaignac lồi cao, cơ dài cổ, tuyến giáp, thực quản, khí quản và bao cảnh.",
                    "springerCaption": "Fig. 3.4 Cross-sectional anatomic structures at the C6 Chassaignac's tubercle level."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Sụn nhẫn (Cricoid cartilage): Mốc sụn vòng tròn cứng nằm ngay dưới màng nhẫn – giáp, ngang đúng mức thân đốt sống C6!",
                "Củ cảnh Chassaignac (Anterior tubercle of C6 transverse process): Gồ xương sờ thấy sâu trong rãnh giữa khí quản và cơ ức đòn chũm ngang mức sụn nhẫn.",
                "Bờ trước và bờ sau cơ ức đòn chũm (SCM)."
            ],
            "referenceLines": "Đường ngang qua bờ dưới sụn nhẫn (Cricoid ring level = C6): Cắt qua bờ sau cơ ức đòn chũm chính là vị trí đặt đầu dò tìm củ trước C6.",
            "palpationSteps": [
                "1. Đặt bệnh nhân nằm ngửa, kê một cuộn khăn mỏng dưới bả vai để cổ hơi ngửa nhẹ và quay mặt lệch nhẹ ~15 - 20 độ sang bên đối diện (không quay quá căng làm dẹt tĩnh mạch cảnh và căng cơ SCM).",
                "2. Dùng ngón trỏ sờ lồi thanh quản (sụn giáp) ở đường giữa cổ trước, trượt xuống qua hõm màng nhẫn – giáp sẽ chạm vòng sụn nhẫn cứng tròn – đây là mốc bề mặt tương ứng mức C6.",
                "3. Yêu cầu bệnh nhân nuốt nước bọt nhẹ trong khi siêu âm (nếu làm bên trái) để nhận diện ngay túi thực quản nhu động cạnh khí quản."
            ],
            "probePlacement": "Đặt đầu dò Linear nằm ngang (Short-axis transverse view) ở mặt trước bên cổ ngang mức sụn nhẫn (C6); quét xác nhận củ trước C6 cao nhô rõ (hình yên ngựa 2 củ), kiểm tra đối chiếu bằng cách trượt nhẹ xuống C7 (chỉ có 1 củ sau, mất củ trước và lộ động mạch đốt sống tròn to ở trước) rồi trượt ngược lại lên đúng C6 để đi kim In-plane từ ngoài vào trong xuyên qua cơ bậc thang trước tới mặt phẳng dưới mạc trước sống.",
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_03_08_sgb_approaches.jpg",
                    "figNumber": "3.8",
                    "title": "Hướng đặt đầu dò ngang mức C6 và đường đi kim In-plane từ ngoài vào mặt trước cơ dài cổ (Fig. 3.8)",
                    "desc": "Tiếp cận In-plane từ ngoài vào trong mức C6 giúp thân kim đi an toàn phía sau bao cảnh thẳng tới lá mạc trước sống trên cơ dài cổ.",
                    "springerCaption": "Fig. 3.8 Transverse C6 ultrasound approach targeting the prevertebral fascia superficial to longus colli."
                }
            ]
        }
    },

    "cervical-nerve-root": {
        "anatomy": {
            "overview": "Các rễ thần kinh gai sống cổ C5, C6 và C7 thoát ra từ lỗ liên hợp và đi ra ngoài nằm trong rãnh mấu ngang xương đốt sống cổ (Intertubercular groove), kẹp giữa củ trước (Anterior tubercle – có cơ bậc thang trước bám) và củ sau (Posterior tubercle – có cơ bậc thang giữa bám). Hình thái mấu ngang trên siêu âm là 'dấu vân tay giải phẫu' để định danh chính xác từng tầng: C5 có củ trước và củ sau cao gần bằng nhau ('dấu tai thỏ / hai bướu lạc đà'); C6 có củ trước Chassaignac rất cao và nhọn còn củ sau thấp; C7 có củ trước thoái triển mất hẳn, chỉ còn duy nhất một dốc xương củ sau với động mạch đốt sống nằm trần ngay phía trước rễ C7!",
            "targetStructure": "Khoang rìa MẶT SAU (Dorsal / Posterior aspect) của rễ thần kinh cổ mục tiêu ngay giữa rãnh mấu ngang và củ sau (tránh mặt trước rễ nơi tập trung các nhánh động mạch nuôi tủy!).",
            "innervation": "Rễ cổ C5 (vai – mặt ngoài cánh tay), C6 (mặt ngoài cẳng tay – ngón cái & ngón trỏ), C7 (mặt sau cánh cẳng tay – ngón giữa).",
            "vascularAndDangerZones": [
                "Các động mạch rễ nuôi tủy sống (Radicular / Segmental medullary arteries tách từ động mạch đốt sống, động mạch cổ lên và động mạch cổ sâu): Thường đi sát MẶT TRƯỚC hoặc góc sau của rễ thần kinh cổ thông nối với động mạch tủy trước – TUYỆT ĐỐI CHỈ DÙNG DEXAMETHASONE KHÔNG HẠT TINH THỂ (Non-particulate steroid) và BẮT BUỘC bật Color Doppler kiểm tra quanh rễ trước khi chọc!",
                "Động mạch đốt sống (Vertebral artery): Nằm lộ trần ngay phía trước rễ C7 (và ở 10% ca nằm trước C6).",
                "Thần kinh hoành (Phrenic nerve - C3, C4, C5): Chạy chéo trên mặt trước cơ bậc thang trước dưới mạc trước sống."
            ],
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_12_01_cervical_root_cross_section.jpg",
                    "figNumber": "12.1",
                    "title": "Thiết đồ cắt ngang lỗ liên hợp, rãnh mấu ngang cổ và động mạch đốt sống (Fig. 12.1)",
                    "desc": "Rễ thần kinh cổ thoát khỏi lỗ liên hợp đi trong rãnh xương giữa củ trước và củ sau, ngay phía sau động mạch đốt sống.",
                    "springerCaption": "Fig. 12.1 Cross-sectional anatomy of cervical spinal nerve root, intertubercular groove, and vertebral artery."
                },
                {
                    "path": "assets/images/anatomy/fig_12_02_cervical_radicular_arteries.jpg",
                    "figNumber": "12.2",
                    "title": "Mạng lưới động mạch cổ lên và cổ sâu cho nhánh động mạch rễ nuôi tủy cổ (Fig. 12.2)",
                    "desc": "Các nhánh mạch nhỏ từ động mạch đốt sống, cổ lên và cổ sâu đi sát rễ thần kinh cổ - lý do bắt buộc dùng Dexamethasone tan hoàn toàn.",
                    "springerCaption": "Fig. 12.2 Anastomoses of ascending cervical, deep cervical, and vertebral arteries supplying radicular arteries."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Sụn nhẫn (Cricoid cartilage): Tương ứng mức đốt sống C6.",
                "Bờ trên sụn giáp (Superior border of thyroid cartilage): Tương ứng mức C4–C5.",
                "Rãnh gian cơ bậc thang (Interscalene groove): Rãnh lõm dọc ngay phía sau bờ ngoài cơ ức đòn chũm."
            ],
            "referenceLines": "Đường ngang từ sụn nhẫn kéo sang bên cắt qua bờ sau cơ ức đòn chũm là điểm chuẩn xác định củ Chassaignac C6; từ mốc C6 trượt lên 1.5 cm là C5, trượt xuống 1.5 cm trên nền hố thượng đòn là C7.",
            "palpationSteps": [
                "1. Đặt bệnh nhân nằm nghiêng sang bên lành (Lateral decubitus – tư thế tối ưu nhất cho đi kim In-plane từ sau ra trước!) hoặc nằm ngửa quay đầu 30 - 45 độ sang bên đối diện.",
                "2. Sờ sụn nhẫn ở cổ trước và gióng ngang sang bờ sau cơ ức đòn chũm.",
                "3. Yêu cầu bệnh nhân hít mạnh ngắn bằng mũi ('Sniff maneuver') để hai cơ bậc thang co nhẹ giúp sờ thấy rãnh gian cơ bậc thang ngay sau SCM."
            ],
            "probePlacement": "Đặt đầu dò Linear cắt ngang trục cổ (Short-axis axial view) tại bờ sau cơ SCM ngang mức sụn nhẫn: Xác định 'mốc neo C6' (củ trước Chassaignac nhô rất cao), trượt xuống C7 kiểm tra xác nhận hình thái 1 củ sau kèm động mạch đốt sống phía trước, rồi đếm ngược lên đúng tầng cần tiêm (C7 -> C6 -> C5); đi kim In-plane từ SAU RA TRƯỚC (Posterior-to-Anterior) qua cơ bậc thang giữa tới bờ sau rễ.",
            "figures": [
                {
                    "path": "assets/images/ch12_cervical_root/p157_img1.jpeg",
                    "figNumber": "12.3",
                    "title": "Nhận diện hình thái hai củ mấu ngang C5 và rễ thần kinh C5 ở cổ bên (Fig. 12.3)",
                    "desc": "Củ trước và củ sau C5 có độ cao tương đương tạo hình rãnh chữ U chứa rễ thần kinh C5 tròn giảm âm.",
                    "springerCaption": "Fig. 12.3 Transverse cervical scan of the C5 nerve root between symmetric anterior and posterior tubercles."
                }
            ]
        }
    },

    "cervical-medial-branch-ton": {
        "anatomy": {
            "overview": "Mỗi khớp liên mấu cổ (Cervical Zygapophyseal / Facet Joint từ C3–C4 đến C6–C7) nhận chi phối thần kinh kép từ hai nhánh trong của ngành sau (Medial branches of dorsal rami) nằm ngay trên và ngay dưới khớp đó; ngoại trừ khớp C2–C3 được chi phối duy nhất bởi thần kinh chẩm thứ ba (Third Occipital Nerve - TON, nhánh nông ngành sau C3 vắt trực tiếp qua mặt ngoài khe khớp C2–C3). Các nhánh trong C3, C4, C5, C6 luôn ôm sát điểm lõm nhất ('eo thắt / centroid waist') ở chính giữa khối khớp bên (Articular pillar) tương ứng, nằm trong khoang cân sâu dưới cơ bán gai đầu (Semispinalis capitis); riêng nhánh C7 nằm cao hơn ở chân mỏm khớp trên C7 gần mỏm ngang C7.",
            "targetStructure": "Đáy xương hõm eo thắt chính giữa khối khớp bên (Waist of the articular pillar) của C3, C4, C5, C6; khe khớp lồi C2–C3 (cho TON); và mặt trên gốc mỏm ngang – mỏm khớp trên C7 (cho nhánh trong C7).",
            "innervation": "Thần kinh chẩm thứ 3 (TON: khớp C2–C3 và đau đầu vùng chẩm dưới) và các nhánh trong C3–C7 (chi phối các khớp liên mấu cổ C3–T1 cùng cơ nhiều chân cổ).",
            "vascularAndDangerZones": [
                "Động mạch cổ sâu (Deep cervical artery) và các nhánh động mạch đốt sống chạy dọc sát cột khớp bên hoặc băng qua thung lũng eo khớp ở ~10–15% các tầng – BẮT BUỘC bật Color Doppler kiểm tra trên cả mặt cắt dọc và ngang trước khi chọc!",
                "Rễ thần kinh cổ và động mạch đốt sống nằm ở PHÍA TRƯỚC (Anterior) cột khớp bên: Khi đi kim trên mặt cắt ngang từ sau ra trước, mũi kim tuyệt đối KHÔNG ĐƯỢC trượt vượt quá bờ trước của khối khớp bên!",
                "Ống sống cổ ở phía trong nếu đi kim chệch vào khe bản sống."
            ],
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_13_01_cervical_mb_ton_anatomy.jpg",
                    "figNumber": "13.1",
                    "title": "Giải phẫu nhánh trong cột sống cổ và thần kinh chẩm thứ 3 (TON) ôm quanh eo cột khớp bên (Fig. 13.1)",
                    "desc": "(a) Thiết đồ ngang đốt sống C5 chỉ đường đi nhánh trong ngành sau (2) vòng qua eo khối khớp bên; (b) Hình chiếu bên các nhánh C3–C7 và TON qua khớp C2–C3.",
                    "springerCaption": "Fig. 13.1 Anatomy of cervical medial branches and third occipital nerve (TON) along the articular pillars."
                },
                {
                    "path": "assets/images/anatomy/fig_13_02_cervical_facet_referral.jpg",
                    "figNumber": "13.2",
                    "title": "Bản đồ vùng đau quy chiếu theo tầng của các khớp liên mấu cột sống cổ C2–C7 (Fig. 13.2)",
                    "desc": "Sơ đồ Dwyer-Bogduk kinh điển giúp chọn đúng tầng nhánh trong cần phong bế dựa theo vị trí lan đau vùng cổ - gáy - bả vai.",
                    "springerCaption": "Fig. 13.2 Segmental pain referral patterns for cervical zygapophyseal joints (Dwyer, Aprill & Bogduk)."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Mỏm chũm xương thái dương (Mastoid process): Mốc khởi điểm cực kỳ quan trọng trên đường nách trước cổ bên.",
                "Mỏm ngang C1 (nằm ngay giữa đỉnh mỏm chũm và góc hàm dưới).",
                "Dải cột khớp bên cổ (Cervical articular pillars) nằm dọc sau bờ sau cơ ức đòn chũm và mỏm gai C7 (Vertebra prominens) ở nền cổ sau."
            ],
            "referenceLines": "Đường mặt phẳng trán bên cổ (Lateral coronal line) kẻ thẳng từ đỉnh mỏm chũm xuống nền cổ đi dọc qua toàn bộ chuỗi cột khớp bên C2–C7 (tạo hình 'làn sóng hình sin / ngọn đồi – thung lũng' đặc trưng trên siêu âm).",
            "palpationSteps": [
                "1. Đặt bệnh nhân nằm nghiêng hoàn toàn sang bên lành (Lateral decubitus position), kê gối dưới đầu sao cho cột sống cổ thẳng trục ngang không gập bên.",
                "2. Sờ rõ đỉnh mỏm chũm sau tai và dùng hai ngón tay ấn sâu dọc mặt bên – sau cổ từ dưới mỏm chũm xuống nền cổ để cảm nhận dải xương cứng liên tục của các khối khớp bên và điểm ấn đau khu trú từng tầng.",
                "3. Đánh dấu bờ sau cơ ức đòn chũm để xác định cửa sổ quét mặt bên cổ."
            ],
            "probePlacement": "Đếm tầng chuẩn xác bằng mặt cắt dọc trán (Coronal scan từ trên xuống hoặc từ dưới lên theo Finlayson & Peng): Đặt đầu dò Linear dọc ngay dưới đỉnh mỏm chũm -> dịch nhẹ xuống và ra sau tìm bậc hẫng C2–C3 (khớp liên mấu cao nhất có hình gợn sóng lồi lên, phía trên C2 dốc hẫng sâu xuống) rồi đếm từng 'đỉnh đồi' (khe khớp C2/3, C3/4, C4/5, C5/6) và 'đáy thung lũng' (eo khối khớp C3, C4, C5, C6); hoặc kiểm chứng từ dưới lên bằng mỏm ngang T1 vuông rộng có xương sườn 1 -> C7. Sau khi định tâm đúng đáy thung lũng, xoay đầu dò 90 độ sang mặt cắt ngang để đi kim từ sau ra trước.",
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_13_03_cervical_coronal_scan.jpg",
                    "figNumber": "13.3",
                    "title": "Đặt đầu dò mặt phẳng trán dọc cổ bên đếm chuỗi 'đồi - thung lũng' khối khớp bên (Fig. 13.3)",
                    "desc": "Đặt đầu dò dọc mặt bên cổ hiển thị dải lượn sóng hình sin: đỉnh lồi là khe khớp liên mấu, đáy lõm là eo khối khớp nơi nhánh trong đi qua.",
                    "springerCaption": "Fig. 13.3 Coronal scan of the cervical spine demonstrating the sinusoidal contour of the articular pillars."
                }
            ]
        }
    },

    "intercostal-nerve": {
        "anatomy": {
            "overview": "Các dây thần kinh gian sườn (Intercostal Nerves T1–T11 – chính là nhánh trước của thần kinh gai sống ngực) chạy vòng theo khoang gian sườn cùng bó mạch gian sườn theo thứ tự kinh điển từ trên xuống dưới 'VAN' (Vein – Tĩnh mạch ở cao nhất, Artery – Động mạch ở giữa, Nerve – Thần kinh nằm thấp nhất). Tại vùng góc sườn phía sau (Posterior costal angle – cách đường giữa gai sống ~6 - 8 cm), rãnh dưới sườn sâu rõ nhất và cơ gian sườn trong bắt đầu hình thành, kẹp bó mạch thần kinh gian sườn nằm trong mặt phẳng cân giữa cơ gian sườn trong (Internal intercostal muscle - ở nông) và cơ gian sườn trong cùng (Innermost intercostal muscle - ở sâu), ngay phía trên lá thành màng phổi! Lưu ý nhánh bên bì (Lateral cutaneous branch) tách ra quanh đường nách giữa, nên phong bế tại góc sườn sau mới đạt vô cảm trọn vẹn thành ngực trước – bên.",
            "targetStructure": "Mặt phẳng cân giữa cơ gian sườn trong và cơ gian sườn trong cùng ngay sát bờ dưới của xương sườn mục tiêu tại vị trí góc sườn sau (Subcostal groove at the angle of the rib).",
            "innervation": "Dây thần kinh gian sườn tương ứng (kèm nhánh phụ bên dưới và giao thoa tầng lân cận – thường cần phong bế thêm 1 tầng trên và 1 tầng dưới nếu đau lan rộng).",
            "vascularAndDangerZones": [
                "MÀNG PHỔI VÀ NHU MÔ PHỔI (Pleura & Lung): Nằm ngay mặt sâu của cơ gian sườn trong cùng chỉ cách thần kinh gian sườn 2 - 4 mm! Bắt buộc luôn nhận diện đường màng phổi tăng âm trượt theo nhịp thở (Lung sliding) trên siêu âm và kiểm soát 100% đầu kim không vượt qua bờ dưới xương sườn vào màng phổi (nguy cơ tràn khí màng phổi Pneumothorax)!",
                "Động mạch và tĩnh mạch gian sườn sau (Posterior intercostal artery & vein): Nằm sát trong rãnh dưới sườn ngay trên thần kinh; tiêm thuốc tê nội mạch tại khoang gian sườn cho nồng độ đỉnh thuốc tê trong máu CAO NHẤT trong mọi phong bế vùng (nguy cơ ngộ độc LAST cao – bắt buộc hút kiểm tra và tính kỹ tổng liều!)."
            ],
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_05_01_intercostal_layers.jpg",
                    "figNumber": "5.1",
                    "title": "Giải phẫu 3 lớp cơ gian sườn và vị trí bó mạch thần kinh VAN sát rãnh dưới sườn (Fig. 5.1)",
                    "desc": "Bó mạch thần kinh gian sườn (Tĩnh mạch - Động mạch - Thần kinh từ trên xuống) nằm giữa cơ gian sườn trong và cơ gian sườn trong cùng, sát trên màng phổi.",
                    "springerCaption": "Fig. 5.1 Three layers of intercostal muscles and neurovascular bundle (VAN) in the subcostal groove."
                },
                {
                    "path": "assets/images/anatomy/fig_05_03_intercostal_branches.jpg",
                    "figNumber": "5.3",
                    "title": "Đường đi vòng quanh lồng ngực và điểm tách nhánh bì bên của dây thần kinh gian sườn (Fig. 5.3)",
                    "desc": "Phong bế tại vùng góc sườn phía sau giúp chặn thần kinh trước khi tách nhánh bì bên ở đường nách giữa.",
                    "springerCaption": "Fig. 5.3 Anatomical course and cutaneous branches of the intercostal nerve."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Chuỗi mỏm gai đốt sống ngực ở đường giữa lưng.",
                "Góc dưới xương bả vai (Inferior angle of scapula): Ngang mức khoang gian sườn T7 khi hai tay xuôi (nhưng dịch ra ngoài khi đưa tay ra trước).",
                "Xương sườn số 12 ở dưới cùng (hoặc bờ trên xương sườn 1 / gai vai ngang T3 ở trên) để đếm chính xác thứ tự xương sườn.",
                "Góc sườn sau (Angle of the rib): Đường gờ dọc cách đường giữa mỏm gai khoảng 6 - 8 cm (ngay bờ trong xương bả vai khi đưa tay ôm vai trước)."
            ],
            "referenceLines": "Đường dọc cạnh sống cách đường giữa 6 - 8 cm qua các góc sườn sau (nơi xương sườn phẳng dày dễ nhìn nhất và trước khi tách nhánh bì bên).",
            "palpationSteps": [
                "1. Đặt bệnh nhân nằm sấp kê gối dưới bụng – ngực (hoặc ngồi gục người ôm gối phía trước) với hai cánh tay buông thõng ra trước bàn để kéo hai xương bả vai dạt rộng ra ngoài, bộc lộ các góc sườn từ T4–T10.",
                "2. Đếm chính xác xương sườn mục tiêu bằng tay phối hợp siêu âm (đếm từ xương sườn 12 đi lên hoặc từ xương sườn 1 / T1 đi xuống).",
                "3. Dùng hai đầu ngón tay sờ xác định bờ trên, mặt lưng và bờ dưới của xương sườn mục tiêu cùng khoang gian sườn ngay dưới nó."
            ],
            "probePlacement": "Đặt đầu dò Linear tần số cao theo mặt phẳng đứng dọc cạnh sống (Sagittal / Short-axis to ribs) cách đường giữa 6 - 8 cm (ngay phía trong bờ trong xương bả vai) để cắt ngang hai xương sườn kế tiếp nhau ('dấu hiệu cánh dơi') và đường màng phổi trắng sáng trượt nhịp nhàng ở đáy giữa hai bóng cản sườn; đi kim In-plane từ dưới lên trên hướng thẳng vào bờ dưới xương sườn trên.",
            "figures": [
                {
                    "path": "assets/images/ch5_intercostal/p76_img1.jpeg",
                    "figNumber": "5.4",
                    "title": "Đặt đầu dò cắt ngang qua hai xương sườn tại góc sườn sau và nhận diện màng phổi (Fig. 5.4)",
                    "desc": "Mặt cắt dọc lồng ngực (cắt ngang xương sườn) hiển thị rõ hai bóng xương sườn, các lớp cơ gian sườn (EI, II) và đường tăng âm màng phổi phía sâu.",
                    "springerCaption": "Fig. 5.4 Sagittal scan across adjacent ribs showing external/internal intercostal muscles and the hyperechoic pleural line."
                }
            ]
        }
    },

    "esp-block": {
        "anatomy": {
            "overview": "Phong bế mặt phẳng cơ dựng gai (Erector Spinae Plane Block - ESPB, mô tả đầu tiên bởi Forero 2016) nhắm vào khoang cân sâu kéo dài dọc từ nền sọ tới xương cùng nằm ngay giữa mặt sâu khối cơ dựng gai (Erector spinae muscle complex: gồm cơ chậu sườn Iliocostalis, cơ dài Longissimus và cơ gai Spinalis) và mặt lưng ĐỈNH MỎM NGANG đốt sống (Tip of Transverse Process - TP). Ở vùng ngực giữa (ví dụ T5), từ nông vào sâu trên mỏm ngang gồm 3 lớp cơ đặc trưng: Cơ thang (Trapezius) -> Cơ trám lớn (Rhomboid major – biến mất từ dưới mức T7!) -> Cơ dựng gai (Erector spinae) -> Đỉnh mỏm ngang. Thuốc tê bơm vào mặt phẳng này lan rộng lên – xuống nhiều khoang (3–6 đốt sống) và thấm ra trước qua mô liên kết gian ngang vào khoang cạnh sống ngực phong bế cả nhánh sau, nhánh trước và chuỗi giao cảm.",
            "targetStructure": "Mặt phẳng cân ngay MẶT SÂU cơ dựng gai và tiếp xúc trực tiếp lên vỏ xương ĐỈNH MỎM NGANG (Tip of transverse process) của đốt sống mục tiêu.",
            "innervation": "Phong bế đa tầng các ngành sau (Dorsal rami - cơ da lưng) và lan thấm tới ngành trước (Ventral rami / thần kinh gian sườn) cùng các nhánh thông giao cảm (Rami communicantes).",
            "vascularAndDangerZones": [
                "Khoang cạnh sống và Màng phổi (Paravertebral space & Pleura): Nằm sâu hơn mặt phẳng dây chằng sườn – ngang; mỏm ngang chính là 'lá chắn xương an toàn tuyệt đối' (Bony backstop) – nếu đặt đầu dò quá lệch ra ngoài (> 4 - 5 cm khỏi đường giữa) trên thân xương sườn tròn thay vì mỏm ngang vuông phẳng, kim trượt qua sườn có thể chọc vào màng phổi!",
                "Các nhánh lưng của động mạch gian sườn sau chạy sát bờ mỏm ngang.",
                "Tổng liều thuốc tê toàn thân (LAST): Do ESP là phong bế mặt phẳng cân thể tích lớn (20 - 30 ml mỗi bên), bắt buộc tính trần liều Ropivacaine 0.2% / Bupivacaine 0.25% theo cân nặng!"
            ],
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_11_02_esp_cross_section_t5.jpg",
                    "figNumber": "11.2",
                    "title": "Thiết đồ cắt ngang giải phẫu 3 lớp cơ cạnh sống tại mức ngực T5 và mặt phẳng ESP (Fig. 11.2)",
                    "desc": "Tại mức T5, phía nông mỏm ngang lần lượt từ nông vào sâu gồm cơ thang, cơ trám lớn và khối cơ dựng gai áp trực tiếp lên đỉnh mỏm ngang.",
                    "springerCaption": "Fig. 11.2 Cross-sectional anatomy of paraspinal muscle layers at the T5 vertebral level."
                },
                {
                    "path": "assets/images/anatomy/fig_11_06_esp_spread_diagram.jpg",
                    "figNumber": "11.6",
                    "title": "Cơ chế lan tỏa thuốc tê đa tầng vào ngành trước và ngành sau sau tiêm ESP Block (Fig. 11.6)",
                    "desc": "Dung dịch tiêm dưới cơ dựng gai tại đỉnh mỏm ngang lan dọc nhiều đốt sống và thấm qua mô gian ngang ra khoang cạnh sống.",
                    "springerCaption": "Fig. 11.6 Schematic diagram showing craniocaudal and anterior paravertebral spread of injectate following ESP block."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Mỏm gai C7 (Vertebra prominens - mỏm gai nhô cao nhất nền cổ) dùng để đếm xuống T1–T12.",
                "Gai vai (ngang T3) và góc dưới xương bả vai (ngang T7).",
                "Đường liên mào chậu Tuffier (ngang L4 / khe L4–L5) nếu làm ESP vùng thắt lưng."
            ],
            "referenceLines": "Đường dọc cạnh sống cách đường giữa mỏm gai đúng 2.5 - 3.0 cm (Paramedian sagittal line 3 cm lateral to midline): Đây là khoảng cách chuẩn tương ứng với hàng ĐỈNH MỎM NGANG ngực (đi vào trong hơn là bản sống phẳng liên tục; đi ra ngoài > 4 cm là xương sườn tròn kèm màng phổi lấp lánh!).",
            "palpationSteps": [
                "1. Bệnh nhân có thể ngồi thẳng ở mép giường, nằm sấp hoặc nằm nghiêng đều thực hiện tốt.",
                "2. Sờ xác định mỏm gai C7 ở nền cổ và đếm từng mỏm gai xuống đúng tầng đốt sống đích (ví dụ T5 cho đau ngực/sườn cao, T7–T9 cho ngực thấp/bụng trên, L2–L4 cho thắt lưng).",
                "3. Từ đỉnh mỏm gai mục tiêu đo ngang sang bên cần phong bế đúng 2.5 - 3 cm và đánh dấu điểm chuẩn."
            ],
            "probePlacement": "Kỹ thuật quét 'từ ngoài vào trong' hoặc 'từ trong ra ngoài' chuẩn Vicente Roques & Philip Peng: Đặt đầu dò Linear (ngực) hoặc Curvilinear (thắt lưng) dọc cạnh sống (Parasagittal orientation): nếu đặt ngoài thấy xương sườn tròn + màng phổi trắng sáng ở kẽ sâu -> dịch dần đầu dò VÀO TRONG cho tới khi bóng xương chuyển từ tròn thành PHẲNG ĐẦU VUÔNG ('Squared-off acoustic shadow' – chính là đỉnh mỏm ngang!) và biến mất đường màng phổi (nếu vào trong quá nữa sẽ thành vệt xương phẳng liên tục của bản sống Lamina).",
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_11_07_esp_patient_positions.jpg",
                    "figNumber": "11.7",
                    "title": "Ba tư thế bệnh nhân linh hoạt (Ngồi, Nằm nghiêng, Nằm sấp) khi thực hiện ESP Block (Fig. 11.7)",
                    "desc": "Bộc lộ toàn bộ dải mỏm gai và vùng cạnh sống lưng ở tư thế ngồi, nằm nghiêng hoặc nằm sấp tùy khả năng chịu đau của người bệnh.",
                    "springerCaption": "Fig. 11.7 Patient positioning options (sitting, lateral decubitus, prone) for ESP block."
                },
                {
                    "path": "assets/images/anatomy/fig_11_08_esp_initial_scan.jpg",
                    "figNumber": "11.8",
                    "title": "Giải phẫu bề mặt đặt đầu dò cạnh sống và nhận diện mốc khớp sườn - ngang tới mỏm ngang (Fig. 11.8)",
                    "desc": "Đối chiếu vị trí đầu dò trên khung xương lưng với hình ảnh siêu âm 3 lớp cơ phủ trên khớp sườn - ngang và đỉnh mỏm ngang.",
                    "springerCaption": "Fig. 11.8 Surface transducer placement and corresponding anatomy over the costotransverse junction and transverse process."
                }
            ]
        }
    },

    "lumbar-medial-branch": {
        "anatomy": {
            "overview": "Mỗi khớp liên mấu cột sống thắt lưng (Lumbar Facet / Zygapophyseal Joint, ví dụ khớp L4–L5) nhận chi phối thần kinh cảm giác kép từ nhánh trong ngành sau cùng mức (L3 medial branch đi qua gốc mỏm ngang L4) và nhánh trong mức ngay trên (hoặc rễ sau L5 cho khớp L5–S1). Các nhánh trong thắt lưng L1–L4 đi hằng định qua rãnh xương tạo bởi giao điểm giữa MẶT TRÊN GỐC MỎM NGANG (Root of transverse process) và BỜ NGOÀI MỎM KHỚP TRÊN (Superior Articular Process - SAP), được ghim chặt sát xương dưới dây chằng vú – phụ (Mamillo-accessory ligament). Riêng ở tầng L5, không gọi là nhánh trong mà chính bản thân NGÀNH SAU L5 (L5 Dorsal Ramus) chạy trong rãnh lõm giữa mỏm khớp trên S1 và mặt trên cánh xương cùng (Sacral ala)!",
            "targetStructure": "Thung lũng giao điểm xương giữa bờ ngoài mỏm khớp trên (SAP) và mặt trên gốc mỏm ngang (cho nhánh trong L1–L4); và rãnh giữa mỏm khớp trên S1 với mặt trên cánh xương cùng (cho ngành sau L5).",
            "innervation": "Các nhánh trong L1–L4 và ngành sau L5 chi phối cảm giác bao khớp liên mấu thắt lưng L1–S1 và cơ nhiều chân (Multifidus) cùng đoạn.",
            "vascularAndDangerZones": [
                "Nhánh động mạch thắt lưng lưng (Lumbar dorsal ramus artery) đi sát rãnh góc SAP – mỏm ngang (bật Color Doppler sâu hoặc hút kiểm tra bắt buộc).",
                "Rễ thần kinh thắt lưng trong lỗ liên hợp (Intervertebral foramen): Nằm ngay PHÍA TRƯỚC – DƯỚI gốc mỏm ngang! Tuyệt đối KHÔNG ĐƯỢC trượt mũi kim trượt quá bờ trên hoặc bờ trước mỏm ngang ra khoang cơ thắt lưng chậu!",
                "Khoang ngoài màng cứng / màng cứng qua khe gian mảnh ở phía trong nếu đi kim chệch vào trong mỏm khớp trên."
            ],
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_14_01_lumbar_facet_dual_supply.jpg",
                    "figNumber": "14.1",
                    "title": "Quy luật chi phối thần kinh kép của khớp liên mấu thắt lưng và ngành sau L5 (Fig. 14.1)",
                    "desc": "Mỗi khớp liên mấu thắt lưng được chi phối bởi hai nhánh thần kinh đi qua góc giữa mỏm khớp trên (SAP) và gốc mỏm ngang của hai đốt kế tiếp.",
                    "springerCaption": "Fig. 14.1 Dual neural supply of the lumbar facet joints from adjacent medial branches and the L5 dorsal ramus."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Mào chậu hai bên (Iliac crests) và đường liên mào chậu Tuffier (Intercristal line – thường đi qua mỏm gai L4 hoặc khe L4–L5, nhưng trên lâm sàng sai lệch tới 30–40% nên bắt buộc đếm từ xương cùng bằng siêu âm!).",
                "Gai chậu sau trên (PSIS - ngang mức S2) và mặt lưng xương cùng (Sacrum).",
                "Hàng mỏm gai thắt lưng L1–L5 ở đường giữa."
            ],
            "referenceLines": "Đường dọc giữa qua các mỏm gai và đường cạnh dọc giữa cách đường giữa 2 - 4 cm (qua dãy mỏm khớp và gốc mỏm ngang); luôn đếm đốt sống từ dưới lên bắt đầu từ vệt xương phẳng liên tục của XƯƠNG CÙNG (Sacrum -> L5 -> L4 -> L3) để tránh nhầm lẫn cùng hóa L5 / thắt lưng hóa S1.",
            "palpationSteps": [
                "1. Đặt bệnh nhân nằm sấp trên giường phẳng, kê một gối dày dưới bụng dưới để làm phẳng độ ưỡn cột sống thắt lưng (giảm lumbar lordosis giúp mở rộng khoảng cách giữa các mỏm ngang).",
                "2. Sờ hai mào chậu, hai gai chậu sau trên (PSIS) và rãnh mỏm gai đường giữa.",
                "3. Khám ấn đau cạnh sống (Paraspinal facet tenderness) cách đường giữa 2 - 3 cm để đối chiếu với tầng khớp liên mấu dự kiến phong bế."
            ],
            "probePlacement": "Quy trình 'Đếm dọc – Chọc ngang' 2 mặt phẳng chuẩn Philip Peng: Bước 1 – Đặt đầu dò Curvilinear 2-5 MHz dọc cạnh sống cách đường giữa 3 cm từ xương cùng (dải sáng liên tục) trượt ngược lên đếm rõ từng mỏm ngang L5, L4, L3 ('dấu hiệu đinh ba / ngón tay'). Bước 2 – Xoay đầu dò 90 độ sang mặt cắt ngang tại đúng tầng đích để thấy hình bậc thang kinh điển: Mỏm gai -> Bản sống -> Đỉnh mỏm khớp trên (SAP) -> Bậc ngang gốc mỏm ngang (TP); đi kim In-plane từ ngoài vào trong chạm đúng góc chữ L giữa SAP và TP, rồi xoay dọc lại kiểm chứng mũi kim nằm sát bờ trên gốc mỏm ngang!",
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_14_07_lumbar_counting_sagittal.jpg",
                    "figNumber": "14.7",
                    "title": "Đặt đầu dò mặt phẳng dọc cạnh sống đếm chính xác tầng đốt sống từ xương cùng lên L5–L1 (Fig. 14.7)",
                    "desc": "Quét dọc cạnh sống bắt đầu từ dốc xương cùng liên tục đếm ngược lên L5, L4, L3 giúp định vị tầng thắt lưng chính xác tuyệt đối.",
                    "springerCaption": "Fig. 14.7 Paramedian sagittal lumbar spine level counting starting from the sacrum."
                }
            ]
        }
    },

    "ilioinguinal-nerve": {
        "anatomy": {
            "overview": "Thần kinh chậu hạ vị (Iliohypogastric Nerve - IHN, từ T12–L1) và thần kinh chậu bẹn (Ilioinguinal Nerve - IIN, từ L1) xuất phát từ nhánh cao nhất của đám rối thắt lưng, đi chéo qua mặt trước cơ vuông thắt lưng rồi xuyên qua cơ ngang bụng ở gần phía trên mào chậu. Tại vị trí kinh điển ngay phía trong – trên gai chậu trước trên (ASIS), CẢ HAI DÂY THẦN KINH đều chạy song song sát nhau trong cùng một mặt phẳng cân cơ hằng định nằm kẹp giữa CƠ CHÉO BỤNG TRONG (Internal Oblique Muscle - IOM, ở nông) và CƠ NGANG BỤNG (Transversus Abdominis Muscle - TAM, ở sâu), đi kèm nhánh sâu của động mạch mũ chậu sâu! Tiến xuống thấp hơn về phía củ mu, chúng mới xuyên ra nông hơn và chui vào ống bẹn.",
            "targetStructure": "Mặt phẳng cân thần kinh – mạch máu (TAP-like fascial plane) nằm giữa cơ chéo bụng trong (IOM) và cơ ngang bụng (TAM) cách gai chậu trước trên (ASIS) khoảng 2 cm vào trong và 2 cm lên trên (nơi IIN và IHN nằm chung một lớp cân chưa xuyên nông).",
            "innervation": "IHN chi phối cảm giác vùng da trên mu (Suprapubic) và mông trước ngoài; IIN đi vào ống bẹn chi phối cảm giác nếp bẹn trong, mặt trên trong đùi và gốc bìu (nam) hoặc môi lớn (nữ).",
            "vascularAndDangerZones": [
                "PHÚC MẠC VÀ QUAI RUỘT TRONG Ổ BỤNG (Peritoneum & Bowel): Nằm ngay mặt sâu của cơ ngang bụng (TAM) khá mỏng – nếu dùng kỹ thuật mù dựa cảm giác 'pop' có tới 20–40% mũi kim đi quá sâu xuyên vào cơ ngang bụng hoặc thủng phúc mạc / manh tràng / đại tràng sigma!",
                "Động mạch mũ chậu sâu (Deep circumflex iliac artery - nhánh lên): Chạy ngay trong cùng mặt phẳng cân IOM – TAM sát cạnh hai dây thần kinh – vừa là mốc Doppler chỉ điểm thần kinh cực tốt vừa phải tránh đâm thủng lòng mạch!",
                "Thần kinh đùi nằm sâu dưới mạc chậu: Tránh đâm kim quá sâu ở phía dưới dây chằng bẹn gây liệt cơ tứ đầu đùi."
            ],
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_06_01_lumbar_plexus.jpg",
                    "figNumber": "6.1",
                    "title": "Nguyên ủy đám rối thắt lưng của thần kinh chậu hạ vị, chậu bẹn, sinh dục đùi và bì đùi ngoài (Fig. 6.1)",
                    "desc": "Thứ tự từ trên xuống dưới của 4 nhánh cảm giác vùng bụng dưới - bẹn đùi xuất phát từ rễ T12–L3.",
                    "springerCaption": "Fig. 6.1 Lumbar plexus origin of iliohypogastric, ilioinguinal, genitofemoral, and lateral femoral cutaneous nerves."
                },
                {
                    "path": "assets/images/anatomy/fig_06_02_ii_ih_abdominal_wall.jpg",
                    "figNumber": "6.2",
                    "title": "Tương quan giải phẫu thần kinh chậu bẹn - chậu hạ vị giữa 3 lớp cơ thành bụng ngang mức ASIS (Fig. 6.2)",
                    "desc": "Ngang mức gai chậu trước trên, cả hai dây thần kinh đều nằm trong khoang cân giữa cơ chéo bụng trong và cơ ngang bụng trước khi xuyên nông ở phía xa.",
                    "springerCaption": "Fig. 6.2 Anatomical course of ilioinguinal and iliohypogastric nerves between internal oblique and transversus abdominis muscles."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Gai chậu trước trên (Anterior Superior Iliac Spine - ASIS): Mốc tựa cố định đầu ngoài của đầu dò.",
                "Mào chậu trước (Anterior iliac crest).",
                "Rốn (Umbilicus): Đích hướng trục chéo của đầu dò."
            ],
            "referenceLines": "Đường nối từ gai chậu trước trên (ASIS) hướng thẳng tới Rốn (ASIS–Umbilicus line): Vuông góc hoàn toàn với đường đi giải phẫu của hai dây thần kinh chậu bẹn và chậu hạ vị tại vùng hố chậu!",
            "palpationSteps": [
                "1. Đặt bệnh nhân nằm ngửa thẳng trên giường, bộc lộ vùng bụng dưới và mào chậu.",
                "2. Dùng ngón cái sờ rõ mấu nhọn của gai chậu trước trên (ASIS) và bờ trong mào chậu ngay phía sau trên ASIS.",
                "3. Kẻ (hoặc hình dung) đường thẳng nối từ đỉnh ASIS hướng chéo lên trên – vào trong tới rốn; vùng quét nằm trong phạm vi 5 cm đầu tiên tính từ ASIS trên đường này."
            ],
            "probePlacement": "Đặt đầu dò Linear tần số cao (10 - 15 MHz) nằm chéo trên đường nối ASIS – Rốn sao cho ĐẦU NGOÀI CỦA ĐẦU DÒ TỰA TRỰC TIẾP LÊN MÀO XƯƠNG GAI CHẬU TRƯỚC TRÊN (ASIS): Mốc bóng cản xương ASIS ở mép ngoài màn hình sẽ giúp định danh ngay lập tức 3 lớp cơ thành bụng (Chéo ngoài -> Chéo trong dày nhất -> Ngang bụng mỏng sâu nhất trên phúc mạc nhu động) và thấy hai cấu trúc hình thoi tách mạc chứa IIN, IHN cùng động mạch mũ chậu sâu cách ASIS 1 - 3 cm.",
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_06_04_ii_ih_probe_position.jpg",
                    "figNumber": "6.4",
                    "title": "Vị trí đặt đầu dò chuẩn tựa đầu ngoài lên ASIS hướng thẳng về phía rốn (Fig. 6.4)",
                    "desc": "Đặt đầu dò chéo nối từ gai chậu trước trên (ASIS) hướng về rốn cắt vuông góc với trục đường đi của thần kinh chậu bẹn và chậu hạ vị.",
                    "springerCaption": "Fig. 6.4 Optimal ultrasound probe position aligned from the ASIS toward the umbilicus."
                }
            ]
        }
    },

    "genitofemoral-nerve": {
        "anatomy": {
            "overview": "Thần kinh sinh dục đùi (Genitofemoral Nerve - GFN, rễ L1, L2) đâm xuyên qua mặt trước cơ thắt lưng lớn (Psoas major) rồi chia làm hai nhánh tận phía trên dây chằng bẹn: (1) Nhánh đùi (Femoral branch) đi kèm bờ ngoài động mạch chậu ngoài qua dưới dây chằng bẹn cảm giác vùng da tam giác đùi trên; và (2) Nhánh sinh dục (Genital branch – đích lâm sàng chính trong đau bẹn bìu/môi lớn mạn tính sau mổ thoát vị bẹn!) đi vòng sát động mạch chậu ngoài và gốc động mạch thượng vị dưới chui qua LỖ BẸN SÂU (Deep inguinal ring) đi vào trong ỐNG BẸN (Inguinal canal), nằm sát mặt sau dưới của thừng tinh (Spermatic cord ở nam) hoặc dây chằng tròn (Round ligament ở nữ).",
            "targetStructure": "Bên trong và ngay sát bao mạc tinh trong của ống bẹn (Inguinal canal around/deep to spermatic cord or round ligament) ngay phía trên ngoài củ mu hoặc tại lỗ bẹn sâu phía trên động mạch chậu ngoài.",
            "innervation": "Nhánh sinh dục GFN vận động cơ bìu (phản xạ da bìu Cremasteric reflex) và cảm giác da bìu trước / môi lớn; nhánh đùi cảm giác vùng da tam giác Scarpa ngay dưới dây chằng bẹn.",
            "vascularAndDangerZones": [
                "Động mạch chậu ngoài / Động mạch đùi (External iliac / Femoral artery) nằm ngay mặt sâu của lỗ bẹn sâu VÀ gốc ĐỘNG MẠCH THƯỢNG VỊ DƯỚI (Inferior epigastric artery – mốc 'vương miện' tách từ mặt trước trong động mạch chậu ngoài quặt lên thành bụng ngay bờ trong lỗ bẹn sâu!) – BẮT BUỘC bật Color Doppler nhận diện hai mạch này!",
                "Ống dẫn tinh (Vas deferens – cấu trúc thành cơ rất dày không xẹp) và động mạch tinh hoàn / đám rối tĩnh mạch hình dây leo bên trong thừng tinh ở nam giới: Tuyệt đối dùng kim mảnh 25G bơm tách nhẹ quanh bao, không chọc nát ống dẫn tinh hay động mạch tinh!",
                "Túi phúc mạc / thoát vị bẹn gián tiếp nếu bệnh nhân còn túi thoát vị."
            ],
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_07_01_genitofemoral_anatomy.jpg",
                    "figNumber": "7.1",
                    "title": "Giải phẫu nguyên ủy và phân chia nhánh sinh dục - nhánh đùi của thần kinh sinh dục đùi (Fig. 7.1)",
                    "desc": "Thần kinh sinh dục đùi đi dọc mặt trước cơ thắt lưng lớn rồi tách nhánh đùi (theo động mạch đùi) và nhánh sinh dục (chui vào ống bẹn).",
                    "springerCaption": "Fig. 7.1 Anatomical course of the genital and femoral branches of the genitofemoral nerve."
                },
                {
                    "path": "assets/images/anatomy/fig_07_02_genitofemoral_dermatome.jpg",
                    "figNumber": "7.2",
                    "title": "Bản đồ vùng da chi phối cảm giác của nhánh sinh dục và nhánh đùi thần kinh GFN (Fig. 7.2)",
                    "desc": "Phân bố cảm giác biệt lập ở vùng bìu/môi lớn (nhánh sinh dục) và tam giác đùi trước trên (nhánh đùi).",
                    "springerCaption": "Fig. 7.2 Cutaneous innervation of the genital and femoral branches of the genitofemoral nerve."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Củ mu (Pubic tubercle - PT): Gồ xương nhỏ nhô ra cách đường giữa khớp mu khoảng 2 - 2.5 cm sang bên trên bờ trên xương mu.",
                "Gai chậu trước trên (ASIS) ở phía ngoài.",
                "Mạch đập động mạch đùi (Femoral artery pulse) tại điểm giữa bẹn."
            ],
            "referenceLines": "Đường dây chằng bẹn nối ASIS – Củ mu: Lỗ bẹn sâu (Internal inguinal ring) nằm ngay phía TRÊN điểm giữa bẹn khoảng 1.5 - 2 cm (ngay phía ngoài gốc động mạch thượng vị dưới); ống bẹn chạy chéo từ lỗ bẹn sâu xuống trong tới lỗ bẹn nông ngay phía trên – ngoài củ mu.",
            "palpationSteps": [
                "1. Bệnh nhân nằm ngửa thoải mái, che phủ kín đáo bộ phận sinh dục, bộc lộ vùng hạ vị – nếp bẹn và bờ trên xương mu.",
                "2. Bắt mạch đập động mạch đùi ngay tại nếp bẹn để xác định vị trí lỗ bẹn sâu ở ngay phía trên động mạch chậu ngoài – đùi.",
                "3. Dùng ngón trỏ sờ dọc bờ trên khớp mu từ đường giữa sang bên 2 cm để chạm củ mu (Pubic tubercle); ở nam giới có thể sờ thấy thừng tinh lăn tròn ngay phía trên ngoài củ mu."
            ],
            "probePlacement": "Ba phương pháp quét chuẩn Philip Peng (ưu tiên kết hợp): Đặt đầu dò Linear tần số cao dọc theo trục động mạch đùi trượt lên trên dây chằng bẹn rồi xoay ngang tìm ống bẹn hình bầu dục nằm nông phía trước động mạch chậu ngoài (nơi động mạch thượng vị dưới tách ra), HOẶC đặt đầu dò ngang trên củ mu rồi dịch nhẹ ra ngoài ~1 - 2 cm để thấy thiết đồ cắt ngang rõ nét của thừng tinh / dây chằng tròn.",
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_07_07_pubic_tubercle_probe.jpg",
                    "figNumber": "7.7",
                    "title": "Đặt đầu dò ngang tại và ngay phía ngoài củ mu (PT) định vị thừng tinh và ống bẹn (Fig. 7.7)",
                    "desc": "Đặt đầu dò tại mốc xương củ mu (PT) rồi dịch nhẹ ra phía ngoài giúp nhận diện ngay thừng tinh chứa nhiều cấu trúc ống tròn bên trong ống bẹn.",
                    "springerCaption": "Fig. 7.7 Ultrasound probe position at and just lateral to the pubic tubercle (PT) showing the spermatic cord."
                }
            ]
        }
    },

    "pudendal-nerve": {
        "anatomy": {
            "overview": "Thần kinh thẹn (Pudendal Nerve – nhánh trước rễ cùng S2, S3, S4) thoát khỏi chậu hông qua lỗ dưới cơ hình lê rồi ngay lập tức uốn vòng qua mặt sau ĐỈNH GAI NGỒI (Ischial spine) để kẹp vào trong 'gọng kìm dây chằng gian gai – ụ ngồi' (Interligamentous plane): phía trước (sâu) là dây chằng cùng – gai (Sacrospinous ligament - SSL, mỏng căng ngang bám vào đỉnh gai ngồi) và phía sau (nông) là dây chằng cùng – ụ ngồi (Sacrotuberous ligament - STL, rất dày chắc). Đây là vị trí bị kẹt chèn ép kinh điển nhất (> 70% ca đau thần kinh thẹn mạn tính), trước khi thần kinh chui qua khuyết ngồi bé vào ống thẹn (Alcock's canal) trong cân cơ bịt trong và chia 3 nhánh tận: thần kinh trực tràng dưới, thần kinh đáy chậu và thần kinh lưng dương vật / âm vật.",
            "targetStructure": "Khoang gian dây chằng (Interligamentous plane) nằm giữa dây chằng cùng – ụ ngồi (STL - ở nông) và dây chằng cùng – gai (SSL - ở sâu), ngay phía TRONG (Medial) sát cạnh động mạch thẹn trong tại mức gai ngồi!",
            "innervation": "Thần kinh thẹn (S2–S4) chi phối cảm giác và vận động cơ thắt vùng đáy chậu, hậu môn, bìu sau / môi lớn và dương vật / âm vật (đau tăng điển hình khi ngồi theo tiêu chuẩn Nantes).",
            "vascularAndDangerZones": [
                "Động mạch và tĩnh mạch thẹn trong (Internal pudendal artery & vein): Chạy song song ngay trong cùng khoang gian dây chằng cạnh đỉnh gai ngồi (thần kinh thẹn thường nằm phía TRONG động mạch ở ~75–80% ca hoặc chẻ nhánh hai bên mạch) – BẮT BUỘC bật Color Doppler nhận diện động mạch thẹn trong làm 'ngọn hải đăng' và tránh tiêm nội mạch!",
                "Dây thần kinh tọa (Sciatic nerve) và thần kinh bì đùi sau: Nằm ở PHÍA NGOÀI (Lateral) trên lưng gai ngồi / xương ngồi! Đi kim hướng vào phía trong gai ngồi tránh xa thần kinh tọa tránh gây tê liệt chân!",
                "Trực tràng và khoang chậu hông nằm ngay sâu dưới dây chằng cùng – gai (SSL): Dừng mũi kim ngay khi vừa bật qua dây chằng cùng – ụ ngồi (STL) và thấy dịch tách đôi hai lá dây chằng, tuyệt đối không đâm xuyên qua SSL!"
            ],
            "figures": [
                {
                    "path": "assets/images/ch9_pudendal/p118_img1.jpeg",
                    "figNumber": "9.1",
                    "title": "Giải phẫu thần kinh thẹn nằm kẹp trong gọng kìm giữa dây chằng cùng - gai và cùng - ụ ngồi (Fig. 9.1)",
                    "desc": "Tại mức gai ngồi, thần kinh thẹn và động mạch thẹn trong bị kẹp giữa dây chằng cùng - gai ở trước và dây chằng cùng - ụ ngồi ở sau.",
                    "springerCaption": "Fig. 9.1 Pudendal nerve entrapped between the sacrospinous and sacrotuberous ligaments at the ischial spine."
                },
                {
                    "path": "assets/images/anatomy/fig_09_02_pudendal_alcock_course.jpg",
                    "figNumber": "9.2",
                    "title": "Đường đi toàn cảnh của thần kinh thẹn vòng qua gai ngồi vào ống Alcock và 3 nhánh tận (Fig. 9.2)",
                    "desc": "Hành trình thần kinh thẹn từ đám rối cùng S2–S4 qua khuyết ngồi lớn, vòng gai ngồi vào ống Alcock chia 3 nhánh tận vùng đáy chậu.",
                    "springerCaption": "Fig. 9.2 Anatomical course of the pudendal nerve around the ischial spine into Alcock's canal and its three terminal branches."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Gai chậu sau trên (PSIS) ở phía trên trong mông.",
                "Ụ ngồi (Ischial tuberosity) ở nếp lằn mông dưới.",
                "Đỉnh mấu chuyển lớn xương đùi (Greater trochanter) ở phía ngoài."
            ],
            "referenceLines": "Đường dọc nối từ PSIS xuống ụ ngồi (PSIS – Ischial tuberosity line): Đỉnh gai ngồi (Ischial spine – nằm rất sâu không sờ thấy trực tiếp từ da mông) xuất chiếu ở khoảng nối 1/3 dưới và 2/3 trên của đường này (hoặc giao điểm giữa đường nối PSIS – ụ ngồi và đường ngang qua đỉnh mấu chuyển lớn).",
            "palpationSteps": [
                "1. Đặt bệnh nhân nằm sấp hoàn toàn (Prone position) trên bàn thủ thuật.",
                "2. Sờ rõ gai chậu sau trên (PSIS) ở trên và khối xương ụ ngồi ở nếp lằn mông dưới.",
                "3. Hình dung trục quét trượt dọc từ bờ trên khuyết ngồi lớn xuống gai ngồi dọc theo bờ trong vùng mông."
            ],
            "probePlacement": "Phương pháp quét trượt 3 bước chuẩn Peng & Bellinger (dùng đầu dò Curvilinear 2-5 MHz): Bước 1 – Đặt ngang chếch trên cánh chậu mức PSIS thấy dốc xương chậu dài. Bước 2 – Trượt xuống khuyết ngồi lớn thấy cơ hình lê và động mạch mông dưới. Bước 3 – Trượt tiếp xuống dưới thêm 2 - 3 cm cho tới khi cơ hình lê biến mất và bờ xương chuyển thành một ĐƯỜNG THẲNG SÁNG NGẮN SẮC NÉT ở đáy khuyết (chính là GAI NGỒI – Ischial spine!), nối vào trong bởi dải sáng mảnh của dây chằng cùng – gai (SSL) nằm dưới dải dày của dây chằng cùng – ụ ngồi (STL) kèm nhịp đập động mạch thẹn trong trên Doppler!",
            "figures": [
                {
                    "path": "assets/images/ch9_pudendal/p122_img1.jpeg",
                    "figNumber": "9.7",
                    "title": "Vị trí đặt đầu dò Curvilinear vùng mông ngang mức gai ngồi và hình ảnh siêu âm tương ứng (Fig. 9.7)",
                    "desc": "Đặt đầu dò ngang hơi chếch mức gai ngồi hiển thị đỉnh gai ngồi phẳng sáng, thần kinh tọa ở ngoài (SCN) và động mạch/thần kinh thẹn (PA) nằm giữa hai dây chằng ở phía trong.",
                    "springerCaption": "Fig. 9.7 Position of the ultrasound probe at the ischial spine (IS) and pertinent anatomy/sonoanatomy."
                }
            ]
        }
    },

    "inferior-cluneal-nerve": {
        "anatomy": {
            "overview": "Các dây thần kinh bì mông dưới (Inferior Cluneal Nerves - ICN) là các nhánh bì tách ra từ dây thần kinh bì đùi sau (Posterior Femoral Cutaneous Nerve - PFCN, rễ S1–S3). Thần kinh bì đùi sau đi ra từ lỗ dưới cơ hình lê ngay sát mặt nông/trong dây thần kinh tọa dưới cơ mông lớn; khi chạy xuống ngang mức BỜ DƯỚI CƠ MÔNG LỚN và BỜ NGOÀI Ụ NGỒI (Ischial tuberosity), nó tách các nhánh bì mông dưới quặt vòng quanh bờ dưới cơ mông lớn ra nông để chi phối cảm giác vùng da phần dưới mông, nếp lằn mông và nhánh đáy chậu (Perineal ramus) vòng dưới ụ ngồi tới vùng da bìu ngoài / môi lớn (rất hay bị chẩn đoán nhầm là đau thần kinh thẹn nhưng đau tập trung ngay dưới ụ ngồi!).",
            "targetStructure": "Khoang cân sâu ngay dưới cơ mông lớn tại sát BỜ NGOÀI Ụ NGỒI (Lateral border of ischial tuberosity, phía trong dây thần kinh tọa và trên nguyên ủy khối gân cơ ụ ngồi – cẳng chân Hamstrings).",
            "innervation": "Thần kinh bì mông dưới và nhánh đáy chậu (từ PFCN - S1, S2, S3) cảm giác phần dưới mông, nếp lằn mông và da đáy chậu bên ngoài xương ngồi (không gây rối loạn cơ thắt).",
            "vascularAndDangerZones": [
                "Dây thần kinh tọa (Sciatic nerve): Đi song song chỉ cách bờ ngoài ụ ngồi khoảng 1.5 - 2 cm (nằm trên cơ vuông đùi / gân Hamstring) – BẮT BUỘC nhận diện rõ dây thần kinh tọa to dẹt trên siêu âm và chỉ tiêm thể tích nhỏ (2 - 4 ml) tách về phía bờ ụ ngồi để không gây tê liệt thần kinh tọa!",
                "Các nhánh tận động mạch mông dưới (Inferior gluteal artery – nhánh đi kèm thần kinh tọa) – kiểm tra Doppler màu trước khi bơm.",
                "Nguyên ủy gân chung cơ Hamstring bám vào mặt sau ngoài ụ ngồi (tránh đâm xuyên vào lõi gân gân nhị đầu đùi – bán gân – bán màng)."
            ],
            "figures": [
                {
                    "path": "assets/images/ch9_pudendal/p119_img2.jpeg",
                    "figNumber": "9.4",
                    "title": "Giải phẫu đường đi thần kinh bì mông dưới và nhánh đáy chậu vòng quanh bờ dưới ụ ngồi (Fig. 9.4)",
                    "desc": "Thần kinh bì mông dưới và nhánh đáy chậu tách từ thần kinh bì đùi sau ngay ngang mức bờ ngoài - dưới ụ ngồi.",
                    "springerCaption": "Fig. 9.4 Anatomy of the inferior cluneal nerve and perineal ramus arising from the posterior femoral cutaneous nerve."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Ụ ngồi (Ischial tuberosity - IT): Khối xương lồi rõ nhất khi ấn sâu vào nếp lằn mông dưới.",
                "Mấu chuyển lớn xương đùi (Greater trochanter - GT) ở phía ngoài.",
                "Nếp lằn mông dưới (Gluteal fold): Bờ dưới tự nhiên của vùng mông."
            ],
            "referenceLines": "Đường ngang nối Ụ ngồi (IT) – Mấu chuyển lớn (GT) ngay tại nếp lằn mông: Dây thần kinh tọa nằm khoảng điểm nối 1/3 trong và 2/3 ngoài (hơi lệch gần ụ ngồi), còn thần kinh bì mông dưới / PFCN nằm ngay giữa bờ ngoài ụ ngồi và bờ trong thần kinh tọa.",
            "palpationSteps": [
                "1. Bệnh nhân nằm sấp trên bàn phẳng.",
                "2. Dùng ngón cái ấn sâu vào nếp lằn mông xác định đỉnh và bờ ngoài của ụ ngồi (nơi bệnh nhân hội chứng thần kinh bì mông dưới thường đau chói khi ngồi lên ghế cứng, khác với thần kinh thẹn là ngồi bồn cầu không đỡ đau!).",
                "3. Sờ mấu chuyển lớn xương đùi ở phía ngoài để xác lập trục ngang đặt đầu dò."
            ],
            "probePlacement": "Đặt đầu dò Curvilinear 2-5 MHz (hoặc Linear 6-12 MHz ở người gầy) nằm ngang ngay trên nếp lằn mông nối từ ụ ngồi (IT - đầu trong) ra phía mấu chuyển lớn (GT - đầu ngoài): Nhận diện mỏm xương ụ ngồi có khối gân Hamstring bám vào, dây thần kinh tọa nằm ngay phía ngoài gân Hamstring, và các sợi thần kinh nhỏ tăng âm của ICN/PFCN nằm trong lớp mỡ sâu dưới cơ mông lớn ngay sát bờ ngoài ụ ngồi.",
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_09_09_inferior_cluneal_probe.jpg",
                    "figNumber": "9.9",
                    "title": "Vị trí đặt đầu dò ngang trên nếp lằn mông qua ụ ngồi tìm thần kinh bì mông dưới (Fig. 9.9)",
                    "desc": "Đặt đầu dò ngang tại nếp lằn mông từ ụ ngồi sang ngoài giúp thấy đồng thời ụ ngồi, gân Hamstring, thần kinh tọa (mũi tên) và nhánh bì mông dưới (đầu mũi tên).",
                    "springerCaption": "Fig. 9.9 Surface probe placement at the gluteal crease and corresponding sonography of the inferior cluneal nerve."
                }
            ]
        }
    },

    "sacroiliac-joint": {
        "anatomy": {
            "overview": "Khớp cùng chậu (Sacroiliac Joint - SIJ) là khớp phức hợp chịu tải trục lớn nhất cơ thể nối cánh xương cùng và xương chậu, được chia thành 2 phần giải phẫu hoàn toàn khác biệt: 2/3 trên – sau là khớp dây chằng xơ cực kỳ dày chắc (Fibrous syndesmosis – chứa dây chằng cùng chậu gian cốt và dây chằng cùng chậu sau dày đặc không có khoang khớp), trong khi CHỈ CÓ 1/3 DƯỚI – TRƯỚC (ngang mức lỗ cùng S2–S3) mới là KHỚP HOẠT DỊCH THỰC SỰ (True synovial joint) có khe khớp hẹp (1 - 2 mm) và bao hoạt dịch! Vì vậy, mọi mũi tiêm nội khớp cùng chậu bắt buộc phải nhắm chính xác vào phần thấp (Inferior 1/3) của khe khớp ngay ngang mức lỗ cùng sau S2!",
            "targetStructure": "Khoang hoạt dịch 1/3 dưới của khớp cùng chậu (Inferior synovial portion of SIJ) nằm sâu dưới dây chằng cùng chậu sau giữa bờ ngoài xương cùng (ngang mức lỗ cùng S2) và bản trong cánh chậu.",
            "innervation": "Mặt sau khớp cùng chậu do mạng lưới thần kinh cùng sau (Posterior sacral network: nhánh ngoài S1–S3 và ngành sau L5); mặt trước khớp có đóng góp từ đám rối thắt lưng – cùng (L4–S2).",
            "vascularAndDangerZones": [
                "Lỗ cùng sau S1, S2 (Posterior sacral foramina): Chứa các rễ thần kinh cùng và nhánh động mạch cùng ngoài – nếu đi kim lệch quá vào trong sẽ lọt tụt xuống lỗ cùng sau gây tê rễ cùng!",
                "Khuyết ngồi lớn (Greater sciatic notch) nằm ngay phía dưới – ngoài đáy khớp cùng chậu (chứa dây thần kinh tọa và động mạch mông trên / mông dưới): Không trượt đầu dò xuống quá thấp dưới khuyết ngồi lớn!",
                "Các nhánh xuyên của động mạch mông trên đi trong dây chằng cùng chậu sau (kiểm tra bằng Color Doppler)."
            ],
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_15_01_posterior_sacral_ligaments.jpg",
                    "figNumber": "15.1",
                    "title": "Giải phẫu hệ thống dây chằng cùng chậu sau, gai chậu sau trên (PSIS) và lỗ cùng sau (Fig. 15.1)",
                    "desc": "Phức hợp dây chằng chậu - thắt lưng, dây chằng cùng chậu sau che phủ mặt sau khớp cùng chậu và liên quan tới PSIS (1) cùng các lỗ cùng.",
                    "springerCaption": "Fig. 15.1 Posterior sacroiliac ligaments, PSIS (1), iliolumbar ligament (2), and sacrotuberous/sacrospinous ligaments."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Gai chậu sau trên (Posterior Superior Iliac Spine - PSIS): Nằm ngay dưới 'lúm đồng tiền Venus' vùng lưng cùng, ngang mức đốt cùng S2.",
                "Mào cùng giữa (Median sacral crest): Hàng gờ xương dọc đường giữa mặt sau xương cùng.",
                "Khe xương cùng (Sacral hiatus) và hai sừng cùng (Sacral cornua) ở đầu dưới xương cùng gần rãnh liên mông."
            ],
            "referenceLines": "Đường ngang nối hai gai chậu sau trên (Inter-PSIS line) cắt ngang qua đốt cùng S2; phần hoạt dịch 1/3 dưới của khớp cùng chậu nằm ngay phía DƯỚI – TRONG so với đỉnh PSIS khoảng 1.5 - 2.5 cm!",
            "palpationSteps": [
                "1. Đặt bệnh nhân nằm sấp trên bàn phẳng, kê gối nhỏ dưới khung chậu – bụng dưới.",
                "2. Dùng hai ngón cái sờ tìm hai lúm đồng tiền vùng thắt lưng – cùng để xác định đỉnh xương của gai chậu sau trên (PSIS) và kiểm tra điểm đau Fortin (ngay dưới trong PSIS 1 cm).",
                "3. Sờ dọc đường giữa xương cùng xuống phía rãnh liên mông để định vị khe xương cùng (mốc khởi điểm tuyệt vời để quét ngược từ dưới lên không bao giờ nhầm tầng!)."
            ],
            "probePlacement": "Hai cách quét chuẩn Finlayson & Peng (dùng đầu dò Curvilinear 2-5 MHz): Cách 1 (Từ trên xuống) – Đặt đầu dò cắt ngang tại PSIS thấy khe hẹp giữa cánh chậu dốc (ngoài) và xương cùng phẳng (trong), trượt nhẹ xuống dưới 1.5 - 2 cm tới ngang mức lỗ cùng S2 nơi khe khớp mở sâu nhất (1/3 dưới khớp). Cách 2 (Từ dưới lên chuẩn mực nhất) – Đặt ngang tại khe cùng (2 sừng cùng) trượt ngược lên tìm bờ dưới S3 -> lỗ cùng S2 và dịch nhẹ ra ngoài là đúng cửa vào 1/3 dưới khớp cùng chậu; đi kim In-plane từ TRONG RA NGOÀI theo hướng nghiêng dốc của khe khớp!",
            "figures": [
                {
                    "path": "assets/images/ch15_sacroiliac_joint/p191_img1.jpeg",
                    "figNumber": "15.2",
                    "title": "Các tầng quét ngang mặt sau xương cùng định vị lỗ cùng S1–S2 và 1/3 dưới khớp cùng chậu (Fig. 15.2)",
                    "desc": "Đối chiếu vị trí vạch đầu dò trên xương cùng - cánh chậu từ PSIS (ngang S1–S2) xuống phần hoạt dịch thấp của khớp cùng chậu.",
                    "springerCaption": "Fig. 15.2 Transverse sonographic views of the posterior sacrum and sacroiliac joint across S1 and S2 levels."
                }
            ]
        }
    },

    "sacral-lateral-branch": {
        "anatomy": {
            "overview": "Khác với tiêm nội khớp cùng chậu (chỉ tác động phần hoạt dịch 1/3 dưới), phong bế nhánh ngoài xương cùng (Sacral Lateral Branch Blocks - SLBB) nhắm vào toàn bộ nguồn thần kinh cảm giác chi phối phức hợp dây chằng cùng chậu sau và mặt sau khớp cùng chậu: đó là ĐÁM RỐI CÙNG SAU (Posterior Sacral Network - PSN), được tạo thành chủ yếu (90–100%) bởi các nhánh ngoài của ngành sau thần kinh cùng S1, S2, S3 (đôi khi có S4) thoát ra từ bờ ngoài các lỗ cùng sau tương ứng và chạy vắt ngang qua MÀO CÙNG BÊN (Lateral Sacral Crest - LSC, tương đương các củ ngang cùng Transverse sacral tubercles TST 1, 2, 3), phối hợp cùng ngành sau L5 ở cực trên.",
            "targetStructure": "Mặt xương của Mào cùng bên / các Củ ngang xương cùng thứ 1, thứ 2 và thứ 3 (Transverse Sacral Tubercles TST1, TST2, TST3 nằm ngay bờ ngoài các lỗ cùng sau S1, S2, S3 khoảng 0.5 - 1 cm) kèm rãnh cánh cùng cho ngành sau L5.",
            "innervation": "Các nhánh ngoài ngành sau cùng S1, S2, S3 (Posterior sacral network) và ngành sau L5 chi phối toàn bộ phức hợp dây chằng và bao khớp cùng chậu sau.",
            "vascularAndDangerZones": [
                "Lòng các lỗ cùng sau S1, S2, S3 (Posterior sacral foramina): Nếu đặt mũi kim tụt vào trong lỗ cùng sau sẽ gây phong bế trực tiếp rễ thần kinh cùng (gây tê tầng sinh môn, rối loạn tiểu tiện tạm thời hoặc yếu chân) làm sai lệch hoàn toàn giá trị chẩn đoán trước đốt RFA!",
                "Các nhánh sau của động mạch cùng ngoài (Lateral sacral artery branches) thoát ra ngay tại miệng lỗ cùng sau – cần bật Color Doppler kiểm tra."
            ],
            "figures": [
                {
                    "path": "assets/images/ch16_sacroiliac_rfa/p196_img1.jpeg",
                    "figNumber": "16.1",
                    "title": "Giải phẫu đám rối thần kinh cùng sau (PSN) từ các nhánh ngoài S1, S2, S3 chi phối khớp cùng chậu (Fig. 16.1)",
                    "desc": "Các nhánh ngoài thoát ra từ bờ ngoài lỗ cùng sau S1, S2, S3 đan thành mạng lưới thần kinh cùng sau trên mào cùng bên.",
                    "springerCaption": "Fig. 16.1 Posterior innervation of the sacroiliac joint from the posterior sacral network (S1–S3 lateral branches and L5 dorsal ramus)."
                },
                {
                    "path": "assets/images/anatomy/fig_16_02_sacral_lateral_branches_model.jpg",
                    "figNumber": "16.2",
                    "title": "Mô hình giải phẫu xương đường đi các nhánh ngoài S1 (vàng), S2 (xanh lá) và S3 (xanh dương) qua các củ ngang cùng (Fig. 16.2)",
                    "desc": "Mối liên quan giữa lỗ cùng sau, mào cùng bên (các củ TST1–TST3) và đường đi của nhánh ngoài S1–S3 hướng ra khớp cùng chậu.",
                    "springerCaption": "Fig. 16.2 Bone model illustrating the course of S1, S2, and S3 lateral branches across the lateral sacral crest."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Khe xương cùng và hai sừng cùng (Sacral hiatus & Sacral cornua) ở đầu dưới xương cùng (mức S4–S5).",
                "Gai chậu sau trên (PSIS - ngang mức S2).",
                "Mào cùng giữa (Median sacral crest) ở đường giữa."
            ],
            "referenceLines": "Đường dọc mào cùng bên (Lateral sacral crest line): Chạy song song cách đường giữa mào cùng giữa khoảng 2 - 2.5 cm (ngay bờ ngoài dãy lỗ cùng sau S1–S3 và ngay phía trong khe khớp cùng chậu).",
            "palpationSteps": [
                "1. Bệnh nhân nằm sấp trên bàn phẳng có kê gối dưới khung chậu.",
                "2. Dùng ngón trỏ sờ rãnh liên mông tìm khe lõm hình tam giác giữa hai sừng cùng (Sacral hiatus) ở dưới và sờ hai mỏm PSIS ở trên.",
                "3. Đánh dấu trục dọc cạnh đường giữa xương cùng ~2 - 2.5 cm từ khe cùng lên ngang bờ trên PSIS."
            ],
            "probePlacement": "Phương pháp quét chuẩn từ dưới lên của Finlayson: Đặt đầu dò Curvilinear (hoặc Linear ở người gầy) cắt ngang tại khe cùng (hai sừng cùng) -> dịch sang bên đau tới bờ ngoài xương cùng dưới -> trượt đầu dò từ dưới lên đầu (caudad-to-cephalad) lần lượt nhận diện các khuyết hẫng vỏ xương của lỗ cùng S3, S2, S1 và gờ nhô của mào cùng bên (TST3, TST2, TST1) nằm ngay sát bờ ngoài mỗi lỗ cùng; kết hợp xoay dọc cạnh giữa (Parasagittal) qua hàng lỗ cùng để xác nhận đầu kim nằm trên gờ xương giữa/ngoài các lỗ chứ không tụt vào lỗ cùng.",
            "figures": [
                {
                    "path": "assets/images/ch15_sacroiliac_joint/p192_img1.jpeg",
                    "figNumber": "15.3",
                    "title": "Mặt cắt dọc cạnh giữa xương cùng hiển thị hàng lỗ cùng sau S1–S3 xác nhận vị trí kim (Fig. 15.3)",
                    "desc": "Quét dọc cạnh giữa qua xương cùng cho thấy các khuyết hở của lỗ cùng sau để đảm bảo mũi kim tựa an toàn trên mào xương.",
                    "springerCaption": "Fig. 15.3 Parasagittal scan of the sacrum demonstrating the posterior sacral foramina."
                }
            ]
        }
    },

    "sacroiliac-joint-rfa": {
        "anatomy": {
            "overview": "Do số lượng và vị trí chính xác theo chiều dọc của các nhánh ngoài thần kinh cùng S1–S3 (Posterior Sacral Network) biến thiên khá lớn giữa từng cá thể khi chúng vượt qua mào cùng bên (Lateral Sacral Crest - LSC), đốt sóng cao tần đơn cực từng điểm đơn lẻ dễ bỏ sót sợi thần kinh. Kỹ thuật tạo 'Dải tổn thương nhiệt liên tục lưỡng cực' (Bipolar Palisade / Strip Lesioning RFA) dưới hướng dẫn siêu âm đặt một hàng kim RF thẳng hàng dọc theo mào cùng bên nối liên tục từ củ ngang xương cùng thứ 1 (TST1 – ngang S1) qua TST2 (ngang S2) tới TST3 (ngang S3), kết hợp đốt ngành sau L5 tại rãnh cánh xương cùng (Sacral ala notch), tạo ra một bức tường đông nhiệt chặn đứng toàn bộ mạng lưới thần kinh cùng sau!",
            "targetStructure": "Dải bản xương liên tục của Mào cùng bên (Lateral sacral crest) kéo dài từ củ ngang cùng 1 (TST1 - ngoài lỗ S1) qua TST2 tới củ ngang cùng 3 (TST3 - ngoài lỗ S3), kèm rãnh gốc mỏm khớp trên S1 – cánh xương cùng (cho ngành sau L5).",
            "innervation": "Đám rối thần kinh cùng sau (S1–S3 lateral branches) và ngành sau L5 (chỉ thực hiện RFA sau khi bệnh nhân đáp ứng giảm đau ≥ 50–80% với phong bế chẩn đoán SLBB!).",
            "vascularAndDangerZones": [
                "Rễ thần kinh vận động – tự chủ cùng S1–S3 bên trong lỗ cùng sau: BẮT BUỘC đặt các cannula cách bờ ngoài lỗ cùng ~5 - 8 mm trên mào cùng bên VÀ bắt buộc test kích thích cảm giác (50 Hz) + vận động (2 Hz đến 2.0 V không có giật cơ mông/chân hay co cơ thắt hậu môn!) trước khi phát nhiệt!",
                "Rễ thần kinh thắt lưng L5 đi ở mặt trước cánh xương cùng (tránh trượt kim vượt quá bờ trước trên cánh xương cùng khi đốt L5 dorsal ramus).",
                "Bỏng nhiệt da vùng mông nông ở bệnh nhân quá gầy (đảm bảo phần đầu hoạt động Active tip 10 mm nằm sâu hoàn toàn sát bản xương dưới cân cơ dày)."
            ],
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_16_04_sij_strip_lesion_diagram.jpg",
                    "figNumber": "16.4",
                    "title": "Sơ đồ giải phẫu dải tổn thương nhiệt liên tục (Strip lesion) từ củ ngang cùng TST1 đến TST3 (Fig. 16.4)",
                    "desc": "Đường chấm đứt nét minh họa dải đốt sóng cao tần liên tục chạy dọc theo mào cùng bên ở phía ngoài hàng lỗ cùng S1–S3 cắt đứt toàn bộ mạng thần kinh cùng sau.",
                    "springerCaption": "Fig. 16.4 Illustration of continuous radiofrequency strip lesion extending from the first to third transverse sacral tubercles lateral to S1–S3 foramina."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Khe xương cùng và hai sừng cùng (Sacral hiatus & cornua) ở cực dưới xương cùng.",
                "Gai chậu sau trên (PSIS) ở phía ngoài ngang mức S2.",
                "Mào cùng giữa (Median sacral crest) ở đường giữa và mào chậu phía trên."
            ],
            "referenceLines": "Trục hàng rào kim (Palisade line): Nằm dọc trên mào cùng bên cách đường giữa xương cùng khoảng 2 - 2.5 cm (nằm giữa hàng lỗ cùng sau ở phía trong và bờ trong PSIS/khe khớp cùng chậu ở phía ngoài), khoảng cách giữa mỗi cannula liền kề ≤ 10 mm để các ổ đốt lưỡng cực chồng lấp liền dải.",
            "palpationSteps": [
                "1. Đặt bệnh nhân nằm sấp cân xứng hai bên, kê gối dưới khung chậu, dán bản điện cực trung tính (Grounding pad) chắc chắn lên đùi/bắp chân.",
                "2. Sờ xác định khe xương cùng ở dưới, mào cùng giữa ở đường giữa và đỉnh gai chậu sau trên (PSIS) ở bên bệnh.",
                "3. Dùng bút vô khuẩn đánh dấu trục dọc dự kiến giữa đường giữa xương cùng và PSIS sau khi quét siêu âm sơ bộ."
            ],
            "probePlacement": "Bước 1: Dùng đầu dò Curvilinear quét ngang từ khe cùng ngược lên đầu để đánh dấu lên da 3 mức ngang của củ ngang cùng TST3 (ngoài S3), TST2 (ngoài S2), TST1 (ngoài S1) và rãnh cánh cùng L5. Bước 2: Xoay đầu dò sang mặt cắt đứng dọc cạnh giữa (Sagittal view along lateral sacral crest) để kiểm soát trực quan hàng cannula RFA nằm tựa sát liên tục dọc mào cùng bên với khoảng cách các đầu kim đều nhau 0.8 - 1.0 cm.",
            "figures": [
                {
                    "path": "assets/images/ch16_sacroiliac_rfa/p198_img1.jpeg",
                    "figNumber": "16.3",
                    "title": "Quét trượt đầu dò mặt phẳng ngang từ dưới lên định vị 3 củ ngang cùng TST3, TST2, TST1 (Fig. 16.3)",
                    "desc": "Các mặt cắt ngang liên tiếp từ khe cùng lên S3, S2, S1 chỉ rõ mốc mào cùng bên nằm ngay phía ngoài miệng lỗ cùng sau.",
                    "springerCaption": "Fig. 16.3 Caudad-to-cephalad transverse sacral scans illustrating landmarks for SIJ radiofrequency strip lesioning."
                }
            ]
        }
    },

    "caudal-epidural": {
        "anatomy": {
            "overview": "Khe xương cùng (Sacral Hiatus) là một khuyết hở tự nhiên hình chữ U hoặc chữ V ngược ở đầu dưới thành sau ống cùng do sự không hàn kín bẩm sinh bản sống của đốt cùng S5 (và đôi khi S4). Hai bên khe cùng được giới hạn bởi hai mấu xương nhô gọi là SỪNG CÙNG (Sacral cornua – di tích mỏm khớp dưới S5), sàn khe là mặt sau thân đốt S5, và mái khe được căng phủ bởi DÂY CHẰNG CÙNG – CỤT SAU SÂU (Sacrococcygeal ligament / membrane – tương đương dây chằng vàng ở trên). Bên trong ống cùng chứa đám rối thần kinh cùng – cụt, dây tận cùng, mạng tĩnh mạch ngoài màng cứng phong phú và TÚI MÀNG CỨNG (Dural sac – bình thường kết thúc ở ngang mức S2, nhưng ở 1–5% người lớn hoặc trẻ nhỏ có thể xuống thấp tới S3–S4!).",
            "targetStructure": "Khoang ngoài màng cứng ống cùng ngay phía dưới dây chằng cùng – cụt (Caudal epidural canal just beyond the sacrococcygeal membrane, dừng đầu kim ngay sau khi qua màng 5 - 10 mm, tuyệt đối không đẩy kim cao lên mức S2–S3!).",
            "innervation": "Dung dịch tiêm ngoài màng cứng xương cùng (10 - 20 ml) lan ngược lên khoang ngoài màng cứng thắt lưng – cùng tác động lên các rễ thần kinh L4, L5 và S1–S5.",
            "vascularAndDangerZones": [
                "TÚI MÀNG CỨNG (Dural sac): Kết thúc ngang S2 (nằm cách đỉnh khe cùng khoảng 4.5 - 6 cm, nhưng có thể thấp bất thường ở S3 hoặc có nang Tarlov lớn trong ống cùng!) – siêu âm giúp đo khoảng cách và chỉ cần luồn kim qua màng cùng cụt 0.5 - 1 cm (nhìn rõ 100% dưới mặt cắt dọc) thay vì đẩy sâu mù như kinh điển tránh thủng màng cứng gây tê tủy sống toàn bộ!",
                "Đám rối tĩnh mạch ngoài màng cứng không van của Batson (Epidural venous plexus): Tiêm mù có tỷ lệ vào tĩnh mạch tới 10–15% mà hút thử vẫn có thể âm tính giả do xẹp thành tĩnh mạch – bắt buộc dùng Dexamethasone hoặc kiểm tra dòng lan dịch mở rộng khoang ngoài màng cứng trên siêu âm + Color Doppler!",
                "Biến thể khuyết đóng kín hoàn toàn khe cùng (gặp ở ~3–5% người lớn tuổi vôi hóa màng) hoặc khuyết toác thành sau ống cùng hoàn toàn."
            ],
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_17_01_sacral_hiatus_cornua.jpg",
                    "figNumber": "17.1",
                    "title": "Giải phẫu xương khe xương cùng (mũi tên), hai sừng cùng (*) và chùm đuôi ngựa trong ống cùng (Fig. 17.1)",
                    "desc": "Hình chụp xương thực tế và thiết đồ dọc ống cùng chỉ rõ cửa vào khe xương cùng nằm giữa hai sừng cùng (*) ở đầu dưới xương cùng.",
                    "springerCaption": "Fig. 17.1 Bony anatomy of the sacral hiatus (arrow), bilateral sacral cornua (*), and sagittal view of the sacral canal."
                },
                {
                    "path": "assets/images/anatomy/fig_17_03_dural_sac_filum.jpg",
                    "figNumber": "17.3",
                    "title": "Tương quan giải phẫu điểm tận hết túi màng cứng tại mức S2 và dây tận cùng ở khe cùng (Fig. 17.3)",
                    "desc": "Túi màng cứng (Dura) thường tận hết ở mức S2 (ngang hai gai chậu sau trên PSIS), cách đỉnh khe xương cùng vài centimet.",
                    "springerCaption": "Fig. 17.3 Anatomical termination of the dural sac at S2 and filum terminale passing through the sacral hiatus."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Hai gai chậu sau trên (Bilateral PSIS): Hai hõm xương đối xứng ngang mức đốt cùng S2.",
                "Hai sừng cùng (Sacral cornua): Hai gờ xương nhỏ bằng hạt đậu nằm đối xứng hai bên đường giữa ngay phía trên đỉnh rãnh liên mông.",
                "Đỉnh xương cụt (Tip of coccyx) ở sâu dưới rãnh mông."
            ],
            "referenceLines": "QUY TẮC TAM GIÁC ĐỀU KINH ĐIỂN (Equilateral Triangle Rule): Nối đoạn thẳng ngang giữa hai gai chậu sau trên (PSIS trái và PSIS phải) làm cạnh đáy của một tam giác đều hướng đỉnh xuống dưới đường giữa – đỉnh dưới của tam giác đều này trùng chính xác với KHE XƯƠNG CÙNG (Sacral hiatus)!",
            "palpationSteps": [
                "1. Đặt bệnh nhân nằm sấp, kê gối dưới xương chậu, hai gót chân xoay ra ngoài (ngón chân cái chụm vào nhau – Pigeon-toed position) để làm giãn mềm tối đa hai cơ mông lớn giúp bộc lộ khe liên mông.",
                "2. Dùng ngón cái và ngón giữa một tay chạm hai gai chậu sau trên (PSIS), hạ ngón trỏ tạo tam giác đều xuống đường giữa ngay đầu trên rãnh liên mông.",
                "3. Dùng đầu ngón trỏ lăn ngang nhẹ nhàng ngay trên xương cụt để cảm nhận hai gờ xương sừng cùng hai bên và hõm đàn hồi ở giữa (màng cùng – cụt). ĐẶC BIỆT luôn đặt gạc vô khuẩn che kín hoàn toàn phía rãnh hậu môn ở dưới tránh nhiễm khuẩn ngược dòng!"
            ],
            "probePlacement": "Quy trình 2 mặt cắt chuẩn mực: Bước 1 – Đặt đầu dò Linear (hoặc Curvilinear ở người béo) cắt ngang (Transverse short-axis) ngay trên đỉnh tam giác đều để thấy 'Dấu hiệu mắt ếch' (Frog-eye sign): hai sừng cùng tăng âm tròn hai bên nối bởi dải trắng sáng của màng cùng – cụt ở trên và sàn xương S5 ở dưới. Bước 2 – Xoay đầu dò 90 độ sang mặt cắt dọc giữa (Mid-sagittal long-axis) để dẫn đường kim In-plane từ dưới lên xuyên qua màng cùng – cụt vào ống cùng dưới quan sát trực tiếp 100%.",
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_17_02_sacrococcygeal_ligament.jpg",
                    "figNumber": "17.2",
                    "title": "Giải phẫu bề mặt màng cùng - cụt căng che phủ khe xương cùng và quy tắc định vị (Fig. 17.2)",
                    "desc": "Màng dây chằng cùng - cụt đậy kín khe xương cùng giữa hai sừng cùng là ranh giới cảm nhận rõ nhất trên siêu âm trước khi vào ống cùng.",
                    "springerCaption": "Fig. 17.2 Sacral hiatus covered by the sacrococcygeal ligament."
                }
            ]
        }
    },

    "prp-platelet-rich-plasma": {
        "anatomy": {
            "overview": "Huyết tương giàu tiểu cầu tự thân (Platelet-Rich Plasma - PRP) không chỉ định cho một vùng giải phẫu cố định mà nhắm trực tiếp vào VI CẤU TRÚC MÔ ĐÍCH ĐANG THOÁI HÓA (Micro-anatomical target niche): (1) Trong bệnh lý điểm bám gân mạn tính (Tendinosis / Enthesopathy như gân trên gai, gân duỗi chung ECRB, gân bánh chè, gân Achilles, cân gan chân), tổn thương đặc trưng bởi sự đứt gãy vô tổ chức sợi collagen type I thay bằng collagen type III nghèo nàn ở vùng vô mạch sát chỗ tiếp nối gân – sụn sợi – xương (Osteotendinous enthesis); (2) Trong thoái hóa khớp (gối, háng, vai, cổ chân), đích tác động là khoang hoạt dịch nội khớp chứa màng hoạt dịch viêm và bề mặt sụn hyalin. Các hạt Alpha của tiểu cầu giải phóng PDGF, TGF-β, VEGF, IGF-1 kích hoạt chuỗi tái tạo sinh học 3 pha (Viêm sinh lý -> Tăng sinh nguyên bào sợi -> Tái cấu trúc collagen). Lựa chọn LP-PRP (nghèo bạch cầu) cho nội khớp và LR-PRP (giàu bạch cầu) hoặc LP-PRP kết hợp châm kim Fenestration cho điểm bám gân.",
            "targetStructure": "Ổ rách bán phần / vùng thoái hóa nhầy giảm âm tại điểm bám xương – gân (Enthesis intratendinous zone – dùng kỹ thuật rải hạt tiêu Peppering / Fenestration) HOẶC khoang bao hoạt dịch nội khớp thực sự (Intra-articular synovial recess).",
            "innervation": "Các sợi thần kinh cảm giác tự do (Sợi C chứa Substance P và CGRP) mọc lan kèm các vi mạch tân sinh (Neovascularization) xâm nhập vào mặt sâu của gân thoái hóa hoặc màng hoạt dịch khớp.",
            "vascularAndDangerZones": [
                "Vùng lấy máu tĩnh mạch ngoại vi (thường là Tĩnh mạch nền / Tĩnh mạch giữa khuỷu tại hố trụ – Antecubital fossa): Cần lưu ý tránh chọc sâu xuyên qua cân cơ nhị đầu vào ĐỘNG MẠCH CÁNH TAY và THẦN KINH GIỮA nằm ngay mặt sâu tĩnh mạch giữa khuỷu!",
                "Mạng mạch máu – thần kinh đặc thù của từng vùng khớp/gân đích (luôn bật Color/Power Doppler trên siêu âm: Power Doppler giúp nhận diện vùng tân mạch bệnh lý trong gân để đưa PRP tới đúng tâm tổn thương, đồng thời tránh bơm vào lòng động mạch lớn!).",
                "TUYỆT ĐỐI KHÔNG pha chung Thuốc tê nồng độ cao (Lidocaine > 1%, Bupivacaine, Ropivacaine) hoặc Corticosteroid vào ống PRP vì gây độc tế bào sụn (Chondrotoxicity), làm kết tập sớm hoặc bất hoạt chức năng hạt Alpha tiểu cầu!"
            ],
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_25_01_platelet_physiology.jpg",
                    "figNumber": "25.1",
                    "title": "Giải phẫu vi thể tiểu cầu, các hạt Alpha và yếu tố tăng trưởng tái tạo mô cơ xương khớp (Fig. 25.1)",
                    "desc": "Tiểu cầu chứa các hạt Alpha giàu yếu tố tăng trưởng (PDGF, TGF-β, VEGF, EGF, IGF-1) đóng vai trò trung tâm khởi động tái tạo sụn khớp và sợi collagen gân.",
                    "springerCaption": "Fig. 25.1 Platelet ultrastructure, alpha-granules, and bioactive growth factors in tissue regeneration."
                },
                {
                    "path": "assets/images/anatomy/fig_25_04_prp_clinical_targets.jpg",
                    "figNumber": "25.4",
                    "title": "Phân bố các vị trí giải phẫu ứng dụng lâm sàng trọng điểm của liệu pháp PRP (Fig. 25.4)",
                    "desc": "Các đích giải phẫu có bằng chứng hiệu quả cao nhất với PRP gồm thoái hóa khớp gối/háng, viêm điểm bám gân khuỷu, chóp xoay vai, gân bánh chè và cân gan chân.",
                    "springerCaption": "Fig. 25.4 Primary anatomical and clinical applications of platelet-rich plasma in musculoskeletal medicine."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Bước 1 (Lấy máu tự thân): Hố trụ trước khuỷu (Antecubital fossa) – tĩnh mạch giữa khuỷu (Median cubital vein) hoặc tĩnh mạch đầu ở phía ngoài (an toàn hơn tĩnh mạch nền ở phía trong do xa động mạch cánh tay và thần kinh giữa).",
                "Bước 2 (Tiêm đích dưới siêu âm): Tuân thủ đúng mốc xương bề mặt đặc hiệu của khớp hoặc điểm bám gân đích (ví dụ: cực trên ngoài bánh chè cho khớp gối; mỏm trên lồi cầu ngoài – chỏm quay cho Tennis Elbow; cực dưới bánh chè cho gân bánh chè; củ lớn cho gân trên gai)."
            ],
            "referenceLines": "Định vị kép: (1) Sờ điểm đau khu trú nhất trên diện bám xương của gân (Clinical maximal tenderness enthesis) kết hợp (2) Ánh xạ lên hình ảnh vùng giảm âm mất cấu trúc sợi / tăng sinh mạch trên siêu âm (Sonographic hypoechoic defect) để trùng khớp 100% trước khi tiêm PRP.",
            "palpationSteps": [
                "1. Khám và đánh dấu mốc bề mặt vùng tĩnh mạch khuỷu tay để lấy 15 - 30 ml máu tĩnh mạch bằng kim lớn (18G - 21G tránh vỡ hồng cầu và hoạt hóa tiểu cầu sớm do lực xé).",
                "2. Đặt bệnh nhân ở tư thế bộc lộ căng nhẹ gân hoặc mở rộng ngách khớp đích (tương ứng từng thủ thuật thành phần trên hệ thống).",
                "3. Sờ xác định mốc xương điểm bám gân và chỉ gây tê da nông ở điểm chọc ngoài bao gân (tránh bơm thuốc tê trực tiếp vào ổ gân nơi sắp bơm PRP)."
            ],
            "probePlacement": "Luôn quét siêu âm trực tiếp 2 mặt phẳng (dọc và ngang) kèm Power Doppler tại mô đích trước khi chuẩn bị kim để đo kích thước vùng rách bán phần / thoái hóa gân hoặc xác nhận ngách dịch nội khớp (nếu khớp gối có tràn dịch viêm nhiều, bắt buộc chọc hút sạch dịch khớp thừa dưới siêu âm trước khi bơm LP-PRP để không làm loãng nồng độ yếu tố tăng trưởng!).",
            "figures": [
                {
                    "path": "assets/images/ch25_prp/p322_img1.jpeg",
                    "figNumber": "25.6",
                    "title": "Quy trình thu thập máu tĩnh mạch, ly tâm tách lớp Buffy coat và tiêm đích dưới hướng dẫn siêu âm (Fig. 25.6)",
                    "desc": "Chu trình khép kín vô trùng từ lấy máu chống đông, ly tâm thu huyết tương giàu tiểu cầu tới tiêm chính xác vào cấu trúc giải phẫu đích dưới siêu âm.",
                    "springerCaption": "Fig. 25.6 Closed-system platelet-rich plasma preparation and ultrasound-guided target injection."
                }
            ]
        }
    }
}
