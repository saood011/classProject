import React from "react";

export default function Smile(props) {
  const { value, onSmile, onCry } = props;
  return (
    <div className="App">
      <header className="App-header">
        <img src={value} alt="faces"></img>
        <div>
          <button onClick={onSmile}>Smile</button>
          <button onClick={onCry}>Cry</button>
        </div>
      </header>
    </div>
  );
}
