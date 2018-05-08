const initialState = {
  dimmerActive: true
}

export function dimmerReducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_EVENTS_LOADER' :
      return {
            ...state,
            dimmerActive: !state.dimmerActive
          }
      default:
        return state
  }
}
