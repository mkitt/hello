// @flow
import React from 'react'
// $FlowFixMe
import { hydrate, render } from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const rootElement = document && document.getElementById('root')
if (rootElement) {
  if (rootElement.hasChildNodes()) {
    hydrate(<App />, rootElement)
  } else {
    render(<App />, rootElement)
  }
  registerServiceWorker()
  if (module.hot != null && typeof module.hot.accept === 'function') {
    module.hot.accept('./App', () => {
      // eslint-disable-next-line global-require
      const NextApp = require('./App').default
      render(<NextApp />, rootElement)
    })
  }
}
