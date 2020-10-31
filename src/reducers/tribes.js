import { GET_TRIBES, GET_TRIBES_ERROR } from '../actions/tribes';

export default function tribes(state = {}, action) {
  switch (action.type) {
    case GET_TRIBES:
      return {
        ...state,
        ...action.tribes,
      };
    default:
      return state;
  }
}
