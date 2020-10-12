import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Forms from './components/Forms';
 
import TodoList from './components/TodoList';

function App() {
  const [todos,setTodos]=useState([]);

  function addTodo(todo){
    setTodos([todo,...todos]);
  }

  

  return (
     <>
     <Navigation></Navigation>
     <Forms addTodo={addTodo}></Forms>
     <TodoList todos={todos}></TodoList>
     </>
  );
}

export default App;
