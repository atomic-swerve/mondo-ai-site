const messaged = (state = [], action) => {
  console.log(state)
  console.log(action)
  switch(action.type) {
    case 'CLIENT_TEXT':
      return {...state, clientText: action.text}
    case 'CLIENT_MESSAGE':
      return {...state, awaitingServer: true, clientText: action.message}
    case 'SERVER_MESSAGE':
      return {...state, awaitingServer: false, clientText: '', serverText: action.message}
    default:
      return state
  }
}

export default messaged
