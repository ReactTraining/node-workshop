# Promises Lecture

## Main Topics to Cover

- ✅ General overview of asynchronous code
- ✅ Single Threaded JavaScript
- ✅ Event Loop
- ✅ `process.nextTick()`
- ✅ `setTimeout(fn, 0)` and `setImmediate()`
  - https://nodejs.dev/en/learn/understanding-setimmediate/
- ✅ fetch API
- ✅ Promises

## Lecture

Progression of code for making our own promise-based function:

```ts
// ----------------
// 1. Start
const data = fs.readFileSync(dataPath, 'utf8')

// ----------------
// 2. Callback Approach
fs.readFile(dataPath, 'utf8', (err, data) => {
  console.log(data)
})

// ----------------
// 3. Custom getCSVFile Function (callbacks)
type Callback = (err: NodeJS.ErrnoException | null, data?: string) => void

function getCSVFile(path: string, cb: Callback) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      cb(err)
      return
    }
    cb(null, data)
  })
}

getCSVFile(dataPath, (err, data) => {
  console.log(err, data)
})

// ----------------
// 4. Use fsPromises to start explaining promises

// const fsPromises = require('fs').promises
import { promises as fsPromises } from 'fs'

function getCSVFile(path: string) {
  const p = fsPromises.readFile(path, 'utf8')
  p.then((data) => {
    console.log(data)
  })
  p.catch((err) => {
    console.log(err)
  })
  // fs.readFile(path, 'utf8', (err, data) => {
  //   if (err) {
  //     cb(err)
  //     return
  //   }
  //   cb(null, data)
  // })
}

getCSVFile(dataPath)

// ----------------
// What if fsPromise never existed, let's make our own promise
// 5. Refactor the old callback code to use promises
function getCSVFile(path: string) {
  return new Promise<string>((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err)
        return
      }
      resolve(data)
    })
  })
}

getCSVFile(dataPath).then((data) => {
  console.log(data)
})
```

It would be good to mention that most the time we use promises, we're consumers of an API or a native function that gives us a promise, so we don't typically have to do `new Promise` a lot. Let's consume this `fetch` promise-based function to get data from another server:

```ts
// ----------------
// 6.

// Change the lesson to start
import fetch from 'node-fetch'

function getVehicle(url: string) {
  return fetch(url).then((response) => response.json())
}

function getPersonVehicles(id: number): Promise<string[]> {
  return fetch(`https://swapi.dev/api/people/${id}`)
    .then((response) => response.json())
    .then((data) => data.vehicles)
}

getPersonVehicles(1)
  .then((vehicles) => {
    const p = vehicles.map((url) => getVehicle(url))
    return Promise.all(p)
  })
  .then((allVehicles) => {
    console.log(allVehicles)
  })
```
