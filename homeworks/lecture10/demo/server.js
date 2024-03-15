const express = require('express');
require('./db');
const Todo = require('./models/Todo');

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json());
app.use(express.static('public'));

app.get('/', async (req, res) => {
    try {
        let todos = await Todo.find();
        res.render('index', { todos })
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/api/todos', async (req, res) => {
    try {
        const newTodo = new Todo({
            todo: req.body.todo,
            done: false,
        });
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.put('/api/todos/:id', async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, {
            $set: { done: true }
        }, { new: true });

        res.json(updatedTodo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
