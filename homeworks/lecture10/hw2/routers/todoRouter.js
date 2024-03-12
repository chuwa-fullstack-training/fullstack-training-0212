const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const {
    getAllTodo,
    addTodo,
    updateTodo
} = require("../controllers/todoController")


  router.get('/', getAllTodo);
  
  router.post('/api/todos', addTodo);
  
  router.put('/api/todos/:id', updateTodo);

module.exports = router