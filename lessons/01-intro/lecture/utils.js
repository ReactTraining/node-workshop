function csvToJSON() {
  let json = data
    .split('\n')
    .map((item) => {
      const [id, name] = item.split(',')
      return `{ "id": ${id}, "name": "${name}" }`
    })
    .join(',\n')

  json = `{ "users": [${json}] }`
}
