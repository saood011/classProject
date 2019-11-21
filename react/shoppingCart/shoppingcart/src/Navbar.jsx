import React, { Component } from "react";
import Fetch from "./fetchComp";
import Popup from "reactjs-popup";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "node",
      cart: []
    };
  }
  getData = cart => {
    this.setState({ cart });
  };

  onSelect = e => {
    this.setState({ searchValue: e.target.id });
  };

  onClick = e => {
    this.state.cart.splice(e.target.id, e.target.id + 1);
    console.log(this.state.cart);
    this.forceUpdate();
  };
  calculateTotal(price, quantity) {
    const result = price * quantity;
    return "$" + result;
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
          <p className="navbar-brand">Bookstore</p>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <p className="nav-link">
                  Home <span className="sr-only">(current)</span>
                </p>
              </li>
              <li className="nav-item"></li>
              <li className="nav-item dropdown">
                <p
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Books
                </p>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <p
                    className="dropdown-item"
                    id="node"
                    onClick={this.onSelect}
                  >
                    Nodejs
                  </p>
                  <p
                    className="dropdown-item"
                    id="html"
                    onClick={this.onSelect}
                  >
                    HTML
                  </p>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
          <Popup
            trigger={
              <button className="btn btn-danger">
                Cart
                <span class="badge badge-secondary">
                  {this.state.cart.length}
                </span>
              </button>
            }
            modal
            closeOnDocumentClick
          >
            <table className="table w-75">
              <tbody>
                <tr>
                  <th>S.No</th>
                  <th>Product Image</th>
                  <th>Product Description</th>
                  <th>Price</th>
                  <th>remove</th>
                  <th>Total</th>
                </tr>

                {this.state.cart.map((v, i) => (
                  <tr key={i}>
                    <td>{i + 1}.</td>
                    <td>
                      <img className="w-100" src={v[0].image} alt="" />
                    </td>
                    <td>{v[0].title}</td>
                    <td>{v[0].price}</td>

                    <td>
                      <button
                        id={i}
                        className="btn btn-danger"
                        onClick={this.onClick}
                      >
                        Remove
                      </button>
                    </td>
                    <td>{this.calculateTotal(v[0].price.slice(1), 1)}</td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="5" className="text-right bg-info">
                    Grand total
                  </td>
                  <td className="bg-secondary">
                    {this.state.cart
                      .map(v => v[0].price.slice(1))
                      .reduce((a, b) => Number(a) + Number(b), 0)}
                  </td>
                </tr>
              </tbody>
            </table>
          </Popup>
        </nav>
        <Fetch
          searchValue={this.state.searchValue}
          getDataTrigger={this.getData}
        />
      </div>
    );
  }
}

export default Navbar;
