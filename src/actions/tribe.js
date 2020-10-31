import axios from 'axios';

export const GET_TRIBE = 'GET_TRIBE';
export const GET_TRIBE_ERROR = 'GET_TRIBE_ERROR';

export const getTribe = (idTribe) => async (dispatch) => {
  try {
    const { data: tribe } = await axios.get(
      `${process.env.REACT_APP_API}/get-tribe?idTribe=${idTribe}`,
    );
    dispatch({
      type: GET_TRIBE,
      tribe,
    });
  } catch (e) {
    const {
      response: {
        data: { error },
      },
    } = e;
    dispatch({
      type: GET_TRIBE_ERROR,
      error,
    });
  }
};
