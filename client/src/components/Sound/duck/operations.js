import { soundCreators, soundSelectors } from './index'
import { setupSelectors } from '../../Setup/duck'

const selectRandomSpecie = () => {
  return (dispatch, getState) => {
    const state = getState()
    const species = setupSelectors.getSpecies(state)
    if (species.length) {
      const randIdx = Math.floor(Math.random() * species.length)
      dispatch(soundCreators.setRandomSpecieData(species[randIdx]))
    }
  }
}

const makeAGuess = specie => {
  return (dispatch, getState) => {
    const state = getState()
    const randomSpecieData = soundSelectors.getRandomSpecieData(state)
    const isCorrectGuess = specie.scientificName === randomSpecieData.scientificName

    if (isCorrectGuess) {
      dispatch(soundCreators.guessSuccess())
    } else {
      dispatch(soundCreators.guessFail())
    }
  }
}

export default {
  selectRandomSpecie,
  makeAGuess
}
