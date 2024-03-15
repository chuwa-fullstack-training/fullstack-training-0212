const Todo = require("./schema");

const render = async (req, res) => {
  const todos = await Todo.find();
  console.log(todos);
  res.render("index", { todos });
};

const addTodo = async (req, res) => {
  try {
    req.body.done = false;
    const newTodo = new Todo(req.body);
    await newTodo.save();
    res.json(newTodo);
  } catch (err) {
    console.error(err);
  }
};

const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.param?.id);
    todo.done = !todo.done;
    await todo.save();
    res.json(todo);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  render,
  addTodo,
  updateTodo,
};
