const initialState = {
  users: [],
};
 const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'weather':
      return {
        ...state,
        users: action.users,
      };
    default:
      return state;
  }
};

export default globalReducer;
