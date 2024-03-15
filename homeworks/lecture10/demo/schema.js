const mongoose = require("mongoose");

const toDoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },

  done: {
    type: Boolean,
    default: false,
  },
});

const todoModel = mongoose.model("todoModel", toDoSchema);
module.exports = todoModel;
