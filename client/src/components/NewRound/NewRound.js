import React, { Fragment } from 'react'
import { GUESS_STATES } from '../App/duck/reducers'
import FontAwesome from 'react-fontawesome'

export default ({ lastGuess, startNewRound }) => {
  const hasResult = !!lastGuess
  const result = hasResult && lastGuess.result
  const isCorrect = hasResult && result === GUESS_STATES.CORRECT

  return (<Fragment>
    {isCorrect &&
    <div>
      <button
        onClick={startNewRound}
      >
        <span className='btn-text'>Next round</span>
        <FontAwesome name='volume-up' />
      </button>
    </div>
    }

  </Fragment>)
}
