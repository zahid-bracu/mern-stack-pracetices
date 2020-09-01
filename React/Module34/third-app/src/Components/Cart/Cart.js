import React from 'react';
// import font awesome library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import font awesome library font
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './cart.css';


const Cart = (props) => {
    var total=0;
    for(var i=0;i<props.cart.length;i++){
        total+=props.cart[i].price;
        total=total.toFixed(2);
        total= parseFloat(total);
    }
    var tax=null;
    if(total==0){
        tax=0;
    }else if(total<50){
        tax=11.99;
    }else if(total>=50 && total<100){
        tax=6.99;
    }else if(total>=100){
        tax=4.99;
    }

    total+=tax;
    total=total.toFixed(2);

    console.log(total)
    return (
        <div>
            <p>Total Item : {props.cart.length}</p>
            <p>Tax : {tax}</p>
            <p>Total : {total}</p>
            <div>
            <button className="cartButton" onClick={()=> console.log("Item has been checked out")}><FontAwesomeIcon icon={faShoppingCart} /> Check Out </button>
            </div>
        </div>
    );
};

export default Cart;    