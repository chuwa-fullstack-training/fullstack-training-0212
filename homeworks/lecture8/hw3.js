const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Set Pug as the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Set up middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Define routes
app.get('/', (req, res) => {
  res.send('This is the home page');
});

app.get('/about', (req, res) => {
  res.send('This is the about page');
});

app.get('/home.html', (req, res) => {
  // Render the Pug template
  res.render('home', { query: req.query });
});

app.post('/create-post', (req, res) => {
  // Handle form submission
  const title = req.body.title;
  const content = req.body.content;

  res.redirect(302, `/home.html?title=${title}&content=${content}`);
});

app.use('*', (req, res) => {
  res.status(404).send('This is the 404 page');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
