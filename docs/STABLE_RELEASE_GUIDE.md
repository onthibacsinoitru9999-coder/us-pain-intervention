# HƯỚNG DẪN QUẢN TRỊ BẢN STABLE & CƠ CHẾ DỰ PHÒNG (FALLBACK RUNBOOK)
**Hệ thống Tra cứu Siêu âm Can thiệp & Tiêm Khớp Lâm sàng (US-PainIntervention Pro)**  
*Dựa trên cẩm nang Springer của GS. Philip Peng et al.*

---

## 1. Tổng quan Bản Phát hành Ổn định (v1.0.0-stable)

Bản phát hành **v1.0.0-stable** là mốc phát triển chuẩn mực đã được kiểm thử toàn diện:
- **51 quy trình siêu âm can thiệp** bao phủ đầy đủ 27 chương sách giáo khoa Springer (Khớp, Bao hoạt dịch, Gân, Cơ sâu, Dây thần kinh ngoại biên, Cột sống & Khung chậu, Can thiệp Sinh học PRP/HA).
- **111 hình ảnh siêu âm thực tế** độ nét cao trích xuất từ Springer Atlas với chú giải song ngữ và đánh số `Fig`.
- **Giao diện di động 7.5 inch tối ưu tuyệt đối**:
  * Modal dạng Sheet toàn màn hình (`100dvh`, tràn viền, không lãng phí lề).
  * **Collapsible Header on Scroll**: Header tự động thu nhỏ từ 200px xuống 36px khi cuộn đọc nội dung lâm sàng, giải phóng tới 90% chiều cao màn hình.
  * Thanh 5 Tab nội dung dính cố định (`sticky`) có đánh số và tự động trượt ngang căn giữa.
  * Thanh điều hướng đáy (`Mobile Bottom Navigation`) hỗ trợ thao tác một tay bằng ngón cái.
- **Công cụ tính liều thuốc tê & LAST Rescue**: Tính chính xác trần liều mg và ml theo cân nặng; phác đồ cấp cứu Lipid 20%.
- **Bảng kiểm An toàn 7 Bước**: Bảng kiểm chuẩn WHO/ASRA trước khi chọc kim.

---

## 2. Kiến trúc Dự phòng Đa tầng (Multi-Tier Resilient Fallback)

Để đảm bảo trong mọi tình huống bác sĩ đang thực hiện thủ thuật trên người bệnh không bao giờ gặp sự cố "trắng trang" (blank screen) hoặc lỗi tải dữ liệu khi có các bản cập nhật mới, hệ thống áp dụng cơ chế tự phục hồi 3 tầng:

```
                      [ Bác sĩ mở Ứng dụng ]
                                 │
                                 ▼
                   ┌───────────────────────────┐
                   │  Kiểm tra PROCEDURES_DATA │
                   │    (data/procedures.js)   │
                   └─────────────┬─────────────┘
                                 │
                 ┌───────────────┴───────────────┐
           [Hợp lệ >= 20 mục]              [Bị lỗi / Thiếu]
                 │                               │
                 ▼                               ▼
       ┌──────────────────┐             ┌──────────────────┐
       │   TIÊN PHÁT:     │             │    TẦNG 1:       │
       │ Tự động sao lưu  │             │ Kích hoạt bản    │
       │ vào localStorage │             │ STABLE_FALLBACK  │
       │  (Healthy Cache) │             │ (procedures.     │
       └──────────────────┘             │  fallback.js)    │
                                        └────────┬─────────┘
                                                 │
                                         [Thất bại / Mất file]
                                                 │
                                                 ▼
                                        ┌──────────────────┐
                                        │    TẦNG 2:       │
                                        │  Khôi phục từ    │
                                        │   LocalStorage   │
                                        │ (Healthy Backup) │
                                        └────────┬─────────┘
                                                 │
                                                 ▼
                                        ┌──────────────────┐
                                        │  HIỂN THỊ BANNER │
                                        │ CẢNH BÁO AN TOÀN │
                                        │  (Không sập web) │
                                        └──────────────────┘
```

