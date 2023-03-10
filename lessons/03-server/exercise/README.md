# Exercise: Server

## Task: Get Database Results

You need to get two paths working:

- `/users` needs to return an array of user objects
- `/users/:id` needs to return a user object

Both routes are already made. In each one, use the `db.query('SELECT * FROM ...')` API to perform an SQL search for what you want. We also gave you some SQL examples in the file. The users in this mini database have id's ranging from 1 to 4.

**Here's what you have to do:**

- `db.query` returns a promise with an array of results. since the results are an array, you'll need to use `res.json(results)` to serialize them into a JSON response.
- If `results.length` is 0, then we should respond with a 404 status code since they're trying to access a user that doesn't exist. Also respond with a 404 status if the parameter that was given is not an integer.
- For 404 status codes, we already have a route towards the end that handles all requests that were not handled by previous routes. So in the user-based routes, all you would have to do is call `next()` which is sort of like doing `continue` in a loop -- `next()` will move on from the route it's called in to the next route that matches. But no other routes will match, thus our 404 response will work like a charm ☘️
- If you pass a string into `db.query` that doesn't start with `SELECT`, the promise will reject, so be sure to have a `.catch` that will respond with a status code of 500. Similar to the 404 code, all you have to do is call `next(err)` but this time with a string argument:

Calling `next()` with no argument just tells express to go to the next route. Calling `next(str)` with an argument tells express to go to the error handling route.
