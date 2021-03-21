
export default (characters = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;

    default:
      return characters;
  }
};
