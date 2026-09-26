import json
import os
import sys

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

# Load enriched figures
with open('data/deepak_figures_enriched.json', encoding='utf-8') as f:
    figures = json.load(f)

# Group figures by chapter
figures_by_chapter = {}
for fig in figures:
    ch = fig['chapter']
    if ch not in figures_by_chapter:
        figures_by_chapter[ch] = []
    figures_by_chapter[ch].append(fig)

screening_modules = [
    {
        "id": "cervical-spine-screening",
        "chapter": 4,
        "region": "spine",
        "region_vi": "Cột Sống Cổ",
        "title": "Cervical Pain Differential Screening",
        "title_vi": "Sàng Lọc Chẩn Đoán Phân Biệt Đau Cột Sống Cổ",
        "author": "Deepak Sebastian (Chapter 4, pp. 105-187)",
        "summary": "Tiếp cận 3 giai đoạn sàng lọc đau cổ: loại trừ cờ đỏ tủy sống (Cervical Spondylotic Myelopathy), cờ đỏ thiếu máu đốt sống thân nền (VBI), rách động mạch cảnh/đốt sống, cờ đỏ nhiễm trùng/ung thư di căn; phân biệt đau cơ xương khớp cơ học vs đau thần kinh rễ cổ (Radiculopathy) vs đau quy chiếu từ tạng lồng ngực (tim, u đỉnh phổi Pancoast).",
        "red_flags": [
            {
                "category": "Cờ đỏ Tủy cổ (Cervical Myelopathy)",
                "signs": "Dáng đi thất điều (gait ataxia), vụng về hai bàn tay (làm rơi đồ, khó cài cúc áo), dấu hiệu Hoffman dương tính, phản xạ gân xương tăng vọt, Clonus đa động, Babinski (+), dấu hiệu Lhermitte (điện giật dọc tủy khi cúi cổ).",
                "action": "Chụp MRI cột sống cổ khẩn cấp, hội chẩn Phẫu thuật Thần kinh. CHỐNG CHỈ ĐỊNH nắn chỉnh/tiêm khi chưa rõ mức độ ép tủy."
            },
            {
                "category": "Cờ đỏ Mạch máu (VBI & Cervical Artery Dissection)",
                "signs": "5D và 3N: Dizziness (chóng mặt), Diplopia (nhìn đôi), Dysarthria (nói khó), Dysphagia (nuốt khó), Drop attacks (khuỵu ngã đột ngột), Nausea (buồn nôn), Numbness (tê mặt/nửa người), Nystagmus (rung giật nhãn cầu). Đau đầu - cổ dữ dội xuất hiện đột ngột (Thunderclap).",
                "action": "Chụp CTA/MRA mạch não - cổ khẩn cấp. Tuyệt đối không xoay vặn kéo giãn cột sống cổ."
            },
            {
                "category": "Cờ đỏ U bướu & Nhiễm trùng (Neoplasm / Infection)",
                "signs": "Sốt, sụt cân không rõ nguyên nhân, tiền sử ung thư (vú, phổi, tiền liệt tuyến), đau liên tục tăng về đêm, gõ đau chói tại gai sau đốt sống, không giảm khi nằm nghỉ.",
                "action": "X-quang, MRI, xét nghiệm máu: ESR, CRP, Phosphatase kiềm (ALP), công thức bạch cầu."
            }
        ],
        "visceral_referrals": [
            {
                "source": "U đỉnh phổi Pancoast (Pancoast Tumor)",
                "pattern": "Đau rễ C8-T1 bờ trong cẳng tay, teo cơ ô mô út, hội chứng Horner (sụp mi, co đồng tử, giảm tiết mồ hôi nửa mặt cùng bên).",
                "differential": "Dễ nhầm với thoái hóa rễ cổ C8 hoặc hội chứng ống cổ tay/ống Guyon."
            },
            {
                "source": "Bệnh cơ tim thiếu máu / Đau thắt ngực (Angina / MI)",
                "pattern": "Đau lan lên hàm dưới, cổ trước, bờ trong cánh tay trái khi gắng sức hoặc xúc động mạnh.",
                "differential": "Cần đo ECG và xét nghiệm Troponin I/T trước khi kết luận đau cơ cổ."
            }
        ],
        "drug_induced": [
            "Kháng sinh Quinolone (Ciprofloxacin, Levofloxacin): nguy cơ viêm gân và đau màng hoạt dịch cổ/vai.",
            "Corticosteroid kéo dài: loãng xương thứ phát, xẹp đốt sống cổ bệnh lý.",
            "Statin: viêm cơ hoặc tiêu cơ vân vùng cơ thang và cơ dựng gai cổ."
        ],
        "examination_procedures": [
            {
                "name": "Nghiệm pháp Spurling (Spurling's Neck Compression Test)",
                "technique": "Bệnh nhân ngồi, nghiêng đầu về bên đau, người khám ép dọc trục từ đỉnh đầu xuống.",
                "significance": "Dương tính khi tái hiện cơn đau lan xuống tay theo phân bố rễ thần kinh (Radiculopathy - độ đặc hiệu > 90%)."
            },
            {
                "name": "Nghiệm pháp Kéo giãn Cổ (Cervical Distraction Test)",
                "technique": "Bệnh nhân nằm ngửa, người khám dùng tay nâng dưới chẩm và cằm kéo nhẹ dọc trục (khoảng 10-15 kg lực).",
                "significance": "Dương tính nếu triệu chứng đau rễ cánh tay giảm hoặc hết hẳn."
            },
            {
                "name": "Dấu hiệu Hoffman (Hoffman's Reflex)",
                "technique": "Cố định đốt giữa ngón III, dùng ngón tay bật nhẹ đốt xa móng tay ngón III.",
                "significance": "Khép và gấp ngón cái/ngón trỏ đột ngột biểu hiện tổn thương bó tháp (Cờ đỏ chèn ép tủy cổ trên C5)."
            },
            {
                "name": "Nghiệm pháp Căng đám rối cánh tay (ULTT / Elvey Test)",
                "technique": "Căng dạng cánh tay, duỗi cổ tay và nghiêng cổ sang bên đối diện để căng TK giữa, quay hoặc trụ.",
                "significance": "Tái hiện triệu chứng đau rễ thần kinh ngoại biên."
            }
        ],
        "differential_table": [
            {"condition": "Thoát vị đĩa đệm rễ cổ (Cervical Radiculopathy)", "onset": "Đột ngột hoặc từ từ sau cúi gập", "aggravating": "Nghiêng cổ cùng bên (Spurling +)", "key_differentiator": "Đau kèm tê/yếu cơ đúng phân vùng dermatom/myotom"},
            {"condition": "Hội chứng diện khớp cổ (Cervical Facet Syndrome)", "onset": "Mạn tính, đau khu trú cạnh sống", "aggravating": "Ngửa và xoay cổ về bên đau (Kemp test)", "key_differentiator": "Đau không lan qua bờ ngoài khớp vai, không có khiếm khuyết thần kinh"},
            {"condition": "Đau cơ mạc (Myofascial Pain - Upper Trapezius)", "onset": "Căng thẳng, sai tư thế làm việc", "aggravating": "Sờ nắn điểm kích hoạt (Trigger point)", "key_differentiator": "Dải cơ co cứng căng (taut band), đau lan theo bản đồ trigger point đặc thù, không giảm phản xạ gân xương"}
        ],
        "figures": figures_by_chapter.get(4, [])[:15]
    },
    {
        "id": "thoracic-spine-screening",
        "chapter": 5,
        "region": "spine",
        "region_vi": "Cột Sống Ngực & Thành Ngực",
        "title": "Thoracic Pain Differential Screening",
        "title_vi": "Sàng Lọc Chẩn Đoán Phân Biệt Đau Cột Sống Ngực & Thành Ngực",
        "author": "Deepak Sebastian (Chapter 5, pp. 188-217)",
        "summary": "Cột sống ngực có độ vận động thấp nhất nhưng lại tiếp giáp nhiều cơ quan nội tạng sống còn nhất (tim, phổi, màng phổi, động mạch chủ, dạ dày, túi mật, tụy). Hơn 60% trường hợp đau ngực đến khám cơ xương khớp cần phải được rà soát và loại trừ các bệnh lý nội tạng nguy kịch trước tiên.",
        "red_flags": [
            {
                "category": "Cờ đỏ Tim mạch (Cardiovascular Red Flags)",
                "signs": "Đau thắt ngực kiểu đè ép, nghẹt thở, vã mồ hôi, buồn nôn, lan ra sau lưng giữa hai xương bả vai hoặc lan lên góc hàm/tay trái.",
                "action": "Đo điện tim (ECG), Troponin, chuyển cấp cứu Tim mạch ngay lập tức."
            },
            {
                "category": "Cờ đỏ Bóc tách ĐM Chủ Ngực (Thoracic Aortic Dissection)",
                "signs": "Cơn đau như xé rách (tearing pain) đột ngột khởi phát giữa hai xương bả vai lan xuống thắt lưng, mạch ngoại vi hai tay bất đối xứng, HA chênh lệch > 20 mmHg.",
                "action": "Chụp CTA ngực khẩn cấp, cấp cứu ngoại lồng ngực."
            },
            {
                "category": "Cờ đỏ Hô hấp (Pulmonary / Pleural)",
                "signs": "Đau nhói tăng rõ rệt khi hít sâu, ho, khó thở cấp tính, tiếng cọ màng phổi (nghĩ đến thuyên tắc phổi PE hoặc tràn khí màng phổi tự phát).",
                "action": "Đo SpO2, D-dimer, X-quang ngực thẳng, CT mạch phổi."
            }
        ],
        "visceral_referrals": [
            {
                "source": "Bệnh lý Gan - Mật (Gallbladder / Liver)",
                "pattern": "Đau góc dưới xương bả vai phải và vùng ngực phải dưới T7-T9 sau bữa ăn nhiều dầu mỡ (dấu hiệu Boas).",
                "differential": "Dễ nhầm với rối loạn chức năng khớp sườn sống ngực phải."
            },
            {
                "source": "Viêm tụy cấp / mạn (Pancreatitis)",
                "pattern": "Đau xuyên từ thượng vị ra sau lưng ở mức T10-T12, đỡ đau khi ngồi cúi gập người về phía trước.",
                "differential": "Cần kiểm tra men Amylase, Lipase máu và siêu âm ổ bụng."
            }
        ],
        "drug_induced": [
            "Thuốc chống loãng xương Bisphosphonate đường uống: loét thực quản gây đau bỏng rát sau xương ức nhầm đau cột sống ngực.",
            "NSAIDs lạm dụng: viêm loét dạ dày tá tràng gây đau quy chiếu vùng liên bả vai."
        ],
        "examination_procedures": [
            {
                "name": "Nghiệm pháp Ép xương ức & Khung sườn (Rib Compression Test)",
                "technique": "Ép từ trước ra sau trên xương ức và ép từ hai bên khung sườn.",
                "significance": "Đau chói khu trú tại vị trí gãy xương sườn do chấn thương hoặc loãng xương."
            },
            {
                "name": "Đánh giá Vận động Khớp sườn sống (Costovertebral Joint Springing)",
                "technique": "Bệnh nhân nằm sấp, dùng gờ mô cái/út ấn nhún trên mỏm ngang và góc sườn.",
                "significance": "Xác định tắc nghẽn hoặc bán trật khớp sườn đốt sống / sườn mỏm ngang (Rib subluxation)."
            }
        ],
        "differential_table": [
            {"condition": "Hội chứng khớp sườn - sống (Costovertebral Arthropathy)", "onset": "Sau xoay vặn hoặc ho mạnh", "aggravating": "Hít sâu hết cỡ, xoay thân mình", "key_differentiator": "Đau chói một bên cạnh cột sống ngực, ấn trực tiếp vào khớp sườn tái hiện đau"},
            {"condition": "Viêm sụn sườn Tietze (Costochondritis)", "onset": "Từ từ, không có chấn thương", "aggravating": "Ấn vào khớp sườn ức phía trước ngực", "key_differentiator": "Sưng nóng đỏ đau tại khớp sụn sườn 2-3-4, không ảnh hưởng phía lưng"},
            {"condition": "Đau thần kinh liên sườn do Zona (Herpes Zoster)", "onset": "Bỏng rát dữ dội dọc khoang liên sườn", "aggravating": "Chạm nhẹ vào da (Allodynia)", "key_differentiator": "Xuất hiện mụn nước mọc chùm theo khoang gian sườn sau 2-4 ngày"}
        ],
        "figures": figures_by_chapter.get(5, [])
    },
    {
        "id": "lumbopelvic-screening",
        "chapter": 6,
        "region": "spine",
        "region_vi": "Thắt Lưng & Khung Chậu",
        "title": "Lumbopelvic Pain Differential Screening",
        "title_vi": "Sàng Lọc Chẩn Đoán Phân Biệt Đau Thắt Lưng & Khung Chậu",
        "author": "Deepak Sebastian (Chapter 6, pp. 218-300)",
        "summary": "Phân tích toàn diện trục thắt lưng - khớp cùng chậu - chậu hông; loại trừ khẩn cấp hội chứng chùm đuôi ngựa (Cauda Equina), phình bóc tách ĐM chủ bụng (AAA), viêm cứng khớp cột sống dính khớp (Ankylosing Spondylitis); phân biệt cơ học vs bệnh lý thần kinh cơ và phát hiện các dấu hiệu không thực thể Waddell (Waddell's Non-organic Signs).",
        "red_flags": [
            {
                "category": "Cờ đỏ Hội chứng Chùm Đuôi Ngựa (Cauda Equina Syndrome - CES)",
                "signs": "Bí tiểu hoặc tiểu không tự chủ, mất trương lực cơ thắt hậu môn, tê mất cảm giác vùng đáy chậu / yên ngựa (Saddle anesthesia S3-S5), yếu liệt chi dưới tiến triển nhanh.",
                "action": "CẤP CỨU NGOẠI THẦN KINH trong vòng 48 giờ để tránh tổn thương cơ tròn vĩnh viễn. Chụp MRI thắt lưng khẩn cấp."
            },
            {
                "category": "Cờ đỏ Phình Động Mạch Chủ Bụng (Abdominal Aortic Aneurysm - AAA)",
                "signs": "Đau âm ỉ dữ dội thắt lưng sâu, không thay đổi theo tư thế vận động cơ thể, sờ thấy khối đập theo nhịp mạch ở bụng (> 3cm ở người > 60 tuổi, tiền sử hút thuốc).",
                "action": "Siêu âm mạch máu bụng hoặc CT mạch máu. CẤM nắn chỉnh cột sống thắt lưng."
            },
            {
                "category": "Cờ đỏ Viêm Cột Sống Dính Khớp (Axial Spondyloarthritis)",
                "signs": "Nam giới trẻ tuổi (< 45 tuổi), đau cứng khớp buổi sáng kéo dài > 30 phút, đau thuyên giảm khi vận động nhưng TỆ HƠN khi nghỉ ngơi, đáp ứng xuất sắc với NSAIDs.",
                "action": "Xét nghiệm HLA-B27, CRP, chụp MRI khớp cùng chậu tìm viêm màng hoạt dịch/phù tủy xương."
            }
        ],
        "visceral_referrals": [
            {
                "source": "Sỏi Thận / Cơn đau quặn thận (Renal Colic)",
                "pattern": "Đau góc sườn cột sống (Costovertebral angle) lan xuống hố chậu và bộ phận sinh dục ngoài, đái máu vi thể, không có tư thế giảm đau.",
                "differential": "Dễ nhầm với co thắt cơ thắt lưng chậu (Psoas spasm)."
            },
            {
                "source": "Bệnh lý Phụ khoa (Endometriosis / U nang buồng trứng / Viêm phần phụ)",
                "pattern": "Đau vùng xương cùng - thắt lưng dưới liên quan chặt chẽ đến chu kỳ kinh nguyệt.",
                "differential": "Cần khai thác tiền sử kinh nguyệt và khám siêu âm đầu dò phụ khoa."
            }
        ],
        "drug_induced": [
            "Fluoroquinolone: nguy cơ rách bao xơ đĩa đệm và tổn thương gân thắt lưng chậu.",
            "Corticoid: hoại tử vô mạch hoặc xẹp lún đốt sống thắt lưng do loãng xương nặng."
        ],
        "examination_procedures": [
            {
                "name": "Nghiệm pháp Nâng thẳng chân (SLR / Lasegue Test)",
                "technique": "Bệnh nhân nằm ngửa, người khám nâng thụ động chân duỗi thẳng.",
                "significance": "Dương tính khi xuất hiện đau rễ thần kinh tọa lan dưới gối ở góc 30-70 độ (độ nhạy cao cho thoát vị đĩa đệm L4-L5, L5-S1)."
            },
            {
                "name": "Dấu hiệu Cờ đỏ Cơ năng Waddell (Waddell's Non-organic Signs)",
                "technique": "Kiểm tra 5 dấu hiệu: Nhạy cảm lan tỏa nông, Giả xoay trục thân mình đau lưng, Phân ly nghiệm pháp ngồi thẳng vs nằm ngửa, Tê yếu không theo giải phẫu, Phản ứng quá mức.",
                "significance": "Có từ 3/5 nhóm dương tính gợi ý yếu tố tâm lý xã hội (Yellow flags) lấn át tổn thương thực thể thuần túy."
            },
            {
                "name": "Nghiệm pháp Đè ép & Giãn khớp cùng chậu (SIJ Compression & Distraction)",
                "technique": "Ép hoặc banh cánh chậu hai bên ở tư thế nằm nghiêng hoặc nằm ngửa.",
                "significance": "Tái hiện đau vùng rãnh khớp cùng chậu (Sacroiliitis)."
            }
        ],
        "differential_table": [
            {"condition": "Thoát vị đĩa đệm thắt lưng (Lumbar Herniation)", "onset": "Đột ngột sau cúi khom bê nặng", "aggravating": "Ngồi lâu, cúi gập lưng, ho rặn (tăng áp lực nội tủy)", "key_differentiator": "Đau rễ thần kinh lan xuống cẳng chân/bàn chân, Lasegue (+)"},
            {"condition": "Hẹp ống sống thắt lưng (Lumbar Spinal Stenosis)", "onset": "Từ từ ở người cao tuổi (> 60 tuổi)", "aggravating": "Đi bộ hoặc đứng thẳng (Đi khập khiễng cách hồi thần kinh)", "key_differentiator": "Đỡ đau ngay khi ngồi xuống hoặc cúi người đẩy xe hàng (Shopping cart sign)"},
            {"condition": "Viêm khớp cùng chậu (Sacroiliitis)", "onset": "Âm ỉ, có thể liên quan mang thai hoặc bệnh tự miễn", "aggravating": "Đứng một chân, bước lên cầu thang, nằm đè bên đau", "key_differentiator": "Đau khu trú tại rãnh khớp cùng chậu (vùng Fortin's area), Gaenslen/Patrick test (+)"}
        ],
        "figures": figures_by_chapter.get(6, [])[:15]
    },
    {
        "id": "hip-screening",
        "chapter": 7,
        "region": "lower_limb",
        "region_vi": "Khớp Háng & Vùng Bẹn",
        "title": "Hip & Groin Pain Differential Screening",
        "title_vi": "Sàng Lọc Chẩn Đoán Phân Biệt Đau Khớp Háng & Vùng Bẹn",
        "author": "Deepak Sebastian (Chapter 7, pp. 301-333)",
        "summary": "Khớp háng là mắt xích trung tâm của chuỗi động học chi dưới. Sàng lọc phân biệt: Đau mặt trước trong (Khớp háng nội khớp vs Thoát vị bẹn/Thể thao), Đau mặt ngoài (Hội chứng đau mấu chuyển lớn GTPS vs Thần kinh bì đùi ngoài LFCN), Đau mặt sau (Khớp cùng chậu vs Cơ hình lê vs Chèn ép ngồi đùi Ischiofemoral).",
        "red_flags": [
            {
                "category": "Cờ đỏ Hoại Tử Vô Mạch Chỏm Xương Đùi (Avascular Necrosis - AVN)",
                "signs": "Đau sâu trong khớp háng/bẹn tăng dần, hạn chế xoay trong và dạng háng rõ rệt, tiền sử lạm dụng Corticoid liều cao hoặc nghiện rượu.",
                "action": "Chụp MRI khớp háng (nhạy cảm nhất giai đoạn sớm khi X-quang chưa phát hiện biến dạng chỏm)."
            },
            {
                "category": "Cờ đỏ Gãy Kín Cổ Xương Đùi / Xương Chậu (Femoral Neck Stress Fracture)",
                "signs": "Đau buốt bẹn khi tì đè trọng lượng, không thể chịu lực đứng 1 chân, dấu hiệu gõ gót chân (Heel strike) tái hiện đau chói ở bẹn.",
                "action": "Bất động chi, chụp X-quang hoặc MRI khớp háng tránh di lệch cổ xương đùi."
            }
        ],
        "visceral_referrals": [
            {
                "source": "Thoát vị Bẹn & Thoát vị Đùi (Inguinal / Femoral Hernia)",
                "pattern": "Khối phồng vùng bẹn tăng kích thước khi ho rặn hoặc đứng lâu, có thể gây đau buốt mặt trong đùi.",
                "differential": "Cần kiểm tra lỗ bẹn nông và siêu âm động học vùng bẹn."
            },
            {
                "source": "Viêm Ruột Thừa Cấp (Appendicitis) / Áp xe Cơ Thắt Lưng Chậu (Psoas Abscess)",
                "pattern": "Đau bẹn phải kèm sốt, co rút gấp khớp háng, dấu hiệu cơ thắt lưng chậu (Psoas sign) dương tính khi duỗi háng.",
                "differential": "Cần xét nghiệm cấp cứu công thức máu, siêu âm ổ bụng."
            }
        ],
        "drug_induced": [
            "Corticoid: nguyên nhân hàng đầu gây hoại tử vô mạch chỏm xương đùi (AVN).",
            "Statin: viêm cơ thắt lưng chậu và cơ mông nhỡ."
        ],
        "examination_procedures": [
            {
                "name": "Nghiệm pháp FADIR (Flexion - Adduction - Internal Rotation)",
                "technique": "Gấp háng 90 độ, khép háng và xoay trong tối đa.",
                "significance": "Dương tính khi đau buốt ở bẹn sâu: độ nhạy > 95% cho Xung đột Chỏm - Ổ cối (FAI) và Rách sụn viền (Labral tear)."
            },
            {
                "name": "Nghiệm pháp FABER / Patrick (Flexion - Abduction - External Rotation)",
                "technique": "Đặt mắt cá chân bên đau lên trên gối chân đối diện thành hình số 4, ấn nhẹ gối xuống mặt giường.",
                "significance": "Đau bẹn trước = Bệnh lý khớp háng; Đau mông sau = Bệnh lý khớp cùng chậu."
            },
            {
                "name": "Dấu hiệu Trendelenburg",
                "technique": "Bệnh nhân đứng một chân bên tổn thương.",
                "significance": "Xương chậu bên đối diện bị hạ thấp: biểu hiện yếu cơ mông nhỡ (Tổn thương TK mông trên hoặc đứt gân mông nhỡ)."
            }
        ],
        "differential_table": [
            {"condition": "Thoái hóa khớp háng (Hip Osteoarthritis)", "onset": "Từ từ ở người trung niên / cao tuổi", "aggravating": "Đi bộ, đứng lâu, cứng khớp buổi sáng < 30 phút", "key_differentiator": "Mất vận động xoay trong (Internal rotation < 15 độ), đau kiểu dấu chữ C (C-sign)"},
            {"condition": "Hội chứng đau mấu chuyển lớn (GTPS / Trochanteric Pain)", "onset": "Bán cấp hoặc mạn tính", "aggravating": "Nằm nghiêng đè lên bên đau, leo cầu thang", "key_differentiator": "Ấn đau chói mấu chuyển lớn, khớp háng vận động thụ động bình thường"},
            {"condition": "Hội chứng Chèn ép Thần kinh Bì Đùi Ngoài (Meralgia Paresthetica)", "onset": "Từ từ, hay gặp ở người béo phì hoặc đeo thắt lưng chật", "aggravating": "Đứng thẳng lâu, duỗi khớp háng", "key_differentiator": "Rối loạn cảm giác tê bì, rát bỏng da mặt trước ngoài đùi, không yếu cơ"}
        ],
        "figures": figures_by_chapter.get(7, [])
    },
    {
        "id": "knee-ankle-foot-screening",
        "chapter": 8,
        "region": "lower_limb",
        "region_vi": "Khớp Gối, Cổ Chân & Bàn Chân",
        "title": "Knee, Ankle & Foot Pain Differential Screening",
        "title_vi": "Sàng Lọc Chẩn Đoán Phân Biệt Đau Khớp Gối, Cổ Chân & Bàn Chân",
        "author": "Deepak Sebastian (Chapter 8, pp. 334-416)",
        "summary": "Sàng lọc hệ thống: Khớp gối (Tổn thương sụn chêm, dây chằng chéo/bên, thoái hóa khớp gối, viêm bao hoạt dịch bánh chè vs gân chân ngỗng); Cổ chân - bàn chân (Bong gân mắt cá, viêm cân gan chân, chèn ép TK chày sau / Ống cổ chân Tarsal Tunnel, U thần kinh Morton, Huyết khối tĩnh mạch sâu DVT).",
        "red_flags": [
            {
                "category": "Cờ đỏ Huyết Khối Tĩnh Mạch Sâu (Deep Vein Thrombosis - DVT)",
                "signs": "Bắp chân sưng to phù nề, nóng đỏ, căng bóng một bên, đau tăng khi gấp mu chân (Dấu hiệu Homans), tiền sử nằm bất động, sau phẫu thuật hoặc bay đường dài.",
                "action": "Thang điểm Wells, xét nghiệm D-dimer, Siêu âm Doppler mạch máu chi dưới khẩn cấp."
            },
            {
                "category": "Cờ đỏ Hội Chứng Khoang Cấp (Acute Compartment Syndrome)",
                "signs": "5P: Pain out of proportion (Đau dữ dội không tương xứng với chấn thương), Paresthesia (dị cảm), Pallor (tái nhợt), Paralysis (liệt), Pulselessness (mất mạch ngoại vi).",
                "action": "CẤP CỨU NGOẠI KHOA MỞ CÂN (Fasciotomy) trong vòng 6 giờ để bảo tồn chi."
            },
            {
                "category": "Cờ đỏ Viêm Khớp Nhiễm Khuẩn (Septic Arthritis)",
                "signs": "Khớp gối sưng nóng đỏ đau dữ dội, tràn dịch lượng lớn, sốt, không thể co gấp khớp hoặc tì chân xuống đất.",
                "action": "Chọc dịch khớp làm xét nghiệm vi sinh/nhuộm soi khẩn cấp, kháng sinh tĩnh mạch."
            }
        ],
        "visceral_referrals": [
            {
                "source": "Đau rễ Thắt lưng L3-L4 chuyển xuống gối (Referred Knee Pain from Spine)",
                "pattern": "Đau mặt trước trong khớp gối nhưng khám khớp gối hoàn toàn không sưng, không tràn dịch, biên độ vận động gối trơn tru.",
                "differential": "Cần kiểm tra cột sống thắt lưng L3-L4 và khớp háng (đau khớp háng thường quy chiếu xuống gối qua nhánh TK bịt)."
            }
        ],
        "drug_induced": [
            "Kháng sinh Quinolone: nguy cơ đứt gân gót Achilles tự phát (thường trong vòng 1-2 tuần sau dùng thuốc).",
            "Thuốc lợi tiểu Thiazide: khởi phát cơn Gout cấp tính tại khớp bàn ngón chân cái (MTP-1)."
        ],
        "examination_procedures": [
            {
                "name": "Nghiệm pháp Lachman (Lachman Test)",
                "technique": "Gấp gối 20-30 độ, một tay giữ đầu dưới xương đùi, một tay kéo đầu trên xương chày ra trước.",
                "significance": "Độ nhạy > 85% cho tổn thương đứt Dây chằng chéo trước (ACL) - độ tin cậy cao hơn nghiệm pháp Ngăn kéo trước."
            },
            {
                "name": "Nghiệm pháp McMurray (McMurray Test)",
                "technique": "Gấp gối tối đa, vừa duỗi gối vừa kết hợp xoay trong (sụn chêm ngoài) hoặc xoay ngoài (sụn chêm trong).",
                "significance": "Dương tính khi có tiếng lục cục (clunk) hoặc đau buốt tại khe khớp (Rách sụn chêm Meniscus)."
            },
            {
                "name": "Nghiệm pháp Thompson (Thompson Test / Simmonds)",
                "technique": "Bệnh nhân nằm sấp buông thõng bàn chân, người khám bóp vào bắp chân cơ bụng chân.",
                "significance": "Bàn chân KHÔNG gập lòng được = Đứt hoàn toàn gân gót Achilles."
            },
            {
                "name": "Dấu hiệu Windlass (Windlass Test)",
                "technique": "Bệnh nhân đứng tì chân, người khám dùng tay nâng thụ động ngón chân cái gập lưng tối đa.",
                "significance": "Tái hiện đau buốt tại điểm bám cân gan chân vào củ xương gót (Viêm cân gan chân Plantar Fasciitis)."
            }
        ],
        "differential_table": [
            {"condition": "Rách sụn chêm khớp gối (Meniscal Tear)", "onset": "Sau động tác xoay vặn chịu lực của gối", "aggravating": "Ngồi xổm, lên xuống cầu thang, kẹt khớp (locking)", "key_differentiator": "Ấn đau chói khe khớp đùi chày, McMurray / Thessaly test (+)"},
            {"condition": "Viêm bao hoạt dịch gân chân ngỗng (Pes Anserine Bursitis)", "onset": "Bán cấp, hay gặp ở phụ nữ thừa cân hoặc thoái hóa gối", "aggravating": "Bước lên cầu thang, đứng lên từ ghế", "key_differentiator": "Ấn đau chói tại mặt trong đầu trên xương chày (dưới khe khớp 4-5cm), không tràn dịch trong bao khớp"},
            {"condition": "Hội chứng Ống Cổ Chân (Tarsal Tunnel Syndrome)", "onset": "Từ từ, tăng về đêm", "aggravating": "Đi đứng lâu, gập lưng cổ chân", "key_differentiator": "Dấu hiệu Tinel dương tính sau mắt cá trong, tê rát gan bàn chân"}
        ],
        "figures": figures_by_chapter.get(8, [])[:15]
    },
    {
        "id": "shoulder-screening",
        "chapter": 9,
        "region": "upper_limb",
        "region_vi": "Khớp Vai & Đai Vai",
        "title": "Shoulder Pain Differential Screening",
        "title_vi": "Sàng Lọc Chẩn Đoán Phân Biệt Đau Khớp Vai & Đai Vai",
        "author": "Deepak Sebastian (Chapter 9, pp. 417-466)",
        "summary": "Khớp vai là khớp có biên độ vận động lớn nhất cơ thể và có mối liên hệ chằng chịt giữa cột sống cổ, lồng ngực và nội tạng. Sàng lọc phân biệt: Đau mặt trước (Gân đầu dài nhị đầu vs Khớp cùng vai đòn AC), Đau mặt ngoài (Chèn ép dưới vòm cùng vai vs Rách gân trên gai vs Đau rễ cổ C5), Đau hạn chế mọi hướng (Đông cứng khớp vai Frozen Shoulder vs Thoái hóa khớp ổ chảo cánh tay).",
        "red_flags": [
            {
                "category": "Cờ đỏ Nhồi Máu Cơ Tim (Myocardial Infarction)",
                "signs": "Đau vai trái kèm đau nặng ngực, cảm giác ngột ngạt thở không ra hơi, vã mồ hôi lạnh, cơn đau không liên quan đến cử động của khớp vai.",
                "action": "CẤP CỨU TIM MẠCH KHẨN CẤP."
            },
            {
                "category": "Cờ đỏ U Đỉnh Phổi Pancoast",
                "signs": "Đau vai sâu liên tục không đáp ứng thuốc giảm đau thông thường, kèm hội chứng Horner (co đồng tử, sụp mi mắt, khô da mặt một bên), ho ra máu, tiền sử hút thuốc.",
                "action": "Chụp X-quang và CT lồng ngực."
            }
        ],
        "visceral_referrals": [
            {
                "source": "Bệnh Gan - Túi Mật (Gallbladder)",
                "pattern": "Đau quy chiếu lên đỉnh vai phải (do kích thích dây thần kinh hoành Phrenic nerve C3-C5).",
                "differential": "Cử động khớp vai phải hoàn toàn bình thường, không đau khi làm các test chóp xoay."
            },
            {
                "source": "Vỡ lách / Chảy máu ổ bụng (Kehr's Sign)",
                "pattern": "Đau nhói dữ dội tại đỉnh vai trái khi nằm ngửa kê cao chân (máu kích thích cơ hoành trái).",
                "differential": "Cần cấp cứu Ngoại bụng."
            }
        ],
        "drug_induced": [
            "Statin: viêm gân chóp xoay và đau cơ delta hai bên.",
            "Vaccine tiêm bắp vai sai kỹ thuật (SIRVA): tổn thương bao hoạt dịch SASD hoặc thần kinh nách do tiêm quá cao."
        ],
        "examination_procedures": [
            {
                "name": "Nghiệm pháp Neer & Hawkins-Kennedy",
                "technique": "Neer: Nâng thụ động cánh tay gấp tối đa ra trước trong khi xoay trong; Hawkins: Gấp vai 90 độ, gập khuỷu 90 độ và xoay trong tối đa.",
                "significance": "Tái hiện đau buốt dưới mỏm cùng vai: Chèn ép gân chóp xoay dưới vòm cùng vai (Subacromial Impingement)."
            },
            {
                "name": "Nghiệm pháp Cốc rỗng (Empty Can / Jobe Test)",
                "technique": "Dạng tay 90 độ trong mặt phẳng xương bả vai, xoay trong chúi ngón cái xuống đất, người khám ấn tay xuống chống lại lực đối kháng.",
                "significance": "Đau kèm yếu lực rõ rệt: Rách gân cơ trên gai (Supraspinatus tear)."
            },
            {
                "name": "Nghiệm pháp Speed & Yergason",
                "technique": "Speed: Nâng cánh tay duỗi thẳng ngửa bàn tay chống lại đối kháng; Yergason: Gấp khuỷu 90 độ, ngửa bàn tay chống đối kháng.",
                "significance": "Đau chói tại rãnh gian củ: Viêm gân đầu dài cơ nhị đầu (LHBT)."
            },
            {
                "name": "Dấu hiệu Vắt ngang tay (Cross-body Adduction Test)",
                "technique": "Nâng tay bên đau gấp 90 độ ra trước và khép tối đa qua ngực sang bên đối diện.",
                "significance": "Đau chói đỉnh vai: Bệnh lý Khớp cùng vai - đòn (AC Joint Arthropathy)."
            }
        ],
        "differential_table": [
            {"condition": "Viêm đông cứng khớp vai (Frozen Shoulder / Adhesive Capsulitis)", "onset": "Bán cấp, trải qua 3 giai đoạn (Đau - Cứng - Tan dần)", "aggravating": "Mọi cử động của vai, chải đầu, cài áo lót sau lưng", "key_differentiator": "Mất cả biên độ chủ động và THỤ ĐỘNG (đặc biệt là xoay ngoài thụ động < 30 độ)"},
            {"condition": "Rách gân chóp xoay (Rotator Cuff Tear)", "onset": "Sau ngã chống tay hoặc mạn tính vi chấn thương", "aggravating": "Nâng tay qua đầu, nằm nghiêng tì lên vai", "key_differentiator": "Biên độ thụ động bình thường nhưng CHỦ ĐỘNG bị yếu (Drop arm test +)"},
            {"condition": "Đau rễ thần kinh cổ C5 (C5 Radiculopathy)", "onset": "Đau lan từ gáy cổ xuống mặt ngoài cánh tay", "aggravating": "Cúi ngửa cổ (Spurling +)", "key_differentiator": "Yếu cơ delta, giảm phản xạ gân cơ nhị đầu, khớp vai vận động bình thường"}
        ],
        "figures": figures_by_chapter.get(9, [])[:15]
    },
    {
        "id": "elbow-wrist-hand-screening",
        "chapter": 10,
        "region": "upper_limb",
        "region_vi": "Khớp Khuỷu, Cổ Tay & Bàn Tay",
        "title": "Elbow, Wrist & Hand Pain Differential Screening",
        "title_vi": "Sàng Lọc Chẩn Đoán Phân Biệt Đau Khớp Khuỷu, Cổ Tay & Bàn Tay",
        "author": "Deepak Sebastian (Chapter 10, pp. 467-512)",
        "summary": "Bàn tay là cơ quan thao tác tinh vi nhất của con người. Sàng lọc phân biệt: Đau khuỷu ngoài (Tennis Elbow vs Chèn ép TK quay PIN), Đau khuỷu trong (Golfer's Elbow vs Chèn ép TK trụ rãnh ròng rọc), Đau cổ tay bờ quay (Hội chứng De Quervain vs Thoái hóa khớp bàn ngón cái CMC-1), Đau tê bàn tay (Hội chứng Ống Cổ Tay vs Chèn ép TK giữa vùng cẳng tay Pronator teres vs Rễ cổ C6-C7).",
        "red_flags": [
            {
                "category": "Cờ đỏ Nhiễm Trùng Bao Hoạt Dịch Gân Gấp (Kanavel's Four Cardinal Signs)",
                "signs": "1. Ngón tay sưng phồng hình xúc xích; 2. Ngón tay giữ ở tư thế gập nhẹ; 3. Ấn đau chói dọc toàn bộ bao gân gấp; 4. Đau dữ dội khi duỗi thụ động ngón tay.",
                "action": "CẤP CỨU NGOẠI KHOA BÀN TAY trong vòng 24 giờ để rạch rửa bao gân tránh hoại tử gân vĩnh viễn."
            },
            {
                "category": "Cờ đỏ Gãy Xương Thuyền Kín Đáo (Scaphoid Fracture)",
                "signs": "Ngã chống tay, ấn đau chói tại hố lào giải phẫu (Anatomical snuffbox), đau khi ép dọc trục ngón tay cái, X-quang ban đầu có thể bình thường.",
                "action": "Bó bột cố định ngón cái ngay cả khi X-quang âm tính, chụp lại sau 10-14 ngày hoặc chụp MRI sớm để phòng ngừa tiêu xương hoại tử vô mạch."
            }
        ],
        "visceral_referrals": [
            {
                "source": "Đau rễ Cổ C6-C7-C8 lan xuống bàn tay",
                "pattern": "Tê bì châm chích các ngón tay nhưng gõ kiểm tra tại cổ tay không đau.",
                "differential": "Cần làm nghiệm pháp Spurling và kiểm tra phản xạ gân xương chi trên."
            }
        ],
        "drug_induced": [
            "Quinolone: viêm và rách gân duỗi cổ tay ngón tay.",
            "Thuốc ức chế men Aromatase (điều trị ung thư vú): đau cứng khớp bàn ngón tay đối xứng."
        ],
        "examination_procedures": [
            {
                "name": "Nghiệm pháp Cozen & Mill (Tennis Elbow)",
                "technique": "Cozen: Gập khuỷu, sấp cẳng tay, bệnh nhân duỗi cổ tay có đối kháng; Mill: Duỗi thẳng khuỷu, sấp cẳng tay và gấp thụ động cổ tay tối đa.",
                "significance": "Tái hiện đau chói tại lồi cầu ngoài xương cánh tay (Viêm điểm bám gân duỗi cổ tay quay ngắn ECRB)."
            },
            {
                "name": "Nghiệm pháp Phalen & Tinel cổ tay (Carpal Tunnel Syndrome)",
                "technique": "Phalen: Gập tối đa hai cổ tay áp lưng bàn tay vào nhau trong 60 giây; Tinel: Gõ nhẹ lên dây thần kinh giữa ở nếp gấp cổ tay.",
                "significance": "Tái hiện cảm giác tê bì dị cảm ở các ngón I, II, III và nửa ngoài ngón IV (Chèn ép TK giữa trong ống cổ tay)."
            },
            {
                "name": "Nghiệm pháp Finkelstein & Eichhoff (De Quervain)",
                "technique": "Gấp ngón cái vào trong lòng bàn tay, nắm các ngón tay lại bao quanh ngón cái, sau đó nghiêng cổ tay về phía bờ trụ.",
                "significance": "Đau buốt chói tại mỏm trâm quay (Viêm bao gân cơ dạng dài và duỗi ngắn ngón cái APL & EPB)."
            }
        ],
        "differential_table": [
            {"condition": "Hội chứng Ống Cổ Tay (Carpal Tunnel Syndrome)", "onset": "Từ từ, hay thức giấc vì tê tay nửa đêm", "aggravating": "Cầm lái xe máy, đánh máy vi tính, gấp cổ tay", "key_differentiator": "Phalen test (+), teo cơ ô mô cái giai đoạn muộn, ngón út hoàn toàn bình thường"},
            {"condition": "Viêm bao gân De Quervain (De Quervain Tenosynovitis)", "onset": "Bán cấp, hay gặp ở phụ nữ chăm con nhỏ hoặc dùng điện thoại nhiều", "aggravating": "Cử động ngón cái, nhấc bế em bé", "key_differentiator": "Finkelstein (+), ấn đau chói mỏm trâm quay, không tê bì thần kinh"},
            {"condition": "Chèn ép thần kinh trụ tại rãnh khuỷu (Cubital Tunnel Syndrome)", "onset": "Từ từ sau tì đè khuỷu tay", "aggravating": "Gập khuỷu tay kéo dài", "key_differentiator": "Tê buốt ngón V và nửa trong ngón IV, dấu hiệu Froment (+), teo cơ liên cốt bàn tay"}
        ],
        "figures": figures_by_chapter.get(10, [])[:15]
    }
]

