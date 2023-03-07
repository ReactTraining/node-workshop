import express from 'express'
const app = express()
const port = 3000

app.use((req, res, next) => {
  // console.log(req.???)
  console.log('we did some work for all routes')
  next('any')
})

app.get('/', (req, res) => {
  res.send('<h1>Express Home<h1>')
})

app.get('/users', (req, res) => {
  res.send('<h1>Express Users<h1>')
})

app.use((req, res) => {
  res.status(404).send('<h1>Not Found</h1>')
})

app.use((err: any, req: any, res: any, next: any) => {
  console.error(err)
  res.status(500).send('Server Error')
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
