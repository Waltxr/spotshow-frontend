import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { eventReducer} from './eventReducer'

const rootReducer = combineReducers({
  currentUser: userReducer,
  userEvents: eventReducer
})

export default rootReducer;
