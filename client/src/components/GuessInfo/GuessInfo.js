import React from 'react'
import { injectIntl, FormattedMessage } from 'react-intl'
import { GUESS_STATES } from '../App/duck/reducers'
import NewRound from '../NewRound/NewRound'
import Header from '../Header/Header'

export default injectIntl(({ lastGuess, randomRecording, startNewRound }) => {
  const hasResult = !!lastGuess
  const result = hasResult && lastGuess.result
  const isCorrect = hasResult && result === GUESS_STATES.CORRECT
  // console.log(randomRecording)
  return (<div aria-live='polite'>
    {isCorrect &&
    <div>
      <Header role='status' lvl='h4'>
        <FormattedMessage
          id='guessInfo.correct'
          defaultMessage='That was correct!'
        />
      </Header>
      <p>
        <FormattedMessage
          id='guessInfo.recordedBy'
          defaultMessage='Recorded by: {rec}'
          values={{ rec: <span>{randomRecording.rec}</span> }}
        />
        <br />
        <FormattedMessage
          id='guessInfo.recordedAt'
          defaultMessage='Recorded at: {cnt}, {loc}'
          values={{ cnt: <span>{randomRecording.cnt}</span>, loc: <span>{randomRecording.loc}</span> }}
        />
        <br />
        <FormattedMessage
          id='guessInfo.recordedUrl'
          defaultMessage='more info: '
        />
        <a href={randomRecording.url} target='_blank'>{randomRecording.url}</a>
      </p>

      <NewRound lastGuess={lastGuess} startNewRound={startNewRound} />
    </div>
    }
  </div>)
})
