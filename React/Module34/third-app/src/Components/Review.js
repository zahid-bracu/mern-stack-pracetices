import React, { useEffect, useState } from 'react';
import  {getDatabaseCart} from '../utilities/databaseManager';
import fakeData from '../fakeData';
const Review = () => {
    const [cart,setCart]=useState([]);
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
        <div>
            Total Item: {cart.length};
        </div>
    );
};

export default Review;