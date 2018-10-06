/* eslint-env jest */

import React from 'react'
import ReactDOM from 'react-dom'
import GuessInfo from './GuessInfo'
import { GUESS_STATES } from '../App/duck/reducers'

it('renders info without crashing', () => {
  const div = document.createElement('div')

  const lastGuess = {
    roundIdx: 1,
    specie: {
      scientificName: 'bubo bubo'
    },
    result: GUESS_STATES.CORRECT
  }
  const randomRecording = {
    rec: 'Rcorder name',
    cnt: 'Country',
    loc: 'Location',
    url: 'http://xeno-canto.org/whatever'
  }

  const startNewRound = () => {}

  ReactDOM.render(<GuessInfo
    lastGuess={lastGuess}
    randomRecording={randomRecording}
    startNewRound={startNewRound}
  />
  , div)
  ReactDOM.unmountComponentAtNode(div)
})
