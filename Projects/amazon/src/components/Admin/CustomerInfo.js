import React from 'react'
import './style.css'
export default function CustomerInfo(props) {
    console.log(props.customer)
    const orderId=props.orderId;
    return (
        <div className="card-box">
            <p> <strong>Name :</strong> {props.customer.name}</p>
            
            <p> <strong>Flat No. :</strong>  {props.customer.flat}</p>
            <p><strong>House No. :</strong> {props.customer.house}</p>
            <p> <strong>Road No. :</strong>  {props.customer.road}</p>
            <p> <strong>City No. :</strong> {props.customer.city}</p>
            <hr/>
            <p> <strong>Mail :</strong> {props.customer.mail}</p>
            <p> <strong>Phone :</strong>  +880{props.customer.phone}</p>
            <h6 className="text-center"><strong className="text-danger">Order ID :</strong> </h6>
            <p className="text-center">{orderId}</p>
        </div>
    )
}
