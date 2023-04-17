import React from 'react'
import ReactDOMServer from 'react-dom/server'

function App() {
  return <div>hi</div>
}

const html = ReactDOMServer.renderToStaticMarkup(<App />)
console.log(html)
