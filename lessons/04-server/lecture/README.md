# Server Lecture

## Main Topics to Cover

- ✅ Node can be a server, using just its own built features
- ✅ Express is a middleware library for convenience
- ✅ Explain just enough middleware stuff for them to complete the exercise

## Overview

```js
// Middleware can be added like routes using app.use
app.use((req, res, next) => {
  // do stuff, then call next()
  // to go to next middleware
  next()
})

// Can be used as a catch-all at the end of the middleware stack
// for catching requests that didn't match anything, for 404
app.use((req, res, next) => {
  res.status(404).send('Not Found')
})

// Or we can write middleware just for one HTTP verb
app.get('*', (req, res, next) => {
  console.log(req.path)
  next()
})
```

## Error Handling

```js
// Four Arguments will make this middleware an "error handler"
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Server Error')
})
```
