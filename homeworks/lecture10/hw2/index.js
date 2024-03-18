const express = require('express');

const mongoose = require('mongoose');
const Todo = require('./models/Todo'); // Import Todo model

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

mongoose.connect('mongodb+srv://yanzi14714:yanzi@aideny.0mz7t3y.mongodb.net/?retryWrites=true&w=majority&appName=AidenY', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

app.post('/api/todos', async (req, res) => {
  const { todo } = req.body;
  let newTodo = new Todo({ todo });
  newTodo = await newTodo.save();
  res.json(newTodo);
});

app.put('/api/todos/:id', async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findById(id);
  if (!todo) return res.status(404).send('Todo not found');

  todo.done = !todo.done;
  await todo.save();
  res.json(todo);
});

app.get('/', async (req, res) => {
  const todos = await Todo.find();
  res.render('index', { todos });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
