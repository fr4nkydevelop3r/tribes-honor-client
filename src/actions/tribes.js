export const RECEIVE_TRIBES = 'RECEIVE_TRIBES';

export function receiveTribes(tribes) {
  return {
    type: RECEIVE_TRIBES,
    tribes,
  };
}
