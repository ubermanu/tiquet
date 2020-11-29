import React from 'react'
import ReactDOM from 'react-dom'
import rootReducer from './reducers'
import messageMiddleware from './middleware/messageMiddleware'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import App from './App'

const middlewareEnhancer = applyMiddleware(messageMiddleware)
const store = createStore(rootReducer, middlewareEnhancer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
