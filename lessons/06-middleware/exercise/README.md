# Exercise: Middleware

Start the server and visit `localhost:3000` in the browser. In the console you should see an object being printed that is supposed to represent an authenticated user. We hope you don't mind that for the name we just read your home directory name to tailor it to you.

There's currently a route for `/account` that will respond with the authenticated user it reads from `req`. If you visit that path of `/account`, it will show you that it does not have access to `req.user` yet:

http://localhost:3000/account

> Hello undefined, you are logged in

## Task: Make Auth Middleware

We're going to create "Authentication Middleware" that checks if the path is `/account` and provides meta-data to all the other middleware routes that might need it. We don't want someone to visit `/account` if they're not authenticated, so the middleware will respond with a 401 status code (not authorized) and return to the client if the request shouldn't be allowed.

- Create some middleware that runs anytime someone does a `GET` request to `/account`. We already did some of this part for you. We already wrote some middleware that prints the authenticated user when you go to any route, so just start by changing the route path to `/account`.
- Try commenting out the `next()` line in that route and visit `/account` again. You won't see anything come to the browser because the server is stuck and doesn't know what to do. The express server will only respond to the client when something like `res.send` is called or `next()`. Don't worry, if you put it back and save the code, nodemon which is listening for file changes will restart the server so that will "un-stick" it.
- By calling `next()` you're saying you want Express to continue onto the next matching middleware (all routes are middleware). The next matching one is the one that is returning:

> Hello undefined, you are logged in

- This is probably the weirdest thing about Express -- they don't offer an API to pass information from one middleware to the next. The "official" way to do it is to mutate the `req` or `res` objects before calling `next()` in the first middleware and then picking those values up in later middleware. This is why we're getting `undefined` for the username in the output.
- In your authentication middleware that gets the user, append that to the `req` like this `req.user = authUser` but only if `authUser` is "truthy". It will be `false` if the user is not logged in.
- If `authUser` is false, throw an error like this: `throw Error('Not Authenticated')`

Thrown errors will tell Express to go strait to our "error handling" middleware which currently responds with a 500 level status code. The instructor will show you how to customize that on a per-error basis.

## Extra Knowledge

If you wanted the middleware to protect `/account` and all of its sub-paths, you would do this:

```ts
app.get(['/account', '/account*'], (req, res, next) => {
  // code
})
```

If you had a bunch of routes that users didn't have to be authenticated for, followed by a bunch that they do have to be authenticated for, you can do this:

```ts
// Anyone can visit these
app.get('/a', fn)
app.get('/b', fn)
app.get('/c', fn)

// Auth Middleware
app.use((req, res, next) => {
  // next() or throw error
})

// You must be authenticated to visit these:
app.get('/x', fn)
app.get('/y', fn)
app.get('/z', fn)
```

Notice we used `app.use` for this middleware because we want to match all requests that make it to that point past the previous routes. That being: match all paths AND all HTTP verbs.

We could have done `app.get('*', fn)` which would match all paths, but only the `GET` verb.

You can also do an _à la carte_ approach:

Let's say you couldn't just draw a line in the middle of your routes and say "all that are before are open and all that are after need to be authenticated". What if the `/users` path had some things that were authenticated and some that were not:

```ts
app.get('/users', fn)
app.post('/users', private('admin'), fn) // <-- after the path, have any number of middleware
app.delete('/users', fn)
```

Think of things like `app.get` or `app.get` as being a way to register one or more middleware to a path. All middleware passed in needs to be a function with this signature:

```js
function middleware(req, res, next) {}
```

If you ever see code that calls a function like `private('admin)`, the code is trying to pass arguments into the middleware. Since `app.post` takes it's middleware in terms of a function, we can imagine this is what's going on:

```js
function private(userStatus) {
  return function middleware(req, res, next) {
    // Now every time someone tries to do a POST request to `/users`, we
    // we can check the `userStatus` to see if we like it and call `next()`
    // with or without an argument to go to the next middleware or error page.
  }
}
```
