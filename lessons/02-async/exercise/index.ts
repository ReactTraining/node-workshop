import { getUsers } from './users'

// Task:
// Output HTML for just the names, similar to:
// <h1>Michael Jackson</h1>
// <h1>Ryan Florence</h1>
// <h1>Brad Westfall</h1>
// <h1>Chance Stickland</h1>

// The whatIsThis variable is an array of user objects
// First, use <Array>.map to turn it into an array of names (strings)
// Then use <Array>.map again to turn the array of strings into an array of HTML strings
// Then use <Array>.join('\n') to turn the array of strings into one string joined by a newline
// For a bonus, try the above with multiple uses of `.then`

function getHTMLNames(): Promise<string> {
  return getUsers().then((whatIsThis) => {
    console.log(whatIsThis)

    // Since this is TypeScript, and we've annotated above that getHTMLNames returns
    // a promise that will resolve to a string, we have to return a string or we'll
    // get errors. Eventually we'll return a string of HTML names:
    return ''
  })
}

getHTMLNames().then((names) => {
  console.log(names)
})
