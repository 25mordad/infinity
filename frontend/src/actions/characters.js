import * as api from '../api/index.js';


export const getCharacters = (page) => async (dispatch) => {
  try {
    const { data } = await api.fetchCharacters(page);

    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
