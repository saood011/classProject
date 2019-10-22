import React, { Component } from 'react'

export class ToDoList extends Component {

    delToDo = (e) => {
        this.props.delToDo(e.target.id)
    }

    
    render() {
        return (
            <div className="d-flex justify-content-center">
                <table className="table w-50">
                  
                    <tbody>
                  
                        {(this.props.listData.todolist.map((v,i)=> 
                        <tr key={i}>
        
                        <td className="bg-light ">  
                            <input id={i+1} 
                            type="checkbox" 
                            onClick={e=>console.log(document.getElementById(e.target.id).nextElementSibling.classList.toggle("strike"))} 
                            aria-label="Checkbox for following text input"
                            /> 
                            <span className="pl-2"> {v.item.charAt(0).toUpperCase()+ v.item.slice(1)}  </span> 
                        </td>
                        
                        <td className="text-center bg-light" >  
                            <button id={i} onClick={this.delToDo}  type="button" class="btn btn-danger">x</button>
                        </td>
                        
                        </tr>))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ToDoList
