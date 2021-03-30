import React from 'react';

export default function Display(props) {
    console.log(props.pd);
    const {legalName, currency}=props.pd;
    const addToCart=props.addToCart;
    return (
        <div>
            <h1>{legalName} - {currency}</h1>
            <button onClick={()=> addToCart(legalName)}>Add</button>
        </div>
    )
}
