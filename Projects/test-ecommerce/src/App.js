import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import "./App.css";
import Cart from './Cart';
import Display from "./Display";
import mockAxiosCall from './mockAxiosCall';

export default function App() {
  const [cart,setCart]=useState([]);
  const [data,setData]=useState([]);
  useEffect(() => {
    console.log(mockAxiosCall().shareClassArray);
    var arrayObObject=mockAxiosCall().shareClassArray;
    setData(arrayObObject);
  }, 0)


  function addToCart(name){
    console.log(name);
    
    const temp=[...cart,name];
    setCart(temp);
  }

  console.log(cart);
  console.log(data);
  const imgUrl = "https://i.ibb.co/8Kt454R/mis.jpg";
  return (
    <>
         <div>
           {
             data.map(key=> <Display addToCart={addToCart} pd={key}></Display>)
           }
         </div>

         <h1>Cart L : {cart.length}</h1>
         {

            cart.map(key => <Cart pd={key}></Cart>)
         }
    </>
  );
}
