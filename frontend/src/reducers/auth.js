const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case 'AUTH':
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      localStorage.setItem('likes', JSON.stringify({ ...action?.data.result.likes }));
      return { ...state, authData: action.data, loading: false, errors: null };
    case 'LIKEIT':
      localStorage.setItem('likes', JSON.stringify({ ...action?.data.likes }));
      return { ...state, authData: action.data, loading: false, errors: null };
    case 'LOGOUT':
      localStorage.clear();
      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};

export default authReducer;
