const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
  _id: Number,
  todo: String,
  done: {
    type: Boolean,
    default: false
  }
});

const List = mongoose.model('List', todoSchema)

module.exports = List