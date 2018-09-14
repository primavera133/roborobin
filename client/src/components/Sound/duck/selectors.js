import { appSelectors } from '../../App/duck'

const getRecordings = state => appSelectors.getApp(state).recordings

const getRandomSpecieData = (state) => appSelectors.getApp(state).randomSpecieData

const getRandomRecording = (state) => {
  const specie = getRandomSpecieData(state)
  if (!specie) return null

  const recordings = getRecordings(state)
  const key = encodeURIComponent(specie.scientificName)

  if (key && recordings[key]) {
    const numRecordings = parseInt(recordings[key].numRecordings, 10)
    const ceiling = numRecordings > 500 ? 500 : numRecordings
    const randomRecordinIndex = Math.floor(Math.random() * ceiling)
    return recordings[key].recordings[randomRecordinIndex]
  }
  return null
}

const getGuessState = state => {
  return appSelectors.getApp(state).guess
}

export default {
  getRandomRecording,
  getRandomSpecieData,
  getGuessState
}
