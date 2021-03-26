import express from 'express'
import { param, validationResult } from 'express-validator'
import createError from 'http-errors'
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

router.get('/:userId', param('userId').isInt(), (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) return next(createError(404, 'User does not exist'))

  // Only necessary with typescript
  if (!req.params) return next('Invalid Params')

  const userId = parseInt(req.params.userId, 10)
  UserService.getUser(userId).then((user) => res.json(user))
})
