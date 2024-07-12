import http.server
import socketserver
PORT = 5500
Handler = http.server.SimpleHTTPRequestHandler
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Servidor HTTP en el puerto {PORT}")
    httpd.serve_forever()
