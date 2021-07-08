import React, {useEffect, useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import './style.css';
import Data from './Data';
import {addToDatabaseCart, getDatabaseCart, processOrder} from './databaseManager';
import CompletedPayment from './CompletedPayment';
import { useHistory } from "react-router-dom";
const CheckOut = () => {
    let history = useHistory();
    var [completed,setCompleted]=useState(false);
    var [form,setForm]=useState(false);
    var [flag,setFlag]=useState(false);
    const [address, setAddress]=useState({
        name:"",
        business:"",
        flat:"",
        house:"",
        road:"",
        city:"",
        phone:""
    })
    const [foods,setFoods]=useState([]);
    useEffect(() => {
        window.scrollTo(0, 0)
        var data=getDatabaseCart();
        var item_keys=Object.keys(data);
        const added_items=item_keys.map(key=>{
            const item=Data.find(id=> id.id==key);
            item.count=data[key];
            return item;
        })

        setFoods(added_items);
    }, [])

     

    var total=foods.reduce((sum,key)=>{
        sum=sum+key.count;
        return sum;
    },0);
    

    var totalPayment=foods.reduce((payment,key)=>{
        var temp=key.price*key.count;
        payment=payment+temp;
        return payment;
    },0)

    console.log("Total Pay : "+totalPayment);
    console.log(typeof totalPayment)
    totalPayment=parseFloat(totalPayment)
    console.log(typeof totalPayment)



    var vat=15;
    var tax=parseInt(totalPayment)/100;
    
    tax=parseFloat(tax*parseInt(vat));
    tax=tax.toFixed(2);
    console.log("Tax :"+tax)
    console.log(typeof tax)
    tax=parseFloat(tax);
    tax=tax.toFixed(2);
    tax=parseFloat(tax);
    console.log(typeof tax)

    var inTotal=totalPayment+tax+50;
     
    // inTotal=inTotal.toFixed(2)
    
    if(inTotal<=50){
        inTotal=0;
    }
    

    function changeFunc(e) {
       
        var infos={...address};
        infos[e.target.name]=e.target.value;
        setAddress(infos);
    }


    function submitFunc(e) {
        setForm(true);
        e.preventDefault();
         


        if(address.phone!="" && address.name!=""){
            document.getElementById('name-error').style.display="none"
            document.getElementById('phone-error').style.display="none"
             
            setFlag(true)
        }else{
            if(address.name==""){
                document.getElementById('name-error').style.display="block"
            }
            if(address.name!=""){
                document.getElementById('name-error').style.display="none"
            }
            if(address.phone==""){
                document.getElementById('phone-error').style.display="block"
            }

            if(address.phone!=""){
                document.getElementById('phone-error').style.display="none"
            }
        }

         
    }


    function paymentChange(e){
        console.log(e.target.value);
    }

    function payment(e){
        e.preventDefault();
        
        var cardNumber=document.getElementById('card-number').value
      
        if(cardNumber==15101122){
            setCompleted(true);
            document.getElementById('card-num-error').style.display="none"
            document.getElementById('proceed-error').style.display="none"
        }else{
            //card-error
            document.getElementById('card-num-error').style.display="block"
        }
    }

    function proceed(){
        if(!form){
            document.getElementById('form-error').style.display="block"
        }

        if(form){
            document.getElementById('form-error').style.display="none"
            document.getElementById('proceed-error').style.display="block"
        }
        
        if(completed){
            processOrder();
            history.push("/confirm");

        }
        
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-7 col-md-12 col-sm-12 col-12 mt-4">
                    {
                        flag && <>
                           {
                               !completed && <>
                               
                                <h6>Name : {address.name}</h6>
                                <h6>Business : {address.business}</h6>
                                <h6>Flat : {address.flat}</h6>
                                <h6>House : {address.house}</h6>
                                <h6>Road : {address.road}</h6>
                                <h6>City : {address.city}</h6>
                                <h6>Phone : {address.phone}</h6>
                                <Form.Group for="card-number">
                                    <p>As it is a demo project use 15101122 as your credit card number</p>
                                    <Form.Control onBlur={paymentChange} type="number" name="card-number" id="card-number" placeholder="Enter Your Credit Card Number" />
                                    <p className="text-danger my-2" id="card-num-error" style={{display:"none"}}>Your card number is wrong</p>
                                    <p className="text-danger" id="card-error" style={{display:"none"}}>Enter your name</p>
                                    <button onClick={payment} className="btn btn-danger mt-2">Pay</button>
                                    
                                </Form.Group>
                               </>
                           }{
                               completed && <CompletedPayment/>
                           }

                        </>
                    }

                    {
                        !flag && <><h3 className="">Set Delivery Details</h3>
                        <hr style={{maxWidth:"500px"}}/>
                        <Form onSubmit={submitFunc} className="form-check-out">
                    
                            <Form.Group id="name">
                                <Form.Control onBlur={changeFunc} type="text" name="name" id="name" placeholder="Name" required/>
                                <p className="text-danger" id="name-error" style={{display:"none"}}>Enter your name</p>
                            </Form.Group>
                            

                            <Form.Group id="business">
                                <Form.Control onBlur={changeFunc} type="text" id="business" name="business" placeholder="Business Name" required/>
                            </Form.Group>

                            <Form.Group id="flat">
                                <Form.Control onBlur={changeFunc} type="text" id="flat" name="flat" placeholder="Flat No." required/>
                            </Form.Group>


                            <Form.Group id="house">
                                <Form.Control onBlur={changeFunc} type="text" id="house" name="house" placeholder="House No." required/>
                            </Form.Group>


                            <Form.Group id="road">
                                <Form.Control onBlur={changeFunc} type="text" id="road" name="road" placeholder="Road No." required/>
                            </Form.Group>


                            <Form.Group id="city">
                                <Form.Control onBlur={changeFunc} type="text" id="city" name="city" placeholder="City" required/>
                            </Form.Group>

                            <Form.Group id="phone">
                                <Form.Control onBlur={changeFunc} type="number" id="phone" name="phone" placeholder="phone" required/>
                                <p className="text-danger" id="phone-error" style={{display:"none"}}>Enter your phone number</p>
                            </Form.Group>

                            
                            
                            <button  className="btn-check-out btn btn-danger" type="submit">
                                Submit
                            </button>
                        </Form></>
                    }

                </div>

                <div className="col-lg-5  col-md-12 col-sm-12 col-12 mt-4">
                    <div>
                        <h4> From <strong className="text-danger custom-font">LOS POLLOS HERMANOS</strong></h4>
                        <h5>Arriving in 10-20 min</h5>
                        <h6>House no. 105, Road no. 11-B</h6>
                        <h6>Aqua</h6>
                        <h6>Mymensingh</h6>
                    </div>
                    <div style={{maxWidth:"250px"}} className="mt-5">
                        <p className="d-flex justify-content-between"><span>Sub Total . {total} Item</span> <span>${totalPayment}</span></p>
                        <p className="d-flex justify-content-between"><span>Tax</span> <span>${tax}</span></p>
                        <p className="d-flex justify-content-between"><span>Delivery Fee</span> <span>$50.00</span></p>
                        <hr/>
                        <h5 className="d-flex justify-content-between"><span>Total</span> <span>${inTotal}</span></h5>
                        <button onClick={proceed} className="btn btn-success mt-4">Confirm Order</button>
                        
                        <p className="text-danger mt-2" id="form-error" style={{display:"none"}}>Fill up the form first</p>

                        <p className="text-danger mt-2" id="proceed-error" style={{display:"none"}}>Complete Your Payment</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;