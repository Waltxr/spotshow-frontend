
export function backgroundJobStatusReducer(state = {}, action) {  
  switch (action.type) {
    case 'BACKGROUND_JOB_STATUS' :
      return action.payload
    default:
      return state
  }
}
