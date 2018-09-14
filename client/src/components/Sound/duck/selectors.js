import { appSelectors } from '../../App/duck'

const getRecordings = state => appSelectors.getApp(state).recordings

const getRandomSpecieData = (state) => appSelectors.getApp(state).randomSpecieData

const getRandomRecording = (state) => appSelectors.getApp(state).randomRecording

const getGuessState = state => {
  return appSelectors.getApp(state).guess
}

export default {
  getRecordings,
  getRandomRecording,
  getRandomSpecieData,
  getGuessState
}
