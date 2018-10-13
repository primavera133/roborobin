/* eslint-env jest */

import React from 'react'
import ReactDOM from 'react-dom'
import NewRound from './NewRound'
import { GUESS_STATES } from '../App/duck/reducers'

it('renders without crashing', () => {
  const div = document.createElement('div')

  const testLastGuess = {
    result: GUESS_STATES.CORRECT
  }

  const startNewRound = () => {}

  ReactDOM.render(<NewRound lastGuess={testLastGuess} startNewRound={startNewRound} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
