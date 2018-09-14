import React from 'react'
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types'
import SpeciesList from '../SpeciesList/SpeciesList'

const SoundComponent = ({ randomSpecieData, randomRecording, url, species, editList, makeAGuess, guessState }) => {
  return (
    <div className='Sound'>
      <h4>Guess the specie</h4>
      {url && (<ReactPlayer
        url={url}
        playing
        controls
        width={'100%'}
        height={'70px'}
      />
      )}

      <SpeciesList species={species} makeAGuess={makeAGuess} />

      {guessState}

      <p>{url}</p>
      <p>{JSON.stringify(randomSpecieData)}</p>
      <p>{JSON.stringify(randomRecording)}</p>

      <button onClick={editList}>Edit list</button>
    </div>
  )
}

SoundComponent.propTypes = {
  url: PropTypes.string
}

export default SoundComponent
