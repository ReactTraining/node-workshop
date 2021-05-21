const React = require('react')
const ReactDOMServer = require('react-dom/server')

function App() {
  return <div>hi</div>
}

const html = ReactDOMServer.renderToStaticMarkup(<App />)
console.log(html)
