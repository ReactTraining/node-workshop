require('@babel/register')()
const React = require('react')
const ReactDOMServer = require('react-dom/server')

function App() {
  return <div>hi</div>
}

const out = ReactDOMServer.renderToString(<App />)
console.log('hidd', out)
