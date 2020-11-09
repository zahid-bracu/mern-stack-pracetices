import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";

export default function App() {
  const imgUrl = "https://i.ibb.co/8Kt454R/mis.jpg";
  return (
    <>
    <Header></Header>
    <div className="wrapper">
      <div className="card">
        <img src={imgUrl} style={{ width: "192px", height: "210px" }} />
        <div className="titles">
          <h6>Kamiz</h6>
        </div>
        <div className="footers d-flex justify-content-between">
          <h6>BDT. 7,850</h6>
          <span class="badge badge-warning">15%</span>
        </div>
        
      </div>
    <button className="btn btn-warning btn-cust">Add to cart</button>
    </div>
    </>
  );
}
