import { getUsers } from './users'

// Task:
// Output HTML for just the names, similar to:
// <h1>Michael Jackson</h1>
// <h1>Ryan Florence</h1>
// <h1>Brad Westfall</h1>
// <h1>Chance Stickland</h1>

// First, get an array of user objects from getUsers
// Then, use <Array>.map to turn it into an array of names (strings)
// Then use <Array>.map again to turn the array of strings into an array of HTML strings
// Then use <Array>.join('\n') to turn the array of strings into one string joined by a newline
// For a bonus, try the above with multiple uses of `.then` for practice

function getHTMLNames(): Promise<string> {
  return getUsers().then((users) => {
    return users.map((u) => `<h1>${u.name}</h1>`).join('\n')
  })
}

getHTMLNames().then((names) => {
  console.log(names)
})
