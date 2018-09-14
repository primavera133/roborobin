import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { initStore } from './store'

import App from './components/App/App'

// import registerServiceWorker from './registerServiceWorker'

initStore()
  .then(store => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    )
  })

// registerServiceWorker()

if (module.hot && process.env.NODE_ENV !== 'production') {
  module.hot.accept()
}
