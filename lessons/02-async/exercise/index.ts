import { getUsers } from './users'

async function getHTMLNames(): Promise<string> {
  const users = await getUsers()
  const names = users.map((u) => u.name)
  return names.map((n) => `<h1>${n}</h1>`).join('\n')
}

getHTMLNames().then((names) => {
  console.log(names)
})
