import React from 'react'
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types'
import SpeciesList from '../SpeciesList/SpeciesList'
import GuessInfo from '../GuessInfo/GuessInfo'
import NewRound from '../NewRound/NewRound'

const SoundComponent = ({ randomSpecieData, randomRecording, url, species, editList, makeAGuess, lastGuess, roundHasAnyGuess, startNewRound }) => {
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

      <SpeciesList species={species} makeAGuess={makeAGuess} lastGuess={lastGuess} roundHasAnyGuess={roundHasAnyGuess} />

      {roundHasAnyGuess && <GuessInfo lastGuess={lastGuess} url={url} randomSpecieData={randomSpecieData} randomRecording={randomRecording} />}

      <NewRound lastGuess={lastGuess} startNewRound={startNewRound} />

      <button onClick={editList}>Edit list</button>
    </div>
  )
}

SoundComponent.propTypes = {
  url: PropTypes.string
}

export default SoundComponent
