/* eslint-env jest */

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import SoundComponent from './SoundComponent'
import rootReducer from '../../reducers'
import { INITIAL_STATE } from '../App/duck/initialState'

it('renders without crashing', () => {
  const div = document.createElement('div')

  const testStore = createStore(rootReducer, { app: INITIAL_STATE })

  const randomRecording = {
    rec: 'Recorder name',
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

  ReactDOM.render(<Provider store={testStore}>
    <SoundComponent.WrappedComponent
      randomRecording={randomRecording}
      url={url}
      species={species}
      editList={editList}
      makeAGuess={makeAGuess()}
      lastGuess={lastGuess}
      roundHasAnyGuess={roundHasAnyGuess}
      startNewRound={startNewRound()}
    />
  </Provider>, div)
  ReactDOM.unmountComponentAtNode(div)
})
