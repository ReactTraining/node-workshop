// https://nodejs.org/docs/latest-v14.x/api/globals.html
// console.log(process.versions)
// console.log('process.cwd():', process.cwd())
// console.log('__dirname:', __dirname)
// console.log('__filename:', __filename)

// function getUsers() {
//   return [
//     { name: 'brad', age: 40 },
//     { name: 'doug', age: 50 },
//   ]
// }

// const result = getUsers()
//   .map((user) => (user.age > 41 ? user : null))
//   .filter(Boolean)

// console.log(result)

// console.log(typeof Boolean)

const fs = require('fs')
const path = require('path')

const dataPath = path.join(__dirname, `data.csv`)
const data = fs.readFileSync(dataPath, 'utf8')

let json = data
  .split('\n')
  .map((line) => {
    const [id, name] = line.split(',')
    return name ? `{ "id": ${id}, "name": "${name.trim()}"}` : null
  })
  .filter(Boolean)
  .join(',\n')

json = `[${json}]`

console.log(JSON.parse(json))
