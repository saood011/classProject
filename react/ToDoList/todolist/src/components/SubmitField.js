import React, { Component } from 'react'

export class SubmitField extends Component {
   
    state = {
      todo : ""   
    }

    OnSubmit = (e) => {
        e.preventDefault();
        this.props.toDoFunc(this.state.todo);
        this.setState({todo: ""})
    }

    inputChangedHandler = (e) => {
     this.setState({[e.target.name]:e.target.value})
    }
    
    render() {
        return (
            <div className="d-flex justify-content-center flex-row bd-highlight m-2">
                <form onSubmit={this.OnSubmit} className="d-flex">
                <input 
                type="text" 
                name="todo" 
                id="todo"
                className="form-control shadow" 
                value={this.state.todo}
                onChange={(e)=>this.inputChangedHandler(e)}
                placeholder="Add task"
                />
                <button type="submit" className="btn btn-success ml-2">Add</button>
                </form>
                
            </div>
        )
    }
}

export default SubmitField
