import fetch from 'node-fetch'

export function getUsers() {
  return fetch(`https://swapi.dev/api/people/`)
    .then((response) => response.json())
    .then((data) => data.results)
}

export function getUser(userId: number) {
  return fetch(`https://swapi.dev/api/people/${userId}`).then((response) => response.json())
}
