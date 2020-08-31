import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './shop.css';
import Products from '../Products/Products';

const Shop = () => {
    const firstTen = fakeData.slice(0, 15);
    const [products, setProducts] = useState(firstTen);
    console.log(products);

    console.log(firstTen);
    return (
        <div className="shopContainer">
            <div className="productContainer">
                <div>
                    {products.map(pd => <Products products={pd}></Products>)}
                </div>
            </div>
            <div className="cartContainer">
                <p>This is my cart</p>
            </div>
        </div>

    );
};

export default Shop;