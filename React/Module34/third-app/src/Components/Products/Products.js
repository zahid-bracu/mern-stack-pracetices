import React from 'react';
// import css file
import './products.css';
// import font awesome library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import font awesome library font
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';


const Products = (props) => {
    // using destructure from passed object through props
    const { img, name, seller, price, stock,key } = props.products;
    return (
        <div className="productCard">
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
                <button onClick={()=> props.addCart(props.products)} className="cartButton"><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div>
        </div>
    );
};

export default Products;