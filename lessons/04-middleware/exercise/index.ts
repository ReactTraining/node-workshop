import express from 'express'
import { getAuthUser } from './auth'

const app = express()
const port = 3000

app.use((req, res, next) => {
  req.user = getAuthUser()
  next()
})

app.get('/', (req, res) => {
  res.send('<h1>Express Home<h1>')
})

app.get('/account', (req, res) => {
  if (req.user) res.send(`<h1>Hello ${req.user && req.user.name}, you are logged in<h1>`)
})

app.use((req, res) => {
  res.status(404).send('<h1>Not Found</h1>')
})

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.message, err.stack)
  res.status(500).send(err.message || err)
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
