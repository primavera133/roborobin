import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import GuessInfo from './GuessInfo'
import { GUESS_STATES } from '../App/duck/reducers'

const lastGuess = {
  result: GUESS_STATES.CORRECT
}

const randomRecording = {
  rec: 'Recorder name',
  cnt: 'Country',
  loc: 'Location',
  url: 'http://xeno-canto.org/whatever'
}

storiesOf('GuessInfo', module)
  .add('Correct info with button', () => (
    <GuessInfo
      lastGuess={lastGuess}
      randomRecording={randomRecording}
      startNewRound={action('clicked')}
    />
  ))
