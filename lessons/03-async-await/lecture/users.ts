export type Account = {
  accountId: number
}

export type User = {
  name: string
}

export type DBUser = User & {
  userId: number
}

export function createAccount(): Promise<Account> {
  return Promise.resolve({ accountId: 1 })
}

export function addAccountUser(accountId: number, user: User): Promise<DBUser> {
  return Promise.resolve({ userId: 5, name: user.name })
}

export function emailUser(user: DBUser) {
  return Promise.resolve()
}

export function logNewUserStats(accountId: number) {
  return Promise.resolve()
}
