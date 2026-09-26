/**
 * US-PainIntervention Pro - STABLE FALLBACK DATA (Bản sao dự phòng ổn định v1.0.0)
 * Tự động kích hoạt khi tệp dữ liệu chính data/procedures.js gặp lỗi cú pháp, bị hỏng hoặc mất kết nối.
 * Ngày tạo bản sao: 2026-09-26 20:05:42
 * Phiên bản: v1.0.0-stable (51 quy trình lâm sàng Springer)
 */

(function() {
  try {
    // Cung cấp bản sao ổn định vào biến toàn cục window.STABLE_PROCEDURES_FALLBACK
    window.STABLE_PROCEDURES_FALLBACK = // US-PainIntervention Pro: Comprehensive Clinical Procedure Database
// Based on: Ultrasound for Interventional Pain Management (Springer 2020) by Philip Peng et al.
// Standardized for Clinical Practice in Vietnam with 100% Bilingual Springer Atlas Figures.

 [
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
        "desc": "LT (Củ bé), GT (Củ lớn), BT (Gân nhị đầu). Gân hình tròn tăng âm nằm gọn trong rãnh chữ U.",
        "figNumber": "19.6",
        "springerCaption": "Fig. 19.6c). From scan 2, moving medially and rotating the probe, the CHL can be followed to its origin at the cora- coid process of the scapula. The underlying LHB tendon and subscapularis muscle are visible. Externally rotating the shoulder will bring more of the subscapularis into view and tighten the CHL."
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
      "absolute": [
        "Nhiễm khuẩn tại khớp AC hoặc vùng da bên trên."
      ],
      "relative": [
        "Sai khớp cùng đòn độ III trở lên (chỉ định phẫu thuật tái tạo dây chằng)."
      ]
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
        "desc": "Khe khớp AC nằm giữa Acromion và Clavicle. Kim đi in-plane vào khe khớp nông.",
        "figNumber": "19.8",
        "springerCaption": "Fig. 19.8, lower panel). From Scan 1, the probe is translated just lateral to bring the supraspinatus tendon into view. The supraspinatus tendon inserts onto the beak-shaped greater tuberosity (GT). Note the hypoechoic hyaline cartilage along the humeral head. The SASD bursa can be identified as a thin hypoechoic line flanked by the hyperechoic supra- spinatus tendon and subdeltoid fat. When bursitis is present, this bursal space will be fluid-filled with thickening of the peribursal fat. The st"
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
      "absolute": [
        "Nhiễm khuẩn vùng hố trên gai.",
        "Dị ứng thuốc tê nhóm amide."
      ],
      "relative": [
        "Rối loạn đông máu nặng.",
        "Bệnh phổi tắc nghẽn mạn tính nặng (tránh nguy cơ tràn khí màng phổi)."
      ]
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
      "approach": "In-plane từ TRONG RA NGOÀI (Medial-to-Lateral) dọc theo hố trên gai (Hướng kim chuẩn theo Philip Peng để tránh nguy cơ kim quá đà đâm vào động mạch hoặc màng phổi).",
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
      "HƯỚNG KIM SỐNG CÒN: Sách Peng nhấn mạnh bắt buộc đi kim từ TRONG RA NGOÀI (Medial to Lateral). Nếu kim có đi quá đà sẽ chạm vào xương củ trên hoặc bờ ổ chảo, tuyệt đối không được đi từ ngoài vào trong vì có nguy cơ đâm vào bó mạch trên vai hoặc chọc thủng màng phổi.",
      "Thần kinh trên vai chi phối cảm giác cho khoảng 70% khớp vai (toàn bộ bao khớp trên, sau và khớp AC).",
      "AN TOÀN MÀNG PHỔI: Giữ góc kim nông và luôn thấy rõ đầu kim, chạm nhẹ đáy xương hố trên gai để làm mốc chặn an toàn, không đâm quá sâu chếch về phía lồng ngực.",
      "Luôn bật Doppler màu để tránh tiêm thuốc tê vào lòng động mạch trên vai (gây ngộ độc LAST cấp tính)."
    ],
    "postProcedure": "Theo dõi cảm giác và cơ lực dạng vai trong 30 phút sau tiêm.",
    "figures": [
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
  },
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
      "absolute": [
        "Nhiễm khuẩn vùng khuỷu ngoài.",
        "Đứt hoàn toàn gân cơ duỗi chung."
      ],
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
      "absolute": [
        "Nhiễm khuẩn vùng khuỷu trong."
      ],
      "relative": [
        "Có chèn ép thần kinh trụ đi kèm (Cubital tunnel syndrome) - cần chẩn đoán phân biệt rõ ràng."
      ]
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
  },
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
      "absolute": [
        "Nhiễm khuẩn vùng cổ tay.",
        "Khối u thần kinh giữa (schwannoma) hoặc u bao gân chèn ép cần phẫu thuật."
      ],
      "relative": [
        "Teo cơ mô cái nặng (chỉ định phẫu thuật giải áp cắt dây chằng vòng cổ tay)."
      ]
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
      "absolute": [
        "Nhiễm khuẩn vùng mỏm trâm quay."
      ],
      "relative": [
        "Có nhánh nông thần kinh quay bắt chéo sát bao gân."
      ]
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
      "CẠM BẪY VÁCH NGĂN PHỤ (INTERTENDINOUS SEPTUM): Sách Peng (p.254) cảnh báo có tới 40 - 60% trường hợp tồn tại một vách ngăn xơ phụ chia ngăn duỗi số 1 thành 2 khoang riêng biệt cho gân APL và EPB. Nếu chỉ tiêm vào một khoang, khoang còn lại không ngấm thuốc dẫn đến thất bại điều trị dai dẳng! BẮT BUỘC quan sát dưới siêu âm test bung dịch tách đôi cả hai gân, nếu thấy vách ngăn phải luồn kim tiêm riêng từng ngăn.",
      "NGUYÊN NHÂN THẤT BẠI PHỔ BIẾN: Có vách ngăn đôi (septum) chia tách APL và EPB. Nếu chỉ tiêm vào 1 ngăn, ngăn còn lại vẫn viêm tái diễn. Dưới siêu âm, bác sĩ có thể đưa kim vào chính xác cả 2 ngăn.",
      "TRÁNH TEO DA: Vùng mỏm trâm quay lớp da rất mỏng. Không tiêm steroid vào mô mỡ dưới da để tránh teo da lõm sâu và bạc màu da kéo dài.",
      "Tránh nhánh nông thần kinh quay (SRN) để không gây dị cảm rát buốt mu ngón cái."
    ],
    "postProcedure": "Băng ép nhẹ, khuyên mang nẹp cố định ngón cái Spica Splint trong 1 - 2 tuần.",
    "figures": [
      {
        "path": "assets/images/ch21_wrist_hand/p254_img1.jpeg",
        "title": "Hình ảnh siêu âm ngăn duỗi số 1 cổ tay (De Quervain)",
        "desc": "APL (Abductor pollicis longus), EPB (Extensor pollicis brevis) trên mỏm trâm quay. Mũi tên chỉ vách ngăn phụ giữa 2 gân.",
        "figNumber": "21.7",
        "springerCaption": "Fig. 21.7 Six compartments of the extensor tendons in the wrist. First compartment, abductor pollicis longus (APL) and extensor pollicis brevis (EPB); second compartment, extensor carpi radialis longus (ECRL) and extensor carpi radialis brevis (ECRB); third compartment, the extensor pollicis longus (EPL); fourth compartment, extensor indicis proprius (EIP) and extensor digitorum (EDC); fifth compartment, the extensor digiti quinti (EDQ); sixth compartment, extensor carpi ulnaris (ECU). Lister tu"
      },
      {
        "path": "assets/images/ch21_wrist_hand/p257_img1.jpeg",
        "title": "Kỹ thuật tiêm bao gân ngăn duỗi số 1 dưới siêu âm",
        "desc": "Kim đi in-plane luồn vào lòng bao gân giữa APL và EPB, tránh nhánh nông thần kinh quay.",
        "figNumber": "21.11",
        "springerCaption": "Fig. 21.11). Deliver injectate when the needle (arrows) tip is visualized near the tendon sheath above the APL and EPB. 2. Out-of-Plane Injection Place the probe short axis over the abductor pollicis longus (APL) and extensor pollicis brevis (EPB) adjacent to radial styloid process. Note the radial artery that will be located toward the volar surface. Using an out-of-plane approach, steeply insert needle adjacent and centered to the transducer ("
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
      "absolute": [
        "Nhiễm khuẩn bao gân gấp mủ bàn tay."
      ],
      "relative": [
        "Ngón tay co cứng bất động hoàn toàn giai đoạn IV (cần phẫu thuật cắt ròng rọc A1)."
      ]
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
      "absolute": [
        "Nhiễm khuẩn tại chỗ."
      ],
      "relative": [
        "Gai xương lớn che lấp hoàn toàn khe khớp."
      ]
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
  },
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
        "desc": "SPR (Suprapatellar recess) kẹp giữa SFP (Đệm mỡ trên bánh chè) và PFP (Đệm mỡ trước xương đùi). Femur (Vỏ xương đùi).",
        "figNumber": "23.1",
        "springerCaption": "Fig. 23.1 Suprapatellar recess (SPR). (Reprinted with permission from Philip Peng Educational Series) T. Nouer Frederico and P. Peng"
      },
      {
        "path": "assets/images/ch23_knee/p286_img1.jpeg",
        "title": "Kỹ thuật tiêm In-plane ngách trên bánh chè từ bờ ngoài",
        "desc": "Đầu dò cắt ngang trên bánh chè, kim đi in-plane từ bờ ngoài vào trung tâm túi cùng trên bánh chè.",
        "figNumber": "23.5",
        "springerCaption": "Fig. 23.5 Sonographic image of needle insertion. Needle indicated by arrow. ∗∗∗, suprapatellar recess; F, femur; QT, quadriceps tendon. (Reprinted with permission from Philip Peng Educational Series) T. Nouer Frederico and P. Peng"
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
      "absolute": [
        "Nang Baker nhiễm trùng / áp xe vùng khoeo.",
        "Huyết khối tĩnh mạch sâu chi dưới (DVT) vùng khoeo."
      ],
      "relative": [
        "Túi phình động mạch khoeo (bắt buộc phải loại trừ bằng Doppler màu trước khi chọc!)."
      ]
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
        "desc": "Nang Baker (BC) nằm giữa gân cơ bán màng (SM) và đầu trong cơ bụng chân (MHG). Cổ nang hình phễu thông vào khớp.",
        "figNumber": "23.6",
        "springerCaption": "Fig. 23.6). Whereas most of Baker’s cysts are secondary cysts and associated with degenerative knee joint diseases, primary cysts are less common and occur primarily in children. \u0007Ultrasound Scan \u0007Scan 1: Normal Knee Palpate the semitendinosus (ST) tendon by slightly flex the knee. Put the ultrasound probe over the ST tendon and a “cherry on the cake” appearance with the ST tendon (arrow head) as the cherry and semimembranosus (SM) as the cake ("
      },
      {
        "path": "assets/images/ch23_knee/p290_img1.jpeg",
        "title": "Kỹ thuật chọc hút và tiêm nang Baker dưới siêu âm",
        "desc": "Kim 18G đi in-plane vào lòng nang dịch khoeo, hút xẹp nang và tiêm steroid.",
        "figNumber": "23.9",
        "springerCaption": "Fig. 23.9 Needle (arrow) marking the pedicle of Baker’s cyst which communicates with the joint. The insert showed the position of the probe. PA, popliteal artery. (Reprinted with permission from Philip Peng Educational Series)"
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
      "absolute": [
        "Nhiễm trùng da vùng cẳng chân trong."
      ],
      "relative": [
        "Rách đứt gân chân ngỗng."
      ]
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
        "desc": "Sartorius (S), Gracilis (G), Semitendinosus (ST) bám vào mặt trong xương chày (Tibia) trên dây chằng MCL.",
        "figNumber": "23.9",
        "springerCaption": "Fig. 23.9 Needle (arrow) marking the pedicle of Baker’s cyst which communicates with the joint. The insert showed the position of the probe. PA, popliteal artery. (Reprinted with permission from Philip Peng Educational Series)"
      },
      {
        "path": "assets/images/ch23_knee/p293_img1.jpeg",
        "title": "Kỹ thuật tiêm bao hoạt dịch gân chân ngỗng dưới siêu âm",
        "desc": "Kim đi in-plane luồn vào khoang bao hoạt dịch nằm sâu dưới gân chân ngỗng.",
        "figNumber": "23.15",
        "springerCaption": "Fig. 23.15). A linear pattern of spread is seen during the injection expand- ing the fascial plane with no changing in the echogenicity of the tendon (implying intratendinous injection). The lower two panel showed the positions of the probe and needle. Alternatively, the bursa can be injected when the probe is in short axis to the pes anserinus tendon ("
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
      "absolute": [
        "Nhiễm khuẩn vùng đùi gối.",
        "Dị ứng thuốc tê."
      ],
      "relative": [
        "Rối loạn đông máu nặng (nếu làm đốt sóng cao tần RFA)."
      ]
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
        "desc": "SMGN (Gối trên trong), SLGN (Gối trên ngoài), IMGN (Gối dưới trong). Động mạch đi kèm là mốc Doppler then chốt.",
        "figNumber": "27.10",
        "springerCaption": "Fig. 27.10). On the superomedial quadrant, the articular branches are superior medial genicular nerve, nerve to vastus medialis, and medial branch of the nerve to vastus intermedius and saphenous nerve. All branches are originated from femoral nerve including superior medial genicular nerve. With the exception of saphenous nerve, all contribute to the joint innervation consistently. Of all those articular branches, only the superior medial genicular nerve and medial branch of the nerve to vastus"
      },
      {
        "path": "assets/images/ch27_hip_knee_denervation/p348_img1.jpeg",
        "title": "Hình ảnh siêu âm và kỹ thuật định vị thần kinh gối",
        "desc": "Đầu dò đặt dọc thân xương, kim đi in-plane chạm xương sát cạnh động mạch gối.",
        "figNumber": "27.11",
        "springerCaption": "Fig. 27.11 Ultrasound imaging technique and the corresponding sonographic image of the super- omedial knee. Upper left panel. The ultrasound probe was placed along the long axis of femur between the diaphysis and epiphysis. Upper right panel. A fascia expansion (∗∗∗) deep to the vastus medial (VM) could be seen. E, epiphysis. Lower left panel. The ultrasound probe was then turned 90 °C to obtain a short-axis view of the femur. Move or align the probe in the cephalad-­ caudal direction until the"
      }
    ]
  },
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
      "absolute": [
        "Nhiễm khuẩn khớp háng.",
        "Nhiễm trùng da vùng bẹn đùi."
      ],
      "relative": [
        "Bệnh nhân có khớp háng nhân tạo toàn phần.",
        "Béo phì nặng làm mờ cửa sổ siêu âm."
      ]
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
        "desc": "FH (Chỏm xương đùi), FN (Cổ xương đùi), AL (Sụn viền ổ cối), Capsule (Bao khớp). Target: Chỗ nối chỏm - cổ đùi.",
        "figNumber": "22.2",
        "springerCaption": "Fig. 22.2). Lateral approach to the hip joint is commonly performed for fluoroscopy-guided injection and endoscopy pro- cedures but can be implemented with ultrasound guidance as well. Both approaches are described below. \u0007Anterior Approach Scan 1 Operator stands on the affected side of the patient. Place probe perpendicular to the femur at the upper third of the thigh; it shows the femoral shaft in short axis as a dome-shaped hyperechoic structure ("
      },
      {
        "path": "assets/images/ch22_hip/p272_img1.jpeg",
        "title": "Kỹ thuật tiêm In-plane nội khớp háng dưới siêu âm",
        "desc": "Kim tủy sống dài đi in-plane từ dưới lên trên, mũi kim chạm vỏ xương chỗ nối chỏm-cổ xương đùi.",
        "figNumber": "22.5",
        "springerCaption": "Fig. 22.5). Slide probe toward the femoral head to optimize image to visualize the femoral neck, femoral head, acetabulum, capsule (arrows), and anterior recess (∗∗). Color Doppler helps identify and avoid the ascending branch of the lateral femo- ral circumflex artery between iliopsoas and rectus femoris muscles when injecting ("
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
      "absolute": [
        "Nhiễm khuẩn mô mềm vùng mấu chuyển lớn."
      ],
      "relative": [
        "Rách hoàn toàn gân cơ mông nhỡ có chỉ định phẫu thuật khâu gân."
      ]
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
      "absolute": [
        "Nhiễm khuẩn vùng mông sâu.",
        "Khối u vùng chậu chèn ép thần kinh tọa."
      ],
      "relative": [
        "Rối loạn đông máu nặng.",
        "Thần kinh tọa có biến thể đâm xuyên qua bụng cơ hình lê."
      ]
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
      "absolute": [
        "Nhiễm khuẩn vùng bẹn chậu."
      ],
      "relative": [
        "Rối loạn đông máu nặng."
      ]
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
        "desc": "LFCN nằm trong góc mạc giữa Sartorius (cơ may) và TFL (cơ căng mạc đùi) dưới mốc xương ASIS.",
        "figNumber": "10.4",
        "springerCaption": "Fig. 10.4 Scanning at the fat-filled grove between sartorius and tensor fascia lata. (Reprinted with permission from Philip Peng Educational Series) 10 Lateral Femoral Cutaneous Nerve"
      },
      {
        "path": "assets/images/ch10_lfn/p133_img1.jpeg",
        "title": "Kỹ thuật tiêm In-plane phong bế LFCN dưới siêu âm",
        "desc": "Kim đi in-plane luồn vào khoang mạc quanh thần kinh bì đùi ngoài.",
        "figNumber": "10.4",
        "springerCaption": "Fig. 10.4 Scanning at the fat-filled grove between sartorius and tensor fascia lata. (Reprinted with permission from Philip Peng Educational Series) 10 Lateral Femoral Cutaneous Nerve"
      }
    ]
  },
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
      "absolute": [
        "Nhiễm khuẩn khớp cổ chân mủ.",
        "Nhiễm trùng da mu cổ chân."
      ],
      "relative": [
        "Tắc hẹp mạch máu chi dưới nặng."
      ]
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
      "absolute": [
        "Nhiễm khuẩn vùng gan chân."
      ],
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
  },
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
      "absolute": [
        "Nhiễm khuẩn khớp cùng chậu hoặc áp xe lân cận."
      ],
      "relative": [
        "Cứng dính khớp cùng chậu hoàn toàn (ankylosis) giai đoạn muộn không còn khe khớp."
      ]
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
        "desc": "Ilium (Xương chậu), Sacrum (Xương cùng). Mũi tên chỉ khe khớp cùng chậu ở 1/3 dưới.",
        "figNumber": "15.2",
        "springerCaption": "Fig. 15.2 Sonographic images of the posterior sacrum depicting the various views required for the performance of an ultrasound-guided sacral lateral branch block. The three injection points on the sacral lateral crest are marked by a star (★); probe placement on the skin surface is illustrated in the upper left inset of panel (a); scan lines are illustrated on a skeletal model in the left lower insets. (a) transverse sonographic view of the lower sacrum demonstrating the sacral cornu (SC) and po"
      },
      {
        "path": "assets/images/ch15_sacroiliac_joint/p193_img1.jpeg",
        "title": "Kỹ thuật tiêm In-plane khớp cùng chậu dưới siêu âm",
        "desc": "Kim đi in-plane từ ngoài vào trong vào khe khớp cùng chậu tại cực dưới.",
        "figNumber": "15.4",
        "springerCaption": "Fig. 15.4 Needle placement for a sacroiliac joint injection. (a) right upper inset illustrates the probe placement on the skin surface; left lower inset illustrates the scan line on a skeletal model. Needle (N), S2 posterior foramen (S2), sacroiliac joint (SIJ). (b) color duplex Doppler scan during injection demonstrating spread of injectate in the joint cleft. Reprinted with permission from Philip Peng Educational Series 1. If an eventual SLB radiofrequency ablation procedure is being contem- p"
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
      "relative": [
        "Dị tật nứt đốt sống chẻ đôi (Spina bifida) thể nặng.",
        "Phụ nữ có thai."
      ]
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
      "steroid": "Dexamethasone phosphate 4 - 8 mg (BẮT BUỘC dạng tan không hạt - Non-particulate steroid để phòng ngừa biến chứng tắc mạch tủy sống).",
      "salineVolume": "Nước muối sinh lý NaCl 0.9%: 8 - 15 ml (thể tích dịch lớn giúp đẩy thuốc dâng cao lên khoang ngoài màng cứng thắt lưng L4-L5-S1).",
      "localAnesthetic": "Lidocaine 0.5% - 1% hoặc Ropivacaine 0.1% - 0.2%: 2 - 3 ml.",
      "volume": "Dịch đẩy (Washout): 8 - 15 ml NaCl 0.9% để đẩy thể tích thuốc dâng cao lên tầng rễ thắt lưng L4-L5 và L5-S1."
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
      "absolute": [
        "Nhiễm khuẩn tại vùng cơ cạnh sống.",
        "Dị ứng thuốc tê."
      ],
      "relative": [
        "Rối loạn đông máu nặng."
      ]
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
        "desc": "TP (Mỏm ngang đốt sống), ESM (Cơ dựng gai), Rhomboid (Cơ trám), Trapezius (Cơ thang). Target: Mặt sâu cơ dựng gai trên mỏm ngang.",
        "figNumber": "11.9",
        "springerCaption": "Fig. 11.9 Cranio-caudal probe orientation over the rib. (Reprinted with permission from Dr. Vicente Roques from imedar.com)"
      },
      {
        "path": "assets/images/ch11_esp/p148_img1.jpeg",
        "title": "Kỹ thuật tiêm In-plane phong bế ESP Block",
        "desc": "Kim đi in-plane chạm mỏm ngang, bơm dịch bóc tách mặt phẳng cơ dựng gai lan tỏa nhiều đốt.",
        "figNumber": "11.14",
        "springerCaption": "Fig. 11.14). Different cath- eters have been successfully used (catheter over needle or catheter through needle). The preference of the author is to use the later due to the fact that the catheter can be advanced and securely left into the erector spinae muscle. • Needle/catheter: Catheter through needle (regular 18 G Tuohy needle) and regular epidural catheter (19 G) or catheter over needle can be used. • Drugs: For unilateral infusions, bupivacaine 0.2%; for bilateral infusions, bupivacaine 0."
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
      "absolute": [
        "Nhiễm khuẩn vùng thắt lưng.",
        "Rối loạn đông máu nặng."
      ],
      "relative": [
        "Dị tật cột sống thắt lưng hoặc trượt đốt sống độ 3-4."
      ]
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
        "desc": "SP (Mỏm gai), Lamina (Bản sống), Facet (Khớp liên mấu), TP (Mỏm ngang). Điểm đích nhánh trong tại rãnh SAP - TP.",
        "figNumber": "14.3",
        "springerCaption": "Fig. 14.3 Paramedian sagittal articular process view. (Reprinted with permission from Philip Peng Educational Series) M. Greher and P. Peng"
      },
      {
        "path": "assets/images/ch14_lumbar_medial_branch/p185_img1.jpeg",
        "title": "Kỹ thuật đi kim phong bế nhánh trong thắt lưng dưới siêu âm",
        "desc": "Kim chạm góc xương giữa mấu khớp trên SAP và mỏm ngang TP.",
        "figNumber": "14.12",
        "springerCaption": "Fig. 14.12 Checking the needle position in the paramedian sagittal transverse process view. (Reprinted with permission from Philip Peng Educational Series) Second, the ultrasound transducer is placed in paramedian sagittal transverse process view to check the needle position (arrow) at the target point (asterisk),which should be at the cephalad edge of the sacrum ala (SA) caudal to the transverse pro- cess of L5 (TP) ("
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
      "absolute": [
        "Nhiễm khuẩn vùng da thành ngực tại vị trí chọc kim.",
        "Dị ứng thuốc tê."
      ],
      "relative": [
        "Bệnh nhân suy hô hấp nặng hoặc cắt phổi bên đối diện (nguy cơ tràn khí màng phổi).",
        "Rối loạn đông máu nặng."
      ]
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
        "desc": "Ribs (Xương sườn), Intercostal muscles (Cơ gian sườn), Pleura (Đường màng phổi). Mũi tên chỉ vị trí bó mạch VAN dưới bờ sườn.",
        "figNumber": "5.4",
        "springerCaption": "Fig. 5.4 (a) The intercostal muscles. EI external intercostal, II internal intercostal, pleura indi- cated by arrows. Bold arrow represents the fascia over the external intercostal muscle. (b) shows a similar sonogram in an obese patient. ∗ represents the target location for the fascial plane between the internal intercostal and innermost intercostal muscles, or deep to the internal intercostal when the innermost intercostal is not well visualized. (Reprinted with permission from Philip Peng Edu"
      },
      {
        "path": "assets/images/ch5_intercostal/p78_img1.jpeg",
        "title": "Kỹ thuật đi kim phong bế gian sườn dưới siêu âm",
        "desc": "Kim đi in-plane từ dưới lên trên hướng về rãnh bờ dưới sườn, trên đường màng phổi.",
        "figNumber": "5.7",
        "springerCaption": "Fig. 5.7). \u0007Postprocedure Follow-Up and Pitfalls • After completion of the procedure, an evaluation of the patient should be con- ducted. Auscultation using a stethoscope to confirm air movement in the chest wall is necessary to diagnose pneumothorax ("
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
      "absolute": [
        "Nhiễm khuẩn vùng da chẩm gáy.",
        "Khuyết xương sọ vùng chẩm sau mổ."
      ],
      "relative": [
        "Rối loạn đông máu."
      ]
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
        "desc": "OCI (Cơ chéo đầu dưới), SSC (Cơ bán gai đầu). GON nằm trong mặt phẳng mạc giữa 2 cơ trên đốt C2.",
        "figNumber": "2.6",
        "springerCaption": "Fig. 2.6). \u0007Distal Approach at Level of Occiput The key landmark is the superior nuchal line and occipital protuberance. Scan 1: Upper sonograph shows the transverse view at superior nuchal line ("
      },
      {
        "path": "assets/images/ch2_occipital/p51_img1.jpeg",
        "title": "Kỹ thuật tiêm In-plane thần kinh chẩm lớn dưới siêu âm",
        "desc": "Kim đi in-plane từ ngoài vào trong vào mặt phẳng giữa OCI và SSC.",
        "figNumber": "2.9",
        "springerCaption": "Fig. 2.9 Sonography showed the injection around the greater occipital nerve. SSC semispinalis capitis; IOC inferior obliquus capitis. (Reprint with permission from Philip Peng Educational Series) 1. We recommend for less-experienced sonographers to start with the easier distal US-guided GON approach. 2. A block is successful if it creates absence of light-touch sensation in the dermatome of GON. 3. The target area in the proximal approach is not far from vertebral artery and epidural space; cons"
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
      "absolute": [
        "Nhiễm khuẩn vùng cổ trước bên.",
        "Rối loạn nhịp tim chậm nặng / Block nhĩ thất độ II-III.",
        "Rối loạn đông máu nặng."
      ],
      "relative": [
        "Liệt dây thanh âm bên đối diện (nguy cơ khàn tiếng hoặc khó thở nếu phong bế 2 bên)."
      ]
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
      "localAnesthetic": "Ropivacaine 0.2% HOẶC Bupivacaine 0.25% HOẶC Lidocaine 1%: 4 - 6 ml (thể tích vừa phải để lan tỏa xuống hạch sao ở C7-T1 mà không gây liệt thần kinh hoành hay dây X).",
      "volume": "3 - 5 ml Lidocaine 1% hoặc Ropivacaine 0.2% (Theo khuyến cáo của Philip Peng: Thể tích tối đa 5 ml để tránh thuốc lan rộng gây phong bế dây thần kinh thanh quản quặt ngược dẫn đến khàn tiếng khó thở, hoặc lan vào đám rối cánh tay)."
    },
    "pearlsAndPitfalls": [
      "CẢNH BÁO THỂ TÍCH THEO PENG: Không vượt quá thể tích 5 ml! Thể tích 3 - 5 ml là mức tối ưu tạo hội chứng Horner hoàn toàn mà giảm tối đa nguy cơ khàn giọng do tê liệt dây thần kinh thanh quản quặt ngược và tê yếu cánh tay do lan đám rối thần kinh cánh tay.",
      "DẤU HIỆU HORNER KHẲNG ĐỊNH THÀNH CÔNG: Sau tiêm 5-10 phút, xuất hiện Hội chứng Horner cùng bên (Sụp mi nhẹ - Ptosis, Co đồng tử - Miosis, Mất mồ hôi nửa mặt - Anhidrosis, Nghẹt mũi và da tay ấm hồng tăng nhiệt độ > 1.5 - 2°C).",
      "TRÁNH ĐỘNG MẠCH ĐỐT SỐNG & MẠCH CẢNH: Luôn bật Doppler màu; tiêm thuốc tê trực tiếp vào động mạch đốt sống chỉ cần 0.5 ml có thể gây co giật ngộ độc thần kinh trung ương tức thì!",
      "Khàn tiếng tạm thời (do ngấm thần kinh quặt ngược thanh quản) có thể xảy ra ở 10-20% bệnh nhân và sẽ tự hết sau vài giờ."
    ],
    "postProcedure": "Bệnh nhân ngồi nghỉ theo dõi huyết áp, nhịp tim và hội chứng Horner trong 30-45 phút.",
    "figures": [
      {
        "path": "assets/images/ch3_cervical_sympathetic/p57_img1.jpeg",
        "title": "Hình ảnh siêu âm chuỗi giao cảm cổ mức đốt sống C6",
        "desc": "CA (Động mạch cảnh), Longus colli (Cơ dài cổ), C6 TP (Củ Chassaignac). Chuỗi giao cảm nằm trên mặt cơ dài cổ.",
        "figNumber": "3.5",
        "springerCaption": "Fig. 3.5). At this level, the transverse process has a prominent posterior tubercle and vestigial anterior tubercle. Use color Doppler to identify the vertebral artery. Note that at the C6 level, the vertebral artery most commonly enters the fora- men transversarium. In up to 10% of patients, the vertebral artery travels outside the foramen transversarium at the C6 or even C5 level. The figure showed the presence of vertebral artery anterior to the anterior tubercle at C5 level ("
      },
      {
        "path": "assets/images/ch3_cervical_sympathetic/p58_img1.jpeg",
        "title": "Kỹ thuật tiêm In-plane phong bế giao cảm cổ dưới siêu âm",
        "desc": "Kim đi in-plane từ ngoài vào luồn dưới động mạch cảnh vào mặt phẳng cơ dài cổ.",
        "figNumber": "3.4",
        "springerCaption": "Fig. 3.4 The corresponding anatomic structures revealed at C6. (Reprinted with permission from Philip Peng Educational Series)"
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
      "absolute": [
        "Nhiễm khuẩn thành bụng dưới."
      ],
      "relative": [
        "Rối loạn đông máu nặng."
      ]
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
      "approach": "Out-of-plane là kỹ thuật ĐƯỢC ƯU TIÊN HÀNG ĐẦU theo Philip Peng (đường kim ngắn, góc dốc, nhận diện đầu kim chấm sáng có bóng cản âm, giảm tối đa nguy cơ thủng phúc mạc). In-plane từ ngoài vào trong là lựa chọn thay thế cho bác sĩ giàu kinh nghiệm.",
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
      "KỸ THUẬT OUT-OF-PLANE ƯU TIÊN: Peng ghi rõ: 'An out-of-plane approach is preferred because the needle path is short and the angle of insertion is steep, allowing the needle tip to be easily visualized'. Kỹ thuật này giúp kiểm soát tuyệt đối không vượt quá mạc cơ ngang bụng vào khoang phúc mạc.",
      "TRÁNH THỦNG PHÚC MẠC VÀO RUỘT: Cơ ngang bụng nằm ngay sát lá phúc mạc và quai ruột. Phải luôn thấy rõ 100% đầu kim và dừng lại ở khoang giữa cơ chéo trong và cơ ngang bụng, không chọc sâu qua cơ ngang bụng.",
      "Tránh nhánh thần kinh đùi: Nếu bơm thể tích quá lớn (> 15 ml) thuốc có thể ngấm sâu vào cơ thắt lưng chậu gây tê liệt thần kinh đùi tạm thời (bệnh nhân bị sụp gối, yếu cơ tứ đầu đùi)."
    ],
    "postProcedure": "Kiểm tra cơ lực duỗi gối trước khi cho bệnh nhân đứng dậy đi lại.",
    "figures": [
      {
        "path": "assets/images/ch6_ilioinguinal/p87_img1.jpeg",
        "title": "Hình ảnh siêu âm 3 lớp cơ thành bụng và thần kinh chậu bẹn",
        "desc": "EO (Cơ chéo ngoài), IO (Cơ chéo trong), TA (Cơ ngang bụng). Thần kinh chậu bẹn nằm giữa IO và TA.",
        "figNumber": "6.4",
        "springerCaption": "Fig. 6.4). At this level, all three layers of abdominal muscles can be easily visualized and the IH and II are quite consistently located between the transver- sus abdominis and internal oblique muscle. 2. Put the probe in short axis to the nerve. 3. Make sure the probe is perpendicular to the tangential plane of the skin. 4. Make sure the lateral part of the probe is on the iliac crest as the IH and II are usually located within 1.5 cm from the iliac crest. 5. Put more pressure on the medial pa"
      },
      {
        "path": "assets/images/ch6_ilioinguinal/p88_img1.jpeg",
        "title": "Kỹ thuật tiêm In-plane phong bế thần kinh chậu bẹn",
        "desc": "Kim đi in-plane vào mặt phẳng mạc giữa cơ chéo trong và cơ ngang bụng.",
        "figNumber": "6.4",
        "springerCaption": "Fig. 6.4). At this level, all three layers of abdominal muscles can be easily visualized and the IH and II are quite consistently located between the transver- sus abdominis and internal oblique muscle. 2. Put the probe in short axis to the nerve. 3. Make sure the probe is perpendicular to the tangential plane of the skin. 4. Make sure the lateral part of the probe is on the iliac crest as the IH and II are usually located within 1.5 cm from the iliac crest. 5. Put more pressure on the medial pa"
      }
    ]
  },
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
      "absolute": [
        "Nhiễm khuẩn vùng vai.",
        "Rách hoàn toàn gân chóp xoay tại ổ vôi hóa."
      ],
      "relative": [
        "Ổ vôi hóa thể xơ cứng cản quang rất cứng (giai đoạn tạo vôi nghỉ) khó hút rửa -> có thể chuyển sang tán sỏi ngoài cơ thể ESWT."
      ]
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
  },
  {
    "id": "lesser-occipital-nerve",
    "nameVi": "Phong bế thần kinh chẩm bé (Lesser Occipital Nerve - LON Block)",
    "nameEn": "Ultrasound-Guided Lesser Occipital Nerve Block",
    "category": "spine",
    "subcategory": "cervical",
    "type": "nerve_block",
    "difficulty": "Cơ bản",
    "icd10": "G44.847 (Đau dây thần kinh chẩm), M54.2 (Đau vùng cổ chẩm)",
    "indications": [
      "Đau dây thần kinh chẩm bé (Lesser Occipital Neuralgia) lan lên sau vành tai và thái dương.",
      "Đau đầu căn nguyên cổ (Cervicogenic Headache) có điểm đau chói tại bờ sau cơ ức đòn chũm.",
      "Đau đầu sau chấn thương vùng cổ hoặc sau phẫu thuật vùng sau tai.",
      "Hỗ trợ giảm đau trong đau nửa đầu mạn tính (Chronic Migraine) kháng trị."
    ],
    "contraindications": {
      "absolute": [
        "Nhiễm khuẩn cấp tính hoặc viêm mô tế bào vùng cổ chẩm.",
        "Tiền sử phản vệ với thuốc tê (Lidocaine, Bupivacaine, Ropivacaine)."
      ],
      "relative": [
        "Rối loạn đông máu nặng hoặc đang dùng thuốc chống đông liều cao.",
        "Dị dạng mạch máu lớn vùng chẩm cổ chưa được khảo sát."
      ]
    },
    "patientPosition": "Bệnh nhân nằm sấp hoặc ngồi trên ghế tựa, cổ hơi gập nhẹ và xoay đầu 30-45 độ sang bên đối diện để làm căng bộc lộ rõ bờ sau cơ ức đòn chũm.",
    "transducer": "Đầu dò Linear dải tần cao 10 - 15 MHz. Cài đặt chế độ Nerve/MSK, độ sâu khoảng 2.0 - 3.0 cm.",
    "sonoanatomy": [
      "Lớp nông: Da và mô dưới da.",
      "Cơ ức đòn chũm (Sternocleidomastoid - SCM): Nằm ở phía trước-ngoài, phản âm kém xen kẽ vân cân mạc.",
      "Cơ gối đầu (Splenius capitis): Nằm ở lớp sâu hơn và phía trong so với cơ SCM.",
      "Dây thần kinh chẩm bé (LON): Cấu trúc tròn hoặc bầu dục nhỏ (1-2 mm) giảm âm dạng chấm, xuất hiện ở bờ sau cơ SCM tại điểm Erb rồi chạy hướng lên trên qua bề mặt cơ gối đầu.",
      "Bó mạch chẩm: Nhánh động mạch chẩm có thể được phát hiện gần đó qua Doppler màu."
    ],
    "technique": {
      "approach": "In-plane từ phía sau-ngoài vào trong (Posterolateral to Medial) hoặc Out-of-plane.",
      "needle": "Kim 25G, chiều dài 38 mm.",
      "steps": [
        "1. Đặt đầu dò ngang tại 1/3 trên bờ sau cơ ức đòn chũm (SCM).",
        "2. Quét nhẹ lên trên để tìm cấu trúc thần kinh chẩm bé nằm trong khoang mạc giữa cơ SCM và cơ gối đầu.",
        "3. Sử dụng Color Doppler để xác định và tránh các nhánh mạch máu nông.",
        "4. Sát khuẩn rộng bằng Chlorhexidine 2% hoặc Povidone Iodine 10%.",
        "5. Gây tê nốt sần tại chỗ bằng 0.2 ml Lidocaine 1%.",
        "6. Đâm kim In-plane từ sau ra trước, theo dõi sát đường đi của thân và đầu kim hướng đến bờ sau cơ SCM.",
        "7. Đưa đầu kim tiếp cận ngay sát vỏ bao thần kinh trong khoang mạc, không đâm xuyên vào thân thần kinh.",
        "8. Hút thử âm tính (loại trừ nội mạch), bơm chậm 1.5 - 2.5 ml thuốc tê, quan sát dịch thuốc bọc quanh thần kinh hình mắt tròn (donut sign)."
      ]
    },
    "drugsAndDosage": {
      "localAnesthetic": "Lidocaine 1% hoặc Ropivacaine 0.2% - 0.25%.",
      "steroid": "Dexamethasone 2 - 4 mg (tùy chọn trong trường hợp đau mạn tính có viêm thần kinh).",
      "volume": "1.5 - 2.5 ml tổng thể tích."
    },
    "pearlsAndPitfalls": [
      "Tránh đâm kim quá sâu vào cơ gối đầu hoặc cơ bậc thang để không phong bế ngoài ý muốn dây thần kinh cơ hoành (phrenic nerve) hoặc đám rối cánh tay.",
      "Luôn dùng Color Doppler vì động mạch chẩm có thể chạy song hành với thần kinh chẩm bé ở đoạn cao.",
      "Phong bế LON thường được kết hợp với phong bế GON (thần kinh chẩm lớn) để đạt hiệu quả giảm đau toàn diện vùng chẩm gáy."
    ],
    "postProcedure": "Ép gạc tại chỗ 2-3 phút. Theo dõi bệnh nhân 15-20 phút đánh giá cảm giác tê vùng sau tai và loại trừ chóng mặt hoặc tụ máu nông.",
    "figures": [
      {
        "path": "assets/images/ch2_occipital/p48_img1.jpeg",
        "figNumber": "2.2",
        "title": "Giải phẫu đường đi của thần kinh chẩm lớn (GON) và chẩm bé (LON) (Fig. 2.2)",
        "desc": "Sơ đồ giải phẫu thần kinh chẩm bé xuất phát từ rễ C2-C3, vòng qua bờ sau cơ ức đòn chũm phân nhánh cảm giác sau vành tai.",
        "springerCaption": "Fig. 2.2 Course of the greater and lesser occipital nerves in relation to cervical musculature."
      },
      {
        "path": "assets/images/ch2_occipital/p50_img1.jpeg",
        "figNumber": "2.4",
        "title": "Hình ảnh siêu âm thần kinh chẩm bé tại bờ sau cơ ức đòn chũm (Fig. 2.4)",
        "desc": "Mặt cắt ngang bờ sau cơ ức đòn chũm (SCM): Thần kinh chẩm bé là chấm giảm âm nằm trên mạc cơ gối đầu.",
        "springerCaption": "Fig. 2.4 Sonoanatomy of the lesser occipital nerve at the posterior border of the sternocleidomastoid muscle."
      }
    ]
  },
  {
    "id": "distal-gon",
    "nameVi": "Phong bế thần kinh chẩm lớn lối xa tại đường cong chẩm trên (Distal GON Block)",
    "nameEn": "Ultrasound-Guided Distal Greater Occipital Nerve Block at Superior Nuchal Line",
    "category": "spine",
    "subcategory": "cervical",
    "type": "nerve_block",
    "difficulty": "Cơ bản",
    "icd10": "G44.847 (Đau dây thần kinh chẩm lớn)",
    "indications": [
      "Đau dây thần kinh chẩm lớn (Greater Occipital Neuralgia) điển hình lan lên đỉnh đầu và hốc mắt.",
      "Đau đầu do co thắt cơ vùng chẩm gáy không đáp ứng thuốc uống.",
      "Lựa chọn thay thế khi lối gần tại C1-C2 khó thực hiện do phẫu thuật cứng khớp cổ hoặc béo phì."
    ],
    "contraindications": {
      "absolute": [
        "Nhiễm khuẩn tại chỗ vùng da ụ chẩm.",
        "Khuyết xương sọ vùng chẩm hoặc dị dạng mạch máu não chẩm."
      ],
      "relative": [
        "Rối loạn đông máu nặng.",
        "Tiền sử dị ứng thuốc tê."
      ]
    },
    "patientPosition": "Bệnh nhân nằm sấp, trán tựa trên gối mềm khoét lỗ hoặc ngồi gập đầu nhẹ ra trước trên bàn khám.",
    "transducer": "Đầu dò Linear 10 - 15 MHz, đặt ngang tại ụ chẩm ngoài (External Occipital Protuberance - EOP) rồi quét sang bên dọc theo đường cong chẩm trên.",
    "sonoanatomy": [
      "Xương chẩm: Đường bờ tăng âm cong đều với bóng cản âm sắc nét phía sau.",
      "Động mạch chẩm (Occipital Artery): Bắt màu rõ rệt trên Doppler màu, đập theo nhịp nằm cách ụ chẩm ngoài khoảng 2.5 - 3.5 cm.",
      "Thần kinh chẩm lớn (GON): Nằm ngay phía TRONG (Medial) so với động mạch chẩm, là nốt giảm âm nhỏ nằm nông dưới mạc cơ thang.",
      "Cơ thang (Trapezius) và cơ gối đầu (Splenius capitis): Nằm ở các lớp cơ nông."
    ],
    "technique": {
      "approach": "In-plane từ trong ra ngoài (Medial to Lateral) hoặc Out-of-plane.",
      "needle": "Kim 25G - 27G, chiều dài 38 mm.",
      "steps": [
        "1. Đặt đầu dò ngang tại ụ chẩm ngoài, trượt đầu dò sang bên 2-3 cm dọc đường cong chẩm trên.",
        "2. Bật Color Doppler để phát hiện xung đập của động mạch chẩm (Occipital Artery).",
        "3. Xác định thần kinh chẩm lớn nằm ngay bờ trong của động mạch chẩm.",
        "4. Sát khuẩn kỹ vùng da có chân tóc.",
        "5. Đưa kim In-plane từ bờ trong hướng đến sát thần kinh chẩm lớn dưới mạc cơ thang.",
        "6. Test hút âm tính kỹ càng (bắt buộc vì động mạch chẩm nằm sát bên).",
        "7. Bơm chậm 1.5 - 3.0 ml thuốc tê tạo dải bọc quanh thần kinh và động mạch."
      ]
    },
    "drugsAndDosage": {
      "localAnesthetic": "Lidocaine 1% hoặc Ropivacaine 0.2% - 0.25% (1.5 - 3.0 ml).",
      "steroid": "Triamcinolone acetonide 10 - 20 mg hoặc Dexamethasone 2 - 4 mg.",
      "volume": "1.5 - 3.0 ml."
    },
    "pearlsAndPitfalls": [
      "Tại đường cong chẩm trên, thần kinh chẩm lớn đã phân nhánh nên tỷ lệ giảm đau toàn bộ có thể thấp hơn so với phong bế lối gần tại C1-C2 (giữa cơ chéo đầu dưới và bán gai đầu).",
      "Tuyệt đối không tiêm nội mạch vào động mạch chẩm: bắt buộc test hút xi lanh trước và trong khi bơm."
    ],
    "postProcedure": "Ấn giữ vùng tiêm 3 phút bằng gạc vô khuẩn để tránh tụ máu dưới da đầu. Đánh giá vùng mất cảm giác đỉnh đầu.",
    "figures": [
      {
        "path": "assets/images/ch2_occipital/p48_img1.jpeg",
        "figNumber": "2.2",
        "title": "Mối tương quan giữa GON và động mạch chẩm tại đường cong chẩm trên (Fig. 2.2)",
        "desc": "Thần kinh chẩm lớn bắt chéo động mạch chẩm tại đường cong chẩm trên trước khi phân nhánh lên đỉnh đầu.",
        "springerCaption": "Fig. 2.2 Course of the greater occipital nerve crossing the occipital artery."
      },
      {
        "path": "assets/images/ch2_occipital/p49_img1.jpeg",
        "figNumber": "2.3",
        "title": "Hình ảnh siêu âm và Doppler màu động mạch chẩm và GON (Fig. 2.3)",
        "desc": "Doppler màu xác định động mạch chẩm (OA); thần kinh chẩm lớn (GON) nằm ngay phía trong động mạch.",
        "springerCaption": "Fig. 2.3 Color Doppler sonogram showing occipital artery and medial location of the greater occipital nerve."
      }
    ]
  },
  {
    "id": "cervical-nerve-root",
    "nameVi": "Phong bế rễ thần kinh gai sống cổ chọn lọc C5, C6, C7",
    "nameEn": "Ultrasound-Guided Selective Cervical Nerve Root Block (C5, C6, C7)",
    "category": "spine",
    "subcategory": "cervical",
    "type": "nerve_block",
    "difficulty": "Chuyên sâu",
    "icd10": "M54.12 (Bệnh rễ thần kinh tủy cổ), M50.1 (Thoát vị đĩa đệm cổ chèn ép rễ)",
    "indications": [
      "Đau rễ thần kinh cổ (Cervical Radicular Pain) cấp hoặc mạn tính kháng trị nội khoa.",
      "Chẩn đoán xác định tầng rễ thủ phạm trước phẫu thuật giải ép cột sống cổ.",
      "Hội chứng đau sau phẫu thuật cột sống cổ chèn ép rễ tái phát."
    ],
    "contraindications": {
      "absolute": [
        "Nhiễm khuẩn toàn thân hoặc tại chỗ vùng cổ.",
        "Bệnh lý tủy cổ nặng (Cervical Myelopathy) có chỉ định mổ cấp cứu.",
        "Rối loạn đông máu nặng (nguy cơ tụ máu chèn ép khoang cổ gây nghẹt thở)."
      ],
      "relative": [
        "Dị dạng giải phẫu mạch máu đốt sống hoặc u vùng cổ.",
        "Bệnh nhân không hợp tác, kích động."
      ]
    },
    "patientPosition": "Nằm nghiêng bên đối diện hoặc nằm ngửa, đầu hơi quay 30 độ sang bên lành, cổ hơi ngửa nhẹ.",
    "transducer": "Đầu dò Linear dải tần cao 10 - 15 MHz. Chế độ mạch máu/thần kinh chuyên sâu với Color Doppler độ nhạy cao.",
    "sonoanatomy": [
      "Quy tắc nhận diện tầng rễ cổ theo Philip Peng: Bắt đầu từ C7 lên C5:",
      "C7: Mỏm ngang C7 chỉ có CỦ SAU (Posterior tubercle) đơn độc, củ trước tiêu biến hoặc rất nhỏ. Động mạch đốt sống nằm ngay trước rễ C7.",
      "C6: Có CỦ TRƯỚC rất cao và nhọn (củ Chassaignac) vượt trội so với củ sau.",
      "C5: Có 2 củ trước và sau cân đối nhau, kích thước nhỏ hơn củ Chassaignac.",
      "Rễ thần kinh cổ: Cấu trúc tròn/bầu dục giảm âm nằm trong rãnh gian củ (intertubercular groove) giữa củ trước và củ sau.",
      "Mạch máu nguy hiểm: Động mạch đốt sống (Vertebral artery), động mạch cổ sâu (Deep cervical artery) và động mạch cổ lên (Ascending cervical artery) phân nhánh xung quanh lỗ liên hợp."
    ],
    "technique": {
      "approach": "In-plane từ sau ra trước (Posterior-to-Anterior), kiểm soát toàn bộ chiều dài kim.",
      "needle": "Kim 22G - 25G, chiều dài 50 mm.",
      "steps": [
        "1. Quét đầu dò ngang vùng cổ bên để xác định chính xác tầng rễ C5, C6 hoặc C7 dựa vào hình thái củ mỏm ngang.",
        "2. BẬT COLOR DOPPLER ĐỘ NHẠY CAO để phát hiện tất cả các nhánh động mạch cổ sâu, cổ lên và động mạch rễ chạy quanh rãnh gian củ.",
        "3. Lựa chọn đường đi của kim từ phía sau củ sau, chếch nhẹ ra trước vào nửa sau của rãnh gian củ.",
        "4. Sát khuẩn vô trùng tuyệt đối, gây tê nông da.",
        "5. Tiến kim In-plane từ sau ra trước. Đích đến là bờ sau-ngoài của rễ thần kinh, tuyệt đối không chạm màng bao rễ hoặc tiến sâu vào lỗ liên hợp.",
        "6. Test hút xi lanh âm tính (loại trừ nội mạch và dịch não tủy).",
        "7. Bơm thử 0.2 ml nước muối hoặc thuốc tê: thấy thuốc bọc quanh rễ thần kinh mà không gây đau buốt giật điện.",
        "8. Bơm chậm từng lượng nhỏ (0.5 ml) dung dịch thuốc tê + Corticosteroid dạng tan không hạt."
      ]
    },
    "drugsAndDosage": {
      "localAnesthetic": "Ropivacaine 0.2% hoặc Lidocaine 1% (1.0 - 1.5 ml).",
      "steroid": "Dexamethasone sodium phosphate 2 - 4 mg (TUYỆT ĐỐI KHÔNG DÙNG STEROID DẠNG HẠT như Triamcinolone, Depo-Medrol vì nguy cơ tắc mạch tủy cổ).",
      "volume": "1.0 - 1.5 ml tổng thể tích."
    },
    "pearlsAndPitfalls": [
      "CẢNH BÁO AN TOÀN TỐI CAO: Bắt buộc dùng Dexamethasone (Non-particulate steroid). Tiêm steroid dạng hạt vào các nhánh động mạch rễ cổ có thể gây nhồi máu tủy cổ và thân não dẫn đến liệt tứ chi hoặc tử vong!",
      "Luôn dùng Doppler màu kiểm tra đường đi của kim để không chọc thủng động mạch đốt sống hoặc động mạch cổ sâu.",
      "Thể tích tiêm không vượt quá 1.5 ml để tránh thuốc lan vào khoang ngoài màng cứng hoặc khoang dưới nhện."
    ],
    "postProcedure": "Theo dõi sát tri giác, huyết áp, nhịp tim và dấu hiệu thần kinh khu trú trong ít nhất 30 - 45 phút.",
    "figures": [
      {
        "path": "assets/images/ch12_cervical_root/p157_img1.jpeg",
        "figNumber": "12.3",
        "title": "Giải phẫu siêu âm mỏm ngang và rễ thần kinh cổ C5 (Fig. 12.3)",
        "desc": "Củ trước (AT) và củ sau (PT) mỏm ngang C5 có kích thước tương đương nhau, rễ thần kinh C5 nằm ở rãnh giữa hai củ.",
        "springerCaption": "Fig. 12.3 Cervical 5th nerve root. Note the anterior and posterior tubercles are similar in size."
      },
      {
        "path": "assets/images/ch12_cervical_root/p158_img1.jpeg",
        "figNumber": "12.4",
        "title": "Mốc giải phẫu rễ thần kinh C6 với củ Chassaignac (Fig. 12.4)",
        "desc": "Củ trước C6 (Chassaignac tubercle) rất cao và nhọn, là mốc giải phẫu then chốt để định vị các tầng cổ.",
        "springerCaption": "Fig. 12.4 Cervical 6th nerve root. Note the prominent anterior tubercle (Chassaignac's tubercle)."
      },
      {
        "path": "assets/images/ch12_cervical_root/p158_img2.jpeg",
        "figNumber": "12.5",
        "title": "Mỏm ngang đốt sống C7 chỉ có củ sau đơn độc (Fig. 12.5)",
        "desc": "C7 chỉ có củ sau (PT), không có củ trước. Rễ C7 nằm tựa trên mỏm ngang, động mạch đốt sống chạy ở phía trước.",
        "springerCaption": "Fig. 12.5 Cervical 7th nerve root. Note the presence of posterior tubercle while the anterior is rudimentary."
      },
      {
        "path": "assets/images/ch12_cervical_root/p159_img2.jpeg",
        "figNumber": "12.7",
        "title": "Kỹ thuật đâm kim In-plane và quan sát lan thuốc quanh rễ cổ (Fig. 12.7)",
        "desc": "Kim tiến từ sau ra trước, đầu kim nằm ở bờ sau ngoài rễ, thuốc tê lan bọc quanh rễ thần kinh.",
        "springerCaption": "Fig. 12.7 Real-time monitoring of the injectate spreading around the cervical nerve root."
      }
    ]
  },
  {
    "id": "cervical-medial-branch-ton",
    "nameVi": "Phong bế nhánh trong cột sống cổ và thần kinh chẩm thứ 3 (Cervical Medial Branch & TON Block)",
    "nameEn": "Ultrasound-Guided Cervical Medial Branch and Third Occipital Nerve (TON) Block",
    "category": "spine",
    "subcategory": "cervical",
    "type": "nerve_block",
    "difficulty": "Nâng cao",
    "icd10": "M53.82 (Hội chứng đau diện khớp cột sống cổ - Cervical Facet Syndrome)",
    "indications": [
      "Đau cột sống cổ mạn tính nghi ngờ do thoái hóa diện khớp (Zygapophyseal joint arthropathy).",
      "Đau đầu vùng chẩm xuất phát từ khớp cổ C2-C3 (chỉ định phong bế thần kinh chẩm thứ 3 - TON).",
      "Chấn thương đụng dập cổ kiểu giật (Whiplash injury) gây đau diện khớp dai dẳng.",
      "Phong bế chẩn đoán chọn lọc trước khi thực hiện đốt sóng cao tần (RFA) diện khớp cổ."
    ],
    "contraindications": {
      "absolute": [
        "Nhiễm khuẩn da hoặc mô mềm vùng sau cổ.",
        "Dị ứng thuốc gây tê nhóm amide."
      ],
      "relative": [
        "Rối loạn đông máu nặng.",
        "Cứng khớp cổ nặng hoặc tiền sử phẫu thuật hàn xương cổ lối sau làm mất mốc giải phẫu."
      ]
    },
    "patientPosition": "Nằm nghiêng hoặc nằm sấp, đầu gập nhẹ để làm phẳng đường cong sinh lý cổ và bộc lộ các trụ khớp sau.",
    "transducer": "Đầu dò Linear 10 - 15 MHz, ban đầu đặt dọc mặt phẳng trán (coronal) trên các trụ khớp, sau đó xoay ngang ở từng tầng.",
    "sonoanatomy": [
      "Mặt cắt Coronal: Các trụ khớp cổ (articular pillars) C3-C6 tạo thành đường lượn sóng hình 'đỉnh núi và thung lũng' liên tục.",
      "Đáy thung lũng là eo của trụ khớp (Waist of articular pillar) - đích đến của nhánh trong cổ.",
      "Khớp C2-C3: Có hình bậc thang tụt xuống (drop-off) đặc trưng, thần kinh chẩm thứ 3 (TON) vắt ngang qua diện khớp này.",
      "Mặt cắt Transverse: Eo trụ khớp lõm vào hình chữ V đáy tù, phủ bởi cơ gối đầu và cơ bán gai đầu.",
      "Mỏm ngang C7: Rộng và không có trụ khớp điển hình, nhánh trong C7 chạy ở gốc mỏm ngang."
    ],
    "technique": {
      "approach": "In-plane từ sau ra trước trên mặt cắt ngang (Transverse view).",
      "needle": "Kim 22G - 25G, chiều dài 50 mm.",
      "steps": [
        "1. Quét dọc Coronal từ trên xuống dưới để đếm và xác định chính xác các trụ khớp từ C2-C3 đến C6-C7.",
        "2. Đánh dấu eo của trụ khớp mục tiêu (waist of articular pillar).",
        "3. Xoay đầu dò sang mặt cắt ngang tại eo trụ khớp.",
        "4. Sát khuẩn vô trùng vùng cổ sau.",
        "5. Đâm kim In-plane từ sau ra trước qua cơ cổ sâu hướng đến điểm giữa của eo trụ khớp.",
        "6. Chạm nhẹ vào bờ xương eo trụ khớp, rút kim lại 0.5 - 1 mm.",
        "7. Test hút âm tính, bơm chậm 0.3 - 0.5 ml thuốc tê quan sát thuốc tụ tại đáy eo trụ khớp."
      ]
    },
    "drugsAndDosage": {
      "localAnesthetic": "Bupivacaine 0.25% hoặc Lidocaine 1% hoặc Ropivacaine 0.2% (0.3 - 0.5 ml mỗi nhánh).",
      "steroid": "Thường không phối hợp steroid trong phong bế chẩn đoán; có thể thêm 1 mg Dexamethasone nếu điều trị giảm đau tạm thời.",
      "volume": "0.3 - 0.5 ml mỗi nhánh (THỂ TÍCH NHỎ NGHIÊM NGẶT $\\le 0.5\\text{ ml}$ để đảm bảo tính chọn lọc chẩn đoán)."
    },
    "pearlsAndPitfalls": [
      "GIỚI HẠN THỂ TÍCH KHẮC KHE: Nếu bơm thể tích > 0.5 ml, thuốc tê sẽ lan qua mạc vào lỗ liên hợp phong bế rễ thần kinh gai sống cổ, gây kết quả DƯƠNG TÍNH GIẢ dẫn đến chỉ định đốt RFA sai lầm.",
      "Để phong bế một diện khớp cổ cần phong bế 2 nhánh trong (nhánh cùng tầng và tầng trên), riêng khớp C2-C3 do thần kinh chẩm thứ 3 (TON) chi phối độc lập."
    ],
    "postProcedure": "Đánh giá mức độ giảm đau bằng thang điểm VAS sau 30 phút và ghi nhật ký cơn đau trong 6 giờ đầu.",
    "figures": [
      {
        "path": "assets/images/ch13_cervical_medial_branch/p165_img1.jpeg",
        "figNumber": "13.3",
        "title": "Mặt cắt Coronal các trụ khớp cổ (Articular Pillars) C3-C6 (Fig. 13.3)",
        "desc": "Hình ảnh lượn sóng liên tục của các trụ khớp cổ. Đáy lõm giữa hai đỉnh khớp là eo trụ khớp - đích đến của nhánh trong.",
        "springerCaption": "Fig. 13.3 Coronal scan of the cervical spine demonstrating the articular pillars (AP) and facet joints."
      },
      {
        "path": "assets/images/ch13_cervical_medial_branch/p169_img1.jpeg",
        "figNumber": "13.7",
        "title": "Mặt cắt ngang diện khớp cổ C6-C7 (Fig. 13.7)",
        "desc": "Mặt cắt ngang qua diện khớp C6-C7 bộc lộ khe khớp và eo trụ khớp C6.",
        "springerCaption": "Fig. 13.7 Transverse scan at the level of the (C6/C7) zygapophyseal joint."
      },
      {
        "path": "assets/images/ch13_cervical_medial_branch/p172_img1.jpeg",
        "figNumber": "13.11",
        "title": "Kỹ thuật đâm kim In-plane vào eo trụ khớp cổ C6 (Fig. 13.11)",
        "desc": "Kim tiến từ sau ra trước, chạm nhẹ xương eo trụ khớp C6, thuốc tê lan dưới cơ bán gai đầu.",
        "springerCaption": "Fig. 13.11 Needle insertion at C6 level showing injectate spread under the semispinalis capitis."
      }
    ]
  },
  {
    "id": "genitofemoral-nerve",
    "nameVi": "Phong bế thần kinh sinh dục đùi (Genitofemoral Nerve Block - GFN)",
    "nameEn": "Ultrasound-Guided Genitofemoral Nerve Block",
    "category": "spine",
    "subcategory": "pelvis",
    "type": "nerve_block",
    "difficulty": "Nâng cao",
    "icd10": "G57.8 (Đau thần kinh sinh dục đùi sau phẫu thuật bẹn)",
    "indications": [
      "Đau mạn tính vùng bẹn, bìu (nam) hoặc môi lớn (nữ) sau mổ thoát vị bẹn (Post-herniorrhaphy groin pain).",
      "Đau tinh hoàn mạn tính (Orchialgia) không rõ nguyên nhân nhiễm trùng.",
      "Chèn ép nhánh đùi của GFN gây đau rát mặt trước trong đùi trên."
    ],
    "contraindications": {
      "absolute": [
        "Nhiễm khuẩn cấp tính vùng bẹn bìu.",
        "Thoát vị bẹn nghẹt chưa phẫu thuật."
      ],
      "relative": [
        "Rối loạn đông máu nặng.",
        "Dị ứng thuốc tê."
      ]
    },
    "patientPosition": "Nằm ngửa, đùi duỗi thẳng hơi dạng nhẹ, bộc lộ vùng bẹn và nếp lằn bẹn.",
    "transducer": "Đầu dò Linear 10 - 15 MHz dải tần cao.",
    "sonoanatomy": [
      "3 phương pháp tiếp cận theo Philip Peng:",
      "Method 1 (Lỗ bẹn sâu): Động mạch thượng vị dưới (IEA) xuất phát từ động mạch chậu ngoài; nhánh sinh dục của GFN bắt chéo bờ ngoài động mạch.",
      "Method 2 (Thừng tinh / Dây chằng tròn tại củ mu): Thừng tinh chứa các ống cấu trúc nhỏ (ống dẫn tinh, đám rối tĩnh mạch hình dây leo); nhánh sinh dục nằm ngay trong bao xơ thừng tinh.",
      "Method 3 (Tam giác đùi): Nhánh đùi của GFN nằm ở bờ ngoài động mạch đùi chung, ngay dưới dây chằng bẹn."
    ],
    "technique": {
      "approach": "In-plane từ ngoài vào trong cho cả 3 phương pháp.",
      "needle": "Kim 22G - 25G, chiều dài 38 - 50 mm.",
      "steps": [
        "1. Đặt đầu dò ngang tại nếp lằn bẹn hoặc ngay ngoài củ mu để xác định thừng tinh (Method 2) hoặc động mạch đùi (Method 3).",
        "2. Dùng Color Doppler kiểm tra động mạch thượng vị dưới, động mạch đùi và các mạch máu của thừng tinh.",
        "3. Sát khuẩn kỹ vùng bẹn.",
        "4. Đưa kim In-plane từ ngoài vào trong hướng vào bao thừng tinh (Method 2) hoặc khoang mạc cạnh động mạch đùi (Method 3).",
        "5. Test hút âm tính (tuyệt đối không tiêm vào đám rối tĩnh mạch hoặc động mạch).",
        "6. Bơm chậm 2.0 - 4.0 ml thuốc tê tạo dải bọc quanh cấu trúc thần kinh."
      ]
    },
    "drugsAndDosage": {
      "localAnesthetic": "Levobupivacaine 0.25% hoặc Lidocaine 1% (2.0 - 4.0 ml).",
      "steroid": "Dexamethasone 2 - 4 mg (nếu có viêm xơ hóa thần kinh sau mổ thoát vị).",
      "volume": "2.0 - 4.0 ml."
    },
    "pearlsAndPitfalls": [
      "Phân biệt rõ vùng cảm giác: GFN chi phối da bìu/môi lớn và mặt trước trong đùi trên, trong khi TK chậu bẹn chi phối gốc dương vật/mu và vùng bẹn trên.",
      "Trong Method 2 (thừng tinh): cẩn trọng không đâm xuyên ống dẫn tinh hoặc làm rách đám rối tĩnh mạch hình dây leo gây tụ máu bìu."
    ],
    "postProcedure": "Băng ép nhẹ vùng tiêm, theo dõi 20 phút kiểm tra giảm đau vùng bìu/môi lớn.",
    "figures": [
      {
        "path": "assets/images/ch7_genitofemoral/p95_img1.jpeg",
        "figNumber": "7.4",
        "title": "Vị trí đặt đầu dò siêu âm khảo sát nhánh sinh dục đùi (Fig. 7.4)",
        "desc": "Đầu dò đặt ngang qua lỗ bẹn sâu và thừng tinh để tìm nhánh sinh dục của thần kinh sinh dục đùi.",
        "springerCaption": "Fig. 7.4 Ultrasound transducer position and corresponding sonoanatomy for the genitofemoral nerve."
      },
      {
        "path": "assets/images/ch7_genitofemoral/p98_img1.jpeg",
        "figNumber": "7.8",
        "title": "Hình ảnh siêu âm nhánh sinh dục trong thừng tinh (Fig. 7.8)",
        "desc": "Thừng tinh chứa nhánh sinh dục (GB) nằm cạnh động mạch tinh hoàn và ống dẫn tinh.",
        "springerCaption": "Fig. 7.8 Transducer position and sonogram revealing the genital branch (GB) of the genitofemoral nerve."
      },
      {
        "path": "assets/images/ch7_genitofemoral/p99_img1.jpeg",
        "figNumber": "7.10",
        "title": "Kỹ thuật tiêm thuốc vào bao thừng tinh bọc quanh nhánh sinh dục (Fig. 7.10)",
        "desc": "Thuốc tê bơm vào trong bao thừng tinh làm bung tách các thành phần, bọc quanh nhánh thần kinh sinh dục.",
        "springerCaption": "Fig. 7.10 Injection inside the spermatic cord outlined by arrows for genitofemoral nerve block."
      }
    ]
  },
  {
    "id": "obturator-internus",
    "nameVi": "Tiêm cơ và bao hoạt dịch cơ bịt trong (Obturator Internus Muscle & Bursa)",
    "nameEn": "Ultrasound-Guided Obturator Internus Muscle and Bursa Injection",
    "category": "lower",
    "subcategory": "hip",
    "type": "muscle_injection",
    "difficulty": "Nâng cao",
    "icd10": "M62.8 (Hội chứng đau cơ vùng chậu sâu / Cơ bịt trong)",
    "indications": [
      "Hội chứng cơ bịt trong (Obturator Internus Syndrome) gây đau mông sâu tăng lên khi ngồi lâu.",
      "Chẩn đoán phân biệt với hội chứng cơ hình lê và bệnh lý khớp cùng chậu.",
      "Viêm bao hoạt dịch cơ bịt trong (Obturator internus bursitis)."
    ],
    "contraindications": {
      "absolute": [
        "Nhiễm khuẩn cấp vùng mông hoặc áp xe khoang chậu hông.",
        "Dị ứng thuốc tiêm."
      ],
      "relative": [
        "Rối loạn đông máu nặng.",
        "Bệnh nhân béo phì độ III (mốc xương quá sâu khó nhìn rõ trên siêu âm)."
      ]
    },
    "patientPosition": "Nằm sấp, kê gối mềm dưới bụng để giảm độ ưỡn thắt lưng.",
    "transducer": "Đầu dò Curvilinear 2 - 6 MHz (hoặc Linear dải rộng ở người gầy).",
    "sonoanatomy": [
      "Quét đầu dò từ bờ dưới cơ hình lê xuống tầng khuyết hông bé (Lesser sciatic notch).",
      "Gai ngồi (Ischial spine) và khuyết hông bé: Tạo thành bờ xương đặc trưng.",
      "Cơ bịt trong (OI): Dải cơ dày vắt qua góc xương khuyết hông bé tạo thành hình chữ Y nằm ngang đặc trưng.",
      "Thần kinh tọa (Sciatic nerve): Chạy dọc ngay trên mặt nông của cơ bịt trong.",
      "Bao hoạt dịch cơ bịt trong: Nằm kẹp giữa mặt sâu gân cơ bịt trong và bờ xương khuyết hông bé."
    ],
    "technique": {
      "approach": "In-plane từ ngoài vào trong (Lateral to Medial) qua cơ mông lớn.",
      "needle": "Kim 21G - 22G, chiều dài 70 - 90 mm.",
      "steps": [
        "1. Đặt đầu dò ngang qua khuyết hông bé để nhận diện hình ảnh chữ Y của cơ bịt trong.",
        "2. Xác định rõ vị trí của thần kinh tọa chạy nông hơn cơ bịt trong.",
        "3. Sát khuẩn da diện rộng.",
        "4. Đưa kim In-plane từ ngoài vào trong, xuyên qua cơ mông lớn, lách qua bờ ngoài thần kinh tọa.",
        "5. Tiến đầu kim vào sâu trong bụng cơ bịt trong hoặc khoang bao hoạt dịch sát xương.",
        "6. Hút thử âm tính, bơm 3 - 5 ml hỗn dịch thuốc tê và steroid."
      ]
    },
    "drugsAndDosage": {
      "localAnesthetic": "Ropivacaine 0.2% hoặc Lidocaine 1% (3 - 5 ml).",
      "steroid": "Triamcinolone acetonide 20 - 40 mg.",
      "volume": "3.0 - 5.0 ml."
    },
    "pearlsAndPitfalls": [
      "Thần kinh tọa nằm cực kỳ sát mặt nông của cơ bịt trong. Bắt buộc quan sát liên tục mũi kim để không đâm trúng thần kinh tọa.",
      "Sử dụng đầu dò Convex tần số thấp với độ xuyên sâu tối ưu (7 - 9 cm) để nhìn rõ bờ xương khuyết hông bé."
    ],
    "postProcedure": "Nghỉ ngơi tại chỗ 30 phút, kiểm tra vận động gấp duỗi cổ chân để loại trừ tê liệt thần kinh tọa.",
    "figures": [
      {
        "path": "assets/images/ch8_pelvic_muscles/p110_img1.jpeg",
        "figNumber": "8.8",
        "title": "Vị trí đặt đầu dò siêu âm khảo sát cơ bịt trong (Fig. 8.8)",
        "desc": "Đầu dò đặt tại các tầng khác nhau của xương chậu từ cơ hình lê xuống khuyết hông bé bộc lộ cơ bịt trong.",
        "springerCaption": "Fig. 8.8 Positions of the ultrasound probe at different levels of the pelvis for obturator internus muscle."
      },
      {
        "path": "assets/images/ch8_pelvic_muscles/p111_img1.jpeg",
        "figNumber": "8.9",
        "title": "Hình ảnh siêu âm cơ bịt trong tại khuyết hông bé (Fig. 8.9)",
        "desc": "Hình ảnh bờ xương khuyết hông bé và dải cơ bịt trong (OI) cùng thần kinh tọa nằm ở mặt nông.",
        "springerCaption": "Fig. 8.9 Bony contour and sonoanatomy of the obturator internus muscle (OI)."
      },
      {
        "path": "assets/images/ch8_pelvic_muscles/p112_img1.jpeg",
        "figNumber": "8.10",
        "title": "Kỹ thuật đâm kim In-plane vào cơ bịt trong (Fig. 8.10)",
        "desc": "Kim dài tiến từ ngoài vào trong, vượt qua thần kinh tọa vào sâu trong cơ bịt trong.",
        "springerCaption": "Fig. 8.10 Ultrasound probe and needle position for obturator internus muscle injection."
      }
    ]
  },
  {
    "id": "quadratus-femoris",
    "nameVi": "Tiêm cơ vuông đùi trong hội chứng chèn ép ngồi - đùi (Quadratus Femoris / Ischiofemoral Impingement)",
    "nameEn": "Ultrasound-Guided Quadratus Femoris Injection for Ischiofemoral Impingement",
    "category": "lower",
    "subcategory": "hip",
    "type": "muscle_injection",
    "difficulty": "Nâng cao",
    "icd10": "M76.89 (Hội chứng chèn ép ngồi - đùi / Ischiofemoral Impingement)",
    "indications": [
      "Hội chứng chèn ép ngồi đùi (Ischiofemoral Impingement - IFI) gây đau mông sâu và sau đùi khi sải bước dài.",
      "Phù nề hoặc rách rách bán phần cơ vuông đùi trên phim chụp cộng hưởng từ (MRI).",
      "Hẹp khoảng cách ngồi - đùi (khoảng cách giữa ụ ngồi và mấu chuyển bé < 15 mm)."
    ],
    "contraindications": {
      "absolute": [
        "Nhiễm khuẩn tại chỗ vùng nếp lằn mông.",
        "Dị ứng thuốc tiêm."
      ],
      "relative": [
        "Rối loạn đông máu nặng."
      ]
    },
    "patientPosition": "Nằm sấp, bàn chân hơi xoay ngoài nhẹ để bộc lộ mấu chuyển bé xương đùi.",
    "transducer": "Đầu dò Curvilinear 2 - 6 MHz, đặt ngang tại tầng nếp lằn mông dưới.",
    "sonoanatomy": [
      "Ụ ngồi (Ischial tuberosity - IT): Mốc xương tăng âm ở phía trong.",
      "Mấu chuyển bé xương đùi (Lesser trochanter - LT): Mốc xương tăng âm ở phía ngoài.",
      "Cơ vuông đùi (Quadratus femoris): Dải cơ dẹt nằm phẳng bắc cầu nối giữa ụ ngồi và mấu chuyển bé.",
      "Thần kinh tọa (Sciatic nerve): Chạy dọc ngay phía sau (nông hơn) cơ vuông đùi ở khoảng giữa ụ ngồi và mấu chuyển bé."
    ],
    "technique": {
      "approach": "In-plane từ ngoài vào trong hoặc Out-of-plane, kim 21G 70 - 90 mm.",
      "needle": "Kim 21G, chiều dài 70 - 90 mm.",
      "steps": [
        "1. Đặt đầu dò ngang tại nếp lằn mông để nhận diện đồng thời ụ ngồi và mấu chuyển bé.",
        "2. Nhận diện dải cơ vuông đùi nằm kẹp giữa 2 mốc xương và tìm thần kinh tọa chạy ở mặt nông.",
        "3. Sát khuẩn vô trùng.",
        "4. Đưa kim In-plane từ ngoài vào trong, hướng đầu kim vào bụng cơ vuông đùi giữa ụ ngồi và mấu chuyển bé, tránh thần kinh tọa.",
        "5. Hút thử không có máu, bơm 3 - 5 ml hỗn dịch thuốc tê và Corticosteroid."
      ]
    },
    "drugsAndDosage": {
      "localAnesthetic": "Lidocaine 1% hoặc Ropivacaine 0.2% (3.0 - 5.0 ml).",
      "steroid": "Triamcinolone 20 - 40 mg hoặc Dexamethasone 4 mg.",
      "volume": "3.0 - 5.0 ml."
    },
    "pearlsAndPitfalls": [
      "Thần kinh tọa chạy ngay trên mặt nông cơ vuông đùi. Luôn kiểm tra Doppler màu và theo dõi đầu kim liên tục.",
      "Khoảng cách ngồi đùi ở bệnh nhân IFI rất hẹp (< 15 mm), đòi hỏi thao tác đâm kim chính xác."
    ],
    "postProcedure": "Theo dõi 30 phút, kiểm tra cảm giác và vận động bàn chân trước khi cho bệnh nhân ra về.",
    "figures": [
      {
        "path": "assets/images/ch8_pelvic_muscles/p113_img1.jpeg",
        "figNumber": "8.11",
        "title": "Giải phẫu cơ vuông đùi giữa ụ ngồi và mấu chuyển bé (Fig. 8.11)",
        "desc": "Mối tương quan giải phẫu giữa cơ vuông đùi (QF), ụ ngồi (IT) và mấu chuyển bé (LT) cùng thần kinh tọa.",
        "springerCaption": "Fig. 8.11 Anatomy of the quadratus femoris muscle and ischiofemoral space."
      },
      {
        "path": "assets/images/ch8_pelvic_muscles/p114_img1.jpeg",
        "figNumber": "8.12",
        "title": "Kỹ thuật tiêm cơ vuông đùi dưới hướng dẫn siêu âm (Fig. 8.12)",
        "desc": "Kỹ thuật đâm kim In-plane hoặc Out-of-plane vào bụng cơ vuông đùi tránh thần kinh tọa.",
        "springerCaption": "Fig. 8.12 Sonoanatomy and procedure for quadratus femoris muscle injection."
      }
    ]
  },
  {
    "id": "pudendal-nerve",
    "nameVi": "Phong bế thần kinh thẹn tại gai ngồi (Pudendal Nerve Block at Ischial Spine)",
    "nameEn": "Ultrasound-Guided Pudendal Nerve Block at the Ischial Spine",
    "category": "spine",
    "subcategory": "pelvis",
    "type": "nerve_block",
    "difficulty": "Chuyên sâu",
    "icd10": "G57.8 (Đau dây thần kinh thẹn - Pudendal Neuralgia), N94.8 (Đau vùng chậu mạn tính)",
    "indications": [
      "Hội chứng đau thần kinh thẹn (Pudendal Neuralgia / Hội chứng ống Alcock) đau bỏng rát vùng tầng sinh môn, hậu môn, âm hộ hoặc bìu.",
      "Đau tăng dữ dội khi ngồi, giảm đi khi đứng hoặc khi ngồi bồn cầu (Tiêu chuẩn Nantes).",
      "Đau vùng đáy chậu mạn tính sau sinh đẻ hoặc sau mổ vùng chậu."
    ],
    "contraindications": {
      "absolute": [
        "Nhiễm khuẩn cấp vùng tầng sinh môn hoặc mông.",
        "Tiền sử phản vệ thuốc tê."
      ],
      "relative": [
        "Rối loạn đông máu nặng.",
        "Mang thai (cần cân nhắc kỹ)."
      ]
    },
    "patientPosition": "Nằm sấp, kê gối mỏng dưới bụng và xương mu để làm phẳng vùng mông.",
    "transducer": "Đầu dò Convex 2 - 6 MHz (hoặc Linear dải rộng ở người gầy).",
    "sonoanatomy": [
      "Mốc xương gai ngồi (Ischial spine): Đường tăng âm sắc nét kèm bóng cản âm.",
      "Dây chằng cùng gai (Sacrospinous ligament - SSL): Bám từ đỉnh gai ngồi chạy chéo vào trong đến xương cùng.",
      "Dây chằng cùng ụ ngồi (Sacrotuberous ligament - STL): Nằm ở lớp nông hơn so với dây chằng cùng gai.",
      "Thần kinh thẹn (Pudendal nerve): Chạy kẹp giữa hai dây chằng SSL và STL, ngay sát động mạch thẹn trong (Internal pudendal artery - đập trên Doppler màu)."
    ],
    "technique": {
      "approach": "In-plane từ trong ra ngoài (Medial to Lateral) hoặc từ ngoài vào trong.",
      "needle": "Kim 21G - 22G, chiều dài 80 - 100 mm.",
      "steps": [
        "1. Đặt đầu dò ngang mào chậu rồi trượt dần xuống dưới qua khuyết hông lớn đến khi thấy đỉnh gai ngồi.",
        "2. Xác định rõ dây chằng cùng gai (SSL) và dây chằng cùng ụ ngồi (STL).",
        "3. BẬT COLOR DOPPLER xác định động mạch thẹn trong nằm ngay sát bờ trong gai ngồi.",
        "4. Sát khuẩn vô trùng.",
        "5. Tiến kim In-plane qua cơ mông lớn, xuyên qua dây chằng cùng ụ ngồi (có cảm giác sực nhẹ - 'pop').",
        "6. Dừng đầu kim ở khoang gian dây chằng giữa STL và SSL, ngay cạnh động mạch thẹn trong.",
        "7. Test hút âm tính kỹ càng (tránh động mạch và tĩnh mạch thẹn).",
        "8. Bơm chậm 4 - 6 ml thuốc tê, quan sát dịch thuốc bóc tách khoang giữa hai dây chằng."
      ]
    },
    "drugsAndDosage": {
      "localAnesthetic": "Ropivacaine 0.2% hoặc Bupivacaine 0.25% (4.0 - 6.0 ml).",
      "steroid": "Dexamethasone 4 mg hoặc Triamcinolone 20 mg.",
      "volume": "4.0 - 6.0 ml."
    },
    "pearlsAndPitfalls": [
      "BẮT BUỘC DÙNG COLOR DOPPLER: Động mạch thẹn trong chạy song hành ngay sát thần kinh thẹn. Hút kiểm tra nhiều lần trước khi bơm để tránh ngộ độc thuốc tê toàn thân LAST.",
      "Cảm giác 'pop' khi kim qua dây chằng cùng ụ ngồi là dấu hiệu lâm sàng quan trọng để định vị khoang gian dây chằng."
    ],
    "postProcedure": "Theo dõi 30 - 45 phút, đánh giá giảm đau vùng tầng sinh môn và cảm giác cơ thắt hậu môn.",
    "figures": [
      {
        "path": "assets/images/ch9_pudendal/p118_img1.jpeg",
        "figNumber": "9.1",
        "title": "Giải phẫu thần kinh thẹn kẹp giữa hai dây chằng (Fig. 9.1)",
        "desc": "Thần kinh thẹn chạy giữa dây chằng cùng gai (SSL) và cùng ụ ngồi (STL) tại mức gai ngồi.",
        "springerCaption": "Fig. 9.1 Pudendal nerve between sacrospinous and sacrotuberous ligaments."
      },
      {
        "path": "assets/images/ch9_pudendal/p122_img1.jpeg",
        "figNumber": "9.7",
        "title": "Mốc siêu âm gai ngồi và khoang gian dây chằng (Fig. 9.7)",
        "desc": "Gai ngồi (IS) xuất hiện, cơ hình lê biến mất, bộc lộ dây chằng cùng gai và cùng ụ ngồi.",
        "springerCaption": "Fig. 9.7 Sonoanatomy of the ischial spine and sacrospinous/sacrotuberous ligaments."
      },
      {
        "path": "assets/images/ch9_pudendal/p123_img1.jpeg",
        "figNumber": "9.8",
        "title": "Kỹ thuật đâm kim In-plane bóc tách khoang thần kinh thẹn (Fig. 9.8)",
        "desc": "Kim vượt qua dây chằng cùng ụ ngồi (đầu mũi tên), bơm thuốc bóc tách khoang quanh thần kinh thẹn.",
        "springerCaption": "Fig. 9.8 Needle insertion and hydrodissection of the interligamentary space around pudendal nerve."
      }
    ]
  },
  {
    "id": "inferior-cluneal-nerve",
    "nameVi": "Phong bế thần kinh bì mông dưới (Inferior Cluneal Nerve Block)",
    "nameEn": "Ultrasound-Guided Inferior Cluneal Nerve Block",
    "category": "spine",
    "subcategory": "pelvis",
    "type": "nerve_block",
    "difficulty": "Cơ bản",
    "icd10": "M54.89 (Đau thần kinh bì mông dưới / Inferior Cluneal Nerve Entrapment)",
    "indications": [
      "Đau rát bỏng vùng nếp lằn mông dưới và sau đùi trên khi ngồi ghế cứng.",
      "Hội chứng chèn ép thần kinh bì mông dưới do dải xơ cơ mông lớn.",
      "Chẩn đoán phân biệt với đau thần kinh tọa và viêm gân cơ ụ ngồi (hamstring tendinopathy)."
    ],
    "contraindications": {
      "absolute": [
        "Nhiễm khuẩn cấp vùng nếp lằn mông.",
        "Dị ứng thuốc tê."
      ],
      "relative": [
        "Rối loạn đông máu nặng."
      ]
    },
    "patientPosition": "Nằm sấp, hai chân duỗi thẳng thoải mái.",
    "transducer": "Đầu dò Linear 10 - 15 MHz dải tần cao.",
    "sonoanatomy": [
      "Ụ ngồi (Ischial tuberosity): Mốc xương tăng âm ở bờ trong.",
      "Bờ dưới cơ mông lớn (Gluteus maximus): Vắt chéo qua ụ ngồi.",
      "Thần kinh bì mông dưới: Các nhánh thần kinh nhỏ giảm âm (nhánh của TK bì đùi sau) chạy dưới bờ cơ mông lớn xuyên qua mạc đùi (fascia lata) lên da vùng nếp lằn mông."
    ],
    "technique": {
      "approach": "In-plane từ ngoài vào trong, kim 25G 50 mm.",
      "needle": "Kim 25G, chiều dài 50 mm.",
      "steps": [
        "1. Đặt đầu dò ngang ngay tại nếp lằn mông ở bờ ngoài ụ ngồi.",
        "2. Nhận diện bờ dưới cơ mông lớn và lớp mạc đùi.",
        "3. Sát khuẩn da.",
        "4. Đưa kim In-plane từ ngoài vào trong vào khoang mạc ngay dưới bờ cơ mông lớn.",
        "5. Test hút âm tính, bơm 3 - 5 ml thuốc tê tạo dải bóc tách dưới mạc."
      ]
    },
    "drugsAndDosage": {
      "localAnesthetic": "Lidocaine 1% hoặc Ropivacaine 0.2% (3.0 - 5.0 ml).",
      "steroid": "Dexamethasone 2 - 4 mg (tùy chọn).",
      "volume": "3.0 - 5.0 ml."
    },
    "pearlsAndPitfalls": [
      "Thần kinh rất nông ngay dưới mạc. Giảm lực tỳ đè đầu dò để tránh làm xẹp các tĩnh mạch nông và không đè bẹp thần kinh.",
      "Phong bế này có thể giải quyết dứt điểm các trường hợp đau mông ngồi dai dẳng bị chẩn đoán nhầm thành đau thần kinh tọa."
    ],
    "postProcedure": "Bệnh nhân ngồi thử trên ghế cứng sau 15 phút để đánh giá mức độ giảm đau tức thì.",
    "figures": [
      {
        "path": "assets/images/ch9_pudendal/p119_img2.jpeg",
        "figNumber": "9.4",
        "title": "Giải phẫu đường đi của thần kinh bì mông dưới (Fig. 9.4)",
        "desc": "Thần kinh bì mông dưới vòng quanh bờ dưới cơ mông lớn chi phối cảm giác nếp lằn mông.",
        "springerCaption": "Fig. 9.4 Inferior cluneal nerve and perineal ramus anatomy."
      },
      {
        "path": "assets/images/ch9_pudendal/p125_img1.jpeg",
        "figNumber": "9.10",
        "title": "Kỹ thuật tiêm phong bế quanh thần kinh bì mông dưới (Fig. 9.10)",
        "desc": "Kim tiêm dưới bờ cơ mông lớn tạo dải thuốc tê bọc quanh thần kinh bì mông dưới.",
        "springerCaption": "Fig. 9.10 Injection around the inferior cluneal nerve under ultrasound guidance."
      }
    ]
  },
  {
    "id": "sacral-lateral-branch",
    "nameVi": "Phong bế nhánh ngoài xương cùng S1–S3 (Sacral Lateral Branch Blocks - SLBB)",
    "nameEn": "Ultrasound-Guided Sacral Lateral Branch Blocks (SLBB)",
    "category": "spine",
    "subcategory": "pelvis",
    "type": "nerve_block",
    "difficulty": "Chuyên sâu",
    "icd10": "M53.88 (Hội chứng đau khớp cùng chậu - Sacroiliac Joint Pain)",
    "indications": [
      "Phong bế chẩn đoán chọn lọc nguồn gốc đau khớp cùng chậu trước khi chỉ định đốt RFA.",
      "Đau khớp cùng chậu mạn tính sau phẫu thuật hàn cột sống thắt lưng (Adjacent Segment Disease).",
      "Thất bại với tiêm nội khớp cùng chậu steroid."
    ],
    "contraindications": {
      "absolute": [
        "Nhiễm khuẩn cấp tính vùng cùng cụt.",
        "Dị ứng thuốc tê."
      ],
      "relative": [
        "Rối loạn đông máu nặng."
      ]
    },
    "patientPosition": "Nằm sấp, kê gối mềm dưới bụng để nâng cao xương cùng và làm phẳng vùng cùng chậu.",
    "transducer": "Đầu dò Linear dải rộng 6 - 12 MHz hoặc Convex 2 - 6 MHz.",
    "sonoanatomy": [
      "Mặt cắt Parasagittal dọc cạnh ngoài các lỗ cùng sau S1, S2, S3.",
      "Lỗ cùng sau (Posterior sacral foramina): Xuất hiện như những khoảng gián đoạn khuyết lõm trên đường bờ xương cùng tăng âm.",
      "Gờ xương ngoài lỗ cùng: Vị trí nhánh ngoài (Lateral branches) thoát ra từ rễ sau và tỏa ra phía ngoài về phía khớp cùng chậu."
    ],
    "technique": {
      "approach": "In-plane từ đuôi lên đầu (Caudad to Cephalad) hoặc Out-of-plane.",
      "needle": "Kim 22G, chiều dài 50 - 70 mm.",
      "steps": [
        "1. Đặt đầu dò dọc mặt phẳng cạnh đứng dọc (parasagittal) nhận diện các lỗ cùng sau S1, S2, S3.",
        "2. Trượt đầu dò nhẹ ra phía ngoài mép lỗ cùng khoảng 5 - 10 mm trên mặt xương cùng.",
        "3. Sát khuẩn vô trùng.",
        "4. Tiến kim In-plane hoặc Out-of-plane chạm nhẹ vào mặt xương cùng ngay ngoài từng lỗ cùng S1, S2, S3.",
        "5. Rút kim lại 0.5 mm, test hút âm tính (tuyệt đối không để kim lọt vào trong lỗ cùng).",
        "6. Bơm chậm 0.3 - 0.5 ml thuốc tê tại mỗi điểm nhánh ngoài S1, S2, S3."
      ]
    },
    "drugsAndDosage": {
      "localAnesthetic": "Bupivacaine 0.25% hoặc Lidocaine 1% (0.3 - 0.5 ml cho mỗi điểm).",
      "steroid": "Không dùng steroid nếu phong bế chẩn đoán; có thể thêm 1 mg Dexamethasone nếu điều trị tạm thời.",
      "volume": "0.3 - 0.5 ml mỗi điểm (TỔNG THỂ TÍCH NHỎ để tránh lan thuốc vào ống cùng)."
    },
    "pearlsAndPitfalls": [
      "TUYỆT ĐỐI KHÔNG ĐƯỢC ĐƯA KIM VÀO TRONG LỖ CÙNG SAU: Thuốc tê có thể lan vào khoang ống cùng gây tê liệt rễ cùng trước hoặc gây bí tiểu, liệt cơ vòng.",
      "Thể tích tiêm mỗi điểm phải $\\le 0.5\\text{ ml}$ để duy trì độ đặc hiệu chẩn đoán cho khớp cùng chậu."
    ],
    "postProcedure": "Đánh giá mức độ giảm đau bằng thang điểm VAS sau 30 phút và 6 giờ.",
    "figures": [
      {
        "path": "assets/images/ch15_sacroiliac_joint/p191_img1.jpeg",
        "figNumber": "15.2",
        "title": "Mặt cắt siêu âm mặt sau xương cùng và các lỗ cùng (Fig. 15.2)",
        "desc": "Các mặt cắt ngang và dọc khảo sát giải phẫu mặt sau xương cùng và các lỗ cùng sau.",
        "springerCaption": "Fig. 15.2 Sonographic images of the posterior sacrum depicting views for sacral anatomy."
      },
      {
        "path": "assets/images/ch15_sacroiliac_joint/p192_img1.jpeg",
        "figNumber": "15.3",
        "title": "Mặt cắt Parasagittal bộc lộ các lỗ cùng sau S1-S3 (Fig. 15.3)",
        "desc": "Mặt cắt dọc cạnh giữa thấy rõ các lỗ cùng sau xuất hiện như những hốc khuyết gián đoạn trên xương cùng.",
        "springerCaption": "Fig. 15.3 Parasagittal scan of the sacrum demonstrating the posterior sacral foramen."
      },
      {
        "path": "assets/images/ch15_sacroiliac_joint/p193_img1.jpeg",
        "figNumber": "15.4",
        "title": "Kỹ thuật đâm kim phong bế nhánh ngoài xương cùng (Fig. 15.4)",
        "desc": "Kim tiếp cận mặt xương ngay ngoài bờ lỗ cùng sau, tránh đâm vào trong lỗ cùng.",
        "springerCaption": "Fig. 15.4 Needle placement for sacral lateral branch and SIJ target."
      }
    ]
  },
  {
    "id": "sacroiliac-joint-rfa",
    "nameVi": "Đốt sóng cao tần (RFA) khớp cùng chậu - Kỹ thuật dải tổn thương lưỡng cực (SIJ RFA Strip Lesioning)",
    "nameEn": "Ultrasound-Guided Sacroiliac Joint Radiofrequency Ablation (Bipolar Strip Lesioning)",
    "category": "spine",
    "subcategory": "pelvis",
    "type": "rfa",
    "difficulty": "Chuyên sâu",
    "icd10": "M53.88 (Đau khớp cùng chậu mạn tính kháng trị)",
    "indications": [
      "Đau khớp cùng chậu mạn tính đáp ứng giảm đau $\\ge 50 - 75\\%$ sau 2 lần phong bế chẩn đoán nhánh ngoài (SLBB).",
      "Đau khớp cùng chậu kháng trị không đáp ứng với tiêm steroid nội khớp.",
      "Giảm đau dài hạn (6 - 18 tháng) cho bệnh nhân viêm đau khớp cùng chậu mạn tính."
    ],
    "contraindications": {
      "absolute": [
        "Bệnh nhân có máy tạo nhịp tim hoặc máy khử rung tim cấy ghép (ICD) chưa được chuyên khoa tim mạch kiểm tra.",
        "Nhiễm khuẩn cấp tính vùng cùng chậu.",
        "Rối loạn đông máu nặng."
      ],
      "relative": [
        "Phản ứng đau dữ dội trong các lần phong bế trước."
      ]
    },
    "patientPosition": "Nằm sấp, gối kê dưới bụng, dán tấm điện cực tiếp đất lớn ở đùi bên đối diện (nếu dùng đơn cực).",
    "transducer": "Đầu dò Linear 6 - 12 MHz hoặc Convex 2 - 6 MHz.",
    "sonoanatomy": [
      "Mặt cắt dọc cạnh giữa xương cùng nhận diện rãnh ngoài các lỗ cùng S1 đến S3.",
      "Dây thần kinh chi phối khớp cùng chậu bắt chéo qua vùng xương nằm giữa bờ ngoài lỗ cùng và mép trong khớp cùng chậu.",
      "Rãnh xương này là đích để đặt hàng kim RFA tạo dải tổn thương liên tục (strip lesion)."
    ],
    "technique": {
      "approach": "Kỹ thuật Bipolar Strip Lesioning theo Philip Peng.",
      "needle": "Kim RFA chuyên dụng 20G có đầu trần (Active tip 10 mm), chiều dài 50 - 100 mm.",
      "steps": [
        "1. Xác định rãnh xương dọc ngoài các lỗ cùng sau S1, S2, S3 dưới hướng dẫn siêu âm.",
        "2. Đặt cặp kim RFA đầu tiên cách nhau 8 - 10 mm trên mặt xương cùng dọc theo rãnh xương.",
        "3. Kiểm tra kích thích cảm giác (50 Hz, $\\le 0.5\\text{ V}$ gây tức vùng mông cùng chậu quen thuộc).",
        "4. KIỂM TRA KÍCH THÍCH VẬN ĐỘNG (2 Hz, nâng lên $1.5 - 2.0\\text{ V}$: BẮT BUỘC KHÔNG CÓ GIẬT CƠ CHI DƯỚI để loại trừ tiếp xúc rễ thần kinh S1-S3 đi xuống chân).",
        "5. Bơm gây tê 0.5 - 1.0 ml Lidocaine 2% tại mỗi vị trí kim.",
        "6. Tiến hành đốt nhiệt lưỡng cực (Bipolar RFA) ở 80°C trong 90 - 150 giây.",
        "7. Di chuyển kim theo chiều dọc để tạo các dải tổn thương liên tục kế tiếp từ S1 đến S3.",
        "8. Bơm dung dịch Ropivacaine 0.2% + Dexamethasone 2 mg chống viêm sau đốt."
      ]
    },
    "drugsAndDosage": {
      "localAnesthetic": "Lidocaine 2% (0.5 - 1.0 ml mỗi vị trí trước khi đốt) và Ropivacaine 0.2% sau đốt.",
      "steroid": "Dexamethasone 2 - 4 mg bơm sau khi kết thúc đốt để giảm viêm đau phản ứng.",
      "volume": "1.0 ml mỗi vị trí."
    },
    "pearlsAndPitfalls": [
      "KHOẢNG CÁCH KIM: Khoảng cách giữa 2 đầu kim RFA không được vượt quá 10 mm để đảm bảo nhiệt lượng lan tỏa nối liền tạo thành dải tổn thương liên tục (strip lesion).",
      "AN TOÀN THẦN KINH: Luôn thử test kích thích vận động ở 2.0 V trước mỗi chu kỳ phát sóng RFA để bảo vệ tuyệt đối rễ thần kinh vận động chi dưới."
    ],
    "postProcedure": "Chườm lạnh tại chỗ, dặn bệnh nhân cơn đau ê ẩm sau đốt có thể kéo dài 3 - 7 ngày trước khi đạt hiệu quả giảm đau tối đa.",
    "figures": [
      {
        "path": "assets/images/ch16_sacroiliac_rfa/p196_img1.jpeg",
        "figNumber": "16.1",
        "title": "Sơ đồ mạng lưới phân bố thần kinh mặt sau khớp cùng chậu (Fig. 16.1)",
        "desc": "Mạng lưới các nhánh ngoài từ rễ sau S1-S3 phân nhánh chi phối cảm giác toàn bộ diện sau khớp cùng chậu.",
        "springerCaption": "Fig. 16.1 Posterior innervation of the sacroiliac joint from the posterior sacral network S1, S2, and S3."
      },
      {
        "path": "assets/images/ch16_sacroiliac_rfa/p198_img1.jpeg",
        "figNumber": "16.3",
        "title": "Mặt cắt siêu âm định vị mốc xương cho RFA khớp cùng chậu (Fig. 16.3)",
        "desc": "Quét từ dưới lên trên trên mặt phẳng ngang xác định các mốc xương để đặt hàng kim RFA.",
        "springerCaption": "Fig. 16.3 Caudad to cephalad scan of the sacrum in the transverse plane illustrating landmarks."
      },
      {
        "path": "assets/images/ch16_sacroiliac_rfa/p199_img1.jpeg",
        "figNumber": "16.4",
        "title": "Kỹ thuật tạo dải tổn thương lưỡng cực (Bipolar Strip Lesioning) (Fig. 16.4 & 16.5)",
        "desc": "Hàng kim RFA đặt dọc ngoài các lỗ cùng tạo dải tổn thương liên tục cắt đứt hoàn toàn dẫn truyền đau.",
        "springerCaption": "Fig. 16.4 Illustration of bilateral strip lesion and sagittal scan of cannula along lateral sacral crest."
      }
    ]
  },
  {
    "id": "glenohumeral-anterior",
    "nameVi": "Tiêm khớp ổ chảo - cánh tay tiếp cận lối trước (Anterior Glenohumeral Joint Injection)",
    "nameEn": "Ultrasound-Guided Anterior Glenohumeral Joint Injection",
    "category": "upper",
    "subcategory": "shoulder",
    "type": "joint_injection",
    "difficulty": "Trung bình",
    "icd10": "M19.01 (Thoái hóa khớp vai), M75.0 (Viêm dính khớp vai - Đông cứng khớp vai)",
    "indications": [
      "Đông cứng khớp vai (Adhesive Capsulitis / Frozen Shoulder) cần nong rộng bao khớp (Hydrodilatation) lối trước.",
      "Thoái hóa khớp vai hoặc viêm khớp dạng thấp khi tiếp cận lối sau bị cản trở do sẹo mổ hoặc biến dạng xương.",
      "Tiêm thuốc cản quang hoặc chất đối từ chụp cộng hưởng từ khớp vai (MR Arthrogram)."
    ],
    "contraindications": {
      "absolute": [
        "Viêm khớp vai nhiễm khuẩn mủ.",
        "Nhiễm khuẩn mô mềm vùng mặt trước vai."
      ],
      "relative": [
        "Đái tháo đường kiểm soát kém.",
        "Rách gân dưới vai hoàn toàn kèm mất vững chỏm cánh tay ra trước."
      ]
    },
    "patientPosition": "Nằm ngửa hoặc ngồi tựa lưng, cánh tay khép sát thân, cẳng tay xoay ngoài tối đa để kéo chỏm bé và gân dưới vai ra phía trước.",
    "transducer": "Đầu dò Linear 10 - 15 MHz, đặt ngang qua mỏm quạ và củ bé xương cánh tay.",
    "sonoanatomy": [
      "Mỏm quạ (Coracoid process): Mốc xương tăng âm ở phía trong.",
      "Củ bé xương cánh tay (Lesser tuberosity): Mốc xương tăng âm ở phía ngoài.",
      "Gân cơ dưới vai (Subscapularis tendon): Dải sợi tăng âm nằm vắt ngang giữa mỏm quạ và củ bé.",
      "Khe khớp ổ chảo - cánh tay lối trước: Nằm sâu dưới gân dưới vai, giữa sụn viền trước và chỏm xương cánh tay."
    ],
    "technique": {
      "approach": "In-plane từ ngoài vào trong qua gân dưới vai vào khoang khớp.",
      "needle": "Kim 21G - 22G, chiều dài 50 mm.",
      "steps": [
        "1. Đặt đầu dò ngang qua bờ trước khớp vai, bảo bệnh nhân xoay ngoài cẳng tay để bộc lộ rõ gân dưới vai.",
        "2. Xác định khe khớp trước giữa chỏm cánh tay và sụn viền trước ổ chảo.",
        "3. Dùng Color Doppler kiểm tra động mạch mũ cánh tay trước trong rãnh gian củ.",
        "4. Sát khuẩn vô trùng.",
        "5. Đâm kim In-plane từ ngoài vào trong, xuyên qua cơ delta và gân dưới vai vào ngách trước khớp.",
        "6. Cảm giác kim lọt vào bao khớp nhẹ tay, bơm thử 1 ml dịch không có lực cản.",
        "7. Bơm hỗn dịch thuốc tiêm (nếu nong khớp: bơm 15 - 20 ml NaCl 0.9% để làm giãn rách bao khớp co rút)."
      ]
    },
    "drugsAndDosage": {
      "localAnesthetic": "Lidocaine 1% hoặc Ropivacaine 0.2% (2.0 - 4.0 ml).",
      "steroid": "Triamcinolone acetonide 40 mg hoặc Methylprednisolone 40 mg.",
      "volume": "3.0 - 5.0 ml (hoặc 15 - 20 ml nếu thực hiện kỹ thuật nong khớp)."
    },
    "pearlsAndPitfalls": [
      "BẮT BUỘC DÙNG DOPPLER: Động mạch mũ cánh tay trước chạy ngay tại bờ trước củ bé và rãnh nhị đầu, cần tránh tuyệt đối đường đi của kim qua mạch này.",
      "Xoay ngoài cánh tay là thao tác bắt buộc để kéo căng gân dưới vai và mở rộng khe khớp trước."
    ],
    "postProcedure": "Nếu có nong khớp: hướng dẫn bệnh nhân tập kéo giãn khớp vai ngay sau tiêm để tối ưu hóa tầm vận động.",
    "figures": [
      {
        "path": "assets/images/ch19_shoulder/p228_img1.jpeg",
        "figNumber": "19.11",
        "title": "Kỹ thuật tiêm khớp ổ chảo cánh tay tiếp cận lối trước (Fig. 19.11)",
        "desc": "Mặt cắt ngang qua mỏm quạ và củ bé, kim đi In-plane qua gân cơ dưới vai vào ngách trước khớp vai.",
        "springerCaption": "Fig. 19.11 Anterior approach to glenohumeral joint under ultrasound guidance."
      }
    ]
  },
  {
    "id": "elbow-intraarticular",
    "nameVi": "Tiêm nội khớp khuỷu tay (Khớp quay - lồi cầu con & hố mỏm khuỷu)",
    "nameEn": "Ultrasound-Guided Elbow Joint Intra-articular Injection",
    "category": "upper",
    "subcategory": "elbow",
    "type": "joint_injection",
    "difficulty": "Trung bình",
    "icd10": "M19.03 (Thoái hóa khớp khuỷu), M05.83 (Viêm khớp dạng thấp khớp khuỷu)",
    "indications": [
      "Thoái hóa khớp khuỷu mạn tính gây đau và hạn chế tầm vận động gấp duỗi.",
      "Viêm màng hoạt dịch khớp khuỷu trong viêm khớp dạng thấp hoặc viêm khớp vảy nến.",
      "Hút dịch khớp khuỷu chẩn đoán (loại trừ nhiễm khuẩn, gout) kết hợp tiêm thuốc điều trị."
    ],
    "contraindications": {
      "absolute": [
        "Viêm khớp khuỷu nhiễm khuẩn mủ (chống chỉ định tiêm steroid).",
        "Nhiễm khuẩn da vùng khuỷu tay."
      ],
      "relative": [
        "Dị tật cứng dính khớp hoàn toàn.",
        "Rối loạn đông máu nặng."
      ]
    },
    "patientPosition": "Ngồi gập khuỷu 90 độ, cẳng tay đặt sấp thoải mái trên gối khám.",
    "transducer": "Đầu dò Linear 10 - 15 MHz dải tần cao.",
    "sonoanatomy": [
      "Tiếp cận lối sau (Hố mỏm khuỷu - Olecranon fossa):",
      "Hố mỏm khuỷu xương cánh tay tạo thành hốc lõm sâu phủ bởi đệm mỡ sau (Posterior fat pad) và gân cơ tam đầu.",
      "Khi có tràn dịch, dịch khớp đẩy phồng đệm mỡ sau lên thành khoang giảm âm rất dễ chọc hút.",
      "Tiếp cận lối ngoài (Khớp quay - lồi cầu con - Radiocapitellar joint):",
      "Chỏm con xương cánh tay (Capitellum) hình tròn cong tăng âm; chỏm xương quay (Radial head) hình trụ phẳng; khe khớp nằm kẹp giữa hai xương."
    ],
    "technique": {
      "approach": "In-plane từ trên xuống dưới vào hố mỏm khuỷu sau (Lối sau) hoặc từ dưới lên qua khớp quay - lồi cầu con (Lối ngoài).",
      "needle": "Kim 22G - 23G, chiều dài 38 mm.",
      "steps": [
        "1. Đặt đầu dò dọc mặt sau khuỷu tay bộc lộ hố mỏm khuỷu và gân cơ tam đầu.",
        "2. Đánh giá lượng dịch khớp và mức độ dày màng hoạt dịch.",
        "3. Sát khuẩn vô trùng.",
        "4. Đưa kim In-plane từ trên xuống, luồn dưới gân cơ tam đầu vào khoang hố mỏm khuỷu.",
        "5. Hút sạch dịch khớp nếu có tràn dịch.",
        "6. Bơm chậm 2 - 3 ml hỗn dịch Triamcinolone hoặc Axit Hyaluronic."
      ]
    },
    "drugsAndDosage": {
      "localAnesthetic": "Lidocaine 1% (1.0 - 2.0 ml).",
      "steroid": "Triamcinolone acetonide 20 - 30 mg.",
      "volume": "2.0 - 3.0 ml tổng thể tích."
    },
    "pearlsAndPitfalls": [
      "Tiếp cận hố mỏm khuỷu lối sau là đường tiêm an toàn nhất của khớp khuỷu vì tránh xa thần kinh trụ ở rãnh ròng rọc trong và thần kinh quay ở bờ ngoài.",
      "Luôn hút kiểm tra dịch khớp trước khi bơm thuốc: nếu dịch đục mủ phải ngừng tiêm steroid và gửi cấy vi trùng ngay."
    ],
    "postProcedure": "Băng vô khuẩn, hạn chế mang vác vật nặng bằng tay tiêm trong 48 giờ.",
    "figures": [
      {
        "path": "assets/images/ch20_elbow/p241_img1.jpeg",
        "figNumber": "20.8",
        "title": "Mặt cắt siêu âm khảo sát các ngách khớp khuỷu tay (Fig. 20.8)",
        "desc": "Đầu dò xoay tại các vị trí mỏm khuỷu và mặt ngoài bộc lộ ngách hoạt dịch khớp khuỷu.",
        "springerCaption": "Fig. 20.8 Transducer positioning for elbow joint recess imaging."
      },
      {
        "path": "assets/images/ch20_elbow/p242_img2.jpeg",
        "figNumber": "20.9",
        "title": "Giải phẫu siêu âm hố mỏm khuỷu lối sau (Fig. 20.9)",
        "desc": "Mặt cắt dọc sau khuỷu: hố mỏm khuỷu xương cánh tay, đệm mỡ sau và gân cơ tam đầu.",
        "springerCaption": "Fig. 20.9 Sonoanatomy of the posterior elbow showing olecranon fossa and posterior fat pad."
      },
      {
        "path": "assets/images/ch20_elbow/p245_img1.jpeg",
        "figNumber": "20.12",
        "title": "Kỹ thuật đâm kim In-plane vào khoang khớp khuỷu (Fig. 20.12)",
        "desc": "Kim đi In-plane vào ngách hoạt dịch khớp khuỷu dưới kiểm soát siêu âm liên tục.",
        "springerCaption": "Fig. 20.12 In-plane needle approach for intra-articular elbow injection."
      }
    ]
  },
  {
    "id": "hip-lateral-approach",
    "nameVi": "Tiêm nội khớp háng tiếp cận lối ngoài (Lateral Approach Hip Joint Injection)",
    "nameEn": "Ultrasound-Guided Lateral Approach Hip Joint Injection",
    "category": "lower",
    "subcategory": "hip",
    "type": "joint_injection",
    "difficulty": "Trung bình",
    "icd10": "M16.1 (Thoái hóa khớp háng nguyên phát), M16.9 (Thoái hóa khớp háng)",
    "indications": [
      "Thoái hóa khớp háng ở bệnh nhân béo phì (BMI > 30) thành bụng và mỡ bẹn trước rất dày.",
      "Bệnh nhân có tiền sử phẫu thuật bắc cầu mạch máu đùi hoặc sẹo dính bẹn trước.",
      "Chọc hút dịch khớp háng chẩn đoán nhiễm trùng sau thay khớp háng nhân tạo."
    ],
    "contraindications": {
      "absolute": [
        "Nhiễm khuẩn cấp tính vùng khớp háng hoặc mô mềm ngoài đùi.",
        "Nhiễm khuẩn huyết."
      ],
      "relative": [
        "Rối loạn đông máu nặng.",
        "Đang dùng thuốc chống đông chưa ngưng đủ thời gian."
      ]
    },
    "patientPosition": "Nằm nghiêng bên lành hoặc nằm ngửa, đùi hơi xoay trong nhẹ.",
    "transducer": "Đầu dò Curvilinear 2 - 6 MHz.",
    "sonoanatomy": [
      "Mấu chuyển lớn xương đùi (Greater trochanter) ở phía ngoài.",
      "Cổ xương đùi và chỏm xương đùi nằm ở sâu.",
      "Cơ mông nhỡ (Gluteus medius) và cơ mông bé (Gluteus minimus) che phủ mặt ngoài cổ xương đùi.",
      "Bao khớp háng: Dày ôm sát chỗ tiếp giáp cổ - chỏm xương đùi.",
      "Ưu điểm giải phẫu: Toàn bộ đường đi của kim nằm ở mặt ngoài, cách rất xa tam giác đùi chứa động mạch, tĩnh mạch và thần kinh đùi."
    ],
    "technique": {
      "approach": "In-plane từ ngoài vào trong dọc theo trục cổ xương đùi.",
      "needle": "Kim cột sống 20G - 22G có nòng thông (Stylet), chiều dài 90 - 120 mm.",
      "steps": [
        "1. Đặt đầu dò chéo dọc theo trục cổ xương đùi từ mấu chuyển lớn hướng lên chỏm đùi.",
        "2. Xác định rõ điểm tiếp giáp giữa chỏm và cổ xương đùi (Head-Neck Junction).",
        "3. Sát khuẩn vô trùng tuyệt đối.",
        "4. Gây tê từng lớp từ da đến mạc cơ mông.",
        "5. Tiến kim In-plane từ ngoài vào trong theo trục cổ xương đùi, hướng thẳng đến điểm tiếp giáp chỏm - cổ.",
        "6. Cảm giác đầu kim chạm nhẹ vào màng xương cổ xương đùi trong khoang bao khớp.",
        "7. Rút nòng thông, test hút âm tính.",
        "8. Bơm thuốc (corticosteroid hoặc HA): quan sát thuốc làm căng phồng bao khớp háng."
      ]
    },
    "drugsAndDosage": {
      "localAnesthetic": "Ropivacaine 0.2% hoặc Lidocaine 1% (2.0 - 4.0 ml).",
      "steroid": "Triamcinolone acetonide 40 mg hoặc Dexamethasone 8 mg (hoặc Axit Hyaluronic 2 - 4 ml).",
      "volume": "4.0 - 6.0 ml tổng thể tích."
    },
    "pearlsAndPitfalls": [
      "AN TOÀN MẠCH MÁU TUYỆT ĐỐI: Tiếp cận lối ngoài loại bỏ hoàn toàn nguy cơ tổn thương động mạch và thần kinh đùi, rất phù hợp cho bác sĩ mới bắt đầu hoặc bệnh nhân béo phì.",
      "Ở bệnh nhân đã thay khớp háng, đầu kim dừng tại bề mặt cổ khớp nhân tạo để hút dịch kiểm tra vi khuẩn."
    ],
    "postProcedure": "Hạn chế đi lại tỳ đè nhiều trong 24 giờ đầu. Theo dõi biến chứng tụ máu hoặc nhiễm khuẩn.",
    "figures": [
      {
        "path": "assets/images/ch22_hip/p273_img1.jpeg",
        "figNumber": "22.4",
        "title": "Mặt cắt siêu âm khảo sát vùng mấu chuyển và khớp háng lối ngoài (Fig. 22.4)",
        "desc": "Mặt cắt chéo từ mấu chuyển lớn dọc theo trục cổ xương đùi bộc lộ chỏm và cổ đùi.",
        "springerCaption": "Fig. 22.4 Ultrasound scan in the trochanteric area for lateral hip approach."
      },
      {
        "path": "assets/images/ch22_hip/p274_img1.jpeg",
        "figNumber": "22.8",
        "title": "Kỹ thuật đâm kim In-plane tiếp cận lối ngoài khớp háng (Fig. 22.8)",
        "desc": "Kim dài tiến từ ngoài vào trong, đầu kim chạm điểm tiếp giáp cổ chỏm xương đùi trong bao khớp.",
        "springerCaption": "Fig. 22.8 In-plane needle reaching the junction of femoral head and neck."
      }
    ]
  },
  {
    "id": "iliopsoas-bursa",
    "nameVi": "Tiêm gân, cơ và bao hoạt dịch thắt lưng chậu (Iliopsoas Tendon & Bursa Injection)",
    "nameEn": "Ultrasound-Guided Iliopsoas Muscle, Tendon, and Bursa Injection",
    "category": "lower",
    "subcategory": "hip",
    "type": "bursa",
    "difficulty": "Trung bình",
    "icd10": "M70.6 (Viêm bao hoạt dịch thắt lưng chậu), M76.1 (Viêm gân cơ thắt lưng chậu)",
    "indications": [
      "Hội chứng bật gân háng trước (Internal Snapping Hip Syndrome / Coxa Saltans) kèm đau nhức.",
      "Viêm bao hoạt dịch thắt lưng chậu (Iliopsoas Bursitis) có tụ dịch mặt trước khớp háng.",
      "Đau mặt trước khớp háng sau thay khớp háng nhân tạo do chén khớp cọ sát vào gân thắt lưng chậu."
    ],
    "contraindications": {
      "absolute": [
        "Nhiễm khuẩn cấp vùng bẹn hoặc áp xe cơ thắt lưng chậu (Psoas Abscess).",
        "Dị ứng thuốc tiêm."
      ],
      "relative": [
        "Rối loạn đông máu nặng (nguy cơ tụ máu sau phúc mạc hoặc khoang cơ chậu)."
      ]
    },
    "patientPosition": "Nằm ngửa, hai chân duỗi thẳng, bàn chân hơi xoay ngoài nhẹ.",
    "transducer": "Đầu dò Linear 6 - 12 MHz (người gầy) hoặc Curved 2 - 6 MHz (người đậm người).",
    "sonoanatomy": [
      "Động mạch và tĩnh mạch đùi: Nằm ở phía trong, đập rõ dưới Doppler màu.",
      "Thần kinh đùi: Nằm ở mặt ngoài động mạch đùi, có cấu trúc tổ ong tăng âm.",
      "Gờ chậu mu (Iliopectineal eminence): Bờ xương cong tăng âm nằm ở sâu.",
      "Gân cơ thắt lưng chậu (Iliopsoas tendon): Cấu trúc tăng âm hình bầu dục nằm sâu hơn cơ chậu, tựa ngay trên gờ chậu mu.",
      "Bao hoạt dịch thắt lưng chậu: Khoang ảo nằm kẹp giữa gân thắt lưng chậu và bề mặt xương gờ chậu mu."
    ],
    "technique": {
      "approach": "In-plane từ ngoài vào trong (Lateral to Medial).",
      "needle": "Kim 22G, chiều dài 70 - 90 mm.",
      "steps": [
        "1. Đặt đầu dò ngang ngay dưới dây chằng bẹn qua gờ chậu mu.",
        "2. Bật Color Doppler xác định vị trí bó mạch đùi và thần kinh đùi.",
        "3. Nhận diện gân thắt lưng chậu tăng âm nằm tựa trên gờ chậu mu.",
        "4. Sát khuẩn vô trùng.",
        "5. Đâm kim In-plane từ bờ ngoài vào trong, đường đi của kim hoàn toàn nằm ngoài thần kinh đùi.",
        "6. Luồn đầu kim xuống sâu dưới gân thắt lưng chậu, tiếp xúc với bề mặt xương trong khoang bao hoạt dịch.",
        "7. Hút thử âm tính, bơm chậm 3 - 5 ml hỗn dịch thuốc: thấy dịch bóc tách đẩy gân thắt lưng chậu phồng lên khỏi mặt xương."
      ]
    },
    "drugsAndDosage": {
      "localAnesthetic": "Lidocaine 1% hoặc Ropivacaine 0.2% (2.0 - 4.0 ml).",
      "steroid": "Triamcinolone acetonide 20 - 40 mg hoặc Dexamethasone 4 mg.",
      "volume": "3.0 - 5.0 ml."
    },
    "pearlsAndPitfalls": [
      "BẮT BUỘC NHẬN DIỆN THẦN KINH ĐÙI: Thần kinh đùi nằm ngay phía ngoài động mạch đùi. Đường kim In-plane từ ngoài vào trong phải bắt đầu đủ xa về phía ngoài để không đi xuyên qua thần kinh đùi.",
      "Nếu nghi ngờ áp xe cơ thắt lưng chậu (sốt, sụt cân, đau lưng háng) -> Tuyệt đối không tiêm steroid mà phải chọc hút làm xét nghiệm vi sinh."
    ],
    "postProcedure": "Kiểm tra cơ lực cơ tứ đầu đùi sau 20 phút (loại trừ thuốc tê lan vào thần kinh đùi gây yếu chân).",
    "figures": [
      {
        "path": "assets/images/ch22_hip/p279_img2.jpeg",
        "figNumber": "22.13",
        "title": "Mặt cắt siêu âm gân và cơ thắt lưng chậu tại bờ trước khớp háng (Fig. 22.13)",
        "desc": "Mặt cắt ngang qua gờ chậu mu bộc lộ gân thắt lưng chậu, cơ chậu và bao hoạt dịch thắt lưng chậu.",
        "springerCaption": "Fig. 22.13 Anterior Hip: Iliopsoas muscle belly, bursa, and tendon."
      },
      {
        "path": "assets/images/ch22_hip/p280_img1.jpeg",
        "figNumber": "22.14",
        "title": "Kỹ thuật đâm kim In-plane tiêm bao hoạt dịch thắt lưng chậu (Fig. 22.14)",
        "desc": "Kim tiến từ ngoài vào trong, luồn dưới gân thắt lưng chậu, bơm thuốc tách bao hoạt dịch khỏi mặt xương.",
        "springerCaption": "Fig. 22.14 Scan position and needle trajectory for iliopsoas tendon and bursa injection."
      }
    ]
  },
  {
    "id": "distal-itb-bursa",
    "nameVi": "Tiêm bao hoạt dịch dải chậu chày xa (Distal Iliotibial Band Bursa Injection)",
    "nameEn": "Ultrasound-Guided Distal Iliotibial Band Bursa Injection",
    "category": "lower",
    "subcategory": "knee",
    "type": "bursa",
    "difficulty": "Cơ bản",
    "icd10": "M76.3 (Hội chứng dải chậu chày - ITB Syndrome / Runner's Knee)",
    "indications": [
      "Hội chứng dải chậu chày (Iliotibial Band Friction Syndrome) ở vận động viên chạy bộ, đạp xe, leo núi.",
      "Viêm bao hoạt dịch giữa dải chậu chày và lồi cầu ngoài xương đùi kháng trị điều trị bảo tồn.",
      "Đau chói điểm bám dải chậu chày tại lồi củ Gerdy."
    ],
    "contraindications": {
      "absolute": [
        "Nhiễm khuẩn cấp tính vùng ngoài khớp gối.",
        "Dị ứng thuốc tiêm."
      ],
      "relative": [
        "Rách dải chậu chày cấp tính chưa liền."
      ]
    },
    "patientPosition": "Nằm nghiêng bên lành, gối bên đau gập nhẹ 30 độ (tư thế dải chậu chày cọ sát mạnh nhất vào lồi cầu ngoài).",
    "transducer": "Đầu dò Linear 10 - 15 MHz dải tần cao.",
    "sonoanatomy": [
      "Lồi cầu ngoài xương đùi (Lateral femoral condyle): Bờ xương tăng âm gồ lên rõ rệt.",
      "Dải chậu chày (ITB): Dải sợi collagen tăng âm dày chắc chạy trượt trên lồi cầu ngoài xương đùi đến bám vào lồi củ Gerdy xương chày.",
      "Khoang bao hoạt dịch ITB: Nằm kẹp giữa mặt sâu dải chậu chày và màng xương lồi cầu ngoài (bình thường là dải mỏng giảm âm < 1 mm, khi viêm có tụ dịch và dày màng hoạt dịch)."
    ],
    "technique": {
      "approach": "In-plane từ trước ra sau hoặc từ trên xuống dưới.",
      "needle": "Kim 25G, chiều dài 38 mm.",
      "steps": [
        "1. Đặt đầu dò dọc theo dải chậu chày qua lồi cầu ngoài xương đùi.",
        "2. Yêu cầu bệnh nhân gập duỗi gối nhẹ để quan sát chuyển động trượt của dải chậu chày trên lồi cầu ngoài.",
        "3. Sát khuẩn vô trùng.",
        "4. Đưa kim In-plane vào khoang ảo giữa mặt sâu dải chậu chày và màng xương lồi cầu ngoài.",
        "5. Bơm thử một giọt dịch: thấy dung dịch bóc tách dải chậu chày phồng lên nhẹ nhàng khỏi mặt xương mà không có lực cản.",
        "6. Bơm chậm 3 - 5 ml hỗn dịch Triamcinolone hoặc Dexamethasone + Lidocaine."
      ]
    },
    "drugsAndDosage": {
      "localAnesthetic": "Lidocaine 1% (2.0 - 3.0 ml).",
      "steroid": "Triamcinolone 20 mg hoặc Dexamethasone 4 mg.",
      "volume": "3.0 - 5.0 ml tổng thể tích."
    },
    "pearlsAndPitfalls": [
      "TUYỆT ĐỐI KHÔNG TIÊM VÀO THÂN DẢI CHẬU CHÀY: Tiêm steroid nội gân gây hoại tử mỡ, teo lõm da và làm yếu rách dải chậu chày. Đầu kim phải nằm chính xác trong khoang bao hoạt dịch dưới gân.",
      "Bắt buộc kiểm tra dấu hiệu bóc tách mạc trơn tru dưới siêu âm thời gian thực."
    ],
    "postProcedure": "Nghỉ chạy bộ và các hoạt động chịu lực mạnh trong 7 - 10 ngày. Bắt đầu các bài tập kéo giãn cơ căng mạc đùi (TFL) sau 48 giờ.",
    "figures": [
      {
        "path": "assets/images/ch23_knee/p295_img1.jpeg",
        "figNumber": "23.18",
        "title": "Giải phẫu siêu âm dải chậu chày và lồi cầu ngoài xương đùi (Fig. 23.18)",
        "desc": "Mặt cắt dọc bộc lộ dải chậu chày (ITB), lồi cầu ngoài xương đùi và khoang bao hoạt dịch ITB.",
        "springerCaption": "Fig. 23.18 Sonoanatomy of the distal iliotibial band and underlying bursa over the lateral femoral condyle."
      },
      {
        "path": "assets/images/ch23_knee/p296_img1.jpeg",
        "figNumber": "23.19",
        "title": "Hình ảnh viêm dày và tụ dịch bao hoạt dịch dải chậu chày (Fig. 23.19)",
        "desc": "Hình ảnh ITB dày phì đại và tụ dịch bao hoạt dịch (mũi tên) ở bệnh nhân hội chứng dải chậu chày.",
        "springerCaption": "Fig. 23.19 Distal ITB with bursitis. Thickened ITB with fluid collection in a patient with ITB syndrome."
      }
    ]
  },
  {
    "id": "patellar-tendon-fenestration",
    "nameVi": "Can thiệp châm kim đa điểm và bóc tách gân bánh chè (Patellar Tendon Fenestration / High-Volume Injection)",
    "nameEn": "Ultrasound-Guided Patellar Tendon Fenestration and High-Volume Injection",
    "category": "lower",
    "subcategory": "knee",
    "type": "regenerative",
    "difficulty": "Nâng cao",
    "icd10": "M76.5 (Viêm thoái hóa gân bánh chè - Jumper's Knee)",
    "indications": [
      "Thoái hóa gân bánh chè mạn tính (Patellar Tendinopathy / Jumper's Knee) ở vận động viên bóng rổ, bóng chuyền, điền kinh.",
      "Gân bánh chè dày, giảm âm, tăng sinh mạch máu tân tạo (Neovascularization) trên Power Doppler không đáp ứng tập phục hồi.",
      "Rách bán phần thể thoái hóa mặt sâu gân bánh chè."
    ],
    "contraindications": {
      "absolute": [
        "Nhiễm khuẩn cấp khớp gối hoặc mô mềm quanh xương bánh chè.",
        "Đứt gân bánh chè hoàn toàn có chỉ định phẫu thuật khâu gân."
      ],
      "relative": [
        "Tiền sử tiêm Corticosteroid nhiều lần vào thân gân bánh chè.",
        "Rối loạn đông máu nặng."
      ]
    },
    "patientPosition": "Nằm ngửa, gối kê dưới khoeo chân gập nhẹ 20 - 30 độ để làm căng phẳng gân bánh chè.",
    "transducer": "Đầu dò Linear 10 - 15 MHz dải tần cao. Bật chế độ Power Doppler độ nhạy cao để khảo sát mạch máu tân tạo.",
    "sonoanatomy": [
      "Cực dưới xương bánh chè (Inferior patellar pole): Mốc xương tăng âm sắc nét.",
      "Gân bánh chè (Patellar tendon): Bình thường dày < 4 - 5 mm, cấu trúc sợi tăng âm song song đều đặn.",
      "Vùng bệnh lý: Thường ở 1/3 gần mặt sâu sát cực dưới xương bánh chè, biểu hiện dày phì đại, giảm âm mất cấu trúc bó sợi và tăng sinh mạch máu tân tạo trên Doppler.",
      "Đệm mỡ Hoffa (Hoffa fat pad): Nằm sâu ngay sau gân bánh chè."
    ],
    "technique": {
      "approach": "In-plane dọc theo trục gân bánh chè từ dưới lên trên.",
      "needle": "Kim 21G - 22G, chiều dài 38 - 50 mm.",
      "steps": [
        "1. Khảo sát toàn bộ chiều dài gân bánh chè trên mặt cắt dọc và ngang, dùng Power Doppler đánh dấu vị trí tân mạch.",
        "2. Sát khuẩn vô trùng tuyệt đối.",
        "3. Gây tê nông tại chỗ bằng Lidocaine 1%.",
        "4. Kỹ thuật Châm kim đa điểm (Dry Needling / Fenestration): Tiến kim 21G In-plane đâm xuyên nhiều lần (10 - 20 nhát) qua vùng thoái hóa gân bánh chè để phá vỡ các mô xơ sẹo thoái hóa và kích thích chảy máu tạo phản ứng viêm lành sinh học.",
        "5. Kỹ thuật Bóc tách thể tích lớn (High-Volume Injection - HVI): Đưa đầu kim vào mặt phẳng giữa mặt sâu gân bánh chè và đệm mỡ Hoffa, bơm 20 - 30 ml dung dịch NaCl 0.9% pha Lidocaine 0.5% để bóc tách cơ học phá hủy đám mạch máu tân tạo và thần kinh cảm giác đi kèm.",
        "6. (Tùy chọn): Tiêm bổ sung 2 - 3 ml huyết tương giàu tiểu cầu (PRP) tự thân vào ổ tổn thương."
      ]
    },
    "drugsAndDosage": {
      "localAnesthetic": "Lidocaine 1% (3 - 5 ml gây tê) + NaCl 0.9% (20 - 25 ml cho kỹ thuật HVI).",
      "steroid": "TUYỆT ĐỐI TRÁNH TIÊM STEROID LIỀU CAO VÀO THÂN GÂN (Nguy cơ đứt gân bánh chè tự phát).",
      "volume": "20 - 30 ml dung dịch bóc tách HVI."
    },
    "pearlsAndPitfalls": [
      "NGUY CƠ ĐỨT GÂN: Tránh tuyệt đối tiêm Corticosteroid trực tiếp vào thân gân bánh chè vì nguy cơ đứt gân tự phát cực cao ở vận động viên.",
      "Kỹ thuật HVI bóc tách mặt sâu gân bánh chè đã được chứng minh hiệu quả giảm đau vượt trội nhờ cắt đứt các sợi thần kinh cảm giác đi kèm mạng lưới mạch máu tân tạo."
    ],
    "postProcedure": "Hạn chế nhảy và chạy cường độ cao trong 2 - 4 tuần. Bắt đầu tập co cơ đẳng trường (Isometric quadriceps loading) sau 48 giờ.",
    "figures": [
      {
        "path": "assets/images/ch23_knee/p297_img1.jpeg",
        "figNumber": "23.22",
        "title": "Mặt cắt siêu âm dọc gân bánh chè và cực dưới xương bánh chè (Fig. 23.22)",
        "desc": "Mặt cắt dọc gân bánh chè (PT), cực dưới xương bánh chè và đệm mỡ Hoffa nằm ở lớp sâu.",
        "springerCaption": "Fig. 23.22 Scanning technique and sonoanatomy of the patellar tendon."
      },
      {
        "path": "assets/images/ch23_knee/p298_img1.jpeg",
        "figNumber": "23.23",
        "title": "Kỹ thuật đâm kim bóc tách thể tích lớn (High-Volume Injection) (Fig. 23.23)",
        "desc": "Kim tiến vào mặt phẳng sâu dưới gân bánh chè, bơm thể tích dịch lớn bóc tách phá hủy tân mạch.",
        "springerCaption": "Fig. 23.23 High-volume injection deep to the patellar tendon under ultrasound guidance."
      }
    ]
  },
  {
    "id": "subtalar-joint",
    "nameVi": "Tiêm nội khớp dưới sên tiếp cận lối ngoài (Subtalar Joint Lateral Approach Injection)",
    "nameEn": "Ultrasound-Guided Subtalar Joint Injection (Lateral Approach)",
    "category": "lower",
    "subcategory": "ankle_foot",
    "type": "joint_injection",
    "difficulty": "Nâng cao",
    "icd10": "M19.07 (Thoái hóa khớp dưới sên / Khớp sên gót)",
    "indications": [
      "Thoái hóa khớp dưới sên (Subtalar Osteoarthritis) sau chấn thương lật cổ chân hoặc gãy xương gót.",
      "Viêm khớp dưới sên trong viêm cột sống dính khớp, viêm khớp vảy nến.",
      "Đau gót chân và cổ chân sau dai dẳng khi đi trên mặt đường nghiêng gồ ghề."
    ],
    "contraindications": {
      "absolute": [
        "Nhiễm khuẩn cấp tính vùng cổ bàn chân ngoài.",
        "Dị ứng thuốc tiêm."
      ],
      "relative": [
        "Hàn cứng khớp dưới sên hoàn toàn.",
        "Rối loạn đông máu nặng."
      ]
    },
    "patientPosition": "Nằm nghiêng bên lành, cổ bàn chân bên đau đặt vuông góc 90 độ tựa trên gối mềm.",
    "transducer": "Đầu dò Linear 10 - 15 MHz dải tần cao.",
    "sonoanatomy": [
      "Xương sên (Talus): Bờ xương tăng âm ở phía trên.",
      "Xương gót (Calcaneus): Bờ xương tăng âm ở phía dưới.",
      "Gân cơ mác ngắn và mác dài (Peroneus brevis & longus): Cấu trúc tăng âm nằm ở phía nông trên mặt ngoài xương gót.",
      "Khe khớp dưới sên (Subtalar joint): Khe khớp hẹp nằm giữa xương sên và xương gót tại lối vào xoang cổ chân (Sinus tarsi)."
    ],
    "technique": {
      "approach": "In-plane từ trước ra sau hoặc từ dưới lên qua xoang cổ chân.",
      "needle": "Kim 23G - 25G, chiều dài 38 mm.",
      "steps": [
        "1. Đặt đầu dò nghiêng ngay dưới mỏm mắt cá ngoài hướng về phía trước xương gót (xoang cổ chân).",
        "2. Nhận diện khe khớp giữa xương sên và xương gót nằm sâu hơn gân cơ mác.",
        "3. Sát khuẩn vô trùng.",
        "4. Đưa kim In-plane từ trước ra sau lách giữa hai xương vào khe khớp dưới sên.",
        "5. Thao tác Hydrolocation: Bơm thử 0.2 ml nước muối NaCl 0.9% để xác nhận đầu kim nằm trơn tru trong khớp mà không có lực cản.",
        "6. Bơm chậm 1.5 - 2.5 ml hỗn dịch Triamcinolone hoặc Axit Hyaluronic."
      ]
    },
    "drugsAndDosage": {
      "localAnesthetic": "Lidocaine 1% (1.0 ml).",
      "steroid": "Triamcinolone acetonide 20 mg hoặc Dexamethasone 4 mg.",
      "volume": "1.5 - 2.5 ml tổng thể tích."
    },
    "pearlsAndPitfalls": [
      "Khe khớp dưới sên rất hẹp và ngoằn ngoèo. Tiếp cận mù có tỷ lệ vào khớp chỉ khoảng 50-60%, trong khi hướng dẫn siêu âm kết hợp kỹ thuật bơm nước muối kiểm tra (hydrolocation) nâng tỷ lệ thành công lên > 95%.",
      "Tránh đâm xuyên vào gân cơ mác ở lớp nông."
    ],
    "postProcedure": "Hạn chế đi lại nhiều trên bề mặt gồ ghề trong 48 giờ sau tiêm.",
    "figures": [
      {
        "path": "assets/images/ch24_ankle_foot/p311_img1.jpeg",
        "figNumber": "24.14",
        "title": "Mặt cắt siêu âm xoang cổ chân và lối vào khớp dưới sên (Fig. 24.14)",
        "desc": "Xương sên, xương gót và gân cơ mác (*) tại vị trí lối vào khớp dưới sên.",
        "springerCaption": "Fig. 24.14 Entrance to the subtalar joint showing talus, calcaneus, and peroneus tendon."
      },
      {
        "path": "assets/images/ch24_ankle_foot/p312_img1.jpeg",
        "figNumber": "24.17",
        "title": "Kỹ thuật đâm kim In-plane vào khớp dưới sên (Fig. 24.17)",
        "desc": "Kim tiến giữa xương gót và xương sên sử dụng kỹ thuật hydrolocation kiểm soát dòng thuốc.",
        "springerCaption": "Fig. 24.17 Needle tip passing between calcaneus and talus into the subtalar joint."
      }
    ]
  },
  {
    "id": "ankle-nerve-blocks",
    "nameVi": "Bộ phong bế 5 dây thần kinh cảm giác cổ bàn chân (Comprehensive Ankle Nerve Blocks)",
    "nameEn": "Ultrasound-Guided Ankle Nerve Blocks (Sural, SPN, DPN, Tibial, Saphenous)",
    "category": "lower",
    "subcategory": "ankle_foot",
    "type": "nerve_block",
    "difficulty": "Trung bình",
    "icd10": "G57.5 (Hội chứng ống cổ chân), G57.6 (U thần kinh Morton), M79.27 (Đau thần kinh bàn chân)",
    "indications": [
      "Phẫu thuật hoặc can thiệp bàn ngón chân (ngón chân khoằm, viêm bao hoạt dịch ngón cái, u Morton).",
      "Hội chứng ống cổ chân (Tarsal Tunnel Syndrome - chèn ép thần kinh chày sau).",
      "Đau thần kinh mạn tính vùng cổ bàn chân sau chấn thương hoặc phẫu thuật gãy xương."
    ],
    "contraindications": {
      "absolute": [
        "Nhiễm khuẩn cấp vùng cổ chân.",
        "Dị ứng thuốc tê nhóm amide."
      ],
      "relative": [
        "Bệnh lý thần kinh ngoại biên do đái tháo đường giai đoạn nặng có mất cảm giác bảo vệ.",
        "Rối loạn đông máu nặng."
      ]
    },
    "patientPosition": "Nằm ngửa hoặc nằm sấp tùy theo dây thần kinh mục tiêu.",
    "transducer": "Đầu dò Linear 10 - 15 MHz dải tần cao.",
    "sonoanatomy": [
      "5 dây thần kinh chi phối cổ bàn chân theo Philip Peng:",
      "1. Thần kinh mác nông (SPN): Nằm ở khoang mạc trước-ngoài cẳng chân dưới, xuyên qua mạc cẳng chân ra nông.",
      "2. Thần kinh bắp chân (Sural nerve): Đi cùng tĩnh mạch hiển bé ở bờ sau mắt cá ngoài.",
      "3. Thần kinh mác sâu (DPN): Nằm sát động mạch chày trước và mặt trước xương sên sâu dưới gân duỗi ngón cái dài.",
      "4. Thần kinh chày (Tibial nerve): Nằm trong ống cổ chân sau mắt cá trong, đi cùng động mạch và tĩnh mạch chày sau.",
      "5. Thần kinh hiển (Saphenous nerve): Đi cùng tĩnh mạch hiển lớn ở bờ trước mắt cá trong."
    ],
    "technique": {
      "approach": "In-plane hoặc Out-of-plane cho từng dây thần kinh cụ thể.",
      "needle": "Kim 25G, chiều dài 38 mm.",
      "steps": [
        "1. Xác định dây thần kinh mục tiêu dựa vào mốc giải phẫu và mạch máu đồng hành.",
        "2. BẬT COLOR DOPPLER để định vị chính xác mạch máu đi kèm (ĐM chày sau, ĐM chày trước, TM hiển).",
        "3. Sát khuẩn vô trùng.",
        "4. Đưa kim In-plane áp sát vỏ bao thần kinh, không đâm xuyên vào thân thần kinh.",
        "5. Test hút âm tính (loại trừ nội mạch).",
        "6. Bơm chậm 2.0 - 4.0 ml thuốc tê tạo hình ảnh mắt tròn (donut sign) bọc quanh thần kinh."
      ]
    },
    "drugsAndDosage": {
      "localAnesthetic": "Ropivacaine 0.25% - 0.375% hoặc Bupivacaine 0.25% (2.0 - 4.0 ml cho mỗi dây thần kinh).",
      "steroid": "Dexamethasone 2 - 4 mg (nếu điều trị hội chứng ống cổ chân chèn ép mạn tính).",
      "volume": "2.0 - 4.0 ml mỗi dây thần kinh."
    },
    "pearlsAndPitfalls": [
      "ĐỐI VỚI THẦN KINH CHÀY TRONG ỐNG CỔ CHÂN: Luôn dùng Color Doppler để nhận diện động mạch chày sau. Hút kiểm tra kỹ trước khi bơm để tránh ngộ độc thuốc tê toàn thân LAST.",
      "Bệnh nhân đái tháo đường có nguy cơ phù nề thần kinh sau phong bế cao hơn, nên dùng nồng độ thuốc tê thấp và không dùng epinephrine."
    ],
    "postProcedure": "Theo dõi mất cảm giác bàn chân, dặn bệnh nhân không đi chân trần và chú ý bảo vệ bàn chân khi đang còn tê.",
    "figures": [
      {
        "path": "assets/images/ch24_ankle_foot/p306_img1.jpeg",
        "figNumber": "24.7",
        "title": "Giải phẫu siêu âm thần kinh mác nông (SPN) (Fig. 24.7)",
        "desc": "Thần kinh mác nông tại khoang mạc trước ngoài cẳng chân trước khi phân nhánh cảm giác mu chân.",
        "springerCaption": "Fig. 24.7 Sonoanatomy of the superficial peroneal nerve (SPN) at different levels."
      },
      {
        "path": "assets/images/ch24_ankle_foot/p307_img1.jpeg",
        "figNumber": "24.8",
        "title": "Giải phẫu siêu âm thần kinh bắp chân (Sural Nerve) (Fig. 24.8)",
        "desc": "Thần kinh bắp chân (SuN) đi cùng tĩnh mạch hiển bé ở phía sau ngoài mắt cá ngoài.",
        "springerCaption": "Fig. 24.8 Sonoanatomy of the sural nerve (SuN) and peroneus brevis."
      },
      {
        "path": "assets/images/ch24_ankle_foot/p308_img1.jpeg",
        "figNumber": "24.10",
        "title": "Giải phẫu siêu âm thần kinh chày trong ống cổ chân (Fig. 24.10)",
        "desc": "Thần kinh chày (mũi tên đậm) nằm cạnh động mạch chày sau trong ống cổ chân sau mắt cá trong.",
        "springerCaption": "Fig. 24.10 Sonoanatomy of the tibial nerve, posterior tibial artery, and flexor tendons."
      }
    ]
  },
  {
    "id": "hip-joint-denervation",
    "nameVi": "Diệt thần kinh cảm giác khớp háng (Hip Joint Denervation / RFA Target 1 & Target 2)",
    "nameEn": "Ultrasound-Guided Hip Joint Sensory Denervation and Radiofrequency Ablation",
    "category": "lower",
    "subcategory": "hip",
    "type": "rfa",
    "difficulty": "Chuyên sâu",
    "icd10": "M16.1 (Thoái hóa khớp háng nặng không thể phẫu thuật hoặc đau dai dẳng sau thay khớp)",
    "indications": [
      "Thoái hóa khớp háng nặng kháng trị ở bệnh nhân có chống chỉ định phẫu thuật thay khớp háng.",
      "Đau dai dẳng mạn tính sau phẫu thuật thay khớp háng nhân tạo không có lỏng khớp hoặc nhiễm trùng.",
      "Bệnh nhân có đáp ứng giảm đau tốt (> 50%) sau phong bế chẩn đoán các nhánh khớp trước đó."
    ],
    "contraindications": {
      "absolute": [
        "Nhiễm khuẩn cấp tính vùng khớp háng hoặc bẹn.",
        "Máy tạo nhịp tim hoặc máy khử rung tim chưa được tắt chế độ cảm ứng tự động."
      ],
      "relative": [
        "Rối loạn đông máu nặng.",
        "Lỏng chuôi khớp hoặc chén khớp nhân tạo có chỉ định mổ lại."
      ]
    },
    "patientPosition": "Nằm ngửa, đùi duỗi thẳng hơi xoay ngoài nhẹ.",
    "transducer": "Đầu dò Curvilinear 2 - 6 MHz hoặc Linear 6 - 12 MHz.",
    "sonoanatomy": [
      "Phân bố thần kinh mặt trước bao khớp háng theo Philip Peng:",
      "TARGET 1 (Nhánh khớp thần kinh đùi & thần kinh bịt phụ):",
      "Nằm ở rãnh xương giữa Gai chậu trước dưới (Anterior Inferior Iliac Spine - AIIS) và Gờ chậu mu (Iliopectineal Eminence - IPE).",
      "TARGET 2 (Nhánh khớp thần kinh bịt):",
      "Nằm ở bờ dưới trong ổ cối (Inferomedial Acetabulum) ngay trước khuyết ổ cối."
    ],
    "technique": {
      "approach": "In-plane dưới hướng dẫn siêu âm thời gian thực kết hợp kiểm tra điện sinh lý.",
      "needle": "Kim RFA chuyên dụng 20G, active tip 10 mm, chiều dài 100 - 150 mm.",
      "steps": [
        "1. TARGET 1: Đặt đầu dò chéo nối AIIS và IPE. Đưa kim RFA In-plane chạm mặt xương ở rãnh giữa AIIS và IPE.",
        "2. TARGET 2: Đặt đầu dò ngang tại bờ dưới trong ổ cối. Đưa kim RFA chạm màng xương ổ cối dưới trong.",
        "3. KIỂM TRA ĐIỆN SINH LÝ BẮT BUỘC TẠI CẢ 2 ĐÍCH:",
        "   - Kích thích cảm giác 50 Hz, $\\le 0.5\\text{ V}$: tái hiện cảm giác đau tức sâu trong khớp háng.",
        "   - Kích thích vận động 2 Hz, tăng lên $1.5 - 2.0\\text{ V}$: BẮT BUỘC KHÔNG CÓ GIẬT CƠ TỨ ĐẦU ĐÙI (Target 1) HOẶC CƠ KHÉP ĐÙI (Target 2).",
        "4. Bơm gây tê 1.0 ml Lidocaine 2% tại mỗi đích.",
        "5. Phát sóng nhiệt cao tần RFA ở 80°C trong 90 giây tại mỗi đích.",
        "6. Bơm Ropivacaine 0.2% 1 ml + Dexamethasone 2 mg chống viêm sau đốt."
      ]
    },
    "drugsAndDosage": {
      "localAnesthetic": "Lidocaine 2% (1.0 ml trước đốt) và Ropivacaine 0.2% (1.0 ml sau đốt).",
      "steroid": "Dexamethasone 2 mg tại mỗi vị trí đốt.",
      "volume": "1.0 ml mỗi vị trí."
    },
    "pearlsAndPitfalls": [
      "ĐÂY LÀ KỸ THUẬT CAN THIỆP CHUYÊN SÂU: Bắt buộc thử kích thích vận động ở 2.0 V để loại trừ hoàn toàn việc đầu kim chạm vào thân chính của thần kinh đùi hoặc thần kinh bịt.",
      "Kỹ thuật diệt thần kinh cảm giác khớp háng bảo tồn toàn bộ chức năng vận động cơ, giúp bệnh nhân đi lại được ngay mà không bị liệt cơ."
    ],
    "postProcedure": "Theo dõi 1 giờ tại phòng hồi tỉnh. Đánh giá cơ lực cơ tứ đầu đùi và cơ khép đùi trước khi cho bệnh nhân xuất viện.",
    "figures": [
      {
        "path": "assets/images/ch27_hip_knee_denervation/p335_img1.jpeg",
        "figNumber": "27.1",
        "title": "Sơ đồ các nhánh thần kinh cảm giác mặt trước bao khớp háng (Fig. 27.1)",
        "desc": "Các nhánh khớp của thần kinh đùi, thần kinh bịt phụ và thần kinh bịt chi phối cảm giác bao khớp háng.",
        "springerCaption": "Fig. 27.1 Schematic diagram of the articular branches to the anterior hip joint capsule."
      },
      {
        "path": "assets/images/ch27_hip_knee_denervation/p341_img1.jpeg",
        "figNumber": "27.6",
        "title": "Giải phẫu siêu âm vùng rãnh giữa AIIS và IPE (Target 1) (Fig. 27.6)",
        "desc": "Mặt cắt siêu âm bộc lộ gai chậu trước dưới (AIIS), gờ chậu mu (IPE) và dây chằng chậu đùi.",
        "springerCaption": "Fig. 27.6 Sonographic landmarks between AIIS and IPE for hip denervation target 1."
      },
      {
        "path": "assets/images/ch27_hip_knee_denervation/p342_img1.jpeg",
        "figNumber": "27.7",
        "title": "Vị trí đặt đầu dò và hình ảnh siêu âm cho Target 1 và Target 2 (Fig. 27.7)",
        "desc": "Định vị đầu dò siêu âm tại hai đích mục tiêu để diệt thần kinh cảm giác khớp háng.",
        "springerCaption": "Fig. 27.7 Transducer positions and sonograms for hip joint sensory denervation."
      },
      {
        "path": "assets/images/ch27_hip_knee_denervation/p343_img1.jpeg",
        "figNumber": "27.8",
        "title": "Kỹ thuật đâm kim In-plane vào các đích thần kinh khớp háng (Fig. 27.8)",
        "desc": "Kim RFA tiếp cận mặt xương tại các mốc giải phẫu mục tiêu dưới kiểm soát siêu âm thời gian thực.",
        "springerCaption": "Fig. 27.8 Needle insertion and relevant landmarks for ultrasound-guided hip denervation."
      }
    ]
  }
];

if (typeof window !== "undefined") { window.PROCEDURES_DATA = PROCEDURES_DATA; }
if (typeof module !== "undefined" && module.exports) { module.exports = PROCEDURES_DATA; };
    window.STABLE_VERSION_METADATA = {
      version: '1.0.0-stable',
      timestamp: '2026-09-26T20:05:42.374631',
      procedureCount: window.STABLE_PROCEDURES_FALLBACK ? window.STABLE_PROCEDURES_FALLBACK.length : 0
    };
    console.log('[US-PainIntervention] Stable Fallback Dataset v1.0.0 đã nạp sẵn sàng (' + (window.STABLE_PROCEDURES_FALLBACK ? window.STABLE_PROCEDURES_FALLBACK.length : 0) + ' quy trình)');
  } catch (err) {
    console.error('[US-PainIntervention] Lỗi nạp fallback dataset:', err);
  }
})();
