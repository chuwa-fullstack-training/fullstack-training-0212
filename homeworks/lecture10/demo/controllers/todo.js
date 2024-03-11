const { Todo } = require('../models/Todo');

createTodo = async(req, res) => {
    try {
        const todo = new Todo(req.body);
        if(!todo.todo) {
            return res.status(400).json({message: 'Please provide all fields'});
        }
        await todo.save();
        res.status(200).json(todo);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
};

updateTodo = async(req, res) => {
    try {
        const original = await Todo.findById(req.params?.id);
        original.done = !original.done;
        const todo = await Todo.findByIdAndUpdate(req.params?.id, original);
        res.status(200).json(todo);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
};

module.exports = {
    createTodo,
    updateTodo
};