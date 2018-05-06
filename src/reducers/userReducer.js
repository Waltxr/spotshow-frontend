export function userReducer(state = {}, action) {
  switch (action.type) {
    case 'GET_USER':
      // console.log("Get User");
      // console.log(action.payload)
      return action.payload;
    case 'LOGOUT_USER':
      return {};
    case 'LOGIN_USER':
      console.log("login user");
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};
