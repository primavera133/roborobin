/* eslint-env jest */

import React from 'react'
import ReactDOM from 'react-dom'
import SetupComponent from './SetupComponent'

it('renders without crashing', () => {
  const div = document.createElement('div')

  const addSpeciesValue = 'bubo bubo'
  const species = []
  const validatingSpecies = false
  const validationFailed = false
  const validating = ''
  const lastValidated = 'corvo corax'

  ReactDOM.render(<SetupComponent
    addSpeciesValue={addSpeciesValue}
    species={species}
    validatingSpecies={validatingSpecies}
    validationFailed={validationFailed}
    validating={validating}
    lastValidated={lastValidated}
  />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders without crashing', () => {
  const div = document.createElement('div')

  const addSpeciesValue = 'bubo bubo'
  const species = [{ scientificName: 'corvo corax' }]
  const validatingSpecies = true
  const validationFailed = false
  const validating = 'bubo bubo'
  const lastValidated = 'corvo corax'

  ReactDOM.render(<SetupComponent
    addSpeciesValue={addSpeciesValue}
    species={species}
    validatingSpecies={validatingSpecies}
    validationFailed={validationFailed}
    validating={validating}
    lastValidated={lastValidated}
  />, div)
  ReactDOM.unmountComponentAtNode(div)
})
