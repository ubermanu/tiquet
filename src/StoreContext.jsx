import React, { createContext, useContext, useReducer } from 'react'
import { v4 as uuid } from 'uuid'

const initialState = {
  issues: []
}

const StoreContext = createContext({})

const reducer = (state, action) => {
  switch (action.type) {
    case 'ISSUE.ADD': {
      return { ...state, issues: [...state.issues, { uid: uuid(), ...action.payload }] }
    }
    default:
      return state
  }
}

export const useStore = () => useContext(StoreContext)

export function StoreContextProvider({ children }) {
  const [store, dispatch] = useReducer(reducer, initialState)
  return <StoreContext.Provider value={{ store, dispatch }}>{children}</StoreContext.Provider>
}
