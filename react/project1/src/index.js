import React from 'react';
import ReactDom from 'react-dom';
import "../index.css"

export default function Index(){
    return (
        <div>
            <h1 className= "heading">Welcome!</h1>
        </div>
    )
}

ReactDom.render(<Index />, document.getElementById('root'));