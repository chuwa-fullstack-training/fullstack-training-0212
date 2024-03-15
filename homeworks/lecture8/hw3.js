/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */


const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('This is the home page');
});

app.get('/about', (req, res) => {
  res.send('This is the about page');
});

app.get('/home', (req, res) => {
  res.render('home'); 
});


app.post('/create-post', (req, res) => {
  console.log(req.body);
  res.redirect('/home'); 
});


app.use((req, res) => {
  res.status(404).send('This is the 404 page');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
