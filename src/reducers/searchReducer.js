export function searchReducer(state = {searchInput: ""}, action) {
  switch(action.type) {
    case 'SEARCH_INPUT':
      return action.payload;
    default:
      return state;
  }
}
