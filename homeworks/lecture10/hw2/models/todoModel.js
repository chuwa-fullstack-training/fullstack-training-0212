const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todo: {
      type: String,
      required: true
    },
    done: {
        type: Boolean,
        required: true
      },
  
  },{ collection : 'TODO' });
  
  const Todo = mongoose.model('TODO', todoSchema);
  
  module.exports = Todo;