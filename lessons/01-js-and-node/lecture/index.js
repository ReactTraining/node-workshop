const fs = require('fs')
const path = require('path')

const dataPath = path.join(__dirname, `data.csv`)
const data = fs.readFileSync(dataPath, 'utf8') // wait

let json = data
  .split('\n')
  .filter((item) => item.length > 0)
  .map((item) => {
    const [id, name] = item.split(',')
    return `{ "id": ${id}, "name": "${name.trim()}" }`
  })

json = `{ "users": [${json}] }`

console.log(JSON.parse(json))
