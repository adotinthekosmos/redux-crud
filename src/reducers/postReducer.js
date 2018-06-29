const postReducer = (state = [], action) => {
  const newPost = action.data;
  switch (action.type) {
    case "ADD_POST": {
      console.log([...state, newPost]);
      return [...state, newPost];
    }
    case "DELETE_POST": {
      return state.filter(post => post.id !== action.id);
    }
    case "EDIT_POST": {
      return state.map(
        post =>
          post.id === action.id ? { ...post, editing: !post.editing } : post
      );
    }
    case "UPDATE_POST": {
      //loop through state to find the correct post
      //if post was found -> set the new value for the editing post
      return state.map(post => {
        if (post.id === action.id) {
          return {
            ...post,
            title: newPost.newTitle,
            message: newPost.newMessage,
            editing: !post.editing
          };
        } else {
          return post;
        }
      });
    }
    default:
      return state;
  }
};

export default postReducer;
