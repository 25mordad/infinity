import * as api from '../api/index.js';


export const signup = (formData , router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: 'AUTH', data });
    router.push('/');


  } catch (error) {
    console.log(error);
  }
};

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: 'AUTH', data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const likeIt = (id) => async (dispatch) => {
  try {

    const { data } = await api.likeCharacter(id);
    //
    dispatch({ type: 'LIKEIT',  data });

  } catch (error) {
    console.log(error.message);
  }
};
