const fs = require('fs')
const path = require('path')

const dataPath = path.join(__dirname, 'data.csv')

function csvToJSON(path) {
  const data = fs.readFileSync(path, 'utf8')
  const lines = data
    .split('\n')
    .filter(Boolean)
    .map((line) => {
      const [id, name] = line.split(',')
      return `{ "id": ${id.trim()}, "name": "${name.trim()}"  }`
    })

  return `[${lines.join(',')}]`
}

console.log(JSON.parse(csvToJSON(dataPath)))

function csvToJSON() {
  // Declaration
}

const csvToJSON = function () {
  const this
  return true
}

function outerScope() {
  const that = this

  const csvToJSON = function () {
    console.log(this, that)
  }
}
