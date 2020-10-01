import React from 'react';
import { Button,ButtonGroup, Badge   } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

const ReviewItem = (props) => {
    const { img, name, seller, price, stock,key } = props.cart;
    const styles={
        display:"flex",
        padding:"20px",
        margin:"20px",
    }

    const cartButton={
        background: "goldenrod",
        padding:"3px 50px",
        border: "1px solid rgb(218, 215, 215)",
        borderRadius: "3px"
          
    
    }

    return (
        
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-12 col-12">
                    <img src={img} />
                </div>
                <div className="col-lg-9 offset-lg-0 col-md-6 offset-md-1 col-sm-12 col-12">
                    <h4 style={{color:"blue"}}> <Link to={"/product/"+key}>{name}</Link> </h4> {/*Dynamically Data Key is passing through to router*/}
                    
                    <h5>Price: <Badge variant="danger" pill>{price}$</Badge></h5>
                    
                    {/*using the function that comes through props*/}
                    {/*passing current clicked product value to the passed through props function*/}
                    {/*Using font awesome Icon*/}
                    <button onClick={()=>props.remove(key)} className="btn btn-warning px-5">Remove</button>
                </div>
            </div>
        
        
    );
};

export default ReviewItem;