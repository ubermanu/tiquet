const initialState = []

export default function messageReducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'ADD_MESSAGE': {
      return [...state, payload]
    }
  }
  return state
}
