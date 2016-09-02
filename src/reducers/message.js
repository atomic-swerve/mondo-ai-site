const messaged = (state = [], action) => {
  switch(action.type) {
    case 'CLIENT_MESSAGE':
      return {...state, awaitingServer: true}
    case 'SERVER_MESSAGE':
      return {...state, awaitingServer: false, serverText: action.message}
    default:
      return state
  }
}

export default messaged
