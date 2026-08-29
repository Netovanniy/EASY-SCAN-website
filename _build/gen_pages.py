# -*- coding: utf-8 -*-
import os
OUT = "/Users/andreynetovanniy/Desktop/EASY SCAN/ES_CLAUDE website"

NAV_SUB = """            <a href="gaussian.html">Gaussian Splatting</a>
            <a href="twin.html">Digital Twin</a>
            <a href="concepting.html">Concepting</a>
            <a href="monitoring.html">Construction Monitoring</a>
            <a href="museum.html">Digital Museum</a>
            <a href="education.html">Education</a>"""

M_SUB = """    <a href="gaussian.html">Gaussian Splatting</a>
    <a href="twin.html">Digital Twin</a>
    <a href="concepting.html">Concepting</a>
    <a href="monitoring.html">Construction Monitoring</a>
    <a href="museum.html">Digital Museum</a>
    <a href="education.html">Education</a>"""

def head(title, desc):
    return f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<meta name="description" content="{desc}">
<link rel="icon" href="assets/img/logo-mark-white.png">
<link rel="stylesheet" href="assets/css/style.css?v=72">
</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>
"""

def header(active_about=False):
    ac = ' aria-current="page"' if active_about else ''
    return f"""<header class="site-header">
  <div class="wrap">
    <a class="brand" href="index.html" aria-label="EASY SCAN — home">
      <img class="brand__mark" src="assets/img/logo-mark-white.png" alt="">
      <span class="brand__text"><span class="brand__name">Easy Scan</span><span class="brand__tag">LiDAR Technology</span></span>
    </a>
    <nav class="nav" aria-label="Primary">
      <ul class="nav__list">
        <li><a class="nav__link" href="about.html"{ac}>About</a></li>
        <li class="nav__item--has-sub">
          <a class="nav__link" href="index.html#services" aria-haspopup="true">Services</a>
          <div class="nav__sub">
{NAV_SUB}
          </div>
        </li>
        <li><a class="nav__link" href="contact.html">Contact</a></li>
      </ul>
      <span class="lang" aria-label="Language"><a href="#" aria-current="true">EN</a><span>/</span><a href="#">ไทย</a></span>
      <button class="nav-toggle" type="button" aria-label="Menu" aria-expanded="false" aria-controls="mobileNav">
        <svg class="icon-open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        <svg class="icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 6l12 12M18 6L6 18"/></svg>
      </button>
    </nav>
  </div>
</header>
<nav class="mobile-nav" id="mobileNav" aria-label="Mobile">
  <a href="index.html">Main</a>
  <a href="about.html">About</a>
  <a href="contact.html">Contact</a>
  <p class="m-group-label">Services</p>
  <div class="m-sub">
{M_SUB}
  </div>
