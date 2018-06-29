import React, { Component } from "react";
import { connect } from "react-redux";
import { deletePost, editPost } from "./actions/Action";
class Post extends Component {
  render() {
    return (
      <div className="post">
        <h2 className="post_title">{this.props.post.title}</h2>
        <p className="post_message">{this.props.post.message}</p>
        <div className="control-buttons">
          <button
            className="edit"
            onClick={e => this.props.editPost(this.props.post.id, e)}
          >
            Edit
          </button>
          <button
            className="delete"
            onClick={e => this.props.deletePost(this.props.post.id, e)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => {
      dispatch(deletePost(id));
    },
    editPost: id => {
      dispatch(editPost(id));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Post);
