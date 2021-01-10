import React, { useState,useContext } from 'react';
import { Form } from 'react-bootstrap';
import {
    Link,
    useHistory
  } from "react-router-dom";
import {UserContext} from '../App';
import {CartProductsContext} from '../App';
import { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart, processOrder } from './databaseManager';
import fakeData from './fakeData';

const ShippingAddress = () => {

    const [user,setUser]=useContext(UserContext);

    const [cartList,setCartList]=useContext(CartProductsContext);

    console.log(user);


    let history = useHistory();

    function saveData(event){
        event.preventDefault();

        console.log(user);
        var name=document.getElementById('name').value;
        var number=document.getElementById('number').value;
        var mail=document.getElementById('email').value;
        var address=document.getElementById('address').value;

        console.log(name+" "+number+" "+mail+" "+address+" "+user);


        var savedCart=getDatabaseCart();
        const productKeys=Object.keys(savedCart);

        
        const cartProducts=productKeys.map(key=>{
            const product=fakeData.find(pd=> pd.key===key);
            product.quantiy=savedCart[key];
            return product;
        })


        
        cartProducts.name=name;
        cartProducts.number=number;
        cartProducts.mail=mail;
        cartProducts.address=address;
        cartProducts.user=user;
        cartProducts.flag=true;
         
        setCartList(cartProducts); 
        history.push("/paymentpath");
         
        
        
    }


    console.log(cartList);
    return (
        <div className="container">
            <h5 className="text-center mt-5">Add new contact</h5>
            <Form onSubmit={saveData} style={{maxWidth:"400px"}} className="d-block mx-auto">
                <Form.Group controlId="name">
                    <Form.Label>Contact Name : </Form.Label>
                    <Form.Control type="name" id="name" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group controlId="number">
                    <Form.Label>Contact Number: </Form.Label>
                    <Form.Control type="number" id="number" placeholder="Enter Number" />
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Contact Email: </Form.Label>
                    <Form.Control type="email" id="email" placeholder="Enter Email" />
                </Form.Group>
             
            
                <Form.Group controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control as="textarea" id="address" rows={4} />
                </Form.Group>
                {/* <Link to="/paymentpath"> */}
                <button className="btn btn-primary">Continue</button>
                {/* </Link> */}
                
            </Form>
        </div>
    );
};

export default ShippingAddress;