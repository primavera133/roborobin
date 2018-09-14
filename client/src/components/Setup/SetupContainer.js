import React, { Component } from 'react'
import { connect } from 'react-redux'
import SetupComponent from './SetupComponent'
import { setupSelectors, setupCreators, setupOperations } from './duck'

class SetupContainer extends Component {
  render () {
    return (<SetupComponent {...this.props} />)
  }
}

const mapStateToProps = state => {
  const species = setupSelectors.getSpecies(state)
  const validatingSpecies = setupSelectors.getValidationState(state)
  const validationFailed = setupSelectors.getValidationStatus(state)
  const validating = setupSelectors.getValidating(state)
  const lastValidated = setupSelectors.getLastValidated(state)
  return {
    species,
    validatingSpecies,
    validationFailed,
    validating,
    lastValidated
  }
}

const mapDispatchToProps = dispatch => {
  const addSpecie = searchQuery => dispatch(setupOperations.addSpecie({ searchQuery }))
  const removeSpecie = specie => dispatch(setupCreators.removeSpecie(specie))
  const playRecording = specie => dispatch(setupCreators.playRecording())

  return {
    addSpecie,
    removeSpecie,
    playRecording
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetupContainer)
