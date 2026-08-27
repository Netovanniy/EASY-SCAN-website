# UI kit — Terrain / digital twin viewer

DATA mode validation. Three-rail layout: layers left, terrain centre,
project information right, instrument status bar below.

Interactive: layer toggles change what is drawn over the terrain (contours,
boundaries, slope overlay, drainage, conceptual architecture), the tool row
changes the active measurement annotation, and the layers/legend tabs swap the
left rail.

Design rules it demonstrates:
- Terrain occupies the largest area; rails are flat panels, not floating cards.
- Layer names are plain language with a one-line hint — the audience is not GIS-trained.
- Reality / Measured / Analysis / Proposed indicator tells the viewer which kind of
  thing they are looking at.
- Conceptual architecture is dotted and coral, and its selection panel says
  "Conceptual" with a confidence source. It can never read as existing.
- TacticSans for structural UI, Andale Mono for every coordinate and measurement.
