import React, { useState } from 'react';
// import json data file
import fakeData from '../../fakeData';
import './shop.css';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';
 
 

const Shop = () => {
    // Values are saved that are clicked
    const [cart,setCart]=useState([]);

    // Slicing the JSON data values & keep sliced data values in a variable
    const firstTen = fakeData.slice(0, 15);

    // now passing the sliced data value into a products variable using set state
    const [products, setProducts] = useState(firstTen);


    // Declaring a function
    function addCart(product){
        // addint the added item to a array-object
        var newCart=[...cart,product];
        // now set all clicked value together
        setCart(newCart);
        const sameProduct=newCart.filter(pd=> pd.key===product.key);
        const count=sameProduct.length;
        addToDatabaseCart(product.key,count);
         
       
    }
    return (
        <div className="shopContainer">
            <div className="productContainer">
                <div>
                    {/*Now Passing the sliced json data & function through the attribute as props of other component*/}
                    {products.map(pd => <Products key={pd.key} addCart={addCart} products={pd}></Products>)}
                </div>
            </div>
            <div className="cartContainer">
            {/*Passing cart value to other component*/}
                <Cart cart={cart}></Cart>
                
            </div>
        </div>

    );
};

export default Shop;