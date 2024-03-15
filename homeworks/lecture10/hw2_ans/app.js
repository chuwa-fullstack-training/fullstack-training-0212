const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/todoListDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...', err));

// Define Todo model
const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
  dueDate: Date,
});
const Todo = mongoose.model('Todo', todoSchema);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
// GET all todos
app.get('/todos', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// POST a new todo
app.post('/todos', async (req, res) => {
  const newTodo = new Todo({
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
    dueDate: req.body.dueDate
  });
  const savedTodo = await newTodo.save();
  res.json(savedTodo);
});

// PUT to update a todo
app.put('/todos/:id', async (req, res) => {
  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedTodo);
});

// DELETE a todo
app.delete('/todos/:id', async (req, res) => {
  const deletedTodo = await Todo.findByIdAndRemove(req.params.id);
  res.json(deletedTodo);
});

// Redirect root to /todos
app.get('/', (req, res) => {
  res.redirect('/todos');
});

// 404 Handler
app.use((req, res) => {
  res.status(404).send("404: Page not found");
});

// Start server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
