const postReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_POST": {
      console.log([...state, action.data]);
      return [...state, action.data];
    }
    default:
      return state;
  }
};

export default postReducer;
