/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('this is the home page');
})
app.get('/about', (req, res) => {
    res.send('this is the about page');
})

app.get('/home.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
})

app.post('/create-post', (req, res) => {
    res.redirect(`/home.html?${new URLSearchParams(req.body).toString()}`)
})

app.use((req, res) => {
    res.status(404).send('this is the 404 page')
})

app.listen(3000, () => {
  console.log('Server listening on 3000');
});