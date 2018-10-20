/* eslint-env jest */

import React from 'react'
import ReactDOM from 'react-dom'
import ScoresComponent from './ScoresComponent'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const testScores = {
    correctGuesses: 1,
    incorrectGuesses: 2,
    rounds: 3
  }
  ReactDOM.render(<ScoresComponent.WrappedComponent scores={testScores} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
