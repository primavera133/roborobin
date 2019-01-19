import React from 'react'
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types'
import { injectIntl, FormattedMessage } from 'react-intl'
import Header from '../Header/Header'
import MakeAGuessList from '../MakeAGuessList/MakeAGuessList'
import GuessInfo from '../GuessInfo/GuessInfo'
import Scores from '../Scores/ScoresContainer'
import FontAwesome from 'react-fontawesome'
import './sound.css'

const SoundComponent = ({
  randomRecording,
  url,
  species,
  editList,
  makeAGuess,
  lastGuess,
  roundHasAnyGuess,
  startNewRound,
  intl: { locale }
}) => {
  return (
    <div className='sound'>
      <Header lvl='h2'>
        <FormattedMessage
          id='sound.title'
          defaultMessage='Time to play!'
        />
      </Header>
      <p>
        <FormattedMessage
          id='sound.intro'
          defaultMessage='Robo-robin will now play a random recording of any of your selected species. Guess which one!'
        />
      </p>

      {url && (<ReactPlayer
        url={url}
        playing
        controls
        width={'100%'}
        height={'70px'}
      />
      )}

      <MakeAGuessList
        species={species}
        makeAGuess={makeAGuess}
        lastGuess={lastGuess}
        roundHasAnyGuess={roundHasAnyGuess}
        locale={locale}
      />

      {roundHasAnyGuess && <GuessInfo lastGuess={lastGuess} randomRecording={randomRecording} startNewRound={startNewRound} />}

      <Scores />

      <p className='centered'>
        <button onClick={editList}>
          <span className='btn-text'>
            <FormattedMessage
              id='sound.change'
              defaultMessage='Change the list'
            />
          </span>
          <FontAwesome name='user-edit' />
        </button>
      </p>

    </div>
  )
}

SoundComponent.propTypes = {
  url: PropTypes.string
}

export default injectIntl(SoundComponent)
