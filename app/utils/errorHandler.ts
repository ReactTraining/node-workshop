import express from 'express'
const { UserError, NotFound } = require('./throwables')

export const errorHandler = (
  err: any,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  // 400
  if (err instanceof UserError) {
    res.status(400).send(err.message)

    // 404
  } else if (err instanceof NotFound) {
    res.status(404).send(err.message || 'Sorry, we cannot find this content.')

    // Non user-error (500)
  } else {
    console.error(err)
    res.status(500).send('Our server is experiencing an error.')
  }
}
