import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";
import Task from "./components/Task";
export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Task />
      </div>
    );
  }
}

export default App;
