import React, { useState,useContext, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import {
    Link,
    useHistory
  } from "react-router-dom";
import {UserContext} from '../App';
import './style.css'


const FormPage = () => {
    const [user,setUser]=useContext(UserContext);
    document.title="Add New Contact";

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    var userMail=user.mail;
    console.log(userMail);
    const [data,setData]=useState({
        name:"",
        number:"",
        mail:"",
        address:""
    })
    let history = useHistory();
    function saveData(event){
        console.log("Ok");
        event.preventDefault();
        var name=document.getElementById('name').value;
        var number=document.getElementById('number').value;
        var mail=document.getElementById('email').value;
        var address=document.getElementById('address').value;

        //console.log(name+" : "+number+" : "+mail+" : "+address);
        var information={
            "name":name,
            "number":number,
            "mail":mail,
            "address":address,
            "userMail":userMail
        }

        setData(information);
        console.log(data)
        fetch('http://localhost:3070/addInfo',{
               method:'POST',
               headers:{'Content-Type': 'application/json'},
               body:JSON.stringify(information)
           }).then(res=>res.json())
           .then(data=>{
               if(data){
                history.push("/saved");
               }
           })
    }

    console.log(data)

    return (
        
            <div className="container ">
            <h5 className="text-center mt-5">Add new contact</h5>
            <Form onSubmit={saveData} style={{maxWidth:"400px"}} className="d-block mx-auto">
                <Form.Group controlId="name">
               
                    <Form.Control type="name" id="name" placeholder="Enter Name" required/>
                </Form.Group>

                <Form.Group controlId="number">
           
                    <Form.Control type="number" id="number" placeholder="Enter Number" required/>
                </Form.Group>

                <Form.Group controlId="email">
            
                    <Form.Control type="email" id="email" placeholder="Enter Email" required/>
                </Form.Group>
             
            
                <Form.Group controlId="address">
          
                    <Form.Control as="textarea" placeholder="Enter Address" id="address" rows={4} required/>
                </Form.Group>
                <button className="btn btn-custom-two">Save</button>
            </Form>

            <div className="d-block mx-auto" style={{background:"none", maxWidth:"152.9px" }}>
                <div className="d-inline-block text-center">
                    
                    <Link style={{textDecoration:"inherit"}} to="/contact">
                        <button className="btn btn-custom d-block my-2 mx-auto">Show All Contacts</button>
                    </Link>
                    
                    
                    <Link style={{textDecoration:"inherit"}} to="/home">
                        <button className="btn btn-dark text-white my-2 px-4 d-block mx-auto">Back to Home</button>
                    </Link>
                </div>
            </div>
        </div>
     
        
        
    );
};

export default FormPage;