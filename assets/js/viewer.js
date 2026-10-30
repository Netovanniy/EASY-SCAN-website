/* EASY SCAN — site viewer bootstrap.
   Shows the poster, loads three.js + the model only on demand, and handles
   maximise. On touch devices the live viewer always opens maximised so a
   one-finger drag orbits the model instead of fighting the page scroll. */
const version = new URL(import.meta.url).search;
const coarse = window.matchMedia("(pointer: coarse)");

document.querySelectorAll("[data-viewer]").forEach(function (root) {
  const start = root.querySelector('[data-el="start"]');
  const maxBtn = root.querySelector('[data-el="max"]');
  let started = false;

  function setMax(on) {
    root.classList.toggle("is-max", on);
    document.body.classList.toggle("viewer-max", on);
    if (maxBtn) maxBtn.setAttribute("aria-pressed", on ? "true" : "false");
  }

  async function launch() {
    if (started) return;
    started = true;
    root.classList.add("is-live");
    if (coarse.matches) setMax(true);
    try {
      const core = await import("./viewer-core.js" + version);
      await core.createViewer(root);
    } catch (err) {
      console.error(err);
      root.classList.add("is-error");
      const label = root.querySelector('[data-el="loaderText"]');
      const msg = root.querySelector('[data-k="loadError"]');
      if (label) label.textContent = msg ? msg.textContent : "Could not load the model";
    }
  }

  if (start) start.addEventListener("click", launch);
  if (maxBtn) maxBtn.addEventListener("click", function () { setMax(!root.classList.contains("is-max")); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && root.classList.contains("is-max")) setMax(false);
  });
});
