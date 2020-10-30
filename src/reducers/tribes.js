import {
  GET_TRIBES,
  GET_TRIBES_ERROR,
  GET_TRIBE,
  GET_TRIBE_ERROR,
} from '../actions/tribes';

export default function tribes(state = {}, action) {
  switch (action.type) {
    case GET_TRIBES:
      return {
        ...state,
        ...action.tribes,
      };
    case GET_TRIBE:
      return {
        ...state,
        ...action.tribe,
      };
    default:
      return state;
  }
}
