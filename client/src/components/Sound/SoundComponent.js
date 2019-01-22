import React, { Fragment } from 'react'
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types'
import { injectIntl, FormattedMessage } from 'react-intl'
import Header from '../Header/Header'
import MakeAGuessList from '../MakeAGuessList/MakeAGuessList'
import GuessInfo from '../GuessInfo/GuessInfo'
import Scores from '../Scores/ScoresContainer'
import FontAwesome from 'react-fontawesome'
import './sound.css'
import { GUESS_STATES } from '../App/duck/reducers'

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
  const hasResult = !!lastGuess
  const result = hasResult && lastGuess.result
  const isCorrect = hasResult && result === GUESS_STATES.CORRECT

  return (
    <Fragment>

      <div className='sound'>
        {!roundHasAnyGuess && <Header lvl='h2'>
          <FormattedMessage
            id='sound.title'
            defaultMessage='Time to guess!'
          />
        </Header>}

        {roundHasAnyGuess && isCorrect && <Header role='status' lvl='h2'>
          <FormattedMessage
            id='guessInfo.correct'
            defaultMessage='That was correct!'
          />
        </Header>}

        {roundHasAnyGuess && !isCorrect && <Header role='status' lvl='h2'>
          <FormattedMessage
            id='guessInfo.incorrect'
            defaultMessage='Wrong, try again'
          />
        </Header>}

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

        {roundHasAnyGuess && <GuessInfo lastGuess={lastGuess} randomRecording={randomRecording} startNewRound={startNewRound} isCorrect={isCorrect} />}

      </div>

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
    </Fragment>
  )
}

SoundComponent.propTypes = {
  url: PropTypes.string
}

export default injectIntl(SoundComponent)
