import React, {useState,useContext,useEffect} from 'react';
import { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart, processOrder } from './databaseManager';
import fakeData from './fakeData';
import ProductOrdered from './ProductOrdered';


const OrderReview = () => {
    const [data,setData]=useState([]);


    useEffect(() => {
        var savedCart=getDatabaseCart();
        const productKeys=Object.keys(savedCart);

        
        const cartProducts=productKeys.map(key=>{
            const product=fakeData.find(pd=> pd.key===key);
            product.quantiy=savedCart[key];
            return product;
        })

        console.log(cartProducts);
        setData(cartProducts);
      },[]);
    return (
        <div className="container row">
            {
                data.map(pd=> <ProductOrdered key={pd.key} datas={pd}></ProductOrdered>)
            }
        </div>
    );
};

export default OrderReview;