# Generate data/screening.js
output_js = os.path.join('data', 'screening.js')
with open(output_js, 'w', encoding='utf-8') as f:
    f.write("/**\n")
    f.write(" * MSK-Differential Screening Pro Dataset (Deepak Sebastian Module)\n")
    f.write(" * Dựa trên chuyên khảo: Differential Screening of Regional Pain in Musculoskeletal Practice (Deepak Sebastian)\n")
    f.write(" * Hệ thống dữ liệu độc lập, không can thiệp vào procedures.js\n")
    f.write(" */\n\n")
    f.write("const SCREENING_DATA = ")
    json.dump(screening_modules, f, ensure_ascii=False, indent=2)
    f.write(";\n")

print(f"Generated {output_js} with {len(screening_modules)} modules!")

# Also generate data/screening.fallback.js
fallback_js = os.path.join('data', 'screening.fallback.js')
with open(fallback_js, 'w', encoding='utf-8') as f:
    f.write("/**\n")
    f.write(" * MSK-Differential Screening Pro - IMMUTABLE FALLBACK DATA\n")
    f.write(" */\n\n")
    f.write("(function() {\n")
    f.write("  try {\n")
    f.write("    window.STABLE_SCREENING_FALLBACK = ")
    json.dump(screening_modules, f, ensure_ascii=False, indent=2)
    f.write(";\n")
    f.write("    console.log('[MSK-Screening] Stable Fallback Loaded (" + str(len(screening_modules)) + " modules)');\n")
    f.write("  } catch(e) { console.error('Error loading screening fallback:', e); }\n")
    f.write("})();\n")

print(f"Generated {fallback_js}!")
