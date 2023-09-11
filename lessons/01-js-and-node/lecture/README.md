# Intro Lecture

## Main Topics to Cover

- ✅ Overview
  - Node vs JavaScript
  - MDN is the official documentation for JS?
  - NVM
  - How version numbers work
  - Now NPM and package.json works
  - package.json scripts
  - Modules (CommonJS vs ESM)
- ✅ Scope
- ✅ Object and Array literals
- ✅ Function Types
- ✅ Expressions and Expression Chaining
- ✅ File System (fs)

This first lesson gives the attendees an overview of modern JavaScript syntax. Each topic doesn't have to be taught in exactly this order, but these should be the main takeaways by the lesson is done.

## Overview

Node is:

- Asynchronous, event-driven, and non-blocking
- Single Threaded
- Uses Event Loop to handle requests and concurrency

Modules:

- Modules are file-based. Import any variable from a module including numbers, strings, arrays, classes, and functions.
- We can also resolve a folder with an `index.js` file
- Modules resolve: Core Modules, `npm_modules`, local modules

## Scope

The staring point for the lecture code has function scope with `var`. If we change the `i` to use `let` and `item` to use `const` we can demonstrate block scope.

Talking Points:

- Function Scope vs Block Scope (`var` vs `let` vs `const`)
- `this` in JavaScript

## Object and Array Literals

- We don't need classes to have objects
- Destructuring Objects and Arrays

## Function Types

Talking Points:

- Declarations
- Expressions
- Arrow Functions (with implicit returns)
- Callbacks

## Expressions and Expression Chaining

Talking Points:

- Map, Reduce, Filter, Find

## File System (synchronous `fs`)

```js
const fs = require('fs')
const path = require('path')
const dataPath = path.join(__dirname, `data.csv`)
const data = fs.readFileSync(dataPath, 'utf8')

let json = data
  .split('\n')
  .map((item) => {
    const [id, name] = item.split(',')
    return `{ "id": ${id}, "name": "${name}" }`
  })
  .join(',\n')

json = `{ "users": [${json}] }`

console.log(JSON.parse(json))
```

The above code has bugs unless we do these fixes:

```js
let json = data
  .split('\n')
  .map((item) => {
    const [id, name] = item.split(',')
    return id ? `{ "id": ${id}, "name": "${name.trim()}" }` : false // <-- Add ternary
  })
  .filter(Boolean) // <-- Add filter
  .join(',\n')

json = `{ "users": [${json}] }`

console.log(JSON.parse(json))
```
