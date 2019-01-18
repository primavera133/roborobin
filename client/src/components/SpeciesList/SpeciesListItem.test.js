/* eslint-env jest */

import React from 'react'
import ReactDOM from 'react-dom'
import SpecieListItem from './SpecieListItem'

it('renders item without crashing', () => {
  const div = document.createElement('div')

  const specie = {
    sc: 'bubo bubo'
  }
  const removeSpecie = () => {}

  ReactDOM.render(<SpecieListItem
    key={specie.sc}
    specie={specie}
    removeSpecie={removeSpecie}
  />
  , div)
  ReactDOM.unmountComponentAtNode(div)
})
