import fs from 'fs'
import path from 'path'
import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { errorHandler } from '../middleware/errorHandler'
import { App } from '../../src/app'
import { StaticRouter } from 'react-router-dom'
export const router = express.Router()

// // Home Page (uses EJS views)
// router.get('/', (req, res, next) => {
//   res.render('index', { title: 'Home Page (Using EJS views)' })
// })

/****************************************
  API
*****************************************/

// API
router.use('/api/users', require('./users'))

/****************************************
  React App
*****************************************/

// example.com/foooo

router.get('/*', (req, res, next) => {
  const app = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  )

  // Normally the build folder would be made programmatically by webpack
  const htmlPath = path.resolve(path.join(__dirname, '../../build/index.html'))
  fs.readFile(htmlPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Cannot open index.html', err)
      return res.status(500).send('Server Error')
    }

    return res.send(data.replace('<div id="root"></div>', `<div id="root">${app}</div>`))
  })
})

/****************************************
  Not Found & Errors
*****************************************/

// Not Found
router.use((req, res) => {
  const error = 'Not Found: ' + req.url
  return res.status(404).send(error)
})

// Error Handler
router.use(errorHandler)
