function csvToJSON(csv) {
  let json = csv
    .split('\n')
    .map((item) => {
      const [id, name] = item.split(',')
      return `{ "id": ${id}, "name": "${name}" }`
    })
    .join(',\n')

  return `[${json}]`
}

module.exports = csvToJSON
