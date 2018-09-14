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
  const addSpeciesValue = setupSelectors.getAddSpeciesValue(state)
  const species = setupSelectors.getSpecies(state)
  const validatingSpecies = setupSelectors.getValidationState(state)
  const validationFailed = setupSelectors.getValidationStatus(state)
  const validating = setupSelectors.getValidating(state)
  const lastValidated = setupSelectors.getLastValidated(state)
  return {
    addSpeciesValue,
    species,
    validatingSpecies,
    validationFailed,
    validating,
    lastValidated
  }
}

const mapDispatchToProps = dispatch => {
  const setAddSpeciesInputValue = value => dispatch(setupCreators.setAddSpeciesInputValue(value))
  const addSpecie = searchQuery => dispatch(setupOperations.addSpecie())
  const removeSpecie = specie => dispatch(setupCreators.removeSpecie(specie))
  const playRecording = () => dispatch(setupCreators.playRecording())

  return {
    setAddSpeciesInputValue,
    addSpecie,
    removeSpecie,
    playRecording
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetupContainer)
