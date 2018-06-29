import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "./Post";
import EditComponent from "./EditComponent";

class AllPost extends Component {
  render() {
    return (
      <div className="mt-5">
        <h1 className="post_heading">All Post</h1>
        {this.props.posts.map(
          post =>
            post.editing ? (
              <EditComponent post={post} key={post.id} />
            ) : (
              <Post key={post.id} post={post} />
            )
        )}
      </div>
    );
  }
}

//map the state in store to internal state of this component
const mapStateToProps = state => {
  return {
    posts: state
  };
};

export default connect(mapStateToProps)(AllPost);
