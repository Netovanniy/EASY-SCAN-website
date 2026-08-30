/* EASY SCAN — site interactions */
(function () {
  "use strict";

  /* Enable JS-only visual states (scroll reveal). Without JS everything stays visible. */
  document.documentElement.classList.add("js");

  /* ---- Hero video: clean poster fallback when autoplay is blocked ----
     iOS blocks muted-inline autoplay under Low Power Mode / Reduce Motion / Low
     Data Mode and shows its own play-button overlay. Detect that and swap to the
     poster image (.is-poster) so no play button is ever shown. */
  var heroVideo = document.querySelector(".hero__video");
  if (heroVideo) {
    var heroMedia = heroVideo.closest(".hero__media") || heroVideo.parentNode;
    var heroPoster = function () {
      if (heroMedia) heroMedia.classList.add("is-poster");
      heroVideo.removeAttribute("controls");
    };
    var playAttempt = heroVideo.play();
    if (playAttempt && typeof playAttempt.then === "function") {
      playAttempt.catch(heroPoster);
    }
    setTimeout(function () {
      if (heroVideo.paused) heroPoster();
    }, 1400);
  }

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

  /* Mobile nav — collapsible Services sub-menu */
  var subToggle = document.querySelector(".m-sub-toggle");
  var subMenu = subToggle && subToggle.nextElementSibling;
  if (subToggle && subMenu) {
    subToggle.addEventListener("click", function () {
      var open = subToggle.getAttribute("aria-expanded") === "true";
      subToggle.setAttribute("aria-expanded", open ? "false" : "true");
      subMenu.classList.toggle("is-open", !open);
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

  /* ---- Contact form ----
     Posts to a Google Apps Script web app that (1) emails lidareasyscan@gmail.com
     and (2) appends the enquiry to a Google Sheet. The deployment URL lives in the
     form's data-endpoint attribute (contact.html). If it is missing, or the request
     fails, we fall back to opening the visitor's mail app with the details filled in. */
  var form = document.querySelector("[data-contact-form]");
  if (form) {
    var endpoint = (form.getAttribute("data-endpoint") || "").trim();

    var mailtoFallback = function (name, email, loc, area, msg) {
      var bodyLines = [
        "Name: " + name,
        "Email: " + email,
        loc ? "Land location: " + loc : "",
        area ? "Approx. area: " + area : "",
        "",
        msg
      ].filter(Boolean).join("\n");
      window.location.href =
        "mailto:lidareasyscan@gmail.com" +
        "?subject=" + encodeURIComponent("Website enquiry — " + name) +
        "&body=" + encodeURIComponent(bodyLines);
    };

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = form.querySelector(".form__status");
      var btn = form.querySelector("[type=submit]");
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

      if (!endpoint) {
        if (status) status.textContent = "Opening your email app…";
        mailtoFallback(name, email, loc, area, msg);
        return;
      }

      if (btn) btn.disabled = true;
      if (status) status.textContent = "Sending…";

      fetch(endpoint, { method: "POST", body: data })
        .then(function (r) {
          return r.json().catch(function () { return { ok: r.ok }; });
        })
        .then(function (res) {
          if (!res || !res.ok) throw new Error("bad response");
          form.reset();
          if (status) status.textContent = "Thank you — your message has been sent.";
        })
        .catch(function () {
          if (status) {
            status.textContent =
              "We could not send it automatically — opening your email app instead.";
          }
          mailtoFallback(name, email, loc, area, msg);
        })
        .finally(function () {
          if (btn) btn.disabled = false;
        });
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
