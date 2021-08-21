import express from 'express'
import { db } from './db'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Express Home<h1>')
})

app.get('/users', (req, res, next) => {
  // db.query('SELECT * FROM user')
  res.json({})
})

app.get('/users/:id', (req, res, next) => {
  // Valid users have id's: 1, 2, 3, and 4
  const { id } = req.params
  // Parameters always come as strings. So verify it's a valid numeric string with `isInteger(id)`
  // and respond with a 404 not found if it's not valid

  // db.query('SELECT * FROM user WHERE user.id = 1')
  res.json({})
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

function isInteger(str: string) {
  return Number.isInteger(+str) && +str > 0
}
