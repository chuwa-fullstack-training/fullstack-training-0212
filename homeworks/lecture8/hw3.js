/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */
const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.get('/home.html', (req, res) => {
  // Serve home.html
  fs.readFile('./home.html', (err, data) => {
    if (err) {
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).type('text/html').send(data);
    }
  });
});

app.post('/submit', express.urlencoded({ extended: true }), (req, res) => {
  // Process form submission
  const formData = req.body;
  const queryString = new URLSearchParams(formData).toString();

  // Redirect to home.html with query string
  res.redirect(`/home.html?${queryString}`);
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});