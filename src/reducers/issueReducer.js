const initialState = []

function issueReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ISSUE': {
      return [...state, action.payload]
    }
  }
  return state
}

export default issueReducer
