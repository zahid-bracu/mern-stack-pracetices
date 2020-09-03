import React, { useState } from "react";
import "./styles.css";
import Datas from "./Datas.js";
import Display from "./Display.js";
import NavBar from "./NavBar.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./Cart.js";


function App() {

  const [cart,setCart]=useState([]);
  function addCart(item){
    var newCart=[...cart,item];
    setCart(newCart);
    console.log("Added")
  }
  console.log(cart);
  return (
    <div className="">
      <NavBar></NavBar>
      <div className="row">
        <div className="col-8 main">
          <div className="row">
              {Datas.map((key) => (
              <Display  Datas={key} addCart={addCart}></Display>
            ))}
            </div>
          </div>
          <div className="col-4">
              <Cart></Cart>
          </div>
      </div>
      
    </div>
  );
}
export default App;