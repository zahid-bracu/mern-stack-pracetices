import React,{useState,useContext,useEffect} from 'react';
import {CartContext} from '../App';
 
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
 



const Shop = () => {
    const [originalData,SetOriginalData]=useState([]);
    const [products, setProducts] = useState([]);
    const [cart,setCart]=useContext(CartContext);
    const [filter,setFilter]=useState('all');

    useEffect(() => {
        // show data
        fetch('http://localhost:3010/info')
        .then(response => response.json()) //all datas are got
        .then(json => {
             
            SetOriginalData(json);
            var temp=json.slice(0,10);
            setProducts(temp)
        })

         

        
       },0);


    //    useEffect(() => {
    //     if(filter=="all"){
    //         setProducts(originalData)
    //     }else{
    //         const result = originalData.filter(key => key.category==filter);
             
    //         setProducts(result)
    //     }
         
    //    }, [filter])

     
    function addProduct(prod){
        
        // const newCart=[...cart,prod];
        // setCart(newCart);
        // const sameProduct=newCart.filter(pd=> pd.key===prod.key);
        // const count=sameProduct.length;
        addToDatabaseCart(prod.key,1);
    }


    function filterProduct(){
        var values=document.getElementById("selectCategory").value;
        console.log(values);


        var values = values.toLowerCase();
        console.log(values);
        setFilter(values);

        if(values==="all"){
            var temp=originalData.slice(0,10)
            setProducts(temp);
        }else{
            var result = originalData.filter(key => key.category==values);
            result=result.slice(0,10);
            setProducts(result)
        }
        

    }

     
    console.log(originalData.length);
    console.log(products.length);
    
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