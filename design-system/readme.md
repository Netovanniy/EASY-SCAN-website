# EASY SCAN — Design System

**Digital Land Intelligence.** EASY SCAN scans real land on Koh Phangan, Koh Samui and Phuket with LiDAR and drone photogrammetry, and turns it into accurate 3D terrain models, contours, measurements and digital twins — so architects, developers, engineers and landowners can understand a site before they commit money to it.

Core brand principle: **LANDSCAPE FIRST.** Supporting principle: **Data makes it understandable.** Client-facing proposition: **Understand the land before you build.**

The chain the whole visual system exists to express:

```
PHYSICAL LAND → MEASUREMENT → DIGITAL INFORMATION → UNDERSTANDING → DECISION
```

---

## Sources used to build this system

| Source | What it gave us |
| --- | --- |
| `files/EASY_SCAN_design_reference.md` (attached codebase folder, read-only) | Computed values pulled from the live site: `#000000` background, `#FFFFFF` text, `#FF8562` coral accent; real page copy for Home / Gaussian Splatting; package structure (BASIC / SMART / DEVELOPER); project names THE BAY, THE HILL, AMENO, AKASHA |
| `files/example-home.html` (attached codebase folder) | Clean reference markup of the homepage structure — nav, hero, sections, 3-column package grid |
| `uploads/LOGO SHORT WHITE.png`, `LOGO SHORT black.png` | Official ES monogram lockup (monogram + "EASY SCAN" wordmark under it), transparent PNG |
| `uploads/LOGO LONG HORIZONTAL : HERO BLOCK.png` | Official horizontal wordmark + strapline "YOUR DIGITAL PARTNER IN LAND ANALYSIS AND DEVELOPMENT INSIGHT" |
| `uploads/HERO BLOCK background.png` | The hero motif: aerial dusk photograph of a Thai island hillside with a mint-green scan grid, contour rings and node callouts fading into the terrain. This single image is the strongest visual evidence in the brand |
| `uploads/abnes.ttf`, `TacticSans-Lgt/Reg/Med.otf`, `Andale Mono.ttf` | The three official families, real binaries — no substitutions were needed |
| lidareasyscan.com (referenced, built on Tilda) | Live site; the Tilda export was unusable so the reference doc above stands in for it |

**Not accessible to us:** the Tilda ZIP export, real project deliverables (DXF/PDF contour sets, point clouds, Gaussian Splat scenes), and vector logo artwork. See *Required future assets*.

---

## CONTENT FUNDAMENTALS

**Voice.** Clear, concise, confident, calm. Technically credible when it needs to be, never technical for effect. Outcome before technology: lead with what the client can understand, compare, prevent or decide — the scanner is evidence, not the pitch.

**Person.** Speak to the client as *you*; speak as the company as *we*. Never "our clients" in client-facing copy.

- ✅ "Understand the land before you build."
- ✅ "We scan terrain with precision."
- ✅ "See your land — use it right."
- ❌ "Unlock the power of next-generation LiDAR."

**Casing.** The live site is heavily uppercase and that reads as EASY SCAN — but uppercase belongs to *short* strings: brand statements, section titles, nav, labels, tags, technical categories. Sentence case is correct for anything you actually read: paragraphs, explanations, report bodies, instructions, captions longer than a few words. Do not set a 30-word paragraph in caps.

**Sentence shape.** Short declaratives, often stacked without connectives. The homepage's four-step process is the model:

> Environment scan — LiDAR and drone systems record every elevation and contour with precision.
> 3D terrain model — Data becomes a digital terrain model. Slopes, drainage and earthwork are now measurable.

Note the pattern: **noun label — what happens. What that now makes possible.** Reuse it.

**Problem framing.** The brand is allowed to be blunt about risk, because risk is the reason clients call: "Terrain is often misunderstood. People lose money before construction even starts." Blunt, not alarmist. No exclamation marks.

**Numbers.** Always mono, always with units, always with a source or confidence when the number is about real land. `12.4 ha`, `+38 m MSL`, `±25 mm`, `1 m interval`. Never round a survey figure to make a layout nicer.

**Labels.** Uppercase, tracked, mono or TacticSans: `SCAN DATE`, `COORDINATE SYSTEM`, `DELIVERABLES`, `ACCURACY`. Value beneath or beside in mono.

**Emoji: never.** Not in UI, not in decks, not in social. Unicode is used only as technical notation — `°`, `′`, `″`, `±`, `→`, `Δ`, `∅`, `m²`.

