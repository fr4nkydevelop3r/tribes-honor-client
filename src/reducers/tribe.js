import { GET_TRIBE, GET_TRIBE_ERROR } from '../actions/tribe';

export default function tribe(state = null, action) {
  switch (action.type) {
    case GET_TRIBE:
      return {
        ...state,
        ...action.tribe,
      };
    case GET_TRIBE_ERROR:
      return { error: action.error };
    default:
      return state;
  }
}
