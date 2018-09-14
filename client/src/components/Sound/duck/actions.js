import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  fetchRecordings: [],
  fetchRecordingsSuccess: ['key', 'value'],
  fetchRecordingsFail: ['error'],
  setRandomSpecieData: ['value'],
  setRandomRecording: ['value'],
  addRound: ['value'],
  guessSuccess: ['value'],
  guessFail: ['value'],
  guessReset: []
}, {})

export { Types, Creators }
