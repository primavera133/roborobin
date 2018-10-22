import React from 'react'
import { injectIntl, FormattedMessage } from 'react-intl'
import { storiesOf } from '@storybook/react'
import Header from './Header'

storiesOf('Header', module)
  .add('Main logo - H1', () => (
    <Header
      lvl='h1'
    ><FormattedMessage id='app.title' /></Header>))

  .add('"Time to play" - H2', () => (
    <Header
      lvl='h2'
    ><FormattedMessage id='sound.title' /></Header>
  ))

  .add('"This is your current list" - H2', () => (
    <Header
      lvl='h2'
    ><FormattedMessage id='setup.title' /></Header>
  ))

  .add('"No species in your list, add at least one." - H2', () => (
    <Header
      lvl='h2'
    ><FormattedMessage id='makeaguess.title' /></Header>
  ))

  .add('"Ready?" - H3', () => (
    <Header
      lvl='h3'
    ><FormattedMessage id='setup.playTitle' /></Header>
  ))
