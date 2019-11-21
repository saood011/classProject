import React from "react";
import { useState } from "react";
import visa from "./logo.svg";

export default function Address(props) {
  const [address, setaddress] = useState({});
  const onChange = e => {
    setaddress({ ...address, [e.target.name]: e.target.value });
  };
  return (
    <div className=" p-2 d-flex justify-content-center">
      <form className="bg-light p-4 rounded border border-dark w-50">
        <p className="bg-secondary p-2 ">Delivery Address</p>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label htmlfor="inputEmail4">First Name</label>
            <input
              type="text"
              class="form-control"
              id="inputEmail4"
              placeholder="First Name"
              name="firstName"
              onChange={onChange}
              value={address.firstName}
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Last Name</label>
            <input
              type="text"
              class="form-control"
              id="inputPassword4"
              placeholder="Last Name"
              name="lastName"
              onChange={onChange}
              value={address.lastName}
            />
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress">Address</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            name="address"
            onChange={onChange}
            value={address.address}
          />
        </div>
        <div class="form-group">
          <label htmlfor="inputAddress2">Address 2</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
            name="address2"
            onChange={onChange}
            value={address.address2}
          />
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label htmlfor="inputCity">City</label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              name="city"
              onChange={onChange}
              value={address.city}
            />
          </div>
          <div class="form-group col-md-4">
            <label htmlfor="inputState">State</label>
            <input
              type="text"
              name="state"
              className="form-control"
              placeholder="State"
              onChange={onChange}
              value={address.State}
            />
          </div>
          <div class="form-group col-md-2">
            <label for="inputZip">Zip</label>
            <input
              type="text"
              className="form-control"
              id="inputZip"
              name="zip"
              onChange={onChange}
              value={address.zip}
            />
          </div>
        </div>
        <p className="bg-secondary p-2">Payment Details</p>
        <div class="form-row">
          <div class="col-7">
            <input
              type="text"
              className="form-control"
              placeholder="Card Number"
              name="cardNumber"
              onChange={onChange}
              value={address.cardNumber}
            />
          </div>
          <div class="col">
            <input
              type="text"
              className="form-control"
              placeholder="Bank"
              onChange={onChange}
              name="bankName"
              value={address.bankName}
            />
          </div>
          <div class="col">
            <input
              type="text"
              className="form-control"
              placeholder="CVV"
              onChange={onChange}
              name="CVV"
              value={address.CVV}
            />
            <img src={visa} alt="visa" className="App-logo" />
          </div>
        </div>
        <div class="form-group"></div>
        <button
          type="submit"
          onSubmit={props.sendData()}
          className="btn btn-primary"
          onClick={e => {
            e.preventDefault();
            props.setAddress(address);
            setaddress({
              firstName: "",
              lastName: "",
              address: "",
              address2: "",
              CVV: "",
              bankName: "",
              cardNumber: "",
              State: "",
              city: ""
            });
          }}
        >
          Confirm
        </button>
      </form>
    </div>
  );
}
