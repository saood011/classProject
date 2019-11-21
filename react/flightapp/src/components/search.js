import React, { Component } from "react";

export class Search extends Component {
  state = {
    dep: "",
    des: "",
    result: []
  };

  changeHandler = event => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    this.setState({ [inputName]: inputValue });
  };

  //to find all flights based on user nececity
  searchFlight = (flights, flight) => {
    const result = flights.filter(
      flt => flt.departure === flight.dep && flt.destination === flight.des
    );
    this.setState({ result: result });
    console.log(this.state);
  };
  render() {
    return (
      <div className="container">
        <form
          onSubmit={event => {
            event.preventDefault();
            this.searchFlight(this.props.flights, this.state);
          }}
        >
          <div className="row">
            <div className="col-6">
              <label>Departure: </label>
              <input
                type="text"
                name="dep"
                onChange={this.changeHandler}
                className="form-control"
              />
            </div>
            <div className="col-6">
              <label className="pl-5">Destination: </label>
              <input
                type="text"
                name="des"
                onChange={this.changeHandler}
                className="form-control"
              />
            </div>
          </div>
          <button
            type="submit"
            className="form-control mt-3 bg-info text-white mb-5"
          >
            Search
          </button>
        </form>

        <div>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Flight Number</th>
                <th>Departure</th>
                <th>Destination</th>
                <th>Flight Date</th>
              </tr>
            </thead>
            <tbody>
              {this.state.result.length
                ? this.state.result.map((fl, index) => (
                    <tr key={fl.flightNumber}>
                      <td>{index + 1}</td>
                      <td>{fl.flightNumber}</td>
                      <td>{fl.departure}</td>
                      <td>{fl.destination}</td>
                      <td>{fl.flightDat}</td>
                    </tr>
                  ))
                : console.log("nothing to display")}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Search;
