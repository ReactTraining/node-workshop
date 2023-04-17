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

export function getAuthUser(authenticated: boolean = true) {
  const user: AuthUser = {
    id: 12,
    name: getUserHome(),
  }
  return authenticated ? user : false
}

function getUserHome(): string {
  return process.env[process.platform == 'win32' ? 'USERPROFILE' : 'HOME'] || 'Unknown Name'
}
