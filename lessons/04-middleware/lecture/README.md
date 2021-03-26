# Middleware Lecture

The path to get users is `localhost:3000/api/users` because the one-file "website" HTML that we made is hard-coded for that URL. Run the website with `npm run website`.

## Main Topics to Cover

- ✅ Overview
- ✅ Request Logs with Morgan
- ✅ Static Content
- ✅ CORS
- ✅ Custom

## Overview

- Basically everything in Express is middleware, even routes. Express _is_ a "middleware library".
- Express is not a "framework". There is no code organization or convention to follow. It neither prescribes you to or prevents you from using MVC.
- Show the middleware that we have already.

## Traffic Logs with Morgan

```ts
app.use(logger('dev'))
app.use(logger('common')) // for apache style
```

## Static Content

```ts
// Do this and make a public folder in the lecture
app.use(express.static(path.join(__dirname, 'public')))
```

## CORS

```ts
// Allows all cross-origin stuff
app.use(cors())

// Or we can use with settings
app.use(
  cors({
    // This is the website's port when started with `npx http-server`
    origin: 'http://localhost:8080',
  })
)
```

## Custom Middleware

Write any simple middleware just for the sake of showing the concept. Show how we can pass arguments into the middleware if call a function that returns middleware like a factory:

```ts
function makeMiddleware(env: string) {
  return (req, res, next) => {
    // Custom Middleware
  }
}

app.use(makeMiddleware(process.env.NODE_ENV))
```
