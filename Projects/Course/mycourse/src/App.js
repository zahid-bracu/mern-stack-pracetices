import React from "react";
import "./styles.css";
import Datas from "./Datas.js";
import Display from "./Display.js";
import NavBar from "./NavBar.js";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div className="">
      <NavBar></NavBar>
      <h1>Cool</h1>
      <div className="row">
      {Datas.map((key) => (
        <Display  Datas={key}></Display>
      ))}
      </div>
      
    </div>
  );
}
