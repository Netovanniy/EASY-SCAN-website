# EASY SCAN — website

Static multi-page site. No build step, no dependencies.

## Run locally

```bash
cd "ES_CLAUDE website"
python3 -m http.server 8777
```

Then open http://localhost:8777 . (Opening `index.html` directly with `file://`
also works, but a local server is closer to production.)

## Structure

```
index.html            Home — full storytelling page
about.html            Company, timeline, SMART Visa, team
gaussian.html         Gaussian Splatting
twin.html             Digital Twin
concepting.html       Environment scanning & concept testing
monitoring.html       Construction monitoring
museum.html           Digital Museum (experimental)
education.html         Education (coming soon)
contact.html          Contact form (opens mail client — no backend)
th/*.html             Thai version — same 9 pages, EN⇄ไทย switch in the nav.
                      Paths are ../assets, ../design-system. Thai text uses a
                      Thai-sans fallback (:lang(th) block in style.css) since
                      ABNES / Andale Mono carry no Thai glyphs.
assets/css/style.css  Page-level block layout ONLY — consumes DS tokens,
                      introduces no new colours / fonts / radii / easings
assets/js/main.js     Header state, mobile nav, scroll reveal, form
assets/img/           Web-optimised imagery (source: NEW SITE/PICS, DESIGN CODE)
design-system/        The EASY SCAN Design System (Claude Design export).
  styles.css          Single entry point — every page links this first
  tokens/*.css        Colour / type / spacing / surface / motion tokens
  readme.md           Full brand + system documentation — read before editing
  guidelines/ components/ ui_kits/ templates/   Specimen cards + reference code
```

## Design system

Every page links `design-system/styles.css` **before** `assets/css/style.css`.
All colours, fonts, spacing, radii, motion and focus behaviour come from the DS
tokens (`--accent-coral`, `--accent-scan`, `--font-information`, `--space-*`,
`--radius-card`, `--dur-*`, …). Body text is Andale Mono, headings Tactic Sans,
identity/hero words ABNES. Do not hard-code hex, px rhythm or easings in
`style.css` — add or adjust a token in `design-system/tokens/` instead.
Read `design-system/readme.md` for the brand rules (voice, casing, the
two-accent rule, terrain-first imagery, flat surfaces, instrument motion).

The shared header/footer are copied into each page. To change them across the
site, edit `../../<scratchpad>/gen.py` and regenerate the service/contact pages,
or update each file.

Content is drawn from the live site (lidareasyscan.com) and the EASY SCAN master
knowledge base. Verify contact details, prices and project counts before print.

Root folders `FONTS/`, `LOGO/`, `IMAGES : VISUALS /` are original source drops and
are not referenced by the site — the optimised copies in `assets/` are.
