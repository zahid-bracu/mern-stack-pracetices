import React, { useEffect, useState } from 'react';
import  {getDatabaseCart} from '../utilities/databaseManager';
import fakeData from '../fakeData';
import ReviewItem from './ReviewItem';
import Cart from './Cart/Cart';
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
        <div className="row">
            <div className="col-8">
            {
                cart.map(item=> <ReviewItem key={item.key} cart={item}></ReviewItem>)
            }
            </div>
            <div className="col-4">
                <Cart cart={cart}></Cart>
            </div>
        </div>

    );
};

export default Review;