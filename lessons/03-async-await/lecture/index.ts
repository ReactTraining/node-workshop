import { User, createAccount, addAccountUser, emailUser, logNewUserStats } from './users'

async function signup(user: User) {
  try {
    const account = await createAccount()
    const dbUser = await addAccountUser(account.accountId, user)
    await Promise.all([emailUser(dbUser), logNewUserStats(account.accountId)])
    return true
  } catch (err) {}
}

async function main() {
  const x = await signup({ name: 'brad' })
  console.log('✅ User Added', x)
}

main()
