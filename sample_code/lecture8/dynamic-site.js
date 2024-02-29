const express = require('express');
const app = express();

app.set('view engine', 'pug'); // configuration setup, view template engine
app.set('views', './views'); // tell engine where to put those

app.get('/', (req, res) => {
  res.render('index', { title: 'Pug Template', name: 'Aaron' });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
