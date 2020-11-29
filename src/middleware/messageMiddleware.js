import { addMessage } from '../actions/messageActions'

const messageMiddleware = storeAPI => next => action => {
  const { type } = action
  let result = next(action)

  switch (type) {
    case 'CREATE_ISSUE': {
      storeAPI.dispatch(addMessage('Issue has been created'))
      break
    }
    case 'UPDATE_ISSUE': {
      storeAPI.dispatch(addMessage('Issue has been updated'))
      break
    }
  }

  return result
}

export default messageMiddleware
