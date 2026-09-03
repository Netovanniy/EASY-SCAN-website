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

  /* ---- Pricing page: site-capture calculator ----
     Estimates the cost of digitally capturing the land (LiDAR / drone / both).
     Add-on services below the calculator are NOT part of this estimate. */
  if (document.getElementById("raiRange")) {
    (function () {
      /* -------------------------------------------------------------------
         Site-capture pricing config — the only place to edit the numbers.

         Pricing is per project, not per rai: sparse area-base tables plus
         terrain / vegetation multipliers, with linear interpolation between
         the tabulated sizes. Projects above 20 rai are a manual quote — the
         formula is never extrapolated. Multipliers are internal; the UI
         never shows them.
      ------------------------------------------------------------------- */
      var PRICING = {
        lidar: {
          area: { 0.5: 10000, 1: 15000, 2: 25000, 3: 34000, 4: 42000, 5: 50000,
                  6: 58000, 7: 65000, 8: 72000, 9: 79000, 10: 85000,
                  12: 99000, 15: 118000, 20: 145000 },
          terrain:    { flat: 1, sloped: 1.15, steep: 1.30 },
          vegetation: { clear: 1, light: 1.15, dense: 1.35 }
        },
        drone: {
          area: { 0.5: 12000, 1: 12000, 2: 13000, 3: 14000, 5: 15000,
                  10: 20000, 15: 24000, 20: 28000 },
          terrain: { flat: 1, sloped: 1, steep: 1.10 }
          /* vegetation does not affect drone pricing */
        },
        both: { droneMultiplier: 0.70 }   /* BOTH = LiDAR + 70% of the drone component */
      };

      var MAX_RAI = 20;
      var SQM_PER_RAI = 1600;

      var TERRAIN_LABEL   = { flat: "flat", sloped: "sloped", steep: "steep" };
      var VEGETATION_LABEL = { clear: "clear", light: "light", dense: "dense" };
      var TERRAIN_NAME    = { flat: "Flat", sloped: "Sloped", steep: "Steep" };
      var VEGETATION_NAME = { clear: "Clear", light: "Light", dense: "Dense" };
      var TYPE_NAME       = { lidar: "LiDAR", drone: "Drone", both: "Both" };
      var TYPE_CONTEXT    = {
        lidar: "Detailed ground and terrain capture.",
        drone: "Fast aerial mapping and 3D reconstruction.",
        both:  "Ground LiDAR plus aerial drone capture."
      };

      /* --- calculation ------------------------------------------------- */
      var nf = new Intl.NumberFormat("en-US");

      /* linear interpolation over a sparse { size: price } table */
      function getAreaBasePrice(table, area) {
        var sizes = Object.keys(table).map(parseFloat).sort(function (a, b) { return a - b; });
        if (area <= sizes[0]) return table[sizes[0]];
        if (area >= sizes[sizes.length - 1]) return table[sizes[sizes.length - 1]];
        for (var i = 0; i < sizes.length - 1; i++) {
          var a1 = sizes[i], a2 = sizes[i + 1];
          if (area >= a1 && area <= a2) {
            var p1 = table[a1], p2 = table[a2];
            return p1 + ((area - a1) / (a2 - a1)) * (p2 - p1);
          }
        }
        return table[sizes[sizes.length - 1]];
      }
      function calculateLidarRaw(area, terrain, veg) {
        var c = PRICING.lidar;
        return getAreaBasePrice(c.area, area) * c.terrain[terrain] * c.vegetation[veg];
      }
      function calculateDroneRaw(area, terrain) {
        var c = PRICING.drone;
        return getAreaBasePrice(c.area, area) * c.terrain[terrain]; /* vegetation always 1 */
      }
      function calculateBothRaw(area, terrain, veg) {
        return calculateLidarRaw(area, terrain, veg) +
               calculateDroneRaw(area, terrain) * PRICING.both.droneMultiplier;
      }
      function roundEstimate(price) { return Math.round(price / 1000) * 1000; }
      function formatPrice(n) { return nf.format(n) + " THB"; }
      function fmtRai(n) { return (n % 1 === 0) ? String(n) : n.toFixed(1); }

      /* --- state + DOM ---------------------------------------------------- */
      var state = { scanType: "lidar", terrain: "flat", vegetation: "clear", landSize: 1, oversize: false };

      var raiRange = document.getElementById("raiRange");
      var raiReadout = document.getElementById("raiReadout");
      var priceValue = document.getElementById("priceValue");
      var priceNote = document.getElementById("priceNote");
      var typeNote = document.getElementById("typeNote");
      var serviceBtns = document.querySelectorAll(".seg-btn[data-service]");
      var terrainBtns = document.querySelectorAll(".seg-btn[data-terrain]");
      var vegetationBtns = document.querySelectorAll(".seg-btn[data-vegetation]");
      var previewImgs = document.querySelectorAll("[data-preview]");
      var metaTerrain = document.getElementById("metaTerrain");
      var metaVegetation = document.getElementById("metaVegetation");
      var metaType = document.getElementById("metaType");

      function pulse() {
        priceValue.classList.add("pulse");
        window.setTimeout(function () { priceValue.classList.remove("pulse"); }, 200);
      }

      function updatePreview() {
        var key = state.terrain + "-" + state.vegetation;
        previewImgs.forEach(function (im) {
          im.classList.toggle("is-active", im.getAttribute("data-preview") === key);
        });
        if (metaTerrain) metaTerrain.textContent = TERRAIN_NAME[state.terrain];
        if (metaVegetation) metaVegetation.textContent = VEGETATION_NAME[state.vegetation];
        if (metaType) metaType.textContent = TYPE_NAME[state.scanType];
      }

      function currentRaw() {
        var a = state.landSize, t = state.terrain, v = state.vegetation;
        if (state.scanType === "lidar") return calculateLidarRaw(a, t, v);
        if (state.scanType === "drone") return calculateDroneRaw(a, t);
        return calculateBothRaw(a, t, v);
      }

      function render() {
        var t = state.terrain, v = state.vegetation;

        if (raiReadout) {
          raiReadout.innerHTML = state.oversize
            ? "20+ rai"
            : fmtRai(state.landSize) + " rai <span class=\"sub\">(&asymp; " +
              nf.format(state.landSize * SQM_PER_RAI) + " m²)</span>";
        }
        if (typeNote) typeNote.textContent = TYPE_CONTEXT[state.scanType];

        if (state.oversize) {
          priceValue.textContent = "Custom quote";
          priceNote.textContent = "Large-scale site · individual estimate required";
        } else {
          priceValue.textContent = formatPrice(roundEstimate(currentRaw()));
          priceNote.textContent = fmtRai(state.landSize) + " rai · " + TERRAIN_LABEL[t] +
            " · " + VEGETATION_LABEL[v] + " vegetation · " + TYPE_NAME[state.scanType];
        }

        updatePreview();
        pulse();
      }

      function wireSegment(btns, attr, stateKey) {
        btns.forEach(function (btn) {
          btn.addEventListener("click", function () {
            btns.forEach(function (b) { b.classList.remove("active"); });
            btn.classList.add("active");
            state[stateKey] = btn.getAttribute("data-" + attr);
            render();
          });
        });
      }
      wireSegment(serviceBtns, "service", "scanType");
      wireSegment(terrainBtns, "terrain", "terrain");
      wireSegment(vegetationBtns, "vegetation", "vegetation");

      raiRange.addEventListener("input", function () {
        var raw = parseFloat(raiRange.value);
        state.oversize = raw > MAX_RAI;
        state.landSize = state.oversize ? MAX_RAI : raw;
        render();
      });
      render();
    })();
  }

  /* ---- Footer year ---- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
