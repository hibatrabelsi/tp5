const express = require('express');
const app = express();

// Définir EJS comme moteur de vues
app.set('view engine', 'ejs');

// Servir les fichiers statiques
app.use(express.static('public'));

// Route pour la page d'accueil : redirection vers /profile
app.get('/', (req, res) => {
    res.redirect('/profile');
});

// Route pour la page de profil
app.get('/profile', (req, res) => {
    const user = {
        name: 'John Doe',
        age: 28,
        occupation: 'Software Engineer',
        hobbies: ['Coding', 'Gaming', 'Hiking']
    };
    res.render('profile', { user });
});

// Démarrer le serveur
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
