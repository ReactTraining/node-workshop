import express from 'express'
import { getAuthUser } from './auth'

const app = express()
const port = 3000

// This is the only middleware function you need to work on.
// See the README for more information.
app.get('*', (req, res, next) => {
  const authUser = getAuthUser()
  console.log(authUser)
  next()
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
  console.error(err.message, err.stack)
  res.status(500).send(err.message || err)
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
