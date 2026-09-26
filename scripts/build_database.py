import os
import json

# Full clinical procedures database with exact, verified image paths and deep clinical details.

procedures = [
  # -------------------------------------------------------------
  # CHI TRÊN - KHỚP VAI
  # -------------------------------------------------------------
  {
    "id": "sasd-bursa",
    "nameVi": "Tiêm bao hoạt dịch dưới mỏm cùng vai - dưới cơ delta (SASD)",
    "nameEn": "Subacromial-Subdeltoid Bursa Injection (SASD)",
    "category": "upper",
    "subcategory": "shoulder",
    "type": "bursa",
    "difficulty": "Cơ bản",
    "icd10": "M75.5 (Viêm bao hoạt dịch khớp vai), M75.1 (Hội chứng chóp xoay), M75.4 (Hội chứng chạm mỏm cùng vai)",
    "indications": [
      "Hội chứng chạm mỏm cùng vai (Subacromial Impingement Syndrome).",
      "Viêm bao hoạt dịch dưới mỏm cùng vai - dưới cơ delta mạn tính hoặc bán cấp.",
      "Viêm gân chóp xoay (đặc biệt gân trên gai) có dày dính hoặc tràn dịch bao hoạt dịch kèm theo.",
      "Hỗ trợ giảm đau phục hồi vận động khớp vai sau rách bán phần gân chóp xoay không có chỉ định phẫu thuật."
    ],
    "contraindications": {
      "absolute": [
        "Nhiễm khuẩn tại chỗ vùng vai hoặc viêm khớp vai nhiễm khuẩn mủ.",
        "Nhiễm khuẩn huyết toàn thân.",
        "Tiền sử dị ứng nặng hoặc phản vệ với thuốc tiêm (Corticosteroid, Thuốc tê)."
      ],
      "relative": [
        "Rách hoàn toàn gân chóp xoay chuẩn bị phẫu thuật khâu gân (tránh tiêm steroid làm yếu gân trước mổ).",
        "Đái tháo đường kiểm soát kém (HbA1c > 8.0% - nguy cơ bùng phát tăng đường huyết sau tiêm).",
        "Rối loạn đông máu nặng (INR > 2.0 hoặc tiểu cầu < 50 G/L)."
      ]
    },
    "patientPosition": "Bệnh nhân ngồi thẳng trên ghế xoay hoặc nằm ngửa, cánh tay để xuôi tự nhiên bên thân, cẳng tay gập 90 độ, hơi xoay trong hoặc đưa tay ra sau mông (tư thế Crass hoặc Modified Crass) để bộc lộ rõ gân trên gai.",
    "transducer": "Đầu dò Linear dải tần cao 10 - 15 MHz. Cài đặt chế độ MSK, độ sâu khoảng 2.5 - 3.5 cm, tiêu cự (focus) đặt ngay mức bao hoạt dịch (1.5 - 2 cm).",
    "sonoanatomy": [
      "Lớp nông: Da và mô mỡ dưới da (tăng âm).",
      "Cơ delta (Deltoid muscle): Phản âm kém với các dải sợi cân mạc tăng âm xen kẽ.",
      "Khoang bao hoạt dịch SASD: Bình thường là dải mỏng phản âm kém (dưới 1.5 - 2.0 mm) kẹp giữa mạc sâu cơ delta và bề mặt gân trên gai.",
      "Gân trên gai (Supraspinatus tendon): Dải hình mỏ chim tăng âm đồng nhất bám vào củ lớn xương cánh tay.",
      "Bờ vỏ xương củ lớn cánh tay (Greater tuberosity): Đường cong tăng âm sắc nét có bóng cản âm phía sau."
    ],
    "technique": {
      "approach": "In-plane (dọc theo trục đầu dò) từ phía ngoài vào trong (Lateral to Medial).",
      "needle": "Kim 23G - 25G, chiều dài 38 mm (1.5 inch).",
      "steps": [
        "1. Đặt đầu dò dọc theo mặt phẳng trán (coronal plane) hoặc chéo trán ngay dưới mỏm cùng vai phía ngoài.",
        "2. Xác định rõ khoang ảo SASD nằm giữa mặt sâu cơ delta và bề mặt gân trên gai.",
        "3. Bật Doppler màu để kiểm tra và loại trừ nhánh mạch máu nuôi chóp xoay.",
        "4. Sát khuẩn vùng da rộng 3 lần bằng Povidone Iodine 10% hoặc Chlorhexidine 2%.",
        "5. Gây tê nông tại chỗ bằng Lidocaine 1% (0.5 - 1 ml).",
        "6. Đâm kim In-plane từ ngoài vào trong với góc nghiêng khoảng 30 - 45 độ so với mặt da.",
        "7. Theo dõi toàn bộ thân và đầu kim tiến vào khoang bursa.",
        "8. Test hút (Aspiration test) âm tính. Bơm thử một giọt dung dịch (0.2 ml): bao hoạt dịch phải phồng tách nhẹ nhàng (hydrodissection) mà không có lực cản. Nếu thấy gân căng phồng hoặc nặng tay -> Lập tức dừng lại vì đầu kim đang nằm trong gân!"
      ]
    },
    "drugsAndDosage": {
      "steroid": "Triamcinolone acetonide 20 - 40 mg (0.5 - 1.0 ml) HOẶC Methylprednisolone acetate (Depo-Medrol) 40 mg (1.0 ml) HOẶC Betamethasone (Diprospan) 1 ml.",
      "localAnesthetic": "Lidocaine 1% hoặc 2% không pha Adrenaline: 2 - 3 ml (Tổng thể tích bơm vào khoang bursa: 3 - 4 ml).",
      "alternative": "Huyết tương giàu tiểu cầu (PRP) 2 - 3 ml hoặc Acid Hyaluronic (HA) trọng lượng phân tử trung bình trong trường hợp thoái hóa gân mạn tính không dùng steroid."
    },
    "pearlsAndPitfalls": [
      "NGUY CƠ ĐỨT GÂN: Tuyệt đối không tiêm corticoid trực tiếp vào chất gân trên gai (intratendinous injection). Quan sát liên tục thấy dịch bursa bóc tách 2 mép khoang.",
      "Mẹo cải thiện hiển thị kim: Nghiêng nhẹ góc đầu dò (heel-toe) để chùm sóng siêu âm vuông góc nhất với trục thân kim.",
      "Không tiêm quá 3 lần/năm vào cùng một vị trí khoang SASD; khoảng cách giữa 2 lần tiêm tối thiểu 6 - 8 tuần."
    ],
    "postProcedure": "Băng ép vô khuẩn tại chỗ. Yêu cầu bệnh nhân không mang vác nặng trong 48 - 72 giờ. Cảnh báo phản ứng bùng phát đau sau tiêm (post-injection steroid flare) trong 24 giờ đầu có thể chườm mát và dùng Paracetamol.",
    "figures": [
      {
        "path": "assets/images/ch19_shoulder/p223_img1.jpeg",
        "title": "Giải phẫu siêu âm bao hoạt dịch SASD và gân trên gai",
        "desc": "Hình siêu âm cắt dọc gân trên gai (SST) bám củ lớn xương cánh tay (GT). Khoang bursa SASD kẹp giữa cơ delta và gân trên gai."
      },
      {
        "path": "assets/images/ch19_shoulder/p224_img1.jpeg",
        "title": "Tư thế đặt đầu dò và kỹ thuật đi kim tiêm SASD",
        "desc": "Đầu dò đặt dưới mỏm cùng vai ngoài, kim đi in-plane từ ngoài vào trong luồn chính xác vào khoang bao hoạt dịch."
      }
    ]
  },
  {
    "id": "glenohumeral-posterior",
    "nameVi": "Tiêm khớp ổ chảo - cánh tay (Tiếp cận lối sau)",
    "nameEn": "Glenohumeral Joint Injection (Posterior Approach)",
    "category": "upper",
    "subcategory": "shoulder",
    "type": "joint",
    "difficulty": "Trung bình",
    "icd10": "M19.01 (Thoái hóa khớp ổ chảo cánh tay), M75.0 (Đông cứng khớp vai / Viêm co rút bao khớp vai), M05.81 (Viêm khớp dạng thấp ở vai)",
    "indications": [
      "Thoái hóa khớp ổ chảo - cánh tay nguyên phát hoặc thứ phát gây đau và hạn chế tầm vận động.",
      "Đông cứng khớp vai (Frozen shoulder / Adhesive Capsulitis) - phối hợp nong khớp thủy dịch (hydrodilatation).",
      "Viêm khớp dạng thấp hoặc viêm khớp vi tinh thể tại khớp vai.",
      "Chụp cộng hưởng từ khớp vai có tiêm thuốc cản từ (MR Arthrogram)."
    ],
    "contraindications": {
      "absolute": [
        "Viêm khớp vai nhiễm khuẩn cấp tính.",
        "Viêm da, chốc lở hoặc ổ nhiễm trùng mô mềm vùng vai sau.",
        "Tiền sử dị ứng nặng với thuốc tiêm."
      ],
      "relative": [
        "Rối loạn đông máu nặng (INR > 2.0).",
        "Rách sụn viền sau hoặc nang sụn viền lớn có chèn ép thần kinh trên vai chưa đánh giá kỹ."
      ]
    },
    "patientPosition": "Bệnh nhân ngồi quay lưng lại phía bác sĩ hoặc nằm nghiêng sang bên lành. Tay bên tổn thương đặt bàn tay lên vai đối diện (khép nhẹ và xoay trong xương cánh tay) để mở rộng khoang khớp phía sau.",
    "transducer": "Đầu dò Linear 10-12 MHz (người gầy) hoặc Curvilinear (Convex) 3-5 MHz (người cơ bắp dày). Độ sâu 4 - 6 cm.",
    "sonoanatomy": [
      "Chỏm xương cánh tay (Humeral head): Đường cong tăng âm tròn đều phía ngoài.",
      "Gờ xương ổ chảo (Glenoid rim): Mốc xương tăng âm phía trong.",
      "Sụn viền sau (Posterior labrum): Cấu trúc hình tam giác tăng âm tựa trên bờ ổ chảo.",
      "Sụn khớp chỏm cánh tay: Lớp viền giảm âm mỏng ôm lấy chỏm xương.",
      "Cơ dưới gai (Infraspinatus muscle) và gân cơ dưới gai phủ phía sau khoang khớp."
    ],
    "technique": {
      "approach": "In-plane từ ngoài vào trong (Lateral to Medial).",
      "needle": "Kim 21G - 22G, dài 50 - 70 mm (kim tủy sống chọc dò Spinal Needle ở người dày mình).",
      "steps": [
        "1. Đặt đầu dò ngang trục ngay dưới gai vai ở góc sau ngoài của khớp vai.",
        "2. Quét đầu dò vào trong - ra ngoài để đồng thời nhìn thấy chỏm xương cánh tay và bờ sau ổ chảo cùng sụn viền.",
        "3. Bật Doppler màu để kiểm tra động mạch trên vai và bó mạch mũ cánh tay sau.",
        "4. Sát trùng diện rộng vùng vai sau.",
        "5. Gây tê tại chỗ từ da đến bao khớp bằng Lidocaine 1%.",
        "6. Đâm kim In-plane từ phía ngoài, hướng mũi kim chếch về phía sụn viền ổ chảo.",
        "7. Mục tiêu mũi kim: Nằm giữa lớp sụn khớp chỏm xương cánh tay và sụn viền sau (Target: Ngách sau bao khớp ổ chảo cánh tay).",
        "8. Hút thử không có máu, bơm chậm 1 ml dịch thấy bao khớp giãn phồng tách khỏi chỏm cánh tay."
      ]
    },
    "drugsAndDosage": {
      "steroid": "Triamcinolone acetonide 40 mg (1.0 ml) hoặc Methylprednisolone 40 mg.",
      "localAnesthetic": "Lidocaine 1% hoặc Ropivacaine 0.2%: 3 - 5 ml.",
      "hydrodilatation": "Nếu nong khớp đông cứng (Frozen shoulder): Pha Triamcinolone 40mg + Lidocaine 1% (4ml) + Nước muối sinh lý NaCl 0.9% (10 - 20 ml) bơm áp lực ngắt quãng đến khi bao khớp giãn đạt thể tích 15-25 ml hoặc vỡ bao khớp có kiểm soát.",
      "viscosupplementation": "Acid Hyaluronic 2 - 3 ml (cho thoái hóa khớp)."
    },
    "pearlsAndPitfalls": [
      "TRÁNH SỤN VIỀN: Tuyệt đối không đâm xuyên đầu kim vào cấu trúc tam giác sụn viền sau (labrum) vì có thể làm rách thoái hóa thêm sụn viền.",
      "Tiếp cận lối sau an toàn hơn lối trước rất nhiều vì tránh được đám rối thần kinh cánh tay và bó mạch nách ở phía trước.",
      "Nếu thấy phản lực đẩy pít-tông mạnh: đầu kim đang cắm vào sụn hoặc bao khớp dày, cần lùi kim 1 mm."
    ],
    "postProcedure": "Bệnh nhân vận động nhẹ nhàng khớp vai, tránh các động tác vung tay mạnh hoặc tập tạ nặng trong 3 ngày đầu.",
    "figures": [
      {
        "path": "assets/images/ch19_shoulder/p225_img3.jpeg",
        "title": "Giải phẫu siêu âm khớp ổ chảo cánh tay lối sau",
        "desc": "Hình siêu âm cắt ngang sau: HH (Chỏm cánh tay), G (Ổ chảo), L (Sụn viền sau tam giác), IS (Cơ dưới gai)."
      },
      {
        "path": "assets/images/ch19_shoulder/p227_img1.jpeg",
        "title": "Kỹ thuật đi kim In-plane khớp ổ chảo cánh tay lối sau",
        "desc": "Đầu dò đặt dưới gai vai sau, kim đi in-plane từ phía ngoài vào khoang khớp giữa sụn viền và chỏm cánh tay."
      }
    ]
  },
  {
    "id": "biceps-tendon",
    "nameVi": "Tiêm quanh bao gân đầu dài cơ nhị đầu cánh tay (LHBT)",
    "nameEn": "Long Head Biceps Tendon Sheath Injection (LHBT)",
    "category": "upper",
    "subcategory": "shoulder",
    "type": "tendon",
    "difficulty": "Cơ bản",
    "icd10": "M75.2 (Viêm bao gân nhị đầu), M75.20 (Viêm gân nhị đầu vai)",
    "indications": [
      "Viêm bao gân đầu dài cơ nhị đầu cánh tay (Biceps Tenosynovitis).",
      "Đau mặt trước khớp vai tăng lên khi nâng tay hoặc xoay ngoài cánh tay (nghiệm pháp Speed, Yergason dương tính).",
      "Tràn dịch bao gân nhị đầu phản ứng trong các bệnh lý chóp xoay."
    ],
    "contraindications": {
      "absolute": [
        "Đứt hoàn toàn gân nhị đầu (dấu hiệu Popeye muscle).",
        "Nhiễm khuẩn vùng trước vai."
      ],
      "relative": [
        "Bán trật hoặc trật gân nhị đầu ra khỏi rãnh gian củ.",
        "Thoái hóa gân nặng có rách dọc nội gân (nguy cơ đứt gân khi tiêm corticoid)."
      ]
    },
    "patientPosition": "Bệnh nhân ngồi thẳng, cẳng tay gập 90 độ, cẳng tay ngửa và đặt tự nhiên trên đùi (như đang ngửa tay xin tiền), cánh tay áp sát thân mình.",
    "transducer": "Đầu dò Linear 10 - 15 MHz, tần số cao, độ sâu 2 - 3 cm.",
    "sonoanatomy": [
      "Rãnh gian củ xương cánh tay (Bicipital groove): Rãnh xương hình chữ U nằm giữa củ lớn (ngoài) và củ bé (trong).",
      "Gân nhị đầu đầu dài: Cấu trúc hình bầu dục tròn tăng âm đồng nhất nằm lọt trong rãnh gian củ.",
      "Dây chằng ngang xương cánh tay: Dải mỏng tăng âm vắt ngang qua rãnh giữ gân nhị đầu.",
      "Bao gân nhị đầu: Khoang ảo bao quanh gân (thường có một lớp dịch mỏng sinh lý < 1mm)."
    ],
    "technique": {
      "approach": "In-plane từ ngoài vào trong (Lateral to Medial) trên mặt cắt ngang rãnh gian củ.",
      "needle": "Kim 25G, dài 25 - 38 mm.",
      "steps": [
        "1. Đặt đầu dò cắt ngang mặt trước vai, xác định rãnh gian củ và gân nhị đầu.",
        "2. Kiểm tra Doppler màu để phát hiện nhánh động mạch mũ cánh tay trước đi song hành cạnh gân.",
        "3. Sát trùng da vô khuẩn.",
        "4. Đâm kim In-plane từ phía ngoài (bờ củ lớn) hướng nhẹ xuống dưới đáy rãnh quanh bao gân.",
        "5. Đầu kim nằm sát mép bao gân, KHÔNG chọc vào lõi sợi gân.",
        "6. Bơm nhẹ thuốc: thấy thuốc lan tỏa ôm tròn lấy chu vi gân nhị đầu tạo hình ảnh 'vòng hào quang' (halo sign / donut sign)."
      ]
    },
    "drugsAndDosage": {
      "steroid": "Triamcinolone acetonide 20 mg (0.5 ml) hoặc Methylprednisolone 20 - 40 mg.",
      "localAnesthetic": "Lidocaine 1%: 1.5 - 2.0 ml (Tổng thể tích không nên vượt quá 3 ml để tránh căng vỡ bao gân)."
    },
    "pearlsAndPitfalls": [
      "NGUY CƠ ĐỨT GÂN CAO: Gân nhị đầu chịu tải trọng kéo rất lớn. Tuyệt đối không tiêm nội gân (intratendinous). Nếu pít-tông có lực cản, hãy lùi kim ra bao gân.",
      "Chú ý nhánh động mạch mũ cánh tay trước chạy dọc bờ ngoài của gân; luôn quét Doppler trước khi đâm kim.",
      "Bao gân nhị đầu thông thương trực tiếp với ổ khớp vai ở phía trên."
    ],
    "postProcedure": "Nghỉ ngơi, tránh các bài tập gập khuỷu hoặc kéo xà/nâng vật nặng trong 2 tuần.",
    "figures": [
      {
        "path": "assets/images/ch19_shoulder/p222_img1.jpeg",
        "title": "Mặt cắt ngang gân đầu dài cơ nhị đầu trong rãnh gian củ",
        "desc": "LT (Củ bé), GT (Củ lớn), BT (Gân nhị đầu). Gân hình tròn tăng âm nằm gọn trong rãnh chữ U."
      }
    ]
  },
  {
    "id": "ac-joint",
    "nameVi": "Tiêm khớp cùng vai - đòn (AC Joint)",
    "nameEn": "Acromioclavicular Joint Injection (AC Joint)",
    "category": "upper",
    "subcategory": "shoulder",
    "type": "joint",
    "difficulty": "Cơ bản",
    "icd10": "M19.01 (Thoái hóa khớp cùng vai đòn), M75.8 (Tổn thương khớp vai khác)",
    "indications": [
      "Thoái hóa khớp cùng vai - đòn gây đau khu trú đỉnh vai (đau tăng khi làm nghiệm pháp vắt tay qua ngực Cross-body adduction test).",
      "Viêm khớp cùng đòn sau chấn thương hoặc hoạt động thể thao quá mức.",
      "Phì đại mỏm xương khớp AC gây chèn ép gián tiếp khoang dưới mỏm cùng vai."
    ],
    "contraindications": {
      "absolute": ["Nhiễm khuẩn tại khớp AC hoặc vùng da bên trên."],
      "relative": ["Sai khớp cùng đòn độ III trở lên (chỉ định phẫu thuật tái tạo dây chằng)."]
    },
    "patientPosition": "Bệnh nhân ngồi thẳng hoặc nửa nằm nửa ngồi, cánh tay buông thõng tự nhiên.",
    "transducer": "Đầu dò Linear dải tần cao 12 - 18 MHz, độ sâu 1.5 - 2.5 cm.",
    "sonoanatomy": [
      "Mỏm cùng vai (Acromion) ở phía ngoài: Bề mặt xương tăng âm phẳng.",
      "Đầu ngoài xương đòn (Clavicle) ở phía trong: Bề mặt xương tăng âm hơi vồng cao hơn.",
      "Khoang khớp AC: Khe hẹp giữa hai đầu xương, bên trên phủ bởi dây chằng cùng đòn trên (dày 1-2 mm tăng âm)."
    ],
    "technique": {
      "approach": "In-plane từ ngoài vào trong hoặc Out-of-plane đi trực tiếp từ trên xuống.",
      "needle": "Kim 25G - 27G, dài 25 mm.",
      "steps": [
        "1. Đặt đầu dò theo mặt phẳng trán ngay trên đỉnh khớp cùng đòn.",
        "2. Nhận diện khe khớp AC hẹp nằm giữa đầu ngoài xương đòn và mỏm cùng vai.",
        "3. Đâm kim từ phía ngoài theo trục dọc đầu dò (In-plane) hoặc đâm thẳng góc giữa tâm đầu dò (Out-of-plane).",
        "4. Đầu kim vượt qua dây chằng cùng đòn vào khoang khớp hẹp.",
        "5. Thể tích khoang khớp AC rất bé (chỉ chứa được 0.5 - 1.0 ml). Bơm cực kỳ chậm, dừng ngay khi thấy căng tức."
      ]
    },
    "drugsAndDosage": {
      "steroid": "Triamcinolone acetonide 10 - 20 mg (0.25 - 0.5 ml) hoặc Betamethasone 0.5 ml.",
      "localAnesthetic": "Lidocaine 1%: 0.5 - 1.0 ml (Tổng thể tích tối đa 1.0 - 1.5 ml)."
    },
    "pearlsAndPitfalls": [
      "Khớp AC rất nông và thể tích nhỏ: Nếu cố bơm nhiều thuốc (> 1.5 ml) sẽ làm rách bao khớp hoặc thuốc trào ngược ra mô dưới da gây teo da và mất sắc tố.",
      "Gai xương thoái hóa khớp AC có thể che khuất khe khớp: hãy xoay nhẹ đầu dò hoặc bảo bệnh nhân thả lỏng vai để mở rộng khe khớp."
    ],
    "postProcedure": "Băng dán vô khuẩn, tránh vắt tay qua ngực hoặc nằm đè lên vai bên tiêm trong 48 giờ.",
    "figures": [
      {
        "path": "assets/images/ch19_shoulder/p225_img1.jpeg",
        "title": "Hình ảnh siêu âm và kỹ thuật tiêm khớp cùng vai đòn (AC Joint)",
        "desc": "Khe khớp AC nằm giữa Acromion và Clavicle. Kim đi in-plane vào khe khớp nông."
      }
    ]
  },
  {
    "id": "suprascapular-nerve",
    "nameVi": "Phong bế thần kinh trên vai (Suprascapular Nerve Block)",
    "nameEn": "Suprascapular Nerve Block (SSNB)",
    "category": "upper",
    "subcategory": "shoulder",
    "type": "nerve",
    "difficulty": "Trung bình",
    "icd10": "G56.8 (Bệnh lý đơn dây thần kinh chi trên), M75.0 (Đông cứng khớp vai), M19.01 (Thoái hóa khớp vai)",
    "indications": [
      "Đau khớp vai mạn tính không đáp ứng với tiêm nội khớp (thoái hóa nặng, đông cứng khớp vai).",
      "Giảm đau chu phẫu cho phẫu thuật nội soi khớp vai hoặc mổ thay khớp vai.",
      "Hội chứng chèn ép thần kinh trên vai tại khuyết trên vai hoặc khuyết gai ổ chảo."
    ],
    "contraindications": {
      "absolute": ["Nhiễm khuẩn vùng hố trên gai.", "Dị ứng thuốc tê nhóm amide."],
      "relative": ["Rối loạn đông máu nặng.", "Bệnh phổi tắc nghẽn mạn tính nặng (tránh nguy cơ tràn khí màng phổi)."]
    },
    "patientPosition": "Bệnh nhân ngồi cúi nhẹ người ra trước, hai tay đặt trên đùi, hoặc nằm sấp có gối kê dưới ngực.",
    "transducer": "Đầu dò Linear 10-12 MHz hoặc Curvilinear (ở người đậm người), độ sâu 4 - 5 cm.",
    "sonoanatomy": [
      "Cơ thang (Trapezius muscle): Lớp cơ nông nhất ở hố trên gai.",
      "Cơ trên gai (Supraspinatus muscle): Nằm ngay dưới cơ thang.",
      "Đáy hố trên gai (Floor of supraspinous fossa): Đường vỏ xương tăng âm đáy hố.",
      "Bó mạch - thần kinh trên vai: Nằm sâu sát đáy xương, động mạch trên vai đập rõ trên Doppler màu, dây thần kinh nằm cạnh ngoài động mạch."
    ],
    "technique": {
      "approach": "In-plane từ phía ngoài vào trong hoặc từ trong ra ngoài dọc theo hố trên gai.",
      "needle": "Kim 22G, dài 50 - 70 mm.",
      "steps": [
        "1. Đặt đầu dò song song với gai vai trên hố trên gai.",
        "2. Quét đầu dò từ sau ra trước để tìm đáy xương hố trên gai và khuyết trên vai.",
        "3. Sử dụng Doppler màu để xác định động mạch trên vai đập nhịp nhàng sát đáy xương.",
        "4. Đâm kim In-plane từ ngoài vào trong, đưa mũi kim đi xuyên qua cơ thang, cơ trên gai đến khi mũi kim chạm nhẹ vào đáy xương sát cạnh bó mạch.",
        "5. Hút thử kiểm tra KHÔNG có máu (tránh tiêm vào động mạch trên vai).",
        "6. Bơm 5 - 8 ml thuốc tê, quan sát thuốc lan tỏa dưới cân sâu cơ trên gai ôm lấy thần kinh."
      ]
    },
    "drugsAndDosage": {
      "steroid": "Dexamethasone 4 mg hoặc Triamcinolone 20 mg (nếu điều trị đau mạn tính).",
      "localAnesthetic": "Ropivacaine 0.2% - 0.5% (5 - 8 ml) HOẶC Bupivacaine 0.25% (5 - 8 ml) HOẶC Lidocaine 1% (5 - 8 ml)."
    },
    "pearlsAndPitfalls": [
      "Thần kinh trên vai chi phối cảm giác cho khoảng 70% khớp vai (toàn bộ bao khớp trên, sau và khớp AC).",
      "AN TOÀN MÀNG PHỔI: Giữ góc kim nông và luôn thấy rõ đầu kim, chạm nhẹ đáy xương hố trên gai để làm mốc chặn an toàn, không đâm quá sâu chếch về phía lồng ngực.",
      "Luôn bật Doppler màu để tránh tiêm thuốc tê vào lòng động mạch trên vai (gây ngộ độc LAST cấp tính)."
    ],
    "postProcedure": "Theo dõi cảm giác và cơ lực dạng vai trong 30 phút sau tiêm.",
    "figures": [
      {
        "path": "assets/images/ch4_suprascapular/p65_img1.jpeg",
        "title": "Giải phẫu siêu âm hố trên gai và bó mạch thần kinh trên vai",
        "desc": "Hình siêu âm hố trên gai: Trapezius (cơ thang), Supraspinatus (cơ trên gai), SSN/A (bó mạch thần kinh trên vai sát đáy xương)."
      },
      {
        "path": "assets/images/ch4_suprascapular/p66_img1.jpeg",
        "title": "Kỹ thuật đi kim phong bế thần kinh trên vai dưới siêu âm",
        "desc": "Đầu dò đặt trên hố trên gai, kim đi in-plane chạm đáy xương cạnh động mạch trên vai."
      }
    ]
  },

  # -------------------------------------------------------------
  # CHI TRÊN - KHỚP KHUỶU
  # -------------------------------------------------------------
  {
    "id": "tennis-elbow",
    "nameVi": "Tiêm điểm bám gân lồi cầu ngoài xương cánh tay (Tennis Elbow)",
    "nameEn": "Lateral Epicondylalgia / Common Extensor Tendon Injection",
    "category": "upper",
    "subcategory": "elbow",
    "type": "tendon",
    "difficulty": "Cơ bản",
    "icd10": "M77.1 (Viêm lồi cầu ngoài xương cánh tay), M77.10 (Tennis Elbow)",
    "indications": [
      "Viêm lồi cầu ngoài xương cánh tay (Tennis Elbow) mạn tính kéo dài trên 6 - 12 tuần không bớt với nẹp và vật lý trị liệu.",
      "Đau chói điểm bám gân cơ duỗi chung cổ tay khi duỗi cổ tay có lực cản (nghiệm pháp Cozen dương tính) hoặc nâng vật bằng bàn tay sấp (Chair test)."
    ],
    "contraindications": {
      "absolute": ["Nhiễm khuẩn vùng khuỷu ngoài.", "Đứt hoàn toàn gân cơ duỗi chung."],
      "relative": [
        "Đã tiêm corticoid nhiều lần trước đó (trên 2-3 lần) -> Khuyến cáo chuyển sang tiêm PRP hoặc châm kim đa điểm (Dry needling/Tenotomy).",
        "Có mất vững dây chằng bên quay (LCL)."
      ]
    },
    "patientPosition": "Bệnh nhân ngồi, khuỷu gập 90 độ, cẳng tay sấp đặt bàn tay lên bàn khám.",
    "transducer": "Đầu dò Linear 12 - 18 MHz dải tần cao, độ sâu 1.5 - 2.5 cm.",
    "sonoanatomy": [
      "Lồi cầu ngoài xương cánh tay (Lateral epicondyle): Mốc xương tăng âm nhô lên.",
      "Chỏm quay (Radial head): Mặt xương tăng âm tròn phía dưới, tạo thành khe khớp cánh tay - quay.",
      "Gân cơ duỗi chung (Common Extensor Tendon - CET): Dải sợi hình mỏ chim tăng âm bám chắc vào lồi cầu ngoài. Bệnh lý: gân dày lên, giảm âm mất cấu trúc sợi, có thể có ổ rách bán phần hoặc gai xương."
    ],
    "technique": {
      "approach": "In-plane theo trục dọc của gân cơ duỗi chung (Longitudinal In-plane) từ dưới lên trên.",
      "needle": "Kim 25G - 27G (tiêm thuốc) hoặc kim 21G - 22G (nếu làm châm kim đa điểm tenotomy / tiêm PRP).",
      "steps": [
        "1. Đặt đầu dò dọc theo trục cẳng tay nối giữa lồi cầu ngoài và chỏm quay.",
        "2. Đánh giá vùng thoái hóa gân (angiofibroblastic tendinosis): vùng giảm âm, Doppler màu tăng sinh mạch.",
        "3. Sát khuẩn vô khuẩn.",
        "4. Gây tê nông lớp da.",
        "5. Đưa kim In-plane từ đầu xa hướng về phía điểm bám lồi cầu ngoài.",
        "6. Nếu tiêm PRP: đưa kim vào vùng thoái hóa gân, châm nhẹ 5 - 10 nhát để phá vỡ dải xơ thoái hóa (fenestration), sau đó bơm 1.5 - 2.0 ml PRP.",
        "7. Nếu tiêm Corticoid: chỉ tiêm vào bề mặt bao gân hoặc mô liên kết nông quanh gân, TRÁNH tiêm ngập vào lõi gân."
      ]
    },
    "drugsAndDosage": {
      "prp": "Huyết tương giàu tiểu cầu (PRP) giàu bạch cầu hoặc nghèo bạch cầu: 1.5 - 2.5 ml (Liệu pháp ưu tiên hàng đầu theo y học chứng cứ hiện đại).",
      "steroid": "Triamcinolone 10 - 20 mg (0.25 - 0.5 ml) phối hợp Lidocaine 1% (1 ml) - chỉ dùng khi đau cấp dữ dội, không lạm dụng.",
      "dryNeedling": "Châm kim xuyên sợi gân (Tenotomy/Fenestration) dưới tê tại chỗ."
    },
    "pearlsAndPitfalls": [
      "NGHIỆM PHÁP CẢNH BÁO: Nhiều nghiên cứu ngẫu nhiên (RCT) chứng minh tiêm Corticoid vào Tennis Elbow tuy giảm đau tốt trong 6 tuần đầu nhưng làm tăng tỷ lệ tái phát và thoái hóa đứt gân sau 6 - 12 tháng. PRP cho hiệu quả bền vững vượt trội.",
      "Tránh tiêm nông sát da vì Corticoid gây teo mô mỡ dưới da và mất sắc tố da vĩnh viễn rất mất thẩm mỹ vùng khuỷu."
    ],
    "postProcedure": "Nghỉ ngơi tay, mang đai giảm tải Tennis Elbow Strap trong 2-4 tuần, tránh vặn cổ tay hoặc nâng vật nặng.",
    "figures": [
      {
        "path": "assets/images/ch20_elbow/p239_img1.jpeg",
        "title": "Hình ảnh siêu âm gân cơ duỗi chung lồi cầu ngoài khuỷu",
        "desc": "Mặt cắt dọc: LE (Lateral Epicondyle), RH (Radial Head), CET (Common Extensor Tendon). Gân hình mỏ chim bám vào lồi cầu ngoài."
      },
      {
        "path": "assets/images/ch20_elbow/p243_img1.jpeg",
        "title": "Kỹ thuật tiêm In-plane gân lồi cầu ngoài dưới siêu âm",
        "desc": "Đầu kim đi in-plane từ phía đầu xa hướng về diện bám lồi cầu ngoài."
      }
    ]
  },
  {
    "id": "golfers-elbow",
    "nameVi": "Tiêm điểm bám gân lồi cầu trong xương cánh tay (Golfer's Elbow)",
    "nameEn": "Medial Epicondylalgia / Common Flexor Tendon Injection",
    "category": "upper",
    "subcategory": "elbow",
    "type": "tendon",
    "difficulty": "Trung bình",
    "icd10": "M77.0 (Viêm lồi cầu trong xương cánh tay), M77.00 (Golfer's Elbow)",
    "indications": [
      "Viêm lồi cầu trong xương cánh tay (Golfer's Elbow) dai dẳng.",
      "Đau điểm bám gân cơ gấp chung ở mặt trong khuỷu, đau tăng khi gập cổ tay hoặc sấp cẳng tay có lực cản."
    ],
    "contraindications": {
      "absolute": ["Nhiễm khuẩn vùng khuỷu trong."],
      "relative": ["Có chèn ép thần kinh trụ đi kèm (Cubital tunnel syndrome) - cần chẩn đoán phân biệt rõ ràng."]
    },
    "patientPosition": "Bệnh nhân ngồi hoặc nằm ngửa, cánh tay dạng, xoay ngoài và ngửa cẳng tay (tư thế 'tay chào quân đội').",
    "transducer": "Đầu dò Linear 12 - 18 MHz, độ sâu 1.5 - 2.5 cm.",
    "sonoanatomy": [
      "Lồi cầu trong xương cánh tay (Medial epicondyle): Mốc xương tăng âm gồ lên rõ.",
      "Khớp cánh tay - trụ (Humero-ulnar joint): Khe khớp phía dưới.",
      "Gân cơ gấp chung (Common Flexor Tendon - CFT): Bám vào bờ trước dưới lồi cầu trong.",
      "DÂY THẦN KINH TRỤ (Ulnar Nerve): Chạy ngay trong rãnh ròng rọc ở bờ sau mỏm lồi cầu trong."
    ],
    "technique": {
      "approach": "In-plane theo trục dọc gân cơ gấp chung từ dưới lên trên.",
      "needle": "Kim 25G - 27G, dài 25 mm.",
      "steps": [
        "1. Đặt đầu dò dọc mặt trong khuỷu nối giữa lồi cầu trong và mỏm vẹt xương trụ.",
        "2. QUAN TRỌNG: Quét đầu dò ra sau để xác định chính xác vị trí thần kinh trụ trong rãnh thần kinh trụ.",
        "3. Đặt đầu dò lại mặt trước lồi cầu trong để thấy gân cơ gấp chung (CFT).",
        "4. Đưa kim In-plane từ đầu xa hướng về điểm bám lồi cầu trong.",
        "5. Đích kim: Mặt nông hoặc quanh bao gân CFT, luôn giữ hướng kim xa rời rãnh thần kinh trụ ở phía sau.",
        "6. Bơm nhẹ thuốc (1 - 2 ml)."
      ]
    },
    "drugsAndDosage": {
      "steroid": "Triamcinolone 10 - 20 mg (0.25 - 0.5 ml) + Lidocaine 1% (1 ml).",
      "prp": "PRP 1.5 - 2.0 ml nếu điều trị bảo tồn tái tạo."
    },
    "pearlsAndPitfalls": [
      "NGUY HIỂM THẦN KINH TRỤ: Thần kinh trụ nằm rất sát (chỉ cách vài milimet phía sau lồi cầu trong). Bắt buộc phải xác định vị trí thần kinh trụ trước khi đâm kim, không để kim đi chệch ra sau.",
      "Nếu bệnh nhân thấy cảm giác tê giật điện bắn xuống ngón 4-5: ĐẦU KIM ĐANG CHẠM THẦN KINH TRỤ -> Rút kim ngay lập tức!"
    ],
    "postProcedure": "Tránh gập cổ tay mang nặng trong 10-14 ngày.",
    "figures": [
      {
        "path": "assets/images/ch20_elbow/p240_img1.jpeg",
        "title": "Hình ảnh siêu âm gân cơ gấp chung lồi cầu trong",
        "desc": "ME (Medial Epicondyle), CFT (Common Flexor Tendon). Thần kinh trụ nằm ở phía sau cần được xác định để tránh tổn thương."
      }
    ]
  },

  # -------------------------------------------------------------
  # CHI TRÊN - CỔ TAY & BÀN TAY
  # -------------------------------------------------------------
  {
    "id": "carpal-tunnel",
    "nameVi": "Bóc tách thủy dịch thần kinh giữa trong Hội chứng Ống Cổ Tay",
    "nameEn": "Carpal Tunnel Ultrasound-Guided Hydrodissection / Injection",
    "category": "upper",
    "subcategory": "wrist_hand",
    "type": "nerve",
    "difficulty": "Trung bình",
    "icd10": "G56.0 (Hội chứng ống cổ tay), G56.01 (Ống cổ tay tay phải), G56.02 (Ống cổ tay tay trái)",
    "indications": [
      "Hội chứng ống cổ tay mức độ nhẹ đến trung bình (tê bì ngón cái, trỏ, giữa, nửa ngón nhẫn, nghiệm pháp Phalen, Tinel dương tính, diện tích CSA thần kinh giữa > 10-12 mm²).",
      "Đau dị cảm về đêm làm thức giấc (nocturnal paresthesia).",
      "Bóc tách giải phóng dính sau phẫu thuật mổ mở ống cổ tay tái phát."
    ],
    "contraindications": {
      "absolute": ["Nhiễm khuẩn vùng cổ tay.", "Khối u thần kinh giữa (schwannoma) hoặc u bao gân chèn ép cần phẫu thuật."],
      "relative": ["Teo cơ mô cái nặng (chỉ định phẫu thuật giải áp cắt dây chằng vòng cổ tay)."]
    },
    "patientPosition": "Bệnh nhân ngồi đối diện bác sĩ, cẳng tay đặt ngửa trên bàn khám có đệm êm, cổ tay hơi ngửa nhẹ (khoảng 20 độ).",
    "transducer": "Đầu dò Linear dải tần rất cao 13 - 18 MHz (hoặc đầu dò Hockey-stick), độ sâu 1.5 - 2.0 cm.",
    "sonoanatomy": [
      "Dây thần kinh giữa (Median nerve): Cấu trúc hình tổ ong (fascicular pattern) gồm các chấm giảm âm nhỏ bao quanh bởi dải tăng âm.",
      "Dây chằng cổ tay ngang (Transverse carpal ligament / Flexor retinaculum): Dải tăng âm căng ngang phía trên.",
      "Các gân cơ gấp các ngón nông và sâu: Nằm ngay dưới thần kinh giữa.",
      "Động mạch và thần kinh trụ (Ulnar artery & nerve): Nằm ở phía trụ trong ống Guyon."
    ],
    "technique": {
      "approach": "In-plane từ phía trụ sang phía quay (Ulnar-to-Radial) tại nếp gấp cổ tay xa.",
      "needle": "Kim 25G - 27G, dài 38 mm.",
      "steps": [
        "1. Đặt đầu dò cắt ngang nếp gấp cổ tay xa tại mức xương đậu và củ xương thuyền.",
        "2. Xác định rõ dây thần kinh giữa, đo diện tích CSA, kiểm tra biến thể phân đôi (bifid median nerve) hay động mạch giữa tồn lưu (persistent median artery).",
        "3. Đâm kim In-plane từ phía bờ trụ, luồn kim nằm dưới dây chằng cổ tay ngang và lướt trên bề mặt dây thần kinh giữa.",
        "4. Bơm 1 - 2 ml dịch để bóc tách mặt phẳng trên thần kinh (hydrodissection giữa thần kinh và dây chằng ngang).",
        "5. Tiến nhẹ đầu kim xuống dưới thần kinh giữa, bơm tiếp 1 - 2 ml dịch để bóc tách mặt phẳng sâu (giữa thần kinh giữa và các gân gấp).",
        "6. Thấy thần kinh giữa được bao bọc bởi vòng nước và trượt tự do (halo sign)."
      ]
    },
    "drugsAndDosage": {
      "steroid": "Triamcinolone acetonide 10 - 20 mg (0.25 - 0.5 ml) HOẶC Dexamethasone 4 mg (1 ml) - Dexamethasone không hạt tinh thể ít kích ứng thần kinh hơn.",
      "localAnesthetic": "Lidocaine 1% hoặc Ropivacaine 0.2%: 1 - 2 ml.",
      "salineHydrodissection": "Dextrose 5% (D5W) 3 - 5 ml bóc tách cơ học tách dính thần kinh mà không gây tác dụng phụ của steroid."
    },
    "pearlsAndPitfalls": [
      "TUYỆT ĐỐI KHÔNG ĐÂM KIM VÀO LÕI THẦN KINH GIỮA: Nếu đầu kim chạm vào sợi thần kinh, bệnh nhân sẽ có cảm giác điện giật nhói buốt dữ dội -> Phải dừng ngay và lùi kim 1 mm!",
      "Tiếp cận từ bờ trụ (Ulnar approach) giúp tránh làm tổn thương nhánh quặp ngược vận động mô cái (recurrent motor branch) của thần kinh giữa ở bờ quay.",
      "Dextrose 5% (D5W) hydrodissection đang được nhiều hiệp hội đau quốc tế khuyến cáo thay thế corticoid cho kết quả rất tốt."
    ],
    "postProcedure": "Khuyên bệnh nhân đeo nẹp cổ tay tư thế trung gian ban đêm trong 3-4 tuần.",
    "figures": [
      {
        "path": "assets/images/ch21_wrist_hand/p250_img1.jpeg",
        "title": "Giải phẫu siêu âm thần kinh giữa tại ống cổ tay",
        "desc": "MN (Median Nerve) hình tổ ong nằm nông dưới TCL (Dây chằng cổ tay ngang). FDS/FDP (Các gân gấp ngón)."
      },
      {
        "path": "assets/images/ch21_wrist_hand/p252_img1.jpeg",
        "title": "Kỹ thuật bóc tách thủy dịch (Hydrodissection) thần kinh giữa",
        "desc": "Kim đi in-plane từ phía trụ luồn trên và dưới thần kinh giữa, bơm dịch tách rời thần kinh khỏi cấu trúc xơ dính lân cận."
      }
    ]
  },
  {
    "id": "de-quervain",
    "nameVi": "Tiêm bao gân De Quervain - Ngăn duỗi số 1 cổ tay",
    "nameEn": "De Quervain's Tenosynovitis Injection (1st Extensor Compartment)",
    "category": "upper",
    "subcategory": "wrist_hand",
    "type": "tendon",
    "difficulty": "Cơ bản",
    "icd10": "M65.4 (Viêm mỏm trâm quay bao gân De Quervain)",
    "indications": [
      "Viêm bao gân De Quervain đau buốt gốc ngón cái và mỏm trâm quay.",
      "Nghiệm pháp Finkelstein dương tính (gập ngón cái vào lòng bàn tay rồi uốn cổ tay về phía trụ gây đau chói).",
      "Thường gặp ở phụ nữ sau sinh bế con (Mother's wrist), người làm văn phòng đánh máy nhiều."
    ],
    "contraindications": {
      "absolute": ["Nhiễm khuẩn vùng mỏm trâm quay."],
      "relative": ["Có nhánh nông thần kinh quay bắt chéo sát bao gân."]
    },
    "patientPosition": "Bệnh nhân ngồi, cẳng tay đặt ở tư thế trung gian (ngón cái hướng lên trần nhà, bờ trụ bàn tay tựa trên bàn khám).",
    "transducer": "Đầu dò Linear dải tần cao 12 - 18 MHz, độ sâu 1.0 - 1.5 cm.",
    "sonoanatomy": [
      "Mỏm trâm quay (Radial styloid process): Mốc xương tăng âm gồ lên bên dưới.",
      "Ngăn duỗi số 1 (First extensor compartment): Chứa 2 gân: gân dạng dài ngón cái (APL) và gân duỗi ngắn ngón cái (EPB).",
      "Vách ngăn phụ (Sub-compartment / Intertendinous septum): Thường gặp ở 30-50% người, ngăn cách giữa APL và EPB.",
      "Nhánh nông thần kinh quay (Superficial Radial Nerve - SRN): Chạy trong mô dưới da ngay phía trên bao gân."
    ],
    "technique": {
      "approach": "In-plane theo trục dọc hoặc trục ngang của ngăn duỗi số 1.",
      "needle": "Kim 27G - 30G, dài 13 - 25 mm.",
      "steps": [
        "1. Đặt đầu dò cắt ngang mỏm trâm quay để thấy 2 gân APL và EPB.",
        "2. Kiểm tra xem có vách ngăn đôi chia đôi ngăn duỗi không (nếu có vách ngăn, phải tiêm vào cả 2 khoang).",
        "3. Định vị nhánh nông thần kinh quay (SRN) để tránh đâm phải.",
        "4. Đâm kim In-plane từ đầu xa hoặc đầu gần vào lòng bao gân giữa 2 gân APL và EPB.",
        "5. Bơm chậm 0.5 - 1.0 ml thuốc: quan sát bao gân phồng tách rõ ràng."
      ]
    },
    "drugsAndDosage": {
      "steroid": "Triamcinolone acetonide 10 mg (0.25 ml) hoặc Betamethasone 0.5 ml.",
      "localAnesthetic": "Lidocaine 1%: 0.5 - 0.75 ml (Tổng thể tích không quá 1.0 ml)."
    },
    "pearlsAndPitfalls": [
      "NGUYÊN NHÂN THẤT BẠI PHỔ BIẾN: Có vách ngăn đôi (septum) chia tách APL và EPB. Nếu chỉ tiêm vào 1 ngăn, ngăn còn lại vẫn viêm tái diễn. Dưới siêu âm, bác sĩ có thể đưa kim vào chính xác cả 2 ngăn.",
      "TRÁNH TEO DA: Vùng mỏm trâm quay lớp da rất mỏng. Không tiêm steroid vào mô mỡ dưới da để tránh teo da lõm sâu và bạc màu da kéo dài.",
      "Tránh nhánh nông thần kinh quay (SRN) để không gây dị cảm rát buốt mu ngón cái."
    ],
    "postProcedure": "Băng ép nhẹ, khuyên mang nẹp cố định ngón cái Spica Splint trong 1 - 2 tuần.",
    "figures": [
      {
        "path": "assets/images/ch21_wrist_hand/p254_img1.jpeg",
        "title": "Hình ảnh siêu âm ngăn duỗi số 1 cổ tay (De Quervain)",
        "desc": "APL (Abductor pollicis longus), EPB (Extensor pollicis brevis) trên mỏm trâm quay. Mũi tên chỉ vách ngăn phụ giữa 2 gân."
      },
      {
        "path": "assets/images/ch21_wrist_hand/p257_img1.jpeg",
        "title": "Kỹ thuật tiêm bao gân ngăn duỗi số 1 dưới siêu âm",
        "desc": "Kim đi in-plane luồn vào lòng bao gân giữa APL và EPB, tránh nhánh nông thần kinh quay."
      }
    ]
  },
  {
    "id": "trigger-finger",
    "nameVi": "Tiêm điều trị Ngón tay lò xo / Ngón tay cò súng (Trigger Finger)",
    "nameEn": "Trigger Finger A1 Pulley Injection",
    "category": "upper",
    "subcategory": "wrist_hand",
    "type": "tendon",
    "difficulty": "Cơ bản",
    "icd10": "M65.3 (Ngón tay lò xo / Ngón tay cò súng)",
    "indications": [
      "Ngón tay lò xo (Stenosing tenosynovitis) giai đoạn Green II - III (kẹt ngón tay khi nắm lại, phải dùng tay kia bẻ ra, sờ thấy nốt xơ đau ở khớp bàn ngón tay).",
      "Thường gặp nhất ở ngón 1 (ngón cái), ngón 3 (ngón giữa) và ngón 4 (ngón nhẫn)."
    ],
    "contraindications": {
      "absolute": ["Nhiễm khuẩn bao gân gấp mủ bàn tay."],
      "relative": ["Ngón tay co cứng bất động hoàn toàn giai đoạn IV (cần phẫu thuật cắt ròng rọc A1)."]
    },
    "patientPosition": "Bệnh nhân ngồi đối diện, bàn tay ngửa đặt trên bàn khám, các ngón tay duỗi thẳng.",
    "transducer": "Đầu dò Linear tần số cao 13 - 18 MHz (đầu dò nhỏ Hockey-stick là lý tưởng nhất), độ sâu 1.0 - 1.5 cm.",
    "sonoanatomy": [
      "Chỏm xương đốt bàn tay (Metacarpal head): Mốc xương tăng âm cung tròn.",
      "Gân gấp ngón tay (Flexor digitorum tendon): Cấu trúc tăng âm dạng sợi song song.",
      "Ròng rọc A1 (A1 Pulley): Bình thường rất mỏng (< 0.5 mm), trong bệnh ngón tay lò xo sẽ dày lên (> 1.0 - 1.5 mm), giảm âm nằm ngay trên chỏm xương bàn ngón.",
      "Bó mạch - thần kinh ngón riêng (Digital artery & nerve): Nằm ở hai bên bờ của gân gấp."
    ],
    "technique": {
      "approach": "In-plane theo trục dọc gân gấp từ đầu xa về đầu gần (Distal to Proximal) HOẶC trục ngang.",
      "needle": "Kim 27G - 30G, dài 13 - 25 mm.",
      "steps": [
        "1. Đặt đầu dò dọc theo trục gân gấp ngay trên khớp bàn ngón (MCP joint).",
        "2. Yêu cầu bệnh nhân gập duỗi ngón tay để quan sát gân gấp trượt và vị trí ròng rọc A1 bị kẹt dày lên.",
        "3. Đâm kim In-plane từ đầu xa (nếp gấp gian đốt gần) hướng về phía ròng rọc A1.",
        "4. Luồn đầu kim vào khoảng không gian ảo nằm giữa mặt sâu ròng rọc A1 và bề mặt gân gấp (hoặc trong bao gân).",
        "5. Bơm chậm 0.5 - 0.75 ml thuốc: thấy thuốc lan tỏa bóc tách nhẹ nhàng dưới ròng rọc A1."
      ]
    },
    "drugsAndDosage": {
      "steroid": "Triamcinolone 10 mg (0.25 ml) hoặc Methylprednisolone 10 - 20 mg.",
      "localAnesthetic": "Lidocaine 1%: 0.5 ml (Tổng thể tích chỉ từ 0.5 - 0.75 ml)."
    },
    "pearlsAndPitfalls": [
      "Không tiêm vào chất gân: Đâm kim vào lõi gân sẽ có lực cản nặng và nguy cơ làm hoại tử đứt gân gấp ngón tay.",
      "Tránh bó mạch thần kinh ngón riêng chạy ở hai bên thành gân.",
      "Tỷ lệ thành công khỏi hoàn toàn sau 1 mũi tiêm dưới siêu âm đạt trên 85 - 90%."
    ],
    "postProcedure": "Bệnh nhân có thể tập gập duỗi nhẹ nhàng ngón tay ngay sau tiêm, tránh bóp nắm chặt vật cứng trong vài ngày.",
    "figures": [
      {
        "path": "assets/images/ch21_wrist_hand/p259_img1.jpeg",
        "title": "Hình ảnh siêu âm ròng rọc A1 và gân gấp ngón tay lò xo",
        "desc": "A1 Pulley dày lên rõ rệt nằm trên gân gấp (FT) tại mức chỏm xương đốt bàn tay (MC)."
      },
      {
        "path": "assets/images/ch21_wrist_hand/p262_img1.jpeg",
        "title": "Kỹ thuật đi kim tiêm ròng rọc A1 ngón tay lò xo",
        "desc": "Đầu kim đi in-plane luồn vào giữa mặt dưới ròng rọc A1 và bề mặt gân gấp."
      }
    ]
  },
  {
    "id": "cmc1-joint",
    "nameVi": "Tiêm khớp thang - bàn ngón cái (Khớp CMC-1 / Rhizarthrosis)",
    "nameEn": "First Carpometacarpal (CMC-1) Joint Injection",
    "category": "upper",
    "subcategory": "wrist_hand",
    "type": "joint",
    "difficulty": "Trung bình",
    "icd10": "M18.0 (Thoái hóa khớp thang bàn ngón cái nguyên phát hai bên), M18.1 (Thoái hóa khớp CMC-1 một bên)",
    "indications": [
      "Thoái hóa khớp gốc ngón tay cái (Rhizarthrosis / Thoái hóa khớp bàn ngón 1).",
      "Đau buốt gốc ngón cái khi cầm nắm, vặn chìa khóa, mở nắp chai (Grind test dương tính).",
      "Viêm bao hoạt dịch khớp thang bàn ngón 1."
    ],
    "contraindications": {
      "absolute": ["Nhiễm khuẩn tại chỗ."],
      "relative": ["Gai xương lớn che lấp hoàn toàn khe khớp."]
    },
    "patientPosition": "Bàn tay đặt nghiêng hoặc sấp nhẹ trên gối đệm, ngón cái gập nhẹ và áp sát.",
    "transducer": "Đầu dò Linear tần số cao 12 - 18 MHz, độ sâu 1.5 cm.",
    "sonoanatomy": [
      "Xương thang (Trapezium): Xương cổ tay tăng âm phía gốc.",
      "Nền xương đốt bàn ngón 1 (1st Metacarpal base): Xương tăng âm phía ngọn.",
      "Khe khớp CMC-1 hình yên ngựa: Nằm giữa 2 xương, bao bọc bởi bao khớp và dây chằng tăng âm.",
      "Động mạch quay (Radial artery): Bắt chéo qua hõm lào giải phẫu ngay cạnh xương thang."
    ],
    "technique": {
      "approach": "In-plane theo trục dọc khe khớp từ phía ngọn hoặc phía gốc.",
      "needle": "Kim 27G - 30G, dài 25 mm.",
      "steps": [
        "1. Đặt đầu dò dọc theo bờ ngoài xương bàn ngón cái đến xương thang.",
        "2. Nhận diện khe khớp hình chữ V lõm vào giữa nền đốt bàn 1 và xương thang.",
        "3. Sử dụng Doppler màu để xác định động mạch quay mu tay và tránh xa.",
        "4. Kéo nhẹ ngón cái (traction) để mở rộng khe khớp.",
        "5. Đâm kim In-plane trực tiếp vào khe khớp hẹp.",
        "6. Bơm nhẹ 0.5 - 1.0 ml thuốc vào khoang khớp."
      ]
    },
    "drugsAndDosage": {
      "steroid": "Triamcinolone 10 mg (0.25 ml) hoặc Methylprednisolone 10 - 20 mg.",
      "localAnesthetic": "Lidocaine 1%: 0.5 ml.",
      "viscosupplementation": "Acid Hyaluronic 0.5 - 1.0 ml (cho kết quả giảm đau rất tốt kéo dài 6 tháng)."
    },
    "pearlsAndPitfalls": [
      "Cực kỳ cẩn trọng với động mạch quay chạy ngay sát bờ mu của xương thang.",
      "Dùng kỹ thuật kéo nhẹ ngón cái (axial traction) giúp khe khớp mở rộng, đưa kim vào dễ dàng hơn nhiều.",
      "Dung tích khớp CMC-1 rất nhỏ, không tiêm quá 1 ml."
    ],
    "postProcedure": "Đeo nẹp cố định khớp bàn ngón 1 trong 48 giờ sau tiêm.",
    "figures": [
      {
        "path": "assets/images/ch21_wrist_hand/p264_img1.jpeg",
        "title": "Giải phẫu siêu âm và khe khớp thang bàn ngón 1 (CMC-1)",
        "desc": "Khe khớp CMC-1 giữa Trapezium và Metacarpal 1 base. Nhận diện rõ mỏm xương thoái hóa."
      }
    ]
  },

  # -------------------------------------------------------------
  # CHI DƯỚI - KHỚP GỐI
  # -------------------------------------------------------------
  {
    "id": "knee-suprapatellar",
    "nameVi": "Tiêm nội khớp gối qua ngách trên bánh chè (Suprapatellar Recess)",
    "nameEn": "Knee Intra-articular Injection (Suprapatellar Recess Approach)",
    "category": "lower",
    "subcategory": "knee",
    "type": "joint",
    "difficulty": "Cơ bản",
    "icd10": "M17.0 (Thoái hóa khớp gối nguyên phát hai bên), M17.1 (Thoái hóa khớp gối một bên), M05.86 (Viêm khớp dạng thấp ở gối)",
    "indications": [
      "Thoái hóa khớp gối nguyên phát hoặc thứ phát từ độ I đến IV theo Kellgren-Lawrence.",
      "Tràn dịch khớp gối cần chọc hút dịch chẩn đoán và điều trị.",
      "Viêm màng hoạt dịch khớp gối trong viêm khớp dạng thấp, gút, giả gút.",
      "Tiêm bổ sung chất nhờn Acid Hyaluronic (HA) hoặc Huyết tương giàu tiểu cầu (PRP)."
    ],
    "contraindications": {
      "absolute": [
        "Viêm khớp gối nhiễm khuẩn mủ.",
        "Viêm mô tế bào hoặc tổn thương nhiễm trùng vùng da quanh khớp gối.",
        "Khớp gối nhân tạo (nhiễm trùng khớp nhân tạo cần hội chẩn ngoại chấn thương chỉnh hình)."
      ],
      "relative": [
        "Đái tháo đường mất kiểm soát nặng (nguy cơ nhiễm trùng và bùng phát đường huyết nếu dùng corticoid).",
        "Rối loạn đông máu (INR > 2.0)."
      ]
    },
    "patientPosition": "Bệnh nhân nằm ngửa trên giường, khớp gối duỗi thẳng hoặc gập nhẹ 15 - 20 độ có kê một gối mỏng dưới khoeo chân để thư giãn cơ tứ đầu đùi.",
    "transducer": "Đầu dò Linear dải tần 8 - 14 MHz (bệnh nhân béo phì hoặc nhiều cơ có thể dùng Curvilinear 3 - 5 MHz), độ sâu 3 - 5 cm.",
    "sonoanatomy": [
      "Xương đùi (Femur): Bờ xương tăng âm sắc nét ở đáy.",
      "Đệm mỡ trước xương đùi (Prefemoral fat pad): Lớp mỡ giảm âm nằm áp sát vỏ xương đùi.",
      "Đệm mỡ trên bánh chè (Suprapatellar fat pad): Lớp mỡ giảm âm nằm phía trước.",
      "Ngách trên bánh chè (Suprapatellar recess): Khoang hoạt dịch nằm kẹp giữa đệm mỡ trước đùi và đệm mỡ trên bánh chè. Khi có tràn dịch, khoang này căng phồng dịch không hồi âm hoặc giảm âm.",
      "Gân cơ tứ đầu đùi (Quadriceps tendon): Dải sợi dày tăng âm phủ nông phía trước."
    ],
    "technique": {
      "approach": "In-plane từ phía ngoài vào trong (Lateral-to-Medial Approach) trên mặt cắt ngang trên bánh chè.",
      "needle": "Kim 21G - 23G (tiêm thuốc) hoặc kim 18G - 20G (chọc hút dịch khớp gối), dài 38 - 50 mm.",
      "steps": [
        "1. Đặt đầu dò cắt ngang ngay trên cực trên xương bánh chè khoảng 1 - 2 cm.",
        "2. Nhận diện khoang ngách trên bánh chè kẹp giữa 2 đệm mỡ.",
        "3. Nếu có tràn dịch: đâm kim In-plane từ bờ ngoài vào ổ dịch, hút sạch dịch khớp gửi xét nghiệm tế bào/vi trùng/tinh thể.",
        "4. Nếu khớp khô (không có dịch): quan sát đường ranh giới giữa 2 đệm mỡ, đâm kim từ bờ ngoài luồn chính xác vào khe giữa 2 đệm mỡ.",
        "5. Bơm test 0.5 ml: thấy dịch thuốc tách đôi 2 lớp mỡ nhẹ nhàng không hề có lực cản.",
        "6. Bơm toàn bộ liều thuốc (Steroid, HA hoặc PRP) vào ngách khớp."
      ]
    },
    "drugsAndDosage": {
      "steroid": "Triamcinolone acetonide 40 mg (1.0 ml) HOẶC Methylprednisolone acetate 40 - 80 mg (1 - 2 ml) HOẶC Betamethasone 1 - 2 ml.",
      "localAnesthetic": "Lidocaine 1% hoặc Ropivacaine 0.2%: 2 - 4 ml.",
      "viscosupplementation": "Acid Hyaluronic (HA): 2.0 - 4.0 ml tùy loại (trọng lượng phân tử cao tiêm 1 mũi, phân tử trung bình tiêm 3-5 mũi cách nhau 1 tuần).",
      "prp": "PRP khớp gối: 4.0 - 6.0 ml (tiêm 2 - 3 lần cách nhau 2 - 4 tuần)."
    },
    "pearlsAndPitfalls": [
      "TIẾP CẬN NGOÀI ƯU VIỆT: Tiếp cận ngách trên bánh chè từ bờ ngoài (Lateral suprapatellar approach) dưới siêu âm có độ chính xác đạt 99 - 100%, vượt trội hoàn toàn so với tiêm mù (chỉ đạt 70-75%).",
      "Nếu tiêm Acid Hyaluronic: Bắt buộc hút sạch dịch viêm trước khi bơm HA để tránh làm loãng thuốc và giảm hiệu quả bôi trơn.",
      "Tránh đâm vào gân cơ tứ đầu đùi hoặc đâm cắm vào vỏ xương đùi gây đau cho bệnh nhân."
    ],
    "postProcedure": "Băng ép nhẹ vị trí tiêm. Khuyên bệnh nhân hạn chế đi lại nhiều hoặc đứng lâu trong 24 - 48 giờ. Tập vận động gập duỗi gối nhẹ nhàng để thuốc phân tán đều toàn bộ khớp.",
    "figures": [
      {
        "path": "assets/images/ch23_knee/p284_img1.jpeg",
        "title": "Giải phẫu siêu âm ngách trên bánh chè (Suprapatellar Recess)",
        "desc": "SPR (Suprapatellar recess) kẹp giữa SFP (Đệm mỡ trên bánh chè) và PFP (Đệm mỡ trước xương đùi). Femur (Vỏ xương đùi)."
      },
      {
        "path": "assets/images/ch23_knee/p286_img1.jpeg",
        "title": "Kỹ thuật tiêm In-plane ngách trên bánh chè từ bờ ngoài",
        "desc": "Đầu dò cắt ngang trên bánh chè, kim đi in-plane từ bờ ngoài vào trung tâm túi cùng trên bánh chè."
      }
    ]
  },
  {
    "id": "bakers-cyst",
    "nameVi": "Chọc hút, phá vách và tiêm nang hoạt dịch khoeo chân (Baker's Cyst)",
    "nameEn": "Popliteal (Baker's) Cyst Aspiration, Fenestration & Injection",
    "category": "lower",
    "subcategory": "knee",
    "type": "bursa",
    "difficulty": "Trung bình",
    "icd10": "M71.2 (Nang bao hoạt dịch khoeo chân [Baker]), M71.20 (Nang Baker)",
    "indications": [
      "Nang hoạt dịch vùng khoeo (Baker's cyst) căng tức, gây khó khăn khi gập gối hoặc chèn ép tĩnh mạch khoeo gây phù chân.",
      "Nang Baker có vách ngăn hoặc dịch đặc nhầy mạn tính.",
      "Phân biệt và xử trí phòng ngừa biến chứng vỡ nang Baker (giả viêm tắc tĩnh mạch sâu - Pseudothrombophlebitis)."
    ],
    "contraindications": {
      "absolute": ["Nang Baker nhiễm trùng / áp xe vùng khoeo.", "Huyết khối tĩnh mạch sâu chi dưới (DVT) vùng khoeo."],
      "relative": ["Túi phình động mạch khoeo (bắt buộc phải loại trừ bằng Doppler màu trước khi chọc!)."]
    },
    "patientPosition": "Bệnh nhân nằm sấp trên giường khám, hai chân duỗi thẳng thoải mái.",
    "transducer": "Đầu dò Linear 8 - 14 MHz hoặc Curvilinear, độ sâu 3 - 5 cm.",
    "sonoanatomy": [
      "Cơ bán màng (Semimembranosus tendon - SM): Nằm ở phía trong.",
      "Đầu trong cơ bụng chân (Medial Head of Gastrocnemius - MHG): Nằm ở phía ngoài.",
      "CỔ NANG BAKER (Cyst Neck): Cấu trúc hình khe chữ U thông giữa gân SM và gân MHG nối vào khoang khớp gối.",
      "BÓ MẠCH THẦN KINH KHOEO (Popliteal artery, vein & Tibial nerve): Nằm ở phía ngoài hơn tại đường giữa hố khoeo. Cần dùng Doppler để nhận diện rõ động mạch và tĩnh mạch."
    ],
    "technique": {
      "approach": "In-plane từ ngoài vào trong hoặc từ trong ra ngoài xuyên qua thành nang.",
      "needle": "Kim 18G - 20G (hút dịch keo nhầy) và kim 22G - 25G (tiêm thuốc), dài 50 mm.",
      "steps": [
        "1. Đặt đầu dò cắt ngang vùng khoeo trong, xác định nang dịch và cổ nang kẹp giữa gân bán màng (SM) và cơ bụng chân (MHG).",
        "2. BẬT DOPPLER MÀU: Kiểm tra bó mạch khoeo để tránh tuyệt đối.",
        "3. Sát khuẩn diện rộng vùng khoeo.",
        "4. Gây tê tại chỗ da và mô dưới da bằng Lidocaine 1%.",
        "5. Dùng kim to 18G đâm In-plane vào trung tâm nang dịch.",
        "6. Hút áp lực âm toàn bộ dịch nang (dịch thường có màu vàng chanh, quánh dính như thạch).",
        "7. Nếu nang có nhiều vách ngăn xơ: dùng mũi kim chọc phá vách (fenestration) nhiều lần để dẫn lưu triệt để.",
        "8. Đổi xi lanh tiêm 1 ml Corticosteroid vào lòng nang để ức chế tế bào biểu mô màng bao tiết dịch tái phát."
      ]
    },
    "drugsAndDosage": {
      "steroid": "Triamcinolone acetonide 40 mg (1.0 ml) hoặc Methylprednisolone 40 mg.",
      "localAnesthetic": "Lidocaine 1%: 1 - 2 ml (sau khi đã hút cạn dịch)."
    },
    "pearlsAndPitfalls": [
      "BẮT BUỘC DOPPLER MÀU: Không bao giờ chọc kim vào vùng khoeo khi chưa bật Doppler màu để loại trừ phình động mạch khoeo (Popliteal artery aneurysm) hoặc nang nằm đè lên tĩnh mạch khoeo.",
      "Dịch nang Baker thường rất quánh dính (gelatinous): Nếu dùng kim nhỏ 23G-25G sẽ bị tắc kim không hút được, phải dùng kim 18G.",
      "Nang Baker thực chất là hậu quả của bệnh lý nội khớp gối (rách sụn chêm, thoái hóa khớp gối tràn dịch tạo van 1 chiều dồn dịch ra sau). Muốn khỏi triệt để, phải điều trị căn nguyên nội khớp."
    ],
    "postProcedure": "Băng ép chun đàn hồi vùng khoeo trong 48 - 72 giờ để ép xẹp khoang nang ngăn ngừa tích tụ dịch tái phát.",
    "figures": [
      {
        "path": "assets/images/ch23_knee/p288_img1.jpeg",
        "title": "Hình ảnh siêu âm nang hoạt dịch Baker và cổ nang",
        "desc": "Nang Baker (BC) nằm giữa gân cơ bán màng (SM) và đầu trong cơ bụng chân (MHG). Cổ nang hình phễu thông vào khớp."
      },
      {
        "path": "assets/images/ch23_knee/p290_img1.jpeg",
        "title": "Kỹ thuật chọc hút và tiêm nang Baker dưới siêu âm",
        "desc": "Kim 18G đi in-plane vào lòng nang dịch khoeo, hút xẹp nang và tiêm steroid."
      }
    ]
  },
  {
    "id": "pes-anserinus",
    "nameVi": "Tiêm bao hoạt dịch gân chân ngỗng (Pes Anserinus Bursa)",
    "nameEn": "Pes Anserinus Bursa and Peritendon Injection",
    "category": "lower",
    "subcategory": "knee",
    "type": "bursa",
    "difficulty": "Cơ bản",
    "icd10": "M70.5 (Viêm bao hoạt dịch gân chân ngỗng), M70.50 (Anserine bursitis)",
    "indications": [
      "Viêm bao hoạt dịch gân chân ngỗng (Anserine Bursitis) gây đau nhức mặt trong đầu trên cẳng chân dưới khe khớp gối 4-5 cm.",
      "Đau tăng khi bước lên cầu thang hoặc khi ngồi xổm đứng dậy.",
      "Rất phổ biến ở bệnh nhân nữ trung niên có thoái hóa khớp gối chân vòng kiềng (genu varum) hoặc béo phì."
    ],
    "contraindications": {
      "absolute": ["Nhiễm trùng da vùng cẳng chân trong."],
      "relative": ["Rách đứt gân chân ngỗng."]
    },
    "patientPosition": "Bệnh nhân nằm ngửa, chân bên tổn thương hơi gập gối 30 độ và xoay ngoài nhẹ.",
    "transducer": "Đầu dò Linear 10 - 15 MHz, độ sâu 2 - 3 cm.",
    "sonoanatomy": [
      "Mặt trong đầu trên xương chày (Tibia): Bề mặt xương tăng âm phẳng.",
      "Dây chằng bên trong (Medial Collateral Ligament - MCL): Dải tăng âm chạy áp sát vỏ xương chày.",
      "Phức hợp gân chân ngỗng: Gồm 3 gân từ trước ra sau: Gân cơ may (Sartorius), Gân cơ thon (Gracilis), Gân cơ bán gân (Semitendinosus) - câu thần chú 'Say Grace before Tea'.",
      "Bao hoạt dịch chân ngỗng: Khoang ảo nằm giữa mặt sâu các gân chân ngỗng và bề mặt dây chằng MCL / xương chày."
    ],
    "technique": {
      "approach": "In-plane từ phía dưới lên trên hoặc từ sau ra trước.",
      "needle": "Kim 25G, dài 25 - 38 mm.",
      "steps": [
        "1. Đặt đầu dò dọc hoặc chếch ở mặt trong đầu trên xương chày, cách khe khớp gối khoảng 4 cm về phía đầu xa.",
        "2. Nhận diện các dải gân chân ngỗng vắt qua bề mặt xương chày và dây chằng MCL.",
        "3. Đưa kim In-plane vào khoang ảo nằm ngay dưới các gân chân ngỗng.",
        "4. Bơm chậm 1.5 - 2.5 ml thuốc: thấy khoang bao hoạt dịch giãn tách nhẹ nhàng."
      ]
    },
    "drugsAndDosage": {
      "steroid": "Triamcinolone acetonide 20 mg (0.5 ml) hoặc Methylprednisolone 20 - 40 mg.",
      "localAnesthetic": "Lidocaine 1%: 1.5 - 2.0 ml."
    },
    "pearlsAndPitfalls": [
      "CHẨN ĐOÁN NHẦM LẪN: Đau gân chân ngỗng rất hay bị chẩn đoán nhầm là thoái hóa khớp gối hoặc tổn thương sừng sau sụn chêm trong. Khám lâm sàng ấn chói ngay điểm bám dưới khe khớp 4 cm.",
      "Không tiêm vào chất gân để tránh làm yếu gân chân ngỗng.",
      "Thần kinh hiển (Saphenous nerve) và nhánh dưới bánh chè chạy gần khu vực này, tránh đâm trúng."
    ],
    "postProcedure": "Khuyên bệnh nhân giảm tải, tập kéo giãn nhóm gân khoeo (hamstrings) và cơ khép đùi.",
    "figures": [
      {
        "path": "assets/images/ch23_knee/p291_img1.jpeg",
        "title": "Giải phẫu siêu âm phức hợp gân chân ngỗng (Pes Anserinus)",
        "desc": "Sartorius (S), Gracilis (G), Semitendinosus (ST) bám vào mặt trong xương chày (Tibia) trên dây chằng MCL."
      },
      {
        "path": "assets/images/ch23_knee/p293_img1.jpeg",
        "title": "Kỹ thuật tiêm bao hoạt dịch gân chân ngỗng dưới siêu âm",
        "desc": "Kim đi in-plane luồn vào khoang bao hoạt dịch nằm sâu dưới gân chân ngỗng."
      }
    ]
  },
  {
    "id": "genicular-nerves",
    "nameVi": "Phong bế & Diệt thần kinh cảm giác khớp gối (Genicular Nerve Block & RFA)",
    "nameEn": "Genicular Nerve Block and Radiofrequency Ablation (RFA)",
    "category": "lower",
    "subcategory": "knee",
    "type": "nerve",
    "difficulty": "Nâng cao",
    "icd10": "M17.0 (Thoái hóa khớp gối), Z96.65 (Khớp gối nhân tạo / Đau mạn tính sau mổ thay khớp gối)",
    "indications": [
      "Thoái hóa khớp gối nặng (độ III - IV) đau dữ dội nhưng có chống chỉ định phẫu thuật thay khớp (người già nhiều bệnh nền tim mạch, đái tháo đường, suy thận...).",
      "Đau khớp gối mạn tính dai dẳng sau phẫu thuật thay khớp gối nhân tạo (Persistent Post-Surgical Knee Pain).",
      "Bệnh nhân từ chối phẫu thuật thay khớp gối mong muốn giảm đau kéo dài 6 - 12 tháng."
    ],
    "contraindications": {
      "absolute": ["Nhiễm khuẩn vùng đùi gối.", "Dị ứng thuốc tê."],
      "relative": ["Rối loạn đông máu nặng (nếu làm đốt sóng cao tần RFA)."]
    },
    "patientPosition": "Bệnh nhân nằm ngửa, kê một gối nhỏ dưới khoeo gối gập nhẹ 20 - 30 độ.",
    "transducer": "Đầu dò Linear 10 - 15 MHz, độ sâu 2.5 - 3.5 cm.",
    "sonoanatomy": [
      "Ba nhánh thần kinh cảm giác đích (Target Genicular Nerves):",
      "1. Nhánh gối trên - trong (Superior Medial Genicular Nerve - SMGN): Nằm tại chỗ nối giữa thân xương đùi và lồi cầu trong xương đùi.",
      "2. Nhánh gối trên - ngoài (Superior Lateral Genicular Nerve - SLGN): Nằm tại chỗ nối giữa thân xương đùi và lồi cầu ngoài xương đùi.",
      "3. Nhánh gối dưới - trong (Inferior Medial Genicular Nerve - IMGN): Nằm tại chỗ nối giữa thân xương chày và mâm chày trong.",
      "(Lưu ý: Nhánh gối dưới - ngoài ILGN KHÔNG can thiệp vì nằm sát thần kinh mác chung, nguy cơ liệt bàn chân rủ)."
    ],
    "technique": {
      "approach": "In-plane theo trục dọc xương chạm trực tiếp vào bề mặt xương tại 3 điểm mốc.",
      "needle": "Kim 22G - 25G dài 50 mm (phong bế chẩn đoán) HOẶC kim RFA chuyên dụng 20G - 22G đầu trần 5-10 mm.",
      "steps": [
        "1. Xác định mốc SMGN: Đặt đầu dò dọc theo bờ trong xương đùi tại chỗ chuyển tiếp lồi cầu trong. Bật Doppler màu tìm động mạch gối trên trong chạy kèm.",
        "2. Đâm kim In-plane chạm xương sát cạnh động mạch, test hút không có máu, bơm 1 ml thuốc tê.",
        "3. Xác định mốc SLGN: Đặt đầu dò dọc bờ ngoài xương đùi chỗ chuyển tiếp lồi cầu ngoài, tìm động mạch gối trên ngoài, đưa kim chạm xương, bơm 1 ml thuốc tê.",
        "4. Xác định mốc IMGN: Đặt đầu dò dọc bờ trong xương chày chỗ chuyển tiếp mâm chày trong, tìm động mạch gối dưới trong, đưa kim chạm xương, bơm 1 ml thuốc tê.",
        "5. Đánh giá: Nếu bệnh nhân giảm đau > 50-70% sau phong bế thử nghiệm -> Đủ tiêu chuẩn làm đốt nhiệt RFA (80 độ C trong 90 giây mỗi điểm)."
      ]
    },
    "drugsAndDosage": {
      "diagnosticBlock": "Lidocaine 1% - 2% (0.5 - 1.0 ml mỗi nhánh) HOẶC Bupivacaine 0.25% (0.5 - 1.0 ml mỗi nhánh). Có thể thêm Triamcinolone 10 mg vào mỗi điểm.",
      "rfa": "Đốt sóng cao tần quy ước (Conventional RFA) 80°C trong 90 giây HOẶC sóng cao tần làm mát (Cooled RFA) 60°C trong 150 giây."
    },
    "pearlsAndPitfalls": [
      "MỐC MẠCH MÁU DẪN ĐƯỜNG: Mỗi dây thần kinh gối luôn có một nhánh động mạch gối đi kèm sát xương. Bật Doppler màu tìm động mạch đập là cách nhanh nhất và chính xác nhất để định vị thần kinh.",
      "TUYỆT ĐỐI TRÁNH NHÁNH GỐI DƯỚI NGOÀI: Không đốt nhánh Inferior Lateral Genicular vì dây thần kinh mác chung (Common Peroneal Nerve) chạy vòng quanh chỏm xương mác rất gần, có thể gây tổn thương liệt vận động nhóm cơ cẳng chân trước ngoài.",
      "Hiệu quả giảm đau sau RFA thần kinh gối kéo dài từ 6 tháng đến 1 năm."
    ],
    "postProcedure": "Bệnh nhân có thể đi lại nhẹ nhàng sau 30 phút theo dõi. Chườm mát nếu đau tại điểm chọc kim.",
    "figures": [
      {
        "path": "assets/images/ch27_hip_knee_denervation/p346_img1.jpeg",
        "title": "Sơ đồ giải phẫu các nhánh thần kinh cảm giác khớp gối (Genicular Nerves)",
        "desc": "SMGN (Gối trên trong), SLGN (Gối trên ngoài), IMGN (Gối dưới trong). Động mạch đi kèm là mốc Doppler then chốt."
      },
      {
        "path": "assets/images/ch27_hip_knee_denervation/p348_img1.jpeg",
        "title": "Hình ảnh siêu âm và kỹ thuật định vị thần kinh gối",
        "desc": "Đầu dò đặt dọc thân xương, kim đi in-plane chạm xương sát cạnh động mạch gối."
      }
    ]
  },

  # -------------------------------------------------------------
  # CHI DƯỚI - KHỚP HÁNG & KHUNG CHẬU
  # -------------------------------------------------------------
  {
    "id": "hip-intraarticular",
    "nameVi": "Tiêm nội khớp háng (Tiếp cận dọc cổ xương đùi)",
    "nameEn": "Hip Intra-articular Injection (Anterior Long-Axis Approach)",
    "category": "lower",
    "subcategory": "hip",
    "type": "joint",
    "difficulty": "Trung bình",
    "icd10": "M16.0 (Thoái hóa khớp háng nguyên phát hai bên), M16.1 (Thoái hóa khớp háng một bên), M87.05 (Hoại tử vô khuẩn chỏm xương đùi)",
    "indications": [
      "Thoái hóa khớp háng (Coxarthrosis) gây đau vùng bẹn, hạn chế dạng và xoay trong khớp háng.",
      "Hoại tử vô khuẩn chỏm xương đùi (Avascular Necrosis - AVN) giai đoạn sớm giảm đau bảo tồn.",
      "Viêm khớp háng do viêm cột sống dính khớp hoặc viêm khớp dạng thấp.",
      "Chụp cộng hưởng từ khớp háng có tiêm thuốc tương phản (MR Arthrogram)."
    ],
    "contraindications": {
      "absolute": ["Nhiễm khuẩn khớp háng.", "Nhiễm trùng da vùng bẹn đùi."],
      "relative": ["Bệnh nhân có khớp háng nhân tạo toàn phần.", "Béo phì nặng làm mờ cửa sổ siêu âm."]
    },
    "patientPosition": "Bệnh nhân nằm ngửa trên bàn khám, chân duỗi thẳng, hơi xoay ngoài nhẹ bàn chân (khoảng 15-20 độ) để cổ xương đùi mở rộng tối đa ra trước.",
    "transducer": "Đầu dò Curvilinear (Convex) 2 - 5 MHz ở đa số người lớn; hoặc đầu dò Linear 6 - 12 MHz ở người gầy. Độ sâu cài đặt 6 - 9 cm.",
    "sonoanatomy": [
      "Chỏm xương đùi (Femoral head): Đường cong tăng âm tròn đều phía trên trong.",
      "Cổ xương đùi (Femoral neck): Vùng xương phẳng nghiêng nối tiếp từ chỏm đùi xuống thân đùi.",
      "Sụn viền ổ cối (Acetabular labrum): Cấu trúc tam giác tăng âm bám ở bờ ổ cối.",
      "Bao khớp trước và dây chằng chậu đùi: Dải xơ dày tăng âm nằm song song phía trên cổ xương đùi.",
      "Cơ thắt lưng chậu (Iliopsoas muscle): Lớp cơ dày nằm nông hơn bao khớp.",
      "BÓ MẠCH THẦN KINH ĐÙI: Nằm ở phía trong đường quét siêu âm khoảng 1.5 - 2.5 cm. Luôn dùng Doppler xác định động mạch đùi."
    ],
    "technique": {
      "approach": "In-plane theo trục dọc cổ xương đùi từ phía dưới (đuôi) lên trên (đầu) - Distal to Proximal.",
      "needle": "Kim tủy sống chọc dò Spinal Needle 20G - 22G, dài 70 - 90 mm (hoặc 120 mm ở người béo phì).",
      "steps": [
        "1. Đặt đầu dò cắt ngang nếp bẹn để xác định động mạch đùi, tĩnh mạch đùi và thần kinh đùi.",
        "2. Di chuyển đầu dò ra phía ngoài khoảng 2 cm để rời khỏi bó mạch đùi.",
        "3. Xoay đầu dò chéo góc khoảng 45 độ theo trục dọc của cổ xương đùi (hướng từ gai chậu trước dưới đến mấu chuyển lớn).",
        "4. Nhận diện chỏm xương đùi, cổ xương đùi và khoang bao khớp trước.",
        "5. Gây tê tại chỗ từng lớp từ da đến bao khớp bằng Lidocaine 1%.",
        "6. Đâm kim In-plane từ đầu xa (phía dưới) đưa mũi kim tiến dần dọc theo trục cổ xương đùi.",
        "7. Đích đến của mũi kim: Đi xuyên qua bao khớp trước, mũi kim chạm nhẹ vào vị trí chỗ nối giữa chỏm và cổ xương đùi (Head-Neck Junction).",
        "8. Hút thử không có máu, bơm chậm thuốc: quan sát bao khớp phồng tách khỏi bề mặt cổ xương đùi."
      ]
    },
    "drugsAndDosage": {
      "steroid": "Triamcinolone acetonide 40 - 80 mg (1.0 - 2.0 ml) hoặc Methylprednisolone 40 - 80 mg.",
      "localAnesthetic": "Ropivacaine 0.2% hoặc Lidocaine 1%: 3 - 5 ml.",
      "viscosupplementation": "Acid Hyaluronic khớp háng: 2 - 4 ml.",
      "prp": "PRP khớp háng: 3 - 5 ml."
    },
    "pearlsAndPitfalls": [
      "AN TOÀN BÓ MẠCH ĐÙI: Luôn quét Doppler màu xác định động mạch đùi và giữ hướng đi kim hoàn toàn ở phía ngoài bó mạch.",
      "MŨI KIM PHẢI CHẠM XƯƠNG CỔ ĐÙI: Để đảm bảo 100% thuốc vào trong khoang bao khớp, mũi kim cần xuyên qua bao khớp và chạm nhẹ bề mặt vỏ xương chỗ nối chỏm-cổ đùi.",
      "Không đâm vào sụn viền ổ cối (labrum) ở phía trên."
    ],
    "postProcedure": "Nghỉ ngơi tại chỗ 20 phút, tránh đi bộ nhiều hoặc leo cầu thang trong 48 giờ.",
    "figures": [
      {
        "path": "assets/images/ch22_hip/p271_img1.jpeg",
        "title": "Giải phẫu siêu âm khớp háng theo trục dọc cổ xương đùi",
        "desc": "FH (Chỏm xương đùi), FN (Cổ xương đùi), AL (Sụn viền ổ cối), Capsule (Bao khớp). Target: Chỗ nối chỏm - cổ đùi."
      },
      {
        "path": "assets/images/ch22_hip/p272_img1.jpeg",
        "title": "Kỹ thuật tiêm In-plane nội khớp háng dưới siêu âm",
        "desc": "Kim tủy sống dài đi in-plane từ dưới lên trên, mũi kim chạm vỏ xương chỗ nối chỏm-cổ xương đùi."
      }
    ]
  },
  {
    "id": "trochanteric-bursa",
    "nameVi": "Tiêm phức hợp mấu chuyển lớn & bao hoạt dịch mấu chuyển (GTPS)",
    "nameEn": "Greater Trochanteric Pain Syndrome (GTPS) / Trochanteric Bursa Injection",
    "category": "lower",
    "subcategory": "hip",
    "type": "bursa",
    "difficulty": "Cơ bản",
    "icd10": "M70.6 (Viêm bao hoạt dịch mấu chuyển lớn), M70.60 (Hội chứng đau mấu chuyển lớn GTPS)",
    "indications": [
      "Hội chứng đau mấu chuyển lớn (Greater Trochanteric Pain Syndrome - GTPS).",
      "Viêm bao hoạt dịch mấu chuyển lớn, viêm điểm bám gân cơ mông nhỡ và cơ mông bé.",
      "Đau nhức mặt ngoài khớp háng lan xuống mặt ngoài đùi, đau chói khi nằm nghiêng đè lên bên háng đau."
    ],
    "contraindications": {
      "absolute": ["Nhiễm khuẩn mô mềm vùng mấu chuyển lớn."],
      "relative": ["Rách hoàn toàn gân cơ mông nhỡ có chỉ định phẫu thuật khâu gân."]
    },
    "patientPosition": "Bệnh nhân nằm nghiêng sang bên lành, háng bên tiêm hơi gập nhẹ 30 độ và gập gối để thư giãn dải chậu chày.",
    "transducer": "Đầu dò Linear 8 - 14 MHz hoặc Curvilinear (ở bệnh nhân béo), độ sâu 3 - 5 cm.",
    "sonoanatomy": [
      "Mấu chuyển lớn xương đùi: Gồm 3 diện xương chính: diện trước (anterior facet), diện bên (lateral facet), diện sau (posterior facet).",
      "Gân cơ mông bé (Gluteus minimus): Bám vào diện trước.",
      "Gân cơ mông nhỡ (Gluteus medius): Bám vào diện bên và diện sau.",
      "Bao hoạt dịch mấu chuyển lớn (Trochanteric bursa): Khoang ảo nằm giữa mặt nông gân cơ mông nhỡ và mặt sâu dải chậu chày.",
      "Dải chậu chày (Iliotibial band - ITB): Dải xơ tăng âm dày nằm phủ nông nhất."
    ],
    "technique": {
      "approach": "In-plane từ phía sau ra trước hoặc từ đầu xa về đầu gần.",
      "needle": "Kim 22G, dài 50 - 70 mm.",
      "steps": [
        "1. Đặt đầu dò cắt ngang đỉnh mấu chuyển lớn.",
        "2. Đánh giá gân cơ mông nhỡ, mông bé và dải chậu chày xem có thoái hóa, rách gân hay tràn dịch bursa.",
        "3. Đâm kim In-plane xuyên qua da, lớp mỡ và dải chậu chày.",
        "4. Đích kim: Nằm trong khoang bao hoạt dịch ngay trên diện bám gân cơ mông nhỡ.",
        "5. Bơm 3 - 5 ml thuốc: thấy dung dịch bóc tách khoang bursa dưới dải chậu chày."
      ]
    },
    "drugsAndDosage": {
      "steroid": "Triamcinolone acetonide 40 mg (1.0 ml) hoặc Methylprednisolone 40 mg.",
      "localAnesthetic": "Lidocaine 1% hoặc Ropivacaine 0.2%: 3 - 4 ml (Tổng thể tích: 4 - 5 ml).",
      "prp": "PRP 3 - 4 ml tiêm vào điểm bám gân cơ mông nhỡ nếu có thoái hóa gân mạn tính."
    },
    "pearlsAndPitfalls": [
      "Đa số các trường hợp GTPS bản chất là viêm/thoái hóa gân cơ mông nhỡ (Gluteus medius tendinopathy) chứ không đơn thuần chỉ là viêm bao hoạt dịch.",
      "Không tiêm corticoid trực tiếp vào chất gân cơ mông nhỡ để tránh nguy cơ đứt gân.",
      "Tiêm dưới siêu âm đảm bảo thuốc nằm chính xác trong bao hoạt dịch dưới dải chậu chày, hiệu quả vượt trội so với tiêm mù."
    ],
    "postProcedure": "Tránh nằm đè lên bên tiêm, tránh ngồi bắt chéo chân trong 2 tuần.",
    "figures": [
      {
        "path": "assets/images/ch22_hip/p276_img1.jpeg",
        "title": "Giải phẫu siêu âm mấu chuyển lớn và các gân cơ mông",
        "desc": "GT (Mấu chuyển lớn), GMed (Gân cơ mông nhỡ), GMin (Gân cơ mông bé), ITB (Dải chậu chày)."
      }
    ]
  },
  {
    "id": "piriformis-muscle",
    "nameVi": "Tiêm cơ hình lê điều trị Hội chứng cơ hình lê (Piriformis Syndrome)",
    "nameEn": "Piriformis Muscle Ultrasound-Guided Injection",
    "category": "lower",
    "subcategory": "hip",
    "type": "nerve",
    "difficulty": "Nâng cao",
    "icd10": "G57.0 (Hội chứng cơ hình lê / Tổn thương thần kinh tọa vùng mông)",
    "indications": [
      "Hội chứng cơ hình lê (Piriformis Syndrome) gây chèn ép thần kinh tọa (đau nhức sâu vùng mông lan xuống mặt sau đùi và cẳng chân giống thoát vị đĩa đệm nhưng MRI cột sống thắt lưng không chèn ép rễ).",
      "Đau vùng mông tăng lên khi ngồi lâu (nghiệm pháp FAIR, Freiberg, Beatty dương tính)."
    ],
    "contraindications": {
      "absolute": ["Nhiễm khuẩn vùng mông sâu.", "Khối u vùng chậu chèn ép thần kinh tọa."],
      "relative": ["Rối loạn đông máu nặng.", "Thần kinh tọa có biến thể đâm xuyên qua bụng cơ hình lê."]
    },
    "patientPosition": "Bệnh nhân nằm sấp, kê một gối dưới bụng chậu, hai bàn chân xoay trong nhẹ.",
    "transducer": "Đầu dò Curvilinear (Convex) 2 - 5 MHz (vì cơ hình lê nằm sâu 5 - 8 cm dưới lớp cơ mông lớn rất dày).",
    "sonoanatomy": [
      "Gai chậu sau trên (PSIS) và Bờ bên xương cùng: Mốc xương phía trong.",
      "Mấu chuyển lớn xương đùi: Mốc xương phía ngoài.",
      "Cơ mông lớn (Gluteus maximus): Lớp cơ nông dày nhất vùng mông.",
      "Cơ hình lê (Piriformis muscle): Lớp cơ hình thoi nằm sâu dưới cơ mông lớn, chạy chếch từ xương cùng ra mấu chuyển lớn.",
      "THẦN KINH TỌA (Sciatic Nerve): Dải tăng âm hình bầu dục nằm sâu ngay mặt trước dưới của cơ hình lê.",
      "Mạch máu mông trên và mông dưới: Bật Doppler màu để tránh."
    ],
    "technique": {
      "approach": "In-plane từ phía ngoài vào trong hoặc từ trong ra ngoài theo trục dọc cơ hình lê.",
      "needle": "Kim tủy sống Spinal needle 21G - 22G, dài 70 - 90 mm.",
      "steps": [
        "1. Đặt đầu dò nối giữa mấu chuyển lớn và bờ ngoài xương cùng để tìm trục cơ hình lê.",
        "2. Nhận diện cơ mông lớn ở nông và cơ hình lê ở sâu.",
        "3. Quét đầu dò ra phía ngoài để định vị dây thần kinh tọa chạy sát bờ dưới hoặc mặt sâu cơ hình lê.",
        "4. Bật Doppler màu loại trừ động mạch mông dưới.",
        "5. Đâm kim In-plane đi xuyên qua lớp cơ mông lớn tiến vào bụng cơ hình lê.",
        "6. Nếu tiêm cơ: đầu kim nằm giữa bụng cơ hình lê.",
        "7. Nếu tiêm giải áp quanh thần kinh tọa: đầu kim luồn vào khoang mạc nằm giữa cơ hình lê và thần kinh tọa.",
        "8. Hút thử không có máu, bơm chậm 4 - 6 ml thuốc."
      ]
    },
    "drugsAndDosage": {
      "steroid": "Triamcinolone 40 mg (1.0 ml) hoặc Methylprednisolone 40 mg.",
      "localAnesthetic": "Lidocaine 1% hoặc Ropivacaine 0.2%: 3 - 5 ml.",
      "botulinumToxin": "Botulinum Toxin Type A (Botox) 50 - 100 UI (cho co thắt cơ hình lê mạn tính kháng trị)."
    },
    "pearlsAndPitfalls": [
      "NGUY HIỂM THẦN KINH TỌA: Thần kinh tọa nằm ngay sát mặt sâu cơ hình lê. Không đâm xuyên kim vào lòng thần kinh tọa. Nếu bệnh nhân thấy điện giật bắn xuống bàn chân -> Dừng lại và rút kim 2 mm!",
      "Độ sâu vùng mông lớn: Bắt buộc dùng đầu dò Convex tần số thấp để nhìn rõ cấu trúc sâu 6-8 cm.",
      "Luôn dùng Doppler màu kiểm tra động mạch mông trên và mông dưới."
    ],
    "postProcedure": "Theo dõi cảm giác và vận động bàn chân (nguy cơ yếu tạm thời nếu thuốc tê ngấm vào thần kinh tọa) trong 30-45 phút.",
    "figures": [
      {
        "path": "assets/images/ch8_pelvic_muscles/p105_img1.jpeg",
        "title": "Giải phẫu siêu âm cơ hình lê và thần kinh tọa vùng mông sâu",
        "desc": "GMax (Cơ mông lớn), PM (Cơ hình lê), SN (Thần kinh tọa nằm ngay dưới cơ hình lê). Ilium/Sacrum (Xương chậu/cùng)."
      },
      {
        "path": "assets/images/ch8_pelvic_muscles/p108_img1.jpeg",
        "title": "Kỹ thuật đi kim tiêm cơ hình lê dưới siêu âm",
        "desc": "Kim dài đi in-plane từ ngoài vào trong xuyên qua cơ mông lớn vào trung tâm cơ hình lê."
      }
    ]
  },
  {
    "id": "lfcn-block",
    "nameVi": "Phong bế thần kinh bì đùi ngoài - Meralgia Paresthetica",
    "nameEn": "Lateral Femoral Cutaneous Nerve (LFCN) Block",
    "category": "lower",
    "subcategory": "hip",
    "type": "nerve",
    "difficulty": "Trung bình",
    "icd10": "G57.1 (Bệnh lý dị cảm đùi / Meralgia Paresthetica)",
    "indications": [
      "Dị cảm đùi mạn tính (Meralgia Paresthetica) do chèn ép thần kinh bì đùi ngoài dưới dây chằng bẹn (đau rát, tê bì, kim châm mặt trước ngoài đùi, thường gặp ở người béo phì, phụ nữ có thai, hoặc đeo thắt lưng bó sát).",
      "Giảm đau trong phẫu thuật hoặc sau chấn thương vùng đùi ngoài."
    ],
    "contraindications": {
      "absolute": ["Nhiễm khuẩn vùng bẹn chậu."],
      "relative": ["Rối loạn đông máu nặng."]
    },
    "patientPosition": "Bệnh nhân nằm ngửa, chân duỗi thẳng thoải mái.",
    "transducer": "Đầu dò Linear dải tần cao 10 - 15 MHz, độ sâu 2 - 3 cm.",
    "sonoanatomy": [
      "Gai chậu trước trên (ASIS): Mốc xương tăng âm gồ cao phía ngoài.",
      "Cơ may (Sartorius muscle): Khối cơ hình tam giác nằm phía trong ASIS.",
      "Cơ căng mạc đùi (Tensor Fasciae Latae - TFL): Khối cơ nằm phía ngoài ASIS.",
      "THẦN KINH BÌ ĐÙI NGOÀI (LFCN): Cấu trúc hình bầu dục nhỏ giảm âm hoặc tăng âm dạng tổ ong nằm trong khoang mạc giữa cơ may và cơ căng mạc đùi, ngay dưới dây chằng bẹn."
    ],
    "technique": {
      "approach": "In-plane từ ngoài vào trong xuyên qua mạc đùi.",
      "needle": "Kim 25G, dài 38 - 50 mm.",
      "steps": [
        "1. Đặt đầu dò cắt ngang ngay dưới gai chậu trước trên (ASIS).",
        "2. Nhận diện góc chữ V giữa cơ may (phía trong) và cơ căng mạc đùi TFL (phía ngoài).",
        "3. Tìm dây thần kinh LFCN nhỏ nằm trong khoang mạc kẹp giữa 2 cơ.",
        "4. Đưa kim In-plane từ phía ngoài vào khoang mạc quanh thần kinh.",
        "5. Bơm 3 - 5 ml thuốc tê: quan sát dịch bóc tách khoang mạc ôm lấy thần kinh."
      ]
    },
    "drugsAndDosage": {
      "steroid": "Triamcinolone 20 mg (0.5 ml) hoặc Dexamethasone 4 mg (1 ml).",
      "localAnesthetic": "Ropivacaine 0.2% hoặc Lidocaine 1%: 3 - 5 ml."
    },
    "pearlsAndPitfalls": [
      "BIẾN THỂ GIẢI PHẪU RẤT LỚN: Thần kinh LFCN có thể đi dưới, xuyên qua hoặc trên dây chằng bẹn; có thể phân nhánh sớm thành 2-3 nhánh. Quét đầu dò lên xuống dọc theo rãnh giữa cơ may và TFL để tìm nhánh chính.",
      "Tránh tiêm quá sâu vào cơ may hoặc cơ thắt lưng chậu."
    ],
    "postProcedure": "Theo dõi cảm giác tê bì mặt trước ngoài đùi trong 15-20 phút.",
    "figures": [
      {
        "path": "assets/images/ch10_lfn/p131_img1.jpeg",
        "title": "Hình ảnh siêu âm thần kinh bì đùi ngoài (LFCN)",
        "desc": "LFCN nằm trong góc mạc giữa Sartorius (cơ may) và TFL (cơ căng mạc đùi) dưới mốc xương ASIS."
      },
      {
        "path": "assets/images/ch10_lfn/p133_img1.jpeg",
        "title": "Kỹ thuật tiêm In-plane phong bế LFCN dưới siêu âm",
        "desc": "Kim đi in-plane luồn vào khoang mạc quanh thần kinh bì đùi ngoài."
      }
    ]
  },

  # -------------------------------------------------------------
  # CHI DƯỚI - CỔ CHÂN & BÀN CHÂN
  # -------------------------------------------------------------
  {
    "id": "tibiotalar-joint",
    "nameVi": "Tiêm nội khớp cổ chân (Khớp chày - sên lối trước)",
    "nameEn": "Tibiotalar (Ankle) Joint Injection (Anterior Approach)",
    "category": "lower",
    "subcategory": "ankle_foot",
    "type": "joint",
    "difficulty": "Cơ bản",
    "icd10": "M19.07 (Thoái hóa khớp cổ chân và bàn chân), M05.87 (Viêm khớp dạng thấp ở cổ chân)",
    "indications": [
      "Thoái hóa khớp cổ chân (khớp chày - sên) sau chấn thương lật cổ chân hoặc gãy xương cũ.",
      "Viêm khớp cổ chân trong bệnh Gút, Viêm khớp dạng thấp, Viêm cột sống dính khớp.",
      "Tràn dịch khớp cổ chân cần chọc hút dịch chẩn đoán và điều trị."
    ],
    "contraindications": {
      "absolute": ["Nhiễm khuẩn khớp cổ chân mủ.", "Nhiễm trùng da mu cổ chân."],
      "relative": ["Tắc hẹp mạch máu chi dưới nặng."]
    },
    "patientPosition": "Bệnh nhân nằm ngửa, gối gập 45 độ, lòng bàn chân đặt phẳng trên giường khám (như tư thế đạp xe).",
    "transducer": "Đầu dò Linear 10 - 15 MHz, độ sâu 2.5 - 3.5 cm.",
    "sonoanatomy": [
      "Bờ trước đầu dưới xương chày (Distal tibia): Mốc xương tăng âm phía trên.",
      "Vòm xương sên (Talar dome): Bề mặt xương cong tròn tăng âm phía dưới, phủ bởi lớp sụn khớp giảm âm đều đặn.",
      "Khoang khớp chày - sên: Khe hẹp giữa xương chày và xương sên, có bao khớp mỏng.",
      "CÁC CẤU TRÚC PHÍA TRƯỚC: Gân chày trước (Tibialis anterior), gân duỗi ngón cái dài (EHL), gân duỗi các ngón dài (EDL).",
      "BÓ MẠCH THẦN KINH MU CHÂN: Động mạch chày trước / động mạch mu chân và thần kinh mác sâu chạy kẹp giữa gân chày trước và EHL."
    ],
    "technique": {
      "approach": "In-plane theo trục dọc từ dưới lên trên hoặc từ trên xuống dưới.",
      "needle": "Kim 23G - 25G, dài 25 - 38 mm.",
      "steps": [
        "1. Đặt đầu dò cắt dọc mặt trước cổ chân.",
        "2. Xác định rõ khe khớp giữa bờ trước xương chày và vòm xương sên.",
        "3. BẬT DOPPLER MÀU: Định vị động mạch mu chân để chọn đường vào kim lệch sang phía trong (giữa gân chày trước và mắt cá trong) hoặc lệch sang phía ngoài.",
        "4. Đưa kim In-plane vào khe khớp chày sên.",
        "5. Đầu kim nằm trong khoang khớp tựa trên sụn xương sên.",
        "6. Bơm nhẹ 1.5 - 2.5 ml dung dịch."
      ]
    },
    "drugsAndDosage": {
      "steroid": "Triamcinolone acetonide 20 - 40 mg (0.5 - 1.0 ml) hoặc Methylprednisolone 40 mg.",
      "localAnesthetic": "Lidocaine 1%: 1 - 2 ml.",
      "viscosupplementation": "Acid Hyaluronic khớp cổ chân: 1.5 - 2.0 ml."
    },
    "pearlsAndPitfalls": [
      "TRÁNH ĐỘNG MẠCH CHÀY TRƯỚC: Luôn bật Doppler màu để né động mạch mu chân và thần kinh mác sâu.",
      "Nếu khe khớp hẹp do gai xương thoái hóa: bảo bệnh nhân làm động tác gập mu bàn chân (dorsiflexion) hoặc kéo nhẹ cổ chân để mở rộng khe khớp.",
      "Không đâm kim vào sụn khớp vòm sên."
    ],
    "postProcedure": "Hạn chế chạy nhảy hoặc đi bộ đường dài trong 48 giờ.",
    "figures": [
      {
        "path": "assets/images/ch24_ankle_foot/p302_img1.jpeg",
        "title": "Hình ảnh siêu âm khớp chày sên mặt trước cổ chân",
        "desc": "Tibia (Xương chày), Talus (Xương sên), Cartilage (Sụn khớp vòm sên). Khe khớp chày sên."
      }
    ]
  },
  {
    "id": "plantar-fascia",
    "nameVi": "Tiêm cân gan chân điều trị Viêm cân gan chân (Plantar Fasciitis)",
    "nameEn": "Plantar Fascia Injection",
    "category": "lower",
    "subcategory": "ankle_foot",
    "type": "tendon",
    "difficulty": "Cơ bản",
    "icd10": "M72.2 (Viêm cân gan chân / Gai xương gót)",
    "indications": [
      "Viêm cân gan chân (Plantar Fasciitis / Gai xương gót) đau thốn gót chân dữ dội khi đặt bước chân đầu tiên xuống giường vào buổi sáng.",
      "Thất bại với điều trị vật lý trị liệu, bài tập kéo giãn gân gót và đệm lót gót sau 6 - 8 tuần."
    ],
    "contraindications": {
      "absolute": ["Nhiễm khuẩn vùng gan chân."],
      "relative": [
        "Rách một phần hoặc thoái hóa mủn cân gan chân nặng (nguy cơ đứt hoàn toàn cân gan chân nếu tiêm corticoid).",
        "Tiêm corticoid nhiều lần trước đó (trên 2 lần)."
      ]
    },
    "patientPosition": "Bệnh nhân nằm sấp, bàn chân thả lỏng thò ra ngoài mép giường khám (hoặc nằm ngửa gập gối xoay ngoài chân).",
    "transducer": "Đầu dò Linear 10 - 15 MHz, độ sâu 2 - 3 cm.",
    "sonoanatomy": [
      "Củ trong xương gót (Medial calcaneal tuberosity): Mốc xương tăng âm đáy gót.",
      "Cân gan chân (Plantar fascia): Dải sợi dày tăng âm bám vào xương gót. Bình thường bề dày < 4.0 mm. Khi viêm: cân dày > 4.5 - 6.0 mm, giảm âm, mất cấu trúc sợi song song, có thể có gai xương gót (heel spur).",
      "Đệm mỡ gót chân (Heel fat pad): Lớp mỡ dày nằm nông bao phủ cân gan chân."
    ],
    "technique": {
      "approach": "In-plane từ phía bờ trong gót chân (Medial Approach) - TRÁNH đâm xuyên qua đệm mỡ gan chân!",
      "needle": "Kim 25G - 27G, dài 38 mm.",
      "steps": [
        "1. Đặt đầu dò cắt dọc cân gan chân từ củ gót hướng về phía các ngón chân.",
        "2. Đo bề dày cân gan chân tại điểm bám xương gót và đánh giá độ giảm âm.",
        "3. Đâm kim In-plane từ BỜ TRONG gót chân (đâm ngang dưới đầu dò).",
        "4. Đích kim: Nằm ở mặt sâu của cân gan chân (giữa cân gan chân và xương gót) HOẶC mặt nông ngay sát bao cân.",
        "5. TUYỆT ĐỐI KHÔNG tiêm vào lõi chất cân gan chân và KHÔNG tiêm vào đệm mỡ gót chân.",
        "6. Bơm chậm 1.0 - 1.5 ml dung dịch."
      ]
    },
    "drugsAndDosage": {
      "steroid": "Triamcinolone 10 - 20 mg (0.25 - 0.5 ml) + Lidocaine 1% (0.5 - 1.0 ml).",
      "prp": "PRP 2 - 3 ml (Là liệu pháp sinh học lý tưởng giúp tái tạo vi tổn thương cân gan chân mà không lo biến chứng đứt gân hay teo mỡ).",
      "dextroseProlotherapy": "Dextrose 15-20% tiêm điểm bám kích thích tăng sinh."
    },
    "pearlsAndPitfalls": [
      "BIẾN CHỨNG TEO ĐỆM MỠ GÓT CHÂN (Fat Pad Atrophy): Nếu đâm kim xuyên qua lòng bàn chân vào đệm mỡ gót và tiêm corticoid, đệm mỡ sẽ bị teo tiêu vĩnh viễn khiến bệnh nhân đi lại như dẫm trực tiếp xương gót xuống đất cực kỳ đau đớn không thể hồi phục. BẮT BUỘC tiếp cận từ bờ trong gót chân!",
      "BIẾN CHỨNG ĐỨT CÂN GAN CHÂN: Không tiêm ngập thuốc vào lòng cân gan chân.",
      "PRP cho hiệu quả tương đương steroid ở 1 tháng nhưng vượt trội hoàn toàn ở 6-12 tháng."
    ],
    "postProcedure": "Đi giày mềm có đệm lót gót silicon, kiêng chạy nhảy chịu lực mạnh trong 2 tuần.",
    "figures": [
      {
        "path": "assets/images/ch24_ankle_foot/p302_img2.jpeg",
        "title": "Hình ảnh siêu âm viêm dày cân gan chân tại củ gót",
        "desc": "PF (Plantar Fascia) dày phì đại > 4.5mm giảm âm bám vào Calcaneus (Xương gót). Lớp đệm mỡ Fat Pad ở nông."
      }
    ]
  },

  # -------------------------------------------------------------
  # CỘT SỐNG & KHUNG CHẬU
  # -------------------------------------------------------------
  {
    "id": "sacroiliac-joint",
    "nameVi": "Tiêm khớp cùng chậu (Sacroiliac Joint Injection - SIJ)",
    "nameEn": "Sacroiliac Joint (SIJ) Injection",
    "category": "spine",
    "subcategory": "pelvis",
    "type": "joint",
    "difficulty": "Trung bình",
    "icd10": "M46.1 (Viêm khớp cùng chậu), M53.3 (Đau khớp cùng chậu / Rối loạn vùng cùng cụt)",
    "indications": [
      "Viêm khớp cùng chậu trong bệnh lý cột sống huyết thanh âm tính (Viêm cột sống dính khớp, Viêm khớp vảy nến, Viêm khớp phản ứng).",
      "Hội chứng đau khớp cùng chậu cơ học sau chấn thương, sau mổ hàn xương thắt lưng, hoặc sau sinh đẻ.",
      "Đau nhức vùng mông lan xuống mặt sau đùi (nghiệm pháp Patrick/FABER, Gaenslen, Compression test dương tính)."
    ],
    "contraindications": {
      "absolute": ["Nhiễm khuẩn khớp cùng chậu hoặc áp xe lân cận."],
      "relative": ["Cứng dính khớp cùng chậu hoàn toàn (ankylosis) giai đoạn muộn không còn khe khớp."]
    },
    "patientPosition": "Bệnh nhân nằm sấp thoải mái, kê gối dưới bụng để làm phẳng độ ưỡn thắt lưng.",
    "transducer": "Đầu dò Curvilinear 2 - 5 MHz (người đậm) hoặc Linear 6 - 12 MHz (người gầy), độ sâu 4 - 6 cm.",
    "sonoanatomy": [
      "Gai chậu sau trên (PSIS): Mốc xương tăng âm gồ cao phía ngoài.",
      "Cánh xương cùng (Sacrum): Mốc xương tăng âm phía trong.",
      "Khe khớp cùng chậu (SI joint cleft): Khe nối giữa xương cùng và xương chậu.",
      "Cực dưới của khớp cùng chậu: Vị trí lý tưởng nhất vì bao khớp ở đây có tính hoạt dịch và dây chằng cùng chậu sau mỏng hơn so với cực trên."
    ],
    "technique": {
      "approach": "In-plane từ phía ngoài vào trong (Lateral to Medial) tại cực dưới của khớp.",
      "needle": "Kim tủy sống Spinal needle 22G, dài 50 - 70 mm.",
      "steps": [
        "1. Đặt đầu dò ngang tại mức gai chậu sau trên (PSIS).",
        "2. Di chuyển đầu dò từ từ xuống phía dưới (caudad) đến khi thấy cực dưới của khớp cùng chậu.",
        "3. Nhận diện đường khe khớp nằm giữa xương cùng và xương chậu.",
        "4. Bật Doppler màu để tránh nhánh động mạch mông trên.",
        "5. Đâm kim In-plane từ phía ngoài vào trong hướng mũi kim vào khe khớp.",
        "6. Cảm nhận đầu kim đi qua dây chằng cùng chậu sau (tiếng 'pop' nhẹ) và chạm vào khe khớp.",
        "7. Hút thử không có máu, bơm chậm 1.5 - 2.0 ml thuốc."
      ]
    },
    "drugsAndDosage": {
      "steroid": "Triamcinolone 40 mg (1.0 ml) hoặc Methylprednisolone 40 mg.",
      "localAnesthetic": "Lidocaine 1% hoặc Ropivacaine 0.2%: 1.0 - 1.5 ml (Tổng thể tích khớp cùng chậu chỉ khoảng 1.5 - 2.5 ml)."
    },
    "pearlsAndPitfalls": [
      "Khớp cùng chậu là khớp hình chữ L/C phức tạp: Phần 1/3 dưới là khớp hoạt dịch thật sự, 2/3 trên là khớp sợi dây chằng. BẮT BUỘC tiêm vào 1/3 dưới để thuốc vào được khoang hoạt dịch.",
      "Nếu không vào được nội khớp: tiêm thuốc quanh dây chằng cùng chậu sau (peri-articular) cũng mang lại hiệu quả giảm đau rất tốt do phong bế các thụ cảm thể thần kinh.",
      "Theo dõi giảm đau: Giảm đau > 75% sau phong bế giúp khẳng định chẩn đoán đau do khớp cùng chậu."
    ],
    "postProcedure": "Bệnh nhân nằm nghỉ 20 phút trước khi ra về.",
    "figures": [
      {
        "path": "assets/images/ch15_sacroiliac_joint/p191_img1.jpeg",
        "title": "Hình ảnh siêu âm khe khớp cùng chậu (Sacroiliac Joint)",
        "desc": "Ilium (Xương chậu), Sacrum (Xương cùng). Mũi tên chỉ khe khớp cùng chậu ở 1/3 dưới."
      },
      {
        "path": "assets/images/ch15_sacroiliac_joint/p193_img1.jpeg",
        "title": "Kỹ thuật tiêm In-plane khớp cùng chậu dưới siêu âm",
        "desc": "Kim đi in-plane từ ngoài vào trong vào khe khớp cùng chậu tại cực dưới."
      }
    ]
  },
  {
    "id": "caudal-epidural",
    "nameVi": "Tiêm ngoài màng cứng qua khe xương cùng (Caudal Epidural)",
    "nameEn": "Caudal Epidural Steroid Injection (CESI)",
    "category": "spine",
    "subcategory": "pelvis",
    "type": "spine",
    "difficulty": "Trung bình",
    "icd10": "M54.5 (Đau thắt lưng), M54.4 (Đau thắt lưng hông / Đau thần kinh tọa), M51.16 (Thoát vị đĩa đệm thắt lưng có chèn ép rễ)",
    "indications": [
      "Đau thần kinh tọa do thoát vị đĩa đệm cột sống thắt lưng đoạn thấp (L4-L5, L5-S1).",
      "Hẹp ống sống thắt lưng (Lumbar spinal stenosis) gây đau cách hồi thần kinh.",
      "Hội chứng thất bại sau mổ cột sống thắt lưng (Failed Back Surgery Syndrome - FBSS) khó tiếp cận lối liên bản sống do sẹo xơ dính.",
      "Giảm đau vùng đáy chậu, đau vùng xương cụt mạn tính."
    ],
    "contraindications": {
      "absolute": [
        "Nhiễm khuẩn vùng xương cùng cụt (nang lông pilonidal sinus, viêm da rãnh liên mông).",
        "Rối loạn đông máu nặng hoặc đang dùng kháng đông liều cao.",
        "Tăng áp lực nội sọ."
      ],
      "relative": ["Dị tật nứt đốt sống chẻ đôi (Spina bifida) thể nặng.", "Phụ nữ có thai."]
    },
    "patientPosition": "Bệnh nhân nằm sấp, kê gối dưới vùng chậu để đẩy xương cùng lên cao, hai gót chân xoay ngoài nhẹ.",
    "transducer": "Đầu dò Linear dải tần cao 8 - 14 MHz (ở người gầy) hoặc Curvilinear (ở người béo phì), độ sâu 2.5 - 4.5 cm.",
    "sonoanatomy": [
      "Hai sừng xương cùng (Sacral cornua): Hai gờ xương tăng âm nhô cao đối xứng hai bên (hình ảnh 'mắt cú vọ' - two eyes).",
      "Màng cùng - cụt (Sacrococcygeal ligament): Dải tăng âm căng ngang giữa hai sừng cùng.",
      "Mặt sau thân xương cùng: Vỏ xương tăng âm ở đáy sâu.",
      "Khoang ngoài màng cứng ống cùng (Caudal canal): Khoang giảm âm nằm giữa màng cùng cụt và vỏ thân xương cùng."
    ],
    "technique": {
      "approach": "In-plane theo trục dọc giữa hai sừng xương cùng (Longitudinal In-plane).",
      "needle": "Kim tủy sống Spinal needle 22G, dài 50 - 70 mm.",
      "steps": [
        "1. Đặt đầu dò cắt ngang tìm 2 sừng xương cùng và màng cùng cụt căng ngang.",
        "2. Xoay đầu dò 90 độ sang trục dọc chính giữa hai sừng để thấy rõ ống cùng kéo dài lên trên.",
        "3. Sát trùng diện rộng vùng cùng cụt.",
        "4. Đâm kim In-plane từ đầu dưới với góc nghiêng 45 độ xuyên qua màng cùng cụt (cảm giác 'pop' mất lực cản).",
        "5. Sau khi qua màng cùng cụt, HẠ THẤP GÓC KIM (khoảng 20 độ) và luồn kim tịnh tiến vào lòng ống cùng không quá 1 - 2 cm (tránh đâm quá cao chọc thủng túi màng tủy thường kết thúc ở mức S2).",
        "6. Test hút âm tính (không có máu và KHÔNG có dịch não tủy CSF).",
        "7. Bơm test 1 - 2 ml khí hoặc nước muối sinh lý: kiểm tra trên siêu âm thấy dòng chảy lan tỏa trong ống cùng và không phồng mô dưới da."
      ]
    },
    "drugsAndDosage": {
      "steroid": "Triamcinolone acetonide 40 - 80 mg HOẶC Dexamethasone 8 - 10 mg (Dexamethasone là steroid không hạt tinh thể an toàn nhất cho tiêm ngoài màng cứng).",
      "salineVolume": "Nước muối sinh lý NaCl 0.9%: 8 - 15 ml (thể tích dịch lớn giúp đẩy thuốc dâng cao lên khoang ngoài màng cứng thắt lưng L4-L5-S1).",
      "localAnesthetic": "Lidocaine 0.5% - 1% hoặc Ropivacaine 0.1% - 0.2%: 2 - 3 ml."
    },
    "pearlsAndPitfalls": [
      "TRÁNH ĐÂM THỦNG TÚI MÀNG CỨNG: Túi màng tủy dural sac thường kết thúc ở bờ dưới đốt sống S2. Không bao giờ đẩy kim quá sâu vào ống cùng (> 2 cm qua màng cùng cụt) để phòng ngừa chọc thủng màng cứng gây gây tê tủy sống toàn bộ.",
      "TEST HÚT BẮT BUỘC: Hút kiểm tra cả 4 góc phần tư để loại trừ kim lọt vào đám rối tĩnh mạch ngoài màng cứng cùng.",
      "Dexamethasone được FDA và các hội giảm đau khuyến cáo là lựa chọn hàng đầu cho tiêm ngoài màng cứng vì không có nguy cơ tắc mạch tủy sống như các loại hạt tinh thể."
    ],
    "postProcedure": "Bệnh nhân nằm nghỉ ngơi 30 phút, kiểm tra cảm giác và vận động hai chân trước khi ngồi dậy đi lại.",
    "figures": [
      {
        "path": "assets/images/ch17_caudal_epidural/p205_img1.jpeg",
        "title": "Hình ảnh siêu âm mặt cắt ngang và dọc khe xương cùng",
        "desc": "Transverse: 2 sừng cùng (Cornua) và màng cùng cụt (SCL). Longitudinal: Ống cùng (Sacral canal) dẫn thuốc lên trên."
      },
      {
        "path": "assets/images/ch17_caudal_epidural/p207_img1.jpeg",
        "title": "Kỹ thuật đi kim In-plane vào ống ngoài màng cứng qua khe cùng",
        "desc": "Đầu kim xuyên qua màng cùng cụt, hạ thấp góc kim tiến vào lòng ống cùng."
      }
    ]
  },
  {
    "id": "esp-block",
    "nameVi": "Phong bế mặt phẳng cơ dựng gai (Erector Spinae Plane - ESP Block)",
    "nameEn": "Erector Spinae Plane (ESP) Block",
    "category": "spine",
    "subcategory": "spine_nerves",
    "type": "nerve",
    "difficulty": "Trung bình",
    "icd10": "M54.6 (Đau cột sống ngực), M54.5 (Đau thắt lưng), S22.3 (Gãy xương sườn)",
    "indications": [
      "Giảm đau sau mổ lồng ngực, mổ tim, mổ vú, mổ cắt túi mật nội soi (mức ngực T4-T7).",
      "Đau do gãy nhiều xương sườn (Multiple rib fractures).",
      "Đau dây thần kinh sau Herpes (Post-herpetic neuralgia).",
      "Đau cột sống thắt lưng hoặc giảm đau phẫu thuật cột sống (mức ngực thấp hoặc thắt lưng T10-L3)."
    ],
    "contraindications": {
      "absolute": ["Nhiễm khuẩn tại vùng cơ cạnh sống.", "Dị ứng thuốc tê."],
      "relative": ["Rối loạn đông máu nặng."]
    },
    "patientPosition": "Bệnh nhân ngồi cúi người hoặc nằm sấp, hoặc nằm nghiêng sang bên lành.",
    "transducer": "Đầu dò Linear 8 - 14 MHz (ở mức ngực người gầy) hoặc Curvilinear 2 - 5 MHz (ở mức thắt lưng/người béo), độ sâu 3 - 5 cm.",
    "sonoanatomy": [
      "Mỏm ngang đốt sống (Transverse process - TP): Mốc xương vuông vắn tăng âm có bóng cản âm phía sau (phân biệt với xương sườn hình cung tròn và có màng phổi lấp lánh).",
      "Cơ dựng gai (Erector spinae muscle): Khối cơ dày chạy dọc che phủ toàn bộ mỏm ngang.",
      "Cơ trám và cơ thang: Các lớp cơ nông hơn ở mức ngực cao.",
      "Mặt phẳng ESP (Erector Spinae Plane): Khoang ảo nằm giữa mặt sâu cơ dựng gai và mỏm ngang đốt sống."
    ],
    "technique": {
      "approach": "In-plane theo trục dọc từ trên xuống dưới (Cranial to Caudal) hoặc từ dưới lên.",
      "needle": "Kim chọc tê chuyên dụng Echogenic needle 21G - 22G, dài 50 - 80 mm.",
      "steps": [
        "1. Đặt đầu dò dọc cách đường giữa gai sau khoảng 2.5 - 3.0 cm.",
        "2. Đếm và xác định mỏm ngang đốt sống đích (ví dụ T5 cho giảm đau ngực).",
        "3. Nhận diện mỏm ngang hình bậc thang vuông vắn, cơ dựng gai nằm áp sát trên đỉnh mỏm ngang.",
        "4. Đâm kim In-plane từ trên xuống, mũi kim hướng về phía đỉnh mỏm ngang.",
        "5. Đầu kim chạm nhẹ vào bề mặt xương mỏm ngang đốt sống.",
        "6. Hút thử âm tính, bơm test 1 - 2 ml: quan sát dịch thuốc nâng bóc tách toàn bộ cơ dựng gai khỏi mỏm ngang (hydrodissection kéo dài nhiều khoang).",
        "7. Bơm toàn bộ 20 - 30 ml thuốc tê thể tích lớn."
      ]
    },
    "drugsAndDosage": {
      "localAnesthetic": "Ropivacaine 0.2% - 0.375% HOẶC Bupivacaine 0.25%: 20 - 30 ml (thể tích lớn là chìa khóa để thuốc lan tỏa lên xuống 3-5 khoang đốt sống).",
      "adjuvants": "Có thể phối hợp Dexamethasone 4 mg hoặc Clonidine để kéo dài thời gian giảm đau lên 18 - 24 giờ."
    },
    "pearlsAndPitfalls": [
      "KỸ THUẬT VÔ CÙNG AN TOÀN: ESP Block được coi là một trong những kỹ thuật phong bế thân thiện và an toàn nhất vì mỏm ngang đốt sống đóng vai trò như một 'tấm khiên xương' ngăn cách hoàn toàn mũi kim với màng phổi và tủy sống.",
      "THỂ TÍCH LỚN QUYẾT ĐỊNH: Thuốc tê cần thể tích đủ lớn (20-30 ml) để lan tỏa dọc theo khoang mạc tới các nhánh lưng và nhánh bụng của rễ thần kinh gai sống.",
      "Luôn tính toán tổng liều thuốc tê (mg) theo cân nặng để không vượt quá ngưỡng ngộ độc LAST!"
    ],
    "postProcedure": "Theo dõi mạch, huyết áp, tri giác và SpO2 trong 30 phút.",
    "figures": [
      {
        "path": "assets/images/ch11_esp/p144_img1.jpeg",
        "title": "Hình ảnh siêu âm mặt phẳng cơ dựng gai (ESP Block)",
        "desc": "TP (Mỏm ngang đốt sống), ESM (Cơ dựng gai), Rhomboid (Cơ trám), Trapezius (Cơ thang). Target: Mặt sâu cơ dựng gai trên mỏm ngang."
      },
      {
        "path": "assets/images/ch11_esp/p148_img1.jpeg",
        "title": "Kỹ thuật tiêm In-plane phong bế ESP Block",
        "desc": "Kim đi in-plane chạm mỏm ngang, bơm dịch bóc tách mặt phẳng cơ dựng gai lan tỏa nhiều đốt."
      }
    ]
  },
  {
    "id": "lumbar-medial-branch",
    "nameVi": "Phong bế nhánh trong cột sống thắt lưng & rễ sau L5",
    "nameEn": "Lumbar Medial Branch Block & L5 Dorsal Ramus",
    "category": "spine",
    "subcategory": "spine_nerves",
    "type": "nerve",
    "difficulty": "Nâng cao",
    "icd10": "M47.816 (Thoái hóa cột sống thắt lưng), M54.5 (Hội chứng khớp liên mấu thắt lưng / Facet syndrome)",
    "indications": [
      "Hội chứng khớp liên mấu thắt lưng (Lumbar Facet Joint Syndrome) gây đau thắt lưng cơ học mạn tính, đau tăng khi ngửa người ra sau hoặc xoay vặn cột sống.",
      "Phong bế chẩn đoán (Diagnostic block) xác định nguồn gốc đau do khớp liên mấu trước khi tiến hành đốt sóng cao tần RFA (Radiofrequency Neurotomy).",
      "Đau thắt lưng âm ỉ không có chèn ép rễ thần kinh (không tê giật chân)."
    ],
    "contraindications": {
      "absolute": ["Nhiễm khuẩn vùng thắt lưng.", "Rối loạn đông máu nặng."],
      "relative": ["Dị tật cột sống thắt lưng hoặc trượt đốt sống độ 3-4."]
    },
    "patientPosition": "Bệnh nhân nằm sấp, kê gối dưới bụng để làm phẳng cột sống thắt lưng.",
    "transducer": "Đầu dò Curvilinear 2 - 5 MHz (vì cấu trúc cột sống nằm sâu 4 - 7 cm), độ sâu 5 - 8 cm.",
    "sonoanatomy": [
      "Các mốc siêu âm 5 mặt cắt cơ bản (Five Basic Views theo Peng et al.):",
      "1. Mỏm gai sau (Spinous process): Mốc nông ở đường giữa.",
      "2. Khối mấu khớp (Facet joint / Articular pillar): Chỗ nối mấu khớp dưới và mấu khớp trên.",
      "3. Mỏm ngang (Transverse process - TP): Cột xương nằm sâu hơn, tạo hình ảnh 'lưng lạc đà' (camel hump).",
      "4. Khe khớp liên mấu (Facet cleft).",
      "5. Target L1-L4 Medial Branch: Nằm tại rãnh giao nhau giữa mỏm khớp trên (Superior Articular Process - SAP) và bờ trên mỏm ngang.",
      "6. Target L5 Dorsal Ramus: Nằm tại rãnh nối giữa mỏm khớp trên S1 và cánh xương cùng (Sacral ala)."
    ],
    "technique": {
      "approach": "In-plane hoặc Out-of-plane, hướng kim vào góc xương giao giữa mỏm khớp trên SAP và mỏm ngang.",
      "needle": "Kim tủy sống 22G, dài 70 - 90 mm.",
      "steps": [
        "1. Đặt đầu dò cắt ngang đường giữa thắt lưng, nhận diện mỏm gai và bản sống.",
        "2. Di chuyển đầu dò sang bên để thấy mấu khớp và mỏm ngang đốt sống.",
        "3. Đếm chính xác tầng đốt sống từ xương cùng S1 lên L5, L4, L3.",
        "4. Xác định điểm giao góc chữ V giữa mấu khớp trên (SAP) và mỏm ngang (TP).",
        "5. Đâm kim chạm góc xương này.",
        "6. Hút thử không có máu, bơm chính xác 0.3 - 0.5 ml thuốc tê tại mỗi điểm nhánh trong."
      ]
    },
    "drugsAndDosage": {
      "diagnosticBlock": "Lidocaine 1% - 2% (0.5 ml) HOẶC Bupivacaine 0.25% - 0.5% (0.5 ml). Thể tích phải nhỏ (≤ 0.5 ml) để không bị khuếch tán sang rễ thần kinh gai sống kế cận làm sai lệch kết quả chẩn đoán.",
      "rfa": "Đốt sóng cao tần (RFA) 80°C trong 90 giây sau khi có kết quả phong bế chẩn đoán dương tính 2 lần (giảm đau > 75-80%)."
    },
    "pearlsAndPitfalls": [
      "QUY TẮC CHI PHỐI KÉP: Mỗi khớp liên mấu được chi phối bởi 2 nhánh trong (nhánh trong cùng mức và nhánh trong của mức đốt sống trên nó). Ví dụ: Đau khớp liên mấu L4-L5 cần phong bế nhánh trong L3 và nhánh trong L4.",
      "THỂ TÍCH THUỐC PHẢI NHỎ: Thể tích > 0.5 ml sẽ tràn ra ngoài mạc và tràn vào lỗ liên hợp gây dương tính giả.",
      "Nhánh rễ sau L5 nằm tại rãnh cánh xương cùng - SAP S1, cần kỹ thuật quét đầu dò nghiêng để tránh mào chậu che khuất."
    ],
    "postProcedure": "Yêu cầu bệnh nhân ghi nhật ký mức độ đau (Pain diary) từng giờ trong 6 giờ đầu sau phong bế để đánh giá tỷ lệ giảm đau.",
    "figures": [
      {
        "path": "assets/images/ch14_lumbar_medial_branch/p177_img1.jpeg",
        "title": "Hình ảnh siêu âm 5 mặt cắt cơ bản cột sống thắt lưng",
        "desc": "SP (Mỏm gai), Lamina (Bản sống), Facet (Khớp liên mấu), TP (Mỏm ngang). Điểm đích nhánh trong tại rãnh SAP - TP."
      },
      {
        "path": "assets/images/ch14_lumbar_medial_branch/p185_img1.jpeg",
        "title": "Kỹ thuật đi kim phong bế nhánh trong thắt lưng dưới siêu âm",
        "desc": "Kim chạm góc xương giữa mấu khớp trên SAP và mỏm ngang TP."
      }
    ]
  },
  {
    "id": "intercostal-nerve",
    "nameVi": "Phong bế dây thần kinh gian sườn (Intercostal Nerve Block)",
    "nameEn": "Intercostal Nerve Block (ICNB)",
    "category": "spine",
    "subcategory": "spine_nerves",
    "type": "nerve",
    "difficulty": "Trung bình",
    "icd10": "G58.0 (Bệnh lý thần kinh gian sườn), R07.1 (Đau ngực khi thở), S22.3 (Gãy xương sườn)",
    "indications": [
      "Đau do gãy xương sườn (đơn thuần hoặc nhiều xương sườn).",
      "Đau sau phẫu thuật mở lồng ngực (Post-thoracotomy pain syndrome).",
      "Đau dây thần kinh liên sườn sau nhiễm Herpes Zoster (Zona liên sườn cấp tính hoặc mạn tính).",
      "Giảm đau đặt ống dẫn lưu màng phổi."
    ],
    "contraindications": {
      "absolute": ["Nhiễm khuẩn vùng da thành ngực tại vị trí chọc kim.", "Dị ứng thuốc tê."],
      "relative": ["Bệnh nhân suy hô hấp nặng hoặc cắt phổi bên đối diện (nguy cơ tràn khí màng phổi).", "Rối loạn đông máu nặng."]
    },
    "patientPosition": "Bệnh nhân ngồi cúi người ôm gối phía trước, hoặc nằm sấp, hoặc nằm nghiêng sang bên lành.",
    "transducer": "Đầu dò Linear 10 - 15 MHz, độ sâu 2 - 3 cm.",
    "sonoanatomy": [
      "Hai xương sườn kế tiếp (Adjacent ribs): Cấu trúc hình vòm cung tăng âm kèm bóng cản âm phía sau.",
      "Cơ gian sườn ngoài, cơ gian sườn trong và cơ gian sườn trong cùng: Nằm giữa 2 xương sườn.",
      "ĐƯỜNG MÀNG PHỔI (Pleural line): Đường tăng âm sắc nét nằm sâu dưới các cơ gian sườn, có dấu hiệu trượt màng phổi (lung sliding) và đuôi sao chổi (comet-tail artifacts).",
      "Rãnh dưới sườn: Nơi chứa bó mạch - thần kinh gian sườn (Tĩnh mạch - Động mạch - Thần kinh: VAN từ trên xuống dưới)."
    ],
    "technique": {
      "approach": "In-plane theo trục dọc cắt qua hai xương sườn từ dưới lên trên.",
      "needle": "Kim 23G - 25G, dài 25 - 38 mm.",
      "steps": [
        "1. Đặt đầu dò cắt dọc thành ngực sau, cách gai sống khoảng 5 - 8 cm (ngay trước góc sườn).",
        "2. Nhận diện bờ dưới xương sườn trên, bờ trên xương sườn dưới và đường màng phổi phía sâu.",
        "3. Sử dụng Doppler màu để định vị động mạch gian sườn nằm ở bờ dưới xương sườn.",
        "4. Đưa kim In-plane từ bờ trên xương sườn dưới hướng về phía bờ dưới xương sườn trên.",
        "5. Đầu kim nằm ngay sát bờ dưới xương sườn, giữa cơ gian sườn trong và cơ gian sườn trong cùng (nông hơn màng phổi).",
        "6. Hút thử âm tính (KHÔNG CÓ KHÍ VÀ KHÔNG CÓ MÁU).",
        "7. Bơm chậm 2 - 3 ml thuốc tê: quan sát màng phổi bị đẩy nhẹ xuống sâu."
      ]
    },
    "drugsAndDosage": {
      "localAnesthetic": "Ropivacaine 0.2% - 0.5% (2 - 3 ml mỗi khoang) HOẶC Bupivacaine 0.25% (2 - 3 ml mỗi khoang).",
      "steroid": "Dexamethasone 2 - 4 mg hoặc Triamcinolone 10 - 20 mg mỗi dây (nếu điều trị đau thần kinh zona liên sườn)."
    },
    "pearlsAndPitfalls": [
      "NGUY CƠ TRÀN KHÍ MÀNG PHỔI (Pneumothorax): Luôn giữ mắt quan sát đầu kim liên tục, không bao giờ để đầu kim chạm hoặc xuyên qua đường màng phổi lấp lánh.",
      "HẤP THU THUỐC TÊ CỰC NHANH: Khoang gian sườn có mạng lưới mạch máu phong phú, nồng độ thuốc tê trong máu tăng vọt nhanh nhất trong tất cả các kỹ thuật phong bế ngoại biên -> Giới hạn tổng liều thuốc tê nghiêm ngặt để phòng LAST!",
      "Nên phong bế thêm 1 khoang sườn trên và 1 khoang sườn dưới vị trí tổn thương do có sự chi phối chéo."
    ],
    "postProcedure": "Kiểm tra lại dấu hiệu trượt màng phổi (lung sliding) trên siêu âm phổi ngay sau tiêm để loại trừ 100% tràn khí màng phổi.",
    "figures": [
      {
        "path": "assets/images/ch5_intercostal/p76_img1.jpeg",
        "title": "Hình ảnh siêu âm thành ngực và bó mạch thần kinh gian sườn",
        "desc": "Ribs (Xương sườn), Intercostal muscles (Cơ gian sườn), Pleura (Đường màng phổi). Mũi tên chỉ vị trí bó mạch VAN dưới bờ sườn."
      },
      {
        "path": "assets/images/ch5_intercostal/p78_img1.jpeg",
        "title": "Kỹ thuật đi kim phong bế gian sườn dưới siêu âm",
        "desc": "Kim đi in-plane từ dưới lên trên hướng về rãnh bờ dưới sườn, trên đường màng phổi."
      }
    ]
  },
  {
    "id": "occipital-nerve",
    "nameVi": "Phong bế thần kinh chẩm lớn và chẩm bé (GON & LON Block)",
    "nameEn": "Greater & Lesser Occipital Nerve Block",
    "category": "spine",
    "subcategory": "cervical",
    "type": "nerve",
    "difficulty": "Cơ bản",
    "icd10": "G44.847 (Đau dây thần kinh chẩm), G43.909 (Đau nửa đầu Migraine)",
    "indications": [
      "Đau dây thần kinh chẩm (Occipital Neuralgia / Hội chứng Arnold) đau buốt rát từ vùng gáy chẩm lan lên đỉnh đầu và sau mắt.",
      "Cắt cơn đau đầu Migraine mạn tính hoặc đau đầu cụm (Cluster headache).",
      "Đau đầu căn nguyên cổ (Cervicogenic headache)."
    ],
    "contraindications": {
      "absolute": ["Nhiễm khuẩn vùng da chẩm gáy.", "Khuyết xương sọ vùng chẩm sau mổ."],
      "relative": ["Rối loạn đông máu."]
    },
    "patientPosition": "Bệnh nhân ngồi cúi gập đầu nhẹ về phía trước tì trán vào gối, hoặc nằm sấp.",
    "transducer": "Đầu dò Linear dải tần cao 10 - 15 MHz, độ sâu 2 - 3 cm.",
    "sonoanatomy": [
      "Đốt sống trục C2: Mốc gai sau C2 chẻ đôi (bifid spinous process) ở đường giữa.",
      "Cơ bán gai đầu (Semispinalis capitis): Lớp cơ dày phía nông.",
      "Cơ chéo đầu dưới (Oblique capitis inferior - OCI): Chạy chếch từ gai sau C2 đến mỏm ngang C1.",
      "THẦN KINH CHẨM LỚN (Greater Occipital Nerve - GON): Dải tăng âm nhỏ nằm trong mặt phẳng mạc giữa cơ bán gai đầu và cơ chéo đầu dưới (OCI)."
    ],
    "technique": {
      "approach": "In-plane từ ngoài vào trong theo trục cơ chéo đầu dưới (OCI) tại mức C2.",
      "needle": "Kim 25G, dài 38 mm.",
      "steps": [
        "1. Đặt đầu dò ngang tại đường giữa tìm mỏm gai chẻ đôi C2.",
        "2. Xoay đầu dò chếch lên trên và ra ngoài hướng về mỏm ngang C1 để tìm cơ chéo đầu dưới (OCI).",
        "3. Nhận diện thần kinh chẩm lớn GON nằm trên bề mặt cơ OCI, dưới cơ bán gai đầu.",
        "4. Bật Doppler màu để tránh động mạch chẩm.",
        "5. Đưa kim In-plane vào mặt phẳng mạc giữa 2 cơ.",
        "6. Bơm 1.5 - 2.5 ml dung dịch bóc tách mặt phẳng ôm quanh thần kinh chẩm lớn."
      ]
    },
    "drugsAndDosage": {
      "steroid": "Dexamethasone 4 mg HOẶC Triamcinolone 10 - 20 mg.",
      "localAnesthetic": "Lidocaine 1% hoặc Ropivacaine 0.2%: 1.5 - 2.5 ml."
    },
    "pearlsAndPitfalls": [
      "TIẾP CẬN TẠI MỨC C2 HIỆU QUẢ HƠN ĐƯỜNG CHẨM NÔNG: Phương pháp tiêm GON truyền thống tại đường cong chẩm trên hay thất bại vì thần kinh đã phân thành nhiều nhánh nhỏ. Tiêm dưới siêu âm tại mặt phẳng cơ OCI ở mức C2 bắt trọn thân chính của dây thần kinh chẩm lớn trước khi phân nhánh.",
      "Tránh đâm quá sâu qua cơ OCI vì có thể vào khoang màng cứng C1-C2 hoặc động mạch đốt sống."
    ],
    "postProcedure": "Bệnh nhân ngồi nghỉ 15 phút, đánh giá giảm đau vùng chẩm đỉnh.",
    "figures": [
      {
        "path": "assets/images/ch2_occipital/p48_img1.jpeg",
        "title": "Hình ảnh siêu âm thần kinh chẩm lớn (GON) tại mức C2",
        "desc": "OCI (Cơ chéo đầu dưới), SSC (Cơ bán gai đầu). GON nằm trong mặt phẳng mạc giữa 2 cơ trên đốt C2."
      },
      {
        "path": "assets/images/ch2_occipital/p51_img1.jpeg",
        "title": "Kỹ thuật tiêm In-plane thần kinh chẩm lớn dưới siêu âm",
        "desc": "Kim đi in-plane từ ngoài vào trong vào mặt phẳng giữa OCI và SSC."
      }
    ]
  },
  {
    "id": "stellate-ganglion",
    "nameVi": "Phong bế chuỗi hạch giao cảm cổ / Hạch sao (Stellate Ganglion Block)",
    "nameEn": "Cervical Sympathetic Trunk / Stellate Ganglion Block",
    "category": "spine",
    "subcategory": "cervical",
    "type": "nerve",
    "difficulty": "Nâng cao",
    "icd10": "G90.5 (Hội chứng đau vùng phức hợp CRPS type I/II), I73.0 (Hội chứng Raynaud), G44.0 (Đau đầu cụm)",
    "indications": [
      "Hội chứng loạn dưỡng thần kinh phản xạ / Đau vùng phức hợp (CRPS Type I & II) ở chi trên, vai, cổ.",
      "Hội chứng Raynaud nặng gây thiếu máu tím tái đầu ngón tay không đáp ứng thuốc dãn mạch.",
      "Đau sau Herpes Zoster vùng đầu mặt cổ, đau dây V mạn tính hoặc cơn đau thắt ngực kháng trị."
    ],
    "contraindications": {
      "absolute": ["Nhiễm khuẩn vùng cổ trước bên.", "Rối loạn nhịp tim chậm nặng / Block nhĩ thất độ II-III.", "Rối loạn đông máu nặng."],
      "relative": ["Liệt dây thanh âm bên đối diện (nguy cơ khàn tiếng hoặc khó thở nếu phong bế 2 bên)."]
    },
    "patientPosition": "Bệnh nhân nằm ngửa, kê gối nhỏ dưới vai để ngửa nhẹ cổ, mặt quay nhẹ sang bên đối diện khoảng 30 độ.",
    "transducer": "Đầu dò Linear 8 - 14 MHz, độ sâu 3 - 4 cm.",
    "sonoanatomy": [
      "Đốt sống C6: Củ Chassaignac (Củ trước mỏm ngang C6 nhô cao nổi bật, trong khi C7 không có củ trước).",
      "Cơ dài cổ (Longus colli muscle): Lớp cơ nằm áp sát mặt trước thân và mỏm ngang đốt sống C6.",
      "Động mạch cảnh chung (Common Carotid Artery) và Tĩnh mạch cảnh trong: Nằm phía ngoài nông.",
      "Tuyến giáp (Thyroid gland): Nằm ở phía trong.",
      "Chuỗi giao cảm cổ (Cervical sympathetic trunk): Dải mỏng nằm trên cơ dài cổ, dưới cân trước cột sống (prevertebral fascia)."
    ],
    "technique": {
      "approach": "In-plane từ phía ngoài vào trong (Lateral to Medial) lướt sâu dưới bó mạch cảnh.",
      "needle": "Kim 23G - 25G, dài 38 - 50 mm.",
      "steps": [
        "1. Đặt đầu dò cắt ngang cổ mức sụn nhẫn (tương ứng C6).",
        "2. Nhận diện mỏm ngang C6 với củ trước nhô cao (Chassaignac tubercle), cơ dài cổ, động mạch cảnh chung và tuyến giáp.",
        "3. BẬT DOPPLER MÀU: Kiểm tra động mạch cảnh, động mạch đốt sống, động mạch giáp dưới và tĩnh mạch cảnh.",
        "4. Đưa kim In-plane từ phía ngoài luồn kim sâu dưới động mạch cảnh đến mặt trên cơ dài cổ.",
        "5. Mũi kim xuyên qua cân trước cột sống, nằm ngay trên cơ dài cổ.",
        "6. Hút thử âm tính (tuyệt đối KHÔNG có máu).",
        "7. Bơm test 0.5 ml, sau đó bơm chậm 4 - 6 ml thuốc tê."
      ]
    },
    "drugsAndDosage": {
      "localAnesthetic": "Ropivacaine 0.2% HOẶC Bupivacaine 0.25% HOẶC Lidocaine 1%: 4 - 6 ml (thể tích vừa phải để lan tỏa xuống hạch sao ở C7-T1 mà không gây liệt thần kinh hoành hay dây X)."
    },
    "pearlsAndPitfalls": [
      "DẤU HIỆU HORNER KHẲNG ĐỊNH THÀNH CÔNG: Sau tiêm 5-10 phút, xuất hiện Hội chứng Horner cùng bên (Sụp mi nhẹ - Ptosis, Co đồng tử - Miosis, Mất mồ hôi nửa mặt - Anhidrosis, Nghẹt mũi và da tay ấm hồng tăng nhiệt độ > 1.5 - 2°C).",
      "TRÁNH ĐỘNG MẠCH ĐỐT SỐNG & MẠCH CẢNH: Luôn bật Doppler màu; tiêm thuốc tê trực tiếp vào động mạch đốt sống chỉ cần 0.5 ml có thể gây co giật ngộ độc thần kinh trung ương tức thì!",
      "Khàn tiếng tạm thời (do ngấm thần kinh quặt ngược thanh quản) có thể xảy ra ở 10-20% bệnh nhân và sẽ tự hết sau vài giờ."
    ],
    "postProcedure": "Bệnh nhân ngồi nghỉ theo dõi huyết áp, nhịp tim và hội chứng Horner trong 30-45 phút.",
    "figures": [
      {
        "path": "assets/images/ch3_cervical_sympathetic/p57_img1.jpeg",
        "title": "Hình ảnh siêu âm chuỗi giao cảm cổ mức đốt sống C6",
        "desc": "CA (Động mạch cảnh), Longus colli (Cơ dài cổ), C6 TP (Củ Chassaignac). Chuỗi giao cảm nằm trên mặt cơ dài cổ."
      },
      {
        "path": "assets/images/ch3_cervical_sympathetic/p58_img1.jpeg",
        "title": "Kỹ thuật tiêm In-plane phong bế giao cảm cổ dưới siêu âm",
        "desc": "Kim đi in-plane từ ngoài vào luồn dưới động mạch cảnh vào mặt phẳng cơ dài cổ."
      }
    ]
  },
  {
    "id": "ilioinguinal-nerve",
    "nameVi": "Phong bế thần kinh chậu bẹn & chậu hạ vị",
    "nameEn": "Ilioinguinal and Iliohypogastric Nerve Block",
    "category": "spine",
    "subcategory": "pelvis",
    "type": "nerve",
    "difficulty": "Trung bình",
    "icd10": "G57.8 (Bệnh lý thần kinh chi dưới khác / Đau dây thần kinh chậu bẹn sau mổ thoát vị bẹn)",
    "indications": [
      "Đau mạn tính sau phẫu thuật vùng bẹn (Post-herniorrhaphy groin pain sau mổ thoát vị bẹn).",
      "Giảm đau sau mổ đẻ (mổ bắt con), mổ cắt tử cung hoặc mổ nội soi ổ bụng qua vết mổ hạ vị.",
      "Đau rát nhức vùng bẹn, bìu hoặc môi lớn."
    ],
    "contraindications": {
      "absolute": ["Nhiễm khuẩn thành bụng dưới."],
      "relative": ["Rối loạn đông máu nặng."]
    },
    "patientPosition": "Bệnh nhân nằm ngửa thoải mái.",
    "transducer": "Đầu dò Linear 10 - 15 MHz, độ sâu 2 - 3 cm.",
    "sonoanatomy": [
      "Gai chậu trước trên (ASIS): Mốc xương tăng âm bờ ngoài.",
      "Ba lớp cơ thành bụng trước bên từ nông vào sâu:",
      "1. Cơ chéo bụng ngoài (External Oblique - EOM).",
      "2. Cơ chéo bụng trong (Internal Oblique - IOM).",
      "3. Cơ ngang bụng (Transversus Abdominis - TAM).",
      "DÂY THẦN KINH CHẬU BẸN & CHẬU HẠ VỊ: Hai dải nhỏ tròn giảm âm nằm kẹp trong mặt phẳng mạc giữa cơ chéo trong (IOM) và cơ ngang bụng (TAM)."
    ],
    "technique": {
      "approach": "In-plane từ phía ngoài vào trong hoặc ngược lại.",
      "needle": "Kim 23G - 25G, dài 50 mm.",
      "steps": [
        "1. Đặt đầu dò cắt chéo nối giữa gai chậu trước trên (ASIS) và rốn, cách ASIS khoảng 2 - 3 cm về phía trong.",
        "2. Nhận diện 3 lớp cơ thành bụng (chéo ngoài, chéo trong, ngang bụng) và phúc mạc ở sâu.",
        "3. Tìm 2 dây thần kinh chậu bẹn và chậu hạ vị nằm kẹp giữa cơ chéo trong và cơ ngang bụng gần mào chậu.",
        "4. Đưa kim In-plane vào mặt phẳng mạc giữa 2 cơ.",
        "5. Bơm 5 - 8 ml dung dịch: thấy chất lỏng bóc tách nhẹ nhàng hai lớp cơ ôm quanh 2 dây thần kinh."
      ]
    },
    "drugsAndDosage": {
      "steroid": "Triamcinolone 20 - 40 mg hoặc Dexamethasone 4 mg (nếu đau dây thần kinh mạn tính sau mổ).",
      "localAnesthetic": "Ropivacaine 0.2% hoặc Lidocaine 1%: 5 - 8 ml."
    },
    "pearlsAndPitfalls": [
      "TRÁNH THỦNG PHÚC MẠC VÀO RUỘT: Cơ ngang bụng nằm ngay sát lá phúc mạc và quai ruột. Phải luôn thấy rõ 100% đầu kim và dừng lại ở khoang giữa cơ chéo trong và cơ ngang bụng, không chọc sâu qua cơ ngang bụng.",
      "Tránh nhánh thần kinh đùi: Nếu bơm thể tích quá lớn (> 15 ml) thuốc có thể ngấm sâu vào cơ thắt lưng chậu gây tê liệt thần kinh đùi tạm thời (bệnh nhân bị sụp gối, yếu cơ tứ đầu đùi)."
    ],
    "postProcedure": "Kiểm tra cơ lực duỗi gối trước khi cho bệnh nhân đứng dậy đi lại.",
    "figures": [
      {
        "path": "assets/images/ch6_ilioinguinal/p87_img1.jpeg",
        "title": "Hình ảnh siêu âm 3 lớp cơ thành bụng và thần kinh chậu bẹn",
        "desc": "EO (Cơ chéo ngoài), IO (Cơ chéo trong), TA (Cơ ngang bụng). Thần kinh chậu bẹn nằm giữa IO và TA."
      },
      {
        "path": "assets/images/ch6_ilioinguinal/p88_img1.jpeg",
        "title": "Kỹ thuật tiêm In-plane phong bế thần kinh chậu bẹn",
        "desc": "Kim đi in-plane vào mặt phẳng mạc giữa cơ chéo trong và cơ ngang bụng."
      }
    ]
  },

  # -------------------------------------------------------------
  # CAN THIỆP SINH HỌC & ĐẶC BIỆT
  # -------------------------------------------------------------
  {
    "id": "prp-platelet-rich-plasma",
    "nameVi": "Liệu pháp Huyết tương giàu tiểu cầu (PRP) trong Cơ Xương Khớp",
    "nameEn": "Platelet-Rich Plasma (PRP) Musculoskeletal Intervention",
    "category": "biologics",
    "subcategory": "regenerative",
    "type": "biologics",
    "difficulty": "Trung bình",
    "icd10": "M17.1 (Thoái hóa khớp gối), M75.1 (Bệnh lý gân chóp xoay), M77.1 (Viêm lồi cầu ngoài khuỷu), M72.2 (Viêm cân gan chân)",
    "indications": [
      "Thoái hóa khớp gối, khớp háng, khớp cổ chân độ I - III (giúp giảm đau bền vững và kích thích tái tạo sụn khớp, điều hòa dịch khớp).",
      "Bệnh lý thoái hóa gân mạn tính (Tendinopathy): Viêm gân chóp xoay vai, Viêm lồi cầu ngoài khuỷu (Tennis elbow), Viêm gân bánh chè (Jumper's knee), Viêm cân gan chân.",
      "Rách bán phần gân/dây chằng (độ I, độ II) không có chỉ định phẫu thuật khâu gân."
    ],
    "contraindications": {
      "absolute": [
        "Giảm tiểu cầu nặng (Số lượng tiểu cầu < 105 G/L).",
        "Nhiễm khuẩn cấp tính hoặc nhiễm khuẩn huyết.",
        "Ung thư tiến triển hoặc bệnh ác tính huyết học.",
        "Thiếu máu nặng (Hb < 90 g/L)."
      ],
      "relative": [
        "Đang dùng thuốc chống viêm không steroid (NSAIDs) trong vòng 7 - 14 ngày trước thủ thuật (NSAIDs ức chế chức năng giải phóng hạt alpha của tiểu cầu).",
        "Vừa tiêm corticoid tại chỗ trong vòng 4 - 6 tuần gần đây."
      ]
    },
    "patientPosition": "Tùy thuộc vào vị trí đích tiêm can thiệp (xem quy trình tương ứng của khớp gối, khớp vai, khuỷu...).",
    "transducer": "Đầu dò Linear dải tần cao 10 - 15 MHz (gân và khớp nông) hoặc Curvilinear (khớp háng).",
    "sonoanatomy": [
      "Đánh giá chính xác tổn thương trước tiêm:",
      "- Với khớp: Đánh giá bề dày sụn khớp, tràn dịch màng hoạt dịch, gai xương.",
      "- Với gân: Đánh giá vị trí rách bán phần, ổ giảm âm mất liên tục bó sợi, tăng sinh mạch trên Doppler màu (neovascularization)."
    ],
    "technique": {
      "approach": "Quy trình điều chế và tiêm PRP chuẩn lâm sàng vô khuẩn:",
      "needle": "Kim lấy máu 18G - 21G; Kim tiêm can thiệp 21G - 25G tùy độ sâu đích đến.",
      "steps": [
        "BƯỚC 1: LẤY MÁU & CHỐNG ĐÔNG: Lấy 20 - 50 ml máu tĩnh mạch ngoại vi bệnh nhân vào ống nghiệm có chứa sẵn chất chống đông ACD-A (Acid Citrate Dextrose) hoặc Natri Citrat 3.2% (tỷ lệ 1ml chống đông : 9ml máu). Tránh dùng Heparin vì ức chế tiểu cầu.",
        "BƯỚC 2: LY TÂM TÁCH CHIẾT (Quy trình ly tâm 2 lần chuẩn - Double Spin):",
        "   - Lần 1 (Soft spin - 1200 - 1500 rpm trong 10 phút): Tách hồng cầu lắng xuống đáy ống, thu lấy phần huyết tương và lớp đệm bạch cầu (buffy coat).",
        "   - Lần 2 (Hard spin - 3000 - 3500 rpm trong 10 phút): Kết tủa tiểu cầu thành khối pellet ở đáy ống, loại bớt huyết tương nghèo tiểu cầu (PPP) ở trên, giữ lại thể tích PRP với nồng độ tiểu cầu gấp 4 - 6 lần máu ban đầu.",
        "BƯỚC 3: PHÂN LOẠI PRP PHÙ HỢP:",
        "   - Khớp thoái hóa (khớp gối, háng): Ưu tiên PRP nghèo bạch cầu (Leukocyte-Poor PRP / LP-PRP) để hạn chế phản ứng viêm bùng phát màng hoạt dịch.",
        "   - Bệnh lý gân mạn tính (Tennis elbow, gân gót): Có thể dùng PRP giàu bạch cầu (Leukocyte-Rich PRP / LR-PRP) để kích thích mạnh phản ứng tăng sinh mạch và lành gân.",
        "BƯỚC 4: TIÊM DƯỚI SIÊU ÂM: Định vị chính xác ổ tổn thương, bơm chậm rãi PRP vào đúng đích dưới hướng dẫn siêu âm thời gian thực."
      ]
    },
    "drugsAndDosage": {
      "preparation": "Máu toàn phần tự thân 20 - 50 ml -> Thu được 3 - 6 ml PRP nồng độ cao (1.000.000 - 1.500.000 tiểu cầu/µL).",
      "kneeDose": "Khớp gối: 4.0 - 6.0 ml/lần (Liệu trình 2 - 3 lần cách nhau 2 - 4 tuần).",
      "tendonDose": "Gân (Tennis elbow, chóp xoay): 1.5 - 2.5 ml/lần.",
      "activation": "Có thể kích hoạt bằng Canxi Clorid 10% (0.05 ml cho mỗi 1 ml PRP) hoặc kích hoạt tự nhiên bằng collagen mô tại chỗ khi tiêm vào gân."
    },
    "pearlsAndPitfalls": [
      "NGỪNG NSAIDS BẮT BUỘC: Bệnh nhân bắt buộc phải ngừng các thuốc giảm đau chống viêm NSAIDs (như Meloxicam, Celecoxib, Ibuprofen, Diclofenac...) tối thiểu 1-2 tuần TRƯỚC và 2 tuần SAU khi tiêm PRP. NSAIDs ức chế COX-1 làm tiểu cầu trơ, mất tác dụng tiết yếu tố tăng trưởng (PDGF, TGF-beta, VEGF).",
      "VÔ KHUẨN TUYỆT ĐỐI: Môi trường huyết tương giàu protein là môi trường nuôi cấy vi khuẩn cực kỳ lý tưởng nếu nhiễm bẩn. Toàn bộ quy trình quay ly tâm và tiêm phải tuân thủ phòng sạch vô trùng nghiêm ngặt.",
      "PHẢN ỨNG ĐAU TĂNG SAU TIÊM: Trong 24-48 giờ đầu sau tiêm PRP, bệnh nhân thường đau tức nhiều do phản ứng viêm kích hoạt lành thương sinh học. Chỉ định Paracetamol hoặc Tramadol giảm đau, chườm lạnh, TUYỆT ĐỐI KHÔNG UỐNG NSAIDS!"
    ],
    "postProcedure": "Nghỉ ngơi khớp/gân trong 48 giờ. Bắt đầu các bài tập vận động thụ động nhẹ nhàng sau ngày thứ 3 và bài tập phục hồi chức năng sau tuần thứ 2.",
    "figures": [
      {
        "path": "assets/images/ch25_prp/p318_img1.jpeg",
        "title": "Quy trình phân tầng ống máu sau ly tâm điều chế PRP",
        "desc": "Các lớp sau ly tâm: Hồng cầu (RBCs) ở đáy, Lớp đệm bạch cầu (Buffy coat), PRP giàu tiểu cầu, và PPP nghèo tiểu cầu ở trên."
      }
    ]
  },
  {
    "id": "calcific-tendinitis-barbotage",
    "nameVi": "Can thiệp vôi hóa gân chóp xoay - Chọc hút và rửa vôi (Barbotage / Lavage)",
    "nameEn": "Ultrasound-Guided Calcific Tendinitis Lavage and Barbotage",
    "category": "biologics",
    "subcategory": "shoulder",
    "type": "special",
    "difficulty": "Nâng cao",
    "icd10": "M75.3 (Viêm gân vôi hóa khớp vai), M75.30 (Calcific tendinitis)",
    "indications": [
      "Viêm gân vôi hóa khớp vai (Calcific Tendinitis of Rotator Cuff - thường ở gân trên gai hoặc dưới gai) giai đoạn hấp thu vôi gây đau cấp tính dữ dội (Hyperacute pain phase).",
      "Ổ vôi hóa đặc hoặc bán đặc trên 5 - 10 mm trên siêu âm gây chèn ép cơ học và đau nhức dai dẳng.",
      "Thất bại với điều trị nội khoa bảo tồn."
    ],
    "contraindications": {
      "absolute": ["Nhiễm khuẩn vùng vai.", "Rách hoàn toàn gân chóp xoay tại ổ vôi hóa."],
      "relative": ["Ổ vôi hóa thể xơ cứng cản quang rất cứng (giai đoạn tạo vôi nghỉ) khó hút rửa -> có thể chuyển sang tán sỏi ngoài cơ thể ESWT."]
    },
    "patientPosition": "Bệnh nhân ngồi tựa lưng có đệm hoặc nằm ngửa, tay đặt tư thế Modified Crass để bộc lộ rõ ổ vôi hóa trên gân chóp xoay.",
    "transducer": "Đầu dò Linear dải tần cao 10 - 15 MHz, độ sâu 2.5 - 3.5 cm.",
    "sonoanatomy": [
      "Ổ vôi hóa (Calcification): Cấu trúc tăng âm nằm trong chất gân chóp xoay:",
      "- Thể lỏng / sữa vôi (Paste/Milk): Tăng âm nhẹ không có bóng cản âm phía sau -> Rất dễ hút rửa.",
      "- Thể đặc / xơ cứng (Hard): Tăng âm mạnh có bóng cản âm phía sau rõ rệt (acoustic shadowing).",
      "Bao hoạt dịch SASD nằm ngay phía trên ổ vôi hóa (thường có phản ứng viêm dày)."
    ],
    "technique": {
      "approach": "Kỹ thuật 1 kim (Single-needle) HOẶC 2 kim (Two-needle technique) In-plane dưới siêu âm liên tục.",
      "needle": "Kim to 18G - 20G (để rửa và hút vôi) và kim 25G (để gây tê và tiêm steroid bursa).",
      "steps": [
        "1. Xác định vị trí ổ vôi hóa trên mặt cắt dọc và cắt ngang gân.",
        "2. Gây tê cẩn thận từng lớp: da, cơ delta, bao hoạt dịch SASD và bề mặt gân bằng Lidocaine 1%.",
        "3. Đâm kim to 18G In-plane xuyên qua bao hoạt dịch đi thẳng vào trung tâm ổ vôi hóa.",
        "4. Kỹ thuật Barbotage (Rửa ngắt quãng): Lắp xi lanh chứa 5 - 10 ml Lidocaine 1% hoặc Nước muối NaCl 0.9% ấm. Bơm ngắt quãng rồi thả lỏng pít-tông để áp lực tự hút dịch vôi đục như nước vôi trắng chảy ngược vào xi lanh.",
        "5. Lặp lại động tác bơm - hút nhiều lần cho đến khi dung dịch trong xi lanh trong trở lại hoặc không còn hút được vôi.",
        "6. Rút kim ra khỏi chất gân đưa vào khoang bao hoạt dịch SASD ngay trên đó, tiêm 1 ml Triamcinolone 40mg để chống viêm và ngừa đau sau thủ thuật."
      ]
    },
    "drugsAndDosage": {
      "lavageSolution": "Lidocaine 1% (5 - 10 ml) HOẶC Nước muối sinh lý NaCl 0.9% vô trùng ấm (10 - 20 ml) để hòa tan và hút rửa vôi.",
      "postLavageSteroid": "Triamcinolone acetonide 40 mg (1.0 ml) tiêm vào bao hoạt dịch SASD (KHÔNG tiêm steroid vào ổ gân vừa chọc rửa)."
    },
    "pearlsAndPitfalls": [
      "DÙNG NƯỚC MUỐI ẤM: Sử dụng NaCl 0.9% ấm (khoảng 37-40°C) giúp tinh thể canxi hydroxyapatite hòa tan và phân tán nhanh hơn nhiều, hút ra dễ dàng hơn.",
      "KỸ THUẬT 2 KIM KHI VÔI ĐẶC: Nếu ổ vôi đặc lớn, đặt 2 kim 18G vào 2 đầu ổ vôi: 1 kim bơm liên tục nước muối, 1 kim hút vôi ra ngoài (hệ thống dòng chảy tuần hoàn).",
      "Giảm đau tức thì rất ngoạn mục: Bệnh nhân thường cảm thấy nhẹ vai ngay sau khi áp lực trong ổ vôi hóa được giải tỏa."
    ],
    "postProcedure": "Chườm lạnh vai trong 24 giờ đầu. Tập vận động nhẹ nhàng khớp vai sau 48 giờ để tránh dính khớp.",
    "figures": [
      {
        "path": "assets/images/ch26_calcific_tendinitis/p328_img1.jpeg",
        "title": "Hình ảnh siêu âm các thể vôi hóa gân chóp xoay vai",
        "desc": "Ổ vôi hóa tăng âm trong gân trên gai (SST). Nhận diện ổ vôi thể lỏng (hút rửa tốt) và thể cứng có bóng cản."
      },
      {
        "path": "assets/images/ch26_calcific_tendinitis/p330_img1.jpeg",
        "title": "Kỹ thuật chọc hút rửa vôi hóa (Barbotage) dưới siêu âm",
        "desc": "Kim 18G cắm vào tâm ổ vôi, bơm rửa hút sữa vôi trắng đục ra xi lanh dưới kiểm soát siêu âm liên tục."
      }
    ]
  }
]

# Write to data/procedures.js
out_path = 'data/procedures.js'
with open(out_path, 'w', encoding='utf-8') as f:
    f.write('// US-PainIntervention Pro: Comprehensive Clinical Procedure Database\n')
    f.write('// Based on: Ultrasound for Interventional Pain Management (Springer 2020) by Philip Peng et al.\n')
    f.write('// Standardized for Clinical Practice in Vietnam (Rheumatology & Pain Medicine)\n\n')
    f.write('const PROCEDURES_DATA = ')
    f.write(json.dumps(procedures, ensure_ascii=False, indent=2))
    f.write(';\n\n')
    f.write('if (typeof window !== "undefined") { window.PROCEDURES_DATA = PROCEDURES_DATA; }\n')
    f.write('if (typeof module !== "undefined" && module.exports) { module.exports = PROCEDURES_DATA; }\n')

print(f"Successfully generated {out_path} with {len(procedures)} procedures.")
