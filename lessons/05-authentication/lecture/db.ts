const data = [{ id: 3, name: 'Fake User', email: 'hello@reacttraining.com' }]

export const db = {
  query: (sql: string) => {
    if (
      sql === "SELECT * FROM user WHERE user.id = '3'" ||
      sql ===
        "SELECT * FROM user WHERE user.email = 'hello@reacttraining.com' AND user.password = 'abc123'"
    ) {
      return Promise.resolve(data)
    } else {
      // Empty array signifies SQL found nothing. Usually databases won't
      // throw errors if you run an SQL statement that finds nothing, they
      // just give you no results
      return Promise.resolve([])
    }
  },
}
