const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    input: {
        type: String,
        required: true
    },
    categories: {
        type: String,
    },
    date: {
        type: String,
        
    }
})

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo