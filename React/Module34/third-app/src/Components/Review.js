import React, { useEffect, useState } from 'react';
import  {getDatabaseCart,removeFromDatabaseCart,processOrder} from '../utilities/databaseManager';
import fakeData from '../fakeData';
import ReviewItem from './ReviewItem';
import FinalCart from './Cart/FinalCart';
import { useHistory } from 'react-router-dom';
const Review = () => {
    var imgURL="https://i.ibb.co/xCjPVxK/empty-cart-800x600-dribbble.webp";
    var gifURL="https://i.ibb.co/zRqsRNs/bye-bye-pikachu-icegif.gif";
    const [flag,setFlag]=useState(false);

    const history=useHistory();

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
         history.push('/shipment')
        //  setCart([]);
        //  processOrder();
        //  console.log(checked);
        //  var checkedOutCart=getDatabaseCart();
        //  console.log(checkedOutCart);
        //  setFlag(true);
     }

     if(flag==true && cart.length==0){
         return(
            <div className="mt-5">
                <h3 className="text-center">Checked Out</h3>
                <img className="d-block mx-auto" src={gifURL}/>
            </div>
         )
     }else if(flag==false && cart.length==0){
        return(
            <div   className="text-center">
                
                <img className="img-fluid" src={imgURL}/>
            </div>
        )
        }else{
            return (
                <div className="row container-fluid">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                    {
                        cart.map(item=> <ReviewItem remove={remove} key={item.key}  cart={item}></ReviewItem>)
                    }
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 order-sm-first order-lg-last order-md-last order-first">
                        <FinalCart checked={checked} cart={cart}></FinalCart>
                    </div>
                </div>
        
            );
        }
    
};

export default Review;

