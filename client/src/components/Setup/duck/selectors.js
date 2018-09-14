import { appSelectors } from '../../App/duck'

const getSpecies = state => appSelectors.getApp(state).species

const getValidationState = state => appSelectors.getApp(state).isValidatingSpecies

const getValidationStatus = state => appSelectors.getApp(state).isValidationFailed

const getValidating = state => appSelectors.getApp(state).validating

const getLastValidated = state => appSelectors.getApp(state).lastValidated

export default {
  getSpecies,
  getValidationState,
  getValidationStatus,
  getValidating,
  getLastValidated
}
