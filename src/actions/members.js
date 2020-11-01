import axios from 'axios';
export const GET_MEMBERS = 'GET_MEMBERS';
export const GET_MEMBERS_ERROR = 'GET_MEMBERS_ERROR';

export const getMembers = (idTribe) => async (dispatch) => {
  try {
    const { data: members } = await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API}/get-members?idTribe=${idTribe}`,
    });
    //console.log(tribes);
    dispatch({
      type: GET_MEMBERS,
      members,
    });
  } catch (e) {
    console.log(e.message);
    dispatch({
      type: GET_MEMBERS_ERROR,
      error: e.message.error,
    });
  }
};
