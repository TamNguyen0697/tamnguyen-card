# Tâm Nguyễn — Personal Card & Portfolio

Danh thiếp điện tử kết hợp portfolio tối giản cho **Tâm Nguyễn — Live Sound Engineer**.
Website tĩnh viết bằng HTML/CSS/JS thuần: không cần build, không backend, không API key, không tracking.

## Cấu trúc

```
Website CaNhan/
├── index.html        # Khung trang + meta SEO / Open Graph
├── style.css         # Giao diện (mobile-first)
├── script.js         # Song ngữ, nút liên hệ, tạo file .vcf, hộp thoại Tài nguyên
├── config.js         # ← MỌI THÔNG TIN CẦN SỬA NẰM Ở ĐÂY
├── README.md
└── assets/
    ├── avatar.jpg               # Ảnh đại diện (cắt 4:5 từ Anhbia/IMG_1658.jpg)
    ├── work-foh.jpg             # Ảnh làm việc mục Giới thiệu (3:2, từ Anhbia/DSC00582.jpg)
    ├── work-foh-960.jpg         # Bản nhẹ của ảnh trên cho điện thoại
    ├── avatar-placeholder.svg   # Ảnh đại diện dự phòng (chữ lồng TN)
    ├── favicon.svg              # Favicon monogram TN
    ├── favicon-32.png
    ├── apple-touch-icon.png     # Icon khi "Thêm vào màn hình chính" trên iPhone
    └── og-image.jpg             # Ảnh xem trước khi chia sẻ link (1200×630)
```

Thư mục `Anhbia/` chứa ảnh gốc (dung lượng lớn), website không dùng trực tiếp. Có thể không cần đưa thư mục này lên khi triển khai.

## Chạy thử trên máy

Cách nhanh nhất: mở thẳng file `index.html` bằng trình duyệt (bấm đúp). Website không cần server, chỉ có font tải từ Google Fonts là cần mạng.

Nếu muốn chạy như trên web thật (khuyên dùng), mở terminal trong thư mục này và chạy một trong các lệnh:

```bash
npx serve .
```

```bash
python -m http.server 5500
```

Sau đó mở địa chỉ mà lệnh in ra (ví dụ `http://localhost:5500`).

## Sửa thông tin

Chỉ cần sửa **`config.js`**. Các mục chính:

| Mục | Ý nghĩa |
|---|---|
| `profile.name`, `title`, `brand` | Tên, chức danh, thương hiệu |
| `profile.avatar` | Đường dẫn ảnh đại diện |
| `profile.siteUrl` | Địa chỉ website sau khi triển khai (ghi vào file danh bạ) |
| `contact.*` | Số điện thoại, email, Facebook, Zalo, YouTube |
| `googleDriveUrl`, `resources` | Link Google Drive và các nhóm tài nguyên |
| `expertise` | Danh sách chuyên môn |
| `projects` | Dự án tiêu biểu (đang trống → khu vực tự ẩn) |
| `theme.accent` | Màu nhấn |
| `i18n.vi`, `i18n.en` | Toàn bộ chữ tiếng Việt / tiếng Anh |

Quy ước: để giá trị là `""` (hoặc placeholder bắt đầu bằng `YOUR_` / `GOOGLE_DRIVE_URL`) thì nút/mục đó **tự ẩn**, cả trên web lẫn trong file `.vcf`.

> Thông tin liên hệ hiện tại lấy từ linktr.ee/thanhtam0697 (Messenger `m.me/thanhtam0697`, Zalo, email, thư mục Drive "Toolkit For Setup"). Kiểm tra lại cho đúng ý bạn. Nếu muốn nút Facebook mở trang cá nhân thay vì Messenger, đổi `contact.facebook` thành `https://www.facebook.com/<tên-của-bạn>`.

### Thay ảnh đại diện

1. Chép ảnh vào `assets/`, ví dụ `assets/avatar.jpg` (nên là ảnh dọc tỉ lệ **4:5**, khoảng 800×1000px, dưới 300 KB).
2. Trong `config.js` đổi `avatar: "assets/avatar.jpg"`.
3. Sửa luôn thuộc tính `src` của thẻ `<img id="avatar">` trong `index.html` cho trùng, để ảnh hiện ngay khi tải trang.

### Cập nhật Google Drive / Tài nguyên

- `googleDriveUrl`: thư mục Drive chính. Nhớ bật chia sẻ **"Bất kỳ ai có đường liên kết"**.
- `resources`: ba nhóm *Phần mềm & tiện ích*, *Công cụ âm thanh*, *Tài liệu & hướng dẫn*. Điền `url` cho nhóm nào thì nhóm đó hiện ra.
  - Không nhóm nào có link → nút **Tài nguyên & Tải về** mở thẳng `googleDriveUrl` trong tab mới.
  - Có ít nhất một nhóm → nút mở hộp thoại liệt kê các nhóm và link thư mục chính.
- Website chỉ mở link Drive; không tự tải file về máy người xem.

### Thêm dự án

Trong `config.js`, thêm vào `projects` theo mẫu đã ghi chú sẵn (tên, vai trò, mô tả, ảnh, link — đều song ngữ). Ảnh dự án để trong `assets/projects/`, tỉ lệ 16:10.

## Lưu danh bạ (.vcf)

Nút **Lưu danh bạ / Save Contact** tạo file vCard 3.0 ngay trên trình duyệt (tên, số điện thoại, chức danh, đơn vị, email, website, link mạng xã hội). iPhone sẽ hiện màn hình "Thêm liên hệ"; Android mở bằng ứng dụng Danh bạ.
Khi chạy ở `localhost`, dòng website được bỏ qua; sau khi triển khai sẽ tự dùng địa chỉ thật (hoặc giá trị `profile.siteUrl` nếu bạn điền).

## Ngôn ngữ

Nút **VI / EN** chuyển toàn bộ nội dung mà không tải lại trang; lựa chọn được ghi nhớ trên trình duyệt người xem. Có thể gửi link thẳng tới bản tiếng Anh: `https://<địa-chỉ>/?lang=en`.

## Triển khai miễn phí

### Cloudflare Pages
1. Vào https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** → **Upload assets**.
2. Kéo thả toàn bộ thư mục này (không cần lệnh build). Bạn sẽ có địa chỉ dạng `https://ten-du-an.pages.dev`.

### GitHub Pages
1. Tạo repository mới trên GitHub, tải toàn bộ file trong thư mục này lên nhánh `main` (file `index.html` nằm ở gốc).
2. **Settings → Pages** → Source: *Deploy from a branch*, chọn `main` / `/ (root)` → Save.
3. Sau 1–2 phút website có tại `https://<tên-github>.github.io/<tên-repo>/`.

### Sau khi có địa chỉ thật
1. `config.js` → điền `profile.siteUrl`.
2. `index.html` → đổi `og:image` và `twitter:image` thành địa chỉ đầy đủ, ví dụ `https://ten-du-an.pages.dev/assets/og-image.jpg`, và thêm `<meta property="og:url" content="https://ten-du-an.pages.dev/">`. Facebook/Zalo cần đường dẫn đầy đủ để hiện ảnh xem trước.
3. Kiểm tra xem trước bằng Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/

## Ghi chú

- Font: Be Vietnam Pro (Google Fonts, miễn phí). Icon: Lucide (MIT), nhúng SVG trực tiếp.
- Không phát nhạc/video tự động, không analytics, không cookie.
- Hiệu ứng chuyển động tự tắt khi thiết bị bật chế độ "Giảm chuyển động".
