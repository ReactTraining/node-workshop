import express from 'express'
// const createError = require('http-errors');
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'

export const app = express()

/****************************************
  Common Express Middleware
*****************************************/

// Makes logs as requests come in
app.use(logger('dev'))

// Tells express to use a folder for static assets
app.use(express.static(path.join(__dirname, 'public')))

// Makes all cross origin requests possible (we should lock this down more)
app.use(cors())

// Parse cookie header info
app.use(cookieParser())

// https://github.com/expressjs/body-parser#bodyparserurlencodedoptions
// The extended option allows to choose between parsing the URL-encoded data with the
// querystring library(when false) or the qs library(when true).The "extended" syntax
// allows for rich objects and arrays to be encoded into the URL - encoded format,
// allowing for a JSON - like experience with URL - encoded.For more information,
// please see the qs library.

// Defaults to true, but using the default has been deprecated. Please research into
// the difference between qs and querystring and choose the appropriate setting.
app.use(express.urlencoded({ extended: false }))

// https://stackoverflow.com/questions/47232187/express-json-vs-bodyparser-json
// Parse application/json
app.use(express.json())

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
