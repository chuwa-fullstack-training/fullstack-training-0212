const express = require('express');
const router = express.Router();
const {
    createTodo,
    updateTodo
} = require('../controllers/todo');

router.post('/todos', createTodo);
router.put('/todos/:id', updateTodo);

module.exports = router;