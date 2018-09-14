import fetch from 'isomorphic-fetch'
import { setupCreators } from './index'

const addSpecie = ({ searchQuery }) => {
  return async dispatch => {
    try {
      dispatch(setupCreators.addSpecie(searchQuery))
      const key = encodeURIComponent(searchQuery)
      const result = await fetch(`/api/recordings/${key}`)
      const json = await result.json()
      if (json.numRecordings && json.numRecordings > 0) {
        dispatch(setupCreators.addSpecieSuccess(key, json))
      } else {
        console.error('not good enough json', json)
        dispatch(setupCreators.addSpecieFail())
      }
    } catch (err) {
      console.error(err)
      dispatch(setupCreators.addSpecieFail())
    }
  }
}

export default {
  addSpecie
}
