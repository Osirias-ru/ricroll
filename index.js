const http = require('http');
const url = require('url');

const port = 3000;
const redirectScam = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
const redirectAnixart = 'https://github.com/seele-off/anixart/releases/download/anixart-default-mod/Anixart_v8.2.1_Default.apk';

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    if (pathname === '/') {
        res.writeHead(302, {
            'Location': redirectScam,
        });
        res.end();
    } else if (pathname === '/anixart') {
        res.writeHead(302, {
            'Location': redirectAnixart,
        });
        res.end();
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html',
        });
        res.end('<h1>404</h1>');
    }
});

server.listen(port, () => {
    console.log(`App listen on ${port} port`);
});
