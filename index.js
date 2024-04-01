const http = require('http');
const url = require('url');

const port = 3000;
const redirectUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    if (pathname === '/') {
        res.writeHead(302, {
            'Location': redirectUrl,
        });
        res.end();
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html',
        });
        res.end('<h1>Страница не найдена</h1>');
    }
});

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