**Banned vocabulary.** revolutionary, game-changing, cutting-edge, seamless, unlock the power of, next-generation, AI-powered, state-of-the-art. Also avoid "solutions" as a noun.

**Data integrity is voice.** Never present estimated as measured, approximate boundary as legal, or conceptual architecture as existing. Any illustrative figure in a mock or template is labelled `DEMO DATA` or `PLACEHOLDER` — every number in this design system's own templates is so labelled.

**Bilingual.** EN / ไทย switch sits at the end of the nav. Thai text uses the same structural hierarchy; Andale Mono has no Thai coverage, so Thai body copy falls back to a system Thai sans — treat that as a known open item.

---

## VISUAL FOUNDATIONS

### The one relationship
**REAL LANDSCAPE + DIGITAL INFORMATION.** Every strong EASY SCAN composition is a real photograph or terrain model with meaningful measured information drawn on top. Information must have a purpose; a contour that isn't at a stated interval is decoration, and decoration is off-brand.

### Colour
- **Ground is black.** `#000000` is the real production background (confirmed) and stays the default for marketing and immersive surfaces. Interfaces layer `#0D1011` / `#14181A` panels over it so 1px hairlines remain visible.
- **Ink is white**, secondary text `#AAB0B3`, muted `#82898D`. Never grey-on-grey below `#5C6367` for anything readable.
- **Two accents only.** Coral `#FF8562` (confirmed from the live site — links, nav active state, proposed architecture) and scan-green `#3DE3A6` (derived from the hero overlay — measurement, scan coverage, verified status, focus ring). Coral is the *brand* accent, green is the *instrument* accent. They rarely appear in the same 200px.
- **Brand colour ≠ data colour.** `tokens/data-colors.css` is a separate, semantic layer: boundaries, elevation, slope, confidence, scan lifecycle. A colour that means "estimated" must mean that everywhere — website, report, deck, viewer.
- **Elevation** is a hypsometric ramp (deep teal → green → sand → pale granite), never a rainbow, always with a legend that states min, max, interval and units.
- **No colour-only meaning, ever.** Boundary types differ by hue *and* dash pattern *and* label. Confidence differs by colour *and* symbol *and* word.

### Type
Three families, three jobs — no fourth family, ever. Hierarchy comes from role, scale, weight, width, spacing and position.

- **ABNES = IDENTITY.** The logo's own face. Short brand statements, hero words, exhibition graphics. Never paragraphs, tables, measurements or UI. Never used to retype the logo when official artwork exists.
- **TacticSans = STRUCTURE.** Light 300 / Regular 400 / Medium 500 only — those are the three supplied weights and no others may be synthesised. Headlines, section titles, nav, buttons, panel headings, project titles.
- **Andale Mono = INFORMATION.** Body copy, descriptions, captions, metadata, coordinates, measurements, legends, tables, annotations. This is the reason EASY SCAN reads as an instrument company rather than a studio. Mono body copy needs care: 15px minimum, 1.62 line-height, max 66ch.

Uppercase labels are tracked `.14em`. ABNES display is tracked `.06em`. Mono body is untracked.

### Grid, spacing and layout
4px base unit; the rhythm designers actually reach for is 8 / 16 / 24 / 40 / 56 / 80 / 120. 12-column desktop grid, 24px gutters, 1440px max content, 720px reading column, 56px page gutters (32 tablet / 20 mobile / 72 slide / 18mm print).

Five layout modes, chosen by purpose, not by taste: **HERO** (terrain dominant, minimal content, high brand expression) · **EXPLANATION** (balanced text + imagery, comfortable reading) · **DATA** (dense, strong grid, legends, technical type) · **DOCUMENT** (light mode, print-safe, tables and legends) · **PRESENTATION** (large imagery, ABNES selectively).

Negative space is a brand asset. When in doubt: fewer cards, more land.

### Backgrounds and imagery
Full-bleed terrain photography and terrain models. Real project material over stock, always. Colour is preserved — the landscape must stay legible, so do not push every image through the same dark cinematic grade; the hero image's warm dusk sky and green jungle are *part of the brand*, not a problem to correct. Imagery is cool-neutral in the water and warm in the light; no heavy grain, no vignette, no duotone.

Empty dark areas may carry a 48px 1px scan grid at 5% white (`--texture-grid`) — sparingly, and never over an image.

