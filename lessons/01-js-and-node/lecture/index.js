/**
 * Intro
 */

// EcmaScript, JavaScript, Node

// ES2023

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

// // CommonJS (older)
// const SomeThing = require('SomeThing')

// // ESModules
// import React from 'React'

/**
 * Env
 */

// require('dotenv').config()
// console.log(process.env.SECRET) // from .env
// console.log(process.env.NODE_ENV)

/**
 * Scope
 */

// function scope() {
//   for (let i = 0; i < x.length; i++) {
//     const item = x[i]
//     console.log(item)
//   }

//   // console.log(i)
//   // console.log(item)
// }
// scope()

/**
 * Object and Array Literals
 */

// const person = { name: 'brad', age: 90 }

/**
 * Function Types
 */

/**
 * Expressions and Expression Chaining
 */

// function getPerson() {
//   return { name: 'brad', hobbies: ['code'] }
// }

// const x = getPerson().hobbies[0].substring(0, 2)

/**
 * Map, Filter, Reduce, Find, Includes
 */

// const cart = [34, 90, 78]

// const total = cart.reduce((runningTotal, item) => runningTotal + item, 0)

// console.log(total)

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
    return name ? `{ "id": ${id}, "name": "${name.trim()}" }` : false
  })
  .filter(Boolean)
  .join(',\n')

json = `{ "users": [${json}] }`

console.log(JSON.parse(json)) // string -> object
