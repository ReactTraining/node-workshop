import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res, next) => {
  res.send('<h1>Express Home<h1>')
})

app.get('/users', (req, res) => {
  res.send('<h1>Express Users<h1>')
})

// doing app.use is like the ultimate wildcard
app.use((req, res, next) => {
  res.status(404).send('<h1>Not Found</h1>')
})

// generic error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack)
  res.status(500).send('Server Error')
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
