import * as express from 'express'
import cors from 'cors'

// prettier-ignore
const originList = [
  'localhost:8080',
  'localhost:3000',
  'yourdomain.com'
].map((item) => item.trim())

export const addCORSPolicy = (app: express.Application) => {
  // Sometimes the origin argument below from cors is undefined
  // when we visit the server directly from localhost. This fixes
  // by adding the origin form the req.headers.host
  app.use((req, res, next) => {
    req.headers.origin = req.headers.origin || req.headers.host
    next()
  })

  app.use(
    cors({
      origin: (origin, cb) => {
        if (!origin) {
          cb(new Error('No Origin'))
          return
        }

        origin = origin.replace(/https?:\/\//, '')
        if (originList.includes(origin)) {
          cb(null, true)
        } else {
          cb(new Error(`Invalid Origin: ${origin}`))
        }
      },
    })
  )
}
