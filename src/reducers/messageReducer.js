const initialState = []
import { exclude } from './filters'

export default function messageReducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'ADD_MESSAGE': {
      return [...state, payload]
    }
    case 'DELETE_MESSAGE': {
      return [...state.filter(exclude(payload))]
    }
  }
  return state
}