</nav>
"""

FOOTER = """<footer class="site-footer">
  <div class="wrap wrap--wide">
    <div class="footer-top">
      <div class="footer-brand">
        <a class="brand" href="index.html" aria-label="EASY SCAN — home">
          <img class="brand__mark" src="assets/img/logo-mark-white.png" alt="">
          <span class="brand__text"><span class="brand__name">Easy Scan</span><span class="brand__tag">LiDAR Technology</span></span>
        </a>
        <p>Digital Land Intelligence for smarter development. We turn real land into accurate, interactive 3D environments so you can decide before you build.</p>
      </div>
      <div class="footer-col"><h4>Company</h4><ul>
        <li><a href="about.html">About</a></li><li><a href="contact.html">Contact</a></li>
        <li><a href="education.html">Education</a></li><li><a href="museum.html">Digital Museum</a></li></ul></div>
      <div class="footer-col"><h4>Services</h4><ul>
        <li><a href="gaussian.html">Gaussian Splatting</a></li><li><a href="twin.html">Digital Twin</a></li>
        <li><a href="concepting.html">Concepting</a></li><li><a href="monitoring.html">Construction Monitoring</a></li></ul></div>
    </div>
    <div class="footer-bottom">
      <span>© <span data-year>2026</span> EASY SCAN Company Limited</span>
      <nav class="footer-social" aria-label="Social media"><a href="https://www.facebook.com/lidareasyscan/" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.68 4.53-4.68 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z"/></svg></a><a href="https://www.instagram.com/lidar_easy_scan/" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg></a><a href="https://wa.me/66806577769" target="_blank" rel="noopener" aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.65.14-.19.29-.74.93-.91 1.12-.17.19-.34.22-.62.07-.29-.14-1.21-.45-2.3-1.42-.85-.76-1.42-1.7-1.59-1.98-.17-.29-.02-.44.13-.59.13-.13.29-.34.43-.5.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.65-1.56-.89-2.14-.24-.57-.48-.49-.65-.5l-.56-.01c-.19 0-.5.07-.77.36-.26.29-1 .98-1 2.38s1.03 2.76 1.17 2.95c.14.19 2.02 3.08 4.9 4.32.68.29 1.22.47 1.63.6.69.22 1.31.19 1.8.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34zM12.05 21.5a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.44 9.44 0 0 1-1.44-5.02c0-5.22 4.25-9.47 9.48-9.47a9.43 9.43 0 0 1 9.47 9.48c0 5.22-4.25 9.47-9.47 9.47zM20.13 3.87A11.36 11.36 0 0 0 12.05.5C5.8.5.7 5.6.69 11.86c0 2.09.55 4.13 1.59 5.93L.6 24l6.36-1.67a11.34 11.34 0 0 0 5.08 1.29h.01c6.25 0 11.35-5.1 11.36-11.36 0-3.03-1.18-5.89-3.32-8.03z"/></svg></a><a href="https://t.me/netovanniy" target="_blank" rel="noopener" aria-label="Telegram"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.94 4.63 2.9 11.98c-1.3.52-1.29 1.25-.24 1.57l4.89 1.53 1.88 5.94c.23.63.11.88.77.88.51 0 .74-.23 1.03-.51l2.34-2.28 4.87 3.6c.9.5 1.54.24 1.76-.83l3.19-15.03c.33-1.31-.5-1.9-1.62-1.4zM8.13 14.14l10.5-6.62c.52-.32.99-.14.6.2l-8.98 8.1-.35 3.73-1.77-5.41z"/></svg></a></nav>
    </div>
  </div>
</footer>
<script src="assets/js/main.js"></script>
</body>
</html>
"""

def page_hero(crumb, title, lead, img, alt):
    return f"""  <section class="page-hero">
    <div class="page-hero__media"><img src="{img}" alt="{alt}"></div>
    <div class="wrap wrap--wide">
      <p class="breadcrumb"><a href="index.html">Main</a><span>/</span> {crumb}</p>
      <h1 class="page-hero__title">{title}</h1>
      <p class="page-hero__lead">{lead}</p>
    </div>
  </section>
"""

def split(tag, img, alt, eyebrow, h3, paras, link=None, reverse=False):
    rc = " split--reverse" if reverse else ""
    ps = "\n          ".join(f"<p>{p}</p>" for p in paras)
    lk = f'\n          <a class="link-arrow" href="{link[1]}">{link[0]}<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>' if link else ""
    return f"""      <div class="split{rc} reveal">
        <div class="split__media">
          <span class="split__tag">{tag}</span>
          <img src="{img}" alt="{alt}">
        </div>
        <div class="split__body">
          <p class="eyebrow">{eyebrow}</p>
          <h3 class="h3">{h3}</h3>
          {ps}{lk}
        </div>
      </div>
