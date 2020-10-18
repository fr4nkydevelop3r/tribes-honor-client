import { combineReducers } from 'redux';
import tribes from './tribes';

const appReducer = combineReducers({
  tribes,
});

export default appReducer;
