/* =========================================================================
   CẤU HÌNH WEBSITE — chỉ cần sửa file này để thay thông tin.
   SITE CONFIG — edit this file only to update your details.

   Quy ước:
   - Để trống ""  => mục đó tự ẩn khỏi website (và khỏi file danh bạ .vcf).
   - Giá trị bắt đầu bằng "YOUR_" hoặc bằng "GOOGLE_DRIVE_URL" được coi là
     placeholder chưa điền => cũng tự ẩn.
   - Văn bản song ngữ viết dạng { vi: "...", en: "..." }.
   ========================================================================= */

window.SITE_CONFIG = {
  /* Ngôn ngữ mặc định khi khách vào lần đầu: "vi" hoặc "en" */
  defaultLanguage: "vi",

  /* ---------------- Thông tin cá nhân ---------------- */
  profile: {
    name: "Tâm Nguyễn",          // Tên hiển thị
    givenName: "Tâm",            // Tên (dùng cho file danh bạ .vcf)
    familyName: "Nguyễn",        // Họ (dùng cho file danh bạ .vcf)
    title: "Live Sound Engineer",
    brand: "Professional Sound Solutions",

    /* Ảnh đại diện: chép ảnh vào thư mục assets/ rồi đổi đường dẫn,
       ví dụ "assets/avatar.jpg". Nên dùng ảnh dọc tỉ lệ 4:5, ~800×1000px. */
    avatar: "assets/avatar.jpg",

    /* Ảnh làm việc hiển thị trong mục Giới thiệu (tỉ lệ 3:2).
       Để src "" nếu muốn ẩn. srcSmall là bản nhẹ cho điện thoại. */
    workPhoto: {
      src: "assets/work-foh.jpg",
      srcSmall: "assets/work-foh-960.jpg",
      alt: { vi: "Tâm Nguyễn điều khiển mixer qua máy tính bảng tại một sự kiện ngoài trời", en: "Tâm Nguyễn mixing on a tablet at an outdoor event" },
      caption: { vi: "Vận hành âm thanh tại sự kiện ngoài trời", en: "Running sound at an outdoor event" }
    },

    /* Địa chỉ website sau khi triển khai (ghi vào danh bạ .vcf).
       Để trống => tự dùng địa chỉ trang đang mở. */
    siteUrl: ""
  },

  /* ---------------- Liên hệ & mạng xã hội ---------------- */
  contact: {
    phoneDisplay: "0366 329 324",   // Số hiển thị trên web
    phoneE164: "+84366329324",      // Số quốc tế dùng cho tel: và .vcf
    email: "thanhtam0697@gmail.com",
    facebook: "https://m.me/thanhtam0697",      // Link Messenger (lấy từ Linktree)
    zalo: "https://zalo.me/0366329324",
    youtube: "https://www.youtube.com/@thanhtam0697/videos"
  },

  /* ---------------- Tài nguyên (Google Drive) ----------------
     - googleDriveUrl: thư mục Drive chính.
     - resources: các nhóm con, mỗi nhóm một URL riêng. Nhóm nào để url ""
       sẽ bị ẩn. Nếu KHÔNG có nhóm nào có link, nút "Tài nguyên" mở thẳng
       googleDriveUrl trong tab mới. */
  googleDriveUrl: "https://drive.google.com/drive/folders/18F7TdF7tdmRVpfbv1PqGPVn4WppB7aMr?usp=sharing",

  resources: [
    {
      icon: "package",
      url: "",   // ví dụ: link thư mục Drive con chứa phần mềm
      title: { vi: "Phần mềm & tiện ích", en: "Software & Utilities" },
      description: { vi: "Phần mềm điều khiển, driver và tiện ích.", en: "Control software, drivers and utilities." }
    },
    {
      icon: "waveform",
      url: "",
      title: { vi: "Công cụ âm thanh", en: "Audio Tools" },
      description: { vi: "Preset, template và công cụ đo kiểm.", en: "Presets, templates and measurement tools." }
    },
    {
      icon: "file",
      url: "",
      title: { vi: "Tài liệu & hướng dẫn", en: "Documents & Guides" },
      description: { vi: "Tài liệu kỹ thuật và hướng dẫn thiết lập.", en: "Technical documents and setup guides." }
    }
  ],

  /* ---------------- Chuyên môn ---------------- */
  expertise: [
    { icon: "mic",      title: "Live Sound Engineering",          caption: { vi: "Âm thanh biểu diễn trực tiếp", en: "Sound for live performance" } },
    { icon: "sliders",  title: "FOH & Monitor Mixing",            caption: { vi: "Mix khán phòng và sân khấu",    en: "Front-of-house and stage mixes" } },
    { icon: "radio",    title: "RF & Wireless Microphone Systems", caption: { vi: "Hệ thống micro không dây",     en: "Wireless microphone systems" } },
    { icon: "headphones", title: "In-Ear Monitoring (IEM)",       caption: { vi: "Kiểm âm in-ear cho nghệ sĩ",   en: "In-ear monitors for performers" } },
    { icon: "layers",   title: "Multitrack Recording",            caption: { vi: "Ghi âm đa kênh",               en: "Multichannel recording" } },
    { icon: "speaker",  title: "Audio System Setup",              caption: { vi: "Lắp đặt & cân chỉnh hệ thống", en: "System setup and tuning" } }
  ],

  /* ---------------- Dự án tiêu biểu ----------------
     Danh sách trống => khu vực "Dự án" tự ẩn hoàn toàn.
     Thêm dự án theo mẫu (bỏ dấu // ở đầu các dòng):

  projects: [
    {
      name:  { vi: "Tên chương trình", en: "Show name" },
      role:  { vi: "Kỹ sư FOH", en: "FOH Engineer" },
      description: { vi: "Mô tả ngắn.", en: "Short description." },
      image: "assets/projects/ten-anh.jpg",          // có thể để ""
      imageAlt: { vi: "Mô tả ảnh", en: "Image description" },
      url: ""                                          // link video/bài viết, có thể để ""
    }
  ],
  */
  projects: [],

  /* ---------------- Màu chủ đạo ---------------- */
  theme: {
    accent: "#D6A85D",       // vàng champagne
    background: "#101318"    // nền than
  },

  /* ---------------- Nội dung song ngữ ---------------- */
  i18n: {
    vi: {
      meta_title: "Tâm Nguyễn — Live Sound Engineer | Professional Sound Solutions",
      meta_description: "Tâm Nguyễn — Live Sound Engineer. Giải pháp âm thanh chuyên nghiệp cho biểu diễn trực tiếp, hệ thống không dây và ghi âm đa kênh.",
      skip: "Bỏ qua đến nội dung chính",
      lang_label: "Chọn ngôn ngữ",
      home_label: "Về đầu trang",
      hero_desc: "Giải pháp âm thanh chuyên nghiệp cho biểu diễn trực tiếp, hệ thống không dây và ghi âm đa kênh.",
      save_contact: "Lưu danh bạ",
      save_contact_aria: "Tải danh thiếp điện tử (.vcf) để lưu vào danh bạ",
      call: "Gọi",
      call_aria: "Gọi điện cho Tâm Nguyễn",
      avatar_alt: "Ảnh đại diện của Tâm Nguyễn",
      avatar_placeholder_alt: "Ảnh đại diện tạm thời: chữ lồng TN",
      contact_heading: "Liên hệ",
      contact_phone: "Điện thoại",
      contact_facebook: "Facebook",
      contact_facebook_sub: "Nhắn tin qua Messenger",
      contact_zalo: "Zalo",
      contact_zalo_sub: "Chat qua Zalo",
      contact_youtube: "YouTube",
      contact_youtube_sub: "Xem kênh",
      contact_email: "Email",
      new_tab: "(mở tab mới)",
      about_heading: "Giới thiệu",
      about_body: "Tôi làm việc trong lĩnh vực âm thanh biểu diễn trực tiếp, tập trung vào vận hành hệ thống âm thanh, FOH & monitor mixing, hệ thống micro không dây, IEM và ghi âm multitrack. Tôi hướng đến giải pháp thực tế, ổn định và phù hợp với yêu cầu của từng chương trình.",
      expertise_heading: "Chuyên môn",
      projects_heading: "Dự án tiêu biểu",
      project_role: "Vai trò",
      project_view: "Xem chi tiết",
      resources_title: "Tài nguyên & Tải về",
      resources_hint: "Phần mềm, công cụ và tài liệu trên Google Drive",
      resources_dialog_title: "Tài nguyên & Tải về",
      resources_dialog_note: "Các liên kết mở Google Drive trong tab mới. Website không tự tải file về máy bạn.",
      resources_all: "Mở toàn bộ thư mục Google Drive",
      close: "Đóng",
      toast_saved: "Đã tạo danh thiếp. Mở file .vcf để lưu vào danh bạ.",
      toast_error: "Không tạo được danh thiếp. Vui lòng thử lại.",
      footer_rights: "Bảo lưu mọi quyền."
    },
    en: {
      meta_title: "Tâm Nguyễn — Live Sound Engineer | Professional Sound Solutions",
      meta_description: "Tâm Nguyễn — Live Sound Engineer. Professional audio solutions for live events, wireless systems and multitrack recording.",
      skip: "Skip to main content",
      lang_label: "Choose language",
      home_label: "Back to top",
      hero_desc: "Professional audio solutions for live events, wireless systems and multitrack recording.",
      save_contact: "Save Contact",
      save_contact_aria: "Download digital business card (.vcf) to save to your contacts",
      call: "Call",
      call_aria: "Call Tâm Nguyễn",
      avatar_alt: "Portrait of Tâm Nguyễn",
      avatar_placeholder_alt: "Placeholder portrait: TN monogram",
      contact_heading: "Contact",
      contact_phone: "Phone",
      contact_facebook: "Facebook",
      contact_facebook_sub: "Message on Messenger",
      contact_zalo: "Zalo",
      contact_zalo_sub: "Chat on Zalo",
      contact_youtube: "YouTube",
      contact_youtube_sub: "Watch the channel",
      contact_email: "Email",
      new_tab: "(opens in a new tab)",
      about_heading: "About Me",
      about_body: "I work in live sound, focusing on audio system operation, FOH and monitor mixing, wireless microphone systems, IEM and multitrack recording. My goal is practical, reliable solutions tailored to the needs of each show.",
      expertise_heading: "Core Expertise",
      projects_heading: "Selected Projects",
      project_role: "Role",
      project_view: "View details",
      resources_title: "Resources & Downloads",
      resources_hint: "Software, tools and documents on Google Drive",
      resources_dialog_title: "Resources & Downloads",
      resources_dialog_note: "Links open Google Drive in a new tab. Nothing is downloaded to your device automatically.",
      resources_all: "Open the full Google Drive folder",
      close: "Close",
      toast_saved: "Contact card created. Open the .vcf file to add it to your contacts.",
      toast_error: "Couldn't create the contact card. Please try again.",
      footer_rights: "All rights reserved."
    }
  }
};
