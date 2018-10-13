import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { storiesOf } from '@storybook/react'
import SoundContainer from './SoundContainer'
import rootReducer from '../../reducers'
import { INITIAL_STATE } from '../App/duck/initialState'
import { GUESS_STATES } from '../App/duck/reducers'

storiesOf('SoundComponent', module)
  .add('Just started', () => {
    const testState = Object.assign({}, INITIAL_STATE, {
      guessMeta: {
        latestGuess: GUESS_STATES.THINKING,
        attempts: 0
      }
    })
    console.log(111, { app: testState })

    const testStore = createStore(rootReducer, { app: testState })

    return (<Provider store={testStore}><SoundContainer /></Provider>)
  })
