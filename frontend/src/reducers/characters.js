
export default (characters = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'FETCH_SINGLE':
      return action.payload;
    case 'likeIT':
      return action.payload;
    default:
      return characters;
  }
};
