export function favoriteVenueReducer(state = [], action) {
  switch(action.type) {
    case 'FETCH_FAVORATE_VENUES' :
      return [...action.payload]
    default:
      return state
  }
}
