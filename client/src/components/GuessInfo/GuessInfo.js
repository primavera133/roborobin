import React from 'react'
import { GUESS_STATES } from '../App/duck/reducers'

export default ({ lastGuess, url, randomRecording }) => {
  const hasResult = !!lastGuess
  const result = hasResult && lastGuess.result
  const isCorrect = hasResult && result === GUESS_STATES.CORRECT
  const isIncorrect = hasResult && result === GUESS_STATES.INCORRECT
  // console.log(randomRecording)
  return (<div>
    {isCorrect &&
    <div>
      <p>
        That was correct!
      </p>
      <p>{url}</p>

      <ul>
        <li>Recorded by: {randomRecording.rec}</li>
        <li>Recorder at: {randomRecording.cnt}, {randomRecording.loc}</li>
        <li>more info: <a href={randomRecording.url} target="_blank">{randomRecording.url}</a></li>
      </ul>

    </div>
    }

    {isIncorrect && <p>
      Sorry, that was an incorrect guess
    </p>}
  </div>)
}
