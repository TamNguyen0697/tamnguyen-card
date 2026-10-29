/* =========================================================================
   Tâm Nguyễn — Personal card
   Toàn bộ nội dung lấy từ config.js. Không cần sửa file này khi đổi thông tin.
   ========================================================================= */
(function () {
  "use strict";

  var C = window.SITE_CONFIG;
  if (!C) {
    console.error("config.js chưa được tải hoặc bị lỗi cú pháp.");
    return;
  }

  document.documentElement.classList.add("js");

  /* ---------- Icons (Lucide, MIT) ---------- */
  var ICONS = {
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
    youtube: '<path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/>',
    userPlus: '<path d="M2 21a8 8 0 0 1 13.292-6"/><circle cx="10" cy="8" r="5"/><path d="M19 16v6"/><path d="M22 19h-6"/>',
    folder: '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>',
    arrowUpRight: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
    chevronRight: '<path d="m9 18 6-6-6-6"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    mic: '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><path d="M12 19v3"/>',
    sliders: '<path d="M4 21v-7"/><path d="M4 10V3"/><path d="M12 21v-9"/><path d="M12 8V3"/><path d="M20 21v-5"/><path d="M20 12V3"/><path d="M2 14h4"/><path d="M10 8h4"/><path d="M18 16h4"/>',
    radio: '<path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"/>',
    headphones: '<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>',
    layers: '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
    speaker: '<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M12 6h.01"/><circle cx="12" cy="14" r="4"/><path d="M12 14h.01"/>',
    package: '<path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"/><path d="m7.5 4.27 9 5.15"/>',
    waveform: '<path d="M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"/>',
    file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>'
  };

  function icon(name) {
    return '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + (ICONS[name] || "") + "</svg>";
  }

  /* ---------- Helpers ---------- */
  var PLACEHOLDER = /^(YOUR_|GOOGLE_DRIVE_URL|SITE_URL)/i;
  function isSet(v) {
    if (typeof v !== "string") return false;
    v = v.trim();
    return v !== "" && v !== "#" && !PLACEHOLDER.test(v);
  }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        var val = attrs[k];
        if (val == null || val === false) return;
        if (k === "text") node.textContent = val;
        else if (k === "html") node.innerHTML = val; // chỉ dùng cho icon nội bộ
        else node.setAttribute(k, val);
      });
    }
    (children || []).forEach(function (c) { if (c) node.appendChild(c); });
    return node;
  }

  function safeStorage(method, key, value) {
    try { return method === "get" ? localStorage.getItem(key) : localStorage.setItem(key, value); }
    catch (e) { return null; }
  }

  /* ---------- Language ---------- */
  var LANGS = ["vi", "en"];
  var lang = (function () {
    var q = new URLSearchParams(location.search).get("lang");
    if (LANGS.indexOf(q) > -1) return q;
    var saved = safeStorage("get", "lang");
    if (LANGS.indexOf(saved) > -1) return saved;
    return LANGS.indexOf(C.defaultLanguage) > -1 ? C.defaultLanguage : "vi";
  })();

  function t(key) {
    var dict = C.i18n[lang] || {};
    if (dict[key] != null) return dict[key];
    return (C.i18n.vi && C.i18n.vi[key]) || "";
  }
  function pick(v) {
    if (v == null) return "";
    if (typeof v === "string") return v;
    return v[lang] || v.vi || v.en || "";
  }

  /* ---------- Theme ---------- */
  function applyTheme() {
    var th = C.theme || {};
    var root = document.documentElement.style;
    if (isSet(th.accent)) root.setProperty("--accent", th.accent);
    if (isSet(th.background)) {
      root.setProperty("--bg", th.background);
      var meta = $('meta[name="theme-color"]');
      if (meta) meta.setAttribute("content", th.background);
    }
  }

  /* ---------- Static bindings ---------- */
  var p = C.profile || {};
  var c = C.contact || {};

  function cfgValue(key) {
    if (key === "phoneDisplay") return c.phoneDisplay || "";
    return p[key] || "";
  }

  function applyStatic() {
    $$("[data-cfg]").forEach(function (node) { node.textContent = cfgValue(node.getAttribute("data-cfg")); });
    $$("[data-i18n]").forEach(function (node) { node.textContent = t(node.getAttribute("data-i18n")); });
    $$("[data-i18n-aria]").forEach(function (node) { node.setAttribute("aria-label", t(node.getAttribute("data-i18n-aria"))); });
    $$("[data-icon]").forEach(function (node) {
      if (!node.firstChild) node.innerHTML = icon(node.getAttribute("data-icon"));
    });

    var hasPhone = isSet(c.phoneE164);
    $$('[data-role="call"]').forEach(function (a) {
      a.hidden = !hasPhone;
      if (hasPhone) a.setAttribute("href", "tel:" + c.phoneE164.replace(/[^\d+]/g, ""));
    });

    var img = $("#avatar");
    var isPlaceholder = /placeholder/i.test(p.avatar || "");
    if (isSet(p.avatar) && img.getAttribute("src") !== p.avatar) img.setAttribute("src", p.avatar);
    img.alt = isPlaceholder ? t("avatar_placeholder_alt") : t("avatar_alt");

    document.documentElement.lang = lang;
    document.title = t("meta_title");
    var desc = $('meta[name="description"]');
    if (desc) desc.setAttribute("content", t("meta_description"));

    $$(".lang-switch button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });

    $("#year").textContent = String(new Date().getFullYear());
  }

  /* ---------- Contact links ---------- */
  function contactItem(o) {
    var external = o.external !== false;
    var label = t(o.labelKey);
    var a = el("a", {
      class: "contact-item",
      href: o.href,
      target: external ? "_blank" : null,
      rel: external ? "noopener noreferrer" : null,
      "aria-label": label + ": " + o.value + (external ? " " + t("new_tab") : "")
    }, [
      el("span", { class: "contact-icon", html: o.iconHtml || icon(o.icon) }),
      el("span", { class: "contact-text" }, [
        el("span", { class: "contact-label", text: label }),
        el("span", { class: "contact-value", text: o.value })
      ]),
      el("span", { class: "contact-arrow", html: icon(external ? "arrowUpRight" : "chevronRight") })
    ]);
    return el("li", null, [a]);
  }

  function handleFromUrl(url) {
    try {
      var u = new URL(url);
      var parts = u.pathname.split("/").filter(Boolean);
      // ưu tiên phần "@tên-kênh" (vd. /@thanhtam0697/videos)
      var handle = parts.filter(function (s) { return s.charAt(0) === "@"; })[0];
      if (handle) return handle;
      return parts.length ? "@" + parts[parts.length - 1] : u.hostname;
    } catch (e) { return url; }
  }

  function renderContacts() {
    var list = $("#contact-list");
    list.textContent = "";
    // Số điện thoại chỉ hiển thị ở nút "Gọi" phần hồ sơ, không lặp lại ở đây.
    var items = [];

    if (isSet(c.zalo)) items.push({
      labelKey: "contact_zalo", href: c.zalo, value: t("contact_zalo_sub"),
      iconHtml: '<span class="zalo-mark" aria-hidden="true">Zalo</span>'
    });
    if (isSet(c.facebook)) items.push({ labelKey: "contact_facebook", icon: "facebook", href: c.facebook, value: t("contact_facebook_sub") });
    if (isSet(c.youtube)) items.push({ labelKey: "contact_youtube", icon: "youtube", href: c.youtube, value: handleFromUrl(c.youtube) });
    if (isSet(c.email)) items.push({
      labelKey: "contact_email", icon: "mail", external: false,
      href: "mailto:" + c.email.trim(), value: c.email.trim()
    });

    items.forEach(function (o) { list.appendChild(contactItem(o)); });
    $("#contact").hidden = items.length === 0;
  }

  /* ---------- Expertise ---------- */
  function renderExpertise() {
    var list = $("#expertise-list");
    list.textContent = "";
    (C.expertise || []).forEach(function (x) {
      list.appendChild(el("li", { class: "expertise-card" }, [
        el("span", { html: icon(x.icon), "aria-hidden": "true" }),
        el("span", null, [
          el("span", { class: "expertise-title", text: pick(x.title) }),
          x.caption ? el("span", { class: "expertise-caption", text: pick(x.caption) }) : null
        ])
      ]));
    });
    $("#expertise").hidden = !(C.expertise && C.expertise.length);
  }

  /* ---------- Work photo ---------- */
  function renderWorkPhoto() {
    var wp = p.workPhoto || {};
    var fig = $("#work-photo");
    if (!isSet(wp.src)) { fig.hidden = true; return; }
    var img = $("#work-photo-img");
    if (img.getAttribute("src") !== wp.src) {
      if (isSet(wp.srcSmall)) {
        img.setAttribute("srcset", wp.srcSmall + " 960w, " + wp.src + " 1600w");
        img.setAttribute("sizes", "(min-width: 880px) 480px, 100vw");
      }
      img.setAttribute("src", wp.src);
    }
    img.alt = pick(wp.alt);
    var cap = $("#work-photo-caption");
    cap.textContent = pick(wp.caption);
    cap.hidden = !pick(wp.caption);
    fig.hidden = false;
  }

  /* ---------- Projects ---------- */
  function renderProjects() {
    var projects = (C.projects || []).filter(function (x) { return x && pick(x.name); });
    var list = $("#project-list");
    list.textContent = "";
    projects.forEach(function (x) {
      var body = el("div", { class: "project-body" }, [
        pick(x.role) ? el("p", { class: "project-role" }, [
          el("span", { class: "visually-hidden", text: t("project_role") + ": " }),
          document.createTextNode(pick(x.role))
        ]) : null,
        el("h3", { class: "project-name", text: pick(x.name) }),
        pick(x.description) ? el("p", { class: "project-desc", text: pick(x.description) }) : null,
        isSet(x.url) ? el("a", {
          class: "project-link", href: x.url, target: "_blank", rel: "noopener noreferrer",
          "aria-label": t("project_view") + ": " + pick(x.name) + " " + t("new_tab"),
          html: "<span></span>" + icon("arrowUpRight")
        }) : null
      ]);
      var link = body.querySelector(".project-link span");
      if (link) link.textContent = t("project_view");
      list.appendChild(el("li", { class: "project-card" }, [
        isSet(x.image) ? el("img", { src: x.image, alt: pick(x.imageAlt) || pick(x.name), loading: "lazy", decoding: "async", width: "800", height: "500" }) : null,
        body
      ]));
    });
    $("#projects").hidden = projects.length === 0;
  }

  /* ---------- Resources ---------- */
  var dialog = $("#resources-dialog");

  function renderResources() {
    var slot = $("#resources-slot");
    var section = $("#resources");
    slot.textContent = "";
    var groups = (C.resources || []).filter(function (r) { return r && isSet(r.url); });
    var drive = isSet(C.googleDriveUrl) ? C.googleDriveUrl : "";

    if (!groups.length && !drive) { section.hidden = true; return; }
    section.hidden = false;
    section.setAttribute("aria-label", t("resources_title"));

    var inner = [
      el("span", { class: "contact-icon", html: icon("folder") }),
      el("span", { class: "contact-text" }, [
        el("span", { class: "contact-label", text: t("resources_title") }),
        el("span", { class: "contact-value", text: t("resources_hint") })
      ]),
      el("span", { class: "contact-arrow", html: icon(groups.length ? "chevronRight" : "arrowUpRight") })
    ];

    var canDialog = groups.length && dialog && typeof dialog.showModal === "function";
    if (canDialog) {
      var btn = el("button", { type: "button", class: "resources-trigger", "aria-haspopup": "dialog" }, inner);
      btn.addEventListener("click", function () { openResources(groups, drive); });
      slot.appendChild(btn);
    } else {
      // Chỉ có một link Drive (hoặc trình duyệt không hỗ trợ dialog): mở thẳng.
      var target = drive || groups[0].url;
      slot.appendChild(el("a", {
        class: "resources-trigger", href: target, target: "_blank", rel: "noopener noreferrer",
        "aria-label": t("resources_title") + " " + t("new_tab")
      }, inner));
    }
  }

  function openResources(groups, drive) {
    var list = $("#resource-list");
    list.textContent = "";
    groups.forEach(function (r) {
      list.appendChild(resourceLink(r.url, pick(r.title), pick(r.description), r.icon || "folder"));
    });
    if (drive) {
      var li = resourceLink(drive, t("resources_all"), "Google Drive", "folder");
      li.firstChild.classList.add("is-main");
      list.appendChild(li);
    }
    dialog.showModal();
  }

  function resourceLink(url, title, desc, iconName) {
    return el("li", null, [el("a", {
      class: "contact-item", href: url, target: "_blank", rel: "noopener noreferrer",
      "aria-label": title + " " + t("new_tab")
    }, [
      el("span", { class: "contact-icon", html: icon(iconName) }),
      el("span", { class: "contact-text" }, [
        el("span", { class: "contact-label", text: title }),
        desc ? el("span", { class: "contact-value", text: desc }) : null
      ]),
      el("span", { class: "contact-arrow", html: icon("arrowUpRight") })
    ])]);
  }

  if (dialog) {
    dialog.addEventListener("click", function (e) {
      // bấm ra ngoài khung (vào backdrop) để đóng
      if (e.target === dialog) dialog.close();
    });
    $('[data-action="close-dialog"]', dialog).addEventListener("click", function () { dialog.close(); });
  }

  /* ---------- vCard ---------- */
  function vEsc(s) {
    return String(s).replace(/\\/g, "\\\\").replace(/\r?\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;");
  }

  function siteUrl() {
    if (isSet(p.siteUrl)) return p.siteUrl.trim();
    if (/^https?:$/.test(location.protocol) && !/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)) {
      return location.origin + location.pathname.replace(/index\.html$/, "");
    }
    return "";
  }

  function buildVCard() {
    var lines = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "N:" + vEsc(p.familyName || "") + ";" + vEsc(p.givenName || p.name || "") + ";;;",
      "FN:" + vEsc(p.name || ""),
    ];
    if (p.brand) lines.push("ORG:" + vEsc(p.brand));
    if (p.title) lines.push("TITLE:" + vEsc(p.title));
    if (isSet(c.phoneE164)) lines.push("TEL;TYPE=CELL,VOICE:" + c.phoneE164.replace(/[^\d+]/g, ""));
    if (isSet(c.email)) lines.push("EMAIL;TYPE=INTERNET:" + c.email.trim());
    var url = siteUrl();
    if (url) lines.push("URL:" + url);
    if (isSet(c.youtube)) lines.push("X-SOCIALPROFILE;TYPE=youtube:" + c.youtube);
    if (isSet(c.facebook)) lines.push("X-SOCIALPROFILE;TYPE=facebook:" + c.facebook);
    lines.push("END:VCARD");
    return lines.join("\r\n") + "\r\n";
  }

  function fileSlug(name) {
    return (name || "contact").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d").replace(/Đ/g, "D").replace(/[^A-Za-z0-9]+/g, "-").replace(/^-|-$/g, "") || "contact";
  }

  function saveContact() {
    try {
      var blob = new Blob([buildVCard()], { type: "text/vcard;charset=utf-8" });
      var href = URL.createObjectURL(blob);
      var a = el("a", { href: href, download: fileSlug(p.name) + ".vcf" });
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(function () { URL.revokeObjectURL(href); }, 4000);
      toast(t("toast_saved"));
    } catch (e) {
      console.error(e);
      toast(t("toast_error"));
    }
  }

  /* ---------- Toast ---------- */
  var toastTimer;
  function toast(msg) {
    var node = $("#toast");
    node.textContent = msg;
    // reflow để transition chạy lại
    void node.offsetWidth;
    node.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      node.classList.remove("is-visible");
      setTimeout(function () { node.textContent = ""; }, 300);
    }, 3600);
  }

  /* ---------- Render ---------- */
  function render() {
    applyStatic();
    renderContacts();
    renderExpertise();
    renderWorkPhoto();
    renderProjects();
    renderResources();
  }

  function setLang(next) {
    if (LANGS.indexOf(next) < 0 || next === lang) return;
    lang = next;
    safeStorage("set", "lang", lang);
    render();
  }

  /* ---------- Events ---------- */
  $$(".lang-switch button").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
  });
  $$('[data-action="save-contact"]').forEach(function (b) { b.addEventListener("click", saveContact); });

  // Header border khi cuộn
  var header = $("#site-header");
  function onScroll() { header.classList.toggle("is-scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });

  // Reveal + thanh thao tác nhanh trên mobile
  if ("IntersectionObserver" in window) {
    var revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); revealObs.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    $$(".reveal").forEach(function (n) { revealObs.observe(n); });

    var quickbar = $("#quickbar");
    var actions = $("#hero-actions");
    new IntersectionObserver(function (entries) {
      var show = !entries[0].isIntersecting && entries[0].boundingClientRect.top < 0;
      quickbar.classList.toggle("is-visible", show);
      document.body.classList.toggle("has-quickbar", show);
      if (show) quickbar.removeAttribute("inert"); else quickbar.setAttribute("inert", "");
    }).observe(actions);
  } else {
    $$(".reveal").forEach(function (n) { n.classList.add("is-visible"); });
  }

  applyTheme();
  render();
  onScroll();
})();
