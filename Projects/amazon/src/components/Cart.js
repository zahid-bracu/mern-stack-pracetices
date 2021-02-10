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
     
          <div className="container">
               <div className="row">
                 <div className="col-9">

                 </div>

                 <div className="col-3">
                   <h3>From <strong className="text-warning">Amazon.com, Inc</strong></h3>
                   <h4>Seattle, Washington, U.S.</h4>
                   <h5>Arriving in 20-30 days </h5>
                   <hr/>

                   <div>
                     
                     <p className="d-flex justify-content-between">
                       <span>Sub Total . 0 Item</span>
                       <span>$0.00</span>
                     </p>

                     <p className="d-flex justify-content-between">
                       <span>Tax</span>
                       <span>$0.00</span>
                     </p>

                     <p className="d-flex justify-content-between">
                       <span>Delivery Fee</span>
                       <span>$0.00</span>
                     </p>

                     <hr/>


                     <h5 className="d-flex justify-content-between">
                       <span>Total</span>
                       <span>$0.00</span>
                     </h5>

                     <button className="btn btn-warning font-weight-bold mt-3">Procced to Check Out</button>
                     
                   </div>

                 </div>
               </div>
          </div>

    );
};

export default Cart;