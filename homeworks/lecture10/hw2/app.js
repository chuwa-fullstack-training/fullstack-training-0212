const express = require('express');
const mongoose = require('mongoose');
const Todo = require('./models/toDo');

const app = express();
app.set('view engine', 'ejs');
app.use(express.json()); 

mongoose.connect('mongodb://localhost:27017/todoListDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.post('/todos', async (req, res) => {
  try {
    const newTodo = new Todo({
      title: req.body.title
    });
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/todos', async (req, res) => {
    try {
      const todos = await Todo.find();
      res.render('todo', { todos }); 
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  

app.delete('/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) res.status(404).send("No item found");
    res.status(200).send();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
