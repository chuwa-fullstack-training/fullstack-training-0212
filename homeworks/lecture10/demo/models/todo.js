const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
  data: {
      type: String,
      required: true
  },
  isFinished: {
      type: Boolean,
      default: false
  },
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
