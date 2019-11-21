import React from "react";
import { useState } from "react";
import Address from "./address";
export default function Order() {
  const [address, setaddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    address2: "",
    City: "",
    State: "",
    Zip: ""
  });
  const [isProceed, setIsProceed] = useState(false);

  const orders = JSON.parse(window.localStorage.getItem("orders"));
  const Tax =
    // eslint-disable-next-line
    eval(orders.map((v, sum) => v.price * v.quantity).join("+")) * 0.19;
  // eslint-disable-next-line
  const Total = eval(orders.map((v, sum) => v.price * v.quantity).join("+"));
  const sendFinalData = () => {
    window.localStorage.setItem("orderPayment", JSON.stringify(orderSum));
  };
  const orderSum = {
    ...orders,
    address,
    total: Total + Tax
  };
  const handleConfirm = address => {
    setaddress(address);
  };
  return isProceed ? (
    <div className="container">
      <div className="mb-5">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((v, i) => (
              <tr key={i}>
                <th scope="row">{v.id}</th>
                <td>{v.product}</td>
                <td>{v.price}</td>
                <td>{v.quantity}</td>
                <td>€{(v.quantity * v.price).toFixed(2)}</td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td className="table-warning">Tax</td>
              <td className="table-warning">€{Tax.toFixed(2)}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td className="table-success">Grand Total</td>

              <td className="table-success">€{(Total + Tax).toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
        <button
          className="btn btn-danger float-right purchase"
          onClick={() => setIsProceed(!isProceed)}
        >
          Proceed
        </button>
      </div>

      <Address
        setAddress={handleConfirm}
        isProceed={setIsProceed}
        sendData={sendFinalData}
      />
    </div>
  ) : (
    <div className="container">
      <div className="mb-5">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((v, i) => (
              <tr key={i}>
                <th scope="row">{v.id}.</th>
                <td>{v.product}</td>
                <td>{v.price}</td>
                <td>{v.quantity}</td>
                <td>€{(v.quantity * v.price).toFixed(2)}</td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td className="table-warning">Tax</td>
              <td className="table-warning">€{Tax.toFixed(2)}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td className="table-success">Grand Total</td>

              <td className="table-success">€{(Total + Tax).toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
        <button
          className="btn btn-danger float-right purchase"
          onClick={() => setIsProceed(!isProceed)}
        >
          Proceed
        </button>
      </div>
    </div>
  );
}
