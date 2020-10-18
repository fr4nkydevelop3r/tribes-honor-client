import { RECEIVE_TRIBES } from '../actions/tribes';

export default function tribes(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TRIBES:
      return {
        ...state,
        ...action.tribes,
      };
    default:
      return state;
  }
}
