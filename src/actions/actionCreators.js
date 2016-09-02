const sendTextRequest = (m, apiai) => {
  console.log(m)
  console.log(apiai)
  let request = apiai.textRequest('hi')

  request.on('response', function(response) {
    receiveServerMessage(response)
  })

  request.on('error', function(error) {
    receiveServerMessage("Whoops, something happened on my end. Refresh the page maybe?")
  })

  request.end()
}

const clientMessage = m => ({
  type: 'CLIENT_MESSAGE'
})

const serverMessage = m => ({
  type: 'SERVER_MESSAGE',
  message: m
})

export const receiveServerMessage = (message) => (dispatch) => {
  dispatch(serverMessage(message))
}

export const sendClientMessage = (message, apiai) => async(dispatch) => {
  let m = await dispatch(clientMessage(message))
  console.log(m)
  sendTextRequest(m.clientText,apiai)
}

const clientText = t => ({
  type: 'CLIENT_TEXT',
  text: t
})

export const updateClientText = (text) => (dispatch) => {
  dispatch(clientText(text))
}
