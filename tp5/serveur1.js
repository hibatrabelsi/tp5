const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('message.txt', 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/html'});
            res.end('<h1>Erreur</h1><p>Impossible de lire le fichier</p>');
            return;
        }

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`
            <html>
                <head>
                    <title>Page Node.js</title>
                </head>
                <body>
                    <h1>Bonjour !</h1>
                    <p>${data}</p>
                    <footer>-- Serveur Node.js</footer>
                </body>
            </html>
        `);
    });
});

server.listen(8081, () => {
    console.log('Serveur en écoute sur http://localhost:8081');
});
