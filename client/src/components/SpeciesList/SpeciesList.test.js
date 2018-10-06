/* eslint-env jest */

import React from 'react'
import ReactDOM from 'react-dom'
import SpeciesList from './SpeciesList'

it('renders empty list without crashing', () => {
  const div = document.createElement('div')

  const species = []
  const removeSpecie = () => {}

  ReactDOM.render(<SpeciesList
    species={species}
    removeSpecie={removeSpecie} />
  , div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders populated list without crashing', () => {
  const div = document.createElement('div')

  const species = [{
    scientificName: 'bubo bubo'
  }]
  const removeSpecie = () => {}

  ReactDOM.render(<SpeciesList
    species={species}
    removeSpecie={removeSpecie} />
  , div)
  ReactDOM.unmountComponentAtNode(div)
})
