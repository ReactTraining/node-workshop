import { User, createAccount, addAccountUser, emailUser, logNewUserStats } from './users'

// function signup1(user: User) {
//   return createAccount() // 50ms
//     .then((account) => {
//       return addAccountUser(account.accountId, user) // 50ms
//     })
//     .then((dbuser) => {
//       const promiseArray = [emailUser(dbuser), logNewUserStats(account.accountId)]
//       return Promise.allSettled(promiseArray)
//     })
// }

async function signup(user: User) {
  const account = await createAccount()
  const dbuser = await addAccountUser(account.accountId, user)

  const promiseArray = [emailUser(dbuser), logNewUserStats(account.accountId)]
  return await Promise.allSettled(promiseArray)
}

async function main() {
  try {
    const x = await signup({ name: 'brad' })
    console.log(x)
  } catch (e) {
    console.log('error', e)
  }
}

main()
