import express from 'express'
import { errorHandler } from '../utils/errorHandler'
export const router = express.Router()

// Home Page (uses EJS views)
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Home Page (Using EJS views)' })
})

// Routes
router.use('/api/users', require('./users'))

// Not Found
router.use((req, res) => {
  const error = 'Not Found: ' + req.url
  return res.status(404).send(error)
})

// Error Handler
router.use(errorHandler)
