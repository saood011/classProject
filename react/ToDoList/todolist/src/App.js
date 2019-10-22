import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";
import SubmitField from "./components/SubmitField";
import shortid from "shortid";
import ToDoList from "./components/ToDoList";
export class App extends Component {
  state = {
    todolist: []
  };

  addToDo = todo => {
    const todoitem = {
      id: shortid.generate(),
      item: todo
    };
    this.state.todolist.push(todoitem);
    console.log(this.state.todolist);
    this.forceUpdate();
  };

  delToDo = id => {
    this.state.todolist.splice(id, 1);
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <Header />
        <SubmitField toDoFunc={this.addToDo} />
        <ToDoList
          listData={this.state}
          delToDo={this.delToDo}
          markedDone={this.markedDone}
        />
      </div>
    );
  }
}

export default App;
