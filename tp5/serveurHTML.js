const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('index.html', 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/html'});
            res.end('<h1>Erreur serveur</h1><p>Impossible de lire le fichier</p>');
            return;
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
});

server.listen(4000, () => {
    console.log('Serveur HTML en écoute sur le port 4000');
});
