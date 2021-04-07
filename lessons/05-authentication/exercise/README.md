# Exercise: Authentication

The code is setup just like the lecture, only now we have JWT's that expire in only 10 seconds (so we can test them out). When you visit `/login` and then `/account` you should be logged in. But if you wait 10 seconds and refresh on `/account` you will be logged out.

## Task 1: More granular Authentication Middleware

Open `router.js`.

The way the code is written, the `router.use(requireAuthentication)` is like a giant road-block that doesn't allow any middleware past it to run unless we are logged in (with the exception of the error handling one).

This might be just what you want, but if we were not logged in and we tried to visit a page that doesn't exist, we wouldn't get a `404 Not Found` returned, we would get a `403 Not Authorized`. Perhaps we just want to do the `requireAuthentication` on a per route basis.

In express, you can do any number of middleware in calls to things like `router.get()`. For example:

```js
router.get('/path', m1, m2, m3, () => {})
```

In this case, we have three middleware functions before the last middleware function. Middleware can be named-functions that we reuse in lots of routes like `m1`, `m2`, and `m3`, or it can be an inline function like the last function in the example.

- All you need to do is get rid of `router.use(requireAuthentication)` and move the `requireAuthentication` to be the middle argument of the existing `router.get('/account')` route. Not when someone goes to `/account`, we will require that they are logged in before getting to the inline function.

## Task 2: Renew Authentication

If the user is logged in and visits a valid page, we should renew their login for an extended 10 seconds.

- Update the `requireAuthentication` so that after we assign `user` to the `req.user` and before we do `next()`, call the `jwtStartSession(user.id, req, res)` which will renew the session by starting a new JWT with a new timestamp. Remember though, this is a promise-based function so this is not what you want to do:

```js
// 🙈 DON'T DO IT THIS WAY
jwtStartSession(user.id, req, res)
next()
```

This would call `next()` before the promise resolves. Use a `.then()` instead.