1. **Tầng 1 (Primary - Dữ liệu chính):** `data/procedures.js` là tệp dữ liệu được phép cập nhật bổ sung liên tục. Mỗi khi nạp thành công, ứng dụng tự động đồng bộ một bản chụp nguyên vẹn vào `localStorage` của trình duyệt.
2. **Tầng 2 (Frozen Fallback Script):** `data/procedures.fallback.js` là bản sao đông kết bất biến của Bản Ổn Định v1.0.0. Tệp này được `index.html` nạp trước `procedures.js`. Nếu `procedures.js` bị lỗi cú pháp JS (thiếu dấu phẩy, chuỗi chưa đóng) dẫn tới không thực thi được, biến toàn cục `STABLE_PROCEDURES_FALLBACK` sẽ lập tức thế chỗ.
3. **Tầng 3 (Local Storage Snapshot):** Nếu cả 2 tệp trên bị gián đoạn mạng, trình duyệt tự động khôi phục bản chụp nguyên vẹn gần nhất đã lưu trong bộ nhớ máy.
4. **Cảnh báo UI An toàn (Safety Alert Banner):** Khi chế độ dự phòng được kích hoạt, hệ thống sẽ hiện thanh thông báo màu vàng hổ phách trang nhã báo cho bác sĩ biết ứng dụng đang bảo vệ dữ liệu ở bản ổn định v1.0.0 mà không làm gián đoạn việc tra cứu.

---

## 3. Thư mục Lưu trữ Bản Stable (`backup/stable_v1.0/`)

Thư mục `backup/stable_v1.0/` lưu trữ toàn bộ các tệp cốt lõi của mốc ổn định kèm mã băm SHA-256 để đối chiếu toàn vẹn:

- `procedures.js` (269 KB - 51 quy trình đầy đủ)
- `figure_captions.json` (140 KB - 303 chú giải Springer)
- `index.html` (31 KB)
- `style.css` (39 KB)
- `app.js` (43 KB)
- `calculator.js` (6 KB)
- `checklist.js` (7 KB)
- `manifest.json` (Bảng mã băm SHA-256 và mốc thời gian phát hành)

---

## 4. Quy trình Cập nhật Dữ liệu An toàn (Update Workflow)

Khi cần cập nhật, bổ sung quy trình hoặc sửa đổi nội dung lâm sàng, **bắt buộc tuân theo 3 bước sau**:

### Bước 1: Chỉnh sửa dữ liệu
Chỉnh sửa trong tệp `data/procedures.js`.

### Bước 2: Chạy kiểm thử tự động & Tự động sao lưu
Chạy lệnh trong terminal:
```bash
python -X utf8 scripts/verify_update.py
```
- Tập lệnh này sẽ tự động:
  * Kiểm tra tính hợp lệ của cú pháp JavaScript và cấu trúc JSON.
  * Xác thực 16 trường lâm sàng bắt buộc cho từng quy trình.
  * Kiểm tra sự tồn tại của 100% hình ảnh trong `assets/images/`.
  * **Tự động tạo bản sao lưu có gắn mốc thời gian** tại `backup/updates/procedures_YYYYMMDD_HHMMSS.js`.
  * Nếu phát hiện lỗi: In ra chính xác ID quy trình, trường dữ liệu bị lỗi và ngăn chặn triển khai.

### Bước 3: Kiểm tra tích hợp ứng dụng
```bash
python -X utf8 scripts/test_app.py
```

### Bước 4 (Tùy chọn): Thăng hạng bản cập nhật thành bản Stable mới
Nếu bản cập nhật đã được kiểm chứng lâm sàng kỹ càng và muốn nâng lên làm bản Stable kế tiếp:
```bash
python -X utf8 scripts/create_stable_release.py
```

---

## 5. Hướng dẫn Khôi phục Khẩn cấp (Emergency Rollback)

Nếu vô tình triển khai bản cập nhật lỗi lên máy chủ hoặc GitHub Pages, bạn có thể khôi phục về bản v1.0.0-stable trong vòng **5 giây** bằng một trong hai cách:

### Cách A: Khôi phục bằng tệp Backup cục bộ
Chạy lệnh sao chép đè bản stable vào thư mục làm việc:
```powershell
Copy-Item "backup\stable_v1.0\procedures.js" -Destination "data\procedures.js" -Force
git add data/procedures.js
git commit -m "fix(rollback): restore procedures from stable v1.0.0 backup"
git push origin main
```

### Cách B: Khôi phục qua Git Tag `v1.0.0-stable`
```powershell
git checkout v1.0.0-stable -- data/procedures.js
git commit -m "fix(rollback): checkout procedures.js from tag v1.0.0-stable"
git push origin main
```
