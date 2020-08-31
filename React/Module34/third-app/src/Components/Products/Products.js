import React from 'react';
import './products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Products = (props) => {
    const { img, name, seller, price, stock } = props.products;
    return (
        <div className="productCard">
            <div>
                <img src={img} />
            </div>
            <div>
                <h4 style={{color:"blue"}}>{name}</h4>
                <p>By {seller}</p>
                <p>Price {price}$</p>
                <p>only {stock} left in stock - order soon</p>
                <button onClick={()=> props.addCart(props.products)} className="cartButton"><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div>
        </div>
    );
};

export default Products;