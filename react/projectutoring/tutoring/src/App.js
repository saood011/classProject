import React from 'react';
import './App.css';

function App() {
  const formatUser = user => user.ln + " " + user.fn;
  
  const greeting = user => {
    if(user) {
      return  <h1>Hello, {formatUser(user)}!</h1>
    } else{
      return <h1>Hello, Stranger</h1>
    }
  }  
  const name  = {
    fn: "Saood",
    ln: "Akhtar"
  }
   const element = (
      <div>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
      
    )
  
  
  return (
    <div className="App">
      <header className="App-header">
      
        <h1>{greeting(name)}{element}</h1>
      </header>
    </div>
  );
}

export default App;
