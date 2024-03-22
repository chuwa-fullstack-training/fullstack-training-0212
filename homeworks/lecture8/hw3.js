/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
    res.send('this is the home page');
});

app.get('/about', (req, res) => {
    res.end('this is the about page');
});

app.get('/home.html', (req, res) => {
    const query = req.query;
    const info = JSON.stringify(query);
    res.render('index', info !== '{}' ? {info} : null);
});

app.post('/create-post', (req, res) => {
    let body = [];
    req.on('data', chunk => body.push(chunk));
    req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        res.status(302).redirect(`/home.html?${parsedBody}`);
    })
});

app.listen(port, () => console.log(`Server is running on port ${port}`));