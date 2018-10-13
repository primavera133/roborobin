import React from 'react'
import { GUESS_STATES } from '../App/duck/reducers'
import NewRound from '../NewRound/NewRound'
import Header from '../Header/Header'

export default ({ lastGuess, randomRecording, startNewRound }) => {
  const hasResult = !!lastGuess
  const result = hasResult && lastGuess.result
  const isCorrect = hasResult && result === GUESS_STATES.CORRECT
  const isIncorrect = hasResult && result === GUESS_STATES.INCORRECT
  // console.log(randomRecording)
  return (<div aria-live='polite'>
    {isCorrect &&
    <div>
      <Header role='status' lvl='h4'>That was correct!</Header>
      <p>
        Recorded by: {randomRecording.rec}<br />
        Recorded at: {randomRecording.cnt}, {randomRecording.loc}<br />
        more info: <a href={randomRecording.url} target='_blank'>{randomRecording.url}</a>
      </p>

      <NewRound lastGuess={lastGuess} startNewRound={startNewRound} />
    </div>
    }

    {isIncorrect && <p role='status'>Sorry, that was an incorrect guess</p>}
  </div>)
}
