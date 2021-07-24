const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title: String,
    completed: {
        type: Boolean,
        default: false
    }    
})

module.exports.Todo = mongoose.model("todo", todoSchema)
