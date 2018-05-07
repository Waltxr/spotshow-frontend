import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { eventReducer} from './eventReducer'
import {favoriteVenueReducer} from './favoriteVenueReducer'
import {searchReducer} from './searchReducer'
import {dimmerReducer} from './dimmerReducer'

const rootReducer = combineReducers({
  currentUser: userReducer,
  userEvents: eventReducer,
  favoriteVenues: favoriteVenueReducer,
  searchInput: searchReducer,
  dimmerActive: dimmerReducer
})

export default rootReducer;
