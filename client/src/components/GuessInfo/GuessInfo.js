import React from 'react'
import { GUESS_STATES } from '../App/duck/reducers'
import NewRound from '../NewRound/NewRound'

export default ({ lastGuess, randomRecording, startNewRound }) => {
  const hasResult = !!lastGuess
  const result = hasResult && lastGuess.result
  const isCorrect = hasResult && result === GUESS_STATES.CORRECT
  const isIncorrect = hasResult && result === GUESS_STATES.INCORRECT
  // console.log(randomRecording)
  return (<div>
    {isCorrect &&
    <div>
      <h4>That was correct!</h4>
      <p>
        Recorded by: {randomRecording.rec}<br />
        Recorded at: {randomRecording.cnt}, {randomRecording.loc}<br />
        more info: <a href={randomRecording.url} target='_blank'>{randomRecording.url}</a>
      </p>

      <NewRound lastGuess={lastGuess} startNewRound={startNewRound} />

    </div>
    }

    {isIncorrect && <p>
      Sorry, that was an incorrect guess
    </p>}
  </div>)
}
