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
  // Using destructure system
  const { name, id } = props.info;
  return (
    <div>
      <h5>Person Name : {name}</h5>
      <h5>ID : {id}</h5>
    </div>
  );
}

export default App;
