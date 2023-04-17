# Installing Babel and React in Node

## React

Install React and ReactDOM:

```sh
# No TypeScript
npm i react react-dom

# With TypeScript
npm i react react-dom @types/react @types/react-dom
```

## Babel

Install Babel

```sh
# No TypeScript
npm i @babel/core @babel/preset-env @babel/node @babel/preset-react

# With TypeScript
npm i @babel/core @babel/preset-env @babel/preset-typescript
```

Create a babel config. You can do this as a `babelrc` file or in `package.json` like we did:

```json
"babel": {
  "presets": [
    "@babel/preset-env",
    "@babel/preset-typescript", // Only if doing TypeScript
    "@babel/preset-react"       // Only if not doing TypeScript
  ]
}
```

If you're doing TypeScript, be sure to add `"jsx": "react"` to your `tsconfig.json`

## Nodemon

Nodemon is for development mode so you can run a node server but listen to file changes and restart the server.

```js
npm i nodemon
```

Setup a `nodemon.json` config on the repo root similar to this repo. Checkout how we did ours to tell nodemon to watch a few directories and a few type extensions.
