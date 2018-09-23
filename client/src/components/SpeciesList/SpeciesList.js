import React from 'react'
import shortid from 'shortid'
import SpecieListItem from './SpecieListItem'
import './speciesList.css'

export default ({species, removeSpecie}) => {
  return (
    <div className='species-list--wrapper'>
      <ul className='species-list'>
        {removeSpecie && species.map(specie => (
          <SpecieListItem
            key={shortid.generate()}
            specie={specie}
            removeSpecie={removeSpecie}
          />
        ))}
      </ul>
    </div>
  )
}
