// Okay you caught us, it was all fake. But we can't really expect you
// to setup local databases on your machine specifically for a workshop.
// If you did use a third party database driver for an SQL-based
// database, it would probably work a little like this:
// db.query('SELECT ...').then(results => {})

const data = [
  { id: 1, name: 'Michael Jackson' },
  { id: 2, name: 'Ryan Florence' },
  { id: 3, name: 'Brad Westfall' },
  { id: 4, name: 'Chance Stickland' },
]

export const db = {
  query: (sql: string) => {
    if (!sql.startsWith('SELECT')) return Promise.reject('Invalid SQL, must start with SELECT')

    const results = data.filter((row) => {
      const formatted = sql.toLowerCase().replace(/(`|')/g, '')
      if (formatted === 'select * from user') return true
      const matches = formatted.match(/id = (\d+)/)
      return matches ? row.id === parseInt(matches[1], 10) : false
    })

    return Promise.resolve(results)
  },
}
