# 20 New Clinical Procedures to expand the database from 31 to 51 procedures.
# Directly grounded in Philip Peng's "Ultrasound for Interventional Pain Management" (Springer 2020)

NEW_PROCEDURES = [
  # -------------------------------------------------------------
  # NHÓM THẦN KINH & CỘT SỐNG CỔ (HEAD, NECK & CERVICAL SPINE)
  # -------------------------------------------------------------
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

  # -------------------------------------------------------------
  # NHÓM VÙNG CHẬU, BẸN & ĐÁY CHẬU (PELVIS, GROIN & PERINEUM)
  # -------------------------------------------------------------
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

  # -------------------------------------------------------------
  # NHÓM CHI TRÊN & CHI DƯỚI (EXTREMITIES MSK & JOINT DENERVATION)
  # -------------------------------------------------------------
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
]
