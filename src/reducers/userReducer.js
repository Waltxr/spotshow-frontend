export function userReducer(state = {}, action) {
  switch (action.type) {
    case 'GET_USER':
      return action.payload;
    case 'LOGOUT_USER':
      return {};
    case 'LOGIN_USER':
      return action.payload;
    default:
      return state;
  }
};
