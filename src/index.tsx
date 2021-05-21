import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { App } from './app'

// There's nowhere in this repo that runs this code. This is an example
// of the what the start of a client-side React app could look like.
// It renders the app in the context of BrowserRouter. The server will
// do SSR with the same App file but with the context of StaticRouter
// which is appropriate for server rendering.

// Here is a good tutorial to get started:
// https://www.digitalocean.com/community/tutorials/react-react-router-ssr

ReactDOM.hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
