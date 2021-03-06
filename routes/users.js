const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.get('/', async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.post('/', async (req, res) => {
  const user = new User({
    _id: parseInt(req.body.userID),
    email: req.body.email,
    name: req.body.name
  })

  try {
    const newUser = await user.save()
    res.status(201).json(newUser)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

router.get('/:id', getUser, (req, res) => {
  res.json(res.user)
})

router.patch('/:id', getUser, async (req, res) => {
  if (req.body.name != null) {
    res.user.name = req.body.name
  }

  if (req.body.email != null) {
    res.user.email = req.body.email
  }
  try {
    const updatedUser = await res.user.save()
    res.json(updatedUser)
  } catch {
    res.status(400).json({ message: err.message })
  }

})

router.delete('/:id', getUser, async (req, res) => {
  try {
    await res.user.remove()
    res.json({ message: 'Deleted This User' })
  } catch(err) {
    res.status(500).json({ message: err.message })
  }
})

async function getUser(req, res, next) {
  try {
    user = await User.findById(req.params.id)
    if (user == null) {
      return res.status(404).json({ message: 'Cant find user'})
    }
  } catch(err){
    return res.status(500).json({ message: err.message })
  }
  
  res.user = user
  next()
}

module.exports = router