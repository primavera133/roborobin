import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  fetchRecordings: [],
  fetchRecordingsSuccess: ['key', 'value'],
  fetchRecordingsFail: ['error'],
  setRandomSpecieData: ['value'],
  setRandomRecording: ['value'],
  guessSuccess: [],
  guessFail: [],
  guessReset: []
}, {})

export { Types, Creators }
