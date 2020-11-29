import { combineReducers } from 'redux'
import issueReducer from './issueReducer'
import messageReducer from './messageReducer'

export default combineReducers({
  issues: issueReducer,
  messages: messageReducer
})
