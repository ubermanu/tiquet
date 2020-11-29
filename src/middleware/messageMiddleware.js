import { addSuccessMessage } from '../actions/messageActions'

const messageMiddleware = storeAPI => next => action => {
  const { type } = action
  let result = next(action)

  switch (type) {
    case 'CREATE_ISSUE': {
      storeAPI.dispatch(addSuccessMessage('Issue has been created'))
      break
    }
    case 'UPDATE_ISSUE': {
      storeAPI.dispatch(addSuccessMessage('Issue has been updated'))
      break
    }
    case 'DELETE_ISSUE': {
      storeAPI.dispatch(addSuccessMessage('Issue has been deleted'))
      break
    }
  }

  return result
}

export default messageMiddleware
