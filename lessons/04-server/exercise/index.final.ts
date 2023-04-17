import express from 'express'
import { db } from './db'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Express Home<h1>')
})

app.get('/users', (req, res, next) => {
  db.query('SELECT * FROM user')
    .then((results) => {
      res.json(results)
    })
    .catch(next)
})

app.get('/users/:id', (req, res, next) => {
  const { id } = req.params
  if (!isInteger(id)) {
    next()
    return
  }
  db.query(`SELECT * FROM user WHERE user.id = '${id}'`)
    .then((results) => {
      if (results.length === 0) {
        next()
        return
      }
      res.json(results[0])
    })
    .catch(next)
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
