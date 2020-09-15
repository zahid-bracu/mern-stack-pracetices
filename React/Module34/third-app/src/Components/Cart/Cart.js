import React from 'react';
import './cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import font awesome library font
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

const Cart = (props) => {
    console.log(props);
    const {
        key,
        category,
        name,
        img,
        price,
        seller,
        shipping,
        url,
        stock,
    }=props.cart;

    console.log(props.cart)
    var total=0;
    var counts=0

    // for(var i=0;i<props.cart.length;i++){
    //     var prices=props.cart[i].price;
    //     var count=props.cart[i].count;
    //     counts+=count;
    //     total=total+(prices*count);
    // }

    const newCart = props.cart.reduce((acc, current) => {
        const x = acc.find(item => item.key === current.key);
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, []);

      console.log(newCart);

      for(var i=0;i<newCart.length;i++){
        var prices=newCart[i].price;
        var count=newCart[i].count;
        counts+=count;
        total=total+(prices*count);
    }

    var subTotal=total;
    var tax=parseFloat((total*15)/100);
    tax=parseFloat(tax.toFixed(2));

    total+=parseFloat(tax);
    total=parseFloat(total.toFixed(2));
    return (
        <div>
            <div className="sticky">
            <h2>Final Cart</h2>
            <h3>Order Summary</h3>
            <h5>Item Ordered : {counts}</h5>
             
            <p>Product Price: {subTotal}</p>
            <p>Shipping & Delivery Cost : {shipping}</p>
            <p>Vat & Tax Cost : {tax} (15%)</p>
            <p>Total (Including Tax) : {total}</p>
            <div>
            {
                props.children
            }
             
            </div>
        </div>
        </div>
    );
};

export default Cart;