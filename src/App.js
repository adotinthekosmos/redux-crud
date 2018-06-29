import React, { Component } from "react";
import AllPost from "./AllPost";
import PostForm from "./PostForm";
import { Draggable, Droppable } from "react-drag-and-drop";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <h2 className="center ">Post It</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Draggable>
              <button className="button-toggle">
                <i class="icon ion-ios-add" />
              </button>
            </Draggable>

            <PostForm />
          </div>
          <div className="col-md-6">
            <AllPost />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
