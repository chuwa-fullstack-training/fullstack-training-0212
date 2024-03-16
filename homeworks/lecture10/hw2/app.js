// app.js
const express = require('express');
const mongoose = require('mongoose');
const Todo = require('./models/toDo');

const app = express();
app.set('view engine', 'ejs');
app.use(express.json()); // for parsing application/json

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/todoListDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// 添加待办事项
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

// 获取所有待办事项
app.get('/todos', async (req, res) => {
    try {
      const todos = await Todo.find();
      res.render('todo', { todos }); // 渲染 todo.ejs 模板
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  

// 删除待办事项
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
