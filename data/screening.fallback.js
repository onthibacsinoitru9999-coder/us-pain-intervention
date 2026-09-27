// MSK-Differential Screening Pro & Clinical Guidemap Database (Autonomous Fallback)
// Master Edition based on Prof. Deepak Sebastian: Differential Screening of Regional Pain in Musculoskeletal Practice (526 pages)
// 8 Symptom-based Clinical Guidemaps + 3-Stage Decision Algorithm + Red Flags Master + Lab Tests Checker + Drug-Induced Pain Checker + Curated 58 Elite Clinical Figures

const STABLE_SCREENING_FALLBACK = [
  {
    "id": "systemic-widespread",
    "chapter": 1,
    "region": "systemic",
    "region_vi": "Toàn Thân & Do Thuốc",
    "icon": "🌐",
    "title": "Systemic, Widespread MSK Pain, Drug-Induced Pain & Lab Screening",
    "title_vi": "🌐 Đau Toàn Thân / Đa Khớp, Đau do Thuốc & Rối Loạn Chuyển Hóa",
    "chief_complaint": "Phàn nàn chính: Đau mỏi toàn thân, đau nhức nhiều khớp di chuyển, đau xơ cơ (Fibromyalgia), đau đa cơ do thấp (PMR), đau mỏi cơ gân sau dùng thuốc Statin / Quinolone / Corticoid / Kháng Estrogen, sưng đau đa khớp kèm sốt nhẹ hoặc sút cân.",
    "author": "GS. Deepak Sebastian (Chuyên khảo Chương 1, 2, 3 - Tổng Hợp Lâm Sàng)",
    "summary": "Mô hình tiếp cận ca đau khó & đau lan tỏa: Tích hợp tư duy sàng lọc 3 giai đoạn (Stage 1 Red Flags -> Stage 2 Phân định mô tổn thương & Rối loạn cơ chế Somatic -> Stage 3 Định hướng can thiệp / Chuyển tuyến). Rà soát triệt để 10 nhóm nguyên nhân hệ thống, 15 nhóm thuốc gây đau cơ xương khớp thường gặp (Statin, Quinolone, Aromatase inhibitors, Bisphosphonate...) và bảng kiểm 7 nhóm xét nghiệm cận lâm sàng (ESR, CRP, Calci, ALP, Uric acid, CPK, HLA-B27, RF, Anti-CCP, ANA).",
    "stage_1_systemic_red_flags": [
      {
        "category": "10 Nhóm Căn Nguyên Hệ Thống Cần Rà Soát (The 10 Systemic Categories)",
        "signs": "1. Mạch máu (Phình bóc tách ĐMC, VBI, huyết khối tĩnh mạch, tắc mạch chi);\n2. Nhiễm trùng (Viêm khớp nhiễm trùng, viêm đĩa đệm đốt sống, áp-xe khoang sâu, lao);\n3. Ung thư ác tính (U xương nguyên phát: Osteosarcoma, Ewing; U di căn PB KTL: Tiền liệt tuyến, Vú, Thận, Tuyến giáp, Phổi; Đa u tủy xương);\n4. Bẩm sinh / Dị tật cấu trúc (Klippel-Feil, nứt gai sống, trượt đốt sống);\n5. Đau do thuốc / hóa chất (Statin gây tiêu cơ, Quinolone đứt gân, Steroid hoại tử chỏm, Aromatase inhibitors đau khớp);\n6. Nội tiết (Bệnh đái tháo đường, cường/suy cận giáp, to đầu chi, Cushing);\n7. Tự miễn (Viêm cột sống dính khớp HLA-B27, Viêm khớp dạng thấp Anti-CCP, Lupus ban đỏ hệ thống, Viêm đa cơ);\n8. Thiếu hụt dinh dưỡng & Chuyển hóa (Loãng xương xẹp đốt sống, nhuyễn xương thiếu Vitamin D, Gout tinh thể urate, Paget xương);\n9. Chấn thương cơ xương khớp (Gãy xương không vững, rách dây chằng/sụn chêm hoàn toàn, trật khớp);\n10. Thoái hóa cơ học (Hẹp ống sống, thoái hóa khớp, xung đột gân bao khớp).",
        "action": "Nếu có bất kỳ dấu hiệu gợi ý căn nguyên 1-8: Bắt buộc dừng chỉ định can thiệp thủ thuật tại chỗ, tiến hành xét nghiệm cận lâm sàng (Lab tests) và chẩn đoán hình ảnh chuyên sâu trước khi can thiệp."
      },
      {
        "category": "Cờ Vàng Tâm Lý & Dấu Hiệu Không Do Thực Thể (Yellow Flags & Non-organic Signs)",
        "signs": "Triệu chứng đau lan tỏa không phù hợp giải phẫu thần kinh, điểm đau nhảy nhót, niềm tin thảm họa hóa (Catastrophizing), lo âu/trầm cảm nặng, yếu tố vụ lợi thứ phát (Secondary gain: tranh chấp pháp lý tai nạn lao động, bồi thường bảo hiểm). Dấu hiệu Waddell dương tính.",
        "action": "Đánh giá thang điểm trầm cảm/lo âu (PHQ-9, GAD-7), giải thích tâm lý hành vi (CBT), tránh các can thiệp xâm lấn không cần thiết."
      },
      {
        "category": "Cờ Đỏ Tốc Độ Máu Lắng Tăng Cao Vọt (ESR > 100 mm/h)",
        "signs": "Đau xương âm ỉ toàn thân, đau cột sống dai dẳng tăng về đêm, mệt mỏi suy kiệt. Cần nghĩ ngay đến: Đa u tủy xương (Multiple Myeloma), Viêm động mạch thái dương (Temporal Arteritis / GCA), Viêm tủy xương (Osteomyelitis) hoặc Ung thư di căn xương.",
        "action": "Chỉ định Điện di đạm huyết thanh (SPEP), Định lượng chuỗi nhẹ Bence-Jones niệu, Chụp X-quang cột sống/khung chậu tìm ổ tiêu xương đục lỗ (punched-out lesions) và MRI."
      }
    ],
    "red_flags": [
      {
        "category": "Cờ Đỏ Nhiễm Trùng Khớp Cấp / Viêm Khớp Nhiễm Khuẩn (Septic Arthritis)",
        "signs": "Sốt cao rét run kèm sưng nóng đỏ đau dữ dội 1 khớp đơn độc (gối, háng, vai), khớp co cứng hoàn toàn không thể cử động dù thụ động nhẹ nhất. Chọc hút dịch khớp có bạch cầu dịch khớp > 50,000 - 100,000/mcL (> 75% Neutrophils).",
        "action": "CẤP CỨU NGOẠI KHOA KHẨN: Rửa khớp, dẫn lưu dịch mủ qua nội soi hoặc mổ hở + Kháng sinh tĩnh mạch liều cao phổ rộng. CHỐNG CHỈ ĐỊNH TUYỆT ĐỐI TIÊM CORTICOID VÀO KHỚP!",
        "figures": [
          {
            "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p362_img1.jpeg",
            "page": 362,
            "fig_number": "8.7",
            "caption_en": "Fig. 8.7: Osteochondral lesion over the inferior joint surface of the femur",
            "caption_vi": "🚨 Phim X-quang / Cờ đỏ: Viêm sụn xương hoại tử hủy sụn lồi cầu đùi / Giả viêm khớp nhiễm trùng (Fig. 8.7)",
            "role_type": "redflag",
            "width": 1003,
            "height": 664
          }
        ]
      },
      {
        "category": "Cờ Đỏ Lún Xẹp Đốt Sống / Đa U Tủy Xương (Multiple Myeloma / Osteoporotic Fracture)",
        "signs": "Đau cột sống thắt lưng dữ dội đột ngột ở người cao tuổi hoặc sau dùng corticoid kéo dài, đau không giảm khi nghỉ ngơi, gõ đau chói tại chỗ mỏm gai. Xét nghiệm tốc độ máu lắng ESR > 100 mm/h, thiếu máu không giải thích được, protein niệu Bence-Jones.",
        "action": "HỘI CHẨN HUYẾT HỌC & NGOẠI THẦN KINH KHẨN: Chụp MRI cột sống toàn bộ, điện di protein huyết thanh, đo mật độ xương DEXA. Chống chỉ định nắn bẻ cột sống hoặc tiêm giảm áp lực không kiểm soát.",
        "figures": [
          {
            "file": "assets/deepak_images/ch06_lumbopelvic_pain/p273_img1.jpeg",
            "page": 273,
            "fig_number": "6.8",
            "caption_en": "Fig. 6.8: Vulnerable structures in lower thoracic syndrome",
            "caption_vi": "📐 Sơ đồ giải phẫu: Cấu trúc cơ răng bé sau dưới trong hội chứng ngực dưới (Fig. 6.8: Vulnerable structures in lower thoracic syndrome)",
            "role_type": "redflag",
            "width": 527,
            "height": 788
          }
        ]
      },
      {
        "category": "Cờ Đỏ Đứt Hoàn Toàn Gân Gót / Hủy Gân Do Thuốc Quinolone & Corticoid",
        "signs": "Đau nhói đột ngột như bị gậy đập vào sau gót chân sau dùng kháng sinh nhóm Fluoroquinolone (Ciprofloxacin, Levofloxacin) hoặc tiêm Corticoid quanh gân gót. Mất hoàn toàn lực gập lòng bàn chân, sờ thấy rãnh khuyết hổng gân gót (Palpable gap).",
        "action": "CẤP CỨU NGOẠI KHOA CHẤN THƯƠNG CHỈNH HÌNH: Nẹp bất động cẳng bàn chân ở tư thế gập lòng nhẹ, chuyển mổ khâu nối gân gót cấp. Chống chỉ định tiêm tê hoặc tiêm thêm bất kỳ thuốc nào vào gân.",
        "figures": [
          {
            "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p390_img2.jpeg",
            "page": 390,
            "fig_number": "8.25",
            "caption_en": "Fig. 8.25: Disruption of the Achilles tendon",
            "caption_vi": "📐 Sơ đồ giải phẫu: Đứt ngang hoàn toàn gân gót Achilles do Quinolone/Steroid (Fig. 8.25)",
            "role_type": "redflag",
            "width": 958,
            "height": 624
          }
        ]
      }
    ],
    "visceral_referrals": [
      {
        "source": "Tổng quan Cơ chế Chuyển đau từ Tạng (Visceral Pain Referral Concepts)",
        "pattern": "Đau phát sinh từ xung động tạng truyền qua dây thần kinh giao cảm/phó giao cảm vào cùng sừng sau tủy sống với cảm giác soma (Thuyết hội tụ - phóng chiếu). Não bộ giải mã sai tín hiệu tạng thành đau vùng cơ xương khớp tương ứng khoanh tủy.",
        "differential": "Đau tạng thường âm ỉ, sâu, co thắt, không có điểm đau khu trú nông khi sờ nắn, không thay đổi theo tư thế cơ học hoặc cử động khớp chủ động/thụ động.",
        "figures": []
      },
      {
        "source": "Bệnh lý Chuyển hóa & Suy Thận (Metabolic & Renal Referral)",
        "pattern": "Axit Uric máu tăng lắng đọng tinh thể Urat tại thận gây sỏi thận và suy thận mạn. Ngược lại suy giảm chức năng thận làm giảm thải acid uric gây bùng phát viêm khớp gút tophi đa khớp kháng trị.",
        "differential": "Phân biệt viêm khớp gút (tinh thể hình kim lưỡng chiết quang âm tính) với viêm khớp vôi hóa giả gút CPPD (tinh thể Canxi Pyrophosphate hình thoi lưỡng chiết quang dương tính yếu).",
        "figures": []
      }
    ],
    "drug_induced": [
      "Thuốc Statin (Atorvastatin, Rosuvastatin, Simvastatin): Đau cơ, yếu cơ gốc chi đối xứng, chuột rút, viêm cơ hoại tử tự miễn kháng HMGCR.",
      "Kháng sinh Quinolone (Ciprofloxacin, Levofloxacin): Viêm gân và đứt gân gót Achilles tự phát, nguy cơ tăng gấp bội khi dùng kèm Corticoid.",
      "Corticosteroid dài ngày: Hoại tử vô mạch chỏm xương đùi/xương cánh tay (AVN), loãng xương gãy lún đốt sống, bệnh cơ do steroid (Steroid myopathy).",
      "Thuốc ức chế Aromatase (Anastrozole, Letrozole, Exemestane): Hội chứng đau khớp do ức chế aromatase (AIA) gặp ở 50% phụ nữ điều trị ung thư vú.",
      "Bisphosphonate (Alendronate, Zoledronic acid): Đau cơ xương khớp dữ dội lan tỏa, gãy xương đùi không điển hình (Atypical femur fracture), hoại tử xương hàm (ONJ)."
    ],
    "examination_procedures": [
      {
        "name": "Nghiệm pháp Căng màng cứng Slump Test (Sàng lọc tủy & rễ toàn trục)",
        "technique": "Bệnh nhân ngồi sát mép bàn khám, hai tay để sau lưng. Bước 1: Thả lỏng gù toàn bộ lưng và ngực. Bước 2: Cúi gập cổ tối đa. Bước 3: Người khám ấn nhẹ đầu tăng tải trọng màng cứng và yêu cầu bệnh nhân duỗi thẳng gối. Bước 4: Gập mu cổ chân (Dorsiflexion) để kéo căng tối đa. Nếu đau, cho bệnh nhân ngửa đầu ra sau (Cervical release) để kiểm tra giảm đau.",
        "significance": "Kéo căng toàn bộ trục màng cứng thần kinh từ thân não đến chùm đuôi ngựa, phân biệt rõ ràng đau do chèn ép màng cứng / rễ thần kinh với đau cơ xơ hóa hoặc đau khớp cơ học đơn thuần.",
        "sensitivity": "84–91%",
        "specificity": "83%",
        "accuracy": {
          "sn": "84–91%",
          "sp": "83%"
        },
        "clinical_role": "Độ nhạy rất cao sàng lọc tổn thương màng cứng & chèn ép rễ thần kinh toàn trục",
        "diagnostic_role": "Độ nhạy rất cao sàng lọc tổn thương màng cứng & chèn ép rễ thần kinh toàn trục",
        "figures": [
          {
            "file": "assets/deepak_images/ch06_lumbopelvic_pain/p288_img2.jpeg",
            "page": 288,
            "fig_number": "6.28",
            "caption_en": "Fig. 6.28: The slump test position",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp kéo căng màng cứng toàn trục Slump Test (Fig. 6.28)",
            "role_type": "exam",
            "width": 1080,
            "height": 810
          }
        ]
      },
      {
        "name": "Nghiệm pháp ULTT 1 (Căng thần kinh giữa toàn diện - Upper Limb Tension Test 1)",
        "technique": "Bệnh nhân nằm ngửa thả lỏng. Bác sĩ thực hiện tuần tự: (1) Hạ xương bả vai xuống dưới (Scapular depression), (2) Dạng khớp vai 110 độ, (3) Duỗi tối đa cổ tay và các ngón tay, (4) Ngửa cẳng tay hoàn toàn, (5) Duỗi thẳng khớp khuỷu, (6) Bệnh nhân nghiêng đầu sang bên đối diện để kéo căng rễ thần kinh tối đa.",
        "significance": "Kéo căng liên tục từ đám rối thần kinh cánh tay đến dây thần kinh giữa tận cùng. Tái hiện dị cảm ngón 1-2-3 hoặc đau lan cánh tay xác nhận có bệnh lý thần kinh cơ học ngoại biên, loại trừ đau cơ mạc toàn thân giả dạng.",
        "sensitivity": "97%",
        "specificity": "22–75%",
        "accuracy": {
          "sn": "97%",
          "sp": "22–75%"
        },
        "clinical_role": "Độ nhạy 97% loại trừ bệnh lý rễ thần kinh cổ và thần kinh giữa lan tỏa (Quy tắc SnNOut)",
        "diagnostic_role": "Độ nhạy 97% loại trừ bệnh lý rễ thần kinh cổ và thần kinh giữa lan tỏa (Quy tắc SnNOut)",
        "figures": [
          {
            "file": "assets/deepak_images/ch04_cervical_pain/p167_img1.jpeg",
            "page": 167,
            "fig_number": "4.44A",
            "caption_en": "Fig. 4.44A: Upper limb tension test (ULTT 1) - Median nerve bias",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp căng thần kinh giữa toàn diện ULTT 1 (Fig. 4.44A)",
            "role_type": "exam",
            "width": 717,
            "height": 538
          }
        ]
      }
    ],
    "differential_table": [
      {
        "condition": "Đau xơ cơ (Fibromyalgia)",
        "onset": "Âm ỉ mạn tính > 3 tháng, đau lan tỏa 4 góc phần tư",
        "aggravating": "Căng thẳng, mất ngủ, thời tiết lạnh",
        "key_differentiator": "Đau nhiều điểm trigger points, XN ESR/CRP hoàn toàn bình thường, không teo cơ",
        "confirmatory_test": "Thang điểm WPI (Widespread Pain Index) >= 7 và SSS >= 5",
        "gold_standard": "Tiêu chuẩn chẩn đoán ACR 2016 Fibromyalgia",
        "web1_procedure_id": null
      },
      {
        "condition": "Đau đa cơ do thấp (Polymyalgia Rheumatica - PMR)",
        "onset": "Đột ngột ở người > 50 tuổi, đau đai vai và đai chậu",
        "aggravating": "Tăng nhiều buổi sáng, cứng khớp buổi sáng > 45 phút",
        "key_differentiator": "Máu lắng ESR > 40-100 mm/h, CRP tăng vọt, đáp ứng thần kỳ với Prednisolone liều thấp 15mg/ngày sau 48h",
        "confirmatory_test": "Xét nghiệm ESR, CRP, Siêu âm khớp vai tìm viêm bao hoạt dịch dưới mỏm cùng",
        "gold_standard": "Tiêu chuẩn ACR/EULAR 2012 PMR",
        "web1_procedure_id": "sasd-bursa"
      },
      {
        "condition": "Đau cơ do Statin (Statin-Induced Myopathy)",
        "onset": "Sau 2-8 tuần bắt đầu dùng hoặc tăng liều Statin",
        "aggravating": "Vận động nặng, phối hợp Fibrate hoặc thuốc ức chế CYP3A4",
        "key_differentiator": "Yếu cơ gốc chi đối xứng, CK tăng từ nhẹ đến > 10 lần bình thường, hết đau khi ngưng Statin 2-4 tuần",
        "confirmatory_test": "Định lượng Men cơ Creatine Kinase (CK), Kháng thể Anti-HMGCR",
        "gold_standard": "Thử nghiệm ngưng thuốc (De-challenge) và tái sử dụng liều thấp (Re-challenge)",
        "web1_procedure_id": null
      }
    ],
    "figures": [
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p362_img1.jpeg",
        "page": 362,
        "fig_number": "8.7",
        "caption_en": "Fig. 8.7: Osteochondral lesion over the inferior joint surface of the femur",
        "caption_vi": "🚨 Phim X-quang / Cờ đỏ: Viêm sụn xương hoại tử hủy sụn lồi cầu đùi / Giả viêm khớp nhiễm trùng (Fig. 8.7)",
        "role_type": "redflag",
        "width": 1003,
        "height": 664
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p273_img1.jpeg",
        "page": 273,
        "fig_number": "6.8",
        "caption_en": "Fig. 6.8: Vulnerable structures in lower thoracic syndrome",
        "caption_vi": "📐 Sơ đồ giải phẫu: Cấu trúc cơ răng bé sau dưới trong hội chứng ngực dưới (Fig. 6.8: Vulnerable structures in lower thoracic syndrome)",
        "role_type": "redflag",
        "width": 527,
        "height": 788
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p390_img2.jpeg",
        "page": 390,
        "fig_number": "8.25",
        "caption_en": "Fig. 8.25: Disruption of the Achilles tendon",
        "caption_vi": "📐 Sơ đồ giải phẫu: Đứt ngang hoàn toàn gân gót Achilles do Quinolone/Steroid (Fig. 8.25)",
        "role_type": "redflag",
        "width": 958,
        "height": 624
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p288_img2.jpeg",
        "page": 288,
        "fig_number": "6.28",
        "caption_en": "Fig. 6.28: The slump test position",
        "caption_vi": "🩺 Thao tác khám: Nghiệm pháp kéo căng màng cứng toàn trục Slump Test (Fig. 6.28)",
        "role_type": "exam",
        "width": 1080,
        "height": 810
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p167_img1.jpeg",
        "page": 167,
        "fig_number": "4.44A",
        "caption_en": "Fig. 4.44A: Upper limb tension test (ULTT 1) - Median nerve bias",
        "caption_vi": "🩺 Thao tác khám: Nghiệm pháp căng thần kinh giữa toàn diện ULTT 1 (Fig. 4.44A)",
        "role_type": "exam",
        "width": 717,
        "height": 538
      }
    ],
    "stage_2_somatic_dysfunctions": [
      "Đau xơ cơ (Fibromyalgia): Rối loạn điều hòa cảm giác đau trung ương (Central Sensitization) với tăng nhạy cảm đau (Hyperalgesia) và loạn cảm đau (Allodynia).",
      "Đau đa cơ do thấp (PMR): Viêm bao hoạt dịch dưới mỏm cùng đai vai và bao hoạt dịch đai chậu đối xứng hai bên.",
      "Bệnh lý gân cơ do thuốc (Drug-induced Myopathy & Tendinopathy): Tổn thương ty thể tế bào cơ do Statin hoặc suy thoái chất nền collagen type I gân do Quinolone.",
      "Rối loạn chuyển hóa & Tinh thể: Lắng đọng vi tinh thể Urat (Gout) hoặc Calci Pyrophosphate (CPPD / Pseudogout) màng hoạt dịch và sụn khớp."
    ],
    "stage_3_guidemap_intervention": "Điều trị toàn thân theo nguyên nhân gốc rễ: Điều chỉnh hoặc ngừng thuốc nghi ngờ (Statin/Quinolone/Steroid), tối ưu hóa kiểm soát acid uric và đường huyết, tập phục hồi chức năng đa phương thức. Nếu có điểm đau khu trú kháng trị có thể phối hợp tiêm can thiệp tại chỗ.",
    "recommended_web1_procedures": [],
    "provocative_tests": [
      {
        "name": "Nghiệm pháp Căng màng cứng Slump Test (Sàng lọc tủy & rễ toàn trục)",
        "technique": "Bệnh nhân ngồi sát mép bàn khám, hai tay để sau lưng. Bước 1: Thả lỏng gù toàn bộ lưng và ngực. Bước 2: Cúi gập cổ tối đa. Bước 3: Người khám ấn nhẹ đầu tăng tải trọng màng cứng và yêu cầu bệnh nhân duỗi thẳng gối. Bước 4: Gập mu cổ chân (Dorsiflexion) để kéo căng tối đa. Nếu đau, cho bệnh nhân ngửa đầu ra sau (Cervical release) để kiểm tra giảm đau.",
        "significance": "Kéo căng toàn bộ trục màng cứng thần kinh từ thân não đến chùm đuôi ngựa, phân biệt rõ ràng đau do chèn ép màng cứng / rễ thần kinh với đau cơ xơ hóa hoặc đau khớp cơ học đơn thuần.",
        "sensitivity": "84–91%",
        "specificity": "83%",
        "accuracy": {
          "sn": "84–91%",
          "sp": "83%"
        },
        "clinical_role": "Độ nhạy rất cao sàng lọc tổn thương màng cứng & chèn ép rễ thần kinh toàn trục",
        "diagnostic_role": "Độ nhạy rất cao sàng lọc tổn thương màng cứng & chèn ép rễ thần kinh toàn trục",
        "figures": [
          {
            "file": "assets/deepak_images/ch06_lumbopelvic_pain/p288_img2.jpeg",
            "page": 288,
            "fig_number": "6.28",
            "caption_en": "Fig. 6.28: The slump test position",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp kéo căng màng cứng toàn trục Slump Test (Fig. 6.28)",
            "role_type": "exam",
            "width": 1080,
            "height": 810
          }
        ]
      },
      {
        "name": "Nghiệm pháp ULTT 1 (Căng thần kinh giữa toàn diện - Upper Limb Tension Test 1)",
        "technique": "Bệnh nhân nằm ngửa thả lỏng. Bác sĩ thực hiện tuần tự: (1) Hạ xương bả vai xuống dưới (Scapular depression), (2) Dạng khớp vai 110 độ, (3) Duỗi tối đa cổ tay và các ngón tay, (4) Ngửa cẳng tay hoàn toàn, (5) Duỗi thẳng khớp khuỷu, (6) Bệnh nhân nghiêng đầu sang bên đối diện để kéo căng rễ thần kinh tối đa.",
        "significance": "Kéo căng liên tục từ đám rối thần kinh cánh tay đến dây thần kinh giữa tận cùng. Tái hiện dị cảm ngón 1-2-3 hoặc đau lan cánh tay xác nhận có bệnh lý thần kinh cơ học ngoại biên, loại trừ đau cơ mạc toàn thân giả dạng.",
        "sensitivity": "97%",
        "specificity": "22–75%",
        "accuracy": {
          "sn": "97%",
          "sp": "22–75%"
        },
        "clinical_role": "Độ nhạy 97% loại trừ bệnh lý rễ thần kinh cổ và thần kinh giữa lan tỏa (Quy tắc SnNOut)",
        "diagnostic_role": "Độ nhạy 97% loại trừ bệnh lý rễ thần kinh cổ và thần kinh giữa lan tỏa (Quy tắc SnNOut)",
        "figures": [
          {
            "file": "assets/deepak_images/ch04_cervical_pain/p167_img1.jpeg",
            "page": 167,
            "fig_number": "4.44A",
            "caption_en": "Fig. 4.44A: Upper limb tension test (ULTT 1) - Median nerve bias",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp căng thần kinh giữa toàn diện ULTT 1 (Fig. 4.44A)",
            "role_type": "exam",
            "width": 717,
            "height": 538
          }
        ]
      }
    ],
    "differential_matrix": [
      {
        "condition": "Đau xơ cơ (Fibromyalgia)",
        "onset": "Âm ỉ mạn tính > 3 tháng, đau lan tỏa 4 góc phần tư",
        "aggravating": "Căng thẳng, mất ngủ, thời tiết lạnh",
        "key_differentiator": "Đau nhiều điểm trigger points, XN ESR/CRP hoàn toàn bình thường, không teo cơ",
        "confirmatory_test": "Thang điểm WPI (Widespread Pain Index) >= 7 và SSS >= 5",
        "gold_standard": "Tiêu chuẩn chẩn đoán ACR 2016 Fibromyalgia",
        "web1_procedure_id": null
      },
      {
        "condition": "Đau đa cơ do thấp (Polymyalgia Rheumatica - PMR)",
        "onset": "Đột ngột ở người > 50 tuổi, đau đai vai và đai chậu",
        "aggravating": "Tăng nhiều buổi sáng, cứng khớp buổi sáng > 45 phút",
        "key_differentiator": "Máu lắng ESR > 40-100 mm/h, CRP tăng vọt, đáp ứng thần kỳ với Prednisolone liều thấp 15mg/ngày sau 48h",
        "confirmatory_test": "Xét nghiệm ESR, CRP, Siêu âm khớp vai tìm viêm bao hoạt dịch dưới mỏm cùng",
        "gold_standard": "Tiêu chuẩn ACR/EULAR 2012 PMR",
        "web1_procedure_id": "sasd-bursa"
      },
      {
        "condition": "Đau cơ do Statin (Statin-Induced Myopathy)",
        "onset": "Sau 2-8 tuần bắt đầu dùng hoặc tăng liều Statin",
        "aggravating": "Vận động nặng, phối hợp Fibrate hoặc thuốc ức chế CYP3A4",
        "key_differentiator": "Yếu cơ gốc chi đối xứng, CK tăng từ nhẹ đến > 10 lần bình thường, hết đau khi ngưng Statin 2-4 tuần",
        "confirmatory_test": "Định lượng Men cơ Creatine Kinase (CK), Kháng thể Anti-HMGCR",
        "gold_standard": "Thử nghiệm ngưng thuốc (De-challenge) và tái sử dụng liều thấp (Re-challenge)",
        "web1_procedure_id": null
      }
    ]
  },
  {
    "id": "cervical-pain",
    "chapter": 4,
    "region": "cervical",
    "region_vi": "Cổ - Vai - Gáy",
    "icon": "👤",
    "title": "Cervical Spine, Suboccipital & Cervicobrachial Pain",
    "title_vi": "👤 Đau Cổ - Vai - Gáy & Bệnh Rễ Thần Kinh Cổ",
    "chief_complaint": "Phàn nàn chính: Đau mỏi vùng gáy lan lên đầu (đau đầu do cổ), đau cổ lan xuống vai và cánh tay/bàn tay kèm tê bì châm chích ngón tay, vẹo cổ cấp, cứng cổ hạn chế quay cổ.",
    "author": "GS. Deepak Sebastian (Chương 4, pp. 105-187)",
    "summary": "Sàng lọc phân biệt đau cột sống cổ: Phân biệt đau cơ học cân cơ, thoái hóa diện khớp cổ (Facet syndrome), thoát vị đĩa đệm chèn ép rễ cổ (Radiculopathy C5-C8) với các bệnh lý tủy cổ nặng (Cervical myelopathy). Rà soát khẩn cấp Cờ đỏ thiếu máu đốt sống thân nền (VBI 5D And 3N), bóc tách động mạch cảnh, mất vững dây chằng mỏm nha C1-C2 sau chấn thương hoặc trong viêm khớp dạng thấp, và u Pancoast đỉnh phổi.",
    "stage_1_systemic_red_flags": [
      {
        "category": "Cờ Đỏ Chèn Ép Tủy Cổ (Cervical Spondylotic Myelopathy - CSM)",
        "signs": "Dáng đi thất điều (gait ataxia, đi không vững trong bóng tối), bàn tay vụng về mất khéo léo (khó cài cúc áo, hay làm rơi đũa/chén), dấu hiệu Hoffman dương tính, phản xạ gân xương tăng vọt (hyperreflexia), giật rung bàn chân (Clonus +), dấu hiệu Babinski (+), dấu hiệu Lhermitte (cảm giác điện giật chạy dọc cột sống khi cúi cổ).",
        "action": "CHỐNG CHỈ ĐỊNH NẮN CHỈNH / KÉO GIÃN / TIÊM MÙ! Chụp MRI cột sống cổ khẩn cấp, chuyển khám chuyên khoa Phẫu thuật Thần kinh ngay lập tức."
      },
      {
        "category": "Cờ Đỏ Mạch Máu Cổ (VBI & Cervical Artery Dissection)",
        "signs": "Bộ quy tắc 5D: Dizziness (chóng mặt), Diplopia (nhìn đôi), Dysarthria (nói khó), Dysphagia (nuốt khó), Drop attacks (khuỵu ngã đột ngột nhưng không mất ý thức); Bộ 3N: Nausea (buồn nôn), Numbness (tê bì mặt hoặc nửa người), Nystagmus (rung giật nhãn cầu). Đau đầu - cổ dữ dội xuất hiện đột ngột như sét đánh (Thunderclap headache).",
        "action": "CẤP CỨU MẠCH MÁU NÃO: Chụp CTA hoặc MRA mạch não - cổ khẩn cấp. TUYỆT ĐỐI KHÔNG xoay bẻ cổ."
      },
      {
        "category": "Cờ Đỏ Mất Vững Khớp Đội - Trục (Atlantoaxial C1-C2 Instability)",
        "signs": "Cảm giác đầu lắc lư không vững, bệnh nhân phải dùng tay giữ đầu khi chuyển tư thế, dị cảm tứ chi khi cúi đầu. Thường gặp sau chấn thương giật cổ (Whiplash), bệnh nhân Viêm khớp dạng thấp lâu năm bào mòn dây chằng ngang, hoặc hội chứng Down.",
        "action": "Nẹp cổ cứng C-spine collar cố định ngay. Chụp X-quang cổ động cúi-ngửa (Flexion-Extension) hoặc CT scan đo khoảng cách mỏm nha - cung trước C1 (ADI > 3mm ở người lớn là mất vững)."
      },
      {
        "category": "Cờ Đỏ U Bướu & Nhiễm Trùng Cổ (Malignancy & Deep Neck Infection)",
        "signs": "Sốt, sưng đau hạch cổ cứng chắc, nuốt đau, khó thở, thở rít (stridor); đau cổ liên tục tăng về đêm không giảm khi nằm nghỉ, tiền sử ung thư vú/phổi/tiền liệt tuyến.",
        "action": "Nội soi tai mũi họng, chụp CT/MRI cổ ngực có tiêm thuốc cản quang, xét nghiệm công thức bạch cầu, CRP, ESR."
      }
    ],
    "red_flags": [
      {
        "category": "Cờ Đỏ Gãy Mỏm Nha C2 (Odontoid Peg Fracture Type II/III)",
        "signs": "Bệnh nhân chấn thương đầu/cổ hoặc tai nạn giao thông, đau cổ dữ dội không dám xoay đầu, có cảm giác đầu muốn rơi khỏi cổ, dị cảm tứ chi, liệt nhẹ hoặc rối loạn cảm giác rễ C2. Khám thấy cơ cổ co thắt cứng ngắc.",
        "action": "CẤP CỨU CHẤN THƯƠNG CỘT SỐNG: Bất động ngay nẹp cổ cứng Philadelphia, chống chỉ định tuyệt đối cử động gấp duỗi cổ hoặc nắn chỉnh. Chụp CT cột sống cổ có dựng hình 3D khẩn cấp, hội chẩn Ngoại thần kinh mổ bắt vít mỏm nha.",
        "figures": [
          {
            "file": "assets/deepak_images/ch04_cervical_pain/p123_img1.jpeg",
            "page": 123,
            "fig_number": "4.10",
            "caption_en": "Fig. 4.10: Type II and III odontoid peg fractures",
            "caption_vi": "🚨 Phim X-quang / Cờ đỏ: Gãy mỏm nha đốt sống trục C2 Type II/III (Fig. 4.10)",
            "role_type": "redflag",
            "width": 595,
            "height": 400
          }
        ]
      },
      {
        "category": "Cờ Đỏ Gãy Bùng Nổ Đốt Đội C1 (Jefferson Burst Fracture)",
        "signs": "Tải trọng dồn nén trục thẳng đứng lên đỉnh đầu (nhảy từ trên cao xuống cắm đầu, vật nặng rơi trúng đỉnh đầu). Đau dữ dội vùng chẩm - cổ, mất vững hoàn toàn cột sống cổ trên.",
        "action": "BẤT ĐỘNG CỔ TUYỆT ĐỐI: Đặt nẹp cổ cứng, chuyển khoa Chấn thương Chỉnh hình / Ngoại thần kinh. Chỉ định chụp CT Scanner lát mỏng qua C1-C2.",
        "figures": [
          {
            "file": "assets/deepak_images/ch04_cervical_pain/p123_img2.png",
            "page": 123,
            "fig_number": "4.11",
            "caption_en": "Fig. 4.11: Jefferson burst fracture of the atlas C1",
            "caption_vi": "🚨 Phim X-quang / Cờ đỏ: Gãy bùng nổ đốt đội C1 (Jefferson Fracture) do tải trọng nén trục (Fig. 4.11)",
            "role_type": "redflag",
            "width": 1335,
            "height": 603
          }
        ]
      },
      {
        "category": "Cờ Đỏ Đứt Dây Chằng Cánh / Mất Vững Khớp Đội Trục (Alar Ligament Rupture)",
        "signs": "Mất vững bản lề chẩm - cổ trên bệnh nhân viêm khớp dạng thấp (RA), hội chứng Down hoặc sau chấn thương giật cổ (Whiplash). Chóng mặt dữ dội, rung giật nhãn cầu, cảm giác tê môi lưỡi và nuốt nghẹn khi quay đầu.",
        "action": "CHỐNG CHỈ ĐỊNH TUYỆT ĐỐI NẮN CHỈNH BẺ CỔ (Manipulation): Đeo nẹp cổ cứng, chụp MRI cột sống cổ ngắt lớp mỏng khảo sát dây chằng ngang và dây chằng cánh.",
        "figures": [
          {
            "file": "assets/deepak_images/ch04_cervical_pain/p125_img1.jpeg",
            "page": 125,
            "fig_number": "4.12A",
            "caption_en": "Fig. 4.12A: Testing the alar ligaments",
            "caption_vi": "🚨 Phim X-quang / Cờ đỏ: Đứt dây chằng cánh & mất vững bản lề chẩm - cổ C1-C2 (Fig. 4.12A)",
            "role_type": "redflag",
            "width": 901,
            "height": 225
          }
        ]
      }
    ],
    "visceral_referrals": [
      {
        "source": "U Đỉnh Phổi Pancoast (Pancoast Tumor / Superior Sulcus Tumor)",
        "pattern": "Khối u xâm lấn đám rối thần kinh cánh tay (rễ C8-T1) và hạch giao cảm cổ: Đau dữ dội mặt trong cánh tay, cẳng tay và ngón 4-5; teo các cơ bàn tay; Hội chứng Horner cùng bên (Sụp mi Ptosis, co đồng tử Miosis, giảm tiết mồ hôi Anhidrosis).",
        "differential": "Cực kỳ dễ nhầm với thoái hóa cột sống cổ chèn ép rễ C8 hoặc hội chứng ống cổ tay/ống Guyon. Bắt buộc chụp X-quang/CT lồng ngực ở người hút thuốc lá lớn tuổi đau tay kháng trị.",
        "figures": []
      },
      {
        "source": "Thiếu Máu Cơ Tim / Nhồi Máu Cơ Tim (Myocardial Ischemia / MI)",
        "pattern": "Đau thắt lan lên bờ trước cơ ức đòn chũm, hàm dưới, vai và cánh tay trái khi gắng sức hoặc xúc động mạnh, kèm vã mồ hôi, khó thở.",
        "differential": "Đo điện tim ECG và xét nghiệm Troponin I/T siêu nhạy (hs-cTnI) loại trừ bệnh mạch vành cấp.",
        "figures": []
      },
      {
        "source": "Bệnh Lý Tuyến Giáp (Thyroiditis & Carcinoma)",
        "pattern": "Đau cổ trước lan lên góc hàm và tai, kèm bướu cổ to, khó nuốt, khàn tiếng.",
        "differential": "Siêu âm tuyến giáp, xét nghiệm chức năng tuyến giáp FT4, TSH.",
        "figures": []
      }
    ],
    "drug_induced": [
      "Quinolone: Viêm gân và đau khớp vùng vai gáy.",
      "Corticoid kéo dài: Tiêu xương, xẹp đốt sống cổ loãng xương, hoại tử vô mạch mấu khớp.",
      "Statin: Viêm đau khối cơ thang (Trapezius) và cơ gối đầu (Splenius capitis)."
    ],
    "examination_procedures": [
      {
        "name": "Nghiệm pháp Ép cổ Spurling (Spurling's Neck Compression Test)",
        "technique": "Bệnh nhân ngồi thẳng. Bác sĩ cho bệnh nhân nghiêng đầu sang bên đau, hơi ngửa cổ ra sau, sau đó bác sĩ đặt hai tay lên đỉnh đầu và ấn một lực nén dọc trục thẳng đứng xuống dưới.",
        "significance": "Thu hẹp cơ học lỗ liên hợp thần kinh, chèn ép trực tiếp lên rễ thần kinh đang viêm, tái hiện đau nhói buốt lan theo khoanh da chi trên (Dermatome). Dương tính xác nhận bệnh lý rễ thần kinh cổ.",
        "sensitivity": "30–50%",
        "specificity": "92–100%",
        "accuracy": {
          "sn": "30–50%",
          "sp": "92–100%"
        },
        "clinical_role": "Độ đặc hiệu lên tới 92–100%, dương tính là chỉ điểm chắc chắn của chèn ép rễ cổ (Quy tắc SpPIn)",
        "diagnostic_role": "Độ đặc hiệu lên tới 92–100%, dương tính là chỉ điểm chắc chắn của chèn ép rễ cổ (Quy tắc SpPIn)",
        "figures": [
          {
            "file": "assets/deepak_images/ch04_cervical_pain/p172_img1.jpeg",
            "page": 172,
            "fig_number": "4.47",
            "caption_en": "Fig. 4.47: Spurling's test",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp ép lỗ liên hợp cổ Spurling (Fig. 4.47)",
            "role_type": "exam",
            "width": 717,
            "height": 538
          }
        ]
      },
      {
        "name": "Nghiệm pháp Kéo giãn Cột sống Cổ (Cervical Distraction Test)",
        "technique": "Bệnh nhân nằm ngửa thư giãn. Bác sĩ đặt một tay dưới cằm (hoặc xương chẩm) và tay kia ôm sau đầu, thực hiện lực kéo giãn dọc trục từ từ khoảng 10–15 kg hướng về phía đỉnh đầu.",
        "significance": "Làm rộng lỗ liên hợp và giải phóng tạm thời sự chèn ép rễ thần kinh. Nếu các triệu chứng đau buốt, tê bì cánh tay thuyên giảm hoặc biến mất hoàn toàn, nghiệm pháp dương tính.",
        "sensitivity": "44%",
        "specificity": "90–97%",
        "accuracy": {
          "sn": "44%",
          "sp": "90–97%"
        },
        "clinical_role": "Độ đặc hiệu cao (90–97%), khẳng định đau tay có nguồn gốc từ chèn ép rễ cổ thay vì bệnh khớp vai",
        "diagnostic_role": "Độ đặc hiệu cao (90–97%), khẳng định đau tay có nguồn gốc từ chèn ép rễ cổ thay vì bệnh khớp vai",
        "figures": [
          {
            "file": "assets/deepak_images/ch04_cervical_pain/p173_img1.jpeg",
            "page": 173,
            "fig_number": "4.48",
            "caption_en": "Fig. 4.48: Distraction test",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp kéo giãn giải ép rễ thần kinh cổ (Fig. 4.48)",
            "role_type": "exam",
            "width": 717,
            "height": 538
          }
        ]
      },
      {
        "name": "Nghiệm pháp Gập Cổ Khám Dây Chằng Ngang (Cervical Flexion / Testing Transverse Ligament Integrity)",
        "technique": "Bệnh nhân ngồi hoặc nằm ngửa, gập nhẹ đầu. Bác sĩ đặt ngón cái của một tay lên mỏm gai C2 cố định vững chắc, tay kia đặt lên trán hoặc chẩm bệnh nhân tạo lực trượt nhẹ nhàng ra sau (Posterior translation force) để kiểm tra độ vững của dây chằng ngang C1-C2 (Trang 175-176, Figs. 4.52A-B).",
        "significance": "Nếu mỏm nha trượt lùi vào trong và nghe tiếng 'khục' nhẹ kèm theo cảm giác giảm nghẹt thở hoặc giảm chèn ép tủy cổ, nghiệm pháp dương tính báo hiệu đứt dây chằng ngang.",
        "sensitivity": "69%",
        "specificity": "96%",
        "accuracy": {
          "sn": "69%",
          "sp": "96%"
        },
        "clinical_role": "Khám độ an toàn trước khi can thiệp cột sống cổ trên, đặc biệt ở bệnh nhân viêm khớp dạng thấp",
        "diagnostic_role": "Khám độ an toàn trước khi can thiệp cột sống cổ trên, đặc biệt ở bệnh nhân viêm khớp dạng thấp",
        "figures": [
          {
            "file": "assets/deepak_images/ch04_cervical_pain/p176_img1.jpeg",
            "page": 176,
            "fig_number": "4.52A-B",
            "caption_en": "Figs. 4.52A-B: Cervical flexion test for transverse ligament integrity",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp Gập Cổ Khám Dây Chằng Ngang C1-C2 (Testing Transverse Ligament Integrity) (Figs. 4.52A-B)",
            "role_type": "exam",
            "width": 717,
            "height": 538
          }
        ]
      },
      {
        "name": "Nghiệm pháp Động mạch Đốt sống (Vertebral Artery Test / VBI Screening)",
        "technique": "Bệnh nhân nằm ngửa hoàn toàn trên bàn khám, đầu KHÔNG đưa ra ngoài mép bàn khám (kê gối mỏng hoặc đệm dưới vùng xương bả vai để hỗ trợ cột sống). Bác sĩ nâng đỡ đầu bệnh nhân, nhẹ nhàng đưa đầu vào tư thế duỗi (extension), nghiêng bên (sidebending) và xoay tối đa (rotation) sang cùng một bên. Giữ tư thế này trong 15–20 giây. Trong suốt thời gian giữ tư thế, yêu cầu bệnh nhân đếm ngược từ 15 về 1 để theo dõi sát tri giác, phát âm và quan sát cử động mắt (nystagmus). Nếu bệnh nhân xuất hiện bất kỳ triệu chứng nào trong nhóm 5D/3N (Dizziness - chóng mặt, Diplopia - nhìn đôi, Dysarthria - nói khó, Dysphagia - nuốt khó, Drop attacks - sụp ngã; Nausea - buồn nôn, Numbness - tê bì, Nystagmus - rung giật nhãn cầu), phải hạ đầu bệnh nhân về vị trí trung tính/thăng bằng ngay lập tức và dừng nghiệm pháp.",
        "significance": "Gây hẹp cơ học động mạch đốt sống đối bên nhằm đánh giá lưu lượng tuần hoàn não sau. Dương tính khi xuất hiện dấu hiệu thiếu máu não hệ sống - nền (5D: Chóng mặt, Nhìn đôi, Nói khó, Nuốt khó, Sụp ngã; 3N: Rung giật nhãn cầu, Buồn nôn, Tê bì dị cảm). Bắt buộc đưa đầu về vị trí trung tính ngay lập tức khi xuất hiện triệu chứng.",
        "sensitivity": "65–85%",
        "specificity": "90%",
        "accuracy": {
          "sn": "65–85%",
          "sp": "90%"
        },
        "clinical_role": "Sàng lọc tuyệt đối loại trừ suy tuần hoàn động mạch sống nền trước khi tiêm cổ hoặc thao tác vận động",
        "diagnostic_role": "Sàng lọc tuyệt đối loại trừ suy tuần hoàn động mạch sống nền trước khi tiêm cổ hoặc thao tác vận động",
        "figures": [
          {
            "file": "assets/deepak_images/ch04_cervical_pain/p177_img1.jpeg",
            "page": 177,
            "fig_number": "4.53",
            "caption_en": "Fig. 4.53: Vertebral artery test",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp xoay ưỡn kiểm tra động mạch đốt sống (VBI Test) (Fig. 4.53)",
            "role_type": "exam",
            "width": 717,
            "height": 538
          }
        ]
      },
      {
        "name": "Dấu hiệu Hoffmann (Hoffmann's Sign - Sàng lọc Bệnh lý Hẹp Tủy Cổ)",
        "technique": "Bác sĩ cầm nhẹ đốt giữa ngón tay thứ 3 của bệnh nhân, dùng móng tay cái của mình búng dứt khoát vào mặt mu móng ngón giữa bệnh nhân làm ngón này gập nhanh rồi bật lại.",
        "significance": "Phản xạ bệnh lý bó tháp: Nếu ngón cái và ngón trỏ giật khép vào lòng bàn tay (Adduction/Flexion) là nghiệm pháp dương tính, chỉ điểm tổn thương neuron vận động trên do hẹp ống tủy cổ (Cervical Myelopathy).",
        "sensitivity": "58–81%",
        "specificity": "59–78%",
        "accuracy": {
          "sn": "58–81%",
          "sp": "59–78%"
        },
        "clinical_role": "Dấu hiệu phát hiện sớm tổn thương tủy cổ trước khi xuất hiện teo cơ bàn tay và dáng đi co cứng",
        "diagnostic_role": "Dấu hiệu phát hiện sớm tổn thương tủy cổ trước khi xuất hiện teo cơ bàn tay và dáng đi co cứng",
        "figures": [
          {
            "file": "assets/deepak_images/ch04_cervical_pain/p181_img1.jpeg",
            "page": 181,
            "fig_number": "4.58",
            "caption_en": "Fig. 4.58: Hoffmann's sign",
            "caption_vi": "🩺 Thao tác khám: Khám phản xạ bó tháp tủy cổ - Dấu hiệu Hoffmann (Fig. 4.58)",
            "role_type": "exam",
            "width": 717,
            "height": 538
          }
        ]
      }
    ],
    "differential_table": [
      {
        "condition": "Chèn ép rễ thần kinh cổ (Cervical Radiculopathy)",
        "onset": "Đau nhói buốt lan từ cổ xuống vai và cánh tay/ngón tay",
        "aggravating": "Ngửa cổ, nghiêng đầu sang bên đau, ho, hắt hơi",
        "key_differentiator": "Dấu hiệu Spurling dương tính, giảm cảm giác khoanh da, giảm phản xạ gân xương chi trên",
        "confirmatory_test": "Nghiệm pháp Spurling / Distraction Test / ULTT 1",
        "gold_standard": "Chụp MRI Cột sống cổ & Điện cơ đồ EMG khảo sát dẫn truyền rễ",
        "web1_procedure_id": "cervical-nerve-root"
      },
      {
        "condition": "Hội chứng diện khớp cổ (Cervical Facet Syndrome)",
        "onset": "Đau ê ẩm khu trú cạnh sống cổ, lan ra góc trên xương bả vai",
        "aggravating": "Ưỡn cổ ra sau và xoay cùng bên (Kemp test), ngồi máy tính lâu",
        "key_differentiator": "Ấn đau chói diện khớp cạnh sống cổ, không có triệu chứng thần kinh chi trên",
        "confirmatory_test": "Nghiệm pháp Ưỡn xoay cột sống cổ tái hiện đau diện khớp",
        "gold_standard": "Phong bế chẩn đoán nhánh trong (Medial Branch Block / TON Block) giảm đau >= 80%",
        "web1_procedure_id": "cervical-medial-branch-ton"
      },
      {
        "condition": "Đau cơ mạc cổ vai (Myofascial Pain Syndrome)",
        "onset": "Đau mỏi căng cứng cơ thang, cơ nâng vai, vùng chẩm sau",
        "aggravating": "Căng thẳng, ngồi điều hòa lạnh, tư thế đầu đưa ra trước (Forward head posture)",
        "key_differentiator": "Sờ thấy dải cơ co cứng (Taut band) và các điểm đau kích hoạt (Trigger points) gây đau lan đặc trưng",
        "confirmatory_test": "Khám sờ ấn điểm kích hoạt cơ thang, cơ nâng vai gây giật nảy sợi cơ (Twitch response)",
        "gold_standard": "Khám lâm sàng chuẩn Travell & Simons + Tiêm phong bế điểm kích hoạt giảm đau tức thì",
        "web1_procedure_id": "occipital-nerve"
      },
      {
        "condition": "Hội chứng lối thoát lồng ngực (Thoracic Outlet Syndrome - TOS)",
        "onset": "Tê bì, lạnh buốt hoặc nặng mỏi toàn bộ cánh tay và bàn tay",
        "aggravating": "Giơ tay cao qua đầu (chải đầu, phơi quần áo), xách vật nặng",
        "key_differentiator": "Bắt mạch quay yếu đi khi giơ tay xoay đầu (Adson/Roos), phù tím bàn tay do chèn ép tĩnh mạch dưới đòn",
        "confirmatory_test": "Nghiệm pháp Roos (EAST test) / Wright test / Lindgren test",
        "gold_standard": "Siêu âm Doppler mạch máu dưới đòn động học & Đo tốc độ dẫn truyền thần kinh EMG",
        "web1_procedure_id": "stellate-ganglion"
      }
    ],
    "figures": [
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p123_img1.jpeg",
        "page": 123,
        "fig_number": "4.10",
        "caption_en": "Fig. 4.10: Type II and III odontoid peg fractures",
        "caption_vi": "🚨 Phim X-quang / Cờ đỏ: Gãy mỏm nha đốt sống trục C2 Type II/III (Fig. 4.10)",
        "role_type": "redflag",
        "width": 595,
        "height": 400
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p123_img2.png",
        "page": 123,
        "fig_number": "4.11",
        "caption_en": "Fig. 4.11: Jefferson burst fracture of the atlas C1",
        "caption_vi": "🚨 Phim X-quang / Cờ đỏ: Gãy bùng nổ đốt đội C1 (Jefferson Fracture) do tải trọng nén trục (Fig. 4.11)",
        "role_type": "redflag",
        "width": 1335,
        "height": 603
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p125_img1.jpeg",
        "page": 125,
        "fig_number": "4.12A",
        "caption_en": "Fig. 4.12A: Testing the alar ligaments",
        "caption_vi": "🚨 Phim X-quang / Cờ đỏ: Đứt dây chằng cánh & mất vững bản lề chẩm - cổ C1-C2 (Fig. 4.12A)",
        "role_type": "redflag",
        "width": 901,
        "height": 225
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p172_img1.jpeg",
        "page": 172,
        "fig_number": "4.47",
        "caption_en": "Fig. 4.47: Spurling's test",
        "caption_vi": "🩺 Thao tác khám: Nghiệm pháp ép lỗ liên hợp cổ Spurling (Fig. 4.47)",
        "role_type": "exam",
        "width": 717,
        "height": 538
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p173_img1.jpeg",
        "page": 173,
        "fig_number": "4.48",
        "caption_en": "Fig. 4.48: Distraction test",
        "caption_vi": "🩺 Thao tác khám: Nghiệm pháp kéo giãn giải ép rễ thần kinh cổ (Fig. 4.48)",
        "role_type": "exam",
        "width": 717,
        "height": 538
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p176_img1.jpeg",
        "page": 176,
        "fig_number": "4.52A-B",
        "caption_en": "Figs. 4.52A-B: Cervical flexion test for transverse ligament integrity",
        "caption_vi": "🩺 Thao tác khám: Nghiệm pháp Gập Cổ Khám Dây Chằng Ngang C1-C2 (Testing Transverse Ligament Integrity) (Figs. 4.52A-B)",
        "role_type": "exam",
        "width": 717,
        "height": 538
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p177_img1.jpeg",
        "page": 177,
        "fig_number": "4.53",
        "caption_en": "Fig. 4.53: Vertebral artery test",
        "caption_vi": "🩺 Thao tác khám: Nghiệm pháp xoay ưỡn kiểm tra động mạch đốt sống (VBI Test) (Fig. 4.53)",
        "role_type": "exam",
        "width": 717,
        "height": 538
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p181_img1.jpeg",
        "page": 181,
        "fig_number": "4.58",
        "caption_en": "Fig. 4.58: Hoffmann's sign",
        "caption_vi": "🩺 Thao tác khám: Khám phản xạ bó tháp tủy cổ - Dấu hiệu Hoffmann (Fig. 4.58)",
        "role_type": "exam",
        "width": 717,
        "height": 538
      }
    ],
    "stage_2_somatic_dysfunctions": [
      "Hạn chế mở diện khớp cổ (Opening Restriction / FRS - Flexed, Rotated, Sidebent): Mấu khớp dưới không trượt lên trên và ra trước được khi cúi nghiêng xoay đối bên.",
      "Hạn chế đóng diện khớp cổ (Closing Restriction / ERS - Extended, Rotated, Sidebent): Mấu khớp dưới không trượt xuống dưới và ra sau được khi ngửa nghiêng xoay cùng bên.",
      "Sai lệch vận động khớp chẩm - đội (OA Joint restriction): Giảm biên độ gật đầu (Nodding) của lồi cầu xương chẩm trên mặt khớp C1.",
      "Vẹo vặn trục đội - trục (AA Joint rotation dysfunction): Giới hạn xoay đầu sang một bên khi cổ đã gập tối đa (Flexion-Rotation Test)."
    ],
    "stage_3_guidemap_intervention": "Nếu không có cờ đỏ: Điều trị nội khoa & nắn chỉnh cơ sinh học giải phóng diện khớp; Trường hợp đau rễ cổ kháng trị hoặc viêm diện khớp cổ dai dẳng -> Chỉ định Tiêm can thiệp dưới hướng dẫn siêu âm (Xem Web 1: Tiêm rễ thần kinh cổ chọn lọc C5-C6-C7 hoặc Tiêm nhánh trong phong bế diện khớp cổ).",
    "recommended_web1_procedures": [
      {
        "id": "cervical-medial-branch-ton",
        "nameVi": "Phong bế nhánh trong cổ & thần kinh chẩm thứ 3 (TON)",
        "role": "Chẩn đoán & điều trị đau diện khớp cổ (Facet C2-C7) và đau đầu do căn nguyên cổ (Cervicogenic Headache)"
      },
      {
        "id": "cervical-nerve-root",
        "nameVi": "Phong bế rễ thần kinh gai sống cổ chọn lọc C5, C6, C7",
        "role": "Chèn ép rễ cổ do thoát vị đĩa đệm hoặc hẹp lỗ liên hợp gây đau lan tỏa cánh tay"
      },
      {
        "id": "occipital-nerve",
        "nameVi": "Phong bế thần kinh chẩm lớn và chẩm bé (GON & LON Block)",
        "role": "Đau dây thần kinh chẩm (Occipital Neuralgia) và đau nửa đầu migraine kháng trị"
      },
      {
        "id": "stellate-ganglion",
        "nameVi": "Phong bế chuỗi hạch giao cảm cổ / Hạch sao",
        "role": "Hội chứng đau cục bộ phức tạp (CRPS type I/II) chi trên, hội chứng Raynaud"
      }
    ],
    "provocative_tests": [
      {
        "name": "Nghiệm pháp Ép cổ Spurling (Spurling's Neck Compression Test)",
        "technique": "Bệnh nhân ngồi thẳng. Bác sĩ cho bệnh nhân nghiêng đầu sang bên đau, hơi ngửa cổ ra sau, sau đó bác sĩ đặt hai tay lên đỉnh đầu và ấn một lực nén dọc trục thẳng đứng xuống dưới.",
        "significance": "Thu hẹp cơ học lỗ liên hợp thần kinh, chèn ép trực tiếp lên rễ thần kinh đang viêm, tái hiện đau nhói buốt lan theo khoanh da chi trên (Dermatome). Dương tính xác nhận bệnh lý rễ thần kinh cổ.",
        "sensitivity": "30–50%",
        "specificity": "92–100%",
        "accuracy": {
          "sn": "30–50%",
          "sp": "92–100%"
        },
        "clinical_role": "Độ đặc hiệu lên tới 92–100%, dương tính là chỉ điểm chắc chắn của chèn ép rễ cổ (Quy tắc SpPIn)",
        "diagnostic_role": "Độ đặc hiệu lên tới 92–100%, dương tính là chỉ điểm chắc chắn của chèn ép rễ cổ (Quy tắc SpPIn)",
        "figures": [
          {
            "file": "assets/deepak_images/ch04_cervical_pain/p172_img1.jpeg",
            "page": 172,
            "fig_number": "4.47",
            "caption_en": "Fig. 4.47: Spurling's test",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp ép lỗ liên hợp cổ Spurling (Fig. 4.47)",
            "role_type": "exam",
            "width": 717,
            "height": 538
          }
        ]
      },
      {
        "name": "Nghiệm pháp Kéo giãn Cột sống Cổ (Cervical Distraction Test)",
        "technique": "Bệnh nhân nằm ngửa thư giãn. Bác sĩ đặt một tay dưới cằm (hoặc xương chẩm) và tay kia ôm sau đầu, thực hiện lực kéo giãn dọc trục từ từ khoảng 10–15 kg hướng về phía đỉnh đầu.",
        "significance": "Làm rộng lỗ liên hợp và giải phóng tạm thời sự chèn ép rễ thần kinh. Nếu các triệu chứng đau buốt, tê bì cánh tay thuyên giảm hoặc biến mất hoàn toàn, nghiệm pháp dương tính.",
        "sensitivity": "44%",
        "specificity": "90–97%",
        "accuracy": {
          "sn": "44%",
          "sp": "90–97%"
        },
        "clinical_role": "Độ đặc hiệu cao (90–97%), khẳng định đau tay có nguồn gốc từ chèn ép rễ cổ thay vì bệnh khớp vai",
        "diagnostic_role": "Độ đặc hiệu cao (90–97%), khẳng định đau tay có nguồn gốc từ chèn ép rễ cổ thay vì bệnh khớp vai",
        "figures": [
          {
            "file": "assets/deepak_images/ch04_cervical_pain/p173_img1.jpeg",
            "page": 173,
            "fig_number": "4.48",
            "caption_en": "Fig. 4.48: Distraction test",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp kéo giãn giải ép rễ thần kinh cổ (Fig. 4.48)",
            "role_type": "exam",
            "width": 717,
            "height": 538
          }
        ]
      },
      {
        "name": "Nghiệm pháp Gập Cổ Khám Dây Chằng Ngang (Cervical Flexion / Testing Transverse Ligament Integrity)",
        "technique": "Bệnh nhân ngồi hoặc nằm ngửa, gập nhẹ đầu. Bác sĩ đặt ngón cái của một tay lên mỏm gai C2 cố định vững chắc, tay kia đặt lên trán hoặc chẩm bệnh nhân tạo lực trượt nhẹ nhàng ra sau (Posterior translation force) để kiểm tra độ vững của dây chằng ngang C1-C2 (Trang 175-176, Figs. 4.52A-B).",
        "significance": "Nếu mỏm nha trượt lùi vào trong và nghe tiếng 'khục' nhẹ kèm theo cảm giác giảm nghẹt thở hoặc giảm chèn ép tủy cổ, nghiệm pháp dương tính báo hiệu đứt dây chằng ngang.",
        "sensitivity": "69%",
        "specificity": "96%",
        "accuracy": {
          "sn": "69%",
          "sp": "96%"
        },
        "clinical_role": "Khám độ an toàn trước khi can thiệp cột sống cổ trên, đặc biệt ở bệnh nhân viêm khớp dạng thấp",
        "diagnostic_role": "Khám độ an toàn trước khi can thiệp cột sống cổ trên, đặc biệt ở bệnh nhân viêm khớp dạng thấp",
        "figures": [
          {
            "file": "assets/deepak_images/ch04_cervical_pain/p176_img1.jpeg",
            "page": 176,
            "fig_number": "4.52A-B",
            "caption_en": "Figs. 4.52A-B: Cervical flexion test for transverse ligament integrity",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp Gập Cổ Khám Dây Chằng Ngang C1-C2 (Testing Transverse Ligament Integrity) (Figs. 4.52A-B)",
            "role_type": "exam",
            "width": 717,
            "height": 538
          }
        ]
      },
      {
        "name": "Nghiệm pháp Động mạch Đốt sống (Vertebral Artery Test / VBI Screening)",
        "technique": "Bệnh nhân nằm ngửa hoàn toàn trên bàn khám, đầu KHÔNG đưa ra ngoài mép bàn khám (kê gối mỏng hoặc đệm dưới vùng xương bả vai để hỗ trợ cột sống). Bác sĩ nâng đỡ đầu bệnh nhân, nhẹ nhàng đưa đầu vào tư thế duỗi (extension), nghiêng bên (sidebending) và xoay tối đa (rotation) sang cùng một bên. Giữ tư thế này trong 15–20 giây. Trong suốt thời gian giữ tư thế, yêu cầu bệnh nhân đếm ngược từ 15 về 1 để theo dõi sát tri giác, phát âm và quan sát cử động mắt (nystagmus). Nếu bệnh nhân xuất hiện bất kỳ triệu chứng nào trong nhóm 5D/3N (Dizziness - chóng mặt, Diplopia - nhìn đôi, Dysarthria - nói khó, Dysphagia - nuốt khó, Drop attacks - sụp ngã; Nausea - buồn nôn, Numbness - tê bì, Nystagmus - rung giật nhãn cầu), phải hạ đầu bệnh nhân về vị trí trung tính/thăng bằng ngay lập tức và dừng nghiệm pháp.",
        "significance": "Gây hẹp cơ học động mạch đốt sống đối bên nhằm đánh giá lưu lượng tuần hoàn não sau. Dương tính khi xuất hiện dấu hiệu thiếu máu não hệ sống - nền (5D: Chóng mặt, Nhìn đôi, Nói khó, Nuốt khó, Sụp ngã; 3N: Rung giật nhãn cầu, Buồn nôn, Tê bì dị cảm). Bắt buộc đưa đầu về vị trí trung tính ngay lập tức khi xuất hiện triệu chứng.",
        "sensitivity": "65–85%",
        "specificity": "90%",
        "accuracy": {
          "sn": "65–85%",
          "sp": "90%"
        },
        "clinical_role": "Sàng lọc tuyệt đối loại trừ suy tuần hoàn động mạch sống nền trước khi tiêm cổ hoặc thao tác vận động",
        "diagnostic_role": "Sàng lọc tuyệt đối loại trừ suy tuần hoàn động mạch sống nền trước khi tiêm cổ hoặc thao tác vận động",
        "figures": [
          {
            "file": "assets/deepak_images/ch04_cervical_pain/p177_img1.jpeg",
            "page": 177,
            "fig_number": "4.53",
            "caption_en": "Fig. 4.53: Vertebral artery test",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp xoay ưỡn kiểm tra động mạch đốt sống (VBI Test) (Fig. 4.53)",
            "role_type": "exam",
            "width": 717,
            "height": 538
          }
        ]
      },
      {
        "name": "Dấu hiệu Hoffmann (Hoffmann's Sign - Sàng lọc Bệnh lý Hẹp Tủy Cổ)",
        "technique": "Bác sĩ cầm nhẹ đốt giữa ngón tay thứ 3 của bệnh nhân, dùng móng tay cái của mình búng dứt khoát vào mặt mu móng ngón giữa bệnh nhân làm ngón này gập nhanh rồi bật lại.",
        "significance": "Phản xạ bệnh lý bó tháp: Nếu ngón cái và ngón trỏ giật khép vào lòng bàn tay (Adduction/Flexion) là nghiệm pháp dương tính, chỉ điểm tổn thương neuron vận động trên do hẹp ống tủy cổ (Cervical Myelopathy).",
        "sensitivity": "58–81%",
        "specificity": "59–78%",
        "accuracy": {
          "sn": "58–81%",
          "sp": "59–78%"
        },
        "clinical_role": "Dấu hiệu phát hiện sớm tổn thương tủy cổ trước khi xuất hiện teo cơ bàn tay và dáng đi co cứng",
        "diagnostic_role": "Dấu hiệu phát hiện sớm tổn thương tủy cổ trước khi xuất hiện teo cơ bàn tay và dáng đi co cứng",
        "figures": [
          {
            "file": "assets/deepak_images/ch04_cervical_pain/p181_img1.jpeg",
            "page": 181,
            "fig_number": "4.58",
            "caption_en": "Fig. 4.58: Hoffmann's sign",
            "caption_vi": "🩺 Thao tác khám: Khám phản xạ bó tháp tủy cổ - Dấu hiệu Hoffmann (Fig. 4.58)",
            "role_type": "exam",
            "width": 717,
            "height": 538
          }
        ]
      }
    ],
    "differential_matrix": [
      {
        "condition": "Chèn ép rễ thần kinh cổ (Cervical Radiculopathy)",
        "onset": "Đau nhói buốt lan từ cổ xuống vai và cánh tay/ngón tay",
        "aggravating": "Ngửa cổ, nghiêng đầu sang bên đau, ho, hắt hơi",
        "key_differentiator": "Dấu hiệu Spurling dương tính, giảm cảm giác khoanh da, giảm phản xạ gân xương chi trên",
        "confirmatory_test": "Nghiệm pháp Spurling / Distraction Test / ULTT 1",
        "gold_standard": "Chụp MRI Cột sống cổ & Điện cơ đồ EMG khảo sát dẫn truyền rễ",
        "web1_procedure_id": "cervical-nerve-root"
      },
      {
        "condition": "Hội chứng diện khớp cổ (Cervical Facet Syndrome)",
        "onset": "Đau ê ẩm khu trú cạnh sống cổ, lan ra góc trên xương bả vai",
        "aggravating": "Ưỡn cổ ra sau và xoay cùng bên (Kemp test), ngồi máy tính lâu",
        "key_differentiator": "Ấn đau chói diện khớp cạnh sống cổ, không có triệu chứng thần kinh chi trên",
        "confirmatory_test": "Nghiệm pháp Ưỡn xoay cột sống cổ tái hiện đau diện khớp",
        "gold_standard": "Phong bế chẩn đoán nhánh trong (Medial Branch Block / TON Block) giảm đau >= 80%",
        "web1_procedure_id": "cervical-medial-branch-ton"
      },
      {
        "condition": "Đau cơ mạc cổ vai (Myofascial Pain Syndrome)",
        "onset": "Đau mỏi căng cứng cơ thang, cơ nâng vai, vùng chẩm sau",
        "aggravating": "Căng thẳng, ngồi điều hòa lạnh, tư thế đầu đưa ra trước (Forward head posture)",
        "key_differentiator": "Sờ thấy dải cơ co cứng (Taut band) và các điểm đau kích hoạt (Trigger points) gây đau lan đặc trưng",
        "confirmatory_test": "Khám sờ ấn điểm kích hoạt cơ thang, cơ nâng vai gây giật nảy sợi cơ (Twitch response)",
        "gold_standard": "Khám lâm sàng chuẩn Travell & Simons + Tiêm phong bế điểm kích hoạt giảm đau tức thì",
        "web1_procedure_id": "occipital-nerve"
      },
      {
        "condition": "Hội chứng lối thoát lồng ngực (Thoracic Outlet Syndrome - TOS)",
        "onset": "Tê bì, lạnh buốt hoặc nặng mỏi toàn bộ cánh tay và bàn tay",
        "aggravating": "Giơ tay cao qua đầu (chải đầu, phơi quần áo), xách vật nặng",
        "key_differentiator": "Bắt mạch quay yếu đi khi giơ tay xoay đầu (Adson/Roos), phù tím bàn tay do chèn ép tĩnh mạch dưới đòn",
        "confirmatory_test": "Nghiệm pháp Roos (EAST test) / Wright test / Lindgren test",
        "gold_standard": "Siêu âm Doppler mạch máu dưới đòn động học & Đo tốc độ dẫn truyền thần kinh EMG",
        "web1_procedure_id": "stellate-ganglion"
      }
    ]
  },
  {
    "id": "shoulder-pain",
    "chapter": 9,
    "region": "shoulder",
    "region_vi": "Khớp Vai & Đai Vai",
    "icon": "🏹",
    "title": "Shoulder Complex, Rotator Cuff & Shoulder Girdle Pain",
    "title_vi": "🏹 Đau Khớp Vai, Đai Vai & Xung Đột Chóp Xoay",
    "chief_complaint": "Phàn nàn chính: Đau khớp vai khi nhấc tay qua đầu, đau nhói mặt trước vai khi với tay ra sau, đau vai về đêm khi nằm nghiêng đè lên vai, đông cứng khớp vai không thể chải đầu hay cài cúc áo.",
    "author": "GS. Deepak Sebastian (Chương 9, pp. 417-466)",
    "summary": "Chẩn đoán phân biệt đau khớp vai toàn diện: Xung đột khoang dưới mỏm cùng (Subacromial Impingement), rách gân chóp xoay (Supraspinatus, Infraspinatus, Subscapularis), viêm gân đầu dài cơ nhị đầu, thoái hóa khớp cùng đòn (AC Joint), đông cứng khớp vai (Frozen Shoulder / Adhesive Capsulitis). Sàng lọc cờ đỏ nhồi máu cơ tim (quy chiếu vai trái), u đỉnh phổi Pancoast, bệnh lý gan mật (quy chiếu vai phải), vỡ lách tụ máu (dấu hiệu Kehr vai trái).",
    "stage_1_systemic_red_flags": [
      {
        "category": "Cờ Đỏ Thiếu Máu Cơ Tim / Nhồi Máu Cơ Tim (Cardiac Ischemia)",
        "signs": "Đau nhức vùng vai trái lan dọc bờ trong cánh tay và ngón 4-5 hoặc lan lên hàm, khởi phát khi gắng sức hoặc xúc động, kèm cảm giác đè nặng ngực, vã mồ hôi, khó thở, buồn nôn.",
        "action": "CẤP CỨU NỘI TIM MẠCH: Đo ECG 12 chuyển đạo ngay lập tức, xét nghiệm Troponin I/T siêu nhạy. Tuyệt đối không tiêm corticoid vào vai!"
      },
      {
        "category": "Cờ Đỏ Vỡ Lách / Chảy Máu Trong Ổ Bụng (Dấu Hiệu Kehr)",
        "signs": "Đau nhói dữ dội tại đỉnh vai trái (do máu hoặc dịch kích thích dây thần kinh hoành mặt dưới cơ hoành C3-C5), xuất hiện sau chấn thương ngực bụng kín hoặc tai nạn giao thông, kèm da niêm mạc nhợt, tụt huyết áp, bụng chướng.",
        "action": "CẤP CỨU NGOẠI TIÊU HÓA: Siêu âm bụng tại giường (FAST) tìm dịch ổ bụng, chuyển mổ khẩn cấp."
      },
      {
        "category": "Cờ Đỏ U Đỉnh Phổi Pancoast (Pancoast Tumor)",
        "signs": "Đau vai sau và rãnh gai bả vai âm ỉ liên tục tăng về đêm, lan dọc theo bờ trong cánh tay, sụt cân, tiền sử hút thuốc lá, có thể kèm sụp mi co đồng tử cùng bên (Hội chứng Horner).",
        "action": "Chụp X-quang và CT lồng ngực đánh giá vùng đỉnh phổi."
      },
      {
        "category": "Cờ Đỏ Trật Khớp Vai Sau Bị Bỏ Sót (Posterior Shoulder Dislocation)",
        "signs": "Khớp vai bị cố định ở tư thế khép và xoay trong, MẤT HOÀN TOÀN KHẢ NĂNG XOAY NGOÀI THỤ ĐỘNG. Rất dễ bị bỏ sót trên phim X-quang AP thông thường (dấu hiệu bóng đèn / Lightbulb sign), thường gặp sau cơn co giật động kinh hoặc bị điện giật.",
        "action": "Chụp X-quang khớp vai tư thế nách (Axillary view) hoặc chữ Y xương bả vai (Scapular Y view), nắn trật dưới vô cảm."
      }
    ],
    "red_flags": [
      {
        "category": "Cờ Đỏ Rách Hoàn Toàn Gân Chóp Xoay (Full-Thickness Massive Rotator Cuff Tear)",
        "signs": "Rách đứt hoàn toàn gân cơ trên gai / dưới gai tại vùng thiếu máu Codman sau chấn thương hoặc thoái hóa nặng. Mất hoàn toàn khả năng chủ động dạng cánh tay (Drop arm sign dương tính), teo cơ hố trên gai và hố dưới gai rõ rệt.",
        "action": "CHUYỂN PHẪU THUẬT NỘI SOI KHÂU CHÓP XOAY: Chỉ định chụp MRI khớp vai có độ phân giải cao đánh giá mức độ co rút gân và thoái hóa mỡ cơ chóp xoay (thang điểm Goutallier). Chống chỉ định tiêm Corticoid lặp lại nhiều lần vào gân rách.",
        "figures": [
          {
            "file": "assets/deepak_images/ch09_shoulder_pain/p442_img1.jpeg",
            "page": 442,
            "fig_number": "9.10",
            "caption_en": "Fig. 9.10: Critical vascular zone and full-thickness rupture of the supraspinatus tendon",
            "caption_vi": "📐 Sơ đồ giải phẫu: Vùng mạch máu nguy cơ & rách gân trên gai chóp xoay (Fig. 9.10)",
            "role_type": "redflag",
            "width": 1134,
            "height": 754
          }
        ]
      },
      {
        "category": "Cờ Đỏ Rách Sụn Viền Ổ Chảo Bankart & Tổn Thương SLAP Mức Độ Nặng",
        "signs": "Sau trật khớp vai ra trước hoặc chấn thương giật mạnh cánh tay. Cảm giác vai lỏng lẻo, kẹt khớp, tiếng lục cục đau chói khi dạng và xoay ngoài. Mất vững khớp cánh tay - ổ chảo tái hồi.",
        "action": "CHỤP MRI KHỚP VAI CÓ TIÊM THUỐC CẢN TỪ (MR ARTHROGRAPHY): Xác định vị trí rách sụn viền (Bankart từ 3 đến 6 giờ, SLAP từ 10 đến 2 giờ), chuyển bác sĩ Chấn thương Chỉnh hình phẫu thuật nội soi đính lại sụn viền.",
        "figures": [
          {
            "file": "assets/deepak_images/ch09_shoulder_pain/p445_img1.jpeg",
            "page": 445,
            "fig_number": "9.12",
            "caption_en": "Fig. 9.12: Glenoid labral tear sites: Bankart and SLAP lesions",
            "caption_vi": "📐 Sơ đồ giải phẫu: Tổn thương sụn viền ổ chảo Bankart & SLAP khớp vai (Fig. 9.12)",
            "role_type": "redflag",
            "width": 1011,
            "height": 722
          }
        ]
      }
    ],
    "visceral_referrals": [
      {
        "source": "Bệnh Lý Gan & Túi Mật (Liver Abscess & Cholecystitis)",
        "pattern": "Kích thích cơ hoành phải quy chiếu đau lên đỉnh vai phải và vùng bờ trên cơ thang phải (qua thần kinh hoành C3-C5). Kèm sốt, vàng da, ấn đau hạ sườn phải.",
        "differential": "Siêu âm gan mật tụy, xét nghiệm men gan AST/ALT, Bilirubin.",
        "figures": []
      },
      {
        "source": "Đau Rễ Cổ C5 (Cervical Radiculopathy C5)",
        "pattern": "Đau nhức mặt ngoài cơ delta và đỉnh vai, tê bì dermatom C5, yếu cơ giạng vai (cơ delta).",
        "differential": "Spurling test (+), Kéo giãn cổ (+) làm giảm triệu chứng, cử động khớp vai nội khớp bình thường.",
        "figures": []
      }
    ],
    "drug_induced": [
      "Quinolone: Viêm gân và đứt gân cơ trên gai (Supraspinatus).",
      "Statin: Viêm cơ thang, cơ delta và cơ dưới gai đối xứng hai bên.",
      "Corticoid: Hoại tử vô mạch chỏm xương cánh tay (AVN)."
    ],
    "examination_procedures": [
      {
        "name": "Nghiệm pháp Chạm Neer (Neer Impingement Test)",
        "technique": "Bác sĩ đứng sau hoặc bên cạnh bệnh nhân, một tay ấn giữ cố định góc trên xương bả vai để ngăn chuyển động xoay bả vai. Tay kia cầm cẳng tay bệnh nhân ở tư thế xoay trong hoàn toàn (ngón cái chỉ xuống sàn) rồi đưa thẳng cánh tay gập về phía trước lên trên tối đa.",
        "significance": "Gây kẹp cơ học mấu động lớn xương cánh tay có gân cơ trên gai và túi thanh dịch dưới mỏm cùng vào mặt dưới mỏm cùng vai và dây chằng cùng quạ. Xuất hiện đau trong khoảng 70–120 độ là nghiệm pháp dương tính.",
        "sensitivity": "79–88%",
        "specificity": "41–58%",
        "accuracy": {
          "sn": "79–88%",
          "sp": "41–58%"
        },
        "clinical_role": "Độ nhạy cao, rất phù hợp sàng lọc loại trừ Hội chứng xung đột dưới mỏm cùng vai",
        "diagnostic_role": "Độ nhạy cao, rất phù hợp sàng lọc loại trừ Hội chứng xung đột dưới mỏm cùng vai",
        "figures": [
          {
            "file": "assets/deepak_images/ch09_shoulder_pain/p456_img1.jpeg",
            "page": 456,
            "fig_number": "9.24",
            "caption_en": "Fig. 9.24: Neer impingement test",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp chèn ép dưới mỏm cùng vai Neer (Fig. 9.24)",
            "role_type": "exam",
            "width": 557,
            "height": 798
          }
        ]
      },
      {
        "name": "Nghiệm pháp Hawkins-Kennedy (Hawkins-Kennedy Impingement Test)",
        "technique": "Bác sĩ nâng cánh tay bệnh nhân gập 90 độ về phía trước, gập khớp khuỷu 90 độ. Sau đó, một tay giữ ổn định khuỷu tay, tay kia ấn cẳng tay xoay trong tối đa một cách dứt khoát.",
        "significance": "Đẩy gân cơ trên gai và gân nhị đầu tì sát vào dây chằng cùng quạ và mỏm quạ. Đau chói mặt trước trên khớp vai khẳng định xung đột dưới mỏm cùng vai.",
        "sensitivity": "79–92%",
        "specificity": "44–59%",
        "accuracy": {
          "sn": "79–92%",
          "sp": "44–59%"
        },
        "clinical_role": "Độ nhạy rất cao, kết hợp cùng Neer và Speed tạo chùm khám xung đột chóp xoay kinh điển",
        "diagnostic_role": "Độ nhạy rất cao, kết hợp cùng Neer và Speed tạo chùm khám xung đột chóp xoay kinh điển",
        "figures": [
          {
            "file": "assets/deepak_images/ch09_shoulder_pain/p463_img1.jpeg",
            "page": 463,
            "fig_number": "9.35",
            "caption_en": "Fig. 9.35: Hawkins-Kennedy test",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp xoay trong cưỡng bức Hawkins-Kennedy (Fig. 9.35)",
            "role_type": "exam",
            "width": 958,
            "height": 588
          }
        ]
      },
      {
        "name": "Dấu hiệu Trễ Xoay Ngoài (External Rotation Lag Sign - Khám Gân Cơ Dưới Gai)",
        "technique": "Bác sĩ nâng cánh tay bệnh nhân gập 20 độ, khuỷu gập 90 độ, rồi thụ động xoay ngoài cánh tay đến gần biên độ tối đa (khoảng 5 độ trước mức tối đa). Yêu cầu bệnh nhân chủ động giữ nguyên tư thế đó khi bác sĩ buông tay khỏi cổ tay.",
        "significance": "Nếu bệnh nhân không thể giữ được vị trí và cẳng tay bị rơi xoay trong lùi lại (Lag sign dương tính), khẳng định có rách đứt hoặc liệt gân cơ dưới gai (Infraspinatus) và cơ tròn bé.",
        "sensitivity": "56–70%",
        "specificity": "98–100%",
        "accuracy": {
          "sn": "56–70%",
          "sp": "98–100%"
        },
        "clinical_role": "Độ đặc hiệu tuyệt đối 98–100%, dương tính là chỉ điểm chắc chắn rách hoàn toàn gân cơ dưới gai",
        "diagnostic_role": "Độ đặc hiệu tuyệt đối 98–100%, dương tính là chỉ điểm chắc chắn rách hoàn toàn gân cơ dưới gai",
        "figures": [
          {
            "file": "assets/deepak_images/ch09_shoulder_pain/p460_img1.jpeg",
            "page": 460,
            "fig_number": "9.31A",
            "caption_en": "Fig. 9.31A: External rotation lag sign",
            "caption_vi": "🩺 Thao tác khám: Dấu hiệu trễ xoay ngoài phát hiện rách gân cơ dưới gai (Fig. 9.31A)",
            "role_type": "exam",
            "width": 958,
            "height": 728
          }
        ]
      },
      {
        "name": "Nghiệm pháp Nhấc Rời Gerber (Gerber's Lift-off Test - Khám Gân Cơ Dưới Vai)",
        "technique": "Bệnh nhân đứng hoặc ngồi, đặt mu bàn tay áp sát vào vùng thắt lưng giữa (vùng gai L2–L5). Bác sĩ yêu cầu bệnh nhân chủ động nhấc rời mu bàn tay ra sau xa khỏi lưng.",
        "significance": "Đánh giá sự toàn vẹn của cơ dưới vai (Subscapularis). Nếu không thể nhấc tay rời khỏi lưng hoặc khi bác sĩ ấn nhẹ tay bệnh nhân bị sụp vào lưng, nghiệm pháp dương tính báo hiệu rách cơ dưới vai.",
        "sensitivity": "35–70%",
        "specificity": "98–100%",
        "accuracy": {
          "sn": "35–70%",
          "sp": "98–100%"
        },
        "clinical_role": "Độ đặc hiệu 98–100% chẩn đoán rách cơ dưới vai, chìa khóa phân biệt rách chóp xoay trước",
        "diagnostic_role": "Độ đặc hiệu 98–100% chẩn đoán rách cơ dưới vai, chìa khóa phân biệt rách chóp xoay trước",
        "figures": [
          {
            "file": "assets/deepak_images/ch09_shoulder_pain/p462_img1.jpeg",
            "page": 462,
            "fig_number": "9.33",
            "caption_en": "Fig. 9.33: Gerber's lift-off test",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp nhấc rời lưng Gerber khám cơ dưới vai (Fig. 9.33)",
            "role_type": "exam",
            "width": 958,
            "height": 626
          }
        ]
      },
      {
        "name": "Nghiệm pháp Speed (Speed's Test - Viêm Đầu Dài Gân Nhị Đầu & SLAP)",
        "technique": "Bệnh nhân duỗi thẳng khuỷu tay, ngửa hoàn toàn cẳng tay, gập khớp vai 90 độ về phía trước. Bác sĩ dùng một tay đè lên rãnh gân nhị đầu, tay kia ấn cẳng tay bệnh nhân xuống dưới trong khi bệnh nhân gắng sức kháng cự đẩy lên.",
        "significance": "Gây lực căng tối đa lên đầu dài gân cơ nhị đầu và điểm bám vào sụn viền trên ổ chảo. Đau nhói dọc theo rãnh nhị đầu mặt trước cánh tay xác nhận viêm gân nhị đầu hoặc rách sụn viền SLAP.",
        "sensitivity": "54–63%",
        "specificity": "67–81%",
        "accuracy": {
          "sn": "54–63%",
          "sp": "67–81%"
        },
        "clinical_role": "Chẩn đoán phân biệt đau mặt trước khớp vai giữa viêm gân nhị đầu và tổn thương chóp xoay",
        "diagnostic_role": "Chẩn đoán phân biệt đau mặt trước khớp vai giữa viêm gân nhị đầu và tổn thương chóp xoay",
        "figures": [
          {
            "file": "assets/deepak_images/ch09_shoulder_pain/p454_img1.jpeg",
            "page": 454,
            "fig_number": "9.21",
            "caption_en": "Fig. 9.21: Speed's test",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp kháng gập vai Speed khám đầu dài gân nhị đầu (Fig. 9.21)",
            "role_type": "exam",
            "width": 958,
            "height": 781
          }
        ]
      },
      {
        "name": "Nghiệm pháp Bắt Chéo Cánh Tay (Cross-Body Adduction Test - Khám Khớp Cùng Đòn)",
        "technique": "Bác sĩ nâng cánh tay bên đau gập 90 độ về phía trước, sau đó nhẹ nhàng nhưng dứt khoát khép cánh tay ngang qua trước ngực hướng về phía vai đối diện.",
        "significance": "Tạo lực ép nén trực tiếp lên diện khớp cùng vai - đòn (AC Joint). Đau nhói tại điểm gồ trên đỉnh khớp cùng đòn là dương tính, xác nhận viêm hoặc thoái hóa khớp cùng đòn.",
        "sensitivity": "77%",
        "specificity": "79%",
        "accuracy": {
          "sn": "77%",
          "sp": "79%"
        },
        "clinical_role": "Phân biệt đau đỉnh vai do thoái hóa khớp cùng đòn (AC joint) với xung đột dưới mỏm cùng",
        "diagnostic_role": "Phân biệt đau đỉnh vai do thoái hóa khớp cùng đòn (AC joint) với xung đột dưới mỏm cùng",
        "figures": [
          {
            "file": "assets/deepak_images/ch09_shoulder_pain/p454_img2.jpeg",
            "page": 454,
            "fig_number": "9.20",
            "caption_en": "Fig. 9.20: Cross-body adduction test",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp khép ngang ngực khám khớp cùng đòn AC Joint (Fig. 9.20)",
            "role_type": "exam",
            "width": 958,
            "height": 628
          }
        ]
      },
      {
        "name": "Nghiệm pháp Nghiêng Xương Bả Vai Ra Sau (Scapula Backward Tipping Test - SBTT)",
        "technique": "Nghiệm pháp độc quyền do chính GS. Deepak Sebastian nghiên cứu sáng chế (trang 451, 464). Bệnh nhân nằm sấp thả lỏng, đầu và cổ được nâng đỡ thẳng trục, hai lòng bàn tay để ở tư thế giải phẫu. Bác sĩ đứng bên cạnh, đặt một bàn tay lên góc dưới của xương bả vai (inferior angle), các ngón của bàn tay kia móc nhẹ nhàng dưới mỏm quạ (coracoid process). Thực hiện lực kéo nhẹ nhàng nâng mỏm quạ lên trên (hướng ra sau) để cảm nhận độ căng cứng và biên độ trượt. Cần lưu ý không móc ngón tay dưới xương đòn để tránh kéo căng quá mức khớp cùng - đòn (AC joint). So sánh đối chiếu hai bên vai.",
        "significance": "Phát hiện tình trạng xương bả vai bị nghiêng đổ ra trước (Forward tipping) do co rút dây chằng quạ - đòn (coracoclavicular ligaments) và cơ ngực bé (pectoralis minor). Đây là nguyên nhân cơ sinh học then chốt gây hẹp khoang dưới mỏm cùng vai dẫn đến hội chứng chèn ép chóp xoay (subacromial impingement) và chèn ép thần kinh trên vai / thần kinh nách.",
        "sensitivity": "Định tính (Qualitative)",
        "specificity": "Định tính (Qualitative)",
        "accuracy": {
          "sn": "Định tính (Qualitative)",
          "sp": "Định tính (Qualitative)"
        },
        "clinical_role": "Nghiệm pháp độc quyền của GS. Deepak Sebastian: Đánh giá cử động phân đoạn cơ sinh học và rối loạn xoay bả vai ra sau trong hội chứng chèn ép dưới mỏm cùng vai (Qualitative Motion Assessment)",
        "diagnostic_role": "Nghiệm pháp độc quyền của GS. Deepak Sebastian: Đánh giá cử động phân đoạn cơ sinh học và rối loạn xoay bả vai ra sau trong hội chứng chèn ép dưới mỏm cùng vai (Qualitative Motion Assessment)",
        "figures": [
          {
            "file": "assets/deepak_images/ch09_shoulder_pain/p464_img2.jpeg",
            "page": 464,
            "fig_number": "9.39",
            "caption_en": "Fig. 9.39: The scapula backward tipping test",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp SBTT (Deepak Sebastian) đánh giá hạn chế xoay bả vai ra sau (Fig. 9.39)",
            "role_type": "exam",
            "width": 904,
            "height": 677
          }
        ]
      }
    ],
    "differential_table": [
      {
        "condition": "Hội chứng xung đột dưới mỏm cùng (Subacromial Impingement - SAIS)",
        "onset": "Đau âm ỉ mặt trước ngoài vai, tăng khi dạng tay 60–120 độ (cung đau Painful arc)",
        "aggravating": "Nằm nghiêng đè lên vai, giơ tay cao qua đầu, đưa tay ra sau lưng",
        "key_differentiator": "Nghiệm pháp Neer và Hawkins-Kennedy dương tính, cơ lực xoay ngoài còn tốt, không teo cơ rõ",
        "confirmatory_test": "Nghiệm pháp Neer / Hawkins-Kennedy / Cung đau Painful Arc 60-120 độ",
        "gold_standard": "Siêu âm khớp vai động lực học & Chụp MRI khớp vai",
        "web1_procedure_id": "sasd-bursa"
      },
      {
        "condition": "Rách chóp xoay hoàn toàn (Full-Thickness Rotator Cuff Tear)",
        "onset": "Đau dữ dội sau chấn thương hoặc đau mạn tính tăng dần, yếu tay rõ rệt",
        "aggravating": "Cố gắng chủ động nâng hoặc dạng cánh tay, đau nhiều về đêm",
        "key_differentiator": "Dấu hiệu rơi cánh tay (Drop arm sign), Dấu hiệu trễ xoay ngoài (Lag sign), teo cơ hố trên/dưới gai",
        "confirmatory_test": "Nghiệm pháp ER Lag sign / Gerber Lift-off / Drop Arm Test",
        "gold_standard": "Chụp MRI khớp vai 1.5 - 3.0 Tesla độ phân giải cao",
        "web1_procedure_id": "suprascapular-nerve"
      },
      {
        "condition": "Đông cứng khớp vai (Adhesive Capsulitis / Frozen Shoulder)",
        "onset": "Đau âm ỉ sâu toàn bộ khớp vai tăng dần rồi chuyển sang cứng khớp",
        "aggravating": "Mọi cử động của khớp vai, đặc biệt xoay ngoài và dạng",
        "key_differentiator": "Hạn chế tầm vận động cả CHỦ ĐỘNG và THỤ ĐỘNG theo mô hình bao khớp (Xoay ngoài > Dạng > Xoay trong)",
        "confirmatory_test": "Đo biên độ vận động thụ động (PROM): Xoay ngoài mất > 50% so với bên lành",
        "gold_standard": "Khám lâm sàng đối chiếu X-quang bình thường + Siêu âm thấy dày dây chằng quạ cánh tay CHL",
        "web1_procedure_id": "glenohumeral-posterior"
      },
      {
        "condition": "Viêm thoái hóa khớp cùng đòn (AC Joint Arthropathy)",
        "onset": "Đau khu trú tại đỉnh vai, sờ thấy phì đại gồ xương khớp cùng đòn",
        "aggravating": "Khép cánh tay ngang qua ngực (Cross-body), nằm nghiêng tì lên vai, ngủ gối đầu lên tay",
        "key_differentiator": "Nghiệm pháp Cross-body adduction đau chói tại khớp AC, ấn đau chói tại khe khớp AC",
        "confirmatory_test": "Nghiệm pháp Cross-body adduction test & Paxinos test",
        "gold_standard": "X-quang khớp cùng đòn tư thế Zanca & Siêu âm thấy tràn dịch phì đại khớp AC",
        "web1_procedure_id": "ac-joint"
      }
    ],
    "figures": [
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p442_img1.jpeg",
        "page": 442,
        "fig_number": "9.10",
        "caption_en": "Fig. 9.10: Critical vascular zone and full-thickness rupture of the supraspinatus tendon",
        "caption_vi": "📐 Sơ đồ giải phẫu: Vùng mạch máu nguy cơ & rách gân trên gai chóp xoay (Fig. 9.10)",
        "role_type": "redflag",
        "width": 1134,
        "height": 754
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p445_img1.jpeg",
        "page": 445,
        "fig_number": "9.12",
        "caption_en": "Fig. 9.12: Glenoid labral tear sites: Bankart and SLAP lesions",
        "caption_vi": "📐 Sơ đồ giải phẫu: Tổn thương sụn viền ổ chảo Bankart & SLAP khớp vai (Fig. 9.12)",
        "role_type": "redflag",
        "width": 1011,
        "height": 722
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p456_img1.jpeg",
        "page": 456,
        "fig_number": "9.24",
        "caption_en": "Fig. 9.24: Neer impingement test",
        "caption_vi": "🩺 Thao tác khám: Nghiệm pháp chèn ép dưới mỏm cùng vai Neer (Fig. 9.24)",
        "role_type": "exam",
        "width": 557,
        "height": 798
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p463_img1.jpeg",
        "page": 463,
        "fig_number": "9.35",
        "caption_en": "Fig. 9.35: Hawkins-Kennedy test",
        "caption_vi": "🩺 Thao tác khám: Nghiệm pháp xoay trong cưỡng bức Hawkins-Kennedy (Fig. 9.35)",
        "role_type": "exam",
        "width": 958,
        "height": 588
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p460_img1.jpeg",
        "page": 460,
        "fig_number": "9.31A",
        "caption_en": "Fig. 9.31A: External rotation lag sign",
        "caption_vi": "🩺 Thao tác khám: Dấu hiệu trễ xoay ngoài phát hiện rách gân cơ dưới gai (Fig. 9.31A)",
        "role_type": "exam",
        "width": 958,
        "height": 728
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p462_img1.jpeg",
        "page": 462,
        "fig_number": "9.33",
        "caption_en": "Fig. 9.33: Gerber's lift-off test",
        "caption_vi": "🩺 Thao tác khám: Nghiệm pháp nhấc rời lưng Gerber khám cơ dưới vai (Fig. 9.33)",
        "role_type": "exam",
        "width": 958,
        "height": 626
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p454_img1.jpeg",
        "page": 454,
        "fig_number": "9.21",
        "caption_en": "Fig. 9.21: Speed's test",
        "caption_vi": "🩺 Thao tác khám: Nghiệm pháp kháng gập vai Speed khám đầu dài gân nhị đầu (Fig. 9.21)",
        "role_type": "exam",
        "width": 958,
        "height": 781
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p454_img2.jpeg",
        "page": 454,
        "fig_number": "9.20",
        "caption_en": "Fig. 9.20: Cross-body adduction test",
        "caption_vi": "🩺 Thao tác khám: Nghiệm pháp khép ngang ngực khám khớp cùng đòn AC Joint (Fig. 9.20)",
        "role_type": "exam",
        "width": 958,
        "height": 628
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p464_img2.jpeg",
        "page": 464,
        "fig_number": "9.39",
        "caption_en": "Fig. 9.39: The scapula backward tipping test",
        "caption_vi": "🩺 Thao tác khám: Nghiệm pháp SBTT (Deepak Sebastian) đánh giá hạn chế xoay bả vai ra sau (Fig. 9.39)",
        "role_type": "exam",
        "width": 904,
        "height": 677
      }
    ],
    "stage_2_somatic_dysfunctions": [
      "Rối loạn nhịp vận động bả vai - cánh tay (Scapulohumeral Rhythm Dysynergia): Xương bả vai không xoay lên trên đủ 1:2 so với cánh tay khi giạng.",
      "Co rút bao khớp sau khớp vai (Posterior Capsule Tightness): Đẩy chỏm xương cánh tay trượt ra trước và lên trên khi nâng tay, gây xung đột dưới mỏm cùng.",
      "Xung đột cơ học khoang dưới mỏm cùng (Subacromial Impingement - Neer stage I-III): Hẹp khoang dưới mỏm cùng chèn ép gân trên gai và bao hoạt dịch SASD."
    ],
    "stage_3_guidemap_intervention": "Kỹ thuật giải phóng bao khớp sau và tập phục hồi vận động xương bả vai (Scapular stabilization); Tiêm khoang dưới mỏm cùng hoặc Tiêm nội khớp vai nong bao khớp dưới hướng dẫn siêu âm (Xem Web 1: Tiêm Khoang Dưới Mỏm Cùng, Tiêm Bao Gân Nhị Đầu, Tiêm Khớp Cùng Đòn).",
    "recommended_web1_procedures": [
      {
        "id": "sasd-bursa",
        "nameVi": "Tiêm bao hoạt dịch dưới mỏm cùng - dưới cơ delta (SASD Bursa)",
        "role": "Hội chứng xung đột dưới mỏm cùng (SAIS), viêm bao hoạt dịch dưới cơ delta"
      },
      {
        "id": "glenohumeral-posterior",
        "nameVi": "Tiêm khớp ổ chảo cánh tay lối sau (Posterior Glenohumeral)",
        "role": "Đông cứng khớp vai (Frozen Shoulder), thoái hóa khớp ổ chảo cánh tay"
      },
      {
        "id": "glenohumeral-anterior",
        "nameVi": "Tiêm khớp ổ chảo cánh tay tiếp cận lối trước",
        "role": "Tiếp cận thay thế khi bệnh nhân hạn chế xoay trong hoặc tổn thương bao khớp sau"
      },
      {
        "id": "biceps-tendon",
        "nameVi": "Tiêm bao gân đầu dài cơ nhị đầu cánh tay (LHBT Injection)",
        "role": "Viêm bao gân nhị đầu trong rãnh gian củ xương cánh tay"
      },
      {
        "id": "ac-joint",
        "nameVi": "Tiêm khớp cùng vai - đòn (Acromioclavicular Joint Injection)",
        "role": "Thoái hóa khớp cùng đòn, viêm khớp cùng đòn sau chấn thương va đập"
      },
      {
        "id": "suprascapular-nerve",
        "nameVi": "Phong bế thần kinh trên vai (Suprascapular Nerve Block)",
        "role": "Giảm đau toàn diện khớp vai trong rách chóp xoay không thể mổ, đông cứng khớp vai"
      },
      {
        "id": "calcific-tendinitis-barbotage",
        "nameVi": "Can thiệp vôi hóa gân chóp xoay - Chọc hút & rửa vôi (Barbotage)",
        "role": "Viêm gân vôi hóa cấp tính cơ trên gai/dưới gai gây đau vai dữ dội"
      },
      {
        "id": "prp-platelet-rich-plasma",
        "nameVi": "Liệu pháp Huyết tương giàu tiểu cầu (PRP) cơ xương khớp",
        "role": "Rách bán phần gân chóp xoay, thoái hóa gân mạn tính không đáp ứng corticoid"
      }
    ],
    "provocative_tests": [
      {
        "name": "Nghiệm pháp Chạm Neer (Neer Impingement Test)",
        "technique": "Bác sĩ đứng sau hoặc bên cạnh bệnh nhân, một tay ấn giữ cố định góc trên xương bả vai để ngăn chuyển động xoay bả vai. Tay kia cầm cẳng tay bệnh nhân ở tư thế xoay trong hoàn toàn (ngón cái chỉ xuống sàn) rồi đưa thẳng cánh tay gập về phía trước lên trên tối đa.",
        "significance": "Gây kẹp cơ học mấu động lớn xương cánh tay có gân cơ trên gai và túi thanh dịch dưới mỏm cùng vào mặt dưới mỏm cùng vai và dây chằng cùng quạ. Xuất hiện đau trong khoảng 70–120 độ là nghiệm pháp dương tính.",
        "sensitivity": "79–88%",
        "specificity": "41–58%",
        "accuracy": {
          "sn": "79–88%",
          "sp": "41–58%"
        },
        "clinical_role": "Độ nhạy cao, rất phù hợp sàng lọc loại trừ Hội chứng xung đột dưới mỏm cùng vai",
        "diagnostic_role": "Độ nhạy cao, rất phù hợp sàng lọc loại trừ Hội chứng xung đột dưới mỏm cùng vai",
        "figures": [
          {
            "file": "assets/deepak_images/ch09_shoulder_pain/p456_img1.jpeg",
            "page": 456,
            "fig_number": "9.24",
            "caption_en": "Fig. 9.24: Neer impingement test",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp chèn ép dưới mỏm cùng vai Neer (Fig. 9.24)",
            "role_type": "exam",
            "width": 557,
            "height": 798
          }
        ]
      },
      {
        "name": "Nghiệm pháp Hawkins-Kennedy (Hawkins-Kennedy Impingement Test)",
        "technique": "Bác sĩ nâng cánh tay bệnh nhân gập 90 độ về phía trước, gập khớp khuỷu 90 độ. Sau đó, một tay giữ ổn định khuỷu tay, tay kia ấn cẳng tay xoay trong tối đa một cách dứt khoát.",
        "significance": "Đẩy gân cơ trên gai và gân nhị đầu tì sát vào dây chằng cùng quạ và mỏm quạ. Đau chói mặt trước trên khớp vai khẳng định xung đột dưới mỏm cùng vai.",
        "sensitivity": "79–92%",
        "specificity": "44–59%",
        "accuracy": {
          "sn": "79–92%",
          "sp": "44–59%"
        },
        "clinical_role": "Độ nhạy rất cao, kết hợp cùng Neer và Speed tạo chùm khám xung đột chóp xoay kinh điển",
        "diagnostic_role": "Độ nhạy rất cao, kết hợp cùng Neer và Speed tạo chùm khám xung đột chóp xoay kinh điển",
        "figures": [
          {
            "file": "assets/deepak_images/ch09_shoulder_pain/p463_img1.jpeg",
            "page": 463,
            "fig_number": "9.35",
            "caption_en": "Fig. 9.35: Hawkins-Kennedy test",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp xoay trong cưỡng bức Hawkins-Kennedy (Fig. 9.35)",
            "role_type": "exam",
            "width": 958,
            "height": 588
          }
        ]
      },
      {
        "name": "Dấu hiệu Trễ Xoay Ngoài (External Rotation Lag Sign - Khám Gân Cơ Dưới Gai)",
        "technique": "Bác sĩ nâng cánh tay bệnh nhân gập 20 độ, khuỷu gập 90 độ, rồi thụ động xoay ngoài cánh tay đến gần biên độ tối đa (khoảng 5 độ trước mức tối đa). Yêu cầu bệnh nhân chủ động giữ nguyên tư thế đó khi bác sĩ buông tay khỏi cổ tay.",
        "significance": "Nếu bệnh nhân không thể giữ được vị trí và cẳng tay bị rơi xoay trong lùi lại (Lag sign dương tính), khẳng định có rách đứt hoặc liệt gân cơ dưới gai (Infraspinatus) và cơ tròn bé.",
        "sensitivity": "56–70%",
        "specificity": "98–100%",
        "accuracy": {
          "sn": "56–70%",
          "sp": "98–100%"
        },
        "clinical_role": "Độ đặc hiệu tuyệt đối 98–100%, dương tính là chỉ điểm chắc chắn rách hoàn toàn gân cơ dưới gai",
        "diagnostic_role": "Độ đặc hiệu tuyệt đối 98–100%, dương tính là chỉ điểm chắc chắn rách hoàn toàn gân cơ dưới gai",
        "figures": [
          {
            "file": "assets/deepak_images/ch09_shoulder_pain/p460_img1.jpeg",
            "page": 460,
            "fig_number": "9.31A",
            "caption_en": "Fig. 9.31A: External rotation lag sign",
            "caption_vi": "🩺 Thao tác khám: Dấu hiệu trễ xoay ngoài phát hiện rách gân cơ dưới gai (Fig. 9.31A)",
            "role_type": "exam",
            "width": 958,
            "height": 728
          }
        ]
      },
      {
        "name": "Nghiệm pháp Nhấc Rời Gerber (Gerber's Lift-off Test - Khám Gân Cơ Dưới Vai)",
        "technique": "Bệnh nhân đứng hoặc ngồi, đặt mu bàn tay áp sát vào vùng thắt lưng giữa (vùng gai L2–L5). Bác sĩ yêu cầu bệnh nhân chủ động nhấc rời mu bàn tay ra sau xa khỏi lưng.",
        "significance": "Đánh giá sự toàn vẹn của cơ dưới vai (Subscapularis). Nếu không thể nhấc tay rời khỏi lưng hoặc khi bác sĩ ấn nhẹ tay bệnh nhân bị sụp vào lưng, nghiệm pháp dương tính báo hiệu rách cơ dưới vai.",
        "sensitivity": "35–70%",
        "specificity": "98–100%",
        "accuracy": {
          "sn": "35–70%",
          "sp": "98–100%"
        },
        "clinical_role": "Độ đặc hiệu 98–100% chẩn đoán rách cơ dưới vai, chìa khóa phân biệt rách chóp xoay trước",
        "diagnostic_role": "Độ đặc hiệu 98–100% chẩn đoán rách cơ dưới vai, chìa khóa phân biệt rách chóp xoay trước",
        "figures": [
          {
            "file": "assets/deepak_images/ch09_shoulder_pain/p462_img1.jpeg",
            "page": 462,
            "fig_number": "9.33",
            "caption_en": "Fig. 9.33: Gerber's lift-off test",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp nhấc rời lưng Gerber khám cơ dưới vai (Fig. 9.33)",
            "role_type": "exam",
            "width": 958,
            "height": 626
          }
        ]
      },
      {
        "name": "Nghiệm pháp Speed (Speed's Test - Viêm Đầu Dài Gân Nhị Đầu & SLAP)",
        "technique": "Bệnh nhân duỗi thẳng khuỷu tay, ngửa hoàn toàn cẳng tay, gập khớp vai 90 độ về phía trước. Bác sĩ dùng một tay đè lên rãnh gân nhị đầu, tay kia ấn cẳng tay bệnh nhân xuống dưới trong khi bệnh nhân gắng sức kháng cự đẩy lên.",
        "significance": "Gây lực căng tối đa lên đầu dài gân cơ nhị đầu và điểm bám vào sụn viền trên ổ chảo. Đau nhói dọc theo rãnh nhị đầu mặt trước cánh tay xác nhận viêm gân nhị đầu hoặc rách sụn viền SLAP.",
        "sensitivity": "54–63%",
        "specificity": "67–81%",
        "accuracy": {
          "sn": "54–63%",
          "sp": "67–81%"
        },
        "clinical_role": "Chẩn đoán phân biệt đau mặt trước khớp vai giữa viêm gân nhị đầu và tổn thương chóp xoay",
        "diagnostic_role": "Chẩn đoán phân biệt đau mặt trước khớp vai giữa viêm gân nhị đầu và tổn thương chóp xoay",
        "figures": [
          {
            "file": "assets/deepak_images/ch09_shoulder_pain/p454_img1.jpeg",
            "page": 454,
            "fig_number": "9.21",
            "caption_en": "Fig. 9.21: Speed's test",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp kháng gập vai Speed khám đầu dài gân nhị đầu (Fig. 9.21)",
            "role_type": "exam",
            "width": 958,
            "height": 781
          }
        ]
      },
      {
        "name": "Nghiệm pháp Bắt Chéo Cánh Tay (Cross-Body Adduction Test - Khám Khớp Cùng Đòn)",
        "technique": "Bác sĩ nâng cánh tay bên đau gập 90 độ về phía trước, sau đó nhẹ nhàng nhưng dứt khoát khép cánh tay ngang qua trước ngực hướng về phía vai đối diện.",
        "significance": "Tạo lực ép nén trực tiếp lên diện khớp cùng vai - đòn (AC Joint). Đau nhói tại điểm gồ trên đỉnh khớp cùng đòn là dương tính, xác nhận viêm hoặc thoái hóa khớp cùng đòn.",
        "sensitivity": "77%",
        "specificity": "79%",
        "accuracy": {
          "sn": "77%",
          "sp": "79%"
        },
        "clinical_role": "Phân biệt đau đỉnh vai do thoái hóa khớp cùng đòn (AC joint) với xung đột dưới mỏm cùng",
        "diagnostic_role": "Phân biệt đau đỉnh vai do thoái hóa khớp cùng đòn (AC joint) với xung đột dưới mỏm cùng",
        "figures": [
          {
            "file": "assets/deepak_images/ch09_shoulder_pain/p454_img2.jpeg",
            "page": 454,
            "fig_number": "9.20",
            "caption_en": "Fig. 9.20: Cross-body adduction test",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp khép ngang ngực khám khớp cùng đòn AC Joint (Fig. 9.20)",
            "role_type": "exam",
            "width": 958,
            "height": 628
          }
        ]
      },
      {
        "name": "Nghiệm pháp Nghiêng Xương Bả Vai Ra Sau (Scapula Backward Tipping Test - SBTT)",
        "technique": "Nghiệm pháp độc quyền do chính GS. Deepak Sebastian nghiên cứu sáng chế (trang 451, 464). Bệnh nhân nằm sấp thả lỏng, đầu và cổ được nâng đỡ thẳng trục, hai lòng bàn tay để ở tư thế giải phẫu. Bác sĩ đứng bên cạnh, đặt một bàn tay lên góc dưới của xương bả vai (inferior angle), các ngón của bàn tay kia móc nhẹ nhàng dưới mỏm quạ (coracoid process). Thực hiện lực kéo nhẹ nhàng nâng mỏm quạ lên trên (hướng ra sau) để cảm nhận độ căng cứng và biên độ trượt. Cần lưu ý không móc ngón tay dưới xương đòn để tránh kéo căng quá mức khớp cùng - đòn (AC joint). So sánh đối chiếu hai bên vai.",
        "significance": "Phát hiện tình trạng xương bả vai bị nghiêng đổ ra trước (Forward tipping) do co rút dây chằng quạ - đòn (coracoclavicular ligaments) và cơ ngực bé (pectoralis minor). Đây là nguyên nhân cơ sinh học then chốt gây hẹp khoang dưới mỏm cùng vai dẫn đến hội chứng chèn ép chóp xoay (subacromial impingement) và chèn ép thần kinh trên vai / thần kinh nách.",
        "sensitivity": "Định tính (Qualitative)",
        "specificity": "Định tính (Qualitative)",
        "accuracy": {
          "sn": "Định tính (Qualitative)",
          "sp": "Định tính (Qualitative)"
        },
        "clinical_role": "Nghiệm pháp độc quyền của GS. Deepak Sebastian: Đánh giá cử động phân đoạn cơ sinh học và rối loạn xoay bả vai ra sau trong hội chứng chèn ép dưới mỏm cùng vai (Qualitative Motion Assessment)",
        "diagnostic_role": "Nghiệm pháp độc quyền của GS. Deepak Sebastian: Đánh giá cử động phân đoạn cơ sinh học và rối loạn xoay bả vai ra sau trong hội chứng chèn ép dưới mỏm cùng vai (Qualitative Motion Assessment)",
        "figures": [
          {
            "file": "assets/deepak_images/ch09_shoulder_pain/p464_img2.jpeg",
            "page": 464,
            "fig_number": "9.39",
            "caption_en": "Fig. 9.39: The scapula backward tipping test",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp SBTT (Deepak Sebastian) đánh giá hạn chế xoay bả vai ra sau (Fig. 9.39)",
            "role_type": "exam",
            "width": 904,
            "height": 677
          }
        ]
      }
    ],
    "differential_matrix": [
      {
        "condition": "Hội chứng xung đột dưới mỏm cùng (Subacromial Impingement - SAIS)",
        "onset": "Đau âm ỉ mặt trước ngoài vai, tăng khi dạng tay 60–120 độ (cung đau Painful arc)",
        "aggravating": "Nằm nghiêng đè lên vai, giơ tay cao qua đầu, đưa tay ra sau lưng",
        "key_differentiator": "Nghiệm pháp Neer và Hawkins-Kennedy dương tính, cơ lực xoay ngoài còn tốt, không teo cơ rõ",
        "confirmatory_test": "Nghiệm pháp Neer / Hawkins-Kennedy / Cung đau Painful Arc 60-120 độ",
        "gold_standard": "Siêu âm khớp vai động lực học & Chụp MRI khớp vai",
        "web1_procedure_id": "sasd-bursa"
      },
      {
        "condition": "Rách chóp xoay hoàn toàn (Full-Thickness Rotator Cuff Tear)",
        "onset": "Đau dữ dội sau chấn thương hoặc đau mạn tính tăng dần, yếu tay rõ rệt",
        "aggravating": "Cố gắng chủ động nâng hoặc dạng cánh tay, đau nhiều về đêm",
        "key_differentiator": "Dấu hiệu rơi cánh tay (Drop arm sign), Dấu hiệu trễ xoay ngoài (Lag sign), teo cơ hố trên/dưới gai",
        "confirmatory_test": "Nghiệm pháp ER Lag sign / Gerber Lift-off / Drop Arm Test",
        "gold_standard": "Chụp MRI khớp vai 1.5 - 3.0 Tesla độ phân giải cao",
        "web1_procedure_id": "suprascapular-nerve"
      },
      {
        "condition": "Đông cứng khớp vai (Adhesive Capsulitis / Frozen Shoulder)",
        "onset": "Đau âm ỉ sâu toàn bộ khớp vai tăng dần rồi chuyển sang cứng khớp",
        "aggravating": "Mọi cử động của khớp vai, đặc biệt xoay ngoài và dạng",
        "key_differentiator": "Hạn chế tầm vận động cả CHỦ ĐỘNG và THỤ ĐỘNG theo mô hình bao khớp (Xoay ngoài > Dạng > Xoay trong)",
        "confirmatory_test": "Đo biên độ vận động thụ động (PROM): Xoay ngoài mất > 50% so với bên lành",
        "gold_standard": "Khám lâm sàng đối chiếu X-quang bình thường + Siêu âm thấy dày dây chằng quạ cánh tay CHL",
        "web1_procedure_id": "glenohumeral-posterior"
      },
      {
        "condition": "Viêm thoái hóa khớp cùng đòn (AC Joint Arthropathy)",
        "onset": "Đau khu trú tại đỉnh vai, sờ thấy phì đại gồ xương khớp cùng đòn",
        "aggravating": "Khép cánh tay ngang qua ngực (Cross-body), nằm nghiêng tì lên vai, ngủ gối đầu lên tay",
        "key_differentiator": "Nghiệm pháp Cross-body adduction đau chói tại khớp AC, ấn đau chói tại khe khớp AC",
        "confirmatory_test": "Nghiệm pháp Cross-body adduction test & Paxinos test",
        "gold_standard": "X-quang khớp cùng đòn tư thế Zanca & Siêu âm thấy tràn dịch phì đại khớp AC",
        "web1_procedure_id": "ac-joint"
      }
    ]
  },
  {
    "id": "thoracic-pain",
    "chapter": 5,
    "region": "thoracic",
    "region_vi": "Ngực & Cột Sống Ngực",
    "icon": "🛡️",
    "title": "Thoracic Spine, Costovertebral & Chest Wall Pain",
    "title_vi": "🛡️ Đau Ngực, Cột Sống Ngực & Cờ Đỏ Tim Mạch - Phổi",
    "chief_complaint": "Phàn nàn chính: Đau nhói ngực khi hít sâu, đau tức thành ngực dọc theo cung liên sườn, đau lưng vùng giữa hai xương bả vai, đau tăng khi xoay vặn thân mình hoặc ho hắt hơi.",
    "author": "GS. Deepak Sebastian (Chương 5, pp. 188-217)",
    "summary": "Chẩn đoán phân biệt đau cột sống ngực và thành ngực: Rối loạn diện khớp sườn - sống và sườn - ngang, viêm sụn sườn (Hội chứng Tietze / Costochondritis), gãy xẹp đốt sống do loãng xương ở người cao tuổi, đau thần kinh liên sườn sau Zona. CỜ ĐỎ CẤP CỨU HÀNG ĐẦU: Bóc tách động mạch chủ ngực (đau xé rách ngực lưng), hội chứng vành cấp / nhồi máu cơ tim, thuyên tắc phổi (PE), tràn khí màng phổi tự phát, loét thủng dạ dày - tá tràng, viêm tụy cấp.",
    "stage_1_systemic_red_flags": [
      {
        "category": "Cờ Đỏ Bóc Tách Động Mạch Chủ Ngực (Thoracic Aortic Dissection)",
        "signs": "Cơn đau ngực - lưng dữ dội khởi phát đột ngột như xé rách (tearing/ripping pain) lan từ trước xương ức xuyên thẳng ra sau lưng giữa hai xương bả vai. Huyết áp hai tay chênh lệch > 20 mmHg, mất mạch ngoại vi.",
        "action": "CẤP CỨU HỒI SỨC TIM MẠCH TỐI KHẨN: Chụp CTA động mạch chủ ngực ngay lập tức. Nghiêm cấm mọi thao tác nắn bẻ cột sống lưng."
      },
      {
        "category": "Cờ Đỏ Thuyên Tắc Phổi & Tràn Khí Màng Phổi (Pulmonary Embolism / Pneumothorax)",
        "signs": "Đau ngực kiểu màng phổi (đau nhói tăng mạnh khi hít sâu hoặc ho), khó thở đột ngột, thở nhanh nông, nhịp tim nhanh, ho ra máu, tiền sử bất động kéo dài hoặc huyết khối tĩnh mạch sâu chi dưới (DVT).",
        "action": "Thở oxy, chụp CTA động mạch phổi (CTPA), đo D-dimer, chụp X-quang ngực thẳng."
      },
      {
        "category": "Cờ Đỏ Ung Thư Di Căn Cột Sống Ngực (Thoracic Spine Metastasis)",
        "signs": "Cột sống ngực là vị trí di căn xương phổ biến nhất (do mạng lưới tĩnh mạch không van Batson). Đau lưng liên tục cả ngày lẫn đêm, gõ đau chói tại mỏm gai đốt sống ngực, sụt cân, tiền sử K phổi/vú/tiền liệt tuyến.",
        "action": "Chụp MRI toàn bộ cột sống ngực có tiêm thuốc cản quang, xạ hình xương."
      },
      {
        "category": "Cờ Đỏ Chèn Ép Tủy Ngực (Thoracic Cord Compression)",
        "signs": "Tê bì mất cảm giác ngang mức khoanh tủy (Sensory level: ngang núm vú T4, ngang rốn T10), yếu liệt hai chi dưới tiến triển nhanh, đại tiểu tiện không tự chủ.",
        "action": "CẤP CỨU NGOẠI THẦN KINH: Phẫu thuật giải ép tủy ngực trong vòng 24-48 giờ để tránh liệt vĩnh viễn."
      }
    ],
    "red_flags": [
      {
        "category": "Cờ Đỏ U Đỉnh Phổi Pancoast & Chèn Ép Lỗ Ngực Trên (Thoracic Apex Compression)",
        "signs": "Đau âm ỉ dữ dội vùng ngực trên và cột sống lưng trên lan tỏa xuống bờ trong cẳng tay bàn tay (theo rễ T1, C8), sụt cân nhanh, ho ra máu hoặc tiền sử hút thuốc lá nặng. Kèm theo Hội chứng Horner cùng bên: sụp mi (Ptosis), co đồng tử (Miosis) và giảm tiết mồ hôi nửa mặt (Anhidrosis).",
        "action": "CẤP CỨU UNG BƯỚU & PHỔI: Chụp X-quang ngực thẳng hoặc CT Scanner lồng ngực có tiêm thuốc cản quang phát hiện khối u rãnh đỉnh phổi xâm lấn đám rối thần kinh và hạch sao. Chống chỉ định tiêm ngoài màng cứng hoặc nắn bẻ cột sống ngực.",
        "figures": [
          {
            "file": "assets/deepak_images/ch04_cervical_pain/p146_img1.png",
            "page": 146,
            "fig_number": "4.17",
            "caption_en": "Fig. 4.17: Thoracic apex compression: Pancoast tumor and thoracic outlet structures",
            "caption_vi": "📐 Sơ đồ giải phẫu: Vị trí chèn ép lối thoát lồng ngực TOS & u đỉnh phổi Pancoast (Fig. 4.17)",
            "role_type": "redflag",
            "width": 757,
            "height": 540
          }
        ]
      }
    ],
    "visceral_referrals": [
      {
        "source": "Bệnh Lý Túi Mật & Đường Mật (Cholecystitis & Cholelithiasis)",
        "pattern": "Đau quy chiếu lên góc dưới xương bả vai phải và vùng gian bả vai phải (do các nhánh thần kinh cảm giác T8-T9). Đau tăng sau bữa ăn nhiều dầu mỡ, dấu hiệu Murphy (+).",
        "differential": "Siêu âm ổ bụng tổng quát gan mật là chỉ định bắt buộc trước khi điều trị thoái hóa cột sống ngực bên phải.",
        "figures": []
      },
      {
        "source": "Bệnh Lý Tụy (Ung Thư Tụy & Viêm Tụy Cấp / Mạn)",
        "pattern": "Đau vùng thượng vị đâm xuyên thẳng ra sau lưng vùng khoang liên sườn T7-T9. Đặc điểm kinh điển: Đau tăng dữ dội khi nằm ngửa, giảm bớt khi ngồi cúi gập người ôm bụng.",
        "differential": "Xét nghiệm Amylase, Lipase máu; Chụp CT bụng có cản quang đánh giá nhu mô tụy.",
        "figures": []
      },
      {
        "source": "Bệnh Lý Thận & Niệu Quản (Renal & Ureteral Calculi)",
        "pattern": "Cơn đau quặn thận khởi phát từ góc sườn - sống (Costovertebral angle T10-L1) lan vòng ra trước bụng xuống vùng bẹn bìu, kèm đái máu.",
        "differential": "Rung thận (+), siêu âm hệ tiết niệu, tổng phân tích nước tiểu tìm hồng cầu vi thể.",
        "figures": []
      },
      {
        "source": "Bệnh Lý Dạ Dày & Thực Quản (Peptic Ulcer & GERD)",
        "pattern": "Đau nóng rát sau xương ức và giữa hai bả vai T5-T6, liên quan chu kỳ bữa ăn (đói đau trong loét tá tràng, no đau trong loét dạ dày).",
        "differential": "Nội soi thực quản dạ dày tá tràng.",
        "figures": []
      }
    ],
    "drug_induced": [
      "NSAID: Loét dạ dày thủng tạng rỗng gây đau lưng ngực cấp.",
      "Corticoid: Gãy lún đốt sống ngực do loãng xương (phổ biến nhất tại T7-T8 và T11-T12)."
    ],
    "examination_procedures": [
      {
        "name": "Khám Cử Động Xương Sườn 1 (Lindgren Test / Elevated First Rib Assessment)",
        "technique": "Bệnh nhân ngồi thẳng lưng thả lỏng cổ vai. Bác sĩ cho bệnh nhân xoay đầu tối đa sang bên đối diện, sau đó giữ nguyên góc xoay đó và nghiêng đầu nhẹ nhàng về phía bên đau (hướng tai về phía ngực cùng bên).",
        "significance": "Nếu biên độ nghiêng đầu bị cản trở hoặc đau nhói ở vùng nền cổ/hố trên đòn, nghiệm pháp dương tính báo hiệu xương sườn 1 bị co kéo treo cao bởi cơ bậc thang trước/giữa kẹt khớp sườn sống 1.",
        "sensitivity": "Định tính (Qualitative)",
        "specificity": "Định tính (Qualitative)",
        "accuracy": {
          "sn": "Định tính (Qualitative)",
          "sp": "Định tính (Qualitative)"
        },
        "clinical_role": "Đánh giá cử động phân đoạn cơ sinh học (Qualitative Motion Assessment)",
        "diagnostic_role": "Đánh giá cử động phân đoạn cơ sinh học (Qualitative Motion Assessment)",
        "figures": [
          {
            "file": "assets/deepak_images/ch04_cervical_pain/p182_img1.jpeg",
            "page": 182,
            "fig_number": "4.59",
            "caption_en": "Fig. 4.59: Cervical rotation lateral flexion test for an elevated first rib (Lindgren test)",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp Lindgren đánh giá kẹt xương sườn 1 nhô cao (Fig. 4.59)",
            "role_type": "exam",
            "width": 717,
            "height": 538
          }
        ]
      },
      {
        "name": "Khám Hạn Chế Mở Diện Khớp Ngực Trên (Upper Thoracic Opening Restriction Assessment)",
        "technique": "Bệnh nhân ngồi khoanh tay trước ngực. Bác sĩ đặt các đầu ngón tay lên mỏm gai và diện khớp đốt sống ngực T1–T4. Yêu cầu bệnh nhân cúi gập lưng và gập cổ từng đốt, bác sĩ đánh giá độ tách xa mở ra của các mỏm khớp.",
        "significance": "Phát hiện rối loạn cơ sinh học hệ vận động (Somatic Dysfunctions) FRS (Flexion-Rotation-Sidebending restriction): Diện khớp ngực trên bị kẹt không mở được khi cúi người gây đau lưng trên và đau lan tỏa kiểu T4 syndrome.",
        "sensitivity": "Định tính (Qualitative)",
        "specificity": "Định tính (Qualitative)",
        "accuracy": {
          "sn": "Định tính (Qualitative)",
          "sp": "Định tính (Qualitative)"
        },
        "clinical_role": "Đánh giá cử động phân đoạn cơ sinh học (Qualitative Motion Assessment)",
        "diagnostic_role": "Đánh giá cử động phân đoạn cơ sinh học (Qualitative Motion Assessment)",
        "figures": [
          {
            "file": "assets/deepak_images/ch05_thoracic_pain/p211_img1.jpeg",
            "page": 211,
            "fig_number": "5.3",
            "caption_en": "Fig. 5.3: Assessment of thoracic opening restriction",
            "caption_vi": "🩺 Thao tác khám: Đánh giá hạn chế mở diện khớp cột sống ngực trên (Fig. 5.3)",
            "role_type": "exam",
            "width": 1080,
            "height": 810
          }
        ]
      },
      {
        "name": "Khám Hạn Chế Đóng Diện Khớp Ngực Dưới (Lower Thoracic Closing Restriction Assessment)",
        "technique": "Bệnh nhân ngồi thẳng, hai tay ôm sau gáy. Bác sĩ luồn tay qua nách hỗ trợ vận động ưỡn, nghiêng và xoay thân mình ra sau trong khi ngón tay cái bên kia đặt tì vào mỏm khớp đốt sống T5–T12 bên đau.",
        "significance": "Đánh giá rối loạn cơ sinh học hệ vận động (Somatic Dysfunctions) ERS (Extension-Rotation-Sidebending): Khi ưỡn và xoay, diện khớp ngực không trượt đóng được hoặc bị đè kẹp gây đau chói tại chỗ kèm co cứng cơ cạnh sống ngực.",
        "sensitivity": "Định tính (Qualitative)",
        "specificity": "Định tính (Qualitative)",
        "accuracy": {
          "sn": "Định tính (Qualitative)",
          "sp": "Định tính (Qualitative)"
        },
        "clinical_role": "Đánh giá cử động phân đoạn cơ sinh học (Qualitative Motion Assessment)",
        "diagnostic_role": "Đánh giá cử động phân đoạn cơ sinh học (Qualitative Motion Assessment)",
        "figures": [
          {
            "file": "assets/deepak_images/ch05_thoracic_pain/p213_img1.jpeg",
            "page": 213,
            "fig_number": "5.6",
            "caption_en": "Fig. 5.6: Assessment of thoracic closing restriction",
            "caption_vi": "🩺 Thao tác khám: Đánh giá hạn chế đóng diện khớp cột sống ngực dưới (Fig. 5.6)",
            "role_type": "exam",
            "width": 1080,
            "height": 810
          }
        ]
      },
      {
        "name": "Nghiệm pháp Ấn Lò Xo Khớp Sườn - Sống (Costovertebral Joint Springing Test)",
        "technique": "Bệnh nhân nằm sấp thả lỏng. Bác sĩ đặt mô út bàn tay lên góc sau của xương sườn (cách gai sau đốt sống khoảng 3–4 cm) rồi dùng trọng lượng cơ thể tạo lực nhún lò xo vuông góc xuống dưới theo nhịp thở.",
        "significance": "Tác động trực tiếp lên khớp sườn sống và sườn ngang. Nếu xuất hiện đau chói tái hiện đúng cảm giác đau ngực lan vòng ra trước ngực của bệnh nhân, xác nhận viêm hoặc bán trật khớp sườn đốt sống.",
        "sensitivity": "Định tính (Qualitative)",
        "specificity": "Định tính (Qualitative)",
        "accuracy": {
          "sn": "Định tính (Qualitative)",
          "sp": "Định tính (Qualitative)"
        },
        "clinical_role": "Đánh giá cử động phân đoạn cơ sinh học (Qualitative Motion Assessment)",
        "diagnostic_role": "Đánh giá cử động phân đoạn cơ sinh học (Qualitative Motion Assessment)",
        "figures": [
          {
            "file": "assets/deepak_images/ch05_thoracic_pain/p215_img1.jpeg",
            "page": 215,
            "fig_number": "5.7A",
            "caption_en": "Fig. 5.7A: Costovertebral springing test",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp nhún lò xo khớp sườn - sống (Rib Springing) (Fig. 5.7A)",
            "role_type": "exam",
            "width": 1080,
            "height": 720
          }
        ]
      }
    ],
    "differential_table": [
      {
        "condition": "Hội chứng T4 (T4 Syndrome)",
        "onset": "Đau âm ỉ vùng liên bả vai, kèm dị cảm tê bì bàn tay kiểu găng tay hai bên",
        "aggravating": "Ngồi làm việc cúi gập lưng lâu, xoay người đột ngột",
        "key_differentiator": "Ấn đau chói mỏm gai T4 tái hiện dị cảm hai bàn tay, không có tổn thương rễ trên EMG",
        "confirmatory_test": "Khám vận động phân đoạn T4 (Thoracic Springing) tái hiện triệu chứng bàn tay",
        "gold_standard": "Thao tác nắn chỉnh giải ép hoặc Phong bế cạnh sống T4 (ESP Block) làm dứt điểm dị cảm",
        "web1_procedure_id": "esp-block"
      },
      {
        "condition": "Đau dây thần kinh liên sườn (Intercostal Neuralgia / Zona ngực)",
        "onset": "Đau nhói buốt rát bỏng chạy dọc theo khoang liên sườn từ sau lưng ra trước ngực",
        "aggravating": "Hít thở sâu, ho, hắt hơi, chạm nhẹ vào da vùng khoang liên sườn",
        "key_differentiator": "Đau theo đúng dải phân bố thần kinh liên sườn đơn độc, tăng cảm giác da (Allodynia)",
        "confirmatory_test": "Khám dấu hiệu ấn kẽ sườn và nghiệm pháp kéo căng rễ thần kinh liên sườn",
        "gold_standard": "Phong bế thần kinh gian sườn (Intercostal Nerve Block) dưới siêu âm giảm đau tức thì",
        "web1_procedure_id": "intercostal-nerve"
      },
      {
        "condition": "Hội chứng Tietze (Tietze Syndrome)",
        "onset": "Sưng nề nổi gồ rõ rệt và đau chói tại khớp sụn sườn số 2 hoặc số 3 trước ngực",
        "aggravating": "Ấn trực tiếp lên khớp ức sườn, ho mạnh, ưỡn ngực",
        "key_differentiator": "Có sưng nề gồ cứng thực thể tại chỗ (khác với Costochondritis không sưng)",
        "confirmatory_test": "Khám sờ thấy khối sưng nề nổi gồ tại sụn sườn 2-3 ấn đau chói",
        "gold_standard": "Siêu âm sụn sườn thấy dày màng sụn và tăng sinh mạch máu Doppler",
        "web1_procedure_id": "intercostal-nerve"
      },
      {
        "condition": "Hội chứng Kẹp Khoang Liên Sườn Trước (AICS - Deepak Sebastian)",
        "onset": "Đau nhói nhức vùng góc sườn trước dưới (sườn 8–10), cảm giác kẹt cứng thành ngực",
        "aggravating": "Gập người về trước và nghiêng sang bên đau (Closing movement)",
        "key_differentiator": "Nghiệm pháp Hooking maneuver dương tính (bác sĩ móc ngón tay dưới bờ sườn kéo ra trước gây đau/lục cục)",
        "confirmatory_test": "Nghiệm pháp Hooking Maneuver móc bờ sườn trước",
        "gold_standard": "Siêu âm động lực học thành ngực phát hiện di lệch đầu sườn tự do",
        "web1_procedure_id": "intercostal-nerve"
      }
    ],
    "figures": [
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p146_img1.png",
        "page": 146,
        "fig_number": "4.17",
        "caption_en": "Fig. 4.17: Thoracic apex compression: Pancoast tumor and thoracic outlet structures",
        "caption_vi": "📐 Sơ đồ giải phẫu: Vị trí chèn ép lối thoát lồng ngực TOS & u đỉnh phổi Pancoast (Fig. 4.17)",
        "role_type": "redflag",
        "width": 757,
        "height": 540
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p182_img1.jpeg",
        "page": 182,
        "fig_number": "4.59",
        "caption_en": "Fig. 4.59: Cervical rotation lateral flexion test for an elevated first rib (Lindgren test)",
        "caption_vi": "🩺 Thao tác khám: Nghiệm pháp Lindgren đánh giá kẹt xương sườn 1 nhô cao (Fig. 4.59)",
        "role_type": "exam",
        "width": 717,
        "height": 538
      },
      {
        "file": "assets/deepak_images/ch05_thoracic_pain/p211_img1.jpeg",
        "page": 211,
        "fig_number": "5.3",
        "caption_en": "Fig. 5.3: Assessment of thoracic opening restriction",
        "caption_vi": "🩺 Thao tác khám: Đánh giá hạn chế mở diện khớp cột sống ngực trên (Fig. 5.3)",
        "role_type": "exam",
        "width": 1080,
        "height": 810
      },
      {
        "file": "assets/deepak_images/ch05_thoracic_pain/p213_img1.jpeg",
        "page": 213,
        "fig_number": "5.6",
        "caption_en": "Fig. 5.6: Assessment of thoracic closing restriction",
        "caption_vi": "🩺 Thao tác khám: Đánh giá hạn chế đóng diện khớp cột sống ngực dưới (Fig. 5.6)",
        "role_type": "exam",
        "width": 1080,
        "height": 810
      },
      {
        "file": "assets/deepak_images/ch05_thoracic_pain/p215_img1.jpeg",
        "page": 215,
        "fig_number": "5.7A",
        "caption_en": "Fig. 5.7A: Costovertebral springing test",
        "caption_vi": "🩺 Thao tác khám: Nghiệm pháp nhún lò xo khớp sườn - sống (Rib Springing) (Fig. 5.7A)",
        "role_type": "exam",
        "width": 1080,
        "height": 720
      }
    ],
    "stage_2_somatic_dysfunctions": [
      "Hạn chế mở / đóng diện khớp sườn - sống (Costovertebral joint restriction): Khóa khớp sườn sống gây đau buốt thành ngực mỗi nhịp thở sâu.",
      "Rối loạn chuyển động xương sườn khi hít vào / thở ra (Inhalation / Exhalation Rib dysfunction): Xương sườn kẹt ở thì hít vào hoặc thì thở ra.",
      "Khóa diện khớp liên đốt ngực T1-T12 (Thoracic Facet Locking): Hạn chế xoay thân mình sang bên tổn thương."
    ],
    "stage_3_guidemap_intervention": "Kỹ thuật kéo giãn mở khoang liên sườn kết hợp tập mạnh cơ răng trước; Phong bế dây thần kinh liên sườn hoặc phong bế mặt phẳng cơ dựng gai (ESP Block) dưới hướng dẫn siêu âm (Xem Web 1: Quy trình ESP Block & Intercostal Nerve Block).",
    "recommended_web1_procedures": [
      {
        "id": "esp-block",
        "nameVi": "Phong bế mặt phẳng cơ dựng gai (ESP Block)",
        "role": "Giảm đau toàn diện đa phân đoạn cột sống ngực, đau sau phẫu thuật ngực, đau thần kinh liên sườn"
      },
      {
        "id": "intercostal-nerve",
        "nameVi": "Phong bế dây thần kinh gian sườn (Intercostal Nerve Block)",
        "role": "Đau dây thần kinh liên sườn sau Zona (PHN), gãy xương sườn, đau sụn sườn Tietze"
      }
    ],
    "provocative_tests": [
      {
        "name": "Khám Cử Động Xương Sườn 1 (Lindgren Test / Elevated First Rib Assessment)",
        "technique": "Bệnh nhân ngồi thẳng lưng thả lỏng cổ vai. Bác sĩ cho bệnh nhân xoay đầu tối đa sang bên đối diện, sau đó giữ nguyên góc xoay đó và nghiêng đầu nhẹ nhàng về phía bên đau (hướng tai về phía ngực cùng bên).",
        "significance": "Nếu biên độ nghiêng đầu bị cản trở hoặc đau nhói ở vùng nền cổ/hố trên đòn, nghiệm pháp dương tính báo hiệu xương sườn 1 bị co kéo treo cao bởi cơ bậc thang trước/giữa kẹt khớp sườn sống 1.",
        "sensitivity": "Định tính (Qualitative)",
        "specificity": "Định tính (Qualitative)",
        "accuracy": {
          "sn": "Định tính (Qualitative)",
          "sp": "Định tính (Qualitative)"
        },
        "clinical_role": "Đánh giá cử động phân đoạn cơ sinh học (Qualitative Motion Assessment)",
        "diagnostic_role": "Đánh giá cử động phân đoạn cơ sinh học (Qualitative Motion Assessment)",
        "figures": [
          {
            "file": "assets/deepak_images/ch04_cervical_pain/p182_img1.jpeg",
            "page": 182,
            "fig_number": "4.59",
            "caption_en": "Fig. 4.59: Cervical rotation lateral flexion test for an elevated first rib (Lindgren test)",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp Lindgren đánh giá kẹt xương sườn 1 nhô cao (Fig. 4.59)",
            "role_type": "exam",
            "width": 717,
            "height": 538
          }
        ]
      },
      {
        "name": "Khám Hạn Chế Mở Diện Khớp Ngực Trên (Upper Thoracic Opening Restriction Assessment)",
        "technique": "Bệnh nhân ngồi khoanh tay trước ngực. Bác sĩ đặt các đầu ngón tay lên mỏm gai và diện khớp đốt sống ngực T1–T4. Yêu cầu bệnh nhân cúi gập lưng và gập cổ từng đốt, bác sĩ đánh giá độ tách xa mở ra của các mỏm khớp.",
        "significance": "Phát hiện rối loạn cơ sinh học hệ vận động (Somatic Dysfunctions) FRS (Flexion-Rotation-Sidebending restriction): Diện khớp ngực trên bị kẹt không mở được khi cúi người gây đau lưng trên và đau lan tỏa kiểu T4 syndrome.",
        "sensitivity": "Định tính (Qualitative)",
        "specificity": "Định tính (Qualitative)",
        "accuracy": {
          "sn": "Định tính (Qualitative)",
          "sp": "Định tính (Qualitative)"
        },
        "clinical_role": "Đánh giá cử động phân đoạn cơ sinh học (Qualitative Motion Assessment)",
        "diagnostic_role": "Đánh giá cử động phân đoạn cơ sinh học (Qualitative Motion Assessment)",
        "figures": [
          {
            "file": "assets/deepak_images/ch05_thoracic_pain/p211_img1.jpeg",
            "page": 211,
            "fig_number": "5.3",
            "caption_en": "Fig. 5.3: Assessment of thoracic opening restriction",
            "caption_vi": "🩺 Thao tác khám: Đánh giá hạn chế mở diện khớp cột sống ngực trên (Fig. 5.3)",
            "role_type": "exam",
            "width": 1080,
            "height": 810
          }
        ]
      },
      {
        "name": "Khám Hạn Chế Đóng Diện Khớp Ngực Dưới (Lower Thoracic Closing Restriction Assessment)",
        "technique": "Bệnh nhân ngồi thẳng, hai tay ôm sau gáy. Bác sĩ luồn tay qua nách hỗ trợ vận động ưỡn, nghiêng và xoay thân mình ra sau trong khi ngón tay cái bên kia đặt tì vào mỏm khớp đốt sống T5–T12 bên đau.",
        "significance": "Đánh giá rối loạn cơ sinh học hệ vận động (Somatic Dysfunctions) ERS (Extension-Rotation-Sidebending): Khi ưỡn và xoay, diện khớp ngực không trượt đóng được hoặc bị đè kẹp gây đau chói tại chỗ kèm co cứng cơ cạnh sống ngực.",
        "sensitivity": "Định tính (Qualitative)",
        "specificity": "Định tính (Qualitative)",
        "accuracy": {
          "sn": "Định tính (Qualitative)",
          "sp": "Định tính (Qualitative)"
        },
        "clinical_role": "Đánh giá cử động phân đoạn cơ sinh học (Qualitative Motion Assessment)",
        "diagnostic_role": "Đánh giá cử động phân đoạn cơ sinh học (Qualitative Motion Assessment)",
        "figures": [
          {
            "file": "assets/deepak_images/ch05_thoracic_pain/p213_img1.jpeg",
            "page": 213,
            "fig_number": "5.6",
            "caption_en": "Fig. 5.6: Assessment of thoracic closing restriction",
            "caption_vi": "🩺 Thao tác khám: Đánh giá hạn chế đóng diện khớp cột sống ngực dưới (Fig. 5.6)",
            "role_type": "exam",
            "width": 1080,
            "height": 810
          }
        ]
      },
      {
        "name": "Nghiệm pháp Ấn Lò Xo Khớp Sườn - Sống (Costovertebral Joint Springing Test)",
        "technique": "Bệnh nhân nằm sấp thả lỏng. Bác sĩ đặt mô út bàn tay lên góc sau của xương sườn (cách gai sau đốt sống khoảng 3–4 cm) rồi dùng trọng lượng cơ thể tạo lực nhún lò xo vuông góc xuống dưới theo nhịp thở.",
        "significance": "Tác động trực tiếp lên khớp sườn sống và sườn ngang. Nếu xuất hiện đau chói tái hiện đúng cảm giác đau ngực lan vòng ra trước ngực của bệnh nhân, xác nhận viêm hoặc bán trật khớp sườn đốt sống.",
        "sensitivity": "Định tính (Qualitative)",
        "specificity": "Định tính (Qualitative)",
        "accuracy": {
          "sn": "Định tính (Qualitative)",
          "sp": "Định tính (Qualitative)"
        },
        "clinical_role": "Đánh giá cử động phân đoạn cơ sinh học (Qualitative Motion Assessment)",
        "diagnostic_role": "Đánh giá cử động phân đoạn cơ sinh học (Qualitative Motion Assessment)",
        "figures": [
          {
            "file": "assets/deepak_images/ch05_thoracic_pain/p215_img1.jpeg",
            "page": 215,
            "fig_number": "5.7A",
            "caption_en": "Fig. 5.7A: Costovertebral springing test",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp nhún lò xo khớp sườn - sống (Rib Springing) (Fig. 5.7A)",
            "role_type": "exam",
            "width": 1080,
            "height": 720
          }
        ]
      }
    ],
    "differential_matrix": [
      {
        "condition": "Hội chứng T4 (T4 Syndrome)",
        "onset": "Đau âm ỉ vùng liên bả vai, kèm dị cảm tê bì bàn tay kiểu găng tay hai bên",
        "aggravating": "Ngồi làm việc cúi gập lưng lâu, xoay người đột ngột",
        "key_differentiator": "Ấn đau chói mỏm gai T4 tái hiện dị cảm hai bàn tay, không có tổn thương rễ trên EMG",
        "confirmatory_test": "Khám vận động phân đoạn T4 (Thoracic Springing) tái hiện triệu chứng bàn tay",
        "gold_standard": "Thao tác nắn chỉnh giải ép hoặc Phong bế cạnh sống T4 (ESP Block) làm dứt điểm dị cảm",
        "web1_procedure_id": "esp-block"
      },
      {
        "condition": "Đau dây thần kinh liên sườn (Intercostal Neuralgia / Zona ngực)",
        "onset": "Đau nhói buốt rát bỏng chạy dọc theo khoang liên sườn từ sau lưng ra trước ngực",
        "aggravating": "Hít thở sâu, ho, hắt hơi, chạm nhẹ vào da vùng khoang liên sườn",
        "key_differentiator": "Đau theo đúng dải phân bố thần kinh liên sườn đơn độc, tăng cảm giác da (Allodynia)",
        "confirmatory_test": "Khám dấu hiệu ấn kẽ sườn và nghiệm pháp kéo căng rễ thần kinh liên sườn",
        "gold_standard": "Phong bế thần kinh gian sườn (Intercostal Nerve Block) dưới siêu âm giảm đau tức thì",
        "web1_procedure_id": "intercostal-nerve"
      },
      {
        "condition": "Hội chứng Tietze (Tietze Syndrome)",
        "onset": "Sưng nề nổi gồ rõ rệt và đau chói tại khớp sụn sườn số 2 hoặc số 3 trước ngực",
        "aggravating": "Ấn trực tiếp lên khớp ức sườn, ho mạnh, ưỡn ngực",
        "key_differentiator": "Có sưng nề gồ cứng thực thể tại chỗ (khác với Costochondritis không sưng)",
        "confirmatory_test": "Khám sờ thấy khối sưng nề nổi gồ tại sụn sườn 2-3 ấn đau chói",
        "gold_standard": "Siêu âm sụn sườn thấy dày màng sụn và tăng sinh mạch máu Doppler",
        "web1_procedure_id": "intercostal-nerve"
      },
      {
        "condition": "Hội chứng Kẹp Khoang Liên Sườn Trước (AICS - Deepak Sebastian)",
        "onset": "Đau nhói nhức vùng góc sườn trước dưới (sườn 8–10), cảm giác kẹt cứng thành ngực",
        "aggravating": "Gập người về trước và nghiêng sang bên đau (Closing movement)",
        "key_differentiator": "Nghiệm pháp Hooking maneuver dương tính (bác sĩ móc ngón tay dưới bờ sườn kéo ra trước gây đau/lục cục)",
        "confirmatory_test": "Nghiệm pháp Hooking Maneuver móc bờ sườn trước",
        "gold_standard": "Siêu âm động lực học thành ngực phát hiện di lệch đầu sườn tự do",
        "web1_procedure_id": "intercostal-nerve"
      }
    ]
  },
  {
    "id": "lumbopelvic-pain",
    "chapter": 6,
    "region": "lumbopelvic",
    "region_vi": "Thắt Lưng - Chậu",
    "icon": "🦴",
    "title": "Low Back, Lumbopelvic, Sacroiliac & Sciatic Pain",
    "title_vi": "🦴 Đau Lưng, Thắt Lưng - Chậu & Thần Kinh Tọa",
    "chief_complaint": "Phàn nàn chính: Đau thắt lưng cấp/mạn, đau lưng lan xuống mông và mặt sau đùi cẳng chân bàn chân (đau thần kinh tọa), đau khớp cùng chậu khi đứng lâu, đau cách hồi rễ thần kinh khi đi bộ phải ngồi xổm để đỡ đau.",
    "author": "GS. Deepak Sebastian (Chương 6, pp. 218-300)",
    "summary": "Sàng lọc phân biệt đau vùng thắt lưng - chậu: Phân định chính xác 4 nhóm nguyên nhân cơ học thường gặp nhất: Thoát vị đĩa đệm (Disc Herniation), Thoái hóa diện khớp thắt lưng (Facet Syndrome), Viêm/rối loạn chức năng khớp cùng chậu (SIJ Dysfunction) và Hẹp ống sống thắt lưng (Lumbar Spinal Stenosis). Rà soát khẩn cấp Cờ đỏ Hội chứng chùm đuôi ngựa (Cauda Equina Syndrome), Phình bóc tách động mạch chủ bụng (AAA), Áp xe ngoài màng cứng cột sống, Ung thư di căn xương.",
    "stage_1_systemic_red_flags": [
      {
        "category": "Cờ Đỏ Hội Chứng Chùm Đuôi Ngựa (Cauda Equina Syndrome - CES)",
        "signs": "Bí tiểu cấp hoặc tiểu không tự chủ (tiểu tràn), mất cảm giác vùng yên ngựa (Saddle anesthesia: tê bì vùng bẹn, đáy chậu, quanh hậu môn), giảm trương lực cơ thắt hậu môn, yếu liệt vận động hai bàn chân (bàn chân rớt / Foot drop).",
        "action": "CẤP CỨU NGOẠI THẦN KINH TỐI KHẨN: Chụp MRI cột sống thắt lưng khẩn cấp. Phải phẫu thuật giải ép TRONG VÒNG 48 GIỜ ĐẦU để tránh tàn phế đại tiểu tiện và liệt vĩnh viễn!"
      },
      {
        "category": "Cờ Đỏ Phình Động Mạch Chủ Bụng (Abdominal Aortic Aneurysm - AAA)",
        "signs": "Đau âm ỉ hoặc quặn thắt vùng thắt lưng bụng không đổi theo tư thế, sờ thấy khối u đập nảy theo nhịp tim ở vùng bụng trên rốn, mạch đùi hai bên yếu hoặc bất đối xứng, tiền sử tăng huyết áp/hút thuốc ở nam giới > 60 tuổi.",
        "action": "TUYỆT ĐỐI KHÔNG NẮN BẺ LƯNG! Siêu âm Doppler mạch bụng hoặc chụp CTA bụng khẩn cấp. Vỡ AAA có tỷ lệ tử vong > 80%."
      },
      {
        "category": "Cờ Đỏ Nhiễm Trùng Cột Sống (Spinal Infection / Spondylodiscitis / Epidural Abscess)",
        "signs": "Sốt, rét run, đau thắt lưng dữ dội tăng dần, gõ đau chói tại gai sau đốt sống, không giảm khi nằm nghỉ. Tiền sử đái tháo đường, tiêm chích ma túy, chạy thận nhân tạo, hoặc vừa can thiệp thủ thuật xâm lấn.",
        "action": "Chụp MRI thắt lưng có cản quang, cấy máu, định lượng ESR và CRP."
      },
      {
        "category": "Cờ Đỏ Ung Thư Di Căn Cột Sống (Metastatic Spinal Disease)",
        "signs": "Người > 50 tuổi, đau lưng liên tục dữ dội về đêm đánh thức giấc ngủ, sụt cân không rõ nguyên nhân, tiền sử ung thư (PB KTL: Tiền liệt tuyến, Vú, Thận, Tuyến giáp, Phổi).",
        "action": "Chụp X-quang, MRI cột sống, xét nghiệm PSA, điện di protein huyết thanh."
      }
    ],
    "red_flags": [
      {
        "category": "Cờ Đỏ Tiếng Thổi Mạch Máu Phình Động Mạch Chủ Bụng (Abdominal Aortic Aneurysm - AAA)",
        "signs": "Đau thắt lưng dữ dội sâu trong bụng lan xuống mông hoặc hai đùi ở người lớn tuổi (> 60), có tiền sử tăng huyết áp, hút thuốc lá. Sờ thấy khối đập theo nhịp tim ở vùng trên rốn, nghe thấy tiếng thổi tâm thu mạch máu (Vascular bruits) tại động mạch chủ bụng hoặc động mạch chậu.",
        "action": "CẤP CỨU TIM MẠCH KHẨN CẤP: Chuyển ngay đến trung tâm Ngoại Lồng ngực - Mạch máu. Tuyệt đối không ấn mạnh bụng hoặc nắn bẻ cột sống thắt lưng. Chỉ định siêu âm Doppler mạch máu bụng và chụp CT mạch máu (CTA).",
        "figures": [
          {
            "file": "assets/deepak_images/ch06_lumbopelvic_pain/p231_img1.jpeg",
            "page": 231,
            "fig_number": "6.4",
            "caption_en": "Fig. 6.4: Sites for auscultation of abdominal vascular bruits",
            "caption_vi": "🩺 Vị trí thăm khám: Các điểm nghe tiếng thổi mạch máu trong phình ĐM chủ bụng (AAA) (Fig. 6.4)",
            "role_type": "redflag",
            "width": 1377,
            "height": 903
          }
        ]
      },
      {
        "category": "Cờ Đỏ Tiêu Gai Eo Đốt Sống L5 & Trượt Đốt Sống (Spondylolysis / Spondylolisthesis)",
        "signs": "Đau thắt lưng tăng dữ dội khi ưỡn lưng ra sau hoặc xoay thân mình ở vận động viên trẻ hoặc người lao động nặng. Dấu hiệu bậc thang (Step-off sign) khi sờ dọc các mỏm gai thắt lưng, co cứng gân kheo hai bên.",
        "action": "HẠN CHẾ VẬN ĐỘNG CỘT SỐNG & ƯỠN LƯNG: Chụp X-quang thắt lưng chếch 3/4 tìm dấu hiệu gãy cổ chó Scotty ('Scotty dog collar fracture'), chụp CT/MRI cột sống thắt lưng đánh giá độ trượt Meyerding.",
        "figures": [
          {
            "file": "assets/deepak_images/ch06_lumbopelvic_pain/p236_img1.jpeg",
            "page": 236,
            "fig_number": "6.5",
            "caption_en": "Fig. 6.5: Spondylolysis: Defect in the pars interarticularis of L5",
            "caption_vi": "📐 Sơ đồ giải phẫu / cơ học: Tiêu eo đốt sống L5 & trượt đốt sống thắt lưng (Fig. 6.5)",
            "role_type": "redflag",
            "width": 527,
            "height": 788
          }
        ]
      },
      {
        "category": "Cờ Đỏ Thoát Vị Đĩa Đệm Lớn Kẹt Rễ L2-L3 / Nguy Cơ Hội Chứng Chùm Đuôi Ngựa",
        "signs": "Khối thoát vị đĩa đệm khổng lồ rách bao xơ di trú chèn ép bao màng cứng và rễ thần kinh. Tê bì vùng yên ngựa (quanh hậu môn sinh dục), bí tiểu hoặc tiểu không tự chủ, mất trương lực cơ thắt hậu môn, liệt vận động bàn chân (bàn chân rũ - Drop foot).",
        "action": "CẤP CỨU NGOẠI THẦN KINH KHẨN CẤP TRONG VÒNG 48 GIỜ: Chụp MRI cột sống thắt lưng khẩn, phẫu thuật giải ép màng cứng để tránh di chứng mất chức năng cơ vòng vĩnh viễn.",
        "figures": [
          {
            "file": "assets/deepak_images/ch06_lumbopelvic_pain/p258_img1.jpeg",
            "page": 258,
            "fig_number": "6.7",
            "caption_en": "Fig. 6.7: Lumbar disc herniation with nerve root entrapment",
            "caption_vi": "📐 Sơ đồ giải phẫu: Thoát vị đĩa đệm L2-L3 chèn ép bao màng cứng & rễ thần kinh (Fig. 6.7)",
            "role_type": "redflag",
            "width": 676,
            "height": 993
          }
        ]
      }
    ],
    "visceral_referrals": [
      {
        "source": "Sỏi Thận & Sỏi Niệu Quản (Nephrolithiasis)",
        "pattern": "Cơn đau quặn thận khởi phát từ góc sườn cột sống L1-L2 lan ra trước bụng xuống hố chậu và bẹn bìu/môi lớn, đau từng cơn dữ dội làm bệnh nhân lăn lộn.",
        "differential": "Siêu âm thận tiết niệu, xét nghiệm nước tiểu tìm hồng cầu vi thể.",
        "figures": []
      },
      {
        "source": "Bệnh Lý Phụ Khoa (Lạc Nội Mạc Tử Cung, U Xoắn Buồng Trứng, Thai Ngoài Tử Cung)",
        "pattern": "Đau vùng thắt lưng thấp và khung chậu liên quan chu kỳ kinh nguyệt, đau sâu khi giao hợp (Dyspareunia), trễ kinh kèm tụt huyết áp.",
        "differential": "Siêu âm đầu dò âm đạo, xét nghiệm Beta-hCG.",
        "figures": []
      },
      {
        "source": "Bệnh Tuyến Tiền Liệt (Prostatitis & Prostate Cancer)",
        "pattern": "Đau vùng xương cùng cụt và thắt lưng thấp kèm tiểu khó, tiểu ngắt quãng, tiểu đêm nhiều lần.",
        "differential": "Thăm trực tràng khám tuyến tiền liệt (DRE), xét nghiệm PSA toàn phần/tự do.",
        "figures": []
      },
      {
        "source": "Bệnh Lý Đại Tràng (Viêm Túi Thừa & Ung Thư Trực Tràng)",
        "pattern": "Đau thắt lưng chậu kèm thay đổi thói quen đại tiện (táo bón xen kẽ ỉa chảy), phân dẹt, đại tiện ra máu.",
        "differential": "Nội soi toàn bộ đại trực tràng.",
        "figures": []
      }
    ],
    "drug_induced": [
      "Corticosteroid: Tiêu xương chỏm xương đùi, loãng xương gãy xẹp đốt sống thắt lưng.",
      "Statin: Tiêu cơ vân khối cơ dựng gai thắt lưng và cơ thắt lưng chậu."
    ],
    "examination_procedures": [
      {
        "name": "Nghiệm pháp Căng Màng Cứng Slump Test (Tư Thế Kéo Căng Toàn Bộ Trục Thần Kinh)",
        "technique": "Bệnh nhân ngồi sát mép bàn khám. Bác sĩ hướng dẫn: (1) Thả lỏng gù toàn bộ lưng và ngực, (2) Cúi đầu gập cằm sát ngực, (3) Bác sĩ tì tay ấn nhẹ lên đỉnh đầu, (4) Yêu cầu bệnh nhân duỗi thẳng chân bên đau và gập mu bàn chân tối đa.",
        "significance": "Kéo căng toàn diện màng cứng thần kinh tọa và rễ thần kinh thắt lưng qua đĩa đệm bị thoát vị. Đau nhói dọc từ lưng lan xuống mông, đùi và cẳng chân báo hiệu chèn ép rễ thần kinh tọa cơ học.",
        "sensitivity": "84–91%",
        "specificity": "83%",
        "accuracy": {
          "sn": "84–91%",
          "sp": "83%"
        },
        "clinical_role": "Độ nhạy vượt trội so với SLR kinh điển, tiêu chuẩn sàng lọc số 1 cho bệnh lý rễ thắt lưng",
        "diagnostic_role": "Độ nhạy vượt trội so với SLR kinh điển, tiêu chuẩn sàng lọc số 1 cho bệnh lý rễ thắt lưng",
        "figures": [
          {
            "file": "assets/deepak_images/ch06_lumbopelvic_pain/p288_img2.jpeg",
            "page": 288,
            "fig_number": "6.28",
            "caption_en": "Fig. 6.28: Slump test position",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp căng màng cứng & rễ thần kinh tọa Slump Test (Fig. 6.28)",
            "role_type": "exam",
            "width": 1080,
            "height": 810
          }
        ]
      },
      {
        "name": "Phân Biệt Cấu Trúc Nghiệm Pháp Slump (Cervical Release Differentiation)",
        "technique": "Khi bệnh nhân đang ở tư thế Slump tối đa và đau chân xuất hiện, bác sĩ giữ nguyên vị trí chân và yêu cầu bệnh nhân nhẹ nhàng ngửa cổ nhìn thẳng lên trần nhà (thả lỏng màng cứng vùng cổ).",
        "significance": "Nếu triệu chứng đau ở chân giảm rõ rệt hoặc biến mất khi ngửa cổ, xác nhận 100% triệu chứng đau chân là do căng cơ học của hệ thống thần kinh màng cứng chứ không phải do co thắt gân kheo.",
        "sensitivity": "84%",
        "specificity": "95–100%",
        "accuracy": {
          "sn": "84%",
          "sp": "95–100%"
        },
        "clinical_role": "Độ đặc hiệu tuyệt đối xác nhận tổn thương thần kinh màng cứng thắt lưng",
        "diagnostic_role": "Độ đặc hiệu tuyệt đối xác nhận tổn thương thần kinh màng cứng thắt lưng",
        "figures": [
          {
            "file": "assets/deepak_images/ch06_lumbopelvic_pain/p289_img1.jpeg",
            "page": 289,
            "fig_number": "6.29",
            "caption_en": "Fig. 6.29: Slump test structural differentiation: Release of cervical flexion",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp phân biệt cấu trúc Slump qua thả lỏng cổ (Cervical Release) (Fig. 6.29)",
            "role_type": "exam",
            "width": 1080,
            "height": 810
          }
        ]
      },
      {
        "name": "Nghiệm pháp Căng Thần Kinh Đùi (Femoral Nerve Tension Test / Prone Knee Bend)",
        "technique": "Bệnh nhân nằm sấp (hoặc nằm nghiêng). Bác sĩ cố định khung chậu bên đau, một tay giữ đùi và tay kia gập khớp gối tối đa hướng gót chân vào mông, sau đó duỗi nhẹ khớp háng ra sau.",
        "significance": "Kéo căng thần kinh đùi và các rễ thần kinh thắt lưng cao L2, L3, L4. Tái hiện đau nhói mặt trước đùi khẳng định bệnh lý rễ L2–L4 hoặc viêm tổn thương thần kinh đùi.",
        "sensitivity": "50–84%",
        "specificity": "88–100%",
        "accuracy": {
          "sn": "50–84%",
          "sp": "88–100%"
        },
        "clinical_role": "Khám đặc hiệu cho thoát vị đĩa đệm thắt lưng cao (L2-L3, L3-L4), bổ khuyết cho Slump test",
        "diagnostic_role": "Khám đặc hiệu cho thoát vị đĩa đệm thắt lưng cao (L2-L3, L3-L4), bổ khuyết cho Slump test",
        "figures": [
          {
            "file": "assets/deepak_images/ch06_lumbopelvic_pain/p290_img1.jpeg",
            "page": 290,
            "fig_number": "6.30",
            "caption_en": "Fig. 6.30: Femoral nerve tension test in prone position",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp kéo căng thần kinh đùi rễ L2-L4 (Prone Knee Bend) (Fig. 6.30)",
            "role_type": "exam",
            "width": 1080,
            "height": 834
          }
        ]
      },
      {
        "name": "Nghiệm pháp Đẩy Đùi Khớp Cùng Chậu (Thigh Thrust Test / P4 Test - Cụm Laslett)",
        "technique": "Bệnh nhân nằm ngửa. Bác sĩ gập khớp háng bên đau 90 độ, đặt một tay luồn dưới xương cùng để cố định. Tay kia ôm lấy gối bệnh nhân và dồn một lực đẩy mạnh dọc trục thân xương đùi xuống dưới giường khám.",
        "significance": "Tạo lực trượt cắt dọc (Shear stress) trực tiếp lên khớp cùng chậu cùng bên. Đau nhói tại vùng rãnh khớp cùng chậu là nghiệm pháp dương tính.",
        "sensitivity": "88%",
        "specificity": "69%",
        "accuracy": {
          "sn": "88%",
          "sp": "69%"
        },
        "clinical_role": "Nghiệm pháp có độ nhạy cao nhất trong cụm Laslett chẩn đoán đau khớp cùng chậu (SIJ)",
        "diagnostic_role": "Nghiệm pháp có độ nhạy cao nhất trong cụm Laslett chẩn đoán đau khớp cùng chậu (SIJ)",
        "figures": [
          {
            "file": "assets/deepak_images/ch06_lumbopelvic_pain/p294_img2.jpeg",
            "page": 294,
            "fig_number": "6.32D",
            "caption_en": "Fig. 6.32D: Sacroiliac joint thigh thrust test",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp đẩy dọc xương đùi khớp cùng chậu (Thigh Thrust / P4) (Fig. 6.32D)",
            "role_type": "exam",
            "width": 1080,
            "height": 810
          }
        ]
      },
      {
        "name": "Nghiệm pháp Mất Vững Phân Đoạn Lưng (Prone Instability Test)",
        "technique": "Bệnh nhân nằm sấp, thân mình trên bàn khám, hai chân chạm sàn thả lỏng. Bác sĩ ấn lực xuống từng mỏm gai thắt lưng tìm điểm đau chói. Sau đó yêu cầu bệnh nhân nâng hai chân khỏi sàn và bác sĩ ấn lại cùng một lực vào điểm đó.",
        "significance": "Nếu cơn đau biến mất hoặc giảm rõ rệt khi hai chân được nâng lên (nhờ sự co kích hoạt các cơ ổn định sâu đa đầu Multifidus), nghiệm pháp dương tính.",
        "sensitivity": "72%",
        "specificity": "71%",
        "accuracy": {
          "sn": "72%",
          "sp": "71%"
        },
        "clinical_role": "Tiêu chuẩn chẩn đoán mất vững phân đoạn cột sống thắt lưng, chỉ định bài tập kiểm soát vận động lõi",
        "diagnostic_role": "Tiêu chuẩn chẩn đoán mất vững phân đoạn cột sống thắt lưng, chỉ định bài tập kiểm soát vận động lõi",
        "figures": [
          {
            "file": "assets/deepak_images/ch06_lumbopelvic_pain/p295_img1.jpeg",
            "page": 295,
            "fig_number": "6.33A",
            "caption_en": "Fig. 6.33A: Prone instability test",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp mất vững phân đoạn cột sống thắt lưng (Prone Instability) (Fig. 6.33A)",
            "role_type": "exam",
            "width": 621,
            "height": 900
          }
        ]
      }
    ],
    "differential_table": [
      {
        "condition": "Thoát vị đĩa đệm chèn ép rễ (Lumbar Radiculopathy)",
        "onset": "Đau thắt lưng lan xuống mông, mặt sau/ngoài đùi, cẳng chân và bàn chân",
        "aggravating": "Cúi người về trước, ngồi lâu, ho, hắt hơi, rặn đi cầu",
        "key_differentiator": "Slump test dương tính, giảm cảm giác khoanh da L4/L5/S1, giảm phản xạ gân gót/bánh chè",
        "confirmatory_test": "Nghiệm pháp Slump Test & Phân biệt cấu trúc Cervical Release",
        "gold_standard": "Chụp MRI Cột sống thắt lưng độ phân giải cao & Đo dẫn truyền thần kinh EMG",
        "web1_procedure_id": "caudal-epidural"
      },
      {
        "condition": "Hẹp ống sống thắt lưng (Lumbar Spinal Stenosis)",
        "onset": "Đau mỏi, tê bì, nặng hai chân xuất hiện khi đi bộ một đoạn (Đau cách hồi thần kinh)",
        "aggravating": "Đi bộ đường dài, đứng thẳng lưng hoặc ưỡn lưng ra sau",
        "key_differentiator": "Dấu hiệu xe đẩy hàng (Shopping cart sign): Cúi gập lưng về trước hoặc ngồi xổm làm dứt điểm triệu chứng",
        "confirmatory_test": "Khám dáng đi khoảng cách đi bộ & Nghiệm pháp Ưỡn lưng duy trì (Extension-load test)",
        "gold_standard": "Chụp MRI Cột sống thắt lưng đo diện tích mặt cắt ngang ống sống (< 100 mm2)",
        "web1_procedure_id": "caudal-epidural"
      },
      {
        "condition": "Hội chứng diện khớp thắt lưng (Lumbar Facet Syndrome)",
        "onset": "Đau thắt lưng sâu, lan xuống mông và mặt sau đùi nhưng KHÔNG vượt qua khớp gối",
        "aggravating": "Ưỡn lưng ra sau kết hợp xoay cùng bên (Kemp test), đứng lâu tại chỗ",
        "key_differentiator": "Ấn đau chói cạnh cột sống thắt lưng (cách đường giữa 2-3 cm), không có dấu hiệu chèn ép rễ thần kinh",
        "confirmatory_test": "Nghiệm pháp Kemp test (Ưỡn xoay cột sống thắt lưng)",
        "gold_standard": "Phong bế chẩn đoán nhánh trong (Lumbar Medial Branch Block) giảm đau >= 80%",
        "web1_procedure_id": "lumbar-medial-branch"
      },
      {
        "condition": "Đau khớp cùng chậu (Sacroiliac Joint Dysfunction - SIJD)",
        "onset": "Đau vùng mông sâu, ngay dưới gai chậu sau trên (vùng Fortin finger area)",
        "aggravating": "Chuyển tư thế từ ngồi sang đứng, bước lên cầu thang, đứng dồn trọng lượng một chân",
        "key_differentiator": "Dương tính >= 3/5 nghiệm pháp trong cụm Laslett (Thigh thrust, Distraction, Compression, Sacral thrust, Gaenslen)",
        "confirmatory_test": "Cụm nghiệm pháp Laslett SIJ Cluster (Thigh thrust, Distraction, Sacral thrust)",
        "gold_standard": "Tiêm phong bế nội khớp cùng chậu (SIJ Injection) dưới hướng dẫn siêu âm/C-arm",
        "web1_procedure_id": "sacroiliac-joint"
      },
      {
        "condition": "Hội chứng cơ hình lê (Piriformis Syndrome)",
        "onset": "Đau buốt vùng mông sâu, lan theo đường đi của dây thần kinh tọa xuống sau đùi",
        "aggravating": "Ngồi ghế cứng lâu (ví dụ để ví dày ở túi quần sau), bước sải chân dài",
        "key_differentiator": "Ấn đau chói tại điểm giữa gai chậu sau trên và mấu chuyển lớn, nghiệm pháp FAIR (Flexion-Adduction-Internal Rotation) đau nhói",
        "confirmatory_test": "Nghiệm pháp FAIR test / Beatts test / Freiberg test",
        "gold_standard": "Siêu âm cơ hình lê phì đại chèn ép thần kinh tọa & Tiêm phong bế cơ hình lê dưới siêu âm",
        "web1_procedure_id": "piriformis-muscle"
      }
    ],
    "figures": [
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p231_img1.jpeg",
        "page": 231,
        "fig_number": "6.4",
        "caption_en": "Fig. 6.4: Sites for auscultation of abdominal vascular bruits",
        "caption_vi": "🩺 Vị trí thăm khám: Các điểm nghe tiếng thổi mạch máu trong phình ĐM chủ bụng (AAA) (Fig. 6.4)",
        "role_type": "redflag",
        "width": 1377,
        "height": 903
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p236_img1.jpeg",
        "page": 236,
        "fig_number": "6.5",
        "caption_en": "Fig. 6.5: Spondylolysis: Defect in the pars interarticularis of L5",
        "caption_vi": "📐 Sơ đồ giải phẫu / cơ học: Tiêu eo đốt sống L5 & trượt đốt sống thắt lưng (Fig. 6.5)",
        "role_type": "redflag",
        "width": 527,
        "height": 788
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p258_img1.jpeg",
        "page": 258,
        "fig_number": "6.7",
        "caption_en": "Fig. 6.7: Lumbar disc herniation with nerve root entrapment",
        "caption_vi": "📐 Sơ đồ giải phẫu: Thoát vị đĩa đệm L2-L3 chèn ép bao màng cứng & rễ thần kinh (Fig. 6.7)",
        "role_type": "redflag",
        "width": 676,
        "height": 993
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p288_img2.jpeg",
        "page": 288,
        "fig_number": "6.28",
        "caption_en": "Fig. 6.28: Slump test position",
        "caption_vi": "🩺 Thao tác khám: Nghiệm pháp căng màng cứng & rễ thần kinh tọa Slump Test (Fig. 6.28)",
        "role_type": "exam",
        "width": 1080,
        "height": 810
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p289_img1.jpeg",
        "page": 289,
        "fig_number": "6.29",
        "caption_en": "Fig. 6.29: Slump test structural differentiation: Release of cervical flexion",
        "caption_vi": "🩺 Thao tác khám: Nghiệm pháp phân biệt cấu trúc Slump qua thả lỏng cổ (Cervical Release) (Fig. 6.29)",
        "role_type": "exam",
        "width": 1080,
        "height": 810
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p290_img1.jpeg",
        "page": 290,
        "fig_number": "6.30",
        "caption_en": "Fig. 6.30: Femoral nerve tension test in prone position",
        "caption_vi": "🩺 Thao tác khám: Nghiệm pháp kéo căng thần kinh đùi rễ L2-L4 (Prone Knee Bend) (Fig. 6.30)",
        "role_type": "exam",
        "width": 1080,
        "height": 834
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p294_img2.jpeg",
        "page": 294,
        "fig_number": "6.32D",
        "caption_en": "Fig. 6.32D: Sacroiliac joint thigh thrust test",
        "caption_vi": "🩺 Thao tác khám: Nghiệm pháp đẩy dọc xương đùi khớp cùng chậu (Thigh Thrust / P4) (Fig. 6.32D)",
        "role_type": "exam",
        "width": 1080,
        "height": 810
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p295_img1.jpeg",
        "page": 295,
        "fig_number": "6.33A",
        "caption_en": "Fig. 6.33A: Prone instability test",
        "caption_vi": "🩺 Thao tác khám: Nghiệm pháp mất vững phân đoạn cột sống thắt lưng (Prone Instability) (Fig. 6.33A)",
        "role_type": "exam",
        "width": 621,
        "height": 900
      }
    ],
    "stage_2_somatic_dysfunctions": [
      "Xoay xương chậu ra trước / ra sau (Anterior / Posterior Innominate Shear): Mất cân xứng chiều dài chi chức năng và đau khớp cùng chậu.",
      "Vặn xoắn xương cùng (Sacral Torsion on Oblique Axis - R on R, L on L): Gây căng cứng cơ hình lê và chèn ép rễ thần kinh tọa.",
      "Khóa diện khớp thắt lưng (Lumbar Facet ERS / FRS): Co thắt cơ nhiều tầng và đau nhói khi ưỡn lưng xoay người."
    ],
    "stage_3_guidemap_intervention": "Kỹ thuật nắn chỉnh cân bằng cơ sinh học khung chậu (Muscle Energy Technique - MET); Trường hợp viêm rễ thần kinh cấp hoặc viêm khớp cùng chậu dai dẳng -> Tiêm thẩm nhuận rễ thắt lưng chọn lọc (Transforaminal ESI) hoặc Tiêm khớp cùng chậu dưới hướng dẫn siêu âm (Xem Web 1: Quy trình Tiêm Khớp Cùng Chậu & Tiêm Rễ Thần Kinh Ngoài Màng Cứng).",
    "recommended_web1_procedures": [
      {
        "id": "sacroiliac-joint",
        "nameVi": "Tiêm khớp cùng chậu dưới siêu âm (SIJ Injection)",
        "role": "Viêm khớp cùng chậu do thoái hóa hoặc viêm cột sống dính khớp HLA-B27"
      },
      {
        "id": "sacral-lateral-branch",
        "nameVi": "Phong bế nhánh ngoài xương cùng S1–S3 (SLBB)",
        "role": "Xác định đau khớp cùng chậu trước khi đốt sóng cao tần RFA làm giảm đau lâu dài"
      },
      {
        "id": "sacroiliac-joint-rfa",
        "nameVi": "Đốt sóng cao tần (RFA) khớp cùng chậu (Strip Lesioning)",
        "role": "Can thiệp nhiệt đông hủy nhánh cảm giác khớp cùng chậu cho ca đau mạn kháng trị"
      },
      {
        "id": "lumbar-medial-branch",
        "nameVi": "Phong bế nhánh trong cột sống thắt lưng & rễ sau L5",
        "role": "Đau diện khớp thắt lưng (Lumbar Facet Syndrome) tăng khi ưỡn và xoay cột sống"
      },
      {
        "id": "caudal-epidural",
        "nameVi": "Tiêm ngoài màng cứng qua khe xương cùng (Caudal Epidural)",
        "role": "Thoát vị đĩa đệm thắt lưng, hẹp ống sống thắt lưng, đau rễ thần kinh tọa hai bên"
      },
      {
        "id": "piriformis-muscle",
        "nameVi": "Tiêm cơ hình lê dưới siêu âm (Piriformis Injection)",
        "role": "Hội chứng cơ hình lê (Piriformis Syndrome) chèn ép thần kinh tọa ở khuyết ngồi lớn"
      },
      {
        "id": "pudendal-nerve",
        "nameVi": "Phong bế thần kinh thẹn tại gai ngồi (Pudendal Nerve Block)",
        "role": "Hội chứng đau thần kinh thẹn kẹp giữa dây chằng cùng gai và cùng ụ ngồi"
      }
    ],
    "provocative_tests": [
      {
        "name": "Nghiệm pháp Căng Màng Cứng Slump Test (Tư Thế Kéo Căng Toàn Bộ Trục Thần Kinh)",
        "technique": "Bệnh nhân ngồi sát mép bàn khám. Bác sĩ hướng dẫn: (1) Thả lỏng gù toàn bộ lưng và ngực, (2) Cúi đầu gập cằm sát ngực, (3) Bác sĩ tì tay ấn nhẹ lên đỉnh đầu, (4) Yêu cầu bệnh nhân duỗi thẳng chân bên đau và gập mu bàn chân tối đa.",
        "significance": "Kéo căng toàn diện màng cứng thần kinh tọa và rễ thần kinh thắt lưng qua đĩa đệm bị thoát vị. Đau nhói dọc từ lưng lan xuống mông, đùi và cẳng chân báo hiệu chèn ép rễ thần kinh tọa cơ học.",
        "sensitivity": "84–91%",
        "specificity": "83%",
        "accuracy": {
          "sn": "84–91%",
          "sp": "83%"
        },
        "clinical_role": "Độ nhạy vượt trội so với SLR kinh điển, tiêu chuẩn sàng lọc số 1 cho bệnh lý rễ thắt lưng",
        "diagnostic_role": "Độ nhạy vượt trội so với SLR kinh điển, tiêu chuẩn sàng lọc số 1 cho bệnh lý rễ thắt lưng",
        "figures": [
          {
            "file": "assets/deepak_images/ch06_lumbopelvic_pain/p288_img2.jpeg",
            "page": 288,
            "fig_number": "6.28",
            "caption_en": "Fig. 6.28: Slump test position",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp căng màng cứng & rễ thần kinh tọa Slump Test (Fig. 6.28)",
            "role_type": "exam",
            "width": 1080,
            "height": 810
          }
        ]
      },
      {
        "name": "Phân Biệt Cấu Trúc Nghiệm Pháp Slump (Cervical Release Differentiation)",
        "technique": "Khi bệnh nhân đang ở tư thế Slump tối đa và đau chân xuất hiện, bác sĩ giữ nguyên vị trí chân và yêu cầu bệnh nhân nhẹ nhàng ngửa cổ nhìn thẳng lên trần nhà (thả lỏng màng cứng vùng cổ).",
        "significance": "Nếu triệu chứng đau ở chân giảm rõ rệt hoặc biến mất khi ngửa cổ, xác nhận 100% triệu chứng đau chân là do căng cơ học của hệ thống thần kinh màng cứng chứ không phải do co thắt gân kheo.",
        "sensitivity": "84%",
        "specificity": "95–100%",
        "accuracy": {
          "sn": "84%",
          "sp": "95–100%"
        },
        "clinical_role": "Độ đặc hiệu tuyệt đối xác nhận tổn thương thần kinh màng cứng thắt lưng",
        "diagnostic_role": "Độ đặc hiệu tuyệt đối xác nhận tổn thương thần kinh màng cứng thắt lưng",
        "figures": [
          {
            "file": "assets/deepak_images/ch06_lumbopelvic_pain/p289_img1.jpeg",
            "page": 289,
            "fig_number": "6.29",
            "caption_en": "Fig. 6.29: Slump test structural differentiation: Release of cervical flexion",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp phân biệt cấu trúc Slump qua thả lỏng cổ (Cervical Release) (Fig. 6.29)",
            "role_type": "exam",
            "width": 1080,
            "height": 810
          }
        ]
      },
      {
        "name": "Nghiệm pháp Căng Thần Kinh Đùi (Femoral Nerve Tension Test / Prone Knee Bend)",
        "technique": "Bệnh nhân nằm sấp (hoặc nằm nghiêng). Bác sĩ cố định khung chậu bên đau, một tay giữ đùi và tay kia gập khớp gối tối đa hướng gót chân vào mông, sau đó duỗi nhẹ khớp háng ra sau.",
        "significance": "Kéo căng thần kinh đùi và các rễ thần kinh thắt lưng cao L2, L3, L4. Tái hiện đau nhói mặt trước đùi khẳng định bệnh lý rễ L2–L4 hoặc viêm tổn thương thần kinh đùi.",
        "sensitivity": "50–84%",
        "specificity": "88–100%",
        "accuracy": {
          "sn": "50–84%",
          "sp": "88–100%"
        },
        "clinical_role": "Khám đặc hiệu cho thoát vị đĩa đệm thắt lưng cao (L2-L3, L3-L4), bổ khuyết cho Slump test",
        "diagnostic_role": "Khám đặc hiệu cho thoát vị đĩa đệm thắt lưng cao (L2-L3, L3-L4), bổ khuyết cho Slump test",
        "figures": [
          {
            "file": "assets/deepak_images/ch06_lumbopelvic_pain/p290_img1.jpeg",
            "page": 290,
            "fig_number": "6.30",
            "caption_en": "Fig. 6.30: Femoral nerve tension test in prone position",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp kéo căng thần kinh đùi rễ L2-L4 (Prone Knee Bend) (Fig. 6.30)",
            "role_type": "exam",
            "width": 1080,
            "height": 834
          }
        ]
      },
      {
        "name": "Nghiệm pháp Đẩy Đùi Khớp Cùng Chậu (Thigh Thrust Test / P4 Test - Cụm Laslett)",
        "technique": "Bệnh nhân nằm ngửa. Bác sĩ gập khớp háng bên đau 90 độ, đặt một tay luồn dưới xương cùng để cố định. Tay kia ôm lấy gối bệnh nhân và dồn một lực đẩy mạnh dọc trục thân xương đùi xuống dưới giường khám.",
        "significance": "Tạo lực trượt cắt dọc (Shear stress) trực tiếp lên khớp cùng chậu cùng bên. Đau nhói tại vùng rãnh khớp cùng chậu là nghiệm pháp dương tính.",
        "sensitivity": "88%",
        "specificity": "69%",
        "accuracy": {
          "sn": "88%",
          "sp": "69%"
        },
        "clinical_role": "Nghiệm pháp có độ nhạy cao nhất trong cụm Laslett chẩn đoán đau khớp cùng chậu (SIJ)",
        "diagnostic_role": "Nghiệm pháp có độ nhạy cao nhất trong cụm Laslett chẩn đoán đau khớp cùng chậu (SIJ)",
        "figures": [
          {
            "file": "assets/deepak_images/ch06_lumbopelvic_pain/p294_img2.jpeg",
            "page": 294,
            "fig_number": "6.32D",
            "caption_en": "Fig. 6.32D: Sacroiliac joint thigh thrust test",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp đẩy dọc xương đùi khớp cùng chậu (Thigh Thrust / P4) (Fig. 6.32D)",
            "role_type": "exam",
            "width": 1080,
            "height": 810
          }
        ]
      },
      {
        "name": "Nghiệm pháp Mất Vững Phân Đoạn Lưng (Prone Instability Test)",
        "technique": "Bệnh nhân nằm sấp, thân mình trên bàn khám, hai chân chạm sàn thả lỏng. Bác sĩ ấn lực xuống từng mỏm gai thắt lưng tìm điểm đau chói. Sau đó yêu cầu bệnh nhân nâng hai chân khỏi sàn và bác sĩ ấn lại cùng một lực vào điểm đó.",
        "significance": "Nếu cơn đau biến mất hoặc giảm rõ rệt khi hai chân được nâng lên (nhờ sự co kích hoạt các cơ ổn định sâu đa đầu Multifidus), nghiệm pháp dương tính.",
        "sensitivity": "72%",
        "specificity": "71%",
        "accuracy": {
          "sn": "72%",
          "sp": "71%"
        },
        "clinical_role": "Tiêu chuẩn chẩn đoán mất vững phân đoạn cột sống thắt lưng, chỉ định bài tập kiểm soát vận động lõi",
        "diagnostic_role": "Tiêu chuẩn chẩn đoán mất vững phân đoạn cột sống thắt lưng, chỉ định bài tập kiểm soát vận động lõi",
        "figures": [
          {
            "file": "assets/deepak_images/ch06_lumbopelvic_pain/p295_img1.jpeg",
            "page": 295,
            "fig_number": "6.33A",
            "caption_en": "Fig. 6.33A: Prone instability test",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp mất vững phân đoạn cột sống thắt lưng (Prone Instability) (Fig. 6.33A)",
            "role_type": "exam",
            "width": 621,
            "height": 900
          }
        ]
      }
    ],
    "differential_matrix": [
      {
        "condition": "Thoát vị đĩa đệm chèn ép rễ (Lumbar Radiculopathy)",
        "onset": "Đau thắt lưng lan xuống mông, mặt sau/ngoài đùi, cẳng chân và bàn chân",
        "aggravating": "Cúi người về trước, ngồi lâu, ho, hắt hơi, rặn đi cầu",
        "key_differentiator": "Slump test dương tính, giảm cảm giác khoanh da L4/L5/S1, giảm phản xạ gân gót/bánh chè",
        "confirmatory_test": "Nghiệm pháp Slump Test & Phân biệt cấu trúc Cervical Release",
        "gold_standard": "Chụp MRI Cột sống thắt lưng độ phân giải cao & Đo dẫn truyền thần kinh EMG",
        "web1_procedure_id": "caudal-epidural"
      },
      {
        "condition": "Hẹp ống sống thắt lưng (Lumbar Spinal Stenosis)",
        "onset": "Đau mỏi, tê bì, nặng hai chân xuất hiện khi đi bộ một đoạn (Đau cách hồi thần kinh)",
        "aggravating": "Đi bộ đường dài, đứng thẳng lưng hoặc ưỡn lưng ra sau",
        "key_differentiator": "Dấu hiệu xe đẩy hàng (Shopping cart sign): Cúi gập lưng về trước hoặc ngồi xổm làm dứt điểm triệu chứng",
        "confirmatory_test": "Khám dáng đi khoảng cách đi bộ & Nghiệm pháp Ưỡn lưng duy trì (Extension-load test)",
        "gold_standard": "Chụp MRI Cột sống thắt lưng đo diện tích mặt cắt ngang ống sống (< 100 mm2)",
        "web1_procedure_id": "caudal-epidural"
      },
      {
        "condition": "Hội chứng diện khớp thắt lưng (Lumbar Facet Syndrome)",
        "onset": "Đau thắt lưng sâu, lan xuống mông và mặt sau đùi nhưng KHÔNG vượt qua khớp gối",
        "aggravating": "Ưỡn lưng ra sau kết hợp xoay cùng bên (Kemp test), đứng lâu tại chỗ",
        "key_differentiator": "Ấn đau chói cạnh cột sống thắt lưng (cách đường giữa 2-3 cm), không có dấu hiệu chèn ép rễ thần kinh",
        "confirmatory_test": "Nghiệm pháp Kemp test (Ưỡn xoay cột sống thắt lưng)",
        "gold_standard": "Phong bế chẩn đoán nhánh trong (Lumbar Medial Branch Block) giảm đau >= 80%",
        "web1_procedure_id": "lumbar-medial-branch"
      },
      {
        "condition": "Đau khớp cùng chậu (Sacroiliac Joint Dysfunction - SIJD)",
        "onset": "Đau vùng mông sâu, ngay dưới gai chậu sau trên (vùng Fortin finger area)",
        "aggravating": "Chuyển tư thế từ ngồi sang đứng, bước lên cầu thang, đứng dồn trọng lượng một chân",
        "key_differentiator": "Dương tính >= 3/5 nghiệm pháp trong cụm Laslett (Thigh thrust, Distraction, Compression, Sacral thrust, Gaenslen)",
        "confirmatory_test": "Cụm nghiệm pháp Laslett SIJ Cluster (Thigh thrust, Distraction, Sacral thrust)",
        "gold_standard": "Tiêm phong bế nội khớp cùng chậu (SIJ Injection) dưới hướng dẫn siêu âm/C-arm",
        "web1_procedure_id": "sacroiliac-joint"
      },
      {
        "condition": "Hội chứng cơ hình lê (Piriformis Syndrome)",
        "onset": "Đau buốt vùng mông sâu, lan theo đường đi của dây thần kinh tọa xuống sau đùi",
        "aggravating": "Ngồi ghế cứng lâu (ví dụ để ví dày ở túi quần sau), bước sải chân dài",
        "key_differentiator": "Ấn đau chói tại điểm giữa gai chậu sau trên và mấu chuyển lớn, nghiệm pháp FAIR (Flexion-Adduction-Internal Rotation) đau nhói",
        "confirmatory_test": "Nghiệm pháp FAIR test / Beatts test / Freiberg test",
        "gold_standard": "Siêu âm cơ hình lê phì đại chèn ép thần kinh tọa & Tiêm phong bế cơ hình lê dưới siêu âm",
        "web1_procedure_id": "piriformis-muscle"
      }
    ]
  },
  {
    "id": "hip-groin-pain",
    "chapter": 7,
    "region": "hip",
    "region_vi": "Khớp Háng & Bẹn",
    "icon": "👖",
    "title": "Hip Joint, Groin, AVN & Greater Trochanteric Pain",
    "title_vi": "👖 Đau Khớp Háng, Vùng Bẹn, AVN & Mấu Chuyển Lớn",
    "chief_complaint": "Phàn nàn chính: Đau sâu vùng bẹn hình chữ C (dấu hiệu C-sign), đau khớp háng khi đứng lên ngồi xuống hoặc lên xuống cầu thang, đau mặt ngoài khớp háng khi nằm nghiêng (viêm túi thanh dịch mấu chuyển lớn), đi khập khiễng.",
    "author": "GS. Deepak Sebastian (Chương 7, pp. 301-333)",
    "summary": "Chẩn đoán phân biệt đau khớp háng và vùng bẹn: Thoái hóa khớp háng (Coxarthrosis), Hoại tử vô khuẩn chỏm xương đùi (Avascular Necrosis - AVN do corticoid/rượu), Xung đột xương chậu - đùi (FAI Cam/Pincer), Rách viền sụn khớp háng (Acetabular labral tear), Hội chứng đau mấu chuyển lớn (GTPS / Trochanteric bursitis). Sàng lọc cờ đỏ gãy cổ xương đùi người già, viêm khớp háng nhiễm trùng mủ, thoát vị bẹn nghẹt, u xương chậu.",
    "stage_1_systemic_red_flags": [
      {
        "category": "Cờ Đỏ Gãy Cổ Xương Đùi & Gãy Khối Mấu Chuyển",
        "signs": "Người cao tuổi ngã đập mông hoặc háng, mất hoàn toàn khả năng chịu lực đứng tì đè, chi dưới bên gãy ngắn hơn và xoay ngoài điển hình, gõ dồn từ gót chân lên háng đau chói.",
        "action": "Bất động chi dưới, chụp X-quang khớp háng thẳng - nghiêng khẩn cấp, chuyển Chấn thương chỉnh hình phẫu thuật kết hợp xương hoặc thay khớp háng."
      },
      {
        "category": "Cờ Đỏ Hoại Tử Vô Mạch Chỏm Xương Đùi (Avascular Necrosis - AVN)",
        "signs": "Đau khớp háng âm ỉ tăng dần khi đi lại, tiền sử uống nhiều rượu bia hoặc dùng Corticosteroid kéo dài, bệnh hồng cầu hình liềm. Giai đoạn sớm X-quang có thể hoàn toàn bình thường!",
        "action": "Chụp MRI khớp háng hai bên khẩn cấp (Phương pháp nhạy nhất phát hiện AVN giai đoạn Ficat 1-2). Giảm tải trọng (chống nạng), hội chẩn phẫu thuật khoan giảm áp."
      },
      {
        "category": "Cờ Đỏ Viêm Khớp Háng Nhiễm Trùng (Septic Arthritis of the Hip)",
        "signs": "Sốt cao, đau háng dữ dội, khớp háng giữ ở tư thế hơi gập giạng và xoay ngoài để giảm áp lực nội khớp, mọi cử động thụ động đều đau chói làm co cứng cơ, không chịu được tì đè.",
        "action": "CẤP CỨU NGOẠI KHOA: Chọc hút dịch khớp xét nghiệm tế bào vi trùng + Phẫu thuật mổ mở rửa dẫn lưu khớp háng khẩn cấp tránh hoại tử chỏm xương đùi trong 24h."
      },
      {
        "category": "Cờ Đỏ Bệnh Khớp Háng Trẻ Em (SCFE & Perthes Disease)",
        "signs": "Trượt biểu mô chỏm xương đùi (SCFE): Trẻ vị thành niên (10-15 tuổi) béo phì đau bẹn hoặc đau gối đi khập khiễng, bàn chân xoay ngoài; Bệnh Perthes (Hoại tử chỏm thiếu máu): Bé trai 4-8 tuổi đi khập khiễng không đau hoặc đau nhẹ khớp gối/háng.",
        "action": "CẤM CHỊU TẢI TRỌNG! Chụp X-quang háng tư thế chân ếch (Frog-leg lateral view), chuyển viện Chấn thương chỉnh hình nhi ngay."
      }
    ],
    "red_flags": [
      {
        "category": "Cờ Đỏ Tổn Thương Mạng Mạch Cổ Xương Đùi & Nguy Cơ Thiếu Máu Nuôi Chỏm",
        "signs": "Bệnh nhân gãy cổ xương đùi di lệch, trật khớp háng hoặc sử dụng corticoid kéo dài liều cao (> 20mg/ngày) hoặc nghiện rượu nặng. Tổn thương các nhánh vòng động mạch mũ đùi nuôi chỏm, đau dữ dội khớp háng khi tì đè chịu lực.",
        "action": "CHỤP MRI KHỚP HÁNG PHÁT HIỆN SỚM HOẠI TỬ VÔ MẠCH: Chống chỉ định tiêm corticoid vào nội khớp háng khi nghi ngờ hoại tử chỏm xương đùi tiến triển. Bất động tránh tì đè tải trọng nặng, chuyển bác sĩ Chấn thương Chỉnh hình.",
        "figures": [
          {
            "file": "assets/deepak_images/ch07_hip_pain/p304_img1.jpeg",
            "page": 304,
            "fig_number": "7.2",
            "caption_en": "Fig. 7.2: Retinacular vessels of the femoral neck and avascular necrosis threat",
            "caption_vi": "📐 Sơ đồ giải phẫu: Mạng mạch nuôi cổ xương đùi & nguy cơ hoại tử vô mạch chỏm (Fig. 7.2)",
            "role_type": "redflag",
            "width": 1285,
            "height": 813
          }
        ]
      },
      {
        "category": "Cờ Đỏ Xẹp Trượt Chỏm Xương Đùi Vô Mạch (Avascular Necrosis - AVN Ficat III-IV)",
        "signs": "Đau háng sâu liên tục, đau cả khi nghỉ ngơi và ban đêm, hạn chế nặng nề xoay trong và khép háng, chiều dài chi ngắn lại rõ rệt. X-quang hoặc MRI cho thấy hình ảnh dấu hiệu trăng khuyết dưới sụn (Crescent sign), biến dạng dẹt chỏm xương đùi.",
        "action": "CHỐNG CHỈ ĐỊNH TIÊM CORTICOID KHỚP HÁNG: Chuyển khám chuyên khoa Phẫu thuật Thay khớp Háng nhân tạo. Đánh giá khả năng phẫu thuật khoan giảm áp (Core decompression) nếu giai đoạn sớm hoặc thay khớp háng toàn phần.",
        "figures": [
          {
            "file": "assets/deepak_images/ch07_hip_pain/p324_img1.jpeg",
            "page": 324,
            "fig_number": "7.9",
            "caption_en": "Fig. 7.9: Femoral head posterolateral glide",
            "caption_vi": "📐 Sơ đồ cơ học: Hướng trượt chỏm xương đùi ra sau ngoài (Fig. 7.9: Femoral head posterolateral glide)",
            "role_type": "redflag",
            "width": 958,
            "height": 720
          }
        ]
      },
      {
        "category": "Cờ Đỏ Xung Đột Xương Chậu - Đùi Cam Gồ Cổ Xương Đùi (Cam FAI & Labral Tear)",
        "signs": "Đau nhói vùng bẹn khi ngồi xổm sâu hoặc ngồi xe hơi lâu. Cổ xương đùi gồ bất thường mất độ lõm sinh lý (Cam lesion), cọ xát liên tục gây rách sụn viền ổ cối và bong tróc sụn khớp háng trước trên.",
        "action": "CHỤP X-QUANG GÓC ALPHA & MRI KHỚP HÁNG CÓ THUỐC CẢN TỪ: Đo góc Alpha (> 55 độ), phát hiện rách sụn viền ổ cối. Hạn chế gập khép xoay trong sâu, hội chẩn phẫu thuật nội soi gọt gồ xương (Femoral osteoplasty).",
        "figures": [
          {
            "file": "assets/deepak_images/ch07_hip_pain/p316_img1.jpeg",
            "page": 316,
            "fig_number": "7.5",
            "caption_en": "Fig. 7.5: Cam femoroacetabular impingement (FAI) and labral tear",
            "caption_vi": "📐 Sơ đồ giải phẫu / cơ học: Xung đột xương chậu - đùi Cam FAI & rách sụn viền ổ cối (Fig. 7.5)",
            "role_type": "redflag",
            "width": 990,
            "height": 1019
          }
        ]
      }
    ],
    "visceral_referrals": [
      {
        "source": "Áp-xe Cơ Thắt Lưng Chậu (Psoas Abscess)",
        "pattern": "Đau vùng bẹn và mặt trước trong khớp háng kèm sốt dao động, gầy sút cân. Bệnh nhân có tư thế gập háng và xoay trong để chùng cơ thắt lưng chậu; Duỗi háng thụ động gây đau dữ dội (Dấu hiệu cơ thắt lưng chậu / Psoas sign +).",
        "differential": "Chụp CT hoặc MRI vùng bụng chậu tìm ổ áp-xe trong cơ thắt lưng chậu.",
        "figures": []
      },
      {
        "source": "Bệnh Lý Thần Kinh Bì Đùi Ngoài (Meralgia Paresthetica)",
        "pattern": "Tê bì, bỏng rát, giảm cảm giác hình bầu dục ở mặt trước ngoài đùi do dây thần kinh bì đùi ngoài bị chèn ép dưới dây chằng bẹn (ở người béo phì, mặc quần chật, đeo thắt lưng đồ nghề nặng).",
        "differential": "Khám vận động cơ lực và phản xạ gân xương hoàn toàn bình thường (dây thần kinh thuần cảm giác).",
        "figures": []
      }
    ],
    "drug_induced": [
      "Corticosteroid: Thủ phạm hàng đầu gây hoại tử vô mạch chỏm xương đùi (AVN).",
      "Quinolone: Viêm gân cơ thắt lưng chậu và viêm túi hoạt dịch cơ thẳng đùi."
    ],
    "examination_procedures": [
      {
        "name": "Nghiệm pháp Vét Khớp Háng (Hip Scouring Test / Hip Quadrant Test)",
        "technique": "Bệnh nhân nằm ngửa. Bác sĩ gập tối đa khớp gối và khớp háng bên đau, dồn một lực nén dọc trục thân xương đùi xuống ổ cối, sau đó xoay tròn khớp háng theo hình nón qua các vị trí khép - xoay trong đến dạng - xoay ngoài.",
        "significance": "Cọ xát toàn diện chỏm xương đùi vào sụn viền và mặt khớp ổ cối. Tái hiện đau nhói, cảm giác lạo xạo hoặc kẹt khớp xác nhận thoái hóa khớp háng (OA) hoặc rách sụn viền ổ cối (Labral tear).",
        "sensitivity": "62%",
        "specificity": "75%",
        "accuracy": {
          "sn": "62%",
          "sp": "75%"
        },
        "clinical_role": "Khám phát hiện tổn thương cơ học ổ cối và rách sụn viền khớp háng kinh điển",
        "diagnostic_role": "Khám phát hiện tổn thương cơ học ổ cối và rách sụn viền khớp háng kinh điển",
        "figures": [
          {
            "file": "assets/deepak_images/ch07_hip_pain/p330_img1.jpeg",
            "page": 330,
            "fig_number": "7.18",
            "caption_en": "Fig. 7.18: Hip scouring test",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp xoay nén vét ổ cối khớp háng (Hip Scour Test) (Fig. 7.18)",
            "role_type": "exam",
            "width": 958,
            "height": 703
          }
        ]
      },
      {
        "name": "Nghiệm pháp Thomas (Thomas Test Co Ngắn Cơ Thắt Lưng Chậu)",
        "technique": "Bệnh nhân nằm ngửa sát mép bàn khám. Bệnh nhân ôm một bên gối áp sát vào ngực để triệt tiêu độ ưỡn thắt lưng. Bác sĩ quan sát tư thế của đùi và chân đối diện đang thả lỏng trên bàn.",
        "significance": "Nếu đùi đối diện không thể nằm áp sát mặt bàn phẳng mà bị nhấc bổng lên (gập háng), nghiệm pháp dương tính báo hiệu co rút cơ thắt lưng chậu (Iliopsoas contracture).",
        "sensitivity": "89%",
        "specificity": "92%",
        "accuracy": {
          "sn": "89%",
          "sp": "92%"
        },
        "clinical_role": "Độ nhạy & độ đặc hiệu rất cao đánh giá co ngắn cơ gập háng và viêm bao gân thắt lưng chậu",
        "diagnostic_role": "Độ nhạy & độ đặc hiệu rất cao đánh giá co ngắn cơ gập háng và viêm bao gân thắt lưng chậu",
        "figures": [
          {
            "file": "assets/deepak_images/ch07_hip_pain/p326_img1.jpeg",
            "page": 326,
            "fig_number": "7.12",
            "caption_en": "Fig. 7.12: Thomas test",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp Thomas khám co rút cơ thắt lưng chậu (Fig. 7.12)",
            "role_type": "exam",
            "width": 958,
            "height": 718
          }
        ]
      },
      {
        "name": "Nghiệm pháp Ober (Ober's Test Khám Co Rút Dải Chậu Chày & Cơ Căng Mạc Đùi)",
        "technique": "Bệnh nhân nằm nghiêng bên lành, gối dưới gập để ổn định chậu. Bác sĩ đứng sau lưng, một tay cố định mào chậu. Tay kia đỡ chân trên, gập gối 90 độ, duỗi khớp háng ra sau thẳng hàng thân mình rồi thả lỏng cho đùi rơi tự do khép xuống sàn.",
        "significance": "Nếu đùi không rơi khép xuống quá đường giữa mà vẫn bị treo lơ lửng ở tư thế dạng, nghiệm pháp dương tính báo hiệu co ngắn dải chậu chày (ITB) và cơ căng mạc đùi (TFL).",
        "sensitivity": "41–72%",
        "specificity": "95%",
        "accuracy": {
          "sn": "41–72%",
          "sp": "95%"
        },
        "clinical_role": "Độ đặc hiệu 95% khẳng định hội chứng dải chậu chày và viêm bao hoạt dịch mấu chuyển lớn",
        "diagnostic_role": "Độ đặc hiệu 95% khẳng định hội chứng dải chậu chày và viêm bao hoạt dịch mấu chuyển lớn",
        "figures": [
          {
            "file": "assets/deepak_images/ch07_hip_pain/p327_img2.jpeg",
            "page": 327,
            "fig_number": "7.14",
            "caption_en": "Fig. 7.14: Ober's test",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp Ober khám co ngắn dải chậu chày ITB (Fig. 7.14)",
            "role_type": "exam",
            "width": 958,
            "height": 602
          }
        ]
      },
      {
        "name": "Nâng Chân Có Kháng Trở Stinchfield (Resisted Straight Leg Raise / Stinchfield Test)",
        "technique": "Bệnh nhân nằm ngửa, chân duỗi thẳng. Bác sĩ yêu cầu bệnh nhân nâng thẳng chân lên khoảng 30 độ so với mặt bàn. Sau đó bác sĩ đặt tay lên mặt trước đùi và ấn mạnh xuống trong khi bệnh nhân gắng sức kháng cự nâng lên.",
        "significance": "Tạo lực nén và xoay cực lớn lên cổ xương đùi và sụn viền trước trên ổ cối. Đau nhói sâu ở vùng bẹn là dương tính báo hiệu gãy mỏi cổ xương đùi, rách sụn viền hoặc viêm khớp háng tiến triển.",
        "sensitivity": "82%",
        "specificity": "74%",
        "accuracy": {
          "sn": "82%",
          "sp": "74%"
        },
        "clinical_role": "Sàng lọc gãy mỏi cổ xương đùi do stress và bệnh lý nội khớp háng sâu",
        "diagnostic_role": "Sàng lọc gãy mỏi cổ xương đùi do stress và bệnh lý nội khớp háng sâu",
        "figures": [
          {
            "file": "assets/deepak_images/ch07_hip_pain/p331_img2.jpeg",
            "page": 331,
            "fig_number": "7.20",
            "caption_en": "Fig. 7.20: Stinchfield test (Resisted straight leg raise)",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp nâng thẳng chân có kháng trở Stinchfield (Fig. 7.20)",
            "role_type": "exam",
            "width": 958,
            "height": 803
          }
        ]
      }
    ],
    "differential_table": [
      {
        "condition": "Thoái hóa khớp háng (Hip Osteoarthritis)",
        "onset": "Đau sâu vùng bẹn hình chữ C (C-sign), cứng khớp buổi sáng < 30 phút",
        "aggravating": "Đi bộ lâu, đứng lên từ ghế thấp, bước lên bậc thang",
        "key_differentiator": "Hạn chế xoay trong khớp háng (< 15 độ) kèm đau, X-quang hẹp khe khớp và gai xương chỏm",
        "confirmatory_test": "Nghiệm pháp Hip Scour Test & Đo tầm vận động xoay trong khớp háng",
        "gold_standard": "X-quang khớp háng khung chậu thẳng đứng chịu lực & Chụp MRI khớp háng",
        "web1_procedure_id": "hip-intraarticular"
      },
      {
        "condition": "Hội chứng đau mấu chuyển lớn (GTPS / Trochanteric Bursitis)",
        "onset": "Đau nhức mặt ngoài khớp háng, lan xuống mặt ngoài đùi nhưng không vượt qua gối",
        "aggravating": "Nằm nghiêng đè lên bên đau, đứng lâu một chân, leo dốc",
        "key_differentiator": "Ấn đau chói chính xác tại đỉnh mấu chuyển lớn xương đùi, nghiệm pháp Ober dương tính",
        "confirmatory_test": "Nghiệm pháp Ober's Test & Khám sờ ấn điểm đau chói mấu chuyển lớn",
        "gold_standard": "Siêu âm phần mềm khớp háng thấy dày màng hoạt dịch mấu chuyển & rách gân cơ mông nhỡ",
        "web1_procedure_id": "trochanteric-bursa"
      },
      {
        "condition": "Rách sụn viền ổ cối (Acetabular Labral Tear)",
        "onset": "Đau nhói vùng bẹn sau chấn thương xoay háng, cảm giác kẹt vướng hoặc lục cục sâu trong khớp",
        "aggravating": "Ngồi xổm, ngồi xoay vặn chân, lên xuống xe ô tô",
        "key_differentiator": "Nghiệm pháp FADIR (Flexion-Adduction-Internal Rotation) đau chói kẹt khớp, Stinchfield test dương tính",
        "confirmatory_test": "Nghiệm pháp FADIR test & Stinchfield Resisted SLR",
        "gold_standard": "Chụp MRI khớp háng có tiêm thuốc cản từ nội khớp (MR Arthrography)",
        "web1_procedure_id": "hip-intraarticular"
      },
      {
        "condition": "Bật khớp háng (Snapping Hip Syndrome)",
        "onset": "Tiếng bật tanh tách có thể nghe thấy hoặc cảm nhận được ở háng khi đi bộ hoặc dạng khép chân",
        "aggravating": "Gập duỗi khớp háng liên tục, chạy bộ, khiêu vũ",
        "key_differentiator": "Bật ngoài (dải chậu chày trượt qua mấu chuyển lớn) hoặc Bật trong (gân thắt lưng chậu trượt qua gờ chậu lược)",
        "confirmatory_test": "Nghiệm pháp Thomas & Nghiệm pháp tái tạo tiếng bật khớp háng động học",
        "gold_standard": "Siêu âm động học (Dynamic Ultrasound) quan sát trực tiếp gân trượt qua gờ xương",
        "web1_procedure_id": "iliopsoas-bursa"
      }
    ],
    "figures": [
      {
        "file": "assets/deepak_images/ch07_hip_pain/p304_img1.jpeg",
        "page": 304,
        "fig_number": "7.2",
        "caption_en": "Fig. 7.2: Retinacular vessels of the femoral neck and avascular necrosis threat",
        "caption_vi": "📐 Sơ đồ giải phẫu: Mạng mạch nuôi cổ xương đùi & nguy cơ hoại tử vô mạch chỏm (Fig. 7.2)",
        "role_type": "redflag",
        "width": 1285,
        "height": 813
      },
      {
        "file": "assets/deepak_images/ch07_hip_pain/p324_img1.jpeg",
        "page": 324,
        "fig_number": "7.9",
        "caption_en": "Fig. 7.9: Femoral head posterolateral glide",
        "caption_vi": "📐 Sơ đồ cơ học: Hướng trượt chỏm xương đùi ra sau ngoài (Fig. 7.9: Femoral head posterolateral glide)",
        "role_type": "redflag",
        "width": 958,
        "height": 720
      },
      {
        "file": "assets/deepak_images/ch07_hip_pain/p316_img1.jpeg",
        "page": 316,
        "fig_number": "7.5",
        "caption_en": "Fig. 7.5: Cam femoroacetabular impingement (FAI) and labral tear",
        "caption_vi": "📐 Sơ đồ giải phẫu / cơ học: Xung đột xương chậu - đùi Cam FAI & rách sụn viền ổ cối (Fig. 7.5)",
        "role_type": "redflag",
        "width": 990,
        "height": 1019
      },
      {
        "file": "assets/deepak_images/ch07_hip_pain/p330_img1.jpeg",
        "page": 330,
        "fig_number": "7.18",
        "caption_en": "Fig. 7.18: Hip scouring test",
        "caption_vi": "🩺 Thao tác khám: Nghiệm pháp xoay nén vét ổ cối khớp háng (Hip Scour Test) (Fig. 7.18)",
        "role_type": "exam",
        "width": 958,
        "height": 703
      },
      {
        "file": "assets/deepak_images/ch07_hip_pain/p326_img1.jpeg",
        "page": 326,
        "fig_number": "7.12",
        "caption_en": "Fig. 7.12: Thomas test",
        "caption_vi": "🩺 Thao tác khám: Nghiệm pháp Thomas khám co rút cơ thắt lưng chậu (Fig. 7.12)",
        "role_type": "exam",
        "width": 958,
        "height": 718
      },
      {
        "file": "assets/deepak_images/ch07_hip_pain/p327_img2.jpeg",
        "page": 327,
        "fig_number": "7.14",
        "caption_en": "Fig. 7.14: Ober's test",
        "caption_vi": "🩺 Thao tác khám: Nghiệm pháp Ober khám co ngắn dải chậu chày ITB (Fig. 7.14)",
        "role_type": "exam",
        "width": 958,
        "height": 602
      },
      {
        "file": "assets/deepak_images/ch07_hip_pain/p331_img2.jpeg",
        "page": 331,
        "fig_number": "7.20",
        "caption_en": "Fig. 7.20: Stinchfield test (Resisted straight leg raise)",
        "caption_vi": "🩺 Thao tác khám: Nghiệm pháp nâng thẳng chân có kháng trở Stinchfield (Fig. 7.20)",
        "role_type": "exam",
        "width": 958,
        "height": 803
      }
    ],
    "stage_2_somatic_dysfunctions": [
      "Giảm trượt chỏm xương đùi ra sau (Posterior glide restriction): Hạn chế gập háng sâu và gây đau xung đột cấn mặt trước ổ cối.",
      "Co rút cơ thắt lưng chậu (Iliopsoas contracture) & cơ may: Làm tăng độ ưỡn cột sống thắt lưng và tăng áp lực lên khớp háng.",
      "Yếu cơ mông nhỡ và cơ xoay ngoài khớp háng: Dấu hiệu Trendelenburg, lệch trục chi dưới gây quá tải bao hoạt dịch mấu chuyển lớn."
    ],
    "stage_3_guidemap_intervention": "Kỹ thuật kéo dãn trượt khớp háng ra sau (Posterior glide mobilization); Tiêm nội khớp háng dưới hướng dẫn siêu âm (xem Web 1: Tiêm Khớp Háng Đường Trước Ngoài) hoặc Tiêm túi thanh dịch mấu chuyển lớn / gân cơ mông nhỡ.",
    "recommended_web1_procedures": [
      {
        "id": "hip-intraarticular",
        "nameVi": "Tiêm nội khớp háng (Tiếp cận dọc cổ xương đùi)",
        "role": "Thoái hóa khớp háng nguyên phát, rách sụn viền ổ cối, viêm bao hoạt dịch khớp háng"
      },
      {
        "id": "hip-lateral-approach",
        "nameVi": "Tiêm nội khớp háng tiếp cận lối ngoài",
        "role": "Lựa chọn thay thế tối ưu khi bệnh nhân béo phì hoặc khó tiếp cận ngách trước"
      },
      {
        "id": "hip-joint-denervation",
        "nameVi": "Diệt thần kinh cảm giác khớp háng (Hip Denervation / RFA)",
        "role": "Thoái hóa khớp háng nặng không thể phẫu thuật thay khớp nhân tạo"
      },
      {
        "id": "trochanteric-bursa",
        "nameVi": "Tiêm phức hợp mấu chuyển lớn & bao hoạt dịch (GTPS)",
        "role": "Hội chứng đau mấu chuyển lớn, viêm bao hoạt dịch và bệnh lý gân cơ mông nhỡ"
      },
      {
        "id": "iliopsoas-bursa",
        "nameVi": "Tiêm gân, cơ và bao hoạt dịch thắt lưng chậu (Iliopsoas)",
        "role": "Viêm bao hoạt dịch thắt lưng chậu, hội chứng háng bật tanh tách phía trước"
      },
      {
        "id": "lfcn-block",
        "nameVi": "Phong bế thần kinh bì đùi ngoài (LFCN Block)",
        "role": "Đau dị cảm mặt ngoài đùi (Meralgia Paresthetica) do chèn ép dưới dây chằng bẹn"
      },
      {
        "id": "ilioinguinal-nerve",
        "nameVi": "Phong bế thần kinh chậu bẹn & chậu hạ vị",
        "role": "Đau vùng bẹn bìu dai dẳng sau mổ thoát vị bẹn hoặc mổ bắt con"
      }
    ],
    "provocative_tests": [
      {
        "name": "Nghiệm pháp Vét Khớp Háng (Hip Scouring Test / Hip Quadrant Test)",
        "technique": "Bệnh nhân nằm ngửa. Bác sĩ gập tối đa khớp gối và khớp háng bên đau, dồn một lực nén dọc trục thân xương đùi xuống ổ cối, sau đó xoay tròn khớp háng theo hình nón qua các vị trí khép - xoay trong đến dạng - xoay ngoài.",
        "significance": "Cọ xát toàn diện chỏm xương đùi vào sụn viền và mặt khớp ổ cối. Tái hiện đau nhói, cảm giác lạo xạo hoặc kẹt khớp xác nhận thoái hóa khớp háng (OA) hoặc rách sụn viền ổ cối (Labral tear).",
        "sensitivity": "62%",
        "specificity": "75%",
        "accuracy": {
          "sn": "62%",
          "sp": "75%"
        },
        "clinical_role": "Khám phát hiện tổn thương cơ học ổ cối và rách sụn viền khớp háng kinh điển",
        "diagnostic_role": "Khám phát hiện tổn thương cơ học ổ cối và rách sụn viền khớp háng kinh điển",
        "figures": [
          {
            "file": "assets/deepak_images/ch07_hip_pain/p330_img1.jpeg",
            "page": 330,
            "fig_number": "7.18",
            "caption_en": "Fig. 7.18: Hip scouring test",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp xoay nén vét ổ cối khớp háng (Hip Scour Test) (Fig. 7.18)",
            "role_type": "exam",
            "width": 958,
            "height": 703
          }
        ]
      },
      {
        "name": "Nghiệm pháp Thomas (Thomas Test Co Ngắn Cơ Thắt Lưng Chậu)",
        "technique": "Bệnh nhân nằm ngửa sát mép bàn khám. Bệnh nhân ôm một bên gối áp sát vào ngực để triệt tiêu độ ưỡn thắt lưng. Bác sĩ quan sát tư thế của đùi và chân đối diện đang thả lỏng trên bàn.",
        "significance": "Nếu đùi đối diện không thể nằm áp sát mặt bàn phẳng mà bị nhấc bổng lên (gập háng), nghiệm pháp dương tính báo hiệu co rút cơ thắt lưng chậu (Iliopsoas contracture).",
        "sensitivity": "89%",
        "specificity": "92%",
        "accuracy": {
          "sn": "89%",
          "sp": "92%"
        },
        "clinical_role": "Độ nhạy & độ đặc hiệu rất cao đánh giá co ngắn cơ gập háng và viêm bao gân thắt lưng chậu",
        "diagnostic_role": "Độ nhạy & độ đặc hiệu rất cao đánh giá co ngắn cơ gập háng và viêm bao gân thắt lưng chậu",
        "figures": [
          {
            "file": "assets/deepak_images/ch07_hip_pain/p326_img1.jpeg",
            "page": 326,
            "fig_number": "7.12",
            "caption_en": "Fig. 7.12: Thomas test",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp Thomas khám co rút cơ thắt lưng chậu (Fig. 7.12)",
            "role_type": "exam",
            "width": 958,
            "height": 718
          }
        ]
      },
      {
        "name": "Nghiệm pháp Ober (Ober's Test Khám Co Rút Dải Chậu Chày & Cơ Căng Mạc Đùi)",
        "technique": "Bệnh nhân nằm nghiêng bên lành, gối dưới gập để ổn định chậu. Bác sĩ đứng sau lưng, một tay cố định mào chậu. Tay kia đỡ chân trên, gập gối 90 độ, duỗi khớp háng ra sau thẳng hàng thân mình rồi thả lỏng cho đùi rơi tự do khép xuống sàn.",
        "significance": "Nếu đùi không rơi khép xuống quá đường giữa mà vẫn bị treo lơ lửng ở tư thế dạng, nghiệm pháp dương tính báo hiệu co ngắn dải chậu chày (ITB) và cơ căng mạc đùi (TFL).",
        "sensitivity": "41–72%",
        "specificity": "95%",
        "accuracy": {
          "sn": "41–72%",
          "sp": "95%"
        },
        "clinical_role": "Độ đặc hiệu 95% khẳng định hội chứng dải chậu chày và viêm bao hoạt dịch mấu chuyển lớn",
        "diagnostic_role": "Độ đặc hiệu 95% khẳng định hội chứng dải chậu chày và viêm bao hoạt dịch mấu chuyển lớn",
        "figures": [
          {
            "file": "assets/deepak_images/ch07_hip_pain/p327_img2.jpeg",
            "page": 327,
            "fig_number": "7.14",
            "caption_en": "Fig. 7.14: Ober's test",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp Ober khám co ngắn dải chậu chày ITB (Fig. 7.14)",
            "role_type": "exam",
            "width": 958,
            "height": 602
          }
        ]
      },
      {
        "name": "Nâng Chân Có Kháng Trở Stinchfield (Resisted Straight Leg Raise / Stinchfield Test)",
        "technique": "Bệnh nhân nằm ngửa, chân duỗi thẳng. Bác sĩ yêu cầu bệnh nhân nâng thẳng chân lên khoảng 30 độ so với mặt bàn. Sau đó bác sĩ đặt tay lên mặt trước đùi và ấn mạnh xuống trong khi bệnh nhân gắng sức kháng cự nâng lên.",
        "significance": "Tạo lực nén và xoay cực lớn lên cổ xương đùi và sụn viền trước trên ổ cối. Đau nhói sâu ở vùng bẹn là dương tính báo hiệu gãy mỏi cổ xương đùi, rách sụn viền hoặc viêm khớp háng tiến triển.",
        "sensitivity": "82%",
        "specificity": "74%",
        "accuracy": {
          "sn": "82%",
          "sp": "74%"
        },
        "clinical_role": "Sàng lọc gãy mỏi cổ xương đùi do stress và bệnh lý nội khớp háng sâu",
        "diagnostic_role": "Sàng lọc gãy mỏi cổ xương đùi do stress và bệnh lý nội khớp háng sâu",
        "figures": [
          {
            "file": "assets/deepak_images/ch07_hip_pain/p331_img2.jpeg",
            "page": 331,
            "fig_number": "7.20",
            "caption_en": "Fig. 7.20: Stinchfield test (Resisted straight leg raise)",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp nâng thẳng chân có kháng trở Stinchfield (Fig. 7.20)",
            "role_type": "exam",
            "width": 958,
            "height": 803
          }
        ]
      }
    ],
    "differential_matrix": [
      {
        "condition": "Thoái hóa khớp háng (Hip Osteoarthritis)",
        "onset": "Đau sâu vùng bẹn hình chữ C (C-sign), cứng khớp buổi sáng < 30 phút",
        "aggravating": "Đi bộ lâu, đứng lên từ ghế thấp, bước lên bậc thang",
        "key_differentiator": "Hạn chế xoay trong khớp háng (< 15 độ) kèm đau, X-quang hẹp khe khớp và gai xương chỏm",
        "confirmatory_test": "Nghiệm pháp Hip Scour Test & Đo tầm vận động xoay trong khớp háng",
        "gold_standard": "X-quang khớp háng khung chậu thẳng đứng chịu lực & Chụp MRI khớp háng",
        "web1_procedure_id": "hip-intraarticular"
      },
      {
        "condition": "Hội chứng đau mấu chuyển lớn (GTPS / Trochanteric Bursitis)",
        "onset": "Đau nhức mặt ngoài khớp háng, lan xuống mặt ngoài đùi nhưng không vượt qua gối",
        "aggravating": "Nằm nghiêng đè lên bên đau, đứng lâu một chân, leo dốc",
        "key_differentiator": "Ấn đau chói chính xác tại đỉnh mấu chuyển lớn xương đùi, nghiệm pháp Ober dương tính",
        "confirmatory_test": "Nghiệm pháp Ober's Test & Khám sờ ấn điểm đau chói mấu chuyển lớn",
        "gold_standard": "Siêu âm phần mềm khớp háng thấy dày màng hoạt dịch mấu chuyển & rách gân cơ mông nhỡ",
        "web1_procedure_id": "trochanteric-bursa"
      },
      {
        "condition": "Rách sụn viền ổ cối (Acetabular Labral Tear)",
        "onset": "Đau nhói vùng bẹn sau chấn thương xoay háng, cảm giác kẹt vướng hoặc lục cục sâu trong khớp",
        "aggravating": "Ngồi xổm, ngồi xoay vặn chân, lên xuống xe ô tô",
        "key_differentiator": "Nghiệm pháp FADIR (Flexion-Adduction-Internal Rotation) đau chói kẹt khớp, Stinchfield test dương tính",
        "confirmatory_test": "Nghiệm pháp FADIR test & Stinchfield Resisted SLR",
        "gold_standard": "Chụp MRI khớp háng có tiêm thuốc cản từ nội khớp (MR Arthrography)",
        "web1_procedure_id": "hip-intraarticular"
      },
      {
        "condition": "Bật khớp háng (Snapping Hip Syndrome)",
        "onset": "Tiếng bật tanh tách có thể nghe thấy hoặc cảm nhận được ở háng khi đi bộ hoặc dạng khép chân",
        "aggravating": "Gập duỗi khớp háng liên tục, chạy bộ, khiêu vũ",
        "key_differentiator": "Bật ngoài (dải chậu chày trượt qua mấu chuyển lớn) hoặc Bật trong (gân thắt lưng chậu trượt qua gờ chậu lược)",
        "confirmatory_test": "Nghiệm pháp Thomas & Nghiệm pháp tái tạo tiếng bật khớp háng động học",
        "gold_standard": "Siêu âm động học (Dynamic Ultrasound) quan sát trực tiếp gân trượt qua gờ xương",
        "web1_procedure_id": "iliopsoas-bursa"
      }
    ]
  },
  {
    "id": "knee-leg-foot-pain",
    "chapter": 8,
    "region": "knee_foot",
    "region_vi": "Gối, Cẳng & Bàn Chân",
    "icon": "🦵",
    "title": "Knee Joint, Lower Leg, Ankle & Foot Regional Pain",
    "title_vi": "🦵 Đau Khớp Gối, Cẳng Chân, Cổ Chân & Bàn Chân",
    "chief_complaint": "Phàn nàn chính: Sưng đau khớp gối sau chấn thương thể thao, kẹt khớp gối khi ngồi xổm (rách sụn chêm), đau gân gót Achilles khi chạy, đau nhói gót chân bước đầu tiên buổi sáng (viêm cân gan chân), sưng căng cứng bắp chân.",
    "author": "GS. Deepak Sebastian (Chương 8, pp. 334-416)",
    "summary": "Chẩn đoán phân biệt phức hợp gối - cổ chân - bàn chân: Tổn thương sụn chêm trong/ngoài, đứt dây chằng chéo trước/sau (ACL/PCL), thoái hóa khớp gối, hội chứng bánh chè - đùi (PFPS), nang Baker khoeo chân. Vùng cẳng & bàn chân: Viêm/đứt gân gót Achilles, viêm cân gan chân (Plantar Fasciitis), u thần kinh Morton, đau ngón chân cái do Gút cấp. CỜ ĐỎ KHẨN CẤP: Huyết khối tĩnh mạch sâu (DVT), Hội chứng chèn ép khoang cấp (5P), Viêm mủ khớp gối.",
    "stage_1_systemic_red_flags": [
      {
        "category": "Cờ Đỏ Huyết Khối Tĩnh Mạch Sâu Chi Dưới (Deep Vein Thrombosis - DVT)",
        "signs": "Bắp chân sưng to phù nề bất đối xứng (chu vi bắp chân chênh lệch > 3 cm so với bên lành), căng tức nóng đỏ bắp chân, dấu hiệu Homan dương tính (đau bắp chân khi gập mu bàn chân thụ động). Thường xuất hiện sau bất động, bó bột, phẫu thuật chỉnh hình hoặc đi máy bay đường dài.",
        "action": "CẤP CỨU MẠCH MÁU: Nguy cơ thuyên tắc động mạch phổi tử vong! Siêu âm Doppler mạch máu chi dưới khẩn cấp, xét nghiệm D-dimer. CẤM XOA BÓP BẮP CHÂN!"
      },
      {
        "category": "Cờ Đỏ Hội Chứng Khoang Cẳng Chân Cấp Tính (Acute Compartment Syndrome)",
        "signs": "Quy tắc kinh điển 5P: 1. Pain (Đau dữ dội quá mức tương xứng với chấn thương, đau tăng khi kéo căng cơ thụ động); 2. Paresthesia (Tê bì dị cảm mu chân); 3. Pallor (Da cẳng chân tái nhợt); 4. Pulselessness (Mất mạch mu chân/chày sau - dấu hiệu muộn); 5. Paralysis (Liệt vận động ngón chân).",
        "action": "CẤP CỨU NGOẠI CHẤN THƯƠNG TỐI KHẨN: Đo áp lực khoang (> 30 mmHg). PHẢI PHẪU THUẬT RẠCH MỞ CÂN GIẢI ÉP TRONG VÒNG 6 GIỜ để cứu chi khỏi hoại tử cắt cụt!"
      },
      {
        "category": "Cờ Đỏ Viêm Khớp Gối Nhiễm Trùng (Septic Knee Arthritis)",
        "signs": "Khớp gối sưng nóng đỏ đau dữ dội, tràn dịch lượng nhiều, sốt cao, co cứng không gấp duỗi được.",
        "action": "Chọc hút dịch khớp xét nghiệm khẩn cấp, cấy vi trùng, kháng sinh tĩnh mạch và nội soi rửa khớp ngay."
      },
      {
        "category": "Cờ Đỏ Viêm Tắc Mạch Máu Buerger (Thromboangiitis Obliterans)",
        "signs": "Nam giới trẻ tuổi nghiện thuốc lá nặng, đau buốt ngọn chi khi đi bộ hoặc nghỉ ngơi, tím tái đầu ngón chân, loét hoại tử khô đầu ngón chân, mất mạch chày sau và mu chân.",
        "action": "Cai thuốc lá tuyệt đối ngay lập tức, siêu âm Doppler và chụp mạch máu chi dưới, chuyển khoa Phẫu thuật Mạch máu."
      }
    ],
    "red_flags": [
      {
        "category": "Cờ Đỏ Viêm Sụn Xương Bóc Tách Đùi (Femoral Osteochondritis Dissecans - OCD)",
        "signs": "Bệnh nhân trẻ tuổi chơi thể thao hoặc sau vi chấn thương tái diễn. Đau sâu trong khớp gối, tràn dịch tái phát, có cảm giác kẹt cứng khớp đột ngột (khớp gối bị khóa không co duỗi được) do mảnh sụn xương bị bong tróc tạo thành 'chuột khớp' (Loose body) kẹt giữa lồi cầu đùi và mâm chày.",
        "action": "CẤP CỨU CHẤN THƯƠNG CHỈNH HÌNH: Chụp MRI khớp gối xác định kích thước mảnh bóc tách và tính ổn định. Phẫu thuật nội soi khớp gối gắp chuột khớp hoặc cố định lại mảnh sụn.",
        "figures": [
          {
            "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p362_img1.jpeg",
            "page": 362,
            "fig_number": "8.7",
            "caption_en": "Fig. 8.7: Osteochondral lesion over the inferior joint surface of the femur",
            "caption_vi": "🚨 Phim X-quang / Cờ đỏ: Viêm sụn xương bóc tách đùi (Femoral OCD) tạo dị vật khớp (Fig. 8.7)",
            "role_type": "redflag",
            "width": 1003,
            "height": 664
          }
        ]
      },
      {
        "category": "Cờ Đỏ Các Dạng Rách Sụn Chêm Phức Tạp (Meniscal Tear Patterns / Bucket-Handle)",
        "signs": "Chấn thương xoắn vặn khớp gối khi chân đang tì đất. Rách sụn chêm hình quai vali (Bucket-handle), rách nan hoa hoặc rách phức tạp di lệch gây kẹt cứng gập duỗi gối, teo cơ tứ đầu đùi nhanh chóng.",
        "action": "CHỈ ĐỊNH CHỤP MRI KHỚP GỐI KHẨN: Đánh giá vị trí rách trong vùng đỏ (vùng có mạch máu nuôi - Red zone) hay vùng trắng. Chuyển phẫu thuật nội soi khâu phục hồi sụn chêm sớm để tránh thoái hóa gối sớm.",
        "figures": [
          {
            "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p365_img1.jpeg",
            "page": 365,
            "fig_number": "8.9",
            "caption_en": "Fig. 8.9: Meniscal tear patterns: Bucket-handle, flap, complex",
            "caption_vi": "📐 Sơ đồ giải phẫu / cơ học: Các hình thái rách sụn chêm khớp gối & rách quai vali (Fig. 8.9)",
            "role_type": "redflag",
            "width": 1339,
            "height": 678
          }
        ]
      },
      {
        "category": "Cờ Đỏ Gãy Mỏi Hành Xương Bàn Chân (March Fracture / Metatarsal Stress Fracture)",
        "signs": "Đau chói mu bàn chân tăng dần sau đi bộ đường dài hoặc hành quân. Sưng nề khu trú trên thân xương bàn ngón 2 hoặc 3, ấn đau chói tại một điểm xương, đau dữ dội khi tì đè chịu lực.",
        "action": "BẤT ĐỘNG BÀN CHÂN BẰNG NẸP HOẶC GIÀY ĐẾ CỨNG: Chụp X-quang bàn chân (lưu ý có thể âm tính trong 2 tuần đầu) hoặc chụp MRI / xạ hình xương. Chống chỉ định tì đè chịu lực.",
        "figures": [
          {
            "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p380_img1.jpeg",
            "page": 380,
            "fig_number": "8.16",
            "caption_en": "Fig. 8.16: March fracture (Metatarsal stress fracture)",
            "caption_vi": "📐 Sơ đồ cơ học: Vị trí gãy mỏi do stress xương bàn chân (March Fracture) (Fig. 8.16)",
            "role_type": "redflag",
            "width": 1161,
            "height": 753
          }
        ]
      }
    ],
    "visceral_referrals": [
      {
        "source": "Đau Chuyển Từ Khớp Háng Xuống Khớp Gối (Hip-to-Knee Referred Pain)",
        "pattern": "Bệnh lý khớp háng (Thoái hóa háng, Trượt biểu mô chỏm đùi SCFE, Viêm khớp háng) kích thích thần kinh bịt (Obturator nerve) quy chiếu đau xuống mặt trong và mặt trước khớp gối.",
        "differential": "Ở trẻ em hoặc người lớn tuổi than phiền đau gối nhưng khám gối hoàn toàn bình thường -> BẮT BUỘC PHẢI KHÁM KHỚP HÁNG!",
        "figures": []
      },
      {
        "source": "Đau Rễ Thần Kinh Thắt Lưng (L3-L4-L5-S1 Radiculopathy)",
        "pattern": "Rễ L3-L4 đau mặt trước đùi và trước trong gối; Rễ L5 đau mặt ngoài cẳng chân và mu chân ngón cái; Rễ S1 đau bắp chân lan xuống gót và bờ ngoài bàn chân.",
        "differential": "Khám cột sống thắt lưng, nghiệm pháp SLR, Slump test và đánh giá phản xạ gân gót.",
        "figures": []
      }
    ],
    "drug_induced": [
      "Quinolone (Levofloxacin/Ciprofloxacin): Thủ phạm kinh điển gây đứt gân gót Achilles.",
      "Lợi tiểu Thiazide: Kích hoạt cơn Gút cấp tại khớp bàn ngón 1 (Podagra).",
      "Hóa trị ung thư (Paclitaxel/Cisplatin): Tê bì dị cảm bỏng rát hai bàn chân (CIPN)."
    ],
    "examination_procedures": [
      {
        "name": "Nghiệm pháp Lachman (Tiêu Chuẩn Vàng Đứt Dây Chằng Chéo Trước ACL)",
        "technique": "Bệnh nhân nằm ngửa, gập gối 20–30 độ. Bác sĩ dùng một tay cố định đầu dưới xương đùi, tay kia nắm chắc phần trên mâm chày và kéo mâm chày ra phía trước một cách dứt khoát.",
        "significance": "Nếu mâm chày trượt ra trước quá mức so với bên lành (> 3–5 mm) và mất cảm giác điểm dừng chắc chắn (Soft end-feel), nghiệm pháp dương tính báo hiệu đứt hoàn toàn dây chằng chéo trước.",
        "sensitivity": "85–87%",
        "specificity": "94–96%",
        "accuracy": {
          "sn": "85–87%",
          "sp": "94–96%"
        },
        "clinical_role": "Tiêu chuẩn vàng khám lâm sàng đứt ACL, độ tin cậy vượt trội so với ngăn kéo trước",
        "diagnostic_role": "Tiêu chuẩn vàng khám lâm sàng đứt ACL, độ tin cậy vượt trội so với ngăn kéo trước",
        "figures": [
          {
            "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p407_img1.jpeg",
            "page": 407,
            "fig_number": "8.49",
            "caption_en": "Fig. 8.49: Lachman test",
            "caption_vi": "🩺 Thao tác khám: Tiêu chuẩn vàng khám đứt dây chằng chéo trước ACL - Nghiệm pháp Lachman (Fig. 8.49)",
            "role_type": "exam",
            "width": 958,
            "height": 650
          }
        ]
      },
      {
        "name": "Nghiệm pháp Pivot Shift (Mất Vững Xoay Khớp Gối Trong Đứt ACL)",
        "technique": "Bệnh nhân nằm ngửa thả lỏng cơ tứ đầu. Bác sĩ cầm gót chân xoay trong cẳng chân, dùng lòng bàn tay kia tạo lực vẹo ngoài (Valgus) lên đầu trên xương chày trong khi từ từ gập khớp gối từ tư thế duỗi thẳng.",
        "significance": "Ở góc gối khoảng 20–30 độ, mâm chày ngoài đang bán trật ra trước đột ngột trượt giật lùi về vị trí bình thường với tiếng 'khục' rõ rệt. Dương tính khẳng định mất vững xoay cơ năng của khớp gối.",
        "sensitivity": "24–38%",
        "specificity": "98–100%",
        "accuracy": {
          "sn": "24–38%",
          "sp": "98–100%"
        },
        "clinical_role": "Độ đặc hiệu 98–100%, dương tính là khẳng định đứt ACL kèm mất vững chức năng mổ",
        "diagnostic_role": "Độ đặc hiệu 98–100%, dương tính là khẳng định đứt ACL kèm mất vững chức năng mổ",
        "figures": [
          {
            "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p411_img1.jpeg",
            "page": 411,
            "fig_number": "8.53A",
            "caption_en": "Fig. 8.53A: Pivot shift test",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp chuyển trục mất vững xoay Pivot Shift (Fig. 8.53A)",
            "role_type": "exam",
            "width": 958,
            "height": 706
          }
        ]
      },
      {
        "name": "Nghiệm pháp McMurray (Khám Rách Sụn Chêm Trong & Ngoài)",
        "technique": "Bệnh nhân nằm ngửa. Bác sĩ gập tối đa khớp gối và khớp háng. Một tay cầm gót chân xoay ngoài cẳng chân (khám sụn chêm trong) hoặc xoay trong cẳng chân (khám sụn chêm ngoài), đồng thời tay kia đặt ở khe khớp gối tạo lực vẹo ngoài/vẹo trong rồi duỗi gối từ từ.",
        "significance": "Kẹp phần rách sụn chêm giữa mâm chày và lồi cầu đùi. Xuất hiện tiếng 'lục cục' kèm đau nhói chói ở khe khớp là nghiệm pháp dương tính.",
        "sensitivity": "53–70%",
        "specificity": "59–97%",
        "accuracy": {
          "sn": "53–70%",
          "sp": "59–97%"
        },
        "clinical_role": "Khám kinh điển phát hiện rách sụn chêm sau chấn thương thể thao hoặc thoái hóa",
        "diagnostic_role": "Khám kinh điển phát hiện rách sụn chêm sau chấn thương thể thao hoặc thoái hóa",
        "figures": [
          {
            "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p406_img1.jpeg",
            "page": 406,
            "fig_number": "8.47",
            "caption_en": "Fig. 8.47: McMurray's test",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp xoay duỗi gối khám rách sụn chêm McMurray (Fig. 8.47)",
            "role_type": "exam",
            "width": 958,
            "height": 721
          }
        ]
      },
      {
        "name": "Khám Dây Chằng Bên Vẹo Ngoài & Vẹo Trong (Valgus & Varus Stress Tests)",
        "technique": "Bác sĩ kiểm tra ở góc gối gập nhẹ 30 độ. Một tay cố định đầu dưới xương đùi, tay kia cầm cổ chân kéo cẳng chân sang phía ngoài (Valgus stress - khám MCL) hoặc đẩy cẳng chân vào trong (Varus stress - khám LCL).",
        "significance": "Kiểm tra độ giãn hoặc rách đứt dây chằng bên chày (MCL) hoặc dây chằng bên mác (LCL). Khe khớp mở rộng bất thường hoặc đau chói khe khớp xác nhận tổn thương dây chằng bên.",
        "sensitivity": "86–91%",
        "specificity": "99%",
        "accuracy": {
          "sn": "86–91%",
          "sp": "99%"
        },
        "clinical_role": "Độ đặc hiệu 99% xác định tổn thương đứt dây chằng bên chày và bên mác khớp gối",
        "diagnostic_role": "Độ đặc hiệu 99% xác định tổn thương đứt dây chằng bên chày và bên mác khớp gối",
        "figures": [
          {
            "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p407_img2.jpeg",
            "page": 407,
            "fig_number": "8.50A-B",
            "caption_en": "Figs. 8.50A-B: Valgus and varus stress tests for collateral ligaments",
            "caption_vi": "🩺 Thao tác khám: Khám áp lực vẹo ngoài/vẹo trong kiểm tra dây chằng bên MCL/LCL (Figs. 8.50A-B)",
            "role_type": "exam",
            "width": 958,
            "height": 639
          }
        ]
      },
      {
        "name": "Dấu Hiệu Mulder (Mulder's Click Test - Khám U Thần Kinh Morton)",
        "technique": "Bác sĩ dùng một tay bóp ép ngang các chỏm xương bàn chân 1 đến 5 vào nhau, đồng thời dùng ngón cái và ngón trỏ của tay kia ấn ép trực tiếp từ mặt lòng lên kẽ gian ngón chân 3–4 (hoặc 2–3).",
        "significance": "Gây kẹp cơ học u thần kinh Morton giữa hai đầu xương bàn chân. Cảm nhận tiếng 'tách' hoặc 'click' cơ học kèm đau nhói chói phóng điện lan ra hai ngón chân xác nhận u thần kinh Morton.",
        "sensitivity": "82%",
        "specificity": "100%",
        "accuracy": {
          "sn": "82%",
          "sp": "100%"
        },
        "clinical_role": "Độ đặc hiệu tuyệt đối 100% chẩn đoán u thần kinh gian ngón Morton bàn chân",
        "diagnostic_role": "Độ đặc hiệu tuyệt đối 100% chẩn đoán u thần kinh gian ngón Morton bàn chân",
        "figures": [
          {
            "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p412_img1.jpeg",
            "page": 412,
            "fig_number": "8.55",
            "caption_en": "Fig. 8.55: Mulder's click test",
            "caption_vi": "🩺 Thao tác khám: Dấu hiệu tiếng lục cục Mulder chẩn đoán u thần kinh Morton (Fig. 8.55)",
            "role_type": "exam",
            "width": 525,
            "height": 798
          }
        ]
      }
    ],
    "differential_table": [
      {
        "condition": "Rách sụn chêm khớp gối (Meniscal Tear)",
        "onset": "Đau khe khớp gối sau chấn thương vặn gối hoặc thoái hóa, cảm giác kẹt khớp vướng khớp",
        "aggravating": "Ngồi xổm, xoay vặn người khi chân tì đất, đi xuống cầu thang",
        "key_differentiator": "Nghiệm pháp McMurray dương tính, ấn đau chói chính xác dọc khe khớp trong/ngoài",
        "confirmatory_test": "Nghiệm pháp McMurray & Apley Grind Test & Thessaly Test",
        "gold_standard": "Chụp MRI Khớp gối 1.5 - 3.0 Tesla độ phân giải cao",
        "web1_procedure_id": "knee-suprapatellar"
      },
      {
        "condition": "Hội chứng đau bánh chè đùi (PFPS / Chondromalacia)",
        "onset": "Đau âm ỉ quanh hoặc sau xương bánh chè, xuất hiện ở người trẻ hoặc vận động viên chạy bộ",
        "aggravating": "Đi xuống cầu thang, ngồi gập gối lâu (Dấu hiệu rạp hát - Movie sign), ngồi xổm",
        "key_differentiator": "Ấn ép xương bánh chè vào rãnh ròng rọc lồi cầu đùi đau chói (Patellar grind test), không tràn dịch khớp",
        "confirmatory_test": "Nghiệm pháp Clarke test (Patellar Grind) & McConnell test",
        "gold_standard": "Khám lâm sàng + Chụp X-quang khớp bánh chè đùi tư thế Merchant view",
        "web1_procedure_id": "genicular-nerves"
      },
      {
        "condition": "Viêm gân bánh chè (Patellar Tendinopathy / Jumper's knee)",
        "onset": "Đau chói tại cực dưới xương bánh chè sau các hoạt động nhảy cao hoặc chạy nước rút",
        "aggravating": "Nhảy tiếp đất, gập gối sâu có tải trọng, ấn trực tiếp vào cực dưới bánh chè",
        "key_differentiator": "Ấn đau chói chính xác tại cực dưới xương bánh chè (Bassett sign), gân bánh chè dày lên",
        "confirmatory_test": "Khám sờ ấn cực dưới xương bánh chè khi duỗi gối vs gập gối (Bassett test)",
        "gold_standard": "Siêu âm gân bánh chè độ phân giải cao thấy giảm âm và tăng sinh mạch máu Doppler",
        "web1_procedure_id": "patellar-tendon-fenestration"
      },
      {
        "condition": "Viêm cân gan chân (Plantar Fasciitis)",
        "onset": "Đau nhói buốt gót chân bước chân đầu tiên khi thức dậy buổi sáng bước xuống giường",
        "aggravating": "Đi lại sau thời gian nghỉ ngơi, đi chân trần trên sàn cứng, đứng lâu",
        "key_differentiator": "Ấn đau chói tại củ trong xương gót, nghiệm pháp Windlass (duỗi tối đa ngón chân cái) tái hiện đau gót",
        "confirmatory_test": "Nghiệm pháp Windlass Test duỗi ngón chân cái kéo căng cân gan chân",
        "gold_standard": "Siêu âm cân gan chân thấy chiều dày cân bám xương gót > 4.0 - 4.5 mm",
        "web1_procedure_id": "plantar-fascia"
      },
      {
        "condition": "U thần kinh Morton (Morton's Neuroma)",
        "onset": "Đau rát bỏng, tê bì vùng bàn chân trước, cảm giác như dẫm phải hòn sỏi trong giày",
        "aggravating": "Đi giày chật mũi, đi giày cao gót, chạy bộ trên nền cứng",
        "key_differentiator": "Dấu hiệu Mulder (Mulder's click) dương tính: ép ngang các chỏm xương bàn gây tiếng tách đau chói",
        "confirmatory_test": "Dấu hiệu Mulder's Click Test bóp ép ngang xương bàn chân",
        "gold_standard": "Siêu âm bàn chân phát hiện khối u bao dây thần kinh kẽ ngón 3-4 hình bầu dục > 5mm",
        "web1_procedure_id": "ankle-nerve-blocks"
      }
    ],
    "figures": [
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p362_img1.jpeg",
        "page": 362,
        "fig_number": "8.7",
        "caption_en": "Fig. 8.7: Osteochondral lesion over the inferior joint surface of the femur",
        "caption_vi": "🚨 Phim X-quang / Cờ đỏ: Viêm sụn xương bóc tách đùi (Femoral OCD) tạo dị vật khớp (Fig. 8.7)",
        "role_type": "redflag",
        "width": 1003,
        "height": 664
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p365_img1.jpeg",
        "page": 365,
        "fig_number": "8.9",
        "caption_en": "Fig. 8.9: Meniscal tear patterns: Bucket-handle, flap, complex",
        "caption_vi": "📐 Sơ đồ giải phẫu / cơ học: Các hình thái rách sụn chêm khớp gối & rách quai vali (Fig. 8.9)",
        "role_type": "redflag",
        "width": 1339,
        "height": 678
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p380_img1.jpeg",
        "page": 380,
        "fig_number": "8.16",
        "caption_en": "Fig. 8.16: March fracture (Metatarsal stress fracture)",
        "caption_vi": "📐 Sơ đồ cơ học: Vị trí gãy mỏi do stress xương bàn chân (March Fracture) (Fig. 8.16)",
        "role_type": "redflag",
        "width": 1161,
        "height": 753
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p407_img1.jpeg",
        "page": 407,
        "fig_number": "8.49",
        "caption_en": "Fig. 8.49: Lachman test",
        "caption_vi": "🩺 Thao tác khám: Tiêu chuẩn vàng khám đứt dây chằng chéo trước ACL - Nghiệm pháp Lachman (Fig. 8.49)",
        "role_type": "exam",
        "width": 958,
        "height": 650
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p411_img1.jpeg",
        "page": 411,
        "fig_number": "8.53A",
        "caption_en": "Fig. 8.53A: Pivot shift test",
        "caption_vi": "🩺 Thao tác khám: Nghiệm pháp chuyển trục mất vững xoay Pivot Shift (Fig. 8.53A)",
        "role_type": "exam",
        "width": 958,
        "height": 706
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p406_img1.jpeg",
        "page": 406,
        "fig_number": "8.47",
        "caption_en": "Fig. 8.47: McMurray's test",
        "caption_vi": "🩺 Thao tác khám: Nghiệm pháp xoay duỗi gối khám rách sụn chêm McMurray (Fig. 8.47)",
        "role_type": "exam",
        "width": 958,
        "height": 721
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p407_img2.jpeg",
        "page": 407,
        "fig_number": "8.50A-B",
        "caption_en": "Figs. 8.50A-B: Valgus and varus stress tests for collateral ligaments",
        "caption_vi": "🩺 Thao tác khám: Khám áp lực vẹo ngoài/vẹo trong kiểm tra dây chằng bên MCL/LCL (Figs. 8.50A-B)",
        "role_type": "exam",
        "width": 958,
        "height": 639
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p412_img1.jpeg",
        "page": 412,
        "fig_number": "8.55",
        "caption_en": "Fig. 8.55: Mulder's click test",
        "caption_vi": "🩺 Thao tác khám: Dấu hiệu tiếng lục cục Mulder chẩn đoán u thần kinh Morton (Fig. 8.55)",
        "role_type": "exam",
        "width": 525,
        "height": 798
      }
    ],
    "stage_2_somatic_dysfunctions": [
      "Hạn chế di động đầu trên xương mác (Superior tibiofibular joint restriction): Gây đau mặt ngoài gối và cổ chân khi ngồi xổm hoặc chạy.",
      "Mất cân bằng bánh chè - đùi (Patellar lateral tracking & tilt): Kéo lệch xương bánh chè ra ngoài gây mòn sụn khớp bánh chè đùi.",
      "Mất độ ngửa cổ chân và khóa khớp sên - ghe (Subtalar joint pronation): Gây căng dãn quá mức cân gan chân và gân chày sau."
    ],
    "stage_3_guidemap_intervention": "Kỹ thuật giải phóng di động đầu trên xương mác và diện khớp bánh chè; Tiêm chất nhờn Acid Hyaluronic hoặc PRP dưới hướng dẫn siêu âm vào ổ khớp gối (Xem Web 1: Tiêm Khớp Gối, Tiêm Dịch Khớp Khoeo / Nang Baker, Tiêm Cân Gan Chân).",
    "recommended_web1_procedures": [
      {
        "id": "knee-suprapatellar",
        "nameVi": "Tiêm nội khớp gối qua ngách trên bánh chè (Suprapatellar Recess)",
        "role": "Thoái hóa khớp gối, tràn dịch khớp gối, tiêm Axit Hyaluronic hoặc Corticoid"
      },
      {
        "id": "genicular-nerves",
        "nameVi": "Phong bế & Diệt thần kinh cảm giác khớp gối (Genicular RFA)",
        "role": "Đau khớp gối mạn tính kháng trị do thoái hóa hoặc đau dai dẳng sau thay khớp gối"
      },
      {
        "id": "bakers-cyst",
        "nameVi": "Chọc hút, phá vách và tiêm nang hoạt dịch khoeo chân (Baker's Cyst)",
        "role": "Nang Baker căng tức vùng khoeo chèn ép mạch máu thần kinh"
      },
      {
        "id": "pes-anserinus",
        "nameVi": "Tiêm bao hoạt dịch gân chân ngỗng (Pes Anserinus Bursa)",
        "role": "Viêm bao hoạt dịch gân chân ngỗng mặt trong dưới gối"
      },
      {
        "id": "patellar-tendon-fenestration",
        "nameVi": "Can thiệp châm kim đa điểm và bóc tách gân bánh chè",
        "role": "Bệnh lý thoái hóa gân bánh chè (Jumper's Knee) kháng trị"
      },
      {
        "id": "distal-itb-bursa",
        "nameVi": "Tiêm bao hoạt dịch dải chậu chày xa (Distal ITB Bursa)",
        "role": "Hội chứng dải chậu chày (Runner's Knee) đau chói lồi cầu ngoài đùi"
      },
      {
        "id": "tibiotalar-joint",
        "nameVi": "Tiêm nội khớp cổ chân (Khớp chày - sên lối trước)",
        "role": "Thoái hóa khớp cổ chân, viêm màng hoạt dịch khớp chày sên sau chấn thương"
      },
      {
        "id": "subtalar-joint",
        "nameVi": "Tiêm nội khớp dưới sên tiếp cận lối ngoài",
        "role": "Đau vẹo trong bàn chân, thoái hóa khớp dưới sên sau gãy xương gót"
      },
      {
        "id": "ankle-nerve-blocks",
        "nameVi": "Bộ phong bế 5 dây thần kinh cảm giác cổ bàn chân",
        "role": "Giảm đau phẫu thuật bàn ngón chân, hội chứng ống cổ chân (Tarsal Tunnel)"
      },
      {
        "id": "plantar-fascia",
        "nameVi": "Tiêm cân gan chân điều trị Viêm cân gan chân (Plantar Fasciitis)",
        "role": "Viêm cân gan chân bám xương gót dai dẳng không đáp ứng vật lý trị liệu"
      }
    ],
    "provocative_tests": [
      {
        "name": "Nghiệm pháp Lachman (Tiêu Chuẩn Vàng Đứt Dây Chằng Chéo Trước ACL)",
        "technique": "Bệnh nhân nằm ngửa, gập gối 20–30 độ. Bác sĩ dùng một tay cố định đầu dưới xương đùi, tay kia nắm chắc phần trên mâm chày và kéo mâm chày ra phía trước một cách dứt khoát.",
        "significance": "Nếu mâm chày trượt ra trước quá mức so với bên lành (> 3–5 mm) và mất cảm giác điểm dừng chắc chắn (Soft end-feel), nghiệm pháp dương tính báo hiệu đứt hoàn toàn dây chằng chéo trước.",
        "sensitivity": "85–87%",
        "specificity": "94–96%",
        "accuracy": {
          "sn": "85–87%",
          "sp": "94–96%"
        },
        "clinical_role": "Tiêu chuẩn vàng khám lâm sàng đứt ACL, độ tin cậy vượt trội so với ngăn kéo trước",
        "diagnostic_role": "Tiêu chuẩn vàng khám lâm sàng đứt ACL, độ tin cậy vượt trội so với ngăn kéo trước",
        "figures": [
          {
            "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p407_img1.jpeg",
            "page": 407,
            "fig_number": "8.49",
            "caption_en": "Fig. 8.49: Lachman test",
            "caption_vi": "🩺 Thao tác khám: Tiêu chuẩn vàng khám đứt dây chằng chéo trước ACL - Nghiệm pháp Lachman (Fig. 8.49)",
            "role_type": "exam",
            "width": 958,
            "height": 650
          }
        ]
      },
      {
        "name": "Nghiệm pháp Pivot Shift (Mất Vững Xoay Khớp Gối Trong Đứt ACL)",
        "technique": "Bệnh nhân nằm ngửa thả lỏng cơ tứ đầu. Bác sĩ cầm gót chân xoay trong cẳng chân, dùng lòng bàn tay kia tạo lực vẹo ngoài (Valgus) lên đầu trên xương chày trong khi từ từ gập khớp gối từ tư thế duỗi thẳng.",
        "significance": "Ở góc gối khoảng 20–30 độ, mâm chày ngoài đang bán trật ra trước đột ngột trượt giật lùi về vị trí bình thường với tiếng 'khục' rõ rệt. Dương tính khẳng định mất vững xoay cơ năng của khớp gối.",
        "sensitivity": "24–38%",
        "specificity": "98–100%",
        "accuracy": {
          "sn": "24–38%",
          "sp": "98–100%"
        },
        "clinical_role": "Độ đặc hiệu 98–100%, dương tính là khẳng định đứt ACL kèm mất vững chức năng mổ",
        "diagnostic_role": "Độ đặc hiệu 98–100%, dương tính là khẳng định đứt ACL kèm mất vững chức năng mổ",
        "figures": [
          {
            "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p411_img1.jpeg",
            "page": 411,
            "fig_number": "8.53A",
            "caption_en": "Fig. 8.53A: Pivot shift test",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp chuyển trục mất vững xoay Pivot Shift (Fig. 8.53A)",
            "role_type": "exam",
            "width": 958,
            "height": 706
          }
        ]
      },
      {
        "name": "Nghiệm pháp McMurray (Khám Rách Sụn Chêm Trong & Ngoài)",
        "technique": "Bệnh nhân nằm ngửa. Bác sĩ gập tối đa khớp gối và khớp háng. Một tay cầm gót chân xoay ngoài cẳng chân (khám sụn chêm trong) hoặc xoay trong cẳng chân (khám sụn chêm ngoài), đồng thời tay kia đặt ở khe khớp gối tạo lực vẹo ngoài/vẹo trong rồi duỗi gối từ từ.",
        "significance": "Kẹp phần rách sụn chêm giữa mâm chày và lồi cầu đùi. Xuất hiện tiếng 'lục cục' kèm đau nhói chói ở khe khớp là nghiệm pháp dương tính.",
        "sensitivity": "53–70%",
        "specificity": "59–97%",
        "accuracy": {
          "sn": "53–70%",
          "sp": "59–97%"
        },
        "clinical_role": "Khám kinh điển phát hiện rách sụn chêm sau chấn thương thể thao hoặc thoái hóa",
        "diagnostic_role": "Khám kinh điển phát hiện rách sụn chêm sau chấn thương thể thao hoặc thoái hóa",
        "figures": [
          {
            "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p406_img1.jpeg",
            "page": 406,
            "fig_number": "8.47",
            "caption_en": "Fig. 8.47: McMurray's test",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp xoay duỗi gối khám rách sụn chêm McMurray (Fig. 8.47)",
            "role_type": "exam",
            "width": 958,
            "height": 721
          }
        ]
      },
      {
        "name": "Khám Dây Chằng Bên Vẹo Ngoài & Vẹo Trong (Valgus & Varus Stress Tests)",
        "technique": "Bác sĩ kiểm tra ở góc gối gập nhẹ 30 độ. Một tay cố định đầu dưới xương đùi, tay kia cầm cổ chân kéo cẳng chân sang phía ngoài (Valgus stress - khám MCL) hoặc đẩy cẳng chân vào trong (Varus stress - khám LCL).",
        "significance": "Kiểm tra độ giãn hoặc rách đứt dây chằng bên chày (MCL) hoặc dây chằng bên mác (LCL). Khe khớp mở rộng bất thường hoặc đau chói khe khớp xác nhận tổn thương dây chằng bên.",
        "sensitivity": "86–91%",
        "specificity": "99%",
        "accuracy": {
          "sn": "86–91%",
          "sp": "99%"
        },
        "clinical_role": "Độ đặc hiệu 99% xác định tổn thương đứt dây chằng bên chày và bên mác khớp gối",
        "diagnostic_role": "Độ đặc hiệu 99% xác định tổn thương đứt dây chằng bên chày và bên mác khớp gối",
        "figures": [
          {
            "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p407_img2.jpeg",
            "page": 407,
            "fig_number": "8.50A-B",
            "caption_en": "Figs. 8.50A-B: Valgus and varus stress tests for collateral ligaments",
            "caption_vi": "🩺 Thao tác khám: Khám áp lực vẹo ngoài/vẹo trong kiểm tra dây chằng bên MCL/LCL (Figs. 8.50A-B)",
            "role_type": "exam",
            "width": 958,
            "height": 639
          }
        ]
      },
      {
        "name": "Dấu Hiệu Mulder (Mulder's Click Test - Khám U Thần Kinh Morton)",
        "technique": "Bác sĩ dùng một tay bóp ép ngang các chỏm xương bàn chân 1 đến 5 vào nhau, đồng thời dùng ngón cái và ngón trỏ của tay kia ấn ép trực tiếp từ mặt lòng lên kẽ gian ngón chân 3–4 (hoặc 2–3).",
        "significance": "Gây kẹp cơ học u thần kinh Morton giữa hai đầu xương bàn chân. Cảm nhận tiếng 'tách' hoặc 'click' cơ học kèm đau nhói chói phóng điện lan ra hai ngón chân xác nhận u thần kinh Morton.",
        "sensitivity": "82%",
        "specificity": "100%",
        "accuracy": {
          "sn": "82%",
          "sp": "100%"
        },
        "clinical_role": "Độ đặc hiệu tuyệt đối 100% chẩn đoán u thần kinh gian ngón Morton bàn chân",
        "diagnostic_role": "Độ đặc hiệu tuyệt đối 100% chẩn đoán u thần kinh gian ngón Morton bàn chân",
        "figures": [
          {
            "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p412_img1.jpeg",
            "page": 412,
            "fig_number": "8.55",
            "caption_en": "Fig. 8.55: Mulder's click test",
            "caption_vi": "🩺 Thao tác khám: Dấu hiệu tiếng lục cục Mulder chẩn đoán u thần kinh Morton (Fig. 8.55)",
            "role_type": "exam",
            "width": 525,
            "height": 798
          }
        ]
      }
    ],
    "differential_matrix": [
      {
        "condition": "Rách sụn chêm khớp gối (Meniscal Tear)",
        "onset": "Đau khe khớp gối sau chấn thương vặn gối hoặc thoái hóa, cảm giác kẹt khớp vướng khớp",
        "aggravating": "Ngồi xổm, xoay vặn người khi chân tì đất, đi xuống cầu thang",
        "key_differentiator": "Nghiệm pháp McMurray dương tính, ấn đau chói chính xác dọc khe khớp trong/ngoài",
        "confirmatory_test": "Nghiệm pháp McMurray & Apley Grind Test & Thessaly Test",
        "gold_standard": "Chụp MRI Khớp gối 1.5 - 3.0 Tesla độ phân giải cao",
        "web1_procedure_id": "knee-suprapatellar"
      },
      {
        "condition": "Hội chứng đau bánh chè đùi (PFPS / Chondromalacia)",
        "onset": "Đau âm ỉ quanh hoặc sau xương bánh chè, xuất hiện ở người trẻ hoặc vận động viên chạy bộ",
        "aggravating": "Đi xuống cầu thang, ngồi gập gối lâu (Dấu hiệu rạp hát - Movie sign), ngồi xổm",
        "key_differentiator": "Ấn ép xương bánh chè vào rãnh ròng rọc lồi cầu đùi đau chói (Patellar grind test), không tràn dịch khớp",
        "confirmatory_test": "Nghiệm pháp Clarke test (Patellar Grind) & McConnell test",
        "gold_standard": "Khám lâm sàng + Chụp X-quang khớp bánh chè đùi tư thế Merchant view",
        "web1_procedure_id": "genicular-nerves"
      },
      {
        "condition": "Viêm gân bánh chè (Patellar Tendinopathy / Jumper's knee)",
        "onset": "Đau chói tại cực dưới xương bánh chè sau các hoạt động nhảy cao hoặc chạy nước rút",
        "aggravating": "Nhảy tiếp đất, gập gối sâu có tải trọng, ấn trực tiếp vào cực dưới bánh chè",
        "key_differentiator": "Ấn đau chói chính xác tại cực dưới xương bánh chè (Bassett sign), gân bánh chè dày lên",
        "confirmatory_test": "Khám sờ ấn cực dưới xương bánh chè khi duỗi gối vs gập gối (Bassett test)",
        "gold_standard": "Siêu âm gân bánh chè độ phân giải cao thấy giảm âm và tăng sinh mạch máu Doppler",
        "web1_procedure_id": "patellar-tendon-fenestration"
      },
      {
        "condition": "Viêm cân gan chân (Plantar Fasciitis)",
        "onset": "Đau nhói buốt gót chân bước chân đầu tiên khi thức dậy buổi sáng bước xuống giường",
        "aggravating": "Đi lại sau thời gian nghỉ ngơi, đi chân trần trên sàn cứng, đứng lâu",
        "key_differentiator": "Ấn đau chói tại củ trong xương gót, nghiệm pháp Windlass (duỗi tối đa ngón chân cái) tái hiện đau gót",
        "confirmatory_test": "Nghiệm pháp Windlass Test duỗi ngón chân cái kéo căng cân gan chân",
        "gold_standard": "Siêu âm cân gan chân thấy chiều dày cân bám xương gót > 4.0 - 4.5 mm",
        "web1_procedure_id": "plantar-fascia"
      },
      {
        "condition": "U thần kinh Morton (Morton's Neuroma)",
        "onset": "Đau rát bỏng, tê bì vùng bàn chân trước, cảm giác như dẫm phải hòn sỏi trong giày",
        "aggravating": "Đi giày chật mũi, đi giày cao gót, chạy bộ trên nền cứng",
        "key_differentiator": "Dấu hiệu Mulder (Mulder's click) dương tính: ép ngang các chỏm xương bàn gây tiếng tách đau chói",
        "confirmatory_test": "Dấu hiệu Mulder's Click Test bóp ép ngang xương bàn chân",
        "gold_standard": "Siêu âm bàn chân phát hiện khối u bao dây thần kinh kẽ ngón 3-4 hình bầu dục > 5mm",
        "web1_procedure_id": "ankle-nerve-blocks"
      }
    ]
  },
  {
    "id": "elbow-wrist-hand-pain",
    "chapter": 10,
    "region": "elbow_hand",
    "region_vi": "Khuỷu, Cổ & Bàn Tay",
    "icon": "🖐️",
    "title": "Elbow, Forearm, Wrist & Hand Regional Pain",
    "title_vi": "🖐️ Đau Khớp Khuỷu, Cổ Tay, Bàn Tay & Ống Cổ Tay",
    "chief_complaint": "Phàn nàn chính: Đau lồi cầu ngoài khuỷu tay khi cầm nắm (Tennis elbow), tê bì ngón 1-2-3 thức giấc nửa đêm (Hội chứng ống cổ tay), đau nhói gốc ngón cái khi ẵm con (Viêm gân De Quervain), ngón tay bị kẹt gập không duỗi được (Ngón tay lò xo).",
    "author": "GS. Deepak Sebastian (Chương 10, pp. 467-512)",
    "summary": "Chẩn đoán phân biệt chi trên ngoại vi: Viêm lồi cầu ngoài (Tennis Elbow), viêm lồi cầu trong (Golfer Elbow), chèn ép thần kinh trụ tại rãnh khuỷu (Cubital Tunnel). Bàn cổ tay: Hội chứng ống cổ tay (CTS - TK giữa), viêm bao gân De Quervain, ngón tay lò xo (Trigger Finger), nang hoạt dịch cổ tay, thoái hóa khớp bàn ngón cái (CMC-1). CỜ ĐỎ: Hội chứng chèn ép khoang cẳng tay (Volkmann), Nhiễm trùng bao gân gấp bàn tay (4 dấu hiệu Kanavel), Hoại tử vô mạch xương thuyền / xương nguyệt (Kienböck), Gãy xương thuyền bỏ sót.",
    "stage_1_systemic_red_flags": [
      {
        "category": "Cờ Đỏ Viêm Bao Gân Gấp Mủ Bàn Tay (Kanavel's Four Cardinal Signs)",
        "signs": "Bốn dấu hiệu kinh điển của Kanavel: 1. Toàn bộ ngón tay sưng nề hình thoi (ngón tay xúc xích); 2. Ngón tay luôn giữ ở tư thế gập nhẹ; 3. Ấn đau chói dọc toàn bộ đường đi bao gân gấp; 4. ĐAU DỮ DỘI KHI DUỖI THỤ ĐỘNG NGÓN TAY (Dấu hiệu nhạy nhất!).",
        "action": "CẤP CỨU NGOẠI BÀN TAY TỐI KHẨN: Nguy cơ hoại tử gân và tàn phế bàn tay vĩnh viễn trong 24-48h! Phẫu thuật rạch mở dẫn lưu bao gân cấp cứu + Kháng sinh tĩnh mạch liều cao."
      },
      {
        "category": "Cờ Đỏ Hội Chứng Khoang Cẳng Tay & Co Rút Volkmann",
        "signs": "Đau dữ dội cẳng tay sau gãy trên lồi cầu xương cánh tay hoặc gãy hai xương cẳng tay, đau tăng khi duỗi thụ động các ngón tay, cẳng tay căng cứng như gỗ, mạch quay yếu, tê bì các ngón tay.",
        "action": "Tháo bỏ ngay bột/băng ép. Đo áp lực khoang cẳng tay và phẫu thuật mở cân cẳng tay khẩn cấp."
      },
      {
        "category": "Cờ Đỏ Gãy Xương Thuyền Bỏ Sót & Hoại Tử Tiêu Xương (Scaphoid Fracture & AVN)",
        "signs": "Ngã chống bàn tay duỗi, đau sưng cổ tay, ấn đau chói tại đáy hõm lào giải phẫu (Anatomical snuffbox tenderness) và củ xương thuyền ở mặt gan tay. Phim X-quang ban đầu có thể không thấy đường gãy!",
        "action": "Bất động nẹp ôm ngón cái ngay. Chụp MRI hoặc CT cổ tay để xác định gãy xương thuyền tránh biến chứng tiêu xương và khớp giả."
      },
      {
        "category": "Cờ Đỏ Hoại Tử Vô Mạch Xương Nguyệt (Kienböck's Disease)",
        "signs": "Đau cổ tay mạn tính vùng lưng cổ tay, sưng nề, giảm lực cầm nắm, gõ đau xương nguyệt ở người trẻ lao động thủ công hoặc dùng máy rung.",
        "action": "Chụp MRI cổ tay đánh giá hoại tử vô mạch xương nguyệt (Kienböck giai đoạn 1-4)."
      }
    ],
    "red_flags": [
      {
        "category": "Cờ Đỏ Rách Dây Chằng Bên Trụ Khuỷu & Bong Điểm Bám Gân Gấp (Elbow UCL Tear)",
        "signs": "Bệnh nhân ném bóng hoặc chấn thương vẹo ngoài quá mức. Đau chói dữ dội mặt trong khuỷu, cảm giác 'rách toạc' (Pop), mất vững khớp khuỷu, tê bì ngón 4–5 do kéo căng thần kinh trụ.",
        "action": "BẤT ĐỘNG KHUỶU TAY BẰNG NẸP SUGARTONG: Chụp MRI khớp khuỷu hoặc siêu âm động lực học đánh giá độ giãn đứt dây chằng bên trụ UCL. Chỉ định phẫu thuật tái tạo Tommy John ở vận động viên.",
        "figures": [
          {
            "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p487_img2.jpeg",
            "page": 487,
            "fig_number": "10.5",
            "caption_en": "Fig. 10.5: Medial collateral ligament tear and flexor muscle origin avulsion",
            "caption_vi": "📐 Sơ đồ giải phẫu: Nguyên ủy gân cơ gấp chung cẳng tay & dây chằng bên trụ UCL (Fig. 10.5)",
            "role_type": "redflag",
            "width": 926,
            "height": 603
          }
        ]
      },
      {
        "category": "Cờ Đỏ Rách Phức Hợp Sụn Sợi Tam Giác Cổ Tay (TFCC Tear & DRUJ Instability)",
        "signs": "Đau bờ trụ cổ tay sau ngã chống tay xoay sấp hoặc vặn cổ tay mạnh. Tiếng lục cục đau chói khi xoay ngửa cổ tay, lỏng lẻo khớp quay trụ dưới (DRUJ), nghiệm pháp tì đè nén góc trụ đau dữ dội.",
        "action": "BẤT ĐỘNG NẸP CỔ TAY Ở TƯ THẾ TRUNG TÍNH: Chụp MRI cổ tay ngắt lớp mỏng đánh giá rách đĩa sụn TFCC nhóm 1 (chấn thương) hay nhóm 2 (thoái hóa). Phẫu thuật nội soi khâu phục hồi đĩa sụn TFCC.",
        "figures": [
          {
            "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p489_img1.jpeg",
            "page": 489,
            "fig_number": "10.8",
            "caption_en": "Fig. 10.8: Triangular fibrocartilage complex (TFCC) tear",
            "caption_vi": "📐 Sơ đồ giải phẫu: Phức hợp sụn sợi tam giác cổ tay (TFCC) mỏm trâm trụ (Fig. 10.8)",
            "role_type": "redflag",
            "width": 658,
            "height": 903
          }
        ]
      },
      {
        "category": "Cờ Đỏ X-quang Chênh Lệch Xương Trụ Âm Tính & Bệnh Hoại Tử Xương Nguyệt Kienböck",
        "signs": "Đau âm ỉ mạn tính vùng lưng cổ tay ở người lao động rung lắc cổ tay. X-quang cho thấy xương trụ ngắn hơn xương quay (Negative ulnar variance) dồn 95% lực nén lên xương nguyệt gây vỡ nứt, xẹp hoại tử xương nguyệt (Kienböck disease).",
        "action": "CHỤP X-QUANG & MRI CỔ TAY ĐÁNH GIÁ GIAI ĐOẠN LICHTMAN: Chống chỉ định tiêm corticoid làm tiêu xương thêm. Bất động nẹp cổ tay, chuyển chuyên khoa Bàn tay can thiệp cân bằng chiều dài xương quay trụ hoặc ghép xương.",
        "figures": [
          {
            "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p506_img2.jpeg",
            "page": 506,
            "fig_number": "10.24",
            "caption_en": "Fig. 10.24: Radiograph showing negative ulnar variance associated with Kienböck's disease",
            "caption_vi": "🚨 Phim X-quang / Cờ đỏ: X-quang xương trụ ngắn & hoại tử vô mạch xương nguyệt Kienböck (Fig. 10.24)",
            "role_type": "redflag",
            "width": 958,
            "height": 718
          }
        ]
      }
    ],
    "visceral_referrals": [
      {
        "source": "Đau Rễ Cổ C6 - C7 - C8 (Cervical Radiculopathy)",
        "pattern": "Đau lan từ cổ gáy dọc xuống chi trên: Rễ C6 đau lan ra ngón cái và ngón trỏ (dễ nhầm với De Quervain và HC ống cổ tay); Rễ C7 đau ngón giữa; Rễ C8 đau ngón út và bờ trụ bàn tay (dễ nhầm với HC ống Guyon).",
        "differential": "Khám Spurling cổ (+), nghiệm pháp căng đám rối cánh tay ULTT (+), cử động gập duỗi cổ tay không làm thay đổi triệu chứng.",
        "figures": []
      }
    ],
    "drug_induced": [
      "Thuốc ức chế Aromatase (Anastrozole/Letrozole): Gây cứng khớp bàn tay, ngón tay lò xo (Trigger finger) và hội chứng ống cổ tay ở bệnh nhân K vú.",
      "Fluoroquinolones: Viêm gân duỗi cổ tay và gân ngón cái.",
      "Hóa trị liệu (Cisplatin/Paclitaxel): Tê bì dị cảm bốt găng tay (CIPN)."
    ],
    "examination_procedures": [
      {
        "name": "Nghiệm pháp Cozen (Khám Viêm Lồi Cầu Ngoài / Tennis Elbow)",
        "technique": "Bệnh nhân ngồi, khuỷu gập 90 độ, cẳng tay sấp hoàn toàn, bàn tay nắm chặt và duỗi cổ tay. Bác sĩ đặt ngón tay cái lên lồi cầu ngoài xương cánh tay để cố định, tay kia ấn mu bàn tay bệnh nhân xuống dưới trong khi bệnh nhân gắng sức kháng cự duỗi cổ tay.",
        "significance": "Gây lực co cơ đẳng trường tối đa của cơ duỗi cổ tay quay ngắn (ECRB) bám vào lồi cầu ngoài. Đau nhói chói tại lồi cầu ngoài khẳng định Tennis Elbow.",
        "sensitivity": "84–91%",
        "specificity": "75–88%",
        "accuracy": {
          "sn": "84–91%",
          "sp": "75–88%"
        },
        "clinical_role": "Tiêu chuẩn vàng khám viêm điểm bám gân lồi cầu ngoài khuỷu tay (Tennis Elbow)",
        "diagnostic_role": "Tiêu chuẩn vàng khám viêm điểm bám gân lồi cầu ngoài khuỷu tay (Tennis Elbow)",
        "figures": [
          {
            "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p507_img2.jpeg",
            "page": 507,
            "fig_number": "10.27",
            "caption_en": "Fig. 10.27: Cozen's test",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp kháng duỗi cổ tay Cozen khám Tennis Elbow (Fig. 10.27)",
            "role_type": "exam",
            "width": 958,
            "height": 798
          }
        ]
      },
      {
        "name": "Nghiệm pháp Maudsley (Maudsley's Test Duỗi Ngón 3 Kháng Lực)",
        "technique": "Bệnh nhân duỗi thẳng khuỷu tay, cẳng tay sấp, bàn tay xòe các ngón. Bác sĩ đặt một ngón tay ấn lên mặt mu đốt xa ngón tay thứ 3 (ngón giữa) và yêu cầu bệnh nhân gắng sức duỗi thẳng ngón 3 chống lại lực đè.",
        "significance": "Cơ duỗi ngón tay chung co độc lập. Đau chói ở lồi cầu ngoài khẳng định viêm gân duỗi ngón chung; đau cách lồi cầu ngoài 3–4 cm về phía dưới báo hiệu chèn ép thần kinh gian cốt sau (PIN) trong hội chứng đường hầm xương quay.",
        "sensitivity": "88%",
        "specificity": "71%",
        "accuracy": {
          "sn": "88%",
          "sp": "71%"
        },
        "clinical_role": "Chẩn đoán phân biệt Tennis Elbow với Hội chứng chèn ép dây thần kinh gian cốt sau (PIN)",
        "diagnostic_role": "Chẩn đoán phân biệt Tennis Elbow với Hội chứng chèn ép dây thần kinh gian cốt sau (PIN)",
        "figures": [
          {
            "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p508_img1.jpeg",
            "page": 508,
            "fig_number": "10.28",
            "caption_en": "Fig. 10.28: Maudsley's test",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp kháng duỗi ngón 3 Maudsley phân biệt chèn ép PIN (Fig. 10.28)",
            "role_type": "exam",
            "width": 958,
            "height": 626
          }
        ]
      },
      {
        "name": "Khám Vẹo Ngoài Khuỷu (Elbow Valgus Stress Test)",
        "technique": "Bệnh nhân ngồi, khuỷu gập nhẹ 20–30 độ để giải phóng mỏm khuỷu khỏi hố mỏm khuỷu. Bác sĩ dùng một tay đỡ mặt ngoài khuỷu tay làm điểm tựa, tay kia cầm cổ tay tạo lực bẻ vẹo ngoài (Valgus) ra xa thân mình.",
        "significance": "Kiểm tra độ vững chắc của dây chằng bên trụ (UCL). Đau nhói mặt trong khuỷu hoặc khe khớp trong mở rộng báo hiệu giãn đứt dây chằng bên trụ.",
        "sensitivity": "65%",
        "specificity": "95%",
        "accuracy": {
          "sn": "65%",
          "sp": "95%"
        },
        "clinical_role": "Độ đặc hiệu 95% phát hiện mất vững dây chằng bên trụ khuỷu ở vận động viên ném",
        "diagnostic_role": "Độ đặc hiệu 95% phát hiện mất vững dây chằng bên trụ khuỷu ở vận động viên ném",
        "figures": [
          {
            "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p506_img1.jpeg",
            "page": 506,
            "fig_number": "10.24",
            "caption_en": "Fig. 10.24: Valgus stress test of the elbow",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp ép vẹo ngoài khám dây chằng bên trụ khuỷu UCL (Fig. 10.24)",
            "role_type": "exam",
            "width": 958,
            "height": 735
          }
        ]
      },
      {
        "name": "Nghiệm pháp Gập Cổ Tay Phalen (Phalen's Test - Hội Chứng Ống Cổ Tay)",
        "technique": "Bệnh nhân nâng hai khuỷu tay ngang ngực, áp chặt hai mặt mu cổ tay vào nhau ở góc gập 90 độ hoàn toàn và duy trì tư thế này trong 60 giây liên tục.",
        "significance": "Làm tăng áp lực tối đa trong ống cổ tay và chèn ép cơ học trực tiếp lên dây thần kinh giữa đang bị viêm phù nề. Xuất hiện tê buốt, châm chích ngón cái, ngón trỏ, ngón giữa và nửa ngón nhẫn là nghiệm pháp dương tính.",
        "sensitivity": "68–75%",
        "specificity": "84–90%",
        "accuracy": {
          "sn": "68–75%",
          "sp": "84–90%"
        },
        "clinical_role": "Nghiệm pháp lâm sàng kinh điển và tin cậy nhất sàng lọc Hội chứng ống cổ tay (CTS)",
        "diagnostic_role": "Nghiệm pháp lâm sàng kinh điển và tin cậy nhất sàng lọc Hội chứng ống cổ tay (CTS)",
        "figures": [
          {
            "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p505_img2.jpeg",
            "page": 505,
            "fig_number": "10.23",
            "caption_en": "Fig. 10.23: Phalen's test",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp gập mu cổ tay Phalen khám Hội chứng ống cổ tay (Fig. 10.23)",
            "role_type": "exam",
            "width": 895,
            "height": 798
          }
        ]
      },
      {
        "name": "Nghiệm pháp Finkelstein (Finkelstein's Test - Viêm Bao Gân De Quervain)",
        "technique": "Bệnh nhân gập ngón tay cái vào trong lòng bàn tay, nắm chặt 4 ngón tay còn lại ôm trùm lấy ngón cái. Sau đó bác sĩ giữ cẳng tay bệnh nhân và nhẹ nhàng bẻ nghiêng cổ tay về phía xương trụ (Ulnar deviation).",
        "significance": "Kéo căng tối đa hai gân cơ dạng dài ngón cái (APL) và cơ duỗi ngắn ngón cái (EPB) chạy qua ngăn duỗi số 1 cổ tay. Đau chói dữ dội tại mỏm trâm quay xác nhận viêm bao gân De Quervain.",
        "sensitivity": "89–94%",
        "specificity": "85–98%",
        "accuracy": {
          "sn": "89–94%",
          "sp": "85–98%"
        },
        "clinical_role": "Độ nhạy và độ đặc hiệu cực cao (xấp xỉ 90–98%), tiêu chuẩn vàng chẩn đoán De Quervain",
        "diagnostic_role": "Độ nhạy và độ đặc hiệu cực cao (xấp xỉ 90–98%), tiêu chuẩn vàng chẩn đoán De Quervain",
        "figures": [
          {
            "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p507_img1.jpeg",
            "page": 507,
            "fig_number": "10.26",
            "caption_en": "Fig. 10.26: Finkelstein's test",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp nắm ngón cái nghiêng trụ Finkelstein khám De Quervain (Fig. 10.26)",
            "role_type": "exam",
            "width": 958,
            "height": 590
          }
        ]
      }
    ],
    "differential_table": [
      {
        "condition": "Viêm lồi cầu ngoài (Tennis Elbow / Lateral Epicondylalgia)",
        "onset": "Đau âm ỉ mặt ngoài khuỷu tay lan xuống cẳng tay, xuất hiện sau cử động duỗi cổ tay lặp lại",
        "aggravating": "Cầm nắm đồ vật nặng, vặn mở nắp chai, vặn tay nắm cửa, đánh vợt trái tay",
        "key_differentiator": "Nghiệm pháp Cozen dương tính, ấn đau chói chính xác tại gân duỗi chung lồi cầu ngoài",
        "confirmatory_test": "Nghiệm pháp Cozen test & Mill's test",
        "gold_standard": "Siêu âm gân duỗi cổ tay quay ngắn (ECRB) thấy rách vi thể, dày gân và tăng sinh mạch máu Doppler",
        "web1_procedure_id": "tennis-elbow"
      },
      {
        "condition": "Viêm lồi cầu trong (Golfer's Elbow / Medial Epicondylalgia)",
        "onset": "Đau nhức mặt trong khuỷu tay tại điểm bám gân cơ gấp cổ tay và cơ sấp tròn",
        "aggravating": "Gập cổ tay có kháng lực, động tác sấp cẳng tay mạnh, vung gậy đánh gôn",
        "key_differentiator": "Ấn đau chói tại mỏm trên lồi cầu trong, nghiệm pháp Reverse Cozen (kháng gập cổ tay) đau chói",
        "confirmatory_test": "Nghiệm pháp Reverse Cozen (Kháng gập cổ tay ở tư thế ngửa)",
        "gold_standard": "Siêu âm gân gấp chung lồi cầu trong thấy phù nề giảm âm điểm bám",
        "web1_procedure_id": "golfers-elbow"
      },
      {
        "condition": "Hội chứng ống cổ tay (Carpal Tunnel Syndrome - CTS)",
        "onset": "Tê bì, dị cảm châm chích ngón cái, ngón trỏ, ngón giữa và nửa ngón nhẫn, hay thức giấc nửa đêm phải vẩy tay",
        "aggravating": "Lái xe máy lâu, cầm điện thoại lâu, gập cổ tay liên tục khi gõ bàn phím",
        "key_differentiator": "Nghiệm pháp Phalen và Dấu hiệu Durkan dương tính, teo cơ ô mô cái (Thenar atrophy) giai đoạn nặng",
        "confirmatory_test": "Nghiệm pháp Phalen test & Dấu hiệu nén ép Durkan (Carpal compression)",
        "gold_standard": "Đo điện cơ EMG (tăng thời gian tiềm vận động/cảm giác TK giữa) & Siêu âm TK giữa (CSA >= 10 mm2)",
        "web1_procedure_id": "carpal-tunnel"
      },
      {
        "condition": "Viêm bao gân De Quervain (De Quervain's Tenosynovitis)",
        "onset": "Đau nhói gốc ngón cái và mỏm trâm quay, xuất hiện nhiều ở phụ nữ sau sinh (ẵm con) hoặc người dùng ngón cái lướt điện thoại nhiều",
        "aggravating": "Cử động ngón tay cái, nắm chặt tay kết hợp nghiêng trụ cổ tay",
        "key_differentiator": "Nghiệm pháp Finkelstein đau chói dữ dội tại ngăn duỗi số 1, sờ thấy dày bao gân mỏm trâm quay",
        "confirmatory_test": "Nghiệm pháp Finkelstein test & Eichhoff test",
        "gold_standard": "Siêu âm ngăn duỗi số 1 thấy dày bao gân gân APL/EPB và dịch bao gân",
        "web1_procedure_id": "de-quervain"
      },
      {
        "condition": "Ngón tay lò xo (Trigger Finger / Stenosing Tenosynovitis A1)",
        "onset": "Ngón tay bị kẹt vướng khi gập vào, phải dùng tay kia kéo bật ra kèm tiếng tách đau nhói",
        "aggravating": "Nắm chặt tay vào buổi sáng, làm việc chân tay dùng kìm hoặc kéo lặp lại",
        "key_differentiator": "Sờ thấy nốt xơ cứng di động theo gân gấp tại vị trí ròng rọc A1 ngang nếp gấp lòng bàn tay",
        "confirmatory_test": "Khám sờ thấy nốt xơ ròng rọc A1 gập duỗi ngón tay tái hiện hiện tượng bật lò xo",
        "gold_standard": "Khám lâm sàng kinh điển + Siêu âm thấy dày ròng rọc A1 > 0.5 mm kèm kẹt gân gấp",
        "web1_procedure_id": "trigger-finger"
      }
    ],
    "figures": [
      {
        "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p487_img2.jpeg",
        "page": 487,
        "fig_number": "10.5",
        "caption_en": "Fig. 10.5: Medial collateral ligament tear and flexor muscle origin avulsion",
        "caption_vi": "📐 Sơ đồ giải phẫu: Nguyên ủy gân cơ gấp chung cẳng tay & dây chằng bên trụ UCL (Fig. 10.5)",
        "role_type": "redflag",
        "width": 926,
        "height": 603
      },
      {
        "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p489_img1.jpeg",
        "page": 489,
        "fig_number": "10.8",
        "caption_en": "Fig. 10.8: Triangular fibrocartilage complex (TFCC) tear",
        "caption_vi": "📐 Sơ đồ giải phẫu: Phức hợp sụn sợi tam giác cổ tay (TFCC) mỏm trâm trụ (Fig. 10.8)",
        "role_type": "redflag",
        "width": 658,
        "height": 903
      },
      {
        "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p506_img2.jpeg",
        "page": 506,
        "fig_number": "10.24",
        "caption_en": "Fig. 10.24: Radiograph showing negative ulnar variance associated with Kienböck's disease",
        "caption_vi": "🚨 Phim X-quang / Cờ đỏ: X-quang xương trụ ngắn & hoại tử vô mạch xương nguyệt Kienböck (Fig. 10.24)",
        "role_type": "redflag",
        "width": 958,
        "height": 718
      },
      {
        "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p507_img2.jpeg",
        "page": 507,
        "fig_number": "10.27",
        "caption_en": "Fig. 10.27: Cozen's test",
        "caption_vi": "🩺 Thao tác khám: Nghiệm pháp kháng duỗi cổ tay Cozen khám Tennis Elbow (Fig. 10.27)",
        "role_type": "exam",
        "width": 958,
        "height": 798
      },
      {
        "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p508_img1.jpeg",
        "page": 508,
        "fig_number": "10.28",
        "caption_en": "Fig. 10.28: Maudsley's test",
        "caption_vi": "🩺 Thao tác khám: Nghiệm pháp kháng duỗi ngón 3 Maudsley phân biệt chèn ép PIN (Fig. 10.28)",
        "role_type": "exam",
        "width": 958,
        "height": 626
      },
      {
        "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p506_img1.jpeg",
        "page": 506,
        "fig_number": "10.24",
        "caption_en": "Fig. 10.24: Valgus stress test of the elbow",
        "caption_vi": "🩺 Thao tác khám: Nghiệm pháp ép vẹo ngoài khám dây chằng bên trụ khuỷu UCL (Fig. 10.24)",
        "role_type": "exam",
        "width": 958,
        "height": 735
      },
      {
        "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p505_img2.jpeg",
        "page": 505,
        "fig_number": "10.23",
        "caption_en": "Fig. 10.23: Phalen's test",
        "caption_vi": "🩺 Thao tác khám: Nghiệm pháp gập mu cổ tay Phalen khám Hội chứng ống cổ tay (Fig. 10.23)",
        "role_type": "exam",
        "width": 895,
        "height": 798
      },
      {
        "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p507_img1.jpeg",
        "page": 507,
        "fig_number": "10.26",
        "caption_en": "Fig. 10.26: Finkelstein's test",
        "caption_vi": "🩺 Thao tác khám: Nghiệm pháp nắm ngón cái nghiêng trụ Finkelstein khám De Quervain (Fig. 10.26)",
        "role_type": "exam",
        "width": 958,
        "height": 590
      }
    ],
    "stage_2_somatic_dysfunctions": [
      "Sai lệch trượt chỏm xương quay ra trước / sau (Radial head anterior / posterior subluxation): Gây đau chói khi sấp ngửa cẳng tay.",
      "Khóa khớp thang - bàn ngón cái (CMC-1 restriction): Gây hạn chế đối chiếu ngón cái và đau buốt khi cầm nắm vật nặng.",
      "Hẹp khoang ống cổ tay do sụp vòm khối xương cổ tay (Carpal arch flattening): Tăng áp lực chèn ép cơ học lên thần kinh giữa."
    ],
    "stage_3_guidemap_intervention": "Kỹ thuật nắn chỉnh di động chỏm xương quay và xương cổ tay; Tiêm bao gân De Quervain, tiêm ròng rọc A1 ngón tay lò xo, hoặc tiêm thủy dịch giải ép thần kinh giữa ống cổ tay (Hydrodissection) dưới hướng dẫn siêu âm (Xem Web 1: Tiêm Ống Cổ Tay, Tiêm Gân De Quervain, Tiêm Ngón Tay Lò Xo, Tiêm Gân Lồi Cầu Ngoài).",
    "recommended_web1_procedures": [
      {
        "id": "tennis-elbow",
        "nameVi": "Tiêm gân lồi cầu ngoài xương cánh tay (Tennis Elbow Injection)",
        "role": "Viêm gân cơ duỗi cổ tay quay ngắn (ECRB) mạn tính"
      },
      {
        "id": "golfers-elbow",
        "nameVi": "Tiêm gân lồi cầu trong xương cánh tay (Golfer's Elbow Injection)",
        "role": "Viêm gân cơ gấp cổ tay và cơ sấp tròn bám lồi cầu trong"
      },
      {
        "id": "elbow-intraarticular",
        "nameVi": "Tiêm nội khớp khuỷu tay (Khớp quay - lồi cầu con)",
        "role": "Thoái hóa khớp khuỷu, viêm màng hoạt dịch khớp khuỷu sau chấn thương"
      },
      {
        "id": "carpal-tunnel",
        "nameVi": "Bóc tách thủy dịch thần kinh giữa trong Hội chứng Ống Cổ Tay",
        "role": "Hội chứng ống cổ tay mức độ nhẹ đến trung bình, giảm áp lực bao dây thần kinh"
      },
      {
        "id": "de-quervain",
        "nameVi": "Tiêm bao gân De Quervain - Ngăn duỗi số 1 cổ tay",
        "role": "Viêm bao gân cơ dạng dài và duỗi ngắn ngón cái (APL & EPB)"
      },
      {
        "id": "trigger-finger",
        "nameVi": "Tiêm điều trị Ngón tay lò xo / Ngón tay cò súng (Trigger Finger)",
        "role": "Viêm dày ròng rọc A1 ngón tay, kẹt gân gấp khi cử động"
      },
      {
        "id": "cmc1-joint",
        "nameVi": "Tiêm khớp thang - bàn ngón cái (Khớp CMC-1 / Rhizarthrosis)",
        "role": "Thoái hóa khớp gốc ngón cái gây đau khi cầm nắm, vặn chìa khóa"
      }
    ],
    "provocative_tests": [
      {
        "name": "Nghiệm pháp Cozen (Khám Viêm Lồi Cầu Ngoài / Tennis Elbow)",
        "technique": "Bệnh nhân ngồi, khuỷu gập 90 độ, cẳng tay sấp hoàn toàn, bàn tay nắm chặt và duỗi cổ tay. Bác sĩ đặt ngón tay cái lên lồi cầu ngoài xương cánh tay để cố định, tay kia ấn mu bàn tay bệnh nhân xuống dưới trong khi bệnh nhân gắng sức kháng cự duỗi cổ tay.",
        "significance": "Gây lực co cơ đẳng trường tối đa của cơ duỗi cổ tay quay ngắn (ECRB) bám vào lồi cầu ngoài. Đau nhói chói tại lồi cầu ngoài khẳng định Tennis Elbow.",
        "sensitivity": "84–91%",
        "specificity": "75–88%",
        "accuracy": {
          "sn": "84–91%",
          "sp": "75–88%"
        },
        "clinical_role": "Tiêu chuẩn vàng khám viêm điểm bám gân lồi cầu ngoài khuỷu tay (Tennis Elbow)",
        "diagnostic_role": "Tiêu chuẩn vàng khám viêm điểm bám gân lồi cầu ngoài khuỷu tay (Tennis Elbow)",
        "figures": [
          {
            "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p507_img2.jpeg",
            "page": 507,
            "fig_number": "10.27",
            "caption_en": "Fig. 10.27: Cozen's test",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp kháng duỗi cổ tay Cozen khám Tennis Elbow (Fig. 10.27)",
            "role_type": "exam",
            "width": 958,
            "height": 798
          }
        ]
      },
      {
        "name": "Nghiệm pháp Maudsley (Maudsley's Test Duỗi Ngón 3 Kháng Lực)",
        "technique": "Bệnh nhân duỗi thẳng khuỷu tay, cẳng tay sấp, bàn tay xòe các ngón. Bác sĩ đặt một ngón tay ấn lên mặt mu đốt xa ngón tay thứ 3 (ngón giữa) và yêu cầu bệnh nhân gắng sức duỗi thẳng ngón 3 chống lại lực đè.",
        "significance": "Cơ duỗi ngón tay chung co độc lập. Đau chói ở lồi cầu ngoài khẳng định viêm gân duỗi ngón chung; đau cách lồi cầu ngoài 3–4 cm về phía dưới báo hiệu chèn ép thần kinh gian cốt sau (PIN) trong hội chứng đường hầm xương quay.",
        "sensitivity": "88%",
        "specificity": "71%",
        "accuracy": {
          "sn": "88%",
          "sp": "71%"
        },
        "clinical_role": "Chẩn đoán phân biệt Tennis Elbow với Hội chứng chèn ép dây thần kinh gian cốt sau (PIN)",
        "diagnostic_role": "Chẩn đoán phân biệt Tennis Elbow với Hội chứng chèn ép dây thần kinh gian cốt sau (PIN)",
        "figures": [
          {
            "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p508_img1.jpeg",
            "page": 508,
            "fig_number": "10.28",
            "caption_en": "Fig. 10.28: Maudsley's test",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp kháng duỗi ngón 3 Maudsley phân biệt chèn ép PIN (Fig. 10.28)",
            "role_type": "exam",
            "width": 958,
            "height": 626
          }
        ]
      },
      {
        "name": "Khám Vẹo Ngoài Khuỷu (Elbow Valgus Stress Test)",
        "technique": "Bệnh nhân ngồi, khuỷu gập nhẹ 20–30 độ để giải phóng mỏm khuỷu khỏi hố mỏm khuỷu. Bác sĩ dùng một tay đỡ mặt ngoài khuỷu tay làm điểm tựa, tay kia cầm cổ tay tạo lực bẻ vẹo ngoài (Valgus) ra xa thân mình.",
        "significance": "Kiểm tra độ vững chắc của dây chằng bên trụ (UCL). Đau nhói mặt trong khuỷu hoặc khe khớp trong mở rộng báo hiệu giãn đứt dây chằng bên trụ.",
        "sensitivity": "65%",
        "specificity": "95%",
        "accuracy": {
          "sn": "65%",
          "sp": "95%"
        },
        "clinical_role": "Độ đặc hiệu 95% phát hiện mất vững dây chằng bên trụ khuỷu ở vận động viên ném",
        "diagnostic_role": "Độ đặc hiệu 95% phát hiện mất vững dây chằng bên trụ khuỷu ở vận động viên ném",
        "figures": [
          {
            "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p506_img1.jpeg",
            "page": 506,
            "fig_number": "10.24",
            "caption_en": "Fig. 10.24: Valgus stress test of the elbow",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp ép vẹo ngoài khám dây chằng bên trụ khuỷu UCL (Fig. 10.24)",
            "role_type": "exam",
            "width": 958,
            "height": 735
          }
        ]
      },
      {
        "name": "Nghiệm pháp Gập Cổ Tay Phalen (Phalen's Test - Hội Chứng Ống Cổ Tay)",
        "technique": "Bệnh nhân nâng hai khuỷu tay ngang ngực, áp chặt hai mặt mu cổ tay vào nhau ở góc gập 90 độ hoàn toàn và duy trì tư thế này trong 60 giây liên tục.",
        "significance": "Làm tăng áp lực tối đa trong ống cổ tay và chèn ép cơ học trực tiếp lên dây thần kinh giữa đang bị viêm phù nề. Xuất hiện tê buốt, châm chích ngón cái, ngón trỏ, ngón giữa và nửa ngón nhẫn là nghiệm pháp dương tính.",
        "sensitivity": "68–75%",
        "specificity": "84–90%",
        "accuracy": {
          "sn": "68–75%",
          "sp": "84–90%"
        },
        "clinical_role": "Nghiệm pháp lâm sàng kinh điển và tin cậy nhất sàng lọc Hội chứng ống cổ tay (CTS)",
        "diagnostic_role": "Nghiệm pháp lâm sàng kinh điển và tin cậy nhất sàng lọc Hội chứng ống cổ tay (CTS)",
        "figures": [
          {
            "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p505_img2.jpeg",
            "page": 505,
            "fig_number": "10.23",
            "caption_en": "Fig. 10.23: Phalen's test",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp gập mu cổ tay Phalen khám Hội chứng ống cổ tay (Fig. 10.23)",
            "role_type": "exam",
            "width": 895,
            "height": 798
          }
        ]
      },
      {
        "name": "Nghiệm pháp Finkelstein (Finkelstein's Test - Viêm Bao Gân De Quervain)",
        "technique": "Bệnh nhân gập ngón tay cái vào trong lòng bàn tay, nắm chặt 4 ngón tay còn lại ôm trùm lấy ngón cái. Sau đó bác sĩ giữ cẳng tay bệnh nhân và nhẹ nhàng bẻ nghiêng cổ tay về phía xương trụ (Ulnar deviation).",
        "significance": "Kéo căng tối đa hai gân cơ dạng dài ngón cái (APL) và cơ duỗi ngắn ngón cái (EPB) chạy qua ngăn duỗi số 1 cổ tay. Đau chói dữ dội tại mỏm trâm quay xác nhận viêm bao gân De Quervain.",
        "sensitivity": "89–94%",
        "specificity": "85–98%",
        "accuracy": {
          "sn": "89–94%",
          "sp": "85–98%"
        },
        "clinical_role": "Độ nhạy và độ đặc hiệu cực cao (xấp xỉ 90–98%), tiêu chuẩn vàng chẩn đoán De Quervain",
        "diagnostic_role": "Độ nhạy và độ đặc hiệu cực cao (xấp xỉ 90–98%), tiêu chuẩn vàng chẩn đoán De Quervain",
        "figures": [
          {
            "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p507_img1.jpeg",
            "page": 507,
            "fig_number": "10.26",
            "caption_en": "Fig. 10.26: Finkelstein's test",
            "caption_vi": "🩺 Thao tác khám: Nghiệm pháp nắm ngón cái nghiêng trụ Finkelstein khám De Quervain (Fig. 10.26)",
            "role_type": "exam",
            "width": 958,
            "height": 590
          }
        ]
      }
    ],
    "differential_matrix": [
      {
        "condition": "Viêm lồi cầu ngoài (Tennis Elbow / Lateral Epicondylalgia)",
        "onset": "Đau âm ỉ mặt ngoài khuỷu tay lan xuống cẳng tay, xuất hiện sau cử động duỗi cổ tay lặp lại",
        "aggravating": "Cầm nắm đồ vật nặng, vặn mở nắp chai, vặn tay nắm cửa, đánh vợt trái tay",
        "key_differentiator": "Nghiệm pháp Cozen dương tính, ấn đau chói chính xác tại gân duỗi chung lồi cầu ngoài",
        "confirmatory_test": "Nghiệm pháp Cozen test & Mill's test",
        "gold_standard": "Siêu âm gân duỗi cổ tay quay ngắn (ECRB) thấy rách vi thể, dày gân và tăng sinh mạch máu Doppler",
        "web1_procedure_id": "tennis-elbow"
      },
      {
        "condition": "Viêm lồi cầu trong (Golfer's Elbow / Medial Epicondylalgia)",
        "onset": "Đau nhức mặt trong khuỷu tay tại điểm bám gân cơ gấp cổ tay và cơ sấp tròn",
        "aggravating": "Gập cổ tay có kháng lực, động tác sấp cẳng tay mạnh, vung gậy đánh gôn",
        "key_differentiator": "Ấn đau chói tại mỏm trên lồi cầu trong, nghiệm pháp Reverse Cozen (kháng gập cổ tay) đau chói",
        "confirmatory_test": "Nghiệm pháp Reverse Cozen (Kháng gập cổ tay ở tư thế ngửa)",
        "gold_standard": "Siêu âm gân gấp chung lồi cầu trong thấy phù nề giảm âm điểm bám",
        "web1_procedure_id": "golfers-elbow"
      },
      {
        "condition": "Hội chứng ống cổ tay (Carpal Tunnel Syndrome - CTS)",
        "onset": "Tê bì, dị cảm châm chích ngón cái, ngón trỏ, ngón giữa và nửa ngón nhẫn, hay thức giấc nửa đêm phải vẩy tay",
        "aggravating": "Lái xe máy lâu, cầm điện thoại lâu, gập cổ tay liên tục khi gõ bàn phím",
        "key_differentiator": "Nghiệm pháp Phalen và Dấu hiệu Durkan dương tính, teo cơ ô mô cái (Thenar atrophy) giai đoạn nặng",
        "confirmatory_test": "Nghiệm pháp Phalen test & Dấu hiệu nén ép Durkan (Carpal compression)",
        "gold_standard": "Đo điện cơ EMG (tăng thời gian tiềm vận động/cảm giác TK giữa) & Siêu âm TK giữa (CSA >= 10 mm2)",
        "web1_procedure_id": "carpal-tunnel"
      },
      {
        "condition": "Viêm bao gân De Quervain (De Quervain's Tenosynovitis)",
        "onset": "Đau nhói gốc ngón cái và mỏm trâm quay, xuất hiện nhiều ở phụ nữ sau sinh (ẵm con) hoặc người dùng ngón cái lướt điện thoại nhiều",
        "aggravating": "Cử động ngón tay cái, nắm chặt tay kết hợp nghiêng trụ cổ tay",
        "key_differentiator": "Nghiệm pháp Finkelstein đau chói dữ dội tại ngăn duỗi số 1, sờ thấy dày bao gân mỏm trâm quay",
        "confirmatory_test": "Nghiệm pháp Finkelstein test & Eichhoff test",
        "gold_standard": "Siêu âm ngăn duỗi số 1 thấy dày bao gân gân APL/EPB và dịch bao gân",
        "web1_procedure_id": "de-quervain"
      },
      {
        "condition": "Ngón tay lò xo (Trigger Finger / Stenosing Tenosynovitis A1)",
        "onset": "Ngón tay bị kẹt vướng khi gập vào, phải dùng tay kia kéo bật ra kèm tiếng tách đau nhói",
        "aggravating": "Nắm chặt tay vào buổi sáng, làm việc chân tay dùng kìm hoặc kéo lặp lại",
        "key_differentiator": "Sờ thấy nốt xơ cứng di động theo gân gấp tại vị trí ròng rọc A1 ngang nếp gấp lòng bàn tay",
        "confirmatory_test": "Khám sờ thấy nốt xơ ròng rọc A1 gập duỗi ngón tay tái hiện hiện tượng bật lò xo",
        "gold_standard": "Khám lâm sàng kinh điển + Siêu âm thấy dày ròng rọc A1 > 0.5 mm kèm kẹt gân gấp",
        "web1_procedure_id": "trigger-finger"
      }
    ]
  }
];

const STABLE_GUIDEMAP_ALGORITHM = {
  "title": "Thuật Toán Sàng Lọc Lâm Sàng 3 Giai Đoạn (Sebastian 3-Stage Decision Algorithm)",
  "description": "Bản đồ chỉ dẫn ra quyết định lâm sàng từng bước khi tiếp cận bệnh nhân đau khớp, đau cơ hoặc đau cột sống khó, không điển hình hoặc thất bại với các điều trị ban đầu.",
  "stages": [
    {
      "stage": 1,
      "name": "Stage 1: Sàng Lọc Hệ Thống & Phân Loại Cờ Đỏ (Systemic & Red Flags Triage)",
      "subtitle": "Mục tiêu: Đảm bảo tính an toàn - Xác định bệnh nhân có phù hợp điều trị cơ xương khớp hay cần chuyển viện cấp cứu",
      "steps": [
        {
          "step_id": "1.1",
          "title": "Kiểm tra 5 Nhóm Cờ Đỏ Cấp Cứu Tính Mạng / Tàn Phế",
          "criteria": [
            "Mạch máu: Nghi bóc tách ĐMC, phình ĐMC bụng, VBI (5D 3N), bóc tách ĐM đốt sống, hội chứng khoang 5P, DVT tĩnh mạch sâu.",
            "Chèn ép thần kinh trung ương: Hội chứng chùm đuôi ngựa (CES - tê yên ngựa, bí tiểu), Chèn ép tủy cổ/ngực (Myelopathy - dáng đi thất điều, Hoffman+).",
            "Nhiễm trùng cấp: Sốt cao, khớp sưng nóng đỏ mủ, viêm mủ bao gân Kanavel, áp-xe khoang sâu, viêm đĩa đệm đốt sống.",
            "Gãy xương / Trật khớp không vững: Chấn thương nặng, biến dạng chi, trượt mất vững C1-C2, gãy cổ xương đùi.",
            "Ung thư di căn / U ác tính: Đau xương liên tục tăng về đêm, sụt cân nhanh, tiền sử ung thư (PB KTL), hạch ngoại vi ác tính."
          ],
          "decision": {
            "positive": "CHUYỂN VIỆN CẤP CỨU / NGOẠI KHOA NGAY LẬP TỨC. Tuyệt đối KHÔNG tiêm, KHÔNG nắn chỉnh.",
            "negative": "Chuyển tiếp sang Bước 1.2"
          }
        },
        {
          "step_id": "1.2",
          "title": "Rà Soát Đau Quy Chiếu Từ Nội Tạng (Visceral Referrals)",
          "criteria": [
            "Đau vai/cổ trái: Loại trừ thiếu máu cơ tim (ECG, Troponin) hoặc vỡ lách (Kehr sign).",
            "Đau vai phải/lưng ngực phải: Loại trừ sỏi/viêm túi mật, áp-xe gan (Murphy sign, siêu âm bụng).",
            "Đau lưng ngực T7-T9: Loại trừ bệnh lý tụy (Amylase, Lipase, tư thế cúi đỡ đau).",
            "Đau thắt lưng bẹn bìu: Loại trừ cơn đau quặn thận, bệnh lý phụ khoa buồng trứng tử cung, tiền liệt tuyến."
          ],
          "decision": {
            "positive": "Chuyển khám chuyên khoa Nội/Ngoại tổng quát tương ứng.",
            "negative": "Chuyển tiếp sang Bước 1.3"
          }
        },
        {
          "step_id": "1.3",
          "title": "Rà Soát Đau Do Thuốc & Cận Lâm Sàng Cơ Bản (Ch 2 & Ch 3)",
          "criteria": [
            "Bệnh nhân có đang dùng: Statin (đau cơ, CK?), Quinolone (đau gân Achilles?), Corticoid (hoại tử chỏm xương đùi?), Aromatase inhibitors (đau khớp?), Bisphosphonate?",
            "Chỉ định xét nghiệm máu sàng lọc khi có đau đa khớp hoặc đau không rõ nguyên nhân: ESR, CRP, Acid Uric, Canxi, CBC, HLA-B27, RF, Anti-CCP."
          ],
          "decision": {
            "positive": "Điều chỉnh danh mục thuốc nghi ngờ, điều trị bệnh nội khoa chuyển hóa/tự miễn phối hợp.",
            "negative": "AN TOÀN BƯỚC VÀO GIAI ĐOẠN 2: Bệnh nhân thuộc phạm vi điều trị Cơ Xương Khớp."
          }
        }
      ]
    },
    {
      "stage": 2,
      "name": "Stage 2: Xác Định Nguồn Đau Vùng & rối loạn cơ sinh học hệ vận động (Somatic Dysfunctions) (Lesion & Somatic Diagnosis)",
      "subtitle": "Mục tiêu: Định vị chính xác cấu trúc giải phẫu phát sinh đau và cơ chế sinh học gây rối loạn chức năng",
      "steps": [
        {
          "step_id": "2.1",
          "title": "Phân Định Nguồn Phát Sinh Đau (Pain Generator Localization)",
          "options": [
            "Đau nguồn gốc Đĩa đệm - Rễ thần kinh (Radicular / Discogenic): Đau lan theo dermatom, tê bì, teo cơ, SLR (+), Spurling (+).",
            "Đau nguồn gốc Diện khớp (Facetogenic): Đau khu trú cạnh sống, tăng khi ngửa xoay cùng bên (Kemp test +), không lan qua khớp gối/khuỷu.",
            "Đau nguồn gốc Nội khớp & Sụn viền (Articular / Labral / Meniscal): Tiếng lục cục, kẹt khớp, đau sâu trong khớp, FADIR (+), McMurray (+), O'Brien (+).",
            "Đau nguồn gốc Gân & Bao hoạt dịch (Tendinopathy / Bursitis): Ấn đau chói điểm bám gân, đau khi co cơ kháng lực hoặc kéo căng thụ động, sưng nóng tại chỗ.",
            "Đau nguồn gốc Thần kinh ngoại biên bị chèn kẹp (Entrapment Neuropathy): Tê bì theo phân vùng dây TK ngoại biên, Tinel (+), Phalen (+), Durkan (+)."
          ]
        },
        {
          "step_id": "2.2",
          "title": "Chẩn Đoán rối loạn cơ sinh học hệ vận động (Somatic Dysfunctions) Cơ Học (Sebastian Somatic Diagnosis)",
          "options": [
            "Rối loạn mở/đóng diện khớp cột sống (ERS/FRS Dysfunctions): Giảm trượt mấu khớp khi cúi/ngửa.",
            "Lệch xoay khung chậu & xương cùng (Innominate Rotations & Sacral Torsions): Gây mất cân bằng trục cột sống và đau thắt lưng kháng trị.",
            "Sai lệch trượt chỏm xương (Humeral/Femoral/Fibular Head Glide Alterations): Trượt chỏm xương cánh tay lên trên trước, trượt chỏm đùi ra trước, kẹt đầu xương mác."
          ]
        }
      ]
    },
    {
      "stage": 3,
      "name": "Stage 3: Định Hướng Can Thiệp Lâm Sàng Đích (Targeted Intervention Selection)",
      "subtitle": "Mục tiêu: Lựa chọn phương pháp can thiệp tối ưu dựa trên bằng chứng",
      "steps": [
        {
          "step_id": "3.1",
          "title": "Cây Phân Nhánh Can Thiệp (Intervention Roadmap)",
          "branches": [
            {
              "type": "Can Thiệp Bằng Nắn Chỉnh Cơ Sinh Học & PHCN (Manual Therapy & Exercise)",
              "indication": "rối loạn cơ sinh học hệ vận động (Somatic Dysfunctions) thuần túy (Somatic dysfunctions: ERS/FRS, lệch xoay chậu cùng, co rút cơ mạc, hạn chế trượt khớp).",
              "action": "Kỹ thuật năng lượng cơ (MET), trượt khớp, giải phóng điểm kích hoạt cơ mạc, tập ổn định lõi và cân bằng cơ."
            },
            {
              "type": "Can Thiệp Tiêm Siêu Âm Can Thiệp Chuyên Sâu (Ultrasound-Guided Interventions - Philip Peng)",
              "indication": "Viêm bao hoạt dịch cấp/mạn tính, viêm gân vôi hóa, rách bán phần gân chóp xoay, thoái hóa khớp gối/háng, hội chứng ống cổ tay, viêm diện khớp cột sống, đau rễ thần kinh dai dẳng kháng trị với thuốc uống.",
              "action": "Chuyển sang CẨM NANG TIÊM CAN THIỆP WEB 1 (Philip Peng) để tra cứu quy trình chuẩn hóa: Tiêm nội khớp, tiêm bao gân, tiêm rễ ngoài màng cứng, tiêm nhánh trong diện khớp, giải ép thủy dịch thần kinh (Hydrodissection)."
            },
            {
              "type": "Chỉ Định Phẫu Thuật Chấn Thương Chỉnh Hình",
              "indication": "Rách đứt gân/dây chằng hoàn toàn mất vững khớp, thoái hóa khớp giai đoạn nặng phá hủy xương khớp, hẹp ống sống nặng có khiếm khuyết thần kinh tiến triển.",
              "action": "Hội chẩn Chuyên khoa Phẫu thuật Chấn thương Chỉnh hình / Cột sống."
            }
          ]
        }
      ]
    }
  ]
};

const STABLE_RED_FLAGS_MASTER = [
  {
    "id": "rf-01",
    "system": "Thần kinh Trung ương",
    "condition": "Hội chứng Chùm Đuôi Ngựa (Cauda Equina Syndrome)",
    "signs": "Bí tiểu, tiểu tràn, mất cảm giác yên ngựa bẹn hậu môn, yếu cơ hai chân",
    "investigation": "MRI cột sống thắt lưng khẩn cấp",
    "action": "CẤP CỨU NGOẠI THẦN KINH: Mổ giải ép trong vòng 48h",
    "urgency": "Tối khẩn"
  },
  {
    "id": "rf-02",
    "system": "Thần kinh Trung ương",
    "condition": "Chèn ép Tủy cổ (Cervical Spondylotic Myelopathy)",
    "signs": "Dáng đi thất điều, vụng bàn tay, Hoffman (+), Babinski (+), Clonus (+), Lhermitte (+)",
    "investigation": "MRI cột sống cổ khẩn cấp",
    "action": "Chống chỉ định nắn bẻ cổ, hội chẩn Phẫu thuật Thần kinh",
    "urgency": "Khẩn cấp"
  },
  {
    "id": "rf-03",
    "system": "Mạch máu",
    "condition": "Thiếu máu Đốt sống Thân nền (VBI) & Bóc tách ĐM Đốt sống",
    "signs": "Bộ quy tắc 5D 3N: Chóng mặt, nhìn đôi, nói khó, nuốt khó, khuỵu ngã; Buồn nôn, tê bì mặt, rung giật nhãn cầu. Đau đầu sét đánh",
    "investigation": "CTA hoặc MRA mạch não - cổ",
    "action": "Cấp cứu Đột quỵ / Mạch máu não, TUYỆT ĐỐI KHÔNG XOAY CỔ",
    "urgency": "Tối khẩn"
  },
  {
    "id": "rf-04",
    "system": "Mạch máu",
    "condition": "Phình Bóc tách Động mạch chủ Ngực & Bụng (Aortic Dissection / AAA)",
    "signs": "Đau ngực xé rách xuyên ra sau lưng giữa hai bả vai; Khối u đập nảy vùng bụng trên rốn, mạch đùi yếu, tụt huyết áp",
    "investigation": "CTA ngực bụng có cản quang",
    "action": "Hồi sức cấp cứu Tim mạch / Phẫu thuật Lồng ngực Mạch máu",
    "urgency": "Tối khẩn"
  },
  {
    "id": "rf-05",
    "system": "Mạch máu",
    "condition": "Huyết khối Tĩnh mạch sâu (DVT) & Hội chứng Khoang (5P)",
    "signs": "Bắp chân sưng to > 3cm, nóng đỏ đau, Homan (+); Hội chứng khoang: 5P (Đau quá mức, da tái, dị cảm, mất mạch, liệt)",
    "investigation": "Siêu âm Doppler tĩnh mạch sâu, đo áp lực khoang cẳng chân",
    "action": "DVT: Chống đông ngay, cấm xoa bóp; Khoang: Cấp cứu mổ mở cân trong 6h",
    "urgency": "Tối khẩn"
  },
  {
    "id": "rf-06",
    "system": "Nhiễm trùng",
    "condition": "Viêm Khớp Nhiễm Trùng (Septic Arthritis)",
    "signs": "Sốt cao rét run, khớp sưng nóng đỏ đau dữ dội, tràn mủ dịch khớp, co cứng khớp",
    "investigation": "Chọc hút dịch khớp xét nghiệm (WBC > 50,000/mcL, cấy VK), cấy máu, X-quang",
    "action": "CẤP CỨU NGOẠI: Mổ mở/nội soi rửa khớp + Kháng sinh IV, cấm tiêm corticoid",
    "urgency": "Tối khẩn"
  },
  {
    "id": "rf-07",
    "system": "Nhiễm trùng",
    "condition": "Viêm Bao Gân Gấp Mủ Bàn Tay (Kanavel Tenosynovitis)",
    "signs": "4 dấu hiệu Kanavel: Ngón tay xúc xích, ngón gập nhẹ, ấn đau bao gân, ĐAU DỮ DỘI KHI DUỖI NGÓN",
    "investigation": "Khám lâm sàng, xét nghiệm bạch cầu, CRP, siêu âm khẩn",
    "action": "CẤP CỨU NGOẠI BÀN TAY: Rạch mở dẫn lưu bao gân trong 24h",
    "urgency": "Tối khẩn"
  },
  {
    "id": "rf-08",
    "system": "Nhiễm trùng",
    "condition": "Viêm Đĩa đệm Đốt sống & Áp-xe Ngoài màng cứng (Spondylodiscitis / Abscess)",
    "signs": "Đau lưng dữ dội tăng dần, sốt nhẹ về chiều, gõ đau chói đốt sống, đổ mồ hôi trộm, suy kiệt",
    "investigation": "MRI cột sống có cản quang, cấy máu, ESR, CRP, QuantiFERON",
    "action": "Nhập viện điều trị kháng sinh trúng đích kéo dài hoặc phẫu thuật dẫn lưu",
    "urgency": "Khẩn cấp"
  },
  {
    "id": "rf-09",
    "system": "Ung thư / Ác tính",
    "condition": "Ung Thư Di Căn Xương Cột Sống (PB KTL Metastases) & Đa U Tủy Xương",
    "signs": "Người > 50 tuổi, đau xương liên tục tăng về đêm, sụt cân không rõ nguyên nhân, tiền sử ung thư (Tiền liệt tuyến, Vú, Thận, Tuyến giáp, Phổi); ESR > 100",
    "investigation": "X-quang, MRI toàn trục, Xạ hình xương, Điện di đạm huyết thanh (SPEP), Bence-Jones niệu, PSA",
    "action": "Chuyển chuyên khoa Ung bướu / Huyết học điều trị đa mô thức",
    "urgency": "Khẩn cấp"
  },
  {
    "id": "rf-10",
    "system": "Chấn thương cơ học",
    "condition": "Mất Vững Khớp Đội - Trục (C1-C2 Instability) & Gãy Cổ Xương Đùi",
    "signs": "Cảm giác đầu lỏng lẻo phải ôm đầu, dị cảm tứ chi khi cúi; Gãy cổ đùi: chi ngắn xoay ngoài sau ngã",
    "investigation": "X-quang cột sống cổ động (ADI > 3mm), CT scan; X-quang khớp háng thẳng nghiêng",
    "action": "Nẹp cổ cứng C-collar cố định / Bất động đùi chuyển mổ kết hợp xương",
    "urgency": "Tối khẩn"
  }
];

const STABLE_LAB_TESTS_GUIDE = [
  {
    "test_name": "Tốc độ máu lắng (ESR - Erythrocyte Sedimentation Rate)",
    "category": "Huyết học (Hematology)",
    "normal_range": "Nam: < 15-20 mm/h; Nữ: < 20-30 mm/h",
    "clinical_meaning": "Chỉ điểm tình trạng viêm toàn thân mạn tính. Tăng trong viêm khớp dạng thấp, lupus, nhiễm trùng mạn.",
    "red_flag_value": "ESR > 100 mm/h: Cờ đỏ đặc hiệu của Đa u tủy xương (Multiple Myeloma), Viêm động mạch thái dương (GCA), Ung thư di căn xương hoặc Viêm tủy xương."
  },
  {
    "test_name": "C-Reactive Protein (CRP & hs-CRP)",
    "category": "Sinh hóa (Biochemistry)",
    "normal_range": "< 5.0 mg/L (hoặc < 0.5 mg/dL)",
    "clinical_meaning": "Protein pha cấp do gan sản xuất dưới kích thích của IL-6. Phản ánh tình trạng viêm cấp tính nhạy hơn ESR, tăng nhanh trong 6-24h và giảm nhanh khi viêm thoái lui.",
    "red_flag_value": "CRP > 50 - 100 mg/L: Gợi ý mạnh mẽ Viêm khớp nhiễm trùng (Septic Arthritis) hoặc nhiễm trùng mô sâu."
  },
  {
    "test_name": "Axit Uric Máu (Serum Uric Acid)",
    "category": "Sinh hóa (Biochemistry)",
    "normal_range": "Nam: 4.3 - 8.0 mg/dL; Nữ: 2.3 - 6.0 mg/dL",
    "clinical_meaning": "Sản phẩm chuyển hóa thoái giáng của nhân Purin. Tăng acid uric máu lắng đọng tinh thể Monosodium Urate (MSU) gây viêm khớp Gút cấp và mạn tính tophi.",
    "red_flag_value": "> 9.0 mg/dL: Nguy cơ bùng phát cơn Gút cấp và lắng đọng tạo sỏi thận urate. Lưu ý: Trong cơn gút cấp, 30% bệnh nhân có acid uric bình thường."
  },
  {
    "test_name": "Canxi Toàn Phần & Canxi Ion Hóa (Calcium)",
    "category": "Sinh hóa (Biochemistry)",
    "normal_range": "Toàn phần: 8.5 - 10.5 mg/dL; Canxi ion: 4.5 - 5.6 mg/dL",
    "clinical_meaning": "Khoáng chất cấu tạo xương. Biến thiên nồng độ canxi ảnh hưởng trực tiếp đến co cơ, dẫn truyền thần kinh và mật độ xương.",
    "red_flag_value": "> 11.0 mg/dL (Tăng canxi máu): Cờ đỏ của Cường cận giáp nguyên phát (Hyperparathyroidism) hoặc Tiêu xương do ung thư di căn ác tính."
  },
  {
    "test_name": "Phosphatase Kiềm (ALP - Alkaline Phosphatase)",
    "category": "Sinh hóa (Biochemistry)",
    "normal_range": "30 - 120 U/L",
    "clinical_meaning": "Enzyme phản ánh hoạt động tạo xương của tạo cốt bào (Osteoblasts) và chuyển hóa đường mật.",
    "red_flag_value": "> 200 - 500 U/L: Tăng vọt trong Bệnh Paget xương, Ung thư xương nguyên phát (Osteosarcoma), hoặc Di căn xương tạo xương từ K tiền liệt tuyến."
  },
  {
    "test_name": "Creatine Kinase (CK / CPK)",
    "category": "Sinh hóa (Biochemistry)",
    "normal_range": "Nam: 55 - 170 U/L; Nữ: 30 - 135 U/L",
    "clinical_meaning": "Enzyme nội bào có nồng độ cao trong cơ vân và cơ tim. Giải phóng vào máu khi có tổn thương hủy hoại sợi cơ.",
    "red_flag_value": "> 1,000 - 50,000 U/L: TIÊU CƠ VÂN CẤP (Rhabdomyolysis do Statin, chấn thương đè đè, nhiễm độc), Viêm đa cơ tự miễn (Polymyositis)."
  },
  {
    "test_name": "Kháng Nguyên Phù Hợp Tổ Chức HLA-B27",
    "category": "Miễn dịch học (Immunology)",
    "normal_range": "Âm tính (Negative)",
    "clinical_meaning": "Kháng nguyên bề mặt tế bạch cầu lớp I. Dương tính ở 90-95% Viêm cột sống dính khớp, 70-80% Viêm khớp phản ứng (Reiter), Viêm khớp vảy nến.",
    "red_flag_value": "Dương tính ở bệnh nhân nam trẻ tuổi đau thắt lưng kiểu viêm tăng về đêm: Khẳng định nhóm bệnh Viêm cột sống huyết thanh âm tính."
  },
  {
    "test_name": "Kháng Thể Kháng CCP (Anti-Cyclic Citrullinated Peptide)",
    "category": "Miễn dịch học (Immunology)",
    "normal_range": "< 20 EU/mL (Âm tính)",
    "clinical_meaning": "Kháng thể tự miễn đặc hiệu nhất cho Viêm khớp dạng thấp (Rheumatoid Arthritis) với Độ đặc hiệu (Sp) > 96 - 98%, xuất hiện sớm nhiều năm trước khi có phá hủy khớp.",
    "red_flag_value": "> 60 EU/mL (Dương tính mạnh): Tiên lượng viêm khớp dạng thấp thể bào mòn nặng, tiến triển nhanh."
  },
  {
    "test_name": "Yếu Tố Dạng Thấp (Rheumatoid Factor - RF)",
    "category": "Miễn dịch học (Immunology)",
    "normal_range": "< 14 - 20 IU/mL (Âm tính)",
    "clinical_meaning": "Tự kháng thể kháng lại đoạn Fc của phân tử IgG. Dương tính ở 70-80% bệnh nhân viêm khớp dạng thấp, nhưng độ đặc hiệu thấp hơn Anti-CCP (có thể dương tính trong Sjögren, viêm gan C).",
    "red_flag_value": "> 50 IU/mL: Dương tính nồng độ cao gợi ý bệnh thấp khớp hệ thống nặng có biểu hiện ngoài khớp."
  },
  {
    "test_name": "Kháng Thể Kháng Nhân (ANA) & Kháng ds-DNA",
    "category": "Miễn dịch học (Immunology)",
    "normal_range": "Âm tính (Hiệu giá < 1:40 hoặc < 1:80)",
    "clinical_meaning": "Xét nghiệm sàng lọc ban đầu cho các bệnh mô liên kết tự miễn (Lupus ban đỏ hệ thống SLE, Xơ cứng bì, Viêm da cơ). Anti-dsDNA đặc hiệu cao cho tổn thương thận trong Lupus.",
    "red_flag_value": "Hiệu giá >= 1:160 kèm giảm tiểu cầu/bạch cầu: Nghi ngờ Lupus ban đỏ hệ thống bùng phát."
  },
  {
    "test_name": "Điện Di Đạm Huyết Thanh (SPEP) & Protein Bence-Jones Niệu",
    "category": "Hóa sinh & Nước tiểu",
    "normal_range": "Không có dải đơn dòng (Monoclonal spike); Bence-Jones âm tính",
    "clinical_meaning": "Phát hiện sự tăng sinh bất thường của một dòng tương bào sản xuất kháng thể đơn dòng (Paraprotein) và chuỗi nhẹ đào thải qua nước tiểu.",
    "red_flag_value": "Xuất hiện dải M-spike ở vùng Gamma và Protein Bence-Jones niệu (+): TIÊU CHUẨN VÀNG CHẨN ĐOÁN ĐA U TỦY XƯƠNG (Multiple Myeloma)."
  },
  {
    "test_name": "Kháng Nguyên Đặc Hiệu Tiền Liệt Tuyến (PSA - Total & Free)",
    "category": "Dấu ấn U (Tumor Marker)",
    "normal_range": "< 4.0 ng/mL (ở người < 60 tuổi: < 2.5 - 3.5 ng/mL)",
    "clinical_meaning": "Dấu ấn sàng lọc ung thư tuyến tiền liệt. Ung thư tiền liệt tuyến có ái tính đặc biệt di căn đến cột sống thắt lưng và khung chậu gây tổn thương đặc xương.",
    "red_flag_value": "PSA > 10 - 20 ng/mL ở bệnh nhân nam đau thắt lưng chậu: Cờ đỏ khẩn cấp của Ung thư tiền liệt tuyến di căn xương."
  }
];

const STABLE_DRUG_INDUCED_PAIN_GUIDE = [
  {
    "drug_class": "Thuốc hạ mỡ máu nhóm Statins",
    "examples": "Atorvastatin (Lipitor), Simvastatin (Zocor), Rosuvastatin (Crestor), Pravastatin",
    "symptoms": "Đau mỏi cơ bắp đối xứng hai bên gốc chi (vai, đùi), yếu cơ, chuột rút, căng tức cơ; Nặng nhất: Tiêu cơ vân cấp (Rhabdomyolysis với nước tiểu nâu xá xị).",
    "mechanism": "Ức chế HMG-CoA reductase làm suy giảm Coenzyme Q10 (Ubiquinone) trong ty thể tế bào cơ, rối loạn kênh Canxi nội bào và kích hoạt viêm cơ tự miễn kháng HMGCR.",
    "timeline": "Thường khởi phát sau 2 - 12 tuần dùng thuốc hoặc sau khi tăng liều, hoặc khi dùng chung Fibrate/Clarithromycin.",
    "management": "Xét nghiệm CK máu. Nếu CK > 5-10 lần giới hạn trên: Ngưng ngay lập tức, bù dịch tĩnh mạch. Nếu đau cơ nhẹ: Tạm ngừng 2-4 tuần, sau đó đổi sang Rosuvastatin liều thấp cách ngày hoặc Ezetimibe/PCSK9 inhibitor."
  },
  {
    "drug_class": "Kháng sinh nhóm Fluoroquinolones",
    "examples": "Ciprofloxacin (Cipro), Levofloxacin (Levaquin), Moxifloxacin (Avelox)",
    "symptoms": "Viêm gân (Tendinitis) và Đứt gân (Tendon Rupture) - đặc biệt gân gót Achilles (> 90% các ca), gân bánh chè, gân chóp xoay vai; Đau sưng nhiều khớp.",
    "mechanism": "Gây độc tế bào nuôi gân (Tenocytes), ức chế tổng hợp collagen type I, tăng enzyme thoái giáng chất nền Matrix Metalloproteinase (MMP) và chelate ion Magie.",
    "timeline": "Có thể xảy ra rất sớm chỉ sau 48 giờ dùng thuốc hoặc muộn đến vài tháng sau khi đã ngừng kháng sinh.",
    "management": "CẢNH BÁO HỘP ĐEN FDA: NGỪNG QUINOLONE NGAY TỨC THÌ khi có dấu hiệu đau/sưng gân đầu tiên. Bất động gân, tránh vận động gắng sức, chuyển kháng sinh nhóm khác."
  },
  {
    "drug_class": "Corticosteroids đường toàn thân",
    "examples": "Methylprednisolone (Medrol), Prednisone, Dexamethasone (uống hoặc tiêm truyền)",
    "symptoms": "Hoại tử vô mạch chỏm xương đùi & xương cánh tay (AVN / Osteonecrosis); Loãng xương thứ phát gãy lún đốt sống; Bệnh cơ do steroid (Steroid-induced proximal myopathy).",
    "mechanism": "Tắc nghẽn vi mạch cấp máu cho chỏm xương do phì đại tế bào mỡ tủy xương và tăng đông máu; Ức chế tạo cốt bào và tăng hủy xương; Thoái hóa sợi cơ type II.",
    "timeline": "AVN thường biểu hiện sau vài tuần đến vài tháng dùng corticoid liều tích lũy cao.",
    "management": "Chụp MRI khớp háng hai bên sớm để phát hiện AVN giai đoạn tiền X-quang. Giảm liều dần corticoid theo phác đồ, bổ sung Canxi, Vitamin D, cân nhắc Bisphosphonate."
  },
  {
    "drug_class": "Thuốc ức chế Aromatase (Aromatase Inhibitors - AI)",
    "examples": "Anastrozole (Arimidex), Letrozole (Femara), Exemestane (Aromasin) - Trị ung thư vú",
    "symptoms": "Hội chứng đau cơ xương khớp do AI (AIMS): Đau khớp đối xứng bàn tay, cổ tay, khớp gối; Cứng khớp buổi sáng > 30-60 phút; Dày bao gân gấp gây ngón tay lò xo, hội chứng ống cổ tay.",
    "mechanism": "Ức chế triệt để quá trình tổng hợp Estrogen làm mất tác dụng bảo vệ sụn khớp và giảm ngưỡng đau thần kinh trung ương.",
    "timeline": "Khởi phát đỉnh điểm sau 2 - 6 tháng bắt đầu dùng thuốc, gặp ở 50% phụ nữ điều trị.",
    "management": "Không tự ý ngừng thuốc chống ung thư! Điều trị hỗ trợ bằng tập thể dục nhịp điệu, châm cứu, Duloxetine 30-60 mg/ngày, hoặc đổi giữa nhóm non-steroidal sang steroidal AI."
  },
  {
    "drug_class": "Thuốc chống hủy xương Bisphosphonates",
    "examples": "Alendronate (Fosamax), Zoledronic acid (Aclasta), Ibandronate (Bonviva)",
    "symptoms": "Cơn đau xương, cơ, khớp dữ dội bùng phát sau truyền Zoledronate; Gãy xương đùi không điển hình (Atypical Femur Fracture - AFF); Hoại tử xương hàm (ONJ).",
    "mechanism": "Ức chế chu chuyển xương quá mức làm tích tụ các vi tổn thương cấu trúc vỏ xương đùi; Phản ứng pha cấp giải phóng Cytokine viêm (IL-6, TNF-alpha).",
    "timeline": "Cơn đau cấp: 1-3 ngày sau truyền tĩnh mạch; Gãy xương đùi AFF: Sau 3 - 5 năm dùng thuốc liên tục.",
    "management": "Nếu có đau âm ỉ vùng đùi ở người dùng thuốc > 3 năm: Chụp X-quang xương đùi tìm vết nứt vỏ xương bên ngoài, ngưng thuốc ngay lập tức."
  },
  {
    "drug_class": "Hóa chất điều trị ung thư (Chemotherapy)",
    "examples": "Cisplatin, Carboplatin, Oxaliplatin, Paclitaxel (Taxol), Docetaxel, Vincristine",
    "symptoms": "Bệnh thần kinh ngoại biên do hóa trị (CIPN): Tê bì, dị cảm châm chích, đau buốt bỏng rát hình bốt tất - găng tay ở bàn chân bàn tay; Đau cơ khớp cấp tính sau truyền Taxane.",
    "mechanism": "Độc tính trực tiếp lên sợi trục thần kinh cảm giác và hạch rễ sau (Dorsal Root Ganglion), tổn thương vi ống dẫn truyền thần kinh.",
    "timeline": "Phụ thuộc liều tích lũy, thường xuất hiện sau 2 - 4 chu kỳ hóa trị.",
    "management": "Đánh giá mức độ mất cảm giác bảo vệ bằng Monofilament. Điều trị giảm đau thần kinh với Duloxetine, Gabapentin, Pregabalin; Cân nhắc giảm liều hóa chất."
  },
  {
    "drug_class": "Thuốc chống thấp khớp (DMARDs) & Độc chất",
    "examples": "Colchicine (kèm suy thận hoặc phối hợp Statin), Leflunomide (Arava), Penicillamine",
    "symptoms": "Độc tính thần kinh - cơ của Colchicine (yếu cơ gốc chi, bệnh đa dây thần kinh); Bệnh thần kinh ngoại vi do Leflunomide; Nhược cơ do D-Penicillamine.",
    "mechanism": "Ức chế sự trùng hợp vi ống tế bào thần kinh cơ; Độc tế bào sợi trục.",
    "timeline": "Từ vài tuần đến vài tháng sau điều trị.",
    "management": "Theo dõi nồng độ thuốc, chỉnh liều Colchicine nghiêm ngặt theo mức lọc cầu thận eGFR, ngừng thuốc khi có dấu hiệu yếu cơ."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    STABLE_SCREENING_FALLBACK,
    STABLE_GUIDEMAP_ALGORITHM,
    STABLE_RED_FLAGS_MASTER,
    STABLE_LAB_TESTS_GUIDE,
    STABLE_DRUG_INDUCED_PAIN_GUIDE
  };
}
