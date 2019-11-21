import React, { Component } from "react";

class Listflight extends Component {
  render() {
    return this.props.flights.map((flight, index) => (
      <React.Fragment key={flight.flightNumber}>
        <tr key={flight.flightNumber}>
          <td>{index + 1}</td>
          <td>{flight.flightNumber}</td>
          <td>{flight.departure}</td>
          <td>{flight.destination}</td>
          <td>{flight.flightDate}</td>
        </tr>
      </React.Fragment>
    ));
  }
}

export default Listflight;
