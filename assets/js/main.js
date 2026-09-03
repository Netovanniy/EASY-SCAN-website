/* EASY SCAN — site interactions */
(function () {
  "use strict";

  /* Enable JS-only visual states (scroll reveal). Without JS everything stays visible. */
  document.documentElement.classList.add("js");

  /* ---- Mobile taplink intro ----
     Shown by an inline <head> script on the phone-width homepage. Dismiss on
     "Enter the site" or when any link inside is tapped; remember for the session. */
  var taplink = document.querySelector(".taplink");
  if (taplink) {
    var closeTaplink = function () {
      document.documentElement.classList.remove("taplink-on");
      try { sessionStorage.setItem("es-taplink", "1"); } catch (e) {}
    };
    var enterBtn = taplink.querySelector("[data-taplink-enter]");
    if (enterBtn) enterBtn.addEventListener("click", closeTaplink);
    taplink.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        try { sessionStorage.setItem("es-taplink", "1"); } catch (e) {}
      });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && document.documentElement.classList.contains("taplink-on")) closeTaplink();
    });
  }

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

  /* Mobile nav — collapsible sub-menus (Services, Language) */
  document.querySelectorAll(".m-sub-toggle").forEach(function (subToggle) {
    var subMenu = subToggle.nextElementSibling;
    if (!subMenu) return;
    subToggle.addEventListener("click", function () {
      var open = subToggle.getAttribute("aria-expanded") === "true";
      subToggle.setAttribute("aria-expanded", open ? "false" : "true");
      subMenu.classList.toggle("is-open", !open);
    });
  });
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
     Posts to a Google Apps Script web app that (1) emails hello@easyscan.asia
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
        "mailto:hello@easyscan.asia" +
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

  /* ---- Pricing page: area calculator + rate steppers ---- */
  if (document.getElementById("raiRange")) {
    (function () {
      /* -------------------------------------------------------------------
         Central pricing config — the only place to edit rates/multipliers.

         The estimate is:  base area price  ×  terrain multiplier  ×  vegetation multiplier
         evaluated per scan type, so LiDAR and Drone can diverge later.

         Current state: the LiDAR terrain multipliers (1 / 1.25 / 1.5) reproduce
         the former 10,000 / 12,500 / 15,000 THB-per-rai rates exactly. Every
         other multiplier is a configurable placeholder left at 1 (no effect
         yet) — vegetation, Drone terrain/vegetation, and the whole `both`
         block (which currently just sums the LiDAR and Drone estimates).
         Change the numbers here when the new pricing is agreed; nothing else
         needs touching.
      ------------------------------------------------------------------- */
      var PRICING = {
        lidar: {
          basePerRai: 10000,                          // THB per rai — current production rate
          terrain:    { flat: 1, sloped: 1.25, steep: 1.5 }, // = old 10,000 / 12,500 / 15,000 per rai
          vegetation: { clear: 1, light: 1, dense: 1 }       // placeholder — not priced in yet
        },
        drone: {
          brackets: [                                 // current production tiers, flat per plot
            { max: 1,  price: 10000, label: "up to 1 rai" },
            { max: 3,  price: 15000, label: "1–3 rai" },
            { max: 5,  price: 20000, label: "3–5 rai" },
            { max: 10, price: 30000, label: "5–10 rai" }
          ],
          terrain:    { flat: 1, sloped: 1, steep: 1 },      // placeholder — not priced in yet
          vegetation: { clear: 1, light: 1, dense: 1 }       // placeholder — not priced in yet
        },
        both: {                                       // LiDAR + drone on the same survey
          terrain:    { flat: 1, sloped: 1, steep: 1 },      // placeholder — applied on top of the combined total
          vegetation: { clear: 1, light: 1, dense: 1 }       // placeholder
        }
      };

      var TERRAIN_LABEL    = { flat: "flat", sloped: "sloped", steep: "steep" };
      var VEGETATION_LABEL = { clear: "clear", light: "light", dense: "dense" };

      function droneBracket(rai) {
        var b = PRICING.drone.brackets;
        for (var i = 0; i < b.length; i++) {
          if (rai <= b[i].max) return b[i];
        }
        return null;
      }

      /* per-scan-type estimate; returns null when it needs a manual quote */
      function lidarEstimate(rai, terrain, veg) {
        var c = PRICING.lidar;
        return rai * c.basePerRai * (c.terrain[terrain] || 1) * (c.vegetation[veg] || 1);
      }
      function droneEstimate(rai, terrain, veg) {
        var c = PRICING.drone, b = droneBracket(rai);
        if (!b) return null;
        return b.price * (c.terrain[terrain] || 1) * (c.vegetation[veg] || 1);
      }

      var state = { scanType: "lidar", terrain: "flat", vegetation: "clear", landSize: 1 };
      var raiRange = document.getElementById("raiRange");
      var raiValue = document.getElementById("raiValue");
      var sqmValue = document.getElementById("sqmValue");
      var priceValue = document.getElementById("priceValue");
      var priceNote = document.getElementById("priceNote");
      var serviceBtns = document.querySelectorAll(".seg-btn[data-service]");
      var terrainBtns = document.querySelectorAll(".seg-btn[data-terrain]");
      var vegetationBtns = document.querySelectorAll(".seg-btn[data-vegetation]");

      function fmt(n) { return new Intl.NumberFormat("en-US").format(Math.round(n)); }
      function pulse() {
        priceValue.classList.add("pulse");
        window.setTimeout(function () { priceValue.classList.remove("pulse"); }, 120);
      }
      function render() {
        var rai = state.landSize, t = state.terrain, v = state.vegetation;
        raiValue.textContent = rai;
        sqmValue.textContent = fmt(rai * 1600);

        var tail = " · " + TERRAIN_LABEL[t] + " · " + VEGETATION_LABEL[v] + " vegetation";
        var price, note;

        if (state.scanType === "lidar") {
          price = lidarEstimate(rai, t, v);
          note = fmt(price / rai) + " THB / rai" + tail;
        } else if (state.scanType === "drone") {
          var bracket = droneBracket(rai);
          price = droneEstimate(rai, t, v);
          note = bracket ? "Drone · " + bracket.label + tail
                         : "Above 10 rai — multi-plot pricing, contact us";
        } else { // both — LiDAR + drone on the same survey
          var d = droneEstimate(rai, t, v);
          if (d === null) {
            price = null;
            note = "Above 10 rai — multi-plot pricing, contact us";
          } else {
            var bm = PRICING.both;
            price = (lidarEstimate(rai, t, v) + d) *
                    (bm.terrain[t] || 1) * (bm.vegetation[v] || 1);
            note = "LiDAR + drone" + tail;
          }
        }

        priceValue.textContent = price === null ? "Custom quote" : fmt(price) + " THB";
        priceNote.textContent = note;
        pulse();
      }

      /* wire a segmented button group to a state key; `attr` is its data-* name */
      function wireSegment(btns, attr, stateKey, afterSelect) {
        btns.forEach(function (btn) {
          btn.addEventListener("click", function () {
            btns.forEach(function (b) { b.classList.remove("active"); });
            btn.classList.add("active");
            state[stateKey] = btn.getAttribute("data-" + attr);
            if (afterSelect) afterSelect();
            render();
          });
        });
      }
      wireSegment(serviceBtns, "service", "scanType");
      wireSegment(terrainBtns, "terrain", "terrain");
      wireSegment(vegetationBtns, "vegetation", "vegetation");

      raiRange.addEventListener("input", function () {
        state.landSize = parseFloat(raiRange.value);
        render();
      });
      render();

      function stepper(minusId, plusId, qtyId, priceId, base, step, min, max) {
        var qtyEl = document.getElementById(qtyId);
        var priceEl = document.getElementById(priceId);
        var qty = min;
        function draw() {
          qtyEl.textContent = qty;
          priceEl.textContent = fmt(base + (qty - min) * step) + " THB";
        }
        document.getElementById(minusId).addEventListener("click", function () {
          if (qty > min) { qty -= 1; draw(); }
        });
        document.getElementById(plusId).addEventListener("click", function () {
          if (qty < max) { qty += 1; draw(); }
        });
        draw();
      }
      stepper("panoMinus", "panoPlus", "panoQty", "panoPrice", 1500, 500, 1, 20);
      stepper("consultMinus", "consultPlus", "consultQty", "consultPrice", 5000, 3000, 2, 12);
    })();
  }

  /* ---- Footer year ---- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
