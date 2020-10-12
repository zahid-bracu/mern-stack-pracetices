import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import uuid from "uuid";

const Forms = (props) => {
    const {addTodo}=props
    const [todo,setTodo]=useState({
        id:"",
        task:"",
        completed:false
    });

    function onHandle(event){
        setTodo({...todo,task:event.target.value});
    }

    function submission(event){
        event.preventDefault();
        if(todo.task.trim()){
            addTodo({...todo,id: uuid.v4()});
            setTodo({ ...todo, task: "" });
        }
    }
     

    return (
        <form   className="container">
            
            <div className="mx-auto" style={{width:"400px"}} controlId="formBasicEmail">
                <input  onChange={onHandle}  name="task" value={todo.task} className="form-control" type="text" placeholder="Enter Task Name" />
            </div>

            

            <Button   className="mx-auto d-block btn-info" type="submit" value="Submit">Add Task</Button>
        </form>
    );
};

export default Forms;


{/* <div className="mx-auto my-3" style={{width:"400px"}} controlId="formBasicEmail">
                <textarea onBlur={valueFunc} name="taskdetails" style={{height:"100px"}} className="form-control" type="textarea" placeholder="Enter Task Details" />
            </div> */}