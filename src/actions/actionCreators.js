const sendTextRequest = async(m, apiai) => {
  console.log(m)
  console.log(apiai)
  let response = await apiai.textRequest(m)
  receiveServerMessage(response)
}

const clientMessage = m => ({
  type: 'CLIENT_MESSAGE',
  message: m
})

const serverMessage = m => ({
  type: 'SERVER_MESSAGE',
  message: m
})

export const receiveServerMessage = (message) => (dispatch) => {
  dispatch(serverMessage(message))
}

export const sendClientMessage = (message) => (dispatch) => {
  if (message) {
    dispatch(clientMessage(message))
    sendTextRequest(message)
  }
}

const clientText = t => ({
  type: 'CLIENT_TEXT',
  text: t
})

export const updateClientText = (text) => (dispatch) => {
  dispatch(clientText(text))
}