"""

def feature_grid(items, four=True):
    cls = "features features--4" if four else "features"
    lis = "\n".join(
        f'        <li class="feature"><span class="feature__idx">{i:02d}</span><h3 class="feature__title">{t}</h3><p class="feature__text">{d}</p></li>'
        for i, (t, d) in enumerate(items, 1))
    return f'      <ul class="{cls} reveal">\n{lis}\n      </ul>\n'

def sec_head(eyebrow, h2, lead=None, center=False):
    cc = " section__head--center" if center else ""
    ld = f'\n        <p class="lead">{lead}</p>' if lead else ""
    return f'      <div class="section__head{cc} reveal">\n        <p class="eyebrow">{eyebrow}</p>\n        <h2 class="h2">{h2}</h2>{ld}\n      </div>\n'

def cta(eyebrow, h2, p, btn_text="Contact EASY SCAN", btn_href="contact.html", second=('Explore services','index.html#services')):
    return f"""  <section class="section section--tight">
    <div class="wrap wrap--wide">
      <div class="cta reveal">
        <div class="cta__grid" aria-hidden="true"></div>
        <p class="eyebrow">{eyebrow}</p>
        <h2 class="h2">{h2}</h2>
        <p>{p}</p>
        <div class="cta__actions">
          <a class="btn btn--primary" href="{btn_href}">{btn_text}
            <svg class="btn__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
          <a class="btn btn--ghost" href="{second[1]}">{second[0]}</a>
        </div>
      </div>
    </div>
  </section>
"""

def write(name, body):
    with open(os.path.join(OUT, name), "w", encoding="utf-8") as f:
        f.write(body)
    print("wrote", name)

# ---------------- GAUSSIAN ----------------
g = head("3D Terrain Modeling with Gaussian Splatting | EASY SCAN Thailand",
         "EASY SCAN reconstructs real places with Gaussian Splatting — photorealistic, interactive 3D scenes you explore directly in a web browser.")
g += header()
g += '<main id="main">\n'
g += page_hero("Services <span>/</span> Gaussian Splatting", "Gaussian Splatting",
    "A highly realistic digital representation of a place, built from thousands of photographs and explored directly in your browser.",
    "assets/img/gaussian-scene.jpg", "Photorealistic Gaussian Splatting reconstruction of a coastal site")
g += '  <section class="section">\n    <div class="wrap">\n'
g += split("Realistic capture", "assets/img/p-tropical-viz.jpg",
    "Interactive photorealistic 3D scene of a tropical landscape",
    "What it is", "Visual fidelity instead of a plain mesh",
    ["Gaussian Splatting reconstructs a scene with remarkable visual fidelity — preserving natural lighting, textures and fine detail. Instead of a traditional 3D mesh, the place is rebuilt from the photographs themselves.",
     "The result is an interactive experience that runs directly in a web browser. Walk through the site from anywhere, review existing conditions with your team and share the location with clients and partners without installing any additional software."])
g += '    </div>\n  </section>\n'
g += '  <section class="section section--alt">\n    <div class="wrap">\n'
g += sec_head("Where it helps", "Built for spatial presence")
g += feature_grid([
    ("Remote site presentation", "Show a location to clients and partners anywhere, with no software to install."),
    ("Existing-condition record", "A dated, explorable record of how the site looked before work began."),
    ("Immersive visualisation", "Natural light and real texture make the scene feel like being there."),
    ("Team review", "Everyone reviews the same place in one shared browser link."),
])
g += '    </div>\n  </section>\n'
g += '  <section class="section">\n    <div class="wrap">\n'
g += sec_head("Selected scenes", "Featured scans")
g += """      <ul class="features reveal">
        <li class="feature"><span class="feature__idx">Koh Phangan</span><h3 class="feature__title">The Bay</h3><p class="feature__text">Coastal development site captured as an explorable scene.</p></li>
        <li class="feature"><span class="feature__idx">Koh Phangan</span><h3 class="feature__title">The Hill</h3><p class="feature__text">Steep hillside terrain reconstructed for planning review.</p></li>
        <li class="feature"><span class="feature__idx">Koh Samui</span><h3 class="feature__title">Ameno</h3><p class="feature__text">Estate site documented in photorealistic 3D.</p></li>
        <li class="feature"><span class="feature__idx">Koh Phangan</span><h3 class="feature__title">Akasha</h3><p class="feature__text">Retreat environment preserved as a shareable digital record.</p></li>
      </ul>
