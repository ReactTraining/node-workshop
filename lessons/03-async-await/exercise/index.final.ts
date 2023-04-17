import fetch from 'node-fetch'

// Each exercise below implements a main() function
main()

/****************************************
  Exercise: 1
*****************************************/

function wait(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

// Re-write main to use async/await

async function main() {
  await wait(1000)
  console.log('Wait for one second')
}

/****************************************
  Exercise: 2
*****************************************/

// Re-write all functions to use async/await

// async function getVehicle(url: string) {
//   const response = await fetch(url)
//   const vehicle = await response.json()
//   return vehicle
// }

// async function getPersonVehicles(id: number): Promise<string[]> {
//   const response = await fetch(`https://swapi.dev/api/people/${id}`)
//   const person = await response.json()

//   // The above could also be written as
//   // const person = await fetch(`https://swapi.dev/api/people/${id}`).then((response) => response.json())

//   return person.vehicles
// }

// async function main() {
//   const vehicles = await getPersonVehicles(1)
//   const promiseArray = vehicles.map((url) => getVehicle(url))
//   const allVehicles = await Promise.all(promiseArray)
//   console.log('---')
//   console.log(allVehicles)
// }

/****************************************
  Exercise: 3
*****************************************/

// Your starting point here is actually the solution for the above exercise
// except the getVehicle function will fail for one of its requests. If you
// run the code you should see an Unhandled Promise Rejection Error. Fix the
// error with a try/catch and see if you can get the reject message to be
// console logged in the main function when it catches. Also, swap out
// Promise.all for Promise.allSettled to see how that changes things

// async function getVehicle(url: string) {
//   if (url === 'https://swapi.dev/api/vehicles/30/') {
//     return Promise.reject('404: Not Found')
//   } else {
//     const response = await fetch(url)
//     const vehicle = await response.json()
//     return vehicle
//   }
// }

// async function getPersonVehicles(id: number): Promise<string[]> {
//   const person = await fetch(`https://swapi.dev/api/people/${id}`).then((response) =>
//     response.json()
//   )
//   return person.vehicles
// }

// async function main() {
//   try {
//     const vehicles = await getPersonVehicles(1)
//     const promiseArray = vehicles.map((url) => getVehicle(url))
//     const allVehicles = await Promise.all(promiseArray)
//     console.log('---')
//     console.log(allVehicles)
//   } catch (err) {
//     console.log(err)
//   }
// }
