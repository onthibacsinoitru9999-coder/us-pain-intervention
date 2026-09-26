# 📖 Báo Cáo Tiếp Nhận & Sẵn Sàng Dữ Liệu Giáo Trình: Deepak Sebastian
### *Differential Screening of Regional Pain in Musculoskeletal Practice* (Jaypee Brothers Medical Publishers)

---

## 1. Thông Tin Giáo Trình Đã Kéo Về (Ingested Book)
- **Tên tệp gốc:** [`SEBASTIAN DEEPAK - Differential Screening of Regional Pain in Musculoskeletal.pdf`](file:///d:/ti%C3%AAm%20kh%E1%BB%9Bp/SEBASTIAN%20DEEPAK%20-%20Differential%20Screening%20of%20Regional%20Pain%20in%20Musculoskeletal.pdf)
- **Kích thước tệp:** `23,331,307 bytes` (~22.25 MB)
- **Số trang PDF:** 526 trang (bao gồm đầy đủ Prelims, 10 Chương chuyên sâu và Bảng tra cứu Index).
- **Tác giả:** Deepak Sebastian, PT, DPT, DO, FERG, CMT
- **Nhà xuất bản:** Jaypee Brothers Medical Publishers.
- **Tính toàn vẹn:** Đã kiểm tra đối chiếu qua PyMuPDF (fitz), cấu trúc trang và mục lục chuẩn xác 100%.

---

## 2. Cấu Trúc 10 Chương Chuyên Khoa

| Chương | Tiêu đề Chuyên môn | Trang PDF | Số ảnh bóc tách | Trọng tâm Lâm sàng |
| :---: | :--- | :---: | :---: | :--- |
| **Ch 01** | **Introduction and Thought Process in Regional Pain** | 16–21 | 0 | Tư duy tiếp cận 3 bước trong chẩn đoán phân biệt đau vùng, phân biệt đau cơ xương khớp vs đau chuyển từ tạng (Visceral referred pain). |
| **Ch 02** | **Chemical Basis of the Human Body** | 22–78 | 0 | Cơ sở sinh hóa, chỉ số xét nghiệm huyết học, sinh hóa máu, miễn dịch, chất chỉ điểm ung thư xương và mô mềm, xét nghiệm nước tiểu. |
| **Ch 03** | **Drug-induced Regional Pain** | 79–104 | 0 | Bệnh cơ do thuốc (Myalgia do Statin, Steroid, Colchicine), Đau khớp do thuốc (Aromatase inhibitors, Quinolone), Bệnh lý thần kinh do thuốc. |
| **Ch 04** | **Cervical Pain** | 105–187 | 70 | Sàng lọc đau cột sống cổ, cờ đỏ tủy sống (Cervical myelopathy), cờ đỏ mạch máu (VBI), cờ đỏ u/nhiễm trùng, cơ chế sinh cơ học và nghiệm pháp lâm sàng. |
| **Ch 05** | **Thoracic Pain** | 188–217 | 8 | Sàng lọc đau cột sống ngực và thành ngực, loại trừ nhồi máu cơ tim, bóc tách động mạch chủ, tràn khí màng phổi, bệnh lý tiêu hóa quy chiếu. |
| **Ch 06** | **Lumbopelvic Pain** | 218–300 | 40 | Sàng lọc đau thắt lưng - chậu, cờ đỏ hội chứng chùm đuôi ngựa (Cauda equina), phình bóc tách ĐM chủ bụng (AAA), u bướu, Waddell's non-organic signs. |
| **Ch 07** | **Hip Pain** | 301–333 | 20 | Sàng lọc đau khớp háng và bẹn, hoại tử vô mạch chỏm xương đùi (AVN), rách sụn viền ổ cối (FAI), chèn ép thần kinh và thoát vị bẹn. |
| **Ch 08** | **Knee, Ankle and Foot Pain** | 334–416 | 67 | Sàng lọc đau khớp gối, cổ bàn chân, tổn thương dây chằng/sụn chêm, hội chứng khoang, huyết khối tĩnh mạch sâu (DVT), viêm cân gan chân. |
| **Ch 09** | **Shoulder Pain** | 417–466 | 41 | Sàng lọc đau đai vai, phân biệt chóp xoay vs viêm rễ cổ C5, đông cứng khớp vai, mất vững ổ chảo, u đỉnh phổi Pancoast, đau tim quy chiếu vai trái. |
| **Ch 10** | **Elbow, Wrist and Hand Pain** | 467–512 | 33 | Sàng lọc đau khuỷu - cổ - bàn tay, hội chứng ống cổ tay, chèn ép TK trụ tại khuỷu, De Quervain, hội chứng ống Guyon, hoại tử vô mạch xương thuyền/nguyệt. |

---

## 3. Hệ Thống Dữ Liệu & Tài Nguyên Đã Chuẩn Bị Sẵn Sàng (Ready Pipelines)

1. **Bộ sưu tập hình ảnh y khoa đã phân loại (279 ảnh chất lượng cao):**
   - Thư mục gốc: [`assets/deepak_images/`](file:///d:/ti%C3%AAm%20kh%E1%BB%9Bp/assets/deepak_images/)
   - Phân loại rõ ràng từ `ch04_cervical_pain/` đến `ch10_elbow_wrist_hand_pain/`.
   - Lọc bỏ triệt để các dải băng trang trí, giữ lại toàn bộ hình giải phẫu, phim chẩn đoán, sơ đồ chuyển đau và thao tác nghiệm pháp lâm sàng.

2. **Dữ liệu JSON có cấu trúc:**
   - [`data/deepak_figures.json`](file:///d:/ti%C3%AAm%20kh%E1%BB%9Bp/data/deepak_figures.json): Toàn bộ 279 ảnh kèm đường dẫn tương đối, số trang, kích thước pixel và chú thích liên quan.
   - [`data/deepak_chapters_meta.json`](file:///d:/ti%C3%AAm%20kh%E1%BB%9Bp/data/deepak_chapters_meta.json): Tóm lược 10 chương, số lượng từ, từ khóa cờ đỏ (Red Flags) và các nghiệm pháp lâm sàng đặc thù.
   - [`data/deepak_raw_toc.txt`](file:///d:/ti%C3%AAm%20kh%E1%BB%9Bp/data/deepak_raw_toc.txt): Toàn văn mục lục nguyên bản.

3. **Bộ công cụ tự động hóa (Scripts):**
   - [`scripts/extract_deepak_figures.py`](file:///d:/ti%C3%AAm%20kh%E1%BB%9Bp/scripts/extract_deepak_figures.py): Bóc tách toàn bộ ảnh tự động từ tệp PDF.
   - [`scripts/extract_deepak_text.py`](file:///d:/ti%C3%AAm%20kh%E1%BB%9Bp/scripts/extract_deepak_text.py): Trích xuất văn bản, bảng cờ đỏ lâm sàng và nghiệm pháp chẩn đoán.
   - [`scripts/inspect_deepak.py`](file:///d:/ti%C3%AAm%20kh%E1%BB%9Bp/scripts/inspect_deepak.py): Công cụ kiểm tra nhanh cấu trúc các chương.

---

## 4. Ý Nghĩa & Khả Năng Tương Thích Với Ứng Dụng Lâm Sàng
- **Sách Philip Peng et al. (Hiện tại):** Là cẩm nang can thiệp trực tiếp (*"How to inject safely"* - mốc siêu âm, đường đi của kim, liều lượng thuốc tê và steroid).
- **Sách Deepak Sebastian (Mới kéo về):** Là cẩm nang sàng lọc tư duy lâm sàng (*"When to inject, When NOT to inject, When to refer"*):
  - Giúp bác sĩ sàng lọc cờ đỏ (Red flags) loại trừ u ác tính, nhiễm trùng, gãy xương kín đáo hoặc nhồi máu trước khi quyết định tiêm can thiệp.
  - Phân biệt đau do thuốc (ví dụ đau cơ do Statin) tránh lạm dụng tiêm corticoid không cần thiết.
  - Sẵn sàng tích hợp thành **Module Sàng Lọc Lâm Sàng & Nghiệm Pháp Phân Biệt (Differential Screening Module)** song song với cẩm nang Siêu âm Can thiệp.
