console.log("let's get started")

/**
 * Intro
 */

// EcmaScript, JavaScript, Node

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

// CommonJS
// ESModules

/**
 * Env
 */

// require('dotenv').config()
// console.log(process.env.SECRET) // from .env
// console.log(process.env.NODE_ENV)

/**
 * Scope
 */

// var x = [5, 6, 7]
// function scope() {
//   for (var i = 0; i < x.length; i++) {
//     var item = x[i]
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

/**
 * File System
 */

// const fs = require('fs')
// const path = require('path')
// const dataPath = path.join(__dirname, `data.csv`)
// const data = fs.readFileSync(dataPath, 'utf8')

// let json = data
//   .split('\n')
//   .map((item) => {
//     const [id, name] = item.split(',')
//     return `{ "id": ${id}, "name": "${name}" }`
//   })
//   .join(',\n')

// json = `{ "users": [${json}] }`

// console.log(JSON.parse(json))
