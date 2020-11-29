const initialState = []

function exclude(issue) {
  return ({ id }) => id !== issue.id
}

export default function issueReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ISSUE': {
      return [...state, action.payload]
    }
    case 'UPDATE_ISSUE': {
      return [...state.filter(exclude(action.payload)), action.payload]
    }
    case 'DELETE_ISSUE': {
      return [...state.filter(exclude(action.payload))]
    }
  }
  return state
}
