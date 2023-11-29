import { User, createAccount, addAccountUser, emailUser, logNewUserStats } from './users'

async function signup(user: User) {
  try {
    const account = await createAccount() // 3s
    const dbUser = await addAccountUser(account.accountId, user) // 3s
    Promise.all([emailUser(dbUser), logNewUserStats(account.accountId)]) // 3s
    return 'good'
  } catch (e) {
    // do stuff
    return Promise.reject()
  }
}

signup({ name: 'brad' })
  .then((x) => {
    console.log('✅ User Added')
  })
  .catch(() => {})
