// When thrown during an Express HTTP request, these errors will be caught by
// an error handler which will appropriately display the error to the client

// User Input Errors
export class UserError extends Error {}

// Not Found
export class NotFound extends Error {}

// Add as many as you need...
