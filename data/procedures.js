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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed., Standring) – Surface Anatomy of Shoulder; Moore's Clinically Oriented Anatomy (9th Ed.)",
      "surfaceLandmarks": [
        "Bờ ngoài và góc trước ngoài mỏm cùng vai (Anterolateral acromial edge): Gờ xương dẹt nằm nông ngay dưới da đỉnh vai, dễ sờ dọc từ gai vai ra trước.",
        "Củ lớn xương cánh tay (Greater tubercle of humerus): Khối xương lồi tròn nằm thấp hơn bờ ngoài mỏm cùng vai 1.5 – 2.0 cm, tạo nên đường cong tròn tự nhiên của ụ vai dưới cơ delta.",
        "Mỏm quạ xương vai (Coracoid process): Sờ thấy ở sâu trong hố dưới đòn thuộc rãnh delta – ngực, cách bờ dưới xương đòn ~2.0 cm tại ranh giới 1/3 ngoài và 2/3 trong.",
        "Điểm Codman (Codman's point): Điểm chiếu bề mặt kinh điển của vùng tới hạn gân trên gai và túi hoạt dịch dưới mỏm cùng vai, nằm ngay trước góc trước ngoài mỏm cùng vai ~1 cm khi cánh tay duỗi và xoay trong."
      ],
      "surfaceProjections": "Hình chiếu bề mặt của bao hoạt dịch SASD trải rộng như một mũ vòm từ dưới mỏm cùng vai và dây chằng quạ – cùng vai (trần vòm cùng vai) vượt ra ngoài bờ mỏm cùng vai khoảng 2.5 – 3.5 cm xuống phủ mặt ngoài củ lớn xương cánh tay dưới bó giữa cơ delta. Đường nối đỉnh mỏm quạ tới góc trước ngoài mỏm cùng vai đánh dấu chính xác bờ bề mặt của dây chằng quạ – cùng vai (mái cứng gây hội chứng chạm mỏm cùng vai).",
      "palpationSteps": [
        "1. Đứng sau hoặc bên bệnh nhân ngồi thẳng: dùng ngón trỏ lần dọc bờ trên gai vai ra ngoài tới góc sau ngoài mỏm cùng vai (góc 90°), rồi miết dọc bờ ngoài tới góc trước ngoài mỏm cùng vai.",
        "2. Hạ ngón tay xuống dưới bờ ngoài mỏm cùng vai 1.5 cm để tìm khe lõm dưới mỏm cùng vai (Subacromial sulcus) và khối củ lớn xương cánh tay ở ngay bên dưới.",
        "3. Đưa tay bệnh nhân về tư thế Crass cải tiến (chống mu bàn tay lên mào chậu sau, khuỷu hướng ra sau ngoài): lúc này củ lớn và điểm Codman xoay lồi hẳn ra phía trước ngoài vòm cùng vai để đặt đầu dò và đi kim không vướng trần xương."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_upper_front_nerves_arteries_gray1235.png",
          "figNumber": "Gray 1235",
          "title": "Giải phẫu bề mặt mặt trước vùng vai - cánh tay: Hình chiếu xương, mạch máu và thần kinh (Gray's Plate 1235)",
          "desc": "Đối chiếu bề mặt đầu ngoài xương đòn, mỏm cùng vai, mỏm quạ, chỏm - củ lớn xương cánh tay và đường chiếu động mạch nách - thần kinh mũ dưới cơ delta.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1235) – Surface markings of right upper extremity (anterior aspect)."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Ellis, Logan & Dixon – Human Sectional Anatomy; Gray's Anatomy – Coronal Section of Glenohumeral & Subacromial Space",
      "sectionPlane": "Thiết đồ đứng ngang (Oblique Coronal Section) cắt dọc theo trục cơ trên gai qua mỏm cùng vai, khoang dưới mỏm cùng vai và củ lớn xương cánh tay.",
      "layeredStructure": [
        "Lớp 1 – Da và mô mỡ dưới da vùng ụ vai (dày ~4 – 10 mm): Chứa các nhánh bì của thần kinh trên đòn ngoài (C3–C4) ở phần trên và nhánh bì cánh tay ngoài trên của thần kinh nách (C5–C6) ở phần dưới.",
        "Lớp 2 – Mạc nông và Mạc cơ delta (Deltoid fascia): Bao bọc bó giữa cơ delta cấu trúc nhiều vách sợi lông vũ (Multipennate).",
        "Lớp 3 – Bó giữa cơ delta (Middle head of deltoid, dày ~10 – 18 mm) và lớp mỡ dưới cơ delta – dưới mỏm cùng vai (Peribursal fat plane dày ~1 – 2 mm, chứa nhánh cùng vai của động mạch ngực – cùng vai).",
        "Lớp 4 – KHOANG ĐÍCH: Bao hoạt dịch dưới mỏm cùng vai – dưới cơ delta (SASD bursa) gồm lá thành dính vào mạc sâu cơ delta/mặt dưới mỏm cùng vai và lá tạng dính chặt mặt nông gân cơ trên gai (khoang ảo bình thường < 1.5 mm).",
        "Lớp 5 – Gân cơ trên gai (Supraspinatus tendon, dày ~5 – 7 mm) hòa nhập cùng lá trên bao khớp ổ chảo – cánh tay bám tận vào diện trên (Superior facet) củ lớn xương cánh tay.",
        "Lớp 6 (Đáy thiết đồ) – Sụn khớp hyalin chỏm xương cánh tay, vỏ xương củ lớn và ngách trên khoang khớp ổ chảo – cánh tay (bình thường KHÔNG thông với túi SASD trừ khi rách xuyên bề dày chóp xoay!)."
      ],
      "topographicRelations": {
        "superficialAndDeep": "Phía nông trên thiết đồ là bó giữa cơ delta, trần mỏm cùng vai và dây chằng quạ – cùng vai; phía sâu là mặt hoạt dịch gân trên gai, bao khớp trên và diện xương củ lớn.",
        "medialAndLateral": "Phía trong là khe khớp cùng – đòn và hố trên gai; phía ngoài là ngách túi cùng bên của túi SASD trùm xuống dưới củ lớn ~2 – 3 cm (cách thần kinh nách và động mạch mũ cánh tay sau vòng quanh cổ phẫu thuật khoảng 3 – 4 cm về phía dưới)."
      },
      "dangerCorridors": [
        "Tránh chọc thấp quá 5 cm dưới bờ ngoài mỏm cùng vai trên mặt phẳng đứng ngang vì thần kinh nách và động mạch mũ cánh tay sau chạy ngang mặt sâu cơ delta quanh cổ phẫu thuật xương cánh tay.",
        "Tránh đâm xuyên qua lá tạng bao hoạt dịch xuống Lớp 5 (vùng vô mạch Critical zone của gân trên gai cách diện bám củ lớn 10 mm) gây hoại tử đứt gân."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_shoulder_coronal_dbcls.png",
          "figNumber": "Coronal Sec.",
          "title": "Thiết đồ đứng ngang (Coronal Section) qua khớp vai và bao hoạt dịch SASD (DBCLS Anatomical Atlas)",
          "desc": "Thiết đồ cắt lớp chuẩn hiển thị rõ 6 tầng từ ngoài vào: cơ delta, khoang bao hoạt dịch SASD (xanh đậm phía trên ngoài), gân cơ trên gai, khoang khớp ổ chảo - cánh tay, sụn viền và ngách nách.",
          "atlasSource": "DBCLS Anatomical Atlas (CC-BY 4.0) – Coronal section of the shoulder joint and subacromial-subdeltoid bursa."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed.) – Surface Markings of Back & Scapula; Moore's Clinically Oriented Anatomy",
      "surfaceLandmarks": [
        "Gai vai (Spine of scapula): Gờ xương ngang bắt đầu từ bờ sống xương vai ngang mức mỏm gai đốt sống ngực T3 chạy chếch lên trên – ra ngoài.",
        "Góc sau ngoài mỏm cùng vai (Posterolateral angle of acromion): Mấu xương nhô gập góc rõ rệt nơi bờ dưới gai vai nối tiếp bờ ngoài mỏm cùng vai.",
        "Mỏm quạ (Coracoid process) ở mặt trước: Tạo với điểm sau ngoài trục định hướng trước – sau của khe khớp ổ chảo.",
        "Điểm mềm nội khớp vai sau (Posterior arthroscopic/injection soft spot): Hõm cơ mềm nằm thấp hơn góc sau ngoài mỏm cùng vai 2.0 cm và lệch vào phía trong 1.0 – 1.5 cm."
      ],
      "surfaceProjections": "Trên mặt da vùng vai sau, khe khớp ổ chảo – cánh tay sau chiếu thành một đường cong đứng dọc hơi lõm vào trong nằm cách góc sau ngoài mỏm cùng vai ~2 cm về phía trong dưới. Bờ ổ chảo không hướng thẳng ra ngoài mà nghiêng ra trước ~30° so với mặt phẳng trán của cơ thể (góc nghiêng xương bả vai – Scapular plane).",
      "palpationSteps": [
        "1. Cho bệnh nhân ngồi thẳng, vắt bàn tay bên đau đặt lên vai lành đối diện (khép ngang và xoay trong cánh tay giúp kéo căng mở rộng tối đa bao khớp sau).",
        "2. Dùng ngón cái tay không thuận sờ dọc bờ dưới gai vai ra ngoài tìm đúng góc gập vuông sau ngoài của mỏm cùng vai.",
        "3. Đặt ngón trỏ phía trước vào đỉnh mỏm quạ, ngón cái phía sau trượt từ góc sau ngoài mỏm cùng vai xuống dưới 2 cm và vào trong 1.5 cm: xoay nhẹ cánh tay bệnh nhân sẽ thấy chỏm xương cánh tay lăn dưới ngón cái còn ổ chảo đứng yên."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_upper_back_nerves_bones_gray1236.png",
          "figNumber": "Gray 1236",
          "title": "Giải phẫu bề mặt mặt sau vai và chi trên: Hình chiếu gai vai, mỏm cùng vai và thần kinh nách - quay (Gray's Plate 1236)",
          "desc": "Hình chiếu bề mặt gai vai, góc sau mỏm cùng vai, khe khớp vai sau và đường đi của thần kinh nách qua lỗ tứ giác ngay phía dưới cơ tròn bé.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1236) – Back of right upper extremity showing surface markings for bones and nerves."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy – Axial & Coronal Sectional Anatomy of Glenohumeral Joint; Netter's Cross-Sectional Anatomy",
      "sectionPlane": "Thiết đồ cắt ngang (Axial / Transverse Section) đi ngay dưới gai vai qua hố dưới gai, sụn viền ổ chảo sau và chỏm xương cánh tay.",
      "layeredStructure": [
        "Lớp 1 – Da và lớp mỡ dưới da vùng vai sau (dày ~5 – 15 mm tùy thể trạng): Chứa các nhánh bì từ ngành sau thần kinh ngực trên và nhánh bì cánh tay ngoài trên.",
        "Lớp 2 – Mạc cơ delta và Bó sau cơ delta (Posterior deltoid muscle): Phủ phần ngoài của thiết đồ, mỏng dần khi tiến vào phía trong hố dưới gai.",
        "Lớp 3 – Mạc dưới gai dày chắc và Bụng cơ / Gân cơ dưới gai (Infraspinatus muscle & tendon; ở bờ dưới hơn là cơ tròn bé Teres minor).",
        "Lớp 4 – Bao xơ khớp ổ chảo – cánh tay sau (Posterior fibrous capsule – mỏng nhất trong các thành bao khớp) và màng hoạt dịch lót trong.",
        "Lớp 5 – KHOANG ĐÍCH: Ngách sau ổ khớp ổ chảo – cánh tay (Posterior glenohumeral joint recess) nằm ngay khoảng tam giác giữa bờ tự do sụn viền sau (Posterior glenoid labrum) và lớp sụn hyalin chỏm xương cánh tay.",
        "Lớp 6 (Đáy thiết đồ) – Vỏ xương chỏm cánh tay (phía ngoài) và cổ xương vai / bờ sau ổ chảo (phía trong)."
      ],
      "topographicRelations": {
        "superficialAndDeep": "Phía nông là bó sau cơ delta và gân cơ dưới gai; phía sâu là sụn chỏm xương cánh tay, sụn viền sau và diện khớp ổ chảo.",
        "medialAndLateral": "Cách bờ sau ổ chảo 1.5 – 2.0 cm về phía TRONG là khuyết quạ – gai vai (Spinoglenoid notch) chứa bó mạch và thần kinh trên vai (nhánh dưới gai); phía DƯỚI cơ tròn bé ~2 – 3 cm là lỗ tứ giác Velpeau chứa thần kinh nách và động mạch mũ cánh tay sau."
      },
      "dangerCorridors": [
        "Hành lang cấm phía trong: Tuyệt đối không đặt điểm chọc hoặc hướng kim lệch vào trong cổ ổ chảo (vào khuyết quạ – gai vai) để tránh chọc trúng động mạch và thần kinh trên vai.",
        "Hành lang bảo vệ sụn viền: Đi kim chếch từ ngoài vào trong tiếp tuyến với độ cong chỏm xương cánh tay để lách vào khe giữa sụn chỏm và mặt khớp sụn viền, tránh đâm xuyên qua nền tam giác sụn viền sau."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_shoulder_coronal_dbcls.png",
          "figNumber": "Joint Sec.",
          "title": "Thiết đồ cắt lớp bao khớp ổ chảo - cánh tay, sụn viền ổ chảo và các ngách hoạt dịch (DBCLS Atlas)",
          "desc": "Mối liên quan giải phẫu thiết đồ giữa khoang bao khớp ổ chảo - cánh tay (xanh nhạt), sụn viền bám rìa ổ chảo và lớp cơ chóp xoay phủ ngoài.",
          "atlasSource": "DBCLS Anatomical Atlas (CC-BY 4.0) – Sectional anatomy of glenohumeral joint cavity and labrum."
        },
        {
          "path": "assets/images/external_anatomy/ext_sec_scapula_suprascapular_gray412.png",
          "figNumber": "Gray 412",
          "title": "Giải phẫu phân lớp cơ dưới gai, cơ tròn bé và lỗ tứ giác thần kinh nách mặt sau vai (Gray's Plate 412)",
          "desc": "Tương quan mặt sau khớp vai giữa cơ dưới gai (phủ trực tiếp bao khớp sau), cơ tròn bé và các lỗ tam giác - tứ giác chứa mạch thần kinh bên dưới.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 412) – Dorsal muscles of the scapula and posterior shoulder spaces."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed.) – Surface Markings of Upper Arm; Moore's Clinically Oriented Anatomy",
      "surfaceLandmarks": [
        "Bờ trước mỏm cùng vai (Anterior margin of acromion) ở phía trên.",
        "Củ bé xương cánh tay (Lesser tubercle – thành trong rãnh gian củ) và Củ lớn xương cánh tay (Greater tubercle – thành ngoài rãnh gian củ).",
        "Rãnh gian củ / Rãnh nhị đầu (Intertubercular / Bicipital sulcus): Nằm ở chính diện mặt trước chỏm xương cánh tay khi cẳng tay xoay ngoài nhẹ 10° – 15°.",
        "Bụng cơ nhị đầu cánh tay ở mặt trước 1/3 giữa cánh tay (làm mốc dóng trục gân ngược lên trên)."
      ],
      "surfaceProjections": "Khi bệnh nhân để cánh tay xuôi dọc thân mình với lòng bàn tay hướng ra trước nhẹ (xoay ngoài ~10°), rãnh nhị đầu chứa gân đầu dài cơ nhị đầu (LHBT) chiếu thẳng thành một đường dọc dài ~4 – 5 cm ngay chính giữa mặt trước vai, bắt đầu từ điểm cách bờ trước mỏm cùng vai 2.5 cm đi thẳng xuống dọc bờ ngoài rãnh delta – ngực.",
      "palpationSteps": [
        "1. Bệnh nhân ngồi thẳng, khuỷu gấp 90°, cẳng tay để ngửa trung tính hoặc xoay ngoài 10° – 15°.",
        "2. Đặt 2 đầu ngón tay (trỏ và giữa) ấn vừa phải cách dưới bờ trước mỏm cùng vai 3 cm ngay chính diện mặt trước đầu trên xương cánh tay.",
        "3. Tay kia xoay trong – xoay ngoài thụ động cẳng tay qua lại góc 20°: cảm nhận rõ rãnh xương hình máng cùng thớ gân tròn lăn dưới đầu ngón tay và nghiệm pháp ấn đau Speed / Yergason khu trú."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_upper_front_nerves_arteries_gray1235.png",
          "figNumber": "Gray 1235",
          "title": "Hình chiếu bề mặt rãnh nhị đầu, chỏm xương cánh tay và bó mạch cánh tay mặt trước (Gray's Plate 1235)",
          "desc": "Đường chiếu bề mặt trục dọc đầu trên xương cánh tay và cơ nhị đầu so với tĩnh mạch đầu và động mạch nách - cánh tay ở bờ trong.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1235) – Surface markings of anterior shoulder and arm."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy – Cross-Sectional Anatomy of Proximal Humerus & Bicipital Groove",
      "sectionPlane": "Thiết đồ cắt ngang (Axial / Transverse Section) vuông góc trục đầu trên xương cánh tay ngang qua rãnh gian củ (giữa củ lớn và củ bé).",
      "layeredStructure": [
        "Lớp 1 – Da và mô mỡ dưới da mặt trước vai (tĩnh mạch đầu chạy chếch ở góc trước trong của thiết đồ trong rãnh delta – ngực).",
        "Lớp 2 – Bó trước cơ delta (Anterior deltoid muscle) và lá mạc sâu dưới cơ delta (kèm túi cùng trước của bao hoạt dịch SASD ở phần cao).",
        "Lớp 3 – Mái hầm rãnh nhị đầu: Dây chằng ngang cánh tay (Transverse humeral ligament) hòa cùng trẽ sợi mở rộng của gân cơ dưới vai (và ở đoạn thấp hơn là trẽ gân cơ ngực lớn ở mép ngoài).",
        "Lớp 4 – KHOANG ĐÍCH: Bao hoạt dịch gân đầu dài cơ nhị đầu (Synovial tendon sheath – túi cùng kéo dài từ bao hoạt dịch khớp vai bọc quanh gân rồi quặt ngược đóng kín cách rãnh 2 – 3 cm về phía xa).",
        "Lớp 5 – Lõi gân đầu dài cơ nhị đầu (LHBT – thiết đồ hình bầu dục dẹt kích thước ~4.5 × 2.5 mm) VÀ nhánh lên của động mạch mũ cánh tay trước nằm sát bờ ngoài gân.",
        "Lớp 6 (Đáy thiết đồ) – Sàn xương rãnh gian củ (sâu ~4 – 5 mm, góc thành trong củ bé tạo góc ~56° giữ gân không trật vào trong)."
      ],
      "topographicRelations": {
        "superficialAndDeep": "Phía nông là cơ delta trước và mái dây chằng ngang cánh tay; phía sâu là sàn vỏ xương rãnh gian củ.",
        "medialAndLateral": "Thành TRONG là củ bé có gân cơ dưới vai bám (nếu rách dây chằng quạ – cánh tay / gân dưới vai, gân LHBT sẽ trật vào trong lên trên hoặc dưới gân dưới vai!); thành NGOÀI là củ lớn VÀ nhánh lên động mạch mũ cánh tay trước (Ascending branch of anterior circumflex humeral artery) luôn chạy dọc góc ngoài rãnh!"
      },
      "dangerCorridors": [
        "Góc ngoài rãnh gian củ chứa nhánh lên động mạch mũ cánh tay trước: Luôn đi kim từ ngoài vào trong vượt qua trên gân tới NGÁCH BỜ TRONG (Medial recess of sheath) hoặc bật Doppler màu tránh góc ngoài.",
        "Tuyệt đối không đâm vào Lớp 5 (nhu mô gân LHBT) gây thoái hóa đứt gân nhị đầu."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_shoulder_capsule_gray327.png",
          "figNumber": "Gray 327",
          "title": "Thiết đồ bao hoạt dịch khớp vai kéo dài bọc quanh gân đầu dài cơ nhị đầu trong rãnh gian củ (Gray's Plate 327)",
          "desc": "Minh họa trực quan túi hoạt dịch bao quanh gân đầu dài nhị đầu trong rãnh xương gian củ là phần nối thông trực tiếp từ ổ khớp vai.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 327) – Synovial prolongation around the tendon of Biceps brachii."
        },
        {
          "path": "assets/images/external_anatomy/ext_sec_arm_cross_section_gray413.png",
          "figNumber": "Gray 413",
          "title": "Thiết đồ cắt ngang cánh tay đối chiếu cơ nhị đầu, tĩnh mạch đầu và bó mạch thần kinh trong (Gray's Plate 413)",
          "desc": "Tương quan cắt lớp giữa cơ nhị đầu phía trước, tĩnh mạch đầu ở rãnh ngoài và toàn bộ bó mạch cánh tay - thần kinh giữa/trụ nằm tách biệt ở vách gian cơ trong.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 413) – Cross-section through the arm."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed.) – Surface Markings of Clavicle & Acromion; Moore's Clinically Oriented Anatomy",
      "surfaceLandmarks": [
        "Đầu ngoài xương đòn (Acromial end of clavicle): Tạo một gờ xương nổi bậc thang cao hơn mặt trên mỏm cùng vai ngay dưới da đỉnh vai.",
        "Bờ trong mỏm cùng vai (Medial articular margin of acromion): Nằm ngay sát phía ngoài bậc thang đầu ngoài xương đòn.",
        "Góc chữ V cùng – đòn phía sau (Acromioclavicular V-angle / Neviaser portal landmark): Nơi bờ sau xương đòn gặp bờ trước gai vai."
      ],
      "surfaceProjections": "Khe khớp cùng vai – đòn chiếu lên mặt trên vai thành một vạch thẳng chạy theo hướng trước – sau nhưng hơi nghiêng chếch từ trước ngoài vào sau trong (~15° – 20°), nằm cách bờ ngoài mỏm cùng vai khoảng 2.5 – 3.0 cm về phía trong.",
      "palpationSteps": [
        "1. Bệnh nhân ngồi thẳng thả xuôi cánh tay tự nhiên (trọng lực tay kéo nhẹ mỏm cùng vai xuống giúp bậc thang khớp AC nổi rõ hơn).",
        "2. Dùng đầu ngón trỏ miết dọc bờ trước – mặt trên xương đòn từ trong ra ngoài cho tới khi qua gờ nhô đầu ngoài xương đòn tụt xuống rãnh hẹp.",
        "3. Kết hợp nghiệm pháp khép ngang cánh tay tối đa qua trước ngực (Scarf / Cross-arm test) để xác nhận đúng khe khớp gây đau."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_upper_front_topography_gray1231.png",
          "figNumber": "Gray 1231",
          "title": "Giải phẫu bề mặt lồi đầu ngoài xương đòn và bậc thang khớp cùng vai - đòn (Gray's Plate 1231)",
          "desc": "Hình thái bậc thang giải phẫu bề mặt giữa đầu ngoài xương đòn và mỏm cùng vai trên đỉnh vai.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1231) – Surface anatomy of clavicular-acromial prominence."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy – Coronal Section of Acromioclavicular Articulation",
      "sectionPlane": "Thiết đồ đứng ngang (Coronal Section) đi dọc theo trục đầu ngoài xương đòn qua khe khớp cùng vai – đòn và khoang dưới mỏm cùng vai.",
      "layeredStructure": [
        "Lớp 1 – Da và lớp mô dưới da rất mỏng trên đỉnh vai (chỉ dày ~2 – 5 mm, chứa các nhánh thần kinh trên đòn ngoài C4).",
        "Lớp 2 – Cân đan chéo dày chắc (Aponeurotic expansion) hợp bởi thớ bám của cơ thang (phía sau trên) và cơ delta (phía trước ngoài).",
        "Lớp 3 – Dây chằng cùng – đòn trên (Superior acromioclavicular ligament) dày khỏe che kín trần bao khớp (kèm nhánh mạch nhỏ từ động mạch ngực – cùng vai).",
        "Lớp 4 – KHOANG ĐÍCH: Khe khớp hoạt dịch cùng vai – đòn (rộng 2 – 4 mm, nghiêng vát chéo từ trên ngoài xuống dưới trong!) chứa sụn sợi diện khớp và một đĩa sụn chêm hình chêm không hoàn toàn (Articular disc / Meniscoid).",
        "Lớp 5 (Đáy thiết đồ) – Dây chằng cùng – đòn dưới rất mỏng ngăn cách khe khớp với lớp mỡ dưới mỏm cùng vai, bao hoạt dịch SASD và bụng cơ – gân trên gai ngay sát bên dưới!"
      ],
      "topographicRelations": {
        "superficialAndDeep": "Phía nông nằm ngay sát dưới da – cân cơ thang/delta (độ sâu từ da tới tâm khớp chỉ ~8 – 12 mm); phía sâu tiếp giáp trực tiếp với túi hoạt dịch SASD và chỗ nối cơ – gân trên gai (khi rách bao dưới + chóp xoay sẽ thông dịch từ ổ khớp vai vọt lên thành nang Geyser trên khớp AC!).",
        "medialAndLateral": "Phía trong là đầu ngoài xương đòn và cách vào trong ~1.5 – 2 cm dưới xương đòn là dây chằng quạ – đòn (nón & thang); phía ngoài là bản xương mỏm cùng vai."
      },
      "dangerCorridors": [
        "Độ sâu quá mức (> 15 mm): Xuyên thủng sàn dây chằng cùng – đòn dưới đi thẳng vào cơ/gân trên gai bên dưới.",
        "Do khoang khớp cực hẹp (dung tích sinh lý 0.5 – 1.0 ml), bơm quá thể tích gây căng rách bao khớp trên và trào steroid ra lớp dưới da mỏng gây teo lõm mất sắc tố da đỉnh vai."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_ac_scapula_ligaments_gray326.png",
          "figNumber": "Gray 326",
          "title": "Giải phẫu khớp cùng vai - đòn, dây chằng quạ - đòn và trần vòm quạ - cùng vai (Gray's Plate 326)",
          "desc": "Cấu trúc bao dây chằng khớp cùng vai - đòn, dây chằng nón - thang, dây chằng ngang vai trên và khoảng dưới mỏm cùng vai ngay mặt dưới khớp.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 326) – Acromioclavicular joint and proper ligaments of the scapula."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed.) – Scapular Region Surface Markings; Wertheim & Rovenstine / Harmon Landmarks",
      "surfaceLandmarks": [
        "Gai vai (Spine of scapula): Kéo dài từ bờ trong xương vai (ngang mỏm gai T3) tới góc mỏm cùng vai.",
        "Góc trên xương vai (Superior angle of scapula – ngang mức T2) và bờ sau xương đòn ở phía trước.",
        "Hố trên gai (Supraspinous fossa): Vùng lõm hình tam giác nằm ngay phía trên gai vai và phía sau xương đòn."
      ],
      "surfaceProjections": "Đường định hướng kinh điển Wertheim – Rovenstine: Kẻ đường thẳng dọc theo toàn bộ gai vai (đường A) và đường thẳng đứng từ góc dưới xương vai đi lên chia đôi gai vai (đường B); tia phân giác góc phần tư trên – ngoài cách giao điểm ~2.0 – 2.5 cm chiếu đúng vào đáy hố trên gai sát khuyết trên vai, trong khi khuyết quạ – gai vai (Spinoglenoid notch) chiếu ngay tại chỗ nối 1/3 ngoài và 2/3 trong bờ trên gai vai.",
      "palpationSteps": [
        "1. Bệnh nhân ngồi thẳng, vắt bàn tay bên bệnh nắm lấy vai đối diện để kéo xương bả vai xoay ngoài và mở rộng hố trên gai.",
        "2. Sờ xác định toàn bộ chiều dài gai vai từ đầu trong (T3) ra tới mỏm cùng vai và đánh dấu điểm chia giữa / 1/3 ngoài gai vai.",
        "3. Ấn sâu nhẹ ngay phía trên bờ trên gai vai 1.5 cm tại vùng 1/3 ngoài – giữa để xác định cửa sổ đặt đầu dò trên khối cơ thang."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_back_spine_scapula_gray1211.png",
          "figNumber": "Gray 1211",
          "title": "Giải phẫu bề mặt vùng lưng - vai: Mốc gai vai, cơ thang và xương bả vai (Gray's Plate 1211)",
          "desc": "Các mốc bề mặt chuẩn của vùng bả vai sau gồm gai vai (Spine of scapula), cơ thang (Trapezius), góc dưới xương vai và khối cơ delta.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1211) – Surface anatomy of the back and scapular landmarks."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy – Supraspinous Fossa & Scapular Notch Sectional Anatomy; Ellis Sectional Anatomy",
      "sectionPlane": "Thiết đồ đứng ngang hơi nghiêng trước (Oblique Coronal Section) cắt song song ngay phía trên gai vai dọc theo sàn xương hố trên gai.",
      "layeredStructure": [
        "Lớp 1 – Da và mô mỡ dưới da vùng vai trên sau (dày ~6 – 15 mm).",
        "Lớp 2 – Bó ngang – trên của Cơ thang (Trapezius muscle, dày ~8 – 12 mm) và lá mạc dưới cơ thang (nơi thần kinh phụ CN XI chạy ở phần trong gần góc trên xương vai!).",
        "Lớp 3 – Mạc trên gai (Supraspinatus fascia – cân căng chắc đậy kín hố trên gai) và Bụng cơ trên gai (Supraspinatus muscle belly, dày ~15 – 22 mm).",
        "Lớp 4 – Dây chằng ngang vai trên (Superior transverse scapular ligament – tại khuyết trên vai) hoặc mạc sâu phủ sàn hố trên gai (dây chằng quạ – gai vai dưới ở phía ngoài).",
        "Lớp 5 – KHOANG ĐÍCH: Ngăn sâu dưới mạc cơ trên gai sát mặt xương đáy hố trên gai / khuyết trên vai, chứa THẦN KINH TRÊN VAI (C5–C6) đi cùng động mạch và tĩnh mạch trên vai.",
        "Lớp 6 (Đáy thiết đồ) – Bản xương lõm hình thuyền của sàn hố trên gai (Supraspinous fossa floor – tấm chắn xương bảo vệ an toàn ngăn cách với đỉnh màng phổi nằm ở phía trước xương vai!)."
      ],
      "topographicRelations": {
        "superficialAndDeep": "Tại khuyết trên vai: Động mạch trên vai đi PHÍA TRÊN dây chằng ngang vai trên, còn thần kinh trên vai chui PHÍA DƯỚI dây chằng ('Army over Navy'); nhưng khi đã vào trong sàn hố trên gai (sau khuyết 1 cm), cả động mạch và thần kinh đều nằm sát nhau ngay trên màng xương dưới bụng cơ trên gai!",
        "medialAndLateral": "Phía TRƯỚC khuyết trên vai (nếu trượt kim vọt qua bờ trước xương vai) chỉ cách ĐỈNH MÀNG PHỔI (Cupula pleurae) khoảng 1 – 1.5 cm; phía NGOÀI hố trên gai dẫn ra khuyết quạ – gai vai vòng xuống hố dưới gai."
      },
      "dangerCorridors": [
        "Hành lang nguy hiểm màng phổi: Tuyệt đối KHÔNG chọc kim vuông góc từ sau ra trước qua khuyết trên vai không có xương đỡ; bắt buộc giữ chùm tia trên sàn xương hố trên gai và đi kim In-plane từ trong ra ngoài có đáy xương hố trên gai làm tấm chắn.",
        "Bật Color Doppler tại đáy hố trên gai để nhận diện động mạch trên vai trước khi bơm thuốc."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_scapula_suprascapular_gray412.png",
          "figNumber": "Gray 412",
          "title": "Giải phẫu phân lớp hố trên gai, khuyết trên vai và cơ vùng bả vai sau khi bóc tách cơ thang (Gray's Plate 412)",
          "desc": "Cấu trúc hố trên gai chứa cơ trên gai dưới cơ thang, liên quan gai vai, mỏm cùng vai và đường đi thần kinh - mạch máu vùng vai sau.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 412) – Deep dissection of dorsal scapular fossae and muscles."
        },
        {
          "path": "assets/images/external_anatomy/ext_sec_ac_scapula_ligaments_gray326.png",
          "figNumber": "Gray 326",
          "title": "Giải phẫu khuyết trên vai và dây chằng ngang vai trên tạo lỗ thần kinh trên vai (Gray's Plate 326)",
          "desc": "Chi tiết dây chằng ngang vai trên (Superior transverse scapular ligament) bắc ngang khuyết trên vai chuyển khuyết thành lỗ xương - xơ cho thần kinh đi qua.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 326) – Suprascapular notch and superior transverse scapular ligament."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed.) – Elbow Surface Markings (Hueter's Line); Moore's Clinically Oriented Anatomy",
      "surfaceLandmarks": [
        "Mỏm trên lồi cầu ngoài xương cánh tay (Lateral epicondyle): Mấu xương nhô ở mặt ngoài đầu dưới xương cánh tay.",
        "Chỏm xương quay (Head of radius): Sờ thấy trong hõm lõm da nhỏ ở mặt sau ngoài khuỷu cách lồi cầu ngoài ~1.5 – 2.0 cm về phía xa.",
        "Gờ trên lồi cầu ngoài (Lateral supracondylar ridge): Bờ xương sắc chạy từ lồi cầu ngoài ngược lên thân xương cánh tay (nơi bám cơ cánh tay quay và ECRL).",
        "Đỉnh mỏm khuỷu (Olecranon) ở phía sau."
      ],
      "surfaceProjections": "Đường Hueter và Tam giác Hueter khuỷu: Khi khuỷu duỗi thẳng 180°, lồi cầu ngoài – đỉnh mỏm khuỷu – lồi cầu trong nằm trên một đường ngang (đường Hueter); khi khuỷu gấp 90°, ba mốc tạo thành một tam giác cân. Gân duỗi chung (đặc biệt ECRB) chiếu lên một vùng hình chữ nhật rộng ~1.5 × 2.5 cm chạy từ mặt trước dưới mỏm trên lồi cầu ngoài thẳng tới chỏm xương quay; trong khi thần kinh gian cốt sau (PIN) chui vào cung Frohse cơ ngửa ở điểm cách chỏm quay ~3 – 4 cm về phía xa.",
      "palpationSteps": [
        "1. Bệnh nhân ngồi đặt cẳng tay trên bàn, khuỷu gấp 90°, cẳng tay sấp nhẹ.",
        "2. Dùng ngón cái sờ từ gờ trên lồi cầu ngoài xuống đỉnh mỏm trên lồi cầu ngoài và ấn vào mặt dốc phía trước – xa của mỏm này (tâm điểm đau ECRB khi duỗi cổ tay có đối kháng).",
        "3. Đặt ngón trỏ dịch xuống xa 2 cm đồng thời sấp – ngửa cẳng tay để cảm nhận chỏm xương quay xoay tròn và định vị khe khớp cánh tay – quay nằm ngay giữa hai ngón tay."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_upper_back_nerves_bones_gray1236.png",
          "figNumber": "Gray 1236",
          "title": "Giải phẫu bề mặt mặt ngoài - sau khuỷu tay: Lồi cầu ngoài, chỏm quay và đường chiếu thần kinh quay - gian cốt sau (Gray's Plate 1236)",
          "desc": "Hình chiếu bề mặt mỏm trên lồi cầu ngoài, chỏm xương quay và vị trí thần kinh quay chia nhánh gian cốt sau đi vòng qua cổ xương quay.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1236) – Surface markings of bones and radial/posterior interosseous nerve at the elbow."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy – Coronal & Transverse Sectional Anatomy of Lateral Elbow & Proximal Forearm",
      "sectionPlane": "Thiết đồ đứng ngang dọc (Coronal Longitudinal Section) đi qua mỏm trên lồi cầu ngoài, chỏm con xương cánh tay và chỏm – cổ xương quay.",
      "layeredStructure": [
        "Lớp 1 – Da và lớp mỡ dưới da vùng khuỷu ngoài rất mỏng (dày chỉ ~2 – 4 mm; chứa nhánh thần kinh bì cẳng tay sau từ thần kinh quay).",
        "Lớp 2 – Mạc sâu cẳng tay ngoài (Antebrachial fascia) hòa chặt vào mặt nông khối cơ duỗi.",
        "Lớp 3 – Lớp nông gân duỗi chung: Gân cơ duỗi chung các ngón (Extensor digitorum communis - EDC) ở nông và cơ duỗi cổ tay quay dài (ECRL – nguyên ủy cơ từ gờ trên lồi cầu ngoài che phủ phía trước trên).",
        "Lớp 4 – KHOANG ĐÍCH: Lớp sâu gân duỗi chung – Gân cơ duỗi cổ tay quay ngắn (Extensor carpi radialis brevis - ECRB) có diện bám hình thoi áp trực tiếp vào sườn trước ngoài mỏm trên lồi cầu ngoài.",
        "Lớp 5 – Hệ thống dây chằng giữ vững khuỷu ngoài: Dây chằng bên quay (Radial collateral ligament - RCL), dây chằng bên trụ ngoài (LUCL) và dây chằng vòng quay (Annular ligament ôm chỏm quay) nằm áp sát ngay mặt sâu của gân ECRB!",
        "Lớp 6 (Đáy thiết đồ) – Màng hoạt dịch, khe khớp quay – lồi cầu con (Radiocapitellar joint), sụn chỏm con (Capitellum) và vành sụn chỏm xương quay."
      ],
      "topographicRelations": {
        "superficialAndDeep": "Gân ECRB (Lớp 4) không thể tách rời bằng mắt thường khỏi dây chằng bên quay RCL (Lớp 5) nằm sát mặt khớp bên dưới (tổng độ dày phức hợp gân + dây chằng chỉ ~4 – 6 mm).",
        "medialAndLateral": "Phía gần (trên) là gờ trên lồi cầu ngoài nơi thần kinh quay đi giữa cơ cánh tay và cơ cánh tay quay; phía xa dưới cổ xương quay 3 – 4 cm là cung xơ Frohse của cơ ngửa chứa thần kinh gian cốt sau (PIN) và động mạch quặt ngược gian cốt."
      },
      "dangerCorridors": [
        "Bảo tồn Lớp 5 (Dây chằng RCL / LUCL): Tuyệt đối không châm kim sâu xuống nửa dưới sát khe khớp chỏm con – chỏm quay hoặc tiêm lặp lại Corticosteroid gây đứt/nhão LUCL dẫn tới mất vững xoay sau ngoài khuỷu tay (Posterolateral rotatory instability)!",
        "Không đâm kim vượt quá bờ xa chỏm xương quay xuống cổ quay tránh chạm nhánh vận động thần kinh gian cốt sau (PIN)."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_elbow_annular_section_gray333.png",
          "figNumber": "Gray 333",
          "title": "Thiết đồ cắt ngang qua đầu trên xương quay - trụ, dây chằng vòng quay và hõm quay (Gray's Plate 333)",
          "desc": "Cấu trúc cắt ngang vòng dây chằng ôm lấy chỏm xương quay nằm ngay sâu dưới gân duỗi chung và cơ ngửa.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 333) – Transverse view of annular ligament and proximal radioulnar joint."
        },
        {
          "path": "assets/images/external_anatomy/ext_sec_forearm_mid_gray417.png",
          "figNumber": "Gray 417",
          "title": "Thiết đồ cắt ngang cẳng tay phân định khu cơ duỗi ngoài (ECRL, ECRB, EDC) và mạch thần kinh (Gray's Plate 417)",
          "desc": "Tương quan thiết đồ các ngăn cơ duỗi quay ngắn, duỗi quay dài, duỗi chung các ngón so với xương quay và bó mạch thần kinh quay.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 417) – Cross-section through the forearm."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed.) – Medial Elbow & Cubital Tunnel Surface Markings; Moore's Clinically Oriented Anatomy",
      "surfaceLandmarks": [
        "Mỏm trên lồi cầu trong xương cánh tay (Medial epicondyle): Mấu xương lồi rất lớn và nhọn ở bờ trong khuỷu tay.",
        "Mỏm khuỷu xương trụ (Olecranon) ở phía sau ngoài so với lồi cầu trong.",
        "Rãnh thần kinh trụ / Ống khuỷu (Cubital / Retrocondylar groove): Rãnh xương lõm rõ rệt nằm giữa mặt sau mỏm trên lồi cầu trong và bờ trong mỏm khuỷu.",
        "Củ vẹt / Củ dưới lồi cầu của mỏm vẹt xương trụ (Sublime tubercle of coronoid process): Nằm cách đỉnh lồi cầu trong ~2 cm về phía xa hơi chếch ra sau."
      ],
      "surfaceProjections": "Khối gân gấp – sấp chung (Common flexor-pronator tendon) bám vào nửa trước – dưới của mỏm trên lồi cầu trong và tỏa hình nan quạt xuống mặt trước trong cẳng tay: bờ ngoài cùng là cơ sấp tròn (hướng chéo sang giữa xương quay), ở giữa là cơ gấp cổ tay quay FCR (hướng thẳng tới củ xương thuyền cổ tay), và bờ trong cùng là cơ gấp cổ tay trụ FCU (hướng thẳng tới xương đậu). Dây thần kinh trụ đi dọc ngay sát MẶT SAU mỏm trên lồi cầu trong rồi lách giữa hai đầu cơ FCU.",
      "palpationSteps": [
        "1. Bệnh nhân nằm ngửa hoặc ngồi, cánh tay dạng nhẹ xoay ngoài, cẳng tay ngửa hoàn toàn và khuỷu chỉ hơi gấp nhẹ 20° – 30° (TUYỆT ĐỐI tránh gấp khuỷu > 90° vì ở 16 – 20% người bình thường thần kinh trụ sẽ trượt bật qua đỉnh lồi cầu trong tràn sang mặt trước!).",
        "2. Sờ đỉnh mỏm trên lồi cầu trong và ấn điểm đau khu trú cách đỉnh 0.5 – 1.0 cm về phía trước – xa (khi gấp cổ tay và sấp cẳng tay có đối kháng).",
        "3. Đặt một ngón tay bảo vệ trong rãnh ròng rọc – khuỷu phía sau để xác nhận vị trí thừng thần kinh trụ trước khi đặt đầu dò."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_upper_front_nerves_arteries_gray1235.png",
          "figNumber": "Gray 1235",
          "title": "Giải phẫu bề mặt mặt trước trong khuỷu: Mỏm trên lồi cầu trong, động mạch cánh tay và thần kinh trụ - giữa (Gray's Plate 1235)",
          "desc": "Hình chiếu bề mặt lồi cầu trong, đường đi thần kinh trụ vòng sau lồi cầu trong, còn động mạch cánh tay và thần kinh giữa nằm ở hố trụ phía ngoài cơ sấp tròn.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1235) – Surface markings for bones, brachial artery, median and ulnar nerves."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy – Medial Elbow & Forearm Cross-Sectional Anatomy; Ellis Sectional Anatomy",
      "sectionPlane": "Thiết đồ đứng ngang trong (Medial Coronal Section) và Thiết đồ cắt ngang (Axial Section) qua mỏm trên lồi cầu trong – mỏm vẹt xương trụ.",
      "layeredStructure": [
        "Lớp 1 – Da và mô mỡ dưới da vùng khuỷu trong (chứa tĩnh mạch nền Basilic vein và các nhánh của thần kinh bì cẳng tay trong – Medial antebrachial cutaneous nerve chạy ngay trên mạc nông, rất dễ bị tổn thương nếu chọc mù!).",
        "Lớp 2 – Mạc sâu cẳng tay trong và cân cơ nhị đầu (Bicipital aponeurosis / Lacertus fibrosus) tỏa che phía trước.",
        "Lớp 3 – KHOANG ĐÍCH: Gân gấp – sấp chung (Common flexor tendon, dày ~4 – 6 mm) hợp nguyên ủy của cơ sấp tròn, FCR, gan tay dài, FDS và đầu cánh tay của FCU bám vào mặt trước dưới mỏm trên lồi cầu trong.",
        "Lớp 4 – Bó trước dây chằng bên trụ (Anterior bundle of Ulnar Collateral Ligament - UCL): Chạy căng từ mặt dưới mỏm trên lồi cầu trong tới củ vẹt xương trụ ngay sát mặt sâu của gân gấp chung (chốt giữ vững chính chống vẹo ngoài Valgus khuỷu!).",
        "Lớp 5 (Đáy thiết đồ) – Bao khớp trong và khe khớp cánh tay – trụ (ròng rọc – khuyết ròng rọc)."
      ],
      "topographicRelations": {
        "superficialAndDeep": "Phía nông là tĩnh mạch nền và thần kinh bì cẳng tay trong trong lớp mỡ dưới da; phía sâu ngay dưới gân gấp chung là bó trước dây chằng bên trụ (UCL) và khe khớp ròng rọc.",
        "medialAndLateral": "Ngay sát PHÍA SAU mỏm trên lồi cầu trong (< 5 mm) là ống khuỷu (mái là dây chằng Osborne) chứa DÂY THẦN KINH TRỤ và động mạch bên trụ trên; cách ~2.5 – 3 cm về PHÍA NGOÀI (bờ quay cơ sấp tròn tại hố trụ) là thần kinh giữa (chui giữa hai đầu cơ sấp tròn) và động mạch cánh tay!"
      },
      "dangerCorridors": [
        "Cửa sổ cấm phía sau: Luôn kiểm tra trên thiết đồ cắt ngang trước khi đâm kim để loại trừ bán trật thần kinh trụ ra mặt trước lồi cầu trong; luôn đi kim ở sườn trước mỏm trên lồi cầu trong, không bao giờ xuyên ra sau.",
        "Bảo tồn Lớp 4 (bó trước dây chằng bên trụ UCL) ở mặt sâu."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_arm_cross_section_gray413.png",
          "figNumber": "Gray 413",
          "title": "Thiết đồ cắt ngang 1/3 dưới cánh tay trên khuỷu: Vách gian cơ trong, thần kinh trụ, thần kinh giữa và động mạch cánh tay (Gray's Plate 413)",
          "desc": "Trên thiết đồ ngang, thần kinh trụ kèm động mạch bên trụ trên đã chuyển ra sau vách gian cơ trong tiến vào rãnh sau lồi cầu trong.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 413) – Cross-section showing medial neurovascular compartments."
        },
        {
          "path": "assets/images/external_anatomy/ext_sec_forearm_mid_gray417.png",
          "figNumber": "Gray 417",
          "title": "Thiết đồ cắt ngang cẳng tay qua nhóm cơ gấp - sấp (Sấp tròn, FCR, Gan tay dài, FDS, FCU) và bó mạch trụ (Gray's Plate 417)",
          "desc": "Cấu trúc phân tầng từ nông vào sâu của 5 cơ xuất phát từ gân gấp chung và vị trí thần kinh trụ nằm dưới cơ gấp cổ tay trụ (FCU).",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 417) – Cross-section of flexor-pronator compartment."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed.) – Wrist Creases, Carpal Tunnel & Kaplan's Cardinal Line; Moore's Clinically Oriented Anatomy",
      "surfaceLandmarks": [
        "Nếp gấp cổ tay xa (Distal wrist flexion crease): Đánh dấu chính xác bờ gần (cửa vào – Proximal inlet) của mạc giữ gân gấp (TCL).",
        "Xương đậu (Pisiform): Nút xương tròn nổi rõ ở đầu bờ trụ của nếp gấp cổ tay xa (ngay chỗ bám gân FCU).",
        "Củ xương thuyền (Tubercle of scaphoid): Gồ xương cứng ở đầu bờ quay của nếp gấp cổ tay xa (ngay điểm gân FCR chui sâu xuống).",
        "Móc xương móc (Hook of hamate – nằm cách xương đậu ~1.5 cm chếch xuống xa và sang phía quay 45° theo hướng ngón nhẫn) và Củ xương thang (ở nền mô cái).",
        "Gân cơ gan tay dài (Palmaris longus - PL, vắng mặt ở ~14% người) và Gân gấp cổ tay quay (FCR)."
      ],
      "surfaceProjections": "Ống cổ tay chiếu lên mặt gan bàn tay thành một hình chữ nhật dài ~2.5 – 3.0 cm từ nếp gấp cổ tay xa đi xuống tới đường chuẩn Kaplan (Kaplan's cardinal line – kẻ từ đỉnh kẽ ngón cái – trỏ ngang song song nếp gan tay gần sang bờ trụ). Dây thần kinh giữa chiếu dọc ngay sát bờ quay của gân gan tay dài (giữa gân PL và FCR); nhánh vận động quặt ngược mô cái (Recurrent motor branch) tách ra gần giao điểm đường dọc khe ngón nhẫn/giữa với đường Kaplan; còn động mạch trụ và thần kinh trụ nằm ngay sát BỜ QUAY của xương đậu trong kênh Guyon.",
      "palpationSteps": [
        "1. Đặt ngửa bàn tay bệnh nhân trên gối đệm nhỏ dưới cổ tay (duỗi nhẹ cổ tay 15° – 20°).",
        "2. Yêu cầu bệnh nhân chụm đầu ngón cái vào đầu ngón út và gấp nhẹ cổ tay để gân PL (nằm chính giữa) và gân FCR (nằm phía quay) nổi rõ; khe hẹp giữa hai gân này tại nếp cổ tay xa chính là vị trí thần kinh giữa.",
        "3. Sờ rõ mấu xương đậu ở bờ trụ nếp cổ tay xa và bắt mạch đập của động mạch trụ nằm ngay sát phía ngoài xương đậu."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_wrist_flexor_sheaths_gray1233.png",
          "figNumber": "Gray 1233",
          "title": "Giải phẫu bề mặt cổ tay - gan tay: Hình chiếu mạc giữ gân gấp, bao hoạt dịch gân gấp và nếp da (Gray's Plate 1233)",
          "desc": "Đối chiếu bề mặt cửa vào - cửa ra của mạc giữ gân gấp (dây chằng ngang cổ tay), bao hoạt dịch trụ, bao hoạt dịch quay (FPL) và các nếp gấp cổ - bàn tay.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1233) – Surface markings of flexor retinaculum and mucous sheaths on the front of wrist and digits."
        },
        {
          "path": "assets/images/external_anatomy/ext_surf_palm_creases_arches_gray1237.png",
          "figNumber": "Gray 1237",
          "title": "Giải phẫu bề mặt lòng bàn tay: Đối chiếu nếp da, xương cổ tay và cung động mạch gan tay nông - sâu (Gray's Plate 1237)",
          "desc": "Mốc xương đậu, móc xương móc, củ xương thuyền và giới hạn xa của ống cổ tay trước cung động mạch gan tay nông.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1237) – Palm of hand showing skin creases, bones, and surface markings for volar arches."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy – Transverse Section of Carpal Tunnel & Guyon's Canal",
      "sectionPlane": "Thiết đồ cắt ngang (Axial / Transverse Cross-Section) đi ngang qua cửa vào ống cổ tay (mức xương thuyền – xương đậu) và đoạn xa (mức xương thang – xương thê – xương cả – xương móc).",
      "layeredStructure": [
        "Lớp 1 – Da mặt gan cổ tay và lớp mỡ dưới da mỏng: Chứa NHÁNH BÌ GAN TAY của thần kinh giữa (Palmar cutaneous branch – đi nông TRÊN mạc giữ gân gấp trong rãnh giữa FCR và PL) và các nhánh bì gan tay của thần kinh trụ.",
        "Lớp 2 – Mạc nông gan cổ tay (Volar carpal ligament – tạo mái kênh Guyon ở phía trụ bọc lấy động mạch trụ và thần kinh trụ!) và gân cơ gan tay dài (PL) bám vào mặt nông trung tâm.",
        "Lớp 3 – Mái cứng ống cổ tay: Mạc giữ gân gấp / Dây chằng ngang cổ tay (Transverse carpal ligament / Flexor retinaculum, dày ~1.5 – 2.5 mm, căng từ xương đậu – móc xương móc sang củ xương thuyền – củ xương thang; ở bờ quay tách đôi thành đường hầm riêng cho gân FCR!).",
        "Lớp 4 – KHOANG ĐÍCH: Hàng nông trong ống cổ tay ngay dưới mạc giữ gân gấp gồm DÂY THẦN KINH GIỮA (nằm lệch phía trước – quay, hình bầu dục dẹt diện tích bình thường < 9 – 10 mm²) bọc bởi mô liên kết dưới bao hoạt dịch (SSCT), cạnh 4 gân gấp nông (FDS của ngón III, IV ở nông; ngón II, V ở sâu hơn) và gân gấp ngón cái dài (FPL ở cực quay nhất).",
        "Lớp 5 – Hàng sâu trong ống cổ tay: 4 gân gấp sâu các ngón (FDP II–V nằm xếp hàng ngang sát nhau trong bao hoạt dịch trụ).",
        "Lớp 6 (Đáy thiết đồ) – Dây chằng cổ tay gan tay phủ trên vòm lõm của các xương cổ tay (Xương thuyền/thang -> Nguyệt/thê -> Cả -> Tháp/móc)."
      ],
      "topographicRelations": {
        "superficialAndDeep": "Thần kinh giữa nằm ngay sát mặt sâu mạc giữ gân gấp (Lớp 3), đè lên mặt trước của gân FDS ngón trỏ/ngón giữa và bờ trụ gân FPL.",
        "medialAndLateral": "Ở PHÍA TRỤ (ngoài ống cổ tay nhưng ngay trên đường đi kim bờ trụ!) là kênh Guyon chứa ĐỘNG MẠCH TRỤ (nằm phía quay hơn, chỉ cách bờ trụ thần kinh giữa ~8 – 12 mm!) và thần kinh trụ (nằm sát xương đậu); ở PHÍA QUAY ngoài vách sợi ống cổ tay là gân FCR và động mạch quay."
      },
      "dangerCorridors": [
        "Hành lang kênh Guyon khi đi kim In-plane từ bờ trụ: Kim phải luồn nông ngay dưới mạc giữ gân gấp hoặc lách an toàn dưới/trên động mạch trụ dưới quan sát trực tiếp Doppler màu, tuyệt đối không chọc mù qua bờ ngoài xương đậu!",
        "Kiểm tra biến thể thần kinh giữa đôi (Bifid median nerve) kèm động mạch giữa tồn lưu chạy kẹp ngay giữa hai bó thần kinh."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_carpal_tunnel_color.png",
          "figNumber": "Axial Sec.",
          "title": "Thiết đồ cắt ngang giải phẫu ống cổ tay, kênh Guyon và 6 ngăn gân duỗi (Classical Cross-Section)",
          "desc": "Thiết đồ ngang chuẩn màu chỉ rõ dây thần kinh giữa (vàng) nằm ngay dưới dây chằng ngang cổ tay, bó mạch thần kinh trụ (đỏ - vàng) ở phía trụ, gân FCR/FPL ở phía quay và vòm xương thang - thê - cả - móc ở sàn.",
          "atlasSource": "Wikimedia Classical Anatomical Atlas (after Gray's Plate 422) – Transverse cross-section across the wrist and carpal tunnel."
        },
        {
          "path": "assets/images/external_anatomy/ext_sec_distal_forearm_wrist_section_gray421.png",
          "figNumber": "Gray 421",
          "title": "Thiết đồ cắt ngang ngay cửa vào cổ tay qua đầu xa xương quay - trụ (Gray's Plate 421)",
          "desc": "Thiết đồ ngang ngay trước nếp cổ tay xa hiển thị tương quan của thần kinh giữa, gân gan tay dài, FCR, động mạch quay và bó mạch thần kinh trụ.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 421) – Transverse section across distal ends of radius and ulna."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed.) – Anatomical Snuffbox & Dorsal Wrist Compartments; Moore's Clinically Oriented Anatomy",
      "surfaceLandmarks": [
        "Mỏm trâm quay (Radial styloid process): Đỉnh xương nhọn ở bờ quay cổ tay (xuống thấp hơn mỏm trâm trụ khoảng 1.0 cm).",
        "Hố lào giải phẫu (Anatomical snuffbox / Tabatière anatomique): Hõm tam giác nổi rõ ở mặt ngoài cổ tay khi dạng và duỗi ngón cái hết cỡ.",
        "Bờ trước (bờ gan tay) của hố lào: Nổi rõ hai dải gân căng của ngăn duỗi số 1 là cơ dạng ngón cái dài (APL) và cơ duỗi ngón cái ngắn (EPB).",
        "Bờ sau (bờ mu tay) của hố lào: Gân cơ duỗi ngón cái dài (EPL – thuộc ngăn số 3 vòng qua củ Lister)."
      ],
      "surfaceProjections": "Bao hoạt dịch của ngăn gân duỗi số 1 bắt đầu từ phía trên mạc giữ gân duỗi ~2 – 3 cm, chạy dọc trong rãnh xương mặt ngoài đầu dưới xương quay (đoạn đường hầm xơ dài ~2 cm ngay trên mỏm trâm quay) và kéo dài xuống tới nền xương bàn tay 1. Tĩnh mạch đầu và nhánh nông thần kinh quay (Superficial radial nerve) vắt chéo ngay trên bề mặt nông của mái ngăn số 1.",
      "palpationSteps": [
        "1. Đặt bờ trụ bàn tay bệnh nhân tựa trên mặt bàn, ngón cái hướng thẳng lên trên (tư thế trung tính nửa sấp).",
        "2. Yêu cầu bệnh nhân duỗi và dạng mạnh ngón cái để làm nổi rõ hai gờ gân giới hạn hố lào giải phẫu; lần dọc gờ gân phía trước ngược lên 1 – 1.5 cm ngay trên mặt ngoài mỏm trâm quay.",
        "3. Ấn kiểm tra khối sưng dày cứng bao gân trên mỏm trâm quay và làm nghiệm pháp Finkelstein / Eichhoff xác nhận đau chói."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_wrist_extensor_sheaths_gray1234.png",
          "figNumber": "Gray 1234",
          "title": "Giải phẫu bề mặt mặt mu - quay cổ tay: Hình chiếu 6 bao hoạt dịch gân duỗi và hố lào (Gray's Plate 1234)",
          "desc": "Hình chiếu bề mặt chi tiết bao hoạt dịch ngăn số 1 (Abductor pollicis longus & Extensor pollicis brevis) chạy dọc bờ ngoài mỏm trâm quay tạo bờ trước hố lào.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1234) – Surface markings of mucous sheaths of tendons on the back of the wrist."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy – Transverse Section of Distal Radius & Six Extensor Compartments",
      "sectionPlane": "Thiết đồ cắt ngang (Axial / Transverse Section) qua đầu dưới xương quay cách đỉnh mỏm trâm quay 1.0 – 1.5 cm về phía gần.",
      "layeredStructure": [
        "Lớp 1 – Da rất mỏng vùng bờ quay cổ tay và lớp mỡ dưới da (dày chỉ ~2 – 3 mm): Chứa TĨNH MẠCH ĐẦU (Cephalic vein) và các nhánh tận của NHÁNH NÔNG THẦN KINH QUAY (Superficial branch of radial nerve - SRN) nằm ngay trên mạc!",
        "Lớp 2 – Mái đường hầm: Dải sợi ngăn số 1 của Mạc giữ gân duỗi (Extensor retinaculum – bình thường dày ~0.5 – 1.0 mm; trong viêm De Quervain dày gấp 3 – 4 lần thành dải giảm âm bó chặt gân).",
        "Lớp 3 – KHOANG ĐÍCH: Khoang bao hoạt dịch ngăn duỗi số 1 bọc quanh Gân cơ dạng ngón cái dài (APL – nằm phía gan tay hơn, thường chẻ 2 – 4 dải gân phụ 'lotus root sign') và Gân cơ duỗi ngón cái ngắn (EPB – mảnh hơn, nằm phía mu tay hơn).",
        "Lớp 4 – Vách xơ gian tiểu ngăn (Intracompartmental septum – tồn tại ở 30 – 40% cá thể, mọc từ vỏ xương quay lên mạc giữ gân duỗi ngăn cách hoàn toàn EPB thành một ống riêng biệt!).",
        "Lớp 5 (Đáy thiết đồ) – Rãnh xương nông có gờ xương nhỏ trên mặt ngoài mỏm trâm xương quay."
      ],
      "topographicRelations": {
        "superficialAndDeep": "Ngay phía nông trên mái mạc giữ gân duỗi là nhánh nông thần kinh quay và tĩnh mạch đầu; phía sâu là vỏ xương mặt ngoài đầu xa xương quay.",
        "medialAndLateral": "Phía GAN TAY (trước) cách ngăn số 1 khoảng 5 – 8 mm là ĐỘNG MẠCH QUAY (Radial artery) chuẩn bị vòng ra dưới các gân APL/EPB để vào đáy hố lào; phía MU TAY (sau) là ngăn gân duỗi số 2 (ECRL, ECRB – nơi giao chéo trên cao cách cổ tay 4 cm gây hội chứng Intersection syndrome)."
      },
      "dangerCorridors": [
        "Tổn thương nhánh nông thần kinh quay (Lớp 1): Luôn nhận diện các chấm sáng nhỏ của SRN và tĩnh mạch đầu trong mô dưới da trước khi đâm kim từ mu tay sang gan tay (Dorsal-to-volar).",
        "Bỏ sót tiểu ngăn riêng của gân EPB (Lớp 4): Nếu thấy vách dọc tăng âm giữa APL và EPB mà dịch chỉ bao quanh APL, bắt buộc hướng mũi kim sang bao quanh cả gân EPB ở phía mu!"
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_distal_forearm_wrist_section_gray421.png",
          "figNumber": "Gray 421",
          "title": "Thiết đồ cắt ngang đầu xa xương quay hiển thị rõ Ngăn duỗi số 1 (Abd. poll. long. & Ext. poll. brev.) và Động mạch quay (Gray's Plate 421)",
          "desc": "Trên thiết đồ ngang, hai gân APL và EPB nằm sát bờ ngoài xương quay, ngay phía sau động mạch quay (màu đỏ) và phía trước ngăn số 2 (ECRL, ECRB).",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 421) – Transverse section across distal radius showing all six extensor compartments."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed.) – Palmar Skin Creases & Digital Fibrous Sheaths; Doyle's Pulley Landmarks",
      "surfaceLandmarks": [
        "Nếp gấp gan tay xa (Distal palmar crease – tương ứng cổ xương bàn ngón III, IV, V) và Nếp gấp gan tay gần (tương ứng ngón trỏ II).",
        "Nếp gấp gốc ngón tay / Nếp bàn – ngón (Palmar digital crease – nằm xa hơn khớp MCP thực sự khoảng 12 – 15 mm!).",
        "Chỏm xương bàn tay (Metacarpal head): Khối xương tròn lồi rõ trong gan tay ngay dưới nếp gấp gan tay.",
        "Nếp gấp khớp bàn – ngón cái (Thumb MCP flexion crease – nằm trùng ngay trên ròng rọc A1 của ngón cái!)."
      ],
      "surfaceProjections": "Định luật khoảng cách bề mặt của Wilbur & Doyle: Khoảng cách từ bờ gần ròng rọc A1 tới nếp gấp gốc ngón tay (Palmar digital crease) bằng đúng khoảng cách từ nếp gấp gốc ngón tay tới nếp gấp liên đốt gần (PIP crease), trung bình ~1.8 – 2.2 cm! Nói cách khác, ròng rọc A1 (dài ~8 – 10 mm ở ngón dài, ~6 mm ở ngón cái) chiếu đúng lên mặt gan chỏm xương bàn tay ở nửa giữa khoảng cách từ nếp gấp gan tay xa tới nếp gốc ngón tay.",
      "palpationSteps": [
        "1. Đặt ngửa bàn tay bệnh nhân trên mặt phẳng cứng, các ngón duỗi tự nhiên.",
        "2. Dùng đầu ngón trỏ ấn lên đường trục giữa ngón tay ngay trên chỏm xương bàn tay (ngay phía xa nếp gấp gan tay xa ~0.5 cm; ở ngón cái ấn ngay trên nếp gấp MCP).",
        "3. Yêu cầu bệnh nhân nắm – duỗi ngón tay chủ động để cảm nhận nốt dày gân (Notta's nodule) trượt bật cấn dưới bờ gần ròng rọc A1."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_wrist_flexor_sheaths_gray1233.png",
          "figNumber": "Gray 1233",
          "title": "Giải phẫu bề mặt bao hoạt dịch gân gấp các ngón tay so với các nếp gấp gan bàn tay (Gray's Plate 1233)",
          "desc": "Đối chiếu đầu gần bao hoạt dịch gân gấp các ngón II, III, IV (kết thúc ngang cổ xương bàn tay - mức ròng rọc A1) và bao riêng ngón I, ngón V thông lên cổ tay.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1233) – Mucous sheaths of tendons on the front of wrist and digits."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy – Transverse & Sagittal Sectional Anatomy of Metacarpophalangeal Joint & Flexor Apparatus",
      "sectionPlane": "Thiết đồ cắt ngang (Axial Section) và Thiết đồ đứng dọc giữa (Mid-sagittal Section) qua khớp bàn – ngón tay (MCP) ngang mức ròng rọc A1.",
      "layeredStructure": [
        "Lớp 1 – Da gan bàn tay dày có lớp sừng chắc và đệm mỡ dưới da có các vách xơ dọc giữ da không trượt.",
        "Lớp 2 – Cân gan tay dọc (Pretendinous band of palmar aponeurosis) tách đôi hai chân đi sang hai bên cổ xương bàn.",
        "Lớp 3 – Mái ống xơ: Ròng rọc vòng số 1 (First annular pulley - A1, bình thường mỏng < 0.5 – 0.6 mm bám hai bên vào bờ sụn gan tay; khi viêm dày giảm âm lên 1.2 – 2.5 mm).",
        "Lớp 4 – KHOANG ĐÍCH: Khoang bao hoạt dịch gân gấp (Synovial tendon sheath space – viền dịch mỏng ôm mặt nông và hai bên bờ gân gấp ngay dưới mặt sâu ròng rọc A1).",
        "Lớp 5 – Cặp gân gấp: Gân gấp nông (FDS – nằm nông, bắt đầu dẹt lõm mặt dưới ôm lấy FDP) và Gân gấp sâu (FDP – nằm sâu, hình bầu dục tròn); ở ngón cái chỉ có 1 gân duy nhất là gân gấp ngón cái dài (FPL) kẹp giữa 2 xương vừng!",
        "Lớp 6 (Đáy thiết đồ) – Sụn sợi gan tay dày chắc (Volar plate), khoang khớp bàn – ngón (MCP) và chỏm xương bàn tay."
      ],
      "topographicRelations": {
        "superficialAndDeep": "Từ da lòng bàn tay tới mặt nông ròng rọc A1 chỉ sâu ~3 – 5 mm; phía sâu của gân gấp được đệm bởi sụn gan tay (Volar plate) ngăn cách với chỏm xương bàn tay.",
        "medialAndLateral": "Sát hai bên bờ quay và bờ trụ của ròng rọc A1 (trong hầm lumbrical canal) là BÓ MẠCH VÀ THẦN KINH GAN NGÓN TAY RIÊNG (Proper palmar digital artery & nerve – thần kinh luôn nằm NÔNG/GAN TAY hơn động mạch!). CẢNH BÁO ĐẶC BIỆT Ở NGÓN CÁI: Thần kinh gan ngón cái bờ quay vắt chéo rất nông ngay mặt trước ròng rọc A1 cách dưới da chỉ 1.5 – 2 mm!"
      },
      "dangerCorridors": [
        "Luôn giữ đường đi kim đúng chính giữa trục dọc gân gấp (Midline sagittal corridor) hoặc kiểm soát trên cắt ngang để tránh tuyệt đối hai bó mạch thần kinh gan ngón tay chạy hai bên sườn A1.",
        "Riêng ở ngón cái: Luôn quét ngang trước bằng đầu dò tần số cao tìm nhánh thần kinh gan ngón cái bờ quay vắt trước A1 để tránh đâm xuyên thần kinh."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_finger_tendon_pulley_gray338.png",
          "figNumber": "Gray 338",
          "title": "Thiết đồ bên khớp bàn - ngón tay, sụn gan tay (Volar accessory lig.) và quan hệ bao gân (Gray's Plate 338)",
          "desc": "Cấu trúc sụn sợi gan tay (Volar plate) làm sàn đỡ cho ròng rọc A1 và gân gấp ngay mặt trước chỏm xương bàn tay - nền đốt gần.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 338) – Metacarpophalangeal articulation showing volar plate and collateral ligaments."
        },
        {
          "path": "assets/images/external_anatomy/ext_sec_forearm_cross_section_gray416.png",
          "figNumber": "Gray 416",
          "title": "Giải phẫu chẻ gân gấp nông (FDS), gân gấp sâu (FDP) và mạc treo mạch máu gân Vincula (Gray's Plate 416)",
          "desc": "Mối liên quan giữa gân FDS chẻ đôi ôm lấy FDP và hệ thống mạc treo gân (Vincula brevia & longa) bên trong bao gân ngón tay.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 416) – Flexor tendons, lumbricals, and vincula tendinum."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed.) – Anatomical Snuffbox & First Carpometacarpal Joint; Moore's Clinically Oriented Anatomy",
      "surfaceLandmarks": [
        "Nền xương bàn tay số 1 (Base of 1st metacarpal): Gồ xương sờ thấy rõ ở gốc ngón cái (thường nhô gồ vuông góc 'Shoulder sign' do bán trật ra ngoài trong thoái hóa khớp CMC-1).",
        "Xương thang (Trapezium): Nằm ở nửa xa sàn hố lào giải phẫu, ngay phía gần nền xương bàn 1.",
        "Hố lào giải phẫu (Anatomical snuffbox): Giới hạn trước bởi APL/EPB và sau bởi EPL; nửa gần sàn hố lào là xương thuyền (Scaphoid) và mạch đập động mạch quay."
      ],
      "surfaceProjections": "Từ đỉnh mỏm trâm quay đi dọc xuống sàn hố lào giải phẫu lần lượt đi qua 2 khe khớp cách nhau chỉ ~1.0 cm: Khe thứ nhất (cách mỏm trâm quay ~1 cm, nằm ngay dưới động mạch quay) là khớp thuyền – thang (Scaphotrapezial joint); đi tiếp xuống xa thêm 1 cm nữa ngay dưới bờ gồ nền xương bàn 1 mới chính là KHE KHỚP THANG – BÀN NGÓN CÁI (CMC-1 joint)!",
      "palpationSteps": [
        "1. Đặt bờ trụ bàn tay tựa trên bàn, ngón cái hướng lên trên thả lỏng nhẹ.",
        "2. Dùng ngón cái và ngón trỏ tay khám miết dọc thân xương bàn 1 từ xa về phía cổ tay cho tới khi qua gờ nhô nền xương bàn 1 rơi xuống khe lõm ngang.",
        "3. Vừa kéo nhẹ vừa đẩy/xoay dọc trục xương bàn 1 (Axial traction & Grind maneuver) để cảm nhận khe khớp CMC-1 mở ra; đồng thời bắt rõ nhịp đập động mạch quay ở sàn hố lào ngay phía gần hơn ~1 cm để đánh dấu tránh."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_wrist_extensor_sheaths_gray1234.png",
          "figNumber": "Gray 1234",
          "title": "Giải phẫu bề mặt gốc ngón cái, hố lào giải phẫu và đường chiếu các gân APL - EPB - EPL (Gray's Plate 1234)",
          "desc": "Hình chiếu bề mặt khớp thang - bàn ngón 1 nằm ở đỉnh xa hố lào ngay giữa hai dải gân APL/EPB và EPL.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1234) – Surface relations of tendons crossing the first carpometacarpal region."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy – Coronal Section of Wrist Synovial Cavities & First CMC Articulation",
      "sectionPlane": "Thiết đồ đứng ngang dọc bờ quay (Radial Coronal / Longitudinal Section) cắt qua xương thuyền, xương thang (Trapezium) và nền xương bàn tay 1.",
      "layeredStructure": [
        "Lớp 1 – Da và mô dưới da vùng mu – quay gốc ngón cái (dày ~2 – 4 mm): Chứa nhánh thần kinh mu ngón cái bờ quay tách từ NHÁNH NÔNG THẦN KINH QUAY (SRN) và nhánh của thần kinh bì cẳng tay ngoài.",
        "Lớp 2 – Mạc nông và các dải gân bám tận của cơ dạng ngón cái dài (APL – bám vào mặt ngoài nền xương bàn 1) cùng gân duỗi ngón cái ngắn (EPB – chạy lướt qua mặt mu khớp xuống đốt gần).",
        "Lớp 3 – Bao xơ khớp thang – bàn ngón 1 và dây chằng mu – quay (Dorsoradial ligament – dây chằng dày và giàu thụ thể cảm giác đau nhất mặt sau ngoài khớp!).",
        "Lớp 4 – KHOANG ĐÍCH: Buồng hoạt dịch biệt lập của khớp thang – bàn ngón 1 (Isolated synovial cavity of 1st CMC joint – hoàn toàn tách biệt, KHÔNG thông nối với khớp giữa cổ tay hay khớp thuyền – thang!).",
        "Lớp 5 (Đáy thiết đồ) – Hai diện sụn hình yên ngựa đối xứng nhau của xương thang và nền xương bàn 1; sâu hơn ở mặt gan – trụ là dây chằng mỏ gan trước (Anterior oblique beak ligament) và cơ mô cái."
      ],
      "topographicRelations": {
        "superficialAndDeep": "Từ mặt da mu – quay tới khe khớp CMC-1 rất nông (chỉ ~4 – 8 mm); tuy nhiên ở khớp thoái hóa độ III–IV thường có gai xương rìa (Osteophytes) chồm che kín miệng khe khớp.",
        "medialAndLateral": "Cách khe khớp CMC-1 khoảng 8 – 12 mm về PHÍA GẦN – MU (tại đáy hố lào trên lưng xương thang và đầu khoang gian cốt 1) là ĐỘNG MẠCH QUAY (Radial artery) chuẩn bị xuyên qua hai đầu cơ gian cốt mu tay 1 vào cung gan tay sâu!"
      },
      "dangerCorridors": [
        "Nhầm khớp thuyền – thang với khớp CMC-1 trên thiết đồ dọc: Nếu đâm vào khe khớp gần hơn không những tiêm sai khoang (hai khoang không thông nhau!) mà còn có nguy cơ xuyên thủng trực tiếp ĐỘNG MẠCH QUAY nằm vắt ngay trên xương thang!",
        "Tránh đâm xuyên qua điểm bám gân APL ở nền xương bàn 1."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_wrist_coronal_cavities_gray336.png",
          "figNumber": "Gray 336",
          "title": "Thiết đồ đứng ngang toàn bộ các khoang hoạt dịch cổ tay - bàn ngón cái (Gray's Plate 336)",
          "desc": "Thiết đồ kinh điển chứng minh khoang hoạt dịch khớp thang - bàn ngón 1 (giữa Greater multangular/Trapezium và 1st Metacarpal) là một buồng kín biệt lập hoàn toàn với khớp thuyền - thang ở trên.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 336) – Vertical coronal section through wrist articulations showing distinct synovial cavities."
        },
        {
          "path": "assets/images/external_anatomy/ext_sec_forearm_cross_section_gray416.png",
          "figNumber": "Gray 416",
          "title": "Tương quan xương thang (Greater multangular), gân APL, EPB và động mạch quay xuyên khoang gian cốt 1 (Gray's Plate 416)",
          "desc": "Vị trí động mạch quay đi qua sát bờ mu xương thang ngay cạnh khớp CMC-1 trước khi lách giữa hai đầu cơ gian cốt mu tay 1.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 416) – Deep radial aspect showing Trapezium, 1st CMC, APL, EPB, and Radial artery."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed.) – Surface Anatomy of Knee & Suprapatellar Pouch; Moore's Clinically Oriented Anatomy",
      "surfaceLandmarks": [
        "Nền (cực trên) xương bánh chè (Base / Superior pole of patella): Gờ xương ngang dễ sờ nhất ở trung tâm gối trước.",
        "Bờ ngoài xương bánh chè và Gân cơ tứ đầu đùi (Quadriceps femoris tendon).",
        "Bụng cơ rộng ngoài (Vastus lateralis – kết thúc cao hơn nền bánh chè ~2 – 3 cm) và cơ rộng trong (Vastus medialis obliquus - VMO – xuống thấp tận bờ trong giữa xương bánh chè).",
        "Hõm cạnh bánh chè trên ngoài (Superolateral parapatellar sulcus): Vùng cửa sổ mềm ít cơ che phủ nhất."
      ],
      "surfaceProjections": "Túi cùng trên bánh chè (Suprapatellar bursa/recess) phóng chiếu lên mặt trước đùi dưới thành một túi vòm rộng mở cao hơn nền xương bánh chè từ 5.0 đến 6.0 cm (khoảng 3 – 4 khoát ngón tay) nằm sâu dưới gân cơ tứ đầu đùi! Cửa sổ chọc kim bề mặt chuẩn nằm cách góc trên ngoài xương bánh chè 1.0 – 2.0 cm lên trên và ra ngoài (ngay dưới bờ dưới gân cơ rộng ngoài).",
      "palpationSteps": [
        "1. Bệnh nhân nằm ngửa, kê gối cuộn mỏng dưới khoeo để gối gấp nhẹ 15° – 25° giúp thư giãn cơ tứ đầu và tập trung dịch lên ngách trên bánh chè.",
        "2. Dùng lòng bàn tay vuốt dồn dịch từ ngách trong và ngoài dưới bánh chè dồn lên trên nền bánh chè (nghiệm pháp vắt túi cùng và chạm xương bánh chè – Patellar tap).",
        "3. Sờ xác định góc trên ngoài xương bánh chè và bờ ngoài gân cơ tứ đầu đùi để định vị điểm đặt đầu dò ngang."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_thigh_front_topography_gray1238.png",
          "figNumber": "Gray 1238",
          "title": "Giải phẫu bề mặt mặt trước đùi - gối: Cực trên bánh chè, cơ rộng ngoài, cơ rộng trong và gân tứ đầu (Gray's Plate 1238)",
          "desc": "Hình thái bề mặt các bụng cơ tứ đầu đùi hội tụ vào nền xương bánh chè và hõm trên ngoài xương bánh chè.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1238) – Surface topography of the front and medial aspect of right thigh and knee."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy (Plate 350) & OpenStax Sectional Anatomy – Mid-Sagittal & Axial Section of Suprapatellar Recess",
      "sectionPlane": "Thiết đồ đứng dọc giữa (Mid-sagittal Section) và Thiết đồ cắt ngang trên nền xương bánh chè 2 cm (Suprapatellar Axial Section).",
      "layeredStructure": [
        "Lớp 1 – Da và mô mỡ dưới da mặt trước ngoài trên gối (dày ~5 – 12 mm; chứa các nhánh thần kinh bì đùi trước và bì đùi ngoài).",
        "Lớp 2 – Mạc đùi rộng (Fascia lata) liên tục với mạc giữ bánh chè ngoài (Lateral patellar retinaculum) ở bờ bên.",
        "Lớp 3 – Gân chung cơ tứ đầu đùi 3 lá ở chính giữa (thẳng đùi ở nông, rộng ngoài & rộng trong ở giữa, rộng giữa ở sâu) HOẶC chỉ còn lá cân mỏng dưới bờ cơ rộng ngoài khi cắt chếch từ bờ ngoài vào.",
        "Lớp 4 – Đệm mỡ trên bánh chè (Suprapatellar / Quadriceps fat pad – khối mỡ hình tam giác bám ngay mặt sau gân tứ đầu sát bờ trên xương bánh chè).",
        "Lớp 5 – KHOANG ĐÍCH: Ngách hoạt dịch trên bánh chè (Suprapatellar synovial pouch – được kéo căng lên trên bởi cơ khớp gối Articularis genu để không bị kẹt khi duỗi gối!).",
        "Lớp 6 (Đáy thiết đồ) – Đệm mỡ trước xương đùi (Prefemoral fat pad dày ~5 – 8 mm) phủ trực tiếp lên màng xương mặt trước đầu dưới thân xương đùi."
      ],
      "topographicRelations": {
        "superficialAndDeep": "Khoang đích (Lớp 5) luôn nằm kẹp như 'nhân bánh sandwich' giữa Đệm mỡ trên bánh chè (phía nông) và Đệm mỡ trước đùi (phía sâu), cách sụn ròng rọc xương đùi ở dưới ~1 – 2 cm.",
        "medialAndLateral": "Trên thiết đồ ngang, đi kim từ BỜ NGOÀI (dưới cơ rộng ngoài) ngắn hơn và ít cơ hơn hẳn so với bờ trong (do cơ rộng trong VMO xuống rất thấp và có nhánh xuống động mạch gối trên + thần kinh hiển đi ở mặt trong!)."
      },
      "dangerCorridors": [
        "Động mạch gối trên ngoài (Superior lateral genicular artery) chạy sát màng xương trên lồi cầu ngoài trong đệm mỡ trước đùi (Lớp 6): Dừng mũi kim ngay trong lòng ngách hoạt dịch (Lớp 5), không chọc sâu xuyên vào đệm mỡ trước đùi sát xương.",
        "Không đi kim xuyên thẳng từ trước ra sau qua giữa Lớp 3 (gân tứ đầu đùi dày cứng)."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_knee_sagittal_gray350.png",
          "figNumber": "Gray 350",
          "title": "Thiết đồ đứng dọc chính giữa khớp gối: Ngách hoạt dịch dưới cơ tứ đầu và 3 đệm mỡ khớp gối (Gray's Plate 350)",
          "desc": "Thiết đồ dọc kinh điển chỉ rõ ngách trên bánh chè (Bursa under Quadriceps femoris) kẹp giữa gân tứ đầu và lớp mỡ trước xương đùi (Adipose tissue).",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 350) – Sagittal section of right knee-joint."
        },
        {
          "path": "assets/images/external_anatomy/ext_sec_knee_capsule_lateral_gray351.png",
          "figNumber": "Gray 351",
          "title": "Hình chiếu không gian toàn bộ bao hoạt dịch khớp gối căng giãn nhìn từ mặt ngoài (Gray's Plate 351)",
          "desc": "Độ vươn cao rộng của ngách trên bánh chè dưới gân cơ tứ đầu đùi và ngách bên ngoài dưới cơ rộng ngoài.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 351) – Distended capsule of right knee-joint (lateral aspect)."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed.) – Popliteal Fossa Surface Anatomy; Foucher's Clinical Sign",
      "surfaceLandmarks": [
        "Trám khoeo (Popliteal diamond): Giới hạn trên – trong bởi gân cơ bán gân & bán màng; trên – ngoài bởi gân cơ nhị đầu đùi; dưới – trong và dưới – ngoài bởi hai đầu cơ bụng chân (Gastrocnemius).",
        "Nếp lằn da khoeo ngang (Transverse popliteal crease – lưu ý nằm CAO HƠN khe khớp gối thực sự khoảng 2 cm!).",
        "Mạch đập động mạch khoeo ở sâu chính trục giữa trám khoeo."
      ],
      "surfaceProjections": "Nang hoạt dịch Baker (túi thanh mạc cơ bán màng – bụng chân trong) luôn xuất phát và trồi ra ở GÓC DƯỚI – TRONG của trám khoeo (ngay tại hoặc dưới nếp lằn khoeo 1 – 4 cm, lệch về phía bờ trong hơn so với trục mạch khoeo ở đường giữa). Khi duỗi thẳng gối (dấu hiệu Foucher), hai cơ bán màng và bụng chân ép chặt cổ nang làm khối nang căng cứng nổi rõ dưới da; khi gấp gối 45°, cổ nang mở thông làm nang mềm đi.",
      "palpationSteps": [
        "1. Khám đứng thẳng để quan sát khối phồng góc trong khoeo, sau đó đặt bệnh nhân nằm sấp duỗi chân thoải mái.",
        "2. Yêu cầu bệnh nhân hơi gấp gối nhẹ có kháng lực để sờ rõ dải gân cơ bán gân (nông, tròn mảnh) và cơ bán màng (sâu, bè rộng) ở bờ trên trong trám khoeo.",
        "3. Ấn hai tay sâu vào chính giữa hố khoeo bắt mạch đập động mạch khoeo để vạch ranh giới cấm ở phía ngoài khối nang."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_lower_back_popliteal_gray1239.png",
          "figNumber": "Gray 1239",
          "title": "Giải phẫu bề mặt hố khoeo và mặt sau chi dưới: Các bờ cơ trám khoeo (Gray's Plate 1239)",
          "desc": "Định khu bề mặt bốn cạnh cơ của hố khoeo và góc trong khoeo nơi nang hoạt dịch Baker trồi ra nông dưới mạc khoeo.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1239) – Surface anatomy of the back of left lower extremity and popliteal fossa."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy – Axial Section of Popliteal Fossa & Posterior Knee Recesses",
      "sectionPlane": "Thiết đồ cắt ngang (Axial / Transverse Cross-Section) đi ngang qua lồi cầu trong xương đùi và góc sau trong hố khoeo.",
      "layeredStructure": [
        "Lớp 1 – Da mỏng vùng khoeo và lớp mỡ nông: Chứa tĩnh mạch hiển bé (Small saphenous vein) và thần kinh bì bắp chân trong ở gần đường giữa.",
        "Lớp 2 – Mạc khoeo dày căng ngang (Popliteal fascia – liên tiếp mạc đùi rộng ở trên và mạc cẳng chân ở dưới).",
        "Lớp 3 – PHẦN THÂN NANG (Superficial cyst body): Túi nang Baker căng dịch trồi ra nông ngay dưới mạc khoeo, ôm vòng lấy mặt sau – trong của đầu trong cơ bụng chân.",
        "Lớp 4 – CỬA VAN CỔ NANG (Cyst neck / Pedicle – ĐÍCH PHÁ VÁCH): Khe hẹp hình chữ S hoặc dấu phẩy kẹp chặt giữa GÂN CƠ BÁN MÀNG (Semimembranosus tendon – ở phía trước trong) và ĐẦU TRONG CƠ BỤNG CHÂN (Medial head of gastrocnemius – ở phía sau ngoài).",
        "Lớp 5 (Đáy thiết đồ) – Bao khớp gối sau trong (dây chằng khoeo chéo), sừng sau sụn chêm trong và vỏ xương lồi cầu trong xương đùi."
      ],
      "topographicRelations": {
        "superficialAndDeep": "Ở chính giữa hố khoeo (phía ngoài đầu trong cơ bụng chân), bó mạch thần kinh khoeo xếp theo bậc thang từ NÔNG VÀO SÂU: Thần kinh chày (nông nhất & ngoài nhất) -> Tĩnh mạch khoeo (ở giữa) -> ĐỘNG MẠCH KHOEO (sâu nhất, nằm sát ngay trên bao khớp sau / mặt khoeo xương đùi!).",
        "medialAndLateral": "Đầu trong cơ bụng chân (Medial gastrocnemius) đóng vai trò 'bức tường cơ ngăn cách an toàn': Nang Baker và cuống nang nằm ở PHÍA TRONG đầu trong cơ bụng chân, còn toàn bộ bó mạch – thần kinh khoeo nằm ở PHÍA NGOÀI đầu trong cơ bụng chân!"
      },
      "dangerCorridors": [
        "Giả phình động mạch khoeo (Popliteal artery aneurysm) hoặc u bao thần kinh Schwannoma ở trung tâm khoeo nhầm là nang Baker: Bắt buộc kiểm tra trên thiết đồ ngang thấy rõ cuống nang lách giữa gân bán màng – bụng chân trong VÀ bật Color Doppler âm tính bên trong lòng nang trước khi đâm kim 18G!",
        "Luôn đi kim từ PHÍA TRONG ra ngoài (Medial-to-lateral), tuyệt đối không đâm xuyên vượt qua bờ ngoài đầu trong cơ bụng chân vào bó mạch khoeo."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_knee_popliteal_posterior_gray352.png",
          "figNumber": "Gray 352",
          "title": "Giải phẫu mặt sau bao khớp gối căng giãn, túi hoạt dịch bán màng - bụng chân và khe thông khớp (Gray's Plate 352)",
          "desc": "Vị trí chính xác của bao hoạt dịch dưới đầu trong cơ bụng chân và gân bán màng thông nối với khoang khớp gối sau trong.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 352) – Posterior aspect of distended knee joint capsule and popliteal bursae."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed.) – Anteromedial Proximal Tibia & Pes Anserinus Surface Markings",
      "surfaceLandmarks": [
        "Khe khớp gối trong (Medial tibiofemoral joint line).",
        "Lồi củ xương chày (Tibial tuberosity): Gồ xương lớn phía trước cách khe khớp ~3 – 4 cm.",
        "Bờ trong mâm chày (Medial tibial condyle) và diện xương phẳng mặt trước trong đầu trên xương chày."
      ],
      "surfaceProjections": "Diện bám hình chân ngỗng (Pes anserinus conjoined insertion) và bao hoạt dịch chân ngỗng chiếu lên vùng phẳng mặt trước trong đầu trên xương chày tại điểm nằm THẤP HƠN khe khớp gối trong 4.0 – 5.0 cm (khoảng 3 khoát ngón tay) và nằm PHÍA TRONG – SAU lồi củ xương chày 2.0 – 2.5 cm.",
      "palpationSteps": [
        "1. Bệnh nhân nằm ngửa, gấp nhẹ gối 20° – 30° và xoay ngoài nhẹ khớp háng.",
        "2. Đặt ngón cái lên lồi củ xương chày, trượt ngang vào mặt phẳng xương chày phía trong 2.5 cm (kiểm tra đối chiếu cách dưới khe khớp trong ~4.5 cm).",
        "3. Yêu cầu bệnh nhân gấp gối và xoay trong cẳng chân có đối kháng để làm căng 3 dải gân May – Thon – Bán gân và ấn tìm điểm đau khu trú phân biệt với đau khe khớp sụn chêm trong ở trên cao."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_thigh_front_topography_gray1238.png",
          "figNumber": "Gray 1238",
          "title": "Giải phẫu bề mặt mặt trong đùi - gối: Đường hội tụ cơ May (Sartorius) và cơ Thon (Gracilis) xuống đầu trên xương chày (Gray's Plate 1238)",
          "desc": "Hình thái bề mặt dải cơ may và cơ thon chạy vòng sau lồi cầu trong xương đùi xuống bám vào mặt trước trong xương chày.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1238) – Medial aspect of knee and pes anserinus surface topography."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy – Sectional Anatomy of Proximal Tibia, MCL & Pes Anserinus",
      "sectionPlane": "Thiết đồ đứng ngang chếch mặt trong đầu trên xương chày (Anteromedial Coronal-Oblique Section) cắt vuông góc với trục hội tụ của 3 gân chân ngỗng.",
      "layeredStructure": [
        "Lớp 1 – Da và mô mỡ dưới da mặt trong đầu trên cẳng chân (dày ~5 – 18 mm, thường có đệm mỡ dày ở phụ nữ trung niên thoái hóa gối): Chứa TĨNH MẠCH HIỂN LỚN (Great saphenous vein) và THẦN KINH HIỂN (Saphenous nerve + nhánh dưới bánh chè) chạy ngay trên mạc nông!",
        "Lớp 2 – Mạc cẳng chân (Crural fascia) hòa lẫn trực tiếp với lá cân nông của cơ may.",
        "Lớp 3 – Phức hợp 3 gân chân ngỗng xếp ngói từ trên trước xuống dưới sau: Gân cơ May (Sartorius – dẹt rộng nhất ở nông/trên), Gân cơ Thon (Gracilis – tròn mảnh ở giữa) và Gân cơ Bán gân (Semitendinosus – dày khỏe ở dưới/sau).",
        "Lớp 4 – KHOANG ĐÍCH: Bao hoạt dịch chân ngỗng (Anserine bursa – khoang dẹt bình thường không thấy dịch, KHÔNG thông với ổ khớp gối!).",
        "Lớp 5 – Bản bám xa của Dây chằng bên chày nông (Superficial Medial Collateral Ligament - sMCL, bám thấp cách khe khớp tới 6 – 7 cm!) cùng bó mạch và thần kinh gối dưới trong (IMGN & artery) lách ngang dưới sMCL.",
        "Lớp 6 (Đáy thiết đồ) – Màng xương mặt trước trong đầu trên xương chày."
      ],
      "topographicRelations": {
        "superficialAndDeep": "Bao hoạt dịch chân ngỗng (Lớp 4) luôn nằm kẹp đúng mặt phẳng phân cách giữa 3 gân chân ngỗng (ở nông) và bản xa dây chằng bên chày sMCL (ở sâu).",
        "medialAndLateral": "Phía SAU khoảng 1 – 2 cm trong mô dưới da là thân chính tĩnh mạch hiển lớn và thần kinh hiển; ngay mặt sâu dưới dây chằng sMCL sát vỏ xương chày là động mạch và thần kinh gối dưới trong."
      },
      "dangerCorridors": [
        "Quét nông nhẹ tay trước khi chọc kim để tránh đâm xuyên tĩnh mạch hiển lớn hoặc nhánh thần kinh hiển trong Lớp 1.",
        "Dừng đầu kim ngay trong khe giữa gân chân ngỗng và mặt nông dây chằng sMCL (Lớp 4); không đâm xuyên qua sMCL xuống Lớp 5 chạm động mạch gối dưới trong."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_gluteal_deep_muscles_gray434.png",
          "figNumber": "Gray 434",
          "title": "Giải phẫu phân lớp vùng gối sau trong chỉ rõ thứ tự xếp lớp May - Thon - Bán gân - Bán màng (Gray's Plate 434)",
          "desc": "Ở góc dưới hình minh họa chi tiết thứ tự sắp xếp 4 gân vùng trong gối (Sartorius, Gracilis, Semitendinosus và Semimembranosus ở lớp sâu hơn).",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 434) – Insertional layering of Sartorius, Gracilis, Semitendinosus, and Semimembranosus."
        },
        {
          "path": "assets/images/external_anatomy/ext_sec_thigh_cross_section_gray432.png",
          "figNumber": "Gray 432",
          "title": "Thiết đồ cắt ngang đùi đối chiếu nguyên ủy 3 khu cơ tạo gân chân ngỗng và thần kinh hiển (Gray's Plate 432)",
          "desc": "Ba cơ May (khu trước), Thon (khu trong), Bán gân (khu sau) cùng vị trí tĩnh mạch hiển lớn và thần kinh hiển.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 432) – Cross-section showing Sartorius, Gracilis, Semitendinosus, and Saphenous nerve."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed.) – Anastomosis Around the Knee & Genicular Neurovascular Landmarks; Tran & Peng Quadrant Map",
      "surfaceLandmarks": [
        "Củ cơ khép (Adductor tubercle) và Mỏm trên lồi cầu trong xương đùi (Medial femoral epicondyle) – mốc cho SMGN.",
        "Mỏm trên lồi cầu ngoài xương đùi (Lateral femoral epicondyle) – mốc cho SLGN.",
        "Mâm chày trong (Medial tibial condyle) và Lồi củ xương chày – mốc cho IMGN.",
        "Chỏm xương mác và cổ xương mác ở góc dưới ngoài – VÙNG CẤM TUYỆT ĐỐI (nơi thần kinh mác chung vòng sát xương!)."
      ],
      "surfaceProjections": "Ba điểm chiếu bề mặt kinh điển của 3 bó mạch – thần kinh gối mục tiêu tại hõm chuyển tiếp thân xương – hành xương (Diaphyseal-metaphyseal concavity): (1) SMGN nằm cao hơn khe khớp gối trong ~4.5 – 5.0 cm ngay phía trên củ cơ khép; (2) SLGN nằm cao hơn khe khớp gối ngoài ~4.5 – 5.0 cm ngay phía trên lồi cầu ngoài đùi; (3) IMGN nằm thấp hơn khe khớp gối trong ~3.5 – 4.0 cm (ngang mức bờ dưới lồi củ chày chiếu sang mặt trong xương chày).",
      "palpationSteps": [
        "1. Bệnh nhân nằm ngửa, gối gấp nhẹ 20° – 30° trên gối cuộn.",
        "2. Sờ khe khớp gối trong – ngoài, sau đó lần dọc hai sườn trong và ngoài đầu dưới xương đùi lên trên ~3 khoát ngón tay tìm chỗ hõm cong nơi lồi cầu thu nhỏ thành thân xương đùi.",
        "3. Sờ chỏm xương mác ở phía dưới ngoài và đánh dấu chữ X đỏ cảnh báo không bao giờ đặt kim đốt RFA gần cổ xương mác."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_thigh_femoral_markings_gray1245.png",
          "figNumber": "Gray 1245",
          "title": "Giải phẫu bề mặt đùi - gối: Đường chiếu xương đùi, xương chày và hệ mạch - thần kinh đùi xuống gối (Gray's Plate 1245)",
          "desc": "Hình chiếu bề mặt đường nối hành - thân xương lồi cầu đùi hai bên và hành xương chày trong.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1245) – Surface markings of femur, tibia, and lower limb neurovascular structures."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy & Ellis Sectional Anatomy – Axial Cross-Sections at Femoral & Tibial Metaphyses",
      "sectionPlane": "Ba thiết đồ cắt ngang (Axial Cross-Sections): (A) Qua hành xương dưới xương đùi trên hai lồi cầu 4 cm (cho SMGN & SLGN) và (B) Qua hành xương trên xương chày dưới khe khớp 3.5 cm (cho IMGN).",
      "layeredStructure": [
        "Tại đích SMGN (Đùi trên trong): Da -> Mỡ dưới da (có tĩnh mạch hiển lớn & thần kinh hiển ở phía sau trong) -> Mạc đùi -> Cơ rộng trong (Vastus medialis) & cân gân cơ khép lớn (Adductor magnus tendon) -> ĐÍCH: Bó mạch & thần kinh gối trên trong (SMGN) nằm ngay trên màng xương góc trước – trong thân xương đùi.",
        "Tại đích SLGN (Đùi trên ngoài): Da -> Mỡ dưới da -> Dải chậu chày (ITB) & Cơ rộng ngoài (Vastus lateralis) -> ĐÍCH: Bó mạch & thần kinh gối trên ngoài (SLGN) nằm sát màng xương góc sau – ngoài chỗ uốn lồi cầu ngoài đùi (phía trước vách gian cơ ngoài và đầu ngắn cơ nhị đầu).",
        "Tại đích IMGN (Chày dưới trong): Da & mỡ dưới da mỏng (chỉ sâu ~8 – 15 mm!) -> Mạc cẳng chân -> Bản sâu/xa của Dây chằng bên chày (MCL) -> ĐÍCH: Bó mạch & thần kinh gối dưới trong (IMGN) chạy ngang sát rãnh vỏ xương chày ngay mặt sâu dây chằng MCL!",
        "Đáy thiết đồ chung & Góc phần tư thứ 4 (ILGN – KHÔNG ĐỐT): Vỏ xương cứng hành xương đùi/chày làm tấm chắn phản âm sâu; riêng góc dưới ngoài (nhánh gối dưới ngoài – ILGN) đi sát chỏm mác và thần kinh mác chung nên tuyệt đối loại trừ khỏi danh mục đốt nhiệt RFA."
      ],
      "topographicRelations": {
        "superficialAndDeep": "Cả 3 thần kinh gối (SMGN, SLGN, IMGN) đều đi SÁT MÀNG XƯƠNG (Periosteal course) trong cùng bao mạch với động mạch gối cùng tên – giúp vỏ xương trở thành mốc chắn kim và phản xạ nhiệt lý tưởng.",
        "medialAndLateral": "Tại thiết đồ SLGN: Dây thần kinh mác chung nằm ở khoang sau cách đích SLGN ~2.5 – 3.5 cm về phía sau bên kia vách gian cơ ngoài. Tại thiết đồ dưới gối ngoài: Nhánh gối dưới ngoài (ILGN) nằm ngay cạnh thân chính thần kinh mác chung quanh cổ xương mác (lý do tuyệt đối cấm đốt ILGN!)."
      },
      "dangerCorridors": [
        "Tại đích IMGN (mặt trong xương chày): Khoảng cách từ màng xương tới mặt da rất mỏng (< 1 cm ở người gầy) – khi đốt RFA bắt buộc kiểm tra đầu hoạt động kim nằm sâu dưới dây chằng MCL và gây tê tẩm tách da phía nông để phòng bỏng nhiệt hoại tử da!",
        "Tại đích SLGN: Luôn đi kim từ TRƯỚC RA SAU (Anterior-to-posterior) dừng ngay khi chạm vỏ xương đùi, tuyệt đối không trượt kim quá bờ sau xương đùi vào hố khoeo chạm thần kinh mác chung hoặc động mạch khoeo!"
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_knee_capsule_lateral_gray351.png",
          "figNumber": "Gray 351",
          "title": "Giải phẫu vùng hành xương lồi cầu đùi và hành xương chày nơi các bó mạch - thần kinh gối ôm sát màng xương (Gray's Plate 351)",
          "desc": "Vị trí chỗ lõm chuyển tiếp thân xương - lồi cầu đùi và cổ trong xương chày dưới dây chằng bên.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 351) – Distal femoral and proximal tibial metaphyseal contours."
        },
        {
          "path": "assets/images/external_anatomy/ext_sec_leg_cross_section_gray440.png",
          "figNumber": "Gray 440",
          "title": "Thiết đồ cắt ngang cẳng chân minh họa bề mặt xương chày trong rất nông dưới da và tĩnh mạch - thần kinh hiển (Gray's Plate 440)",
          "desc": "Thiết đồ ngang cho thấy mặt trong xương chày có lớp phủ mô dưới da rất mỏng (chứa tĩnh mạch hiển lớn & thần kinh hiển), giải thích nguy cơ bỏng da nếu đặt kim RFA quá nông.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 440) – Cross-section of leg showing subcutaneous medial tibial surface and saphenous structures."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed.) – Femoral Triangle (Scarpa) & Hip Joint Surface Markings",
      "surfaceLandmarks": [
        "Gai chậu trước trên (ASIS – ở đầu ngoài) và Củ mu (Pubic tubercle – ở đầu trong): Căng giữa hai mốc là Dây chằng bẹn (Inguinal / Poupart's ligament).",
        "Điểm giữa bẹn (Mid-inguinal point – trung điểm đường nối ASIS tới khớp mu, khác với trung điểm dây chằng bẹn!): Chính là nơi ĐỘNG MẠCH ĐÙI đập rõ nhất ngay dưới dây chằng bẹn.",
        "Đỉnh mấu chuyển lớn xương đùi (Greater trochanter) ở mặt ngoài hông."
      ],
      "surfaceProjections": "Trong Tam giác đùi Scarpa (giới hạn bởi dây chằng bẹn ở trên, cơ may ở ngoài, cơ khép dài ở trong), bó mạch thần kinh đùi xếp từ ngoài vào trong theo quy tắc 'NAVEL' (Nerve – Thần kinh đùi -> Artery – Động mạch đùi -> Vein – Tĩnh mạch đùi -> Empty space / Lymphatics). Chỏm xương đùi chiếu ngay phía sâu dưới động mạch đùi ~1.5 cm dưới điểm giữa bẹn, còn CỔ XƯƠNG ĐÙI chạy chếch từ đó xuống dưới – ra ngoài hướng về mấu chuyển lớn (tức nằm hoàn toàn ở PHÍA NGOÀI thần kinh và động mạch đùi!).",
      "palpationSteps": [
        "1. Đặt bệnh nhân nằm ngửa thẳng, hai chân duỗi trung tính (xoay trong nhẹ 10° để cổ xương đùi nằm song song mặt giường).",
        "2. Sờ rõ ASIS ở ngoài và dùng 2 ngón tay bắt rõ nhịp đập của ĐỘNG MẠCH ĐÙI ngay dưới điểm giữa bẹn – dùng bút y khoa vạch dọc đường đi động mạch đùi làm 'ranh giới cấm phía trong'.",
        "3. Sờ đỉnh mấu chuyển lớn ở mặt ngoài để vạch đường chếch của cổ xương đùi từ dưới nếp bẹn (ngoài động mạch đùi 2.5 – 3 cm) hướng ra mấu chuyển lớn."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_thigh_femoral_markings_gray1245.png",
          "figNumber": "Gray 1245",
          "title": "Giải phẫu bề mặt vùng bẹn - đùi trước: Hình chiếu chỏm - cổ xương đùi, động mạch đùi và thần kinh đùi (Gray's Plate 1245)",
          "desc": "Bản đồ bề mặt kinh điển chỉ rõ động mạch đùi (đỏ) và thần kinh đùi (vàng) chạy dọc phía trong, trong khi cổ xương đùi chếch ra phía ngoài về mấu chuyển lớn.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1245) – Front of right thigh showing surface markings for hip joint, femoral artery, and femoral nerve."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "OpenStax (Fig. 9.16) & Gray's Anatomy (Plate 344) – Oblique Sagittal & Coronal Sectional Anatomy of the Hip Joint",
      "sectionPlane": "Thiết đồ đứng dọc chếch theo trục cổ xương đùi (Parasagittal Oblique Section along the femoral neck axis).",
      "layeredStructure": [
        "Lớp 1 – Da và mô mỡ dưới da vùng bẹn – đùi trước trên (dày từ 1.5 cm ở người gầy đến > 5 cm ở người béo; nhánh thần kinh bì đùi ngoài đi ở mép ngoài thiết đồ).",
        "Lớp 2 – Mạc đùi rộng (Fascia lata) ở nông; cơ may (Sartorius) và đầu thẳng/quặt ngược cơ thẳng đùi (Rectus femoris) ở phần trước ngoài, kèm nhánh lên của ĐỘNG MẠCH MŨ ĐÙI NGOÀI (Ascending branch of lateral circumflex femoral artery) chạy trong lớp mỡ gian cơ giữa cơ thẳng đùi – căng mạc đùi – thắt lưng chậu!",
        "Lớp 3 – Khối cơ – gân Thắt lưng chậu (Iliopsoas muscle-tendon unit) đệm ngay trên mặt trước bao khớp (ngăn cách bởi bao hoạt dịch thắt lưng chậu ở phía trong).",
        "Lớp 4 – Bao xơ khớp háng trước cực dày chắc được gia cố bởi Dây chằng chậu – đùi chữ Y của Bigelow (Iliofemoral ligament – dày tới 5 – 8 mm, dây chằng khỏe nhất cơ thể người!).",
        "Lớp 5 – KHOANG ĐÍCH: Ngách hoạt dịch trước cổ xương đùi (Anterior intracapsular synovial recess – khoang ảo bọc mặt trước cổ xương đùi từ bờ sụn chỏm tới đường gian mấu).",
        "Lớp 6 (Đáy thiết đồ) – Màng xương mặt trước chỗ lõm nối chỏm – cổ xương đùi (Head-neck junction) và sụn chỏm xương đùi – sụn viền ổ cối trước ở phía trên."
      ],
      "topographicRelations": {
        "superficialAndDeep": "Cổ xương đùi nằm ở độ sâu ~4 – 7 cm dưới da; ngay phía nông đường đi kim (Lớp 2) rất thường gặp nhánh lên của động mạch mũ đùi ngoài bắt ngang qua trục cổ đùi!",
        "medialAndLateral": "Cách trục cổ xương đùi ~2 – 3 cm về PHÍA TRONG (trên mặt nông cơ chậu và cơ lược) là THẦN KINH ĐÙI, ĐỘNG MẠCH ĐÙI và TĨNH MẠCH ĐÙI; phía trên trong là sụn viền trước ổ cối."
      },
      "dangerCorridors": [
        "Nhánh lên động mạch mũ đùi ngoài (Lớp 2): BẮT BUỘC bật Color Doppler trên toàn bộ hành trình dự kiến từ da tới cổ xương đùi (vì mạch này đi ngay giữa trường chọc kim ở phía ngoài bó mạch đùi chính!).",
        "Tuyệt đối luôn đi kim từ DƯỚI – NGOÀI lên TRÊN – TRONG dọc trục cổ đùi, không bao giờ chọc kim từ phía trong tam giác Scarpa."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_hip_coronal_openstax916.jpg",
          "figNumber": "OpenStax 9.16",
          "title": "Thiết đồ đứng ngang (Coronal Section) qua khớp háng, ổ cối, sụn viền, bao khớp và ngách cổ xương đùi (OpenStax Atlas)",
          "desc": "Thiết đồ cắt lớp màu hiển thị rõ khoang hoạt dịch khớp háng kéo dài dọc cổ xương đùi bên trong dây chằng bao khớp dày và sụn viền ổ cối.",
          "atlasSource": "OpenStax Anatomy & Physiology (CC-BY 4.0, Fig. 9.16) – Coronal section of the hip joint."
        },
        {
          "path": "assets/images/external_anatomy/ext_sec_hip_surrounding_section_gray344.png",
          "figNumber": "Gray 344",
          "title": "Thiết đồ cắt qua ổ cối định khu toàn bộ các lớp cơ, bao hoạt dịch và bó mạch thần kinh quanh khớp háng (Gray's Plate 344)",
          "desc": "Bản đồ thiết đồ kinh điển của Gray xung quanh bao khớp háng: phía trước là cơ thắt lưng chậu - thẳng đùi - bó mạch thần kinh đùi; phía trên ngoài là cơ mông nhỡ - mông bé; phía sau là cơ hình lê - bịt trong - thần kinh tọa.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 344) – Sectional relation of structures surrounding right hip-joint."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed.) – Greater Trochanteric Prominence & Nélaton's Line; Pfirrmann's Trochanteric Facets",
      "surfaceLandmarks": [
        "Lồi bên mấu chuyển lớn xương đùi (Lateral prominence of greater trochanter): Điểm xương rộng nhất của vùng hông đùi ngang mức khớp mu.",
        "Bờ trước, bờ trên và góc sau trên mấu chuyển lớn (Superoposterior corner – nơi ấn đau chói nhất trong GTPS).",
        "Đường Nélaton nối ASIS – ụ ngồi đi qua đỉnh trên mấu chuyển lớn."
      ],
      "surfaceProjections": "Mấu chuyển lớn chiếu lên mặt bên đùi trên một vùng tứ giác kích thước ~4 × 5 cm. Túi hoạt dịch mấu chuyển lớn (Subgluteus maximus bursa) nằm phủ trùm lên diện sau và một phần diện bên mấu chuyển lớn ngay dưới chỗ cơ mông lớn chuyển tiếp vào dải chậu chày.",
      "palpationSteps": [
        "1. Bệnh nhân nằm nghiêng sang bên lành, háng gấp ~30°, gối gấp ~45°.",
        "2. Dùng ngón cái ấn hệ thống theo 4 điểm quanh mấu chuyển lớn (trước, bên giữa, đỉnh trên và góc sau trên) để tìm điểm nhảy đau ('Jump sign').",
        "3. Đánh dấu đỉnh lồi nhất của mặt bên mấu chuyển lớn để đặt tâm đầu dò cắt ngang."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_hip_nelaton_bryant_gray1243.png",
          "figNumber": "Gray 1243",
          "title": "Định khu bề mặt vùng mấu chuyển lớn xương đùi theo đường Nélaton và tam giác Bryant (Gray's Plate 1243)",
          "desc": "Xác định nhanh đỉnh và chu vi mấu chuyển lớn ngoài da dựa trên tương quan gai chậu trước trên (ASIS) và ụ ngồi.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1243) – Surface landmarks of the greater trochanter."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy (Plates 344, 434) – Axial Cross-Section of Greater Trochanteric Facets & Bursal Complex",
      "sectionPlane": "Thiết đồ cắt ngang (Axial / Transverse Cross-Section) qua trung tâm khối mấu chuyển lớn xương đùi.",
      "layeredStructure": [
        "Lớp 1 – Da và lớp mỡ dưới da vùng hông đùi bên (dày ~1.5 – 5.0 cm).",
        "Lớp 2 – Phức hợp cân dải chậu chày – cơ căng mạc đùi (ở phía trước ngoài) nối liên tục với dải cân gân cơ mông lớn (Gluteus maximus – ở phía sau ngoài) tạo thành một 'võng cân căng' trượt qua đỉnh mấu chuyển lớn.",
        "Lớp 3 – KHOANG ĐÍCH CHÍNH: Bao hoạt dịch mấu chuyển lớn / dưới cơ mông lớn (Trochanteric / Subgluteus maximus bursa) nằm ngay mặt sâu của dải chậu chày – cơ mông lớn, phủ lên mặt nông của gân cơ mông nhỡ và diện sau xương mấu chuyển.",
        "Lớp 4 – Lớp gân 'chóp xoay háng' bám vào các diện mấu chuyển: Ở DIỆN TRƯỚC là gân cơ mông bé (Gluteus minimus – có bao hoạt dịch dưới mông bé ở sâu); ở DIỆN BÊN & DIỆN SAU TRÊN là gân cơ mông nhỡ (Gluteus medius – có bao hoạt dịch dưới mông nhỡ ở mặt sâu).",
        "Lớp 5 (Đáy thiết đồ) – Vỏ xương tạo góc chữ Λ (đỉnh nhọn Bald ridge phân cách diện trước và diện bên – sau) của mấu chuyển lớn xương đùi."
      ],
      "topographicRelations": {
        "superficialAndDeep": "Bao hoạt dịch mấu chuyển lớn (Lớp 3) luôn nằm NÔNG hơn gân cơ mông nhỡ (giữa dải chậu chày và mặt ngoài gân mông nhỡ); trong khi bao hoạt dịch dưới mông nhỡ nằm SÂU giữa gân mông nhỡ và vỏ xương.",
        "medialAndLateral": "Phía trước diện trước là cơ căng mạc đùi; phía sau diện sau cách ~4 – 5 cm vào khoang mông sâu qua khối cơ xoay ngoài mới tới dây thần kinh tọa (nên chọc kim trên sườn mấu chuyển lớn rất xa thần kinh tọa!)."
      },
      "dangerCorridors": [
        "Không tiêm Corticosteroid xuyên vào Lớp 4 (nhu mô gân cơ mông nhỡ / mông bé đang viêm thoái hóa) vì có thể làm đứt hoàn toàn gân dạng háng gây liệt dáng đi Trendelenburg mạn tính!",
        "Chỉ bơm thuốc tách nhẹ mở rộng mặt phẳng Lớp 3 giữa mặt sâu dải chậu chày và mặt nông gân mông nhỡ."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_gluteal_deep_muscles_gray434.png",
          "figNumber": "Gray 434",
          "title": "Giải phẫu cắt bóc tách cơ mông lớn bộc lộ diện bám cơ mông nhỡ, mông bé và vùng bao hoạt dịch trên mấu chuyển lớn (Gray's Plate 434)",
          "desc": "Sau khi cắt lật cơ mông lớn và dải chậu chày, thấy rõ cơ mông nhỡ - mông bé bám vào mấu chuyển lớn và nền xương nơi túi hoạt dịch mấu chuyển đệm chống ma sát.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 434) – Deep gluteal and trochanteric dissection with gluteus maximus reflected."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed., Plate 1244) – Classical Gluteal Surface Markings for Piriformis & Sciatic Nerve",
      "surfaceLandmarks": [
        "Gai chậu sau trên (PSIS – dưới lúm đồng tiền thắt lưng cùng, ngang mức đốt S2).",
        "Đỉnh mấu chuyển lớn xương đùi (Apex of greater trochanter) ở mặt bên hông.",
        "Ụ ngồi (Ischial tuberosity) ở phần trong nếp lằn mông dưới và Đỉnh xương cụt (Tip of coccyx) ở rãnh liên mông."
      ],
      "surfaceProjections": "Tam giác định khu mông kinh điển của Gray (Gray's Plate 1244): (1) Kẻ Đường trên nối PSIS tới đỉnh mấu chuyển lớn: điểm nối 1/3 trên – trong và 2/3 dưới – ngoài là điểm lộ ra của ĐỘNG MẠCH MÔNG TRÊN (bờ trên cơ hình lê); (2) Kẻ Đường dưới nối đỉnh xương cụt (hoặc S3–S4) tới đỉnh mấu chuyển lớn: đánh dấu BỜ DƯỚI CƠ HÌNH LÊ; (3) Điểm giữa đường nối PSIS – ụ ngồi là nơi thoát ra của ĐỘNG MẠCH MÔNG DƯỚI, ĐỘNG MẠCH THẸN TRONG và DÂY THẦN KINH TỌA ngay dưới bờ dưới cơ hình lê!",
      "palpationSteps": [
        "1. Bệnh nhân nằm sấp thoải mái trên bàn phẳng.",
        "2. Sờ rõ 3 đỉnh xương của tam giác mông: PSIS (trên trong), ụ ngồi (dưới trong) và đỉnh mấu chuyển lớn (ngoài).",
        "3. Xác định dải cơ hình lê nằm kẹp giữa đường PSIS – mấu chuyển lớn và đường S3 – mấu chuyển lớn; ấn kiểm tra điểm đau chói ở phần ba giữa mông."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_gluteal_sciatic_markings_gray1244.png",
          "figNumber": "Gray 1244",
          "title": "Sơ đồ giải phẫu bề mặt vùng mông kinh điển của Gray: Tam giác định vị cơ hình lê, thần kinh tọa và các động mạch mông (Gray's Plate 1244)",
          "desc": " Tam giác nối PSIS – Mấu chuyển lớn – Ụ ngồi chỉ chính xác vị trí xuất chiếu của động mạch mông trên (bờ trên cơ hình lê), thần kinh tọa và động mạch mông dưới (bờ dưới cơ hình lê).",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1244) – Left gluteal region showing surface markings for gluteal arteries and sciatic nerve."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy (Plate 434) & Ellis Sectional Anatomy – Oblique Axial Section Through Greater Sciatic Foramen",
      "sectionPlane": "Thiết đồ cắt ngang chếch dọc trục cơ hình lê (Oblique Axial Section từ khuyết ngồi lớn tới bờ trên mấu chuyển lớn).",
      "layeredStructure": [
        "Lớp 1 – Da và lớp mỡ dưới da vùng mông dày (dày ~1.5 – 5.0 cm; chứa các nhánh thần kinh bì mông trên L1–L3 và bì mông giữa S1–S3).",
        "Lớp 2 – Mạc mông nông/sâu và Bụng cơ mông lớn rất dày (Gluteus maximus muscle, dày ~2.5 – 4.5 cm; ở nửa trên ngoài có thêm rìa sau cơ mông nhỡ xen giữa).",
        "Lớp 3 – Lớp mô mỡ liên kết lỏng lẻo dưới cơ mông lớn (Khoang mông sâu – Deep gluteal space).",
        "Lớp 4 – KHOANG ĐÍCH: Bụng cơ và gân cơ hình lê (Piriformis muscle, dày ~1.5 – 2.5 cm) lấp đầy lỗ khuyết ngồi lớn chạy ra ngoài bám vào bờ trên mấu chuyển lớn.",
        "Lớp 5 – Mặt phẳng thần kinh – mạch máu ngay mặt sâu / bờ dưới cơ hình lê: Chứa DÂY THẦN KINH TỌA (Sciatic nerve – dây thần kinh to nhất cơ thể, rộng ~1.5 – 2 cm), thần kinh bì đùi sau, bó mạch thần kinh mông dưới và bó mạch thần kinh thẹn (ở góc trong).",
        "Lớp 6 (Đáy thiết đồ) – Ở nửa NGOÀI là bản xương cánh chậu sau trên ổ cối và bao khớp háng sau (tấm chắn xương an toàn!); ở nửa TRONG là lòng khuyết ngồi lớn thông trực tiếp vào khoang chậu hông – trực tràng (KHÔNG có xương đỡ!)."
      ],
      "topographicRelations": {
        "superficialAndDeep": "Cơ hình lê nằm ngay sâu dưới cơ mông lớn; dây thần kinh tọa nằm ngay mặt sâu bờ dưới cơ hình lê ở ~85% người, NHƯNG ở ~15% biến thể Beaton-Anson nhánh mác chung đâm xuyên ngay giữa bụng cơ hình lê!",
        "medialAndLateral": "Bờ trên cơ hình lê là lỗ trên cơ hình lê chứa bó mạch – thần kinh mông trên; bờ dưới cơ hình lê là lỗ dưới cơ hình lê chứa thần kinh tọa, bó mạch mông dưới và bó mạch thẹn trong."
      },
      "dangerCorridors": [
        "Chỉ tiêm vào nửa NGOÀI bụng cơ hình lê (nơi có bản xương cánh chậu Lớp 6 nâng đỡ phía sâu!), tuyệt đối không đâm sâu vào nửa trong khuyết ngồi lớn (nơi tập trung thần kinh tọa, bó mạch mông và trực tràng).",
        "Quét kỹ trong lòng bụng cơ hình lê để loại trừ biến thể nhánh thần kinh mác chung chạy xuyên cơ trước khi đâm kim."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_gluteal_deep_muscles_gray434.png",
          "figNumber": "Gray 434",
          "title": "Giải phẫu phân lớp khoang mông sâu sau khi cắt lật cơ mông lớn: Cơ hình lê, cơ bịt trong và cơ vuông đùi (Gray's Plate 434)",
          "desc": "Cấu trúc tầng sâu vùng mông hiển thị rõ cơ hình lê (Piriformis) đi qua khuyết ngồi lớn nằm ngay trên cụm cơ sinh đôi trên - cơ bịt trong - cơ sinh đôi dưới.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 434) – Deep muscular layer of the gluteal region."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed.) – Anterolateral Thigh & ASIS Surface Markings; Intermuscular Sartorius-TFL Groove",
      "surfaceLandmarks": [
        "Gai chậu trước trên (Anterior Superior Iliac Spine - ASIS): Đỉnh xương nhô sát dưới da ở đầu ngoài dây chằng bẹn.",
        "Dây chằng bẹn (Inguinal ligament): Căng từ ASIS chếch xuống trong tới củ mu.",
        "Rãnh gian cơ May – Căng mạc đùi (Infra-ASIS intermuscular groove): Hõm dọc nông nằm ngay dưới ASIS 3 – 6 cm giữa cơ may (chạy chéo vào trong) và cơ căng mạc đùi (chạy thẳng xuống ngoài)."
      ],
      "surfaceProjections": "Ở ~80 – 85% cá thể, thần kinh bì đùi ngoài (LFCN, L2–L3) chui qua dưới (hoặc xuyên đôi) đầu ngoài dây chằng bẹn cách ASIS khoảng 1.0 – 2.0 cm về phía trong; nhưng có ~15% biến thể đi vắt trực tiếp trên đỉnh ASIS hoặc ngay phía ngoài ASIS! Tuy nhiên, khi xuống thấp hơn ASIS 3.0 – 5.0 cm ở mặt trước đùi, gần như 100% các biến thể LFCN đều hội tụ đi vào rãnh tam giác giữa cơ may và cơ căng mạc đùi trước khi tách nhánh trước – sau.",
      "palpationSteps": [
        "1. Bệnh nhân nằm ngửa thẳng trên giường.",
        "2. Sờ xác định rõ mỏm nhọn gai chậu trước trên (ASIS).",
        "3. Cho bệnh nhân hơi nâng gót chân kết hợp xoay ngoài nhẹ đùi để làm nổi dải cơ may (Sartorius) tách khỏi khối cơ căng mạc đùi (TFL) ở phía ngoài, sờ rãnh lõm giữa hai cơ cách dưới ASIS 4 cm (và tìm dấu Tinel dưới ASIS)."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_thigh_femoral_markings_gray1245.png",
          "figNumber": "Gray 1245",
          "title": "Giải phẫu bề mặt vùng ASIS và đùi trước: Khoảng cách an toàn giữa mốc LFCN (sát ASIS) và bó mạch thần kinh đùi (Gray's Plate 1245)",
          "desc": "Đối chiếu vị trí gai chậu trước trên (nơi LFCN đi ra) cách xa ~4 - 5 cm về phía ngoài so với thần kinh đùi và động mạch đùi ở điểm giữa bẹn.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1245) – Surface markings of ASIS, inguinal ligament, and femoral neurovascular bundle."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy – Transverse Cross-Section of Proximal Thigh Below ASIS",
      "sectionPlane": "Thiết đồ cắt ngang (Axial / Transverse Cross-Section) vùng đùi trước trên cách dưới gai chậu trước trên (ASIS) 3.0 – 5.0 cm.",
      "layeredStructure": [
        "Lớp 1 – Da và mô mỡ dưới da mặt trước trên đùi (dày ~5 – 25 mm).",
        "Lớp 2 – Mạc đùi rộng (Fascia lata – tách thành hai lá nông và sâu tạo một đường hầm cân mỏng ở ngay trên rãnh gian cơ!).",
        "Lớp 3 – KHOANG ĐÍCH: Hố tam giác chứa mỡ tăng âm (Fat-filled intermuscular groove) được đậy mái bởi mạc đùi rộng, cạnh TRONG là mặt vát cơ may (Sartorius), cạnh NGOÀI là mặt vát cơ căng mạc đùi (Tensor fasciae latae - TFL) – bên trong hố mỡ này chứa THẦN KINH BÌ ĐÙI NGOÀI (LFCN, đường kính ~1.5 – 2.5 mm).",
        "Lớp 4 (Đáy thiết đồ) – Đầu nguyên ủy gân cơ thẳng đùi (Rectus femoris) và sâu hơn là cơ chậu / cơ rộng ngoài (có nhánh lên động mạch mũ đùi ngoài đi ở lớp sâu dưới khe cơ!)."
      ],
      "topographicRelations": {
        "superficialAndDeep": "Tại rãnh dưới ASIS 4 cm, LFCN nằm rất nông ngay dưới lá mạc đùi rộng (Lớp 2–3), hoàn toàn tách biệt với các mạch máu sâu; khi lần ngược lên sát dây chằng bẹn, LFCN chuyển sâu vào dưới mạc chậu trên mặt trước cơ chậu.",
        "medialAndLateral": "Nếu tiêm ở rãnh dưới ASIS 3 – 4 cm, thuốc chỉ khu trú trong ống mạc đùi quanh LFCN; ngược lại nếu tiêm thể tích lớn (> 8 – 10 ml) ngay trên dây chằng bẹn dưới mạc chậu, thuốc sẽ lan dọc mặt cơ chậu sang PHÍA TRONG (~4 cm) gây phong bế nhầm THẦN KINH ĐÙI làm sụp gối khi bệnh nhân bước xuống giường!"
      },
      "dangerCorridors": [
        "Chỉ sử dụng thể tích vừa đủ (3 – 5 ml) bơm tách mở đúng hố mỡ dưới mạc đùi để tránh lan vào bao mạc chậu gây yếu cơ tứ đầu đùi.",
        "Bật Doppler màu loại trừ nhánh nông của động mạch mũ chậu sâu (sát ASIS) hoặc nhánh động mạch mũ đùi ngoài ở đáy khe cơ."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_thigh_cross_section_gray432.png",
          "figNumber": "Gray 432",
          "title": "Thiết đồ cắt ngang đùi định khu mạc đùi rộng, cơ may (Sartorius), cơ thẳng đùi và các nhánh thần kinh bì đùi (Gray's Plate 432)",
          "desc": "Cấu trúc các bao cân tách từ mạc đùi rộng bao bọc cơ may và ngăn cách hoàn toàn vùng bì đùi ngoài với ống mạch đùi phía trong.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 432) – Transverse section of thigh fascial compartments."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed.) – Anterior Ankle Retinacula, Tendon Sheaths & Dorsalis Pedis Line",
      "surfaceLandmarks": [
        "Mắt cá trong xương chày (Medial malleolus) và Mắt cá ngoài xương mác (Lateral malleolus – thấp hơn 1 cm và lùi sau hơn mắt cá trong).",
        "Gân cơ chày trước (Tibialis anterior - TA): Dải gân to tròn nhất ở mặt trước trong cổ chân.",
        "Gân cơ duỗi ngón cái dài (Extensor hallucis longus - EHL) nằm ngay phía ngoài gân TA, và Gân duỗi chung các ngón (EDL) ở phía ngoài cùng.",
        "Đường đập của Động mạch chày trước / Động mạch mu chân nằm đúng khe giữa gân EHL và gân EDL."
      ],
      "surfaceProjections": "Khe khớp chày – sên (Tibiotalar joint line) chiếu thành đường ngang cao hơn đỉnh mắt cá trong khoảng 1.0 cm và cao hơn đỉnh mắt cá ngoài khoảng 2.0 cm. Bó mạch chày trước – mu chân và thần kinh mác sâu chạy dọc theo đường nối từ điểm giữa hai mắt cá tới kẽ xương bàn chân I – II (nằm giữa EHL và EDL); do đó CỬA SỔ AN TOÀN NHẤT trên bề mặt là khoảng lõm ngay BỜ TRONG gân chày trước (giữa mắt cá trong và gân TA) hoặc khe giữa gân TA và gân EHL!",
      "palpationSteps": [
        "1. Bệnh nhân nằm ngửa, gấp gối 45° đặt lòng bàn chân lên giường (gấp gan chân nhẹ ~15° – 20° để mở rộng ngách trước cổ xương sên).",
        "2. Bảo bệnh nhân ngóc mạnh bàn chân và ngón cái lên để nhìn và sờ rõ thứ tự gân TA -> gân EHL -> gân EDL.",
        "3. Bắt rõ mạch đập động mạch chày trước/mu chân ngay ngoài gân EHL và đánh dấu tránh; sau đó ấn tìm khe khớp mềm nằm giữa gân TA và EHL (hoặc bờ trong gân TA)."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_ankle_lateral_sheaths_gray1241.png",
          "figNumber": "Gray 1241",
          "title": "Giải phẫu bề mặt mặt trước - ngoài cổ chân: Mạc giữ gân duỗi và bao hoạt dịch các gân TA, EHL, EDL (Gray's Plate 1241)",
          "desc": "Hình chiếu bề mặt 3 bao hoạt dịch gân duỗi đi qua trước khe khớp cổ chân và hãm gân duỗi hình chữ Y.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1241) – Mucous sheaths of tendons around the anterior and lateral ankle."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy (Plates 356, 357) – Coronal & Sagittal Sectional Anatomy of Talocrural Joint",
      "sectionPlane": "Thiết đồ đứng dọc mặt trước trong cổ chân (Anteromedial Sagittal Section) phối hợp Thiết đồ cắt ngang qua khe liên mắt cá.",
      "layeredStructure": [
        "Lớp 1 – Da mỏng mặt trước cổ chân và mô dưới da: Ở góc trước mắt cá trong có TĨNH MẠCH HIỂN LỚN và THẦN KINH HIỂN; ở nửa trước ngoài có hai nhánh tận của THẦN KINH MÁC NÔNG (nhánh bì mu chân trong & giữa)!",
        "Lớp 2 – Mạc giữ gân duỗi trên và nhánh trên mạc giữ gân duỗi dưới (Extensor retinacula).",
        "Lớp 3 – Hàng gân duỗi kèm bao hoạt dịch riêng (từ trong ra ngoài: TA -> EHL -> EDL -> Mác ba); lách sâu dưới giữa EHL và EDL sát bao khớp là ĐỘNG MẠCH CHÀY TRƯỚC (kèm 2 tĩnh mạch đi kèm) và THẦN KINH MÁC SÂU (DPN)!",
        "Lớp 4 – Bao xơ mỏng mặt trước khớp cổ chân và đệm mỡ trước cổ chân nhỏ (Anterior intracapsular fat pad).",
        "Lớp 5 – KHOANG ĐÍCH: Ngách hoạt dịch trước khớp chày – sên (Anterior tibiotalar synovial recess – vươn xa xuống tận cổ xương sên ~1 cm trước bờ sụn ròng rọc!).",
        "Lớp 6 (Đáy thiết đồ) – Bờ trước trần xương chày (Tibial plafond), sụn hyalin vòm xương sên (Talar dome) và mặt lưng lõm của cổ xương sên."
      ],
      "topographicRelations": {
        "superficialAndDeep": "Động mạch chày trước và thần kinh mác sâu (Lớp 3 sâu) nằm ép sát trực tiếp lên mặt nông bao khớp trước cổ chân ở đường giữa – nên nếu chọc mù chính giữa cổ chân rất dễ đâm xuyên qua động mạch vào khớp!",
        "medialAndLateral": "Hành lang giữa bờ trong gân TA và mắt cá trong: lưu ý tránh tĩnh mạch hiển lớn & thần kinh hiển ở nông. Hành lang giữa gân TA và gân EHL: hoàn toàn không có thân động mạch lớn và đi thẳng xuống hõm cổ xương sên."
      },
      "dangerCorridors": [
        "Luôn quét ngang bằng Color Doppler trước để định vị chính xác động mạch chày trước và thần kinh mác sâu rồi mới xoay dọc đầu dò tại hành lang vô mạch (giữa TA – EHL hoặc trong TA).",
        "Tránh chọc xuyên vào bao hoạt dịch các gân duỗi hoặc cạo mũi kim lên mặt sụn vòm xương sên."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_ankle_subtalar_coronal_gray357.png",
          "figNumber": "Gray 357",
          "title": "Thiết đồ đứng ngang (Coronal Section) qua mộng chày - mác, khớp chày - sên và khớp dưới sên (Gray's Plate 357)",
          "desc": "Thiết đồ kinh điển cắt qua xương chày (Tibia), xương mác (Fibula), xương sên (Talus) và xương gót (Calcaneus), cho thấy rõ hai buồng khớp chày - sên và dưới sên hoàn toàn ngăn cách.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 357) – Coronal section through right talocrural and talocalcaneal joints."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed.) – Plantar Heel & Medial Glabrous Skin Junction Landmarks",
      "surfaceLandmarks": [
        "Mỏm trong củ xương gót (Medial process of calcaneal tuberosity): Điểm xương tỳ đè thấp nhất ở phía trong gót chân.",
        "Đường ranh giới da nhẵn – da dày gan chân ở mặt trong gót (Medial glabrous – non-glabrous skin junction): Đường chuyển tiếp rõ rệt giữa da mỏng có lông/mềm của mắt cá trong và lớp da sừng dày không lông của đế gót chân.",
        "Đỉnh mắt cá trong (Tip of medial malleolus) ở phía trên."
      ],
      "surfaceProjections": "Nguyên ủy dải trung tâm cân gan chân bám vào mỏm trong củ xương gót chiếu xuống lòng gót cách bờ sau gót khoảng 3.5 – 4.5 cm và lệch nhẹ về nửa trong gót chân (ngay trên giao điểm đường thẳng đứng hạ từ bờ sau mắt cá trong xuống lòng gót). Đường ranh giới da mỏng – da dày ở bờ trong gót tương ứng đúng mặt phẳng ngang đi qua mặt nông nguyên ủy cân gan chân!",
      "palpationSteps": [
        "1. Bệnh nhân nằm sấp thòng bàn chân qua mép bàn.",
        "2. Dùng một tay gấp mu tối đa ngón chân cái (nghiệm pháp tời Windlass của Hicks) để dải trung tâm cân gan chân nổi căng cứng dọc gan chân.",
        "3. Dùng ngón cái tay kia ấn vào bờ trước của mỏm trong củ xương gót xác định điểm đau chói nhất, sau đó gióng ngang ra mặt da mỏng bờ trong gót chân để đánh dấu điểm chọc kim an toàn."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_ankle_medial_tarsal_gray1242.png",
          "figNumber": "Gray 1242",
          "title": "Giải phẫu bề mặt mặt trong cổ chân - gót chân: Củ xương gót, ranh giới gan chân và ống cổ chân (Gray's Plate 1242)",
          "desc": "Định khu mặt trong vùng gót nơi tiếp cận kim an toàn từ vùng da mỏng bờ trong trên đệm mỡ gót.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1242) – Medial aspect of ankle and calcaneal heel region."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy (Plates 357, 358) – Coronal & Sagittal Sectional Anatomy of the Heel Pad & Plantar Aponeurosis",
      "sectionPlane": "Thiết đồ đứng ngang qua củ xương gót (Calcaneal Coronal Section) và Thiết đồ đứng dọc dọc theo dải trung tâm cân gan chân.",
      "layeredStructure": [
        "Lớp 1 (Từ đáy gót đi lên) – Da sừng dày gan gót chân (dày tới 2 – 4 mm, giàu đầu mút thần kinh đau).",
        "Lớp 2 – ĐỆM MỠ GÓT CHÂN CHỊU LỰC (Plantar heel fat pad, dày 15 – 20 mm): Cấu tạo bởi hàng chục buồng vi nang mỡ đàn hồi đóng kín bởi các vách sợi xoắn ốc chữ U bám chặt từ da lên cân gan chân để hấp thụ xung lực dậm gót – TUYỆT ĐỐI BẢO TỒN!",
        "Lớp 3 – KHOANG ĐÍCH KHÁNG VIÊM: Mặt phẳng mô liên kết mỏng ngay MẶT NÔNG (Superficial perifascial interface) của nguyên ủy cân gan chân.",
        "Lớp 4 – Dải trung tâm CÂN GAN CHÂN (Central band of plantar aponeurosis – bình thường dày 2.5 – 4.0 mm; khi viêm thoái hóa dày phù giảm âm > 4.5 – 8.0 mm; là đích nếu châm kim PRP tái tạo).",
        "Lớp 5 – Lớp cơ nội tại tầng 1 bàn chân ngay sâu dưới cân: Cơ gấp các ngón chân ngắn (Flexor digitorum brevis - FDB ở giữa) và Cơ dạng ngón cái (Abductor hallucis ở bờ trong).",
        "Lớp 6 (Đáy thiết đồ) – Giữa mặt sâu cơ dạng ngón cái / FDB và bờ trước củ xương gót là THẦN KINH BAXTER (First branch of lateral plantar nerve – nhánh hỗn hợp tới cơ dạng ngón út & màng xương gót!) cùng mỏm trong củ xương gót."
      ],
      "topographicRelations": {
        "superficialAndDeep": "Cân gan chân (Lớp 4) nằm ngăn cách giữa đệm mỡ gót chịu lực (ở nông/dưới) và cơ gấp các ngón ngắn + thần kinh Baxter (ở sâu/trên).",
        "medialAndLateral": "Tại bờ trong gót chân (nơi đâm kim In-plane từ trong ra ngoài): Phía trên hơn và nông hơn cơ dạng ngón cái là nhánh gót trong (Medial calcaneal nerve); phía sâu dưới cơ dạng ngón cái là bó mạch – thần kinh gan chân ngoài và nhánh Baxter."
      },
      "dangerCorridors": [
        "CẤM đâm kim xuyên qua lòng gan chân (Lớp 1–2) và CẤM bơm Corticosteroid vào đệm mỡ gót (Lớp 2) gây tiêu hủy vách nang mỡ không hồi phục!",
        "Khi đi kim từ mặt da mỏng bờ trong gót vào Lớp 3, bật Color Doppler ở thành trong gót để tránh bó mạch gan chân ngoài/trong và thần kinh Baxter."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_ankle_subtalar_coronal_gray357.png",
          "figNumber": "Gray 357",
          "title": "Thiết đồ đứng ngang qua xương gót hiển thị đệm mỡ gót tổ ong, cân gan chân, cơ FDB, cơ dạng ngón cái và bó mạch thần kinh gan chân (Gray's Plate 357)",
          "desc": "Phần đáy thiết đồ của Gray minh họa cực kỳ sắc nét lớp đệm mỡ gót dày bên dưới, cơ gấp các ngón ngắn (Flexor digitorum brevis), cơ dạng ngón cái (Abductor hallucis) và bó mạch thần kinh gan chân trong/ngoài.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 357) – Coronal section of calcaneus, heel fat pad, plantar muscles, and plantar neurovascular bundles."
        },
        {
          "path": "assets/images/external_anatomy/ext_sec_foot_plantar_layers_gray358.png",
          "figNumber": "Gray 358",
          "title": "Giải phẫu nền xương - dây chằng sâu gan chân và củ xương gót (Gray's Plate 358)",
          "desc": "Cấu trúc mỏm trong củ xương gót, dây chằng gan chân dài (Long plantar ligament) và các gân sâu vùng gan chân.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 358) – Deep plantar ligaments and calcaneal tuberosity."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed., Plate 1211) – Dimples of Venus (PSIS), Fortin's Area & Sacral Landmarks",
      "surfaceLandmarks": [
        "Gai chậu sau trên (Posterior Superior Iliac Spine - PSIS): Nằm ngay đáy 'lúm đồng tiền vùng thắt lưng cùng' (Dimple of Venus), ngang đúng mức đốt cùng S2 và điểm kết thúc túi màng cứng!",
        "Gai chậu sau dưới (PIIS – nằm thấp hơn PSIS ~4 cm, ngang mức S3 – đánh dấu cực dưới phần hoạt dịch khớp cùng chậu).",
        "Mào cùng giữa (Median sacral crest) ở đường giữa và Khe xương cùng (Sacral hiatus) ở dưới."
      ],
      "surfaceProjections": "Khớp cùng chậu có hình vành tai chữ L ngược: Phần trên (ngang S1 tới bờ trên PSIS) bị che lấp hoàn toàn bởi cánh chậu nhô ra sau và khối dây chằng gian cốt dày đặc; CHỈ CÓ 1/3 DƯỚI (đoạn nối từ ngay dưới trong PSIS xuống PIIS, ngang mức lỗ cùng S2 – S3, trùng với vùng chỉ tay đau Fortin: cách dưới – trong PSIS ~1.5 – 2.0 cm) là có khe khớp hoạt dịch mở ra phía mặt lưng!",
      "palpationSteps": [
        "1. Bệnh nhân nằm sấp kê gối dưới bụng dưới.",
        "2. Dùng hai ngón cái tìm hai hõm lúm đồng tiền đối xứng và ấn xác định đỉnh xương nhô của gai chậu sau trên (PSIS).",
        "3. Trượt ngón cái từ đỉnh PSIS xuống dưới 2 cm và vào trong 1 cm (điểm Fortin) kết hợp sờ khe xương cùng ở dưới làm mốc định hướng quét ngược lên."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_back_spine_scapula_gray1211.png",
          "figNumber": "Gray 1211",
          "title": "Giải phẫu bề mặt vùng thắt lưng - cùng: Hai hõm lúm đồng tiền tương ứng gai chậu sau trên (PSIS) và tam giác xương cùng (Gray's Plate 1211)",
          "desc": "Định khu bề mặt vùng cùng chậu qua hai hõm PSIS đối xứng hai bên nền tam giác xương cùng.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1211) – Surface anatomy of lumbosacral dimples (PSIS) and sacral triangle."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy (Plates 322, 323, 324) – Classical Sequential Coronal/Oblique Cross-Sections of the Sacroiliac Joint",
      "sectionPlane": "Thiết đồ cắt ngang – đứng ngang qua xương cùng và khớp cùng chậu tại mức S1 (phần dây chằng) đối chiếu mức S2–S3 (phần hoạt dịch).",
      "layeredStructure": [
        "Lớp 1 – Da và lớp mỡ dưới da vùng cùng – mông.",
        "Lớp 2 – Lá cân cơ ngực – thắt lưng hòa nhập với nguyên ủy cơ mông lớn (ở ngoài) và cơ nhiều chân Multifidus (ở hõm xương cùng phía trong).",
        "Lớp 3 – Dây chằng cùng – chậu sau nông và sâu (Posterior sacroiliac ligaments); ở mức cao S1 có thêm dây chằng cùng – chậu gian cốt (Interosseous sacroiliac ligament – dây chằng dày và chắc bậc nhất cơ thể bịt kín hoàn toàn 2/3 trên sau khe khớp!).",
        "Lớp 4 – KHOANG ĐÍCH (CHỈ TỒN TẠI Ở 1/3 DƯỚI MỨC S2–S3!): Khe khớp hoạt dịch cùng chậu (Synovial SIJ cleft, rộng ~1 – 2 mm, chạy nghiêng dốc từ SAU TRONG ra TRƯỚC NGOÀI góc ~30° – 45°!).",
        "Lớp 5 (Đáy và giới hạn trước sâu của thiết đồ) – Bao khớp trước mỏng (Anterior SIJ capsule): Ngay sát mặt trước bao khớp trước (nếu đâm kim xuyên thấu khớp vào tiểu khung!) là THÂN THẦN KINH THẮT LƯNG – CÙNG (Lumbosacral trunk L4–L5), RỄ S1 và bó mạch chậu trong / mạch mông trên!"
      ],
      "topographicRelations": {
        "superficialAndDeep": "Ở 2/3 trên (mức PSIS / S1), cánh chậu vươn chồm ra sau che khuất khe khớp và lấp đầy bởi dây chằng gian cốt; khi hạ thiết đồ xuống 1/3 dưới (mức S2 – dưới PSIS 2 cm), cánh chậu thu hẹp làm miệng khe khớp hoạt dịch lộ thẳng ra dưới dây chằng cùng – chậu sau!",
        "medialAndLateral": "Cách miệng khe khớp cùng chậu ~1.5 – 2.0 cm về PHÍA TRONG là hàng LỖ CÙNG SAU S1, S2 (chứa rễ thần kinh cùng và nhánh động mạch cùng ngoài); ngay PHÍA DƯỚI cực dưới khớp (dưới PIIS) là khuyết ngồi lớn chứa dây thần kinh tọa và động mạch mông trên!"
      },
      "dangerCorridors": [
        "Hướng vát chéo của khe khớp trên thiết đồ ngang: Khe khớp nghiêng từ TRONG RA NGOÀI, do đó bắt buộc đâm kim In-plane từ TRONG RA NGOÀI (Medial-to-lateral) trùng góc nghiêng khe khớp (nếu đâm từ ngoài vào trong sẽ bị sườn cánh chậu chặn đứng!).",
        "Không đi lệch vào trong tụt xuống lỗ cùng sau S2 và không đâm quá sâu xuyên thủng bao khớp trước chạm thân thắt lưng – cùng L4–S1 gây tê liệt bàn chân sau tiêm!"
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_sacroiliac_coronal_gray322.png",
          "figNumber": "Gray 322",
          "title": "Thiết đồ cắt lớp kinh điển qua xương cùng và hai khớp cùng chậu: Phần hoạt dịch và dây chằng gian cốt (Gray's Plate 322)",
          "desc": "Thiết đồ cắt qua đoạn trước - dưới xương cùng hiển thị rõ khe khớp hoạt dịch cùng chậu hẹp nghiêng vát giữa cánh xương cùng và xương chậu.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 322) – Section through the sacrum and sacroiliac joints."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed.) – Equilateral Sacral Triangle, Sacral Cornua & Natal Cleft Landmarks",
      "surfaceLandmarks": [
        "Hai gai chậu sau trên (Bilateral PSIS – ngang mức đốt cùng S2 và đáy túi màng cứng!).",
        "Hai sừng cùng (Sacral cornua – hai mấu xương nhỏ cao ~3 – 5 mm nằm hai bên khe xương cùng ngay đầu trên rãnh liên mông).",
        "Khe xương cùng (Sacral hiatus – hõm chữ V ngược rộng ~10 – 15 mm nằm cách đỉnh xương cụt ~4 – 5 cm lên trên).",
        "Đỉnh xương cụt (Tip of coccyx) ở sâu trong rãnh liên mông (cách bờ hậu môn ~3 – 4 cm – vùng bẩn bắt buộc che cách ly vô khuẩn!)."
      ],
      "surfaceProjections": "Hai định luật hình học bề mặt vàng của ống cùng: (1) TAM GIÁC ĐỀU XƯƠNG CÙNG: Đoạn nối ngang giữa PSIS trái và PSIS phải tạo thành cạnh đáy (~8 – 10 cm) của một tam giác đều hướng xuống dưới mà đỉnh thứ ba trùng chính xác vào KHE XƯƠNG CÙNG; (2) ĐÁY TÚI MÀNG CỨNG (Dural sac termination) chiếu ngang đúng đường nối hai PSIS (mức S2), cách đỉnh khe xương cùng trung bình 4.5 – 6.0 cm (nhưng ở ~3 – 5% cá thể có thể xuống thấp tới S3 cách khe cùng < 3 cm!).",
      "palpationSteps": [
        "1. Bệnh nhân nằm sấp kê gối dưới xương mu, hai gót chân xoay hẳn ra ngoài (ngón cái chạm nhau) để làm chùng mềm cơ mông lớn hai bên.",
        "2. Đặt ngón cái và ngón giữa một bàn tay lên hai PSIS rồi hạ ngón trỏ dựng tam giác đều xuống đầu trên rãnh liên mông.",
        "3. Lăn ngang đầu ngón trỏ để sờ rõ hai gờ hạt đậu của sừng cùng hai bên và mặt màng đàn hồi căng giữa hai sừng (nếu bệnh nhân béo hoặc vôi hóa khó sờ sừng cùng, siêu âm cắt ngang sẽ tìm thấy ngay trong 3 giây!)."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_perineum_ischial_gray1228.png",
          "figNumber": "Gray 1228",
          "title": "Thiết đồ giải phẫu định khu vùng cùng - cụt, rãnh liên mông và tương quan trực tràng phía trước xương cùng (Gray's Plate 1228)",
          "desc": "Định khu độ cong sinh lý của xương cùng - xương cụt so với mặt da vùng cùng sau và bóng trực tràng nằm ngay sát mặt trước xương cụt.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1228) – Median sagittal relations of sacrum, coccyx, gluteal cleft, and pelvic organs."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy (Plate 661) – Mid-Sagittal & Transverse Sectional Anatomy of the Sacral Canal, Filum Terminale & Dural Sac",
      "sectionPlane": "Thiết đồ đứng dọc chính giữa qua ống sống thắt lưng – cùng (Mid-sagittal Lumbosacral Canal Section – Gray's Plate 661) và Thiết đồ cắt ngang qua khe xương cùng.",
      "layeredStructure": [
        "Lớp 1 – Da và lớp mỡ dưới da vùng cùng thấp.",
        "Lớp 2 – Mạc nông và cân sâu vùng cùng – cụt.",
        "Lớp 3 – MÀNG CHẮN CỬA VÀO: Dây chằng cùng – cụt sau nông và sâu (Sacrococcygeal ligament / membrane – dày ~1.5 – 3 mm căng ngang giữa hai sừng cùng đậy kín mái khe xương cùng).",
        "Lớp 4 – KHOANG ĐÍCH: Đoạn thấp Khoang ngoài màng cứng ống cùng (Caudal epidural space – đường kính trước – sau tại khe cùng chỉ rộng trung bình 4.0 – 6.0 mm; nếu < 2.0 mm trên siêu âm là hẹp ống cùng giải phẫu rất khó luồn kim!). Bên trong chứa mỡ ngoài màng cứng lỏng lẻo, dây tận cùng ngoài màng cứng (Filum terminale externum), các rễ S4–S5–Co1 và ĐÁM RỐI TĨNH MẠCH NGOÀI MÀNG CỨNG KHÔNG VAN BATSON (tập trung dày ở phần trước – bên ống cùng!).",
        "Lớp 5 (Đáy trước ống cùng) – Mặt sau thân đốt cùng S5 – S4 và dây chằng dọc sau (nếu chọc thủng qua sụn gian đốt cùng non ở trẻ em hoặc khuyết xương sẽ đâm thẳng ra trước vào TRỰC TRÀNG!).",
        "Lớp 6 (Giới hạn trần trên trong ống cùng – CẤM CHẠM!) – Đỉnh dưới TÚI MÀNG CỨNG & MÀNG NHỆN (Dural-arachnoid sac chứa dịch não tủy ở mức S2) hoặc nang màng nhện rễ thần kinh Tarlov (gặp ở ~5% dân số tại S2–S3!)."
      ],
      "topographicRelations": {
        "superficialAndDeep": "Trên thiết đồ cắt ngang khe cùng ('Frog-eye view'): hai sừng cùng là hai con mắt, dây chằng cùng – cụt là mái trên và mặt sau thân S5 là sàn dưới. Trên thiết đồ đứng dọc giữa: thành sau ống cùng tạo bóng cản âm che khuất phần cao, chỉ để hở cửa sổ âm học ngay tại khe cùng dưới dây chằng cùng – cụt!",
        "medialAndLateral": "Đường kính trước – sau của ống cùng hẹp nhất ở đỉnh khe cùng (~4 – 5 mm); khi vừa xuyên qua dây chằng cùng – cụt theo góc ~20° – 30°, bắt buộc hạ thấp góc kim song song trục ống cùng và chỉ đẩy kim vào trong ống tối đa 5 – 10 mm!"
      },
      "dangerCorridors": [
        "Tê tủy sống toàn bộ (Total spinal anesthesia) do đâm thủng túi màng cứng thấp hoặc nang Tarlov lớn ở S3: Tuyệt đối KHÔNG đẩy kim sâu lên cao 3 – 4 cm trong ống cùng như kỹ thuật mù kinh điển; dưới siêu âm cắt dọc chỉ cần đầu kim vượt qua dây chằng cùng – cụt 5 – 10 mm rồi bơm dịch nhìn khoang ngoài màng cứng tách mở lên trên!",
        "Tiêm nội tĩnh mạch đám rối Batson (tỷ lệ tới 10 – 15%): Bắt buộc dùng Dexamethasone không hạt, hút thử nhẹ nhàng và quan sát trực tiếp dòng dịch mở khoang trên siêu âm + Doppler."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_caudal_canal_sagittal_gray661.png",
          "figNumber": "Gray 661",
          "title": "Thiết đồ đứng dọc chính giữa ống sống thắt lưng - cùng kinh điển: Chóp tủy (L1–L2), Túi màng cứng kết thúc tại S2 và Khoang ngoài màng cứng khe cùng (Gray's Plate 661)",
          "desc": "Thiết đồ chuẩn mực số 1 của Gray (Plate 661) hiển thị trọn vẹn nón tủy, chùm đuôi ngựa, đáy túi màng cứng đóng lại ngang đốt cùng thứ hai (S2) và dây tận cùng đi xuống khe xương cùng.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 661) – Sagittal section of vertebral and sacral canal showing lower end of medulla spinalis, dural sac termination at S2, and filum terminale."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed., Plate 1211) – Vertebral Spinous Landmarks & Paraspinal Transverse Process Line",
      "surfaceLandmarks": [
        "Mỏm gai C7 (Vertebra prominens – mốc đếm trên cùng).",
        "Đầu trong gai vai (Root of scapular spine – ngang mỏm gai T3).",
        "Góc dưới xương bả vai (Inferior angle of scapula – ngang mỏm gai T7 ở tư thế chuẩn).",
        "Xương sườn 12 (ngang T12) và Đường liên mào chậu Tuffier (ngang mỏm gai L4 / khe L4–L5)."
      ],
      "surfaceProjections": "Quy tắc định khu bề mặt mỏm ngang cột sống ngực: Do mỏm gai các đốt ngực giữa (T5–T8) dốc chúc dài xuống dưới theo kiểu lợp ngói, ĐỈNH MỎM NGANG của đốt sống ngực Tn nằm ngang mức với ĐỈNH MỎM GAI của đốt sống phía trên (Tn-1), và nằm trên đường dọc cạnh sống cách đường giữa đúng 2.5 – 3.0 cm! (Nếu đo xa đường giữa > 4.0 cm sẽ rơi ra ngoài khớp sườn – ngang lên xương sườn và màng phổi!).",
      "palpationSteps": [
        "1. Bệnh nhân ngồi thẳng cong nhẹ lưng hoặc nằm sấp/nghiêng.",
        "2. Đếm mỏm gai từ C7 xuống (đối chiếu gai vai = T3, góc dưới xương vai = T7) để xác định đúng tầng cần phong bế.",
        "3. Từ đường giữa mỏm gai đo ngang sang bên 2.5 – 3.0 cm và vạch đường dọc cạnh sống dài 4 cm để đặt đầu dò."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_back_spine_scapula_gray1211.png",
          "figNumber": "Gray 1211",
          "title": "Giải phẫu bề mặt toàn bộ vùng lưng: Đối chiếu cột sống ngực - thắt lưng, cơ thang, cơ trám lớn và khối cơ dựng gai (Gray's Plate 1211)",
          "desc": "Hình thái bề mặt rãnh giữa lưng, khối lồi cơ dựng gai (Sacrospinalis) hai bên cột sống và các mốc xương bả vai T3 – T7.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1211) – Surface anatomy of the back showing trapezius, rhomboideus major, and sacrospinalis."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy (Plates 314, 388, 819) – Transverse Paraspinal, Costotransverse & Thoracolumbar Sectional Anatomy",
      "sectionPlane": "Thiết đồ cắt ngang qua cột sống ngực – khớp sườn ngang (Transverse Thoracic Paraspinal Section) và Thiết đồ đứng dọc cạnh sống cách đường giữa 3 cm.",
      "layeredStructure": [
        "Lớp 1 – Da và mô mỡ dưới da vùng lưng cạnh sống.",
        "Lớp 2 – Lá sau cân ngực – thắt lưng; ở tầng ngực cao – giữa (T1–T7) có 2 lớp cơ đai vai phủ nông là CƠ THANG (Trapezius) và CƠ TRÁM LỚN (Rhomboid major – lưu ý dưới mức T7 cơ trám lớn biến mất, chỉ còn cơ thang hoặc cơ lưng rộng!).",
        "Lớp 3 – Khối CƠ DỰNG GAI (Erector spinae / Sacrospinalis – tại mức 3 cm cạnh đường giữa chủ yếu là bụng cơ dài ngực Longissimus thoracis kèm gân bám vào đỉnh mỏm ngang).",
        "Lớp 4 – KHOANG ĐÍCH: Mặt phẳng cân sâu dưới cơ dựng gai (Sub-erector spinae fascial plane) áp trực tiếp lên vỏ xương mặt sau ĐỈNH MỎM NGANG (Tip of transverse process).",
        "Lớp 5 (Đáy chắn xương & Khoang sâu phía trước) – Bản xương mỏm ngang làm tấm khiên chắn kim! Ngay phía sâu (trước) kẽ giữa hai mỏm ngang là dây chằng sườn – ngang trên (Superior costotransverse ligament) ngăn cách với KHOANG CẠNH SỐNG NGỰC (chứa ngành trước, ngành sau, hạch giao cảm) và sâu hơn nữa là lá thành màng phổi!"
      ],
      "topographicRelations": {
        "superficialAndDeep": "Đỉnh mỏm ngang (Lớp 5) nằm nông hơn bản sống (ở trong) và nông hơn màng phổi ~1.5 – 2.0 cm – đóng vai trò điểm dừng xương cứng tuyệt đối cho đầu kim.",
        "medialAndLateral": "Dịch đầu dò VÀO TRONG (< 2 cm cách đường giữa) sẽ trượt từ mỏm ngang ngắt quãng sang BẢN SỐNG (Lamina) phẳng liên tục; dịch đầu dò RA NGOÀI (> 4 cm cách đường giữa) sẽ vượt qua khớp sườn – ngang sang THÂN XƯƠNG SƯỜN tròn có màng phổi nằm sát ngay bên dưới!"
      },
      "dangerCorridors": [
        "Nhầm cổ xương sườn tròn với đỉnh mỏm ngang vuông phẳng: Luôn quét từ ngoài (thấy sườn tròn + màng phổi) dịch dần vào trong cho tới khi bóng xương biến thành đầu vuông phẳng (mỏm ngang) và mất hẳn hình ảnh màng phổi mới được đâm kim!",
        "Khi bơm dịch (Lớp 4), phải thấy cơ dựng gai được bóc tách nhấc bổng lên khỏi mặt xương mỏm ngang theo đường thẳng (Linear hydrodissection), không phải phồng tròn trong lòng cơ."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_thoracolumbar_fascia_gray388.png",
          "figNumber": "Gray 388",
          "title": "Thiết đồ cắt ngang kinh điển khối cơ dựng gai (Sacrospinalis), mỏm ngang và ba lá cân ngực - thắt lưng (Gray's Plate 388)",
          "desc": "Thiết đồ ngang hiển thị rõ khối cơ dựng gai nằm trong buồng cân giữa lá sau và lá giữa cân ngực - thắt lưng bám thẳng vào đỉnh mỏm ngang đốt sống.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 388) – Transverse section showing disposition of lumbodorsal fascia, sacrospinalis, and transverse process."
        },
        {
          "path": "assets/images/external_anatomy/ext_sec_costotransverse_thoracic_gray314.png",
          "figNumber": "Gray 314",
          "title": "Thiết đồ cắt qua khớp sườn - ngang ngực (T3–T9) minh họa ranh giới giữa đỉnh mỏm ngang và xương sườn (Gray's Plate 314)",
          "desc": "Tương quan thiết đồ khớp sườn - ngang và dây chằng sườn - ngang ngay phía ngoài đỉnh mỏm ngang.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 314) – Section through the costotransverse joints."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed.) – Lumbosacral Surface Landmarks & Tuffier's Intercristal Line",
      "surfaceLandmarks": [
        "Điểm cao nhất hai mào chậu (Iliac crests) và Đường liên mào chậu Tuffier (Intercristal line – đi ngang qua mỏm gai L4 hoặc khe gian gai L4–L5).",
        "Hai gai chậu sau trên (PSIS – dưới lúm đồng tiền Venus, ngang mức đốt cùng S2).",
        "Rãnh giữa lưng chứa hàng mỏm gai thắt lưng L1–L5 và Mặt lưng phẳng của xương cùng ở dưới."
      ],
      "surfaceProjections": "Khớp liên mấu thắt lưng nằm cách đường giữa mỏm gai ~2.0 – 2.5 cm, còn góc giao giữa mỏm khớp trên (SAP) và gốc mỏm ngang (đích nhánh trong L1–L4) nằm cách đường giữa ~3.0 – 3.5 cm ngang mức bờ trên mỏm gai cùng tên. Riêng rãnh cánh xương cùng (đích ngành sau L5) nằm cách đường giữa ~2.5 – 3.0 cm ngay phía trên trong gai chậu sau trên (PSIS).",
      "palpationSteps": [
        "1. Đặt bệnh nhân nằm sấp có kê gối dày dưới bụng dưới để mở phẳng độ ưỡn cột sống thắt lưng.",
        "2. Sờ hai mào chậu xác định sơ bộ mức L4 và sờ hai PSIS xác định mức xương cùng S2.",
        "3. Luôn dùng đầu dò siêu âm quét dọc từ bản xương cùng đếm ngược lên L5 -> L4 -> L3 -> L2 để xác nhận chính xác 100% tầng đốt sống (vì sờ tay đường Tuffier trên người béo sai số 1 tầng tới 30 – 40%)."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_back_spine_scapula_gray1211.png",
          "figNumber": "Gray 1211",
          "title": "Giải phẫu bề mặt vùng thắt lưng - cùng: Mào chậu, rãnh mỏm gai giữa, khối cơ dựng gai và lúm PSIS (Gray's Plate 1211)",
          "desc": "Các mốc bề mặt chuẩn của vùng thắt lưng - cùng gồm mào chậu (Iliac crest), khối cơ cạnh sống và vùng chuyển tiếp thắt lưng - cùng.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1211) – Surface landmarks of lumbar spine, iliac crest, and sacroiliac region."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy (Plates 301, 388, 799) – Transverse Lumbar Vertebral & Paraspinal Sectional Anatomy",
      "sectionPlane": "Thiết đồ cắt ngang qua đốt sống thắt lưng ngang mức gốc mỏm ngang – mỏm khớp trên (Axial Lumbar Section) và qua khớp thắt lưng – cùng (cho L5 dorsal ramus).",
      "layeredStructure": [
        "Lớp 1 – Da dày vùng thắt lưng và mô mỡ dưới da (dày từ 1.5 cm đến > 6 cm tùy BMI).",
        "Lớp 2 – Lá sau cân ngực – thắt lưng (Posterior layer of thoracolumbar fascia) rất dày chắc.",
        "Lớp 3 – Khối cơ cạnh sống thắt lưng xếp từ trong ra ngoài trên thiết đồ ngang: Cơ nhiều chân (Multifidus – nằm trong ô giữa mỏm gai và mỏm khớp trên SAP!) và Cơ dài / Cơ chậu sườn (Longissimus & Iliocostalis – nằm phía ngoài mỏm khớp trên, phủ lên mặt sau mỏm ngang!).",
        "Lớp 4 – Dây chằng vú – phụ (Mamillo-accessory ligament – căng từ núm vú mỏm khớp trên tới củ phụ gốc mỏm ngang, đôi khi cốt hóa thành cầu xương đậy lên thần kinh!).",
        "Lớp 5 – KHOANG ĐÍCH: Rãnh góc chữ L tạo bởi mặt ngoài MỎM KHỚP TRÊN (SAP) và bờ trên GỐC MỎM NGANG (nơi nhánh trong L1–L4 bị ghim sát màng xương); ở mức dưới cùng là rãnh giữa mặt ngoài SAP của S1 và mặt trên CÁNH XƯƠNG CÙNG (nơi ngành sau L5 đi qua).",
        "Lớp 6 (Đáy thiết đồ & Phía trước mỏm ngang) – Lá giữa cân ngực – thắt lưng, cơ vuông thắt lưng (ở ngoài) và CƠ THẮT LƯNG LỚN (Psoas major – ở trước mỏm ngang chứa ĐÁM RỐI THẮT LƯNG và các rễ thần kinh thắt lưng thoát khỏi lỗ liên hợp!)."
      ],
      "topographicRelations": {
        "superficialAndDeep": "Đích thần kinh nằm sâu ~4 – 8 cm dưới da ngay trong góc lõm xương SAP – mỏm ngang (hoặc SAP S1 – cánh cùng).",
        "medialAndLateral": "Phía TRONG đỉnh mỏm khớp trên là bao khớp liên mấu, bản sống, dây chằng vàng và ống sống ngoài màng cứng; ngay PHÍA TRƯỚC – TRÊN bờ trên gốc mỏm ngang (nếu trượt kim hụt qua trên mỏm ngang!) là lỗ liên hợp chứa RỄ THẦN KINH THẮT LƯNG và nhánh động mạch thắt lưng!"
      },
      "dangerCorridors": [
        "Trượt kim vượt qua bờ trên gốc mỏm ngang vào lỗ liên hợp / cơ thắt lưng lớn (Lớp 6): Sau khi chọc kim trên mặt cắt ngang chạm góc xương SAP – TP, BẮT BUỘC xoay đầu dò 90° sang mặt cắt đứng dọc qua hàng mỏm ngang để xác nhận đầu kim nằm đúng bờ trên mỏm ngang chứ không lọt vào kẽ giữa hai mỏm ngang!",
        "Chỉ dùng thể tích thuốc tê chẩn đoán rất nhỏ (0.3 – 0.5 ml) để thuốc không tràn vào lỗ liên hợp hay khoang ngoài màng cứng làm dương tính giả."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_thoracolumbar_fascia_gray388.png",
          "figNumber": "Gray 388",
          "title": "Thiết đồ cắt ngang cột sống thắt lưng: Thân đốt, mỏm khớp - mỏm ngang, cơ dựng gai phía sau và cơ thắt lưng lớn (Psoas) phía trước (Gray's Plate 388)",
          "desc": "Thiết đồ ngang chuẩn mực chỉ rõ góc xương giữa mỏm khớp và gốc mỏm ngang ở mặt sau đốt sống, ngăn cách hoàn toàn với cơ Psoas major chứa đám rối thắt lưng ở phía trước mỏm ngang.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 388) – Transverse section of lumbar spine, sacrospinalis, quadratus lumborum, and psoas major."
        },
        {
          "path": "assets/images/external_anatomy/ext_sec_lumbar_sagittal_ligaments_gray301.png",
          "figNumber": "Gray 301",
          "title": "Thiết đồ đứng dọc cột sống thắt lưng minh họa vị trí lỗ liên hợp ngay dưới cuống cung - trước gốc mỏm ngang (Gray's Plate 301)",
          "desc": "Vị trí lỗ liên hợp nơi rễ thần kinh thắt lưng thoát ra nằm ngay phía trước kẽ giữa hai mỏm ngang.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 301) – Sagittal section of lumbar vertebrae, intervertebral foramen, and ligaments."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed., Plates 1211, 1216, 1217) – Surface Relations of Ribs, Costal Angles & Pleural Reflections",
      "surfaceLandmarks": [
        "Góc ức Louis (Sternal angle – ngang sụn sườn 2 phía trước); Gai vai (ngang T3), Góc dưới xương bả vai (ngang xương sườn 7 / khoang gian sườn 7 khi xuôi tay) và Xương sườn 12 ở dưới cùng.",
        "Đường góc sườn sau (Posterior costal angle line): Dải gờ xương sườn gập góc nằm cách đường giữa mỏm gai ngực khoảng 6.0 – 8.0 cm sang bên.",
        "Đường phản chiếu đáy màng phổi (Pleural reflection line – quy tắc 8–10–12: màng phổi xuống tới xương sườn 8 ở đường đòn giữa, sườn 10 ở đường nách giữa và sườn 12 ở cạnh cột sống!)."
      ],
      "surfaceProjections": "Phong bế gian sườn bắt buộc thực hiện tại ĐƯỜNG GÓC SƯỜN SAU (cách đường giữa lưng 6 – 8 cm) vì 2 lý do giải phẫu bề mặt then chốt: (1) Tại đây xương sườn dày nhất (~8 mm), rãnh dưới sườn sâu nhất trước khi nông dần ở phía trước; và (2) Chặn được dây thần kinh TRƯỚC KHI nó tách nhánh bì bên (Lateral cutaneous branch – tách ra trước đường nách sau để chi phối da thành ngực bên!).",
      "palpationSteps": [
        "1. Bệnh nhân nằm sấp (hoặc ngồi ôm gối trước ngực) với hai cánh tay vươn ra trước để hai xương bả vai trượt ra ngoài bộc lộ góc sườn các xương sườn từ 4 đến 10.",
        "2. Đếm chính xác xương sườn mục tiêu từ xương sườn 12 đi lên (kiểm tra lại bằng siêu âm).",
        "3. Đánh dấu điểm trên bờ dưới xương sườn mục tiêu cách đường giữa gai sống 6 – 7 cm."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_thorax_lateral_pleura_gray1217.png",
          "figNumber": "Gray 1217",
          "title": "Giải phẫu bề mặt lồng ngực bên: Đối chiếu các xương sườn, khoang gian sườn, phổi (tím) và giới hạn màng phổi (xanh) (Gray's Plate 1217)",
          "desc": "Hình chiếu bề mặt cho thấy toàn bộ các khoang gian sườn đến tận xương sườn 10–12 đều có lá thành màng phổi (màu xanh) lót ngay mặt trong.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1217) – Lateral view of thorax showing surface relations of ribs, lungs, and pleura."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy (Plate 819) – Sagittal Intercostal Space Section & Transverse Thoracic Wall Section",
      "sectionPlane": "Thiết đồ đứng dọc cắt vuông góc qua hai xương sườn kế tiếp tại góc sườn sau (Sagittal Costal Cross-Section) đối chiếu Thiết đồ ngang lồng ngực.",
      "layeredStructure": [
        "Lớp 1 – Da và mô mỡ dưới da vùng lưng ngực.",
        "Lớp 2 – Cơ thành lưng nông phụ thuộc tầng (Cơ thang / Cơ lưng rộng Latissimus dorsi ở nông; Cơ răng trước / Cơ chậu sườn ngực Iliocostalis thoracis phủ rìa góc sườn).",
        "Lớp 3 – Cơ gian sườn ngoài (External intercostal muscle – thớ chạy chéo xuống dưới ra trước).",
        "Lớp 4 – Cơ gian sườn trong (Internal intercostal muscle – thớ chạy vuông góc xuống dưới ra sau).",
        "Lớp 5 – KHOANG ĐÍCH: Mặt phẳng cân thần kinh – mạch máu tại RÃNH DƯỚI SƯỜN (Subcostal groove ở bờ dưới xương sườn trên), nằm kẹp giữa cơ gian sườn trong (ở nông) và cơ gian sườn trong cùng (ở sâu), xếp dọc từ trên xuống dưới theo thứ tự V – A – N: Tĩnh mạch gian sườn -> Động mạch gian sườn sau -> DÂY THẦN KINH GIAN SƯỜN (thấp nhất, thường nhô nhẹ dưới mép xương sườn!).",
        "Lớp 6 (Đáy nguy hiểm tuyệt đối – chỉ cách Lớp 5 đúng 2 – 4 mm!) – Cơ gian sườn trong cùng mỏng (Innermost intercostal), Mạc nội ngực (Endothoracic fascia) và LÁ THÀNH MÀNG PHỔI (Parietal pleura) trượt trên nhu mô phổi!"
      ],
      "topographicRelations": {
        "superficialAndDeep": "Khoảng cách từ bờ dưới xương sườn (Lớp 5) tới lá thành màng phổi (Lớp 6) cực kỳ mỏng (chỉ 2 – 4 mm!) – khi bơm đúng lớp cân Lớp 5 sẽ thấy dung dịch thuốc tê ấn lõm nhẹ màng phổi xuống sâu ('Pleural displacement sign').",
        "medialAndLateral": "Ngoài nhánh chính VAN ở bờ dưới sườn trên, tại bờ trên của xương sườn dưới còn có nhánh mạch – thần kinh phụ nhỏ (Collateral branch)."
      },
      "dangerCorridors": [
        "Tràn khí màng phổi (Pneumothorax): Luôn đặt đầu dò cắt ngang 2 xương sườn thấy rõ vạch trắng màng phổi trượt ở đáy, đi kim In-plane từ bờ trên sườn dưới chếch nông lên chạm sát mép xương bờ dưới sườn trên, tuyệt đối không mất dấu đầu kim một giây nào!",
        "Mạng mao mạch và tĩnh mạch gian sườn hấp thu thuốc tê vào máu nhanh bậc nhất cơ thể: Luôn hút thử kỹ và khống chế tổng liều thuốc tê khi phong bế đa tầng."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_intercostal_nerve_wall_gray819.png",
          "figNumber": "Gray 819",
          "title": "Thiết đồ cắt ngang toàn cảnh thành ngực: Ngành sau, hạch giao cảm, thần kinh gian sườn giữa các lớp cơ và màng phổi (Gray's Plate 819)",
          "desc": "Thiết đồ ngang kinh điển chỉ rõ đường đi thần kinh gian sườn sát mặt ngoài màng phổi (Pleura), nằm giữa cơ gian sườn ngoài - trong và vị trí tách nhánh bì bên (Lateral cutaneous).",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 819) – Transverse diagram of the course and branches of a typical intercostal nerve."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed.) – Suboccipital Triangle of Tillaux & Posterior Neck Surface Landmarks",
      "surfaceLandmarks": [
        "Ụ chẩm ngoài (External occipital protuberance - Inion): Đỉnh gồ xương chính giữa vùng chẩm.",
        "Mỏm gai đốt trục C2 (Bifid spinous process of Axis C2): Mấu xương cứng đầu tiên sờ thấy trong hõm gáy thấp hơn Inion ~3.5 – 4.5 cm (đốt C1 hoàn toàn không có mỏm gai!).",
        "Đỉnh mỏm chũm xương thái dương (Tip of mastoid process) ngay phía sau dái tai.",
        "Mỏm ngang đốt đội C1 (Transverse process of Atlas): Sờ sâu ở điểm giữa nối đỉnh mỏm chũm và góc xương hàm dưới."
      ],
      "surfaceProjections": "Tam giác dưới chẩm kinh điển của Tillaux (Suboccipital triangle): Cạnh dưới – ngoài của tam giác này được tạo bởi CƠ CHÉO ĐẦU DƯỚI (Obliquus capitis inferior - OCI) chạy chếch từ đỉnh mỏm gai C2 lên trên – ra ngoài tới mỏm ngang C1. Thần kinh chẩm lớn (GON, ngành sau C2) vòng bờ dưới cơ OCI ở điểm cách đường giữa ~2.0 – 2.5 cm rồi chạy ngược lên trong mặt phẳng cân giữa cơ OCI và cơ bán gai đầu.",
      "palpationSteps": [
        "1. Đặt bệnh nhân nằm sấp cúi gập cổ nhẹ (kê gối dưới ngực) để mở rộng hõm gáy trên.",
        "2. Dùng ngón cái sờ ụ chẩm ngoài ở đường giữa rồi trượt xuống rãnh gáy ~4 cm chạm mấu xương cứng đầu tiên là mỏm gai C2.",
        "3. Vạch đường tưởng tượng chếch ~30° từ mỏm gai C2 hướng lên mỏm ngang C1 / mỏm chũm để đặt dọc đầu dò đúng theo thớ cơ OCI."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_head_occipital_gray1193.png",
          "figNumber": "Gray 1193",
          "title": "Giải phẫu bề mặt sọ - chẩm - cổ trên: Đối chiếu ụ chẩm ngoài (Inion), đường gáy trên và mỏm chũm (Gray's Plate 1193)",
          "desc": "Tương quan bề mặt của xương chẩm, ụ chẩm ngoài, mỏm chũm và nền cổ trên nơi khu trú tam giác dưới chẩm.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1193) – Side view of head showing surface relations of skull and upper cervical bones."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy (Plates 308, 800) – Suboccipital Layered & Sagittal Craniocervical Sectional Anatomy",
      "sectionPlane": "Thiết đồ cắt ngang chếch mức C2 – C1 dọc theo bụng cơ chéo đầu dưới (Oblique Suboccipital Section) đối chiếu Thiết đồ đứng dọc giữa sọ – cổ.",
      "layeredStructure": [
        "Lớp 1 – Da vùng gáy dày chắc và lớp mô mỡ dưới da có nhiều vách xơ đặc.",
        "Lớp 2 – Dây chằng gáy ở đường giữa và lớp cơ nông nhất: Cơ thang (Trapezius – lá mỏng ở phía trong trên) cùng Cơ ức đòn chũm / Cơ gối đầu (Splenius capitis – ở phía ngoài).",
        "Lớp 3 – Cơ bán gai đầu (Semispinalis capitis – cơ dọc dày khỏe nhất vùng gáy trên, dày ~8 – 14 mm).",
        "Lớp 4 – KHOANG ĐÍCH: Mặt phẳng cân thần kinh – mạch máu dưới cơ bán gai đầu (Sub-semispinalis interfascial plane) chứa THẦN KINH CHẨM LỚN (GON – rộng 2 – 4 mm), thần kinh chẩm thứ 3 (TON ở phía trong hơn) và đám rối tĩnh mạch dưới chẩm / nhánh động mạch cổ sâu.",
        "Lớp 5 – Tầng cơ tam giác dưới chẩm: Bụng cơ chéo đầu dưới (Obliquus capitis inferior - OCI) căng từ mỏm gai C2 lên mỏm ngang C1.",
        "Lớp 6 (Đáy thiết đồ) – Mảnh cung đốt sống C2 (C2 lamina – tấm xương hình thuyền chắn an toàn phía sâu!); trong khi ở PHÍA TRÊN cơ OCI (khe C1–C2) là màng đội – trục sau che trực tiếp khoang ngoài màng cứng và tủy cổ cao, còn ở PHÍA NGOÀI tam giác là ĐỘNG MẠCH ĐỐT SỐNG (đoạn V3 uốn trên rãnh cung sau C1)!"
      ],
      "topographicRelations": {
        "superficialAndDeep": "GON nằm kẹp ngay giữa mặt sâu cơ bán gai đầu (Lớp 3) và mặt nông cơ chéo đầu dưới OCI (Lớp 5), có mảnh cung xương C2 nâng đỡ phía sâu.",
        "medialAndLateral": "Phía TRONG là mỏm gai chẻ đôi C2; cách tâm bụng cơ OCI ~1.5 – 2.0 cm về PHÍA NGOÀI – TRÊN (trong lòng tam giác dưới chẩm) là đoạn V3 ĐỘNG MẠCH ĐỐT SỐNG và thần kinh dưới chẩm C1!"
      },
      "dangerCorridors": [
        "Động mạch đốt sống đoạn V3 ở đầu ngoài cơ OCI và Khoang dưới nhện tủy cổ ở khe gian cung C1–C2: Bắt buộc luôn nhìn rõ bóng mảnh cung C2 (Lớp 6) đỡ dưới cơ OCI và giữ đầu kim ở 1/2 trong – giữa bụng cơ OCI!",
        "Hút kiểm tra âm tính và bật Doppler màu tránh đám rối tĩnh mạch dưới chẩm dày đặc quanh GON."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_suboccipital_triangle_gray800.png",
          "figNumber": "Gray 800",
          "title": "Giải phẫu phân lớp vùng gáy sâu và Tam giác dưới chẩm: Thần kinh chẩm lớn (C2), cơ OCI và động mạch đốt sống (Gray's Plate 800)",
          "desc": "Sau khi cắt lật cơ thang và cơ bán gai đầu, lộ rõ thần kinh chẩm lớn vòng dưới cơ chéo đầu dưới (Obliquus inferior) đi lên, thần kinh chẩm bé dọc bờ sau SCM và động mạch đốt sống trong tam giác dưới chẩm.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 800) – Posterior primary divisions of the upper three cervical nerves and suboccipital triangle."
        },
        {
          "path": "assets/images/external_anatomy/ext_sec_craniocervical_sagittal_gray308.png",
          "figNumber": "Gray 308",
          "title": "Thiết đồ đứng dọc giữa (Mid-sagittal Section) qua xương chẩm, C1, C2 và màng tủy cổ cao (Gray's Plate 308)",
          "desc": "Thiết đồ dọc minh họa rõ khoảng hở màng đội - trục sau giữa C1–C2 và độ dày bản xương mỏm gai - mảnh cung C2 làm mốc chắn an toàn.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 308) – Median sagittal section through occipital bone and first three cervical vertebrae."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed., Plates 1194, 1195) – Anterior Neck Surface Markings & Chassaignac's Carotid Tubercle",
      "surfaceLandmarks": [
        "Bờ dưới Sụn nhẫn (Inferior border of Cricoid cartilage): Mốc vàng giải phẫu bề mặt cổ trước – nằm ngang ĐÚNG MỨC ĐỐT SỐNG CỔ C6 (nơi hầu nối thực quản và thanh quản nối khí quản)!",
        "Củ cảnh Chassaignac (Anterior tubercle of C6 transverse process): Có thể ấn sờ thấy ở rãnh sâu giữa khí quản và bao cảnh ngang mức sụn nhẫn.",
        "Bờ trước và bờ sau cơ ức đòn chũm (SCM), cùng hõm ức – đòn ở dưới (tương ứng vùng C7–T1 sát đỉnh màng phổi)."
      ],
      "surfaceProjections": "Chuỗi giao cảm cổ chiếu dọc theo đường thẳng đứng nối từ phía sau góc hàm dưới xuống khớp ức – đòn, đi qua phía sau bao cảnh. Hạch cổ giữa nằm ngang mức sụn nhẫn (C6), còn bản thân Hạch sao (hợp nhất hạch cổ dưới + T1) nằm sâu trước cổ xương sườn 1 ngang mức mỏm ngang C7 – T1 (nơi ĐỈNH MÀNG PHỔI nhô cao vượt trên đầu trong xương đòn 2.5 – 3.0 cm!). Vì vậy, điểm đặt đầu dò bề mặt chuẩn luôn đặt cao ở mức SỤN NHẪN (C6).",
      "palpationSteps": [
        "1. Bệnh nhân nằm ngửa kê gối mỏng dưới vai, quay nhẹ đầu 15° sang đối bên và hé nhẹ miệng để làm chùng cơ bám da cổ và cơ ức đòn chũm.",
        "2. Dùng ngón trỏ lần dọc đường giữa cổ từ khuyết sụn giáp xuống qua màng nhẫn – giáp để chạm vòng cung cứng của SỤN NHẪN (tương ứng C6).",
        "3. Từ sụn nhẫn gióng thẳng ngang ra bờ ngoài cơ ức đòn chũm để đặt đầu dò cắt ngang mà không đè bẹp tĩnh mạch cảnh trong."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_neck_anterior_gray1195.png",
          "figNumber": "Gray 1195",
          "title": "Giải phẫu bề mặt cổ trước: Đối chiếu sụn giáp, sụn nhẫn (mức C6), khí quản, tuyến giáp và bao cảnh (Gray's Plate 1195)",
          "desc": "Mốc sụn nhẫn ở đường giữa cổ tương ứng chính xác mức đốt sống cổ C6 và eo tuyến giáp ngay bên dưới.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1195) – Front of neck showing surface relations of larynx, cricoid cartilage, trachea, and thyroid."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy (Plate 384) – Classical Transverse Cross-Section of the Neck at the C6 Level",
      "sectionPlane": "Thiết đồ cắt ngang cổ chuẩn qua thân đốt sống cổ thứ 6 (Transverse Cross-Section of Neck at C6 Level – Gray's Plate 384).",
      "layeredStructure": [
        "Lớp 1 – Da cổ mỏng, mô dưới da và cơ bám da cổ (Platysma; chứa tĩnh mạch cảnh ngoài ở mặt ngoài SCM).",
        "Lớp 2 – Lá nông mạc cổ sâu (Investing fascia) bao quanh cơ ức đòn chũm (SCM).",
        "Lớp 3 – Ở phía trước trong là lá trước khí quản bọc các cơ dưới móng & thùy bên tuyến giáp; ở giữa là BAO CẢNH (Carotid sheath: Động mạch cảnh chung ở trong, Tĩnh mạch cảnh trong ở ngoài, Dây X ở góc sau giữa); ở phía ngoài là cơ bậc thang trước (Scalenus anterior – có thần kinh hoành chạy trên mặt trước!).",
        "Lớp 4 – LÁ MẠC TRƯỚC SỐNG (Prevertebral fascia – đường viền màu xanh dương đậm phủ trước các cơ trước sống và cơ bậc thang trên thiết đồ Gray 384!).",
        "Lớp 5 – KHOANG ĐÍCH: Mặt phẳng dưới lá mạc trước sống (Subfascial prevertebral plane) nằm ngay trên mặt nông của CƠ DÀI CỔ (Longus colli muscle – phần cổ chéo bám củ trước C6) – đây là kênh dẫn thẳng dung dịch thuốc tê lan dọc xuống hạch sao mà không tràn vào bao cảnh hay dây thanh quản quặt ngược!",
        "Lớp 6 (Đáy thiết đồ) – Củ trước Chassaignac mỏm ngang C6, lỗ ngang C6 chứa ĐỘNG MẠCH & TĨNH MẠCH ĐỐT SỐNG, và thân đốt sống C6."
      ],
      "topographicRelations": {
        "superficialAndDeep": "Chuỗi giao cảm cổ nằm ngay trong/dưới lá mạc trước sống (Lớp 4–5), kẹp giữa thành sau bao cảnh (ở phía trước) và bụng cơ dài cổ (ở phía sau).",
        "medialAndLateral": "Phía TRONG cơ dài cổ (đặc biệt ở BÊN TRÁI cổ!) là THỰC QUẢN (Esophagus – hơi lệch trái khỏi khí quản!) và rãnh khí – thực quản chứa THẦN KINH THANH QUẢN QUẶT NGƯỢC; phía NGOÀI cơ dài cổ là củ trước C6, rễ thần kinh cổ C6 và cơ bậc thang trước; vắt ngang trước cơ dài cổ có ĐỘNG MẠCH GIÁP DƯỚI (từ thân giáp – cổ)!"
      },
      "dangerCorridors": [
        "Đi kim In-plane từ NGOÀI VÀO TRONG (Lateral-to-medial) xuyên qua bờ trước cơ bậc thang trước sát trên đỉnh củ trước C6 giúp đi hoàn toàn PHÍA SAU bao cảnh và TRÁNH thực quản + thần kinh thanh quản quặt ngược ở phía trong!",
        "10% người bệnh có động mạch đốt sống chưa chui vào lỗ ngang ở C6 (nằm trần ngay trước củ trước C6!) + động mạch giáp dưới bắt ngang -> BẮT BUỘC quét Color Doppler toàn bộ thiết đồ trước khi đâm kim!"
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_neck_c6_fascia_gray384.png",
          "figNumber": "Gray 384",
          "title": "Thiết đồ cắt ngang cổ kinh điển tại mức đốt sống C6 hiển thị đầy đủ các khoang mạc cổ (màu xanh) (Gray's Plate 384)",
          "desc": "Thiết đồ ngang vô giá của Gray tại đúng mức C6: chỉ rõ lá mạc trước sống bọc mặt trước cơ dài cổ (phía sau bao cảnh, phía ngoài thực quản - khí quản) và động mạch đốt sống trong lỗ ngang C6.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 384) – Cross-section diagram of the human neck at the level of C6 showing fascial compartments."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed., Plates 1219, 1220) – Anterolateral Abdominal Wall & ASIS–Umbilicus Line",
      "surfaceLandmarks": [
        "Gai chậu trước trên (Anterior Superior Iliac Spine - ASIS): Đỉnh xương nhô rõ ở hố chậu ngoài.",
        "Mào chậu trước (Anterior iliac crest) ngay phía sau trên ASIS.",
        "Rốn (Umbilicus) ở đường giữa và Bờ ngoài cơ thẳng bụng (Linea semilunaris).",
        "Dây chằng bẹn (nối ASIS tới củ mu)."
      ],
      "surfaceProjections": "Trên đường thẳng nối từ đỉnh gai chậu trước trên (ASIS) hướng chéo lên RỐN (ASIS – Umbilicus line): Cả hai dây thần kinh chậu bẹn (IIN, L1) và chậu hạ vị (IHN, T12–L1) đều xuyên từ mặt sau vào khoang giữa cơ chéo trong và cơ ngang bụng ngay phía trên mào chậu, và chạy song song cắt vuông góc qua đường nối ASIS – Rốn tại khoảng CÁCH ĐỈNH ASIS TỪ 1.5 ĐẾN 3.0 CM VỀ PHÍA RỐN (IIN nằm gần ASIS hơn ~1.5 – 2 cm, IHN nằm phía trong hơn ~2.5 – 3.5 cm).",
      "palpationSteps": [
        "1. Bệnh nhân nằm ngửa duỗi chân thoải mái để thành bụng mềm.",
        "2. Dùng ngón cái sờ rõ đỉnh xương của gai chậu trước trên (ASIS) và mép trong mào chậu.",
        "3. Kẻ đường thẳng nối từ ASIS hướng thẳng tới rốn; vùng đặt đầu dò nằm ngay sát bờ trong ASIS trên đường thẳng này."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_abdomen_inguinal_gray1219.png",
          "figNumber": "Gray 1219",
          "title": "Giải phẫu bề mặt thành bụng trước - vùng hố chậu bẹn: Gai chậu trước trên (ASIS), rốn, đường bán nguyệt và nếp bẹn (Gray's Plate 1219)",
          "desc": "Các mốc bề mặt kinh điển của thành bụng trước dưới: rốn, bờ ngoài cơ thẳng bụng, gai chậu trước trên (ASIS) và dây chằng bẹn.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1219) – Surface anatomy of the front of the abdomen and inguinal region."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy (Plates 388, 546) – Oblique Sectional Anatomy of the Three Abdominal Wall Layers Medial to ASIS",
      "sectionPlane": "Thiết đồ cắt chéo vuông góc thành bụng dọc theo đường nối ASIS – Rốn (Oblique Section along ASIS–Umbilicus Line).",
      "layeredStructure": [
        "Lớp 1 – Da bụng dưới và mô mỡ dưới da (gồm lá mỡ nông Camper và lá màng xơ Scarpa ở sâu).",
        "Lớp 2 – Cơ chéo bụng ngoài (External oblique muscle / aponeurosis – ở mức ngang ASIS có thể đã bắt đầu chuyển thành lá cân mỏng tăng âm).",
        "Lớp 3 – Cơ chéo bụng trong (Internal oblique muscle - IOM – luôn là LỚP CƠ DÀY VÀ RÕ NHẤT trong 3 cơ thành bụng tại hố chậu!).",
        "Lớp 4 – KHOANG ĐÍCH: Mặt phẳng cân thần kinh – mạch máu (Neurovascular TAP plane) nằm kẹp giữa mặt sâu cơ chéo bụng trong (Lớp 3) và mặt nông cơ ngang bụng (Lớp 5), chứa THẦN KINH CHẬU BẸN (gần ASIS hơn), THẦN KINH CHẬU HẠ VỊ (phía trong hơn) và NHÁNH LÊN ĐỘNG MẠCH MŨ CHẬU SÂU (Ascending branch of deep circumflex iliac artery)!",
        "Lớp 5 – Cơ ngang bụng (Transversus abdominis muscle - TAM – lớp cơ mỏng sẫm màu nằm sâu nhất).",
        "Lớp 6 (Đáy nguy hiểm sát liền!) – Mạc ngang (Transversalis fascia), mỡ tiền phúc mạc và LÁ THÀNH PHÚC MẠC (Parietal peritoneum) bọc sát manh tràng (bên phải) hoặc đại tràng sigma / ruột non (bên trái)!"
      ],
      "topographicRelations": {
        "superficialAndDeep": "Cơ ngang bụng (Lớp 5) ở người gầy hoặc người già chỉ dày 2 – 4 mm ngăn cách khoang đích (Lớp 4) với ổ phúc mạc và ruột (Lớp 6)!",
        "medialAndLateral": "Đầu NGOÀI của thiết đồ tựa trực tiếp lên bóng xương MÀO CHẬU / ASIS (nơi cả 3 cơ bám vào – mốc neo giải phẫu giúp không bao giờ đếm nhầm lớp mỡ Scarpa thành cơ!); sát cạnh IIN/IHN cách ASIS ~1.5 – 2 cm luôn có nhánh lên động mạch mũ chậu sâu."
      },
      "dangerCorridors": [
        "Thủng phúc mạc và thủng ruột (Bowel perforation): Tuyệt đối tựa một đầu của đầu dò lên xương ASIS để đếm đủ 3 lớp cơ từ bờ xương đi ra và quan sát nhu động ruột trượt dưới phúc mạc trước khi đâm kim!",
        "Bật Color Doppler tại Lớp 4 để tìm nhánh lên động mạch mũ chậu sâu (vừa giúp xác nhận đúng mặt phẳng chứa thần kinh vừa tránh chọc vào lòng mạch)."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_thoracolumbar_fascia_gray388.png",
          "figNumber": "Gray 388",
          "title": "Thiết đồ cắt ngang ba lớp cơ dẹt thành bụng: Chéo ngoài (Obliquus externus) - Chéo trong (Obliquus internus) - Ngang bụng (Transversus) (Gray's Plate 388)",
          "desc": "Phần bên thiết đồ ngang của Gray hiển thị sắc nét thứ tự 3 lớp cơ thành bụng và khoang cân giữa cơ chéo trong - cơ ngang bụng nơi thần kinh chậu bẹn/chậu hạ vị đi qua.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 388) – Transverse section showing External oblique, Internal oblique, and Transversus abdominis layers."
        },
        {
          "path": "assets/images/external_anatomy/ext_sec_inguinal_canal_layers_gray546.png",
          "figNumber": "Gray 546",
          "title": "Giải phẫu mặt sâu thành bụng dưới - vùng bẹn: Động mạch mũ chậu sâu (sát ASIS) và động mạch thượng vị dưới (Gray's Plate 546)",
          "desc": "Nhìn từ mặt trong thành bụng thấy rõ nhánh động mạch mũ chậu sâu chạy dọc sát ASIS (cùng lớp thần kinh chậu bẹn) và động mạch thượng vị dưới ở bờ trong lỗ bẹn sâu.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 546) – Posterior view of anterior abdominal wall showing deep circumflex iliac and inferior epigastric vessels."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed., Plate 1235) – Cubital Fossa Venipuncture Topography & Target Enthesis Landmarks",
      "surfaceLandmarks": [
        "Mốc lấy máu tự thân tại Hố trụ trước khuỷu (Cubital fossa): Tĩnh mạch giữa khuỷu (Median cubital vein – nối chéo từ tĩnh mạch đầu sang tĩnh mạch nền), Tĩnh mạch đầu (Cephalic vein – bờ ngoài cơ nhị đầu) và Tĩnh mạch nền (Basilic vein – bờ trong).",
        "Gân cơ nhị đầu cánh tay và Trẽ cân cơ nhị đầu (Bicipital aponeurosis / Lacertus fibrosus) căng chéo vào trong.",
        "Mốc bề mặt của vùng khớp hoặc điểm bám gân đích (vai, khuỷu, cổ tay, háng, gối, cổ bàn chân)."
      ],
      "surfaceProjections": "Tại hố trụ (nơi lấy 20 – 30 ml máu tĩnh mạch bằng kim lớn thu chế phẩm PRP): Tĩnh mạch giữa khuỷu nằm ngay mặt nông của cân cơ nhị đầu; ngay dưới trẽ cân này ở PHÍA TRONG gân nhị đầu là ĐỘNG MẠCH CÁNH TAY và THẦN KINH GIỮA, còn sát tĩnh mạch nền là thần kinh bì cẳng tay trong! Do đó nửa ngoài tĩnh mạch giữa khuỷu hoặc tĩnh mạch đầu luôn là điểm lấy máu an toàn nhất.",
      "palpationSteps": [
        "1. Buộc garô cánh tay vừa đủ áp lực tĩnh mạch: sờ gân cơ nhị đầu ở giữa hố trụ và bắt mạch đập động mạch cánh tay ngay bờ trong gân nhị đầu trước khi lấy máu bằng kim bướm 18G – 21G.",
        "2. Tại vùng khớp/gân nhận PRP: khám sờ nắn xác định chính xác 'tâm điểm đau cơ học' trên diện bám xương – gân (Osteotendinous enthesis) hoặc ngách hoạt dịch khớp.",
        "3. Đánh dấu điểm vào da cách xa vùng sẹo/nhiễm trùng và chỉ gây tê nốt phồng da nông ngoài bao gân (tránh thuốc tê thấm vào mô nhận PRP làm ức chế hạt Alpha tiểu cầu)."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_upper_front_nerves_arteries_gray1235.png",
          "figNumber": "Gray 1235",
          "title": "Giải phẫu bề mặt hố trụ và chi trên: Đối chiếu tĩnh mạch nông với động mạch cánh tay và thần kinh giữa bên dưới (Gray's Plate 1235)",
          "desc": "Hình chiếu bề mặt chỉ rõ vị trí động mạch cánh tay và thần kinh giữa nằm ngay bờ trong gân nhị đầu dưới nền tĩnh mạch khuỷu trong.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1235) – Surface markings of antecubital vessels and nerves."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "OpenStax (Fig. 9.07) & Gray's Anatomy – Micro- & Macro-Sectional Anatomy of Synovial Joints & Fibrocartilaginous Entheses",
      "sectionPlane": "Thiết đồ cắt dọc qua phức hợp Điểm bám xương – gân 4 vùng mô học (4-Zone Enthesis Organ Section) VÀ Thiết đồ chuẩn của Khớp hoạt dịch (Synovial Joint Cavity Section).",
      "layeredStructure": [
        "Tại Hố trụ lấy máu (Thiết đồ ngang khuỷu trước): Da mỏng -> Mạc nông chứa Tĩnh mạch giữa khuỷu (đích lấy máu) & các nhánh thần kinh bì cẳng tay -> Trẽ cân cơ nhị đầu (Lacertus fibrosus – mái chắn bảo vệ) -> Khoang sâu chứa Động mạch cánh tay và Thần kinh giữa ở bờ trong gân nhị đầu.",
        "Trên thiết đồ Khớp hoạt dịch (đích của LP-PRP nghèo bạch cầu): Da & mạc sâu -> Bao xơ khớp (Fibrous capsule) -> Màng hoạt dịch giàu mạch máu (Synovial intima & subintima – đích điều hòa kháng viêm IL-1ra!) -> KHOANG ĐÍCH: Buồng dịch khớp -> Sụn khớp hyalin vô mạch và bản xương dưới sụn.",
        "Trên thiết đồ Điểm bám xương – gân 4 vùng Benjamin (Enthesis – đích của PRP tái tạo gân): Bao quanh gân (Paratenon) -> Vùng 1: Sợi collagen type I song song -> Vùng 2 (TÂM ĐIỂM RÁCH BÁN PHẦN & THOÁI HÓA NHẦY): Sụn sợi không khoáng hóa -> Đường vôi hóa Tidemark -> Vùng 3: Sụn sợi khoáng hóa -> Vùng 4: Vỏ xương dưới sụn.",
        "Lớp phức hợp Đệm mỡ – Bao hoạt dịch kề điểm bám (Synovio-entheseal complex, ví dụ đệm mỡ Hoffa/Kager & túi hoạt dịch sát gân): Tầng mô giàu vi mạch và sợi thần kinh cảm thụ đau C-fibers nằm ngay mặt sâu điểm bám gân (cần tránh bơm tràn PRP có bạch cầu cao gây phản ứng viêm bao hoạt dịch cấp)."
      ],
      "topographicRelations": {
        "superficialAndDeep": "Trong thoái hóa điểm bám gân (Tendinosis), các vi mạch tân sinh bất thường kèm sợi thần kinh đau xâm nhập từ lớp mỡ/paratenon mặt sâu vào Vùng 1–2 làm phá vỡ cấu trúc sợi song song tạo hốc giảm âm nội gân.",
        "medialAndLateral": "Trong tràn dịch khớp thoái hóa, khoang dịch nội khớp chứa nồng độ cao các metalloproteinase (MMPs) và cytokine tiền viêm – bắt buộc hút cạn toàn bộ dịch khớp viêm trước khi bơm PRP để các yếu tố tăng trưởng tiếp xúc trực tiếp màng hoạt dịch và sụn khớp!"
      },
      "dangerCorridors": [
        "Độc tính hóa học lên tiểu cầu và tế bào sụn: TUYỆT ĐỐI KHÔNG trộn Lidocaine nồng độ cao (> 1%), Bupivacaine, Ropivacaine hoặc Corticosteroid chung vào khoang vừa bơm PRP!",
        "Khi châm kim rải hạt tiêu (Peppering / Fenestration) đưa PRP vào Vùng 2–3 điểm bám gân, luôn bật Power Doppler định vị ổ tân mạch bệnh lý nhưng tránh đâm thủng các động mạch nuôi chính hoặc dây chằng giữ vững khớp nằm sát bên dưới."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_synovial_joint_bursa_openstax907.jpg",
          "figNumber": "OpenStax 9.07",
          "title": "Thiết đồ cắt lớp cấu trúc chuẩn của Khớp hoạt dịch, Bao hoạt dịch và Bao gân (OpenStax Anatomical Atlas)",
          "desc": "Thiết đồ phân lớp chuẩn của khớp hoạt dịch (bao xơ, màng hoạt dịch, khoang khớp, sụn khớp), túi hoạt dịch đệm (Bursa) và bao hoạt dịch gân (Tendon sheath) – ba đích vi giải phẫu chính của y học tái tạo PRP.",
          "atlasSource": "OpenStax Anatomy & Physiology (CC-BY 4.0, Fig. 9.07) – Sectional anatomy of synovial joint, bursa, and tendon sheath."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed.) – Rotator Cuff & Subacromial Surface Topography; Codman's Critical Zone Landmarks",
      "surfaceLandmarks": [
        "Bờ trước ngoài mỏm cùng vai (Anterolateral acromion) và dây chằng quạ – cùng vai (nối sang mỏm quạ).",
        "Củ lớn xương cánh tay (Greater tubercle – gồm 3 diện bám: diện trên cho cơ trên gai, diện giữa cho cơ dưới gai, diện dưới cho cơ tròn bé).",
        "Củ bé xương cánh tay (Lesser tubercle – nơi bám gân dưới vai ở phía trước).",
        "Điểm Codman: Cách góc trước ngoài mỏm cùng vai 1 cm xuống dưới trước khi tay xoay trong."
      ],
      "surfaceProjections": "Khoảng 80% ổ lắng đọng tinh thể Hydroxyapatite nằm tại 'vùng vô mạch tới hạn Codman' của gân trên gai (cách diện bám củ lớn 1.0 – 1.5 cm về phía trong). Ở tư thế giải phẫu trung tính, điểm này bị che lấp ngay dưới mỏm cùng vai; khi duỗi – khép – xoay trong cánh tay (tư thế Crass), ổ vôi trượt ra trước ngoài ~2 cm nằm ngay dưới da – cơ delta trước ngoài.",
      "palpationSteps": [
        "1. Đối chiếu phim X-quang vai thẳng (xoay trong & xoay ngoài) và nghiêng Y-view để xác định ổ vôi thuộc gân trên gai (trước ngoài), gân dưới gai (sau ngoài) hay gân dưới vai (trước trong).",
        "2. Đưa tay bệnh nhân vào tư thế bộc lộ tối ưu tương ứng (Crass cải tiến cho trên gai; bàn tay ôm vai đối diện cho dưới gai; xoay ngoài cánh tay cho dưới vai).",
        "3. Sờ bờ mỏm cùng vai, củ lớn và điểm đau nhói dữ dội nhất dưới da để đặt tâm đầu dò."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_upper_front_topography_gray1231.png",
          "figNumber": "Gray 1231",
          "title": "Giải phẫu bề mặt ụ cơ delta, mỏm cùng vai và đầu trên xương cánh tay (Gray's Plate 1231)",
          "desc": "Định khu vùng vòm cùng vai - củ lớn xương cánh tay nơi bộc lộ vùng tới hạn gân chóp xoay khi xoay trong cánh tay.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1231) – Surface topography of shoulder and deltoid region."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy & OpenStax Sectional Anatomy – Coronal Section of Rotator Cuff Enthesis & Bursa",
      "sectionPlane": "Thiết đồ đứng ngang (Coronal Section) qua vòm mỏm cùng vai, bao hoạt dịch SASD và vùng bám tận xương – gân (Enthesis) của gân trên gai tại củ lớn.",
      "layeredStructure": [
        "Lớp 1 – Da và lớp mỡ dưới da vùng vai ngoài (dày ~4 – 10 mm).",
        "Lớp 2 – Mạc nông, bó giữa/trước cơ delta (dày ~12 – 18 mm) và lớp mỡ quanh bao hoạt dịch.",
        "Lớp 3 – ĐÍCH PHỐI HỢP CUỐI THỦ THUẬT: Khoang bao hoạt dịch SASD (nơi thường viêm phù nề dữ dội hoặc có nguy cơ ổ vôi tự vỡ tràn lên gây viêm bao hoạt dịch tinh thể cấp tính; là vị trí bơm Corticosteroid sau khi rửa vôi).",
        "Lớp 4 – KHOANG ĐÍCH CHÍNH: Nhu mô giữa của gân cơ trên gai (5 lớp mô học của Clark: bao gân nông -> bó sợi collagen song song dày -> lớp sợi đan chéo chứa ổ chuyển sản sụn sợi & tinh thể canxi -> lớp bao khớp sâu -> sụn sợi khoáng hóa bám củ lớn).",
        "Lớp 5 (Đáy thiết đồ) – Vỏ xương diện trên củ lớn và sụn hyalin chỏm xương cánh tay ngăn cách với ổ khớp vai."
      ],
      "topographicRelations": {
        "superficialAndDeep": "Ổ vôi thường nằm lơ lửng trong Lớp 4, cách lá tạng bao hoạt dịch SASD ở phía nông chỉ 1 – 2 mm (vỏ sợi bao trên ổ vôi) và cách sụn chỏm cánh tay ở phía sâu 2 – 3 mm.",
        "medialAndLateral": "Phía trong là chỗ nối cơ – gân nằm dưới mỏm cùng vai; phía ngoài là diện bám sụn sợi vào củ lớn và đám rối mạch nối mũ cánh tay – ngực cùng vai."
      },
      "dangerCorridors": [
        "Bảo tồn mái gân phía nông (Superficial tendon roof): Chỉ chọc kim 18G qua một lỗ duy nhất đi ngang từ ngoài vào đúng tâm ổ vôi; tránh chọc nát mái trên của gân hoặc bơm quá áp lực làm nổ toác vôi rách thông gân.",
        "Sau khi rửa sạch vôi trong Lớp 4, bắt buộc rút lùi mũi kim ra Lớp 3 (khoang SASD) mới được bơm Corticosteroid."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_shoulder_coronal_dbcls.png",
          "figNumber": "Coronal Sec.",
          "title": "Thiết đồ đứng ngang tương quan trực tiếp giữa lõi gân trên gai và khoang bao hoạt dịch SASD phủ trên (DBCLS Atlas)",
          "desc": "Thiết đồ cho thấy rõ ranh giới sát liền giữa bề dày gân trên gai (nơi chứa ổ vôi) và khoang bao hoạt dịch SASD màu xanh đậm ngay phía nông.",
          "atlasSource": "DBCLS Anatomical Atlas (CC-BY 4.0) – Coronal section of supraspinatus tendon and SASD bursa."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed., Plate 1194) – Posterior Triangle of Neck & Erb's Nerve Point",
      "surfaceLandmarks": [
        "Bờ sau cơ ức đòn chũm (Posterior border of Sternocleidomastoid - SCM): Ranh giới trước của tam giác cổ sau.",
        "Đỉnh và bờ sau mỏm chũm xương thái dương (Mastoid process) ngay sau tai.",
        "Điểm thần kinh cổ của Erb (Erb's punctum nervosum): Nằm tại trung điểm bờ sau cơ ức đòn chũm (ngang mức bờ trên sụn giáp / C4–C5), nơi cả 4 nhánh cảm giác của đám rối cổ nông tỏa ra."
      ],
      "surfaceProjections": "Từ điểm Erb ở giữa bờ sau cơ ức đòn chũm, thần kinh chẩm bé (LON, nhánh trước C2–C3) móc vòng qua thần kinh phụ (CN XI) rồi chạy thẳng ĐỨNG DỌC LÊN TRÊN BÁM SÁT BỜ SAU PHẦN BA TRÊN CƠ ỨC ĐÒN CHŨM hướng tới điểm nằm ngay phía sau mỏm chũm (~2.5 cm sau ống tai ngoài trên đường gáy trên).",
      "palpationSteps": [
        "1. Bệnh nhân nằm nghiêng sang bên lành, yêu cầu hơi nâng đầu xoay nhẹ cằm sang đối bên để bờ sau cơ ức đòn chũm nổi rõ như một dải thừng.",
        "2. Xác định đỉnh mỏm chũm sau tai và lần dọc theo bờ sau cơ SCM xuống dưới ~2 – 3 cm.",
        "3. Ấn dọc bờ sau 1/3 trên cơ SCM để tái hiện dấu hiệu Tinel lan lên vùng da sau vành tai – thái dương chẩm."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_neck_lateral_gray1194.png",
          "figNumber": "Gray 1194",
          "title": "Giải phẫu bề mặt cổ bên: Cơ ức đòn chũm, mỏm chũm và tam giác cổ sau (Gray's Plate 1194)",
          "desc": "Định khu bờ sau phần trên cơ ức đòn chũm từ điểm Erb chạy thẳng lên mỏm chũm là đường chiếu chuẩn của thần kinh chẩm bé.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1194) – Surface anatomy of the side of the neck and sternocleidomastoid."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy (Plates 384, 800) – Transverse Section of Upper Posterolateral Neck",
      "sectionPlane": "Thiết đồ cắt ngang (Axial Section) qua phần cao cổ bên – sau mỏm chũm 2 cm cắt ngang bờ sau cơ ức đòn chũm và cơ gối đầu.",
      "layeredStructure": [
        "Lớp 1 – Da cổ bên sau mỏng và mô dưới da (chứa tĩnh mạch cảnh ngoài External jugular vein ở đoạn thấp hơn và hạch bạch huyết sau tai).",
        "Lớp 2 – Lá nông mạc cổ sâu (Investing layer of deep cervical fascia – tách đôi bao bọc cơ ức đòn chũm rồi chập lại ở bờ sau cơ).",
        "Lớp 3 – KHOANG ĐÍCH: Mặt phẳng cân ngay dưới/sát mép BỜ SAU CƠ ỨC ĐÒN CHŨM (Posterior edge of SCM) và nằm trên mặt nông cơ gối đầu (Splenius capitis) – nơi THẦN KINH CHẨM BÉ (LON, đường kính 1 – 2 mm) trượt lên da đầu.",
        "Lớp 4 – Cơ gối đầu (Splenius capitis) và cơ nâng vai (Levator scapulae); lưu ý ở khoảng giữa cổ, THẦN KINH PHỤ (Spinal accessory nerve - CN XI) đi chéo dưới lá nông mạc cổ trên mặt cơ nâng vai cách LON chỉ 1 – 1.5 cm về phía dưới!",
        "Lớp 5 (Đáy thiết đồ) – Các cơ cổ sâu (cơ dài đầu, bán gai đầu) và mấu ngang đốt sống cổ cao."
      ],
      "topographicRelations": {
        "superficialAndDeep": "LON nằm rất nông (chỉ sâu ~4 – 8 mm dưới mặt da) ngay mặt nông mạc cơ gối đầu dưới mép thon bờ sau SCM.",
        "medialAndLateral": "Phía trước ngoài là bụng cơ ức đòn chũm và thần kinh tai lớn (Great auricular nerve chạy chéo ra mặt ngoài SCM hướng dái tai); phía dưới dọc sàn tam giác cổ sau là thần kinh vận động CN XI nuôi cơ thang."
      },
      "dangerCorridors": [
        "Thần kinh phụ (CN XI): Phong bế LON ở cao (cách dưới mỏm chũm 2 cm) với thể tích nhỏ (2 – 3 ml) tránh tiêm thấp gần điểm Erb thể tích lớn gây liệt tạm thời cơ thang!",
        "Tránh chọc vào tĩnh mạch cảnh ngoài chạy nông dưới cơ bám da cổ."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_suboccipital_triangle_gray800.png",
          "figNumber": "Gray 800",
          "title": "Tương quan phân lớp của thần kinh chẩm bé (Lesser occipital) dọc bờ sau cơ ức đòn chũm và thần kinh tai lớn (Gray's Plate 800)",
          "desc": "Bờ trái bản vẽ của Gray minh họa rõ đường đi nông của thần kinh chẩm bé ôm dọc bờ sau cơ ức đòn chũm trên mặt cơ gối đầu.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 800) – Course of lesser occipital nerve along posterior border of sternocleidomastoid."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed., Plates 1193, 1196) – Superior Nuchal Line & Scalp Neurovascular Projections",
      "surfaceLandmarks": [
        "Ụ chẩm ngoài (External occipital protuberance - Inion) ở đường giữa chẩm.",
        "Đỉnh mỏm chũm (Tip of mastoid process) ở phía ngoài sau tai.",
        "Đường gáy trên (Superior nuchal line): Gờ xương cong ngang nối từ Inion sang mỏm chũm (nơi bám của cơ thang và cơ ức đòn chũm).",
        "Mạch đập Động mạch chẩm (Occipital artery pulse) sờ thấy trên gờ xương cách Inion ~3 cm."
      ],
      "surfaceProjections": "Trên đoạn cong nối từ Inion tới đỉnh mỏm chũm (dài trung bình ~8 – 9 cm): Động mạch chẩm và thần kinh chẩm lớn (GON) chọc xuyên qua cân gáy lên mô dưới da đầu tại ĐIỂM NỐI 1/3 TRONG VÀ 2/3 NGOÀI (cách Inion đúng 2.5 – 3.0 cm sang bên), trong đó GON nằm sát phía TRONG động mạch chẩm.",
      "palpationSteps": [
        "1. Bệnh nhân ngồi cúi đầu tựa trán lên bàn khám hoặc nằm sấp.",
        "2. Sờ rõ đỉnh ụ chẩm ngoài ở chính giữa và đo ngang sang bên đau 2.5 – 3.0 cm dọc theo gờ xương đường gáy trên.",
        "3. Ấn nhẹ đầu ngón trỏ bắt nhịp đập của động mạch chẩm và xác nhận điểm đau chói Arnold ngay bờ trong mạch đập."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_head_occipital_gray1193.png",
          "figNumber": "Gray 1193",
          "title": "Giải phẫu bề mặt xương chẩm, ụ chẩm ngoài và đường gáy trên (Gray's Plate 1193)",
          "desc": "Mốc xương sọ vùng chẩm đối chiếu vị trí thoát nông của bó mạch thần kinh chẩm lớn trên đường gáy trên.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1193) – Surface relations of occipital bone, inion, and mastoid."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy (Plate 1196) – Classical 5-Layer 'SCALP' Sectional Anatomy at the Occiput",
      "sectionPlane": "Thiết đồ đứng ngang tiếp tuyến qua da đầu vùng chẩm tại mức đường gáy trên (Transverse Occipital Scalp Section).",
      "layeredStructure": [
        "Lớp 1 (S – Skin) – Da đầu vùng chẩm rất dày (3 – 5 mm) chứa nhiều nang tóc và tuyến bã.",
        "Lớp 2 (C – Connective tissue / KHOANG ĐÍCH) – Lớp mô liên kết mỡ đặc dưới da có nhiều vách xơ dọc gắn chặt da với cân galea: TOÀN BỘ ĐỘNG MẠCH CHẨM (Occipital artery), tĩnh mạch và THẦN KINH CHẨM LỚN ĐOẠN XA (Distal GON) nằm trọn trong Lớp 2 này! (Khi đứt mạch ở lớp này vách xơ giữ miệng mạch hở gây chảy máu nhiều).",
        "Lớp 3 (A – Aponeurosis / Galea aponeurotica & Bụng chẩm cơ chẩm – trán Occipitalis) – Lá cân gân sọ căng chắc (hoặc trẽ cân cơ thang tại đường gáy trên).",
        "Lớp 4 (L – Loose areolar tissue) – Khoang mô liên kết lỏng lẻo dưới cân galea ('Danger space of scalp' chứa tĩnh mạch liên lạc xuyên sọ).",
        "Lớp 5 (P – Pericranium & Calvaria – Đáy thiết đồ) – Màng xương ngoài sọ và bản ngoài – tủy xương – bản trong xương sọ chẩm (ngăn cách với xoang tĩnh mạch ngang và tiểu não bên trong!)."
      ],
      "topographicRelations": {
        "superficialAndDeep": "Ở lối tiếp cận xa trên đường gáy trên, cả GON và động mạch chẩm đã xuyên qua cân cơ để nằm NÔNG trên mặt cân galea/màng xương ở độ sâu chỉ 5 – 10 mm dưới mặt da đầu!",
        "medialAndLateral": "Thần kinh chẩm lớn (GON) nằm ngay PHÍA TRONG (Medial) cách động mạch chẩm 2 – 5 mm; đi tiếp ra ngoài cách Inion ~5 – 6 cm là thần kinh chẩm bé (LON)."
      },
      "dangerCorridors": [
        "Tiêm mù rất dễ chọc thủng động mạch chẩm trong Lớp 2 gây khối máu tụ da đầu căng đau: Bắt buộc bật Color Doppler định vị động mạch chẩm rồi đưa mũi kim vào phía trong mạch.",
        "CẢNH BÁO TỬ VONG: Bệnh nhân từng mổ mở sọ hố sau (Suboccipital craniectomy) mất bản xương Lớp 5 – bắt buộc kiểm tra siêu âm thấy đường vỏ xương sọ tăng âm liên tục phía dưới trước khi chọc kim!"
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_scalp_occipital_layers_gray1196.png",
          "figNumber": "Gray 1196",
          "title": "Thiết đồ cắt lớp kinh điển 5 tầng da đầu - hộp sọ - màng não (SCALP Section - Gray's Plate 1196)",
          "desc": "Thiết đồ cắt lớp chuẩn mực hiển thị 5 tầng SCALP: các mạch máu và thần kinh chẩm đoạn xa nằm ở lớp mô liên kết đặc trên cân galea và bản xương sọ.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1196) – Diagrammatic section of scalp, skull, and meninges."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed., Plates 1194, 1195) – Interscalene Groove & Cervical Transverse Process Landmarks",
      "surfaceLandmarks": [
        "Bờ trên sụn giáp (Superior border of thyroid cartilage): Tương ứng mức C4 (đĩa C3–C4 / C4–C5).",
        "Vòng sụn nhẫn (Cricoid cartilage): Tương ứng chính xác mức mấu ngang C6 (củ Chassaignac).",
        "Rãnh gian cơ bậc thang (Interscalene groove): Rãnh dọc sờ thấy ngay phía sau bờ ngoài cơ ức đòn chũm (giữa cơ bậc thang trước và cơ bậc thang giữa).",
        "Hố thượng đòn (Supraclavicular fossa) ở dưới: Tương ứng mức C7 và thân trên đám rối cánh tay."
      ],
      "surfaceProjections": "Các mấu ngang cổ C5, C6, C7 nằm xếp dọc theo một đường thẳng nối từ đỉnh mỏm chũm xuống điểm giữa xương đòn (dọc sát bờ sau cơ ức đòn chũm): C5 nằm cao hơn mức sụn nhẫn ~1.5 cm; C6 nằm ngang đúng mức sụn nhẫn; C7 nằm thấp hơn mức sụn nhẫn ~1.5 cm ngay trên nền hố thượng đòn.",
      "palpationSteps": [
        "1. Đặt bệnh nhân nằm nghiêng sang bên lành (giúp bộc lộ rộng mặt bên – sau cổ để đi kim từ sau ra trước).",
        "2. Sờ vòng sụn nhẫn ở cổ trước và gióng ngang sang rãnh gian cơ bậc thang ngay bờ sau cơ ức đòn chũm (đánh dấu mức chuẩn C6).",
        "3. Nhắc bệnh nhân hít mũi ngắn (Sniff test) để cảm nhận rõ bờ cơ bậc thang trước và cơ bậc thang giữa dưới ngón tay."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_neck_lateral_gray1194.png",
          "figNumber": "Gray 1194",
          "title": "Giải phẫu bề mặt cổ bên: Rãnh sau cơ ức đòn chũm nơi xuất chiếu chuỗi mấu ngang và rễ cổ C5 - C7 (Gray's Plate 1194)",
          "desc": "Định khu bề mặt tam giác cổ bên ngay sau cơ ức đòn chũm tương ứng rãnh gian cơ bậc thang.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1194) – Surface anatomy of lateral neck and sternocleidomastoid border."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy (Plates 384, 770, 799) – Axial Cross-Section of Cervical Intertubercular Groove & Radicular Vessels",
      "sectionPlane": "Thiết đồ cắt ngang (Axial Cross-Section) đi qua lỗ liên hợp và rãnh mấu ngang đốt sống cổ C5, C6 hoặc C7.",
      "layeredStructure": [
        "Lớp 1 – Da cổ bên, mô mỡ dưới da và cơ bám da cổ (có tĩnh mạch cảnh ngoài và các nhánh đám rối cổ nông chạy ngay trên mạc).",
        "Lớp 2 – Lá nông mạc cổ sâu và bờ sau cơ ức đòn chũm (ở nửa trước thiết đồ).",
        "Lớp 3 – Lớp cơ bậc thang và lá mạc trước sống: Phía TRƯỚC rãnh thần kinh là Cơ bậc thang trước (Scalenus anterior – có THẦN KINH HOÀNH chạy dọc mặt trước dưới mạc!); phía SAU rãnh thần kinh là Cơ bậc thang giữa (Scalenus medius – hành lang đi kim an toàn từ sau ra trước!).",
        "Lớp 4 – KHOANG ĐÍCH: Rãnh xương gian củ của mấu ngang cổ chứa Nhánh trước rễ thần kinh cổ (Ventral ramus C5, C6 hoặc C7); mục tiêu mũi kim là KHOANG RÌA MẶT SAU (Dorsal epineural space) ngay giữa rễ thần kinh và sườn trước của củ sau!",
        "Lớp 5 (Đáy và phía trong thiết đồ) – Mấu ngang xương cổ (C5: 2 củ cân xứng; C6: củ trước Chassaignac cao to; C7: MẤT củ trước chỉ còn củ sau!), lỗ ngang chứa ĐỘNG MẠCH ĐỐT SỐNG (nằm trần ngay trước rễ C7!) và các động mạch rễ tủy đi sát mặt trước rễ vào lỗ liên hợp."
      ],
      "topographicRelations": {
        "superficialAndDeep": "Rễ thần kinh cổ thoát khỏi lỗ liên hợp đi ngay sau động mạch đốt sống rồi nằm lọt trong máng xương giữa củ trước và củ sau.",
        "medialAndLateral": "Các ĐỘNG MẠCH RỄ TỦY (Radicular / Segmental medullary arteries tách từ động mạch đốt sống, cổ lên và cổ sâu) đi kèm sát rễ (đặc biệt tập trung ở mặt trước rễ!) để nối thẳng vào động mạch tủy sống trước – đây là cơ chế gây nhồi máu tủy cổ liệt tứ chi nếu tiêm steroid dạng hạt tinh thể vào mạch!"
      },
      "dangerCorridors": [
        "BẮT BUỘC TUYỆT ĐỐI: Chỉ sử dụng Corticosteroid KHÔNG HẠT TINH THỂ tan hoàn toàn (Dexamethasone sodium phosphate), cấm dùng Triamcinolone hay Depo-Medrol ở vùng rễ cổ!",
        "Luôn đi kim In-plane từ SAU RA TRƯỚC xuyên qua cơ bậc thang giữa dừng ở BỜ SAU rễ (có củ sau đỡ, tránh hoàn toàn mặt trước rễ, động mạch đốt sống và thần kinh hoành!)."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_neck_c6_fascia_gray384.png",
          "figNumber": "Gray 384",
          "title": "Thiết đồ cắt ngang mức C6 chỉ rõ khe gian cơ bậc thang (Scalenus ant. & med.), mấu ngang và mạch đốt sống (Gray's Plate 384)",
          "desc": "Trên thiết đồ ngang C6, thấy rõ đường kim từ sau ra trước xuyên qua cơ bậc thang giữa (Scalenus medius) vào bờ sau rãnh mấu ngang tránh hoàn toàn mạch đốt sống và bao cảnh ở phía trước.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 384) – Transverse section at C6 showing scalene muscles and vertebral vessels."
        },
        {
          "path": "assets/images/external_anatomy/ext_sec_spinal_nerve_meninges_gray770.png",
          "figNumber": "Gray 770",
          "title": "Thiết đồ cắt ngang tủy sống, màng cứng, hạch gai và rễ thần kinh gai sống tại lỗ liên hợp (Gray's Plate 770)",
          "desc": "Liên quan thiết đồ giữa bao màng cứng mở rộng tới hạch rễ sau (DRG) trong lỗ liên hợp và đoạn nhánh trước thoát ra rãnh mấu ngang.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 770) – Transverse section of medulla spinalis, meninges, and spinal nerve roots."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed.) – Posterior Cervical Articular Pillars & Mastoid Line",
      "surfaceLandmarks": [
        "Đỉnh mỏm chũm xương thái dương (Tip of mastoid process) phía sau tai.",
        "Mỏm gai C2 (ở hõm gáy trên) và Mỏm gai lồi C7 (Vertebra prominens – mỏm gai nhô to nhất ở nền cổ sau).",
        "Rãnh khối khớp bên cổ (Cervical articular pillar furrow): Dải xương cứng sờ thấy sâu cách đường giữa mỏm gai ~2.0 – 2.5 cm sang bên (ngay sau bờ sau cơ ức đòn chũm)."
      ],
      "surfaceProjections": "Đường thẳng đứng kẻ từ bờ sau đỉnh mỏm chũm thẳng xuống nền cổ bên (theo mặt phẳng trán giữa cổ) đi dọc qua chính tâm chuỗi KHỐI KHỚP BÊN (Articular pillars) từ khớp C2–C3 (nơi thần kinh chẩm thứ 3 TON băng ngang cách dưới mỏm chũm ~2.5 – 3 cm) xuống C3, C4, C5, C6 và gốc mỏm ngang C7.",
      "palpationSteps": [
        "1. Đặt bệnh nhân nằm nghiêng thẳng trục sang bên lành (giữ cổ trung tính song song mặt bàn).",
        "2. Sờ đỉnh mỏm chũm ở trên và mỏm gai C7 ở dưới nền cổ sau để xác định chiều dài đoạn cổ.",
        "3. Dùng hai đầu ngón tay ấn sâu dọc theo dải cột khớp bên cách đường giữa sau ~2.5 cm để tìm các tầng khớp liên mấu ấn đau chói quy chiếu điển hình."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_neck_lateral_gray1194.png",
          "figNumber": "Gray 1194",
          "title": "Giải phẫu bề mặt vùng cổ bên - sau: Trục dọc từ mỏm chũm xuống nền cổ qua chuỗi cột khớp bên (Gray's Plate 1194)",
          "desc": "Đường chiếu từ sau mỏm chũm dọc sau bờ cơ ức đòn chũm tương ứng chuỗi khối khớp bên C2–C7.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1194) – Lateral neck surface topography."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy (Plates 384, 799) – Axial Cross-Section of Cervical Articular Pillar & Posterior Rami",
      "sectionPlane": "Thiết đồ cắt ngang cổ qua eo thắt khối khớp bên (Axial Section through Cervical Articular Pillar Waist) phối hợp Thiết đồ dọc trán (Coronal Pillar Scan).",
      "layeredStructure": [
        "Lớp 1 – Da và mô mỡ dưới da vùng cổ bên – sau.",
        "Lớp 2 – Cơ thang (ở sau), Cơ gối đầu & gối cổ (Splenius capitis & cervicis) và Cơ nâng vai (Levator scapulae – ở phía bên ngoài).",
        "Lớp 3 – Cơ bán gai đầu (Semispinalis capitis – tạo vòm mái cơ dày phủ trực tiếp lên rãnh nhánh trong!).",
        "Lớp 4 – KHOANG ĐÍCH: Mặt phẳng cân mỏng chứa NHÁNH TRONG NGÀNH SAU (Cervical medial branch, đường kính ~0.8 – 1.2 mm) và THẦN KINH CHẨM THỨ BA (TON tại khe C2–C3, ~1.5 mm) ôm sát rãnh lõm màng xương giữa cơ bán gai đầu (ở nông) và gân cơ bán gai cổ / nhiều chân (ở trong sâu).",
        "Lớp 5 (Đáy thiết đồ) – Vỏ xương lõm chính giữa ('Waist / Centroid') mặt ngoài khối khớp bên của đốt sống cổ tương ứng!"
      ],
      "topographicRelations": {
        "superficialAndDeep": "Mặt ngoài khối khớp bên (Lớp 5) tạo một bức tường xương liên tục an toàn đỡ ngay dưới đầu kim.",
        "medialAndLateral": "Ngay PHÍA TRƯỚC bờ trước khối khớp bên (< 5 – 8 mm) là lỗ ngang chứa ĐỘNG MẠCH ĐỐT SỐNG và rễ thần kinh cổ; ngay PHÍA TRONG (sâu về phía mỏm gai) là mảnh cung sống và ống sống cổ; chạy dọc sát mặt ngoài cột khớp bên có ĐỘNG MẠCH CỔ SÂU (Deep cervical artery)!"
      },
      "dangerCorridors": [
        "Trên thiết đồ cắt ngang đi kim từ SAU RA TRƯỚC: Mũi kim bắt buộc dừng trên phần giữa mặt ngoài khối khớp bên, TUYỆT ĐỐI KHÔNG trượt vượt quá bờ trước khối khớp bên (nơi có động mạch đốt sống và rễ cổ)!",
        "Quét Color Doppler tại đáy thung lũng eo khớp trên mặt cắt dọc trước khi chọc để loại trừ nhánh động mạch cổ sâu nằm ngay điểm đích."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_spinal_nerve_branches_gray799.png",
          "figNumber": "Gray 799",
          "title": "Thiết đồ cắt ngang nguyên lý phân chia dây thần kinh gai sống: Ngành trước, Ngành sau (Nhánh trong & Nhánh ngoài) (Gray's Plate 799)",
          "desc": "Sơ đồ cắt ngang kinh điển của Gray chỉ rõ ngành sau tách ngay sau lỗ liên hợp rồi chia nhánh trong (Medial branch) ôm sát khối khớp liên mấu đi vào cơ sâu.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 799) – Transverse scheme of spinal nerve, dorsal ramus, and medial/lateral branches."
        },
        {
          "path": "assets/images/external_anatomy/ext_sec_neck_c6_fascia_gray384.png",
          "figNumber": "Gray 384",
          "title": "Thiết đồ cắt ngang các lớp cơ cổ sau (Trapezius, Splenius, Levator scapulae, Semispinalis capitis & colli) phủ trên khối khớp bên (Gray's Plate 384)",
          "desc": "Nửa dưới thiết đồ ngang C6 hiển thị chính xác thứ tự các lớp cơ gáy phủ ngoài cột khớp bên và khoang cân dưới cơ bán gai đầu (Semispinalis capitis).",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 384) – Posterior cervical muscle planes overlying the articular pillar."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed., Plate 1227) – Surface Markings of Deep & Superficial Inguinal Rings",
      "surfaceLandmarks": [
        "Củ mu (Pubic tubercle): Gồ xương nhỏ cách đường giữa khớp mu ~2.0 – 2.5 cm sang bên.",
        "Gai chậu trước trên (ASIS) ở phía ngoài và Dây chằng bẹn nối giữa hai mốc.",
        "Điểm giữa bẹn (Mid-inguinal point): Nơi bắt mạch đập động mạch chậu ngoài – đùi."
      ],
      "surfaceProjections": "Bản đồ chiếu bề mặt ống bẹn kinh điển (Gray's Plate 1227): (1) LỖ BẸN SÂU (Deep / Abdominal inguinal ring) chiếu lên da thành một hình bầu dục nằm CAO HƠN dây chằng bẹn ~1.2 – 1.5 cm ngay tại điểm giữa bẹn (ngay phía NGOÀI đường chiếu động mạch thượng vị dưới!); (2) LỖ BẸN NÔNG (Superficial / Subcutaneous inguinal ring) nằm ngay phía TRÊN – NGOÀI củ mu; (3) Ống bẹn dài ~4 cm nối chéo hai lỗ này chứa thừng tinh (nam) / dây chằng tròn (nữ) và NHÁNH SINH DỤC THẦN KINH SINH DỤC ĐÙI!",
      "palpationSteps": [
        "1. Bệnh nhân nằm ngửa, che chắn bộ phận sinh dục, bộc lộ vùng trên xương mu và nếp bẹn.",
        "2. Bắt mạch đập động mạch đùi ở điểm giữa bẹn và đánh dấu điểm nằm ngay phía trên mạch đập 1.5 cm (vị trí lỗ bẹn sâu).",
        "3. Sờ dọc mào xương mu ra ngoài 2 cm chạm củ mu; sờ nhẹ thừng tinh lăn tròn ngay phía trên ngoài củ mu."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_inguinal_ring_gray1227.png",
          "figNumber": "Gray 1227",
          "title": "Giải phẫu bề mặt kinh điển của ống bẹn: Lỗ bẹn sâu, Lỗ bẹn nông, Vòng đùi và Động mạch thượng vị dưới (Gray's Plate 1227)",
          "desc": "Sơ đồ định khu bề mặt hoàn hảo chỉ rõ vị trí Lỗ bẹn sâu (Abdominal inguinal ring) nằm ngay ngoài gốc động mạch thượng vị dưới và ống bẹn chạy chéo xuống củ mu.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1227) – Surface projections of the abdominal inguinal ring, inguinal canal, subcutaneous ring, and inferior epigastric artery."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy (Plates 546, 1146) – Cross-Sectional Anatomy of the Inguinal Canal & Spermatic Cord",
      "sectionPlane": "Thiết đồ cắt ngang vuông góc trục ống bẹn (Short-axis Section of Inguinal Canal) ngay phía ngoài củ mu và tại lỗ bẹn sâu.",
      "layeredStructure": [
        "Lớp 1 – Da vùng bẹn – trên mu, lớp mỡ Camper và mạc màng Scarpa.",
        "Lớp 2 – Thành trước ống bẹn: Lá cân cơ chéo bụng ngoài (External oblique aponeurosis; ở 1/3 ngoài có thêm thớ cơ chéo bụng trong).",
        "Lớp 3 – Bao thừng tinh ngoài, Cơ bìu & mạc cơ bìu (Cremasteric muscle & fascia) và Mạc tinh trong (Internal spermatic fascia).",
        "Lớp 4 – KHOANG ĐÍCH: Mặt phẳng sâu bên trong/quanh bao mạc tinh trong của ống bẹn – nơi NHÁNH SINH DỤC THẦN KINH SINH DỤC ĐÙI (Genital branch of GFN, L1–L2) chạy dọc ở bờ sau – dưới thừng tinh (hoặc dây chằng tròn tử cung ở nữ); trong khi thần kinh chậu bẹn nằm ở mặt trước nông ngoài mạc tinh trong!",
        "Lớp 5 – Các thành phần bên trong thừng tinh ở nam giới: Ống dẫn tinh (Ductus/Vas deferens – thành cơ cực dày tròn không xẹp), Động mạch tinh hoàn, động mạch ống dẫn tinh, động mạch cơ bìu và đám rối tĩnh mạch hình dây leo (Pampiniform plexus).",
        "Lớp 6 (Đáy / Thành sau ống bẹn) – Mạc ngang (Transversalis fascia), liềm bẹn ở trong, và ngay phía dưới sâu tại lỗ bẹn sâu là ĐỘNG MẠCH CHẬU NGOÀI tách ra ĐỘNG MẠCH THƯỢNG VỊ DƯỚI ở bờ trong lỗ bẹn sâu!"
      ],
      "topographicRelations": {
        "superficialAndDeep": "Tại lỗ bẹn sâu, ống bẹn nằm ngay PHÍA TRƯỚC (nông hơn) động mạch và tĩnh mạch chậu ngoài; đi xuống gần củ mu, sàn dưới ống bẹn là rãnh dây chằng bẹn và xương mu.",
        "medialAndLateral": "Bờ TRONG lỗ bẹn sâu có thân ĐỘNG MẠCH THƯỢNG VỊ DƯỚI chạy ngược chéo lên thành bụng sâu (mốc 'Crown sign' kinh điển trên Doppler màu giúp xác định chính xác lỗ bẹn sâu!)."
      },
      "dangerCorridors": [
        "Ở bệnh nhân nam: Dùng kim nhỏ 25G bơm tách nhẹ nhàng quanh rìa bao mạc tinh trong (hoặc phong bế tại lỗ bẹn sâu ngay khi nhánh sinh dục vừa tách trên động mạch chậu ngoài), tuyệt đối KHÔNG chọc đi chọc lại xuyên thủng ống dẫn tinh hay động mạch tinh hoàn!",
        "Bật Color Doppler định vị động mạch chậu ngoài ở đáy và động mạch thượng vị dưới ở bờ trong trước khi chọc kim."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_spermatic_cord_section_gray1146.png",
          "figNumber": "Gray 1146",
          "title": "Thiết đồ cắt lớp ống bẹn, các lớp bao thừng tinh, ống dẫn tinh và các mạch máu bên trong (Gray's Plate 1146)",
          "desc": "Cấu trúc các lớp bao đồng tâm của ống bẹn - thừng tinh từ cân cơ chéo ngoài, cơ bìu, mạc tinh trong tới ống dẫn tinh và mạch tinh.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1146) – Sectional anatomy of the inguinal canal and coverings of the spermatic cord."
        },
        {
          "path": "assets/images/external_anatomy/ext_sec_inguinal_canal_layers_gray546.png",
          "figNumber": "Gray 546",
          "title": "Thiết đồ mặt sau lỗ bẹn sâu: Tương quan động mạch chậu ngoài, gốc động mạch thượng vị dưới và thừng tinh (Gray's Plate 546)",
          "desc": "Mối liên quan giải phẫu sống còn tại lỗ bẹn sâu: động mạch thượng vị dưới quặt lên ngay bờ trong chỗ thừng tinh và nhánh sinh dục GFN chui vào ống bẹn.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 546) – Internal view of deep inguinal ring, external iliac artery, and inferior epigastric artery."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed., Plate 1244) – Ischial Spine & Lesser Sciatic Foramen Surface Markings",
      "surfaceLandmarks": [
        "Gai chậu sau trên (PSIS) ở góc trên trong mông.",
        "Ụ ngồi (Ischial tuberosity): Khối xương lồi rõ khi ấn sâu vào phần trong nếp lằn mông.",
        "Đỉnh mấu chuyển lớn xương đùi (Greater trochanter) ở mặt bên."
      ],
      "surfaceProjections": "Trên đường thẳng nối từ PSIS xuống bờ ngoài ụ ngồi (Gray's Plate 1244): Điểm nối 1/3 dưới và 2/3 trên là hình chiếu của ĐỈNH GAI NGỒI; ngay phía dưới mốc này 1.0 – 2.0 cm (tức cao hơn bờ trên ụ ngồi ~2.0 – 2.5 cm) chính là KHUYẾT NGỒI BÉ (Lesser sciatic notch) – nơi gân cơ bịt trong và bao hoạt dịch cơ bịt trong quặt góc 90° đi ngang ra hố mấu chuyển!",
      "palpationSteps": [
        "1. Bệnh nhân nằm sấp cân đối trên bàn.",
        "2. Dùng ngón cái ấn sâu xác định rõ đỉnh và bờ trên ụ ngồi ở nếp lằn mông dưới.",
        "3. Dịch ngón cái thẳng lên trên dọc trụ xương ngồi 2 – 2.5 cm và kẻ đường ngang nối ra hố trong mấu chuyển lớn để xác định trục ngang của phức hợp tam đầu hông (Gemelli – Obturator internus)."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_gluteal_sciatic_markings_gray1244.png",
          "figNumber": "Gray 1244",
          "title": "Giải phẫu bề mặt vùng mông dưới: Khuyết ngồi bé giữa gai ngồi và ụ ngồi trên đường đi thần kinh tọa (Gray's Plate 1244)",
          "desc": "Vị trí khuyết ngồi bé nằm ngay dưới mốc động mạch thẹn trong (đỉnh gai ngồi) và ngay trên ụ ngồi, có dây thần kinh tọa vắt dọc phía sau.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1244) – Surface projection of ischial spine, lesser sciatic notch, and sciatic nerve."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy (Plates 344, 434, 829) – Axial Section Through Lesser Sciatic Foramen & Obturator Internus",
      "sectionPlane": "Thiết đồ cắt ngang (Axial Cross-Section) đi qua khuyết ngồi bé (dưới gai ngồi 1.5 cm) và cổ xương đùi / hố mấu chuyển.",
      "layeredStructure": [
        "Lớp 1 – Da và lớp mỡ dưới da vùng mông dưới.",
        "Lớp 2 – Bụng dưới cơ mông lớn dày (Gluteus maximus) VÀ ở góc trong là dây chằng cùng – ụ ngồi (Sacrotuberous ligament).",
        "Lớp 3 – MẶT PHẲNG THẦN KINH NGUY HIỂM PHÍA NÔNG: Dây thần kinh tọa (Sciatic nerve) và thần kinh bì đùi sau chạy dọc vắt trực tiếp lên MẶT SAU (mặt nông) của phức hợp gân cơ bịt trong – sinh đôi!",
        "Lớp 4 – KHOANG ĐÍCH NGOÀI CHẬU: Gân cơ bịt trong dẹt sáng nằm kẹp giữa cơ sinh đôi trên và cơ sinh đôi dưới (phức hợp Triceps coxae dày chỉ ~6 – 10 mm) cùng bao hoạt dịch cơ bịt trong (Bursa of obturator internus) lót ngay chỗ gân uốn qua rãnh sụn khuyết ngồi bé.",
        "Lớp 5 (Đáy thiết đồ) – Thân xương ngồi phẳng rộng (ở phần ngoài chậu làm tấm chắn xương!) VÀ ở phần trong chậu (mặt trong màng bịt – thành bên hố ngồi trực tràng) là bụng trong chậu của cơ bịt trong chứa ỐNG THẸN ALCOCK!"
      ],
      "topographicRelations": {
        "superficialAndDeep": "Khác hoàn toàn với cơ hình lê (nơi thần kinh tọa nằm SÂU dưới cơ hình lê), tại mức cơ bịt trong dây thần kinh tọa đã chui ra nằm NÔNG ngay phía sau đè lên gân cơ bịt trong! Còn phía sâu trước cơ bịt trong ngoài chậu là bản xương ngồi và mặt sau bao khớp háng.",
        "medialAndLateral": "Phía TRONG khuyết ngồi bé (dọc cân mặt trong cơ bịt trong trong hố ngồi – trực tràng) là ống Alcock chứa bó mạch thẹn trong và thần kinh thẹn; phía NGOÀI là hố ngón tay mặt trong mấu chuyển lớn."
      },
      "dangerCorridors": [
        "Dây thần kinh tọa nằm ngay PHÍA NÔNG (Lớp 3) chắn trên lưng cơ bịt trong: Bắt buộc định vị rõ bóng bầu dục của thần kinh tọa trên siêu âm và đi kim xiên từ phía trong hoặc phía ngoài tránh hoàn toàn đường đi của thần kinh tọa!",
        "Luôn giữ mũi kim dừng trên nền xương ngồi phẳng (Lớp 5), không chọc lệch vào bờ trong khuyết ngồi bé vào ống Alcock / hố ngồi – trực tràng."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_gluteal_deep_muscles_gray434.png",
          "figNumber": "Gray 434",
          "title": "Giải phẫu cụm cơ tam đầu hông: Cơ sinh đôi trên - Gân cơ bịt trong - Cơ sinh đôi dưới qua khuyết ngồi bé (Gray's Plate 434)",
          "desc": "Hình ảnh kinh điển hiển thị gân trắng của cơ bịt trong thoát qua khuyết ngồi bé kẹp giữa hai cơ sinh đôi ngay trên cơ vuông đùi.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 434) – Obturator internus and gemelli muscles exiting the lesser sciatic foramen."
        },
        {
          "path": "assets/images/external_anatomy/ext_sec_pelvis_sacral_pudendal_gray829.png",
          "figNumber": "Gray 829",
          "title": "Thiết đồ thành bên chậu hông: Bụng trong chậu cơ bịt trong, đám rối cùng và đường đi thần kinh thẹn (Gray's Plate 829)",
          "desc": "Nhìn từ mặt trong khung chậu thấy toàn bộ nguyên ủy rộng của cơ bịt trong trên màng bịt trước khi hội tụ chui qua khuyết ngồi bé.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 829) – Side wall of pelvis showing obturator internus, sacral and pudendal plexuses."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed.) – Ischiofemoral Space & Gluteal Fold Surface Landmarks",
      "surfaceLandmarks": [
        "Bờ ngoài ụ ngồi (Lateral margin of ischial tuberosity): Sờ rõ ngay tại phần trong nếp lằn mông dưới.",
        "Bờ sau dưới mấu chuyển lớn và mào gian mấu xương đùi (Intertrochanteric crest) ở phía ngoài.",
        "Nếp lằn mông ngang (Gluteal fold – đánh dấu bờ dưới cơ mông lớn)."
      ],
      "surfaceProjections": "Khoang ngồi – đùi (Ischiofemoral space) chứa cơ vuông đùi chiếu thành một dải chữ nhật nằm ngang dài ~3 – 4 cm nối trực tiếp từ bờ ngoài ụ ngồi sang mặt sau đầu trên xương đùi (ngang mức mấu chuyển bé), nằm ngay cao hơn nếp lằn mông khoảng 1.0 – 2.0 cm. Điểm giữa đoạn nối ụ ngồi – mấu chuyển lớn chính là đường đi dọc của dây thần kinh tọa vắt ngang qua lưng cơ vuông đùi!",
      "palpationSteps": [
        "1. Đặt bệnh nhân nằm sấp với hai gót chân hơi xoay nhẹ vào trong (xoay trong khớp háng giúp mở rộng tối đa khoảng cách giữa ụ ngồi và mấu chuyển bé!).",
        "2. Dùng ngón cái tay trong ấn giữ bờ ngoài ụ ngồi, ngón cái tay ngoài chạm bờ sau mấu chuyển lớn.",
        "3. Ấn sâu vào điểm giữa hai ngón cái (đúng khoang ngồi – đùi) để kiểm tra điểm đau chói sâu đặc trưng của hội chứng chèn ép ngồi – đùi."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_lower_back_popliteal_gray1239.png",
          "figNumber": "Gray 1239",
          "title": "Giải phẫu bề mặt nếp lằn mông dưới, vùng ụ ngồi và bờ dưới cơ mông lớn (Gray's Plate 1239)",
          "desc": "Định khu bề mặt nếp lằn mông nơi bờ dưới cơ mông lớn bắt chéo qua vùng ụ ngồi - đầu trên xương đùi.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1239) – Surface anatomy of gluteal fold and proximal posterior thigh."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy (Plates 344, 434) – Transverse Sectional Anatomy of the Ischiofemoral Space",
      "sectionPlane": "Thiết đồ cắt ngang (Axial / Transverse Cross-Section) đi ngang qua ụ ngồi (ở trong) và mào gian mấu / mấu chuyển bé xương đùi (ở ngoài).",
      "layeredStructure": [
        "Lớp 1 – Da và mô mỡ dưới da vùng nếp mông dưới.",
        "Lớp 2 – Phần ba dưới của Cơ mông lớn (Gluteus maximus).",
        "Lớp 3 – MẶT PHẲNG THẦN KINH SÁT MẶT SAU CƠ: Dây thần kinh tọa (Sciatic nerve) và thần kinh bì đùi sau chạy dọc đè trực tiếp lên mặt sau phần giữa của bụng cơ vuông đùi!",
        "Lớp 4 – KHOANG ĐÍCH: Bụng cơ vuông đùi (Quadratus femoris muscle – dày ~10 – 15 mm) căng ngang lấp đầy khe xương giữa bờ ngoài ụ ngồi (trong) và củ cơ vuông trên mào gian mấu xương đùi (ngoài).",
        "Lớp 5 (Đáy sâu phía trước thiết đồ) – Gân cơ bịt ngoài (Obturator externus tendon), nhánh sâu của ĐỘNG MẠCH MŨ ĐÙI TRONG (Medial circumflex femoral artery – động mạch chính cấp máu nuôi sống chỏm xương đùi!), và sâu hơn ở ngoài là mấu chuyển bé có gân thắt lưng chậu bám."
      ],
      "topographicRelations": {
        "superficialAndDeep": "Cơ vuông đùi bị kẹp giữa 'hai mặt phẳng mạch – thần kinh tối quan trọng': Mặt NÔNG (sau) là dây thần kinh tọa; mặt SÂU (trước) là nhánh sâu động mạch mũ đùi trong và thần kinh cơ vuông đùi!",
        "medialAndLateral": "Đầu TRONG là ụ ngồi kèm nguyên ủy khối gân chung Hamstring (bán màng, bán gân, đầu dài nhị đầu); đầu NGOÀI là mào gian mấu và mấu chuyển bé xương đùi (bình thường khe xương ngồi – đùi rộng 18 – 23 mm; khi hẹp < 15 mm sẽ ép phù nề cơ vuông đùi và chèn thần kinh tọa)."
      },
      "dangerCorridors": [
        "Hành lang đi kim BẮT BUỘC từ NGOÀI VÀO TRONG (Lateral-to-medial): Đâm kim từ phía sau ngoài mấu chuyển xương đùi đi chếch vào phần ngoài bụng cơ vuông đùi (luồn BÊN DƯỚI / PHÍA NGOÀI thần kinh tọa), tuyệt đối không đâm từ sau thẳng xuyên qua thần kinh tọa!",
        "Không đâm xuyên quá mặt trước (Lớp 5) của cơ vuông đùi để bảo vệ tuyệt đối nhánh sâu động mạch mũ đùi trong nuôi chỏm xương đùi."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_gluteal_deep_muscles_gray434.png",
          "figNumber": "Gray 434",
          "title": "Giải phẫu cơ vuông đùi (Quadratus femoris) căng ngang giữa ụ ngồi và xương đùi trên cùng mặt phẳng các gân Hamstring (Gray's Plate 434)",
          "desc": "Vị trí hình chữ nhật đặc trưng của cơ vuông đùi nằm giữa cơ sinh đôi dưới (ở trên) và bờ trên cơ khép lớn (ở dưới), nối bờ ngoài ụ ngồi sang mào gian mấu.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 434) – Quadratus femoris in the ischiofemoral interval."
        },
        {
          "path": "assets/images/external_anatomy/ext_sec_thigh_cross_section_gray432.png",
          "figNumber": "Gray 432",
          "title": "Thiết đồ cắt ngang ngay dưới nếp mông chỉ rõ tương quan dây thần kinh tọa, thần kinh bì đùi sau và khối cơ sau (Gray's Plate 432)",
          "desc": "Vị trí thiết đồ ngang của dây thần kinh tọa (Ischiadic N.) và thần kinh bì đùi sau nằm sát mặt phẳng cân sâu.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 432) – Cross-section of proximal thigh showing sciatic and posterior femoral cutaneous nerves."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed., Plate 1244) – Surface Marking of Internal Pudendal Vessels & Ischial Spine",
      "surfaceLandmarks": [
        "Gai chậu sau trên (PSIS) ở góc trên trong mông.",
        "Ụ ngồi (Ischial tuberosity) ở phần trong nếp lằn mông dưới.",
        "Đỉnh mấu chuyển lớn xương đùi (Greater trochanter) ở mặt bên."
      ],
      "surfaceProjections": "Định khu bề mặt ĐỈNH GAI NGỒI và BÓ MẠCH – THẦN KINH THẸN kinh điển của Gray (Gray's Plate 1244): Kẻ đoạn thẳng đứng hơi chếch nối từ Gai chậu sau trên (PSIS) tới bờ ngoài Ụ ngồi – điểm nối ĐÚNG 1/3 DƯỚI VÀ 2/3 TRÊN của đường này (hoặc giao điểm của đường PSIS – ụ ngồi với đường ngang kẻ qua đỉnh mấu chuyển lớn) chiếu thẳng xuống đỉnh gai ngồi nơi thần kinh thẹn và động mạch thẹn trong đi qua!",
      "palpationSteps": [
        "1. Đặt bệnh nhân nằm sấp cân đối trên bàn.",
        "2. Sờ rõ đỉnh PSIS ở trên và đỉnh ụ ngồi ở dưới; dùng thước/bút chia đoạn nối PSIS – ụ ngồi thành 3 phần bằng nhau và đánh dấu điểm 1/3 dưới.",
        "3. Kiểm tra đường ngang qua đỉnh mấu chuyển lớn giao với điểm đánh dấu để đặt tâm đầu dò Curvilinear."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_gluteal_sciatic_markings_gray1244.png",
          "figNumber": "Gray 1244",
          "title": "Bản đồ giải phẫu bề mặt vùng mông kinh điển chỉ đích danh điểm chiếu Động mạch thẹn trong tại gai ngồi (Gray's Plate 1244)",
          "desc": "Chú thích 'Internal pudendal artery' trên bản vẽ của Gray chỉ chính xác vào điểm 1/3 dưới đường nối PSIS – Ụ ngồi tại mỏm gai ngồi.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1244) – Surface marking for the internal pudendal artery and pudendal nerve at the ischial spine."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy (Plates 406, 829) – Axial Section Through Ischial Spine, Sacrotuberous-Sacrospinous Clamp & Alcock's Canal",
      "sectionPlane": "Thiết đồ cắt ngang qua khung chậu nhỏ ngang mức Đỉnh gai ngồi (Axial Pelvic-Gluteal Section at the Ischial Spine Level).",
      "layeredStructure": [
        "Lớp 1 – Da và lớp mỡ dưới da vùng mông trong dày.",
        "Lớp 2 – Bụng cơ mông lớn dày (Gluteus maximus, dày ~3 – 5 cm).",
        "Lớp 3 – DÂY CHẰNG CÙNG – Ụ NGỒI (Sacrotuberous ligament - STL: dải gân – xơ dày 3 – 5 mm căng chéo từ bờ xương cùng xuống ụ ngồi; tạo 'cảm giác bật sực' rõ rệt khi mũi kim đi qua!).",
        "Lớp 4 – KHOANG ĐÍCH: KHOANG GIAN DÂY CHẰNG (Interligamentous neurovascular plane) hình tam giác dẹt nằm kẹp giữa mặt sâu dây chằng cùng – ụ ngồi (STL) ở sau và mặt nông dây chằng cùng – gai (SSL) ở trước, ngay sát bờ trong đỉnh gai ngồi – chứa ĐỘNG MẠCH THẸN TRONG và THẦN KINH THẸN (S2–S4, thường tách 1 – 2 thân nằm ngay phía TRONG động mạch!).",
        "Lớp 5 – DÂY CHẰNG CÙNG – GAI (Sacrospinous ligament - SSL: dải xơ mỏng căng hình quạt từ bờ bên xương cùng – cụt tới đỉnh nhọn gai ngồi) và bản xương GAI NGỒI ở phía ngoài.",
        "Lớp 6 (Đáy sâu trong chậu hông – VÙNG CẤM!) – Cơ cụt (Coccygeus), cơ nâng hậu môn, khoang dưới phúc mạc chậu và BÓNG TRỰC TRÀNG (Rectum) nằm ngay phía trước dây chằng cùng – gai!"
      ],
      "topographicRelations": {
        "superficialAndDeep": "Thần kinh thẹn bị kẹp đúng như 'gọng kìm tôm hùm' giữa STL (ở nông/sau) và SSL + gai ngồi (ở sâu/trước) trước khi lách xuống dưới vào ống thẹn Alcock (lá tách cân cơ bịt trong thành ngoài hố ngồi – trực tràng).",
        "medialAndLateral": "Trên cùng thiết đồ ngang mức gai ngồi: Đi sang PHÍA NGOÀI trên lưng xương gai ngồi (~1.5 – 2.5 cm ngoài động mạch thẹn) là DÂY THẦN KINH TỌA rất lớn và nhánh mông dưới; ngay bên cạnh thần kinh thẹn trong khoang gian dây chằng là ĐỘNG MẠCH THẸN TRONG!"
      },
      "dangerCorridors": [
        "Thủng trực tràng (Rectal perforation – Lớp 6): Dừng mũi kim NGAY LẬP TỨC khi vừa xuyên qua dây chằng cùng – ụ ngồi (Lớp 3) vào khoang Lớp 4 và thấy dịch tách đôi hai dải sáng STL – SSL; tuyệt đối không đâm xuyên qua dây chằng cùng – gai!",
        "Lan thuốc ra phía ngoài gây tê liệt dây thần kinh tọa: Giữ đầu kim ở bờ trong đỉnh gai ngồi (phía trong động mạch thẹn trong) và dùng thể tích vừa phải (4 – 5 ml)."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_pelvis_sacral_pudendal_gray829.png",
          "figNumber": "Gray 829",
          "title": "Giải phẫu thiết đồ thành bên chậu hông: Đám rối cùng, gai ngồi, dây chằng cùng - gai và đường đi thần kinh thẹn (Gray's Plate 829)",
          "desc": "Thiết đồ chậu hông nhìn trong chỉ rõ rễ S2, S3, S4 hợp thành thần kinh thẹn lách qua khuyết ngồi lớn vòng sau gai ngồi và dây chằng cùng - gai.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 829) – Dissection of side wall of pelvis showing sacral and pudendal plexuses and sacrospinous ligament."
        },
        {
          "path": "assets/images/external_anatomy/ext_sec_perineum_alcock_gray406.png",
          "figNumber": "Gray 406",
          "title": "Giải phẫu hố ngồi - trực tràng, ụ ngồi, dây chằng cùng - ụ ngồi và các nhánh tận vùng đáy chậu (Gray's Plate 406)",
          "desc": "Tương quan dưới gai ngồi nơi thần kinh thẹn chạy trong thành ngoài hố ngồi - trực tràng (ống Alcock) sát mặt trong ụ ngồi để phân nhánh trực tràng dưới và đáy chậu.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 406) – Ischiorectal fossa, ischial tuberosity, sacrotuberous ligament, and perineal compartments."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed., Plates 1239, 1244) – Gluteal Fold & Ischial Tuberosity Surface Landmarks",
      "surfaceLandmarks": [
        "Ụ ngồi (Ischial tuberosity - IT): Khối xương lồi sờ rõ nhất ở góc trong nếp lằn mông.",
        "Nếp lằn mông dưới (Inferior gluteal fold): Nếp da ngang vùng dưới mông.",
        "Đỉnh mấu chuyển lớn xương đùi (Greater trochanter - GT) ở phía ngoài."
      ],
      "surfaceProjections": "Trên đoạn nối ngang giữa bờ ngoài Ụ ngồi và bờ sau Mấu chuyển lớn tại mức nếp lằn mông: Dây thần kinh bì đùi sau (PFCN) và các nhánh bì mông dưới (Inferior cluneal nerves) thoát vòng qua bờ dưới cơ mông lớn ngay sát BỜ NGOÀI Ụ NGỒI (cách bờ ngoài ụ ngồi ~0.5 – 1.5 cm), đồng thời tách nhánh đáy chậu (Perineal branch) uốn vòng ngay dưới mặt dưới – ngoài ụ ngồi tiến về rãnh đùi – bìu/môi lớn!",
      "palpationSteps": [
        "1. Bệnh nhân nằm sấp trên bàn.",
        "2. Dùng ngón cái ấn sâu vào nếp lằn mông xác định đỉnh và sườn ngoài của ụ ngồi.",
        "3. Ấn miết nhẹ ngay sát bờ ngoài và bờ dưới ụ ngồi để tìm dấu hiệu Tinel lan ra phần dưới mông hoặc dọc rãnh đùi – đáy chậu ngoài."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_lower_back_popliteal_gray1239.png",
          "figNumber": "Gray 1239",
          "title": "Giải phẫu bề mặt nếp lằn mông dưới và vùng dưới ụ ngồi nơi quặt ngược các nhánh thần kinh bì mông dưới (Gray's Plate 1239)",
          "desc": "Hình thái bề mặt nếp lằn mông và khu đùi sau trên nơi các nhánh bì mông dưới vòng qua bờ dưới cơ mông lớn ra da.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1239) – Back of lower extremity showing gluteal fold and proximal thigh topography."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy (Plates 432, 434) – Transverse Cross-Section at the Level of the Ischial Tuberosity & Gluteal Fold",
      "sectionPlane": "Thiết đồ cắt ngang (Axial Cross-Section) ngay mức nếp lằn mông đi qua ụ ngồi, nguyên ủy gân Hamstring và mào gian mấu xương đùi.",
      "layeredStructure": [
        "Lớp 1 – Da và đệm mỡ dưới da dày vùng nếp mông dưới (dày ~1.5 – 4.0 cm).",
        "Lớp 2 – Mạc mông – đùi sâu (mạc đùi rộng phủ bờ dưới cơ mông lớn) và các thớ dưới cùng của Cơ mông lớn (Gluteus maximus).",
        "Lớp 3 – KHOANG ĐÍCH: Mặt phẳng mô mỡ – cân ngay DƯỚI bờ dưới cơ mông lớn / mạc đùi rộng tại sát BỜ NGOÀI Ụ NGỒI, nơi THẦN KINH BÌ ĐÙI SAU (PFCN) và các nhánh THẦN KINH BÌ MÔNG DƯỚI (ICN) nằm nông ngay trên nguyên ủy khối gân ụ ngồi – cẳng chân!",
        "Lớp 4 – Nguyên ủy gân chung cơ Hamstring (đầu dài nhị đầu đùi & cơ bán gân ở sau trong, gân dẹt cơ bán màng ở trước ngoài) bám vào ụ ngồi; ngay PHÍA NGOÀI gân bán màng trên lưng cơ vuông đùi / cơ khép lớn là THÂN CHÍNH DÂY THẦN KINH TỌA!",
        "Lớp 5 (Đáy thiết đồ) – Khối xương ụ ngồi (ở trong), cơ khép lớn / cơ vuông đùi (ở giữa) và đầu trên xương đùi (ở ngoài)."
      ],
      "topographicRelations": {
        "superficialAndDeep": "Thần kinh bì mông dưới và PFCN (Lớp 3) nằm NÔNG hơn và TRONG hơn so với dây thần kinh tọa (Lớp 4), ngay sát mặt nông gân Hamstring và bờ dưới cơ mông lớn.",
        "medialAndLateral": "Khoảng cách ngang từ các nhánh bì mông dưới/nhánh đáy chậu sát bờ ngoài ụ ngồi tới bờ trong dây thần kinh tọa chỉ khoảng 1.0 – 2.0 cm!"
      },
      "dangerCorridors": [
        "Phong bế lan sang dây thần kinh tọa (Lớp 4) cách đó 1.5 cm: Luôn nhận diện rõ bóng thần kinh tọa trước trên siêu âm, hướng mũi kim về phía sát bờ xương ụ ngồi (phía trong gân Hamstring) và chỉ bơm thể tích nhỏ 2 – 4 ml!",
        "Tránh đâm xuyên vào lõi gân nguyên ủy Hamstring trên ụ ngồi."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_thigh_cross_section_gray432.png",
          "figNumber": "Gray 432",
          "title": "Thiết đồ cắt ngang đùi cao hiển thị trực tiếp Thần kinh bì đùi sau (Posterior femoral cutaneous nerve) nằm nông dưới mạc cạnh Thần kinh tọa (Ischiadic N.) (Gray's Plate 432)",
          "desc": "Ở cực dưới (mặt sau) của thiết đồ ngang Gray 432 thấy cực kỳ rõ ràng vị trí nông ngay dưới mạc của Posterior femoral cutaneous nerve tách biệt với Ischiadic N. ở lớp sâu.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 432) – Cross-section showing Posterior femoral cutaneous nerve superficial to hamstring muscles and Ischiadic nerve."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed., Plates 803, 1211) – Posterior Sacral Foramina & Lateral Sacral Crest Projections",
      "surfaceLandmarks": [
        "Mào cùng giữa (Median sacral crest – hàng gờ mỏm gai S1–S4 dọc đường giữa).",
        "Hai sừng cùng và Khe xương cùng (Sacral cornua & hiatus) ở cực dưới đường giữa (ngang S4–S5).",
        "Gai chậu sau trên (PSIS – nằm ngang mức giữa lỗ cùng S1 và lỗ cùng S2!)."
      ],
      "surfaceProjections": "Bốn lỗ cùng sau S1–S4 xếp thành một hàng dọc hơi hội tụ nhẹ xuống dưới: Lỗ S2 nằm ngang mức PSIS và cách đường giữa ~2.0 cm; Lỗ S1 nằm cao hơn mức PSIS ~2.0 cm và cách đường giữa ~2.2 – 2.5 cm; Lỗ S3 nằm thấp hơn mức PSIS ~2.0 cm và cách đường giữa ~1.8 cm. Ngay sát BỜ NGOÀI các lỗ cùng sau ~5 – 8 mm là hàng củ xương của MÀO CÙNG BÊN (Lateral sacral crest / Transverse sacral tubercles TST 1, 2, 3) – nơi toàn bộ các nhánh ngoài S1–S3 vắt qua!",
      "palpationSteps": [
        "1. Bệnh nhân nằm sấp kê gối dưới khung chậu.",
        "2. Sờ xác định mào cùng giữa ở đường giữa, khe xương cùng (hai sừng cùng) ở dưới và đỉnh PSIS ở bên bệnh.",
        "3. Vạch đường dọc trung gian nằm giữa đường giữa xương cùng và bờ trong PSIS (cách đường giữa ~2.3 – 2.5 cm) tương ứng trục mào cùng bên."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_back_spine_scapula_gray1211.png",
          "figNumber": "Gray 1211",
          "title": "Giải phẫu bề mặt tam giác xương cùng giữa hai lúm PSIS và rãnh liên mông dưới (Gray's Plate 1211)",
          "desc": "Vùng tam giác xương cùng bề mặt nơi định vị trục mào cùng bên giữa đường giữa và PSIS.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1211) – Posterior sacral triangle surface topography."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy (Plates 322, 803) – Transverse Sacral Sectional Anatomy & Posterior Sacral Neural Plexus",
      "sectionPlane": "Thiết đồ cắt ngang qua bản xương cùng tại mức các lỗ cùng sau S1, S2, S3 (Transverse Sacral Foramen – Lateral Crest Section).",
      "layeredStructure": [
        "Lớp 1 – Da và lớp mỡ dưới da vùng cùng sau (chứa các nhánh bì mông giữa sau khi đã xuyên cân ra nông).",
        "Lớp 2 – Cân ngực – thắt lưng lá sau dày chắc đậy căng trên rãnh cùng sau.",
        "Lớp 3 – Khối cơ nhiều chân vùng cùng (Sacral multifidus) và dây chằng cùng – chậu sau sâu.",
        "Lớp 4 – KHOANG ĐÍCH: Mặt phẳng màng xương ngay trên đỉnh MÀO CÙNG BÊN / CỦ NGANG XƯƠNG CÙNG (Lateral sacral crest – TST1, TST2, TST3, nằm ngoài bờ lỗ cùng 5 – 8 mm), nơi ĐÁM RỐI CÙNG SAU (Posterior sacral network hợp từ các nhánh ngoài ngành sau S1, S2, S3) bò sát mặt xương để tiến ra dây chằng và khớp cùng chậu!",
        "Lớp 5 (Đáy xương & Lỗ nguy hiểm phía trong) – Bản sau xương cùng làm tấm chắn kim; nhưng ngay PHÍA TRONG cách đích 5 – 8 mm là miệng hở của LỖ CÙNG SAU (Posterior sacral foramen) thông thẳng vào ống cùng (chứa rễ thần kinh cùng vận động chân/bàng quang – cơ thắt và nhánh động mạch cùng ngoài!)."
      ],
      "topographicRelations": {
        "superficialAndDeep": "Mạng lưới thần kinh cùng sau (Lớp 4) chạy sát màng xương mào cùng bên sâu dưới cơ nhiều chân và dây chằng cùng – chậu sau.",
        "medialAndLateral": "Trên thiết đồ ngang từ trong ra ngoài gồm 3 gờ xương kinh điển của xương cùng: Mào cùng giữa (mỏm gai) -> Mào cùng trung gian (mỏm khớp, nằm ngay bờ TRONG lỗ cùng) -> LỖ CÙNG SAU (hố sẫm đứt quãng vỏ xương!) -> MÀO CÙNG BÊN (nằm ngay bờ NGOÀI lỗ cùng – ĐÍCH AN TOÀN!) -> Khe khớp cùng chậu."
      },
      "dangerCorridors": [
        "Lọt mũi kim vào lòng lỗ cùng sau S1, S2, S3: Sẽ gây tê rễ cùng trước (tê đáy chậu, bí tiểu tạm thời, yếu gấp gan chân) và làm mất tính đặc hiệu của phong bế chẩn đoán! Bắt buộc kiểm tra trên cả hai mặt cắt ngang và dọc thấy đầu kim chạm gờ xương đặc của mào cùng bên ở phía ngoài lỗ.",
        "Bật Doppler màu ngay miệng lỗ cùng sau tránh nhánh lưng của động mạch cùng ngoài."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_sacral_posterior_nerves_gray803.png",
          "figNumber": "Gray 803",
          "title": "Giải phẫu mặt sau xương cùng kinh điển: Các nhánh sau thần kinh cùng S1–S4 thoát từ lỗ cùng sau đan thành đám rối trên mào cùng bên (Gray's Plate 803)",
          "desc": "Bản vẽ vô giá của Gray (Plate 803) hiển thị trực tiếp các quai nối của ngành sau thần kinh cùng S1, S2, S3, S4 và ngành sau L5 chạy vắt qua bờ ngoài các lỗ cùng sau hướng tới dây chằng cùng - chậu.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 803) – The posterior divisions of the sacral nerves and posterior sacral plexus."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed., Plate 803) – Lateral Sacral Crest Palisade Corridor & Sacral Ala Notch",
      "surfaceLandmarks": [
        "Hai sừng cùng và Khe xương cùng (Sacral hiatus – mốc đáy đếm ngược lên).",
        "Gai chậu sau trên (PSIS – mốc biên giới ngoài ngang S2).",
        "Mào cùng giữa ở đường giữa và Mỏm gai L5 ở trên."
      ],
      "surfaceProjections": "Dải đốt sóng cao tần liên tục (Strip lesion corridor) chiếu thành một đoạn thẳng dọc hơi chếch ra ngoài khi đi lên trên, bắt đầu từ bờ ngoài lỗ cùng S3 (cách dưới mức PSIS ~2 cm, cách đường giữa ~1.8 cm) kéo dọc qua bờ ngoài lỗ S2 (ngang PSIS) lên bờ ngoài lỗ S1 (trên PSIS ~2 cm, cách đường giữa ~2.5 cm) và kết thúc tại rãnh cánh xương cùng sát gốc mỏm khớp trên S1 (đích ngành sau L5).",
      "palpationSteps": [
        "1. Bệnh nhân nằm sấp cân đối, dán bản điện cực tiếp đất RFA lên khối cơ đùi/bắp chân cùng bên.",
        "2. Sờ đánh dấu khe xương cùng, đường giữa mào cùng giữa và viền trong của gai chậu sau trên (PSIS).",
        "3. Kết hợp quét siêu âm sơ bộ vạch lên da đường nối 3 củ ngang xương cùng (TST1 – TST2 – TST3) và điểm rãnh cánh cùng L5 cách nhau đều đặn ≤ 10 mm."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_sacral_posterior_nerves_gray803.png",
          "figNumber": "Gray 803",
          "title": "Bản đồ giải phẫu mạng lưới quai nối thần kinh cùng sau S1–S4 giải thích cơ sở của dải đốt liên tục (Palisade Strip Lesion) (Gray's Plate 803)",
          "desc": "Do các nhánh ngoài S1–S3 tỏa nhiều sợi nhỏ ở các độ cao biến thiên dọc ngoài lỗ cùng, tạo dải đông nhiệt liên tục dọc mào cùng bên mới triệt tiêu trọn vẹn dẫn truyền đau.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 803) – Anastomosing loops of posterior sacral lateral branches."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy (Plates 322, 803) – Parasagittal & Transverse Sectional Anatomy Along the Lateral Sacral Crest",
      "sectionPlane": "Thiết đồ đứng dọc cạnh giữa dọc theo mào cùng bên (Parasagittal Lateral Sacral Crest Section) phối hợp Thiết đồ cắt ngang từng tầng S1–S3.",
      "layeredStructure": [
        "Lớp 1 – Da và lớp mỡ dưới da vùng cùng (cần đảm bảo tổng độ sâu từ da tới đầu hoạt động kim ≥ 15 – 20 mm để tránh bỏng nhiệt da!).",
        "Lớp 2 – Lá sau cân ngực – thắt lưng dày chắc.",
        "Lớp 3 – Cơ nhiều chân vùng cùng (Multifidus) và phức hợp dây chằng cùng – chậu sau sâu.",
        "Lớp 4 – DẢI ĐÍCH ĐỐT NHIỆT: Lớp màng xương liên tục dọc theo đỉnh và sườn ngoài MÀO CÙNG BÊN nối liền TST1 – TST2 – TST3 (nơi đặt hàng rào điện cực lưỡng cực cách nhau 8 – 10 mm tạo vùng đông nhiệt elip liên hoàn bao trùm toàn bộ các sợi nhánh ngoài S1–S3).",
        "Lớp 5 (Đáy xương & Hai vùng nguy hiểm cận kề) – Bản xương đặc mào cùng bên làm sàn phản xạ nhiệt; cách 5 – 8 mm về PHÍA TRONG là chuỗi LỖ CÙNG SAU (chứa thân rễ thần kinh cùng S1–S3); còn tại tầng cao nhất (cánh xương cùng), ngay PHÍA TRƯỚC bờ trước cánh cùng là thân rễ vận động L5!"
      ],
      "topographicRelations": {
        "superficialAndDeep": "So sánh 2 thiết đồ dọc song song cách nhau chỉ 8 mm: Thiết đồ dọc qua hàng lỗ cùng thấy xương đứt đoạn thành từng hố sâu (lỗ S1, S2, S3); dịch đầu dò ra ngoài 8 mm lên đúng mào cùng bên sẽ thấy một đường sóng xương LIÊN TỤC KHÔNG ĐỨT ĐOẠN!",
        "medialAndLateral": "Phía trong là lỗ cùng sau (rễ thần kinh cùng chi phối vận động chân và tự chủ bàng quang – trực tràng – sinh dục); phía ngoài là vách cánh chậu và khe khớp cùng chậu."
      },
      "dangerCorridors": [
        "Tổn thương nhiệt rễ cùng S1–S3 trong lỗ cùng hoặc rễ L5 trước cánh cùng: BẮT BUỘC xác nhận trên mặt cắt dọc tất cả các đầu kim đều tựa trên dải xương liên tục ngoài lỗ cùng VÀ bắt buộc chạy test kích thích vận động 2 Hz tới 2.0 V không có giật cơ chi dưới hay co thắt hậu môn trước khi bật chế độ đốt 80°C!",
        "Ở bệnh nhân rất gầy lớp dưới da mỏng: tránh rút lùi đầu hoạt động kim quá nông lên Lớp 1–2 gây bỏng da."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_sacroiliac_coronal_gray322.png",
          "figNumber": "Gray 322",
          "title": "Thiết đồ cắt ngang qua xương cùng minh họa bề dày bản xương vùng cánh - mào cùng bên so với ống cùng và lỗ cùng ở trong (Gray's Plate 322)",
          "desc": "Khối xương vùng bên xương cùng tạo nền xương dày an toàn ngăn cách điện cực RFA ở mặt lưng với các cấu trúc thần kinh - mạch máu chậu hông ở mặt trước.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 322) – Sectional anatomy of the sacrum and lateral sacral mass."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed.) – Pectoral & Deltopectoral Surface Anatomy; Moore's Clinically Oriented Anatomy",
      "surfaceLandmarks": [
        "Xương đòn (Clavicle) và Hố dưới đòn (Infraclavicular fossa / Mohrenheim's fossa) nằm ngay dưới chỗ nối 1/3 ngoài – 2/3 trong xương đòn.",
        "Đỉnh mỏm quạ xương vai (Tip of coracoid process): Mốc sờ chạm quan trọng nhất ('Lighthouse of the anterior shoulder'), nằm sâu dưới hố dưới đòn ~2 cm trong rãnh delta – ngực.",
        "Rãnh delta – ngực (Deltopectoral groove): Rãnh lõm chéo phân cách bờ trước cơ delta và bờ trên ngoài cơ ngực lớn (chứa tĩnh mạch đầu).",
        "Củ bé xương cánh tay (Lesser tubercle): Nằm ngang mức và phía ngoài đỉnh mỏm quạ ~2.0 cm, nổi rõ ngay dưới tay khi xoay ngoài cánh tay."
      ],
      "surfaceProjections": "Khe khớp ổ chảo – cánh tay trước chiếu lên bề mặt da thành một đường thẳng đứng dài ~3 cm nằm ngay sát PHÍA NGOÀI đỉnh mỏm quạ khoảng 1.0 – 1.5 cm. Toàn bộ bó mạch nách và đám rối thần kinh cánh tay đi chéo ở PHÍA TRONG và DƯỚI mỏm quạ (sâu dưới cơ ngực bé) – do đó đường dọc qua đỉnh mỏm quạ là 'biên giới đỏ tuyệt đối' phân chia vùng an toàn phía ngoài và vùng mạch máu lớn phía trong.",
      "palpationSteps": [
        "1. Đặt bệnh nhân nằm ngửa hoặc nửa ngồi, khuỷu gấp 90° áp sát mạn sườn.",
        "2. Dùng ngón cái ấn nhẹ vào rãnh delta – ngực ngay dưới xương đòn 2 cm để chạm vào đỉnh mỏm quạ cứng chắc (lưu ý mỏm quạ vốn nhạy cảm đau khi ấn mạnh ở người bình thường).",
        "3. Đặt ngón trỏ dịch sang phía ngoài mỏm quạ 2 cm, tay kia cầm cẳng tay bệnh nhân xoay ngoài tối đa: cảm nhận củ bé trượt ra ngoài làm căng giãn gân cơ dưới vai và mở rộng cửa sổ mặt trước khớp."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_upper_front_topography_gray1231.png",
          "figNumber": "Gray 1231",
          "title": "Giải phẫu bề mặt rãnh delta - ngực, hố dưới đòn và mặt trước vai (Gray's Plate 1231)",
          "desc": "Hình thái bề mặt hố dưới đòn (nơi sờ mỏm quạ), rãnh delta - ngực chứa tĩnh mạch đầu và khối cơ delta trước.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1231) – Surface topography of the front of right upper extremity."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy – Axial Section of Shoulder & Axilla; Ellis Human Sectional Anatomy",
      "sectionPlane": "Thiết đồ cắt ngang (Axial / Transverse Section) đi ngang qua đỉnh mỏm quạ, gân cơ dưới vai, củ bé xương cánh tay và bờ trước ổ chảo.",
      "layeredStructure": [
        "Lớp 1 – Da và mô dưới da vùng vai trước: Chứa nhánh thần kinh trên đòn và đặc biệt là TĨNH MẠCH ĐẦU (Cephalic vein) nằm trong rãnh mỡ giữa cơ delta và cơ ngực lớn.",
        "Lớp 2 – Bó trước cơ delta (Anterior deltoid) và lá mạc đòn – ngực (Clavipectoral fascia) nối sang mỏm quạ.",
        "Lớp 3 – Bao hoạt dịch dưới mỏm quạ / dưới cơ delta phần trước và gân chung cơ quạ – cánh tay & đầu ngắn cơ nhị đầu bám ở đỉnh mỏm quạ (phía trong).",
        "Lớp 4 – Gân cơ dưới vai (Subscapularis tendon, dày ~5 – 6 mm, cấu tạo đa dải gân đan xen thớ cơ) căng ngang từ hố dưới vai ra bám tận củ bé.",
        "Lớp 5 – Bao khớp trước (được tăng cường bởi 3 dây chằng ổ chảo – cánh tay trên, giữa, dưới) và KHOANG ĐÍCH: Ngách trước khớp ổ chảo – cánh tay (có thông nối với túi cùng dưới cơ dưới vai qua lỗ Weitbrecht).",
        "Lớp 6 (Đáy thiết đồ) – Sụn viền trước ổ chảo (Anterior labrum) ở phía trong và diện sụn chỏm xương cánh tay ở phía ngoài."
      ],
      "topographicRelations": {
        "superficialAndDeep": "Phía nông là bó trước cơ delta, tĩnh mạch đầu và gân cơ dưới vai; phía sâu là cổ giải phẫu chỏm cánh tay và bờ trước ổ chảo.",
        "medialAndLateral": "Phía TRONG mỏm quạ là bó mạch nách (Động mạch – Tĩnh mạch nách) và 3 bó đám rối thần kinh cánh tay; phía NGOÀI củ bé là rãnh gian củ chứa gân đầu dài cơ nhị đầu; phía DƯỚI bờ dưới cơ dưới vai là động mạch mũ cánh tay trước."
      },
      "dangerCorridors": [
        "Vùng cấm phía trong mỏm quạ: Tuyệt đối không đặt điểm chọc kim hay hướng mũi kim vượt quá mặt phẳng dọc qua mỏm quạ vào trong hố nách.",
        "Luôn nhả nhẹ lực ấn đầu dò ở rãnh delta – ngực để tĩnh mạch đầu không bị ép xẹp vô hình trước khi đâm kim."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_shoulder_capsule_gray327.png",
          "figNumber": "Gray 327",
          "title": "Giải phẫu bao khớp vai căng giãn mặt trước, mỏm quạ và các túi hoạt dịch thông nối (Gray's Plate 327)",
          "desc": "Mối liên quan trực tiếp giữa bao khớp vai trước, ngách hoạt dịch dưới cơ dưới vai, bao gân nhị đầu và mốc xương mỏm quạ.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 327) – Distended capsule of shoulder-joint (anterior aspect)."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed.) – Elbow Joint Surface Projections & Anconeus Triangle; Moore's Clinically Oriented Anatomy",
      "surfaceLandmarks": [
        "Đỉnh mỏm khuỷu xương trụ (Tip of olecranon), Mỏm trên lồi cầu ngoài và Chỏm xương quay.",
        "Tam giác mềm khuỷu ngoài (Lateral infracondylar 'Soft Spot' / Anconeus triangle): Tam giác lõm tạo bởi 3 đỉnh xương gồm Mỏm trên lồi cầu ngoài – Chỏm xương quay – Đỉnh mỏm khuỷu.",
        "Hố trên mỏm khuỷu (Posterior supracondylar / Olecranon depression): Vùng lõm dọc hai bên và ngay trên đỉnh mỏm khuỷu dưới gân cơ tam đầu.",
        "Mỏm trên lồi cầu trong và rãnh thần kinh trụ ở phía trong (vùng cấm tuyệt đối)."
      ],
      "surfaceProjections": "Bao hoạt dịch khớp khuỷu bọc chung cả 3 khớp (cánh tay – trụ, cánh tay – quay, quay – trụ gần). Trên bề mặt da, hai điểm mà khoang khớp nằm nông nhất và không vướng mạch máu – thần kinh lớn là: (1) Tâm tam giác mềm mặt ngoài khuỷu (chiếu thẳng vào khe khớp quay – lồi cầu con và ngách ngoài bao khớp) và (2) Bờ ngoài gân cơ tam đầu cách đỉnh mỏm khuỷu 1.5 – 2.0 cm lên phía trên (chiếu thẳng vào hố mỏm khuỷu).",
      "palpationSteps": [
        "1. Đặt khuỷu bệnh nhân gấp 90° (tư thế dung tích bao khớp khuỷu lớn nhất và mở rộng tối đa hố mỏm khuỷu phía sau).",
        "2. Dùng 3 ngón tay xác định 3 đỉnh của Tam giác mềm khuỷu ngoài (Lồi cầu ngoài – Chỏm quay – Đỉnh mỏm khuỷu): nếu có tràn dịch khớp khuỷu, tâm tam giác này sẽ căng phồng mất hõm lõm tự nhiên.",
        "3. Dùng ngón tay đối diện ấn xác nhận rãnh thần kinh trụ ở bờ trong mỏm khuỷu để tuyệt đối chỉ tiếp cận từ phía ngoài hoặc chính sau ngoài."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_upper_back_topography_gray1232.png",
          "figNumber": "Gray 1232",
          "title": "Giải phẫu bề mặt mặt sau cánh tay - khuỷu tay: Mỏm khuỷu, gân cơ tam đầu và hõm bên khuỷu (Gray's Plate 1232)",
          "desc": "Hình thái bề mặt đỉnh mỏm khuỷu, dải gân cơ tam đầu phía trên và hõm mềm bên ngoài khuỷu.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1232) – Back of right upper extremity surface topography."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy – Sagittal & Axial Sectional Anatomy of the Elbow Joint",
      "sectionPlane": "Thiết đồ đứng dọc chính giữa qua hố mỏm khuỷu (Mid-sagittal Section) và Thiết đồ chéo ngoài qua khớp quay – lồi cầu con.",
      "layeredStructure": [
        "Lớp 1 – Da lỏng lẻo vùng sau khuỷu và bao hoạt dịch dưới da mỏm khuỷu (Subcutaneous olecranon bursa – nằm NÔNG ngoài gân tam đầu, KHÔNG thông với ổ khớp khuỷu!).",
        "Lớp 2 – Mạc cánh tay sau và Gân cơ tam đầu cánh tay dày chắc (Triceps brachii tendon – ở đường giữa sau) hoặc Cơ khuỷu mỏng (Anconeus muscle – ở lối tam giác mềm ngoài).",
        "Lớp 3 – Bao xơ khớp khuỷu sau (Posterior fibrous capsule – mỏng, bám cao trên rìa trên hố mỏm khuỷu).",
        "Lớp 4 – Đệm mỡ sau khớp khuỷu (Posterior olecranon fat pad): Nằm TRONG bao xơ nhưng NGOÀI màng hoạt dịch (Intracapsular, extrasynovial – khi tràn dịch khớp sẽ đẩy đệm mỡ này bật lên tạo dấu hiệu 'cánh buồm sau' trên X-quang và siêu âm!).",
        "Lớp 5 – KHOANG ĐÍCH: Màng hoạt dịch và Ngách sau khoang khớp khuỷu trong lòng hố mỏm khuỷu (Olecranon fossa synovial recess) hoặc khe sụn khớp quay – lồi cầu con.",
        "Lớp 6 (Đáy thiết đồ) – Đáy xương lõm hố mỏm khuỷu xương cánh tay và sụn ròng rọc / chỏm con."
      ],
      "topographicRelations": {
        "superficialAndDeep": "Ở lối sau, từ nông vào sâu lần lượt là gân cơ tam đầu -> bao xơ -> đệm mỡ sau -> màng hoạt dịch -> đáy xương hố mỏm khuỷu; phía trước vách xương mỏng hố mỏm khuỷu là hố vẹt, cơ cánh tay và động mạch cánh tay – thần kinh giữa.",
        "medialAndLateral": "Bờ TRONG hố mỏm khuỷu sát liền rãnh ròng rọc – khuỷu chứa DÂY THẦN KINH TRỤ và động mạch quặt ngược trụ sau; bờ NGOÀI hố mỏm khuỷu chỉ có cơ khuỷu và nhánh mạch bên giữa nhỏ – đây là hành lang đi kim an toàn tuyệt đối!"
      },
      "dangerCorridors": [
        "Phân biệt bao hoạt dịch mỏm khuỷu nông (Lớp 1) với ổ khớp khuỷu sâu (Lớp 5): Tuyệt đối không chọc xuyên qua một bao hoạt dịch mỏm khuỷu đang viêm nhiễm khuẩn nông vào ổ khớp sâu gây viêm mủ khớp khuỷu!",
        "Luôn đưa kim vào hố mỏm khuỷu từ BỜ NGOÀI gân cơ tam đầu (Lateral-to-medial), cấm đi kim từ bờ trong để tránh thần kinh trụ."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_elbow_capsule_sagittal_gray331.png",
          "figNumber": "Gray 331",
          "title": "Giải phẫu bao hoạt dịch khớp khuỷu căng giãn và các túi cùng trên mỏm khuỷu - quanh chỏm quay (Gray's Plate 331)",
          "desc": "Hình thái không gian 3 chiều của khoang hoạt dịch khớp khuỷu mở rộng lên hố vẹt, hố mỏm khuỷu và túi cùng hình vòng quanh cổ xương quay.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 331) – Capsule of elbow-joint distended showing synovial recesses."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed.) – Nélaton's Line & Bryant's Iliofemoral Triangle; Moore's Clinically Oriented Anatomy",
      "surfaceLandmarks": [
        "Đỉnh mấu chuyển lớn xương đùi (Apex of greater trochanter): Sờ rõ ở mặt ngoài hông cách dưới mào chậu một bàn tay (~10 cm).",
        "Gai chậu trước trên (ASIS) ở phía trước trên và Ụ ngồi (Ischial tuberosity) ở phía sau dưới.",
        "Củ mào chậu (Iliac tubercle – điểm nhô rộng nhất của mào chậu cách ASIS 5 cm ra sau)."
      ],
      "surfaceProjections": "Hai mốc hình học bề mặt kinh điển của vùng hông ngoài (Gray's Plate 1243): (1) Đường Nélaton – Roser: Khi nằm nghiêng gấp háng 45°, đường nối thẳng từ ASIS tới ụ ngồi đi vừa chạm qua ĐỈNH MẤU CHUYỂN LỚN; (2) Tam giác Bryant: Hạ đường thẳng đứng từ ASIS xuống mặt giường và đường ngang từ đỉnh mấu chuyển lớn gặp nhau tạo tam giác vuông giúp xác định chính xác chiều cao khoảng trên mấu chuyển (Supratrochanteric window) dẫn thẳng vào mặt trên ngoài cổ – chỏm xương đùi.",
      "palpationSteps": [
        "1. Đặt bệnh nhân nằm nghiêng hoàn toàn sang bên lành, hai chân duỗi nhẹ có gối đệm giữa hai đầu gối.",
        "2. Dùng lòng bàn tay ôm xác định chu vi trước – sau và đỉnh cao nhất của mấu chuyển lớn xương đùi.",
        "3. Xác định cửa sổ mềm trên mấu chuyển (nằm ngay phía trên đỉnh mấu chuyển lớn 1 – 3 cm hướng về củ mào chậu)."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_hip_nelaton_bryant_gray1243.png",
          "figNumber": "Gray 1243",
          "title": "Giải phẫu bề mặt hông ngoài kinh điển: Đường Nélaton và Tam giác Bryant định vị đỉnh mấu chuyển lớn - cổ đùi (Gray's Plate 1243)",
          "desc": "Đường chuẩn Nélaton (ASIS – ụ ngồi) và tam giác Bryant giúp định khu chính xác đỉnh mấu chuyển lớn so với ổ cối và cổ xương đùi.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1243) – Nélaton's line and Bryant's triangle."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "OpenStax (Fig. 9.16) & Gray's Anatomy (Plate 344) – True Coronal Section of Hip & Abductor Mechanism",
      "sectionPlane": "Thiết đồ đứng ngang chính diện (True Coronal Section) cắt dọc qua cánh chậu, trần ổ cối, chỏm – cổ xương đùi và đỉnh mấu chuyển lớn.",
      "layeredStructure": [
        "Lớp 1 – Da và lớp mỡ dưới da vùng hông ngoài (dày ~1.5 – 4.5 cm).",
        "Lớp 2 – Lá cân rộng của Dải chậu chày (Iliotibial tract) và cân cơ mông (Gluteal aponeurosis).",
        "Lớp 3 – Bụng cơ và gân cơ mông nhỡ (Gluteus medius muscle) ở nông; ngăn cách với lớp dưới bởi mặt phẳng cân thần kinh – mạch máu chứa NHÁNH SÂU ĐỘNG MẠCH MÔNG TRÊN và THẦN KINH MÔNG TRÊN (L4–S1)!",
        "Lớp 4 – Bụng cơ và gân cơ mông bé (Gluteus minimus muscle) áp sát trực tiếp mặt trên bao khớp háng.",
        "Lớp 5 – Bao khớp trên ngoài (được tăng cường bởi bó ngang dây chằng chậu – đùi) và KHOANG ĐÍCH: Ngách trên ngoài khớp háng tại chỗ nối chỏm – cổ xương đùi.",
        "Lớp 6 (Đáy thiết đồ) – Vỏ xương bờ trên cổ xương đùi, sụn chỏm đùi và sụn viền trên ngoài ổ cối (Superolateral acetabular labrum)."
      ],
      "topographicRelations": {
        "superficialAndDeep": "Hành trình kim đi hoàn toàn qua cơ dạng háng (mông nhỡ -> mông bé) tới bờ trên cổ đùi; không hề đi gần bó mạch đùi (ở trước trong) hay thần kinh tọa (ở sau trong).",
        "medialAndLateral": "Phía trên trong sát bờ xương ổ cối là sụn viền trên ngoài (vùng hay rách nhất trong hội chứng chạm khớp háng FAI); phía dưới ngoài là diện bám gân cơ mông nhỡ – mông bé trên đỉnh mấu chuyển lớn."
      },
      "dangerCorridors": [
        "Mặt phẳng cân giữa Lớp 3 (cơ mông nhỡ) và Lớp 4 (cơ mông bé) chứa nhánh thần kinh mông trên và nhánh sâu động mạch mông trên: Bật Color Doppler kiểm tra trước khi xuyên kim.",
        "Tránh hướng mũi kim quá cao sát rìa xương ổ cối gây đâm xuyên qua sụn viền trên ngoài."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_hip_coronal_openstax916.jpg",
          "figNumber": "OpenStax 9.16",
          "title": "Thiết đồ đứng ngang (Coronal Section) qua đỉnh mấu chuyển lớn, bờ trên cổ xương đùi và trần sụn viền ổ cối (OpenStax Atlas)",
          "desc": "Thiết đồ đứng ngang khớp háng minh họa rõ cửa sổ trên mấu chuyển đi thẳng vào chỗ nối chỏm - cổ trên ngoài ngay dưới sụn viền ổ cối.",
          "atlasSource": "OpenStax Anatomy & Physiology (CC-BY 4.0, Fig. 9.16) – Coronal section of the hip joint."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed.) – Lacuna Musculorum vs. Lacuna Vasorum & Femoral Triangle",
      "surfaceLandmarks": [
        "Gai chậu trước trên (ASIS – đầu ngoài dây chằng bẹn) và Củ mu (Pubic tubercle – đầu trong dây chằng bẹn).",
        "Điểm giữa bẹn (Mid-inguinal point): Nơi bắt rõ mạch đập của ĐỘNG MẠCH ĐÙI.",
        "Gai chậu trước dưới (AIIS – nằm sâu dưới ASIS ~3 cm hơi vào trong, không sờ rõ ở người cơ dày nhưng định hướng trên đường nối)."
      ],
      "surfaceProjections": "Dưới dây chằng bẹn được vách cân chậu – lược (Iliopectineal arch) chia làm 2 buồng riêng biệt: Buồng mạch (Lacuna vasorum) ở PHÍA TRONG chứa động mạch – tĩnh mạch đùi; Buồng cơ (Lacuna musculorum) ở PHÍA NGOÀI chứa cơ thắt lưng chậu và thần kinh đùi. Gân cơ thắt lưng lớn và bao hoạt dịch thắt lưng chậu chiếu lên mặt da ở ngay dưới dây chằng bẹn cách mạch đập động mạch đùi ~1.5 – 2.0 cm về PHÍA NGOÀI!",
      "palpationSteps": [
        "1. Bệnh nhân nằm ngửa thẳng, hai chân duỗi trung tính.",
        "2. Sờ ASIS ở ngoài và bắt mạch đập động mạch đùi ở giữa nếp bẹn bằng hai ngón tay.",
        "3. Đánh dấu vùng đặt đầu dò nằm giữa ASIS và động mạch đùi ngay sát bờ dưới nếp dây chằng bẹn."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_thigh_femoral_markings_gray1245.png",
          "figNumber": "Gray 1245",
          "title": "Giải phẫu bề mặt nếp bẹn: Tương quan dây chằng bẹn, thần kinh đùi, động mạch đùi và nền chậu - lược (Gray's Plate 1245)",
          "desc": "Gân cơ thắt lưng chậu đi qua buồng cơ ngay phía sâu - ngoài của thần kinh đùi và động mạch đùi dưới dây chằng bẹn.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1245) – Surface markings of inguinal ligament, femoral nerve, and femoral artery."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy (Plates 344, 435) – Transverse-Oblique Sectional Anatomy Across Acetabular Rim & Muscular Lacuna",
      "sectionPlane": "Thiết đồ cắt ngang chếch song song dây chằng bẹn (Transverse-Oblique Section) qua gai chậu trước dưới (AIIS), gờ chậu – lược (IPE) và vành trước ổ cối.",
      "layeredStructure": [
        "Lớp 1 – Da và mô mỡ dưới da nếp bẹn (chứa hạch bạch huyết bẹn nông và tĩnh mạch thượng vị nông).",
        "Lớp 2 – Mạc đùi (Fascia lata), cơ may (Sartorius – ở cực ngoài bám vào ASIS) và nguyên ủy cơ thẳng đùi (bám vào AIIS).",
        "Lớp 3 – Mạc chậu (Fascia iliaca) bọc mặt nông cơ chậu: THẦN KINH ĐÙI (Femoral nerve) nằm dẹt ngay DƯỚI mạc chậu trên rãnh mặt trước trong của cơ chậu!",
        "Lớp 4 – Khối cơ chậu (Iliacus muscle – phần thịt giảm âm rộng ở phía ngoài) ôm lấy GÂN CƠ THẮT LƯNG LỚN (Psoas major tendon – bó gân dẹt bầu dục đặc chắc nằm lệch phía sâu – trong sát gờ xương!).",
        "Lớp 5 – KHOANG ĐÍCH: Bao hoạt dịch thắt lưng chậu (Iliopsoas / Iliopectineal bursa – túi hoạt dịch lớn nhất cơ thể, dài 5 – 7 cm, thông nối với ổ khớp háng ở ~15% người trưởng thành) nằm kẹp ngay giữa mặt sâu gân Psoas và mặt trước bao khớp háng / gờ xương chậu – lược!",
        "Lớp 6 (Đáy thiết đồ) – Vỏ xương phẳng nhô cao của Gờ chậu – lược (Iliopectineal eminence) và vành trước ổ cối."
      ],
      "topographicRelations": {
        "superficialAndDeep": "Thần kinh đùi (Lớp 3) nằm NÔNG hơn bụng cơ chậu, còn bao hoạt dịch đích (Lớp 5) nằm SÂU sát mặt xương dưới gân Psoas.",
        "medialAndLateral": "Ngay sát BỜ TRONG gân Psoas (qua vách cân chậu – lược mỏng) là ĐỘNG MẠCH ĐÙI và TĨNH MẠCH ĐÙI; phía NGOÀI gân Psoas là khối thịt cơ chậu dày và gai chậu trước dưới AIIS (hành lang an toàn tuyệt đối để đâm kim!)."
      },
      "dangerCorridors": [
        "Bắt buộc đi kim In-plane từ NGOÀI VÀO TRONG xuyên qua phần thịt cơ chậu ở dưới sâu (SÂU hơn thần kinh đùi!) để luồn mũi kim vào khe giữa mặt sâu gân Psoas và gờ xương chậu – lược.",
        "Tuyệt đối dừng kim dưới gân Psoas, không đẩy mũi kim nhô sang bờ trong gân chạm động mạch đùi."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_gluteal_deep_layer_gray435.png",
          "figNumber": "Gray 435",
          "title": "Thiết đồ xương - dây chằng qua dây chằng bẹn: Buồng cơ (ngoài), gờ chậu - lược, dây chằng Cooper và ống bịt (Gray's Plate 435)",
          "desc": "Cấu trúc nền xương từ gai chậu trước trên (ASIS) xuống gờ chậu - lược (trần trước ổ cối) tới củ mu, chỉ rõ mặt sàn xương nơi gân và bao hoạt dịch thắt lưng chậu trượt qua.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 435) – Coronal/anterior view of inguinal ligament, iliopectineal line, and obturator canal."
        },
        {
          "path": "assets/images/external_anatomy/ext_sec_hip_surrounding_section_gray344.png",
          "figNumber": "Gray 344",
          "title": "Thiết đồ cắt qua quanh khớp háng hiển thị trực tiếp bao hoạt dịch Psoas nằm dưới cơ thắt lưng chậu sát trước bao khớp (Gray's Plate 344)",
          "desc": "Trên thiết đồ quanh ổ cối của Gray, thấy rõ túi hoạt dịch dưới cơ Psoas kẹp sát bao khớp trước và tách biệt với bó mạch đùi ở phía trong.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 344) – Structures surrounding right hip-joint showing iliopsoas bursa and femoral vessels."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed.) – Lateral Knee Surface Markings & Gerdy's Tubercle; Noble's Compression Zone",
      "surfaceLandmarks": [
        "Củ Gerdy (Gerdy's anterolateral tibial tubercle): Gồ xương nhô tròn nằm ở mặt trước ngoài mâm chày, đúng trung điểm nối giữa lồi củ chày và chỏm xương mác.",
        "Mỏm trên lồi cầu ngoài xương đùi (Lateral femoral epicondyle): Đỉnh xương nhô cách khe khớp gối ngoài ~2.5 cm lên phía trên.",
        "Chỏm xương mác (Head of fibula): Nằm thấp hơn khe khớp ngoài ~2 cm ở phía sau ngoài (nơi bám dây chằng bên mác LCL và gân cơ nhị đầu đùi).",
        "Dải chậu chày (Iliotibial tract): Nổi gồ thành một dải gân phẳng rộng ~2 – 3 cm dọc mặt ngoài gối khi đứng chịu lực một chân gấp gối nhẹ."
      ],
      "surfaceProjections": "Vùng cọ xát cơ học tối đa của dải chậu chày và vị trí hình thành bao hoạt dịch dưới dải chậu chày xa (Distal ITB bursa) chiếu đúng lên đỉnh và bờ trên MỎM TRÊN LỒI CẦU NGOÀI XƯƠNG ĐÙI (cao hơn khe khớp gối ngoài 2.0 – 3.0 cm – điểm ấn đau Noble khi gấp gối ở góc 30°).",
      "palpationSteps": [
        "1. Bệnh nhân nằm ngửa hoặc nằm nghiêng sang bên lành, khớp gối gấp ~30°.",
        "2. Định vị tam giác xương mặt ngoài gối gồm Lồi củ chày (trước) – Củ Gerdy (giữa) – Chỏm xương mác (sau ngoài).",
        "3. Từ củ Gerdy lần dọc theo bờ dải chậu chày thẳng lên trên qua khe khớp ngoài ~2.5 cm chạm mỏm trên lồi cầu ngoài đùi; vừa ấn ngón cái lên lồi cầu ngoài vừa cho bệnh nhân gấp – duỗi gối qua góc 30° (nghiệm pháp Noble)."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_leg_lateral_itb_fibula_gray1240.png",
          "figNumber": "Gray 1240",
          "title": "Giải phẫu bề mặt mặt ngoài gối và cẳng chân: Dải chậu chày, củ Gerdy và chỏm xương mác (Gray's Plate 1240)",
          "desc": "Hình thái bề mặt dải chậu chày chạy qua lồi cầu ngoài xương đùi xuống bám củ Gerdy phía trước chỏm xương mác và thần kinh mác chung phía sau.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1240) – Lateral aspect of right knee and leg surface anatomy."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy – Coronal & Axial Sectional Anatomy of Lateral Femoral Condyle & Iliotibial Tract",
      "sectionPlane": "Thiết đồ đứng ngang mặt ngoài gối (Lateral Coronal Section) và Thiết đồ cắt ngang qua mỏm trên lồi cầu ngoài xương đùi.",
      "layeredStructure": [
        "Lớp 1 – Da và lớp mỡ dưới da vùng ngoài gối (dày ~3 – 8 mm; chứa các nhánh tận thần kinh bì đùi ngoài).",
        "Lớp 2 – Dải chậu chày (Iliotibial band - ITB, dải cân collagen dày đặc 2 – 3 mm liên tục với mạc giữ bánh chè ngoài ở phía trước và vách gian cơ đùi ngoài ở phía trên).",
        "Lớp 3 – KHOANG ĐÍCH: Khoang mỡ giàu mạch máu – thần kinh dưới dải chậu chày và Bao hoạt dịch dải chậu chày xa (Sub-ITB adventitial bursa / Lateral synovial recess extension) nằm ngay giữa mặt sâu ITB và mỏm trên lồi cầu ngoài xương đùi.",
        "Lớp 4 – Ở ngay phía sau – dưới lồi cầu ngoài hơn là nguyên ủy Dây chằng bên mác (Fibular / Lateral collateral ligament - LCL) và sâu hơn LCL là gân cơ khoeo (Popliteus tendon trong rãnh khoeo).",
        "Lớp 5 (Đáy thiết đồ) – Màng xương sườn ngoài lồi cầu ngoài xương đùi và ngách bên ổ khớp gối."
      ],
      "topographicRelations": {
        "superficialAndDeep": "Dải ITB (Lớp 2) nằm rất nông ngay dưới da; khoang hoạt dịch đích (Lớp 3) áp trực tiếp lên vỏ xương lồi cầu ngoài đùi.",
        "medialAndLateral": "Trên thiết đồ cắt ngang mức trên lồi cầu ngoài: Phía TRƯỚC là cơ rộng ngoài và ngách trên bánh chè; phía SAU cách ~3 – 4 cm dọc mặt trong gân cơ nhị đầu đùi là DÂY THẦN KINH MÁC CHUNG (Common peroneal nerve); sát màng xương trên lồi cầu ngoài có ĐỘNG MẠCH GỐI TRÊN NGOÀI (SLGA)."
      },
      "dangerCorridors": [
        "Luôn đi kim từ TRƯỚC RA SAU (Anterior-to-posterior) trên thiết đồ cắt ngang hoặc từ xa lên gần dọc dải ITB, tuyệt đối không trượt kim sâu ra khoang sau chạm thần kinh mác chung.",
        "Bật Color Doppler kiểm tra nhánh động mạch gối trên ngoài sát vỏ xương trước khi bơm thuốc."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_knee_capsule_lateral_gray351.png",
          "figNumber": "Gray 351",
          "title": "Thiết đồ mặt ngoài khớp gối: Tương quan lồi cầu ngoài xương đùi, dây chằng bên mác, gân khoeo và bao hoạt dịch (Gray's Plate 351)",
          "desc": "Vị trí sườn ngoài lồi cầu ngoài xương đùi so với ngách bao khớp ngoài, dây chằng bên mác và chỏm xương mác.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 351) – Lateral aspect of knee joint capsule and surrounding structures."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed.) – Anterior Knee Extensor Mechanism Surface Anatomy",
      "surfaceLandmarks": [
        "Đỉnh / Cực dưới xương bánh chè (Apex / Inferior pole of patella): Mũi nhọn hình chữ V hướng xuống dưới nằm cao hơn khe khớp gối trước ~1.5 – 2.0 cm khi gối gấp nhẹ.",
        "Lồi củ xương chày (Tibial tuberosity): Gồ xương lớn cách cực dưới xương bánh chè ~4.5 – 5.0 cm.",
        "Hai hõm mềm cạnh gân bánh chè (Medial & Lateral infrapatellar fat pad dimples – 'mắt gối'): Phồng nhẹ hai bên gân bánh chè tương ứng đệm mỡ Hoffa bên dưới."
      ],
      "surfaceProjections": "Dải gân bánh chè rộng ~2.5 – 3.0 cm chạy thẳng đứng từ đỉnh dưới xương bánh chè tới nửa trên lồi củ chày. Tổn thương viêm thoái hóa gân bánh chè (Jumper's knee) tập trung ở 90% trường hợp tại phần sâu – trong ngay sát ĐỈNH CỰC DƯỚI XƯƠNG BÁNH CHÈ (trong phạm vi 1.0 cm đầu tiên dưới cực dưới bánh chè).",
      "palpationSteps": [
        "1. Khám điểm đau ở tư thế GỐI DUỖI THẲNG 180° thả lỏng hoàn toàn cơ tứ đầu (nếu khám khi gối đang gấp căng, các sợi nông lành căng cứng sẽ che lấp ổ tổn thương sâu gây âm tính giả!).",
        "2. Dùng lòng bàn tay ấn cực trên xương bánh chè bẩy cho cực dưới xương bánh chè bật ngửa lên nông rồi ấn đầu ngón cái vào mặt dưới đỉnh bánh chè (dấu hiệu Bassett).",
        "3. Khi đặt đầu dò can thiệp, kê gối nhỏ dưới khoeo (gấp 20° – 30°) để gân duỗi thẳng hết chùng sóng."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_leg_lateral_itb_fibula_gray1240.png",
          "figNumber": "Gray 1240",
          "title": "Giải phẫu bề mặt cơ chế duỗi gối trước: Xương bánh chè, gân bánh chè và lồi củ chày (Gray's Plate 1240)",
          "desc": "Định khu bề mặt đỉnh xương bánh chè, dải gân bánh chè phẳng phía trước và lồi củ xương chày.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1240) – Surface landmarks of patella, ligamentum patellae, and tibial tuberosity."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy (Plate 350) & OpenStax (Fig. 9.17) – Mid-Sagittal & Axial Section of Infrapatellar Region",
      "sectionPlane": "Thiết đồ đứng dọc chính giữa dưới bánh chè (Infrapatellar Mid-sagittal Section) và Thiết đồ cắt ngang ngay dưới đỉnh xương bánh chè.",
      "layeredStructure": [
        "Lớp 1 – Da mặt trước gối và bao hoạt dịch dưới da trước/dưới bánh chè nông (Subcutaneous infrapatellar bursa).",
        "Lớp 2 – Mạc sâu gối trước và bao quanh gân mỏng (Paratenon – gân bánh chè KHÔNG có bao hoạt dịch gân thực sự như gân gấp bàn tay mà được nuôi qua mạng mạch paratenon và đệm mỡ Hoffa!).",
        "Lớp 3 – ĐÍCH CHÂM KIM / PRP: Nhu mô Gân bánh chè (Ligamentum patellae, dày chuẩn 3.5 – 5.0 mm; vùng thoái hóa nhầy nằm khu trú ở bó sợi sâu sát mặt sau đỉnh xương bánh chè).",
        "Lớp 4 – ĐÍCH BÓC TÁCH THỦY DỊCH THỂ TÍCH LỚN (High-volume interface): Mặt phẳng màng mỏng giữa mặt sâu gân bánh chè và mặt trước ĐỆM MỠ DƯỚI BÁNH CHÈ HOFFA (Infrapatellar fat pad – nơi các vi mạch tân sinh và sợi thần kinh đau C-fibers mọc xuyên vào mặt sâu gân!).",
        "Lớp 5 – Đệm mỡ Hoffa (nội bao khớp nhưng ngoài màng hoạt dịch) ở trên VÀ Bao hoạt dịch dưới bánh chè sâu (Deep infrapatellar bursa – dài ~1.5 cm kẹp giữa mặt sâu đầu xa gân bánh chè và bờ trước trên xương chày).",
        "Lớp 6 (Đáy thiết đồ) – Nếp hoạt dịch dưới bánh chè (Ligamentum mucosum), dây chằng ngang gối và khe sụn lồi cầu đùi – mâm chày."
      ],
      "topographicRelations": {
        "superficialAndDeep": "Mặt nông gân bánh chè cách da chỉ 3 – 5 mm; mặt sâu gân áp trực tiếp vào đệm mỡ Hoffa giàu mạch máu (vòng nối mạch quanh bánh chè tạo bởi động mạch gối dưới trong và dưới ngoài).",
        "medialAndLateral": "Ở bờ trong dưới bánh chè có nhánh dưới bánh chè của thần kinh hiển (Infrapatellar branch of saphenous nerve) chạy nông ngang dưới da ra trước gân bánh chè."
      },
      "dangerCorridors": [
        "TUYỆT ĐỐI CẤM TIÊM CORTICOSTEROID vào Lớp 3 hoặc Lớp 4 vì làm ức chế tổng hợp collagen gây đứt ngang hoàn toàn gân bánh chè!",
        "Khi đi kim In-plane trên thiết đồ ngang từ bờ ngoài luồn vào Lớp 4 (giữa mặt sâu gân và đệm mỡ Hoffa), tránh nhánh dưới bánh chè thần kinh hiển ở bờ trong."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_knee_sagittal_gray350.png",
          "figNumber": "Gray 350",
          "title": "Thiết đồ đứng dọc giữa khớp gối: Gân bánh chè, đệm mỡ Hoffa và bao hoạt dịch dưới bánh chè sâu (Gray's Plate 350)",
          "desc": "Thiết đồ dọc kinh điển hiển thị toàn bộ chiều dài gân bánh chè (Ligamentum patellae), đệm mỡ dưới bánh chè (Infrapatellar pad of fat) ngay mặt sâu đầu gần gân và túi hoạt dịch dưới bánh chè sâu ở đầu xa.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 350) – Sagittal section showing patellar tendon, Hoffa's fat pad, and deep infrapatellar bursa."
        },
        {
          "path": "assets/images/external_anatomy/ext_sec_knee_sagittal_openstax917.jpg",
          "figNumber": "OpenStax 9.17",
          "title": "Thiết đồ đứng dọc màu cấu trúc các lớp bao khớp, đệm mỡ và túi hoạt dịch khớp gối (OpenStax Atlas)",
          "desc": "Phân tầng màu trực quan của cơ chế duỗi gối, đệm mỡ dưới bánh chè, bao hoạt dịch trước/dưới bánh chè và ổ khớp.",
          "atlasSource": "OpenStax Anatomy & Physiology (CC-BY 4.0, Fig. 9.17) – Sagittal section of the knee joint."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed., Plate 1241) – Lateral Malleolus, Sinus Tarsi & Peroneal Tendon Sheaths",
      "surfaceLandmarks": [
        "Đỉnh mắt cá ngoài xương mác (Tip of lateral malleolus).",
        "Hõm xoang cổ chân (Sinus tarsi): Vùng lõm tròn mềm rộng ~1.5 cm nằm ngay phía TRƯỚC – DƯỚI mắt cá ngoài ~1.5 – 2.0 cm.",
        "Gân cơ mác dài và mác ngắn (Peroneus longus & brevis tendons): Vòng sát bờ sau – dưới đỉnh mắt cá ngoài trượt trên thành ngoài xương gót.",
        "Mỏm chân đế sên (Sustentaculum tali) ở mặt trong (dưới đỉnh mắt cá trong ~2.5 cm – mốc đối chiếu bên trong)."
      ],
      "surfaceProjections": "Buồng khớp dưới sên sau (Posterior talocalcaneal joint) chiếu ra mặt ngoài cổ chân tại khe ngang hơi chếch nằm ngay PHÍA TRƯỚC – DƯỚI đỉnh mắt cá ngoài khoảng 1.0 cm (ngay bờ sau của xoang cổ chân và ngay PHÍA TRƯỚC – TRÊN của hai gân cơ mác).",
      "palpationSteps": [
        "1. Đặt bệnh nhân nằm nghiêng sang bên lành, kê cuộn khăn dưới mắt cá trong để bàn chân nghiêng trong nhẹ (Inversion – làm hé mở khe khớp dưới sên bên ngoài).",
        "2. Sờ đỉnh nhọn mắt cá ngoài và yêu cầu bệnh nhân nghiêng ngoài bàn chân có kháng lực nhẹ để thấy rõ hai gân cơ mác căng lên vòng ngay sau dưới mắt cá ngoài.",
        "3. Ấn ngón cái vào khoảng lõm ngay trước hai gân cơ mác và ngay dưới trước đỉnh mắt cá ngoài 1 cm (bờ sau xoang cổ chân) đồng thời lắc thụ động xương gót để cảm nhận khe khớp dưới sên chuyển động."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_ankle_lateral_sheaths_gray1241.png",
          "figNumber": "Gray 1241",
          "title": "Giải phẫu bề mặt cổ chân ngoài: Mắt cá ngoài, xoang cổ chân và bao hoạt dịch chung gân cơ mác dài - mác ngắn (Gray's Plate 1241)",
          "desc": "Hình chiếu chính xác đường đi bao hoạt dịch gân cơ mác vòng sát dưới mắt cá ngoài qua mặt ngoài khe khớp dưới sên.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1241) – Lateral aspect of ankle showing peroneal tendon sheaths and sinus tarsi."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy (Plate 357) – Coronal Sectional Anatomy of Talocalcaneal Articulation & Interosseous Ligament",
      "sectionPlane": "Thiết đồ đứng ngang qua cổ chân – gót (Ankle-Hindfoot Coronal Section) cắt qua mắt cá ngoài, mỏm ngoài xương sên, khe khớp dưới sên sau và xương gót.",
      "layeredStructure": [
        "Lớp 1 – Da và mô dưới da vùng dưới mắt cá ngoài (dày ~3 – 6 mm; ở phía sau gân cơ mác có THẦN KINH BẮP CHÂN / SURAL NERVE và tĩnh mạch hiển bé!).",
        "Lớp 2 – Hãm gân cơ mác trên/dưới (Peroneal retinacula) và Bao hoạt dịch chứa Gân cơ mác ngắn + Gân cơ mác dài (vắt chéo ở nửa dưới ngoài thiết đồ) cùng dây chằng mác – gót (Calcaneofibular ligament - CFL) bắc cầu qua mặt ngoài khe khớp!",
        "Lớp 3 – Bao xơ khớp dưới sên sau và ngách hoạt dịch ngoài (Anterolateral / Posterolateral subtalar recess).",
        "Lớp 4 – KHOANG ĐÍCH: Khe khớp hoạt dịch dưới sên sau (Posterior talocalcaneal synovial cavity) nằm giữa diện khớp lõm mặt dưới thân xương sên (trên) và diện khớp lồi sau mặt trên xương gót (dưới).",
        "Lớp 5 (Giới hạn trong sâu của thiết đồ) – Dây chằng sên – gót gian cốt cực dày (Interosseous talocalcaneal ligament trong xoang cổ chân, ngăn cách hoàn toàn buồng dưới sên sau với khớp sên – gót – ghe phía trước!)."
      ],
      "topographicRelations": {
        "superficialAndDeep": "Mặt ngoài khe khớp dưới sên sau bị bắt chéo bởi dây chằng mác – gót (CFL) và hai gân cơ mác ở phía sau dưới; còn cửa ngách trước ngoài ngay sát sau xoang cổ chân chỉ có da, mô mỡ và bao khớp mỏng che phủ!",
        "medialAndLateral": "Nếu đâm kim quá sâu xuyên suốt chiều ngang khớp sang bờ trong xương gót dưới mỏm chân đế sên sẽ chạm ống cổ chân trong (gân FHL và bó mạch thần kinh gan chân!)."
      },
      "dangerCorridors": [
        "Luôn nhận diện bóng cắt của gân cơ mác dài – mác ngắn ở phần dưới màn hình siêu âm để lách kim vào khe xương mỏm ngoài xương sên – xương gót ở PHÍA TRƯỚC – TRÊN gân cơ mác, tránh đâm xuyên qua gân mác.",
        "Không đâm từ phía sau gân cơ mác để tránh thần kinh Sural và tĩnh mạch hiển bé."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_ankle_subtalar_coronal_gray357.png",
          "figNumber": "Gray 357",
          "title": "Thiết đồ đứng ngang qua khớp dưới sên: Xương sên, xương gót, dây chằng gian cốt, gân mác và ống cổ chân trong (Gray's Plate 357)",
          "desc": "Thiết đồ đứng ngang tuyệt chuẩn chỉ rõ hướng nghiêng của khe khớp dưới sên sau, dây chằng mác - gót cùng hai gân cơ mác ở bờ ngoài và bó mạch thần kinh gan chân ở bờ trong.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 357) – Coronal section through talocrural and subtalar joints."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed., Plates 1240, 1241, 1242) – Surface Markings of the Five Ankle Nerves",
      "surfaceLandmarks": [
        "Mắt cá trong (Medial malleolus) và Gân gót Achilles ở phía sau trong -> định khu Ống cổ chân (Tarsal tunnel) cho Thần kinh chày, và bờ trước mắt cá trong cho Thần kinh hiển.",
        "Mắt cá ngoài (Lateral malleolus) và bờ ngoài Gân gót Achilles -> định khu rãnh sau mắt cá ngoài cho Thần kinh bắp chân (Sural nerve).",
        "Gân chày trước (TA), Gân duỗi ngón cái dài (EHL), Gân duỗi chung (EDL) và mạch đập Động mạch mu chân -> định khu Thần kinh mác sâu (DPN).",
        "Rãnh cơ 1/3 dưới ngoài cẳng chân (cao hơn mắt cá ngoài 6 – 10 cm, giữa cơ mác ngắn và cơ EDL) -> nơi Thần kinh mác nông (SPN) xuyên mạc cẳng chân ra dưới da."
      ],
      "surfaceProjections": "Vòng đai phong bế cổ chân (Supramalleolar & Intermalleolar ring): (1) Thần kinh chày nằm ở điểm giữa đường nối bờ sau mắt cá trong và bờ trong gân Achilles (ngay sau động mạch chày sau); (2) Thần kinh mác sâu đi dọc khe giữa gân EHL và EDL ngay bờ ngoài động mạch chày trước; (3) Thần kinh hiển chạy sát bờ trước mắt cá trong cùng tĩnh mạch hiển lớn; (4) Thần kinh Sural chạy ở điểm giữa mắt cá ngoài và bờ ngoài gân Achilles cùng tĩnh mạch hiển bé; (5) Thần kinh mác nông xuyên mạc cẳng chân ở bờ trước xương mác trên mắt cá ngoài ~8 cm rồi tỏa nhánh nông trước cổ chân.",
      "palpationSteps": [
        "1. Bắt hai mốc mạch đập chủ đạo: Mạch chày sau (sau mắt cá trong -> dẫn đường cho TN) và Mạch chày trước/mu chân (giữa cổ chân trước -> dẫn đường cho DPN).",
        "2. Quan sát hoặc buộc garô tĩnh mạch nhẹ ở bắp chân 20 giây để nổi rõ Tĩnh mạch hiển lớn (trước mắt cá trong -> dẫn đường cho Saphenous) và Tĩnh mạch hiển bé (sau mắt cá ngoài -> dẫn đường cho Sural).",
        "3. Sờ dọc bờ trước thân xương mác ở 1/3 dưới cẳng chân (trên mắt cá ngoài 6 – 8 cm) tìm rãnh vách gian cơ trước để đặt đầu dò tìm SPN."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_ankle_medial_tarsal_gray1242.png",
          "figNumber": "Gray 1242",
          "title": "Giải phẫu bề mặt mặt trong cổ chân: Thứ tự gân - mạch - thần kinh trong ống cổ chân dưới mạc giữ gân gấp (Gray's Plate 1242)",
          "desc": "Hình chiếu bề mặt 3 bao gân (TP -> FDL -> FHL) và khe giữa FDL - FHL nơi bó mạch chày sau và thần kinh chày đi qua.",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1242) – Medial aspect of ankle showing tarsal tunnel compartments."
        },
        {
          "path": "assets/images/external_anatomy/ext_surf_leg_lateral_itb_fibula_gray1240.png",
          "figNumber": "Gray 1240",
          "title": "Giải phẫu bề mặt mặt ngoài cẳng - cổ chân: Vách cơ mác - EDL nơi thần kinh mác nông xuyên mạc và rãnh sau mắt cá ngoài (Gray's Plate 1240)",
          "desc": "Định khu mặt ngoài 1/3 dưới cẳng chân (chỗ thoát SPN) và hõm giữa mắt cá ngoài - gân gót (đường đi thần kinh Sural).",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1240) – Lateral aspect of leg and ankle surface topography."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy (Plate 440) & Ellis Sectional Anatomy – Transverse Cross-Section of Distal Leg & Supramalleolar Ankle",
      "sectionPlane": "Thiết đồ cắt ngang qua đầu dưới cẳng chân – trên hai mắt cá (Supramalleolar Axial Cross-Section) cắt qua toàn bộ 5 dây thần kinh cảm giác bàn chân.",
      "layeredStructure": [
        "Tầng Dưới da Trong & Sau ngoài (Epifascial venous-neural plane – nằm NGOÀI mạc cẳng chân): Chứa (1) Thần kinh hiển (Saphenous nerve) kẹp sát Tĩnh mạch hiển lớn ngay trước mắt cá trong, và (2) Thần kinh bắp chân (Sural nerve) kẹp sát Tĩnh mạch hiển bé ở rãnh giữa mắt cá ngoài và bờ ngoài gân Achilles.",
        "Tầng Xuyên mạc Trước ngoài (Fascial piercing plane – trên mắt cá ngoài ~6 – 10 cm): Chứa (3) Thần kinh mác nông (Superficial fibular nerve – SPN) nằm tại đỉnh tam giác vách gian cơ trước giữa cơ mác ngắn (Peroneus brevis) và cơ duỗi các ngón chân dài (EDL) ngay trước khi chọc thủng mạc cẳng chân ra mô mỡ dưới da.",
        "Khoang Sâu Trước dưới mạc giữ gân duỗi (Anterior subfascial compartment): Da & mỡ -> Mạc giữ gân duỗi -> Khe giữa gân EHL (trong) và gân EDL (ngoài) -> ĐÍCH (4): Thần kinh mác sâu (Deep fibular nerve – DPN) nằm sát mặt trước vỏ xương chày / màng gian cốt ngay cạnh bờ ngoài Động mạch chày trước.",
        "Khoang Sâu Sau trong – Ống cổ chân (Tarsal tunnel dưới mạc giữ gân gấp): Da & mỡ -> Mạc giữ gân gấp (Flexor retinaculum) -> Thứ tự từ trước trong ra sau ngoài ('Tom, Dick And Very Nervous Harry'): Gân chày sau (TP) -> Gân gấp chung (FDL) -> Động mạch & 2 tĩnh mạch chày sau -> ĐÍCH (5): Thần kinh chày (Tibial nerve) -> Gân gấp ngón cái dài (FHL) tựa trên rãnh sau xương sên."
      ],
      "topographicRelations": {
        "superficialAndDeep": "Ba thần kinh nông (Saphenous, Sural, SPN đoạn cổ chân) nằm trong mô mỡ dưới da trên mạc sâu (ấn mạnh đầu dò sẽ làm xẹp tĩnh mạch tùy hành!); hai thần kinh sâu (Tibial, DPN) nằm trong khoang cân xương – xơ kín đi kèm động mạch lớn.",
        "medialAndLateral": "Thần kinh chày thường nằm ngay PHÍA SAU – NGOÀI động mạch chày sau (nhưng có thể chia nhánh gót trong sớm trên mắt cá 3 – 5 cm nên phong bế trên đỉnh mắt cá trong 2 – 3 cm sẽ bắt trọn cả nhánh gót!)."
      },
      "dangerCorridors": [
        "TUYỆT ĐỐI KHÔNG PHA ADRENALINE (Epinephrine) nồng độ co mạch khi phong bế vòng cổ chân trên bệnh nhân bệnh mạch máu ngoại vi / đái tháo đường vì nguy cơ co thắt động mạch tận bàn – ngón chân!",
        "Ống cổ chân và khoang trước xương chày là các khoang kín hạn chế giãn nở: Dùng thể tích vừa phải (3 – 5 ml cho TN, 2 – 3 ml cho mỗi nhánh còn lại) và tuyệt đối tránh tiêm nội thần kinh."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_leg_cross_section_gray440.png",
          "figNumber": "Gray 440",
          "title": "Thiết đồ cắt ngang chuẩn qua cẳng chân hiển thị đầy đủ vị trí 5 dây thần kinh cảm giác xuống cổ bàn chân (Gray's Plate 440)",
          "desc": "Một thiết đồ cắt ngang duy nhất cho thấy trọn vẹn cả 5 đích: Thần kinh mác sâu & động mạch chày trước (khu trước), Thần kinh mác nông (vách cơ mác - EDL), Thần kinh chày & mạch chày sau (khu sau sâu), Thần kinh hiển & TM hiển lớn (dưới da trong), và nhánh tạo Thần kinh Sural & TM hiển bé (dưới da sau).",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 440) – Transverse cross-section through the leg showing all five neural pathways."
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
    "surfaceAnatomy": {
      "sourceRef": "Gray's Anatomy (42nd Ed.) – Pelvic Brim, Inguinal & Obturator Surface Landmarks; Short & Peng Anatomical Study",
      "surfaceLandmarks": [
        "Gai chậu trước trên (ASIS) ở phía ngoài.",
        "Củ mu (Pubic tubercle) và Bờ trên ngành trên xương mu ở phía trong.",
        "Điểm đập động mạch đùi tại điểm giữa bẹn (Mid-inguinal point).",
        "Nếp lằn bẹn – đùi trong (cách củ mu ~2 – 3 cm ra ngoài và xuống dưới tương ứng vùng cơ lược che phủ ống bịt)."
      ],
      "surfaceProjections": "Hai đích xương cảm giác khớp háng chiếu lên vùng bẹn trước: (1) Đích PENG / Nhánh khớp thần kinh đùi & thần kinh bịt phụ (Target 1) chiếu dọc theo nửa ngoài đường nối ASIS – Củ mu (ngay sâu dưới dây chằng bẹn, phía ngoài động mạch đùi); (2) Đích nhánh khớp thần kinh bịt (Target 2) chiếu tại góc dưới – ngoài củ mu ~2.5 cm (nơi ngành trên xương mu gặp trụ trước dưới ổ cối dưới cơ lược).",
      "palpationSteps": [
        "1. Bệnh nhân nằm ngửa, đùi để trung tính (khi làm Target 1) và hơi dạng nhẹ – xoay ngoài 15° (khi làm Target 2 vùng cơ lược).",
        "2. Bắt mạch đập động mạch đùi và tĩnh mạch đùi (nằm trong động mạch 1 cm) rồi vẽ vạch dọc cảnh báo trên da vùng bẹn.",
        "3. Xác định ASIS (điểm mốc ngoài cho Target 1) và củ mu (điểm mốc trong cho Target 2)."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_surf_inguinal_ring_gray1227.png",
          "figNumber": "Gray 1227",
          "title": "Giải phẫu bề mặt vùng chậu - bẹn: Hình chiếu đường động mạch chậu ngoài - đùi, vòng đùi và khung xương mu - chậu (Gray's Plate 1227)",
          "desc": "Đối chiếu bề mặt đường động mạch chậu ngoài tiếp nối động mạch đùi đi qua điểm giữa bẹn phân ranh giữa vùng chậu ngoài (Target 1) và vùng lược - bịt (Target 2).",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 1227) – Surface projections of iliac-femoral vessels and inguinal rings."
        }
      ]
    },
    "crossSectionalAnatomy": {
      "sourceRef": "Gray's Anatomy (Plates 344, 435) – Sectional Anatomy of Iliopubic Valley & Subpectineal Obturator Canal",
      "sectionPlane": "Thiết đồ chéo dọc vành chậu trước (Pelvic Brim Oblique Section qua AIIS – IPE) cho Target 1 VÀ Thiết đồ đứng dọc/ngang qua cơ lược – rãnh bịt cho Target 2.",
      "layeredStructure": [
        "Tầng Nông & Đệm Cơ tại Target 1 (Vùng chậu ngoài): Da & mỡ dưới da (chứa thần kinh bì đùi ngoài LFCN sát dưới ASIS) -> Mạc đùi & cơ may / thẳng đùi -> Mạc chậu (có THẦN KINH ĐÙI nằm ngay dưới mạc chậu phía trong) -> Khối cơ chậu (ngoài) & Gân cơ thắt lưng lớn (trong) làm đệm chắn an toàn.",
        "Tầng Đáy Xương Target 1 (Thung lũng PENG / AIIS – IPE): ĐÍCH 1 nằm ngay sát màng xương khe lõm giữa Gai chậu trước dưới (AIIS) và Gờ chậu – lược (IPE), nơi hội tụ toàn bộ các nhánh khớp cao/thấp của thần kinh đùi và thần kinh bịt phụ (AON).",
        "Tầng Nông & Cơ Lược tại Target 2 (Vùng bẹn trong): Da & mỡ đùi trong (chứa Tĩnh mạch hiển lớn đổ vào tĩnh mạch đùi) -> Mạc lược (Pectineal fascia) -> Bụng cơ lược (Pectineus muscle) dày bao phủ phía trước ống bịt.",
        "Tầng Đáy Xương Target 2 (Cửa ra Ống bịt – Khuyết ổ cối): Mạc cơ bịt ngoài (Obturator externus) -> ĐÍCH 2 tại mặt phẳng cân sâu dưới cơ lược và góc xương nơi nhánh khớp của THẦN KINH BỊT thoát ra từ ống bịt ngay dưới ngành trên xương mu sát khuyết ổ cối (Incisura acetabuli)."
      ],
      "topographicRelations": {
        "superficialAndDeep": "Tại Target 1, khối cơ chậu – thắt lưng dày ~2 – 3 cm làm tấm đệm ngăn cách an toàn giữa mũi kim nằm sát xương ở sâu với thân chính thần kinh đùi ở nông.",
        "medialAndLateral": "Giữa Target 1 (ngoài) và Target 2 (trong) là hành lang mạch máu lớn chứa BÓ MẠCH ĐÙI (Femoral artery & vein); tại Target 2 sát bờ xương mu có ĐỘNG MẠCH BỊT và nhánh nối CORONA MORTIS (nối động mạch thượng vị dưới với động mạch bịt ở ~25 – 30% dân số!)."
      },
      "dangerCorridors": [
        "Vòng nối tử thần Corona mortis và bó mạch bịt tại Target 2: Bắt buộc bật Color Doppler kiểm tra sát ngành trên xương mu và ống bịt trước khi chọc cannula RFA!",
        "Không đâm kim nông gần da dưới ASIS chạm thần kinh bì đùi ngoài (LFCN)."
      ],
      "figures": [
        {
          "path": "assets/images/external_anatomy/ext_sec_gluteal_deep_layer_gray435.png",
          "figNumber": "Gray 435",
          "title": "Thiết đồ xương khung chậu trước: Thung lũng dưới ASIS - gờ chậu lược (Target 1) và Ống bịt - khuyết ổ cối (Target 2) (Gray's Plate 435)",
          "desc": "Hình ảnh giải phẫu tuyệt đẹp chỉ rõ cả 2 đích xương trên cùng một lát cắt: bờ chậu - lược phía trên ổ cối (Target 1) và lỗ ống bịt (Obturator canal) ngay góc trên trong ổ cối dưới dây chằng Cooper (Target 2).",
          "atlasSource": "Gray's Anatomy (20th Ed., Plate 435) – Obturator canal, iliopectineal line, and acetabular margin."
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
