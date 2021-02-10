import React from 'react';
import { useHistory } from "react-router-dom";
const OrderConfirmed = () => {
    let history = useHistory();
    

    return (
        <div className="container">
            <h1 className="text-center my-5">Your Order Has Been Confirmed</h1>
            <button onClick={()=>{
                history.push('/')
            }} className="btn btn-danger btn-lg my-5 d-block mx-auto">Back to home</button>
        </div>
    );
};

export default OrderConfirmed; 