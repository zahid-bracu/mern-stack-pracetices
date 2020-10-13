import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import uuid from "uuid";
import TodoList from './TodoList';

const Forms = (props) => {
    
    
    const todos=props.todos;
    console.log(todos)
    function rand(){
        var random=Math.random();
        var num=1000* random.toFixed(5)
        num=parseInt(num)
        return num;
    }

    const {addTodo}=props
    const [todo,setTodo]=useState({
        id:"",
        task:"",
        taskdetails:""
    });

    function onHandle(event){
         var newItems={...todo};
         var num=rand();
         newItems.id=num;
         if(event.target.name=="task"){
             newItems.task=event.target.value.trim();
         } else if(event.target.name=="taskdetails"){
             newItems.taskdetails=event.target.value.trim();
             
         }

         setTodo(newItems)    
    }

    console.log(todo);

    function submission(e){
        e.preventDefault();
        if(todo.task!="" || todo.taskdetails!=""){
            addTodo(todo);
            document.getElementById("task").value="";
            document.getElementById("taskdetails").value="";
        }else{
            alert("Enter Your Task");
        }
        
    }
     

    return (
        <>
        <form onSubmit={submission}   className="container">
            
            <div  className="mx-auto" style={{maxWidth:"400px"}} controlId="formBasicEmail">
                <input id="task" style={{height:"50px",borderRadius:"10px"}} onBlur={onHandle}  name="task"   className="form-control" type="text" placeholder="Enter Task Name"  required/>
            </div>

            <div className="mx-auto my-3" style={{maxWidth:"400px"}} controlId="formBasicEmail">
                <input id="taskdetails"   class="form-control" style={{height:"80px",borderRadius:"10px"}} onBlur={onHandle} type="text" name="taskdetails" placeholder="Enter Task Details" required/>
            </div>

            <Button id="add" style={{padding:"10px 40px",borderRadius:"40px",fontWeight:"700"}}   className="mx-auto d-block btn-success" type="submit" value="Submit">Add Task</Button>
        </form>


        
        </>
    );
};

export default Forms;

  