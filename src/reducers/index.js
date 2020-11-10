import { combineReducers } from 'redux';
import tribes from './tribes';
import tribe from './tribe';
import members from './members';
import auth from './auth';

const appReducer = combineReducers({
  tribes,
  tribe,
  members,
  userAuth: auth,
});

export default appReducer;
