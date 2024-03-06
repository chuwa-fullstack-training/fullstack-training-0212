const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const Todo = require("./schema").Todo;

mongoose
  .connect(process.env.URI, {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
    throw err;
  });

app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.render("index", { todos });
});

app.post("/api/todos", async (req, res) => {
  const todo = new Todo({
    todo: req.body.todo,
  });
  await todo.save();
  const todos = await Todo.find();
  res.json(todos);
});

app.put("/api/todos/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  todo.done = !todo.done;
  await todo.save();
  res.json(todo);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
