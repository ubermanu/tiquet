import { combineReducers } from 'redux'
import issueReducer from './issueReducer'

const rootReducer = combineReducers({
  issues: issueReducer
})

export default rootReducer
