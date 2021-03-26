import express from 'express'

export const errorHandler = (
  err: any,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  res.status(err.status || 500).send(err.message || 'Our server is experiencing an error.')
}
