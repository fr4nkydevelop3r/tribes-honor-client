import { combineReducers } from 'redux';
import tribes from './tribes';
import tribe from './tribe';
import members from './members';

const appReducer = combineReducers({
  tribes,
  tribe,
  members,
});

export default appReducer;
