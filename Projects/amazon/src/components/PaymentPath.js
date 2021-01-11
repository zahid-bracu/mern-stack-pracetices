import React, { useState,useContext,useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { useForm } from "react-hook-form";
import './style.css';
import {
    Link,
    useHistory
  } from "react-router-dom";
import {UserContext} from '../App';
import {CartProductsContext} from '../App';


const PaymentPath = () => {

    const [user,setUser]=useContext(UserContext);

    const [cartList,setCartList]=useContext(CartProductsContext);

    let history = useHistory();

    function handleClick(e) {

        console.log(cartList);
        
        var ele = document.getElementsByName('payment'); 
                for(var i = 0; i < ele.length; i++) { 
                    if(ele[i].checked) 
                    {
                      console.log(ele[i].value);
                      cartList.paymentpath=ele[i].value;
                      console.log(cartList)

                       

                       
                      fetch('http://localhost:3005/addCart',{
                            method:'POST',
                            headers:{'Content-Type': 'application/json'},
                            body:JSON.stringify(cartList)
                        }).then(res=>res.json())
                        .then(data=>{
                            console.log(data);
                        })
                    }else{
                       
                    }
                }
        e.preventDefault();
        
        


      }
    return (
        <div>
            <div className="container mt-5">
          
            <div className="radio-box">
            <form onSubmit={handleClick}>
            <h5 className="my-3">Please select your Payment Method : </h5>
            <div className="payment-box">
                <input type="radio" id="bkash" name="payment" value="bkash"/>
                <label for="bkash" className="ml-2 font-weight-bold">bKash</label><br/>
                <p>bKash Online Payment</p>
            </div>


            <div className="payment-box">
                <input type="radio" id="rocket" name="payment" value="rocket"/>
                <label for="rocket" className="ml-2 font-weight-bold">Rocket</label><br/>
                <p>Rocket Online Payment</p>
            </div>


            <div className="payment-box">
                <input type="radio" id="cash" name="payment" value="cash"/>
                <label for="cash" className="ml-2 font-weight-bold">Cash</label><br/>
                <p>Cash on Delivery Payment System</p>
            </div>


            <div className="payment-box">
                <input type="radio" id="visa" name="payment" value="visa"/>
                <label for="visa" className="ml-2 font-weight-bold">VISA</label><br/>
                <p>Visa Card Payment System</p>
            </div>
            <input type="submit" value="submit"   className="btn btn-warning"/>
            </form>
            </div>
    
            </div>
        </div>
    );
};

export default PaymentPath;