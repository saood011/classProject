import React, { Component } from "react";

export class registerFlight extends Component {
  state = {
    flightNumber: "",
    departure: "",
    destination: "",
    flightDate: ""
  };

  //set the local state object onChange of each form element
  changeHandler = event => {
    let flightProperty = event.target.name;
    let proppertyValue = event.target.value;

    this.setState({ [flightProperty]: proppertyValue });
  };

  render() {
    return (
      <div className="col-3 pt-5 pb-5 pl-3 pr-3 shadow-sm">
        <h4 className="text-dark">Register Flights</h4>
        <form
          onSubmit={event => {
            event.preventDefault();
            this.props.addFlight(this.state);
            this.setState({
              flightNumber: "",
              departure: "",
              destination: "",
              flightDate: ""
            });
          }}
        >
          <div className="form-group">
            <label>Flight Number</label>
            <input
              type="text"
              className="form-control"
              name="flightNumber"
              placeholder="BA2490 ..."
              onFocus={event => (event.target.placeholder = "")}
              onBlur={event => (event.target.placeholder = "BA2490 ...")}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group">
            <label>From</label>
            <input
              type="text"
              className="form-control"
              name="departure"
              placeholder="Departure ..."
              onFocus={fromE => (fromE.target.placeholder = "")}
              onBlur={fromE => (fromE.target.placeholder = "Departure ...")}
              onChange={this.changeHandler}
            />
          </div>

          <div className="form-group">
            <label>To</label>
            <input
              type="text"
              className="form-control"
              name="destination"
              placeholder="Destination ..."
              onFocus={toE => (toE.target.placeholder = "")}
              onBlur={toE => (toE.target.placeholder = "Destination ...")}
              onChange={this.changeHandler}
            />
          </div>

          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              className="form-control"
              name="flightDate"
              placeholder="MM/DD/YYYY"
              onFocus={fromE => (fromE.target.placeholder = "")}
              onBlur={fromE => (fromE.target.placeholder = "MM/DD/YYYY")}
              onChange={this.changeHandler}
            />
          </div>

          <input
            type="submit"
            value="Register Flight"
            className="btn btn-primary form-control mt-3"
          />
        </form>
      </div>
    );
  }
}

export default registerFlight;
