import { combineReducers } from 'redux';
import tribes from './tribes';
import tribe from './tribe';

const appReducer = combineReducers({
  tribes,
  tribe,
});

export default appReducer;
