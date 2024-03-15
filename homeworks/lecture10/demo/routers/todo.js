const express = require('express');
const {
  createTodo,
  updateTodo,
  getAllTodos,
} = require('../controllers/todo');
const router = express.Router();

router.get('/todos', getAllTodos);

router.post('/todos', createTodo);

router.put('/todos/:id', updateTodo);

module.exports = router;
