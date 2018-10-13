import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'
import { action } from '@storybook/addon-actions'
import NewRound from './NewRound'
import { GUESS_STATES } from '../App/duck/reducers'

storiesOf('NewRound', module)
  .add('button', withNotes('*text*')(() => (
    <NewRound
      lastGuess={{
        result: GUESS_STATES.CORRECT
      }}
      startNewRound={action('clicked')}
    />
  )))
