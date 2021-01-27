import React, {useState,useContext,useEffect} from 'react';
import Cart from './Cart';
import { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart, processOrder } from './databaseManager';
import fakeData from './fakeData';
import ProductOrdered from './ProductOrdered';
import {CartContext} from '../App';

const OrderReview = () => {
    const [data,setData]=useState([]);
    const [cart,setCart]=useContext(CartContext);

    useEffect(() => {
        var savedCart=getDatabaseCart();
        const productKeys=Object.keys(savedCart);

        fetch('http://localhost:3010/productsByKeys',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(productKeys),
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
        })

        const cartProducts=productKeys.map(key=>{
            const product=fakeData.find(pd=> pd.key===key);
            product.quantiy=savedCart[key];
            return product;
        })

        console.log(cartProducts);
        setData(cartProducts);
      },[]);


      function removeProduct(id){
          console.log(id);

          var allProduct=data.filter(pd=> id!==pd.key);
          removeFromDatabaseCart(id);
          setData(allProduct);
          setCart(allProduct)
      }

      console.log(data)
    return (
        <>
        <div className="container ">
            <div className="row">
                <div className="col-lg-9 col-md-12 col-sm-12 col-12">
                {
                    data.map(pd=> <ProductOrdered removeProduct={removeProduct} key={pd.key} datas={pd}></ProductOrdered>)
                }
                </div>

                <div className="col-lg-3 col-md-12 col-sm-12 col-12 order-lg-last order-md-first order-sm-first order-first">
                    <Cart/>
                </div>
            </div>
            
        </div>
        </>
    );
};

export default OrderReview;