### Geometry, borders, cards
- Terrain frames and images: **0px radius**, hard rectangles, grid-aligned. Full-bleed or precisely cropped.
- Controls and small cards: **2px** — a deliberate, almost-invisible softening, not a rounded aesthetic.
- Cards are thin-bordered (`1px rgba(255,255,255,.14)`), flat-filled or unfilled, compact-labelled. No heavy shadows, no glassmorphism as a look, no glowing borders, no large decorative icons, no nested containers.
- Shadow exists in exactly one situation: a panel floating over live terrain (`--shadow-float`, a soft dark depth cue). Otherwise flat.
- Blur (`--blur-panel`) is likewise reserved for panels over live 3D terrain, where opacity alone would destroy legibility.
- Text over imagery is protected by a **gradient scrim** (`--scrim-bottom` / `--scrim-top`), not a capsule or a blurred box — the land stays visible through the protection.

### States
- **Hover:** colour change, not movement. Links go coral → white. Ghost controls go 72% → 100% opacity or pick up a 1px brighter border. No scaling up, no lift.
- **Press:** `scale(.995)` plus a fill step darker. Mechanical, barely perceptible.
- **Focus:** 1.5px scan-green outline, 2px offset. Always visible — this system is used by engineers on keyboards.
- **Selected (spatial objects):** white outline plus a 45% scan-green halo, plus the object's label. Never colour alone.
- **Disabled:** 40% opacity, no pointer.

### Motion
Motion explains a spatial process or it doesn't ship. The three sanctioned motifs: **Scan Reveal** (a controlled sweep uncovers information), **Contour Reveal** (topography emerges from terrain), **Point Reconstruction** (land resolves into points). Easing is instrument-like — `cubic-bezier(.22,.61,.36,1)`, no bounce, no overshoot, no spring. 140ms for controls, 220ms base, 900ms for a reveal, 1400ms for a full sweep. `prefers-reduced-motion` collapses reveals to instant. No neon glow, no HUD flicker, no cyberpunk.

### Accessibility
Body text ≥ 15px (mono), technical labels ≥ 11px and only for genuinely secondary metadata. Data colours are checked against both black and white grounds. Every semantic distinction is redundantly encoded (colour + line style + label + symbol). Print output is validated in light mode. Hit targets 44px on touch.

---

## ICONOGRAPHY

**No icon set was supplied with the brand.** The live site is essentially icon-free — its meaning is carried by imagery, type and the numbered process. So the rule is: *use fewer icons than you think you need*, and never use an icon where a mono label would be clearer.

Where a glyph is genuinely required (layer toggles, measurement tools, north indicator, status), this system uses **Lucide** — thin, uniform 1.5px stroke, outline-only, geometric — loaded from CDN.

> **TEMPORARY SUBSTITUTE — NOT AN EASY SCAN BRAND ASSET.** Lucide stands in until EASY SCAN supplies its own icon set. It was chosen because its stroke weight and geometry match the hairline-and-contour language of the brand. Flagged for replacement.

Rules: outline only, 1.5px stroke, 16 / 20 / 24px sizes, `currentColor`, no fills, no icon containers, no coloured icons except where the colour is a *data* colour with meaning. **Emoji are never used.** Unicode technical notation (`°`, `±`, `→`, `Δ`, `m²`, `′″`) is preferred over icons for measurement.

Spatial symbology (north arrow, scale bar, boundary swatches, elevation legend) is not iconography — it is drawn by the geospatial components and documented in `guidelines/`.

---

## LOGO SYSTEM

Supplied artwork is the source of truth. Do not retype, redraw, restretch or re-space it.

| File | Use |
| --- | --- |
| `assets/logo-wordmark-white-alpha.png` | Primary horizontal wordmark, transparent, white — dark backgrounds |
| `assets/logo-wordmark-white.png` | Original hero block supplied (opaque black field) — use as a hero plate only |
| `assets/logo-es-white.png` | ES monogram + wordmark lockup, white, transparent — dark backgrounds |
| `assets/logo-es-black.png` | Same lockup in black — light backgrounds, print, reports |

- Preferred background: pure black, or a terrain photograph darkened at the placement area.
- Clear space: **the height of the monogram's bar** on all sides; for the horizontal wordmark, the cap height.
- Minimum size: wordmark 140px wide on screen / 30mm in print. Below that use the monogram alone.
- Never: distort, outline, add glow or shadow, place on a busy area of terrain without a scrim, recolour to an accent, or set "EASY SCAN" in ABNES as a substitute for the artwork.

**Required future assets:** vector (SVG) versions of both lockups; a transparent-background master of the horizontal wordmark from the original file rather than the alpha-keyed derivative in `assets/`; an official icon set; real project imagery beyond the single hero photograph.

