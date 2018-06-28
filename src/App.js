import React, { Component } from "react";
import AllPost from "./AllPost";
import PostForm from "./PostForm";
class App extends Component {
  render() {
    return (
      <div className="App">
        <PostForm />
        <AllPost />
      </div>
    );
  }
}

export default App;
