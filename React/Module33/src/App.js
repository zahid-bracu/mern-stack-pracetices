import React, { useState } from "react";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
    </div>
  );
}

function MovieCounter() {
  // use State Example
  var result = useState(10);
  console.log(result);

  function click() {
    var counting = count + 1;
    setCount(counting);
  }

  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={click}>Add New</button>
      <h6>Movie Counter : {count}</h6>
      {/* Passing count value to other function */}
      <TotalDisplay total={count + 10}></TotalDisplay>
    </div>
  );
}

function TotalDisplay(props) {
  return (
    <div>
      <h5>Total wactched : {props.total}</h5>
    </div>
  );
}
export default App;
