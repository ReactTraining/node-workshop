import fs from 'fs'
import path from 'path'
// const fsPromises = require('fs').promises // the way the docs show
// import { promises as fsPromises } from 'fs' // the esm version
// import fetch from 'node-fetch'

// function getCSVData(dataPath: string) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(dataPath, 'utf8', (err, data) => {
//       if (err) {
//         reject(err)
//         return
//       }
//       resolve(data)
//     })
//   })
// }

// const dataPath = path.join(__dirname, `data.csv`)

// getCSVData(dataPath).then((data) => {
//   console.log(data)
// })

function sleep(ms: number): Promise<void> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res()
    }, ms)
  })
}

sleep(5000).then((x) => {
  console.log('we woke up')
})
