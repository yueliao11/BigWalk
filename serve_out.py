import http.server
import os
import posixpath
import urllib.parse
import socketserver

ROOT = "/Users/lmk/workbuddy-ai/topgamehotword/bigwalk-site/out"


class Handler(http.server.SimpleHTTPRequestHandler):
    directory = ROOT  # serve from the static export

    def translate_path(self, path):
        path = path.split("?", 1)[0].split("#", 1)[0]
        path = urllib.parse.unquote(path)
        path = posixpath.normpath(path)
        parts = [p for p in path.split("/") if p not in ("", ".", "..")]
        p = os.path.join(ROOT, *parts)
        if os.path.isdir(p):
            idx = os.path.join(p, "index.html")
            return idx if os.path.exists(idx) else p
        if os.path.exists(p):
            return p
        # Map clean URLs -> exported .html (e.g. /red-tower -> /red-tower.html)
        if not os.path.splitext(p)[1] and os.path.exists(p + ".html"):
            return p + ".html"
        return p

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def log_message(self, *args):
        pass


socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer(("127.0.0.1", 3000), Handler) as httpd:
    print("Serving", ROOT, "at http://localhost:3000")
    httpd.serve_forever()
