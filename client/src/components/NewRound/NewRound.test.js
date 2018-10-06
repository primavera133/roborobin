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

  ReactDOM.render(<NewRound lastGuess={testLastGuess} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
