const initialState = []

export default function issueReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ISSUE': {
      return [...state, action.payload]
    }
    case 'UPDATE_ISSUE': {
      return [...state.filter(({ id }) => id !== action.payload.id), action.payload]
    }
  }
  return state
}
