/* eslint-env jest */

import React from 'react'
import ReactDOM from 'react-dom'
import SoundComponent from './SoundComponent'

it('renders without crashing', () => {
  const div = document.createElement('div')

  const randomRecording = {
    rec: 'Rcorder name',
    cnt: 'Country',
    loc: 'Location',
    url: 'http://xeno-canto.org/whatever'
  }
  const url = '' + randomRecording.url
  const species = []
  const editList = () => {}
  const makeAGuess = () => {}
  const lastGuess = ''
  const roundHasAnyGuess = false
  const startNewRound = () => {}

  ReactDOM.render(<SoundComponent
    randomRecording={randomRecording}
    url={url}
    species={species}
    editList={editList}
    makeAGuess={makeAGuess()}
    lastGuess={lastGuess}
    roundHasAnyGuess={roundHasAnyGuess}
    startNewRound={startNewRound()}
  />, div)
  ReactDOM.unmountComponentAtNode(div)
})
