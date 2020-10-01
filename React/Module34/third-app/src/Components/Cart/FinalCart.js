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
    subTotal=subTotal.toFixed(2);
    subTotal=parseFloat(subTotal);

    var tax=parseFloat((total*15)/100);
    tax=parseFloat(tax.toFixed(2));

    total+=parseFloat(tax);
    total=parseFloat(total.toFixed(2));

     
    return (
        <div>
            <div className="sticky">
            <h2 className="">Cart</h2>
            <h3>Order Summary</h3>
            <h5>Item Ordered : {counts}</h5>
             
            <p>Total Product Price:  <span className="text-danger">{subTotal}</span></p>
            <p>Shipping & Delivery Cost : {shipping}</p>
            <p>Vat & Tax Cost : {tax} (15%)</p>
            <p>Total (Including Tax) : {total}</p>
            <div>
             
            <button className="btn btn-danger px-5" onClick={()=> props.checked()}><FontAwesomeIcon icon={faShoppingCart} /> Check Out </button>
             
            </div>
        </div>
        </div>
    );
};

export default FinalCart;