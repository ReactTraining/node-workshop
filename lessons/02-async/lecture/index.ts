import fs from 'fs'
import path from 'path'
// const fsPromises = require('fs').promises // the way the docs show
// import { promises as fsPromises } from 'fs' // the esm version
// import fetch from 'node-fetch'

import fetch from 'node-fetch'

async function getVehicle(url: string) {
  const response = await fetch(url) // .then((response) => response.json())
  return response.json()
}

function getPersonVehicles(id: number): Promise<string[]> {
  return fetch(`https://swapi.dev/api/people/${id}`)
    .then((response) => response.json())
    .then((data) => data.vehicles)
}

getPersonVehicles(1)
  .then((vehicles) => {
    const promiseArray = vehicles.map((url) => getVehicle(url))
    return Promise.all(promiseArray)
  })
  .then((allVehicles) => {
    console.log(allVehicles)
  })

function main() {
  getStuffA()
    .then((a) => {
      // work here
      const n = format(a)
      return getStuffB(a)
    })
    .then((b) => {
      // we dont have access to n here
    })
}

async function main() {
  const a = await getStuffA()
  const n = format(a)

  const b = await getStuffB(a)
  // by the time I have b I also have n
}
