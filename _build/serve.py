"""Local dev server that mimics Vercel cleanUrls: /price -> price.html, /th/ -> th/index.html,
and /price.html -> 308 -> /price. Usage: python3 _build/serve.py [port]"""
import http.server, os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

class H(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **k):
        super().__init__(*a, directory=ROOT, **k)

    def do_GET(self):
        path, _, rest = self.path.partition("?")
        if path.endswith(".html"):
            clean = path[:-5]
            if clean.endswith("/index"):
                clean = clean[:-5]
            elif clean == "/index":
                clean = "/"
            self.send_response(308)
            self.send_header("Location", clean or "/")
            self.end_headers()
            return
        fs = os.path.join(ROOT, path.lstrip("/"))
        if not os.path.isdir(fs) and not os.path.splitext(path)[1] and os.path.isfile(fs + ".html"):
            self.path = path + ".html" + ("?" + rest if rest else "")
        super().do_GET()

if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8099
    http.server.ThreadingHTTPServer(("", port), H).serve_forever()
