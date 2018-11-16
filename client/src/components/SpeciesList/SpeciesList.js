import React, { Fragment } from 'react'
import SpecieListItem from './SpecieListItem'
import './speciesList.css'
import Header from '../Header/Header'
import { FormattedMessage } from 'react-intl'
import FontAwesome from 'react-fontawesome'

export default ({ species, removeSpecie, playRecording }) => {
  return (!!species.length && (
    <div className='species-list--wrapper'>
      <Header lvl='h2'>
        <FormattedMessage
          id='setup.title'
          defaultMessage='This is your current list'
        />
      </Header>

      <ul className='species-list'>
        {removeSpecie && species.map(specie => (
          <SpecieListItem
            key={specie.scientificName}
            specie={specie}
            removeSpecie={removeSpecie}
          />
        ))}
      </ul>

      <div className='setup-play'>
        <button
          onClick={playRecording}
          disabled={!species.length}
        >
          <span className='btn-text'>
            <FormattedMessage
              id='setup.playBtn'
              defaultMessage='Start playing!'
            />
          </span>
          <FontAwesome name='volume-up' />
        </button>
      </div>

    </div>
  ))
}
