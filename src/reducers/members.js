import { GET_MEMBERS, GET_MEMBERS_ERROR } from '../actions/members';

export default function members(state = {}, action) {
  switch (action.type) {
    case GET_MEMBERS:
      return {
        ...state,
        ...action.members,
      };
    default:
      return state;
  }
}
