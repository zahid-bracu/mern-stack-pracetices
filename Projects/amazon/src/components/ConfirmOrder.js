import React from 'react';
import checkmark from './images/checkmark.gif'
import giphy from './images/giphy.gif'
const ConfirmOrder = () => {
    return (
        <div>
            <h1 className="text-center text-danger mt-5">Thank You !!</h1>
            <h2 className="text-center text-success mt-2">Your order has been confirmed</h2>
            <img src={giphy} style={{maxWidth:"500px"}} className="d-block mx-auto mt-2" />
        </div>
    );
};

export default ConfirmOrder;