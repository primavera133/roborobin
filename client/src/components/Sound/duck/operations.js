import { soundCreators, soundSelectors } from './index'
import { setupSelectors } from '../../Setup/duck'

const selectRandomSpecie = () => {
  return (dispatch, getState) => {
    const state = getState()
    const species = setupSelectors.getSpecies(state)
    if (species.length) {
      const randIdx = Math.floor(Math.random() * species.length)
      const specie = species[randIdx]
      dispatch(soundCreators.setRandomSpecieData(specie))

      const recordings = soundSelectors.getRecordings(state)
      const key = encodeURIComponent(specie.scientificName)

      let foundARecording = false
      while (!foundARecording) {
        if (key && recordings[key]) {
          const numRecordings = parseInt(recordings[key].numRecordings, 10)
          const ceiling = numRecordings > 500 ? 500 : numRecordings
          const randomRecordinIndex = Math.floor(Math.random() * ceiling)
          const randomRecording = recordings[key].recordings[randomRecordinIndex]
          if (randomRecording && randomRecording.file) {
            dispatch(soundCreators.setRandomRecording(randomRecording))
            foundARecording = true
          }
        }
      }
    }
  }
}

const makeAGuess = specie => {
  return (dispatch, getState) => {
    const state = getState()
    const randomSpecieData = soundSelectors.getRandomSpecieData(state)
    const isCorrectGuess = specie.scientificName === randomSpecieData.scientificName

    if (isCorrectGuess) {
      dispatch(soundCreators.guessSuccess(specie))
    } else {
      dispatch(soundCreators.guessFail(specie))
    }
  }
}

const startNewRound = () => {
  return (dispatch, getState) => {
    dispatch(selectRandomSpecie())

    const state = getState()
    const specie = soundSelectors.getRandomSpecieData(state)
    const recording = soundSelectors.getRandomRecording(state)
    const newRound = {
      specie,
      recording,
      success: false
    }

    dispatch(soundCreators.addRound(newRound))
  }
}

export default {
  startNewRound,
  selectRandomSpecie,
  makeAGuess
}
