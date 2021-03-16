import express from 'express'
import * as UserService from '../services/users'

// Router
const router = express.Router()
module.exports = router

/**
 * Routes
 */

router.get('/', (req, res) => {
  UserService.getUsers().then((users) => res.json(users))
})

router.get('/:userId', (req, res) => {
  const userId = parseInt(req.params.userId, 10)
  UserService.getUser(userId).then((user) => res.json(user))
})
