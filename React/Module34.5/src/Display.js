import React, { useState, useEffect } from "react";
import "./styles.css";

function Display(props) {
  return (
    <div className="App">
      <h2>Name : {props.data.name}</h2>
      <h3>Capital : {props.data.capital}</h3>
      <div>
        <img className="box" src={props.data.flag} />
      </div>
      <div>
        <button onClick={() => props.add(props.data)}>Add this Country</button>
      </div>
    </div>
  );
}

export default Display;
