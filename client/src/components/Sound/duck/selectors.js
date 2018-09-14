import { appSelectors } from '../../App/duck'

const getRecordings = state => appSelectors.getApp(state).recordings

const getRandomSpecieData = (state) => appSelectors.getApp(state).randomSpecieData

const getRandomRecording = (state) => appSelectors.getApp(state).randomRecording

const getGuessMeta = state => {
  return appSelectors.getApp(state).guessMeta
}

const getGuessState = state => {
  return getGuessMeta(state).latestGuess
}

export default {
  getRecordings,
  getRandomRecording,
  getRandomSpecieData,
  getGuessState
}
