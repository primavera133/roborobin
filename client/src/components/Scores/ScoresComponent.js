import React from 'react'

export default ({ scores }) => {
  return (<div>
    <h5>SCORES</h5>
    <p>correct: {scores.correctGuesses}</p>
    <p>incorrect: {scores.incorrectGuesses}</p>
    <p>rounds: {scores.rounds}</p>
  </div>)
}
