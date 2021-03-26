// const createError = require('http-errors');
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import { router } from './routes'
import { addCORSPolicy } from './middleware/cors'

export const app = express()

// View Engine (Only necessary if you actually plan on returning HTML payloads)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Common Middleware
app.use(logger('dev'))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

// Cross-Origin Resource Sharing (CORS)
addCORSPolicy(app)

// Routes
app.use('/', router)
