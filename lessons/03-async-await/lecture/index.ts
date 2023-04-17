import { User, createAccount, addAccountUser } from './users'

function signup(user: User) {
  return createAccount()
    .then((account) => {
      return addAccountUser(account.accountId, user)
    })
    .then((user) => {
      // emailUser(user)
      // logNewUserStats(account.accountId)
    })
}

signup({ name: 'brad' }).then(() => {
  console.log('✅ User Added')
})
