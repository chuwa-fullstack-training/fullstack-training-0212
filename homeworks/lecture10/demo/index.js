const express = require('express');
const connectDB = require('./DB/connect');
const {
  render,
  createTodo,
  updateTodo
} = require('./controllers/todoList');

const app = express();
require("dotenv").config();

connectDB();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', render);

app.post('/api/todos', createTodo);

app.put('/api/todos/:id', updateTodo);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}` );
});