const mongoose = require('mongoose')

const listItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  neededAmount: {
    type: Number,
    required: true
  },
  actualAmount: {
    type: Number,
    required: true
  },
  order: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('ListItem', listItemSchema)