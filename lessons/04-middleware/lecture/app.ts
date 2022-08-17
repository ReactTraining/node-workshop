import express from 'express'
// const createError = require('http-errors');
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'

export const app = express()

// Common Middleware

// https://github.com/expressjs/body-parser#bodyparserurlencodedoptions
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// app.use(logger('dev'))
app.use(logger('common')) // for apache style
app.use(express.static(path.join(__dirname, 'public')))
app.use(
  cors({
    // This is the website's port when started with `npx http-server`
    origin: 'http://localhost:8080',
  })
)

/****************************************
  Routes
*****************************************/

const router = express.Router()
app.use('/api', router)

router.get('/users', (req, res) => {
  res.json([
    { id: 1, name: 'Michael Jackson' },
    { id: 2, name: 'Ryan Florence' },
    { id: 3, name: 'Brad Westfall' },
    { id: 4, name: 'Chance Stickland' },
  ])
})

app.use((req, res) => {
  res.status(404).send('<h1>Not Found</h1>')
})

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.message, err.stack)
  res.status(500).send(err.message || err)
})
