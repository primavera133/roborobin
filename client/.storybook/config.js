import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import 'loki/configure-react'
import { setIntlConfig, withIntl } from 'storybook-addon-intl'
import '../src/components/App/normalize.css'
import '../src/components/App/app.css'

// Load the locale data for all your defined locales
import { addLocaleData } from 'react-intl'
import enLocaleData from 'react-intl/locale-data/en'
import svLocaleData from 'react-intl/locale-data/sv'
import translations from '../src/i18n/locales'

addLocaleData(enLocaleData)
addLocaleData(svLocaleData)

const getMessages = (locale) => translations[locale];

setIntlConfig({
  locales: ['en', 'sv'],
  defaultLocale: 'sv',
  getMessages
});


const req = require.context('../src/components', true, /\.stories\.js$/)

function loadStories () {
  req.keys().forEach((filename) => req(filename))
}

// Register decorator
addDecorator(withIntl);

addDecorator(story => (
  <div style={{margin: '20px auto'}}>
    {story()}
  </div>
))

configure(loadStories, module)
