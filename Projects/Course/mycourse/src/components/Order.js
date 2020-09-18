import React, { useEffect, useState } from 'react';
import { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart } from '../utilities/databaseManager';
import Datas from "./Datas";
import OrderDetails from './OrderDetails';


const Order = () => {
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        const savedCart=getDatabaseCart();
        const productkeys=Object.keys(savedCart);
        const values=Object.values(savedCart);
        
        var temp=[];
        for(var i=0;i<values.length;i++){
            temp.push(values[i]);
        }

        
        const finalArr = Datas.filter(pd =>
            productkeys.some(exclude => exclude == pd.key)
        );

        for(var j=0;j<finalArr.length;j++){
            finalArr[j].count=temp[j];
        }
        setCart(finalArr);
    },[])
    console.log(cart);

    function remove(key){
        console.log(key);
        var newCart=cart.filter(pd=> pd.key!=key);
        removeFromDatabaseCart(key);
        setCart(newCart);
    }

    
    return (
        <div className="row">
            {
                cart.map(pd=> <OrderDetails remove={remove} cart={pd}></OrderDetails>)
            }
        </div>
    );
};

export default Order;