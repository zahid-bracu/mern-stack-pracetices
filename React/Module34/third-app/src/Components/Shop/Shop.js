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
import Category from '../Category';

 
 

const Shop = () => {
    // Values are saved that are clicked
    // cart is an array as useState([])  declared which takes values as array
    const [cart,setCart]=useState([]);

    
    

    //there are 100++ data in the json data center. we use slice method to take first ten data
    // Slicing the JSON data values & keep sliced data values in a variable
    const firstTen = fakeData.slice(0, 12);

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

    function camelize(str) {
        console.log("Working")
        var firstChar=str[0];
        console.log(firstChar);

        firstChar=firstChar.toUpperCase();
        console.log(firstChar);

        str=str.substring(1);
        console.log(str);

        str=firstChar+str;
        console.log(str);

        return str;
      }

    function categories(value){
        if(value=="All"){
            const firstTen = fakeData.slice(0, 12);
            setProducts(firstTen);
            document.getElementById("tag").innerText="All Products";
        }else{
            console.log("Button Clicked");
            var cartValues=fakeData.filter(pd=> pd.category==value);
            setProducts(cartValues);
            console.log(cartValues);
            document.getElementById("tag").innerText=camelize(value);
        }
        
    }

    console.log(cart);
    
    return ( 
            <div>
            <Category categories={categories}></Category>
            <h4 id="tag"  className="text-primary text-center mb-5">All Products</h4>
            <div className="row justify-content-center">
                    {/*Now Passing the sliced json data & function through the attribute as props of other component*/}
                    {products.map(pd => <Products key={pd.key} addCart={addCart} products={pd}></Products>)}
            </div>
            </div>             
    );
};

export default Shop;