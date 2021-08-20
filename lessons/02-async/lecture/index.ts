import fetch from 'node-fetch'

function getVehicle(url: string) {
  return fetch(url).then((response) => response.json())
}

function getPersonVehicles(id: number) {
  return fetch(`https://swapi.dev/api/people/${id}`)
    .then((response) => {
      return response.json()
    })
    .then((data) => data.vehicles)
}

async function main() {
  const vehicles = await getPersonVehicles(1)

  const p = vehicles.map((url: string) => getVehicle(url))
  const results = await Promise.all(p)
  return results
}

main().then((results) => {
  console.log(results)
})
