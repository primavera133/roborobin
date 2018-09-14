import { combineReducers } from 'redux'
import appReducer from './components/App/duck/reducers'

const rootReducer = combineReducers({
  app: appReducer
})

export default rootReducer
