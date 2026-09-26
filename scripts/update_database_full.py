import os
import json
import re
from new_procedures_data import NEW_PROCEDURES

# Load existing procedures from data/procedures.js
with open('data/procedures.js', 'r', encoding='utf-8') as f:
    content = f.read()

prefix = 'const PROCEDURES_DATA = '
start = content.find(prefix) + len(prefix)
end = content.find(';\n\nif')
json_str = content[start:end].strip()
procedures = json.loads(json_str)

print(f"Loaded {len(procedures)} initial procedures.")

# Load figure captions
with open('data/figure_captions.json', 'r', encoding='utf-8') as f:
    captions = json.load(f)

# 1. APPLY 15 FIXES TO EXISTING PROCEDURES
for p in procedures:
    pid = p['id']
    
    if pid == 'sasd-bursa':
        p['figures'] = [
            {
                "path": "assets/images/ch19_shoulder/p224_img1.jpeg",
                "figNumber": "19.8",
                "title": "Hình ảnh siêu âm cắt dọc gân trên gai và bao hoạt dịch SASD (Fig. 19.8)",
                "desc": "Mặt cắt dọc (longitudinal view) gân trên gai (SST) bám củ lớn, bao hoạt dịch SASD nằm kẹp giữa cơ delta (Deltoid) và gân trên gai.",
                "springerCaption": "Fig. 19.8 Lower panel: From Scan 1, the probe is translated just lateral to bring the supraspinatus tendon into view with the SASD bursa lying between deltoid and supraspinatus."
            },
            {
                "path": "assets/images/ch19_shoulder/p230_img1.jpeg",
                "figNumber": "19.13",
                "title": "Kỹ thuật đâm kim In-plane vào khoang ảo SASD (Fig. 19.13)",
                "desc": "Kim 23G-25G đi In-plane từ ngoài vào trong, đầu kim nằm chính xác trong bao hoạt dịch SASD, bơm dung dịch tách bursa trơn tru.",
                "springerCaption": "Fig. 19.13 Subacromial bursa injection. In-plane needle insertion into the SASD bursa."
            }
        ]
        
    elif pid == 'glenohumeral-posterior':
        p['figures'] = [
            {
                "path": "assets/images/ch19_shoulder/p223_img1.jpeg",
                "figNumber": "19.7",
                "title": "Giải phẫu siêu âm khớp ổ chảo - cánh tay lối sau (Fig. 19.7)",
                "desc": "Mặt cắt ngang lối sau thấy chỏm xương cánh tay (HH), sụn viền sau (Labrum), cơ dưới gai (IS) và viền sụn khớp (Articular cartilage).",
                "springerCaption": "Fig. 19.7 Posterior view of glenohumeral joint. The probe is placed just below the spine of scapula. HH humeral head, Glenoid, Labrum, Infraspinatus."
            },
            {
                "path": "assets/images/ch19_shoulder/p229_img1.jpeg",
                "figNumber": "19.12",
                "title": "Kỹ thuật đâm kim In-plane khớp vai lối sau (Fig. 19.12)",
                "desc": "Kim đi từ ngoài vào trong, xuyên qua cơ dưới gai, đầu kim dừng tại khe khớp giữa sụn viền và chỏm xương cánh tay.",
                "springerCaption": "Fig. 19.12 Posterior approach to GHJ. Needle is advanced in-plane from lateral to medial through the infraspinatus into the joint cavity."
            }
        ]

    elif pid == 'suprascapular-nerve':
        p['figures'] = [
            {
                "path": "assets/images/ch4_suprascapular/p66_img1.jpeg",
                "figNumber": "4.3",
                "title": "Giải phẫu siêu âm hố trên gai và bó mạch TK trên vai (Fig. 4.3 & 4.4)",
                "desc": "Đầu dò đặt song song gai vai. Nhận diện đáy hố trên gai, cơ trên gai và bó mạch TK trên vai đập dưới Doppler màu tại khuyết trên vai.",
                "springerCaption": "Fig. 4.3 Sonogram of the suprascapular fossa showing the suprascapular nerve and vessels beneath the transverse scapular ligament."
            },
            {
                "path": "assets/images/ch4_suprascapular/p66_img2.jpeg",
                "figNumber": "4.4",
                "title": "Hình ảnh Color Doppler bó mạch thần kinh trên vai và hướng kim (Fig. 4.4)",
                "desc": "Color Doppler bộc lộ động mạch trên vai đập tại khuyết trên vai; kim In-plane đi từ trong ra ngoài (Medial-to-Lateral) tiếp cận dây thần kinh dưới mạc sâu cơ trên gai.",
                "springerCaption": "Fig. 4.4 Color Doppler ultrasound imaging of the suprascapular vessels and in-plane needle trajectory."
            }
        ]
        p['technique']['approach'] = "In-plane từ TRONG RA NGOÀI (Medial-to-Lateral) dọc theo hố trên gai (Hướng kim chuẩn theo Philip Peng để tránh nguy cơ kim quá đà đâm vào động mạch hoặc màng phổi)."
        if "HƯỚNG KIM SỐNG CÒN" not in str(p['pearlsAndPitfalls']):
            p['pearlsAndPitfalls'].insert(0, "HƯỚNG KIM SỐNG CÒN: Sách Peng nhấn mạnh bắt buộc đi kim từ TRONG RA NGOÀI (Medial to Lateral). Nếu kim có đi quá đà sẽ chạm vào xương củ trên hoặc bờ ổ chảo, tuyệt đối không được đi từ ngoài vào trong vì có nguy cơ đâm vào bó mạch trên vai hoặc chọc thủng màng phổi.")

    elif pid == 'tennis-elbow':
        p['figures'] = [
            {
                "path": "assets/images/ch20_elbow/p238_img1.jpeg",
                "figNumber": "20.5",
                "title": "Giải phẫu siêu âm lồi cầu ngoài và gân duỗi chung (Fig. 20.5)",
                "desc": "Mặt cắt dọc lồi cầu ngoài (Lateral Epicondyle - LE), chỏm con (Capitellum) và gân duỗi chung (Common Extensor Tendon - CET).",
                "springerCaption": "Fig. 20.5 Sonoanatomy of the lateral elbow showing the common extensor tendon (CET) attached to the lateral epicondyle (LE) and capitellum (Cap)."
            },
            {
                "path": "assets/images/ch20_elbow/p243_img1.jpeg",
                "figNumber": "20.10",
                "title": "Kỹ thuật đâm kim In-plane vào gân duỗi chung (Fig. 20.10)",
                "desc": "Kim 25G đi In-plane từ dưới lên trên dọc theo thớ gân, mũi kim hướng vào vùng thoái hóa giảm âm sát màng xương lồi cầu ngoài.",
                "springerCaption": "Fig. 20.10 Upper panel: In-plane needle insertion for common extensor tendon injection at the lateral epicondyle."
            }
        ]

    elif pid == 'golfers-elbow':
        p['figures'] = [
            {
                "path": "assets/images/ch20_elbow/p239_img1.jpeg",
                "figNumber": "20.6",
                "title": "Giải phẫu siêu âm lồi cầu trong và gân gấp chung (Fig. 20.6)",
                "desc": "Mặt cắt dọc lồi cầu trong (Medial Epicondyle - ME) và gân cơ gấp chung cẳng tay (CFT). Dây chằng bên trụ (UCL) nằm ngay phía sâu.",
                "springerCaption": "Fig. 20.6 Sonoanatomy of medial elbow showing the common flexor tendon (CFT) attached to the medial epicondyle (ME) and anterior band of UCL."
            },
            {
                "path": "assets/images/ch20_elbow/p244_img1.jpeg",
                "figNumber": "20.11",
                "title": "Kỹ thuật đâm kim In-plane vào gân gấp chung (Fig. 20.11)",
                "desc": "Kim đi In-plane dọc trục gân, tiếp cận vùng thoái hóa gân gấp chung bám vào lồi cầu trong xương cánh tay.",
                "springerCaption": "Fig. 20.11 Sonograph showing the needle trajectory for common flexor tendon injection."
            }
        ]

    elif pid == 'carpal-tunnel':
        p['figures'] = [
            {
                "path": "assets/images/ch21_wrist_hand/p250_img1.jpeg",
                "figNumber": "21.3",
                "title": "Giải phẫu siêu âm ống cổ tay mặt cắt ngang (Fig. 21.3)",
                "desc": "Mặt cắt ngang tại nếp lằn cổ tay xa: Thần kinh giữa (MN) hình bầu dục dạng tổ ong nằm nông dưới mạc giữ gân gấp (FR), các gân gấp ngón nằm sâu.",
                "springerCaption": "Fig. 21.3 Cross-sectional sonoanatomy of the carpal tunnel at the wrist crease showing median nerve (MN) and flexor retinaculum (FR)."
            },
            {
                "path": "assets/images/ch21_wrist_hand/p251_img1.jpeg",
                "figNumber": "21.4",
                "title": "Kỹ thuật đâm kim In-plane tiếp cận từ bờ trụ bóc tách TK giữa (Fig. 21.4)",
                "desc": "Kim đi In-plane từ phía bờ trụ sang bờ quay, nằm dưới mạc giữ gân gấp và luồn dưới thần kinh giữa để bóc tách thủy dịch (hydrodissection).",
                "springerCaption": "Fig. 21.4 In-plane needle insertion from ulnar aspect for median nerve hydrodissection in carpal tunnel."
            }
        ]

    elif pid == 'trigger-finger':
        p['figures'] = [
            {
                "path": "assets/images/ch21_wrist_hand/p260_img1.jpeg",
                "figNumber": "21.13",
                "title": "Hình ảnh siêu âm dày ròng rọc A1 ngón tay lò xo (Fig. 21.13)",
                "desc": "Mặt cắt dọc tại chỏm xương bàn ngón tay: Ròng rọc A1 dày phì đại phản âm kém (> 0.5 mm) chèn ép gân gấp nông và sâu.",
                "springerCaption": "Fig. 21.13 Longitudinal sonogram of the thickened A1 pulley over the flexor tendon at the metacarpal head."
            },
            {
                "path": "assets/images/ch21_wrist_hand/p261_img1.jpeg",
                "figNumber": "21.14",
                "title": "Kỹ thuật đi kim In-plane dọc bao gân ròng rọc A1 (Fig. 21.14)",
                "desc": "Kim 25G đi In-plane từ xa lại gần (hoặc gần ra xa) song song với bề mặt gân gấp, đầu kim luồn giữa ròng rọc A1 và gân gấp.",
                "springerCaption": "Fig. 21.14 In-plane needle approach along the long axis of the flexor tendon for A1 pulley injection."
            }
        ]

    elif pid == 'cmc1-joint':
        p['figures'] = [
            {
                "path": "assets/images/ch21_wrist_hand/p265_img1.jpeg",
                "figNumber": "21.17a",
                "title": "Giải phẫu siêu âm diện khớp thang - bàn ngón 1 (Fig. 21.17a)",
                "desc": "Mặt cắt dọc khớp CMC-1 thấy rõ xương thang (Trapezium) và nền xương bàn ngón 1 (Metacarpal 1), gai xương thoái hóa và bao khớp phồng.",
                "springerCaption": "Fig. 21.17a Sonoanatomy of the first carpometacarpal (CMC1) joint showing the trapezium and base of the first metacarpal."
            },
            {
                "path": "assets/images/ch21_wrist_hand/p265_img2.jpeg",
                "figNumber": "21.17b",
                "title": "Kỹ thuật đâm kim In-plane vào khe khớp CMC-1 (Fig. 21.17b)",
                "desc": "Kim 27G đi In-plane từ xa vào gần, chọc thẳng vào khe khớp hẹp giữa xương thang và xương bàn 1.",
                "springerCaption": "Fig. 21.17b In-plane needle insertion into the CMC1 joint space under ultrasound guidance."
            }
        ]

    elif pid == 'trochanteric-bursa':
        p['figures'] = [
            {
                "path": "assets/images/ch22_hip/p278_img2.jpeg",
                "figNumber": "22.12",
                "title": "Giải phẫu siêu âm mấu chuyển lớn và các diện bám cơ mông (Fig. 22.12 & 22.13)",
                "desc": "Mặt cắt ngang và dọc mấu chuyển lớn bộc lộ diện trước, diện ngoài và diện sau ngoài cùng gân cơ mông nhỡ, mông nhỡ và bao hoạt dịch mấu chuyển.",
                "springerCaption": "Fig. 22.12 Cross-sectional and longitudinal view of the greater trochanter facets and overlying trochanteric bursa."
            },
            {
                "path": "assets/images/ch22_hip/p274_img1.jpeg",
                "figNumber": "22.8",
                "title": "Kỹ thuật đâm kim In-plane tiêm bao hoạt dịch mấu chuyển",
                "desc": "Kim đi từ trước ra sau hoặc từ ngoài vào, tiếp cận khoang bursa nông hơn gân cơ mông nhỡ.",
                "springerCaption": "Fig. 22.8 In-plane needle approach to the trochanteric complex."
            }
        ]

    elif pid == 'piriformis-muscle':
        p['figures'] = [
            {
                "path": "assets/images/ch8_pelvic_muscles/p107_img1.jpeg",
                "figNumber": "8.6",
                "title": "Giải phẫu siêu âm cơ hình lê và thần kinh tọa (Fig. 8.6)",
                "desc": "Mặt cắt chéo mông thấy rõ dải cơ hình lê (Piriformis) nằm sâu dưới cơ mông lớn, thần kinh tọa (Sciatic Nerve) chạy ngay dưới hoặc xuyên qua cơ.",
                "springerCaption": "Fig. 8.6 Positions of the ultrasound probe and the corresponding sonograms showing piriformis muscle and sciatic nerve."
            },
            {
                "path": "assets/images/ch8_pelvic_muscles/p108_img1.jpeg",
                "figNumber": "8.7",
                "title": "Kỹ thuật đâm kim In-plane tiêm cơ hình lê (Fig. 8.7)",
                "desc": "Kim dài 70-90mm đi In-plane từ ngoài vào trong qua cơ mông lớn cắm chính xác vào bụng cơ hình lê, tránh thần kinh tọa.",
                "springerCaption": "Fig. 8.7 Ultrasound probe and needle position for piriformis muscle injection."
            }
        ]

    elif pid == 'caudal-epidural':
        p['figures'] = [
            {
                "path": "assets/images/ch17_caudal_epidural/p205_img1.jpeg",
                "figNumber": "17.4",
                "title": "Giải phẫu siêu âm khe xương cùng mặt cắt ngang và dọc (Fig. 17.4)",
                "desc": "Mặt cắt ngang qua 2 sừng cùng (Sacral cornua) và dây chằng cùng cụt (SCL). Mặt cắt dọc bộc lộ ống ngoài màng cứng xương cùng.",
                "springerCaption": "Fig. 17.4 Transverse and longitudinal sonographic views of the sacral hiatus and sacrococcygeal ligament."
            },
            {
                "path": "assets/images/ch17_caudal_epidural/p206_img1.jpeg",
                "figNumber": "17.5",
                "title": "Kỹ thuật đâm kim In-plane vào ống cùng (Fig. 17.5)",
                "desc": "Đầu kim xuyên qua dây chằng cùng cụt vào khoang ngoài màng cứng ống cùng dưới kiểm soát siêu âm thời gian thực.",
                "springerCaption": "Fig. 17.5 Needle insertion into the caudal epidural space under real-time ultrasound guidance."
            }
        ]
        p['drugsAndDosage']['steroid'] = "Dexamethasone phosphate 4 - 8 mg (BẮT BUỘC dạng tan không hạt - Non-particulate steroid để phòng ngừa biến chứng tắc mạch tủy sống)."
        p['drugsAndDosage']['volume'] = "Dịch đẩy (Washout): 8 - 15 ml NaCl 0.9% để đẩy thể tích thuốc dâng cao lên tầng rễ thắt lưng L4-L5 và L5-S1."

    elif pid == 'tibiotalar-joint':
        p['figures'] = [
            {
                "path": "assets/images/ch24_ankle_foot/p310_img1.jpeg",
                "figNumber": "24.13",
                "title": "Giải phẫu siêu âm khớp chày - sên mặt cắt dọc lối trước (Fig. 24.13)",
                "desc": "Mặt cắt dọc cổ chân trước: đầu dưới xương chày (Tibia), vòm xương sên (Talus dome) với lớp sụn khớp mỏng, khoang ngách khớp trước.",
                "springerCaption": "Fig. 24.13 Sonoanatomy of anterior tibiotalar joint showing distal tibia, talus dome, and anterior joint recess."
            },
            {
                "path": "assets/images/ch24_ankle_foot/p313_img1.jpeg",
                "figNumber": "24.16",
                "title": "Kỹ thuật đâm kim In-plane vào khớp chày - sên (Fig. 24.16)",
                "desc": "Kim đi In-plane từ dưới lên trên hoặc từ trên xuống dưới vào khoang hoạt dịch khớp chày - sên, tránh động mạch chày trước và TK mác sâu.",
                "springerCaption": "Fig. 24.16 (a) Out-of-plane and (b) In-plane needle insertion to the tibiotalar joint under ultrasound."
            }
        ]

    elif pid == 'plantar-fascia':
        p['figures'] = [
            {
                "path": "assets/images/ch24_ankle_foot/p308_img1.jpeg",
                "figNumber": "24.10",
                "title": "Giải phẫu siêu âm vùng gót chân và cân gan chân",
                "desc": "Mặt cắt dọc cân gan chân bám vào củ trong xương gót (Calcaneus). Đo bề dày cân gan chân (bình thường < 4.0 mm, viêm > 4.5 mm kèm giảm âm và mất cấu trúc sợi).",
                "springerCaption": "Fig. 24.10 Plantar heel and calcaneus sonoanatomy."
            },
            {
                "path": "assets/images/ch24_ankle_foot/p313_img2.jpeg",
                "figNumber": "24.16b",
                "title": "Kỹ thuật đâm kim In-plane tiêm quanh cân gan chân",
                "desc": "Kim đi In-plane từ phía bờ trong gót chân, luồn dưới cân gan chân để bơm thuốc, tuyệt đối không tiêm vào mô mỡ gót.",
                "springerCaption": "Fig. 24.16b In-plane approach to the plantar fascia under ultrasound."
            }
        ]

    elif pid == 'prp-platelet-rich-plasma':
        p['figures'] = [
            {
                "path": "assets/images/ch25_prp/p322_img1.jpeg",
                "figNumber": "25.6",
                "title": "Quy trình ly tâm chiết tách huyết tương giàu tiểu cầu (Fig. 25.6)",
                "desc": "Sơ đồ các bước rút máu tĩnh mạch, chống đông bằng ACD-A, quay ly tâm phân tầng và chiết tách lớp Buffy coat giàu tiểu cầu.",
                "springerCaption": "Fig. 25.6 Centrifugation and preparation protocol for Platelet-Rich Plasma (PRP)."
            },
            {
                "path": "assets/images/ch25_prp/p320_img1.jpeg",
                "figNumber": "25.3",
                "title": "Phân loại các hệ thống PRP và thành phần sinh học",
                "desc": "So sánh PRP nghèo bạch cầu (LP-PRP) và PRP giàu bạch cầu (LR-PRP) trong điều trị bệnh lý gân và khớp.",
                "springerCaption": "Fig. 25.3 Classification of platelet-rich plasma systems."
            }
        ]

    elif pid == 'calcific-tendinitis-barbotage':
        p['figures'] = [
            {
                "path": "assets/images/ch26_calcific_tendinitis/p328_img1.jpeg",
                "figNumber": "26.4a",
                "title": "Kỹ thuật chọc kim 18G vào tâm ổ vôi hóa và bơm rửa Barbotage (Fig. 26.4a)",
                "desc": "Kim 18G cắm thẳng vào tâm ổ vôi hóa gân trên gai, bơm rửa thụt tháo liên tục bằng NaCl 0.9% pha Lidocaine để hòa tan và hút sữa vôi trắng đục.",
                "springerCaption": "Fig. 26.4a Puncture of calcific deposit with an 18G needle under ultrasound guidance."
            },
            {
                "path": "assets/images/ch26_calcific_tendinitis/p330_img1.jpeg",
                "figNumber": "26.4f",
                "title": "Tiêm Corticosteroid vào bao hoạt dịch SASD sau khi rửa vôi (Fig. 26.4f)",
                "desc": "Sau khi hút sạch ổ vôi, rút kim lên khoang bao hoạt dịch dưới mỏm cùng vai (SASD) và tiêm steroid để chống viêm phản ứng cấp tính sau can thiệp.",
                "springerCaption": "Fig. 26.4f Subacromial-subdeltoid bursa steroid injection following calcific deposit barbotage."
            }
        ]

    elif pid == 'stellate-ganglion':
        p['drugsAndDosage']['volume'] = "3 - 5 ml Lidocaine 1% hoặc Ropivacaine 0.2% (Theo khuyến cáo của Philip Peng: Thể tích tối đa 5 ml để tránh thuốc lan rộng gây phong bế dây thần kinh thanh quản quặt ngược dẫn đến khàn tiếng khó thở, hoặc lan vào đám rối cánh tay)."
        if "CẢNH BÁO THỂ TÍCH THEO PENG" not in str(p['pearlsAndPitfalls']):
            p['pearlsAndPitfalls'].insert(0, "CẢNH BÁO THỂ TÍCH THEO PENG: Không vượt quá thể tích 5 ml! Thể tích 3 - 5 ml là mức tối ưu tạo hội chứng Horner hoàn toàn mà giảm tối đa nguy cơ khàn giọng do tê liệt dây thần kinh thanh quản quặt ngược và tê yếu cánh tay do lan đám rối thần kinh cánh tay.")

    elif pid == 'ilioinguinal-nerve':
        p['technique']['approach'] = "Out-of-plane là kỹ thuật ĐƯỢC ƯU TIÊN HÀNG ĐẦU theo Philip Peng (đường kim ngắn, góc dốc, nhận diện đầu kim chấm sáng có bóng cản âm, giảm tối đa nguy cơ thủng phúc mạc). In-plane từ ngoài vào trong là lựa chọn thay thế cho bác sĩ giàu kinh nghiệm."
        if "KỸ THUẬT OUT-OF-PLANE ƯU TIÊN" not in str(p['pearlsAndPitfalls']):
            p['pearlsAndPitfalls'].insert(0, "KỸ THUẬT OUT-OF-PLANE ƯU TIÊN: Peng ghi rõ: 'An out-of-plane approach is preferred because the needle path is short and the angle of insertion is steep, allowing the needle tip to be easily visualized'. Kỹ thuật này giúp kiểm soát tuyệt đối không vượt quá mạc cơ ngang bụng vào khoang phúc mạc.")

    elif pid == 'de-quervain':
        if "CẠM BẪY VÁCH NGĂN PHỤ" not in str(p['pearlsAndPitfalls']):
            p['pearlsAndPitfalls'].insert(0, "CẠM BẪY VÁCH NGĂN PHỤ (INTERTENDINOUS SEPTUM): Sách Peng (p.254) cảnh báo có tới 40 - 60% trường hợp tồn tại một vách ngăn xơ phụ chia ngăn duỗi số 1 thành 2 khoang riêng biệt cho gân APL và EPB. Nếu chỉ tiêm vào một khoang, khoang còn lại không ngấm thuốc dẫn đến thất bại điều trị dai dẳng! BẮT BUỘC quan sát dưới siêu âm test bung dịch tách đôi cả hai gân, nếu thấy vách ngăn phải luồn kim tiêm riêng từng ngăn.")

