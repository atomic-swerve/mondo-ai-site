import React from 'react'

const getChangedValue = (e) => (
    e.target.value
)

const TextBox = ({text, disabled, onChangeCallback = null}) => (
    <input type="text" maxLength="255" disabled={disabled} value={text} onChange={onChangeCallback ? (e) => onChangeCallback(getChangedValue(e)) : null} />
)

const ClientTextSubmit = ({clientText, sendClientMessage}) => (
    <input type="button" value="Submit" onClick={() => sendClientMessage(clientText)} />
)

const ClientTextBox = ({clientText, awaitingServer, updateClientText}) => (
    <TextBox text={clientText} disabled={awaitingServer} onChangeCallback={(t) => updateClientText(t)} />
)

const ClientText = (props) => (
    <div>
        <ClientTextBox {...props} />
        <ClientTextSubmit {...props} />
    </div>
)

const ServerTextBox = ({text}) => (
    <p>{text}</p>
)

const ServerText = (props) => (
    <div>
        <ServerTextBox text={props.message.serverText} />
    </div>
)


const Main = (props) => (
  <div>
      <ServerText {...props} />
      <ClientText {...props} />
  </div>
)

export default Main