---

## DESIGN DECISION STATUS

| Decision | Status |
| --- | --- |
| Black ground, white ink, coral `#FF8562` accent | **CONFIRMED FROM EASY SCAN** (live site computed values) |
| ABNES / TacticSans / Andale Mono, three roles | **CONFIRMED FROM EASY SCAN** (brief + supplied binaries) |
| Terrain + scan-overlay hero motif | **CONFIRMED FROM EASY SCAN** (supplied hero image) |
| Uppercase for short strings, sentence case for reading | **DERIVED FROM EASY SCAN MATERIAL** |
| Scan-green `#3DE3A6` as the instrument accent | **DERIVED FROM EASY SCAN MATERIAL** (hero overlay colour) |
| Full semantic data palette, elevation and slope ramps | **PROPOSED SYSTEM RULE** |
| 0px on terrain frames / 2px on controls | **PROPOSED SYSTEM RULE** |
| Boundary types encoded by colour + dash + label | **PROPOSED SYSTEM RULE** |
| Light mode for reports and print | **PROPOSED SYSTEM RULE** |
| Lucide iconography | **TEMPORARY SUBSTITUTE** |
| Alpha-keyed transparent wordmark | **TEMPORARY SUBSTITUTE** (awaiting vector artwork) |
| Noto Sans (live site body face) | **Historical only.** Not part of the current system, along with Atmospheric, Monaco, Orbitron, Poppins and JetBrains Mono |

---

## INDEX

**Root**
- `styles.css` — the single entry point consumers link. `@import` list only.
- `readme.md` — this file.
- `SKILL.md` — agent-invocable skill wrapper.
- `thumbnail.html` — homepage tile.

**`tokens/`** — `fonts.css` · `typography.css` · `colors.css` · `data-colors.css` · `spacing.css` · `surfaces.css` · `motion.css` · `base.css`

**`assets/`** — logos (above), `hero-terrain-scan.png`, `fonts/` (5 real brand binaries)

**`guidelines/`** — foundation specimen cards (Brand, Type, Colors, Data, Spacing, Motion groups) plus deeper prose on the terrain & geospatial language.

**`components/`**
- `core/` — `Logotype`, `Button`, `Eyebrow`, `Tag`, `NavBar`
- `content/` — `SectionHeading`, `StatBlock`, `Quote`, `ProcessStep`, `SpecList`
- `media/` — `TerrainFrame`, `MediaTitleCard`, `BeforeAfter`
- `data/` — `SpecCard`, `AnalysisCard`, `MeasurementLine`, `StatusPill`, `ConfidenceTag`, `DataTable`
- `geo/` — `CoordinateLabel`, `ElevationLegend`, `BoundaryLegend`, `TerrainLegend`, `LayerControl`, `ScaleBar`, `NorthIndicator`, `ProjectMetadata`

**`ui_kits/`** — each folder has its own README
- `website/` — `index.html` shell + `Home.jsx`, `Gaussian.jsx` (service page), `Projects.jsx` (project page, LANDSCAPE → DATA → INSIGHT), `Shared.jsx`
- `report/` — `index.html` + `ReportPage.jsx`: light-mode technical terrain report, DOCUMENT mode
- `viewer/` — `index.html` + `Viewer.jsx`: terrain / digital-twin viewer, DATA mode
- `presentation/` — six slide types: `title`, `statement`, `process`, `data`, `comparison`, `closing`

**`templates/`** — starting folders a consuming project can copy; each is a Design Component that loads this system via its sibling `ds-base.js`
- `marketing-page/MarketingPage.dc.html` — HERO + EXPLANATION marketing page
- `technical-report/TechnicalReport.dc.html` — light-mode, print-ready terrain report
- `terrain-viewer/TerrainViewer.dc.html` — interactive digital-twin viewer
- `presentation-deck/PresentationDeck.dc.html` — six-slide client deck (1920×1080)

**Validation coverage** — 01 homepage (`website/Home.jsx`) · 02 project page (`website/Projects.jsx`) · 03 project report, light mode (`report/`) · 04 presentation (`presentation/`) · 05 3D / digital viewer (`viewer/`).

**Intentional additions** (no counterpart in the supplied material, added because the brief names a recurring need): the full `geo/` family, `ConfidenceTag`, `StatusPill` and `DataTable` exist because sections 25–57 of the brief specify these behaviours and no source artefact defines them. They are marked **PROPOSED SYSTEM RULE** above.
