import { createStore, compose, applyMiddleware } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

import thunk from 'redux-thunk'
import rootReducer from './reducers'

import apiai from 'apiai'

const apiaiapp = apiai('0f23d20736db4de1b48ba392de00f78b')

const defaultState = {
  message: {
    apiai: apiaiapp,
    awaitingServer: false,
    clientText: '',
    serverText: 'Hey there. Got a minute for a couple of questions?'
  }
}

export const store = createStore(rootReducer, defaultState,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

export const history = syncHistoryWithStore(browserHistory, store)
