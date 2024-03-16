/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('This is the home page');
});

app.get('/about', (req, res) => {
    res.send('This is the about page');
});

app.get('/home.html', (req, res) => {
    res.render('home', { query: req.query });
});

app.post('/create-post', (req, res) => {
    res.redirect(`/home.html?${new URLSearchParams(req.body).toString()}`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
