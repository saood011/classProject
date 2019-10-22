import React, { Component } from 'react'
import logo from '../logo.svg';

export class Header extends Component {
    render() {
        return (
            <div className="bg-dark container">
                <div className="d-flex justify-content-between align-items-center">
                <p className="text-white h3 p-2">To-Do App <br/> <bold className="h6">by Saood</bold></p>

                <img src={logo} className="App-logo" alt="logo" />
                </div>
                <p className="w-100 text-center text-white m-0 p-2 h6">Home|About</p> 
            </div>
        )
    }
}

export default Header
