import { soundSelectors } from '../../Sound/duck'
import { GUESS_STATES } from '../../App/duck/reducers'

const getScores = state => {
  const rounds = soundSelectors.getRounds(state).length
  const guesses = soundSelectors.getGuesses(state)
  const correctGuesses = guesses.reduce((acc, guess) => (guess.result === GUESS_STATES.CORRECT ? ++acc : acc), 0)
  const incorrectGuesses = guesses.reduce((acc, guess) => (guess.result === GUESS_STATES.INCORRECT ? ++acc : acc), 0)

  return {
    rounds,
    correctGuesses,
    incorrectGuesses
  }
}

export default {
  getScores
}
