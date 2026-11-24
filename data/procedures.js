const PROCEDURES_DATA = [
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
    ],
    "video": {
      "videoId": "_rQx6mXq698",
      "title": "Subacromial Bursa Injection - Ultrasound Scanning Technique",
      "channel": "Clarius Mobile Health",
      "url": "https://www.youtube.com/watch?v=_rQx6mXq698",
      "embedUrl": "https://www.youtube.com/embed/_rQx6mXq698"
    }
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
    ],
    "video": {
      "videoId": "uQO6DxfHTkw",
      "title": "Ultrasound guided glenohumeral joint injection - 2 min series MSKUS",
      "channel": "SMUG MSK ultrasound training",
      "url": "https://www.youtube.com/watch?v=uQO6DxfHTkw",
      "embedUrl": "https://www.youtube.com/embed/uQO6DxfHTkw"
    }
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
    ],
    "video": {
      "videoId": "qMicNmIbyiw",
      "title": "Ultrasound-Guided Biceps Tendon Peritendinous Sheath Injection NYSORA Medstudylab.com",
      "channel": "Anesthesia and Pain medicine",
      "url": "https://www.youtube.com/watch?v=qMicNmIbyiw",
      "embedUrl": "https://www.youtube.com/embed/qMicNmIbyiw"
    }
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
    ],
    "video": {
      "videoId": "8xfcDMERiBQ",
      "title": "How To: Shoulder Ultrasound-Guided Injection of the AC Joint 3D Video",
      "channel": "Sonosite",
      "url": "https://www.youtube.com/watch?v=8xfcDMERiBQ",
      "embedUrl": "https://www.youtube.com/embed/8xfcDMERiBQ"
    }
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
    ],
    "video": {
      "videoId": "nBS3N9efdWo",
      "title": "Suprascapular Nerve Block- Ultrasound Guided",
      "channel": "Leicester Pain Education",
      "url": "https://www.youtube.com/watch?v=nBS3N9efdWo",
      "embedUrl": "https://www.youtube.com/embed/nBS3N9efdWo"
    }
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
    ],
    "video": {
      "videoId": "SuSiTJCBDRI",
      "title": "Tennis elbow injection demonstration",
      "channel": "Sports Medicine Ultrasound",
      "url": "https://www.youtube.com/watch?v=SuSiTJCBDRI",
      "embedUrl": "https://www.youtube.com/embed/SuSiTJCBDRI"
    }
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
    ],
    "video": {
      "videoId": "QkpSBLHoJhw",
      "title": "Golfer's Elbow Medial Epicondyle Cortisone Injection - Scanning and Injection Training Video",
      "channel": "Sports Medicine Ultrasound",
      "url": "https://www.youtube.com/watch?v=QkpSBLHoJhw",
      "embedUrl": "https://www.youtube.com/embed/QkpSBLHoJhw"
    }
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
    ],
    "video": {
      "videoId": "sxNqVWDwmd0",
      "title": "How To: Ultrasound Guided Carpal Tunnel Injection 3D Video",
      "channel": "Sonosite",
      "url": "https://www.youtube.com/watch?v=sxNqVWDwmd0",
      "embedUrl": "https://www.youtube.com/embed/sxNqVWDwmd0"
    }
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
    ],
    "video": {
      "videoId": "3b1ML5gLNnQ",
      "title": "Ultrasound-Guided Injection in De Quervain's Tenosynovitis | Clinical Demonstration",
      "channel": "Asian Pain Academy ",
      "url": "https://www.youtube.com/watch?v=3b1ML5gLNnQ",
      "embedUrl": "https://www.youtube.com/embed/3b1ML5gLNnQ"
    }
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
    ],
    "video": {
      "videoId": "RD_Z-cAHd20",
      "title": "How To: Pathology Hand A1 Pulley Trigger Finger 3D Video",
      "channel": "Sonosite",
      "url": "https://www.youtube.com/watch?v=RD_Z-cAHd20",
      "embedUrl": "https://www.youtube.com/embed/RD_Z-cAHd20"
    }
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
    ],
    "video": {
      "videoId": "FS0cBmUFoVc",
      "title": "1st CMC  joint injection - MSKUS - Ultrasound guided 1st CMC  joint injection - 2 minute series",
      "channel": "SMUG MSK ultrasound training",
      "url": "https://www.youtube.com/watch?v=FS0cBmUFoVc",
      "embedUrl": "https://www.youtube.com/embed/FS0cBmUFoVc"
    }
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
    ],
    "video": {
      "videoId": "eBFSs0ITaqM",
      "title": "Intra articular Knee Joint Cortisone Injection",
      "channel": "Clarius Mobile Health",
      "url": "https://www.youtube.com/watch?v=eBFSs0ITaqM",
      "embedUrl": "https://www.youtube.com/embed/eBFSs0ITaqM"
    }
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
    ],
    "video": {
      "videoId": "hu5gODBof04",
      "title": "How to Scan & Inject a Baker's Cyst with Ultrasound",
      "channel": "Sports Medicine Ultrasound",
      "url": "https://www.youtube.com/watch?v=hu5gODBof04",
      "embedUrl": "https://www.youtube.com/embed/hu5gODBof04"
    }
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
    ],
    "video": {
      "videoId": "Nw9UwEtMVn0",
      "title": "Pes Anserine Bursitis Injection Under Ultrasound-Guidance",
      "channel": "Dr HASSAN MUBARK",
      "url": "https://www.youtube.com/watch?v=Nw9UwEtMVn0",
      "embedUrl": "https://www.youtube.com/embed/Nw9UwEtMVn0"
    }
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
    ],
    "video": {
      "videoId": "PxkSdSzUfGs",
      "title": "Ultrasound Guided Genicular Nerve Blocks",
      "channel": "Regional Anesthesiology and Acute Pain Medicine",
      "url": "https://www.youtube.com/watch?v=PxkSdSzUfGs",
      "embedUrl": "https://www.youtube.com/embed/PxkSdSzUfGs"
    }
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
    ],
    "video": {
      "videoId": "DKdhr4L21Rc",
      "title": "Venue Family | Anterior hip assessment and injection",
      "channel": "GE HealthCare",
      "url": "https://www.youtube.com/watch?v=DKdhr4L21Rc",
      "embedUrl": "https://www.youtube.com/embed/DKdhr4L21Rc"
    }
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
    ],
    "video": {
      "videoId": "4IRnvNuiUJo",
      "title": "Ultrasound Guided Hip Greater Trochanteric Bursa Injection",
      "channel": "Dr. Scott Weiss",
      "url": "https://www.youtube.com/watch?v=4IRnvNuiUJo",
      "embedUrl": "https://www.youtube.com/embed/4IRnvNuiUJo"
    }
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
    ],
    "video": {
      "videoId": "C2MmN6rHq5w",
      "title": "PIRIFORMIS MUSCLE INJECTION - NYSORA US Pain App",
      "channel": "NYSORA - Education",
      "url": "https://www.youtube.com/watch?v=C2MmN6rHq5w",
      "embedUrl": "https://www.youtube.com/embed/C2MmN6rHq5w"
    }
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
    ],
    "video": {
      "videoId": "TOcvCKr9J18",
      "title": "Femoral and lateral femoral cutaneous nerve blocks: Foundational overview",
      "channel": "Regional Anesthesiology and Acute Pain Medicine",
      "url": "https://www.youtube.com/watch?v=TOcvCKr9J18",
      "embedUrl": "https://www.youtube.com/embed/TOcvCKr9J18"
    }
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
    ],
    "video": {
      "videoId": "NwlRQwPAohU",
      "title": "Intra-articular tibiotalar injection demonstration",
      "channel": "Sports Medicine Ultrasound",
      "url": "https://www.youtube.com/watch?v=NwlRQwPAohU",
      "embedUrl": "https://www.youtube.com/embed/NwlRQwPAohU"
    }
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
    ],
    "video": {
      "videoId": "E5_TlTWMVKI",
      "title": "Plantar Fascia injection with cortisone demonstation",
      "channel": "Sports Medicine Ultrasound",
      "url": "https://www.youtube.com/watch?v=E5_TlTWMVKI",
      "embedUrl": "https://www.youtube.com/embed/E5_TlTWMVKI"
    }
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
    ],
    "video": {
      "videoId": "tNbLvql0TQU",
      "title": "How To: Ultrasound Guided Sacro-iliac Injection - Sonosite Ultrasound 3D Video",
      "channel": "Sonosite",
      "url": "https://www.youtube.com/watch?v=tNbLvql0TQU",
      "embedUrl": "https://www.youtube.com/embed/tNbLvql0TQU"
    }
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
    ],
    "video": {
      "videoId": "yD6L4aSbSZA",
      "title": "How To: Ultrasound Guided Caudal Epidural Steroid Injection",
      "channel": "Sonosite",
      "url": "https://www.youtube.com/watch?v=yD6L4aSbSZA",
      "embedUrl": "https://www.youtube.com/embed/yD6L4aSbSZA"
    }
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
    ],
    "video": {
      "videoId": "gsyeeDLnEx4",
      "title": "Erector Spinae Plane Block - Regional anesthesia Crash course with Dr. Hadzic",
      "channel": "NYSORA - Education",
      "url": "https://www.youtube.com/watch?v=gsyeeDLnEx4",
      "embedUrl": "https://www.youtube.com/embed/gsyeeDLnEx4"
    }
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
    ],
    "video": {
      "videoId": "3fhPb-ZNml4",
      "title": "Lumbar Medial Branch Block",
      "channel": "The Spine & Pain Institute of New York",
      "url": "https://www.youtube.com/watch?v=3fhPb-ZNml4",
      "embedUrl": "https://www.youtube.com/embed/3fhPb-ZNml4"
    }
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
    ],
    "video": {
      "videoId": "m--qyUUzH5U",
      "title": "Ultrasound-Guided Intercostal Nerve Block",
      "channel": "Regional Anesthesiology and Acute Pain Medicine",
      "url": "https://www.youtube.com/watch?v=m--qyUUzH5U",
      "embedUrl": "https://www.youtube.com/embed/m--qyUUzH5U"
    }
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
    ],
    "video": {
      "videoId": "dXD9AEyAfKM",
      "title": "USG Greater Occipital Nerve Block",
      "channel": "Clarius Mobile Health",
      "url": "https://www.youtube.com/watch?v=dXD9AEyAfKM",
      "embedUrl": "https://www.youtube.com/embed/dXD9AEyAfKM"
    }
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
    ],
    "video": {
      "videoId": "B6ROeVFUJSY",
      "title": "Ultrasound guided stellate ganglion block",
      "channel": "Regional Anesthesiology and Acute Pain Medicine",
      "url": "https://www.youtube.com/watch?v=B6ROeVFUJSY",
      "embedUrl": "https://www.youtube.com/embed/B6ROeVFUJSY"
    }
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
    ],
    "video": {
      "videoId": "WJPH6Ij3StA",
      "title": "Ultrasound-guided Ilioinguinal and Iliohypogastric Nerve Blocks",
      "channel": "Regional Anesthesiology and Acute Pain Medicine",
      "url": "https://www.youtube.com/watch?v=WJPH6Ij3StA",
      "embedUrl": "https://www.youtube.com/embed/WJPH6Ij3StA"
    }
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
    ],
    "video": {
      "videoId": "kP0HzwMDZos",
      "title": "Hip Joint PRP Injection with Ultrasound - Scanning and Injection Technique Training Video",
      "channel": "Sports Medicine Ultrasound",
      "url": "https://www.youtube.com/watch?v=kP0HzwMDZos",
      "embedUrl": "https://www.youtube.com/embed/kP0HzwMDZos"
    }
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
    ],
    "video": {
      "videoId": "1pz2QYNTyOo",
      "title": "Ultrasound-guided Barbotage for Calcific Tendinitis",
      "channel": "Lake Washington Sports & Spine",
      "url": "https://www.youtube.com/watch?v=1pz2QYNTyOo",
      "embedUrl": "https://www.youtube.com/embed/1pz2QYNTyOo"
    }
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
    ],
    "video": {
      "videoId": "ENVRqkC-zQY",
      "title": "The Ultrasound Guided Lesser Occipital Nerve Block  (NRAP Academy's Ultrasound Course excerpt)",
      "channel": "NRAP Academy— David Rosenblum, MD  Pain Specialist",
      "url": "https://www.youtube.com/watch?v=ENVRqkC-zQY",
      "embedUrl": "https://www.youtube.com/embed/ENVRqkC-zQY"
    }
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
    ],
    "video": {
      "videoId": "dXD9AEyAfKM",
      "title": "USG Greater Occipital Nerve Block",
      "channel": "Clarius Mobile Health",
      "url": "https://www.youtube.com/watch?v=dXD9AEyAfKM",
      "embedUrl": "https://www.youtube.com/embed/dXD9AEyAfKM"
    }
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
    ],
    "video": {
      "videoId": "PR_rsxi7ONU",
      "title": "Avoiding Cervical Epidurals: Ultrasound Guided Cervical Selective Nerve Root Block- NRAP Academy",
      "channel": "NRAP Academy— David Rosenblum, MD  Pain Specialist",
      "url": "https://www.youtube.com/watch?v=PR_rsxi7ONU",
      "embedUrl": "https://www.youtube.com/embed/PR_rsxi7ONU"
    }
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
    ],
    "video": {
      "videoId": "jdYiVV1LVzk",
      "title": "Ultrasound-Guided Cervical Facet Joint Injection – Cervical Medial Branch Block Medstudylab.com",
      "channel": "Anesthesia and Pain medicine",
      "url": "https://www.youtube.com/watch?v=jdYiVV1LVzk",
      "embedUrl": "https://www.youtube.com/embed/jdYiVV1LVzk"
    }
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
    ],
    "video": {
      "videoId": "CHPMt_FXRKY",
      "title": "Ultrasound-Guided Genitofemoral Nerve Block NYSORA Medstudylab.com",
      "channel": "Anesthesia and Pain medicine",
      "url": "https://www.youtube.com/watch?v=CHPMt_FXRKY",
      "embedUrl": "https://www.youtube.com/embed/CHPMt_FXRKY"
    }
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
    ],
    "video": {
      "videoId": "rxAKwGq13Lo",
      "title": "Obturator Internus Dysfunction, Tendonitis, Bursitis, and Injection",
      "channel": "Dr. Terkawi Pain Medicine",
      "url": "https://www.youtube.com/watch?v=rxAKwGq13Lo",
      "embedUrl": "https://www.youtube.com/embed/rxAKwGq13Lo"
    }
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
    ],
    "video": {
      "videoId": "hIogbdYnkIs",
      "title": "Ischiofemoral Impingement Ultrasound Guided Evaluation and Injection",
      "channel": "Mehmet Mustafa Ertürk",
      "url": "https://www.youtube.com/watch?v=hIogbdYnkIs",
      "embedUrl": "https://www.youtube.com/embed/hIogbdYnkIs"
    }
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
    ],
    "video": {
      "videoId": "jhBZXwFm7nM",
      "title": "Ultrasound Guided Pudendal Nerve Block",
      "channel": "American Society For Post Surgical Pain",
      "url": "https://www.youtube.com/watch?v=jhBZXwFm7nM",
      "embedUrl": "https://www.youtube.com/embed/jhBZXwFm7nM"
    }
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
    ],
    "video": {
      "videoId": "2EwE3RMrvtU",
      "title": "Locating the Inferior Cluneal Nerve - Neural Surface Anatomy Series - Stimpod NMS460",
      "channel": "Xavant Technology",
      "url": "https://www.youtube.com/watch?v=2EwE3RMrvtU",
      "embedUrl": "https://www.youtube.com/embed/2EwE3RMrvtU"
    }
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
    ],
    "video": {
      "videoId": "KwtPeTkgsfE",
      "title": "Ultrasound Imaging of the Sacrum and Injection Techniques. Dr. C.P. Lin, Taiwan",
      "channel": "isspsTV",
      "url": "https://www.youtube.com/watch?v=KwtPeTkgsfE",
      "embedUrl": "https://www.youtube.com/embed/KwtPeTkgsfE"
    }
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
    ],
    "video": {
      "videoId": "t61ip9BEyoI",
      "title": "Dr Agnes Stogicza - Radiofrequency E-Learning Seminar 1 Session 4: Sacroiliac Joint Denervation",
      "channel": "Painschool International",
      "url": "https://www.youtube.com/watch?v=t61ip9BEyoI",
      "embedUrl": "https://www.youtube.com/embed/t61ip9BEyoI"
    }
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
    ],
    "video": {
      "videoId": "f9zo3Ti4CcI",
      "title": "Rotator Cuff Interval Injection: 3-Step USG Approach | Frozen Shoulder | Dr. Chinmoy Roy",
      "channel": "Asian Pain Academy",
      "url": "https://www.youtube.com/watch?v=f9zo3Ti4CcI",
      "embedUrl": "https://www.youtube.com/embed/f9zo3Ti4CcI"
    }
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
    ],
    "video": {
      "videoId": "EcYZehvFWgI",
      "title": "Ultrasound Guided Elbow Joint Injection (Step-by-Step)",
      "channel": "My Injection Training",
      "url": "https://www.youtube.com/watch?v=EcYZehvFWgI",
      "embedUrl": "https://www.youtube.com/embed/EcYZehvFWgI"
    }
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
    ],
    "video": {
      "videoId": "LalkzCSeU8I",
      "title": "How to Perform a Lateral Hip Injection (Ultrasound-Guided)",
      "channel": "My Injection Training",
      "url": "https://www.youtube.com/watch?v=LalkzCSeU8I",
      "embedUrl": "https://www.youtube.com/embed/LalkzCSeU8I"
    }
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
    ],
    "video": {
      "videoId": "bfrMKfyN4SY",
      "title": "Ultrasound Guided Iliopsoas Bursa Injection - International Society of Regenerative Medicine",
      "channel": "International Society of Liver Ultrasound",
      "url": "https://www.youtube.com/watch?v=bfrMKfyN4SY",
      "embedUrl": "https://www.youtube.com/embed/bfrMKfyN4SY"
    }
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
    ],
    "video": {
      "videoId": "aKZugeNA0zM",
      "title": "Ultrasound Guided Injection for ITB Syndrome",
      "channel": "The Podiatry Clinic",
      "url": "https://www.youtube.com/watch?v=aKZugeNA0zM",
      "embedUrl": "https://www.youtube.com/embed/aKZugeNA0zM"
    }
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
    ],
    "video": {
      "videoId": "fEwF3smEZ0c",
      "title": "Ultrasound Guided Percutaneous Needle Tenotomy of the Patellar Tendon and PRP Infiltration",
      "channel": "Dr. Abdallah Allam",
      "url": "https://www.youtube.com/watch?v=fEwF3smEZ0c",
      "embedUrl": "https://www.youtube.com/embed/fEwF3smEZ0c"
    }
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
    ],
    "video": {
      "videoId": "9BgGRJn4WWw",
      "title": "Ultrasound guided ankle and subtalar joint injection technique for POCUS clinicians",
      "channel": "MSK Australia",
      "url": "https://www.youtube.com/watch?v=9BgGRJn4WWw",
      "embedUrl": "https://www.youtube.com/embed/9BgGRJn4WWw"
    }
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
    ],
    "video": {
      "videoId": "6o5co6lp-4w",
      "title": "Ultrasound Guided Ankle Block",
      "channel": "Regional Anesthesiology and Acute Pain Medicine",
      "url": "https://www.youtube.com/watch?v=6o5co6lp-4w",
      "embedUrl": "https://www.youtube.com/embed/6o5co6lp-4w"
    }
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
    ],
    "video": {
      "videoId": "LjjVeCFlEXA",
      "title": "PENG Block (Pericapsular Nerve Group Block)",
      "channel": "Regional Anesthesiology and Acute Pain Medicine",
      "url": "https://www.youtube.com/watch?v=LjjVeCFlEXA",
      "embedUrl": "https://www.youtube.com/embed/LjjVeCFlEXA"
    }
  }
];

if (typeof window !== "undefined") { window.PROCEDURES_DATA = PROCEDURES_DATA; }
if (typeof module !== "undefined" && module.exports) { module.exports = PROCEDURES_DATA; }
