import React, { useState } from "react";
import "./App.css";
import LoginResult from "./loginResult";

function App() {
  const [user] = useState([
    { userName: "saood011", password: "akhtar" },
    { userName: "hayada", password: "123" }
  ]);
  const [loginMsg, setLoginMsg] = useState(false);
  const [username, setuserName] = useState();
  const [pass, setPass] = useState();

  const submitCheck = () => {
    user.map(v => {
      if (v.userName === username && v.password === pass) {
        setLoginMsg(true);
        return null;
      }
      alert("failed");
    });
  };

  return loginMsg ? (
    <div className="App">
      <header className="App-header">
        <LoginResult />
      </header>
    </div>
  ) : (
    <div className="App">
      <header className="App-header">
        <form
          action=""
          className="d-flex flex-column form-group bg-light shadow p-5 align-items-center "
        >
          <p className="black">Login</p>

          <input
            name="username"
            type="text"
            onChange={e => setuserName(e.target.value)}
            placeholder=" Enter your username"
            className="form-control m-2"
          />

          <input
            name="pass"
            type="password"
            onChange={e => setPass(e.target.value)}
            placeholder=" Enter your password"
            className="form-control m-2"
          />
          <button
            type="button"
            onClick={submitCheck}
            className="btn btn-danger m-2"
            onDoubleClick={() => alert("Check your details")}
          >
            Login
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;
