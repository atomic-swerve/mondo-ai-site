import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import apiai from 'apiai'

import textupdate from './textupdate'
import message from './message'

const rootReducer = combineReducers({
  textupdate,
  message,
  routing: routerReducer
})

export default rootReducer
