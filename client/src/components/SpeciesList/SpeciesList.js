import React from 'react'
import SpecieListItem from './SpecieListItem'
import './speciesList.css'

export default ({ species, removeSpecie }) => {
  return (
    <div className='species-list--wrapper'>
      <ul className='species-list'>
        {removeSpecie && species.map(specie => (
          <SpecieListItem
            key={specie.scientificName}
            specie={specie}
            removeSpecie={removeSpecie}
          />
        ))}
      </ul>
    </div>
  )
}