"""
g += '    </div>\n  </section>\n'
g += '  <p class="text-center muted" style="max-width:60ch;margin:0 auto;padding:0 24px 8px;font-size:.9rem">Gaussian Splatting is valuable for realistic spatial representation. It is not a replacement for accurate geometric or certified surveying.</p>\n'
g += cta("Get started", "See your site as a scene you can walk",
    "Send the location and size of your land — we will tell you whether Gaussian Splatting, LiDAR or both fit your project.")
g += '</main>\n' + FOOTER
write("gaussian.html", g)

# ---------------- DIGITAL TWIN ----------------
t = head("Digital Twin for Land Development | EASY SCAN Thailand",
         "See how your building fits the land with EASY SCAN's digital twin — accurate 3D terrain models combining LiDAR, drone mapping, Gaussian Splatting and photogrammetry.")
t += header()
t += '<main id="main">\n'
t += page_hero("Services <span>/</span> Digital Twin", "Digital Twin",
    "A dynamic digital representation of a real-world environment — terrain, vegetation, roads and structures you can explore from any angle.",
    "assets/img/p-twin-explore.jpg", "Interactive digital twin of a tropical development site")
t += '  <section class="section">\n    <div class="wrap">\n'
t += split("LiDAR + drone + splatting", "assets/img/p-terrain-viz.jpg",
    "3D terrain visualisation blending scan data and photogrammetry",
    "What it is", "More than just a 3D model",
    ["We combine LiDAR data, drone mapping, Gaussian Splatting and photogrammetry and blend them to recreate landscapes and developments in accurate, immersive 3D space.",
     "Real terrain, vegetation, roads, structures and environmental context become interactive digital environments that can be explored from any angle."])
t += '    </div>\n  </section>\n'
t += '  <section class="section section--alt">\n    <div class="wrap">\n'
t += sec_head("Why it matters", "Understand a site before construction begins",
    "Future buildings can be placed directly onto the scanned terrain, panoramic environments integrated for realistic spatial experience, and design decisions tested inside the model itself — a tool for planning, communication, visualisation and development.")
t += feature_grid([
    ("Better decision making", "Understand terrain, elevation, access and environmental context before construction begins."),
    ("Reduced risk & cost", "Detect potential issues early and avoid expensive mistakes during development."),
    ("Realistic visualisation", "Experience architecture directly inside the real landscape."),
    ("Stronger communication", "Architects, developers, investors and clients share one digital space."),
])
t += '    </div>\n  </section>\n'
t += '  <section class="section">\n    <div class="wrap">\n'
t += sec_head("Continuity", "The twin evolves with the project")
t += """      <ol class="process reveal">
        <li class="process__item"><span class="process__num">Existing land</span><h3 class="process__title">Existing land</h3><p class="process__text">The scanned site as it is today — the shared reference for everyone.</p></li>
        <li class="process__item"><span class="process__num">Concept</span><h3 class="process__title">Concept &amp; design</h3><p class="process__text">Architectural proposals placed on the real terrain and tested.</p></li>
        <li class="process__item"><span class="process__num">Earthworks</span><h3 class="process__title">Earthworks</h3><p class="process__text">Grading, cut and fill, retaining and access documented as they happen.</p></li>
        <li class="process__item"><span class="process__num">Completed</span><h3 class="process__title">Completed project</h3><p class="process__text">A continuous spatial record instead of disconnected files at each stage.</p></li>
      </ol>
