// import './index.final'
import fs from 'fs'
import path from 'path'
import readlineSync from 'readline-sync'

// Get the lessonType and lessonFiles by allowing the user to select
// from a CLI menu. Use the console.logs at the bottom of this page
// to show you got the right result.

let selectedLesson = ''
let lessonType = ''
let lessonFiles: string[] = []

const lessonsPath = path.resolve(__dirname /* 🔴 FINISH THIS - SEE README */)
const lessonFolders = fs.readdirSync(lessonsPath).filter((item) => {
  return fs.lstatSync(path.resolve(lessonsPath, item)).isDirectory()
})

let menuOptions = lessonFolders
let choice = readlineSync.keyInSelect(menuOptions)

selectedLesson = lessonFolders[choice]
console.log(selectedLesson)

// console.log(lessonType) // example: 'exercise'
// console.log(lessonFile) // example: ['index.ts', 'README.md']
