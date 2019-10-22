import React, { Component } from 'react';
import './App.css';
import FirstCom from "./FirstCom";
import PicCom from "./banner";

class App extends Component{
  state = {
    students: [
      {
        id: "1",
        name: "Fahim",
        lname: "Ahmadi (Lecturer)"
      },
      {
        id: '2',
        name: "Nidal",
        lname: "Alsharaf"
      },
      {
        id: "3",
        name: "Saood",
        lname: "Akhtar"
      },
      {
        id: '4',
        name: "Hasan",
        lname: "- The king of Snakes"
      },
      {
        id: '5',
        name: "lava",
        lname: "mahmoud"
      }
    ]
  };
  render(){
    return (
      <div>
      <PicCom />
      <h3  className = "maincomp">Welcome Students!</h3>
      <FirstCom name = {this.state.students.map((x,i)=> i==2?(i+1)+". " + x.name.toUpperCase() +" "+ x.lname + "\n": (i+1)+". " + x.name +" "+ x.lname + "\n"
      
      ) } />
    </div>
    )
    
  }

}

export default App;
