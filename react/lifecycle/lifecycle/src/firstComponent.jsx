import React, { Component } from "react";

export class FirstComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Saood from component"
    };
    this.thisNameFromApp = this.props.thisNameFromApp.bind(this);
  }
  render() {
    return <div>{this.thisNameFromApp()}</div>;
  }
}

export default FirstComponent;
