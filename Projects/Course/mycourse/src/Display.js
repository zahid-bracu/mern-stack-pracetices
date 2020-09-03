import React from "react";
import "./styles.css";

export default function Display(props) {
  console.log(props);
  return (
    <div className="App">
      <p>Name : {props.Datas.name}</p>
    </div>
  );
}
