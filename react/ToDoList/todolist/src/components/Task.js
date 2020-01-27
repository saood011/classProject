import React, { Component } from "react";

export class ToDoList extends Component {
  state = { task: "", tasks: [], isDone: false, taskDone: 0 };

  //grabbing task from user input
  changeHandler = e => this.setState({ task: e.target.value });

  //storing task and pushing in tasks array
  ClickHandler = e => {
    console.log("i am clicked");
    if (this.state.task === "") {
      return null;
    } else {
      this.state.tasks.push(this.state.task);
      this.setState({ task: "" });
      this.forceUpdate();
    }
  };

  // strike through line
  isDoneHandler = event => {
    const element = event.target;
    element.classList.toggle("is-done");
    // remaining task handler
    this.setState({
      taskDone: document.getElementsByClassName("is-done").length
    });
  };

  // delete the task
  delToDo = id => {
    this.state.tasks.splice(id, 1);
    this.forceUpdate();
  };

  render() {
    return (
      <div className="container text-center mt-2">
        <form action="" className="form-group d-flex justify-content-center">
          <input
            required
            type="text"
            onChange={this.changeHandler}
            value={this.state.task}
            className="form-control w-50 mr-1"
            placeholder="Type your task here..."
          />
          <button
            className="btn btn-success"
            type="button"
            onClick={this.ClickHandler}
          >
            Add
          </button>
        </form>
        {this.state.tasks.length > 0 ? (
          <p className="bg-dark p-3 text-white">
            {this.state.tasks.length - this.state.taskDone} remaining out of{" "}
            {this.state.tasks.length} tasks
          </p>
        ) : (
          <p className="bg-light p-3">No task found. Please add some task...</p>
        )}
        <div className="text-decoration-none">
          <table className="table">
            <tbody>
              {this.state.tasks.map((v, i) => (
                <tr key={"c" + i} className="bg-warning">
                  <td className="p-3 text-left sno">{i + 1}</td>
                  <td className="p-3 text-left" onClick={this.isDoneHandler}>
                    {v.charAt(0).toUpperCase() + v.slice(1)}
                  </td>
                  <td className="p-3 text-right">
                    <button
                      id={i}
                      onClick={e => this.delToDo(e.target.id)}
                      className="btn btn-danger"
                    >
                      &times;
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ToDoList;
