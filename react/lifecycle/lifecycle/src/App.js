import React, { Component } from "react";
import "./App.css";
import FirstComp from "./firstComponent";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Saood form app"
    };
    console.log("this is constructor - always first");
  }

  componentDidMount() {
    console.log("this is CDM - always fourth");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("this is gdsfp - always second");
    return null;
  }

  thisName() {
    console.log(this.state.name);
  }

  render() {
    return (
      <div className="App App-header">
        <h1>Lifecycle Example</h1>
        <small>(check console)</small>
        {console.log("this is render - always third")}
        {this.thisName()}
        <FirstComp thisNameFromApp={this.thisName} />
      </div>
    );
  }
}

export default App;
