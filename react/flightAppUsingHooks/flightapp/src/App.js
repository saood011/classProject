import React, { useState } from "react";
import "./App.css";

function Flightlist(props) {
  return (
    <div className="container shadow bg-light">
      <table className="table" border="0">
        <tbody>
          <tr className="bg-danger text-white text-center">
            <th>S.No</th>
            <th>Flight Number</th>
            <th>From</th>
            <th>To</th>
            <th>Date</th>
          </tr>
          {console.log(props.flightData)}
          {props.flightData.map((v, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{v.num}</td>
              <td>{v.from}</td>
              <td>{v.to}</td>
              <td>{v.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function App() {
  const [flight, setflight] = useState([]);
  const [flights, setflights] = useState([]);
  const onChange = e => {
    setflight({ ...flight, [e.target.name]: e.target.value }); ///single flight grabbing
  };
  const onsubmit = e => {
    e.preventDefault();
    setflights([...flights, flight]); // grabbing all info of single flight and adding in flight's'
    setflight({ ...flight, num: "", to: "", from: "", date: "" });
  };

  return (
    <div className="App m-2 d-flex flex-wrap">
      <form className="d-flex flex-column text-left shadow p-4 bg-light">
        <label name="num">Flight Number</label>
        <input name="num" onChange={onChange} type="text" value={flight.num} />

        <label name="to">To</label>
        <input name="to" onChange={onChange} type="text" value={flight.to} />

        <label name="from">from</label>
        <input
          name="from"
          onChange={onChange}
          type="text"
          value={flight.from}
        />

        <label name="date">Date</label>
        <input
          name="date"
          onChange={onChange}
          type="date"
          value={flight.date}
        />

        <button className="btn btn-danger mt-2" onClick={onsubmit}>
          Add
        </button>
      </form>
      <Flightlist flightData={flights} />
    </div>
  );
}

export default App;
