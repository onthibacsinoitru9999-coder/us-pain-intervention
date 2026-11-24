# -*- coding: utf-8 -*-
# Part 1: Upper Limb Procedures (14 procedures)
# Based on Philip Peng et al. - Ultrasound for Interventional Pain Management (Springer, 2020)

UPPER_ANATOMY_DATA = {
    "sasd-bursa": {
        "anatomy": {
            "overview": "Bao hoạt dịch dưới mỏm cùng vai – dưới cơ delta (Subacromial-Subdeltoid Bursa - SASD) là bao hoạt dịch lớn nhất vùng vai, cấu tạo gồm hai khoang thanh mạc thông nối trực tiếp với nhau ở khoảng 95% người trưởng thành. Túi SASD lót ngay dưới vòm quạ – cùng vai (gồm mỏm cùng vai, dây chằng quạ – cùng vai và mỏm quạ) cùng mặt sâu cơ delta, đồng thời phủ lên mặt nông gân cơ trên gai, phần trước gân dưới gai và đoạn gần rãnh nhị đầu để giảm ma sát khi dạng và nâng vai.",
            "targetStructure": "Khoang ảo bao hoạt dịch SASD (bình thường dày < 2 mm gồm lớp thanh mạc và lớp mỡ quanh bao) nằm kẹp giữa mạc sâu cơ delta ở nông và bề mặt gân cơ trên gai ở sâu.",
            "innervation": "Nhánh cảm giác từ thần kinh trên vai (Suprascapular nerve - C5, C6), thần kinh nách (Axillary nerve) và thần kinh ngực ngoài (Lateral pectoral nerve).",
            "vascularAndDangerZones": [
                "Nhánh cùng vai của động mạch ngực – cùng vai (Acromial branch of thoracoacromial artery) chạy dọc theo dây chằng quạ – cùng vai và mặt nông bao hoạt dịch.",
                "Mạng mạch nuôi vùng nguy hiểm tới hạn (Critical zone) của gân trên gai cách điểm bám củ lớn khoảng 1 cm.",
                "Bề mặt gân cơ trên gai (Supraspinatus tendon): Tuyệt đối tránh đâm xuyên hoặc bơm corticoid vào nội chất gân gây hoại tử sợi collagen và đứt gân thứ phát."
            ],
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_19_02_rotator_cuff_sasd.jpg",
                    "figNumber": "19.2",
                    "title": "Giải phẫu 4 cơ chóp xoay, vòm quạ - cùng vai và bao hoạt dịch SASD (Fig. 19.2)",
                    "desc": "Bao hoạt dịch SASD (màu xanh mờ) nằm dưới cơ delta và vòm dây chằng quạ - cùng vai, phủ trực tiếp lên mặt nông gân cơ trên gai.",
                    "springerCaption": "Fig. 19.2 The four rotator cuff muscles and SASD bursa located deep to the acromion and deltoid muscle and superficial to the supraspinatus tendon."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Bờ ngoài mỏm cùng vai (Anterolateral & Lateral border of acromion): Gờ xương phẳng sờ rất rõ trên đỉnh ngoài vai.",
                "Củ lớn xương cánh tay (Greater tuberosity): Gồ xương tròn nằm ngay phía dưới ngoài bờ mỏm cùng vai khoảng 1.5 - 2 cm.",
                "Mỏm quạ xương vai (Coracoid process): Điểm xương nhô ra ở rãnh delta – ngực phía trước dưới xương đòn."
            ],
            "referenceLines": "Khe dưới mỏm cùng vai (Subacromial space): Rãnh lõm sờ thấy ngay dưới bờ trước ngoài mỏm cùng vai khi kéo nhẹ cánh tay xuôi xuống; trục gân trên gai chạy chếch từ hố trên gai qua dưới mỏm cùng vai tới củ lớn.",
            "palpationSteps": [
                "1. Dùng ngón trỏ và ngón giữa lần dọc từ gai vai ra phía ngoài để xác định góc sau ngoài và bờ ngoài mỏm cùng vai.",
                "2. Trượt ngón tay xuống dưới bờ ngoài mỏm cùng vai khoảng 1 khoát ngón tay để chạm vào củ lớn xương cánh tay; xoay trong – xoay ngoài nhẹ cánh tay để cảm nhận củ lớn lăn dưới ngón tay.",
                "3. Đưa tay bệnh nhân về tư thế Crass cải tiến (đặt lòng bàn tay lên mào chậu/túi quần sau, khuỷu hướng ra sau) để kéo củ lớn và gân trên gai trồi ra phía trước ngoài khỏi bóng cản của mỏm cùng vai."
            ],
            "probePlacement": "Đặt đầu dò Linear theo mặt phẳng trán chếch (Oblique coronal / trục dọc gân trên gai) ngay sát bờ trước ngoài mỏm cùng vai, đầu trong tựa mép mỏm cùng vai, đầu ngoài phủ lên sườn củ lớn xương cánh tay.",
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_19_09b_acromion_sagittal_probe.jpg",
                    "figNumber": "19.9b",
                    "title": "Mốc bề mặt mỏm cùng vai và cách đặt đầu dò định vị trên vai (Fig. 19.9b)",
                    "desc": "Xác định bề mặt xương mỏm cùng vai làm mốc chuẩn trước khi trượt đầu dò ra bờ ngoài xuống khoang dưới mỏm cùng vai.",
                    "springerCaption": "Fig. 19.9b Surface probe placement over the acromion landmark."
                }
            ]
        }
    },

    "glenohumeral-posterior": {
        "anatomy": {
            "overview": "Khớp ổ chảo – cánh tay (Glenohumeral Joint - GHJ) là khớp chỏm cầu hoạt dịch biên độ rộng giữa chỏm xương cánh tay lớn và ổ chảo xương vai nông, được mở rộng và làm sâu thêm bởi sụn viền ổ chảo (Glenoid labrum). Bao khớp phía sau mỏng và chùng hơn phía trước, được che phủ trực tiếp bởi bụng cơ và gân cơ dưới gai (Infraspinatus) ở trên và cơ tròn bé (Teres minor) ở dưới, không có các bó mạch thần kinh lớn đi ngang qua trung tâm khe khớp sau.",
            "targetStructure": "Ngách sau khoang khớp ổ chảo – cánh tay (Posterior glenohumeral recess), nằm giữa lớp sụn hyalin chỏm xương cánh tay và bờ tự do sụn viền sau ổ chảo, ngay mặt sâu của gân cơ dưới gai.",
            "innervation": "Thần kinh trên vai (Suprascapular nerve - chi phối 70% cảm giác bao khớp trên và sau), thần kinh nách (Axillary nerve - bao khớp dưới) và thần kinh dưới vai.",
            "vascularAndDangerZones": [
                "Thần kinh trên vai và động mạch trên vai đi qua khuyết quạ – gai vai (Spinoglenoid notch) nằm cách bờ ổ chảo khoảng 1.5 - 2 cm về phía trong (cần tránh đưa kim hoặc đặt đầu dò quá sâu vào phía trong ổ chảo).",
                "Động mạch mũ cánh tay sau và thần kinh nách đi qua lỗ tứ giác (Quadrangular space) ở phía dưới cơ tròn bé (tránh trượt đầu dò quá thấp xuống nách sau).",
                "Sụn viền sau (Posterior labrum): Cấu trúc sụn sợi hình tam giác bám bờ sau ổ chảo – tuyệt đối không đâm xuyên mũi kim qua sụn viền."
            ],
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_19_01_gh_capsule_ligaments.jpg",
                    "figNumber": "19.1",
                    "title": "Giải phẫu bao khớp ổ chảo - cánh tay, dây chằng và sụn viền ổ chảo (Fig. 19.1)",
                    "desc": "Hệ thống bao khớp ổ chảo - cánh tay, các dây chằng gia cố và thiết đồ diện khớp ổ chảo kèm vòng sụn viền (Labrum).",
                    "springerCaption": "Fig. 19.1 The GH joint capsule, surrounding ligaments, and inset showing the glenoid articular surface and labrum."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Gai vai (Spine of scapula): Gờ xương ngang chạy suốt mặt sau xương vai ra phía ngoài.",
                "Góc sau ngoài mỏm cùng vai (Posterolateral corner of acromion): Mốc xương gồ rõ nơi gai vai chuyển góc ra trước thành mỏm cùng vai.",
                "Mỏm quạ (Coracoid process) ở phía trước (dùng làm mốc định hướng trục trước – sau của khớp)."
            ],
            "referenceLines": "Điểm mềm khớp vai sau (Posterior soft spot): Nằm cách góc sau ngoài mỏm cùng vai khoảng 2 cm xuống dưới và 1 - 1.5 cm vào trong, ngay bờ dưới gai vai.",
            "palpationSteps": [
                "1. Cho bệnh nhân ngồi thẳng hoặc nằm nghiêng bên lành, bàn tay bên đau đặt vắt lên vai đối diện để khép và xoay trong cánh tay (giúp kéo căng mở rộng ngách bao khớp sau).",
                "2. Dùng ngón cái sờ dọc bờ dưới gai vai từ trong ra ngoài cho đến khi chạm góc gập vuông ở phía sau ngoài (góc sau ngoài mỏm cùng vai).",
                "3. Từ góc sau ngoài mỏm cùng vai, trượt ngón tay xuống dưới 2 cm vào hố dưới gai, yêu cầu bệnh nhân xoay nhẹ cánh tay qua lại để cảm nhận chỏm xương cánh tay lăn sâu dưới cơ dưới gai."
            ],
            "probePlacement": "Đặt đầu dò Linear (hoặc Curvilinear ở người cơ dày) nằm ngang song song và ngay sát bờ dưới gai vai (Transverse axial view over infraspinatus fossa), dịch đầu dò ra ngoài – vào trong cho tới khi thấy đồng thời đường cong chỏm cánh tay và bờ sau ổ chảo.",
            "figures": [
                {
                    "path": "assets/images/ch19_shoulder/p223_img1.jpeg",
                    "figNumber": "19.7",
                    "title": "Giải phẫu bề mặt vai sau và vị trí đặt đầu dò dưới gai vai (Fig. 19.7)",
                    "desc": "Đầu dò đặt song song ngay dưới gai vai với bàn tay bệnh nhân vắt sang vai đối diện để bộc lộ khe khớp ổ chảo - cánh tay sau.",
                    "springerCaption": "Fig. 19.7 Posterior view of glenohumeral joint showing surface probe position inferior and parallel to the scapular spine."
                }
            ]
        }
    },

    "glenohumeral-anterior": {
        "anatomy": {
            "overview": "Ở mặt trước khớp vai, bao khớp ổ chảo – cánh tay kéo dài từ bờ trước ổ chảo và nền mỏm quạ tới cổ giải phẫu xương cánh tay, được phủ trực tiếp bởi gân cơ dưới vai (Subscapularis tendon). Khoang gian chóp xoay (Rotator cuff interval) ở phía trước trên chứa dây chằng quạ – cánh tay (CHL), dây chằng ổ chảo – cánh tay trên (SGHL) và gân đầu dài nhị đầu; trong khi ở mặt trước khớp, khe khớp nằm ngay sâu dưới gân cơ dưới vai giữa củ bé và bờ trước ổ chảo.",
            "targetStructure": "Ngách trước khoang khớp ổ chảo – cánh tay (Anterior glenohumeral joint space) nằm giữa bờ trước ổ chảo / sụn viền trước và mặt sụn trong của chỏm xương cánh tay, ngay sâu dưới gân cơ dưới vai.",
            "innervation": "Thần kinh dưới vai trên và dưới (Upper & lower subscapular nerves - C5, C6), thần kinh nách (Axillary nerve) và nhánh khớp của thần kinh ngực ngoài.",
            "vascularAndDangerZones": [
                "Bó mạch nách và Đám rối thần kinh cánh tay (Axillary artery/vein & Brachial plexus) nằm ở phía trong mỏm quạ: Tuyệt đối không đặt điểm chọc kim lệch vào phía trong mỏm quạ.",
                "Tĩnh mạch đầu (Cephalic vein) chạy nông trong rãnh delta – ngực (Deltopectoral groove): Cần quét kiểm tra và ép thử đầu dò trước khi chọc kim.",
                "Động mạch mũ cánh tay trước (Anterior circumflex humeral artery) chạy ngang bờ dưới cơ dưới vai quanh cổ phẫu thuật xương cánh tay."
            ],
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_19_03_biceps_rotator_interval.jpg",
                    "figNumber": "19.3",
                    "title": "Giải phẫu các ngách hoạt dịch mặt trước khớp vai và khoang gian chóp xoay (Fig. 19.3)",
                    "desc": "Mối liên quan giải phẫu giữa mỏm quạ, gân cơ dưới vai, bao hoạt dịch dưới vai và khoang gian chóp xoay phía trước trên.",
                    "springerCaption": "Fig. 19.3 Anterior shoulder synovial membrane recesses and rotator interval anatomy."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Mỏm quạ xương vai (Coracoid process): Mốc xương cứng ấn hơi tức nằm sâu trong rãnh delta – ngực, cách bờ dưới xương đòn chỗ nối 1/3 ngoài và 2/3 trong khoảng 2 cm.",
                "Củ bé xương cánh tay (Lesser tuberosity): Nằm ngay phía ngoài mỏm quạ khoảng 2 cm, lăn rõ dưới tay khi xoay ngoài – xoay trong cánh tay.",
                "Rãnh delta – ngực (Deltopectoral groove): Rãnh lõm tự nhiên giữa bờ trước cơ delta và bờ trên ngoài cơ ngực lớn."
            ],
            "referenceLines": "Đường nối ngang từ đỉnh mỏm quạ ra phía ngoài tới củ bé xương cánh tay tương ứng với trục ngang của gân cơ dưới vai và khe khớp vai trước.",
            "palpationSteps": [
                "1. Bệnh nhân nằm ngửa hoặc ngồi ngả lưng, khuỷu gấp 90 độ khép sát thân mình.",
                "2. Tìm rãnh delta – ngực dưới bờ dưới xương đòn và ấn sâu nhẹ để xác định đỉnh mỏm quạ (giới hạn an toàn phía trong – tuyệt đối không đâm kim vượt vào trong mốc này).",
                "3. Đặt ngón tay ra phía ngoài mỏm quạ 2 cm rồi cho bệnh nhân xoay ngoài tối đa cẳng tay: củ bé và gân dưới vai sẽ trượt ra ngoài làm mở rộng khe khớp trước."
            ],
            "probePlacement": "Đặt đầu dò Linear cắt ngang (Axial plane) ngay phía ngoài mỏm quạ, vuông góc với trục xương cánh tay đang giữ ở tư thế xoay ngoài (External rotation).",
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_19_06b_rotator_interval_scan.jpg",
                    "figNumber": "19.6b",
                    "title": "Định vị đầu dò mặt trước vai và liên quan mỏm quạ - chóp xoay trước (Fig. 19.6b)",
                    "desc": "Mặt cắt ngang phía trước vai với cánh tay xoay nhẹ giúp bộc lộ cấu trúc trước khớp vai và ranh giới mỏm quạ.",
                    "springerCaption": "Fig. 19.6b Surface transducer placement over the anterior shoulder and rotator interval."
                }
            ]
        }
    },

    "biceps-tendon": {
        "anatomy": {
            "overview": "Gân đầu dài cơ nhị đầu cánh tay (Long Head of Biceps Tendon - LHBT) nguyên ủy từ củ trên ổ chảo và sụn viền trên, đi chéo qua khoang gian chóp xoay (được giữ cố định bởi puli dây chằng quạ – cánh tay CHL và dây chằng ổ chảo – cánh tay trên SGHL) trước khi chui vào rãnh gian củ (Bicipital / Intertubercular groove) giữa củ lớn ở ngoài và củ bé ở trong. Bao hoạt dịch gân nhị đầu là một phần kéo dài trực tiếp của màng hoạt dịch khớp ổ chảo – cánh tay bọc quanh gân trong rãnh xương và được che phủ phía nông bởi dây chằng ngang cánh tay.",
            "targetStructure": "Khoang bao hoạt dịch quanh gân đầu dài cơ nhị đầu (Bicipital tendon sheath) bên trong rãnh gian củ (ưu tiên ngách bờ trong hoặc bờ sâu quanh gân, không chọc vào lõi gân).",
            "innervation": "Các nhánh cảm giác từ thần kinh cơ bì (Musculocutaneous nerve), thần kinh nách và mạng lưới sợi giao cảm đi kèm nhánh lên động mạch mũ cánh tay trước.",
            "vascularAndDangerZones": [
                "Nhánh lên của động mạch mũ cánh tay trước (Ascending branch of anterior circumflex humeral artery): Luôn chạy song song sát bờ ngoài (đôi khi bờ sau ngoài) của gân LHBT ngay trong rãnh gian củ – bắt buộc bật Color Doppler trước khi chọc kim!",
                "Lõi sợi gân nhị đầu (LHBT substance): Tiêm steroid trực tiếp vào nội gân gây đứt gân nhị đầu tự phát (biến dạng cơ 'Popeye').",
                "Gân cơ dưới vai bám vào củ bé ngay sát bờ trong rãnh nhị đầu."
            ],
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_19_03_biceps_rotator_interval.jpg",
                    "figNumber": "19.3",
                    "title": "Giải phẫu bao hoạt dịch gân đầu dài cơ nhị đầu và puli gian chóp xoay (Fig. 19.3)",
                    "desc": "Bao hoạt dịch gân đầu dài cơ nhị đầu thông nối trực tiếp với ổ khớp vai và đi xuống trong rãnh gian củ giữa củ lớn và củ bé.",
                    "springerCaption": "Fig. 19.3 Synovial sheath of the long head of biceps tendon and rotator interval structures (CHL, SGHL)."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Củ bé xương cánh tay (Lesser tuberosity): Thành xương sắc nét phía trong rãnh nhị đầu.",
                "Củ lớn xương cánh tay (Greater tuberosity): Thành xương rộng hơn ở phía ngoài rãnh nhị đầu.",
                "Bờ trước mỏm cùng vai và đỉnh mỏm quạ."
            ],
            "referenceLines": "Rãnh gian củ (Bicipital groove): Khi bệnh nhân ngồi thẳng, khuỷu gấp 90 độ, cẳng tay ngửa trung tính hướng thẳng ra trước (hoặc xoay ngoài nhẹ 10-15 độ), rãnh nhị đầu hướng thẳng ra mặt chính diện trước vai, cách bờ trước mỏm cùng vai khoảng 3 cm xuống dưới.",
            "palpationSteps": [
                "1. Đặt ngón trỏ và ngón giữa lên mặt trước chỏm xương cánh tay, ngay dưới bờ trước mỏm cùng vai khoảng 2 - 3 cm.",
                "2. Tay kia cầm cổ tay bệnh nhân thực hiện xoay trong – xoay ngoài cánh tay thụ động biên độ nhỏ (15 - 20 độ).",
                "3. Cảm nhận rõ hai gờ xương (củ lớn ở ngoài, củ bé ở trong) và một rãnh lõm chứa sợi gân tròn lăn qua lại dưới đầu ngón tay – đó chính là rãnh gian củ."
            ],
            "probePlacement": "Đặt đầu dò Linear nằm ngang (Short-axis transverse view) vuông góc với trục xương cánh tay ngay trên mặt trước chỏm cánh tay để thấy hình ảnh cắt ngang gân nhị đầu tròn tăng âm ('Donut sign' khi có dịch) nằm gọn giữa hai mấu củ.",
            "figures": [
                {
                    "path": "assets/images/ch19_shoulder/p222_img1.jpeg",
                    "figNumber": "19.6a",
                    "title": "Vị trí đặt đầu dò bề mặt cắt ngang rãnh nhị đầu mặt trước vai (Fig. 19.6a)",
                    "desc": "Đặt đầu dò ngang trên mặt trước chỏm xương cánh tay với cẳng tay gấp 90 độ xoay ngoài nhẹ để đưa rãnh gian củ hướng thẳng ra trước.",
                    "springerCaption": "Fig. 19.6a Surface probe placement and short-axis scan of long head of biceps (LHB) in the bicipital groove."
                }
            ]
        }
    },

    "ac-joint": {
        "anatomy": {
            "overview": "Khớp cùng vai – đòn (Acromioclavicular Joint - ACJ) là khớp hoạt dịch phẳng nhỏ nối giữa đầu ngoài xương đòn (hướng chếch xuống dưới – ra ngoài) và bờ trong mỏm cùng vai. Bên trong khe khớp hẹp (rộng 2 - 5 mm) thường có một đĩa sụn sợi hình chêm (Fibrocartilaginous articular disc) thoái hóa dần theo tuổi. Bao khớp được gia cố rất chắc ở mặt trên bởi dây chằng cùng – đòn trên (dày nhất, hòa lẫn cân cơ thang và cơ delta), trong khi mặt dưới tiếp xúc trực tiếp với bao hoạt dịch dưới mỏm cùng vai (SASD) và gân cơ trên gai.",
            "targetStructure": "Khoang hoạt dịch khớp cùng vai – đòn nằm ngay dưới dây chằng bao khớp cùng – đòn trên và giữa hai bờ vỏ xương đòn – mỏm cùng vai (thể tích khoang khớp rất nhỏ, chỉ chứa tối đa 0.5 - 1.0 ml).",
            "innervation": "Nhánh khớp từ thần kinh trên vai (Suprascapular nerve) và thần kinh ngực ngoài (Lateral pectoral nerve - C5, C6).",
            "vascularAndDangerZones": [
                "Nhánh cùng vai của động mạch ngực – cùng vai và động mạch trên vai tạo mạng mạch nông quanh bao khớp trên.",
                "Bao khớp dưới mỏng hoặc rách ở người thoái hóa nặng (dấu hiệu Geyser sign): Nếu đâm kim quá sâu (> 1 - 1.5 cm) sẽ xuyên thủng mặt dưới khớp đi thẳng vào gân cơ trên gai bên dưới."
            ],
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_19_04_ac_joint_anatomy.jpg",
                    "figNumber": "19.4",
                    "title": "Giải phẫu khớp cùng vai - đòn và đĩa sụn sợi nội khớp (Fig. 19.4)",
                    "desc": "Khe khớp hoạt dịch cùng vai - đòn ngăn cách bởi đĩa sụn sợi hình chêm (*), mặt dưới tiếp giáp sát bao hoạt dịch dưới mỏm cùng vai và cơ trên gai.",
                    "springerCaption": "Fig. 19.4 The acromioclavicular joint with wedge-shaped fibrocartilaginous disk (*) and direct relation to the subacromial bursa."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Đầu ngoài xương đòn (Distal end of clavicle): Thường nhô cao hơn nhẹ so với mỏm cùng vai tạo bậc thang nhỏ dễ sờ nhất trên đỉnh vai.",
                "Bờ trong mỏm cùng vai (Medial border of acromion): Mặt xương phẳng nằm ngay sát phía ngoài bậc thang đầu ngoài xương đòn.",
                "Hõm chữ V cùng – đòn ở phía sau (Apex of V between posterior clavicle and scapular spine)."
            ],
            "referenceLines": "Trục dọc xương đòn dẫn thẳng ra ngoài tới gờ nhô đầu ngoài xương đòn; khe khớp AC chạy theo hướng trước – sau (hơi chếch từ trước ngoài vào sau trong khoảng 10 - 20 độ).",
            "palpationSteps": [
                "1. Dùng ngón trỏ miết dọc mặt trên xương đòn từ trong ra ngoài cho tới khi chạm một gờ nhô lên rồi tụt xuống một bậc lõm nhỏ – đó chính là khe khớp AC.",
                "2. Thực hiện nghiệm pháp khép ngang cánh tay (Cross-body adduction test) hoặc ấn nhẹ trực tiếp vào khe lõm để xác nhận điểm đau chói đặc trưng tại khớp AC.",
                "3. Đánh dấu vết ấn móng tay nhẹ cách bờ trước hoặc bờ trên khe khớp để định hướng đặt đầu dò vô khuẩn."
            ],
            "probePlacement": "Đặt đầu dò Linear dọc theo trục dài đầu ngoài xương đòn bắc cầu sang mỏm cùng vai theo mặt phẳng trán (Coronal plane) trên đỉnh vai để thấy khe khớp giảm âm hình chữ V nằm giữa hai đầu xương tăng âm.",
            "figures": [
                {
                    "path": "assets/images/ch19_shoulder/p225_img1.jpeg",
                    "figNumber": "19.9a",
                    "title": "Giải phẫu bề mặt đỉnh vai và vị trí đặt đầu dò trên khớp cùng vai - đòn (Fig. 19.9a)",
                    "desc": "Đầu dò đặt trên đỉnh vai dọc theo mặt phẳng trán bắc cầu qua bậc thang giữa đầu ngoài xương đòn và mỏm cùng vai.",
                    "springerCaption": "Fig. 19.9a Surface probe position in coronal plane bridging the distal clavicle and acromion over the AC joint."
                }
            ]
        }
    },

    "suprascapular-nerve": {
        "anatomy": {
            "overview": "Thần kinh trên vai (Suprascapular Nerve - SSN) tách ra từ thân trên đám rối thần kinh cánh tay (rễ C5, C6; đôi khi có C4), chạy ra sau – xuống dưới – ra ngoài băng qua tam giác cổ sau để tới khuyết trên vai (Suprascapular notch). Thần kinh chui dưới dây chằng ngang vai trên (Superior transverse scapular ligament - STSL) vào sàn hố trên gai (Supraspinous fossa) nằm sâu dưới cơ thang và bụng cơ trên gai, sau đó vòng qua khuyết quạ – gai vai (Spinoglenoid notch) xuống hố dưới gai. SSN chi phối vận động cơ trên gai, cơ dưới gai và đảm nhận tới 70% cảm giác đau của khớp ổ chảo – cánh tay, khớp cùng – đòn và bao hoạt dịch SASD.",
            "targetStructure": "Sàn xương hố trên gai (Supraspinous fossa floor) hoặc rãnh khuyết trên vai nằm ngay sâu dưới mạc sâu cơ trên gai và dây chằng ngang vai trên (tiếp cận lối sau Harmon & Hearty an toàn hơn rất nhiều so với khuyết trên vai cổ điển).",
            "innervation": "Bản thân thần kinh trên vai (C5–C6) mang sợi cảm giác cho 70% bao khớp vai trên – sau và sợi vận động cho cơ trên gai, cơ dưới gai.",
            "vascularAndDangerZones": [
                "Động mạch và tĩnh mạch trên vai (Suprascapular artery & vein): Theo quy luật kinh điển 'Army over Navy', động mạch thường đi TRÊN dây chằng ngang vai trên còn thần kinh đi DƯỚI dây chằng, nhưng trong sàn hố trên gai bó mạch và thần kinh nằm sát cạnh nhau – cần bật Doppler màu!",
                "Đỉnh màng phổi (Pleural apex / Dome of lung) nằm ngay phía trước khuyết trên vai: Tuyệt đối không chọc kim hướng ra trước vượt quá khuyết trên vai để tránh tràn khí màng phổi (Pneumothorax)!"
            ],
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_04_01_suprascapular_course.jpg",
                    "figNumber": "4.1",
                    "title": "Đường đi giải phẫu của thần kinh trên vai qua khuyết trên vai và khuyết quạ - gai vai (Fig. 4.1)",
                    "desc": "Thần kinh trên vai đi qua khuyết trên vai vào sàn hố trên gai rồi vòng qua khuyết quạ - gai vai phân nhánh cảm giác bao khớp sau.",
                    "springerCaption": "Fig. 4.1 Schematic drawing of the anatomical course of the suprascapular nerve along the supraspinous and infraspinous fossae."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Gai vai (Spine of the scapula): Mốc xương dài nằm ngang mặt sau trên xương bả vai.",
                "Góc trong gai vai (Root of scapular spine - ngang mức T3) và mỏm cùng vai ở phía ngoài.",
                "Bờ sau xương đòn (Posterior border of clavicle): Tạo với gai vai một hố cơ hình thang ở mặt trên vai (hố trên gai)."
            ],
            "referenceLines": "Đường kẻ dọc bờ trên gai vai nối từ góc trong gai vai tới bờ sau mỏm cùng vai; điểm giữa hoặc 1/3 ngoài đường này tương ứng với vùng sàn hố trên gai dẫn ra khuyết quạ – gai vai.",
            "palpationSteps": [
                "1. Bệnh nhân ngồi thẳng, bàn tay bên cần phong bế đặt lên vai đối diện để kéo xương bả vai dịch ra ngoài và tách xa cột sống.",
                "2. Sờ xác định toàn bộ chiều dài gai vai từ đầu trong tới mỏm cùng vai ở phía ngoài.",
                "3. Ấn nhẹ ngón tay ngay phía trên bờ trên gai vai (khoảng điểm nối 1/3 giữa và 1/3 ngoài) để cảm nhận khối cơ thang – cơ trên gai phủ trên hố trên gai."
            ],
            "probePlacement": "Đặt đầu dò Linear theo mặt phẳng trán hơi chếch ngay phía trên và song song với gai vai (Coronal plane just cephalad to scapular spine), sau đó nghiêng nhẹ chùm tia ra trước (tilt anteriorly) để thấy đáy xương hố trên gai hình lòng thuyền.",
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_04_02_suprascapular_probe.jpg",
                    "figNumber": "4.2",
                    "title": "Mốc bề mặt gai vai và vị trí đặt đầu dò phong bế thần kinh trên vai lối sau (Fig. 4.2)",
                    "desc": "Đặt đầu dò ngay phía trên và song song với gai vai, đâm kim In-plane từ trong ra ngoài luôn có sàn xương hố trên gai che chắn màng phổi.",
                    "springerCaption": "Fig. 4.2 Surface landmark of scapular spine and ultrasound probe position for posterior approach suprascapular nerve block."
                }
            ]
        }
    },

    "calcific-tendinitis-barbotage": {
        "anatomy": {
            "overview": "Vôi hóa gân chóp xoay (Calcific Tendinitis) xảy ra chủ yếu tại 'vùng tới hạn' (Critical zone) nghèo mạch máu của gân cơ trên gai (chiếm ~80%, cách điểm bám củ lớn 1 - 1.5 cm), ít gặp hơn ở gân dưới gai (~15%) và gân dưới vai (~5%). Theo Uhthoff, bệnh tiến triển qua 3 giai đoạn mô học: (1) Tiền vôi hóa chuyển sản sụn sợi, (2) Giai đoạn vôi hóa (pha hình thành cứng như phấn và pha tiêu hủy mềm dạng kem đánh răng gây tăng áp lực nội gân và viêm cấp bao hoạt dịch SASD dữ dội), và (3) Giai đoạn sau vôi hóa tái tạo sợi collagen.",
            "targetStructure": "Trung tâm ổ lắng đọng tinh thể Hydroxyapatite nằm trong bề dày gân chóp xoay (để rửa hút Barbotage) KẾT HỢP khoang bao hoạt dịch SASD ở ngay mặt nông gân (để tiêm Corticosteroid kháng viêm cuối thủ thuật).",
            "innervation": "Thần kinh trên vai (Suprascapular nerve - C5, C6) và nhánh cảm giác thần kinh nách chi phối mạng lưới thụ thể đau dày đặc tại bao hoạt dịch SASD.",
            "vascularAndDangerZones": [
                "Sợi gân chóp xoay lành xung quanh ổ vôi: Không được làm rách toác vỏ bao trên của ổ vôi quá rộng hoặc bơm steroid trực tiếp vào nhu mô gân.",
                "Bề mặt sụn khớp chỏm cánh tay nằm sâu ngay dưới mặt khớp của gân trên gai.",
                "Mạch máu tăng sinh tân mạch quanh ổ vôi trong pha tiêu hủy cấp (kiểm tra bằng Power Doppler)."
            ],
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_26_01_calcific_phases.jpg",
                    "figNumber": "26.1",
                    "title": "Chu trình sinh bệnh học 3 giai đoạn của vôi hóa gân chóp xoay theo Uhthoff (Fig. 26.1)",
                    "desc": "Ba giai đoạn tiến triển mô học của ổ vôi nội gân trên gai; giai đoạn tiêu hủy mềm dạng kem đánh răng là thời điểm vàng cho thủ thuật rửa vôi Barbotage.",
                    "springerCaption": "Fig. 26.1 The three pathophysiological phases of calcific tendinitis of the rotator cuff."
                },
                {
                    "path": "assets/images/anatomy/fig_26_03_soft_calcific_phase.jpg",
                    "figNumber": "26.3",
                    "title": "Đối chiếu hình ảnh siêu âm, X-quang và dịch vôi trắng đục pha mềm (Fig. 26.3)",
                    "desc": "Ổ vôi pha mềm tăng âm dạng vòm mờ ít bóng cản trên siêu âm, tương ứng đám mờ mây trên X-quang và dịch hút trắng sữa như kem đánh răng.",
                    "springerCaption": "Fig. 26.3 Soft resorptive calcific phase: sonographic (a), radiographic (b), and milky calcium aspirate (c)."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Bờ trước ngoài mỏm cùng vai (Anterolateral acromion).",
                "Củ lớn xương cánh tay (Greater tuberosity) – đối với vôi gân trên gai/dưới gai.",
                "Mỏm quạ và củ bé xương cánh tay – nếu ổ vôi nằm ở gân cơ dưới vai."
            ],
            "referenceLines": "Khoảng cách từ bờ ngoài mỏm cùng vai xuống củ lớn khoảng 2 cm; hầu hết ổ vôi gân trên gai bị che khuất dưới mỏm cùng vai khi để tay trung tính nên bắt buộc dùng tư thế bộc lộ bề mặt.",
            "palpationSteps": [
                "1. Xác định vị trí gân chứa vôi trên phim X-quang khớp vai tư thế thẳng (xoay trong/ngoài) trước thủ thuật.",
                "2. Đặt tay bệnh nhân ở tư thế Crass cải tiến (mu bàn tay hoặc lòng bàn tay tựa vùng mông/mào chậu cùng bên) nếu vôi ở gân trên gai; hoặc xoay ngoài cánh tay nếu vôi ở gân dưới vai.",
                "3. Sờ xác định bờ ngoài mỏm cùng vai và điểm đau chói khu trú nhất trên củ lớn để đặt tâm đầu dò."
            ],
            "probePlacement": "Quét hai mặt phẳng vuông góc (trục dọc và trục ngang gân trên gai) ngay dưới bờ ngoài mỏm cùng vai để đo kích thước 3 chiều của ổ vôi, sau đó cố định đầu dò dọc theo trục dài lớn nhất của đám vôi để đi kim In-plane từ ngoài vào trong.",
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_19_02_rotator_cuff_sasd.jpg",
                    "figNumber": "19.2",
                    "title": "Liên quan giải phẫu giữa gân trên gai, mỏm cùng vai và bao hoạt dịch SASD (Fig. 19.2)",
                    "desc": "Đưa tay về tư thế duỗi - xoay trong giúp kéo vùng tới hạn của gân trên gai thoát khỏi mái che xương mỏm cùng vai.",
                    "springerCaption": "Fig. 19.2 Anatomical relationship of supraspinatus tendon passing beneath the acromion and SASD bursa."
                }
            ]
        }
    },

    "tennis-elbow": {
        "anatomy": {
            "overview": "Gân duỗi chung (Common Extensor Tendon - CET) bám tận vào mặt trước ngoài của mỏm trên lồi cầu ngoài xương cánh tay (Lateral epicondyle), được hợp thành từ nguyên ủy của 4 cơ khu cẳng tay sau ngoài: cơ duỗi cổ tay quay ngắn (ECRB – nằm sâu và phía trước nhất, chiếm phần lớn diện bám xương và là tâm điểm thoái hóa sợi collagen trong 95% ca Tennis Elbow), cơ duỗi chung các ngón (EDC – nằm nông), cơ duỗi ngón út (EDM) và cơ duỗi cổ tay trụ (ECU). Ngay sâu dưới gân ECRB là dây chằng bên quay (RCL) và bao khớp quay – lồi cầu con.",
            "targetStructure": "Vùng bám tận xương – gân (Enthesis) của bó sâu gân cơ duỗi cổ tay quay ngắn (ECRB) tại mỏm trên lồi cầu ngoài (để châm kim tạo cửa sổ Fenestration / tiêm PRP) hoặc mặt nông cân gân chung (nếu tiêm bóc tách).",
            "innervation": "Các nhánh khớp và nhánh màng xương từ thần kinh quay (Radial nerve) và nhánh gian cốt sau (Posterior interosseous nerve - PIN).",
            "vascularAndDangerZones": [
                "Dây chằng bên ngoài / bên quay (Radial collateral ligament - RCL) và dây chằng bên trụ ngoài (LUCL) nằm ngay lớp sâu sát khe khớp dưới gân ECRB: Tuyệt đối tránh tiêm Corticosteroid hoặc châm rách hệ thống dây chằng này vì sẽ gây mất vững xoay sau ngoài khuỷu tay!",
                "Thần kinh gian cốt sau (PIN): Chạy chếch qua chỏm và cổ xương quay giữa hai bó cơ ngửa (Supinator / Arcade of Frohse) cách lồi cầu ngoài khoảng 3 - 4 cm về phía xa (tránh đi kim quá xa xuống dưới chỏm quay).",
                "Lớp mỡ dưới da mặt ngoài khuỷu rất mỏng: Tiêm trào Corticoid nông dưới da gây teo lõm mỡ và mất sắc tố trắng da (Hypopigmentation)."
            ],
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_20_01_lateral_elbow_anatomy.jpg",
                    "figNumber": "20.1",
                    "title": "Giải phẫu nhóm cơ gân duỗi chung mặt ngoài khuỷu và khung đặt đầu dò (Fig. 20.1)",
                    "desc": "Khung chữ nhật màu xanh minh họa chính xác vùng gân duỗi chung (ECRB, EDC) bám vào mỏm trên lồi cầu ngoài cần đặt đầu dò khảo sát.",
                    "springerCaption": "Fig. 20.1 Anatomy of the lateral elbow. The blue box indicates the common extensor tendon and area of interest for ultrasound scanning."
                },
                {
                    "path": "assets/images/anatomy/fig_20_02_lateral_elbow_ligaments.jpg",
                    "figNumber": "20.2",
                    "title": "Giải phẫu phức hợp dây chằng bên ngoài khuỷu nằm sâu dưới gân duỗi chung (Fig. 20.2)",
                    "desc": "Dây chằng bên quay (RCL), dây chằng vòng quay (Annular ligament) và LUCL nằm ngay mặt sâu của gân ECRB cần bảo tồn tuyệt đối.",
                    "springerCaption": "Fig. 20.2 The lateral collateral ligament complex deep to the common extensor tendon."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Mỏm trên lồi cầu ngoài xương cánh tay (Lateral epicondyle): Gồ xương nhô rõ nhất ở mặt ngoài khuỷu tay.",
                "Chỏm xương quay (Radial head): Nằm cách lồi cầu ngoài khoảng 1.5 - 2 cm về phía xa, lăn tròn dưới ngón tay khi sấp – ngửa cẳng tay.",
                "Gờ trên lồi cầu ngoài (Lateral supracondylar ridge): Nơi nguyên ủy của cơ cánh tay quay (Brachioradialis) và cơ ECRL ở phía trên."
            ],
            "referenceLines": "Đường nối từ đỉnh mỏm trên lồi cầu ngoài tới tâm chỏm xương quay (dài ~2 cm) trùng hoàn toàn với trục dọc của gân cơ ECRB và dây chằng bên quay.",
            "palpationSteps": [
                "1. Cho bệnh nhân ngồi cạnh bàn khám, khuỷu gấp 90 độ, cẳng tay sấp (lòng bàn tay úp xuống mặt bàn) để đưa lồi cầu ngoài hướng lên trên.",
                "2. Dùng ngón cái ấn xác định đỉnh mỏm trên lồi cầu ngoài và mặt dốc phía trước xa của mỏm này (điểm đau chói nhất khi duỗi cổ tay có đối kháng – Cozen test).",
                "3. Đặt ngón trỏ dịch xuống xa 2 cm đồng thời xoay sấp – ngửa nhẹ cẳng tay để cảm nhận chỏm xương quay và khe khớp quay – lồi cầu con."
            ],
            "probePlacement": "Đặt đầu dò Linear dọc theo trục dài cẳng tay (Coronal longitudinal view), đầu gần gối lên đỉnh mỏm trên lồi cầu ngoài, đầu xa bắc qua khe khớp nằm trên chỏm xương quay (đúng vị trí khung xanh Fig. 20.1).",
            "figures": [
                {
                    "path": "assets/images/ch20_elbow/p238_img1.jpeg",
                    "figNumber": "20.5",
                    "title": "Vị trí đặt đầu dò dọc trên bề mặt ngoài khuỷu và đối chiếu siêu âm (Fig. 20.5)",
                    "desc": "Đầu dò đặt dọc bắc cầu từ mỏm trên lồi cầu ngoài sang chỏm xương quay khi khuỷu gấp 90 độ.",
                    "springerCaption": "Fig. 20.5 Surface probe placement and sonoanatomy of the lateral elbow."
                }
            ]
        }
    },

    "golfers-elbow": {
        "anatomy": {
            "overview": "Gân gấp chung (Common Flexor-Pronator Tendon - CFT) bám vào mặt trước dưới của mỏm trên lồi cầu trong xương cánh tay (Medial epicondyle), tập hợp nguyên ủy của 5 cơ khu cẳng tay trước: cơ sấp tròn (Pronator teres - bờ quay nhất), cơ gấp cổ tay quay (FCR), cơ gan tay dài (Palmaris longus), cơ gấp các ngón nông (FDS) và cơ gấp cổ tay trụ (FCU - bờ trụ nhất). Tổn thương bệnh lý trong Golfer's Elbow thường tập trung ở giao diện sợi giữa cơ sấp tròn và cơ gấp cổ tay quay. Ngay mặt sâu gân CFT là bó trước dây chằng bên trụ (Anterior band of UCL), và ngay sát phía sau mỏm trên lồi cầu trong là ống khuỷu chứa dây thần kinh trụ.",
            "targetStructure": "Vùng bám tận mặt trước mỏm trên lồi cầu trong của khối gân gấp – sấp chung (CFT) hoặc lớp cân nông quanh gân (tuyệt đối đi kim từ trước ra sau / xa lên gần ở phía trước lồi cầu trong, tránh hoàn toàn phía sau).",
            "innervation": "Nhánh khớp từ thần kinh giữa (Median nerve) và thần kinh trụ (Ulnar nerve).",
            "vascularAndDangerZones": [
                "Dây thần kinh trụ (Ulnar nerve): Nằm trong rãnh ròng rọc – khuỷu (Cubital tunnel) ngay mặt sau mỏm trên lồi cầu trong; ĐẶC BIỆT có tới 16 - 20% dân số bị bán trật/trật thần kinh trụ tự nhiên trượt tràn ra mặt trước mỏm trên lồi cầu trong khi gấp khuỷu (> 90 độ)!",
                "Động mạch bên trụ trên và động mạch quặt ngược trụ chạy sát đường đi thần kinh trụ.",
                "Bó trước dây chằng bên trong (UCL): Cấu trúc giữ vững chính chống vẹo ngoài khuỷu nằm ngay mặt sâu của gân CFT."
            ],
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_20_03_medial_elbow_anatomy.jpg",
                    "figNumber": "20.3",
                    "title": "Giải phẫu nhóm cơ gân gấp - sấp chung mặt trong khuỷu và khung quét siêu âm (Fig. 20.3)",
                    "desc": "Khung màu xanh xác định vị trí gân gấp chung bám vào mỏm trên lồi cầu trong (cơ sấp tròn, FCR, gan tay dài, FCU).",
                    "springerCaption": "Fig. 20.3 Anatomy of the medial elbow showing the common flexor tendon and blue box scanning region."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Mỏm trên lồi cầu trong xương cánh tay (Medial epicondyle): Mấu xương nhô rất lớn và dễ sờ nhất ở mặt trong khuỷu.",
                "Mỏm khuỷu xương trụ (Olecranon process) ở phía sau: Tạo với mỏm trên lồi cầu trong rãnh thần kinh trụ.",
                "Củ vẹt xương trụ (Sublime tubercle of coronoid process) nằm cách đỉnh lồi cầu trong khoảng 1.5 - 2 cm về phía xa."
            ],
            "referenceLines": "Đường trục từ đỉnh mỏm trên lồi cầu trong hướng chéo nhẹ về phía xương thuyền cổ tay (theo hướng thớ cơ gấp cổ tay quay FCR); rãnh thần kinh trụ nằm hoàn toàn ở mặt sau đường nối lồi cầu trong – mỏm khuỷu khi khuỷu duỗi nhẹ.",
            "palpationSteps": [
                "1. Đặt bệnh nhân nằm ngửa hoặc ngồi, dạng nhẹ vai, xoay ngoài cánh tay và ngửa hoàn toàn cẳng tay (Supination), khuỷu chỉ hơi gấp nhẹ 20 - 30 độ (TRÁNH gấp khuỷu quá 90 độ để không làm trật thần kinh trụ ra trước!).",
                "2. Dùng ngón trỏ sờ đỉnh mỏm trên lồi cầu trong và ấn kiểm tra điểm đau chói ở bờ trước xa của mỏm xương này.",
                "3. Dùng ngón cái sờ vào rãnh sau lồi cầu trong đồng thời gấp – duỗi khuỷu thử nghiệm để chắc chắn dây thần kinh trụ không trượt qua đỉnh lồi cầu trong ra vùng chọc kim."
            ],
            "probePlacement": "Đặt đầu dò Linear dọc theo trục dài gân gấp chung (Long-axis coronal-oblique view) với đầu gần đặt trên đỉnh mặt trước mỏm trên lồi cầu trong, đầu xa hướng dọc theo cơ FCR xuống mặt trong cẳng tay; sau đó xoay ngang 90 độ quét kiểm tra vị trí dây thần kinh trụ ở rãnh sau.",
            "figures": [
                {
                    "path": "assets/images/ch20_elbow/p239_img1.jpeg",
                    "figNumber": "20.6",
                    "title": "Giải phẫu bề mặt khuỷu trong và vị trí đặt đầu dò khảo sát gân gấp chung (Fig. 20.6)",
                    "desc": "Cẳng tay ngửa, khuỷu duỗi nhẹ, đầu dò đặt dọc trên mỏm trên lồi cầu trong theo đúng trục thớ gân gấp chung.",
                    "springerCaption": "Fig. 20.6 Surface probe placement (position 1) and sonoanatomy of the medial elbow."
                }
            ]
        }
    },

    "elbow-intraarticular": {
        "anatomy": {
            "overview": "Khớp khuỷu là một phức hợp khớp bản lề – trục chung một khoang bao hoạt dịch duy nhất bao gồm 3 khớp thành phần thông nối hoàn toàn với nhau: khớp cánh tay – trụ (Humeroulnar), khớp cánh tay – quay / quay – lồi cầu con (Radiocapitellar) và khớp quay – trụ gần. Bao khớp có 3 đệm mỡ nội bao nhưng nằm ngoài màng hoạt dịch (đệm mỡ vành, đệm mỡ quay phía trước và đệm mỡ mỏm khuỷu lớn nhất nằm trong hố mỏm khuỷu phía sau). Khi tràn dịch hoặc viêm màng hoạt dịch khuỷu, ngách sau (hố mỏm khuỷu dưới gân cơ tam đầu) và khe khớp quay – lồi cầu con phía ngoài giãn phồng sớm và an toàn nhất để tiếp cận kim.",
            "targetStructure": "Ngách hoạt dịch sau tại hố mỏm khuỷu (Olecranon fossa - sâu dưới gân cơ tam đầu và đệm mỡ sau) HOẶC khe khớp quay – lồi cầu con (Radiocapitellar joint space) ở mặt sau ngoài.",
            "innervation": "Chi phối bởi cả 4 thần kinh chính chi trên: thần kinh cơ bì, thần kinh giữa (mặt trước), thần kinh quay (mặt ngoài & sau) và thần kinh trụ (mặt sau trong).",
            "vascularAndDangerZones": [
                "Dây thần kinh trụ (Ulnar nerve) chạy dọc bờ trong mỏm khuỷu trong ống khuỷu: Khi tiêm lối sau hoặc lối cạnh ngoài mỏm khuỷu, LUÔN đâm kim từ BỜ NGOÀI (Lateral side) vào hố mỏm khuỷu, tuyệt đối không chọc từ bờ trong!",
                "Động mạch cánh tay và thần kinh giữa nằm ở hố trụ phía trước (tuyệt đối tránh tiếp cận khớp khuỷu từ mặt trước).",
                "Sụn khớp chỏm con (Capitellum) và chỏm quay ở lối bên ngoài."
            ],
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_20_04_posterior_elbow_anatomy.jpg",
                    "figNumber": "20.4",
                    "title": "Giải phẫu mặt sau khớp khuỷu và 2 vị trí đặt đầu dò chuẩn (Fig. 20.4)",
                    "desc": "Khung số 1 (dọc giữa trên mỏm khuỷu qua gân cơ tam đầu) và khung số 2 (chéo ngoài mỏm khuỷu) để tiếp cận khoang khớp khuỷu an toàn, tránh thần kinh trụ phía trong.",
                    "springerCaption": "Fig. 20.4 Posterior elbow anatomy showing blue boxes 1 and 2 for ultrasound scanning and intra-articular access."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Đỉnh mỏm khuỷu xương trụ (Tip of olecranon): Mốc xương nhọn sờ rõ nhất ở mặt sau khuỷu.",
                "Mỏm trên lồi cầu ngoài và chỏm xương quay: Hai phần ba đỉnh của 'tam giác mềm sau ngoài' (Anconeus soft spot triangle).",
                "Mỏm trên lồi cầu trong: Đánh dấu ranh giới cấm ở phía trong do có dây thần kinh trụ."
            ],
            "referenceLines": "Tam giác mềm khuỷu ngoài (Lateral soft spot / Anconeus triangle): Được giới hạn bởi 3 đỉnh xương gồm Mỏm trên lồi cầu ngoài – Chỏm xương quay – Đỉnh mỏm khuỷu; mặt khác ở phía sau, hố mỏm khuỷu nằm ngay chính giữa phía trên đỉnh mỏm khuỷu 1 - 2 cm.",
            "palpationSteps": [
                "1. Bệnh nhân nằm sấp treo tay qua mép giường hoặc ngồi đặt cẳng tay trên bàn với khuỷu gấp 90 độ (giúp mở rộng hố mỏm khuỷu phía sau và đẩy đệm mỡ trồi lên nếu có tràn dịch).",
                "2. Dùng 3 ngón tay lần lượt chạm đỉnh mỏm khuỷu, lồi cầu ngoài và lồi cầu trong; đánh dấu rãnh trụ ở phía trong để tránh xa.",
                "3. Nếu tiếp cận hố mỏm khuỷu sau: sờ dọc gân cơ tam đầu ngay trên đỉnh mỏm khuỷu. Nếu tiếp cận khớp quay – lồi cầu con: sờ điểm lõm mềm ở tâm tam giác ngoài đồng thời xoay sấp – ngửa cẳng tay để nhận diện khe khớp chỏm quay."
            ],
            "probePlacement": "Vị trí 1 (Lối sau): Đặt đầu dò Linear dọc chính giữa ngay phía trên đỉnh mỏm khuỷu dọc theo gân cơ tam đầu (hoặc xoay ngang ở hố mỏm khuỷu, đi kim In-plane từ ngoài vào trong). Vị trí 2 (Lối quay – lồi cầu con): Đặt đầu dò dọc qua khe giữa lồi cầu ngoài/chỏm con và chỏm xương quay.",
            "figures": [
                {
                    "path": "assets/images/ch20_elbow/p241_img1.jpeg",
                    "figNumber": "20.8",
                    "title": "Hình ảnh siêu âm hố mỏm khuỷu tương ứng vị trí đặt đầu dò số 1 mặt sau khuỷu (Fig. 20.8)",
                    "desc": "Mặt cắt dọc sau khuỷu hiển thị hố mỏm khuỷu (OF), đệm mỡ sau và gân cơ tam đầu ở vị trí quét số 1.",
                    "springerCaption": "Fig. 20.8 Sonoanatomy of the posterior elbow at scan position 1 over the olecranon fossa."
                }
            ]
        }
    },

    "carpal-tunnel": {
        "anatomy": {
            "overview": "Ống cổ tay (Carpal Tunnel) là một đường hầm xương – xơ không giãn nở nằm ở mặt gan cổ tay. Sàn và hai thành bên tạo bởi rãnh các xương cổ tay (bờ quay: củ xương thuyền và củ xương thang; bờ trụ: xương đậu và móc xương móc), còn mái trần được căng ngang bởi mạc giữ gân gấp dày chắc (Flexor retinaculum / Transverse carpal ligament - TCL). Bên trong ống cổ tay chứa 9 gân gấp (4 gân gấp nông FDS, 4 gân gấp sâu FDP bọc trong bao hoạt dịch trụ, và 1 gân gấp ngón cái dài FPL ở phía quay) cùng dây thần kinh giữa (Median nerve) nằm nông nhất ngay dưới mạc giữ gân gấp.",
            "targetStructure": "Khoang mô liên kết dưới bao hoạt dịch (Subsynovial connective tissue plane) bao quanh chu vi dây thần kinh giữa (mặt sâu tách khỏi các gân gấp và mặt nông tách khỏi mạc giữ gân gấp TCL để bóc tách thủy dịch 360 độ).",
            "innervation": "Thần kinh giữa (C5–T1) cảm giác mặt gan 3 ngón rưỡi bên quay và vận động mô cái (qua nhánh quặt ngược mô cái). Lưu ý nhánh bì gan tay (Palmar cutaneous branch) tách ra trước ống cổ tay 5 cm đi nông TRÊN mạc giữ gân gấp.",
            "vascularAndDangerZones": [
                "Động mạch trụ và thần kinh trụ (Ulnar artery & nerve) trong kênh Guyon: Nằm ngay phía nông – bờ quay của xương đậu (Pisiform) – khi đi kim In-plane từ bờ trụ, BẮT BUỘC nhận diện động mạch trụ trên siêu âm và đi kim nông hoặc sâu tránh đâm xuyên động mạch trụ!",
                "Nhánh bì gan tay của thần kinh giữa (Palmar cutaneous branch): Đi nông ở phía bờ quay gân cơ gấp cổ tay quay / gan tay dài.",
                "Nhánh vận động quặt ngược mô cái (Recurrent motor branch) tách ở đầu xa ống cổ tay và biến thể thần kinh giữa chẻ đôi (Bifid median nerve) kèm động mạch giữa tồn lưu (Persistent median artery - gặp ở ~5-10% dân số, cần bật Doppler màu kiểm tra giữa 2 bó thần kinh!)."
            ],
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_21_01_carpal_tunnel_surface.jpg",
                    "figNumber": "21.1",
                    "title": "Giải phẫu bề mặt ống cổ tay, nhánh bì gan tay và nhánh quặt ngược mô cái (Fig. 21.1)",
                    "desc": "Đường đi thần kinh giữa chui dưới mạc giữ gân gấp, lưu ý nhánh bì gan tay tách sớm ở cổ tay và nhánh vận động quặt ngược ra ô mô cái.",
                    "springerCaption": "Fig. 21.1 Carpal tunnel surface projection showing the median nerve, flexor retinaculum, recurrent motor branch, and palmar cutaneous branch."
                },
                {
                    "path": "assets/images/anatomy/fig_21_02_carpal_tunnel_cross_section.jpg",
                    "figNumber": "21.2",
                    "title": "Thiết đồ cắt ngang giải phẫu ống cổ tay và liên quan bó mạch trụ ở bờ trụ (Fig. 21.2)",
                    "desc": "Thần kinh giữa nằm ngay dưới mạc giữ gân gấp phía trên các gân FDS/FDP; bó mạch thần kinh trụ nằm ở phía trụ sát xương đậu.",
                    "springerCaption": "Fig. 21.2 Cross-sectional anatomy of the wrist at the carpal tunnel level."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Xương đậu (Pisiform bone): Mốc xương tròn nổi gồ rất rõ ở bờ trụ nếp gấp cổ tay xa (ngay điểm bám gân gấp cổ tay trụ FCU).",
                "Củ xương thuyền (Tubercle of scaphoid): Mốc xương cứng sờ thấy ở bờ quay nếp gấp cổ tay xa (ngay đầu xa gân gấp cổ tay quay FCR).",
                "Móc xương móc (Hook of hamate): Nằm cách xương đậu khoảng 1 cm xuống dưới và 1 cm nghiêng về phía bờ quay (hướng về ngón nhẫn)."
            ],
            "referenceLines": "Nếp gấp cổ tay xa (Distal wrist crease): Đánh dấu cửa vào đầu gần của ống cổ tay (Proximal carpal tunnel inlet) nối ngang từ củ xương thuyền ở bờ quay sang xương đậu ở bờ trụ.",
            "palpationSteps": [
                "1. Bệnh nhân ngồi đối diện, đặt ngửa hoàn toàn bàn tay trên mặt bàn, kê một cuộn khăn nhỏ dưới mặt lưng cổ tay để cổ tay hơi duỗi nhẹ 15 - 20 độ.",
                "2. Cho bệnh nhân chụm ngón cái và ngón út đồng thời hơi gấp cổ tay nhẹ để làm nổi gân cơ gan tay dài (Palmaris longus - ở chính giữa) và gân gấp cổ tay quay (FCR - ở phía quay); thần kinh giữa nằm ngay khe giữa hai gân này tại nếp cổ tay.",
                "3. Sờ xác định rõ xương đậu ở bờ trụ nếp cổ tay xa (làm mốc tựa đầu trong đầu dò và định vị động mạch trụ nằm ngay sát bờ ngoài xương đậu)."
            ],
            "probePlacement": "Đặt đầu dò Linear tần số cao cắt ngang (Short-axis transverse view) trùng ngay trên nếp gấp cổ tay xa, nối từ củ xương thuyền (bờ quay) tới xương đậu (bờ trụ) để bộc lộ cửa vào ống cổ tay.",
            "figures": [
                {
                    "path": "assets/images/ch21_wrist_hand/p250_img1.jpeg",
                    "figNumber": "21.3",
                    "title": "Mốc đặt đầu dò ngang nếp gấp cổ tay xa và hình ảnh siêu âm ống cổ tay (Fig. 21.3)",
                    "desc": "Đặt đầu dò ngang qua nếp gấp cổ tay xa nối củ xương thuyền và xương đậu để nhận diện thần kinh giữa hình tổ ong nằm dưới mạc giữ gân gấp.",
                    "springerCaption": "Fig. 21.3 Transverse transducer placement over the distal wrist crease and corresponding carpal tunnel sonogram."
                }
            ]
        }
    },

    "de-quervain": {
        "anatomy": {
            "overview": "Ngăn gân duỗi số 1 của cổ tay (First Dorsal Extensor Compartment) là một đường hầm xương – sợi dài khoảng 2 cm chạy trên mặt ngoài mỏm trâm quay (Radial styloid), sàn là rãnh xương đầu dưới xương quay và mái là mạc giữ gân duỗi dày lên (Extensor retinaculum). Bên trong ngăn số 1 chứa hai gân duỗi – dạng ngón cái đi sát nhau: gân cơ dạng ngón cái dài (Abductor Pollicis Longus - APL, nằm phía gan tay hơn, thường có nhiều dải gân phụ) và gân cơ duỗi ngón cái ngắn (Extensor Pollicis Brevis - EPB, nằm phía mu tay hơn). Khoảng 30 - 40% bệnh nhân có một vách xơ phụ (Subcompartmental septum) chia ngăn số 1 thành hai buồng riêng biệt bọc riêng EPB – nguyên nhân hàng đầu gây thất bại nếu chỉ tiêm một ngăn!",
            "targetStructure": "Khoang bao hoạt dịch chung ngăn duỗi số 1 (dưới mạc giữ gân duỗi, bao quanh cả APL và EPB; nếu có vách ngăn phụ tăng âm giữa 2 gân thì bắt buộc tiêm vào cả 2 tiểu ngăn đặc biệt là ngăn của EPB).",
            "innervation": "Nhánh nông thần kinh quay (Superficial radial nerve - SRN) chạy ngay trong lớp mỡ dưới da vắt chéo qua mặt nông của ngăn duỗi số 1.",
            "vascularAndDangerZones": [
                "Nhánh nông thần kinh quay (Superficial branch of radial nerve - SRN) và tĩnh mạch đầu (Cephalic vein): Nằm ngay trong mô dưới da phía trên mạc giữ gân duỗi – đâm xuyên gây đau rát bỏng thần kinh kéo dài (Cheiralgia paresthetica).",
                "Động mạch quay (Radial artery): Nằm về phía gan tay rồi lách qua đáy hố lào giải phẫu ở ngay phía xa mỏm trâm quay – bật Doppler màu kiểm tra trước khi đi kim!",
                "Lớp mỡ dưới da mỏm trâm quay cực mỏng: Tuyệt đối tránh để dịch steroid trào ra mô dưới da gây mảng bạch biến mất sắc tố và teo da rõ rệt."
            ],
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_21_06_anatomical_snuffbox.jpg",
                    "figNumber": "21.6",
                    "title": "Giải phẫu hố lào và các gân ngăn duỗi số 1 (APL, EPB) trên mỏm trâm quay (Fig. 21.6)",
                    "desc": "Gân cơ dạng ngón cái dài (APL) và duỗi ngón cái ngắn (EPB) tạo nên bờ trước (bờ quay) của hố lào giải phẫu, trong khi gân EPL (ngăn số 3) tạo bờ sau.",
                    "springerCaption": "Fig. 21.6 Anatomical snuffbox bounded anteriorly by APL and EPB tendons of the first dorsal compartment."
                },
                {
                    "path": "assets/images/ch21_wrist_hand/p254_img1.jpeg",
                    "figNumber": "21.7",
                    "title": "Thiết đồ cắt ngang 6 ngăn gân duỗi mặt mu cổ tay và mốc củ Lister (Fig. 21.7)",
                    "desc": "Vị trí ngăn duỗi số 1 (EPB, APL) ở bờ ngoài mỏm trâm quay so với ngăn 2 (ECRL, ECRB) và ngăn 3 (EPL bờ trụ củ Lister).",
                    "springerCaption": "Fig. 21.7 Six compartments of the extensor tendons in the wrist."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Mỏm trâm quay (Radial styloid process): Gồ xương nhọn ở bờ ngoài (bờ quay) đầu xa xương quay.",
                "Hố lào giải phẫu (Anatomical snuffbox): Hõm tam giác nổi rõ ngay phía xa mỏm trâm quay khi dạng và duỗi tối đa ngón cái.",
                "Củ Lister (Lister's tubercle): Mấu xương nhô ở mặt mu đầu dưới xương quay (làm mốc đối chiếu giữa ngăn 2 và ngăn 3)."
            ],
            "referenceLines": "Bờ trước (bờ gan tay) của hố lào giải phẫu chạy ngược lên trên mỏm trâm quay chính là đường đi bề mặt của bộ đôi gân APL và EPB trong ngăn số 1.",
            "palpationSteps": [
                "1. Đặt bàn tay bệnh nhân ở tư thế trung tính cạnh bàn (bờ trụ tựa mặt bàn, ngón cái hướng thẳng lên trần nhà – Radial side up), kê khăn cuộn nhỏ dưới bờ trụ cổ tay để nghiêng trụ nhẹ.",
                "2. Yêu cầu bệnh nhân dạng và duỗi ngón cái ('giơ ngón cái hướng lên') để làm nổi rõ hai bờ gân hố lào; sờ bờ gân phía trước trồi lên ngay trên mỏm trâm quay.",
                "3. Ấn nhẹ lên mỏm trâm quay cách đỉnh mỏm trâm 1 cm về phía gần và kiểm tra dấu hiệu Finkelstein (nắm ngón cái trong lòng bàn tay rồi nghiêng trụ cổ tay gây đau chói dọc ngăn số 1)."
            ],
            "probePlacement": "Đặt đầu dò Linear (hoặc Hockey-stick) cắt ngang (Short-axis transverse view) vuông góc trực tiếp lên mặt ngoài mỏm trâm quay (cách đỉnh mỏm trâm ~1 cm về phía gần) để nhận diện 2 gân APL – EPB và tìm vách ngăn phụ trước khi đâm kim.",
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_21_08_finkelstein_maneuver.jpg",
                    "figNumber": "21.8",
                    "title": "Nghiệm pháp Finkelstein định vị lâm sàng bao gân De Quervain trên mỏm trâm quay (Fig. 21.8)",
                    "desc": "Gấp ngón cái vào lòng bàn tay và nghiêng trụ cổ tay làm căng tối đa gân APL và EPB qua mỏm trâm quay.",
                    "springerCaption": "Fig. 21.8 Finkelstein maneuver stretching the first dorsal compartment tendons over the radial styloid."
                }
            ]
        }
    },

    "trigger-finger": {
        "anatomy": {
            "overview": "Tại mỗi ngón tay dài (ngón II–V), gân gấp nông (FDS - tách đôi thành chiasma Camper bám đốt giữa) và gân gấp sâu (FDP - bám đốt xa) trượt trong một ống bao hoạt dịch xơ được giữ sát vào mặt gan xương đốt ngón tay bởi hệ thống 5 ròng rọc vòng (Annular pulleys A1–A5) và 3 ròng rọc chéo (Cruciform pulleys C1–C3); riêng ngón cái có gân FPL đi qua ròng rọc A1, ròng rọc chéo và A2. Ròng rọc A1 (dài ~8 - 10 mm, dày bình thường < 0.6 mm) bám vào sụn gan tay (Volar plate) ngay mức chỏm xương bàn tay – khớp bàn ngón (MCP). Trong ngón tay lò xo, sự phì đại xơ hóa ròng rọc A1 kết hợp nốt phồng gân gấp gây kẹt cơ học khi gấp – duỗi.",
            "targetStructure": "Khoang bao hoạt dịch gân gấp (Flexor tendon sheath) ngay mặt sâu của ròng rọc A1 (hoặc sát rìa nông/sâu ròng rọc A1 mà tuyệt đối không đâm vào lõi sợi gân FDS/FDP).",
            "innervation": "Các dây thần kinh gan ngón tay riêng (Proper palmar digital nerves - tách từ thần kinh giữa cho ngón I, II, III, nửa ngón IV và từ thần kinh trụ cho nửa ngón IV, ngón V).",
            "vascularAndDangerZones": [
                "Bó mạch – thần kinh gan ngón tay riêng hai bên (Radial & Ulnar proper digital arteries and nerves): Chạy dọc sát hai bên bờ quay và bờ trụ của bao gân gấp; ĐẶC BIỆT ở ngón cái, nhánh thần kinh gan ngón cái bờ quay vắt chéo rất nông ngay trước ròng rọc A1!",
                "Sợi gân gấp FDS/FDP (hoặc FPL): Tiêm steroid nội gân với lực bơm căng có nguy cơ gây đứt gân gấp ngón tay.",
                "Sụn gan tay (Volar plate) và khoang khớp bàn – ngón (MCP joint) nằm ngay mặt sâu của gân gấp."
            ],
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_21_13_finger_pulley_anatomy.jpg",
                    "figNumber": "21.13",
                    "title": "Giải phẫu hệ thống ròng rọc vòng (A1–A5) và ròng rọc chéo (C1–C3) ngón tay (Fig. 21.13)",
                    "desc": "Ròng rọc A1 nằm ngay mức chỏm xương bàn tay - khớp bàn ngón (MCP), là vị trí kẹt cơ học điển hình của ngón tay lò xo.",
                    "springerCaption": "Fig. 21.13 Annular (A1–A5) and cruciform (C1–C3) pulleys over the volar aspect of the finger; A1 pulley overlies the MCP joint."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Chỏm xương bàn tay (Metacarpal head): Khối xương tròn sờ thấy rõ trong lòng bàn tay ngay gốc ngón tay.",
                "Nếp gấp gan bàn tay xa (Distal palmar crease) đối với ngón III, IV, V; nếp gấp ngang gan bàn tay gần đối với ngón trỏ (II); và nếp gấp bàn – ngón cái (Thumb MCP crease) đối với ngón cái (I).",
                "Nếp gấp gốc ngón tay (Proximal digital crease)."
            ],
            "referenceLines": "Quy tắc định vị bề mặt ròng rọc A1: Bờ gần của ròng rọc A1 nằm ngay mức nếp gấp gan tay xa (ngón III–V), kéo dài khoảng 1 cm về phía gốc ngón tay (tức nằm đúng khoảng giữa nếp gấp gan tay xa và nếp gấp gốc ngón tay); riêng ở ngón cái, A1 nằm ngay chính dưới nếp gấp khớp MCP ngón cái.",
            "palpationSteps": [
                "1. Đặt bàn tay bệnh nhân ngửa hoàn toàn trên bàn phẳng, các ngón tay duỗi thoải mái.",
                "2. Đặt đầu ngón trỏ bác sĩ ấn nhẹ ngay trên chỏm xương bàn tay (giữa nếp gấp gan tay xa và nếp gốc ngón tay).",
                "3. Yêu cầu bệnh nhân chủ động gấp – duỗi ngón tay đau: cảm nhận rõ hạt gân (Notta's nodule) bật khục qua bờ gần ròng rọc A1 dày cứng ngay dưới đầu ngón tay khám."
            ],
            "probePlacement": "Đặt đầu dò Linear tần số cao (12 - 18 MHz hoặc Hockey-stick, bôi lớp gel dày tạo đệm âm) dọc theo trục chính giữa mặt gan khớp MCP (Long-axis view) rồi xoay 90 độ cắt ngang (Short-axis view) để đo độ dày ròng rọc A1 và bật Doppler định vị hai động mạch ngón tay hai bên.",
            "figures": [
                {
                    "path": "assets/images/ch21_wrist_hand/p260_img1.jpeg",
                    "figNumber": "21.14",
                    "title": "Đặt đầu dò mặt cắt dọc trên nếp gấp bàn - ngón bộc lộ ròng rọc A1 và gân gấp (Fig. 21.14)",
                    "desc": "Đầu dò đặt dọc chính giữa mặt gan khớp bàn - ngón (MCP) hiển thị chỏm xương bàn, đốt gần, gân FDS/FDP và ròng rọc A1 phía nông.",
                    "springerCaption": "Fig. 21.14 Surface probe placement and long-axis scan of the digit over the MCP joint and A1 pulley."
                }
            ]
        }
    },

    "cmc1-joint": {
        "anatomy": {
            "overview": "Khớp thang – bàn ngón cái (First Carpometacarpal Joint - CMC-1 / Trapeziometacarpal joint) là khớp hình yên ngựa hai trục (Biconcave-convex saddle synovial joint) giữa diện khớp xa xương thang (Trapezium) và nền xương bàn tay số 1 (First metacarpal base), cho phép thực hiện các động tác phức hợp đặc trưng của bàn tay người (gấp – duỗi, dạng – khép và đối chiếu ngón cái). Do biên độ vận động lớn và chịu lực kẹp nhón gấp 10 - 12 lần lực đầu ngón cái, bao khớp và hệ thống dây chằng (đặc biệt dây chằng mỏ gan trước – Anterior oblique 'beak' ligament) rất dễ lỏng lẻo, dẫn đến bán trật nền xương bàn 1 ra ngoài và thoái hóa khớp gốc ngón cái (Rhizarthrosis).",
            "targetStructure": "Khe khớp hoạt dịch thang – bàn ngón 1 ở mặt mu – quay (Dorsoradial joint recess), nằm giữa gờ xương thang ở phía gần và nền xương bàn 1 ở phía xa, sâu dưới các gân APL/EPB.",
            "innervation": "Nhánh khớp từ nhánh nông thần kinh quay (Superficial radial nerve), nhánh bì ngoài cẳng tay (Lateral antebrachial cutaneous nerve) và các sợi nhỏ từ nhánh gan tay thần kinh giữa.",
            "vascularAndDangerZones": [
                "Động mạch quay (Radial artery): Đi chéo qua sàn hố lào giải phẫu ở mức khớp thuyền – thang (Scaphotrapezial joint - ngay phía gần hơn so với khớp CMC-1 khoảng 1 cm) rồi lách vào khoang gian cốt bàn tay 1 ở phía mu – BẮT BUỘC bật Doppler màu để phân biệt khớp thuyền – thang (có động mạch quay nằm trên) với khớp CMC-1!",
                "Các nhánh cảm giác của thần kinh quay nông chạy trong lớp dưới da vùng mu – quay gốc ngón cái.",
                "Gân cơ dạng ngón cái dài (APL) bám tận ngay vào bờ ngoài nền xương bàn 1 (cần tránh tiêm steroid vào điểm bám gân)."
            ],
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_21_17_cmc1_joint_anatomy.jpg",
                    "figNumber": "21.17",
                    "title": "Giải phẫu xương khớp thang - bàn ngón cái (CMC-1) bình thường và khi thoái hóa (Fig. 21.17)",
                    "desc": "Khớp hình yên ngựa tạo bởi xương thang (Trapezium) và nền xương bàn 1 (a), kèm hình ảnh hẹp khe khớp, gai xương và bán trật gốc ngón cái khi thoái hóa (b).",
                    "springerCaption": "Fig. 21.17 (a) First carpometacarpal joint formed between first metacarpal and trapezium. (b) Osteoarthritis of first CMC joint."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Nền xương bàn tay số 1 (Base of first metacarpal): Thường gồ nhẹ ra ngoài (dấu hiệu 'vai vuông' - Shoulder sign trong thoái hóa CMC-1).",
                "Xương thang (Trapezium): Nằm ở sàn phần xa của hố lào giải phẫu, ngay phía gần nền xương bàn 1.",
                "Đỉnh mỏm trâm quay (Radial styloid) ở phía gần hố lào."
            ],
            "referenceLines": "Trục dọc bờ mu – quay xương bàn tay 1 vuốt ngược về phía cổ tay: bậc hõm đầu tiên chạm phải ngay dưới nền xương bàn 1 là khe khớp CMC-1; đi tiếp lên phía gần 1 cm nữa là khe khớp thuyền – thang (nơi có mạch đập động mạch quay).",
            "palpationSteps": [
                "1. Đặt bàn tay bệnh nhân ở tư thế nửa sấp trung tính (Thumb-up / bờ trụ tựa bàn, ngón cái hướng lên trên).",
                "2. Dùng ngón trỏ miết dọc thân xương bàn 1 từ xa về gần cho tới khi qua gờ nhô nền xương bàn 1 rơi xuống khe khớp nhỏ.",
                "3. Tay kia nắm thân xương bàn 1 thực hiện nghiệm pháp nghiền trục – bẩy (Grind & Lever test: ép dọc trục và xoay nhẹ hoặc lắc ngang gốc ngón cái) để cảm nhận khe khớp mở – đóng và tiếng lạo xạo đặc trưng; đồng thời bắt mạch động mạch quay ở hố lào phía gần để đánh dấu vùng tránh."
            ],
            "probePlacement": "Đặt đầu dò Linear (ưu tiên Hockey-stick) dọc theo trục xương bàn 1 tại bờ mu – quay gốc ngón cái (Longitudinal view along first metacarpal-trapezium axis), căn khe khớp hình chữ V nằm chính giữa màn hình.",
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_21_18_cmc1_grind_test.jpg",
                    "figNumber": "21.18",
                    "title": "Nghiệm pháp Grind & Lever định vị bề mặt khe khớp thang - bàn ngón cái (Fig. 21.18)",
                    "desc": "Thao tác ép xoay trục (Grind test) và lắc bẩy nền xương bàn 1 (Lever test) giúp sờ chính xác khe khớp CMC-1 trước khi đặt đầu dò.",
                    "springerCaption": "Fig. 21.18 Grind and lever test for clinical localization of the first carpometacarpal joint."
                }
            ]
        }
    }
}
