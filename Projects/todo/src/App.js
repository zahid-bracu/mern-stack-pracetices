import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Forms from './components/Forms';
import TodoList from './components/TodoList';
 
import Nav from './components/Nav';
import Footer from './components/Footer';
 

function App() {
  const [todos,setTodos]=useState([]);

  function addTodo(todo){
    var newItem=[...todos,todo];
    setTodos(newItem);
  }
  console.log(todos);


  function remove(id){
    var value=todos.filter(key=> key.id!=id);
    console.log(value);
    setTodos(value);
  }
   

  return (
     <div className="body">
       <Navigation></Navigation>
       <h1 className="text-center my-1 text-secondary">Task Manager</h1>
        <div className="main">
        
        <Forms addTodo={addTodo} todos={todos}></Forms>
        
        {
              todos.map(key=> <TodoList remove={remove} todos={key}></TodoList>)
        }
        </div>
        <Footer></Footer>
     </div>
  );
}

export default App;
