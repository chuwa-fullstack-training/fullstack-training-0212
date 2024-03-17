/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const querystring = require('querystring');

const app = express();
const port = 3000;

// Set Pug as the view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Use body-parser to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// GET routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Cool Home Page', message: 'Welcome to Node.js tutorial' });
});

app.get('/about', (req, res) => {
  res.send('This is the about page');
});

// Static files
app.get('/home.html', (req, res) => {
    // Render the form with any query parameters passed
    res.render('home', { query: req.query });
  });

// POST route
app.post('/create-post', (req, res) => {
  const postData = querystring.stringify(req.body);
  // Redirect back to home page with query string
  res.redirect(`/home.html?${postData}`);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
