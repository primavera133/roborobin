import { appSelectors } from '../../App/duck'

const getRecordings = state => appSelectors.getApp(state).recordings

const getRandomSpecieData = (state) => appSelectors.getApp(state).randomSpecieData

const getRandomRecording = (state) => appSelectors.getApp(state).randomRecording

const getGuessMeta = state => {
  return appSelectors.getApp(state).guessMeta
}

const getGuesses = state => {
  return appSelectors.getApp(state).guesses
}
const getLastGuess = state => {
  return [...getGuesses(state)].pop()
}

const getGuessState = state => {
  return getGuessMeta(state).latestGuess
}

const getRounds = state => appSelectors.getApp(state).rounds

const getLastRound = state => {
  const rounds = getRounds(state)
  return (rounds.length > 0) && [...rounds].pop()
}

const lastRoundHasSuccess = state => {
  const lastRound = getLastRound(state)
  return lastRound && getLastRound(state).success
}

export default {
  getRecordings,
  getRandomRecording,
  getRandomSpecieData,
  getGuessState,
  getLastGuess,
  lastRoundHasSuccess
}
