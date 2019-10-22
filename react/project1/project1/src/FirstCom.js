import React from 'react';
//import FirstCom from "./FirstCom";

export default class FirstCom extends React.Component{
    render(){
        return (
            <div className="newl">
                <p> {this.props.name }</p>
            </div>
        )
    }
}