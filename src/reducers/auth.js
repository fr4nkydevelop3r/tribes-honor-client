import { IS_AUTH } from '../actions/auth';

export default function isUserAuth(state = {}, action) {
  switch (action.type) {
    case IS_AUTH:
      return action.user;
    default:
      return state;
  }
}
