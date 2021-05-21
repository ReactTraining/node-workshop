// import './app.ts'
import * as http from 'http'

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')

  const url = req.url
  if (url === '/users') {
    res.write('<h1>Users</h1>')
    res.end()
  } else {
    res.write('<h1>Home</h1>')
    res.end()
  }
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
