import React from "react";
import "./App.css";
import Order from "./order";
function App() {
  const orders = [
    {
      id: 1,
      product: "Java Book",
      price: 2.4,
      quantity: 2
    },
    {
      id: 2,
      product: "Python Book",
      price: 2.4,
      quantity: 2
    },
    {
      id: 3,
      product: "HTML Book",
      price: 2.3,
      quantity: 3
    }
  ];
  return (
    <div className="App">
      {window.localStorage.setItem("orders", JSON.stringify(orders))}
      <Order />
    </div>
  );
}

export default App;
