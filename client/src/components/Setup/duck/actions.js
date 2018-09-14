import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  setAddSpeciesInputValue: ['value'],
  addSpecie: ['value'],
  addSpecieSuccess: ['key', 'value'],
  addSpecieFail: [],
  removeSpecie: ['value'],
  playRecording: [],
  editList: []
}, {})

export { Types, Creators }
