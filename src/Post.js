import React, { Component } from "react";
import { connect } from "react-redux";
class Post extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.post.title}</h2>
        <p>{this.props.post.message}</p>
        <button>Edit</button>
        <button onClick={e => this.props.deletePost(this.props.post.id, e)}>
          Delete
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => {
      dispatch({ type: "DELETE_POST", id: id });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Post);
