import React, { Component } from "react";

export class App extends Component {
  state = {};
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
      // eslint-disable-next-line
    });
  };
  render() {
    return (
      <div className="container m-5 p-5 border border-1 border-info bg-info text-white text-center">
        <form
          className="form-group"
          onSubmit={e => {
            e.preventDefault();
            this.props.dispatchRegisterFlight(this.state);
          }}
        >
          Flight Number:
          <input
            type="text"
            onChange={this.changeHandler}
            className="form-control"
            name="fn"
          />
          Destination:{" "}
          <input
            type="text"
            onChange={this.changeHandler}
            className="form-control"
            name="des"
          />
          Departure:{" "}
          <input
            type="text"
            onChange={this.changeHandler}
            className="form-control"
            name="dep"
          />
          Date:{" "}
          <input
            type="text"
            onChange={this.changeHandler}
            className="form-control"
            name="date"
          />
          <input type="submit" value="Register" className="btn btn-primary" />
        </form>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Destination</th>
                <th>Departure</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {this.props.flights.map((v, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{v.fn}</td>
                  <td>{v.des}</td>
                  <td>{v.dep}</td>
                  <td>{v.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
