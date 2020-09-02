import React, { useState } from "react";
import "./styles.css";

function App() {
  
  return(
    <MovieCounter></MovieCounter>
  )
}

function MovieCounter(){
  // useState to change value
  var [count,setCount]=useState(0);
  // Event handler function
  function add(){
    var newCount=count+1;
    setCount(newCount);
  }
  return(
    <div className="App">
      <h4>Movie watched in 2020 : {count}</h4>
      {/* sending count value to other function */}
      <h4>Movie Watched from 2002: <TotalMovie count={count+126}></TotalMovie></h4>
      {/* event handler adding */}
      <button onClick={add}>Watch Movie</button>
    </div>
  )
}

function TotalMovie(props){
  return(
    <span>{props.count}</span>
  )
}



export default App;
