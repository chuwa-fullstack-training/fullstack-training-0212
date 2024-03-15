const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Todo', todoSchema);
