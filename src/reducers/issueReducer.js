const initialState = []
import { exclude } from './filters'

export default function issueReducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'CREATE_ISSUE': {
      return [...state, payload]
    }
    case 'UPDATE_ISSUE': {
      return [...state.filter(exclude(payload)), payload]
    }
    case 'TOGGLE_ISSUE': {
      return [...state.filter(exclude(payload)), { ...payload, complete: !payload.complete }]
    }
    case 'DELETE_ISSUE': {
      return [...state.filter(exclude(payload))]
    }
  }
  return state
}
