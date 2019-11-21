import React from "react";
import "./App.css";

export default class Fetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      cart: []
    };
  }

  sendData = () => {
    this.props.getDataTrigger(this.state.cart);
  };

  onClick = e => {
    var cart = this.state.items.slice(e.target.id, Number(e.target.id) + 1);
    this.state.cart.push(cart);
    console.log(this.state.cart);
    this.sendData();
  };

  componentDidMount() {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const api = `${proxy}https://api.itbook.store/1.0/search/python`;
    fetch(api)
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          this.setState({
            isLoaded: true,
            items: result.books
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );
    } else {
      return (
        <div className="d-flex flex-wrap justify-content-between">
          {items.map((item, i) => (
            <div className="card mt-2 shadow" key={item.isbn13}>
              <img src={item.image} className="card-img-top" alt="Book_cover" />
              <div className="card-body">
                <h6 className="card-title">{item.title}</h6>
                <div className="d-flex justify-content-between">
                  <p className="btn btn-danger">{item.price}</p>
                  <p className="btn btn-primary" id={i} onClick={this.onClick}>
                    Add to cart
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
}
