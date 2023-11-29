import { getUsers } from './users'

function getHTMLNames(): Promise<string> {
  return getUsers().then((users) => {
    return users
      .map((u) => u.name)
      .map((n) => `<h1>${n}</h1>`)
      .join('\n')
  })
}

getHTMLNames().then((names) => {
  console.log(names)
})
