import React from "react";
import "./styles.css";

function App() {
  // Array is declared
  var list = ["xmen", "ymen", "woman", "batman"];
  return (
    <div className="App">
      {/* Array value is sending by index number */}
      <Display list={list[0]}></Display>
      <Display list={list[1]}></Display>
      <Display list={list[2]}></Display>
      <Display list={list[0]}></Display>
    </div>
  );
}

function Display(props) {
  return (
    <div>
      {/* Array value is receiving */}
      <h4>Super Hero Name : {props.list}</h4>
    </div>
  );
}

export default App;
