import fetch from 'node-fetch'

// function getVehicle(url: string) {
//   return fetch(url).then((response) => response.json())
// }

function getPersonVehicles(id: number): Promise<string[]> {
  return fetch(`https://swapi.dev/api/people/${id}`)
    .then((response) => response.json())
    .then((data) => data.vehicles)
}

async function main() {
  const vehicles = await getPersonVehicles(1)

  const allPromises = vehicles.map((v) => fetch(v).then((response) => response.json()))
  const allVehicles = await Promise.all(allPromises)
  return allVehicles
}

console.log('a')
main().then((allVehicles) => {
  console.log(allVehicles)
})
console.log('b')
