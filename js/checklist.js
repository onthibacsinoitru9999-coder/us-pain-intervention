// US-PainIntervention Pro: 7-Step Clinical Safety Checklist
// Based on ASRA / ESRA Guidelines & Ministry of Health Interventional Safety Protocols

const SAFETY_CHECKLIST_STEPS = [
  {
    step: 1,
    title: "Xác nhận Danh tính & Bên tổn thương (Time-out)",
    items: [
      "Hỏi trực tiếp và đối chiếu vòng đeo tay: Họ và tên, Năm sinh bệnh nhân.",
      "Xác nhận chính xác khớp / vị trí can thiệp (Bắt buộc chỉ định rõ Bên Trái hay Bên Phải).",
      "Ký cam kết đồng thuận thực hiện thủ thuật (Informed Consent) đã được giải thích rõ lợi ích, nguy cơ và tai biến có thể gặp."
    ],
    criticalWarning: "Tuyệt đối không đâm kim khi chưa xác nhận đúng bên tổn thương cùng người bệnh!"
  },
  {
    step: 2,
    title: "Sàng lọc Bệnh nền & Tương tác thuốc",
    items: [
      "Tiền sử dị ứng: Dị ứng thuốc tê nhóm Amide (Lidocaine, Bupivacaine, Ropivacaine), dị ứng Povidone Iodine, dị ứng thuốc cản quang.",
      "Thuốc chống đông / chống ngưng tập tiểu cầu: Đang dùng Warfarin (kiểm tra INR), NOACs (Rivaroxaban, Apixaban), Clopidogrel, Aspirin. (Với can thiệp trục thần kinh/cột sống: tuân thủ thời gian ngừng thuốc theo hướng dẫn ASRA).",
      "Đái tháo đường: Đường huyết mao mạch hiện tại hoặc HbA1c gần nhất. Cảnh báo bệnh nhân đường huyết có thể tăng vọt trong 48-72h sau tiêm Steroid.",
      "Tình trạng nhiễm trùng: Đang có sốt, nhiễm khuẩn huyết, hoặc mụn mủ, viêm mô tế bào tại vùng da tiêm hay không."
    ],
    criticalWarning: "Nếu có nhiễm khuẩn tại chỗ -> HOÃN THỦ THUẬT NGAY LẬP TỨC."
  },
  {
    step: 3,
    title: "Chuẩn bị Vô khuẩn Tuyệt đối (Aseptic Technique)",
    items: [
      "Bác sĩ rửa tay ngoại khoa, đội mũ, đeo khẩu trang, mang găng tay vô khuẩn.",
      "Bọc đầu dò siêu âm bằng bao vô khuẩn chuyên dụng (Sterile probe cover) hoặc găng tay vô khuẩn vô trùng, dùng gel dẫn âm vô khuẩn bên ngoài.",
      "Sát khuẩn da vùng can thiệp rộng tối thiểu 10 cm bằng Povidone Iodine 10% hoặc Chlorhexidine 2% trong cồn, lau xoắn ốc từ trong ra ngoài ít nhất 3 lần.",
      "Chờ dung dịch sát khuẩn khô hoàn toàn (tối thiểu 2 phút với Povidone Iodine) trước khi chọc kim."
    ],
    criticalWarning: "Môi trường khớp và mô mềm rất nhạy cảm; vi khuẩn xâm nhập sẽ gây viêm khớp nhiễm khuẩn tàn phá sụn vĩnh viễn."
  },
  {
    step: 4,
    title: "Khảo sát Siêu âm Tĩnh & Quét Doppler Màu",
    items: [
      "Đặt đầu dò đúng quy cách, chỉnh độ sâu (Depth), độ lợi (Gain) và tiêu cự (Focus) ngay mức cấu trúc tổn thương.",
      "BẬT DOPPLER MÀU: Quét dọc toàn bộ đường đi kim dự kiến để phát hiện mạch máu nằm trên đường đi (tránh đâm xuyên mạch máu).",
      "Nhận diện rõ các mốc giải phẫu then chốt (Bờ xương, Bao khớp, Gân cơ, Dây thần kinh lân cận).",
      "Chọn hướng tiếp cận tối ưu: Ưu tiên tiếp cận In-plane (dọc trục) để quan sát toàn bộ thân và đầu kim trong suốt quá trình đâm."
    ],
    criticalWarning: "Bật Doppler màu là bắt buộc trước mọi can thiệp mạch - thần kinh - bao hoạt dịch."
  },
  {
    step: 5,
    title: "Kiểm soát Đầu kim Liên tục trong Thời gian thực",
    items: [
      "Gây tê tại chỗ da và mô dưới da bằng kim nhỏ 27G - 30G nhẹ nhàng.",
      "Đâm kim can thiệp In-plane dưới quan sát trực tiếp liên tục. Mũi kim tăng âm (Hyperechoic tip) phải luôn nằm trong mặt phẳng chùm sóng siêu âm.",
      "Không bao giờ đẩy kim tiến lên khi MẤT DẤU ĐẦU KIM. Nếu mất dấu đầu kim: Dừng lại, lắc nhẹ đầu dò hoặc rung nhẹ kim để tìm lại đầu kim trước khi tiến tiếp.",
      "Đích đến của mũi kim phải đạt chính xác khoang giải phẫu mục tiêu (Nội khớp, Bao hoạt dịch, Quanh bao gân, Mặt phẳng mạc)."
    ],
    criticalWarning: "Tuyệt đối không đâm kim 'mù' khi chưa nhìn thấy rõ đầu kim trên màn hình siêu âm."
  },
  {
    step: 6,
    title: "Test Hút Âm tính & Bơm Thuốc Quan sát Tách Mô",
    items: [
      "TEST HÚT (Aspiration Test): Kéo nhẹ pít-tông kiểm tra không có máu chảy ngược vào xi lanh (loại trừ đâm vào lòng mạch máu) và không có khí (nếu làm vùng ngực sườn).",
      "Bơm thử liều nhỏ (Test dose 0.2 - 0.5 ml): Quan sát dịch thuốc lan tỏa làm giãn phồng khoang mục tiêu (Hydrodissection / Joint distension) mà không có lực cản nặng nề.",
      "Nếu tiêm quanh gân: Thấy thuốc bao quanh gân (Donut sign). Nếu thấy chất gân phồng to -> ĐẦU KIM ĐANG Ở TRONG GÂN -> RÚT KIM NGAY!",
      "Hỏi cảm giác bệnh nhân: Bệnh nhân không được có cảm giác giật điện buốt thấu dọc chi (nếu có -> kim đang đâm vào dây thần kinh)."
    ],
    criticalWarning: "Nếu có lực cản nặng tay hoặc bệnh nhân giật nảy người -> Dừng bơm ngay lập tức!"
  },
  {
    step: 7,
    title: "Rút kim, Băng ép & Theo dõi Sau thủ thuật",
    items: [
      "Rút kim nhanh dứt khoát, dùng gạc vô khuẩn ép chặt vị trí đâm kim 1 - 2 phút để cầm máu.",
      "Dán băng keo vô trùng (Băng Urgo hoặc gạc vô khuẩn).",
      "Theo dõi bệnh nhân tại phòng thủ thuật tối thiểu 15 - 30 phút:",
      "   - Kiểm tra sinh hiệu: Mạch, Huyết áp, SpO2, nhịp thở.",
      "   - Theo dõi dấu hiệu ngất Vagal (choáng váng, vã mồ hôi, tụt huyết áp do sợ đau).",
      "   - Theo dõi dấu hiệu ngộ độc thuốc tê toàn thân LAST (tê quanh miệng, ù tai, vị kim loại, co giật).",
      "   - Sẵn sàng hộp cấp cứu phản vệ và nhũ dịch Lipid Emulsion 20% tại phòng thủ thuật.",
      "Dặn dò bệnh nhân: Giữ sạch vị trí tiêm trong 24h, tránh vận động gắng sức trong 48h, tái khám ngay nếu sốt cao hoặc sưng nóng đỏ đau tăng dần."
    ],
    criticalWarning: "Hộp cấp cứu sốc phản vệ và phác đồ xử trí LAST 20% Lipid phải luôn sẵn sàng tại phòng can thiệp!"
  }
];

// Export to window
if (typeof window !== "undefined") {
  window.SAFETY_CHECKLIST_STEPS = SAFETY_CHECKLIST_STEPS;
}
