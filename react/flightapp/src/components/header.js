import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div className=" bg-secondary text-light pr-5 pt-5 pl-5 pb-2 d-flex justify-content-center row shadow-sm mb-2">
        <h1 className="col-md-12 text-center">Example Airways Company</h1>

        <div className="mt-4">
          <ul className="nav nav-pills col-md-12">
            <li className="nav-item">
              <Link to="/">
                <span className="nav-link text-dark ">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/registerFlights">
                <span className="nav-link text-dark ">Register Flight</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/searchFlight">
                <span className="nav-link text-dark ">Search Flight</span>
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-dark"
                href="/about"
                aria-disabled="true"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
