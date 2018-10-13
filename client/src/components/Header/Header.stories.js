import React from 'react'
import { storiesOf } from '@storybook/react'
import Header from './Header'

storiesOf('Header', module)
  .add('Main logo - H1', () => (
    <Header
      lvl='h1'
    >Robo-robin</Header>))

  .add('"Time to play" - H2', () => (
    <Header
      lvl='h2'
    >Time to play!</Header>
  ))

  .add('"This is your current list" - H2', () => (
    <Header
      lvl='h2'
    >This is your current list</Header>
  ))

  .add('"No species in your list, add at least one." - H2', () => (
    <Header
      lvl='h2'
    >No species in your list, add at least one.</Header>
  ))

  .add('"Ready?" - H3', () => (
    <Header
      lvl='h3'
    >Ready?</Header>
  ))
