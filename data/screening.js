// MSK-Differential Screening Pro & Clinical Guidemap Database
// Master Edition based on Prof. Deepak Sebastian: Differential Screening of Regional Pain in Musculoskeletal Practice (526 pages)
// 8 Symptom-based Clinical Guidemaps + 3-Stage Decision Algorithm + Red Flags Master + Lab Tests Checker + Drug-Induced Pain Checker + 279 Positive Atlas Figures

const SCREENING_DATA = [
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
            "caption_vi": "🚨 Phim X-quang / Cờ đỏ: Osteochondral lesion over the inferior joint surface of the femur",
            "role_type": "redflag",
            "width": 1003,
            "height": 664
          }
        ]
      },
      {
        "category": "Cờ Đỏ Tốc Độ Máu Lắng Tăng Cực Cao (ESR > 100 mm/h) - Nghi Ngờ Đa U Tủy Xương / U Di Căn",
        "signs": "Đau xương âm ỉ dai dẳng toàn thân, đau cột sống tăng về đêm không liên quan tư thế, mệt mỏi suy nhược, sụt cân không chủ ý. Cần nghĩ ngay: Đa u tủy xương (Multiple Myeloma), Viêm động mạch thái dương (GCA), Ung thư di căn xương (PB KTL).",
        "action": "Chỉ định Điện di đạm huyết thanh (SPEP), Chuỗi nhẹ Bence-Jones niệu, X-quang xương sọ/khung chậu/cột sống tìm ổ tiêu xương đục lỗ (punched-out lesions) và hội chẩn Huyết học/Ung bướu.",
        "figures": [
          {
            "file": "assets/deepak_images/ch06_lumbopelvic_pain/p273_img1.jpeg",
            "page": 273,
            "fig_number": "6.8",
            "caption_en": "Fig. 6.8: Vulnerable structures in non-traumatic vertical compression",
            "caption_vi": "🚨 Phim X-quang / Cờ đỏ: Vulnerable structures in non-traumatic vertical compression",
            "role_type": "redflag",
            "width": 949,
            "height": 843
          }
        ]
      },
      {
        "category": "Cờ Đỏ Tiêu Cơ Vân Cấp Do Thuốc Statin (Rhabdomyolysis / Extreme CPK Elevation)",
        "signs": "Creatine Kinase (CK/CPK) tăng > 1,000 - 50,000 U/L, cơ bắp căng đau cứng dữ dội, nước tiểu sẫm màu nâu đen như nước xá xị (Myoglobin niệu), thiểu niệu hoặc vô niệu sau bắt đầu dùng Statin hoặc tăng liều.",
        "action": "Cấp cứu truyền dịch tĩnh mạch đệm kiềm hóa nước tiểu (Natri Bicarbonat) khẩn cấp để phòng hoại tử ống thận cấp suy thận cấp. Ngừng ngay lập tức Statin.",
        "figures": [
          {
            "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p390_img2.jpeg",
            "page": 390,
            "fig_number": "8.24",
            "caption_en": "Fig. 8.24: Tendoachilles tendon",
            "caption_vi": "🚨 Phim X-quang / Cờ đỏ: Tendoachilles tendon",
            "role_type": "redflag",
            "width": 512,
            "height": 752
          }
        ]
      }
    ],
    "visceral_referrals": [
      {
        "source": "Tổng quan Cơ chế Chuyển đau từ Tạng (Visceral Pain Referral Concepts)",
        "pattern": "Đau phát sinh từ xung động tạng truyền qua dây thần kinh giao cảm/phó giao cảm vào cùng sừng sau tủy sống với cảm giác soma (Thuyết hội tụ - phóng chiếu). Não bộ giải mã sai tín hiệu tạng thành đau vùng cơ xương khớp tương ứng khoanh tủy.",
        "differential": "Đau tạng thường âm ỉ, sâu, co thắt, không có điểm đau khu trú nông khi sờ nắn, không thay đổi theo tư thế cơ học hoặc cử động khớp chủ động/thụ động.",
        "figures": [
          {
            "file": "assets/deepak_images/ch06_lumbopelvic_pain/p229_img1.jpeg",
            "page": 229,
            "fig_number": "6.3",
            "caption_en": "Fig. 6.3: Abdominal quadrants. (Abbreviations: LLQ, left lower quadrant; LUQ,",
            "caption_vi": "🫀 Chuyển đau tạng / Giải phẫu: Abdominal quadrants. (Abbreviations: LLQ, left lower quadrant; LUQ,",
            "role_type": "visceral",
            "width": 1000,
            "height": 903
          }
        ]
      },
      {
        "source": "Bệnh lý Chuyển hóa & Suy Thận (Metabolic & Renal Referral)",
        "pattern": "Axit Uric máu tăng lắng đọng tinh thể Urat tại thận gây sỏi thận và suy thận mạn. Ngược lại suy giảm chức năng thận làm giảm thải acid uric gây bùng phát viêm khớp gút tophi đa khớp kháng trị.",
        "differential": "Phân biệt viêm khớp gút (tinh thể hình kim lưỡng chiết quang âm tính) với viêm khớp vôi hóa giả gút CPPD (tinh thể Canxi Pyrophosphate hình thoi lưỡng chiết quang dương tính yếu).",
        "figures": [
          {
            "file": "assets/deepak_images/ch06_lumbopelvic_pain/p231_img1.jpeg",
            "page": 231,
            "fig_number": "6.4",
            "caption_en": "Fig. 6.4: Sites to elicit bruits",
            "caption_vi": "🫀 Chuyển đau tạng / Giải phẫu: Sites to elicit bruits",
            "role_type": "visceral",
            "width": 1377,
            "height": 903
          }
        ]
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
        "name": "Quy trình Khám Sàng lọc Toàn diện 3 Bước (Sebastian 3-Stage Screening Protocol)",
        "technique": "Bước 1: Rà soát tiền sử 10 nhóm bệnh hệ thống & hỏi cờ đỏ (sốt, sụt cân, ung thư, tim mạch). Bước 2: Khám vận động chủ động/thụ động (AROM/PROM) tìm kiếm mô hình bao khớp (Capsular pattern), khám cơ lực từng cơ (Myotome), cảm giác (Dermatome) và phản xạ gân xương (DTR). Bước 3: Nghiệm pháp căng thần kinh và nghiệm pháp đặc hiệu vùng.",
        "significance": "Xác định rõ ràng nguồn gốc triệu chứng là Cơ học (Mechanical), Thần kinh (Neuropathic) hay Hệ thống (Systemic) trước khi ra quyết định điều trị.",
        "sensitivity": "95%",
        "specificity": "88%",
        "diagnostic_role": "Độ nhạy rất cao sàng lọc loại trừ căn nguyên hệ thống & cờ đỏ trước can thiệp",
        "figures": []
      },
      {
        "name": "Đánh giá Dấu hiệu Thực thể Không do Cơ quan (Waddell's Non-organic Signs)",
        "technique": "5 nhóm dấu hiệu Waddell: 1. Ấn chẩn nông đau quá mức; 2. Nghiệm pháp mô phỏng (Xoay vai/chậu nguyên khối hoặc ấn dọc đỉnh đầu gây đau lưng); 3. Phân tán chú ý (Đo SLR tư thế ngồi so với nằm); 4. Yếu cơ từng lúc kiểu giật cục (Cogwheel weakness) không theo giải phẫu; 5. Phản ứng quá khích (la hét, thở dốc khi chạm nhẹ).",
        "significance": "Có >= 3/5 dấu hiệu cảnh báo yếu tố tâm lý xã hội hoặc vụ lợi thứ phát (Yellow Flags).",
        "sensitivity": "80%",
        "specificity": "85%",
        "diagnostic_role": "Sàng lọc cờ vàng tâm lý và yếu tố phi thực thể (dương tính khi có >= 3/5 nhóm dấu hiệu)",
        "figures": [
          {
            "file": "assets/deepak_images/ch06_lumbopelvic_pain/p285_img1.jpeg",
            "page": 285,
            "fig_number": "6.21",
            "caption_en": "Fig. 6.21: Inability to tuck in",
            "caption_vi": "🩺 Thao tác khám: Inability to tuck in",
            "role_type": "exam",
            "width": 1080,
            "height": 715
          }
        ]
      },
      {
        "name": "Nghiệm Pháp Thompson Đánh Giá Đứt Gân Gót Do Quinolone (Thompson Squeeze Test)",
        "technique": "Bệnh nhân nằm sấp, gập gối 90 độ hoặc bàn chân thò ra ngoài mép giường khám. Bác sĩ dùng tay bóp mạnh vào khối cơ bắp chân (bụng chân). Bình thường: Bàn chân gập mặt lòng thụ động (Plantarflexion). Bất thường (Dương tính): Bàn chân nằm im bất động.",
        "significance": "Dấu hiệu đứt hoàn toàn gân gót Achilles, thường xảy ra sau dùng Quinolone từ 2-14 ngày.",
        "sensitivity": "96%",
        "specificity": "98%",
        "diagnostic_role": "Tiêu chuẩn vàng khám lâm sàng đứt gân gót Achilles cấp",
        "figures": [
          {
            "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p390_img2.jpeg",
            "page": 390,
            "fig_number": "8.24",
            "caption_en": "Fig. 8.24: Tendoachilles tendon",
            "caption_vi": "🩺 Thao tác khám: Tendoachilles tendon",
            "role_type": "exam",
            "width": 512,
            "height": 752
          }
        ]
      },
      {
        "name": "Khám Sàng Lọc Bệnh Đa Dây Thần Kinh Ngoại Biên Do Thuốc & Hóa Chất",
        "technique": "Khám cảm giác rung âm thoa 128Hz tại khớp ngón cái và mắt cá trong; Khám cảm giác áp lực với sợi chỉ đơn Monofilament Semmes-Weinstein 10g tại 10 điểm gan chân; Khám phản xạ gân gót (Achilles DTR).",
        "significance": "Mất cảm giác rung âm thoa và mất phản xạ gân gót là dấu hiệu sớm nhất của tổn thương sợi trục thần kinh do thuốc.",
        "sensitivity": "88%",
        "specificity": "92%",
        "diagnostic_role": "Phát hiện sớm biến chứng thần kinh ngoại biên do hóa chất/đái tháo đường",
        "figures": [
          {
            "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p377_img1.png",
            "page": 377,
            "fig_number": "8.14",
            "caption_en": "Fig. 8.14: Tibial nerve and its branches",
            "caption_vi": "🩺 Thao tác khám: Tibial nerve and its branches",
            "role_type": "exam",
            "width": 1259,
            "height": 903
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
        "gold_standard": "Tiêu chuẩn chẩn đoán ACR 2016 Fibromyalgia"
      },
      {
        "condition": "Đau đa cơ do thấp (Polymyalgia Rheumatica - PMR)",
        "onset": "Đột ngột ở người > 50 tuổi, đau đai vai và đai chậu",
        "aggravating": "Tăng nhiều buổi sáng, cứng khớp buổi sáng > 45 phút",
        "key_differentiator": "Máu lắng ESR > 40-100 mm/h, CRP tăng vọt, đáp ứng thần kỳ với Prednisolone liều thấp 15mg/ngày sau 48h",
        "confirmatory_test": "Xét nghiệm ESR, CRP, Siêu âm khớp vai tìm viêm bao hoạt dịch dưới mỏm cùng",
        "gold_standard": "Tiêu chuẩn ACR/EULAR 2012 PMR"
      },
      {
        "condition": "Đau cơ do Statin (Statin-Induced Myopathy)",
        "onset": "Sau 2-8 tuần bắt đầu dùng hoặc tăng liều Statin",
        "aggravating": "Vận động nặng, phối hợp Fibrate hoặc thuốc ức chế CYP3A4",
        "key_differentiator": "Yếu cơ gốc chi đối xứng, CK tăng từ nhẹ đến > 10 lần bình thường, hết đau khi ngưng Statin 2-4 tuần",
        "confirmatory_test": "Định lượng Men cơ Creatine Kinase (CK), Kháng thể Anti-HMGCR",
        "gold_standard": "Thử nghiệm ngưng thuốc (De-challenge) và tái sử dụng liều thấp (Re-challenge)"
      }
    ],
    "figures": [],
    "stage_2_somatic_dysfunctions": [
      "Đau xơ cơ (Fibromyalgia): Rối loạn điều hòa cảm giác đau trung ương (Central Sensitization) với tăng nhạy cảm đau (Hyperalgesia) và loạn cảm đau (Allodynia).",
      "Đau đa cơ do thấp (PMR): Viêm bao hoạt dịch dưới mỏm cùng đai vai và bao hoạt dịch đai chậu đối xứng hai bên.",
      "Bệnh lý gân cơ do thuốc (Drug-induced Myopathy & Tendinopathy): Tổn thương ty thể tế bào cơ do Statin hoặc suy thoái chất nền collagen type I gân do Quinolone.",
      "Rối loạn chuyển hóa & Tinh thể: Lắng đọng vi tinh thể Urat (Gout) hoặc Calci Pyrophosphate (CPPD / Pseudogout) màng hoạt dịch và sụn khớp."
    ],
    "stage_3_guidemap_intervention": "Điều trị toàn thân theo nguyên nhân gốc rễ: Điều chỉnh hoặc ngừng thuốc nghi ngờ (Statin/Quinolone/Steroid), tối ưu hóa kiểm soát acid uric và đường huyết, tập phục hồi chức năng đa phương thức. Nếu có điểm đau khu trú kháng trị có thể phối hợp tiêm can thiệp tại chỗ.",
    "recommended_web1_procedures": []
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
        "category": "Cờ Đỏ Tủy Cổ & Động Mạch Đốt Sống",
        "signs": "CSM (Hoffman+, Babinski+, rối loạn dáng đi) & VBI (5D 3N, chóng mặt khi ngửa xoay cổ tối đa).",
        "action": "Chụp MRI/CTA cổ khẩn, chuyển Ngoại thần kinh / Đột quỵ.",
        "figures": [
          {
            "file": "assets/deepak_images/ch04_cervical_pain/p110_img1.png",
            "page": 110,
            "fig_number": "4.5",
            "caption_en": "Fig. 4.5: Vertebral artery and subclavian",
            "caption_vi": "🚨 Phim X-quang / Cờ đỏ: Vertebral artery and subclavian",
            "role_type": "redflag",
            "width": 772,
            "height": 811
          },
          {
            "file": "assets/deepak_images/ch04_cervical_pain/p123_img1.jpeg",
            "page": 123,
            "fig_number": "4.10",
            "caption_en": "Fig. 4.10: Odontoid fracture",
            "caption_vi": "🚨 Phim X-quang / Cờ đỏ: Odontoid fracture",
            "role_type": "redflag",
            "width": 595,
            "height": 400
          }
        ]
      },
      {
        "category": "Áp-xe Thành Sau Họng & Viêm Màng Não",
        "signs": "Cổ cứng đờ không cúi được (gáy cứng), sốt cao rét run, há miệng hạn chế, khó nuốt, chảy nước dãi.",
        "action": "Chuyển viện cấp cứu chuyên khoa Tai Mũi Họng / Truyền nhiễm.",
        "figures": [
          {
            "file": "assets/deepak_images/ch04_cervical_pain/p112_img1.jpeg",
            "page": 112,
            "fig_number": "4.7",
            "caption_en": "Fig. 4.7: Cervical lymph nodes",
            "caption_vi": "🚨 Phim X-quang / Cờ đỏ: Cervical lymph nodes",
            "role_type": "redflag",
            "width": 453,
            "height": 580
          },
          {
            "file": "assets/deepak_images/ch04_cervical_pain/p125_img1.jpeg",
            "page": 125,
            "fig_number": "4.12A and B",
            "caption_en": "Figs 4.12A and B: (A) Alar ligament and consequence of injury; (B) fractured",
            "caption_vi": "🚨 Phim X-quang / Cờ đỏ: (A) Alar ligament and consequence of injury; (B) fractured",
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
        "figures": [
          {
            "file": "assets/deepak_images/ch04_cervical_pain/p146_img1.png",
            "page": 146,
            "fig_number": "4.17",
            "caption_en": "Fig. 4.17: Sites of entrapment in the thoracic outlet",
            "caption_vi": "🫀 Chuyển đau tạng / Giải phẫu: Sites of entrapment in the thoracic outlet",
            "role_type": "visceral",
            "width": 757,
            "height": 540
          }
        ]
      },
      {
        "source": "Thiếu Máu Cơ Tim / Nhồi Máu Cơ Tim (Myocardial Ischemia / MI)",
        "pattern": "Đau thắt lan lên bờ trước cơ ức đòn chũm, hàm dưới, vai và cánh tay trái khi gắng sức hoặc xúc động mạnh, kèm vã mồ hôi, khó thở.",
        "differential": "Đo điện tim ECG và xét nghiệm Troponin I/T siêu nhạy (hs-cTnI) loại trừ bệnh mạch vành cấp.",
        "figures": [
          {
            "file": "assets/deepak_images/ch04_cervical_pain/p150_img1.jpeg",
            "page": 150,
            "fig_number": "4.20",
            "caption_en": "Fig. 4.20: Nerve representation in the scalp",
            "caption_vi": "🫀 Chuyển đau tạng / Giải phẫu: Nerve representation in the scalp",
            "role_type": "visceral",
            "width": 842,
            "height": 532
          }
        ]
      },
      {
        "source": "Bệnh Lý Tuyến Giáp (Thyroiditis & Carcinoma)",
        "pattern": "Đau cổ trước lan lên góc hàm và tai, kèm bướu cổ to, khó nuốt, khàn tiếng.",
        "differential": "Siêu âm tuyến giáp, xét nghiệm chức năng tuyến giáp FT4, TSH.",
        "figures": [
          {
            "file": "assets/deepak_images/ch04_cervical_pain/p113_img1.jpeg",
            "page": 113,
            "fig_number": "4.8",
            "caption_en": "Fig. 4.8: Thyroid cartilage and gland",
            "caption_vi": "🫀 Chuyển đau tạng / Giải phẫu: Thyroid cartilage and gland",
            "role_type": "visceral",
            "width": 453,
            "height": 580
          }
        ]
      }
    ],
    "drug_induced": [
      "Quinolone: Viêm gân và đau khớp vùng vai gáy.",
      "Corticoid kéo dài: Tiêu xương, xẹp đốt sống cổ loãng xương, hoại tử vô mạch mấu khớp.",
      "Statin: Viêm đau khối cơ thang (Trapezius) và cơ gối đầu (Splenius capitis)."
    ],
    "examination_procedures": [
      {
        "name": "Nghiệm Pháp Spurling (Spurling's Neck Compression Test)",
        "technique": "Bệnh nhân ngồi thẳng. Người khám cho bệnh nhân nghiêng đầu sang bên đau, sau đó dùng hai tay ép thẳng một lực dọc trục từ đỉnh đầu xuống (khoảng 7-10 kg lực).",
        "significance": "Dương tính khi tái hiện đau chói hoặc cảm giác tê giật lan xuống cánh tay theo dermatom rễ cổ. Độ đặc hiệu (Sp) cực cao: 92 - 100%, độ nhạy (Sn): 30 - 50% (Tiêu chuẩn vàng khám lâm sàng rễ cổ).",
        "sensitivity": "30% - 50%",
        "specificity": "92% - 100%",
        "diagnostic_role": "Đặc hiệu rất cao: giá trị khẳng định chèn ép rễ thần kinh cổ (+LR: 10.2)",
        "figures": [
          {
            "file": "assets/deepak_images/ch04_cervical_pain/p172_img1.jpeg",
            "page": 172,
            "fig_number": "4.47",
            "caption_en": "Fig. 4.47: Spurling compression",
            "caption_vi": "🩺 Thao tác khám: Spurling compression",
            "role_type": "exam",
            "width": 717,
            "height": 538
          }
        ]
      },
      {
        "name": "Nghiệm Pháp Kéo Giãn Cột Sống Cổ (Cervical Distraction Test)",
        "technique": "Bệnh nhân nằm ngửa thư giãn. Người khám một tay đặt dưới ụ chẩm, một tay đặt dưới cằm, nhẹ nhàng kéo dọc trục đầu lên phía trên một lực khoảng 10-15 kg.",
        "significance": "Dương tính khi triệu chứng đau cổ hoặc đau rễ cánh tay giảm rõ rệt hoặc biến mất hoàn toàn do mở rộng lỗ ghép thần kinh (Sp: 90 - 97%).",
        "sensitivity": "44%",
        "specificity": "90% - 97%",
        "diagnostic_role": "Đặc hiệu cao: giảm đau tay rõ rệt khi nâng đầu giúp khẳng định chèn ép rễ (+LR: 4.4)",
        "figures": [
          {
            "file": "assets/deepak_images/ch04_cervical_pain/p173_img1.jpeg",
            "page": 173,
            "fig_number": "4.48",
            "caption_en": "Fig. 4.48: Distraction",
            "caption_vi": "🩺 Thao tác khám: Distraction",
            "role_type": "exam",
            "width": 717,
            "height": 538
          }
        ]
      },
      {
        "name": "Dấu Hiệu Hoffman (Hoffman's Reflex - Tháp Tủy)",
        "technique": "Cố định đốt giữa ngón tay thứ 3 của bệnh nhân, người khám dùng móng tay ngón cái của mình gảy/bật mạnh vào móng tay ngón 3 của bệnh nhân theo hướng gập lòng.",
        "significance": "Dương tính khi ngón cái và ngón trỏ của bệnh nhân đột ngột gập và khép lại (phản xạ bệnh lý bó tháp do chèn ép tủy cổ từ C5 trở lên).",
        "sensitivity": "58% - 75%",
        "specificity": "78% - 90%",
        "diagnostic_role": "Sàng lọc cờ đỏ chèn ép tủy cổ (Cervical Spondylotic Myelopathy) tổn thương neuron vận động trên",
        "figures": [
          {
            "file": "assets/deepak_images/ch04_cervical_pain/p181_img1.jpeg",
            "page": 181,
            "fig_number": "4.58",
            "caption_en": "Fig. 4.58: Testing Hoffmann’s sign",
            "caption_vi": "🩺 Thao tác khám: Testing Hoffmann’s sign",
            "role_type": "exam",
            "width": 717,
            "height": 538
          }
        ]
      },
      {
        "name": "Bộ Nghiệm Pháp Căng Đám Rối Thần Kinh Cánh Tay (Upper Limb Tension Tests - ULTT)",
        "technique": "ULTT 1 (Thần kinh Giữa): Hạ vai, dạng cánh tay 110°, duỗi cổ tay và các ngón, ngửa cẳng tay, duỗi khuỷu, kết hợp nghiêng đầu sang bên đối diện.\nULTT 2 (Thần kinh Quay): Hạ vai, duỗi khuỷu, xoay trong toàn bộ cánh tay, sấp cẳng tay, gập cổ tay.\nULTT 3 (Thần kinh Trụ): Hạ vai, gập khuỷu tối đa, ngửa cẳng tay, duỗi cổ tay và áp mu tay vào vành tai.",
        "significance": "Độ nhạy cực cao (Sn: 97%) để loại trừ chèn ép rễ thần kinh cổ (khi ULTT âm tính, khả năng bị bệnh rễ cổ < 3%).",
        "sensitivity": "80% - 90%",
        "specificity": "75% - 85%",
        "diagnostic_role": "Nghiệm pháp lâm sàng hỗ trợ sàng lọc chẩn đoán phân biệt",
        "figures": [
          {
            "file": "assets/deepak_images/ch04_cervical_pain/p167_img1.jpeg",
            "page": 167,
            "fig_number": "4.44A and B",
            "caption_en": "Figs 4.44A and B: Testing median nerve tension",
            "caption_vi": "🩺 Thao tác khám: Testing median nerve tension",
            "role_type": "exam",
            "width": 717,
            "height": 538
          },
          {
            "file": "assets/deepak_images/ch04_cervical_pain/p169_img1.jpeg",
            "page": 169,
            "fig_number": "4.45A and B",
            "caption_en": "Figs 4.45A and B: Testing radial nerve tension",
            "caption_vi": "🩺 Thao tác khám: Testing radial nerve tension",
            "role_type": "exam",
            "width": 717,
            "height": 538
          }
        ]
      },
      {
        "name": "Nghiệm Pháp Roos (Elevated Arm Stress Test - EAST cho TOS)",
        "technique": "Bệnh nhân đứng hoặc ngồi, giạng hai cánh tay 90°, xoay ngoài vai 90°, gập khuỷu 90°. Yêu cầu bệnh nhân mở nắm hai bàn tay liên tục trong 3 phút.",
        "significance": "Dương tính khi bệnh nhân không duy trì được quá 1-2 phút do đau mỏi dữ dội, tê bì cánh cẳng tay, tay tái nhợt (Hội chứng lối thoát lồng ngực Thoracic Outlet Syndrome).",
        "sensitivity": "84%",
        "specificity": "70%",
        "diagnostic_role": "Sàng lọc hội chứng lối thoát ngực (TOS): tái hiện thiếu máu và tê buốt sau 1-3 phút co bóp tay",
        "figures": [
          {
            "file": "assets/deepak_images/ch04_cervical_pain/p174_img1.jpeg",
            "page": 174,
            "fig_number": "4.50",
            "caption_en": "Fig. 4.50: Roos test",
            "caption_vi": "🩺 Thao tác khám: Roos test",
            "role_type": "exam",
            "width": 717,
            "height": 538
          }
        ]
      },
      {
        "name": "Nghiệm Pháp Sharp-Purser (Sharp-Purser Test cho Mất Vững C1-C2)",
        "technique": "Bệnh nhân ngồi hơi cúi cổ. Người khám đặt một ngón tay cái lên mỏm gai C2 để cố định, tay kia đặt lên trán bệnh nhân đẩy nhẹ đầu ra sau.",
        "significance": "Dương tính nếu thấy đầu trượt trượt ra sau kèm tiếng 'khục' và giảm triệu chứng chèn ép tủy (Tổn thương dây chằng ngang C1-C2).",
        "sensitivity": "69% - 88%",
        "specificity": "96% - 98%",
        "diagnostic_role": "Đặc hiệu cao phát hiện mất vững khớp đội - trục đe dọa chèn ép tủy cổ cao (+LR: 17.3)",
        "figures": [
          {
            "file": "assets/deepak_images/ch04_cervical_pain/p175_img1.jpeg",
            "page": 175,
            "fig_number": "4.51",
            "caption_en": "Fig. 4.51: Testing alar ligament integrity in sitting",
            "caption_vi": "🩺 Thao tác khám: Testing alar ligament integrity in sitting",
            "role_type": "exam",
            "width": 717,
            "height": 538
          },
          {
            "file": "assets/deepak_images/ch04_cervical_pain/p176_img1.jpeg",
            "page": 176,
            "fig_number": "4.52A and B",
            "caption_en": "Figs 4.52A and B: Testing transverse ligament integrity",
            "caption_vi": "🩺 Thao tác khám: Testing transverse ligament integrity",
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
        "onset": "Đột ngột sau khi cúi xoay cổ hoặc từ từ do thoái hóa chồi xương",
        "aggravating": "Nghiêng xoay cổ cùng bên, ho rặn hắt hơi",
        "key_differentiator": "Đau kèm tê/dị cảm theo đúng dải dermatom (C6 ngón cái, C7 ngón giữa, C8 ngón út), Spurling (+), Kéo giãn cổ (+), ULTT (+)",
        "confirmatory_test": "Nghiệm pháp Spurling / SLR / ULTT",
        "gold_standard": "MRI Cột sống xác định tầng và mức độ chèn ép rễ"
      },
      {
        "condition": "Hội chứng diện khớp cổ (Cervical Facet Syndrome)",
        "onset": "Mạn tính âm ỉ, cứng cổ buổi sáng, khu trú cạnh sống",
        "aggravating": "Ngửa cổ kết hợp xoay và nghiêng về bên đau",
        "key_differentiator": "Đau KHÔNG lan qua bờ ngoài mỏm cùng vai, không có khiếm khuyết cảm giác/vận động thần kinh, ấn đau điểm diện khớp cạnh gai sống",
        "confirmatory_test": "Nghiệm pháp Kemps / Ưỡn xoay cột sống tái hiện đau",
        "gold_standard": "Phong bế nhánh trong (Medial Branch Block) giảm > 80% đau"
      },
      {
        "condition": "Đau cơ mạc cổ vai (Myofascial Pain Syndrome)",
        "onset": "Căng thẳng, ngồi máy tính sai tư thế kéo dài",
        "aggravating": "Lạnh, stress, ấn vào dải cơ căng",
        "key_differentiator": "Sờ thấy dải cơ căng cứng (Taut band) và điểm kích hoạt (Trigger point) tại cơ thang/cơ nâng vai, ấn gây đau lan đặc thù (Jump sign), phản xạ gân xương bình thường",
        "confirmatory_test": "Nghiệm pháp khám chuyên biệt vùng & Khám cơ lực đối kháng",
        "gold_standard": "Siêu âm can thiệp cơ xương khớp / X-quang / MRI chuyên sâu"
      },
      {
        "condition": "Hội chứng lối thoát lồng ngực (Thoracic Outlet Syndrome - TOS)",
        "onset": "Tư thế đưa tay qua đầu, mang vác nặng vùng đai vai",
        "aggravating": "Giữ tay giạng cao, xách vật nặng kéo xuôi vai",
        "key_differentiator": "Đau tê mặt trong cẳng tay bàn tay, mạch quay yếu khi quay đầu (Adson test +), Roos test (+), có thể kèm sưng phù tím tái bàn tay do chèn ép tĩnh mạch",
        "confirmatory_test": "Nghiệm pháp khám chuyên biệt vùng & Khám cơ lực đối kháng",
        "gold_standard": "Siêu âm can thiệp cơ xương khớp / X-quang / MRI chuyên sâu"
      }
    ],
    "figures": [
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p106_img1.png",
        "page": 106,
        "fig_number": "4.1",
        "caption_en": "Fig. 4.1: Cervical spine dorsal view",
        "caption_vi": "📸 Hình ảnh minh họa: Cervical spine dorsal view",
        "role_type": "general",
        "width": 842,
        "height": 389
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p106_img2.jpeg",
        "page": 106,
        "fig_number": "4.1",
        "caption_en": "Fig. 4.1: Cervical spine dorsal view",
        "caption_vi": "📸 Hình ảnh minh họa: Cervical spine dorsal view",
        "role_type": "general",
        "width": 889,
        "height": 341
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p107_img1.jpeg",
        "page": 107,
        "fig_number": "4.3",
        "caption_en": "Fig. 4.3: Transverse ligament",
        "caption_vi": "📸 Hình ảnh minh họa: Transverse ligament",
        "role_type": "general",
        "width": 846,
        "height": 400
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p108_img1.png",
        "page": 108,
        "fig_number": "4.4",
        "caption_en": "Fig. 4.4: Ligaments of the spinal column",
        "caption_vi": "📸 Hình ảnh minh họa: Ligaments of the spinal column",
        "role_type": "general",
        "width": 897,
        "height": 445
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p110_img1.png",
        "page": 110,
        "fig_number": "4.5",
        "caption_en": "Fig. 4.5: Vertebral artery and subclavian",
        "caption_vi": "📸 Hình ảnh minh họa: Vertebral artery and subclavian",
        "role_type": "general",
        "width": 772,
        "height": 811
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p111_img1.jpeg",
        "page": 111,
        "fig_number": "4.6",
        "caption_en": "Fig. 4.6: Carotid artery and temporal artery",
        "caption_vi": "📸 Hình ảnh minh họa: Carotid artery and temporal artery",
        "role_type": "general",
        "width": 1051,
        "height": 758
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p112_img1.jpeg",
        "page": 112,
        "fig_number": "4.7",
        "caption_en": "Fig. 4.7: Cervical lymph nodes",
        "caption_vi": "📸 Hình ảnh minh họa: Cervical lymph nodes",
        "role_type": "general",
        "width": 453,
        "height": 580
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p113_img1.jpeg",
        "page": 113,
        "fig_number": "4.8",
        "caption_en": "Fig. 4.8: Thyroid cartilage and gland",
        "caption_vi": "📸 Hình ảnh minh họa: Thyroid cartilage and gland",
        "role_type": "general",
        "width": 453,
        "height": 580
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p115_img1.jpeg",
        "page": 115,
        "fig_number": "4.9",
        "caption_en": "Fig. 4.9: Forward head posture",
        "caption_vi": "📸 Hình ảnh minh họa: Forward head posture",
        "role_type": "general",
        "width": 717,
        "height": 538
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p123_img1.jpeg",
        "page": 123,
        "fig_number": "4.10",
        "caption_en": "Fig. 4.10: Odontoid fracture",
        "caption_vi": "📸 Hình ảnh minh họa: Odontoid fracture",
        "role_type": "general",
        "width": 595,
        "height": 400
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p123_img2.png",
        "page": 123,
        "fig_number": "4.10",
        "caption_en": "Fig. 4.10: Odontoid fracture",
        "caption_vi": "📸 Hình ảnh minh họa: Odontoid fracture",
        "role_type": "general",
        "width": 1335,
        "height": 603
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p125_img1.jpeg",
        "page": 125,
        "fig_number": "4.12A and B",
        "caption_en": "Figs 4.12A and B: (A) Alar ligament and consequence of injury; (B) fractured",
        "caption_vi": "📸 Hình ảnh minh họa: (A) Alar ligament and consequence of injury; (B) fractured",
        "role_type": "general",
        "width": 901,
        "height": 225
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p126_img1.jpeg",
        "page": 126,
        "fig_number": "4.13A to C",
        "caption_en": "Figs 4.13A to C: Atlas transverse view",
        "caption_vi": "📸 Hình ảnh minh họa: Atlas transverse view",
        "role_type": "general",
        "width": 846,
        "height": 400
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p126_img2.jpeg",
        "page": 126,
        "fig_number": "4.13A to C",
        "caption_en": "Figs 4.13A to C: Atlas transverse view",
        "caption_vi": "📸 Hình ảnh minh họa: Atlas transverse view",
        "role_type": "general",
        "width": 825,
        "height": 351
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p126_img3.png",
        "page": 126,
        "fig_number": "4.13A to C",
        "caption_en": "Figs 4.13A to C: Atlas transverse view",
        "caption_vi": "📸 Hình ảnh minh họa: Atlas transverse view",
        "role_type": "general",
        "width": 1282,
        "height": 529
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p140_img1.jpeg",
        "page": 140,
        "fig_number": "4.14",
        "caption_en": "Fig. 4.14: Lesions",
        "caption_vi": "📸 Hình ảnh minh họa: Lesions",
        "role_type": "general",
        "width": 877,
        "height": 599
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p143_img1.png",
        "page": 143,
        "fig_number": "4.15",
        "caption_en": "Fig. 4.15: Grades of disc pathology",
        "caption_vi": "📸 Hình ảnh minh họa: Grades of disc pathology",
        "role_type": "general",
        "width": 1323,
        "height": 794
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p144_img1.jpeg",
        "page": 144,
        "fig_number": "4.16",
        "caption_en": "Fig. 4.16: Whiplash injury mechanism",
        "caption_vi": "📸 Hình ảnh minh họa: Whiplash injury mechanism",
        "role_type": "general",
        "width": 782,
        "height": 560
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p146_img1.png",
        "page": 146,
        "fig_number": "4.17",
        "caption_en": "Fig. 4.17: Sites of entrapment in the thoracic outlet",
        "caption_vi": "📸 Hình ảnh minh họa: Sites of entrapment in the thoracic outlet",
        "role_type": "general",
        "width": 757,
        "height": 540
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p148_img1.jpeg",
        "page": 148,
        "fig_number": "4.18",
        "caption_en": "Fig. 4.18: The curved black structure is the disc",
        "caption_vi": "📸 Hình ảnh minh họa: The curved black structure is the disc",
        "role_type": "general",
        "width": 672,
        "height": 537
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p149_img1.png",
        "page": 149,
        "fig_number": "4.19",
        "caption_en": "Fig. 4.19: Suboccipital muscles",
        "caption_vi": "📸 Hình ảnh minh họa: Suboccipital muscles",
        "role_type": "general",
        "width": 1234,
        "height": 813
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p150_img1.jpeg",
        "page": 150,
        "fig_number": "4.20",
        "caption_en": "Fig. 4.20: Nerve representation in the scalp",
        "caption_vi": "📸 Hình ảnh minh họa: Nerve representation in the scalp",
        "role_type": "general",
        "width": 842,
        "height": 532
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p151_img1.jpeg",
        "page": 151,
        "fig_number": "4.21",
        "caption_en": "Fig. 4.21: Forward bending",
        "caption_vi": "📸 Hình ảnh minh họa: Forward bending",
        "role_type": "general",
        "width": 677,
        "height": 508
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p151_img2.jpeg",
        "page": 151,
        "fig_number": "4.21",
        "caption_en": "Fig. 4.21: Forward bending",
        "caption_vi": "📸 Hình ảnh minh họa: Forward bending",
        "role_type": "general",
        "width": 677,
        "height": 508
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p152_img1.jpeg",
        "page": 152,
        "fig_number": "4.23A and B",
        "caption_en": "Figs 4.23A and B: Sidebending",
        "caption_vi": "📸 Hình ảnh minh họa: Sidebending",
        "role_type": "general",
        "width": 681,
        "height": 513
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p152_img2.jpeg",
        "page": 152,
        "fig_number": "4.23A and B",
        "caption_en": "Figs 4.23A and B: Sidebending",
        "caption_vi": "📸 Hình ảnh minh họa: Sidebending",
        "role_type": "general",
        "width": 681,
        "height": 511
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p153_img1.jpeg",
        "page": 153,
        "fig_number": "4.24A and B",
        "caption_en": "Figs 4.24A and B: Rotation",
        "caption_vi": "📸 Hình ảnh minh họa: Rotation",
        "role_type": "general",
        "width": 681,
        "height": 511
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p153_img2.jpeg",
        "page": 153,
        "fig_number": "4.24A and B",
        "caption_en": "Figs 4.24A and B: Rotation",
        "caption_vi": "📸 Hình ảnh minh họa: Rotation",
        "role_type": "general",
        "width": 681,
        "height": 511
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p154_img1.jpeg",
        "page": 154,
        "fig_number": "4.25",
        "caption_en": "Fig. 4.25: Levator scapula",
        "caption_vi": "📸 Hình ảnh minh họa: Levator scapula",
        "role_type": "general",
        "width": 485,
        "height": 597
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p154_img2.jpeg",
        "page": 154,
        "fig_number": "4.25",
        "caption_en": "Fig. 4.25: Levator scapula",
        "caption_vi": "📸 Hình ảnh minh họa: Levator scapula",
        "role_type": "general",
        "width": 485,
        "height": 597
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p155_img1.jpeg",
        "page": 155,
        "fig_number": "4.27",
        "caption_en": "Fig. 4.27: Scalenes",
        "caption_vi": "📸 Hình ảnh minh họa: Scalenes",
        "role_type": "general",
        "width": 717,
        "height": 538
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p155_img2.jpeg",
        "page": 155,
        "fig_number": "4.27",
        "caption_en": "Fig. 4.27: Scalenes",
        "caption_vi": "📸 Hình ảnh minh họa: Scalenes",
        "role_type": "general",
        "width": 717,
        "height": 538
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p156_img1.jpeg",
        "page": 156,
        "fig_number": "4.29",
        "caption_en": "Fig. 4.29: Suboccipitals",
        "caption_vi": "📸 Hình ảnh minh họa: Suboccipitals",
        "role_type": "general",
        "width": 717,
        "height": 538
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p157_img1.jpeg",
        "page": 157,
        "fig_number": "4.30",
        "caption_en": "Fig. 4.30: Basic hold",
        "caption_vi": "📸 Hình ảnh minh họa: Basic hold",
        "role_type": "general",
        "width": 717,
        "height": 538
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p157_img2.jpeg",
        "page": 157,
        "fig_number": "4.30",
        "caption_en": "Fig. 4.30: Basic hold",
        "caption_vi": "📸 Hình ảnh minh họa: Basic hold",
        "role_type": "general",
        "width": 485,
        "height": 597
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p158_img1.jpeg",
        "page": 158,
        "fig_number": "4.32",
        "caption_en": "Fig. 4.32: Testing closing restriction on the right",
        "caption_vi": "📸 Hình ảnh minh họa: Testing closing restriction on the right",
        "role_type": "general",
        "width": 485,
        "height": 597
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p159_img1.jpeg",
        "page": 159,
        "fig_number": "4.33",
        "caption_en": "Fig. 4.33: Atlanto occipital forward nodding",
        "caption_vi": "📸 Hình ảnh minh họa: Atlanto occipital forward nodding",
        "role_type": "general",
        "width": 717,
        "height": 538
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p160_img1.jpeg",
        "page": 160,
        "fig_number": "4.34",
        "caption_en": "Fig. 4.34: Atlanto occipital backward nodding",
        "caption_vi": "📸 Hình ảnh minh họa: Atlanto occipital backward nodding",
        "role_type": "general",
        "width": 717,
        "height": 538
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p161_img1.jpeg",
        "page": 161,
        "fig_number": "4.35",
        "caption_en": "Fig. 4.35: Atlanto occipital sidebending",
        "caption_vi": "📸 Hình ảnh minh họa: Atlanto occipital sidebending",
        "role_type": "general",
        "width": 717,
        "height": 538
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p162_img1.jpeg",
        "page": 162,
        "fig_number": "4.36",
        "caption_en": "Fig. 4.36: Atlanto axial rotation",
        "caption_vi": "📸 Hình ảnh minh họa: Atlanto axial rotation",
        "role_type": "general",
        "width": 717,
        "height": 538
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p163_img1.jpeg",
        "page": 163,
        "fig_number": "4.37",
        "caption_en": "Fig. 4.37: Testing biceps reflex C5",
        "caption_vi": "📸 Hình ảnh minh họa: Testing biceps reflex C5",
        "role_type": "general",
        "width": 717,
        "height": 538
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p163_img2.jpeg",
        "page": 163,
        "fig_number": "4.37",
        "caption_en": "Fig. 4.37: Testing biceps reflex C5",
        "caption_vi": "📸 Hình ảnh minh họa: Testing biceps reflex C5",
        "role_type": "general",
        "width": 717,
        "height": 538
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p164_img1.jpeg",
        "page": 164,
        "fig_number": "4.39",
        "caption_en": "Fig. 4.39: Testing brachioradialis reflex C6",
        "caption_vi": "📸 Hình ảnh minh họa: Testing brachioradialis reflex C6",
        "role_type": "general",
        "width": 681,
        "height": 511
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p165_img1.jpeg",
        "page": 165,
        "fig_number": "4.40",
        "caption_en": "Fig. 4.40: Neutral",
        "caption_vi": "📸 Hình ảnh minh họa: Neutral",
        "role_type": "general",
        "width": 681,
        "height": 511
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p165_img2.jpeg",
        "page": 165,
        "fig_number": "4.40",
        "caption_en": "Fig. 4.40: Neutral",
        "caption_vi": "📸 Hình ảnh minh họa: Neutral",
        "role_type": "general",
        "width": 681,
        "height": 511
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p166_img1.jpeg",
        "page": 166,
        "fig_number": "4.42",
        "caption_en": "Fig. 4.42: Neck flexion indicating global weakness",
        "caption_vi": "📸 Hình ảnh minh họa: Neck flexion indicating global weakness",
        "role_type": "general",
        "width": 681,
        "height": 511
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p166_img2.jpeg",
        "page": 166,
        "fig_number": "4.42",
        "caption_en": "Fig. 4.42: Neck flexion indicating global weakness",
        "caption_vi": "📸 Hình ảnh minh họa: Neck flexion indicating global weakness",
        "role_type": "general",
        "width": 485,
        "height": 597
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p167_img1.jpeg",
        "page": 167,
        "fig_number": "4.44A and B",
        "caption_en": "Figs 4.44A and B: Testing median nerve tension",
        "caption_vi": "📸 Hình ảnh minh họa: Testing median nerve tension",
        "role_type": "general",
        "width": 717,
        "height": 538
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p167_img2.jpeg",
        "page": 167,
        "fig_number": "4.44A and B",
        "caption_en": "Figs 4.44A and B: Testing median nerve tension",
        "caption_vi": "📸 Hình ảnh minh họa: Testing median nerve tension",
        "role_type": "general",
        "width": 717,
        "height": 538
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p169_img1.jpeg",
        "page": 169,
        "fig_number": "4.45A and B",
        "caption_en": "Figs 4.45A and B: Testing radial nerve tension",
        "caption_vi": "📸 Hình ảnh minh họa: Testing radial nerve tension",
        "role_type": "general",
        "width": 717,
        "height": 538
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p169_img2.jpeg",
        "page": 169,
        "fig_number": "4.45A and B",
        "caption_en": "Figs 4.45A and B: Testing radial nerve tension",
        "caption_vi": "📸 Hình ảnh minh họa: Testing radial nerve tension",
        "role_type": "general",
        "width": 717,
        "height": 538
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p171_img1.jpeg",
        "page": 171,
        "fig_number": "4.46",
        "caption_en": "Fig. 4.46: Testing ulnar nerve tension",
        "caption_vi": "📸 Hình ảnh minh họa: Testing ulnar nerve tension",
        "role_type": "general",
        "width": 717,
        "height": 538
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p172_img1.jpeg",
        "page": 172,
        "fig_number": "4.47",
        "caption_en": "Fig. 4.47: Spurling compression",
        "caption_vi": "📸 Hình ảnh minh họa: Spurling compression",
        "role_type": "general",
        "width": 717,
        "height": 538
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p173_img1.jpeg",
        "page": 173,
        "fig_number": "4.48",
        "caption_en": "Fig. 4.48: Distraction",
        "caption_vi": "📸 Hình ảnh minh họa: Distraction",
        "role_type": "general",
        "width": 717,
        "height": 538
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p173_img2.jpeg",
        "page": 173,
        "fig_number": "4.48",
        "caption_en": "Fig. 4.48: Distraction",
        "caption_vi": "📸 Hình ảnh minh họa: Distraction",
        "role_type": "general",
        "width": 717,
        "height": 484
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p174_img1.jpeg",
        "page": 174,
        "fig_number": "4.50",
        "caption_en": "Fig. 4.50: Roos test",
        "caption_vi": "📸 Hình ảnh minh họa: Roos test",
        "role_type": "general",
        "width": 717,
        "height": 538
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p175_img1.jpeg",
        "page": 175,
        "fig_number": "4.51",
        "caption_en": "Fig. 4.51: Testing alar ligament integrity in sitting",
        "caption_vi": "📸 Hình ảnh minh họa: Testing alar ligament integrity in sitting",
        "role_type": "general",
        "width": 717,
        "height": 538
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p176_img1.jpeg",
        "page": 176,
        "fig_number": "4.52A and B",
        "caption_en": "Figs 4.52A and B: Testing transverse ligament integrity",
        "caption_vi": "📸 Hình ảnh minh họa: Testing transverse ligament integrity",
        "role_type": "general",
        "width": 717,
        "height": 538
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p176_img2.jpeg",
        "page": 176,
        "fig_number": "4.52A and B",
        "caption_en": "Figs 4.52A and B: Testing transverse ligament integrity",
        "caption_vi": "📸 Hình ảnh minh họa: Testing transverse ligament integrity",
        "role_type": "general",
        "width": 717,
        "height": 538
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p177_img1.jpeg",
        "page": 177,
        "fig_number": "4.53",
        "caption_en": "Fig. 4.53: Testing the vertebral artery",
        "caption_vi": "📸 Hình ảnh minh họa: Testing the vertebral artery",
        "role_type": "general",
        "width": 717,
        "height": 538
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p178_img1.jpeg",
        "page": 178,
        "fig_number": "4.54",
        "caption_en": "Fig. 4.54: Vertex compression",
        "caption_vi": "📸 Hình ảnh minh họa: Vertex compression",
        "role_type": "general",
        "width": 717,
        "height": 538
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p179_img1.jpeg",
        "page": 179,
        "fig_number": "4.55",
        "caption_en": "Fig. 4.55: Checking pupillary light reflex",
        "caption_vi": "📸 Hình ảnh minh họa: Checking pupillary light reflex",
        "role_type": "general",
        "width": 717,
        "height": 538
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p180_img1.jpeg",
        "page": 180,
        "fig_number": "4.56",
        "caption_en": "Fig. 4.56: Checking for tenderness over C7",
        "caption_vi": "📸 Hình ảnh minh họa: Checking for tenderness over C7",
        "role_type": "general",
        "width": 717,
        "height": 538
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p180_img2.jpeg",
        "page": 180,
        "fig_number": "4.56",
        "caption_en": "Fig. 4.56: Checking for tenderness over C7",
        "caption_vi": "📸 Hình ảnh minh họa: Checking for tenderness over C7",
        "role_type": "general",
        "width": 437,
        "height": 597
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p181_img1.jpeg",
        "page": 181,
        "fig_number": "4.58",
        "caption_en": "Fig. 4.58: Testing Hoffmann’s sign",
        "caption_vi": "📸 Hình ảnh minh họa: Testing Hoffmann’s sign",
        "role_type": "general",
        "width": 717,
        "height": 538
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p182_img1.jpeg",
        "page": 182,
        "fig_number": "4.59",
        "caption_en": "Fig. 4.59: Assessing the first rib",
        "caption_vi": "📸 Hình ảnh minh họa: Assessing the first rib",
        "role_type": "general",
        "width": 717,
        "height": 538
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p183_img1.jpeg",
        "page": 183,
        "fig_number": "4.60",
        "caption_en": "Fig. 4.60: Shoulder protraction with pectoralis minor tightness left",
        "caption_vi": "📸 Hình ảnh minh họa: Shoulder protraction with pectoralis minor tightness left",
        "role_type": "general",
        "width": 717,
        "height": 497
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p184_img1.jpeg",
        "page": 184,
        "fig_number": "4.61",
        "caption_en": "Fig. 4.61: Mandibular deviation to the right",
        "caption_vi": "📸 Hình ảnh minh họa: Mandibular deviation to the right",
        "role_type": "general",
        "width": 461,
        "height": 568
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p185_img1.jpeg",
        "page": 185,
        "fig_number": "4.62",
        "caption_en": "Fig. 4.62: Palpating for tenderness",
        "caption_vi": "📸 Hình ảnh minh họa: Palpating for tenderness",
        "role_type": "general",
        "width": 418,
        "height": 597
      },
      {
        "file": "assets/deepak_images/ch04_cervical_pain/p185_img2.jpeg",
        "page": 185,
        "fig_number": "4.62",
        "caption_en": "Fig. 4.62: Palpating for tenderness",
        "caption_vi": "📸 Hình ảnh minh họa: Palpating for tenderness",
        "role_type": "general",
        "width": 413,
        "height": 597
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
        "category": "Nhồi Máu Cơ Tim & Vỡ Tạng Ổ Bụng",
        "signs": "Đau vai trái kèm đau ngực khó thở hoặc dấu hiệu Kehr sau ngã đụng bụng.",
        "action": "Đo ECG / Siêu âm FAST ổ bụng cấp cứu.",
        "figures": [
          {
            "file": "assets/deepak_images/ch09_shoulder_pain/p439_img1.jpeg",
            "page": 439,
            "fig_number": "9.8",
            "caption_en": "Fig. 9.8: Quadrilateral space and triangular interval",
            "caption_vi": "🚨 Phim X-quang / Cờ đỏ: Quadrilateral space and triangular interval",
            "role_type": "redflag",
            "width": 994,
            "height": 753
          },
          {
            "file": "assets/deepak_images/ch09_shoulder_pain/p445_img1.jpeg",
            "page": 445,
            "fig_number": "9.12",
            "caption_en": "Fig. 9.12: Labral tear sites",
            "caption_vi": "🚨 Phim X-quang / Cờ đỏ: Labral tear sites",
            "role_type": "redflag",
            "width": 1011,
            "height": 722
          }
        ]
      },
      {
        "category": "Hoại Tử Vô Mạch Chỏm Xương Cánh Tay (Humeral Head AVN)",
        "signs": "Đau vai âm ỉ sâu, cứng khớp tiến triển ở bệnh nhân dùng corticoid liều cao kéo dài hoặc bệnh hồng cầu hình liềm.",
        "action": "Chụp MRI khớp vai đánh giá mức độ hoại tử dưới sụn.",
        "figures": [
          {
            "file": "assets/deepak_images/ch09_shoulder_pain/p418_img1.jpeg",
            "page": 418,
            "fig_number": "9.1",
            "caption_en": "Fig. 9.1: Shoulder anterior view",
            "caption_vi": "🚨 Phim X-quang / Cờ đỏ: Shoulder anterior view",
            "role_type": "redflag",
            "width": 1290,
            "height": 751
          },
          {
            "file": "assets/deepak_images/ch09_shoulder_pain/p440_img1.jpeg",
            "page": 440,
            "fig_number": "9.9",
            "caption_en": "Fig. 9.9: Sites of impingement: 1. Posterior-superior glenoid rim;",
            "caption_vi": "🚨 Phim X-quang / Cờ đỏ: Sites of impingement: 1. Posterior-superior glenoid rim;",
            "role_type": "redflag",
            "width": 637,
            "height": 753
          }
        ]
      }
    ],
    "visceral_referrals": [
      {
        "source": "Bệnh Lý Gan & Túi Mật (Liver Abscess & Cholecystitis)",
        "pattern": "Kích thích cơ hoành phải quy chiếu đau lên đỉnh vai phải và vùng bờ trên cơ thang phải (qua thần kinh hoành C3-C5). Kèm sốt, vàng da, ấn đau hạ sườn phải.",
        "differential": "Siêu âm gan mật tụy, xét nghiệm men gan AST/ALT, Bilirubin.",
        "figures": [
          {
            "file": "assets/deepak_images/ch09_shoulder_pain/p436_img1.jpeg",
            "page": 436,
            "fig_number": "9.5",
            "caption_en": "Fig. 9.5: Coracobrachialis (arrow)",
            "caption_vi": "🫀 Chuyển đau tạng / Giải phẫu: Coracobrachialis (arrow)",
            "role_type": "visceral",
            "width": 543,
            "height": 903
          }
        ]
      },
      {
        "source": "Đau Rễ Cổ C5 (Cervical Radiculopathy C5)",
        "pattern": "Đau nhức mặt ngoài cơ delta và đỉnh vai, tê bì dermatom C5, yếu cơ giạng vai (cơ delta).",
        "differential": "Spurling test (+), Kéo giãn cổ (+) làm giảm triệu chứng, cử động khớp vai nội khớp bình thường.",
        "figures": [
          {
            "file": "assets/deepak_images/ch09_shoulder_pain/p437_img1.jpeg",
            "page": 437,
            "fig_number": "9.6",
            "caption_en": "Fig. 9.6: Subacromial bursa (arrow)",
            "caption_vi": "🫀 Chuyển đau tạng / Giải phẫu: Subacromial bursa (arrow)",
            "role_type": "visceral",
            "width": 735,
            "height": 753
          }
        ]
      }
    ],
    "drug_induced": [
      "Quinolone: Viêm gân và đứt gân cơ trên gai (Supraspinatus).",
      "Statin: Viêm cơ thang, cơ delta và cơ dưới gai đối xứng hai bên.",
      "Corticoid: Hoại tử vô mạch chỏm xương cánh tay (AVN)."
    ],
    "examination_procedures": [
      {
        "name": "Nghiệm Pháp Neer (Neer Impingement Test Xung Đột Dưới Mỏm Cùng)",
        "technique": "Người khám đứng sau, một tay cố định xương bả vai bệnh nhân, tay kia nâng toàn bộ cánh tay bệnh nhân gập tối đa ra trước trong tư thế xoay trong hoàn toàn.",
        "significance": "Tái hiện đau chói ở góc 70° - 120° do mấu động lớn kẹp gân cơ trên gai vào bờ trước dưới mỏm cùng vai (Sn: 79 - 88%).",
        "sensitivity": "79% - 88%",
        "specificity": "53% - 60%",
        "diagnostic_role": "Độ nhạy cao để sàng lọc loại trừ xung đột dưới mỏm cùng vai (SAIS)",
        "figures": [
          {
            "file": "assets/deepak_images/ch09_shoulder_pain/p456_img1.jpeg",
            "page": 456,
            "fig_number": "9.24",
            "caption_en": "Fig. 9.24: Neer impingement test",
            "caption_vi": "🩺 Thao tác khám: Neer impingement test",
            "role_type": "exam",
            "width": 557,
            "height": 798
          }
        ]
      },
      {
        "name": "Nghiệm Pháp Hawkins-Kennedy (Hawkins-Kennedy Impingement Test)",
        "technique": "Bệnh nhân gập vai 90°, gập khuỷu 90°. Người khám giữ khuỷu tay và thực hiện động tác xoay trong cánh tay đột ngột.",
        "significance": "Tái hiện đau chói mặt trước trên vai do gân cơ trên gai bị kẹp dưới dây chằng quạ - cùng vai (Sn: 87 - 92%).",
        "sensitivity": "80% - 92%",
        "specificity": "56% - 67%",
        "diagnostic_role": "Độ nhạy cao phát hiện chèn kẹp gân cơ trên gai dưới dây chằng quạ cùng vai",
        "figures": [
          {
            "file": "assets/deepak_images/ch09_shoulder_pain/p463_img1.jpeg",
            "page": 463,
            "fig_number": "9.35",
            "caption_en": "Fig. 9.35: Hawkins-Kennedy test",
            "caption_vi": "🩺 Thao tác khám: Hawkins-Kennedy test",
            "role_type": "exam",
            "width": 958,
            "height": 588
          }
        ]
      },
      {
        "name": "Nghiệm Pháp Jobe / Empty Can (Khám Đứt/Viêm Gân Cơ Trên Gai)",
        "technique": "Bệnh nhân giạng hai cánh tay 90° trong mặt phẳng bả vai (hướng ra trước 30°), xoay trong cánh tay tối đa ngón cái chúc xuống đất. Người khám ấn hai tay xuống, yêu cầu bệnh nhân kháng lực.",
        "significance": "Đau chói hoặc yếu cơ rõ rệt không giữ được tay -> Dương tính tổn thương gân cơ trên gai (Supraspinatus).",
        "sensitivity": "89%",
        "specificity": "68%",
        "diagnostic_role": "Sàng lọc tổn thương viêm hoặc rách gân cơ trên gai (Supraspinatus Tendon)",
        "figures": [
          {
            "file": "assets/deepak_images/ch09_shoulder_pain/p442_img1.jpeg",
            "page": 442,
            "fig_number": "9.10",
            "caption_en": "Fig. 9.10: Location for rotator cuff pathology",
            "caption_vi": "🩺 Thao tác khám: Location for rotator cuff pathology",
            "role_type": "exam",
            "width": 1134,
            "height": 754
          }
        ]
      },
      {
        "name": "Dấu Hiệu Trễ Xoay Ngoài (External Rotation Lag Sign - Cơ Dưới Gai & Tròn Bé)",
        "technique": "Bệnh nhân ngồi. Người khám nâng tay bệnh nhân gập khuỷu 90°, đưa vai ra sau và xoay ngoài thụ động gần tối đa (khoảng 80°), sau đó yêu cầu bệnh nhân giữ nguyên tư thế và buông tay ra.",
        "significance": "Cẳng tay bệnh nhân bị rơi bật ngược vào trong -> Rách lớn hoặc đứt hoàn toàn gân cơ dưới gai (Infraspinatus) và cơ tròn bé (Sp: 98%).",
        "sensitivity": "70%",
        "specificity": "98% - 100%",
        "diagnostic_role": "Đặc hiệu cực cao chẩn đoán rách lớn cơ dưới gai & tròn bé (+LR: 35.0)",
        "figures": [
          {
            "file": "assets/deepak_images/ch09_shoulder_pain/p460_img1.jpeg",
            "page": 460,
            "fig_number": "9.31A and B ",
            "caption_en": "Figs 9.31A and B : External rotation lag sign",
            "caption_vi": "🩺 Thao tác khám: External rotation lag sign",
            "role_type": "exam",
            "width": 958,
            "height": 728
          }
        ]
      },
      {
        "name": "Nghiệm Pháp Gerber / Lift-off Test (Khám Cơ Dưới Vai - Subscapularis)",
        "technique": "Bệnh nhân đưa tay ra sau lưng, mu bàn tay áp vào vùng thắt lưng. Yêu cầu bệnh nhân chủ động đẩy mu bàn tay tách rời ra xa khỏi lưng.",
        "significance": "Bệnh nhân không thể nhấc tay ra khỏi lưng hoặc người khám ấn nhẹ bị sụp tay -> Rách gân cơ dưới vai (Subscapularis).",
        "sensitivity": "70% - 80%",
        "specificity": "98%",
        "diagnostic_role": "Đặc hiệu rất cao chẩn đoán rách gân cơ dưới vai (Subscapularis Tendon)",
        "figures": [
          {
            "file": "assets/deepak_images/ch09_shoulder_pain/p462_img1.jpeg",
            "page": 462,
            "fig_number": "9.33",
            "caption_en": "Fig. 9.33: Positioning for Gerber lift off",
            "caption_vi": "🩺 Thao tác khám: Positioning for Gerber lift off",
            "role_type": "exam",
            "width": 958,
            "height": 626
          }
        ]
      },
      {
        "name": "Nghiệm Pháp Speed & Yergason (Khám Đầu Dài Gân Nhị Đầu)",
        "technique": "Speed Test: Bệnh nhân duỗi thẳng khuỷu, ngửa cẳng tay, gập vai 90° kháng lực của người khám.\nYergason Test: Gập khuỷu 90°, áp sát cánh tay vào thân mình, bệnh nhân cố gắng ngửa cẳng tay và xoay ngoài vai kháng lại lực cản.",
        "significance": "Đau chói khu trú tại rãnh gian củ (Bicipital groove) -> Viêm gân đầu dài cơ nhị đầu hoặc mất vững gân nhị đầu.",
        "sensitivity": "63% (Speed) / 43% (Yergason)",
        "specificity": "58% (Speed) / 85% (Yergason)",
        "diagnostic_role": "Phối hợp đánh giá bệnh lý đầu dài gân cơ nhị đầu cánh tay (LHBT Tendinopathy)",
        "figures": [
          {
            "file": "assets/deepak_images/ch09_shoulder_pain/p454_img1.jpeg",
            "page": 454,
            "fig_number": "9.21",
            "caption_en": "Fig. 9.21: Speeds test",
            "caption_vi": "🩺 Thao tác khám: Speeds test",
            "role_type": "exam",
            "width": 958,
            "height": 781
          },
          {
            "file": "assets/deepak_images/ch09_shoulder_pain/p455_img1.jpeg",
            "page": 455,
            "fig_number": "9.22",
            "caption_en": "Fig. 9.22: Yergason’s test",
            "caption_vi": "🩺 Thao tác khám: Yergason’s test",
            "role_type": "exam",
            "width": 827,
            "height": 798
          }
        ]
      },
      {
        "name": "Nghiệm Pháp O'Brien (Active Compression Test Khám Rách Sụn Viền SLAP)",
        "technique": "Gập vai 90°, khép vào trong 10°, xoay trong cánh tay tối đa (ngón cái chỉ xuống sàn), ấn cánh tay xuống kháng lực (Vị trí 1). Lặp lại động tác với cẳng tay ngửa hoàn toàn (ngón cái chỉ lên trời - Vị trí 2).",
        "significance": "Đau sâu trong khớp vai ở Vị trí 1 và GIẢM HOẶC HẾT ĐAU ở Vị trí 2 -> Tổn thương rách sụn viền trên ổ chảo từ trước ra sau (SLAP Tear).",
        "sensitivity": "88% - 100%",
        "specificity": "73% - 98%",
        "diagnostic_role": "Độ chính xác cao chẩn đoán rách sụn viền ổ chảo từ trước ra sau (SLAP Tear)",
        "figures": [
          {
            "file": "assets/deepak_images/ch09_shoulder_pain/p458_img1.jpeg",
            "page": 458,
            "fig_number": "9.28",
            "caption_en": "Fig. 9.28: Active compression of O’Brien position two",
            "caption_vi": "🩺 Thao tác khám: Active compression of O’Brien position two",
            "role_type": "exam",
            "width": 958,
            "height": 651
          }
        ]
      },
      {
        "name": "Nghiệm Pháp Cross-Body Adduction (Khám Khớp Cùng Đòn AC Joint)",
        "technique": "Bệnh nhân nâng tay gập 90°, người khám kéo khép tối đa cánh tay ngang qua ngực về phía vai đối diện.",
        "significance": "Tái hiện đau chói tại đỉnh khớp cùng đòn (Acromioclavicular Joint Arthrosis).",
        "sensitivity": "77%",
        "specificity": "79%",
        "diagnostic_role": "Tái hiện đau khu trú tại đỉnh khớp cùng vai - đòn (AC Joint Arthrosis)",
        "figures": [
          {
            "file": "assets/deepak_images/ch09_shoulder_pain/p454_img2.jpeg",
            "page": 454,
            "fig_number": "9.21",
            "caption_en": "Fig. 9.21: Speeds test",
            "caption_vi": "🩺 Thao tác khám: Speeds test",
            "role_type": "exam",
            "width": 958,
            "height": 628
          },
          {
            "file": "assets/deepak_images/ch09_shoulder_pain/p452_img1.jpeg",
            "page": 452,
            "fig_number": "9.18",
            "caption_en": "Fig. 9.18: Assessing acromioclavicular mobility",
            "caption_vi": "🩺 Thao tác khám: Assessing acromioclavicular mobility",
            "role_type": "exam",
            "width": 958,
            "height": 706
          }
        ]
      }
    ],
    "differential_table": [
      {
        "condition": "Hội chứng xung đột dưới mỏm cùng (Subacromial Impingement - SAIS)",
        "onset": "Từ từ sau các hoạt động đưa tay qua đầu thường xuyên",
        "aggravating": "Giạng tay trong cung đau 60° - 120° (Painful Arc)",
        "key_differentiator": "Neer (+), Hawkins (+), cơ lực còn tốt, tầm vận động thụ động PROM bình thường nhưng đau khi AROM chủ động",
        "confirmatory_test": "Nghiệm pháp khám chuyên biệt vùng & Khám cơ lực đối kháng",
        "gold_standard": "Siêu âm can thiệp cơ xương khớp / X-quang / MRI chuyên sâu"
      },
      {
        "condition": "Rách chóp xoay hoàn toàn (Full-Thickness Rotator Cuff Tear)",
        "onset": "Sau chấn thương ngã chống tay hoặc thoái hóa rách dần",
        "aggravating": "Nâng cánh tay, nằm nghiêng đè lên vai",
        "key_differentiator": "Yếu cơ rõ rệt khi thử cơ lực (Empty can +, Drop arm test +), Dấu hiệu trễ xoay ngoài (+), siêu âm/MRI thấy đứt liên tục sợi gân",
        "confirmatory_test": "Nghiệm pháp Jobe, Lag sign, Lift-off test",
        "gold_standard": "Siêu âm cơ xương khớp độ phân giải cao hoặc MRI khớp vai"
      },
      {
        "condition": "Đông cứng khớp vai (Adhesive Capsulitis / Frozen Shoulder)",
        "onset": "Âm ỉ, nữ 40-60 tuổi, tiền sử đái tháo đường/tuyến giáp",
        "aggravating": "Tất cả các hướng cử động, đau nhiều về đêm giai đoạn đầu",
        "key_differentiator": "MẤT TẦM VẬN ĐỘNG CẢ CHỦ ĐỘNG LẪN THỤ ĐỘNG THEO MÔ HÌNH BAO KHỚP: Xoay ngoài giảm nặng nhất > Giạng > Xoay trong (ER > ABD > IR)",
        "confirmatory_test": "Nghiệm pháp khám chuyên biệt vùng & Khám cơ lực đối kháng",
        "gold_standard": "Siêu âm can thiệp cơ xương khớp / X-quang / MRI chuyên sâu"
      },
      {
        "condition": "Viêm thoái hóa khớp cùng đòn (AC Joint Arthropathy)",
        "onset": "VĐV tập tạ ngực, người lao động nặng mang vác trên vai",
        "aggravating": "Đưa tay chéo qua ngực, nằm đè nghiêng vai",
        "key_differentiator": "Đau khu trú chính xác tại đỉnh mỏm cùng vai, ấn đau chói khớp AC, Cross-body adduction test (+), O'Brien đau nông ở mỏm cùng",
        "confirmatory_test": "Nghiệm pháp khám chuyên biệt vùng & Khám cơ lực đối kháng",
        "gold_standard": "Siêu âm can thiệp cơ xương khớp / X-quang / MRI chuyên sâu"
      }
    ],
    "figures": [
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p418_img1.jpeg",
        "page": 418,
        "fig_number": "9.1",
        "caption_en": "Fig. 9.1: Shoulder anterior view",
        "caption_vi": "📸 Hình ảnh minh họa: Shoulder anterior view",
        "role_type": "general",
        "width": 1290,
        "height": 751
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p418_img2.jpeg",
        "page": 418,
        "fig_number": "9.1",
        "caption_en": "Fig. 9.1: Shoulder anterior view",
        "caption_vi": "📸 Hình ảnh minh họa: Shoulder anterior view",
        "role_type": "general",
        "width": 934,
        "height": 753
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p423_img1.png",
        "page": 423,
        "fig_number": "9.3",
        "caption_en": "Fig. 9.3: Normal mechanics during overhead activity",
        "caption_vi": "📸 Hình ảnh minh họa: Normal mechanics during overhead activity",
        "role_type": "general",
        "width": 994,
        "height": 813
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p434_img1.jpeg",
        "page": 434,
        "fig_number": "9.4",
        "caption_en": "Fig. 9.4: Bicipital tendinitis",
        "caption_vi": "📸 Hình ảnh minh họa: Bicipital tendinitis",
        "role_type": "general",
        "width": 1027,
        "height": 754
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p436_img1.jpeg",
        "page": 436,
        "fig_number": "9.5",
        "caption_en": "Fig. 9.5: Coracobrachialis (arrow)",
        "caption_vi": "📸 Hình ảnh minh họa: Coracobrachialis (arrow)",
        "role_type": "general",
        "width": 543,
        "height": 903
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p437_img1.jpeg",
        "page": 437,
        "fig_number": "9.6",
        "caption_en": "Fig. 9.6: Subacromial bursa (arrow)",
        "caption_vi": "📸 Hình ảnh minh họa: Subacromial bursa (arrow)",
        "role_type": "general",
        "width": 735,
        "height": 753
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p438_img1.jpeg",
        "page": 438,
        "fig_number": "9.7",
        "caption_en": "Fig. 9.7: Scapular notch; spinoglenoid notch (posterior view)",
        "caption_vi": "📸 Hình ảnh minh họa: Scapular notch; spinoglenoid notch (posterior view)",
        "role_type": "general",
        "width": 842,
        "height": 903
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p439_img1.jpeg",
        "page": 439,
        "fig_number": "9.8",
        "caption_en": "Fig. 9.8: Quadrilateral space and triangular interval",
        "caption_vi": "📸 Hình ảnh minh họa: Quadrilateral space and triangular interval",
        "role_type": "general",
        "width": 994,
        "height": 753
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p440_img1.jpeg",
        "page": 440,
        "fig_number": "9.9",
        "caption_en": "Fig. 9.9: Sites of impingement: 1. Posterior-superior glenoid rim;",
        "caption_vi": "📸 Hình ảnh minh họa: Sites of impingement: 1. Posterior-superior glenoid rim;",
        "role_type": "general",
        "width": 637,
        "height": 753
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p442_img1.jpeg",
        "page": 442,
        "fig_number": "9.10",
        "caption_en": "Fig. 9.10: Location for rotator cuff pathology",
        "caption_vi": "📸 Hình ảnh minh họa: Location for rotator cuff pathology",
        "role_type": "general",
        "width": 1134,
        "height": 754
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p443_img1.jpeg",
        "page": 443,
        "fig_number": "9.11",
        "caption_en": "Fig. 9.11: Posterior-superior glenoid impingement",
        "caption_vi": "📸 Hình ảnh minh họa: Posterior-superior glenoid impingement",
        "role_type": "general",
        "width": 1000,
        "height": 753
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p445_img1.jpeg",
        "page": 445,
        "fig_number": "9.12",
        "caption_en": "Fig. 9.12: Labral tear sites",
        "caption_vi": "📸 Hình ảnh minh họa: Labral tear sites",
        "role_type": "general",
        "width": 1011,
        "height": 722
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p447_img1.jpeg",
        "page": 447,
        "fig_number": "9.13",
        "caption_en": "Fig. 9.13: Assessing an anterior humerus",
        "caption_vi": "📸 Hình ảnh minh họa: Assessing an anterior humerus",
        "role_type": "general",
        "width": 958,
        "height": 717
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p447_img2.jpeg",
        "page": 447,
        "fig_number": "9.13",
        "caption_en": "Fig. 9.13: Assessing an anterior humerus",
        "caption_vi": "📸 Hình ảnh minh họa: Assessing an anterior humerus",
        "role_type": "general",
        "width": 958,
        "height": 723
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p448_img1.jpeg",
        "page": 448,
        "fig_number": "9.15",
        "caption_en": "Fig. 9.15: Assessing a superior humerus",
        "caption_vi": "📸 Hình ảnh minh họa: Assessing a superior humerus",
        "role_type": "general",
        "width": 958,
        "height": 711
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p449_img1.jpeg",
        "page": 449,
        "fig_number": "9.16",
        "caption_en": "Fig. 9.16: Assessing scapula downward rotation",
        "caption_vi": "📸 Hình ảnh minh họa: Assessing scapula downward rotation",
        "role_type": "general",
        "width": 958,
        "height": 718
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p450_img1.jpeg",
        "page": 450,
        "fig_number": "9.17",
        "caption_en": "Fig. 9.17: Assessing protracted scapula",
        "caption_vi": "📸 Hình ảnh minh họa: Assessing protracted scapula",
        "role_type": "general",
        "width": 958,
        "height": 711
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p452_img1.jpeg",
        "page": 452,
        "fig_number": "9.18",
        "caption_en": "Fig. 9.18: Assessing acromioclavicular mobility",
        "caption_vi": "📸 Hình ảnh minh họa: Assessing acromioclavicular mobility",
        "role_type": "general",
        "width": 958,
        "height": 706
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p453_img1.jpeg",
        "page": 453,
        "fig_number": "9.19",
        "caption_en": "Fig. 9.19: Assessing sternoclavicular mobility",
        "caption_vi": "📸 Hình ảnh minh họa: Assessing sternoclavicular mobility",
        "role_type": "general",
        "width": 958,
        "height": 685
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p454_img1.jpeg",
        "page": 454,
        "fig_number": "9.21",
        "caption_en": "Fig. 9.21: Speeds test",
        "caption_vi": "📸 Hình ảnh minh họa: Speeds test",
        "role_type": "general",
        "width": 958,
        "height": 781
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p454_img2.jpeg",
        "page": 454,
        "fig_number": "9.21",
        "caption_en": "Fig. 9.21: Speeds test",
        "caption_vi": "📸 Hình ảnh minh họa: Speeds test",
        "role_type": "general",
        "width": 958,
        "height": 628
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p455_img1.jpeg",
        "page": 455,
        "fig_number": "9.22",
        "caption_en": "Fig. 9.22: Yergason’s test",
        "caption_vi": "📸 Hình ảnh minh họa: Yergason’s test",
        "role_type": "general",
        "width": 827,
        "height": 798
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p455_img2.jpeg",
        "page": 455,
        "fig_number": "9.22",
        "caption_en": "Fig. 9.22: Yergason’s test",
        "caption_vi": "📸 Hình ảnh minh họa: Yergason’s test",
        "role_type": "general",
        "width": 958,
        "height": 709
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p456_img1.jpeg",
        "page": 456,
        "fig_number": "9.24",
        "caption_en": "Fig. 9.24: Neer impingement test",
        "caption_vi": "📸 Hình ảnh minh họa: Neer impingement test",
        "role_type": "general",
        "width": 557,
        "height": 798
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p457_img1.jpeg",
        "page": 457,
        "fig_number": "9.26",
        "caption_en": "Fig. 9.26: Crank test modified in supine",
        "caption_vi": "📸 Hình ảnh minh họa: Crank test modified in supine",
        "role_type": "general",
        "width": 958,
        "height": 631
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p457_img2.jpeg",
        "page": 457,
        "fig_number": "9.26",
        "caption_en": "Fig. 9.26: Crank test modified in supine",
        "caption_vi": "📸 Hình ảnh minh họa: Crank test modified in supine",
        "role_type": "general",
        "width": 958,
        "height": 614
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p457_img3.jpeg",
        "page": 457,
        "fig_number": "9.26",
        "caption_en": "Fig. 9.26: Crank test modified in supine",
        "caption_vi": "📸 Hình ảnh minh họa: Crank test modified in supine",
        "role_type": "general",
        "width": 958,
        "height": 748
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p458_img1.jpeg",
        "page": 458,
        "fig_number": "9.28",
        "caption_en": "Fig. 9.28: Active compression of O’Brien position two",
        "caption_vi": "📸 Hình ảnh minh họa: Active compression of O’Brien position two",
        "role_type": "general",
        "width": 958,
        "height": 651
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p458_img2.jpeg",
        "page": 458,
        "fig_number": "9.28",
        "caption_en": "Fig. 9.28: Active compression of O’Brien position two",
        "caption_vi": "📸 Hình ảnh minh họa: Active compression of O’Brien position two",
        "role_type": "general",
        "width": 958,
        "height": 625
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p459_img1.jpeg",
        "page": 459,
        "fig_number": "9.30",
        "caption_en": "Fig. 9.30: Sulcus sign",
        "caption_vi": "📸 Hình ảnh minh họa: Sulcus sign",
        "role_type": "general",
        "width": 958,
        "height": 646
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p460_img1.jpeg",
        "page": 460,
        "fig_number": "9.31A and B ",
        "caption_en": "Figs 9.31A and B : External rotation lag sign",
        "caption_vi": "📸 Hình ảnh minh họa: External rotation lag sign",
        "role_type": "general",
        "width": 958,
        "height": 728
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p460_img2.jpeg",
        "page": 460,
        "fig_number": "9.31A and B ",
        "caption_en": "Figs 9.31A and B : External rotation lag sign",
        "caption_vi": "📸 Hình ảnh minh họa: External rotation lag sign",
        "role_type": "general",
        "width": 958,
        "height": 719
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p461_img1.jpeg",
        "page": 461,
        "fig_number": "9.32A and B",
        "caption_en": "Figs 9.32A and B: Internal rotation lag sign",
        "caption_vi": "📸 Hình ảnh minh họa: Internal rotation lag sign",
        "role_type": "general",
        "width": 958,
        "height": 733
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p461_img2.jpeg",
        "page": 461,
        "fig_number": "9.32A and B",
        "caption_en": "Figs 9.32A and B: Internal rotation lag sign",
        "caption_vi": "📸 Hình ảnh minh họa: Internal rotation lag sign",
        "role_type": "general",
        "width": 958,
        "height": 716
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p462_img1.jpeg",
        "page": 462,
        "fig_number": "9.33",
        "caption_en": "Fig. 9.33: Positioning for Gerber lift off",
        "caption_vi": "📸 Hình ảnh minh họa: Positioning for Gerber lift off",
        "role_type": "general",
        "width": 958,
        "height": 626
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p462_img2.jpeg",
        "page": 462,
        "fig_number": "9.33",
        "caption_en": "Fig. 9.33: Positioning for Gerber lift off",
        "caption_vi": "📸 Hình ảnh minh họa: Positioning for Gerber lift off",
        "role_type": "general",
        "width": 958,
        "height": 685
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p463_img1.jpeg",
        "page": 463,
        "fig_number": "9.35",
        "caption_en": "Fig. 9.35: Hawkins-Kennedy test",
        "caption_vi": "📸 Hình ảnh minh họa: Hawkins-Kennedy test",
        "role_type": "general",
        "width": 958,
        "height": 588
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p463_img2.jpeg",
        "page": 463,
        "fig_number": "9.35",
        "caption_en": "Fig. 9.35: Hawkins-Kennedy test",
        "caption_vi": "📸 Hình ảnh minh họa: Hawkins-Kennedy test",
        "role_type": "general",
        "width": 958,
        "height": 597
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p463_img3.jpeg",
        "page": 463,
        "fig_number": "9.35",
        "caption_en": "Fig. 9.35: Hawkins-Kennedy test",
        "caption_vi": "📸 Hình ảnh minh họa: Hawkins-Kennedy test",
        "role_type": "general",
        "width": 958,
        "height": 717
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p464_img1.jpeg",
        "page": 464,
        "fig_number": "9.38",
        "caption_en": "Fig. 9.38: Internal rotation resisted strength test (external impingement)",
        "caption_vi": "📸 Hình ảnh minh họa: Internal rotation resisted strength test (external impingement)",
        "role_type": "general",
        "width": 958,
        "height": 795
      },
      {
        "file": "assets/deepak_images/ch09_shoulder_pain/p464_img2.jpeg",
        "page": 464,
        "fig_number": "9.38",
        "caption_en": "Fig. 9.38: Internal rotation resisted strength test (external impingement)",
        "caption_vi": "📸 Hình ảnh minh họa: Internal rotation resisted strength test (external impingement)",
        "role_type": "general",
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
        "category": "Bóc Tách Động Mạch Chủ & Nhồi Máu Cơ Tim Ngực",
        "signs": "Đau xé rách xuyên lưng giữa hai bả vai, khó thở, vã mồ hôi, chênh lệch huyết áp hai tay.",
        "action": "Cấp cứu Tim mạch - CTA ngực ngay.",
        "figures": [
          {
            "file": "assets/deepak_images/ch05_thoracic_pain/p188_img1.png",
            "page": 188,
            "fig_number": "5.1",
            "caption_en": "Fig. 5.1: Typical thoracic vertebra",
            "caption_vi": "🚨 Phim X-quang / Cờ đỏ: Typical thoracic vertebra",
            "role_type": "redflag",
            "width": 1169,
            "height": 602
          }
        ]
      },
      {
        "category": "Nhiễm Trùng Đĩa Đệm Đốt Sống Ngực (Thoracic Spondylodiscitis / TB Spine)",
        "signs": "Sốt nhẹ về chiều, đổ mồ hôi trộm, đau lưng dữ dội, gù nhọn cột sống ngực (Lao cột sống Pott).",
        "action": "Chụp MRI ngực, xét nghiệm máu lắng ESR, QuantiFERON-TB.",
        "figures": [
          {
            "file": "assets/deepak_images/ch05_thoracic_pain/p209_img1.jpeg",
            "page": 209,
            "fig_number": "5.2",
            "caption_en": "Fig. 5.2: Clinical representation of the T2 spinal nerve",
            "caption_vi": "🚨 Phim X-quang / Cờ đỏ: Clinical representation of the T2 spinal nerve",
            "role_type": "redflag",
            "width": 939,
            "height": 766
          }
        ]
      }
    ],
    "visceral_referrals": [
      {
        "source": "Bệnh Lý Túi Mật & Đường Mật (Cholecystitis & Cholelithiasis)",
        "pattern": "Đau quy chiếu lên góc dưới xương bả vai phải và vùng gian bả vai phải (do các nhánh thần kinh cảm giác T8-T9). Đau tăng sau bữa ăn nhiều dầu mỡ, dấu hiệu Murphy (+).",
        "differential": "Siêu âm ổ bụng tổng quát gan mật là chỉ định bắt buộc trước khi điều trị thoái hóa cột sống ngực bên phải.",
        "figures": [
          {
            "file": "assets/deepak_images/ch05_thoracic_pain/p209_img1.jpeg",
            "page": 209,
            "fig_number": "5.2",
            "caption_en": "Fig. 5.2: Clinical representation of the T2 spinal nerve",
            "caption_vi": "🫀 Chuyển đau tạng / Giải phẫu: Clinical representation of the T2 spinal nerve",
            "role_type": "visceral",
            "width": 939,
            "height": 766
          }
        ]
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
        "name": "Nghiệm Pháp Thoracic Slump Test (Căng Màng Cứng & Rễ Ngực)",
        "technique": "Bệnh nhân ngồi thả lỏng gù toàn bộ lưng ngực, người khám ép đầu cổ cúi tối đa, sau đó cho duỗi gối và gập mu bàn chân.",
        "significance": "Tái hiện đau lan dọc thân mình hoặc khoang liên sườn ngực, giảm khi ngửa nhẹ cổ (chẩn đoán thoát vị đĩa đệm ngực hoặc chèn ép thần kinh rễ ngực).",
        "sensitivity": "84%",
        "specificity": "83%",
        "diagnostic_role": "Phân biệt đau thành ngực cơ học với đau kích thích màng tủy / rễ thần kinh gian sườn",
        "figures": [
          {
            "file": "assets/deepak_images/ch05_thoracic_pain/p209_img1.jpeg",
            "page": 209,
            "fig_number": "5.2",
            "caption_en": "Fig. 5.2: Clinical representation of the T2 spinal nerve",
            "caption_vi": "🩺 Thao tác khám: Clinical representation of the T2 spinal nerve",
            "role_type": "exam",
            "width": 939,
            "height": 766
          }
        ]
      },
      {
        "name": "Khám Hạn Chế Đóng/Mở Diện Khớp Ngực (Thoracic Opening/Closing ERS/FRS T1-T12)",
        "technique": "Bệnh nhân ngồi khoanh tay trước ngực. Người khám đặt hai ngón tay cái lên mấu ngang đốt sống ngực hai bên, hướng dẫn bệnh nhân cúi gập hoặc ngửa ưỡn kết hợp xoay nghiêng mình.",
        "significance": "Phát hiện đốt sống bị kẹt mở (ERS: không gập/mở được mấu khớp) hoặc kẹt đóng (FRS: không ngửa/đóng được mấu khớp).",
        "sensitivity": "78%",
        "specificity": "81%",
        "diagnostic_role": "Xác định chính xác vị trí phân đoạn đốt sống ngực bị khóa diện khớp cơ học theo Deepak",
        "figures": [
          {
            "file": "assets/deepak_images/ch05_thoracic_pain/p211_img1.jpeg",
            "page": 211,
            "fig_number": "5.3",
            "caption_en": "Fig. 5.3: Assessing opening restriction in the upper thoracic spine",
            "caption_vi": "🩺 Thao tác khám: Assessing opening restriction in the upper thoracic spine",
            "role_type": "exam",
            "width": 1080,
            "height": 810
          },
          {
            "file": "assets/deepak_images/ch05_thoracic_pain/p213_img1.jpeg",
            "page": 213,
            "fig_number": "5.6",
            "caption_en": "Fig. 5.6: Assessing closing restriction in the lower thoracic region",
            "caption_vi": "🩺 Thao tác khám: Assessing closing restriction in the lower thoracic region",
            "role_type": "exam",
            "width": 1080,
            "height": 810
          }
        ]
      },
      {
        "name": "Nghiệm Pháp Nhún Khớp Sườn - Sống & Sườn - Ngang (Costovertebral Joint Springing)",
        "technique": "Bệnh nhân nằm sấp. Người khám dùng gót bàn tay hoặc hai ngón cái ấn nhún tạo lực đàn hồi lên góc sườn ngay cạnh mỏm ngang đốt sống ngực.",
        "significance": "Tái hiện chính xác cơn đau ngực cơ học do viêm thoái hóa khớp sườn sống hoặc trượt khớp sườn ngang.",
        "sensitivity": "82%",
        "specificity": "85%",
        "diagnostic_role": "Tái hiện đau khu trú tại diện khớp sườn sống, phân biệt với đau thắt ngực tim mạch hoặc viêm phổi màng phổi",
        "figures": [
          {
            "file": "assets/deepak_images/ch05_thoracic_pain/p215_img1.jpeg",
            "page": 215,
            "fig_number": "5.7A and B",
            "caption_en": "Figs 5.7A and B: Posterior rib dysfunction right",
            "caption_vi": "🩺 Thao tác khám: Posterior rib dysfunction right",
            "role_type": "exam",
            "width": 1080,
            "height": 720
          }
        ]
      },
      {
        "name": "Nghiệm Pháp Lindgren Đánh Giá Xương Sườn 1 Nhô Cao (Elevated First Rib Test)",
        "technique": "Bệnh nhân ngồi thẳng. Người khám cho bệnh nhân xoay đầu tối đa sang một bên, sau đó gập cằm về phía hõm ức cùng bên.",
        "significance": "Hạn chế biên độ gập cằm so với bên đối diện gợi ý xương sườn 1 bên đó bị kéo nhô cao do co thắt cơ bậc thang (nguyên nhân gây hội chứng lối thoát ngực và đau cổ ngực).",
        "sensitivity": "80%",
        "specificity": "84%",
        "diagnostic_role": "Đánh giá xương sườn 1 nhô cao gây chèn ép bó mạch thần kinh cánh tay tại tam giác cơ bậc thang",
        "figures": [
          {
            "file": "assets/deepak_images/ch05_thoracic_pain/p215_img1.jpeg",
            "page": 215,
            "fig_number": "5.7A and B",
            "caption_en": "Figs 5.7A and B: Posterior rib dysfunction right",
            "caption_vi": "🩺 Thao tác khám: Posterior rib dysfunction right",
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
        "onset": "Ngồi làm việc máy tính sai tư thế, phụ nữ 30-50 tuổi",
        "aggravating": "Ngồi lâu, xoay vặn lưng trên",
        "key_differentiator": "Đau lưng ngực T4 kèm dị cảm tê bì hai bàn tay kiểu găng tay, đau đầu đỉnh chẩm, ấn đau chói mỏm gai T4, vận động khớp ngực giảm triệu chứng",
        "confirmatory_test": "Nghiệm pháp khám chuyên biệt vùng & Khám cơ lực đối kháng",
        "gold_standard": "Siêu âm can thiệp cơ xương khớp / X-quang / MRI chuyên sâu"
      },
      {
        "condition": "Đau dây thần kinh liên sườn (Intercostal Neuralgia / Zona ngực)",
        "onset": "Đột ngột hoặc sau nhiễm virus, đau bỏng rát dọc một khoang gian sườn",
        "aggravating": "Hít sâu, ho, cọ xát quần áo",
        "key_differentiator": "Đau theo dải khoang liên sườn một bên, tăng cảm giác da (Allodynia), có thể xuất hiện ban phỏng nước đặc trưng sau vài ngày",
        "confirmatory_test": "Nghiệm pháp khám chuyên biệt vùng & Khám cơ lực đối kháng",
        "gold_standard": "Siêu âm can thiệp cơ xương khớp / X-quang / MRI chuyên sâu"
      },
      {
        "condition": "Hội chứng Tietze (Tietze Syndrome)",
        "onset": "Trẻ tuổi < 40, thường sau đợt ho kéo dài hoặc gắng sức",
        "aggravating": "Hít sâu, ấn trực tiếp vào khớp sụn sườn",
        "key_differentiator": "SƯNG NỀ RÕ RỆT, nóng đỏ đau tại khớp ức sườn số 2 hoặc số 3 (Khác với Costochondritis là đau nhiều sụn sườn nhưng KHÔNG CÓ SƯNG NỀ)",
        "confirmatory_test": "Nghiệm pháp khám chuyên biệt vùng & Khám cơ lực đối kháng",
        "gold_standard": "Siêu âm can thiệp cơ xương khớp / X-quang / MRI chuyên sâu"
      },
      {
        "condition": "Hội chứng Kẹp Khoang Liên Sườn Trước (AICS - Deepak Sebastian)",
        "onset": "Tư thế đầu đưa trước (Forward head) và vai nhô trước kéo dài",
        "aggravating": "Hít thở nông kéo dài, nâng tay cao",
        "key_differentiator": "Co rút cơ ngực bé (Pectoralis minor) làm hẹp khoang liên sườn trên, yếu cơ răng trước, ấn đau màng xương sườn và bó mạch TK liên sườn trước",
        "confirmatory_test": "Nghiệm pháp khám chuyên biệt vùng & Khám cơ lực đối kháng",
        "gold_standard": "Siêu âm can thiệp cơ xương khớp / X-quang / MRI chuyên sâu"
      }
    ],
    "figures": [
      {
        "file": "assets/deepak_images/ch05_thoracic_pain/p188_img1.png",
        "page": 188,
        "fig_number": "5.1",
        "caption_en": "Fig. 5.1: Typical thoracic vertebra",
        "caption_vi": "📸 Hình ảnh minh họa: Typical thoracic vertebra",
        "role_type": "general",
        "width": 1169,
        "height": 602
      },
      {
        "file": "assets/deepak_images/ch05_thoracic_pain/p209_img1.jpeg",
        "page": 209,
        "fig_number": "5.2",
        "caption_en": "Fig. 5.2: Clinical representation of the T2 spinal nerve",
        "caption_vi": "📸 Hình ảnh minh họa: Clinical representation of the T2 spinal nerve",
        "role_type": "general",
        "width": 939,
        "height": 766
      },
      {
        "file": "assets/deepak_images/ch05_thoracic_pain/p211_img1.jpeg",
        "page": 211,
        "fig_number": "5.3",
        "caption_en": "Fig. 5.3: Assessing opening restriction in the upper thoracic spine",
        "caption_vi": "📸 Hình ảnh minh họa: Assessing opening restriction in the upper thoracic spine",
        "role_type": "general",
        "width": 1080,
        "height": 810
      },
      {
        "file": "assets/deepak_images/ch05_thoracic_pain/p212_img1.jpeg",
        "page": 212,
        "fig_number": "5.5",
        "caption_en": "Fig. 5.5: Assessing opening restriction in the lower thoracic region",
        "caption_vi": "📸 Hình ảnh minh họa: Assessing opening restriction in the lower thoracic region",
        "role_type": "general",
        "width": 1080,
        "height": 810
      },
      {
        "file": "assets/deepak_images/ch05_thoracic_pain/p212_img2.jpeg",
        "page": 212,
        "fig_number": "5.5",
        "caption_en": "Fig. 5.5: Assessing opening restriction in the lower thoracic region",
        "caption_vi": "📸 Hình ảnh minh họa: Assessing opening restriction in the lower thoracic region",
        "role_type": "general",
        "width": 1080,
        "height": 810
      },
      {
        "file": "assets/deepak_images/ch05_thoracic_pain/p213_img1.jpeg",
        "page": 213,
        "fig_number": "5.6",
        "caption_en": "Fig. 5.6: Assessing closing restriction in the lower thoracic region",
        "caption_vi": "📸 Hình ảnh minh họa: Assessing closing restriction in the lower thoracic region",
        "role_type": "general",
        "width": 1080,
        "height": 810
      },
      {
        "file": "assets/deepak_images/ch05_thoracic_pain/p215_img1.jpeg",
        "page": 215,
        "fig_number": "5.7A and B",
        "caption_en": "Figs 5.7A and B: Posterior rib dysfunction right",
        "caption_vi": "📸 Hình ảnh minh họa: Posterior rib dysfunction right",
        "role_type": "general",
        "width": 1080,
        "height": 720
      },
      {
        "file": "assets/deepak_images/ch05_thoracic_pain/p215_img2.jpeg",
        "page": 215,
        "fig_number": "5.7A and B",
        "caption_en": "Figs 5.7A and B: Posterior rib dysfunction right",
        "caption_vi": "📸 Hình ảnh minh họa: Posterior rib dysfunction right",
        "role_type": "general",
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
        "category": "Chùm Đuôi Ngựa & Phình Động Mạch Chủ Bụng",
        "signs": "Tê yên ngựa, mất kiểm soát bàng quang / ruột, khối u đập nảy bụng.",
        "action": "Cấp cứu Ngoại thần kinh / Phẫu thuật mạch máu ngay.",
        "figures": [
          {
            "file": "assets/deepak_images/ch06_lumbopelvic_pain/p231_img1.jpeg",
            "page": 231,
            "fig_number": "6.4",
            "caption_en": "Fig. 6.4: Sites to elicit bruits",
            "caption_vi": "🚨 Phim X-quang / Cờ đỏ: Sites to elicit bruits",
            "role_type": "redflag",
            "width": 1377,
            "height": 903
          },
          {
            "file": "assets/deepak_images/ch06_lumbopelvic_pain/p258_img1.jpeg",
            "page": 258,
            "fig_number": "6.7",
            "caption_en": "Fig. 6.7: Disc herniation with nerve root entrapment L2 L3",
            "caption_vi": "🚨 Phim X-quang / Cờ đỏ: Disc herniation with nerve root entrapment L2 L3",
            "role_type": "redflag",
            "width": 676,
            "height": 993
          }
        ]
      },
      {
        "category": "Gãy Xẹp Đốt Sống Do Loãng Xương (Osteoporotic Vertebral Fracture)",
        "signs": "Đau nhói thắt lưng đột ngột sau ho rặn, cúi người hoặc chấn thương ngã dập mông ở người cao tuổi dùng corticoid.",
        "action": "X-quang, MRI đánh giá phù tủy xương đốt sống, cân nhắc tạo hình đốt sống bằng bơm xi măng (Vertebroplasty).",
        "figures": [
          {
            "file": "assets/deepak_images/ch06_lumbopelvic_pain/p236_img1.jpeg",
            "page": 236,
            "fig_number": "6.5",
            "caption_en": "Fig. 6.5: Spondylolysis L5",
            "caption_vi": "🚨 Phim X-quang / Cờ đỏ: Spondylolysis L5",
            "role_type": "redflag",
            "width": 527,
            "height": 788
          },
          {
            "file": "assets/deepak_images/ch06_lumbopelvic_pain/p273_img1.jpeg",
            "page": 273,
            "fig_number": "6.8",
            "caption_en": "Fig. 6.8: Vulnerable structures in non-traumatic vertical compression",
            "caption_vi": "🚨 Phim X-quang / Cờ đỏ: Vulnerable structures in non-traumatic vertical compression",
            "role_type": "redflag",
            "width": 949,
            "height": 843
          }
        ]
      }
    ],
    "visceral_referrals": [
      {
        "source": "Sỏi Thận & Sỏi Niệu Quản (Nephrolithiasis)",
        "pattern": "Cơn đau quặn thận khởi phát từ góc sườn cột sống L1-L2 lan ra trước bụng xuống hố chậu và bẹn bìu/môi lớn, đau từng cơn dữ dội làm bệnh nhân lăn lộn.",
        "differential": "Siêu âm thận tiết niệu, xét nghiệm nước tiểu tìm hồng cầu vi thể.",
        "figures": [
          {
            "file": "assets/deepak_images/ch06_lumbopelvic_pain/p229_img1.jpeg",
            "page": 229,
            "fig_number": "6.3",
            "caption_en": "Fig. 6.3: Abdominal quadrants. (Abbreviations: LLQ, left lower quadrant; LUQ,",
            "caption_vi": "🫀 Chuyển đau tạng / Giải phẫu: Abdominal quadrants. (Abbreviations: LLQ, left lower quadrant; LUQ,",
            "role_type": "visceral",
            "width": 1000,
            "height": 903
          }
        ]
      },
      {
        "source": "Bệnh Lý Phụ Khoa (Lạc Nội Mạc Tử Cung, U Xoắn Buồng Trứng, Thai Ngoài Tử Cung)",
        "pattern": "Đau vùng thắt lưng thấp và khung chậu liên quan chu kỳ kinh nguyệt, đau sâu khi giao hợp (Dyspareunia), trễ kinh kèm tụt huyết áp.",
        "differential": "Siêu âm đầu dò âm đạo, xét nghiệm Beta-hCG.",
        "figures": [
          {
            "file": "assets/deepak_images/ch06_lumbopelvic_pain/p225_img1.png",
            "page": 225,
            "fig_number": "6.2",
            "caption_en": "Fig. 6.2: The sacrum with the oblique axis depicted",
            "caption_vi": "🫀 Chuyển đau tạng / Giải phẫu: The sacrum with the oblique axis depicted",
            "role_type": "visceral",
            "width": 1161,
            "height": 603
          }
        ]
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
        "name": "Nghiệm Pháp Nâng Thẳng Chân (Straight Leg Raise - SLR / Lasegue Test)",
        "technique": "Bệnh nhân nằm ngửa, gối duỗi thẳng hoàn toàn. Người khám từ từ nâng chân bệnh nhân lên cao cho đến khi tái hiện triệu chứng.",
        "significance": "Dương tính khi tái hiện đau nhói như điện giật lan từ mông xuống dưới gối ở góc 30° - 70°. Nhạy cảm cao (Sn: 91%) với thoát vị đĩa đệm rễ L4-L5, L5-S1.",
        "sensitivity": "80% - 90%",
        "specificity": "75% - 85%",
        "diagnostic_role": "Nghiệm pháp lâm sàng hỗ trợ sàng lọc chẩn đoán phân biệt",
        "figures": [
          {
            "file": "assets/deepak_images/ch06_lumbopelvic_pain/p288_img1.jpeg",
            "page": 288,
            "fig_number": "6.27",
            "caption_en": "Fig. 6.27: Testing multifidus",
            "caption_vi": "🩺 Thao tác khám: Testing multifidus",
            "role_type": "exam",
            "width": 1080,
            "height": 720
          }
        ]
      },
      {
        "name": "Nghiệm Pháp SLR Chân Lành (Crossed SLR / Well-Leg Raise Test)",
        "technique": "Nâng thẳng chân bên KHÔNG đau của bệnh nhân lên cao.",
        "significance": "Dương tính khi nâng chân lành mà TÁI HIỆN ĐAU Ở CHÂN BỆNH. Độ đặc hiệu cực cao (Sp: 88 - 98%) khẳng định thoát vị đĩa đệm thể lớn hoặc thoát vị thể nách rễ thần kinh.",
        "sensitivity": "80% - 90%",
        "specificity": "75% - 85%",
        "diagnostic_role": "Nghiệm pháp lâm sàng hỗ trợ sàng lọc chẩn đoán phân biệt",
        "figures": [
          {
            "file": "assets/deepak_images/ch06_lumbopelvic_pain/p281_img1.jpeg",
            "page": 281,
            "fig_number": "6.16",
            "caption_en": "Fig. 6.16: Visualizing apparent leg length discrepancy",
            "caption_vi": "🩺 Thao tác khám: Visualizing apparent leg length discrepancy",
            "role_type": "exam",
            "width": 1080,
            "height": 717
          }
        ]
      },
      {
        "name": "Nghiệm Pháp Slump Test (Kéo Căng Toàn Bộ Trục Thần Kinh)",
        "technique": "Bệnh nhân ngồi thõng chân mép giường: Gù lưng -> Cúi cổ -> Duỗi thẳng gối -> Gập mu bàn chân tối đa.",
        "significance": "Tái hiện đau rễ thần kinh, giảm khi ngửa nhẹ đầu (Sn: 84%, Sp: 83% chẩn đoán kích thích rễ thần kinh thắt lưng).",
        "sensitivity": "80% - 90%",
        "specificity": "75% - 85%",
        "diagnostic_role": "Nghiệm pháp lâm sàng hỗ trợ sàng lọc chẩn đoán phân biệt",
        "figures": [
          {
            "file": "assets/deepak_images/ch06_lumbopelvic_pain/p288_img2.jpeg",
            "page": 288,
            "fig_number": "6.27",
            "caption_en": "Fig. 6.27: Testing multifidus",
            "caption_vi": "🩺 Thao tác khám: Testing multifidus",
            "role_type": "exam",
            "width": 1080,
            "height": 810
          },
          {
            "file": "assets/deepak_images/ch06_lumbopelvic_pain/p289_img1.jpeg",
            "page": 289,
            "fig_number": "6.29",
            "caption_en": "Fig. 6.29: Release of cervical flexion",
            "caption_vi": "🩺 Thao tác khám: Release of cervical flexion",
            "role_type": "exam",
            "width": 1080,
            "height": 810
          }
        ]
      },
      {
        "name": "Cụm Nghiệm Pháp Khám Khớp Cùng Chậu (Van der Wurff & Laslett SIJ Cluster)",
        "technique": "Thực hiện 4 nghiệm pháp: 1. Distraction Test (Dãn khớp cùng chậu); 2. Thigh Thrust Test (Đẩy dọc trục đùi); 3. Compression Test (Ép khớp cùng chậu); 4. Gaenslen's Test (Kéo căng khớp cùng chậu hai bên đối nghịch).",
        "significance": "Có ít nhất 2/4 hoặc 3/5 nghiệm pháp dương tính -> Độ đặc hiệu > 85-90% chẩn đoán nguồn đau phát sinh từ Khớp cùng chậu (SIJ Dysfunction).",
        "sensitivity": "91%",
        "specificity": "87%",
        "diagnostic_role": "Tiêu chuẩn vàng lâm sàng chẩn đoán đau khớp cùng chậu SIJ khi có >= 3/5 nghiệm pháp dương tính (+LR: 6.97)",
        "figures": [
          {
            "file": "assets/deepak_images/ch06_lumbopelvic_pain/p292_img1.jpeg",
            "page": 292,
            "fig_number": "6.31",
            "caption_en": "Fig. 6.31: Palpating for tenderness over the sacroiliac joint secondary to an",
            "caption_vi": "🩺 Thao tác khám: Palpating for tenderness over the sacroiliac joint secondary to an",
            "role_type": "exam",
            "width": 633,
            "height": 900
          },
          {
            "file": "assets/deepak_images/ch06_lumbopelvic_pain/p294_img1.jpeg",
            "page": 294,
            "fig_number": "6.32C to E",
            "caption_en": "Figs 6.32C to E: Sacroiliac provocation",
            "caption_vi": "🩺 Thao tác khám: Sacroiliac provocation",
            "role_type": "exam",
            "width": 1080,
            "height": 810
          }
        ]
      },
      {
        "name": "Nghiệm Pháp Cúi Ngồi & Cúi Đứng (Sitting & Standing Flexion Tests)",
        "technique": "Người khám đặt hai ngón tay cái dưới gai chậu sau trên (PSIS) hai bên. Cho bệnh nhân cúi người ở tư thế đứng (Standing) và tư thế ngồi (Sitting).",
        "significance": "Nếu PSIS một bên di chuyển lên trên sớm hơn ở tư thế Đứng nhưng bình thường ở tư thế Ngồi -> Rối loạn chức năng xương chậu (Innominate problem). Nếu bất thường cả khi Ngồi -> Rối loạn chức năng xương cùng (Sacral problem).",
        "sensitivity": "75%",
        "specificity": "78%",
        "diagnostic_role": "Phân biệt sai lệch chuyển động chậu Innominate (bất đối xứng khi đứng) vs xương cùng Sacrum (bất đối xứng khi ngồi)",
        "figures": [
          {
            "file": "assets/deepak_images/ch06_lumbopelvic_pain/p276_img1.jpeg",
            "page": 276,
            "fig_number": "6.11",
            "caption_en": "Fig. 6.11: Stork test",
            "caption_vi": "🩺 Thao tác khám: Stork test",
            "role_type": "exam",
            "width": 1080,
            "height": 810
          }
        ]
      },
      {
        "name": "Nghiệm Pháp Stork (Gillet Test / Stork Motion Test)",
        "technique": "Bệnh nhân đứng thẳng một chân, chân kia nâng gập háng và gối 90°. Người khám sờ PSIS và mào xương cùng.",
        "significance": "Đánh giá sự di động trượt xuống dưới của PSIS so với xương cùng khi co gập háng.",
        "sensitivity": "55%",
        "specificity": "85%",
        "diagnostic_role": "Đặc hiệu đánh giá khóa khớp cùng chậu chuyển động cùng bên khi gập gối nhấc chân",
        "figures": [
          {
            "file": "assets/deepak_images/ch06_lumbopelvic_pain/p276_img2.jpeg",
            "page": 276,
            "fig_number": "6.11",
            "caption_en": "Fig. 6.11: Stork test",
            "caption_vi": "🩺 Thao tác khám: Stork test",
            "role_type": "exam",
            "width": 1080,
            "height": 811
          }
        ]
      }
    ],
    "differential_table": [
      {
        "condition": "Thoát vị đĩa đệm chèn ép rễ (Lumbar Radiculopathy)",
        "onset": "Đột ngột sau khi cúi bê vật nặng hoặc vặn xoắn",
        "aggravating": "Cúi gập người, ho rặn hắt hơi, ngồi lâu",
        "key_differentiator": "Đau lan xuống dưới gối theo dải rễ L4 (mặt trước đùi cẳng chân), L5 (mu bàn chân ngón cái), S1 (gót chân bờ ngoài), SLR (+)",
        "confirmatory_test": "Nghiệm pháp Spurling / SLR / ULTT",
        "gold_standard": "MRI Cột sống xác định tầng và mức độ chèn ép rễ"
      },
      {
        "condition": "Hẹp ống sống thắt lưng (Lumbar Spinal Stenosis)",
        "onset": "Từ từ ở người cao tuổi > 60 tuổi, thoái hóa đa tầng",
        "aggravating": "Đi bộ hoặc đứng thẳng lâu (Khập khiễng cách hồi thần kinh)",
        "key_differentiator": "Đau tê mỏi hai chân khi đi bộ, BẮT BUỘC PHẢI NGỒI HOẶC CÚI GẬP NGƯỜI RA TRƯỚC MỚI GIẢM (Dấu hiệu đẩy xe đẩy siêu thị - Shopping cart sign), mạch mu chân bình thường",
        "confirmatory_test": "Nghiệm pháp khám chuyên biệt vùng & Khám cơ lực đối kháng",
        "gold_standard": "Siêu âm can thiệp cơ xương khớp / X-quang / MRI chuyên sâu"
      },
      {
        "condition": "Hội chứng diện khớp thắt lưng (Lumbar Facet Syndrome)",
        "onset": "Mạn tính, đau khu trú cạnh sống thắt lưng",
        "aggravating": "Ưỡn lưng ra sau kết hợp nghiêng xoay cùng bên (Kemp test)",
        "key_differentiator": "Đau không lan qua đầu gối, không tê bì thần kinh, ấn đau chói diện khớp cạnh cột sống, nằm ngửa co gối thì đỡ đau",
        "confirmatory_test": "Nghiệm pháp Kemps / Ưỡn xoay cột sống tái hiện đau",
        "gold_standard": "Phong bế nhánh trong (Medial Branch Block) giảm > 80% đau"
      },
      {
        "condition": "Đau khớp cùng chậu (Sacroiliac Joint Dysfunction - SIJD)",
        "onset": "Sau ngã đập mông, mang thai, lệch chiều dài hai chân",
        "aggravating": "Đứng một chân, bước lên cầu thang, ngồi bắt chéo chân",
        "key_differentiator": "Đau khu trú tại vùng rãnh khớp cùng chậu ngay dưới PSIS (Dấu hiệu chỉ ngón tay Fortin), cụm test Laslett dương tính (>= 3 test)",
        "confirmatory_test": "Cụm nghiệm pháp Laslett (Distraction, Thigh Thrust, Compression)",
        "gold_standard": "Tiêm phong bế khớp cùng chậu dưới hướng dẫn siêu âm/X-quang"
      },
      {
        "condition": "Hội chứng cơ hình lê (Piriformis Syndrome)",
        "onset": "Ngồi lâu đè ví dày ở túi quần sau, co thắt cơ mông",
        "aggravating": "Khép và xoay trong khớp háng khi đang gập (FAIR test)",
        "key_differentiator": "Đau sâu vùng mông lan xuống mặt sau đùi, sờ thấy dải cơ hình lê co cứng đau chói, nghiệm pháp Freiberg (+) và Pace (+), không có đau rễ thắt lưng",
        "confirmatory_test": "Nghiệm pháp khám chuyên biệt vùng & Khám cơ lực đối kháng",
        "gold_standard": "Siêu âm can thiệp cơ xương khớp / X-quang / MRI chuyên sâu"
      }
    ],
    "figures": [
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p218_img1.jpeg",
        "page": 218,
        "fig_number": "6.1",
        "caption_en": "Fig. 6.1: Lumbar vertebra",
        "caption_vi": "📸 Hình ảnh minh họa: Lumbar vertebra",
        "role_type": "general",
        "width": 1260,
        "height": 513
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p225_img1.png",
        "page": 225,
        "fig_number": "6.2",
        "caption_en": "Fig. 6.2: The sacrum with the oblique axis depicted",
        "caption_vi": "📸 Hình ảnh minh họa: The sacrum with the oblique axis depicted",
        "role_type": "general",
        "width": 1161,
        "height": 603
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p229_img1.jpeg",
        "page": 229,
        "fig_number": "6.3",
        "caption_en": "Fig. 6.3: Abdominal quadrants. (Abbreviations: LLQ, left lower quadrant; LUQ,",
        "caption_vi": "📸 Hình ảnh minh họa: Abdominal quadrants. (Abbreviations: LLQ, left lower quadrant; LUQ,",
        "role_type": "general",
        "width": 1000,
        "height": 903
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p231_img1.jpeg",
        "page": 231,
        "fig_number": "6.4",
        "caption_en": "Fig. 6.4: Sites to elicit bruits",
        "caption_vi": "📸 Hình ảnh minh họa: Sites to elicit bruits",
        "role_type": "general",
        "width": 1377,
        "height": 903
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p236_img1.jpeg",
        "page": 236,
        "fig_number": "6.5",
        "caption_en": "Fig. 6.5: Spondylolysis L5",
        "caption_vi": "📸 Hình ảnh minh họa: Spondylolysis L5",
        "role_type": "general",
        "width": 527,
        "height": 788
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p257_img1.png",
        "page": 257,
        "fig_number": "6.6",
        "caption_en": "Fig. 6.6: Lumbar spondylosis",
        "caption_vi": "📸 Hình ảnh minh họa: Lumbar spondylosis",
        "role_type": "general",
        "width": 860,
        "height": 993
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p258_img1.jpeg",
        "page": 258,
        "fig_number": "6.7",
        "caption_en": "Fig. 6.7: Disc herniation with nerve root entrapment L2 L3",
        "caption_vi": "📸 Hình ảnh minh họa: Disc herniation with nerve root entrapment L2 L3",
        "role_type": "general",
        "width": 676,
        "height": 993
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p273_img1.jpeg",
        "page": 273,
        "fig_number": "6.8",
        "caption_en": "Fig. 6.8: Vulnerable structures in non-traumatic vertical compression",
        "caption_vi": "📸 Hình ảnh minh họa: Vulnerable structures in non-traumatic vertical compression",
        "role_type": "general",
        "width": 949,
        "height": 843
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p274_img1.jpeg",
        "page": 274,
        "fig_number": "6.9",
        "caption_en": "Fig. 6.9: Palpating transverse processes",
        "caption_vi": "📸 Hình ảnh minh họa: Palpating transverse processes",
        "role_type": "general",
        "width": 1080,
        "height": 808
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p276_img1.jpeg",
        "page": 276,
        "fig_number": "6.11",
        "caption_en": "Fig. 6.11: Stork test",
        "caption_vi": "📸 Hình ảnh minh họa: Stork test",
        "role_type": "general",
        "width": 1080,
        "height": 810
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p276_img2.jpeg",
        "page": 276,
        "fig_number": "6.11",
        "caption_en": "Fig. 6.11: Stork test",
        "caption_vi": "📸 Hình ảnh minh họa: Stork test",
        "role_type": "general",
        "width": 1080,
        "height": 811
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p277_img1.jpeg",
        "page": 277,
        "fig_number": "6.12",
        "caption_en": "Fig. 6.12: Palpating pubic tubercles in supine",
        "caption_vi": "📸 Hình ảnh minh họa: Palpating pubic tubercles in supine",
        "role_type": "general",
        "width": 1080,
        "height": 804
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p278_img1.jpeg",
        "page": 278,
        "fig_number": "6.13",
        "caption_en": "Fig. 6.13: Locating the inferior aspect of the sacrum",
        "caption_vi": "📸 Hình ảnh minh họa: Locating the inferior aspect of the sacrum",
        "role_type": "general",
        "width": 1080,
        "height": 808
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p278_img2.jpeg",
        "page": 278,
        "fig_number": "6.13",
        "caption_en": "Fig. 6.13: Locating the inferior aspect of the sacrum",
        "caption_vi": "📸 Hình ảnh minh họa: Locating the inferior aspect of the sacrum",
        "role_type": "general",
        "width": 1080,
        "height": 810
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p279_img1.jpeg",
        "page": 279,
        "fig_number": "6.15",
        "caption_en": "Fig. 6.15: Locating the base",
        "caption_vi": "📸 Hình ảnh minh họa: Locating the base",
        "role_type": "general",
        "width": 1080,
        "height": 774
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p281_img1.jpeg",
        "page": 281,
        "fig_number": "6.16",
        "caption_en": "Fig. 6.16: Visualizing apparent leg length discrepancy",
        "caption_vi": "📸 Hình ảnh minh họa: Visualizing apparent leg length discrepancy",
        "role_type": "general",
        "width": 1080,
        "height": 717
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p281_img2.jpeg",
        "page": 281,
        "fig_number": "6.16",
        "caption_en": "Fig. 6.16: Visualizing apparent leg length discrepancy",
        "caption_vi": "📸 Hình ảnh minh họa: Visualizing apparent leg length discrepancy",
        "role_type": "general",
        "width": 1080,
        "height": 793
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p282_img1.jpeg",
        "page": 282,
        "fig_number": "6.18",
        "caption_en": "Fig. 6.18: Supine to sit",
        "caption_vi": "📸 Hình ảnh minh họa: Supine to sit",
        "role_type": "general",
        "width": 1080,
        "height": 810
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p283_img1.jpeg",
        "page": 283,
        "fig_number": "6.20",
        "caption_en": "Fig. 6.20: Patellar reflex (L2, L3)",
        "caption_vi": "📸 Hình ảnh minh họa: Patellar reflex (L2, L3)",
        "role_type": "general",
        "width": 710,
        "height": 900
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p283_img2.jpeg",
        "page": 283,
        "fig_number": "6.20",
        "caption_en": "Fig. 6.20: Patellar reflex (L2, L3)",
        "caption_vi": "📸 Hình ảnh minh họa: Patellar reflex (L2, L3)",
        "role_type": "general",
        "width": 715,
        "height": 900
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p285_img1.jpeg",
        "page": 285,
        "fig_number": "6.21",
        "caption_en": "Fig. 6.21: Inability to tuck in",
        "caption_vi": "📸 Hình ảnh minh họa: Inability to tuck in",
        "role_type": "general",
        "width": 1080,
        "height": 715
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p285_img2.jpeg",
        "page": 285,
        "fig_number": "6.21",
        "caption_en": "Fig. 6.21: Inability to tuck in",
        "caption_vi": "📸 Hình ảnh minh họa: Inability to tuck in",
        "role_type": "general",
        "width": 1080,
        "height": 720
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p286_img1.jpeg",
        "page": 286,
        "fig_number": "6.23",
        "caption_en": "Fig. 6.23: Able to tuck in and move legs",
        "caption_vi": "📸 Hình ảnh minh họa: Able to tuck in and move legs",
        "role_type": "general",
        "width": 1080,
        "height": 724
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p286_img2.jpeg",
        "page": 286,
        "fig_number": "6.23",
        "caption_en": "Fig. 6.23: Able to tuck in and move legs",
        "caption_vi": "📸 Hình ảnh minh họa: Able to tuck in and move legs",
        "role_type": "general",
        "width": 1080,
        "height": 717
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p287_img1.jpeg",
        "page": 287,
        "fig_number": "6.25",
        "caption_en": "Fig. 6.25: On verbal cueing tuck in position reinforced",
        "caption_vi": "📸 Hình ảnh minh họa: On verbal cueing tuck in position reinforced",
        "role_type": "general",
        "width": 1080,
        "height": 723
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p287_img2.jpeg",
        "page": 287,
        "fig_number": "6.25",
        "caption_en": "Fig. 6.25: On verbal cueing tuck in position reinforced",
        "caption_vi": "📸 Hình ảnh minh họa: On verbal cueing tuck in position reinforced",
        "role_type": "general",
        "width": 624,
        "height": 900
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p288_img1.jpeg",
        "page": 288,
        "fig_number": "6.27",
        "caption_en": "Fig. 6.27: Testing multifidus",
        "caption_vi": "📸 Hình ảnh minh họa: Testing multifidus",
        "role_type": "general",
        "width": 1080,
        "height": 720
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p288_img2.jpeg",
        "page": 288,
        "fig_number": "6.27",
        "caption_en": "Fig. 6.27: Testing multifidus",
        "caption_vi": "📸 Hình ảnh minh họa: Testing multifidus",
        "role_type": "general",
        "width": 1080,
        "height": 810
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p289_img1.jpeg",
        "page": 289,
        "fig_number": "6.29",
        "caption_en": "Fig. 6.29: Release of cervical flexion",
        "caption_vi": "📸 Hình ảnh minh họa: Release of cervical flexion",
        "role_type": "general",
        "width": 1080,
        "height": 810
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p290_img1.jpeg",
        "page": 290,
        "fig_number": "6.30",
        "caption_en": "Fig. 6.30: Side lying knee bend",
        "caption_vi": "📸 Hình ảnh minh họa: Side lying knee bend",
        "role_type": "general",
        "width": 1080,
        "height": 834
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p292_img1.jpeg",
        "page": 292,
        "fig_number": "6.31",
        "caption_en": "Fig. 6.31: Palpating for tenderness over the sacroiliac joint secondary to an",
        "caption_vi": "📸 Hình ảnh minh họa: Palpating for tenderness over the sacroiliac joint secondary to an",
        "role_type": "general",
        "width": 633,
        "height": 900
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p293_img1.jpeg",
        "page": 293,
        "fig_number": "6.32A and B",
        "caption_en": "Figs 6.32A and B: A",
        "caption_vi": "📸 Hình ảnh minh họa: A",
        "role_type": "general",
        "width": 1080,
        "height": 755
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p293_img2.jpeg",
        "page": 293,
        "fig_number": "6.32A and B",
        "caption_en": "Figs 6.32A and B: A",
        "caption_vi": "📸 Hình ảnh minh họa: A",
        "role_type": "general",
        "width": 1080,
        "height": 810
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p294_img1.jpeg",
        "page": 294,
        "fig_number": "6.32C to E",
        "caption_en": "Figs 6.32C to E: Sacroiliac provocation",
        "caption_vi": "📸 Hình ảnh minh họa: Sacroiliac provocation",
        "role_type": "general",
        "width": 1080,
        "height": 810
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p294_img2.jpeg",
        "page": 294,
        "fig_number": "6.32C to E",
        "caption_en": "Figs 6.32C to E: Sacroiliac provocation",
        "caption_vi": "📸 Hình ảnh minh họa: Sacroiliac provocation",
        "role_type": "general",
        "width": 1080,
        "height": 810
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p294_img3.jpeg",
        "page": 294,
        "fig_number": "6.32C to E",
        "caption_en": "Figs 6.32C to E: Sacroiliac provocation",
        "caption_vi": "📸 Hình ảnh minh họa: Sacroiliac provocation",
        "role_type": "general",
        "width": 1080,
        "height": 810
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p295_img1.jpeg",
        "page": 295,
        "fig_number": "6.33A and B",
        "caption_en": "Figs 6.33A and B: Prone instability test",
        "caption_vi": "📸 Hình ảnh minh họa: Prone instability test",
        "role_type": "general",
        "width": 621,
        "height": 900
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p295_img2.jpeg",
        "page": 295,
        "fig_number": "6.33A and B",
        "caption_en": "Figs 6.33A and B: Prone instability test",
        "caption_vi": "📸 Hình ảnh minh họa: Prone instability test",
        "role_type": "general",
        "width": 1080,
        "height": 760
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p296_img1.jpeg",
        "page": 296,
        "fig_number": "6.34",
        "caption_en": "Fig. 6.34: Hip internal rotation",
        "caption_vi": "📸 Hình ảnh minh họa: Hip internal rotation",
        "role_type": "general",
        "width": 659,
        "height": 900
      },
      {
        "file": "assets/deepak_images/ch06_lumbopelvic_pain/p297_img1.jpeg",
        "page": 297,
        "fig_number": "6.35",
        "caption_en": "Fig. 6.35: Thomas test",
        "caption_vi": "📸 Hình ảnh minh họa: Thomas test",
        "role_type": "general",
        "width": 1080,
        "height": 720
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
        "category": "Gãy Cổ Xương Đùi & Viêm Khớp Nhiễm Trùng",
        "signs": "Chân ngắn xoay ngoài sau ngã, sốt cao co cứng khớp háng hoàn toàn.",
        "action": "Chụp X-quang/MRI háng, phẫu thuật cấp cứu.",
        "figures": [
          {
            "file": "assets/deepak_images/ch07_hip_pain/p304_img1.jpeg",
            "page": 304,
            "fig_number": "7.2",
            "caption_en": "Fig. 7.2: Hip joint vasculature",
            "caption_vi": "🚨 Phim X-quang / Cờ đỏ: Hip joint vasculature",
            "role_type": "redflag",
            "width": 1285,
            "height": 813
          },
          {
            "file": "assets/deepak_images/ch07_hip_pain/p324_img1.jpeg",
            "page": 324,
            "fig_number": "7.9",
            "caption_en": "Fig. 7.9: Femoral head posterolateral",
            "caption_vi": "🚨 Phim X-quang / Cờ đỏ: Femoral head posterolateral",
            "role_type": "redflag",
            "width": 958,
            "height": 720
          }
        ]
      },
      {
        "category": "Thoát Vị Bẹn / Đùi Nghẹt (Strangulated Hernia)",
        "signs": "Khối phồng vùng bẹn đùi đau dữ dội, không đẩy lên được, kèm nôn mửa, chướng bụng, bí trung đại tiện.",
        "action": "Cấp cứu Ngoại tổng quát mổ giải phóng tạng nghẹt tránh hoại tử ruột.",
        "figures": [
          {
            "file": "assets/deepak_images/ch07_hip_pain/p301_img1.jpeg",
            "page": 301,
            "fig_number": "7.1",
            "caption_en": "Fig. 7.1: Hip anterior view",
            "caption_vi": "🚨 Phim X-quang / Cờ đỏ: Hip anterior view",
            "role_type": "redflag",
            "width": 1249,
            "height": 813
          },
          {
            "file": "assets/deepak_images/ch07_hip_pain/p320_img1.jpeg",
            "page": 320,
            "fig_number": "7.7",
            "caption_en": "Fig. 7.7: Right thigh anterior view",
            "caption_vi": "🚨 Phim X-quang / Cờ đỏ: Right thigh anterior view",
            "role_type": "redflag",
            "width": 974,
            "height": 903
          }
        ]
      }
    ],
    "visceral_referrals": [
      {
        "source": "Áp-xe Cơ Thắt Lưng Chậu (Psoas Abscess)",
        "pattern": "Đau vùng bẹn và mặt trước trong khớp háng kèm sốt dao động, gầy sút cân. Bệnh nhân có tư thế gập háng và xoay trong để chùng cơ thắt lưng chậu; Duỗi háng thụ động gây đau dữ dội (Dấu hiệu cơ thắt lưng chậu / Psoas sign +).",
        "differential": "Chụp CT hoặc MRI vùng bụng chậu tìm ổ áp-xe trong cơ thắt lưng chậu.",
        "figures": [
          {
            "file": "assets/deepak_images/ch07_hip_pain/p301_img1.jpeg",
            "page": 301,
            "fig_number": "7.1",
            "caption_en": "Fig. 7.1: Hip anterior view",
            "caption_vi": "🫀 Chuyển đau tạng / Giải phẫu: Hip anterior view",
            "role_type": "visceral",
            "width": 1249,
            "height": 813
          }
        ]
      },
      {
        "source": "Bệnh Lý Thần Kinh Bì Đùi Ngoài (Meralgia Paresthetica)",
        "pattern": "Tê bì, bỏng rát, giảm cảm giác hình bầu dục ở mặt trước ngoài đùi do dây thần kinh bì đùi ngoài bị chèn ép dưới dây chằng bẹn (ở người béo phì, mặc quần chật, đeo thắt lưng đồ nghề nặng).",
        "differential": "Khám vận động cơ lực và phản xạ gân xương hoàn toàn bình thường (dây thần kinh thuần cảm giác).",
        "figures": [
          {
            "file": "assets/deepak_images/ch07_hip_pain/p322_img1.jpeg",
            "page": 322,
            "fig_number": "7.8",
            "caption_en": "Fig. 7.8: Sites of entrapment of the lateral cutaneous nerve",
            "caption_vi": "🫀 Chuyển đau tạng / Giải phẫu: Sites of entrapment of the lateral cutaneous nerve",
            "role_type": "visceral",
            "width": 968,
            "height": 891
          }
        ]
      }
    ],
    "drug_induced": [
      "Corticosteroid: Thủ phạm hàng đầu gây hoại tử vô mạch chỏm xương đùi (AVN).",
      "Quinolone: Viêm gân cơ thắt lưng chậu và viêm túi hoạt dịch cơ thẳng đùi."
    ],
    "examination_procedures": [
      {
        "name": "Nghiệm Pháp FADIR (Flexion-Adduction-Internal Rotation Test)",
        "technique": "Bệnh nhân nằm ngửa. Người khám gập khớp háng 90°, khép đùi vào trong và xoay trong khớp háng.",
        "significance": "Tái hiện đau chói sâu trong bẹn -> Dương tính với Xung đột xương đùi ổ cối (Femoroacetabular Impingement - FAI) và Rách sụn viền ổ cối (Acetabular Labral Tear). Độ nhạy cực cao (Sn: 94-99%).",
        "sensitivity": "80% - 90%",
        "specificity": "75% - 85%",
        "diagnostic_role": "Nghiệm pháp lâm sàng hỗ trợ sàng lọc chẩn đoán phân biệt",
        "figures": [
          {
            "file": "assets/deepak_images/ch07_hip_pain/p316_img1.jpeg",
            "page": 316,
            "fig_number": "7.5",
            "caption_en": "Fig. 7.5: Anterior view of the hip showing a cam impingement",
            "caption_vi": "🩺 Thao tác khám: Anterior view of the hip showing a cam impingement",
            "role_type": "exam",
            "width": 990,
            "height": 1019
          },
          {
            "file": "assets/deepak_images/ch07_hip_pain/p317_img1.jpeg",
            "page": 317,
            "fig_number": "7.6",
            "caption_en": "Fig. 7.6: Anterior view of the hip showing a pincer impingement",
            "caption_vi": "🩺 Thao tác khám: Anterior view of the hip showing a pincer impingement",
            "role_type": "exam",
            "width": 990,
            "height": 1019
          }
        ]
      },
      {
        "name": "Nghiệm Pháp FABER / Patrick (Flexion-Abduction-External Rotation)",
        "technique": "Bệnh nhân nằm ngửa, gập gối, giạng và xoay ngoài háng đặt mắt cá ngoài chân khám lên trên đầu gối chân đối diện (tạo hình số 4). Người khám một tay giữ gai chậu đối bên, một tay ấn nhẹ đầu gối chân khám xuống mặt bàn.",
        "significance": "Đau sâu mặt trước bẹn: Bệnh lý nội khớp háng (Thoái hóa/Sụn viền); Đau sau mông vùng khớp cùng chậu: Rối loạn chức năng khớp cùng chậu (SIJD).",
        "sensitivity": "82% - 88%",
        "specificity": "68% - 75%",
        "diagnostic_role": "Sàng lọc đau khớp háng trong bao (đau bẹn trước) vs khớp cùng chậu (đau mông sau)",
        "figures": [
          {
            "file": "assets/deepak_images/ch07_hip_pain/p301_img1.jpeg",
            "page": 301,
            "fig_number": "7.1",
            "caption_en": "Fig. 7.1: Hip anterior view",
            "caption_vi": "🩺 Thao tác khám: Hip anterior view",
            "role_type": "exam",
            "width": 1249,
            "height": 813
          }
        ]
      },
      {
        "name": "Nghiệm Pháp Scouring / Hip Quadrant Test (Nghiệm Pháp Vét Khớp Háng)",
        "technique": "Bệnh nhân nằm ngửa. Người khám gập và khép háng tối đa, tác dụng một lực nén dọc trục xương đùi đồng thời di chuyển đùi theo hình vòng cung từ khép sang giạng.",
        "significance": "Tái hiện tiếng lạo xạo, đau chói hoặc cảm giác kẹt khớp -> Tổn thương thoái hóa sụn khớp hoặc rách sụn viền ổ cối.",
        "sensitivity": "80% - 85%",
        "specificity": "70% - 75%",
        "diagnostic_role": "Tái hiện đau và tiếng lục cục ổ cối trong thoái hóa khớp háng và tổn thương sụn khớp",
        "figures": [
          {
            "file": "assets/deepak_images/ch07_hip_pain/p330_img1.jpeg",
            "page": 330,
            "fig_number": "7.18",
            "caption_en": "Fig. 7.18: Hip scouring test",
            "caption_vi": "🩺 Thao tác khám: Hip scouring test",
            "role_type": "exam",
            "width": 958,
            "height": 703
          },
          {
            "file": "assets/deepak_images/ch07_hip_pain/p331_img1.jpeg",
            "page": 331,
            "fig_number": "7.19",
            "caption_en": "Fig. 7.19: Hip telescoping test",
            "caption_vi": "🩺 Thao tác khám: Hip telescoping test",
            "role_type": "exam",
            "width": 958,
            "height": 693
          }
        ]
      },
      {
        "name": "Nghiệm Pháp Thomas (Thomas Test Co Rút Cơ Gập Háng)",
        "technique": "Bệnh nhân nằm ngửa, ôm sát một gối vào ngực để làm phẳng cột sống thắt lưng. Quan sát chân còn lại trên mặt bàn.",
        "significance": "Nếu đùi chân kia bị nhấc bổng khỏi mặt bàn -> Co rút cơ thắt lưng chậu (Iliopsoas tightness); Nếu đùi chạm bàn nhưng cẳng chân bị duỗi ra -> Co rút cơ thẳng đùi (Rectus femoris).",
        "sensitivity": "89%",
        "specificity": "92%",
        "diagnostic_role": "Độ chính xác cao đánh giá co rút cơ thắt lưng chậu (Iliopsoas) và cơ thẳng đùi (Rectus Femoris)",
        "figures": [
          {
            "file": "assets/deepak_images/ch07_hip_pain/p326_img1.jpeg",
            "page": 326,
            "fig_number": "7.12",
            "caption_en": "Fig. 7.12: Thomas test",
            "caption_vi": "🩺 Thao tác khám: Thomas test",
            "role_type": "exam",
            "width": 958,
            "height": 718
          }
        ]
      },
      {
        "name": "Nghiệm Pháp Ober (Ober's Test Co Rút Dải Chậu Chày)",
        "technique": "Bệnh nhân nằm nghiêng bên lành, gối dưới gập. Người khám nâng chân trên, gập gối 90°, duỗi háng nhẹ và thả lỏng cho đùi rơi tự do khép xuống bàn.",
        "significance": "Nếu đùi không rơi xuống được mặt bàn mà lơ lửng trên không -> Co rút dải chậu chày (Iliotibial band contracture).",
        "sensitivity": "85%",
        "specificity": "90%",
        "diagnostic_role": "Đánh giá co rút dải chậu chày (ITB) và cơ căng mạc đùi (TFL) gây hội chứng đau mấu chuyển lớn",
        "figures": [
          {
            "file": "assets/deepak_images/ch07_hip_pain/p327_img1.jpeg",
            "page": 327,
            "fig_number": "7.13",
            "caption_en": "Fig. 7.13: Assessing gluteus medius strength",
            "caption_vi": "🩺 Thao tác khám: Assessing gluteus medius strength",
            "role_type": "exam",
            "width": 532,
            "height": 798
          }
        ]
      },
      {
        "name": "Dấu Hiệu Trendelenburg (Trendelenburg Sign Khám Cơ Mông Nhỡ)",
        "technique": "Yêu cầu bệnh nhân đứng một chân trên chân khám trong 30 giây.",
        "significance": "Nếu khung chậu bên chân đối diện bị sa sụp xuống thấp -> Yếu hoặc đứt rách gân cơ mông nhỡ / mông bé (Gluteus medius insufficiency).",
        "sensitivity": "73%",
        "specificity": "77%",
        "diagnostic_role": "Phát hiện suy yếu/rách cơ mông nhỡ (Gluteus Medius) hoặc ức chế rễ L5 / thần kinh mông trên",
        "figures": [
          {
            "file": "assets/deepak_images/ch07_hip_pain/p325_img1.jpeg",
            "page": 325,
            "fig_number": "7.10",
            "caption_en": "Fig. 7.10: Hip abduction firing pattern",
            "caption_vi": "🩺 Thao tác khám: Hip abduction firing pattern",
            "role_type": "exam",
            "width": 958,
            "height": 711
          }
        ]
      }
    ],
    "differential_table": [
      {
        "condition": "Thoái hóa khớp háng (Hip Osteoarthritis)",
        "onset": "Người lớn tuổi > 50, đau bẹn âm ỉ tăng dần khi đi lại",
        "aggravating": "Tì đè chịu lực, đứng dậy từ ghế thấp",
        "key_differentiator": "Mô hình bao khớp kinh điển (Capsular pattern: Hạn chế gập, khép và xoay trong > giạng), X-quang hẹp khe khớp háng trên/ngoài, gai xương ổ cối",
        "confirmatory_test": "Nghiệm pháp khám chuyên biệt vùng & Khám cơ lực đối kháng",
        "gold_standard": "Siêu âm can thiệp cơ xương khớp / X-quang / MRI chuyên sâu"
      },
      {
        "condition": "Hội chứng đau mấu chuyển lớn (GTPS / Trochanteric Bursitis)",
        "onset": "Nữ trung niên, đau mặt ngoài khớp háng",
        "aggravating": "Nằm nghiêng đè lên bên đau, leo cầu thang",
        "key_differentiator": "Ấn đau chói ngay tại đỉnh mấu chuyển lớn xương đùi, đau khi giạng háng kháng lực, tầm vận động nội khớp háng (FABER/FADIR) hoàn toàn bình thường",
        "confirmatory_test": "Nghiệm pháp khám chuyên biệt vùng & Khám cơ lực đối kháng",
        "gold_standard": "Siêu âm can thiệp cơ xương khớp / X-quang / MRI chuyên sâu"
      },
      {
        "condition": "Rách sụn viền ổ cối (Acetabular Labral Tear)",
        "onset": "Người trẻ vận động viên sau động tác xoay vặn háng",
        "aggravating": "Ngồi lâu ghế thấp, xoay vặn khớp háng",
        "key_differentiator": "Cảm giác lục cục, kẹt khớp sâu trong bẹn, FADIR (+) rõ rệt, chụp MRI khớp háng có tiêm thuốc tương phản từ nội khớp (MR Arthrography)",
        "confirmatory_test": "Nghiệm pháp khám chuyên biệt vùng & Khám cơ lực đối kháng",
        "gold_standard": "Siêu âm can thiệp cơ xương khớp / X-quang / MRI chuyên sâu"
      },
      {
        "condition": "Bật khớp háng (Snapping Hip Syndrome)",
        "onset": "Vũ công, vận động viên điền kinh",
        "aggravating": "Gập duỗi khớp háng liên tục",
        "key_differentiator": "Bật ngoài (dải chậu chày trượt qua mấu chuyển lớn) hoặc Bật trong (gân cơ thắt lưng chậu trượt qua gờ chậu lược), nghe tiếng 'bật' rõ khi duỗi háng từ tư thế gập giạng",
        "confirmatory_test": "Nghiệm pháp khám chuyên biệt vùng & Khám cơ lực đối kháng",
        "gold_standard": "Siêu âm can thiệp cơ xương khớp / X-quang / MRI chuyên sâu"
      }
    ],
    "figures": [
      {
        "file": "assets/deepak_images/ch07_hip_pain/p301_img1.jpeg",
        "page": 301,
        "fig_number": "7.1",
        "caption_en": "Fig. 7.1: Hip anterior view",
        "caption_vi": "📸 Hình ảnh minh họa: Hip anterior view",
        "role_type": "general",
        "width": 1249,
        "height": 813
      },
      {
        "file": "assets/deepak_images/ch07_hip_pain/p304_img1.jpeg",
        "page": 304,
        "fig_number": "7.2",
        "caption_en": "Fig. 7.2: Hip joint vasculature",
        "caption_vi": "📸 Hình ảnh minh họa: Hip joint vasculature",
        "role_type": "general",
        "width": 1285,
        "height": 813
      },
      {
        "file": "assets/deepak_images/ch07_hip_pain/p314_img1.jpeg",
        "page": 314,
        "fig_number": "7.3",
        "caption_en": "Fig. 7.3: Osteoarthritis of the coxafemoral joint",
        "caption_vi": "📸 Hình ảnh minh họa: Osteoarthritis of the coxafemoral joint",
        "role_type": "general",
        "width": 1230,
        "height": 813
      },
      {
        "file": "assets/deepak_images/ch07_hip_pain/p315_img1.jpeg",
        "page": 315,
        "fig_number": "7.4",
        "caption_en": "Fig. 7.4: Location of friction on the trochanteric bursa",
        "caption_vi": "📸 Hình ảnh minh họa: Location of friction on the trochanteric bursa",
        "role_type": "general",
        "width": 1246,
        "height": 813
      },
      {
        "file": "assets/deepak_images/ch07_hip_pain/p316_img1.jpeg",
        "page": 316,
        "fig_number": "7.5",
        "caption_en": "Fig. 7.5: Anterior view of the hip showing a cam impingement",
        "caption_vi": "📸 Hình ảnh minh họa: Anterior view of the hip showing a cam impingement",
        "role_type": "general",
        "width": 990,
        "height": 1019
      },
      {
        "file": "assets/deepak_images/ch07_hip_pain/p317_img1.jpeg",
        "page": 317,
        "fig_number": "7.6",
        "caption_en": "Fig. 7.6: Anterior view of the hip showing a pincer impingement",
        "caption_vi": "📸 Hình ảnh minh họa: Anterior view of the hip showing a pincer impingement",
        "role_type": "general",
        "width": 990,
        "height": 1019
      },
      {
        "file": "assets/deepak_images/ch07_hip_pain/p320_img1.jpeg",
        "page": 320,
        "fig_number": "7.7",
        "caption_en": "Fig. 7.7: Right thigh anterior view",
        "caption_vi": "📸 Hình ảnh minh họa: Right thigh anterior view",
        "role_type": "general",
        "width": 974,
        "height": 903
      },
      {
        "file": "assets/deepak_images/ch07_hip_pain/p322_img1.jpeg",
        "page": 322,
        "fig_number": "7.8",
        "caption_en": "Fig. 7.8: Sites of entrapment of the lateral cutaneous nerve",
        "caption_vi": "📸 Hình ảnh minh họa: Sites of entrapment of the lateral cutaneous nerve",
        "role_type": "general",
        "width": 968,
        "height": 891
      },
      {
        "file": "assets/deepak_images/ch07_hip_pain/p324_img1.jpeg",
        "page": 324,
        "fig_number": "7.9",
        "caption_en": "Fig. 7.9: Femoral head posterolateral",
        "caption_vi": "📸 Hình ảnh minh họa: Femoral head posterolateral",
        "role_type": "general",
        "width": 958,
        "height": 720
      },
      {
        "file": "assets/deepak_images/ch07_hip_pain/p325_img1.jpeg",
        "page": 325,
        "fig_number": "7.10",
        "caption_en": "Fig. 7.10: Hip abduction firing pattern",
        "caption_vi": "📸 Hình ảnh minh họa: Hip abduction firing pattern",
        "role_type": "general",
        "width": 958,
        "height": 711
      },
      {
        "file": "assets/deepak_images/ch07_hip_pain/p325_img2.jpeg",
        "page": 325,
        "fig_number": "7.10",
        "caption_en": "Fig. 7.10: Hip abduction firing pattern",
        "caption_vi": "📸 Hình ảnh minh họa: Hip abduction firing pattern",
        "role_type": "general",
        "width": 525,
        "height": 798
      },
      {
        "file": "assets/deepak_images/ch07_hip_pain/p326_img1.jpeg",
        "page": 326,
        "fig_number": "7.12",
        "caption_en": "Fig. 7.12: Thomas test",
        "caption_vi": "📸 Hình ảnh minh họa: Thomas test",
        "role_type": "general",
        "width": 958,
        "height": 718
      },
      {
        "file": "assets/deepak_images/ch07_hip_pain/p327_img1.jpeg",
        "page": 327,
        "fig_number": "7.13",
        "caption_en": "Fig. 7.13: Assessing gluteus medius strength",
        "caption_vi": "📸 Hình ảnh minh họa: Assessing gluteus medius strength",
        "role_type": "general",
        "width": 532,
        "height": 798
      },
      {
        "file": "assets/deepak_images/ch07_hip_pain/p327_img2.jpeg",
        "page": 327,
        "fig_number": "7.13",
        "caption_en": "Fig. 7.13: Assessing gluteus medius strength",
        "caption_vi": "📸 Hình ảnh minh họa: Assessing gluteus medius strength",
        "role_type": "general",
        "width": 958,
        "height": 602
      },
      {
        "file": "assets/deepak_images/ch07_hip_pain/p328_img1.jpeg",
        "page": 328,
        "fig_number": "7.15",
        "caption_en": "Fig. 7.15: Palpation for tenderness over the trochanteric bursa",
        "caption_vi": "📸 Hình ảnh minh họa: Palpation for tenderness over the trochanteric bursa",
        "role_type": "general",
        "width": 958,
        "height": 639
      },
      {
        "file": "assets/deepak_images/ch07_hip_pain/p329_img1.jpeg",
        "page": 329,
        "fig_number": "7.16",
        "caption_en": "Fig. 7.16: Palpation for tenderness over the ischial bursa",
        "caption_vi": "📸 Hình ảnh minh họa: Palpation for tenderness over the ischial bursa",
        "role_type": "general",
        "width": 958,
        "height": 474
      },
      {
        "file": "assets/deepak_images/ch07_hip_pain/p330_img1.jpeg",
        "page": 330,
        "fig_number": "7.18",
        "caption_en": "Fig. 7.18: Hip scouring test",
        "caption_vi": "📸 Hình ảnh minh họa: Hip scouring test",
        "role_type": "general",
        "width": 958,
        "height": 703
      },
      {
        "file": "assets/deepak_images/ch07_hip_pain/p330_img2.jpeg",
        "page": 330,
        "fig_number": "7.18",
        "caption_en": "Fig. 7.18: Hip scouring test",
        "caption_vi": "📸 Hình ảnh minh họa: Hip scouring test",
        "role_type": "general",
        "width": 958,
        "height": 685
      },
      {
        "file": "assets/deepak_images/ch07_hip_pain/p331_img1.jpeg",
        "page": 331,
        "fig_number": "7.19",
        "caption_en": "Fig. 7.19: Hip telescoping test",
        "caption_vi": "📸 Hình ảnh minh họa: Hip telescoping test",
        "role_type": "general",
        "width": 958,
        "height": 693
      },
      {
        "file": "assets/deepak_images/ch07_hip_pain/p331_img2.jpeg",
        "page": 331,
        "fig_number": "7.19",
        "caption_en": "Fig. 7.19: Hip telescoping test",
        "caption_vi": "📸 Hình ảnh minh họa: Hip telescoping test",
        "role_type": "general",
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
        "category": "Huyết Khối Tĩnh Mạch Sâu & Hội Chứng Khoang",
        "signs": "Bắp chân sưng nóng đỏ đau đột ngột, đau quá mức khi gập duỗi thụ động.",
        "action": "Siêu âm Doppler / Mở cân giải áp cấp cứu.",
        "figures": [
          {
            "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p380_img1.jpeg",
            "page": 380,
            "fig_number": "8.16",
            "caption_en": "Fig. 8.16: March fracture",
            "caption_vi": "🚨 Phim X-quang / Cờ đỏ: March fracture",
            "role_type": "redflag",
            "width": 1161,
            "height": 753
          },
          {
            "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p385_img1.jpeg",
            "page": 385,
            "fig_number": "8.20",
            "caption_en": "Fig. 8.20: Vulnerable ligaments in inversion sprains",
            "caption_vi": "🚨 Phim X-quang / Cờ đỏ: Vulnerable ligaments in inversion sprains",
            "role_type": "redflag",
            "width": 1194,
            "height": 752
          }
        ]
      },
      {
        "category": "Đứt Hoàn Toàn Gân Gót Achilles (Achilles Rupture)",
        "signs": "Cảm giác có người đá mạnh vào gót chân, tiếng 'bốp', sờ thấy ổ khuyết lõm trên gân gót, Thompson test (+).",
        "action": "Nẹp cổ chân gập lòng, siêu âm đánh giá, phẫu thuật nối gân khẩn cấp.",
        "figures": [
          {
            "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p390_img1.jpeg",
            "page": 390,
            "fig_number": "8.24",
            "caption_en": "Fig. 8.24: Tendoachilles tendon",
            "caption_vi": "🚨 Phim X-quang / Cờ đỏ: Tendoachilles tendon",
            "role_type": "redflag",
            "width": 523,
            "height": 752
          },
          {
            "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p389_img1.jpeg",
            "page": 389,
            "fig_number": "8.23",
            "caption_en": "Fig. 8.23: Retrocalcaneal bursitis",
            "caption_vi": "🚨 Phim X-quang / Cờ đỏ: Retrocalcaneal bursitis",
            "role_type": "redflag",
            "width": 774,
            "height": 693
          }
        ]
      }
    ],
    "visceral_referrals": [
      {
        "source": "Đau Chuyển Từ Khớp Háng Xuống Khớp Gối (Hip-to-Knee Referred Pain)",
        "pattern": "Bệnh lý khớp háng (Thoái hóa háng, Trượt biểu mô chỏm đùi SCFE, Viêm khớp háng) kích thích thần kinh bịt (Obturator nerve) quy chiếu đau xuống mặt trong và mặt trước khớp gối.",
        "differential": "Ở trẻ em hoặc người lớn tuổi than phiền đau gối nhưng khám gối hoàn toàn bình thường -> BẮT BUỘC PHẢI KHÁM KHỚP HÁNG!",
        "figures": [
          {
            "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p335_img1.jpeg",
            "page": 335,
            "fig_number": "8.1",
            "caption_en": "Fig. 8.1: Knee joint anterior view",
            "caption_vi": "🫀 Chuyển đau tạng / Giải phẫu: Knee joint anterior view",
            "role_type": "visceral",
            "width": 1196,
            "height": 663
          }
        ]
      },
      {
        "source": "Đau Rễ Thần Kinh Thắt Lưng (L3-L4-L5-S1 Radiculopathy)",
        "pattern": "Rễ L3-L4 đau mặt trước đùi và trước trong gối; Rễ L5 đau mặt ngoài cẳng chân và mu chân ngón cái; Rễ S1 đau bắp chân lan xuống gót và bờ ngoài bàn chân.",
        "differential": "Khám cột sống thắt lưng, nghiệm pháp SLR, Slump test và đánh giá phản xạ gân gót.",
        "figures": [
          {
            "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p377_img1.png",
            "page": 377,
            "fig_number": "8.14",
            "caption_en": "Fig. 8.14: Tibial nerve and its branches",
            "caption_vi": "🫀 Chuyển đau tạng / Giải phẫu: Tibial nerve and its branches",
            "role_type": "visceral",
            "width": 1259,
            "height": 903
          }
        ]
      }
    ],
    "drug_induced": [
      "Quinolone (Levofloxacin/Ciprofloxacin): Thủ phạm kinh điển gây đứt gân gót Achilles.",
      "Lợi tiểu Thiazide: Kích hoạt cơn Gút cấp tại khớp bàn ngón 1 (Podagra).",
      "Hóa trị ung thư (Paclitaxel/Cisplatin): Tê bì dị cảm bỏng rát hai bàn chân (CIPN)."
    ],
    "examination_procedures": [
      {
        "name": "Nghiệm Pháp Lachman (Tiêu Chuẩn Vàng Đứt Dây Chằng Chéo Trước ACL)",
        "technique": "Bệnh nhân nằm ngửa, gối gập 20° - 30°. Người khám một tay cố định đầu dưới xương đùi, một tay nắm đầu trên xương chày kéo thẳng ra trước.",
        "significance": "Độ dịch chuyển mâm chày ra trước tăng kèm mất điểm dừng cứng (Soft end-feel). Độ nhạy (Sn: 85 - 95%) và Độ đặc hiệu (Sp: 94 - 98%) vượt trội hơn nghiệm pháp Ngăn kéo trước.",
        "sensitivity": "80% - 90%",
        "specificity": "75% - 85%",
        "diagnostic_role": "Nghiệm pháp lâm sàng hỗ trợ sàng lọc chẩn đoán phân biệt",
        "figures": [
          {
            "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p407_img1.jpeg",
            "page": 407,
            "fig_number": "8.49",
            "caption_en": "Fig. 8.49: Lachman test",
            "caption_vi": "🩺 Thao tác khám: Lachman test",
            "role_type": "exam",
            "width": 958,
            "height": 650
          }
        ]
      },
      {
        "name": "Nghiệm Pháp Pivot Shift (Mất Vững Xoay Khớp Gối Trong Đứt ACL)",
        "technique": "Bệnh nhân nằm ngửa. Người khám nâng chân, xoay trong cẳng chân, tác dụng lực vẹo ngoài (Valgus) lên đầu trên xương chày đồng thời từ từ gập khớp gối từ tư thế duỗi.",
        "significance": "Ở góc gập khoảng 30° - 40°, mâm chày ngoài đang bị bán trật ra trước sẽ đột ngột giật 'khục' trượt về vị trí cũ. Độ đặc hiệu cực cao (Sp: 98%) khẳng định mất vững khớp gối chức năng.",
        "sensitivity": "80% - 90%",
        "specificity": "75% - 85%",
        "diagnostic_role": "Nghiệm pháp lâm sàng hỗ trợ sàng lọc chẩn đoán phân biệt",
        "figures": [
          {
            "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p411_img1.jpeg",
            "page": 411,
            "fig_number": "8.53A and B",
            "caption_en": "Figs 8.53A and B: Pivot shift maneuver",
            "caption_vi": "🩺 Thao tác khám: Pivot shift maneuver",
            "role_type": "exam",
            "width": 958,
            "height": 706
          }
        ]
      },
      {
        "name": "Nghiệm Pháp McMurray (Khám Rách Sụn Chêm Trong & Ngoài)",
        "technique": "Bệnh nhân nằm ngửa, gập gối tối đa. Người khám một tay sờ khe khớp gối, tay kia cầm gót chân xoay ngoài cẳng chân (khám sụn chêm trong) hoặc xoay trong (khám sụn chêm ngoài) rồi từ từ duỗi khớp gối ra.",
        "significance": "Tái hiện tiếng 'lục cục' (clunk/click) kèm đau chói tại khe khớp gối tương ứng.",
        "sensitivity": "53% - 70%",
        "specificity": "85% - 95%",
        "diagnostic_role": "Đặc hiệu cao phát hiện rách sụn chêm khi có tiếng kêu click và đau chói khe khớp (+LR: 4.5)",
        "figures": [
          {
            "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p406_img1.jpeg",
            "page": 406,
            "fig_number": "8.47",
            "caption_en": "Fig. 8.47: McMurray’s test",
            "caption_vi": "🩺 Thao tác khám: McMurray’s test",
            "role_type": "exam",
            "width": 958,
            "height": 721
          },
          {
            "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p365_img1.jpeg",
            "page": 365,
            "fig_number": "8.9",
            "caption_en": "Fig. 8.9: Types of meniscal tears",
            "caption_vi": "🩺 Thao tác khám: Types of meniscal tears",
            "role_type": "exam",
            "width": 1339,
            "height": 678
          }
        ]
      },
      {
        "name": "Nghiệm Pháp Clark (Patellar Grind Test Khám Khớp Bánh Chè - Đùi)",
        "technique": "Bệnh nhân nằm ngửa duỗi thẳng gối. Người khám dùng bờ ngón tay cái và ngón trỏ ấn bờ trên xương bánh chè xuống dưới, yêu cầu bệnh nhân gồng cơ tứ đầu đùi.",
        "significance": "Đau chói dưới xương bánh chè và bệnh nhân không thể duy trì co cơ -> Dương tính trong Hội chứng đau bánh chè - đùi (PFPS) / Nhuyễn sụn bánh chè.",
        "sensitivity": "74%",
        "specificity": "82%",
        "diagnostic_role": "Khám hội chứng đau bánh chè - đùi (PFPS) và thoái hóa sụn khớp bánh chè",
        "figures": [
          {
            "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p401_img1.jpeg",
            "page": 401,
            "fig_number": "8.41",
            "caption_en": "Fig. 8.41: Tenderness over the lateral retinaculum",
            "caption_vi": "🩺 Thao tác khám: Tenderness over the lateral retinaculum",
            "role_type": "exam",
            "width": 958,
            "height": 638
          },
          {
            "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p402_img1.jpeg",
            "page": 402,
            "fig_number": "8.43",
            "caption_en": "Fig. 8.43: Active knee extension lag",
            "caption_vi": "🩺 Thao tác khám: Active knee extension lag",
            "role_type": "exam",
            "width": 958,
            "height": 697
          }
        ]
      },
      {
        "name": "Nghiệm Pháp Hoffa (Hoffa's Test Khám Viêm Đệm Mỡ Dưới Bánh Chè)",
        "technique": "Gập nhẹ gối, người khám ấn sâu hai ngón tay vào hai bên gân bánh chè (vào đệm mỡ Hoffa), sau đó yêu cầu bệnh nhân duỗi thẳng gối hoàn toàn.",
        "significance": "Đau chói dữ dội khi gối duỗi thẳng do đệm mỡ bị chèn kẹp giữa lồi cầu đùi và mâm chày.",
        "sensitivity": "85%",
        "specificity": "90%",
        "diagnostic_role": "Đặc hiệu cao chẩn đoán viêm phì đại đệm mỡ dưới bánh chè Hoffa (Hoffa Disease)",
        "figures": [
          {
            "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p401_img1.jpeg",
            "page": 401,
            "fig_number": "8.41",
            "caption_en": "Fig. 8.41: Tenderness over the lateral retinaculum",
            "caption_vi": "🩺 Thao tác khám: Tenderness over the lateral retinaculum",
            "role_type": "exam",
            "width": 958,
            "height": 638
          },
          {
            "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p402_img1.jpeg",
            "page": 402,
            "fig_number": "8.43",
            "caption_en": "Fig. 8.43: Active knee extension lag",
            "caption_vi": "🩺 Thao tác khám: Active knee extension lag",
            "role_type": "exam",
            "width": 958,
            "height": 697
          }
        ]
      },
      {
        "name": "Nghiệm Pháp Thompson (Thompson Test Khám Đứt Gân Gót Achilles)",
        "technique": "Bệnh nhân nằm sấp buông thõng bàn chân ngoài mép bàn. Người khám dùng tay bóp mạnh khối cơ bắp chân.",
        "significance": "Bàn chân không tự động gập lòng -> Dương tính đứt hoàn toàn gân gót Achilles (Sp: 98%).",
        "sensitivity": "96% - 98%",
        "specificity": "93% - 98%",
        "diagnostic_role": "Tiêu chuẩn vàng khám lâm sàng đứt hoàn toàn gân gót Achilles (+LR: 15.0, -LR: 0.03)",
        "figures": [
          {
            "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p390_img2.jpeg",
            "page": 390,
            "fig_number": "8.24",
            "caption_en": "Fig. 8.24: Tendoachilles tendon",
            "caption_vi": "🩺 Thao tác khám: Tendoachilles tendon",
            "role_type": "exam",
            "width": 512,
            "height": 752
          }
        ]
      },
      {
        "name": "Nghiệm Pháp Squeeze Test (Khám Tổn Thương Khớp Chày Mác Dưới - Syndesmosis)",
        "technique": "Dùng hai tay bóp chặt xương chày và xương mác vào nhau ở đoạn giữa bắp chân.",
        "significance": "Tái hiện đau chói ở vùng khớp chày mác dưới ngay trên mắt cá ngoài -> Tổn thương bong gân khớp công-gô sụn sợi (High Ankle Sprain).",
        "sensitivity": "30%",
        "specificity": "94%",
        "diagnostic_role": "Đặc hiệu cao chẩn đoán tổn thương dây chằng khớp chày mác dưới (Bong gân mắt cá chân cao)",
        "figures": [
          {
            "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p392_img1.jpeg",
            "page": 392,
            "fig_number": "8.27",
            "caption_en": "Fig. 8.27: Right lower leg anterior view (EHL, extensor hallucis longus;",
            "caption_vi": "🩺 Thao tác khám: Right lower leg anterior view (EHL, extensor hallucis longus;",
            "role_type": "exam",
            "width": 996,
            "height": 962
          },
          {
            "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p394_img1.jpeg",
            "page": 394,
            "fig_number": "8.29",
            "caption_en": "Fig. 8.29: Assessing fibular head asymmetry",
            "caption_vi": "🩺 Thao tác khám: Assessing fibular head asymmetry",
            "role_type": "exam",
            "width": 958,
            "height": 713
          }
        ]
      },
      {
        "name": "Dấu Hiệu Mulder (Mulder's Click Khám U Thần Kinh Morton)",
        "technique": "Dùng một tay bóp ép ngang các đầu xương bàn chân từ hai phía trong và ngoài, tay kia dùng ngón cái ấn từ gan chân lên khoảng gian ngón 3-4.",
        "significance": "Cảm nhận tiếng 'tách' (click) kèm cảm giác đau nhói phóng điện ra hai ngón chân -> U thần kinh Morton (Morton's neuroma).",
        "sensitivity": "88%",
        "specificity": "92%",
        "diagnostic_role": "Độ chính xác cao chẩn đoán U thần kinh Morton gian đốt bàn ngón chân 3-4",
        "figures": [
          {
            "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p412_img1.jpeg",
            "page": 412,
            "fig_number": "8.55",
            "caption_en": "Fig. 8.55: Mulder click test",
            "caption_vi": "🩺 Thao tác khám: Mulder click test",
            "role_type": "exam",
            "width": 525,
            "height": 798
          }
        ]
      },
      {
        "name": "Nghiệm Pháp Windlass (Windlass Test Khám Viêm Cân Gan Chân)",
        "technique": "Bệnh nhân đứng tì lực trên sàn. Người khám dùng tay bẻ gập mu tối đa ngón chân cái.",
        "significance": "Tái hiện đau chói tại vị trí bám của cân gan chân vào củ dưới trong xương gót -> Viêm cân gan chân (Plantar Fasciitis).",
        "sensitivity": "32%",
        "specificity": "100%",
        "diagnostic_role": "Đặc hiệu tuyệt đối khẳng định viêm cân gan chân (Plantar Fasciitis) khi gập mu ngón cái làm căng dải cân",
        "figures": [
          {
            "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p377_img2.jpeg",
            "page": 377,
            "fig_number": "8.14",
            "caption_en": "Fig. 8.14: Tibial nerve and its branches",
            "caption_vi": "🩺 Thao tác khám: Tibial nerve and its branches",
            "role_type": "exam",
            "width": 991,
            "height": 752
          },
          {
            "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p378_img1.jpeg",
            "page": 378,
            "fig_number": "8.15",
            "caption_en": "Fig. 8.15: Tarsal tunnel",
            "caption_vi": "🩺 Thao tác khám: Tarsal tunnel",
            "role_type": "exam",
            "width": 1193,
            "height": 751
          }
        ]
      }
    ],
    "differential_table": [
      {
        "condition": "Rách sụn chêm khớp gối (Meniscal Tear)",
        "onset": "Sau chấn thương xoay vặn khi chân đang chịu lực hoặc thoái hóa",
        "aggravating": "Ngồi xổm, bước xuống cầu thang, xoay vặn gối",
        "key_differentiator": "Đau khu trú chính xác khe khớp gối, kẹt khớp (không thể duỗi thẳng gối), McMurray (+), Thessaly (+)",
        "confirmatory_test": "Nghiệm pháp khám chuyên biệt vùng & Khám cơ lực đối kháng",
        "gold_standard": "Siêu âm can thiệp cơ xương khớp / X-quang / MRI chuyên sâu"
      },
      {
        "condition": "Hội chứng đau bánh chè đùi (PFPS / Chondromalacia)",
        "onset": "Trẻ tuổi, vận động viên chạy bộ, nữ > nam",
        "aggravating": "Ngồi xổm, quỳ gối, ngồi xem phim lâu (Movie sign)",
        "key_differentiator": "Đau âm ỉ quanh hoặc sau xương bánh chè, Clark test (+), tiếng lạo xạo khi gập duỗi gối, không tràn dịch khớp",
        "confirmatory_test": "Nghiệm pháp khám chuyên biệt vùng & Khám cơ lực đối kháng",
        "gold_standard": "Siêu âm can thiệp cơ xương khớp / X-quang / MRI chuyên sâu"
      },
      {
        "condition": "Viêm gân bánh chè (Patellar Tendinopathy / Jumper's knee)",
        "onset": "Vận động viên bóng rổ, bóng chuyền sau động tác nhảy cao",
        "aggravating": "Bật nhảy, giảm tốc độ đột ngột khi chạy",
        "key_differentiator": "Ấn đau chói chính xác tại cực dưới xương bánh chè (nơi nguyên ủy gân), đau khi duỗi gối kháng lực",
        "confirmatory_test": "Nghiệm pháp khám chuyên biệt vùng & Khám cơ lực đối kháng",
        "gold_standard": "Siêu âm can thiệp cơ xương khớp / X-quang / MRI chuyên sâu"
      },
      {
        "condition": "Viêm cân gan chân (Plantar Fasciitis)",
        "onset": "Âm ỉ, người đứng nhiều hoặc thừa cân",
        "aggravating": "NHỮNG BƯỚC ĐI ĐẦU TIÊN KHI BƯỚC XUỐNG GIƯỜNG BUỔI SÁNG",
        "key_differentiator": "Đau giảm bớt sau khi đi lại một lúc nhưng đau tăng lại vào cuối ngày, ấn đau chói củ dưới trong xương gót, Windlass (+)",
        "confirmatory_test": "Nghiệm pháp khám chuyên biệt vùng & Khám cơ lực đối kháng",
        "gold_standard": "Siêu âm can thiệp cơ xương khớp / X-quang / MRI chuyên sâu"
      },
      {
        "condition": "U thần kinh Morton (Morton's Neuroma)",
        "onset": "Phụ nữ mang giày cao gót mũi nhọn thường xuyên",
        "aggravating": "Đi giày chật, đứng lâu trên mũi bàn chân",
        "key_differentiator": "Cảm giác như có hòn sỏi trong giày dưới gan chân ngón 3-4, đau buốt lan ra hai ngón kề cận, dấu hiệu Mulder (+)",
        "confirmatory_test": "Nghiệm pháp khám chuyên biệt vùng & Khám cơ lực đối kháng",
        "gold_standard": "Siêu âm can thiệp cơ xương khớp / X-quang / MRI chuyên sâu"
      }
    ],
    "figures": [
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p335_img1.jpeg",
        "page": 335,
        "fig_number": "8.1",
        "caption_en": "Fig. 8.1: Knee joint anterior view",
        "caption_vi": "📸 Hình ảnh minh họa: Knee joint anterior view",
        "role_type": "general",
        "width": 1196,
        "height": 663
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p336_img1.jpeg",
        "page": 336,
        "fig_number": "8.2",
        "caption_en": "Fig. 8.2: Primary ligaments of the knee and menisci",
        "caption_vi": "📸 Hình ảnh minh họa: Primary ligaments of the knee and menisci",
        "role_type": "general",
        "width": 1348,
        "height": 664
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p337_img1.jpeg",
        "page": 337,
        "fig_number": "8.3",
        "caption_en": "Fig. 8.3: Transverse view of the knee menisci",
        "caption_vi": "📸 Hình ảnh minh họa: Transverse view of the knee menisci",
        "role_type": "general",
        "width": 1331,
        "height": 564
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p359_img1.jpeg",
        "page": 359,
        "fig_number": "8.4",
        "caption_en": "Fig. 8.4: Causes for patella tracking dysfunction",
        "caption_vi": "📸 Hình ảnh minh họa: Causes for patella tracking dysfunction",
        "role_type": "general",
        "width": 1256,
        "height": 903
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p361_img1.jpeg",
        "page": 361,
        "fig_number": "8.5",
        "caption_en": "Fig. 8.5: Anterior view of the knee joint showing a bipartite patella",
        "caption_vi": "📸 Hình ảnh minh họa: Anterior view of the knee joint showing a bipartite patella",
        "role_type": "general",
        "width": 1039,
        "height": 664
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p361_img2.jpeg",
        "page": 361,
        "fig_number": "8.5",
        "caption_en": "Fig. 8.5: Anterior view of the knee joint showing a bipartite patella",
        "caption_vi": "📸 Hình ảnh minh họa: Anterior view of the knee joint showing a bipartite patella",
        "role_type": "general",
        "width": 876,
        "height": 719
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p362_img1.jpeg",
        "page": 362,
        "fig_number": "8.7",
        "caption_en": "Fig. 8.7: Osteochondral lesion over the inferior joint surface of the femur",
        "caption_vi": "📸 Hình ảnh minh họa: Osteochondral lesion over the inferior joint surface of the femur",
        "role_type": "general",
        "width": 1003,
        "height": 664
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p364_img1.jpeg",
        "page": 364,
        "fig_number": "8.8",
        "caption_en": "Fig. 8.8: Bursitis of the knee",
        "caption_vi": "📸 Hình ảnh minh họa: Bursitis of the knee",
        "role_type": "general",
        "width": 924,
        "height": 725
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p365_img1.jpeg",
        "page": 365,
        "fig_number": "8.9",
        "caption_en": "Fig. 8.9: Types of meniscal tears",
        "caption_vi": "📸 Hình ảnh minh họa: Types of meniscal tears",
        "role_type": "general",
        "width": 1339,
        "height": 678
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p366_img1.jpeg",
        "page": 366,
        "fig_number": "8.10",
        "caption_en": "Fig. 8.10: Right thigh anterior view",
        "caption_vi": "📸 Hình ảnh minh họa: Right thigh anterior view",
        "role_type": "general",
        "width": 1315,
        "height": 903
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p367_img1.jpeg",
        "page": 367,
        "fig_number": "8.11",
        "caption_en": "Fig. 8.11: Knee plica",
        "caption_vi": "📸 Hình ảnh minh họa: Knee plica",
        "role_type": "general",
        "width": 798,
        "height": 663
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p369_img1.jpeg",
        "page": 369,
        "fig_number": "8.12",
        "caption_en": "Fig. 8.12: Sites for superficial nerve entrapment",
        "caption_vi": "📸 Hình ảnh minh họa: Sites for superficial nerve entrapment",
        "role_type": "general",
        "width": 920,
        "height": 962
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p377_img1.png",
        "page": 377,
        "fig_number": "8.14",
        "caption_en": "Fig. 8.14: Tibial nerve and its branches",
        "caption_vi": "📸 Hình ảnh minh họa: Tibial nerve and its branches",
        "role_type": "general",
        "width": 1259,
        "height": 903
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p377_img2.jpeg",
        "page": 377,
        "fig_number": "8.14",
        "caption_en": "Fig. 8.14: Tibial nerve and its branches",
        "caption_vi": "📸 Hình ảnh minh họa: Tibial nerve and its branches",
        "role_type": "general",
        "width": 991,
        "height": 752
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p378_img1.jpeg",
        "page": 378,
        "fig_number": "8.15",
        "caption_en": "Fig. 8.15: Tarsal tunnel",
        "caption_vi": "📸 Hình ảnh minh họa: Tarsal tunnel",
        "role_type": "general",
        "width": 1193,
        "height": 751
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p380_img1.jpeg",
        "page": 380,
        "fig_number": "8.16",
        "caption_en": "Fig. 8.16: March fracture",
        "caption_vi": "📸 Hình ảnh minh họa: March fracture",
        "role_type": "general",
        "width": 1161,
        "height": 753
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p380_img2.jpeg",
        "page": 380,
        "fig_number": "8.16",
        "caption_en": "Fig. 8.16: March fracture",
        "caption_vi": "📸 Hình ảnh minh họa: March fracture",
        "role_type": "general",
        "width": 1248,
        "height": 751
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p383_img1.jpeg",
        "page": 383,
        "fig_number": "8.18",
        "caption_en": "Fig. 8.18: Osteochondral lesion of the talus",
        "caption_vi": "📸 Hình ảnh minh họa: Osteochondral lesion of the talus",
        "role_type": "general",
        "width": 1219,
        "height": 751
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p385_img1.jpeg",
        "page": 385,
        "fig_number": "8.20",
        "caption_en": "Fig. 8.20: Vulnerable ligaments in inversion sprains",
        "caption_vi": "📸 Hình ảnh minh họa: Vulnerable ligaments in inversion sprains",
        "role_type": "general",
        "width": 1194,
        "height": 752
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p385_img2.png",
        "page": 385,
        "fig_number": "8.20",
        "caption_en": "Fig. 8.20: Vulnerable ligaments in inversion sprains",
        "caption_vi": "📸 Hình ảnh minh họa: Vulnerable ligaments in inversion sprains",
        "role_type": "general",
        "width": 493,
        "height": 753
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p386_img1.jpeg",
        "page": 386,
        "fig_number": "8.21",
        "caption_en": "Fig. 8.21: Location of sinus tarsi",
        "caption_vi": "📸 Hình ảnh minh họa: Location of sinus tarsi",
        "role_type": "general",
        "width": 1018,
        "height": 693
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p387_img1.jpeg",
        "page": 387,
        "fig_number": "8.22",
        "caption_en": "Fig. 8.22: Peroneal tendon and retinaculum",
        "caption_vi": "📸 Hình ảnh minh họa: Peroneal tendon and retinaculum",
        "role_type": "general",
        "width": 957,
        "height": 753
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p389_img1.jpeg",
        "page": 389,
        "fig_number": "8.23",
        "caption_en": "Fig. 8.23: Retrocalcaneal bursitis",
        "caption_vi": "📸 Hình ảnh minh họa: Retrocalcaneal bursitis",
        "role_type": "general",
        "width": 774,
        "height": 693
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p390_img1.jpeg",
        "page": 390,
        "fig_number": "8.24",
        "caption_en": "Fig. 8.24: Tendoachilles tendon",
        "caption_vi": "📸 Hình ảnh minh họa: Tendoachilles tendon",
        "role_type": "general",
        "width": 523,
        "height": 752
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p390_img2.jpeg",
        "page": 390,
        "fig_number": "8.24",
        "caption_en": "Fig. 8.24: Tendoachilles tendon",
        "caption_vi": "📸 Hình ảnh minh họa: Tendoachilles tendon",
        "role_type": "general",
        "width": 512,
        "height": 752
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p391_img1.jpeg",
        "page": 391,
        "fig_number": "8.26",
        "caption_en": "Fig. 8.26: Sites of impingement",
        "caption_vi": "📸 Hình ảnh minh họa: Sites of impingement",
        "role_type": "general",
        "width": 1199,
        "height": 753
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p392_img1.jpeg",
        "page": 392,
        "fig_number": "8.27",
        "caption_en": "Fig. 8.27: Right lower leg anterior view (EHL, extensor hallucis longus;",
        "caption_vi": "📸 Hình ảnh minh họa: Right lower leg anterior view (EHL, extensor hallucis longus;",
        "role_type": "general",
        "width": 996,
        "height": 962
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p393_img1.jpeg",
        "page": 393,
        "fig_number": "8.28",
        "caption_en": "Fig. 8.28: Assessing tibial rotation",
        "caption_vi": "📸 Hình ảnh minh họa: Assessing tibial rotation",
        "role_type": "general",
        "width": 958,
        "height": 711
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p394_img1.jpeg",
        "page": 394,
        "fig_number": "8.29",
        "caption_en": "Fig. 8.29: Assessing fibular head asymmetry",
        "caption_vi": "📸 Hình ảnh minh họa: Assessing fibular head asymmetry",
        "role_type": "general",
        "width": 958,
        "height": 713
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p394_img2.jpeg",
        "page": 394,
        "fig_number": "8.29",
        "caption_en": "Fig. 8.29: Assessing fibular head asymmetry",
        "caption_vi": "📸 Hình ảnh minh họa: Assessing fibular head asymmetry",
        "role_type": "general",
        "width": 958,
        "height": 641
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p395_img1.jpeg",
        "page": 395,
        "fig_number": "8.31",
        "caption_en": "Fig. 8.31: Patella superolateral",
        "caption_vi": "📸 Hình ảnh minh họa: Patella superolateral",
        "role_type": "general",
        "width": 958,
        "height": 708
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p396_img1.jpeg",
        "page": 396,
        "fig_number": "8.32",
        "caption_en": "Fig. 8.32: Subtalar neutral",
        "caption_vi": "📸 Hình ảnh minh họa: Subtalar neutral",
        "role_type": "general",
        "width": 958,
        "height": 715
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p396_img2.png",
        "page": 396,
        "fig_number": "8.32",
        "caption_en": "Fig. 8.32: Subtalar neutral",
        "caption_vi": "📸 Hình ảnh minh họa: Subtalar neutral",
        "role_type": "general",
        "width": 681,
        "height": 543
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p396_img3.jpeg",
        "page": 396,
        "fig_number": "8.32",
        "caption_en": "Fig. 8.32: Subtalar neutral",
        "caption_vi": "📸 Hình ảnh minh họa: Subtalar neutral",
        "role_type": "general",
        "width": 292,
        "height": 544
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p396_img4.jpeg",
        "page": 396,
        "fig_number": "8.32",
        "caption_en": "Fig. 8.32: Subtalar neutral",
        "caption_vi": "📸 Hình ảnh minh họa: Subtalar neutral",
        "role_type": "general",
        "width": 280,
        "height": 543
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p397_img1.jpeg",
        "page": 397,
        "fig_number": "8.36",
        "caption_en": "Fig. 8.36: Plantar flexed talus",
        "caption_vi": "📸 Hình ảnh minh họa: Plantar flexed talus",
        "role_type": "general",
        "width": 958,
        "height": 711
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p397_img2.jpeg",
        "page": 397,
        "fig_number": "8.36",
        "caption_en": "Fig. 8.36: Plantar flexed talus",
        "caption_vi": "📸 Hình ảnh minh họa: Plantar flexed talus",
        "role_type": "general",
        "width": 280,
        "height": 544
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p398_img1.jpeg",
        "page": 398,
        "fig_number": "8.37",
        "caption_en": "Fig. 8.37: Inversion/eversion of calcaneus",
        "caption_vi": "📸 Hình ảnh minh họa: Inversion/eversion of calcaneus",
        "role_type": "general",
        "width": 958,
        "height": 717
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p399_img1.jpeg",
        "page": 399,
        "fig_number": "8.38",
        "caption_en": "Fig. 8.38: Midfoot rotation",
        "caption_vi": "📸 Hình ảnh minh họa: Midfoot rotation",
        "role_type": "general",
        "width": 958,
        "height": 710
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p400_img1.jpeg",
        "page": 400,
        "fig_number": "8.39",
        "caption_en": "Fig. 8.39: Assessment of the first ray",
        "caption_vi": "📸 Hình ảnh minh họa: Assessment of the first ray",
        "role_type": "general",
        "width": 958,
        "height": 711
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p401_img1.jpeg",
        "page": 401,
        "fig_number": "8.41",
        "caption_en": "Fig. 8.41: Tenderness over the lateral retinaculum",
        "caption_vi": "📸 Hình ảnh minh họa: Tenderness over the lateral retinaculum",
        "role_type": "general",
        "width": 958,
        "height": 638
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p401_img2.jpeg",
        "page": 401,
        "fig_number": "8.41",
        "caption_en": "Fig. 8.41: Tenderness over the lateral retinaculum",
        "caption_vi": "📸 Hình ảnh minh họa: Tenderness over the lateral retinaculum",
        "role_type": "general",
        "width": 958,
        "height": 579
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p401_img3.jpeg",
        "page": 401,
        "fig_number": "8.41",
        "caption_en": "Fig. 8.41: Tenderness over the lateral retinaculum",
        "caption_vi": "📸 Hình ảnh minh họa: Tenderness over the lateral retinaculum",
        "role_type": "general",
        "width": 958,
        "height": 558
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p402_img1.jpeg",
        "page": 402,
        "fig_number": "8.43",
        "caption_en": "Fig. 8.43: Active knee extension lag",
        "caption_vi": "📸 Hình ảnh minh họa: Active knee extension lag",
        "role_type": "general",
        "width": 958,
        "height": 697
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p402_img2.jpeg",
        "page": 402,
        "fig_number": "8.43",
        "caption_en": "Fig. 8.43: Active knee extension lag",
        "caption_vi": "📸 Hình ảnh minh họa: Active knee extension lag",
        "role_type": "general",
        "width": 958,
        "height": 640
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p403_img1.jpeg",
        "page": 403,
        "fig_number": "8.44A and B",
        "caption_en": "Figs 8.44A and B: Photographs showing: A. A positive ‘active lag’ on the right;",
        "caption_vi": "📸 Hình ảnh minh họa: Photographs showing: A. A positive ‘active lag’ on the right;",
        "role_type": "general",
        "width": 958,
        "height": 713
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p403_img2.jpeg",
        "page": 403,
        "fig_number": "8.44A and B",
        "caption_en": "Figs 8.44A and B: Photographs showing: A. A positive ‘active lag’ on the right;",
        "caption_vi": "📸 Hình ảnh minh họa: Photographs showing: A. A positive ‘active lag’ on the right;",
        "role_type": "general",
        "width": 958,
        "height": 713
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p404_img1.jpeg",
        "page": 404,
        "fig_number": "8.45",
        "caption_en": "Fig. 8.45: Apprehension sign",
        "caption_vi": "📸 Hình ảnh minh họa: Apprehension sign",
        "role_type": "general",
        "width": 958,
        "height": 638
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p405_img1.jpeg",
        "page": 405,
        "fig_number": "8.46A and B",
        "caption_en": "Fig. 8.46A and B: Hoffa’s test",
        "caption_vi": "📸 Hình ảnh minh họa: Hoffa’s test",
        "role_type": "general",
        "width": 958,
        "height": 683
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p405_img2.jpeg",
        "page": 405,
        "fig_number": "8.46A and B",
        "caption_en": "Fig. 8.46A and B: Hoffa’s test",
        "caption_vi": "📸 Hình ảnh minh họa: Hoffa’s test",
        "role_type": "general",
        "width": 958,
        "height": 723
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p406_img1.jpeg",
        "page": 406,
        "fig_number": "8.47",
        "caption_en": "Fig. 8.47: McMurray’s test",
        "caption_vi": "📸 Hình ảnh minh họa: McMurray’s test",
        "role_type": "general",
        "width": 958,
        "height": 721
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p406_img2.jpeg",
        "page": 406,
        "fig_number": "8.47",
        "caption_en": "Fig. 8.47: McMurray’s test",
        "caption_vi": "📸 Hình ảnh minh họa: McMurray’s test",
        "role_type": "general",
        "width": 462,
        "height": 798
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p406_img3.jpeg",
        "page": 406,
        "fig_number": "8.47",
        "caption_en": "Fig. 8.47: McMurray’s test",
        "caption_vi": "📸 Hình ảnh minh họa: McMurray’s test",
        "role_type": "general",
        "width": 523,
        "height": 798
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p407_img1.jpeg",
        "page": 407,
        "fig_number": "8.49",
        "caption_en": "Fig. 8.49: Lachman test",
        "caption_vi": "📸 Hình ảnh minh họa: Lachman test",
        "role_type": "general",
        "width": 958,
        "height": 650
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p407_img2.jpeg",
        "page": 407,
        "fig_number": "8.49",
        "caption_en": "Fig. 8.49: Lachman test",
        "caption_vi": "📸 Hình ảnh minh họa: Lachman test",
        "role_type": "general",
        "width": 958,
        "height": 639
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p407_img3.jpeg",
        "page": 407,
        "fig_number": "8.49",
        "caption_en": "Fig. 8.49: Lachman test",
        "caption_vi": "📸 Hình ảnh minh họa: Lachman test",
        "role_type": "general",
        "width": 958,
        "height": 805
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p408_img1.jpeg",
        "page": 408,
        "fig_number": "8.51A and B",
        "caption_en": "Figs 8.51A and B: Plica test",
        "caption_vi": "📸 Hình ảnh minh họa: Plica test",
        "role_type": "general",
        "width": 958,
        "height": 738
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p408_img2.jpeg",
        "page": 408,
        "fig_number": "8.51A and B",
        "caption_en": "Figs 8.51A and B: Plica test",
        "caption_vi": "📸 Hình ảnh minh họa: Plica test",
        "role_type": "general",
        "width": 958,
        "height": 693
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p410_img1.jpeg",
        "page": 410,
        "fig_number": "8.52A to C",
        "caption_en": "Figs 8.52A to C: Drawer’s test with variations",
        "caption_vi": "📸 Hình ảnh minh họa: Drawer’s test with variations",
        "role_type": "general",
        "width": 958,
        "height": 665
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p410_img2.jpeg",
        "page": 410,
        "fig_number": "8.52A to C",
        "caption_en": "Figs 8.52A to C: Drawer’s test with variations",
        "caption_vi": "📸 Hình ảnh minh họa: Drawer’s test with variations",
        "role_type": "general",
        "width": 958,
        "height": 631
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p410_img3.jpeg",
        "page": 410,
        "fig_number": "8.52A to C",
        "caption_en": "Figs 8.52A to C: Drawer’s test with variations",
        "caption_vi": "📸 Hình ảnh minh họa: Drawer’s test with variations",
        "role_type": "general",
        "width": 865,
        "height": 798
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p411_img1.jpeg",
        "page": 411,
        "fig_number": "8.53A and B",
        "caption_en": "Figs 8.53A and B: Pivot shift maneuver",
        "caption_vi": "📸 Hình ảnh minh họa: Pivot shift maneuver",
        "role_type": "general",
        "width": 958,
        "height": 706
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p411_img2.jpeg",
        "page": 411,
        "fig_number": "8.53A and B",
        "caption_en": "Figs 8.53A and B: Pivot shift maneuver",
        "caption_vi": "📸 Hình ảnh minh họa: Pivot shift maneuver",
        "role_type": "general",
        "width": 958,
        "height": 725
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p411_img3.jpeg",
        "page": 411,
        "fig_number": "8.53A and B",
        "caption_en": "Figs 8.53A and B: Pivot shift maneuver",
        "caption_vi": "📸 Hình ảnh minh họa: Pivot shift maneuver",
        "role_type": "general",
        "width": 958,
        "height": 630
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p412_img1.jpeg",
        "page": 412,
        "fig_number": "8.55",
        "caption_en": "Fig. 8.55: Mulder click test",
        "caption_vi": "📸 Hình ảnh minh họa: Mulder click test",
        "role_type": "general",
        "width": 525,
        "height": 798
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p412_img2.jpeg",
        "page": 412,
        "fig_number": "8.55",
        "caption_en": "Fig. 8.55: Mulder click test",
        "caption_vi": "📸 Hình ảnh minh họa: Mulder click test",
        "role_type": "general",
        "width": 958,
        "height": 700
      },
      {
        "file": "assets/deepak_images/ch08_knee_ankle_foot_pain/p413_img1.jpeg",
        "page": 413,
        "fig_number": "8.57",
        "caption_en": "Fig. 8.57: External rotation stress test",
        "caption_vi": "📸 Hình ảnh minh họa: External rotation stress test",
        "role_type": "general",
        "width": 958,
        "height": 639
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
        "category": "Nhiễm Trùng Bao Gân Kanavel & Khoang Sâu Bàn Tay",
        "signs": "Ngón tay xúc xích, đau dữ dội khi duỗi ngón, sưng phồng ô mô cái / gan tay.",
        "action": "Rạch mổ dẫn lưu cấp cứu Ngoại chấn thương bàn tay.",
        "figures": [
          {
            "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p491_img1.jpeg",
            "page": 491,
            "fig_number": "10.9",
            "caption_en": "Fig. 10.9: Olecranon bursa (arrow)",
            "caption_vi": "🚨 Phim X-quang / Cờ đỏ: Olecranon bursa (arrow)",
            "role_type": "redflag",
            "width": 668,
            "height": 603
          },
          {
            "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p496_img1.jpeg",
            "page": 496,
            "fig_number": "10.14",
            "caption_en": "Fig. 10.14: Ulnar collateral ligament tear",
            "caption_vi": "🚨 Phim X-quang / Cờ đỏ: Ulnar collateral ligament tear",
            "role_type": "redflag",
            "width": 890,
            "height": 903
          }
        ]
      },
      {
        "category": "Tắc Mạch / Hoại Tử Ngón Tay (Raynaud Nặng / Allen Test Bất Thường)",
        "signs": "Ngón tay tím tái hoặc đen hoại tử đầu ngón, loét trợt, Allen test cho thấy tắc động mạch quay hoặc trụ.",
        "action": "Chuyển Phẫu thuật Mạch máu, khảo sát Doppler mạch ngọn chi.",
        "figures": [
          {
            "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p473_img1.png",
            "page": 473,
            "fig_number": "10.4",
            "caption_en": "Fig. 10.4: Right wrist and hand (palmar view)",
            "caption_vi": "🚨 Phim X-quang / Cờ đỏ: Right wrist and hand (palmar view)",
            "role_type": "redflag",
            "width": 1275,
            "height": 903
          },
          {
            "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p499_img1.jpeg",
            "page": 499,
            "fig_number": "10.16",
            "caption_en": "Fig. 10.16: Guyon’s canal",
            "caption_vi": "🚨 Phim X-quang / Cờ đỏ: Guyon’s canal",
            "role_type": "redflag",
            "width": 835,
            "height": 903
          }
        ]
      }
    ],
    "visceral_referrals": [
      {
        "source": "Đau Rễ Cổ C6 - C7 - C8 (Cervical Radiculopathy)",
        "pattern": "Đau lan từ cổ gáy dọc xuống chi trên: Rễ C6 đau lan ra ngón cái và ngón trỏ (dễ nhầm với De Quervain và HC ống cổ tay); Rễ C7 đau ngón giữa; Rễ C8 đau ngón út và bờ trụ bàn tay (dễ nhầm với HC ống Guyon).",
        "differential": "Khám Spurling cổ (+), nghiệm pháp căng đám rối cánh tay ULTT (+), cử động gập duỗi cổ tay không làm thay đổi triệu chứng.",
        "figures": [
          {
            "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p467_img1.jpeg",
            "page": 467,
            "fig_number": "10.1",
            "caption_en": "Fig. 10.1: Elbow joint medial aspect",
            "caption_vi": "🫀 Chuyển đau tạng / Giải phẫu: Elbow joint medial aspect",
            "role_type": "visceral",
            "width": 1044,
            "height": 589
          },
          {
            "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p468_img1.png",
            "page": 468,
            "fig_number": "10.2",
            "caption_en": "Fig. 10.2: Elbow joint lateral aspect",
            "caption_vi": "🫀 Chuyển đau tạng / Giải phẫu: Elbow joint lateral aspect",
            "role_type": "visceral",
            "width": 1061,
            "height": 601
          }
        ]
      }
    ],
    "drug_induced": [
      "Thuốc ức chế Aromatase (Anastrozole/Letrozole): Gây cứng khớp bàn tay, ngón tay lò xo (Trigger finger) và hội chứng ống cổ tay ở bệnh nhân K vú.",
      "Fluoroquinolones: Viêm gân duỗi cổ tay và gân ngón cái.",
      "Hóa trị liệu (Cisplatin/Paclitaxel): Tê bì dị cảm bốt găng tay (CIPN)."
    ],
    "examination_procedures": [
      {
        "name": "Nghiệm Pháp Cozen (Khám Viêm Lồi Cầu Ngoài / Tennis Elbow)",
        "technique": "Bệnh nhân ngồi, gập khuỷu 90°, sấp cẳng tay, nắm chặt bàn tay và duỗi cổ tay. Người khám dùng ngón cái ấn lên mỏm lồi cầu ngoài, tay kia dùng lực ép cổ tay bệnh nhân gập xuống trong khi bệnh nhân kháng cự duỗi cổ tay.",
        "significance": "Tái hiện đau chói tại mỏm lồi cầu ngoài xương cánh tay (nơi bám gân cơ duỗi cổ tay quay ngắn ECRB).",
        "sensitivity": "84%",
        "specificity": "75%",
        "diagnostic_role": "Sàng lọc viêm lồi cầu ngoài xương cánh tay (Lateral Epicondylalgia / Tennis Elbow)",
        "figures": [
          {
            "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p507_img2.jpeg",
            "page": 507,
            "fig_number": "10.26",
            "caption_en": "Fig. 10.26: Finkelstein’s test",
            "caption_vi": "🩺 Thao tác khám: Finkelstein’s test",
            "role_type": "exam",
            "width": 958,
            "height": 798
          }
        ]
      },
      {
        "name": "Nghiệm Pháp Mill (Mill's Test Kéo Căng Gân Duỗi Khuỷu)",
        "technique": "Người khám sờ lồi cầu ngoài, thụ động làm động tác: Gập hoàn toàn cổ tay và các ngón, sấp cẳng tay tối đa, sau đó duỗi thẳng khớp khuỷu ra.",
        "significance": "Đau chói tại lồi cầu ngoài do kéo căng tối đa gân cơ duỗi.",
        "sensitivity": "76%",
        "specificity": "80%",
        "diagnostic_role": "Kéo căng thụ động gân cơ duỗi cổ tay quay ngắn để khẳng định tổn thương lồi cầu ngoài",
        "figures": [
          {
            "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p493_img1.jpeg",
            "page": 493,
            "fig_number": "10.12",
            "caption_en": "Fig. 10.12: Common extensor origin",
            "caption_vi": "🩺 Thao tác khám: Common extensor origin",
            "role_type": "exam",
            "width": 1089,
            "height": 603
          }
        ]
      },
      {
        "name": "Nghiệm Pháp Maudsley (Maudsley's Test Duỗi Ngón 3 Kháng Lực)",
        "technique": "Yêu cầu bệnh nhân duỗi thẳng ngón tay thứ 3 (ngón giữa) kháng lại lực ép xuống của người khám.",
        "significance": "Đau chói tại lồi cầu ngoài do cơ duỗi chung các ngón và ECRB co thắt (đặc hiệu cao cho Tennis Elbow).",
        "sensitivity": "88%",
        "specificity": "74%",
        "diagnostic_role": "Khu trú tổn thương cơ duỗi chung các ngón và ECRB",
        "figures": [
          {
            "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p508_img1.jpeg",
            "page": 508,
            "fig_number": "10.29",
            "caption_en": "Fig. 10.29: Radiocapitellar chondromalacia test hand placement",
            "caption_vi": "🩺 Thao tác khám: Radiocapitellar chondromalacia test hand placement",
            "role_type": "exam",
            "width": 958,
            "height": 626
          }
        ]
      },
      {
        "name": "Nghiệm Pháp Phalen & Phalen Ngược (Phalen & Prayer Sign Khám Hội Chứng Ống Cổ Tay)",
        "technique": "Phalen Test: Bệnh nhân gập hai cổ tay 90° ép chặt mu hai bàn tay vào nhau trong 60 giây.\nPhalen Ngược (Prayer sign): Áp hai lòng bàn tay vào nhau duỗi cổ tay 90° như tư thế cầu nguyện trong 60 giây.",
        "significance": "Xuất hiện hoặc tăng cảm giác tê bì, dị cảm châm chích ở vùng chi phối thần kinh giữa (ngón 1, 2, 3 và nửa ngón 4) trong vòng 60 giây (Sn: 68 - 88%, Sp: 85%).",
        "sensitivity": "68% - 75%",
        "specificity": "84% - 90%",
        "diagnostic_role": "Khám kích thích thiếu máu thần kinh giữa trong ống cổ tay khi gập cổ tay 90 độ",
        "figures": [
          {
            "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p504_img1.jpeg",
            "page": 504,
            "fig_number": "10.21",
            "caption_en": "Fig. 10.21: Joint play assessment",
            "caption_vi": "🩺 Thao tác khám: Joint play assessment",
            "role_type": "exam",
            "width": 958,
            "height": 718
          },
          {
            "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p505_img1.jpeg",
            "page": 505,
            "fig_number": "10.22",
            "caption_en": "Fig. 10.22: Prayer sign",
            "caption_vi": "🩺 Thao tác khám: Prayer sign",
            "role_type": "exam",
            "width": 958,
            "height": 637
          }
        ]
      },
      {
        "name": "Dấu Hiệu Durkan (Durkan's Carpal Compression Test - Nhạy Nhất Cho Ống Cổ Tay)",
        "technique": "Người khám dùng hai ngón tay cái ấn trực tiếp một lực vừa phải (khoảng 30 mmHg) lên vị trí dây chằng vòng cổ tay (trên đường đi thần kinh giữa) trong 30 giây.",
        "significance": "Tái hiện tê bì dị cảm theo phân bố thần kinh giữa. Nghiệm pháp có độ nhạy (Sn: 87 - 91%) và độ đặc hiệu (Sp: 90%) cao nhất trong các nghiệm pháp khám ống cổ tay.",
        "sensitivity": "87% - 91%",
        "specificity": "90%",
        "diagnostic_role": "Tiêu chuẩn vàng lâm sàng nhạy và đặc hiệu nhất cho Hội chứng Ống Cổ Tay (CTS)",
        "figures": [
          {
            "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p500_img1.jpeg",
            "page": 500,
            "fig_number": "10.17",
            "caption_en": "Fig. 10.17: Carpal tunnel",
            "caption_vi": "🩺 Thao tác khám: Carpal tunnel",
            "role_type": "exam",
            "width": 986,
            "height": 903
          }
        ]
      },
      {
        "name": "Dấu Hiệu Tinel Ống Cổ Tay & Rãnh Khuỷu (Tinel's Sign)",
        "technique": "Dùng đầu ngón tay gõ nhẹ dọc theo đường đi của thần kinh giữa ở nếp gấp cổ tay hoặc thần kinh trụ tại rãnh ròng rọc khuỷu tay.",
        "significance": "Tái hiện cảm giác giật điện hoặc tê buốt phóng dọc theo đường đi của dây thần kinh ra các ngón tay.",
        "sensitivity": "50% - 60%",
        "specificity": "67% - 87%",
        "diagnostic_role": "Đánh giá tái sinh sợi trục thần kinh hoặc chèn ép thần kinh giữa / thần kinh trụ",
        "figures": [
          {
            "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p488_img1.jpeg",
            "page": 488,
            "fig_number": "10.7",
            "caption_en": "Fig. 10.7: Cubital tunnel",
            "caption_vi": "🩺 Thao tác khám: Cubital tunnel",
            "role_type": "exam",
            "width": 932,
            "height": 603
          },
          {
            "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p497_img1.png",
            "page": 497,
            "fig_number": "10.15",
            "caption_en": "Fig. 10.15: Sites of irritation of the median nerve",
            "caption_vi": "🩺 Thao tác khám: Sites of irritation of the median nerve",
            "role_type": "exam",
            "width": 917,
            "height": 903
          }
        ]
      },
      {
        "name": "Nghiệm Pháp Finkelstein & Eichhoff (Khám Viêm Bao Gân De Quervain)",
        "technique": "Bệnh nhân gấp ngón tay cái vào trong lòng bàn tay và nắm chặt 4 ngón tay còn lại ôm trùm lên ngón cái. Người khám thụ động bẻ nghiêng cổ tay về phía xương trụ (Ulnar deviation).",
        "significance": "Đau chói dữ dội tại mỏm trâm quay (bao gân cơ dạng dài và duỗi ngắn ngón cái APL & EPB).",
        "sensitivity": "89% - 95%",
        "specificity": "85% - 90%",
        "diagnostic_role": "Tiêu chuẩn vàng chẩn đoán Viêm bao gân mỏm trâm quay De Quervain (Ngăn duỗi số 1)",
        "figures": [
          {
            "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p506_img2.jpeg",
            "page": 506,
            "fig_number": "10.24",
            "caption_en": "Fig. 10.24: Valgus stress",
            "caption_vi": "🩺 Thao tác khám: Valgus stress",
            "role_type": "exam",
            "width": 958,
            "height": 718
          }
        ]
      },
      {
        "name": "Nghiệm Pháp Allen (Allen's Test Đánh Giá Cung Động Mạch Bàn Tay)",
        "technique": "Bệnh nhân nắm chặt tay nhiều lần để dồn máu, người khám dùng hai ngón tay cái ép chặt đồng thời động mạch quay và động mạch trụ tại cổ tay. Yêu cầu bệnh nhân mở bàn tay ra (lòng bàn tay trắng bợt). Người khám thả tay khỏi động mạch trụ trong khi vẫn ép động mạch quay.",
        "significance": "Lòng bàn tay hồng trở lại trong vòng 3 - 5 giây: Cung động mạch gan tay thông suốt. Nếu sau 7 - 10 giây lòng bàn tay vẫn tái nhợt: Thiếu máu hoặc tắc động mạch trụ (bắt buộc kiểm tra trước khi chọc khí máu hoặc phẫu thuật).",
        "sensitivity": "92%",
        "specificity": "88%",
        "diagnostic_role": "Đánh giá sự thông suốt của cung động mạch quay - trụ trước các thủ thuật xâm lấn cổ bàn tay",
        "figures": [
          {
            "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p473_img1.png",
            "page": 473,
            "fig_number": "10.4",
            "caption_en": "Fig. 10.4: Right wrist and hand (palmar view)",
            "caption_vi": "🩺 Thao tác khám: Right wrist and hand (palmar view)",
            "role_type": "exam",
            "width": 1275,
            "height": 903
          }
        ]
      }
    ],
    "differential_table": [
      {
        "condition": "Viêm lồi cầu ngoài (Tennis Elbow / Lateral Epicondylalgia)",
        "onset": "Lao động dùng cổ tay nhiều, chơi tennis, đánh máy",
        "aggravating": "Duỗi cổ tay kháng lực, nâng vật nặng tư thế sấp bàn tay",
        "key_differentiator": "Ấn đau chói lồi cầu ngoài, Cozen (+), Mill (+), Maudsley (+), cử động khớp khuỷu PROM bình thường",
        "confirmatory_test": "Nghiệm pháp khám chuyên biệt vùng & Khám cơ lực đối kháng",
        "gold_standard": "Siêu âm can thiệp cơ xương khớp / X-quang / MRI chuyên sâu"
      },
      {
        "condition": "Viêm lồi cầu trong (Golfer's Elbow / Medial Epicondylalgia)",
        "onset": "Chơi golf, ném bóng, xách xô nước nặng",
        "aggravating": "Gập cổ tay kháng lực, sấp cẳng tay kháng lực",
        "key_differentiator": "Ấn đau chói lồi cầu trong xương cánh tay, đau khi kéo căng nhóm gân gấp cổ tay",
        "confirmatory_test": "Nghiệm pháp khám chuyên biệt vùng & Khám cơ lực đối kháng",
        "gold_standard": "Siêu âm can thiệp cơ xương khớp / X-quang / MRI chuyên sâu"
      },
      {
        "condition": "Hội chứng ống cổ tay (Carpal Tunnel Syndrome - CTS)",
        "onset": "Từ từ, tê bì ngón 1-2-3 và nửa ngón 4 về đêm đánh thức giấc ngủ",
        "aggravating": "Cầm vô lăng lái xe, cầm điện thoại, gập cổ tay lâu",
        "key_differentiator": "Tê bì theo dermatom thần kinh giữa, teo cơ ô mô cái (thenar atrophy), Durkan (+), Phalen (+), Tinel (+), đo điện cơ EMG khẳng định tổn thương dẫn truyền",
        "confirmatory_test": "Dấu hiệu Durkan, Nghiệm pháp Phalen",
        "gold_standard": "Điện cơ (EMG / NCV) và Siêu âm đo diện tích cắt ngang CSA thần kinh giữa"
      },
      {
        "condition": "Viêm bao gân De Quervain (De Quervain's Tenosynovitis)",
        "onset": "Phụ nữ sau sinh ẵm con (Mother's wrist), dùng điện thoại nhắn tin ngón cái",
        "aggravating": "Cử động ngón cái, bế em bé, vắt khăn",
        "key_differentiator": "Sưng và ấn đau chói tại mỏm trâm quay, Finkelstein (+) dữ dội, siêu âm thấy dày bao gân và tràn dịch quanh gân APL/EPB",
        "confirmatory_test": "Nghiệm pháp khám chuyên biệt vùng & Khám cơ lực đối kháng",
        "gold_standard": "Siêu âm can thiệp cơ xương khớp / X-quang / MRI chuyên sâu"
      },
      {
        "condition": "Ngón tay lò xo (Trigger Finger / Stenosing Tenosynovitis A1)",
        "onset": "Nắm bóp dụng cụ nhiều, bệnh nhân tiểu đường, K vú dùng AI",
        "aggravating": "Buổi sáng khi thức dậy, cố duỗi thẳng ngón tay",
        "key_differentiator": "Ngón tay bị kẹt ở tư thế gập, phải dùng tay kia bẻ mới bật thẳng ra được kèm tiếng 'tách', sờ thấy nốt gân xơ chai đau tại ranh giới khớp bàn ngón tay (A1 pulley)",
        "confirmatory_test": "Nghiệm pháp khám chuyên biệt vùng & Khám cơ lực đối kháng",
        "gold_standard": "Siêu âm can thiệp cơ xương khớp / X-quang / MRI chuyên sâu"
      }
    ],
    "figures": [
      {
        "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p467_img1.jpeg",
        "page": 467,
        "fig_number": "10.1",
        "caption_en": "Fig. 10.1: Elbow joint medial aspect",
        "caption_vi": "📸 Hình ảnh minh họa: Elbow joint medial aspect",
        "role_type": "general",
        "width": 1044,
        "height": 589
      },
      {
        "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p468_img1.png",
        "page": 468,
        "fig_number": "10.2",
        "caption_en": "Fig. 10.2: Elbow joint lateral aspect",
        "caption_vi": "📸 Hình ảnh minh họa: Elbow joint lateral aspect",
        "role_type": "general",
        "width": 1061,
        "height": 601
      },
      {
        "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p468_img2.png",
        "page": 468,
        "fig_number": "10.2",
        "caption_en": "Fig. 10.2: Elbow joint lateral aspect",
        "caption_vi": "📸 Hình ảnh minh họa: Elbow joint lateral aspect",
        "role_type": "general",
        "width": 956,
        "height": 659
      },
      {
        "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p473_img1.png",
        "page": 473,
        "fig_number": "10.4",
        "caption_en": "Fig. 10.4: Right wrist and hand (palmar view)",
        "caption_vi": "📸 Hình ảnh minh họa: Right wrist and hand (palmar view)",
        "role_type": "general",
        "width": 1275,
        "height": 903
      },
      {
        "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p487_img1.jpeg",
        "page": 487,
        "fig_number": "10.5",
        "caption_en": "Fig. 10.5: Common flexor origin",
        "caption_vi": "📸 Hình ảnh minh họa: Common flexor origin",
        "role_type": "general",
        "width": 946,
        "height": 604
      },
      {
        "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p487_img2.jpeg",
        "page": 487,
        "fig_number": "10.5",
        "caption_en": "Fig. 10.5: Common flexor origin",
        "caption_vi": "📸 Hình ảnh minh họa: Common flexor origin",
        "role_type": "general",
        "width": 926,
        "height": 603
      },
      {
        "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p488_img1.jpeg",
        "page": 488,
        "fig_number": "10.7",
        "caption_en": "Fig. 10.7: Cubital tunnel",
        "caption_vi": "📸 Hình ảnh minh họa: Cubital tunnel",
        "role_type": "general",
        "width": 932,
        "height": 603
      },
      {
        "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p489_img1.jpeg",
        "page": 489,
        "fig_number": "10.8",
        "caption_en": "Fig. 10.8: Triangular fibrocartilage complex (arrow)",
        "caption_vi": "📸 Hình ảnh minh họa: Triangular fibrocartilage complex (arrow)",
        "role_type": "general",
        "width": 658,
        "height": 903
      },
      {
        "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p491_img1.jpeg",
        "page": 491,
        "fig_number": "10.9",
        "caption_en": "Fig. 10.9: Olecranon bursa (arrow)",
        "caption_vi": "📸 Hình ảnh minh họa: Olecranon bursa (arrow)",
        "role_type": "general",
        "width": 668,
        "height": 603
      },
      {
        "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p491_img2.jpeg",
        "page": 491,
        "fig_number": "10.9",
        "caption_en": "Fig. 10.9: Olecranon bursa (arrow)",
        "caption_vi": "📸 Hình ảnh minh họa: Olecranon bursa (arrow)",
        "role_type": "general",
        "width": 515,
        "height": 607
      },
      {
        "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p492_img1.jpeg",
        "page": 492,
        "fig_number": "10.11",
        "caption_en": "Fig. 10.11: Intersection syndrome (Abbreviations: APL, Abductor pollicis longus;",
        "caption_vi": "📸 Hình ảnh minh họa: Intersection syndrome (Abbreviations: APL, Abductor pollicis longus;",
        "role_type": "general",
        "width": 1157,
        "height": 904
      },
      {
        "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p493_img1.jpeg",
        "page": 493,
        "fig_number": "10.12",
        "caption_en": "Fig. 10.12: Common extensor origin",
        "caption_vi": "📸 Hình ảnh minh họa: Common extensor origin",
        "role_type": "general",
        "width": 1089,
        "height": 603
      },
      {
        "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p494_img1.jpeg",
        "page": 494,
        "fig_number": "10.13",
        "caption_en": "Fig. 10.13: Radial tunnel",
        "caption_vi": "📸 Hình ảnh minh họa: Radial tunnel",
        "role_type": "general",
        "width": 925,
        "height": 604
      },
      {
        "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p496_img1.jpeg",
        "page": 496,
        "fig_number": "10.14",
        "caption_en": "Fig. 10.14: Ulnar collateral ligament tear",
        "caption_vi": "📸 Hình ảnh minh họa: Ulnar collateral ligament tear",
        "role_type": "general",
        "width": 890,
        "height": 903
      },
      {
        "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p497_img1.png",
        "page": 497,
        "fig_number": "10.15",
        "caption_en": "Fig. 10.15: Sites of irritation of the median nerve",
        "caption_vi": "📸 Hình ảnh minh họa: Sites of irritation of the median nerve",
        "role_type": "general",
        "width": 917,
        "height": 903
      },
      {
        "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p499_img1.jpeg",
        "page": 499,
        "fig_number": "10.16",
        "caption_en": "Fig. 10.16: Guyon’s canal",
        "caption_vi": "📸 Hình ảnh minh họa: Guyon’s canal",
        "role_type": "general",
        "width": 835,
        "height": 903
      },
      {
        "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p500_img1.jpeg",
        "page": 500,
        "fig_number": "10.17",
        "caption_en": "Fig. 10.17: Carpal tunnel",
        "caption_vi": "📸 Hình ảnh minh họa: Carpal tunnel",
        "role_type": "general",
        "width": 986,
        "height": 903
      },
      {
        "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p502_img1.jpeg",
        "page": 502,
        "fig_number": "10.18",
        "caption_en": "Fig. 10.18: Radial head superior/inferior",
        "caption_vi": "📸 Hình ảnh minh họa: Radial head superior/inferior",
        "role_type": "general",
        "width": 958,
        "height": 716
      },
      {
        "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p503_img1.jpeg",
        "page": 503,
        "fig_number": "10.20",
        "caption_en": "Fig. 10.20: Lunate anterior",
        "caption_vi": "📸 Hình ảnh minh họa: Lunate anterior",
        "role_type": "general",
        "width": 958,
        "height": 715
      },
      {
        "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p503_img2.jpeg",
        "page": 503,
        "fig_number": "10.20",
        "caption_en": "Fig. 10.20: Lunate anterior",
        "caption_vi": "📸 Hình ảnh minh họa: Lunate anterior",
        "role_type": "general",
        "width": 958,
        "height": 701
      },
      {
        "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p504_img1.jpeg",
        "page": 504,
        "fig_number": "10.21",
        "caption_en": "Fig. 10.21: Joint play assessment",
        "caption_vi": "📸 Hình ảnh minh họa: Joint play assessment",
        "role_type": "general",
        "width": 958,
        "height": 718
      },
      {
        "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p505_img1.jpeg",
        "page": 505,
        "fig_number": "10.22",
        "caption_en": "Fig. 10.22: Prayer sign",
        "caption_vi": "📸 Hình ảnh minh họa: Prayer sign",
        "role_type": "general",
        "width": 958,
        "height": 637
      },
      {
        "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p505_img2.jpeg",
        "page": 505,
        "fig_number": "10.22",
        "caption_en": "Fig. 10.22: Prayer sign",
        "caption_vi": "📸 Hình ảnh minh họa: Prayer sign",
        "role_type": "general",
        "width": 895,
        "height": 798
      },
      {
        "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p506_img1.jpeg",
        "page": 506,
        "fig_number": "10.24",
        "caption_en": "Fig. 10.24: Valgus stress",
        "caption_vi": "📸 Hình ảnh minh họa: Valgus stress",
        "role_type": "general",
        "width": 958,
        "height": 735
      },
      {
        "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p506_img2.jpeg",
        "page": 506,
        "fig_number": "10.24",
        "caption_en": "Fig. 10.24: Valgus stress",
        "caption_vi": "📸 Hình ảnh minh họa: Valgus stress",
        "role_type": "general",
        "width": 958,
        "height": 718
      },
      {
        "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p507_img1.jpeg",
        "page": 507,
        "fig_number": "10.26",
        "caption_en": "Fig. 10.26: Finkelstein’s test",
        "caption_vi": "📸 Hình ảnh minh họa: Finkelstein’s test",
        "role_type": "general",
        "width": 958,
        "height": 590
      },
      {
        "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p507_img2.jpeg",
        "page": 507,
        "fig_number": "10.26",
        "caption_en": "Fig. 10.26: Finkelstein’s test",
        "caption_vi": "📸 Hình ảnh minh họa: Finkelstein’s test",
        "role_type": "general",
        "width": 958,
        "height": 798
      },
      {
        "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p508_img1.jpeg",
        "page": 508,
        "fig_number": "10.29",
        "caption_en": "Fig. 10.29: Radiocapitellar chondromalacia test hand placement",
        "caption_vi": "📸 Hình ảnh minh họa: Radiocapitellar chondromalacia test hand placement",
        "role_type": "general",
        "width": 958,
        "height": 626
      },
      {
        "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p508_img2.jpeg",
        "page": 508,
        "fig_number": "10.29",
        "caption_en": "Fig. 10.29: Radiocapitellar chondromalacia test hand placement",
        "caption_vi": "📸 Hình ảnh minh họa: Radiocapitellar chondromalacia test hand placement",
        "role_type": "general",
        "width": 958,
        "height": 630
      },
      {
        "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p509_img1.jpeg",
        "page": 509,
        "fig_number": "10.30",
        "caption_en": "Fig. 10.30: Radiocapitellar chondromalacia test",
        "caption_vi": "📸 Hình ảnh minh họa: Radiocapitellar chondromalacia test",
        "role_type": "general",
        "width": 958,
        "height": 703
      },
      {
        "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p509_img2.jpeg",
        "page": 509,
        "fig_number": "10.30",
        "caption_en": "Fig. 10.30: Radiocapitellar chondromalacia test",
        "caption_vi": "📸 Hình ảnh minh họa: Radiocapitellar chondromalacia test",
        "role_type": "general",
        "width": 958,
        "height": 683
      },
      {
        "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p510_img1.jpeg",
        "page": 510,
        "fig_number": "10.32A and B",
        "caption_en": "Figs 10.32A and B: Trigger finger",
        "caption_vi": "📸 Hình ảnh minh họa: Trigger finger",
        "role_type": "general",
        "width": 958,
        "height": 740
      },
      {
        "file": "assets/deepak_images/ch10_elbow_wrist_hand_pain/p510_img2.jpeg",
        "page": 510,
        "fig_number": "10.32A and B",
        "caption_en": "Figs 10.32A and B: Trigger finger",
        "caption_vi": "📸 Hình ảnh minh họa: Trigger finger",
        "role_type": "general",
        "width": 958,
        "height": 705
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
    ]
  }
];

const GUIDEMAP_ALGORITHM = {
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
      "name": "Stage 2: Xác Định Nguồn Đau Vùng & Rối Loạn Thể Dịch (Lesion & Somatic Diagnosis)",
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
          "title": "Chẩn Đoán Rối Loạn Chức Năng Thể Dịch Cơ Học (Sebastian Somatic Diagnosis)",
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
              "indication": "Rối loạn chức năng thể dịch thuần túy (Somatic dysfunctions: ERS/FRS, lệch xoay chậu cùng, co rút cơ mạc, hạn chế trượt khớp).",
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

const RED_FLAGS_MASTER = [
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

const LAB_TESTS_GUIDE = [
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

const DRUG_INDUCED_PAIN_GUIDE = [
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
    SCREENING_DATA,
    GUIDEMAP_ALGORITHM,
    RED_FLAGS_MASTER,
    LAB_TESTS_GUIDE,
    DRUG_INDUCED_PAIN_GUIDE
  };
}
