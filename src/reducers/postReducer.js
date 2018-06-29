const postReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_POST": {
      console.log([...state, action.data]);
      return [...state, action.data];
    }
    case "DELETE_POST": {
      return state.filter(post => post.id !== action.id);
    }
    default:
      return state;
  }
};

export default postReducer;