"""
t += '    </div>\n  </section>\n'
t += cta("Get started", "Put your design on the real ground",
    "Send your site location and size. We will build the twin that fits your stage — from first concept to construction.")
t += '</main>\n' + FOOTER
write("twin.html", t)

# ---------------- CONCEPTING ----------------
c = head("Environment Scanning &amp; Concept Testing | EASY SCAN Thailand",
         "Scan your land with LiDAR and drones, then test architectural concepts directly on the real terrain before construction — EASY SCAN's concepting service in Thailand.")
c += header()
c += '<main id="main">\n'
c += page_hero("Services <span>/</span> Concepting", "Test your ideas before construction",
    "Every landscape has its own challenges before construction begins — slopes, rocks, vegetation, access roads, drainage and unclear spatial relationships. 2D plans rarely communicate how a project will actually meet the terrain.",
    "assets/img/boundaries.jpg", "Aerial land plan with boundary lines overlaid on real terrain")
c += '  <section class="section">\n    <div class="wrap">\n'
c += split("Scan → explore → test", "assets/img/p-tropical-land.jpg",
    "Tropical land reconstructed as an immersive 3D environment",
    "The method", "Real land becomes a space you can test",
    ["We transform real land into immersive 3D environments using LiDAR scanning, drone mapping, Gaussian Splatting and digital visualisation workflows.",
     "Architects, developers and landowners can explore the exact terrain before construction starts and test ideas directly inside the digital space."])
c += '    </div>\n  </section>\n'
c += '  <section class="section section--alt">\n    <div class="wrap">\n'
c += sec_head("Designed to reduce uncertainty", "A decision-making tool, not just a picture",
    "Boundary lines, elevation changes, slope analysis, environmental context and alignment with official 2D maps are visualised together in one connected workflow. Future buildings are positioned on the scanned terrain to understand views, access, proportions and construction limits.")
c += feature_grid([
    ("Terrain understanding", "Explore real slopes, elevation, rocks, vegetation and access before construction begins."),
    ("Boundary & map alignment", "Combine scanned terrain with official 2D maps and boundary information in one environment."),
    ("Real-world concept testing", "Place buildings on the exact terrain and test layouts, positioning and spatial relationships in 3D."),
    ("Smarter decisions", "Reduce uncertainty, improve communication and avoid costly mistakes during planning."),
])
c += '    </div>\n  </section>\n'
c += cta("The idea", "Move it. Change it. Test it. Before you build it.",
    "Order a 3D scan of your site and test development scenarios in real context. Send the location and size to begin.")
c += '</main>\n' + FOOTER
write("concepting.html", c)

# ---------------- MONITORING ----------------
m = head("Construction Monitoring with LiDAR | EASY SCAN Thailand",
         "Track construction progress with 3D LiDAR monitoring. EASY SCAN documents earthwork, hidden utilities and site changes throughout your build in Thailand.")
m += header()
m += '<main id="main">\n'
m += page_hero("Services <span>/</span> Construction Monitoring", "Site monitoring",
    "Construction is constantly changing. Foundations are poured, utilities disappear underground, structures rise floor by floor and critical details become hidden behind finished surfaces. Without documentation, valuable information is lost during the build.",
    "assets/img/p-monitoring.jpg", "Construction site captured in 3D during the building process")
m += '  <section class="section">\n    <div class="wrap">\n'
m += '      <div class="prose reveal">\n        <p>EASY SCAN provides site monitoring through 3D scanning and digital documentation. By capturing the site at different stages, we build an accurate visual record of progress that helps developers, architects, contractors and investors understand exactly what has been built.</p>\n      </div>\n'
m += '    </div>\n  </section>\n'
m += '  <section class="section section--alt">\n    <div class="wrap">\n'
m += split("Why it matters", "assets/img/underground.jpg",
    "Underground pipes and utilities scanned before trenches are covered",
    "Why it matters", "A digital history of the project",
    ["Many construction decisions happen quickly, often without a complete long-term record of site conditions. Once pipes are covered, foundations poured or earthworks completed, it becomes difficult to verify what exists beneath the finished structure.",
     "Monitoring documents each phase in precise 3D — so teams can track progress, compare against plans, preserve hidden infrastructure, reduce misunderstandings and keep a permanent visual archive of the build."])
m += '    </div>\n  </section>\n'
m += '  <section class="section">\n    <div class="wrap">\n'
m += sec_head("What we document", "Four things worth capturing on every build")
m += feature_grid([
    ("Terrain changes", "Grading, retaining walls, slope adjustments and excavation measured and monitored in 3D — verifying volumes and site preparation."),
    ("Structural progress", "Every major phase, from excavation and footings to framing and concrete — a clear timeline of how the building evolves."),
    ("Underground utilities", "Pipes, drainage, conduits and infrastructure scanned before trenches are covered — a reference for future maintenance."),
    ("Progress documentation", "Repeated scans at scheduled intervals let teams compare progress month to month and stage to stage."),
])
m += '    </div>\n  </section>\n'
m += cta("Get started", "Document the build while you still can",
    "Set up scheduled scans for your project. Send the site location and construction stage to begin.")
m += '</main>\n' + FOOTER
write("monitoring.html", m)

# ---------------- MUSEUM ----------------
mu = head("Digital Museum | 3D Cultural Heritage Preservation by EASY SCAN",
          "EASY SCAN's Digital Museum uses 3D scanning to preserve and present cultural artifacts and heritage sites through immersive digital experiences.")
mu += header()
mu += '<main id="main">\n'
mu += page_hero("Digital Museum", "The Digital Museum",
    "An experimental 3D environment that reimagines how we preserve and experience cultural artifacts — a curated virtual space where heritage, art, mythology and technology meet.",
    "assets/img/forest-workshop.jpg", "Atmospheric forest environment used for experimental 3D capture")
mu += '  <section class="section">\n    <div class="wrap">\n'
mu += '      <div class="prose reveal">\n        <p>Real artifacts, sculptures, environments and cultural objects are transformed into immersive digital experiences. This is not a traditional museum — it is a way of preserving, exploring and presenting history through 3D environments, digital storytelling and interactive space.</p>\n      </div>\n'
mu += '    </div>\n  </section>\n'
mu += '  <section class="section section--alt">\n    <div class="wrap">\n'
mu += split("Preservation + access", "assets/img/p-tropical-viz.jpg",
    "Immersive digital environment designed for exploration and storytelling",
    "Beyond physical walls", "Culture that exists anywhere",
    ["Many artifacts and cultural objects are fragile, inaccessible or limited to a single location. The Digital Museum creates a bridge between preservation and accessibility by letting collections exist in a virtual environment.",
     "Visitors explore objects, spaces and stories from anywhere in the world. Digital preservation makes culture more resilient, more shareable and more immersive."])
mu += '    </div>\n  </section>\n'
mu += '  <section class="section">\n    <div class="wrap">\n'
mu += sec_head("How it works", "From real object to virtual exhibition")
mu += feature_grid([
    ("Artifact digitisation", "Sculptures, statues, archaeological pieces and historical items scanned with LiDAR, photogrammetry and high-resolution reconstruction."),
    ("Immersive 3D environments", "Artifacts placed inside curated digital spaces designed for exploration, storytelling and emotional experience."),
    ("Virtual exhibitions", "Collections presented as interactive online museums, digital galleries and immersive exhibition spaces."),
    ("Cultural storytelling", "Visual atmosphere, historical context and artistic presentation combined into experiences beyond documentation."),
])
mu += '    </div>\n  </section>\n'
mu += cta("Collaborate", "Have a collection or a heritage site?",
    "We are looking for partners in cultural preservation. Tell us about the objects or the place you want to keep.",
    btn_text="Start a conversation")
mu += '</main>\n' + FOOTER
write("museum.html", mu)

# ---------------- EDUCATION ----------------
e = head("LiDAR Training &amp; Education | EASY SCAN Thailand",
         "Learn LiDAR scanning, drone mapping and 3D terrain analysis through EASY SCAN's workshops and training programs in Thailand.")
e += header()
e += '<main id="main">\n'
e += page_hero("Education", "Education",
    "Workshops and training in LiDAR scanning, drone mapping and terrain-based design thinking.",
    "assets/img/forest-square.jpg", "Field workshop setting in a tropical forest")
e += """  <section class="section">
    <div class="wrap">
      <div class="section__head section__head--center reveal">
        <p class="eyebrow">Status</p>
        <h2 class="h2">Coming soon</h2>
        <p class="lead">This section is currently in development. It will soon showcase early-stage visualisation, spatial ideation, terrain-based design thinking and digital concept creation for architecture and development projects.</p>
      </div>
      <div class="text-center reveal">
        <a class="btn btn--primary" href="contact.html">Ask about training
          <svg class="btn__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      </div>
    </div>
  </section>
