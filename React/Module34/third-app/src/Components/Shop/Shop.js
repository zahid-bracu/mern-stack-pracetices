import React, { useState } from 'react';
// import json data file
import fakeData from '../../fakeData';
import './shop.css';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [cart,setCart]=useState([]);

    // Slicing the JSON data values & keep sliced data values in a variable
    const firstTen = fakeData.slice(0, 15);

    // now passing the sliced data value into a products variable using set state
    const [products, setProducts] = useState(firstTen);


    // Declaring a function
    function addCart(product){
        var newCart=[...cart,product];
        console.log(newCart);
        setCart(newCart);
       
    }
    return (
        <div className="shopContainer">
            <div className="productContainer">
                <div>
                    {/*Now Passing the sliced json data & function through the attribute as props of other component*/}
                    {products.map(pd => <Products addCart={addCart} products={pd}></Products>)}
                </div>
            </div>
            <div className="cartContainer">
                <Cart cart={cart}></Cart>
                
            </div>
        </div>

    );
};

export default Shop;