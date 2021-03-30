import path from 'path'
import fs from 'fs'
import { promises as fsPromises } from 'fs' // the esm version

// import fetch from 'node-fetch'

const dataPath = path.join(__dirname, `data.csv`)

function getData(path: string) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(error)
        return
      }
      resolve(data)
    })
  })
}

async function foo() {
  try {
    const data = await getData(dataPath)
    return data
  } catch (e) {}
}

async function main() {
  foo().then((x) => {
    console.log(x)
  })
}

main()
