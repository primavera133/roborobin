/* eslint-env jest */

import React from 'react'
import ReactDOM from 'react-dom'
import MakeAGuessList from './MakeAGuessList'

it('renders empty list without crashing', () => {
  const div = document.createElement('div')

  const species = []
  const lastGuess = []
  const roundHasAnyGuess = false
  const makeAGuess = () => {}

  ReactDOM.render(<MakeAGuessList species={species} makeAGuess={makeAGuess} lastGuess={lastGuess}
    roundHasAnyGuess={roundHasAnyGuess} />
  , div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders populated list without crashing', () => {
  const div = document.createElement('div')

  const species = [{
    scientificName: 'bubo bubo'
  }]
  const lastGuess = []
  const roundHasAnyGuess = false
  const makeAGuess = () => {}

  ReactDOM.render(<MakeAGuessList species={species} makeAGuess={makeAGuess} lastGuess={lastGuess}
    roundHasAnyGuess={roundHasAnyGuess} />
  , div)
  ReactDOM.unmountComponentAtNode(div)
})
