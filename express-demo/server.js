const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.json());

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { user: 'Student' });
});

let tasks = [
    { id: 1, title: 'Apprendre Express', done: false },
    { id: 2, title: 'Créer une application de démonstration', done: false },
];

app.get('/tasks', (req, res) => {
    res.render('tasks', { tasks });
});
app.get('/api/tasks', (req, res) => res.json(tasks));

app.post('/api/tasks', (req, res) => {
    const title = req.body.title?.trim();
    if (!title) {
        return res.status(400).json({ error: "Le titre de la tâche ne peut pas être vide." });
    }
    const newTask = {
        id: tasks.length + 1,
        title: title,
        done: false
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/contact', (req, res) => {
    res.render('contact');
});

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
