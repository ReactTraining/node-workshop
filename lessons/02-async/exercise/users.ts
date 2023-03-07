const data = require('./data.json')

interface User {
  id: number
  name: string
}

export function getUsers(): Promise<User[]> {
  // fake a database call
  return Promise.resolve(data).then((data) => data.users)
}
