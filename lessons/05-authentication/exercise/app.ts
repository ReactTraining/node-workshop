import express from 'express'
import cookieParser from 'cookie-parser'
import { router } from './router'
import './types'

export const app = express()

// Common Middleware
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/', router)
