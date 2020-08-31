import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './shop.css';
import Products from '../Products/Products';

const Shop = () => {
    const [count,setCount]=useState(0);
    const firstTen = fakeData.slice(0, 15);
    const [products, setProducts] = useState(firstTen);
    console.log(products);

    function addCart(product){
        console.log(product.name)
        setCount(count+1);
       
    }

    console.log(firstTen);
    return (
        <div className="shopContainer">
            <div className="productContainer">
                <div>
                    {products.map(pd => <Products addCart={addCart} products={pd}></Products>)}
                </div>
            </div>
            <div className="cartContainer">
                <p>Total Item: {count}</p>
                
            </div>
        </div>

    );
};

export default Shop;