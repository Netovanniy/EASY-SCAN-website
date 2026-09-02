# -*- coding: utf-8 -*-
"""Regenerate sitemap.xml for easyscan.asia (EN root + th/ + ru/)."""
import os, datetime

ROOT = "/Users/andreynetovanniy/Desktop/EASY SCAN/ES_CLAUDE website"
BASE = "https://easyscan.asia"
PAGES = [
    "index.html", "about.html", "contact.html", "price.html",
    "gaussian.html", "twin.html", "concepting.html", "monitoring.html",
    "museum.html", "education.html",
]
today = datetime.date.today().isoformat()

def loc(lang, page):
    if lang == "en":
        return f"{BASE}/{page}"
    return f"{BASE}/{lang}/{page}"

rows = []
for page in PAGES:
    prio = "1.0" if page == "index.html" else "0.8"
    for lang in ("en", "th", "ru"):
        alts = "".join(
            f'\n    <xhtml:link rel="alternate" hreflang="{hl}" href="{loc(hl, page)}"/>'
            for hl in ("en", "th", "ru")
        )
        alts += f'\n    <xhtml:link rel="alternate" hreflang="x-default" href="{loc("en", page)}"/>'
        rows.append(
            f"""  <url>
    <loc>{loc(lang, page)}</loc>
    <lastmod>{today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>{prio}</priority>{alts}
  </url>"""
        )

xml = (
    '<?xml version="1.0" encoding="UTF-8"?>\n'
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n'
    '        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'
    + "\n".join(rows)
    + "\n</urlset>\n"
)
open(os.path.join(ROOT, "sitemap.xml"), "w", encoding="utf-8").write(xml)
print("sitemap.xml:", len(rows), "urls")
