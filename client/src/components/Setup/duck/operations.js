import fetch from 'isomorphic-fetch'
import { setupCreators, setupSelectors } from './index'

const specieTemplate = {
  sc: '',
  sv: '',
  en: ''
}

const addSpecie = () => {
  return async (dispatch, getState) => {
    try {
      const state = getState()
      const addSpeciesValue = setupSelectors.getAddSpeciesValue(state)

      dispatch(setupCreators.addSpecie(addSpeciesValue))

      const translatedResult = await fetch(`/api/translate?input=${encodeURI(addSpeciesValue)}`)
      let specie
      if (translatedResult.status === 200) {
        specie = await translatedResult.json()
      } else {
        // if no translation is found, use raw input
        specie = { ...specieTemplate }
        Object.keys(specieTemplate).forEach(key => (specie[key] = addSpeciesValue))
      }

      const result = await fetch(`/api/recordings?searchQuery=${specie.sc}`)
      const json = await result.json()

      if (json.numRecordings && json.numRecordings > 0) {
        dispatch(setupCreators.addSpecieSuccess(specie.sc, specie, json))
      } else {
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
