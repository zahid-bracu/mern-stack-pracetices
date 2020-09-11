import React from 'react';
// import font awesome library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import font awesome library font
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './cart.css';

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';


const Cart = (props) => {
    var total=0;
    // Adding all value price to a total value
    for(var i=0;i<props.cart.length;i++){
        total+=props.cart[i].price;
        total=total.toFixed(2);
        total= parseFloat(total);
    }
    var exTotal=total;
    var shipping=null;
    if(total==0){
        shipping=0;
    }else if(total<50){
        shipping=11.99;
    }else if(total>=50 && total<100){
        shipping=6.99;
    }else if(total>=100){
        shipping=4.99;
    }

    var tax=parseFloat((total*15)/100);
    tax=parseFloat(tax.toFixed(2));

    total+=shipping;
    total+=tax;
    total=parseFloat(total.toFixed(2));

     
    return (
        <div className="sticky">
            <h3 style={{textAlign:"center"}}>Order Summary</h3>
            <h5 style={{textAlign:"center"}}>Item Ordered : {props.cart.length}</h5>
             
            <p>Product Price: {exTotal}</p>
            <p>Shipping & Delivery Cost : {shipping}</p>
            <p>Vat & Tax Cost : {tax} (15%)</p>
            <p>Total (Including Tax) : {total}</p>
            <div>
            <Link to="/review">
            <button className="cartButton" onClick={()=> console.log("Item has been checked out")}><FontAwesomeIcon icon={faShoppingCart} /> Review Your Order </button>
            </Link>
            </div>
        </div>
    );
};

export default Cart;    