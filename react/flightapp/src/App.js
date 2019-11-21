import React from "react";
import "./App.css";
import Header from "./components/header";
import RegisterFlight from "./components/registerFlight";
import Listflights from "./components/listflights";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home";
import Search from "./components/search";

class App extends React.Component {
  state = {
    flights: [
      {
        flightNumber: "AB210",
        departure: "Dusseldorf",
        destination: "Berlin",
        flightDate: "10/01/2019"
      },
      {
        flightNumber: "XW500",
        departure: "New York",
        destination: "Berlin",
        flightDate: "01/01/2020"
      }
    ]
  };

  addFlight = flight => {
    const flights = this.state.flights;
    this.setState({ flights: [...flights, flight] });
    console.log("flight added to App.state");
    this.forceUpdate();
  };


  render() {
    return (
      <Router>
        <div className="container">
          <Header />

          <div className="row">
            <Route
              path="/searchFlight"
              exact
              render={props => <Search flights={this.state.flights} />}
            />
            <Route path="/" exact component={Home} />
            <Route
              path="/registerFlights"
              exact
              render={props => (
                <React.Fragment>
                  <RegisterFlight addFlight={this.addFlight} />

                  <div className="col-9">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Flight Number</th>
                          <th>Departure</th>
                          <th>Destination</th>
                          <th>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <Listflights flights={this.state.flights} />
                      </tbody>
                    </table>
                  </div>
                </React.Fragment>
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
