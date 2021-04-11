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
        async function loadData(){
            const response= await fetch('http://localhost:3010/info');
            const data = await response.json(); //converting to json data
            return data;
        }


        loadData().then(
            json=>{
                 
                SetOriginalData(json);
                var temp=json.slice(0,6);
                setProducts(temp)


                var savedProducts=getDatabaseCart();
                const dataKeys=Object.keys(savedProducts);
                


                const previousData=dataKeys.map(iterator=>{
                    const item=json.find(id=> id.key===iterator);
                    item.count=savedProducts[iterator];
                    return item;
                })

                
                setCart(previousData);

            }
        )
        
        

        
        
       },0);


    

     
    function addProduct(item){
        const itemToBeAdded=item.key;
        const sameProduct=cart.find(pd=> pd.key===itemToBeAdded);
        let count=1;
        let newItem;
        if(sameProduct){
            count=sameProduct.count+1;
            sameProduct.count=count;
            const others=cart.filter(it=>it.key !== itemToBeAdded);
            newItem=[...others, sameProduct];
        }else{
            item.count=1;
            newItem=[...cart,item];
        }

        setCart(newItem);
         
        addToDatabaseCart(item.key,count);
    }


    function filterProduct(){
        var values=document.getElementById("selectCategory").value;
        setFilter(values);

        var values = values.toLowerCase();
         
        

        if(values==="all"){
            var temp=originalData.slice(0,10)
            setProducts(temp);
        }else{
            var result = originalData.filter(key => key.category==values);
            result=result.slice(0,10);
            setProducts(result)
        }
        

    }

     
      
    
    return (
         <div className="container">
             <div >
                <div class="form-group d-block mx-auto mt-2" style={{maxWidth:"300px"}}>
                    <label className="font-weight-bold" for="selectCategory">Filter Products</label>
                    <select class="form-control" onChange={()=>filterProduct()} id="selectCategory">
                        <option className="font-weight-bold">All</option>
                        <option className="font-weight-bold">Android</option>
                        <option className="font-weight-bold">Camera</option>
                        <option className="font-weight-bold">Laptop</option>
                    </select>
                </div>
             </div>
             
             
             <div className="row justify-content-center">
                {
                    products.length===0 && <h3>Loading....</h3>
                }

                {
                    
                     products.map(pd => <Product data={pd} key={pd.key} addProduct={addProduct}  products={pd}></Product>)
                }
            </div>
         </div>
    );

    
};

export default Shop;