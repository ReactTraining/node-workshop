import express from 'express'
import { getAuthUser } from './auth'

const app = express()
const port = 3000

class NotAuthorized extends Error {}

app.get('/account', (req, res, next) => {
  const authUser = getAuthUser()
  if (authUser) {
    req.user = authUser
    next()
  } else {
    throw new NotAuthorized()
  }
})

app.get('/', (req, res) => {
  res.send('<h1>Express Home<h1>')
})

app.get('/account', (req, res) => {
  res.send(`<h1>Hello ${req.user && req.user.name}, you are logged in<h1>`)
})

app.use((req, res) => {
  res.status(404).send('<h1>Not Found</h1>')
})

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (err instanceof NotAuthorized) {
    res.status(403).send(err.message || 'Not Authorized')
  } else {
    res.status(500).send(err.message || err)
  }
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
