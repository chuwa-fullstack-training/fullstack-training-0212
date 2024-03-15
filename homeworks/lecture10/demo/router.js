const express = require("express");
const router = express.Router();

const { render, addTodo, updateTodo } = require("./controller");

router.get("/", render);
router.post("/api/todos", addTodo);
router.put("/api/todos/:id", updateTodo);

module.exports = router;
