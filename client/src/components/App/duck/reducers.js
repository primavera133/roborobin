import { createReducer } from 'reduxsauce'
import { soundTypes } from '../../Sound/duck'
import { setupTypes } from '../../Setup/duck'
import { INITIAL_STATE } from './initalState'

export const GUESS_STATES = {
  CORRECT: 'CORRECT',
  INCORRECT: 'INCORRECT',
  THINKING: 'THINKING'
}

const setAddSpeciesInputValue = (state, action) => {
  return {
    ...state,
    addSpeciesInputValue: action.value
  }
}

const addSpecie = (state, action) => {
  return {
    ...state,
    validating: action.value,
    lastValidated: '',
    isValidationFailed: false,
    isValidatingSpecies: true
  }
}

const addSpecieFail = (state, action) => {
  return {
    ...state,
    lastValidated: state.validating,
    validating: '',
    isValidationFailed: true,
    isValidatingSpecies: false
  }
}

const addSpecieSuccess = (state, action) => {
  const newSpecie = {
    scientificName: decodeURIComponent(action.key)
  }
  return {
    ...state,
    validating: '',
    isValidationFailed: false,
    isValidatingSpecies: false,
    species: state.species.concat(newSpecie),
    recordings: {
      ...state.recordings,
      [action.key]: action.value
    }
  }
}

const removeSpecie = (state, action) => {
  const species = state.species.filter(specie => {
    return specie.scientificName !== action.value.scientificName
  })
  return {
    ...state,
    species
  }
}

const playRecording = (state, action) => {
  return {
    ...state,
    showSetup: false,
    playRecording: true,
    guess: GUESS_STATES.THINKING
  }
}

const editList = (state, action) => {
  return {
    ...state,
    showSetup: true,
    playRecording: false
  }
}

const fetchRecordings = (state, action) => {
  return {
    ...state,
    recordings: { ...INITIAL_STATE.recordings },
    fetchingRecordings: true
  }
}

const fetchRecordingsFail = (state, action) => {
  return {
    ...state,
    fetchingRecordings: false
  }
}

const fetchSoundSuccess = (state, action) => {
  return {
    ...state,
    fetchingRecordings: false,
    recordings: {
      ...state.recordings,
      [action.key]: action.value
    }
  }
}

const setRandomSpecieData = (state, action) => {
  return {
    ...state,
    randomSpecieData: action.value
  }
}

const setRandomRecording = (state, action) => {
  return {
    ...state,
    randomRecording: action.value
  }
}

const correctGuess = (state, action) => {
  return {
    ...state,
    guess: GUESS_STATES.CORRECT
  }
}

const incorrectGuess = (state, action) => {
  return {
    ...state,
    guess: GUESS_STATES.INCORRECT
  }
}

const resetGuess = (state, action) => {
  return {
    ...state,
    guess: GUESS_STATES.THINKING
  }
}

const handlers = {
  [setupTypes.SET_ADD_SPECIES_INPUT_VALUE]: setAddSpeciesInputValue,
  [setupTypes.ADD_SPECIE]: addSpecie,
  [setupTypes.ADD_SPECIE_FAIL]: addSpecieFail,
  [setupTypes.ADD_SPECIE_SUCCESS]: addSpecieSuccess,
  [setupTypes.REMOVE_SPECIE]: removeSpecie,
  [setupTypes.PLAY_RECORDING]: playRecording,
  [setupTypes.EDIT_LIST]: editList,
  [soundTypes.FETCH_RECORDINGS]: fetchRecordings,
  [soundTypes.FETCH_RECORDINGS_FAIL]: fetchRecordingsFail,
  [soundTypes.FETCH_RECORDINGS_SUCCESS]: fetchSoundSuccess,
  [soundTypes.SET_RANDOM_SPECIE_DATA]: setRandomSpecieData,
  [soundTypes.SET_RANDOM_RECORDING]: setRandomRecording,
  [soundTypes.GUESS_SUCCESS]: correctGuess,
  [soundTypes.GUESS_FAIL]: incorrectGuess,
  [soundTypes.GUESS_RESET]: resetGuess
}

export default createReducer(INITIAL_STATE, handlers)
