export const addPost = data => ({
  type: "ADD_POST",
  data
});

export const deletePost = id => ({
  type: "DELETE_POST",
  id
});

export const editPost = (id, data) => ({
  type: "EDIT_POST",
  id,
  data
});

export const updatePost = (id, data) => ({
  type: "UPDATE_POST",
  id,
  data
});
