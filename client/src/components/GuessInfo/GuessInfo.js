import React from 'react'
import { injectIntl, FormattedMessage } from 'react-intl'
import NewRound from '../NewRound/NewRound'

export default injectIntl(({ lastGuess, randomRecording, startNewRound, isCorrect }) => {

  return (<div aria-live='polite'>
    {isCorrect &&
    <div>
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
        <a href={randomRecording.url} target='_blank' rel='noopener noreferrer'>{randomRecording.url}</a>
      </p>

      <NewRound lastGuess={lastGuess} startNewRound={startNewRound} />
    </div>
    }
  </div>)
})
