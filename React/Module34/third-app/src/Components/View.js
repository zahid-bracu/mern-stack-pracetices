import React from 'react';
import { Badge } from 'react-bootstrap';
import './view.css';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

const View = (props) => {
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
    }=props.product;

     
    return (
        <>
            <img src={img} style={{width:"350px"}} className="mx-auto d-block"/>
            <div className="details">
                <h5 className="text-color" style={{maxWidth:"600px"}}>{name}</h5>
                <div className="row justify-content-around align-items-center">
                    <div className="col-6">
                        <h5 >Product: <span className="text-color">{category}</span> </h5>
                        <h5 >Seller: <span className="text-color">{seller}</span>   </h5>
                        <h5 >Shipping Cost: <span className="text-color">{shipping}$</span>   </h5>
                        <h5 >Products in Stock: <span className="text-color">{stock} items</span>  </h5>
                        
                        
                    </div>
                    <div className="col-6">
                        <h3 >Price : <Badge pill variant="danger">{price}$</Badge></h3>
                    </div>
                    <h6  className="m-2 col-12 text-center" style={{textDecoration:"none"}}><a href={url}>Click Here to See Details</a></h6>
                    <button className="btn btn-info px-5"><Link style={{textDecoration:"inherit",color:"white"}}  to="/shop">Back</Link></button>
                </div>
            </div>

        </>
    );
};

export default View;