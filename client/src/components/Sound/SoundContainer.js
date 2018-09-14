import React, { Component } from 'react'
import { connect } from 'react-redux'
import SoundComponent from './SoundComponent'
import { soundSelectors, soundOperations } from './duck'
import { setupCreators, setupSelectors } from '../Setup/duck'

class SoundContainer extends Component {
  componentDidMount () {
    this.props.startNewRound()
  }

  render () {
    return (<SoundComponent {...this.props} />)
  }
}

const mapStateToProps = state => {
  const species = setupSelectors.getSpecies(state)
  const randomSpecieData = soundSelectors.getRandomSpecieData(state)
  const randomRecording = soundSelectors.getRandomRecording(state)
  const url = randomRecording ? `https:${randomRecording.file}` : ''
  const guessState = soundSelectors.getGuessState(state)
  const lastGuess = soundSelectors.getLastGuess(state)
  return {
    species,
    randomSpecieData,
    randomRecording,
    url,
    guessState,
    lastGuess
  }
}

const mapDispatchToProps = dispatch => {
  const startNewRound = () => dispatch(soundOperations.startNewRound())
  const makeAGuess = specie => dispatch(soundOperations.makeAGuess(specie))
  const editList = () => dispatch(setupCreators.editList())

  return {
    startNewRound,
    makeAGuess,
    editList
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SoundContainer)
