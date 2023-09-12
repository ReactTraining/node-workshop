import fs from 'fs'
import path from 'path'
import readlineSync from 'readline-sync'

let selectedLesson

const lessonsPath = path.resolve(__dirname, 'my-lessons')

const lessonFolders = fs.readdirSync(lessonsPath).filter((item) => {
  return fs.lstatSync(path.resolve(lessonsPath, item)).isDirectory()
})

const choice = readlineSync.keyInSelect(lessonFolders)
if (choice === -1) {
  process.exit(0)
}

selectedLesson = lessonFolders[choice]

console.log(selectedLesson)
