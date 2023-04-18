import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res, next) => {
  res.send('<h1>Express Home<h1>')
})

app.get('/users/:userId', (req, res) => {
  const userId = req.params.userId

  getUser(userId).then((user) => {
    res.json(user) // responding with JSON header information
  })
})

app.use((req, res) => {
  res.status(404).send('<h1>Not Found</h1>')
})

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack)
  res.status(500).send('Server Error')
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
