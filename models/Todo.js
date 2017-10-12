const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
  action: {type: String, required: true},
  title: {type: String, required: true},
  date: {type: Date, required: true},
  description: {type: String, required: true},
  check: {type: String},
  userId: {type: Schema.Types.ObjectId, ref: 'User'}
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo
