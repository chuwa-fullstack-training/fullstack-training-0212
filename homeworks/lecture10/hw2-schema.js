const mongoose = require ('mongoose');
const {Schema} = mongoose;

const todoSchema = new Schema ({
    todo: {type: String},
    done: {type: Boolean, default: false}
})

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo
