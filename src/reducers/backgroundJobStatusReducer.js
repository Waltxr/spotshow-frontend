const initialState = {
  backgroundJobStatus: 'fired'
}

export function backgroundJobStatusReducer(state = initialState, action) {
  switch (action.type) {
    case 'BACKGROUND_JOB_STATUS' :
      return action.payload
    default:
      return state
  }
}
