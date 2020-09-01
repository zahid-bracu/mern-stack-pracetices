import React from "react";
import "./styles.css";

function App() {
  // normal object is declared
  var info = {
    name: "Zahid",
    id: "15101122"
  };
  return (
    <div className="App">
      {/* the whole object is passed */}
      <Display info={info}></Display>
    </div>
  );
}

function Display(props) {
  return (
    <div>
      <h5>Person Name : {props.info.name}</h5>
      <h5>ID : {props.info.id}</h5>
    </div>
  );
}

export default App;
