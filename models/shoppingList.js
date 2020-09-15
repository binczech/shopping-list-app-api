const mongoose = require('mongoose')
const ListItem = require('./listItem')

const shoppingListSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  dateCreated: {
    type: Date,
    default: Date.now,
    required: true
  },
  dateModified: {
    type: Date,
    default: Date.now,
    required: true
  },
  usersWithAccess: {
    type: [Number],
    required: true
  },
  items: {
    type: [ListItem],
    required: true
  }
})

module.exports = mongoose.model('ShoppingList', shoppingListSchema)