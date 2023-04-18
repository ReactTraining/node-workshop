/**
 * Intro
 */

// EcmaScript, JavaScript, Node

//                     2009 (node)
// ES1   -----> ES3 ES5 (2010) ---> ES6 (ES2015) ------- ES2023

/**
 * Versions
 */

// Node Versions
// https://nodejs.dev/en/about/releases/

/**
 * Globals
 */

// https://nodejs.org/docs/latest/api/globals.html
// console.log(process.versions)
// console.log('process.cwd():', process.cwd())
// console.log('__dirname:', __dirname)
// console.log('__filename:', __filename)

/**
 * Modules
 */

// // CommonJS
// const lodash = require('lodash') // node standard

// // ESModules
// import lodash from 'lodash' // JS standard

/**
 * Env
 */

// require('dotenv').config()
// console.log(process.env.SECRET)
// console.log(process.env.NODE_ENV)

/**
 * Scope
 */

// var x = [5, 6, 7]
// function scope() {
//   for (let i = 0; i < x.length; i++) {
//     const item = x[i]
//     console.log(item)
//   }

//   console.log(i)
//   console.log(item)
// }
// scope()

/**
 * Object and Array Literals
 */

/**
 * Function Types
 */

/**
 * Expressions and Expression Chaining
 */

/**
 * Map, Filter, Reduce, Find, Includes
 */

// const prices = [5, 7, 10]

// const total = prices.reduce((runningTotal, item) => {
//   return runningTotal + item
// }, 0)

// function someFunction(condition, someArray) {
//   if (condtion) {
//     return 'a'
//   } else {
//     for (let index = 0; index < someArray.length; index++) {
//       const element = array[index];
//     }
//     return 'b'
//   }
// }

// const someFunction = (condition, someArray) => condition ? 'a' : someArray.map()

// function someFunction(condition, someArray) {
//   return condition ? 'a' : someArray.map()
// }

// const person = { name: 'brad', age: 90 }
// const occupation = { job: 'web', salary: 9 }

// // Spread is when we "Create"
// const brad = { ...person, ...occupation, age: 80 }

// // Rest is when we "take apart" something
// function someFunction({ other, ...x }) {
//   console.log(other) // o
//   console.log(x) // { url: '', foo: 'bar' }
// }

// someFunction({ url: '', other: 'o', foo: 'bar' })

/**
 * File System
 */

const fs = require('fs')
const path = require('path')
const dataPath = path.join(__dirname, `data.csv`)
const data = fs.readFileSync(dataPath, 'utf8')

let json = data
  .split('\n')
  .map((item) => {
    const [id, name] = item.split(',')
    return name ? `{ "id": ${id}, "name": "${name.trim()}"}` : false
  })
  .filter(Boolean)
  .join(',\n')

json = `[${json}]`

console.log(JSON.parse(json))
