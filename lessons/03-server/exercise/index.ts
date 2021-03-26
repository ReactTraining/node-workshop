import express from 'express'
import { db } from './db'
const app = express()
const port = 3000

// Valid SQL statements:
// db.select('SELECT * FROM user')
// db.select('SELECT * FROM user WHERE user.id = 1')
// db.select('SELECT * FROM user WHERE user.id = 2')
// db.select('SELECT * FROM user WHERE user.id = 3')
// db.select('SELECT * FROM user WHERE user.id = 4')

app.get('/', (req, res) => {
  res.send('<h1>Express Home<h1>')
})

app.get('/users', (req, res, next) => {
  res.json({})
})

app.get('/users/:id', (req, res, next) => {
  const { id } = req.params
  // id will be a string, check to see if it represents an integer with `isInteger(id)`
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
