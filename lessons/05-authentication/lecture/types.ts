import express from 'express'

declare global {
  namespace Express {
    interface Request {
      user: AuthUser
    }
  }
}

type AuthUser =
  | {
      id: number
      name: string
    }
  | false
