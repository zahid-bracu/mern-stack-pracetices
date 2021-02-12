import React,{useState,useEffect,useContext} from 'react';
import { Button, Modal } from 'react-bootstrap';
import { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart, processOrder } from './databaseManager';
import {CartContext} from '../App';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
const Cart = (props) => {
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
        const cartProducts=productKeys.map(key=>{
            const product=data.find(pd=> pd.key===key);
            product.count=savedCart[key];
            return product;
        })

         
        setCart(cartProducts);
    })

    
  },[]);


    
    var totalMoney=cart.reduce((total, key)=>{
      
      var value = parseInt(key.price) * parseInt(key.count);  
     
      total=total+parseInt(value); 
      
      return total;   
    },0);

   


    var tax=parseInt(totalMoney)/100;
    tax=tax*15;
    tax=tax.toFixed(2);


    var intotal=parseInt(tax)+parseInt(totalMoney)+20;
    
    
    if(intotal<=20){
      intotal=0;
    }


    let history = useHistory();
    function proceed(){
      history.push('/form')
    }

    console.log(cart.length)

    return (
     
          <div className="container">
               <div style={{maxWidth:"500px"}} className="d-block mx-auto mt-3">
                 

                
                   <h3>From <strong className="text-warning">Amazon.com, Inc</strong></h3>
                   <h4>Seattle, Washington, U.S.</h4>
                   <h5>Arriving in 20-30 days </h5>
                   <hr/>

                   <div>
                     
                     <p className="d-flex justify-content-between">
                       <span>Sub Total . 0 Item</span>
                       <span>${totalMoney}</span>
                     </p>

                     <p className="d-flex justify-content-between">
                       <span>Tax</span>
                       <span>{tax}</span>
                     </p>

                     <p className="d-flex justify-content-between">
                       <span>Delivery Fee</span>
                       <span>$20.00</span>
                     </p>

                     <hr/>


                     <h5 className="d-flex justify-content-between">
                       <span>Total</span>
                       <span>${intotal}</span>
                     </h5>

                     {
                       cart.length>0 && <button onClick={proceed} className="btn btn-warning font-weight-bold mt-3">Procced</button>
                     }

                     {
                       cart.length==0 && <h4 className="text-danger text-center">Cart is Empty</h4>
                     }
                     
                     
                   

                 </div>
               </div>
          </div>

    );
};

export default Cart;