"""
e += '</main>\n' + FOOTER
write("education.html", e)

# ---------------- CONTACT ----------------
k = head("Contact EASY SCAN | LiDAR &amp; 3D Scanning Services in Thailand",
         "Get in touch with EASY SCAN for LiDAR surveying, drone mapping and 3D terrain visualisation in Koh Phangan, Koh Samui and Phuket. We respond within 24 hours.")
k += header()
k += '<main id="main">\n'
k += page_hero("Contact", "Contact",
    "Need assistance? Fill in the form and we will contact you within 24 hours with a recommendation and a quote.",
    "assets/img/drone-shot.jpg", "Aerial drone view of a plot of land in Thailand")
k += """  <section class="section">
    <div class="wrap wrap--wide">
      <div class="contact-grid">
        <form class="form reveal" data-contact-form novalidate>
          <div class="field">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" autocomplete="name" required placeholder="Your name">
          </div>
          <div class="field">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" autocomplete="email" required placeholder="you@example.com">
          </div>
          <div class="field">
            <label for="location">Land location</label>
            <input type="text" id="location" name="location" placeholder="Google Maps link or coordinates">
          </div>
          <div class="field">
            <label for="area">Approximate area</label>
            <input type="text" id="area" name="area" placeholder="in rai or square metres">
          </div>
          <div class="field">
            <label for="message">Message</label>
            <textarea id="message" name="message" placeholder="Tell us what you want to understand about the site, and what you plan to build."></textarea>
          </div>
          <button class="btn btn--primary btn--block" type="submit">Send message
            <svg class="btn__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button>
          <p class="form__status" role="status" aria-live="polite"></p>
          <p class="form__note">This form opens your email app with the details filled in. You can also write to us directly at lidareasyscan@gmail.com.</p>
        </form>

        <div class="reveal" data-delay="1">
          <div class="info-card">
            <span class="info-card__label">Email</span>
            <a class="info-card__value" href="mailto:lidareasyscan@gmail.com">lidareasyscan@gmail.com</a>
            <span class="info-card__hint">For any question or business enquiry.</span>
          </div>
          <div class="info-card">
            <span class="info-card__label">Phone</span>
            <a class="info-card__value" href="tel:+66806577769">+66 (0)80 657 7769</a>
            <span class="info-card__hint">Please call within business hours.</span>
          </div>
          <div class="info-card">
            <span class="info-card__label">Location</span>
            <span class="info-card__value">Koh Phangan, Thailand 84280</span>
            <span class="info-card__hint">Based in Koh Phangan, operating across Thailand.</span>
          </div>
          <div class="info-card">
            <span class="info-card__label">What to send</span>
            <span class="info-card__value">Location · Chanote or boundary map · Area</span>
            <span class="info-card__hint">These three let us prepare a first recommendation quickly.</span>
          </div>
        </div>
      </div>
    </div>
  </section>
"""
k += '</main>\n' + FOOTER
write("contact.html", k)

print("done")
