/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require('express');
const app = express();
app.use(express.static('static'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('home', { title: 'Pug Template', name: '', age: "" });
});

app.post('/create-post', (req, res) => {
  res.render('home', { title: 'Pug Template', name: req.body?.name, age: req.body?.age });
});

app.listen(port,() => console.log(`hw3.js listening on port ${port}!\n` + 
'Server Api:\n'+
'\t(get) /: display homePage\n' + 
'\t(post) /create-post: display data on homePage according to req body\n'
))
