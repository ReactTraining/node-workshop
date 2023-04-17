import fs from 'fs'
import path from 'path'
// const fsPromises = require('fs').promises // the way the docs show
// import { promises as fsPromises } from 'fs' // the esm version
// import fetch from 'node-fetch'

const dataPath = path.join(__dirname, `data.csv`)

// Let's make this asynchronous
const data = fs.readFileSync(dataPath, 'utf8')
console.log(data)
