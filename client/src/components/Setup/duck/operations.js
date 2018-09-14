import fetch from 'isomorphic-fetch'
import { setupCreators, setupSelectors } from './index'

const addSpecie = () => {
  return async (dispatch, getState) => {
    try {
      const state = getState()
      const addSpeciesValue = setupSelectors.getAddSpeciesValue(state)

      dispatch(setupCreators.addSpecie(addSpeciesValue))
      const key = encodeURIComponent(addSpeciesValue)
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
