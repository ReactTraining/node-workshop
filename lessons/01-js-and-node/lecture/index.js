// https://nodejs.org/docs/latest-v14.x/api/globals.html
console.log(process.versions)
console.log('process.cwd():', process.cwd())
console.log('__dirname:', __dirname)
console.log('__filename:', __filename)

// Let's talk about scope

// var x = [5, 6, 7]
// function scope() {
//   for (var i = 0; i < x.length; i++) {
//     var item = x[i]
//     console.log(item)
//   }

//   console.log(i)
//   console.log(item)
// }
// scope()
