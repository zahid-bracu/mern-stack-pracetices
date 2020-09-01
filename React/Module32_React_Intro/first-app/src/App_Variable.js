import React from "react";
import "./styles.css";

function App() {
  var name = "KisLu";
  return (
    <div className="App">
      <Display name={name}></Display>
    </div>
  );
}

function Display(props) {
  return (
    <div>
      <h5>Person Name : {props.name}</h5>
    </div>
  );
}

export default App;
