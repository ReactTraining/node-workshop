import express from 'express'
import createError from 'http-errors'
import { db } from './db'
import { jwtStartSession, jwtVerify, jwtLogout } from './jwt'
export const router = express.Router()

/**
 * Authentication Middleware
 */

const requireAuthentication = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  jwtVerify(req, res)
    .then((userId) => {
      if (userId) {
        db.query(`SELECT * FROM user WHERE user.id = '${userId}'`)
          .then((results) => {
            if (results.length === 0) return Promise.reject()
            const user = results[0]
            req.user = user

            // Renew the session if they hit any route with a valid session
            jwtStartSession(user.id, req, res).then(() => {
              next()
            })
          })
          .catch(next)
      } else {
        return Promise.reject()
      }
    })
    .catch(() => {
      next(createError(403, '<h1>Not Authorized</h1>'))
    })
}

/**
 * Routes
 */

// Home Page
router.get('/', (req, res) => {
  res.send('<h1>Home</h1><p>Navigate to /login, /logout, and /account<p>')
})

// Login
router.get('/login', (req, res, next) => {
  // In a real web app, this login route would use a POST body
  // from the user's form where they gave us their email and password
  const email = 'hello@reacttraining.com'
  const password = 'abc123'

  db.query(`SELECT * FROM user WHERE user.email = '${email}' AND user.password = '${password}'`)
    .then((results) => {
      if (results.length === 0) {
        return Promise.reject(createError(401, '<h1>Login Failed</h1>'))
      }
      return results[0]
    })
    .then((user) => jwtStartSession(user.id, req, res))
    .then(() => res.send('<h1>Login Success</h1>'))
    .catch(next)
})

// Logout
router.get('/logout', (req, res) => {
  jwtLogout(req, res)
  res.send('<h1>Logged Out</h1>')
})

// Account Page (Must be logged in)
router.get('/account', requireAuthentication, (req, res) => {
  res.send(`<h1>Hello ${req.user && req.user.name}, you are logged in</h1>`)
})

// Not Found
router.use((req, res) => {
  res.status(404).send('<h1>Not Found</h1>')
})

// Server Error
router.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(err.status || 500).send(err.message || 'Our server is experiencing an error.')
})
