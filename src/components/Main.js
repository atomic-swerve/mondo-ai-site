import React from 'react'

const ClientTextBox = ({props, updateClientText}) => (
    <input type="text" maxLength="255" disabled={props.awaitingServer} value={props.clientText} onChange={(e) => updateClientText(e.target.value)} />
)

const ClientTextSubmit = ({props, sendClientMessage}) => (
    <input type="button" value="Submit" onClick={() => sendClientMessage(props.clientText, props.apiai)} />
)

const ClientText = (props) => (
    <div>
        <ClientTextBox {...props} />
        <ClientTextSubmit {...props} />
    </div>
)

const ServerTextBox = (props) => (
    <p>{props.serverText}</p>
)

const ServerText = (props) => (
    <div>
        <ServerTextBox {...props} />
    </div>
)

const Main = (props) => (
  <div>
      <ServerText {...props} />
      <ClientText {...props} />
  </div>
)

export default Main
