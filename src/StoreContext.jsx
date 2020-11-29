import React, { createContext, useContext, useReducer } from 'react'

const initialState = {
  issues: []
}

const StoreContext = createContext({})

const reducer = (state, action) => {
  switch (action.type) {
    case 'ISSUE.ADD': {
      return { ...state, issues: [...state.issues, action.payload] }
    }
    default:
      return state
  }
}

export const useStore = () => useContext(StoreContext)

export function StoreContextProvider({ children }) {
  const [store, dispatch] = useReducer(initialState, reducer)
  return <StoreContext.Provider value={{ store, dispatch }}>{children}</StoreContext.Provider>
}
