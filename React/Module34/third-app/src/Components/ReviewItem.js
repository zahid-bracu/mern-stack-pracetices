import React from 'react';
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
        border:"1px solid gray"
    }

    const cartButton={
        background: "goldenrod",
        padding:"3px 50px",
        border: "1px solid rgb(218, 215, 215)",
        borderRadius: "3px"
          
    
    }

    return (
        
            <div style={styles}>
                <div>
                    <img src={img} />
                </div>
                <div>
                    <h4 style={{color:"blue"}}> <Link to={"/product/"+key}>{name}</Link> </h4> {/*Dynamically Data Key is passing through to router*/}
                    <p>By {seller}</p>
                    <p>Price {price}$</p>
                    <p>only {stock} left in stock - order soon</p>
                    {/*using the function that comes through props*/}
                    {/*passing current clicked product value to the passed through props function*/}
                    {/*Using font awesome Icon*/}
                    <button onClick={()=>props.remove(key)} className="btn btn-warning px-5">Remove</button>
                </div>
            </div>
        
        
    );
};

export default ReviewItem;