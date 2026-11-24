# -*- coding: utf-8 -*-
# Part 2: Lower Limb & Deep Pelvic Muscle Procedures (19 procedures)
# Based on Philip Peng et al. - Ultrasound for Interventional Pain Management (Springer, 2020)

LOWER_ANATOMY_DATA = {
    "knee-suprapatellar": {
        "anatomy": {
            "overview": "Ngách trên bánh chè (Suprapatellar Recess / Bursa - SPR) là phần mở rộng lớn nhất lên phía trên của khoang hoạt dịch khớp gối, thông nối hoàn toàn với ổ khớp gối chính ở > 85–90% người trưởng thành. Về mặt giải phẫu phân tầng từ nông vào sâu ngay phía trên cực trên xương bánh chè: dưới da và mô dưới da là gân cơ tứ đầu đùi (Quadriceps tendon), tiếp đến là đệm mỡ trên bánh chè (Suprapatellar fat pad - bám ngay mặt trên nền xương bánh chè), khoang hoạt dịch ngách trên bánh chè (SPR), đệm mỡ trước đùi (Prefemoral fat pad - phủ mặt trước đầu dưới xương đùi) và cuối cùng là vỏ xương đùi.",
            "targetStructure": "Khoang hoạt dịch ngách trên bánh chè (Suprapatellar recess) nằm kẹp giữa đệm mỡ trên bánh chè (hoặc mặt sâu gân tứ đầu) ở phía nông và đệm mỡ trước đùi ở phía sâu.",
            "innervation": "Các nhánh khớp trên trong và trên ngoài (Superior medial & superior lateral genicular nerves) cùng nhánh thần kinh cơ rộng trong, rộng ngoài và rộng giữa (từ thần kinh đùi).",
            "vascularAndDangerZones": [
                "Động mạch gối trên ngoài (Superior lateral genicular artery) và động mạch gối xuống: Đi sát bờ trên lồi cầu đùi – cần bật Doppler màu kiểm tra đường đi kim ở ngách ngoài.",
                "Gân cơ tứ đầu đùi (Quadriceps tendon): Cần xoay hoặc đặt đầu dò ngang trên bánh chè để đi kim từ bờ ngoài qua dưới cơ rộng ngoài thẳng vào ngách hoạt dịch, tránh đâm xuyên qua lõi gân tứ đầu đùi.",
                "Sụn khớp bánh chè – đùi (Trochlear cartilage): Tránh đi kim quá thấp sát khe bánh chè gây xước sụn khớp."
            ],
            "figures": [
                {
                    "path": "assets/images/ch23_knee/p284_img1.jpeg",
                    "figNumber": "23.1",
                    "title": "Giải phẫu thiết đồ dọc ngách hoạt dịch trên bánh chè và các đệm mỡ khớp gối (Fig. 23.1)",
                    "desc": "Ngách trên bánh chè (SPR) nằm kẹp giữa gân cơ tứ đầu đùi / đệm mỡ trên bánh chè ở phía trước và đệm mỡ trước đùi sát xương đùi ở phía sau.",
                    "springerCaption": "Fig. 23.1 Sagittal anatomy of the suprapatellar recess (SPR), suprapatellar fat pad, and prefemoral fat pad."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Cực trên (nền) xương bánh chè (Superior pole / Base of patella): Gờ xương ngang sờ rất rõ ở mặt trước gối.",
                "Bờ ngoài xương bánh chè và gân cơ tứ đầu đùi (Quadriceps tendon).",
                "Mỏm trên lồi cầu ngoài xương đùi (Lateral femoral epicondyle) ở phía sau ngoài."
            ],
            "referenceLines": "Vùng lõm trên ngoài bánh chè (Superolateral parapatellar fossa): Nằm cao hơn cực trên xương bánh chè khoảng 1 - 2 cm (1 khoát ngón tay cái) và lệch ra bờ ngoài gân cơ tứ đầu đùi.",
            "palpationSteps": [
                "1. Đặt bệnh nhân nằm ngửa thoải mái, kê một cuộn gối tròn nhỏ dưới khoeo chân để khớp gối gấp nhẹ 20 - 30 độ (làm căng vừa phải gân tứ đầu và dồn dịch khớp tập trung lên ngách trên bánh chè).",
                "2. Dùng hai ngón cái và ngón trỏ bóp nhẹ hai bên ngách dưới bánh chè / khe khớp (nghiệm pháp vắt sữa – Milking maneuver) đẩy dịch dồn lên túi cùng trên bánh chè nếu lượng dịch ít.",
                "3. Sờ xác định chính xác cực trên xương bánh chè và bờ ngoài gân cơ tứ đầu đùi."
            ],
            "probePlacement": "Bước 1: Đặt đầu dò Linear dọc chính giữa ngay trên cực trên xương bánh chè (Suprapatellar longitudinal scan) để nhận diện dịch ngách SPR giữa hai đệm mỡ. Bước 2: Xoay đầu dò 90 độ sang mặt cắt ngang (Transverse view) ngay trên nền bánh chè 1 - 2 cm (hoặc chếch trên ngoài 45 độ) để đi kim In-plane từ ngoài vào trong mà không xuyên gân tứ đầu.",
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_23_02_suprapatellar_probe_scan1.jpg",
                    "figNumber": "23.2",
                    "title": "Đặt đầu dò mặt cắt dọc trên cực trên xương bánh chè (Scan 1 - Fig. 23.2)",
                    "desc": "Đầu dò đặt dọc từ nền xương bánh chè lên gân cơ tứ đầu đùi để xác định ngách hoạt dịch trên bánh chè (SPR).",
                    "springerCaption": "Fig. 23.2 Suprapatellar longitudinal probe placement (inset) and corresponding sonogram."
                },
                {
                    "path": "assets/images/anatomy/fig_23_03_suprapatellar_probe_scan2.jpg",
                    "figNumber": "23.3",
                    "title": "Xoay ngang đầu dò ngay trên xương bánh chè sẵn sàng đi kim In-plane từ ngoài vào trong (Scan 2 - Fig. 23.3)",
                    "desc": "Xoay đầu dò 90 độ sang mặt phẳng ngang giúp đường kim đi từ ngoài vào trong tránh hoàn toàn tổn thương gân cơ tứ đầu.",
                    "springerCaption": "Fig. 23.3 Transverse probe position just superior to the patella ready for lateral-to-medial in-plane injection."
                }
            ]
        }
    },

    "bakers-cyst": {
        "anatomy": {
            "overview": "Nang Baker (Popliteal / Baker's Cyst) thực chất là sự căng giãn của bao hoạt dịch cơ bán màng – cơ bụng chân trong (Semimembranosus-Medial Gastrocnemius Bursa) nằm ở góc phần tư sau trong của hố khoeo. Điểm mấu chốt giải phẫu bắt buộc phải tìm trên siêu âm là 'cuống nang' (Cyst neck / Pedicle) hình khe hẹp giống cổ chai hoặc dấu phẩy lách qua khe giữa gân cơ bán màng (ở phía trong/trước) và đầu trong cơ bụng chân (ở phía ngoài/sau) để thông nối với bao khớp gối sau qua cơ chế van một chiều.",
            "targetStructure": "Thân túi nang hoạt dịch Baker (để chọc hút hết dịch nhầy/mảnh vụn fibrin bằng kim lớn) VÀ thành vách/cuống nang nằm giữa gân bán màng và đầu trong cơ bụng chân (để châm phá vách Fenestration & tiêm steroid chống tái phát).",
            "innervation": "Nhánh khớp sau của thần kinh chày (Posterior articular branch of tibial nerve / Posterior genicular plexus) và nhánh thần kinh bịt.",
            "vascularAndDangerZones": [
                "Bó mạch thần kinh khoeo (Popliteal artery, Popliteal vein & Tibial nerve): Nằm ở trung tâm hố khoeo ngay phía NGOÀI (lateral) so với đầu trong cơ bụng chân – BẮT BUỘC bật Color Doppler để loại trừ giả phình động mạch khoeo (Popliteal aneurysm) hoặc huyết khối tĩnh mạch khoeo trước khi chọc kim!",
                "Tĩnh mạch hiển bé (Small saphenous vein) và thần kinh bì bắp chân trong chạy nông dưới mạc khoeo."
            ],
            "figures": [
                {
                    "path": "assets/images/ch23_knee/p288_img1.jpeg",
                    "figNumber": "23.6",
                    "title": "Giải phẫu thiết đồ ngang hố khoeo và cổ nang hoạt dịch Baker (Fig. 23.6)",
                    "desc": "Nang Baker phát triển từ bao hoạt dịch thông qua khe hẹp giữa gân cơ bán màng (Semimembranosus) và đầu trong cơ bụng chân (Medial gastrocnemius), nằm phía trong bó mạch khoeo.",
                    "springerCaption": "Fig. 23.6 Cross-sectional anatomy of Baker's cyst (semimembranosus-gastrocnemius bursa) and adjacent popliteal neurovascular bundle."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Nếp lằn khoeo ngang (Popliteal skin crease): Nếp gấp da ngang mặt sau khớp gối.",
                "Gân cơ bán màng và gân cơ bán gân (Semimembranosus & Semitendinosus tendons): Tạo thành bờ trên trong rõ nét của trám khoeo.",
                "Đầu trong cơ bụng chân (Medial head of gastrocnemius): Khối cơ căng tròn tạo bờ dưới trong của trám khoeo."
            ],
            "referenceLines": "Trám khoeo góc trong (Posteromedial popliteal corner): Giao điểm giữa gờ gân bán màng – bán gân từ trên đi xuống và đầu trong cơ bụng chân ngay tại hoặc dưới nếp lằn khoeo 1 - 3 cm chính là vị trí xuất chiếu bề mặt của cổ nang Baker.",
            "palpationSteps": [
                "1. Đặt bệnh nhân nằm sấp hoàn toàn trên giường, kê gối mềm dưới cổ chân để cẳng chân thư giãn nhẹ; trước đó có thể khám lúc bệnh nhân đứng thẳng duỗi gối (dấu hiệu Foucher: khối nang khoeo căng cứng khi duỗi gối và mềm nhỏ lại khi gấp gối 45 độ).",
                "2. Sờ xác định mạch đập động mạch khoeo ở sâu chính giữa hố khoeo để xác lập ranh giới an toàn phía ngoài.",
                "3. Sờ nắn vùng góc sau trong hố khoeo (giữa gân bán màng và bụng chân trong) để đánh giá ranh giới trên – dưới của khối nang."
            ],
            "probePlacement": "Đặt đầu dò Linear cắt ngang (Short-axis transverse view) tại góc sau trong hố khoeo ngang mức nếp lằn khoeo để tìm hình ảnh 'chữ C / sừng trăng' của nang ôm lấy đầu trong cơ bụng chân và xác định khe cuống nang cạnh gân bán màng.",
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_23_07_bakers_cyst_probe.jpg",
                    "figNumber": "23.7",
                    "title": "Vị trí đặt đầu dò ngang góc sau trong khoeo chân định vị cuống nang Baker (Fig. 23.7)",
                    "desc": "Đặt đầu dò cắt ngang góc sau trong hố khoeo để thấy đồng thời lồi cầu đùi trong, gân bán màng (SM) và đầu trong cơ bụng chân (MG).",
                    "springerCaption": "Fig. 23.7 Transverse probe placement over the posteromedial popliteal fossa and corresponding sonogram."
                }
            ]
        }
    },

    "pes-anserinus": {
        "anatomy": {
            "overview": "Phức hợp gân chân ngỗng (Pes Anserinus – 'chân ngỗng') là cấu trúc cân – gân hợp lưu hình nan quạt bám tận vào mặt trước trong đầu trên xương chày, được tạo thành bởi 3 gân xuất phát từ 3 khu đùi khác nhau (nhớ theo câu kinh điển 'Say Grace Before Tea'): cơ May (Sartorius – khu trước, thần kinh đùi), cơ Thon (Gracilis – khu trong, thần kinh bịt) và cơ Bán gân (Semitendinosus – khu sau, thần kinh tọa). Bao hoạt dịch chân ngỗng (Anserine bursa) nằm đệm ngay giữa mặt sâu của 3 dải gân chân ngỗng này và mặt nông của bản xa dây chằng bên chày (Medial Collateral Ligament - MCL) cùng vỏ xương chày.",
            "targetStructure": "Khoang bao hoạt dịch chân ngỗng (Pes anserinus bursa) nằm kẹp giữa mặt sâu khối gân chân ngỗng và mặt nông dây chằng bên trong (MCL) / màng xương mặt trong đầu trên xương chày.",
            "innervation": "Nhánh dưới bánh chè và các nhánh bì cẳng chân trong của thần kinh hiển (Saphenous nerve - L3, L4), cùng nhánh khớp gối dưới trong (IMGN).",
            "vascularAndDangerZones": [
                "Thần kinh hiển (Saphenous nerve) và tĩnh mạch hiển lớn (Great saphenous vein): Đi dọc bờ sau trong lồi cầu đùi – chày rất gần vùng gân chân ngỗng.",
                "Động mạch và thần kinh gối dưới trong (Inferior medial genicular artery & nerve): Chạy ngang sát vỏ xương chày ngay mặt sâu dây chằng MCL – cần bật Doppler màu trước khi chọc kim.",
                "Không đâm xuyên mũi kim vào chất gân chân ngỗng hoặc dây chằng bên chày (MCL)."
            ],
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_23_13_pes_anserinus_anatomy.jpg",
                    "figNumber": "23.13",
                    "title": "Giải phẫu 3 gân chân ngỗng (May - Thon - Bán gân) và bao hoạt dịch chân ngỗng (Fig. 23.13)",
                    "desc": "Ba gân cơ May (Sartorius), Thon (Gracilis) và Bán gân (Semitendinosus) hội tụ bám mặt trước trong xương chày che phủ lên bao hoạt dịch chân ngỗng và dây chằng MCL.",
                    "springerCaption": "Fig. 23.13 Anatomy of the pes anserinus tendons and underlying anserine bursa over the anteromedial proximal tibia."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Khe khớp gối trong (Medial tibiofemoral joint line): Rãnh ngang giữa lồi cầu trong xương đùi và mâm chày trong.",
                "Lồi củ chày (Tibial tuberosity): Gồ xương lớn phía trước nơi bám tận của gân bánh chè.",
                "Mặt phẳng xương chày trước trong (Anteromedial flare of proximal tibia)."
            ],
            "referenceLines": "Điểm chân ngỗng kinh điển: Nằm thấp hơn khe khớp gối trong khoảng 4 - 5 cm (2 - 3 khoát ngón tay) VÀ nằm phía trong – sau so với lồi củ xương chày khoảng 2 - 3 cm.",
            "palpationSteps": [
                "1. Bệnh nhân nằm ngửa, khớp gối hơi gấp nhẹ 20 - 30 độ và đùi xoay ngoài nhẹ để bộc lộ toàn bộ mặt trước trong đầu trên xương chày.",
                "2. Sờ xác định khe khớp gối trong (khi gấp – duỗi nhẹ cẳng chân) và lồi củ xương chày ở phía trước.",
                "3. Từ lồi củ xương chày trượt ngón cái vào phía trong khoảng 2.5 cm (hoặc từ khe khớp trong đo thẳng xuống dưới 4 - 5 cm); yêu cầu bệnh nhân gấp gối có đối kháng nhẹ để cảm nhận dải gân căng lên và xác nhận điểm ấn đau chói khu trú."
            ],
            "probePlacement": "Cách chuẩn nhất theo Philip Peng: Đặt đầu dò Linear dọc theo khe khớp trong tìm dải sợi dây chằng bên chày (MCL), trượt dọc xuống đầu xa MCL sẽ thấy 3 gân chân ngỗng cắt chéo bên trên; sau đó xoay đầu dò chếch ~20 - 30 độ dọc theo trục dài của gân chân ngỗng để thấy hình dải dẹt bám vào vỏ xương chày.",
            "figures": [
                {
                    "path": "assets/images/ch23_knee/p293_img1.jpeg",
                    "figNumber": "23.14",
                    "title": "Hướng đặt đầu dò chếch dọc gân chân ngỗng và đối chiếu siêu âm bao hoạt dịch (Fig. 23.14)",
                    "desc": "Đặt đầu dò chếch theo trục dài gân chân ngỗng ở mặt trước trong đầu trên xương chày bộc lộ khoang hoạt dịch (*) nằm trên xương chày và MCL.",
                    "springerCaption": "Fig. 23.14 Probe orientation and sonographic images of pes anserinus tendons and anserine bursa."
                }
            ]
        }
    },

    "distal-itb-bursa": {
        "anatomy": {
            "overview": "Dải chậu chày (Iliotibial Band - ITB) là dải cân dọc dày chắc của mạc đùi rộng hợp lực từ cơ căng mạc đùi (TFL) và cơ mông lớn, chạy dọc mặt ngoài đùi xuống bám tận chính vào củ Gerdy (Gerdy's tubercle) ở mặt trước ngoài đầu trên xương chày. Khi khớp gối gấp – duỗi lặp đi lặp lại qua góc ma sát 20 - 30 độ (ở người chạy bộ đường dài, đạp xe), dải ITB trượt cọ xát qua mỏm trên lồi cầu ngoài xương đùi (Lateral femoral epicondyle) gây viêm mô mỡ giàu mạch máu – thần kinh hoặc viêm bao hoạt dịch dải chậu chày xa (Distal ITB bursa / Adventitial bursa) nằm kẹp giữa mặt sâu ITB và vỏ xương lồi cầu ngoài đùi.",
            "targetStructure": "Khoang hoạt dịch / mô mỡ đệm dưới dải chậu chày xa (Sub-ITB space / Bursa) nằm giữa mặt sâu dải chậu chày và mỏm trên lồi cầu ngoài xương đùi.",
            "innervation": "Nhánh khớp gối trên ngoài (Superior lateral genicular nerve - SLGN) và các nhánh cảm giác từ thần kinh bì đùi ngoài và thần kinh mác chung.",
            "vascularAndDangerZones": [
                "Động mạch gối trên ngoài (Superior lateral genicular artery): Chạy sát màng xương bờ trên lồi cầu ngoài xương đùi ngay vùng bao hoạt dịch – cần bật Doppler màu kiểm tra.",
                "Dây chằng bên ngoài / bên mác (Lateral collateral ligament - LCL) và gân cơ khoeo (Popliteus tendon) nằm chếch phía sau dưới so với dải ITB.",
                "Thần kinh mác chung (Common peroneal nerve) chạy phía sau dọc gân cơ nhị đầu đùi vòng qua cổ xương mác (tránh đi kim lệch quá sâu ra phía sau)."
            ],
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_23_17_itb_gerdy_anatomy.jpg",
                    "figNumber": "23.17",
                    "title": "Giải phẫu dải chậu chày xa, củ Gerdy (*) và bao hoạt dịch dải chậu chày (Fig. 23.17)",
                    "desc": "Dải chậu chày trượt qua mỏm trên lồi cầu ngoài xương đùi (nơi có bao hoạt dịch đệm phía sâu) trước khi bám tận vào củ Gerdy (*) xương chày.",
                    "springerCaption": "Fig. 23.17 Lateral view of knee showing the iliotibial band, iliotibial bursa, lateral collateral ligament, and Gerdy's tubercle (*)."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Củ Gerdy (Gerdy's tubercle): Gồ xương nhô rõ ở mặt trước ngoài đầu trên xương chày, nằm đúng khoảng giữa lồi củ chày (phía trước) và chỏm xương mác (phía sau ngoài).",
                "Mỏm trên lồi cầu ngoài xương đùi (Lateral femoral epicondyle): Gồ xương nổi rõ cách khe khớp gối ngoài khoảng 2 - 3 cm lên phía trên.",
                "Chỏm xương mác (Fibular head) ở phía sau ngoài (nơi bám của LCL và gân nhị đầu đùi)."
            ],
            "referenceLines": "Đường thẳng nối từ củ Gerdy ngược dọc lên mặt ngoài đùi qua mỏm trên lồi cầu ngoài xương đùi chính là trục giải phẫu của dải chậu chày xa; vùng cọ xát đau chói (Noble compression point) nằm trên mỏm trên lồi cầu ngoài đùi (cách khe khớp ngoài 2 - 3 cm lên trên).",
            "palpationSteps": [
                "1. Đặt bệnh nhân nằm ngửa hoặc nằm nghiêng sang bên lành, khớp gối bên đau gấp nhẹ 20 - 30 độ kê trên gối đệm.",
                "2. Sờ xác định 3 mốc tam giác mặt ngoài gối: Lồi củ chày (trước) – Chỏm xương mác (sau ngoài) – Củ Gerdy (nằm giữa và hơi cao hơn hai mốc kia).",
                "3. Từ củ Gerdy lần dọc dải cân căng lên trên qua khe khớp ngoài 2 - 3 cm tới đỉnh nhô của lồi cầu ngoài xương đùi và ấn kiểm tra điểm đau Noble."
            ],
            "probePlacement": "Đặt đầu dò Linear dọc theo mặt phẳng trán ngoài (Coronal long-axis view) nối từ củ Gerdy lên lồi cầu ngoài xương đùi để thấy dải ITB căng phẳng vượt qua đỉnh xương lồi cầu ngoài; có thể xoay ngang 90 độ trên lồi cầu ngoài đùi để đâm kim In-plane từ trước ra sau an toàn.",
            "figures": [
                {
                    "path": "assets/images/ch23_knee/p295_img1.jpeg",
                    "figNumber": "23.18",
                    "title": "Đặt đầu dò dọc mặt ngoài gối từ củ Gerdy lên lồi cầu ngoài xương đùi (Fig. 23.18)",
                    "desc": "Đầu dò đặt dọc theo dải chậu chày bắc qua khe khớp ngoài để khảo sát khoang hoạt dịch giữa ITB và lồi cầu ngoài xương đùi.",
                    "springerCaption": "Fig. 23.18 Longitudinal probe placement and sonographic image of the distal iliotibial band."
                }
            ]
        }
    },

    "patellar-tendon-fenestration": {
        "anatomy": {
            "overview": "Gân bánh chè (Patellar Tendon / Ligament) là dải gân dẹt, rất khỏe (rộng ~2.5 - 3 cm, dày bình thường 3 - 5 mm) nối tiếp lực cơ tứ đầu đùi từ mặt sâu và cực dưới xương bánh chè (Inferior pole / Apex of patella) chạy thẳng xuống bám tận vào lồi củ xương chày (Tibial tuberosity). Phía nông gân là mạc nông và bao hoạt dịch trước bánh chè / dưới da; ngay mặt sâu của gân là đệm mỡ dưới bánh chè của Hoffa (Hoffa's infrapatellar fat pad) và bao hoạt dịch dưới bánh chè sâu (Deep infrapatellar bursa) nằm ngay trên lồi củ chày. Trong bệnh lý gân bánh chè mạn tính (Jumper's Knee), thoái hóa nhầy và tân mạch tăng sinh từ đệm mỡ Hoffa xâm nhập chủ yếu vào mặt sâu đầu gần gân ngay sát cực dưới xương bánh chè.",
            "targetStructure": "Vùng gân thoái hóa giảm âm ở mặt sâu đầu gần gân bánh chè sát cực dưới xương bánh chè (để châm kim Fenestration / PRP) HOẶC mặt phẳng giao diện giữa mặt sâu gân bánh chè và đệm mỡ Hoffa (để tiêm thể tích lớn High-volume bóc tách tân mạch thần kinh).",
            "innervation": "Nhánh dưới bánh chè của thần kinh hiển (Infrapatellar branch of saphenous nerve) và các sợi thần kinh cảm giác tự do đi kèm mạch tân sinh từ đệm mỡ Hoffa xâm nhập vào mặt sâu gân.",
            "vascularAndDangerZones": [
                "Vòng mạch nối quanh bánh chè và các nhánh động mạch gối dưới trong/ngoài đi xuyên qua đệm mỡ Hoffa (dùng Power Doppler để định vị vùng tân mạch đi vào mặt sâu gân).",
                "Tuyệt đối CẤM tiêm Corticosteroid vào trong hoặc sát bề mặt gân bánh chè (nguy cơ cực cao gây đứt hoàn toàn gân bánh chè khi bệnh nhân bước cầu thang hoặc bật nhảy!).",
                "Bao hoạt dịch dưới bánh chè sâu gần đầu xa gân và sụn khớp gối sâu sau đệm mỡ Hoffa."
            ],
            "figures": [
                {
                    "path": "assets/images/ch23_knee/p298_img1.jpeg",
                    "figNumber": "23.22",
                    "title": "Giải phẫu siêu âm trục dọc gân bánh chè từ cực dưới xương bánh chè tới lồi củ chày (Fig. 23.22)",
                    "desc": "Gân bánh chè căng đều từ cực dưới xương bánh chè (P) đến lồi củ xương chày, ngăn cách với khoang khớp sâu bởi đệm mỡ Hoffa tăng âm.",
                    "springerCaption": "Fig. 23.22 Longitudinal anatomy and sonographic scan of the patellar tendon and Hoffa's fat pad."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Cực dưới (đỉnh) xương bánh chè (Inferior pole / Apex of patella): Đỉnh nhọn hình chữ V ở bờ dưới xương bánh chè.",
                "Lồi củ xương chày (Tibial tuberosity): Gồ xương nổi rõ phía trước đầu trên xương chày cách đỉnh xương bánh chè khoảng 4 - 5 cm.",
                "Hai bờ bên (trong và ngoài) của dải gân bánh chè."
            ],
            "referenceLines": "Đường trục dọc chính giữa nối từ đỉnh dưới xương bánh chè thẳng xuống trung tâm lồi củ xương chày.",
            "palpationSteps": [
                "1. Khám sờ nắn khi gối duỗi hoàn toàn (cơ tứ đầu thả lỏng!): Dùng ngón cái đẩy nhẹ cực trên xương bánh chè xuống dưới để làm bật nổi đỉnh cực dưới xương bánh chè lên rồi ấn ngón trỏ vào mặt dưới đỉnh xương bánh chè (dấu hiệu Bassett dương tính).",
                "2. Sau khi đánh dấu điểm đau, đặt cuộn gối dưới khoeo để khớp gối gấp nhẹ 20 - 30 độ giúp gân bánh chè hơi căng thẳng, giảm hiện tượng giả giảm âm do bất đẳng hướng (Anisotropy) trên siêu âm.",
                "3. Sờ xác định rõ hai bờ bên của gân bánh chè để chuẩn bị hướng đi kim In-plane trên mặt cắt ngang (từ ngoài vào trong sát mặt sâu gân)."
            ],
            "probePlacement": "Quét mặt cắt dọc chính giữa (Long-axis sagittal view) từ cực dưới xương bánh chè tới lồi củ chày để đánh giá vùng dày giảm âm và phổ Power Doppler; khi tiêm bóc tách mặt phẳng sâu (High-volume interface injection), xoay đầu dò cắt ngang (Short-axis view) ngay dưới đỉnh bánh chè để đi kim In-plane từ bờ ngoài luồn chính xác vào khe giữa mặt sâu gân và đệm mỡ Hoffa.",
            "figures": [
                {
                    "path": "assets/images/ch23_knee/p297_img1.jpeg",
                    "figNumber": "23.21",
                    "title": "Liên quan các khoang hoạt dịch và gân mặt trước - ngoài khớp gối (Fig. 23.21)",
                    "desc": "Kiểm soát mặt cắt ngang giúp đưa thân kim đi song song mặt phẳng nông hoặc sâu của dải cân - gân một cách an toàn tuyệt đối.",
                    "springerCaption": "Fig. 23.21 Short-axis ultrasound-guided planar needle trajectory around knee tendon/band structures."
                }
            ]
        }
    },

    "genicular-nerves": {
        "anatomy": {
            "overview": "Bao khớp gối phía trước được chi phối cảm giác rất phức tạp bởi 4 góc phần tư (theo giải phẫu chi tiết của GS. Philip Peng – Chương 27). Ba đích thần kinh gối kinh điển và an toàn nhất chạy hằng định sát màng xương chỗ tiếp nối thân xương – hành xương (Shaft-epicondylar / diaphyseal-metaphyseal flare) đi kèm động mạch gối cùng tên gồm: (1) Thần kinh gối trên trong (SMGN – tách từ nhánh cơ rộng trong/thần kinh chày, vòng sát chỗ uốn lồi cầu đùi trong sâu dưới cơ rộng trong/củ cơ khép), (2) Thần kinh gối trên ngoài (SLGN – tách từ thần kinh tọa/mác chung, đi sát chỗ uốn vỏ xương lồi cầu đùi ngoài), và (3) Thần kinh gối dưới trong (IMGN – tách từ thần kinh chày, lách ngang dưới dây chằng bên chày MCL sát cổ hành xương chày trong).",
            "targetStructure": "Ba điểm tiếp xúc màng xương tại góc uốn thân xương – lồi cầu (Periosteal metaphyseal-diaphyseal junction) ngay sát cạnh động mạch gối tương ứng của SMGN (đùi trên trong), SLGN (đùi trên ngoài) và IMGN (chày dưới trong).",
            "innervation": "Mạng lưới thần kinh cảm giác khớp gối trước (SMGN, SLGN, IMGN, nhánh thần kinh cơ rộng trong/ngoài/giữa và thần kinh dưới bánh chè); TUYỆT ĐỐI KHÔNG đốt nhánh gối dưới ngoài (ILGN) do nằm sát thần kinh mác chung.",
            "vascularAndDangerZones": [
                "Thần kinh mác chung (Common peroneal nerve) vòng qua cổ xương mác ở góc dưới ngoài gối: TUYỆT ĐỐI TRÁNH phong bế hủy thần kinh / đốt RFA nhánh gối dưới ngoài (ILGN) vì nguy cơ gây liệt bàn chân rũ (Foot drop)!",
                "Các động mạch gối trên trong, trên ngoài và dưới trong (Superior medial, Superior lateral & Inferior medial genicular arteries): Vừa là mốc 'ngọn hải đăng' trên Color Doppler để tìm thần kinh, vừa phải tránh tiêm thuốc/hạt tinh thể trực tiếp vào lòng mạch.",
                "Tại vị trí IMGN lớp mô mềm và da phủ mặt trong xương chày khá mỏng: Khi đốt sóng cao tần RFA cần kiểm tra độ sâu đầu kim để tránh bỏng nhiệt da (Skin burn) hoặc tổn thương dây chằng MCL."
            ],
            "figures": [
                {
                    "path": "assets/images/ch27_hip_knee_denervation/p346_img1.jpeg",
                    "figNumber": "27.10",
                    "title": "Bản đồ giải phẫu phân bố các nhánh thần kinh cảm giác bao khớp gối trước (Fig. 27.10)",
                    "desc": "Sơ đồ chi tiết 4 góc phần tư chi phối cảm giác khớp gối trước của Philip Peng (SMGN, SLGN, IMGN, nhánh cơ rộng và nhánh dưới bánh chè).",
                    "springerCaption": "Fig. 27.10 Detailed anatomical innervation of the anterior knee joint capsule across four quadrants."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Mỏm trên lồi cầu trong và củ cơ khép xương đùi (Medial femoral epicondyle & Adductor tubercle) – mốc cho SMGN.",
                "Mỏm trên lồi cầu ngoài xương đùi (Lateral femoral epicondyle) – mốc cho SLGN.",
                "Lồi cầu trong xương chày và khe khớp gối trong – mốc cho IMGN.",
                "Chỏm xương mác ở phía dưới ngoài (Vùng CẤM đốt RFA – nơi có thần kinh mác chung)."
            ],
            "referenceLines": "Ba hõm cong hành – thân xương (Epicondylar-shaft concavities): SMGN và SLGN nằm cao hơn khe khớp gối khoảng 4 - 5 cm tại chỗ thân xương đùi bắt đầu bè rộng thành hai lồi cầu; IMGN nằm thấp hơn khe khớp gối trong khoảng 3 - 4 cm ngay bờ dưới phần bám xương chày của dây chằng MCL.",
            "palpationSteps": [
                "1. Đặt bệnh nhân nằm ngửa, kê gối đệm dưới khoeo để gối gấp nhẹ 20 - 30 độ.",
                "2. Sờ khe khớp gối hai bên, sau đó lần dọc sườn trong và sườn ngoài đầu dưới xương đùi lên trên khoảng 3 khoát ngón tay để tìm hõm cong tiếp giáp giữa lồi cầu và thân xương đùi (đích SMGN & SLGN).",
                "3. Từ khe khớp gối trong lần dọc mặt trong xương chày xuống dưới khoảng 2 khoát ngón tay (ngang mức lồi củ chày nhưng ở mặt trong) để xác định vùng đi qua của IMGN dưới dây chằng MCL."
            ],
            "probePlacement": "Đặt đầu dò Linear theo mặt phẳng trán dọc trục xương (Coronal long-axis view) tại từng góc (trên trong đùi, trên ngoài đùi, dưới trong chày) để tìm đường cong lõm hành – thân xương và bật Color Doppler bắt mạch đập động mạch gối, sau đó xoay ngang 90 độ (Transverse view) để đi kim In-plane từ trước ra sau tiếp xúc màng xương.",
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_27_12_imgn_tibia_probe.jpg",
                    "figNumber": "27.12",
                    "title": "Hai bước đặt đầu dò dọc - ngang định vị nhánh thần kinh gối dưới trong IMGN trên xương chày (Fig. 27.12)",
                    "desc": "Đặt đầu dò dọc theo mặt trong xương chày xác định chỗ lõm dưới mâm chày và dây chằng MCL (khung đỏ), sau đó xoay ngang 90 độ (khung xanh) để dẫn đường kim.",
                    "springerCaption": "Fig. 27.12 Coronal and transverse ultrasound probe positions over the medial proximal tibia for IMGN targeting."
                }
            ]
        }
    },

    "hip-intraarticular": {
        "anatomy": {
            "overview": "Khớp háng (Femoroacetabular / Hip Joint) là khớp chỏm cầu sâu vững chắc giữa chỏm xương đùi và ổ cối xương chậu có sụn viền ổ cối (Acetabular labrum) bao quanh. Bao khớp háng bám từ chu vi ổ cối phủ dọc cổ xương đùi tới đường gian mấu ở phía trước, tạo nên ngách hoạt dịch trước cổ xương đùi (Anterior synovial recess) nằm ngay mặt sâu của dây chằng chậu – đùi dày chắc (Iliofemoral ligament of Bigelow) và cơ thắt lưng chậu (Iliopsoas) – cơ thẳng đùi (Rectus femoris). Khi tràn dịch khớp háng, dịch sẽ tích tụ làm phồng bao khớp trước ngay tại chỗ lõm chuyển tiếp chỏm – cổ xương đùi.",
            "targetStructure": "Ngách trước bao khớp háng tại chỗ nối chỏm – cổ xương đùi (Anterior head-neck junction beneath the iliofemoral capsule).",
            "innervation": "Mặt trước bao khớp háng do các nhánh khớp của thần kinh đùi (Femoral nerve), thần kinh bịt (Obturator nerve) và thần kinh bịt phụ (Accessory obturator nerve); mặt sau do thần kinh cơ vuông đùi và thần kinh mông trên.",
            "vascularAndDangerZones": [
                "Bó mạch thần kinh đùi (Femoral nerve, artery & vein - NAV): Chạy dọc trong tam giác đùi ở PHÍA TRONG (Medial) so với cổ xương đùi và cơ thắt lưng chậu – tuyệt đối không đi kim từ phía trong!",
                "Động mạch mũ đùi ngoài (Lateral circumflex femoral artery – đặc biệt nhánh lên Ascending branch): Thường vắt ngang ngay phía trước cổ xương đùi trên đường đi của kim – BẮT BUỘC bật Color Doppler quét toàn bộ hành trình dự kiến của kim trước khi chọc!",
                "Thần kinh bì đùi ngoài (LFCN): Chạy nông ở phía ngoài dưới gai chậu trước trên (cần tránh chọc kim quá cao sát ngay dưới ASIS)."
            ],
            "figures": [
                {
                    "path": "assets/images/ch22_hip/p271_img1.jpeg",
                    "figNumber": "22.1",
                    "title": "Giải phẫu mặt trước khớp háng, dây chằng bao khớp và các nhánh thần kinh - mạch máu liên quan (Fig. 22.1)",
                    "desc": "Mối liên quan giải phẫu giữa bao khớp háng trước, dây chằng chậu - đùi, cơ thắt lưng chậu và bó mạch thần kinh đùi ở phía trong.",
                    "springerCaption": "Fig. 22.1 Anterior hip joint anatomy and articular nerve supply."
                },
                {
                    "path": "assets/images/ch22_hip/p272_img1.jpeg",
                    "figNumber": "22.2",
                    "title": "Thiết đồ dọc ngách hoạt dịch trước tại chỗ nối chỏm - cổ xương đùi (Fig. 22.2)",
                    "desc": "Ngách hoạt dịch trước khớp háng nằm ngay sâu dưới bao xơ dây chằng chậu - đùi và cơ thắt lưng chậu tại hõm cổ xương đùi.",
                    "springerCaption": "Fig. 22.2 Sagittal oblique view of the anterior recess of the hip joint at the femoral head-neck junction."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Gai chậu trước trên (Anterior Superior Iliac Spine - ASIS): Mốc xương nhô rõ phía trước ngoài mào chậu.",
                "Củ mu và khớp mu (Pubic tubercle & symphysis) ở phía trong: Đường nối ASIS – củ mu tạo nên nếp dây chằng bẹn (Inguinal ligament).",
                "Mấu chuyển lớn xương đùi (Greater trochanter) ở mặt ngoài háng."
            ],
            "referenceLines": "Trục cổ xương đùi xuất chiếu lên bề mặt da vùng bẹn chạy chếch từ trên trong (khoảng dưới điểm giữa dây chằng bẹn, ngay phía NGOÀI mạch đập động mạch đùi 2 - 3 cm) xuống dưới ngoài hướng về phía mấu chuyển lớn.",
            "palpationSteps": [
                "1. Đặt bệnh nhân nằm ngửa thẳng trên giường, chân duỗi tự nhiên ở tư thế trung tính hoặc hơi xoay trong nhẹ 10 - 15 độ (tránh xoay ngoài mạnh làm căng hẹp bao khớp trước và kéo bó mạch đùi lại gần cổ đùi).",
                "2. Sờ xác định gai chậu trước trên (ASIS) ở phía ngoài và bắt rõ mạch đập của ĐỘNG MẠCH ĐÙI (Femoral artery pulse) ngay dưới nếp bẹn – đánh dấu đường đi động mạch đùi là 'vùng cấm phía trong'.",
                "3. Sờ mấu chuyển lớn ở mặt ngoài đùi để hình dung hướng chếch của cổ xương đùi."
            ],
            "probePlacement": "Phương pháp 2 bước chuẩn Philip Peng: Bước 1 – Đặt đầu dò Curvilinear 2-5 MHz nằm ngang ở 1/3 trên trước đùi tìm thân xương đùi cắt ngang hình vòm sáng. Bước 2 – Trượt đầu dò lên trên đồng thời xoay đầu trong của đầu dò chếch vào phía rốn (~30 - 45 độ, mặt phẳng Parasagittal oblique dọc theo trục cổ xương đùi) để thấy liên tục chỏm tròn và cổ xương đùi.",
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_22_05_hip_anterior_recess_probe.jpg",
                    "figNumber": "22.5",
                    "title": "Đặt đầu dò chếch dọc theo trục cổ xương đùi trên bề mặt vùng bẹn trước (Fig. 22.5)",
                    "desc": "Đầu dò Curvilinear xoay chếch dọc theo trục cổ xương đùi ở phía ngoài bó mạch đùi, bộc lộ rõ chỏm - cổ xương đùi và ngách khớp trước.",
                    "springerCaption": "Fig. 22.5 Oblique sagittal ultrasound probe placement over the anterior hip recess aligned with the femoral neck."
                }
            ]
        }
    },

    "hip-lateral-approach": {
        "anatomy": {
            "overview": "Ở lối tiếp cận ngoài khớp háng (Lateral / Supratrochanteric Approach), hành trình từ mặt ngoài đùi đi vào khớp đi qua lớp da, dải chậu chày – cơ căng mạc đùi, rồi luồn qua cửa sổ cơ trên mấu chuyển (gồm cơ mông nhỡ Gluteus medius ở nông và cơ mông bé Gluteus minimus ở sâu) để tiếp cận bờ trên ngoài của chỗ nối chỏm – cổ xương đùi ngay dưới trần ổ cối và sụn viền trên ngoài. Ưu điểm lớn của lối ngoài là đường đi hoàn toàn cách xa bó mạch thần kinh đùi và vùng nếp bẹn ẩm ướt (đặc biệt hữu ích ở bệnh nhân béo phì có nếp bụng dày phủ lấp vùng bẹn).",
            "targetStructure": "Mặt trên ngoài chỗ nối chỏm – cổ xương đùi (Superolateral head-neck junction) trong bao khớp háng, nằm sâu dưới cơ mông nhỡ và cơ mông bé.",
            "innervation": "Nhánh thần kinh mông trên (Superior gluteal nerve - L4, L5, S1) đi trong mặt phẳng cân giữa cơ mông nhỡ và cơ mông bé, cùng các nhánh cảm giác bao khớp trên.",
            "vascularAndDangerZones": [
                "Nhánh sâu động mạch mông trên và nhánh thần kinh mông trên (Superior gluteal neurovascular branches) chạy giữa cơ mông nhỡ và cơ mông bé: Cần bật Color Doppler kiểm tra hành trình kim!",
                "Sụn viền trên ngoài ổ cối (Superolateral acetabular labrum): Tránh đâm mũi kim chếch quá cao vào bờ ổ cối làm tổn thương sụn viền.",
                "Điểm bám gân cơ mông nhỡ – mông bé tại đỉnh mấu chuyển lớn."
            ],
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_22_11_gluteus_muscles_insertions.jpg",
                    "figNumber": "22.11",
                    "title": "Giải phẫu phân lớp cơ mông lớn, mông nhỡ và mông bé vùng mấu chuyển ngoài khớp háng (Fig. 22.11)",
                    "desc": "Ba lớp cơ vùng hông ngoài gồm cơ mông lớn, cơ mông nhỡ và cơ mông bé phủ phía trên mấu chuyển lớn và cổ xương đùi.",
                    "springerCaption": "Fig. 22.11 Anatomical arrangement of gluteus maximus, gluteus medius, and gluteus minimus over the lateral hip."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Đỉnh mấu chuyển lớn xương đùi (Apex of greater trochanter): Khối xương lớn nhô rõ nhất ở mặt bên hông đùi.",
                "Mào chậu (Iliac crest) ở phía trên và gai chậu trước trên (ASIS) ở phía trước trên."
            ],
            "referenceLines": "Trục vành ngoài xương đùi (Mid-coronal lateral line) đi thẳng từ mặt ngoài đùi qua đỉnh mấu chuyển lớn hướng lên khoảng trên mấu chuyển (Supratrochanteric window).",
            "palpationSteps": [
                "1. Đặt bệnh nhân nằm nghiêng hoàn toàn sang bên lành (Lateral decubitus position, mặt bệnh bên đau hướng lên trần nhà), kẹp một gối mỏng giữa hai đầu gối để giữ đùi ở tư thế trung tính.",
                "2. Dùng lòng các ngón tay sờ xác định bờ trước, bờ sau và đỉnh cao nhất của mấu chuyển lớn xương đùi.",
                "3. Ấn xác nhận vùng hõm cơ mềm ngay phía trên đỉnh mấu chuyển lớn (khoảng giữa đỉnh mấu chuyển lớn và mào chậu)."
            ],
            "probePlacement": "Đặt đầu dò Curvilinear 2-5 MHz dọc theo mặt phẳng trán (Coronal longitudinal plane) trực tiếp lên đỉnh mấu chuyển lớn rồi trượt nhẹ đầu dò lên phía đầu (cephalad) để thấy đường viền mấu chuyển lớn chuyển tiếp vào cổ trên và chỏm xương đùi tròn nằm sát bờ ổ cối.",
            "figures": [
                {
                    "path": "assets/images/ch22_hip/p273_img1.jpeg",
                    "figNumber": "22.4",
                    "title": "Đặt đầu dò mặt phẳng trán trên vùng mấu chuyển ngoài khớp háng (Fig. 22.4)",
                    "desc": "Bệnh nhân nằm nghiêng sang bên lành, đầu dò Curvilinear đặt dọc qua đỉnh mấu chuyển lớn hướng lên khe khớp trên ngoài.",
                    "springerCaption": "Fig. 22.4 Coronal ultrasound probe placement over the lateral trochanteric and supratrochanteric area."
                }
            ]
        }
    },

    "trochanteric-bursa": {
        "anatomy": {
            "overview": "Mấu chuyển lớn xương đùi (Greater Trochanter - GT) không phải một khối phẳng mà gồm 4 diện xương (Facets) riêng biệt giống như 'chóp xoay của khớp háng': (1) Diện trước (Anterior facet) là nơi bám tận của gân cơ mông bé (Gluteus minimus); (2) Diện bên (Lateral facet) và (3) Diện sau trên (Superoposterior facet) là nơi bám tận của hai bó gân cơ mông nhỡ (Gluteus medius); còn (4) Diện sau (Posterior facet) không có gân bám mà được phủ trực tiếp bởi dải chậu chày – cơ mông lớn qua trung gian bao hoạt dịch mấu chuyển lớn (Trochanteric / Subgluteus maximus bursa – lớn nhất). Ngoài ra còn có bao hoạt dịch dưới cơ mông nhỡ và dưới cơ mông bé.",
            "targetStructure": "Khoang bao hoạt dịch mấu chuyển lớn (Subgluteus maximus bursa) nằm kẹp giữa mặt sâu dải chậu chày/cơ mông lớn ở nông và bề mặt gân cơ mông nhỡ (tại diện bên & diện sau) ở sâu.",
            "innervation": "Nhánh thần kinh mông trên (Superior gluteal nerve), nhánh bì đùi ngoài và các nhánh cảm giác từ đám rối thắt lưng – cùng (L4–S1).",
            "vascularAndDangerZones": [
                "Các nhánh tận của động mạch mông trên, mông dưới và động mạch mũ đùi ngoài tạo mạng lưới nối mấu chuyển.",
                "Gân cơ mông nhỡ và cơ mông bé (Gluteus medius & minimus tendons): Tuyệt đối KHÔNG bơm Corticosteroid trực tiếp vào trong chất gân đang thoái hóa/rách bán phần vì làm tăng nguy cơ đứt gân gây dáng đi lắc lư Trendelenburg!"
            ],
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_22_10_greater_trochanter_facets.jpg",
                    "figNumber": "22.10",
                    "title": "Giải phẫu 4 diện xương (Facets) của mấu chuyển lớn xương đùi (Fig. 22.10)",
                    "desc": "Sơ đồ các diện bám gân đặc hiệu trên mấu chuyển lớn: diện trước (bám cơ mông bé), diện bên & diện sau trên (bám cơ mông nhỡ) và diện sau (nền bao hoạt dịch mấu chuyển).",
                    "springerCaption": "Fig. 22.10 Anatomical facets of the greater trochanter: anterior, lateral, superoposterior, and posterior facets."
                },
                {
                    "path": "assets/images/anatomy/fig_22_11_gluteus_muscles_insertions.jpg",
                    "figNumber": "22.11",
                    "title": "Liên quan bám tận của cơ mông bé, mông nhỡ và mông lớn trên mấu chuyển lớn (Fig. 22.11)",
                    "desc": "Cách sắp xếp lớp của 3 cơ mông và vị trí bao hoạt dịch mấu chuyển đệm dưới dải chậu chày - cơ mông lớn.",
                    "springerCaption": "Fig. 22.11 Relationship of the three gluteal muscles to their insertions on the greater trochanter."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Đỉnh và diện bên mấu chuyển lớn xương đùi (Lateral prominence of greater trochanter): Phần xương rộng nhất ngang hông đùi.",
                "Gai chậu trước trên (ASIS) ở phía trước trên và ụ ngồi ở phía sau dưới."
            ],
            "referenceLines": "Đỉnh nhô cao nhất trên thiết đồ cắt ngang mấu chuyển lớn chính là 'đỉnh góc nhị diện' (Apex) phân chia diện trước (hướng ra trước trong) và diện bên – sau (hướng ra sau ngoài).",
            "palpationSteps": [
                "1. Đặt bệnh nhân nằm nghiêng hoàn toàn sang bên không đau (Lateral decubitus), khớp háng gấp nhẹ ~30 độ, khớp gối gấp ~45 độ có gối kê giữa hai chân.",
                "2. Dùng ngón cái ấn tìm điểm đau chói điển hình ('Jump sign') dọc bờ bên và bờ sau trên của mấu chuyển lớn.",
                "3. Yêu cầu bệnh nhân hơi xoay trong – xoay ngoài đùi nhẹ để xác nhận toàn bộ chu vi mấu chuyển lớn dưới lòng bàn tay."
            ],
            "probePlacement": "Đặt đầu dò Linear tần số trung bình (6-12 MHz) hoặc Curvilinear (ở người béo) cắt ngang (Short-axis transverse view) trực tiếp trên mặt bên mấu chuyển lớn để nhận diện đỉnh nhọn phân ranh giới giữa diện trước (cơ mông bé) và diện bên – sau (cơ mông nhỡ + dải chậu chày phủ lên trên).",
            "figures": [
                {
                    "path": "assets/images/ch22_hip/p278_img2.jpeg",
                    "figNumber": "22.12",
                    "title": "Đặt đầu dò cắt ngang trực tiếp trên mấu chuyển lớn xương đùi (Fig. 22.12)",
                    "desc": "Đặt đầu dò ngang trên mấu chuyển lớn ở tư thế nằm nghiêng giúp hiển thị cùng lúc diện trước, diện bên và mặt phẳng bao hoạt dịch dưới dải chậu chày.",
                    "springerCaption": "Fig. 22.12 Transverse probe position over the greater trochanter in lateral decubitus position."
                }
            ]
        }
    },

    "iliopsoas-bursa": {
        "anatomy": {
            "overview": "Cơ thắt lưng – chậu (Iliopsoas) hợp thành từ cơ thắt lưng lớn và cơ chậu, đi qua khuyết cơ (Muscular lacuna) dưới dây chằng bẹn ở phía ngoài bó mạch đùi. Tại mức gờ chậu – lược (Iliopectineal eminence) mặt trước khớp háng, phần gân cơ thắt lưng lớn (Psoas tendon) nằm ở phía sâu – trong sát gờ xương chậu lược, được bao bọc phía trước ngoài bởi phần thịt cơ chậu (Iliacus muscle), trước khi bám tận vào mấu chuyển bé. Bao hoạt dịch thắt lưng chậu (Iliopsoas bursa – bao hoạt dịch lớn nhất cơ thể, kích thước tới 5–7 x 2–4 cm) nằm đệm ngay giữa mặt sâu gân thắt lưng chậu và mặt trước bao khớp háng / gờ chậu lược (thông nối với ổ khớp háng ở ~15% người lớn).",
            "targetStructure": "Mặt phẳng bao hoạt dịch thắt lưng chậu (Iliopsoas bursa plane) nằm ngay giữa mặt sâu gân cơ thắt lưng lớn (Psoas major tendon) và mặt xương tăng âm của gờ chậu – lược (Iliopectineal eminence - IPE) trên vành ổ cối trước.",
            "innervation": "Các nhánh cơ từ đám rối thắt lưng (L1–L3) và nhánh của thần kinh đùi (Femoral nerve).",
            "vascularAndDangerZones": [
                "Thần kinh đùi (Femoral nerve): Nằm ngay mặt nông – trong của cơ chậu (dưới mạc chậu Fascia iliaca)!",
                "Động mạch và tĩnh mạch đùi (Femoral artery & vein): Nằm ngay sát bờ trong của gân cơ thắt lưng chậu và gờ chậu – lược – bắt buộc đi kim từ NGOÀI VÀO TRONG (Lateral to Medial) và bật Doppler màu để kim dừng ngay dưới gân, không vượt sang bờ trong!",
                "Động mạch mũ đùi ngoài ở phía dưới và phúc mạc/ổ chậu nếu đi quá cao trên dây chằng bẹn."
            ],
            "figures": [
                {
                    "path": "assets/images/ch22_hip/p271_img1.jpeg",
                    "figNumber": "22.1",
                    "title": "Giải phẫu liên quan gân cơ thắt lưng chậu, gờ chậu - lược và bó mạch thần kinh đùi (Fig. 22.1)",
                    "desc": "Cơ và gân thắt lưng chậu trượt qua gờ chậu - lược phía trước bao khớp háng, nằm ngay sát phía ngoài thần kinh và động mạch đùi.",
                    "springerCaption": "Fig. 22.1 Anatomical relationship of the iliopsoas complex, anterior hip capsule, and femoral neurovascular bundle."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Gai chậu trước trên (ASIS): Mốc xương chuẩn khởi điểm phía trước ngoài khung chậu.",
                "Gai chậu trước dưới (AIIS) và Gờ chậu – lược (Iliopectineal eminence - IPE): Nằm sâu dưới nếp bẹn.",
                "Củ mu (Pubic tubercle) ở phía trong."
            ],
            "referenceLines": "Đường dây chằng bẹn nối từ ASIS tới củ mu: Gân cơ thắt lưng chậu đi qua ngay phía dưới điểm nối 1/3 giữa và 1/3 ngoài của đường này (ngay phía ngoài mạch đập động mạch đùi).",
            "palpationSteps": [
                "1. Bệnh nhân nằm ngửa, hai chân duỗi thẳng tư thế trung tính.",
                "2. Sờ xác định gai chậu trước trên (ASIS) bằng ngón cái và bắt mạch đập động mạch đùi ở nếp bẹn bằng ngón trỏ để khoanh vùng khoảng an toàn ở phía ngoài động mạch đùi.",
                "3. Có thể thực hiện nghiệm pháp gây tiếng bật khớp háng trong (Snapping hip maneuver: từ tư thế gấp – dạng – xoay ngoài háng đưa duỗi – khép về trung tính) để tái hiện cảm giác gân thắt lưng chậu trượt bật qua gờ chậu – lược."
            ],
            "probePlacement": "Đặt đầu dò Curvilinear (hoặc Linear ở người gầy) cắt ngang tại gai chậu trước trên (ASIS), trượt xuống dưới tìm gai chậu trước dưới (AIIS), sau đó xoay nhẹ đầu trong đầu dò xuống dưới (~20 - 30 độ song song dây chằng bẹn) nối giữa AIIS và gờ chậu – lược (IPE) để thấy gân Psoas tăng âm hình bầu dục nằm ngay trên mặt xương IPE.",
            "figures": [
                {
                    "path": "assets/images/ch22_hip/p280_img1.jpeg",
                    "figNumber": "22.14",
                    "title": "Các vị trí đặt đầu dò trên nếp bẹn khảo sát gân và bao hoạt dịch thắt lưng chậu (Fig. 22.14)",
                    "desc": "Quét ngang chếch ngay mức vành ổ cối - gờ chậu lược bộc lộ rõ gân cơ thắt lưng (trắng sáng) tựa sát mặt xương phía ngoài bó mạch đùi.",
                    "springerCaption": "Fig. 22.14 Transducer positions and transverse-oblique scan of the iliopsoas tendon over the iliopectineal eminence."
                }
            ]
        }
    },

    "hip-joint-denervation": {
        "anatomy": {
            "overview": "Theo nghiên cứu giải phẫu tử thi kinh điển của nhóm GS. Philip Peng (Short et al., 2018 – nền tảng của PENG block và RFA khớp háng), mặt trước bao khớp háng là vùng tập trung mật độ thụ thể đau cao nhất và được chi phối bởi 3 nguồn thần kinh cảm giác có mốc xương hằng định: (1) Các nhánh khớp của thần kinh đùi (Femoral articular branches – cả nhánh cao và nhánh thấp đều hội tụ đi qua rãnh lõm xương giữa gai chậu trước dưới AIIS và gờ chậu – lược IPE sâu dưới gân Psoas); (2) Nhánh thần kinh bịt phụ (Accessory obturator nerve - AON, có ở ~30–50% người, vượt qua ngay bờ trong gờ chậu – lược IPE); và (3) Các nhánh khớp của thần kinh bịt (Obturator articular branches – đi ra từ ống bịt tại góc dưới trong ngành mu – ổ cối / khuyết ổ cối).",
            "targetStructure": "Target 1 (cho PENG block & RFA nhánh thần kinh đùi + AON): Mặt phẳng xương trong rãnh lõm giữa AIIS và gờ chậu – lược (IPE) ngay mặt sâu gân Psoas. Target 2 (cho RFA nhánh thần kinh bịt): Góc dưới trong chỗ tiếp giáp ngành trên xương mu và trụ trước dưới ổ cối (Subpectineal / Incisura acetabuli).",
            "innervation": "Các nhánh khớp cảm giác của thần kinh đùi (chi phối phần tư trước trên & trước ngoài bao khớp), thần kinh bịt phụ (phần tư trước trong) và thần kinh bịt (phần tư dưới trong bao khớp háng).",
            "vascularAndDangerZones": [
                "Thần kinh đùi chính (Main femoral nerve) và bó mạch đùi / chậu ngoài: Nằm nông hơn cơ chậu và ở phía trong gân Psoas – đi kim In-plane từ ngoài vào trong luôn có cơ chậu che chắn thần kinh đùi ở trên!",
                "Bó mạch bịt (Obturator artery & vein) và nhánh nối 'vòng mạch tử thần' (Corona mortis) dọc ngành trên xương mu ở vùng Target 2 – bắt buộc quét Color Doppler kỹ trước khi đặt kim RFA.",
                "Thần kinh bì đùi ngoài (LFCN) chạy nông gần điểm chọc da dưới ASIS: Cần tránh đâm xuyên hoặc gây bỏng nhiệt da đầu vào."
            ],
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_27_05_hip_capsule_quadrants.jpg",
                    "figNumber": "27.5",
                    "title": "Bản đồ phân vùng 4 góc phần tư chi phối thần kinh cảm giác mặt trước bao khớp háng (Fig. 27.5)",
                    "desc": "Tổng hợp đóng góp của nhánh thần kinh đùi (trên ngoài/trên trong), thần kinh bịt phụ (AON) và thần kinh bịt (dưới trong) trên bao khớp háng trước.",
                    "springerCaption": "Fig. 27.5 Summary diagram of sensory articular branch contributions to the four quadrants of the anterior hip capsule."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Gai chậu trước trên (ASIS): Mốc khởi điểm sờ thấy rõ ở phía ngoài.",
                "Củ mu (Pubic tubercle): Mốc sờ thấy ở phía trong trên bờ trên xương mu.",
                "Nếp lằn bẹn (Inguinal crease) nối giữa hai mốc trên."
            ],
            "referenceLines": "Đường dây chằng bẹn nối ASIS – Củ mu: Rãnh xương AIIS – IPE (Target 1) nằm song song và ngay dưới nửa ngoài dây chằng bẹn; vùng ống bịt dưới cơ lược (Target 2) nằm cách củ mu khoảng 2 - 3 cm ra ngoài và xuống dưới.",
            "palpationSteps": [
                "1. Bệnh nhân nằm ngửa thẳng, hai chân duỗi trung tính (xoay ngoài nhẹ 15 độ khi cần tiếp cận Target 2 vùng cơ lược phía trong).",
                "2. Sờ rõ gai chậu trước trên (ASIS) và củ mu, đồng thời bắt mạch đập động mạch đùi ở giữa nếp bẹn và đánh dấu bằng bút lên da.",
                "3. Xác định điểm vào da an toàn ở phía ngoài (ngay dưới và trong ASIS khoảng 1.5 - 2 cm) để đảm bảo kim đi từ ngoài vào trong tránh thần kinh bì đùi ngoài."
            ],
            "probePlacement": "Sử dụng đầu dò Curvilinear tần số thấp (2 - 5 MHz): Đặt ngang trên ASIS, trượt xuống dưới để thấy mỏm nhọn AIIS, sau đó xoay đầu trong của đầu dò chếch xuống ~45 độ hướng về phía củ mu cho tới khi thấy hai đỉnh xương tăng âm (AIIS ở ngoài và IPE ở trong) tạo thành thung lũng chứa gân Psoas tròn sáng.",
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_27_06a_asis_landmark_scan.jpg",
                    "figNumber": "27.6a",
                    "title": "Bước 1 định vị mốc xương gai chậu trước trên (ASIS) làm chuẩn quét xuống AIIS - IPE (Fig. 27.6a)",
                    "desc": "Đặt đầu dò trên gai chậu trước trên (ASIS) trước khi trượt xuống dưới và xoay 45 độ thẳng hàng với trục AIIS - gờ chậu lược (IPE).",
                    "springerCaption": "Fig. 27.6a Initial surface landmark scan over the anterior superior iliac spine (ASIS)."
                }
            ]
        }
    },

    "piriformis-muscle": {
        "anatomy": {
            "overview": "Cơ hình lê (Piriformis muscle) là cơ xoay ngoài háng chủ chốt định khu khoang mông sâu (Deep gluteal space), nguyên ủy từ mặt trước xương cùng (S2–S4), đi ra khỏi khung chậu qua khuyết ngồi lớn (Greater sciatic notch – chia khuyết này thành lỗ trên cơ hình lê và lỗ dưới cơ hình lê) để bám tận vào bờ trên mấu chuyển lớn xương đùi. Cơ nằm ngay sâu dưới cơ mông lớn (Gluteus maximus). Dây thần kinh tọa (Sciatic nerve) thoát qua lỗ dưới cơ hình lê ngay mặt sâu/bờ dưới cơ hình lê ở ~85% dân số, nhưng có tới ~15% biến thể giải phẫu Beaton & Anson trong đó nhánh mác chung đâm xuyên qua giữa bụng cơ hoặc đi vòng phía trên cơ hình lê!",
            "targetStructure": "Bụng cơ hình lê (Piriformis muscle belly) hoặc mặt phẳng cân giữa cơ mông lớn và cơ hình lê ở đoạn ngay phía ngoài bờ khuyết ngồi lớn (nơi có xương cánh chậu che chắn phía sâu, tránh hoàn toàn khuyết ngồi lớn ở phía trong nơi thần kinh tọa đi ra).",
            "innervation": "Thần kinh cơ hình lê trực tiếp từ đám rối cùng (Nerve to piriformis - S1, S2).",
            "vascularAndDangerZones": [
                "Dây thần kinh tọa (Sciatic nerve) và thần kinh bì đùi sau (Posterior femoral cutaneous nerve): Nằm ngay mặt sâu hoặc xuyên qua cơ hình lê (15% biến thể) – BẮT BUỘC quét nhận diện dây thần kinh tọa trước và tuyệt đối không bơm thuốc tê thể tích lớn gây liệt vận động chi dưới tạm thời!",
                "Bó mạch thần kinh mông trên (đi qua bờ trên cơ hình lê) và bó mạch thần kinh mông dưới – bó mạch thẹn trong (đi qua bờ dưới cơ hình lê tại khuyết ngồi lớn) – bật Color Doppler kiểm tra!",
                "Trực tràng và các tạng chậu hông nếu đâm kim quá sâu vào trong lòng khuyết ngồi lớn (không có nền xương đỡ)."
            ],
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_08_02_piriformis_neurovascular.jpg",
                    "figNumber": "8.2",
                    "title": "Giải phẫu cơ hình lê và các bó mạch - thần kinh đi qua khuyết ngồi lớn (Fig. 8.2)",
                    "desc": "Cơ hình lê chia khuyết ngồi lớn làm hai tầng: bó mạch thần kinh mông trên ở trên; thần kinh tọa, mông dưới và thẹn trong đi ra ở bờ dưới.",
                    "springerCaption": "Fig. 8.2 Piriformis muscle and surrounding neurovascular structures in the deep gluteal region."
                },
                {
                    "path": "assets/images/anatomy/fig_08_03_piriformis_variations.jpg",
                    "figNumber": "8.3",
                    "title": "Các biến thể giải phẫu Beaton & Anson giữa cơ hình lê và dây thần kinh tọa (Fig. 8.3)",
                    "desc": "Các dạng biến thể thần kinh tọa đi dưới toàn bộ cơ (phổ biến nhất), tách nhánh xuyên qua bụng cơ hoặc kẹp hai bên cơ hình lê.",
                    "springerCaption": "Fig. 8.3 Anatomical variations of the relationship between the piriformis muscle and the sciatic nerve."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Gai chậu sau trên (Posterior Superior Iliac Spine - PSIS): Hõm lúm đồng tiền vùng thắt lưng cùng phía trên trong mông.",
                "Đỉnh mấu chuyển lớn xương đùi (Greater trochanter - GT) ở phía ngoài.",
                "Ụ ngồi (Ischial tuberosity - IT) ở nếp lằn mông phía dưới trong và góc bên xương cùng – cụt."
            ],
            "referenceLines": "Tam giác định vị cơ hình lê: Nối đường từ PSIS (hoặc bờ ngoài xương cùng S3) chạy chéo xuống dưới – ra ngoài tới bờ trên mấu chuyển lớn; bụng cơ hình lê nằm dọc nửa dưới của đường nối PSIS – mấu chuyển lớn.",
            "palpationSteps": [
                "1. Đặt bệnh nhân nằm sấp (Prone position), có thể kê gối nhỏ dưới khung chậu.",
                "2. Sờ xác định gai chậu sau trên (PSIS) ở góc trên trong mông và đỉnh mấu chuyển lớn (GT) ở mặt ngoài hông.",
                "3. Nhờ người phụ gấp gối bệnh nhân 90 độ rồi lắc cẳng chân sang hai bên (xoay trong – xoay ngoài khớp háng thụ động): vừa giúp sờ thấy vùng cơ hình lê căng giật sâu giữa mông, vừa là nghiệm pháp động cực nhạy trên siêu âm để phân biệt cơ hình lê trượt qua lại dưới cơ mông lớn đứng yên!"
            ],
            "probePlacement": "Phương pháp quét chuẩn Philip Peng: Bước A – Đặt đầu dò Curvilinear 2-5 MHz ngang trên PSIS thấy sườn xương cánh chậu liên tục. Bước B – Trượt đầu dò xuống dưới tới khuyết ngồi lớn (thấy bờ xương cánh chậu ngắt quãng tạo bậc hẫng) rồi xoay đầu ngoài đầu dò chếch xuống hướng về phía mấu chuyển lớn dọc theo trục dài hình quả lê của cơ hình lê.",
            "figures": [
                {
                    "path": "assets/images/ch8_pelvic_muscles/p107_img1.jpeg",
                    "figNumber": "8.6",
                    "title": "Quy trình 2 bước đặt đầu dò bề mặt từ cánh chậu xuống khuyết ngồi lớn tìm cơ hình lê (Fig. 8.6)",
                    "desc": "Đặt đầu dò ở vị trí A (trên cánh chậu) rồi trượt xuống vị trí B (khuyết ngồi lớn xoay về mấu chuyển lớn) để bộc lộ trục dọc cơ hình lê dưới cơ mông lớn.",
                    "springerCaption": "Fig. 8.6 Ultrasound probe positions A and B over the posterior pelvis to localize the piriformis muscle."
                }
            ]
        }
    },

    "obturator-internus": {
        "anatomy": {
            "overview": "Cơ bịt trong (Obturator Internus muscle - OI) có phần bụng trong chậu bám vào màng bịt và khung xương quanh lỗ bịt, sau đó các thớ gân quặt góc vuông 90 độ đi qua khuyết ngồi bé (Lesser sciatic notch – có bao hoạt dịch cơ bịt trong đệm sát ròng rọc xương ngồi ngay dưới gai ngồi) để ra vùng mông sâu. Ở ngoài chậu, gân cơ bịt trong kẹp giữa cơ sinh đôi trên (Superior gemellus - ở bờ trên) và cơ sinh đôi dưới (Inferior gemellus - ở bờ dưới) tạo thành phức hợp tam đầu hông (Triceps coxae) chạy ngang bám vào mặt trong mấu chuyển lớn, nằm ngay mặt sâu của dây thần kinh tọa!",
            "targetStructure": "Gân/cơ bịt trong ngoài chậu (tại mặt sau xương ngồi ngay dưới mức gai ngồi) hoặc bao hoạt dịch cơ bịt trong tại khuyết ngồi bé (luôn giữ mũi kim chạm lên bản xương ngồi làm điểm tựa an toàn).",
            "innervation": "Thần kinh cơ bịt trong (Nerve to obturator internus - L5, S1, S2) đi vòng qua gai ngồi cùng bó mạch thẹn.",
            "vascularAndDangerZones": [
                "Dây thần kinh tọa (Sciatic nerve): Nằm ngay mặt NÔNG (phía sau) vắt ngang qua trên mặt lưng của gân cơ bịt trong – sinh đôi! Bắt buộc nhận diện thần kinh tọa trên siêu âm và đi kim tránh hoàn toàn đường đi của thần kinh tọa.",
                "Bó mạch thẹn trong và thần kinh thẹn (Internal pudendal vessels & Pudendal nerve): Uốn vòng qua đỉnh gai ngồi rồi chui ngay vào khuyết ngồi bé (ống Alcock) ở phía TRONG của cơ bịt trong – không đâm kim lệch vào bờ trong gai ngồi!",
                "Trực tràng nằm sâu trong hố ngồi – trực tràng nếu kim đi vượt quá bờ xương ngồi."
            ],
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_08_11_deep_gluteal_muscles.jpg",
                    "figNumber": "8.11",
                    "title": "Giải phẫu chuỗi cơ xoay ngoài khoang mông sâu: Hình lê, Sinh đôi - Bịt trong và Vuông đùi (Fig. 8.11)",
                    "desc": "Thứ tự từ trên xuống dưới ở khoang mông sâu: Cơ hình lê (1) -> Cơ sinh đôi trên, Cơ bịt trong, Cơ sinh đôi dưới -> Cơ vuông đùi (7), với dây thần kinh tọa chạy dọc phía sau.",
                    "springerCaption": "Fig. 8.11 Deep gluteal space muscles showing piriformis, gemelli-obturator internus complex, quadratus femoris, and sciatic nerve."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Gai chậu sau trên (PSIS) ở phía trên trong.",
                "Ụ ngồi (Ischial tuberosity - IT): Khối xương tù lớn sờ rất rõ ở nếp lằn mông dưới.",
                "Đỉnh mấu chuyển lớn (Greater trochanter - GT) ở phía ngoài."
            ],
            "referenceLines": "Trên trục dọc từ PSIS xuống ụ ngồi: đi qua lần lượt cánh chậu (mức A) -> khuyết ngồi lớn / cơ hình lê (mức B) -> gai ngồi (mức C) -> khuyết ngồi bé / thân xương ngồi ngay trên ụ ngồi (mức D – chính là mức của cơ bịt trong!).",
            "palpationSteps": [
                "1. Bệnh nhân nằm sấp trên bàn thủ thuật, bàn chân thả lỏng tự nhiên hoặc gấp gối 90 độ để người phụ xoay nhẹ khớp háng khi cần kiểm tra chuyển động gân.",
                "2. Dùng ngón cái ấn sâu vào nếp lằn mông để xác định rõ đỉnh ụ ngồi (Ischial tuberosity) ở phía dưới trong và mấu chuyển lớn ở phía ngoài.",
                "3. Từ đỉnh ụ ngồi dịch ngón tay thẳng lên trên khoảng 2 - 3 cm dọc trụ xương ngồi: đây là mức khuyết ngồi bé nơi cơ bịt trong quặt góc đi ra phía mấu chuyển lớn."
            ],
            "probePlacement": "Quét trượt liên tục đầu dò Curvilinear 2-5 MHz từ trên xuống dưới (4 mức A -> B -> C -> D theo Philip Peng): từ gai ngồi (mức C, xương nhọn mảnh) trượt nhẹ xuống 1 - 2 cm tới khuyết ngồi bé (mức D, viền xương ngồi chuyển thành dải phẳng dài liên tục) sẽ thấy dải giảm âm dẹt có gân sáng ở giữa của cơ bịt trong nằm sát mặt xương ngồi dưới thần kinh tọa.",
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_08_08_obturator_probe_levels.jpg",
                    "figNumber": "8.8",
                    "title": "Bốn mức trượt đầu dò bề mặt vùng mông (A–D) định vị chính xác cơ bịt trong tại khuyết ngồi bé (Fig. 8.8)",
                    "desc": "Sơ đồ 4 vị trí đặt đầu dò từ mào chậu (A), khuyết ngồi lớn (B), gai ngồi (C) xuống khuyết ngồi bé (D) để nhận diện viền xương đặc trưng của cơ bịt trong.",
                    "springerCaption": "Fig. 8.8 Four sequential probe positions (A–D) over the posterior pelvis to identify the obturator internus muscle."
                }
            ]
        }
    },

    "quadratus-femoris": {
        "anatomy": {
            "overview": "Cơ vuông đùi (Quadratus Femoris - QF) là cơ phẳng hình chữ nhật nằm thấp nhất trong nhóm 6 cơ xoay ngoài ngắn vùng mông sâu (ngay dưới cơ sinh đôi dưới và ngay trên bờ trên cơ khép lớn Adductor magnus). Cơ nguyên ủy từ bờ ngoài ụ ngồi (Ischial tuberosity) chạy ngang ra ngoài bám vào củ cơ vuông trên mào gian mấu xương đùi (Quadrate tubercle on intertrochanteric crest). Cơ vuông đùi nằm lọt hoàn toàn bên trong 'khoang ngồi – đùi' (Ischiofemoral space – bình thường rộng ~20 mm) kẹp giữa ụ ngồi ở trong và mấu chuyển bé ở ngoài. Phía nông (sau) của QF là dây thần kinh tọa và cơ mông lớn; phía sâu (trước) của QF là gân cơ bịt ngoài và gân thắt lưng chậu.",
            "targetStructure": " Trung tâm bụng cơ vuông đùi (Quadratus femoris muscle belly) nằm bên trong khoang xương giữa bờ ngoài ụ ngồi và mào gian mấu / mấu chuyển bé xương đùi.",
            "innervation": "Thần kinh cơ vuông đùi (Nerve to quadratus femoris - L4, L5, S1) đi vào từ mặt sâu (mặt trước) của cơ vuông đùi đồng thời cho nhánh khớp chi phối bao khớp háng sau.",
            "vascularAndDangerZones": [
                "Dây thần kinh tọa (Sciatic nerve) và thần kinh bì đùi sau: Nằm ngay sát MẶT SAU (mặt nông) của cơ vuông đùi trên ranh giới với cơ mông lớn – BẮT BUỘC đi kim In-plane từ NGOÀI VÀO TRONG (từ phía mấu chuyển xương đùi luồn dưới thần kinh tọa vào bụng cơ QF), tuyệt đối không đâm xuyên qua dây thần kinh tọa!",
                "Nhánh lên của động mạch mũ đùi trong (Medial circumflex femoral artery – nguồn cấp máu sống còn nuôi chỏm xương đùi!) xuất hiện ở bờ trên/mặt sâu cơ vuông đùi – bắt buộc bật Color Doppler kiểm tra trước khi bơm thuốc!"
            ],
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_08_11_deep_gluteal_muscles.jpg",
                    "figNumber": "8.11",
                    "title": "Giải phẫu cơ vuông đùi trong khoang ngồi - đùi và liên quan sát mặt sâu dây thần kinh tọa (Fig. 8.11)",
                    "desc": "Cơ vuông đùi (số 7) căng ngang giữa ụ ngồi và xương đùi, có dây thần kinh tọa chạy dọc đè trực tiếp lên mặt sau của cơ.",
                    "springerCaption": "Fig. 8.11 Anatomy of the quadratus femoris muscle (7) bridging the ischial tuberosity and proximal femur deep to the sciatic nerve."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Ụ ngồi (Ischial tuberosity - IT): Mốc xương trong rõ rệt ngay tại nếp lằn mông.",
                "Bờ sau dưới mấu chuyển lớn và mào gian mấu xương đùi (Greater trochanter & Intertrochanteric crest) ở phía ngoài."
            ],
            "referenceLines": "Đường nối ngang trực tiếp từ bờ ngoài ụ ngồi sang phần dưới mấu chuyển lớn xương đùi (ngang mức hoặc ngay trên nếp lằn mông 1 cm) trùng hoàn toàn với trục dài của cơ vuông đùi và khoang ngồi – đùi.",
            "palpationSteps": [
                "1. Bệnh nhân nằm sấp, bàn chân để trung tính hoặc hơi xoay ngoài nhẹ (làm hẹp nhẹ khoang ngồi – đùi để tái hiện điểm đau chèn ép Ischiofemoral impingement nếu cần khám đối chiếu, sau đó trả về trung tính/xoay trong nhẹ để mở rộng khoang khi tiêm).",
                "2. Dùng ngón cái ấn xác định rõ bờ ngoài của ụ ngồi ở phía trong.",
                "3. Tay kia sờ bờ sau dưới của mấu chuyển lớn xương đùi; ấn sâu vào khoảng hõm chính giữa hai mốc xương này sẽ chạm đúng vị trí khoang ngồi – đùi."
            ],
            "probePlacement": "Đặt đầu dò Curvilinear 2-5 MHz nằm ngang (Transverse plane – song song trục dài cơ vuông đùi) nối bắc cầu giữa ụ ngồi (ở đầu trong màn hình) và mặt sau xương đùi / mấu chuyển bé (ở đầu ngoài màn hình).",
            "figures": [
                {
                    "path": "assets/images/ch8_pelvic_muscles/p114_img1.jpeg",
                    "figNumber": "8.12",
                    "title": "Vị trí đặt đầu dò ngang bắc cầu giữa ụ ngồi và xương đùi khảo sát cơ vuông đùi (Fig. 8.12)",
                    "desc": "Đầu dò đặt ngang mức ụ ngồi - mấu chuyển hiển thị cơ vuông đùi (QF) nằm giữa ụ ngồi (IT) và mào gian mấu (IC), ngay sâu dưới thần kinh tọa.",
                    "springerCaption": "Fig. 8.12 Transverse transducer placement bridging the ischial tuberosity and femur over the quadratus femoris."
                }
            ]
        }
    },

    "lfcn-block": {
        "anatomy": {
            "overview": "Thần kinh bì đùi ngoài (Lateral Femoral Cutaneous Nerve - LFCN) là nhánh cảm giác thuần túy phát sinh từ nhánh trước rễ thắt lưng L2 và L3. Thần kinh lộ ra ở bờ ngoài cơ thắt lưng lớn, chạy chéo qua mặt trước cơ chậu (dưới mạc chậu) hướng về gai chậu trước trên (ASIS), rồi chui qua dưới (hoặc xuyên qua) đầu ngoài dây chằng bẹn ngay sát phía trong ASIS (~1 - 2 cm). Sau khi xuống vùng đùi trên khoảng 3 - 5 cm dưới ASIS, LFCN đi vào một 'rãnh tam giác chứa đầy mỡ' hằng định nằm kẹp giữa cơ may (Sartorius – ở trong) và cơ căng mạc đùi (Tensor fasciae latae - TFL – ở ngoài), ngay dưới lớp mạc đùi rộng (Fascia lata) trước khi chia nhánh trước và nhánh sau chi phối da mặt trước ngoài đùi.",
            "targetStructure": "Khoang rãnh mỡ hình thấu kính/tam giác nằm dưới mạc đùi (Fascia lata) giữa bờ ngoài cơ may (Sartorius) và bờ trong cơ căng mạc đùi (TFL), hoặc đoạn thần kinh vắt qua mặt nông cơ may ngay dưới ASIS.",
            "innervation": "Bản thân LFCN (L2–L3) chi phối cảm giác đơn thuần vùng da mặt ngoài và trước ngoài đùi tới ngang gối (hoàn toàn không có sợi vận động).",
            "vascularAndDangerZones": [
                "Nhánh lên của động mạch mũ đùi ngoài (Ascending branch of lateral circumflex femoral artery) và động mạch mũ chậu sâu (Deep circumflex iliac artery gần ASIS): Cần bật Color Doppler kiểm tra trước khi chọc kim.",
                "Thần kinh đùi (Femoral nerve): Nằm cách xa hơn vào phía trong (~4 - 5 cm trong ASIS): Tránh bơm thể tích thuốc tê quá lớn (> 8 - 10 ml) ngay trên dây chằng bẹn vì thuốc có thể lan theo mặt dưới mạc chậu vào phong bế thần kinh đùi gây yếu cơ tứ đầu đùi!",
                "Các biến thể giải phẫu tại ASIS (~10-20% LFCN đi ngay trên đỉnh ASIS hoặc lệch hẳn ra ngoài ASIS – vì vậy quét tìm LFCN ở rãnh mỡ dưới ASIS 3 - 5 cm rồi lần ngược lên trên theo phương pháp Philip Peng luôn đạt tỷ lệ tìm thấy gần 100%!)."
            ],
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_10_01_lfcn_pathway.jpg",
                    "figNumber": "10.1",
                    "title": "Đường đi giải phẫu điển hình của thần kinh bì đùi ngoài từ chậu hông xuống rãnh cơ may - TFL (Fig. 10.1)",
                    "desc": "LFCN đi chéo trên cơ chậu chui dưới dây chằng bẹn sát ASIS rồi nằm trong rãnh giữa cơ may (Sartorius) và cơ căng mạc đùi (TFL).",
                    "springerCaption": "Fig. 10.1 Pathway of a typical course of the lateral femoral cutaneous nerve relative to iliacus, ASIS, sartorius, and tensor fasciae latae."
                },
                {
                    "path": "assets/images/anatomy/fig_10_02_inguinal_nerves.jpg",
                    "figNumber": "10.2",
                    "title": "Tương quan giải phẫu các dây thần kinh vùng bẹn dưới dây chằng bẹn (Fig. 10.2)",
                    "desc": "Vị trí của LFCN ở sát gai chậu trước trên, cách biệt an toàn với thần kinh đùi và bó mạch đùi nằm ở phía trong.",
                    "springerCaption": "Fig. 10.2 Anatomical relationship of nerves at the inguinal region."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Gai chậu trước trên (Anterior Superior Iliac Spine - ASIS): Mốc xương nhọn sờ rất dễ ở đầu ngoài nếp bẹn.",
                "Dây chằng bẹn (Inguinal ligament): Căng từ ASIS chếch xuống trong tới củ mu.",
                "Rãnh cơ giữa cơ may và cơ căng mạc đùi ở mặt trước trên đùi."
            ],
            "referenceLines": "Điểm xuất chiếu kinh điển tại nếp bẹn: Cách ASIS 1 - 2 cm vào trong và 1 - 2 cm xuống dưới; ĐIỂM VÀNG ĐẶT ĐẦU DÒ (Dynamic distal-to-proximal tracking): Nằm cách ASIS 3 - 5 cm thẳng xuống dưới mặt trước đùi (nơi rãnh mỡ Sartorius – TFL rộng và rõ nhất).",
            "palpationSteps": [
                "1. Bệnh nhân nằm ngửa thẳng trên giường, bộc lộ vùng gai chậu trước trên và 1/3 trên đùi.",
                "2. Dùng ngón cái sờ xác định rõ đỉnh nhô của gai chậu trước trên (ASIS) và đánh dấu.",
                "3. Yêu cầu bệnh nhân hơi gấp – dạng – xoay ngoài nhẹ khớp háng (tư thế 'số 4' nhẹ có cản trở) nếu muốn sờ rõ dải cơ may chạy chéo vào trong và cơ căng mạc đùi ở phía ngoài ngay dưới ASIS."
            ],
            "probePlacement": "Kỹ thuật 'Dynamic Tracking' chuẩn Philip Peng: Đặt đầu dò Linear 10-15 MHz nằm ngang trên đỉnh ASIS, trượt thẳng xuống dưới dọc cơ may khoảng 3 - 5 cm cho tới khi thấy khoang tam giác chứa mỡ tăng âm kẹp giữa cơ may (trong) và TFL (ngoài); tìm cấu trúc mắt bò giảm âm có viền sáng của LFCN trong hố mỡ này rồi quét lần ngược lên sát dây chằng bẹn nơi bị chèn ép.",
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_10_04_lfcn_groove_scan.jpg",
                    "figNumber": "10.4",
                    "title": "Vị trí đặt đầu dò ngang dưới ASIS tại rãnh mỡ giữa cơ may và cơ căng mạc đùi (Fig. 10.4)",
                    "desc": "Đặt đầu dò ngang cách dưới ASIS vài cm ngay trên rãnh mỡ phân cách cơ may (Sar) và cơ căng mạc đùi (TFL) để bắt giữ LFCN dễ dàng nhất.",
                    "springerCaption": "Fig. 10.4 Surface transducer position scanning the fat-filled groove between sartorius and tensor fasciae latae."
                }
            ]
        }
    },

    "tibiotalar-joint": {
        "anatomy": {
            "overview": "Khớp cổ chân trên / Khớp chày – sên (Tibiotalar / Talocrural Joint) là khớp ròng rọc bản lề chịu lực giữa mộng chày – mác (bờ dưới đầu xa xương chày, mắt cá trong và mắt cá ngoài) và ròng rọc xương sên (Talar dome). Ở mặt trước cổ chân, bao khớp chùng rộng bám từ bờ trước xương chày vượt qua ròng rọc tới cổ xương sên (Talar neck), tạo nên ngách hoạt dịch trước cổ chân (Anterior tibiotalar recess) chứa một đệm mỡ nội bao nhỏ. Toàn bộ nhóm gân duỗi cổ bàn chân đi dọc phía trước bao khớp theo thứ tự từ trong ra ngoài ('Tom, Hairy, And Very Nervous, Dick'): Gân chày trước (TA) -> Gân duỗi ngón cái dài (EHL) -> Động mạch chày trước / mu chân (A) + Thần kinh mác sâu (N) -> Gân duỗi chung các ngón (EDL).",
            "targetStructure": "Ngách hoạt dịch mặt trước khớp chày – sên (Anterior tibiotalar recess) nằm ngay trên cổ và vòm sụn xương sên, dưới đệm mỡ trước khớp.",
            "innervation": "Nhánh khớp từ thần kinh mác sâu (Deep peroneal nerve - mặt trước), thần kinh chày (mặt sau) và thần kinh hiển / mác nông.",
            "vascularAndDangerZones": [
                "Động mạch chày trước chuyển tiếp thành động mạch mu chân (Anterior tibial / Dorsalis pedis artery) VÀ Thần kinh mác sâu (Deep peroneal nerve - DPN): Nằm sát màng xương ngay khe giữa gân EHL và gân EDL tại trung tâm mặt trước cổ chân – BẮT BUỘC bật Color Doppler và chọn hành lang kim ở phía TRONG gân chày trước (hoặc giữa TA và EHL) để tránh tuyệt đối bó mạch thần kinh này!",
                "Tĩnh mạch hiển lớn và thần kinh hiển (Saphenous nerve & vein) chạy nông ngay bờ trước mắt cá trong.",
                "Nhánh trong thần kinh mác nông (Superficial peroneal nerve) chạy trong lớp dưới da mặt trước ngoài cổ chân."
            ],
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_24_01_ankle_bones_joints.jpg",
                    "figNumber": "24.1",
                    "title": "Giải phẫu hệ thống xương khớp cổ chân: Khớp chày - sên (a) và Khớp dưới sên (b, c) (Fig. 24.1)",
                    "desc": "Cấu trúc diện khớp chày - sên phía trước (a), nhìn ngoài xoang cổ chân - khớp dưới sên (b) và nhìn trong mỏm chân đế sên (c).",
                    "springerCaption": "Fig. 24.1 Ankle bony and joint anatomy: (a) Anterior view of tibiotalar joint, (b) Lateral view, (c) Medial view."
                },
                {
                    "path": "assets/images/anatomy/fig_24_02_anterior_ankle_dpn_spn.jpg",
                    "figNumber": "24.2",
                    "title": "Giải phẫu các gân duỗi, động mạch mu chân và thần kinh mác sâu mặt trước khớp cổ chân (Fig. 24.2)",
                    "desc": "Liên quan sống còn giữa khe khớp chày - sên với bó mạch chày trước - thần kinh mác sâu (nằm giữa EHL và EDL) và nhánh mác nông phía dưới da.",
                    "springerCaption": "Fig. 24.2 Anterior view of the ankle showing superficial peroneal nerve, deep peroneal nerve, dorsalis pedis artery, and tibiotalar joint."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Mắt cá trong (Medial malleolus) và mắt cá ngoài (Lateral malleolus – thấp hơn và lùi sau hơn mắt cá trong ~1 cm).",
                "Bờ trước trần xương chày (Anterior tibial plafond margin) và hõm cổ xương sên khi gấp – duỗi cổ chân.",
                "Gân cơ chày trước (Tibialis anterior tendon - TA): Dải gân lớn nhất, nổi gồ rõ nhất ở bờ trước trong cổ chân."
            ],
            "referenceLines": "Đường liên mắt cá trước (Intermalleolar line): Đi ngang qua bờ trước khe khớp chày – sên; cửa sổ chọc kim an toàn nhất nằm ngay sát bờ trong (hoặc ngay bờ ngoài) của gân cơ chày trước (TA), tránh vùng giữa EHL – EDL có mạch đập động mạch mu chân.",
            "palpationSteps": [
                "1. Bệnh nhân nằm ngửa, gấp gối 45 - 60 độ với lòng bàn chân đặt phẳng trên mặt giường (tạo tư thế gấp gan chân nhẹ 15 - 20 độ giúp mở rộng ngách bao khớp trước cổ chân).",
                "2. Yêu cầu bệnh nhân gấp mu chân và nghiêng trong bàn chân nhẹ để gân cơ chày trước (TA) và gân duỗi ngón cái dài (EHL) nổi rõ trên da.",
                "3. Bắt mạch đập động mạch chày trước / mu chân ở ngay phía ngoài gân EHL và đánh dấu tránh xa; sau đó sờ khe lõm khớp mềm nằm giữa gân TA và gân EHL (hoặc ngay trong gân TA trước mắt cá trong)."
            ],
            "probePlacement": "Bước 1: Đặt đầu dò Linear cắt ngang mặt trước cổ chân kèm Color Doppler để định vị chính xác động mạch chày trước và thần kinh mác sâu. Bước 2: Xoay đầu dò dọc theo mặt phẳng đứng dọc (Sagittal longitudinal view) ngay khoảng trống giữa gân TA và gân EHL (tránh hẳn bó mạch) để bộc lộ mỏm trước xương chày, vòm sụn đen xương sên và ngách khớp hình tam giác phía trước.",
            "figures": [
                {
                    "path": "assets/images/ch24_ankle_foot/p310_img1.jpeg",
                    "figNumber": "24.13",
                    "title": "Đặt đầu dò dọc mặt trước cổ chân bộc lộ khe khớp chày - sên (Fig. 24.13)",
                    "desc": "Đầu dò đặt dọc mặt trước khớp cổ chân giữa các gân duỗi hiển thị đầu dưới xương chày (Tibia), vòm và cổ xương sên (Talus).",
                    "springerCaption": "Fig. 24.13 Sagittal probe placement and sonoanatomy anterior to the tibiotalar joint."
                }
            ]
        }
    },

    "subtalar-joint": {
        "anatomy": {
            "overview": "Khớp dưới sên / Khớp sên – gót (Subtalar / Talocalcaneal Joint) gồm buồng trước – giữa và buồng khớp dưới sên sau (Posterior subtalar joint – buồng lớn nhất và chịu lực chính, có bao hoạt dịch riêng biệt không thông với buồng trước nhưng thông với khớp cổ chân ở ~10–20% người). Giữa buồng trước và buồng sau là xoang cổ chân (Sinus tarsi) chứa dây chằng sên – gót gian cốt và đệm mỡ giàu thụ thể cảm nhận bản thể. Ở mặt sau ngoài dưới đỉnh mắt cá ngoài, khe khớp dưới sên sau lộ ra giữa mỏm ngoài xương sên (Lateral process of talus) ở trên và diện khớp sau xương gót (Calcaneus) ở dưới, có gân cơ mác dài và mác ngắn vắt chéo ở phía nông.",
            "targetStructure": "Cửa vào mặt trước ngoài hoặc sau ngoài của buồng khớp dưới sên sau (Posterior subtalar joint recess) nằm giữa mỏm ngoài xương sên và xương gót (hoặc xoang cổ chân Sinus tarsi nếu hội chứng xoang cổ chân).",
            "innervation": "Nhánh khớp từ thần kinh hiển ngoài / bắp chân (Sural nerve), thần kinh mác sâu (nhánh vào xoang cổ chân) và nhánh gót của thần kinh chày.",
            "vascularAndDangerZones": [
                "Gân cơ mác ngắn và cơ mác dài (Peroneus brevis & longus tendons): Chạy vòng ngay sau dưới mắt cá ngoài vắt qua mặt ngoài khe khớp dưới sên – BẮT BUỘC nhận diện trên siêu âm để luồn kim tránh đâm xuyên qua gân mác!",
                "Thần kinh bắp chân / hiển ngoài (Sural nerve) và tĩnh mạch hiển bé (Small saphenous vein): Đi dọc phía sau gân cơ mác dưới mắt cá ngoài.",
                "Động mạch ống cổ chân (Artery of the tarsal canal / Sinus tarsi branch): Bật Doppler kiểm tra khi tiêm vùng xoang cổ chân."
            ],
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_24_01_ankle_bones_joints.jpg",
                    "figNumber": "24.1",
                    "title": "Giải phẫu nhìn ngoài và nhìn trong của khớp dưới sên và xoang cổ chân (Fig. 24.1b, c)",
                    "desc": "Hình (b) mặt ngoài cổ chân chỉ rõ vị trí xoang cổ chân (*) và khe khớp dưới sên sau nằm giữa xương sên (Talus) và xương gót (Calcaneus) dưới mắt cá ngoài.",
                    "springerCaption": "Fig. 24.1 (b) Lateral view showing sinus tarsi (*) and posterior subtalar joint between talus and calcaneus."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Đỉnh mắt cá ngoài xương mác (Tip of lateral malleolus): Mốc xương chuẩn nhất mặt ngoài cổ chân.",
                "Xoang cổ chân (Sinus tarsi): Hõm mềm tròn sờ thấy rất rõ cách bờ trước dưới mắt cá ngoài khoảng 1.5 - 2 cm.",
                "Thành ngoài xương gót (Lateral wall of calcaneus) và ròng rọc mác."
            ],
            "referenceLines": "Khe khớp dưới sên lối ngoài (Anterolateral / Lateral subtalar portal): Nằm ngay phía trước – dưới đỉnh mắt cá ngoài khoảng 1 cm (ngay bờ sau trên của hõm xoang cổ chân, phía trước gân cơ mác).",
            "palpationSteps": [
                "1. Đặt bệnh nhân nằm nghiêng sang bên lành (mặt ngoài cổ chân bên đau hướng lên trên), kê một cuộn khăn tròn dưới mặt trong cổ chân để tạo tư thế nghiêng trong bàn chân nhẹ (Inversion – làm mở toác khe khớp dưới sên phía ngoài!).",
                "2. Sờ xác định đỉnh nhọn của mắt cá ngoài.",
                "3. Trượt ngón cái ra trước – xuống dưới đỉnh mắt cá ngoài ~1 - 1.5 cm rơi vào hõm mềm xoang cổ chân; đồng thời lắc nghiêng trong – nghiêng ngoài xương gót thụ động để cảm nhận đường khe khớp sên – gót chuyển động ngay phía trên xương gót, phía trước hai gân cơ mác."
            ],
            "probePlacement": "Phương pháp 2 bước chuẩn Philip Peng: Bước 1 – Đặt đầu dò Linear dọc theo mặt phẳng trán chếch ở hõm xoang cổ chân trước dưới mắt cá ngoài. Bước 2 – Giữ đầu trên đầu dò trên xương sên và trượt/xoay nhẹ về phía đỉnh mắt cá ngoài cho tới khi hố xoang cổ chân rộng khép dần thành khe khớp dưới sên hẹp sắc nét nằm giữa mỏm ngoài xương sên (trên) và xương gót (dưới), có gân cơ mác cắt chéo ở góc dưới.",
            "figures": [
                {
                    "path": "assets/images/ch24_ankle_foot/p312_img1.jpeg",
                    "figNumber": "24.15",
                    "title": "Đặt đầu dò ngay dưới trước mắt cá ngoài bộc lộ khe khớp dưới sên sau (Fig. 24.15)",
                    "desc": "Đầu dò đặt dọc chếch ngay dưới đỉnh mắt cá ngoài hiển thị khe khớp dưới sên giữa xương sên (Talus) và xương gót (Calcaneus) cùng gân cơ mác (*).",
                    "springerCaption": "Fig. 24.15 Probe placement and sonoanatomy of the posterior subtalar joint entrance."
                }
            ]
        }
    },

    "plantar-fascia": {
        "anatomy": {
            "overview": "Cân gan chân (Plantar Fascia / Aponeurosis) là dải cân sợi collagen đa lớp cực dày đóng vai trò thanh giằng cơ học nâng đỡ vòm dọc bàn chân (cơ chế tời Windlass mechanism), gồm 3 dải (trong, giữa và ngoài), trong đó dải trung tâm (Central band) dày và quan trọng nhất (bình thường dày ≤ 4.0 mm). Dải trung tâm nguyên ủy từ củ trong xương gót (Medial calcaneal tuberosity), chạy dọc ra trước chia 5 trẽ tới các ngón chân. Mặt nông (phía da gót) của cân được che chở bởi lớp đệm mỡ gót chân chuyên biệt cấu trúc tổ ong chịu lực (Heel fat pad – dày 1.5 - 2 cm); mặt sâu của cân áp sát vào nhóm cơ nội tại lớp 1 bàn chân (cơ dạng ngón cái, cơ gấp các ngón chân ngắn FDB).",
            "targetStructure": "Mặt phẳng mô lỏng lẻo ngay MẶT NÔNG (Superficial perifascial interface) tại nguyên ủy cân gan chân bám vào củ trong xương gót (nếu tiêm Corticosteroid kháng viêm), hoặc vùng cân dày giảm âm > 4 mm (nếu châm kim PRP tái tạo – tuyệt đối không bơm steroid vào đệm mỡ gót hay lõi cân!).",
            "innervation": "Nhánh gót trong (Medial calcaneal nerve) và thần kinh gan chân đầu tiên / thần kinh Baxter (First branch of lateral plantar nerve – chạy ngay mặt sâu cơ dạng ngón cái và trước củ trong xương gót).",
            "vascularAndDangerZones": [
                "ĐỆM MỠ GÓT CHÂN (Plantar heel fat pad): Tuyệt đối KHÔNG đâm kim xuyên qua lòng gan gót chân và KHÔNG để Corticosteroid trào vào mô đệm mỡ gót – sẽ gây teo đệm mỡ gót không hồi phục khiến bệnh nhân đi bộ như dẫm trực tiếp xương gót xuống đất!",
                "Thần kinh Baxter (Inferior calcaneal nerve) và bó mạch – thần kinh gan chân ngoài / trong đi ở bờ trong gót sâu dưới cơ dạng ngón cái: Cần bật Doppler màu kiểm tra khi tiếp cận từ bờ trong gót chân.",
                "Lõi cân gan chân (Plantar fascia substance): Tránh bơm áp lực steroid vào trong lõi cân gây đứt cân gan chân cấp tính và sập vòm bàn chân."
            ],
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_24_05_medial_tarsal_tunnel.jpg",
                    "figNumber": "24.5",
                    "title": "Giải phẫu mặt trong cổ chân - gót chân, thần kinh chày và nhánh gót - gan chân (Fig. 24.5)",
                    "desc": "Mối liên quan giữa củ xương gót, cân gan chân và các nhánh tận của thần kinh chày (nhánh gót, thần kinh gan chân trong & ngoài) ở bờ trong gót.",
                    "springerCaption": "Fig. 24.5 Medial view of the ankle and heel showing tibial nerve branches in relation to the calcaneus and plantar aspect."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Củ trong xương gót (Medial process of calcaneal tuberosity): Gồ xương chịu lực chính ở phần trước trong dưới gót chân.",
                "Ranh giới da nhẵn – da dày gan chân ở bờ trong gót (Medial glabrous skin junction – đường trắng đỏ phân ranh giữa vùng da mỏng mặt trong cổ chân và lớp da sừng dày dưới lòng gót).",
                "Mắt cá trong (Medial malleolus) ở phía trên."
            ],
            "referenceLines": "Đường thẳng đứng hạ từ bờ sau mắt cá trong thẳng xuống lòng gót chân cắt ngang qua củ trong xương gót; ĐIỂM ĐÂM KIM AN TOÀN nằm ở mặt trong gót chân ngay phía TRÊN ranh giới da dày gan chân (Glabrous skin line) ngang mức bờ trước củ xương gót.",
            "palpationSteps": [
                "1. Đặt bệnh nhân nằm sấp với bàn chân thòng tự nhiên ra khỏi mép cuối bàn khám (hoặc nằm ngửa xoay ngoài chân chữ ngũ).",
                "2. Một tay bác sĩ gấp mu tối đa ngón chân cái và các ngón chân của bệnh nhân (nghiệm pháp tời Windlass) để làm dải cân gan chân căng cứng nổi gồ lên ở gan chân.",
                "3. Tay kia dùng ngón cái ấn sâu vào bờ trước trong của củ xương gót để xác định chính xác điểm bám nguyên ủy đau chói nhất và quan sát đường ranh giới da mỏng – da sừng dày ở mặt trong gót."
            ],
            "probePlacement": "Đặt đầu dò Linear dọc theo trục dài bàn chân (Longitudinal sagittal view) dưới lòng gót hơi lệch trong qua củ trong xương gót để đo bề dày cân (bệnh lý > 4.0 mm); khi chọc kim tiếp cận bờ trong (Medial in-plane approach), có thể xoay đầu dò cắt ngang (Short-axis coronal view) ngay bờ trước củ xương gót để đi kim từ mặt da mỏng bờ trong gót vào mặt nông cân mà không chạm đệm mỡ gót.",
            "figures": [
                {
                    "path": "assets/images/ch24_ankle_foot/p308_img1.jpeg",
                    "figNumber": "24.10",
                    "title": "Giải phẫu siêu âm vùng ống cổ tay trong trên đường thần kinh chày đi xuống gót chân (Fig. 24.10)",
                    "desc": "Kiểm tra đường đi của bó mạch thần kinh chày sau mắt cá trong trước khi tiếp cận bờ trong vùng gót chân.",
                    "springerCaption": "Fig. 24.10 Sonoanatomy of the medial ankle tarsal tunnel structures."
                }
            ]
        }
    },

    "ankle-nerve-blocks": {
        "anatomy": {
            "overview": "Bộ phong bế cổ chân hoàn chỉnh (Comprehensive Ankle Block) chi phối toàn bộ bàn chân phía xa hai mắt cá gồm 5 dây thần kinh ngoại vi (4 nhánh từ thần kinh tọa và 1 nhánh từ thần kinh đùi): (1) Thần kinh chày (Tibial nerve - TN: thần kinh lớn nhất và quan trọng nhất chi phối cảm giác toàn bộ lòng bàn chân, nằm trong ống cổ chân sau mắt cá trong theo thứ tự từ trước ra sau 'Tom, Dick And Very Nervous Harry': Chày sau TP -> Gấp các ngón dài FDL -> Động mạch & Tĩnh mạch chày sau -> Thần kinh chày -> Gấp ngón cái dài FHL); (2) Thần kinh mác sâu (DPN: kẽ ngón I–II và bao khớp cổ chân, đi kèm động mạch chày trước giữa EHL và EDL); (3) Thần kinh mác nông (SPN: toàn bộ mu chân, xuyên mạc cẳng chân ở 1/3 dưới giữa cơ mác và EDL); (4) Thần kinh bắp chân / hiển ngoài (Sural nerve - SuN: bờ ngoài bàn chân, đi cạnh tĩnh mạch hiển bé sau mắt cá ngoài); và (5) Thần kinh hiển (Saphenous nerve - SaN: bờ trong cổ bàn chân, đi cạnh tĩnh mạch hiển lớn trước mắt cá trong).",
            "targetStructure": "Bao cân quanh từng dây thần kinh đích (Perineural fascial plane) của 5 nhánh: TN (sau mắt cá trong), DPN (trước cổ chân cạnh động mạch chày trước), SPN (1/3 dưới ngoài cẳng chân), Sural (rãnh sau mắt cá ngoài – gân Achilles) và Saphenous (trước trên mắt cá trong cạnh tĩnh mạch hiển lớn).",
            "innervation": "Phong bế phối hợp 5 nhánh tạo vô cảm hoàn toàn (100% dermatomal/osteotomal coverage) bàn chân và các ngón chân mà vẫn bảo tồn vận động cổ chân.",
            "vascularAndDangerZones": [
                "Động mạch chày sau (Posterior tibial artery - đi ngay trước thần kinh chày), Động mạch chày trước / mu chân (đi sát thần kinh mác sâu), Tĩnh mạch hiển lớn (đi sát thần kinh hiển) và Tĩnh mạch hiển bé (đi sát thần kinh Sural): Vừa là mốc mạch máu vàng (Vascular landmarks) để tìm thần kinh, vừa bắt buộc KHÔNG garô hay pha Adrenaline nồng độ cao gây thiếu máu hoại tử ngón chân!",
                "Khi tìm tĩnh mạch hiển lớn và tĩnh mạch hiển bé (cho SaN và Sural): Phải đặt đầu dò thật nhẹ tay (Light touch / nhiều gel) vì ấn mạnh sẽ làm xẹp hoàn toàn lòng tĩnh mạch mất mốc tìm thần kinh!",
                "Tuyệt đối tránh tiêm nội thần kinh (Intraneural injection) đặc biệt tại ống cổ chân hẹp."
            ],
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_24_05_medial_tarsal_tunnel.jpg",
                    "figNumber": "24.5",
                    "title": "Giải phẫu ống cổ chân mặt trong (Thần kinh chày) và thiết đồ ngang 5 thần kinh cổ chân (Fig. 24.5)",
                    "desc": "Sơ đồ mặt trong ống cổ chân (TP, FDL, động mạch chày sau, thần kinh chày, FHL) và thiết đồ cắt ngang cổ chân chỉ rõ vị trí cả 5 dây thần kinh.",
                    "springerCaption": "Fig. 24.5 (a) Medial view of tibial nerve in tarsal tunnel. (b) Cross-sectional view of all five nerves around the ankle."
                },
                {
                    "path": "assets/images/anatomy/fig_24_06_lateral_sural_nerve.jpg",
                    "figNumber": "24.6",
                    "title": "Giải phẫu thần kinh bắp chân (Sural nerve) và tĩnh mạch hiển bé mặt ngoài cổ chân (Fig. 24.6)",
                    "desc": "Thần kinh Sural chạy dọc bờ sau gân cơ mác ngắn cùng tĩnh mạch hiển bé trong khoang giữa mắt cá ngoài và gân gót Achilles.",
                    "springerCaption": "Fig. 24.6 (a) Lateral view of sural nerve. (b) Cross-sectional relationship to peroneal tendons and small saphenous vein."
                }
            ]
        },
        "surfaceAnatomy": {
            "bonyLandmarks": [
                "Mắt cá trong (Medial malleolus): Mốc trung tâm cho Thần kinh chày (phía sau) và Thần kinh hiển (phía trước).",
                "Mắt cá ngoài (Lateral malleolus) và bờ ngoài xương mác 1/3 dưới: Mốc cho Thần kinh Sural (phía sau mắt cá ngoài) và Thần kinh mác nông (5 - 10 cm trên mắt cá ngoài).",
                "Gân gót (Achilles tendon) ở phía sau và hai gân EHL – EDL ở mặt trước cổ chân (mốc cho Thần kinh mác sâu)."
            ],
            "referenceLines": "Vòng đai ngang trên hai mắt cá 2 - 3 cm (Supramalleolar ring): Tập hợp đủ 4 điểm quét quanh chu vi cổ chân (Trước mắt cá trong -> Sau mắt cá trong -> Trước giữa cổ chân -> Sau mắt cá ngoài), riêng Thần kinh mác nông (SPN) dễ nhìn nhất khi quét cao hơn mắt cá ngoài 5 - 8 cm trước khi chia nhánh nhỏ.",
            "palpationSteps": [
                "1. Đặt bệnh nhân nằm ngửa, kê gối nâng cẳng chân lên cao nhẹ để có thể xoay trong – xoay ngoài cổ chân tiếp cận đủ cả 4 mặt (trước, trong, ngoài, sau ngoài) mà không cần lật bệnh nhân.",
                "2. Bắt mạch chày sau (sau mắt cá trong) cho Thần kinh chày và mạch chày trước/mu chân (giữa EHL – EDL) cho Thần kinh mác sâu.",
                "3. Có thể buộc dây garô tĩnh mạch nhẹ tạm thời ở bắp chân trên (hoặc để thòng chân 30 giây trước khi nằm) giúp tĩnh mạch hiển lớn (trước mắt cá trong) và tĩnh mạch hiển bé (sau mắt cá ngoài) căng tròn nổi rõ làm mốc dẫn đường cho Thần kinh hiển và Sural!"
            ],
            "probePlacement": "Sử dụng đầu dò Linear tần số cao (10 - 15 MHz) đặt cắt ngang (Transverse short-axis) lần lượt tại 5 trạm: (1) Sau trên mắt cá trong 2 cm (TN); (2) Giữa cổ chân trước ngang khe khớp (DPN); (3) Mặt trước ngoài cẳng chân trên mắt cá ngoài 6 - 8 cm tại rãnh giữa cơ mác và EDL (SPN); (4) Giữa mắt cá ngoài và gân Achilles (Sural); (5) Ngay bờ trước trên mắt cá trong phủ nhiều gel không đè ép (Saphenous).",
            "figures": [
                {
                    "path": "assets/images/anatomy/fig_24_04_saphenous_nerve_ankle.jpg",
                    "figNumber": "24.4",
                    "title": "Giải phẫu bề mặt mặt trước trong cổ chân của thần kinh hiển và tĩnh mạch hiển lớn (Fig. 24.4)",
                    "desc": "Thần kinh hiển đi sát tĩnh mạch hiển lớn ngay bờ trước mắt cá trong trên đường xuống bờ trong bàn chân.",
                    "springerCaption": "Fig. 24.4 Anteromedial surface anatomy of the saphenous nerve and great saphenous vein at the ankle."
                }
            ]
        }
    }
}
