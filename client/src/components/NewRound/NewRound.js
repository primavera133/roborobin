import React, { Fragment } from 'react'
import { GUESS_STATES } from '../App/duck/reducers'

export default ({ lastGuess, startNewRound}) => {
  const hasResult = !!lastGuess
  const result = hasResult && lastGuess.result
  const isCorrect = hasResult && result === GUESS_STATES.CORRECT

  return (<Fragment>
    {isCorrect &&
    <div>
      <button
        onClick={startNewRound}
      >
        Start new round
      </button>
    </div>
    }

  </Fragment>)
}
