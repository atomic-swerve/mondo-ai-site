import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import message from './message'

const rootReducer = combineReducers({
  message,
  routing: routerReducer
})

export default rootReducer
