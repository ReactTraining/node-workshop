// const data = require('./data.json')
// console.log(data)

// // Task:
// // Output `Ryan's id is 2`

// // Use <Array>.find() to find the object that has Ryan's name
// // Use <String>.includes() to see if a string includes a value (case sensitive)
// // Use <String>.split() to split a string into an array based on the argument delimiter
// // Use Template Strings to create the output

// // All exercises have a `.final` for files that you worked on if you need to see a solution

const data = require('./data.json')
// console.log(data)

// Task 1:
// Output `Ryan's id is 2`

const ryan = data.users.find((user) => user.name.includes('Ryan'))
const name = ryan.name.split(' ')[0]
console.log(`${name}'s id is ${ryan.id}`)
