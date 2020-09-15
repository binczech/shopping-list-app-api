const express = require('express')
const router = express.Router()
const ShoppingList = require('../models/shoppingList')

router.get('/forUser/:userId', async (req, res) => {
  try {
    const shoppingLists = await ShoppingList.find()
    let resList = []
    shoppingLists.map(list => {
      if (list.usersWithAccess.includes(parseInt(userId))) {
        resList = [...resList, list.name]
      }
    })
    res.json(resList)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.get('/:listId', async (req, res) => {
  
})

router.post('/', async (req, res) => {
  const shoppingList = new ShoppingList({
    name: req.body.name,
    dateCreated: req.body.dateCreated,
    dateModified: req.body.dateModified,
    usersWithAccess: req.body.usersWithAccess,
    items: req.body.items
  })

  try {
    const newShoppingList = await shoppingList.save()
    res.status(201).json(newShoppingList)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

router.get('/:id', getList, (req, res) => {
  res.json(res.shoppinglist)
})

async function getList(req, res, next) {
  try {
    list = await shoppingList.findById(req.params.id)
    if (list == null) {
      return res.status(404).json({ message: 'Cant find list'})
    }
  } catch(err){
    return res.status(500).json({ message: err.message })
  }
  
  res.shoppingList = shoppingList
  next()
}

module.exports = router