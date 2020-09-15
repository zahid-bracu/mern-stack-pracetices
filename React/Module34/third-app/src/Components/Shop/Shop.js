import React, { useEffect, useState } from 'react';
// import json data file
import fakeData from '../../fakeData';
import './shop.css';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import font awesome library font
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

 
 

const Shop = () => {
    // Values are saved that are clicked
    // cart is an array as useState([])  declared which takes values as array
    const [cart,setCart]=useState([]);

    
    

    //there are 100++ data in the json data center. we use slice method to take first ten data
    // Slicing the JSON data values & keep sliced data values in a variable
    const firstTen = fakeData.slice(0, 10);

    // now passing the sliced data value into a products variable using set state
    const [products, setProducts] = useState(firstTen);

    

    // Declaring a function
    function addCart(product){
        // addint the added item to a array-object
        var newCart=[...cart,product];
        // now set all clicked value together
        
        // Same product count
        const sameProduct=newCart.filter(pd=> pd.key===product.key);
        console.log(sameProduct);
        //confusing : how length is work.. lets memorise with out understanding
        const count=sameProduct.length;
        addToDatabaseCart(product.key,count);
        product.count=count;
        console.log(product);
        var tempCart=[...cart,product]
        setCart(tempCart);
    }

    
    useEffect(()=>{
        const savedCart=getDatabaseCart();
        const productkeys=Object.keys(savedCart);
        console.log(productkeys);

        const cartProducts=productkeys.map(key =>{
            const product=fakeData.find(pd=>pd.key===key);
            product.count=savedCart[key];
            return product;
        })
        setCart(cartProducts);
        
    },[])
    console.log(cart);
    
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
                <Cart cart={cart}>
                    <Link to="/review">
                        <button className="cartButton" onClick={()=> console.log("Item has been checked out")}>
                            <FontAwesomeIcon icon={faShoppingCart} />
                            Review Cart
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;