import React,{useState} from 'react';
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
const Shop = () => {
    console.log(fakeData)
    const [products, setProducts] = useState(fakeData);

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
                    products.map(pd => <Product data={pd}  products={pd}></Product>)
                }
            </div>
         </div>
    );
};

export default Shop;