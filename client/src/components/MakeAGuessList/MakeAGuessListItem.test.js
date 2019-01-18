/* eslint-env jest */

import React from 'react'
import ReactDOM from 'react-dom'
import MakeAGuessListItem from './MakeAGuessListItem'

it('renders item without crashing', () => {
  const div = document.createElement('div')

  const specie = {
    scientificName: 'bubo bubo'
  }
  const lastGuess = []
  const roundHasAnyGuess = false
  const makeAGuess = () => {}

  ReactDOM.render(<MakeAGuessListItem.WrappedComponent
    key={specie.sc}
    specie={specie}
    makeAGuess={makeAGuess}
    lastGuess={lastGuess}
    roundHasAnyGuess={roundHasAnyGuess} />
  , div)
  ReactDOM.unmountComponentAtNode(div)
})