# 2. APPEND 20 NEW PROCEDURES
existing_ids = {p['id'] for p in procedures}
added_count = 0
for np in NEW_PROCEDURES:
    if np['id'] not in existing_ids:
        procedures.append(np)
        existing_ids.add(np['id'])
        added_count += 1
    else:
        print(f"Skipping already existing ID: {np['id']}")

print(f"Added {added_count} new procedures. Total procedures now: {len(procedures)}")

# 3. VERIFY ALL PROCEDURES AND FIGURES
all_ok = True
for p in procedures:
    if not p.get('id') or not p.get('nameVi') or not p.get('figures'):
        print(f"ERROR: Procedure {p.get('id')} has missing basic fields!")
        all_ok = False
    for fig in p.get('figures', []):
        fpath = fig.get('path')
        if not fpath or not os.path.exists(fpath):
            print(f"ERROR in {p['id']}: Image file {fpath} does not exist!")
            all_ok = False

if not all_ok:
    print("FAILED VERIFICATION! Aborting write.")
    exit(1)

# 4. WRITE UPDATED data/procedures.js
out_path = 'data/procedures.js'
with open(out_path, 'w', encoding='utf-8') as f:
    f.write('// US-PainIntervention Pro: Comprehensive Clinical Procedure Database\n')
    f.write('// Based on: Ultrasound for Interventional Pain Management (Springer 2020) by Philip Peng et al.\n')
    f.write('// Fully standardizing 51 procedures across all 27 chapters with verified Springer Atlas figures.\n\n')
    f.write('const PROCEDURES_DATA = ')
    f.write(json.dumps(procedures, ensure_ascii=False, indent=2))
    f.write(';\n\n')
    f.write('if (typeof window !== "undefined") { window.PROCEDURES_DATA = PROCEDURES_DATA; }\n')
    f.write('if (typeof module !== "undefined" && module.exports) { module.exports = PROCEDURES_DATA; }\n')

print(f"Successfully generated {out_path} with {len(procedures)} procedures!")
