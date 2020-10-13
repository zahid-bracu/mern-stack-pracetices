import React, { useEffect, useState } from 'react';
import { Button,Card } from 'react-bootstrap';
import './style.css';

const TodoList = (props) => {
    const [flag,setFlag]=useState(true);

    console.log(props.todos);
    const {id,task,taskdetails}=props.todos;
    return (
        <div className="card">
            <div className="my-3 row justify-content-center align-items-center">
                <div  className="col-8">
                    <h4 id="taskHeader">{task}</h4>
                    <p id="taskDetail">{taskdetails}</p>
                </div>
                <div className="col-2">
                    <button id="cross" onClick={()=>props.remove(id)} className="btn btn-danger btn-lg">X</button>
                </div>
            </div>
        </div>
    );
};

export default TodoList;