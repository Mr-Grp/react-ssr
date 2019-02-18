import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux'
import thunk from 'redux-thunk'
import {
  reducer as homeReducer
} from '../containers/Home/store'

const reducer = combineReducers({
  home: homeReducer
})

export const getStore = () => {
  const store = createStore(reducer, applyMiddleware(thunk))
  return store
}

export const getClientStore = () => {
  const defaultState = window.context.state
  const store = createStore(reducer, defaultState, applyMiddleware(thunk))
  return store
}