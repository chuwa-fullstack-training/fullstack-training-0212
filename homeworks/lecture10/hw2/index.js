// const express = require('express');
// const db = require('./db/index')
// const bodyParser = require('body-parser');
// const app = express();

// app.use(bodyParser.json());
// app.use(express.static('public'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.set('view engine', 'pug');
// app.set('views', './views');

// const todos = [
//   { id: 1, todo: 'first thing', done: true },
//   { id: 2, todo: 'second thing', done: false },
//   { id: 3, todo: 'third thing', done: false }
// ];

// app.get('/', (req, res) => {
//   res.render('index', { todos });
// });


// app.post('/api/todos', (req, res) => {
//   const todo = req.body.todo;
//   todos.push({ id: todos.length + 1, todo, done: false });
//   res.json(todos);
// });

// app.put('/api/todos/:id', (req, res) => {
//   const id = parseInt(req.params.id, 10);
//   const todo = todos.find(t => t.id === id);
//   todo.done = !todo.done;
//   res.json(todo);
// });

// connectDB();

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });
/**
 * name= todo.todo
 * checked= todo.done
 * data-id= todo.id
 */

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

const connectDB = require('./db/index');
const todoRouter = require('./routes/todos');
const { Todo } = require('./models/Todo');

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', async(req, res) => {
    try {
        const todos = await Todo.find();
        res.render('index', { todos });
        // res.status(200).json(todos);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
});

app.use('/api', todoRouter);

connectDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});