DeepInvestigator pipeline completed.

**Investigation Findings**:
# BÁO CÁO KIỂM TOÁN LÂM SÀNG TOÀN DIỆN & PHẢN BIỆN CHUYÊN SÂU (CLINICAL AUDIT & RE-INVESTIGATION REPORT)
**Đối chiếu Cơ sở Dữ liệu Web App (`procedures.js`) với Giáo trình gốc Philip Peng et al. (Springer 2020)**
*Tài liệu tham chiếu chuẩn:* *Ultrasound for Interventional Pain Management: An Illustrated Procedural Guide* (Philip Peng, Roderick Finlayson, Sang Hoon Lee, Anuj Bhatia - Springer 2020, 360 trang, 27 chương).
*Mã nguồn kiểm toán:* `data/procedures.js`, `data/figure_captions.json`, `index.html`, `js/app.js`, `js/calculator.js`, `js/checklist.js`, thư mục `assets/images/`.

---

## I. ĐÁNH GIÁ & PHẢN BIỆN KẾT QUẢ ĐIỀU TRA TRƯỚC (CRITICAL CHALLENGE OF PRIOR ATTEMPT)

Sau khi kiểm tra trực tiếp từng dòng mã trong [`data/procedures.js`](file:///D:/ti%C3%AAm%20kh%E1%BB%9Bp/data/procedures.js), đối chiếu với từng trang, từng hình ảnh trong file PDF gốc của Philip Peng và cấu trúc [`data/figure_captions.json`](file:///D:/ti%C3%AAm%20kh%E1%BB%9Bp/data/figure_captions.json), cuộc tái kiểm toán độc lập này phát hiện báo cáo trước (`<prior_attempt>`) mắc phải **nhiều sai số số học, bỏ sót nghiêm trọng các lỗi gán nhầm ảnh, và đánh giá chưa chính xác chất lượng của một số chương**:

### 1. Sai lệch số học về các chương hoàn toàn trống (Arithmetic & Classification Error)
- **Tuyên bố của điều tra trước:** Báo cáo trước viết *"Số chương hoàn toàn TRỐNG (Completely Missing): 6 chương can thiệp (Ch 7: Genitofemoral, Ch 9: Pudendal & Inferior Cluneal, Ch 12: Cervical Nerve Root, Ch 13: Cervical Medial Branch & TON, Ch 16: Sacroiliac Joint RFA, cùng 2 chương nguyên lý tảng băng Ch 1 & Ch 18)"*.
- **Thực tế mã nguồn và sách cho thấy:** Đếm danh sách liệt kê: Ch 7, Ch 9, Ch 12, Ch 13, Ch 16 chỉ có **chính xác 5 chương can thiệp**, không phải 6! Cùng với 2 chương nguyên lý (Ch 1 và Ch 18), tổng số chương hoàn toàn trống trên web app là **7 chương** (chứ không phải 8 như báo cáo trước tính toán `11 + 8 + 8 = 27`). 
- **Kết quả chuẩn xác:** Có **20/27 chương** được triển khai ít nhất 1 thủ thuật (trong đó có 1 thủ thuật ngoại lai không có trong sách là `plantar-fascia`), và **7/27 chương** hoàn toàn chưa có nội dung (5 chương can thiệp + 2 chương nguyên lý).

### 2. Bỏ sót hàng loạt lỗi gán nhầm ảnh nghiêm trọng (Missed Image Mismatches)
- **Tuyên bố của điều tra trước:** Chỉ ghi nhận **6 vị trí gán nhầm ảnh** (ở khớp khuỷu, cổ tay và cổ chân).
- **Thực tế kiểm toán mã nguồn:** Phát hiện tới **15 trường hợp gán nhầm ảnh, hoán đổi sơ đồ giải phẫu lấy thay ảnh siêu âm, dùng ảnh X-quang huỳnh quang (Fluoroscopy) thay siêu âm, và nhiễm chéo giữa các thủ thuật khác nhau**!
  + **Thảm họa tráo đổi ảnh ở Bộ thủ thuật khớp vai (Chương 19):** Điều tra trước chấm Chương 19 đạt 90%, trong khi thực tế toàn bộ ảnh bị xáo trộn chéo:
    * `sasd-bursa` ([`data/procedures.js#L76-L86`](file:///D:/ti%C3%AAm%20kh%E1%BB%9Bp/data/procedures.js#L76-L86)): Gán ảnh `p223_img1.jpeg`. Đây thực chất là **Fig. 19.7** (*Posterior view of glenohumeral joint* - mặt cắt khớp ổ chảo cánh tay lối sau gồm cơ dưới gai, sụn viền, chỏm xương cánh tay), nhưng lại chú thích thành *"Giải phẫu siêu âm bao hoạt dịch SASD và gân trên gai"*!
    * `glenohumeral-posterior` ([`data/procedures.js#L146-L156`](file:///D:/ti%C3%AAm%20kh%E1%BB%9Bp/data/procedures.js#L146-L156)): Hình 1 dùng `p225_img3.jpeg` (vốn là **Fig. 19.9c** - mặt cắt xương đòn/khớp cùng vai đòn); Hình 2 dùng `p227_img1.jpeg` (vốn là **Fig. 19.10** - chọc kim vào bao gân ĐẦU DÀI NHỊ ĐẦU *LHB*). Cả hai đều không phải là khớp ổ chảo cánh tay lối sau! Hình chọc kim lối sau thực sự của Peng là **Fig. 19.12** (`p229_img1.jpeg`) thì hoàn toàn bị bỏ quên.
  + **Gán nhầm sơ đồ giải phẫu xương thành ảnh siêu âm:**
    * `trochanteric-bursa` ([`data/procedures.js#L1128-L1134`](file:///D:/ti%C3%AAm%20kh%E1%BB%9Bp/data/procedures.js#L1128-L1134)): Gán `p276_img1.jpeg` (vốn là **Fig. 22.10** - sơ đồ diện bám xương mấu chuyển lớn) rồi chú thích là ảnh siêu âm. Ảnh siêu âm thực tế là Fig. 22.12 và 22.13 trên trang 278 (`p278_img1.jpeg`, `p278_img2.jpeg`).
    * `piriformis-muscle` ([`data/procedures.js#L1197-L1207`](file:///D:/ti%C3%AAm%20kh%E1%BB%9Bp/data/procedures.js#L1197-L1207)): Gán `p105_img1.jpeg` (vốn là **Fig. 8.3/8.4** - sơ đồ biến thể thần kinh tọa và ảnh khám cơ học PACE/Beatty), chú thích thành ảnh siêu âm cơ hình lê. Ảnh siêu âm thực tế là Fig. 8.6 trang 107 (`p107_img1.jpeg`).
    * `suprascapular-nerve` ([`data/procedures.js#L345-L355`](file:///D:/ti%C3%AAm%20kh%E1%BB%9Bp/data/procedures.js#L345-L355)): Gán `p65_img1.jpeg` (vốn là **Fig. 4.2** - hình vẽ sơ đồ đặt đầu dò trên gai vai), chú thích thành ảnh giải phẫu siêu âm hố trên gai.
  + **Gán nhầm ảnh X-quang tăng sáng huỳnh quang (Fluoroscopy) thành siêu âm:**
    * `caudal-epidural` ([`data/procedures.js#L1523-L1533`](file:///D:/ti%C3%AAm%20kh%E1%BB%9Bp/data/procedures.js#L1523-L1533)): Hình 2 gán `p207_img1.jpeg` (vốn là **Fig. 17.6** - phim X-quang Fluoroscopy chụp thuốc cản quang rò qua lỗ cùng), chú thích là *"Kỹ thuật đi kim In-plane vào ống ngoài màng cứng qua khe cùng dưới siêu âm"*.
  + **Gán nhầm sơ đồ sinh học tế bào thành quy trình điều chế ly tâm:**
    * `prp-platelet-rich-plasma` ([`data/procedures.js#L1982-L1988`](file:///D:/ti%C3%AAm%20kh%E1%BB%9Bp/data/procedures.js#L1982-L1988)): Gán `p318_img1.jpeg` (vốn là **Fig. 25.1** - sơ đồ sinh lý hoạt hóa tiểu cầu), chú thích là *"Quy trình phân tầng ống máu sau ly tâm điều chế PRP"*. Hình ly tâm và chuẩn bị thực tế là **Fig. 25.6** trang 322 (`p322_img1.jpeg`).
  + **Mô tả sai bản chất hình ảnh can thiệp vôi hóa gân:**
    * `calcific-tendinitis-barbotage` ([`data/procedures.js#L2040-L2051`](file:///D:/ti%C3%AAm%20kh%E1%BB%9Bp/data/procedures.js#L2040-L2051)): Cả 2 ảnh đều lệch mô tả: `p328_img1.jpeg` là thao tác chọc kim vào ổ vôi (**Fig. 26.4a**), không phải hình ảnh phân loại các thể vôi; `p330_img1.jpeg` là thao tác tiêm steroid vào bao hoạt dịch SASD sau khi đã rửa vôi (**Fig. 26.4f**), không phải thao tác chọc hút vôi ra xi lanh.

### 3. Mâu thuẫn nội tại trong danh mục thủ thuật còn thiếu
- Ở phần Tổng quan (Executive Summary), điều tra trước ghi *"Ước tính số thủ thuật can thiệp lâm sàng quan trọng còn thiếu: 16 thủ thuật"*.
- Nhưng ở phần Phân tích chi tiết (Mục V), báo cáo đó lại đánh số từ 1 đến 18 (18 thủ thuật).
- **Thực tế đối chiếu toàn bộ 27 chương của sách Peng:** Có đúng **20 thủ thuật/kỹ thuật tiếp cận can thiệp chuyên biệt** còn thiếu vắng trên ứng dụng, cộng thêm 2 chương nền tảng lý thuyết (Chương 1 và Chương 18).

---

## II. MA TRẬN ĐỐI CHIẾU TOÀN DIỆN 27 CHƯƠNG (EXHAUSTIVE 27-CHAPTER AUDIT MATRIX)

| Chương giáo trình Philip Peng (2020) | Trang PDF | Số ảnh bóc tách | Thủ thuật chuẩn trong sách gốc | Thủ thuật hiện có trên Web (`procedures.js`) | Đánh giá lâm sàng & Khoảng trống cụ thể |
| :--- | :---: | :---: | :--- | :--- | :--- |
| **Ch 1: Basic Principles & Physics** | 13–43 | 31 | Vật lý sóng, tương tác mô, tần số, đầu dò, tối ưu Gain/Depth/Focus/Doppler, 7 loại artifacts, công thái học, kỹ thuật kim (in-plane/out-of-plane, heel-toe). | *Chưa có* | 🔴 **TRỐNG 100%**: Thiếu module lý thuyết nền tảng giúp bác sĩ tối ưu hóa hình ảnh và nhận diện ảnh giả trước khi chọc kim. |
| **Ch 2: Greater & Lesser Occipital Nerve** | 44–53 | 10 | 1. GON Proximal (C2 - giữa cơ chéo đầu dưới OCI & cơ bán gai đầu SSC)<br>2. GON Distal (tại đường cong chẩm trên, cạnh ĐM chẩm)<br>3. LON (bờ sau cơ ức đòn chũm). | `#27 occipital-nerve` (Gộp chung) | 🟡 **Thiếu 2/3 quy trình**: Chỉ có GON tại C2. Thiếu quy trình GON Distal tại ụ chẩm và LON riêng biệt. |
| **Ch 3: Cervical Sympathetic Trunk** | 54–62 | 8 | Phong bế chuỗi hạch giao cảm cổ / hạch sao mức C6 (tiếp cận ngoài và trong; phân biệt C6 vs C7; thể tích 3–5 ml). | `#28 stellate-ganglion` | 🟡 **Đạt 80%**: Có tiếp cận ngoài C6. Thiếu tiếp cận trong (*medial out-of-plane*); thể tích web ghi 4–6 ml hơi cao (Peng khuyến cáo 3–5 ml để tránh khàn tiếng kéo dài do liệt quặt ngược thanh quản). |
| **Ch 4: Suprascapular Nerve** | 63–70 | 5 | 1. SSNB lối sau (hố trên gai)<br>2. Kích thích thần kinh ngoại vi (PNS, p.68)<br>3. SSNB lối trên đòn. | `#5 suprascapular-nerve` | 🟡 **Đạt 75%**: Đã có SSNB lối sau. Gán nhầm ảnh sơ đồ `p65_img1.jpeg` thay vì sonogram. Thiếu kỹ thuật đặt điện cực PNS giảm đau vai mạn tính. |
| **Ch 5: Intercostal Nerve Block** | 71–83 | 8 | Phong bế thần kinh gian sườn (ICNB) cắt dọc sườn, kỹ thuật catheter liên tục. | `#26 intercostal-nerve` | 🟢 **Đạt 95%**: Bám sát sách, đầy đủ mốc màng phổi, cơ gian sườn trong cùng, dấu hiệu trượt màng phổi (lung sliding). |
| **Ch 6: Ilioinguinal & Iliohypogastric** | 84–91 | 6 | Phong bế thần kinh chậu bẹn - chậu hạ vị. Peng ưu tiên *Out-of-plane* (góc dốc, đường đi ngắn, tránh xuyên vào phúc mạc). | `#29 ilioinguinal-nerve` | 🟡 **Sai lệch kỹ thuật**: Web app ghi *In-plane*. Cần bổ sung biến thể dây thần kinh nằm giữa EO và IO (10–15% ca). |
| **Ch 7: Genitofemoral Nerve** | 92–101 | 10 | Phong bế TK sinh dục đùi (GFN):<br>1. Method 1 (Ống bẹn)<br>2. Method 2 (Thừng tinh)<br>3. Method 3 (Tam giác đùi). | *CHƯA CÓ* | 🔴 **TRỐNG 100%**: 10 ảnh chất lượng cao trong `ch7_genitofemoral/` chưa dùng. Cần thiết cho đau bẹn/bìu sau mổ thoát vị bẹn. |
| **Ch 8: Pelvic Muscles** | 102–116 | 12 | 1. Cơ hình lê (Piriformis)<br>2. Cơ & bursa bịt trong (Obturator internus)<br>3. Cơ vuông đùi (Quadratus femoris & chèn ép ngồi đùi). | `#18 piriformis-muscle` | 🔴 **Thiếu 2/3 thủ thuật**: Gán nhầm ảnh sơ đồ `p105_img1.jpeg`. Thiếu hoàn toàn Tiêm cơ bịt trong và Tiêm cơ vuông đùi. |
| **Ch 9: Pudendal & Inferior Cluneal Nerve** | 117–127 | 11 | 1. TK thẹn (Pudendal) tại gai ngồi<br>2. TK bì mông dưới (Inferior cluneal) bờ dưới cơ mông lớn. | *CHƯA CÓ* | 🔴 **TRỐNG 100%**: Thiếu 2 thủ thuật điều trị đau đáy chậu mạn tính. 11 ảnh trong `ch9_pudendal/` chưa dùng. |
| **Ch 10: Lateral Femoral Cutaneous Nerve** | 128–136 | 7 | Phong bế TK bì đùi ngoài (LFCN - Meralgia Paresthetica). | `#19 lfcn-block` | 🟢 **Đạt 90%**: Rất chuẩn xác, tiếp cận góc mạc giữa cơ may và cơ căng mạc đùi (TFL). |
| **Ch 11: Erector Spinae Plane (ESP)** | 137–154 | 14 | 1. ESP Block Single-shot<br>2. Đặt Catheter ESP liên tục<br>3. Bảng chọn mức đốt sống theo vùng phẫu thuật. | `#24 esp-block` | 🟡 **Đạt 80%**: Có kỹ thuật Single-shot. Gán ảnh catheter `p148_img1.jpeg` cho bài tiêm 1 lần. Thiếu quy trình luồn catheter và bảng tầng đốt sống. |
| **Ch 12: Cervical Nerve Root Block** | 155–162 | 7 | Phong bế rễ thần kinh cổ chọn lọc (C5, C6, C7). Mốc củ Chassaignac C6, củ sau C7, Doppler tránh mạch máu rễ gây đột quỵ. | *CHƯA CÓ* | 🔴 **TRỐNG 100%**: Thiếu thủ thuật cột sống cổ quan trọng. 7 ảnh trong `ch12_cervical_root/` chưa dùng. |
| **Ch 13: Cervical Medial Branch & TON** | 163–173 | 11 | 1. Third Occipital Nerve (TON)<br>2. Nhánh trong C3–C6 (eo trụ khớp)<br>3. Nhánh trong C7 (chân mỏm ngang). | *CHƯA CÓ* | 🔴 **TRỐNG 100%**: Thiếu toàn bộ phác đồ đau khớp liên mấu cổ (Facet arthropathy). 11 ảnh trong `ch13_cervical_medial_branch/` chưa dùng. |
| **Ch 14: Lumbar Medial Branch & L5 DR** | 174–188 | 15 | 1. 5 lát cắt cơ bản (5 Basic Views)<br>2. Đếm tầng (Sagittal vs Transverse)<br>3. Phong bế nhánh trong L1–L4<br>4. Phong bế rễ sau L5 (L5 DR). | `#25 lumbar-medial-branch` | 🟢 **Đạt 85%**: Đã có logic can thiệp và thể tích $\le 0.5\text{ ml}$. Cần bổ sung mốc dây chằng *mammillo-accessory* và mô tả 5 lát cắt cơ bản. |
| **Ch 15: Sacroiliac Joint & Sacral LB** | 189–194 | 4 | 1. Tiêm nội khớp cùng chậu (SIJ)<br>2. Phong bế nhánh ngoài xương cùng S1–S3 (Sacral Lateral Branches - SLB). | `#22 sacroiliac-joint` | 🟡 **Thiếu 1/2 thủ thuật**: Đã có tiêm khớp SIJ. Thiếu quy trình phong bế SLB chẩn đoán trước khi làm RFA. |
| **Ch 16: Sacroiliac Joint RFA** | 195–201 | 4 | Đốt sóng cao tần (RFA) khớp cùng chậu (Bipolar strip lesioning / Multipolar). | *CHƯA CÓ* | 🔴 **TRỐNG 100%**: 4 ảnh trong `ch16_sacroiliac_rfa/` chưa dùng. |
| **Ch 17: Caudal Canal Injections** | 202–208 | 6 | Tiêm ngoài màng cứng qua khe cùng (Caudal epidural). | `#23 caudal-epidural` | 🟢 **Đạt 85%**: Quy trình lâm sàng rất chuẩn. Gán nhầm ảnh X-quang huỳnh quang `p207_img1.jpeg` thay vì ảnh chọc kim siêu âm. |
| **Ch 18: MSK Scanning Principles** | 209–214 | 0 | Nguyên lý siêu âm cơ xương khớp tổng quát, bóc tách thủy dịch, an toàn thủ thuật. | *Chưa có* | 🔴 **TRỐNG 100%**: Thiếu module giáo dục can thiệp mô mềm tổng quát. |
| **Ch 19: Shoulder** | 215–233 | 18 | 1. SASD bursa<br>2. Gân nhị đầu LHBT<br>3. Khớp cùng vai đòn AC<br>4. Khớp ổ chảo cánh tay GH lối sau<br>5. Khớp GH lối trước (p.226). | `#1 sasd-bursa`<br>`#2 glenohumeral-posterior`<br>`#3 biceps-tendon`<br>`#4 ac-joint` | 🔴 **Nhiễm chéo hình ảnh nặng**: SASD gán ảnh khớp GH lối sau (`p223_img1.jpeg`); GH lối sau gán ảnh xương đòn (`p225_img3.jpeg`) và gân nhị đầu (`p227_img1.jpeg`). Thiếu lối tiếp cận trước khớp GH. |
| **Ch 20: Elbow Pain Injections** | 234–247 | 16 | 1. Gân duỗi chung (Tennis elbow)<br>2. Gân gấp chung (Golfer's elbow)<br>3. Tiêm nội khớp khuỷu (Radio-capitellar & Humero-ulnar, p.244). | `#6 tennis-elbow`<br>`#7 golfers-elbow` | 🔴 **Thiếu 1 thủ thuật lớn + Lỗi ảnh kép**: Thiếu Tiêm nội khớp khuỷu. Tennis elbow gán nhầm ảnh lồi cầu trong; Golfer's elbow gán nhầm ảnh bán trật TK trụ! |
| **Ch 21: Wrist and Hand** | 248–267 | 19 | 1. Ống cổ tay (CTS - Hydrodissection)<br>2. De Quervain (APL/EPB)<br>3. Ngón tay lò xo (A1 pulley)<br>4. Khớp CMC-1 ngón cái. | `#8 carpal-tunnel`<br>`#9 de-quervain`<br>`#10 trigger-finger`<br>`#11 cmc1-joint` | 🟡 **Đạt 80%**: Đủ 4 bệnh lý. Cần sửa 3 lỗi ảnh (CTS, Trigger finger, CMC-1). Bổ sung cạm bẫy vách ngăn xơ phụ (*intertendinous septum*) ở De Quervain. |
| **Ch 22: Hip** | 268–282 | 14 | 1. Nội khớp háng (Lối trước & Lối ngoài)<br>2. Phức hợp mấu chuyển lớn (GTPS)<br>3. Cơ, bursa & gân thắt lưng chậu (Iliopsoas, p.278). | `#16 hip-intraarticular`<br>`#17 trochanteric-bursa` | 🔴 **Thiếu 1 thủ thuật + 1 lối vào**: Thiếu Tiêm cơ/bao hoạt dịch thắt lưng chậu (Iliopsoas). Khớp háng thiếu lối tiếp cận ngoài. Mấu chuyển lớn gán ảnh sơ đồ xương. |
| **Ch 23: Knee Intervention** | 283–300 | 29 | 1. Nội khớp gối (ngách trên bánh chè)<br>2. Nang Baker (hút, phá vách, tiêm)<br>3. Gân chân ngỗng (Pes anserinus)<br>4. Bao hoạt dịch dải chậu chày xa (Distal ITB bursa, p.293)<br>5. Viêm gân bánh chè (Patellar tendinopathy, p.296). | `#12 knee-suprapatellar`<br>`#13 bakers-cyst`<br>`#14 pes-anserinus` | 🔴 **Thiếu 2 thủ thuật quan trọng**: Thiếu Tiêm bao hoạt dịch dải chậu chày xa (Distal ITB bursa) và Châm kim/tiêm gân bánh chè (Jumper's knee). |
| **Ch 24: Ankle Joint and Nerves** | 301–316 | 20 | 1. Khớp chày sên (Tibiotalar)<br>2. Khớp dưới sên (Subtalar joint, p.310)<br>3. 5 nhánh TK cổ chân (Sural, SPN, DPN, Tibial, Saphenous). | `#20 tibiotalar-joint`<br>`#21 plantar-fascia` *(ngoại lai)* | 🔴 **Thiếu hụt nặng nhất**: Thiếu Tiêm khớp dưới sên (Subtalar) và 5 nhánh TK cổ chân. Nhầm lẫn sơ đồ xương cổ chân gán thành cân gan chân và khớp chày sên. |
| **Ch 25: Platelet-Rich Plasma (PRP)** | 317–324 | 4 | Sinh học tiểu cầu, chỉ định, kỹ thuật ly tâm và tiêm PRP. | `#30 prp-platelet-rich-plasma` | 🟡 **Đạt 80%**: Gán nhầm sơ đồ tế bào tiểu cầu `p318_img1.jpeg` thành sơ đồ phân tầng ly tâm (ảnh ly tâm thực sự là `p322_img1.jpeg` Fig 25.6). |
| **Ch 26: Calcific Tendinitis** | 325–333 | 16 | Rửa vôi hóa gân chóp xoay (Barbotage 1 kim & 2 kim), fenestration, tiêm bursa. | `#31 calcific-tendinitis-barbotage` | 🟡 **Đạt 80%**: Quy trình lâm sàng tốt. Chú thích sai lệch cả 2 ảnh so với thực tế cuốn sách. |
| **Ch 27: Hip & Knee Denervation** | 334–354 | 18 | 1. Diệt TK khớp háng (AIIS-IPE & Nhánh khớp TK bịt)<br>2. Diệt TK khớp gối (SMGN, SLGN, IMGN). | `#15 genicular-nerves` (Khớp gối) | 🔴 **Thiếu 1/2 chương lớn**: Đã có TK gối. Thiếu hoàn toàn Diệt thần kinh khớp háng (Hip denervation RFA) - kỹ thuật kinh điển của Peng. |

---

## III. BẢNG TỔNG HỢP TOÀN BỘ 15 LỖI GÁN HÌNH ẢNH TRÊN WEB APP (COMPREHENSIVE IMAGE MISALIGNMENT AUDIT)

Bảng dưới đây ghi lại đầy đủ và chi tiết toàn bộ 15 sai lệch hình ảnh đã được kiểm chứng trực tiếp giữa [`data/procedures.js`](file:///D:/ti%C3%AAm%20kh%E1%BB%9Bp/data/procedures.js) và giáo trình Peng:

| STT | Mã thủ thuật | Tệp ảnh hiện tại | Chú thích trên Web App | Thực tế trong sách Peng (Evidence) | Đánh giá sai lệch | Tệp ảnh đúng cần thay thế |
| :-: | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `sasd-bursa` | `ch19_shoulder/p223_img1.jpeg` | Giải phẫu siêu âm bao hoạt dịch SASD và gân trên gai | **Fig. 19.7 (p.223):** "Posterior view of glenohumeral joint" (Mặt cắt khớp ổ chảo cánh tay lối sau: cơ dưới gai, sụn viền, chỏm xương cánh tay!) | ❌ **Gán nhầm khớp ổ chảo cánh tay vào bao hoạt dịch SASD** | `ch19_shoulder/p224_img1.jpeg` (Fig. 19.8 lower panel: mặt cắt dọc gân trên gai & SASD bursa) |
| 2 | `glenohumeral-posterior` (Ảnh 1) | `ch19_shoulder/p225_img3.jpeg` | Giải phẫu siêu âm khớp ổ chảo cánh tay lối sau | **Fig. 19.9c (p.225):** "Clavicle, sagittal plane" (Mặt cắt dọc đầu ngoài xương đòn / khớp cùng vai đòn) | ❌ **Gán nhầm xương đòn vào khớp ổ chảo cánh tay** | `ch19_shoulder/p223_img1.jpeg` (Fig. 19.7: Posterior view of GH joint) |
| 3 | `glenohumeral-posterior` (Ảnh 2) | `ch19_shoulder/p227_img1.jpeg` | Kỹ thuật đi kim In-plane khớp ổ chảo cánh tay lối sau | **Fig. 19.10 (p.227):** "Needle insertion for LHB" (Đâm kim vào bao gân đầu dài cơ nhị đầu cánh tay!) | ❌ **Gán nhầm tiêm gân nhị đầu vào tiêm khớp vai lối sau** | `ch19_shoulder/p229_img1.jpeg` (Fig. 19.12: Posterior approach to GHJ needle insertion) |
| 4 | `suprascapular-nerve` (Ảnh 1) | `ch4_suprascapular/p65_img1.jpeg` | Giải phẫu siêu âm hố trên gai và bó mạch thần kinh trên vai | **Fig. 4.2 (p.65):** Sơ đồ hình vẽ vị trí đặt đầu dò trên xương vai mô hình | ❌ **Lấy sơ đồ hình vẽ gán thành ảnh siêu âm** | `ch4_suprascapular/p66_img1.jpeg` (Fig. 4.3 & 4.4: Sonogram hố trên gai và Doppler bó mạch trên vai) |
| 5 | `tennis-elbow` (Ảnh 1) | `ch20_elbow/p239_img1.jpeg` | Hình ảnh siêu âm gân cơ duỗi chung lồi cầu ngoài khuỷu | **Fig. 20.6 (p.239):** "Sonoanatomy of MEDIAL elbow with the ultrasound probe..." (Gân gấp chung lồi cầu TRONG!) | ❌ **Gán nhầm lồi cầu trong vào lồi cầu ngoài** | `ch20_elbow/p238_img1.jpeg` (Fig. 20.5: Sonoanatomy of lateral elbow / CET) |
| 6 | `golfers-elbow` (Ảnh 1) | `ch20_elbow/p240_img1.jpeg` | Hình ảnh siêu âm gân cơ gấp chung lồi cầu trong | **Fig. 20.7b (p.240):** "Sonograph showed the ulnar nerve (UN) subluxed on the other side..." (Bán trật thần kinh trụ!) | ❌ **Gán nhầm ảnh bệnh lý trật TK trụ vào gân cơ gấp** | `ch20_elbow/p239_img1.jpeg` (Fig. 20.6) & `p244_img1.jpeg` (Fig. 20.11: Kim tiêm gân gấp) |
| 7 | `carpal-tunnel` (Ảnh 2) | `ch21_wrist_hand/p252_img1.jpeg` | Kỹ thuật bóc tách thủy dịch thần kinh giữa | **Fig. 21.5 (p.252):** "Out-of-plane needle insertion" (Kỹ thuật chọc kim ngoài mặt phẳng) | ❌ **Mô tả In-plane nhưng gán ảnh Out-of-plane** | `ch21_wrist_hand/p251_img1.jpeg` (Fig. 21.4: In-plane ulnar approach) |
| 8 | `trigger-finger` (Ảnh 2) | `ch21_wrist_hand/p262_img1.jpeg` | Kỹ thuật đi kim tiêm ròng rọc A1 ngón tay lò xo | **Fig. 21.16 (p.262):** "Out-of-plane injection of trigger finger" (Kỹ thuật chọc kim ngoài mặt phẳng) | ❌ **Mô tả In-plane nhưng gán ảnh Out-of-plane** | `ch21_wrist_hand/p261_img1.jpeg` (Fig. 21.15: In-plane needle entry) |
| 9 | `cmc1-joint` | `ch21_wrist_hand/p264_img1.jpeg` | Giải phẫu siêu âm và khe khớp thang bàn ngón 1 | **Fig. 21.18 (p.264):** "Grind and lever test" (Ảnh chụp tay bác sĩ làm nghiệm pháp khám cơ học lâm sàng!) | ❌ **Lấy ảnh khám lâm sàng gán thành ảnh siêu âm** | `ch21_wrist_hand/p265_img1.jpeg` (Fig. 21.20) & `p265_img2.jpeg` (Fig. 21.21: Kim tiêm khớp CMC-1) |
| 10 | `trochanteric-bursa` | `ch22_hip/p276_img1.jpeg` | Giải phẫu siêu âm mấu chuyển lớn và các gân cơ mông | **Fig. 22.10 (p.276):** "Different facets of greater trochanter" (Sơ đồ giải phẫu các diện bám xương mấu chuyển lớn) | ❌ **Lấy sơ đồ xương gán thành ảnh siêu âm** | `ch22_hip/p278_img1.jpeg` (Fig. 22.12: Mặt cắt ngang) & `p278_img2.jpeg` (Fig. 22.13: Mặt cắt dọc & chọc kim) |
| 11 | `piriformis-muscle` (Ảnh 1) | `ch8_pelvic_muscles/p105_img1.jpeg` | Giải phẫu siêu âm cơ hình lê và thần kinh tọa | **Fig. 8.3/8.4 (p.105):** Sơ đồ biến thể đường đi thần kinh tọa & ảnh khám PACE/Beatty test | ❌ **Lấy sơ đồ & ảnh khám lâm sàng gán thành siêu âm** | `ch8_pelvic_muscles/p107_img1.jpeg` (Fig. 8.6: Sonogram thực tế cơ hình lê và thần kinh tọa) |
| 12 | `caudal-epidural` (Ảnh 2) | `ch17_caudal_epidural/p207_img1.jpeg` | Kỹ thuật đi kim In-plane vào ống ngoài màng cứng qua khe cùng | **Fig. 17.6 (p.207):** "The fluoroscopy image showed spread of contrast..." (Ảnh chụp X-quang tăng sáng huỳnh quang!) | ❌ **Lấy phim X-quang huỳnh quang gán thành siêu âm** | `ch17_caudal_epidural/p205_img1.jpeg` (Fig. 17.4 lower panel) hoặc ảnh chọc kim p.206 (Fig. 17.5) |
| 13 | `tibiotalar-joint` & `plantar-fascia` | `ch24_ankle_foot/p302_img1.jpeg` & `p302_img2.jpeg` | Ghi là "Siêu âm khớp chày sên" và "Siêu âm viêm dày cân gan chân" | **Fig. 24.6a,b,c (p.302):** Sơ đồ giải phẫu xương cổ chân (Tibia, Fibula, Talus, Calcaneus). Ch 24 Peng không có cân gan chân! | ❌ **Lấy sơ đồ xương cổ chân gán thành cân gan chân & khớp chày sên** | Khớp chày sên: `p310_img1.jpeg` (Fig. 24.13) & `p313_img1.jpeg` (Fig. 24.16). Cân gan chân: tìm nguồn ảnh đúng. |
| 14 | `prp-platelet-rich-plasma` | `ch25_prp/p318_img1.jpeg` | Quy trình phân tầng ống máu sau ly tâm điều chế PRP | **Fig. 25.1 (p.318):** "Platelet physiology" (Sơ đồ sinh học tế bào, hạt alpha, hoạt hóa tiểu cầu) | ❌ **Lấy sơ đồ sinh học tế bào gán thành quy trình quay ly tâm máu** | `ch25_prp/p322_img1.jpeg` (Fig. 25.6: Toàn bộ quy trình rút máu, chống đông, quay ly tâm và chiết tách PRP) |
| 15 | `calcific-tendinitis-barbotage` (Cả 2 ảnh) | `ch26_calcific_tendinitis/p328_img1.jpeg` & `p330_img1.jpeg` | Chú thích 1: "Các thể vôi hóa"; Chú thích 2: "Kim 18G cắm vào tâm ổ vôi, bơm rửa hút sữa vôi..." | **Fig. 26.4a & Fig. 26.4f:** Ảnh 1 là chọc kim vào ổ vôi (không phải phân loại thể vôi p.326 Fig 26.2/26.3); Ảnh 2 là TIÊM STEROID VÀO BAO HOẠT DỊCH SASD SAU RỬA VÔI (không phải đang hút sữa vôi)! | ❌ **Mô tả sai bản chất kỹ thuật của cả 2 bức ảnh** | Thể vôi: lấy ảnh p.326 (Fig. 26.2, 26.3). Thao tác chọc rửa: giữ `p328_img1.jpeg` nhưng sửa caption; tiêm steroid bursa: sửa caption đúng `p330_img1.jpeg`. |

---

## IV. ĐỐI CHIẾU CHI TIẾT ĐỘ CHÍNH XÁC LÂM SÀNG (DEEP-DIVE CLINICAL ACCURACY AUDIT)

### 1. Thuốc tê và Corticosteroid (`drugsAndDosage` vs Giáo trình Peng)
- **Thể tích phong bế chẩn đoán (Diagnostic blocks):**
  + Ở `#25 lumbar-medial-branch`: Quy định nghiêm ngặt của Peng (p.184) là thể tích tiêm chẩn đoán $\le 0.5\text{ ml}$ cho mỗi nhánh trong để tránh thuốc tê lan sang rễ thần kinh gai sống hoặc vào khoang ngoài màng cứng gây dương tính giả. Web app đã thể hiện chính xác giới hạn này (`"0.3 - 0.5 ml"`).
  + Ở `#28 stellate-ganglion`: Peng khuyến cáo thể tích 3–5 ml. Web app đang ghi `"4 - 6 ml"`. Khuyến cáo giảm trần xuống tối đa 5 ml để hạn chế tối đa nguy cơ phong bế ngoài ý muốn dây thần kinh thanh quản quặt ngược (gây khàn tiếng, khó thở) và đám rối thần kinh cánh tay.
- **Tiêm ngoài màng cứng qua khe xương cùng (`#23 caudal-epidural`):**
  + Sách Peng (p.206) khuyến cáo dùng nước muối sinh lý NaCl 0.9% để đẩy thể tích thuốc dâng cao lên tầng thắt lưng L4–L5/L5–S1.
  + Web app cập nhật rất tốt: thể tích dịch đẩy 8–15 ml NaCl 0.9%, chỉ định rõ Dexamethasone dạng tan không hạt (Non-particulate steroid) để tránh biến chứng tắc mạch tủy sống.

### 2. Kỹ thuật tiếp cận kim (Needle Approach)
- **Phong bế thần kinh chậu bẹn - chậu hạ vị (`#29 ilioinguinal-nerve`):**
  + Sách Peng (p.89) ghi rõ: *"An out-of-plane approach is preferred because the needle path is short and the angle of insertion is steep, allowing the needle tip to be easily visualized as a bright echogenic dot with acoustic shadowing."* (Kỹ thuật Out-of-plane được ưu tiên vì đường kim ngắn, góc dốc, tránh trượt kim vào khoang phúc mạc).
  + Web app hiện tại ghi: `"In-plane từ phía ngoài vào trong hoặc ngược lại"`. Cần hiệu chỉnh lại theo hướng dẫn của Peng: nêu bật kỹ thuật Out-of-plane là lựa chọn an toàn hàng đầu, In-plane là lựa chọn thay thế cho bác sĩ có kinh nghiệm.
- **Phong bế thần kinh trên vai (`#5 suprascapular-nerve`):**
  + Sách Peng (p.68) nhấn mạnh hướng kim phải đi từ **Trong ra Ngoài (Medial-to-Lateral)**: *"The needle is advanced from medial to lateral. For the right shoulder, the needle is inserted from the medial aspect of the probe..."*. Mục đích là nếu kim có quá đà thì chạm vào bờ xương ổ chảo/củ trên thay vì đâm vào bó mạch trên vai hoặc màng phổi.
  + Web app ghi chung chung: `"In-plane từ phía ngoài vào trong hoặc từ trong ra ngoài"`. Cần chỉ định rõ ràng ưu tiên Trong ra Ngoài để đảm bảo an toàn giải phẫu.
- **Viêm bao gân De Quervain (`#9 de-quervain`):**
  + Sách Peng (p.254, Fig. 21.7) cảnh báo có tới **40–60% trường hợp** tồn tại một **vách ngăn xơ phụ (intertendinous septum)** ngăn cách hoàn toàn gân dạng dài ngón cái (APL) và gân duỗi ngắn ngón cái (EPB) thành 2 khoang riêng biệt trong ngăn duỗi số 1.
  + Web app chưa đề cập đến cạm bẫy lâm sàng sống còn này trong phần `pearlsAndPitfalls`. Nếu bác sĩ chỉ tiêm vào một khoang, khoang còn lại không ngấm thuốc dẫn đến thất bại điều trị dai dẳng. Cần bổ sung ngay test bung dịch tách đôi hai gân.

---

## V. KHOẢNG TRỐNG VÀ DANH MỤC 20 THỦ THUẬT CẦN BỔ SUNG (EXHAUSTIVE GAP ANALYSIS)

Để đạt độ bao phủ trọn vẹn 100% toàn bộ 27 chương của giáo trình Philip Peng, hệ thống cần bổ sung **20 thủ thuật can thiệp lâm sàng** theo danh mục chi tiết dưới đây:

### Nhóm 1: Thần kinh & Cột sống cổ (Head, Neck & Cervical Spine) - 4 thủ thuật
1. **Phong bế thần kinh chẩm bé (Lesser Occipital Nerve - LON Block)** *(Chương 2, p.49–51)*: Đích tại bờ sau cơ ức đòn chũm ở 1/3 trên.
2. **Phong bế thần kinh chẩm lớn lối xa tại ụ chẩm (Distal GON Block at Superior Nuchal Line)** *(Chương 2, p.48, 50)*: Đích cạnh động mạch chẩm tại đường cong chẩm trên.
3. **Phong bế rễ thần kinh cổ chọn lọc (Selective Cervical Nerve Root Block C5, C6, C7)** *(Chương 12, p.155–162)*: Mốc củ trước C6 (Chassaignac) vs củ sau C7, dùng Doppler màu kiểm soát động mạch đốt sống và mạch rễ. (Đã có sẵn 7 ảnh trong `assets/images/ch12_cervical_root/`).
4. **Phong bế nhánh trong cột sống cổ và thần kinh chẩm thứ 3 (Cervical Medial Branch & TON Block)** *(Chương 13, p.163–173)*: Đích tại eo trụ khớp (waist of articular pillar) C3–C6 và mỏm ngang C7. (Đã có sẵn 11 ảnh trong `assets/images/ch13_cervical_medial_branch/`).

### Nhóm 2: Vùng chậu, Bẹn & Đáy chậu (Pelvis, Groin & Perineum) - 7 thủ thuật
5. **Phong bế thần kinh sinh dục đùi (Genitofemoral Nerve Block - GFN)** *(Chương 7, p.92–101)*: Bao gồm 3 phương pháp (Method 1: ống bẹn; Method 2: thừng tinh; Method 3: tam giác đùi). (Đã có sẵn 10 ảnh trong `assets/images/ch7_genitofemoral/`).
6. **Tiêm cơ và bao hoạt dịch cơ bịt trong (Obturator Internus Muscle & Bursa Injection)** *(Chương 8, p.109–112)*: Mốc gai ngồi và khuyết hông bé, hình ảnh chữ Y đặc trưng.
7. **Tiêm cơ vuông đùi trong hội chứng chèn ép ngồi đùi (Quadratus Femoris Injection / Ischiofemoral Impingement)** *(Chương 8, p.113–115)*: Giữa ụ ngồi và mấu chuyển bé.
8. **Phong bế thần kinh thẹn tại gai ngồi (Pudendal Nerve Block at Ischial Spine)** *(Chương 9, p.117–123)*: Giữa dây chằng cùng gai và cùng ụ ngồi. (Đã có sẵn ảnh trong `assets/images/ch9_pudendal/`).
9. **Phong bế thần kinh bì mông dưới (Inferior Cluneal Nerve Block)** *(Chương 9, p.123–126)*: Bờ dưới cơ mông lớn vắt qua ụ ngồi.
10. **Phong bế nhánh ngoài xương cùng S1–S3 (Sacral Lateral Branch Blocks - SLBB)** *(Chương 15, p.192–194)*: Phong bế chẩn đoán trước khi làm RFA khớp cùng chậu.
11. **Đốt sóng cao tần (RFA) khớp cùng chậu (Sacroiliac Joint RFA)** *(Chương 16, p.195–201)*: Kỹ thuật Bipolar strip lesioning dọc rãnh ngoài các lỗ cùng S1–S3. (Đã có sẵn 4 ảnh trong `assets/images/ch16_sacroiliac_rfa/`).

### Nhóm 3: Chi trên & Chi dưới (Extremities MSK & Joint Denervation) - 9 thủ thuật
12. **Tiêm khớp ổ chảo cánh tay lối trước (Anterior Glenohumeral Joint Injection)** *(Chương 19, p.226, Fig 19.11)*: Đi kim qua gân cơ dưới vai vào ngách trước khớp vai.
13. **Tiêm nội khớp khuỷu tay (Elbow Joint Intra-articular Injection)** *(Chương 20, p.244–245)*: Tiếp cận khớp quay - lồi cầu con (Radio-capitellar) hoặc hố khuỷu sau (Olecranon fossa recess).
14. **Tiêm nội khớp háng tiếp cận lối ngoài (Lateral Approach Hip Joint Injection)** *(Chương 22, p.273–275)*: Tiếp cận an toàn tuyệt đối tránh bó mạch thần kinh đùi ở bệnh nhân béo phì hoặc thay khớp háng.
15. **Tiêm cơ, gân và bao hoạt dịch thắt lưng chậu (Iliopsoas Muscle, Tendon & Bursa Injection)** *(Chương 22, p.278–280)*: Điều trị hội chứng bật gân háng trước (Snapping hip) và viêm bursa thắt lưng chậu.
16. **Tiêm bao hoạt dịch dải chậu chày xa (Distal Iliotibial Band Bursa Injection)** *(Chương 23, p.293–296)*: Điều trị hội chứng dải chậu chày (Runner's knee) tại lồi củ Gerdy.
17. **Can thiệp châm kim / tiêm gân bánh chè (Patellar Tendon Fenestration / Injection)** *(Chương 23, p.296–299)*: Điều trị thoái hóa gân bánh chè (Jumper's knee).
18. **Tiêm nội khớp dưới sên cổ chân (Subtalar Joint Injection - Lateral Approach)** *(Chương 24, p.310–313)*: Tiếp cận lối ngoài dưới mắt cá ngoài vào xoang cổ chân.
19. **Bộ 5 thủ thuật phong bế thần kinh cảm giác cổ chân (Ankle Nerve Blocks)** *(Chương 24, p.303–310)*: TK bắp chân (Sural), TK mác nông (SPN), TK mác sâu (DPN), TK chày (TN) và TK hiển (SaN).
20. **Diệt thần kinh cảm giác khớp háng (Hip Joint Denervation / RFA)** *(Chương 27, p.335–345)*: Bao gồm Target 1 (giữa AIIS và IPE cho nhánh thần kinh đùi & thần kinh bịt phụ) và Target 2 (bờ dưới trong ổ cối cho nhánh thần kinh bịt). (Đã có sẵn 18 ảnh trong `assets/images/ch27_hip_knee_denervation/`).

---

## VI. KHẢO SÁT KIẾN TRÚC DỮ LIỆU & BẢN ĐỒ KẾT NỐI (DATA ARCHITECTURE & INTEGRATION)

1. **Thực trạng dữ liệu:**
   - Thư mục `assets/images/` có **323 bức ảnh**, chia thành 27 thư mục chuẩn hóa (`ch1_physics` đến `ch27_hip_knee_denervation`).
   - File [`data/figure_captions.json`](file:///D:/ti%C3%AAm%20kh%E1%BB%9Bp/data/figure_captions.json) chứa **303 mục chú thích gốc từ Springer**, được tổ chức dưới dạng từ điển khóa (Object Dict) với key là mã số hình (ví dụ `"1.1"`, `"1.2"`, ..., `"27.15"`). Mỗi entry gồm `{ chapter, number, page, caption }`.
   - File [`data/procedures.js`](file:///D:/ti%C3%AAm%20kh%E1%BB%9Bp/data/procedures.js) hiện nhúng thủ công mảng `figures: [{ path, title, desc }]` cho từng thủ thuật, tổng cộng sử dụng **54/323 ảnh (16.7%)**.
   - [`data/figure_captions.json`](file:///D:/ti%C3%AAm%20kh%E1%BB%9Bp/data/figure_captions.json) **hoàn toàn chưa từng được nạp** trong [`index.html`](file:///D:/ti%C3%AAm%20kh%E1%BB%9Bp/index.html) hay [`js/app.js`](file:///D:/ti%C3%AAm%20kh%E1%BB%9Bp/js/app.js). Do việc nhập dữ liệu `figures` làm thủ công rời rạc nên đã phát sinh 15 lỗi gán nhầm ảnh kể trên.

2. **Giải pháp kiến trúc đồng bộ tự động:**
   - Thay vì tiếp tục gõ tay từng đường dẫn ảnh và mô tả tiếng Việt riêng lẻ, hệ thống nên tải [`data/figure_captions.json`](file:///D:/ti%C3%AAm%20kh%E1%BB%9Bp/data/figure_captions.json) vào `window.FIGURE_CAPTIONS`.
   - Mỗi thủ thuật trong `procedures.js` chỉ cần khai báo danh sách mã hình tham chiếu từ giáo trình (ví dụ: `figureRefs: ["19.7", "19.8", "19.12"]`).
   - Giao diện [`js/app.js`](file:///D:/ti%C3%AAm%20kh%E1%BB%9Bp/js/app.js#L564-L589) sẽ tự động tra cứu đường dẫn tệp trong `assets/images/`, hiển thị song ngữ: Chú thích tóm tắt tiếng Việt kèm theo Trích dẫn nguyên văn học thuật tiếng Anh (*Original Springer Caption*) từ Philip Peng.

---

## VII. KHUYẾN NGHỊ LỘ TRÌNH THỰC HIỆN (RECOMMENDED ROADMAP)

### Giai đoạn 1: Khắc phục khẩn cấp lỗi lâm sàng & Gán lại 15 ảnh (Phase 1 - Hotfix)
- **Ưu tiên 1:** Sửa toàn bộ 15 lỗi gán nhầm ảnh trong [`data/procedures.js`](file:///D:/ti%C3%AAm%20kh%E1%BB%9Bp/data/procedures.js) theo Bảng Mục III, đặc biệt là tách biệt và trả lại đúng ảnh cho Bộ thủ thuật khớp vai (`sasd-bursa`, `glenohumeral-posterior`), khớp khuỷu (`tennis-elbow`, `golfers-elbow`), ống cổ tay (`carpal-tunnel`), khớp CMC-1, cơ hình lê, bao hoạt dịch mấu chuyển và khe xương cùng.
- **Ưu tiên 2:** Bổ sung cảnh báo sống còn về vách ngăn xơ phụ (*intertendinous septum*) trong quy trình `de-quervain`.
- **Ưu tiên 3:** Bổ sung lưu ý ưu tiên kỹ thuật Out-of-plane cho `ilioinguinal-nerve` và hướng kim Medial-to-Lateral cho `suprascapular-nerve`.

### Giai đoạn 2: Tích hợp Atlas Siêu âm & Đồng bộ Chú thích (Phase 2 - Atlas Integration)
- Nạp `figure_captions.json` vào ứng dụng web.
- Xây dựng một Tab độc lập: **"Atlas Siêu Âm Philip Peng (Springer 2020)"** trên thanh điều hướng chính, cho phép tra cứu toàn bộ 323 bức ảnh theo 27 chương, kèm công cụ tìm kiếm theo mốc giải phẫu tiếng Anh và tiếng Việt.

### Giai đoạn 3: Mở rộng Cơ sở Dữ liệu từ 31 lên 51 quy trình chuẩn (Phase 3 - Expansion)
- Biên soạn 20 thủ thuật can thiệp còn thiếu đã liệt kê tại Mục V, tận dụng 269 bức ảnh siêu âm chất lượng cao hiện đang nằm yên trong các thư mục `ch7`, `ch8`, `ch9`, `ch12`, `ch13`, `ch16`, `ch20`, `ch22`, `ch23`, `ch24`, `ch27`.
- Bổ sung 1 Module kiến thức nền tảng: "Vật lý Siêu âm & Nhận diện Ảnh giả (Artifacts)" từ Chương 1 và Chương 18.

---

## VIII. REMAINING QUESTIONS & GAPS (CÁC VẤN ĐỀ VÀ KHOẢNG TRỐNG CÒN LẠI)

1. **Vấn đề thủ thuật Cân gan chân (`plantar-fascia`):**
   - Giáo trình của Philip Peng (2020) hoàn toàn không có mục tiêm cân gan chân trong Chương 24 (*Ankle Joint and Nerves*). Tuy nhiên, trên thực tế lâm sàng tại Việt Nam, viêm cân gan chân là một trong những bệnh lý cơ xương khớp phổ biến nhất. Khuyến nghị giữ lại thủ thuật này trong cơ sở dữ liệu, nhưng cần tách nó thành nhóm *"Thủ thuật Mở rộng Bổ sung Ngoài Sách Peng"* và thay thế bức ảnh sơ đồ xương cổ chân (`p302_img2.jpeg`) bằng một hình ảnh siêu âm cân gan chân thực tế chuẩn mực.
2. **Kỹ thuật RFA khớp cùng chậu, rễ thần kinh cổ và thần kinh khớp háng:**
   - Các can thiệp trong Chương 12 (Selective Cervical Root), Chương 13 (Cervical Medial Branch), Chương 16 (SIJ RFA) và Chương 27 (Hip Denervation) là các kỹ thuật chuyên sâu yêu cầu trang thiết bị máy RFA sóng cao tần chuyên dụng và kim chuyên dụng (Cooled RF hoặc kim RFA đầu trần). Cần bổ sung hướng dẫn lâm sàng rõ ràng về tiêu chuẩn phòng can thiệp vô khuẩn áp lực âm và sự sẵn có của vật tư tại các bệnh viện chuyên khoa tại Việt Nam.
3. **Phạm vi kiểm tra tiếp theo của đội ngũ phát triển:**
   - Đội ngũ kỹ thuật tiếp theo nên tập trung viết script kiểm tra tự động ánh xạ giữa `figure_captions.json` và `procedures.js` để ngăn ngừa hoàn toàn nguy cơ tái diễn lỗi gán nhầm ảnh khi đưa 20 thủ thuật mới vào hệ thống.

Thoroughly review the findings above. Carefully check if they fully address every single aspect of the user's question — do not skip any part. Iterate if necessary following the **Workflow** in your system prompt.