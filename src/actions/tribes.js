import axios from 'axios';
export const GET_TRIBES = 'GET_TRIBES';
export const GET_TRIBES_ERROR = 'GET_TRIBES_ERROR';

export const getTribes = () => async (dispatch) => {
  try {
    const { data: tribes } = await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API}/get-tribes`,
    });
    //console.log(tribes);
    dispatch({
      type: GET_TRIBES,
      tribes,
    });
  } catch (e) {
    console.log(e.message);
    dispatch({
      type: GET_TRIBES_ERROR,
      error: e.message.error,
    });
  }
};
