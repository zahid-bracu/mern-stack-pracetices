import React,{useState,useEffect,useContext} from 'react';
import { Button, Modal } from 'react-bootstrap';
import { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart, processOrder } from './databaseManager';
import fakeData from './fakeData';
import {CartContext} from '../App';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Cart = (props) => {
  const [data,setData]=useState([]);
  const [cart,setCart]=useContext(CartContext);

    // useEffect(() => {
    //   var savedCart=getDatabaseCart();
    //   const productKeys=Object.keys(savedCart);

      
    //   const cartProducts=productKeys.map(key=>{
    //       const product=fakeData.find(pd=> pd.key===key);
    //       product.quantiy=savedCart[key];
    //       return product;
    //   })

    //   console.log(cartProducts);
    //   setData(cartProducts);
    // },[]);

  
    var total=cart.reduce((total, key)=>total+key.price,0);
    




    return (
     
          <div className="">
              <h6>Items Ordered: 0</h6>
              <p>Items: 0$</p>
              <p>Shipping & Handling: 0$</p>
              <p>Total before tax: {total}$</p>
              <p>Estimated Tax: 0$</p>
              <h5 className="text-danger">Order Total: {total}$</h5>
              
              <Link to="/shippingaddress">
              <button className="btn btn-warning btn-sm">Proceed</button>
              </Link>
              
          </div>

    );
};

export default Cart;