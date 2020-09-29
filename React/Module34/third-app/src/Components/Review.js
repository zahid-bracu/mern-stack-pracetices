import React, { useEffect, useState } from 'react';
import  {getDatabaseCart,removeFromDatabaseCart,processOrder} from '../utilities/databaseManager';
import fakeData from '../fakeData';
import ReviewItem from './ReviewItem';
import FinalCart from './Cart/FinalCart';
const Review = () => {
    var imgURL="https://i.ibb.co/xCjPVxK/empty-cart-800x600-dribbble.webp";
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


     function remove(value){
         console.log("Button is working");
         const items=cart.filter(pd=> pd.key!=value);
         removeFromDatabaseCart(value)
         setCart(items)
     }
     console.log(cart);


     function checked(){
         setCart([]);
         processOrder();
         console.log(checked);
         var checkedOutCart=getDatabaseCart();
         console.log(checkedOutCart);
     }
     if(cart.length==0){
        return(
            <div   className="text-center">
                
                <img className="img-fluid" src={imgURL}/>
            </div>
        )
    }else{
        return (
            <div className="row">
                <div className="col-8">
                {
                    cart.map(item=> <ReviewItem remove={remove} key={item.key}  cart={item}></ReviewItem>)
                }
                </div>
                <div className="col-4">
                    <FinalCart checked={checked} cart={cart}></FinalCart>
                </div>
            </div>
    
        );
    }
    
};

export default Review;

