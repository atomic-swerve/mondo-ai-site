const textUpdated = (state = [], action) => {
    switch(action.type) {
        case 'CLIENT_TEXT_UPDATE':
            return {...state, clientText: action.text}
        default:
            return state
    }
}

export default textUpdated
