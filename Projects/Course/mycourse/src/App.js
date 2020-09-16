import React, { useState } from "react";
import "./styles.css";
import Datas from "./Datas.js";
import Display from "./components/Display.js";
import NavBar from "./NavBar.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./Cart.js";
import { addToDatabaseCart, getDatabaseCart } from '../src/utilities/databaseManager';


function App() {
  /*
  declaring the cart variable as array to save & add product
  */
  const [cart,setCart]=useState([]);

  /* A function that help to add the product into cart while clicking add to cart button
  newly added items are pass through the function parameter*/
  function addCart(item){
    // newly add item join with the other cart value in the array
    var newCart=[...cart,item];

    // check if same item being added more than one times
    const same=newCart.filter(pd=>pd.key===item.key)
    var count=same.length; //check how many times same items are being clicked
    item.count=count;
    addToDatabaseCart(item.key,count);
    var tempCart=[...cart,item];
    // Now newly added Item + old Item array are being added to the cart
    setCart(tempCart);
  }
  console.log(cart);
  return (
    <div className="">
      <NavBar></NavBar>
      <div className="row">
        <div className="col-8 main">
          <div className="row">
            {
              Datas.map((pd) => (<Display key={pd.key}  Datas={pd} addCart={addCart}></Display>))
            }
            </div>
          </div>
          <div className="col-4">
              <Cart cart={cart}></Cart>
          </div>
      </div>
      
    </div>
  );
}
export default App;