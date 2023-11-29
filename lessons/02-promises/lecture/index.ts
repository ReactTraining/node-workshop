// import fs from 'fs'
import path from 'path'
import { promises as fsPromises } from 'fs' // the esm version
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
