import React, { Fragment } from 'react'
import { injectIntl, FormattedMessage } from 'react-intl'
import { GUESS_STATES } from '../App/duck/reducers'
import FontAwesome from 'react-fontawesome'

export default injectIntl(({ lastGuess, startNewRound }) => {
  const hasResult = !!lastGuess
  const result = hasResult && lastGuess.result
  const isCorrect = hasResult && result === GUESS_STATES.CORRECT

  return (<Fragment>
    {isCorrect &&
    <div>
      <button
        onClick={startNewRound}
      >
        <span className='btn-text'>
          <FormattedMessage
            id='newRound.btn'
            defaultMessage='Next round'
          />
        </span>
        <FontAwesome name='volume-up' />
      </button>
    </div>
    }

  </Fragment>)
})
