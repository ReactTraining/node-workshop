// https://nodejs.org/docs/latest/api/globals.html

// function scope() {
//   for (let i = 0; i < x.length; i++) {
//     const item = x[i]
//     console.log(item)
//   }

//   // console.log('here', i)
//   // console.log(item)
// }
// scope()
// var x = [5, 6, 7] // the memory allocation is constant

/**
 * Expressions and Expression Chaining
 */

/**
 * Map, Filter, Reduce, Find, Includes
 */

/**
 * File System
 */

const fs = require('fs')
const path = require('path')
const dataPath = path.join(__dirname, 'data.csv')
const data = fs.readFileSync(dataPath, 'utf8')

let json = data
  .split('\n')
  .filter(Boolean)
  .map((item) => {
    const [id, name] = item.split(',') // ['1', 'Mi....']
    return `{ "id": ${id}, "name": "${name}" }`
  })
  .join(',\n')

json = `{ "users": [${json}] }`

console.log(JSON.parse(json)) // object
