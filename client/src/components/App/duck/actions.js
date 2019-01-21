import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  toggleShowReadMore: [],
  resetApp: []
}, {})

export { Types, Creators }
