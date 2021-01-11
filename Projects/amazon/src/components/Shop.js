import React,{useState,useContext,useEffect} from 'react';
import {CartContext} from '../App';
import fakeData from './fakeData';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
  
import Product from './Product'
import { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart, processOrder } from './databaseManager';
import Cart from './Cart';



const Shop = () => {
     
    const [products, setProducts] = useState(fakeData);
    const [cart,setCart]=useContext(CartContext);


    useEffect(() => {
        // show data
        fetch('http://localhost:3010/info')
        .then(response => response.json()) //all datas are got
        .then(json => {
             console.log(json);
             setProducts(products);
        })
       });

    console.log(cart);
    function addProduct(prod){
        
        const newCart=[...cart,prod];
        setCart(newCart);
        const sameProduct=newCart.filter(pd=> pd.key===prod.key);
        const count=sameProduct.length;
        addToDatabaseCart(prod.key,count);
    }


    function filterProduct(){
        var values=document.getElementById("selectCategory").value;
        console.log(values);


        var values = values.toLowerCase();

        if(values==="all"){
            setProducts(fakeData)
        }else{
            const result = fakeData.filter(key => key.category==values);
            setProducts(result)
        }
        

    }

    return (
         <div className="container">
             <div >
                <div class="form-group d-block mx-auto" style={{maxWidth:"300px"}}>
                    <label for="selectCategory">Filter Products</label>
                    <select class="form-control" onChange={()=>filterProduct()} id="selectCategory">
                        <option>All</option>
                        <option>Android</option>
                        <option>Camera</option>
                        <option>Laptop</option>
                    </select>
                </div>
             </div>
             

             <div className="row justify-content-center">
                {
                    products.map(pd => <Product data={pd} key={pd.key} addProduct={addProduct}  products={pd}></Product>)
                }
            </div>
         </div>
    );
};

export default Shop;