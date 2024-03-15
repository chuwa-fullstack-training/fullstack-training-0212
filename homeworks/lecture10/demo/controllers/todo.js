const Todo = require('../models/todo');

const createTodo = async (req, res) => {
  try {
    const todo = new Todo(req.body);
    await todo.save();
    res.status(201).json({ message: 'Todo created' });
  } catch(err) {
    console.log(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params?.id);
    todo.isFinished =  req.body.isFinished ?? todo.isFinished;
    await todo.save();
    res.json(todo);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const getAllTodos = async (req, res) => {
  try {
    const todo = await Todo.find();
    res.status(200).json(todo);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  createTodo,
  updateTodo,
  getAllTodos,
};
