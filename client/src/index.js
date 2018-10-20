import 'babel-polyfill'

import React from 'react'
import { IntlProvider, addLocaleData } from 'react-intl'
import svLocaleData from 'react-intl/locale-data/sv'
import translations from './i18n/locales'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { initStore } from './store'

import App from './components/App/App'

addLocaleData(svLocaleData)

const locale = 'sv'
const messages = translations[locale]

// import registerServiceWorker from './registerServiceWorker'

initStore()
  .then(store => {
    ReactDOM.render(
      <Provider store={store}>
        <IntlProvider locale={locale} key={locale} messages={messages}>
          <App />
        </IntlProvider>
      </Provider>,
      document.getElementById('root')
    )
  })

// registerServiceWorker()

if (module.hot && process.env.NODE_ENV !== 'production') {
  module.hot.accept()
}
