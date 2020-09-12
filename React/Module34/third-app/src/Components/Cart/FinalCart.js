import React from 'react';
import './cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import font awesome library font
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const FinalCart = (props) => {

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

    for(var i=0;i<props.cart.length;i++){
        var prices=props.cart[i].price;
        var count=props.cart[i].count;
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
            <h3 style={{textAlign:"center"}}>Order Summary</h3>
            <h5 style={{textAlign:"center"}}>Item Ordered : {counts}</h5>
             
            <p>Product Price: {subTotal}</p>
            <p>Shipping & Delivery Cost : {shipping}</p>
            <p>Vat & Tax Cost : {tax} (15%)</p>
            <p>Total (Including Tax) : {total}</p>
            <div>
             
            <button className="cartButton" onClick={()=> console.log("Item has been checked out")}><FontAwesomeIcon icon={faShoppingCart} /> Review Your Order </button>
             
            </div>
        </div>
        </div>
    );
};

export default FinalCart;