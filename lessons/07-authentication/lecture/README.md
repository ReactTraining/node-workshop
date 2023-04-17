# Authentication Lecture

All the code is already written and works. This lecture is more of a walk-through to explain authentication, how middleware can help, and JWT.

## Main Topics to Cover

- ✅ JWT
- ✅ Cookies
- ✅ HTTP-Only Cookies
- ✅ Authentication Middleware

This is also the first time in this curriculum that we are breaking the routes out of the `app.ts` file and we're starting to see some more organization of out application.

## Refactor to promise-based JWT

If there is time, we can do some work to refactor the `jwtStartSession` function to be promise based since it's synchronous right now and probably blocking IO.

Here are the docs for it: https://www.npmjs.com/package/jsonwebtoken

Here is the potential refactor:

```ts
export function jwtStartSession(userId: number, req: express.Request, res: express.Response) {
  const payload = {
    userId,
    exp: Math.floor(Date.now() / 1000) + 60 * 60, // one hour
  }
  return new Promise((resolve, reject) => {
    jwt.sign(payload, tokenSecret, (error, token) => {
      if (error) return reject(error)
      new Cookies(req, res).set(cookieName, token, {
        overwrite: true,
      })
      resolve(token)
    })
  })
}
```
