/* EASY SCAN — site interactions */
(function () {
  "use strict";

  /* Enable JS-only visual states (scroll reveal). Without JS everything stays visible. */
  document.documentElement.classList.add("js");

  /* ---- Header scroll state ---- */
  var header = document.querySelector(".site-header");
  var onScroll = function () {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- Mobile nav ---- */
  var toggle = document.querySelector(".nav-toggle");
  var body = document.body;
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.querySelectorAll(".mobile-nav a").forEach(function (a) {
      a.addEventListener("click", function () {
        body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
  window.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && body.classList.contains("nav-open")) {
      body.classList.remove("nav-open");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    }
  });

  /* ---- Scroll reveal ---- */
  var revealEls = document.querySelectorAll(".reveal");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ---- Contact form (no backend — opens mail client) ---- */
  var form = document.querySelector("[data-contact-form]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = form.querySelector(".form__status");
      var data = new FormData(form);
      var name = (data.get("name") || "").toString().trim();
      var email = (data.get("email") || "").toString().trim();
      var loc = (data.get("location") || "").toString().trim();
      var area = (data.get("area") || "").toString().trim();
      var msg = (data.get("message") || "").toString().trim();
      if (!name || !email) {
        if (status) status.textContent = "Please add your name and email.";
        return;
      }
      var bodyLines = [
        "Name: " + name,
        "Email: " + email,
        loc ? "Land location: " + loc : "",
        area ? "Approx. area: " + area : "",
        "",
        msg
      ].filter(Boolean).join("\n");
      var href =
        "mailto:lidareasyscan@gmail.com" +
        "?subject=" + encodeURIComponent("Website enquiry — " + name) +
        "&body=" + encodeURIComponent(bodyLines);
      window.location.href = href;
      if (status) status.textContent = "Opening your email app…";
      form.reset();
    });
  }

  /* ---- Scan cards: load Polycam embed in place on click ---- */
  document.querySelectorAll(".scan-card[data-embed]").forEach(function (card) {
    var media = card.querySelector(".scan-card__media");
    if (!media) return;
    media.addEventListener("click", function () {
      if (card.classList.contains("is-live")) return;
      var frame = document.createElement("div");
      frame.className = "scan-card__media";
      var iframe = document.createElement("iframe");
      iframe.src = card.getAttribute("data-embed");
      iframe.title = "Polycam capture viewer";
      iframe.loading = "lazy";
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allow", "fullscreen; xr-spatial-tracking; accelerometer; gyroscope");
      iframe.setAttribute("allowfullscreen", "");
      frame.appendChild(iframe);
      media.replaceWith(frame);
      card.classList.add("is-live");
    });
  });

  /* ---- Footer year ---- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
