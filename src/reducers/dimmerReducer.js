const initialState = {
  dimmerActive: true
}

export function dimmerReducer(state = initialState, action) {
  switch (action.type) {
    case 'EVENTS_LOADED' :
      return false
    default:
      return state;
  }
}
