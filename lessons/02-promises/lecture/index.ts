// import fs from 'fs'
import path from 'path'
// const fsPromises = require('fs').promises // the way the docs show
import { promises as fsPromises } from 'fs' // the esm version
import fetch from 'node-fetch'

// function getCSVFile(dataPath: string) {
//   return fsPromises
//     .readFile(dataPath, 'utf8')
//     .then((data) => {
//       // ?????
//       return data
//     })
//     .catch((error) => {})
// }

// const dataPath = path.join(__dirname, `data.csv`)

// getCSVFile(dataPath).then((data) => {
//   console.log('second then', data)
// })

function getVehicle(url: string) {
  return fetch(url).then((response) => response.json())
}

function getPersonVehicles(id: number): Promise<string[]> {
  return fetch(`https://swapi.dev/api/people/${id}`) // HTTP:GET
    .then((response) => response.json())
    .then((data) => data.vehicles)
}

getPersonVehicles(1)
  .then((vehicles) => {
    const p = vehicles.map((url) => getVehicle(url))

    return Promise.all(p)
  })
  .then((allVehicles) => {
    // this .then will get called when line 37 resolves all promises
    console.log(allVehicles)
  })
