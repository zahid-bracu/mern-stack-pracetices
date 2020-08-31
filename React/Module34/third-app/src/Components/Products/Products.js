import React from 'react';
import './products.css';

const Products = (props) => {
    var { img, name, seller, price, stock } = props.products;
    console.log(props)
    return (
        <div className="productCard">
            <div>
                <img src={img} />
            </div>ss
            <div>
                <h4>{name}</h4>
                <p>By {seller}</p>
                <p>Price {price}$</p>
                <p>only {stock} left in stock - order soon</p>
            </div>
        </div>
    );
};

export default Products;