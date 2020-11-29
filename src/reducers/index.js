import { combineReducers } from 'redux'
import issueReducer from './issueReducer'

export default combineReducers({
  issues: issueReducer
})
