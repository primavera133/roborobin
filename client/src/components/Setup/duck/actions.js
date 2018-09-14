import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  addSpecie: ['value'],
  addSpecieSuccess: ['key', 'value'],
  addSpecieFail: [],
  removeSpecie: ['value'],
  playRecording: [],
  editList: []
}, {})

export { Types, Creators }
