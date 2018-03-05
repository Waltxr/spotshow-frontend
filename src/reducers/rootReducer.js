import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { eventReducer} from './eventReducer'
import {favoriteVenueReducer} from './favoriteVenueReducer'

const rootReducer = combineReducers({
  currentUser: userReducer,
  userEvents: eventReducer,
  favoriteVenues: favoriteVenueReducer
})

export default rootReducer;
