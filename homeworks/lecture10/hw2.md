# Todo List App with Express.js

## Requirements

- [ ] Design and implement a RESTful API for a todo list app using Express.
- [ ] Use template engines to render the views.
- [ ] Use MongoDB to store the data.
- [ ] Design your own models and schemas.


//index.js

const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

const Todo = mongoose.model('Todo', {
  todo: String,
  done: Boolean
});

app.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.render('index', { todos });
  } catch (error) {
    console.error('Error fetching todos:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/api/todos', async (req, res) => {
  try {
    const { todo } = req.body;
    const newTodo = new Todo({
      todo,
      done: false
    });
    await newTodo.save();
    res.json(newTodo);
  } catch (error) {
    console.error('Error adding todo:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.put('/api/todos/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findById(id);
    todo.done = !todo.done;
    await todo.save();
    res.json(todo);
  } catch (error) {
    console.error('Error updating todo:', error);
    res.status(500).send('Internal Server Error');
  }
});

mongoose.connect('mongodb+srv://hangyuan:15993654923@cluster0.lf4jy3a.mongodb.net/your_database',
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });
