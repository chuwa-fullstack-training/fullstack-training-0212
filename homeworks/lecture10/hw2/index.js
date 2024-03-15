/* const express = require('express');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todos');
const path = require('path'); // Import the 'path' module
MONGODB_URI="mongodb+srv://weizhouwen5:j8XCZeggCnv3TtnX@cluster0.v5vkfht.mongodb.net/"
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/todos', todoRoutes);
// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); */
const express = require('express');
const mongoose = require('mongoose');
MONGODB_URI="mongodb+srv://weizhouwen5:j8XCZeggCnv3TtnX@cluster0.v5vkfht.mongodb.net/"

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

// Define Todo schema
const todoSchema = new mongoose.Schema({
  todo: String,
  done: Boolean
});

// Define Todo model
const Todo = mongoose.model('Todo', todoSchema);

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

// Routes
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
    const newTodo = new Todo({ todo, done: false });
    await newTodo.save();
    res.json(newTodo);
  } catch (error) {
    console.error('Error creating todo:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.put('/api/todos/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    todo.done = !todo.done;
    await todo.save();
    res.json(todo);
  } catch (error) {
    console.error('Error updating todo:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
