export const IS_AUTH = 'IS_AUTH';

export default function isUserAuth(user) {
  return {
    type: IS_AUTH,
    user,
  };
}
