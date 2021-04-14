
// importing
import React, {useState,useContext} from 'react';
import { Form } from 'react-bootstrap';
import {
    Link,
    useHistory
  } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebaseConfig';
firebase.initializeApp(firebaseConfig);



const Signup = () => {
    const [data,setData]=useState({
        name:"",
        number:"",
        mail:"",
        password:""
    })

    let history = useHistory();
    function saveData(event){
        console.log("Ok");
        event.preventDefault();
        var name=document.getElementById('name').value;
        var number=document.getElementById('number').value;
        var mail=document.getElementById('email').value;
        var password=document.getElementById('password').value;
        var confirmPassword=document.getElementById('confirmPassword').value;

        if(password===confirmPassword){
            var information={
                "name":name,
                "number":number,
                "mail":mail,
                "password":password
            }
            setData(information)
            document.getElementById("error-msg").style.display="none";
            console.log()


            // creating and sending user data to firebase for authendication
            console.log("before auth")
            firebase.auth().createUserWithEmailAndPassword(information.mail, information.password)
                    .then((user) => {
                        console.log(user)
                        console.log("New Account Created");
                        
                        history.push("/regmsg");
                    })
                    .catch((error) => {
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        console.log(errorMessage);
                        document.getElementById("err-message").innerText=errorMessage;
                    });
                    console.log("Worked")

                    console.log("after auth")

        }else{
            document.getElementById("error-msg").style.display="block";
        }
        

         
    }
    return (
      
            <div className="container">
            <div id="reg-form">
                <h5 className="text-center mt-2">New User? Register Here</h5>
                <h6 className="text-center">
                    <Link to="/login">
                    Already have an account? Login here
                    </Link>
                </h6>

                

                <Form onSubmit={saveData} style={{maxWidth:"400px"}} className="d-block mx-auto">
                    <Form.Group controlId="name">
                        <Form.Label>Name : </Form.Label>
                        <Form.Control type="name" id="name" placeholder="Enter Your Name" />
                    </Form.Group>


                    <Form.Group controlId="email">
                        <Form.Label>Email: </Form.Label>
                        <Form.Control type="email" id="email" placeholder="Enter Email" />
                        <p className="text-center text-danger" id="err-message"></p>
                    </Form.Group>

                    <Form.Group controlId="number">
                        <Form.Label>Contact Number: </Form.Label>
                        <Form.Control type="number" id="number" placeholder="Enter Number" />
                    </Form.Group>

                    
                    <Form.Group controlId="password">
                        <Form.Label>Password: </Form.Label>
                        <Form.Control type="password" id="password" placeholder="Enter Password" />
                    </Form.Group>


                    
                    <Form.Group controlId="confirmPassword">
                        <Form.Label>Confirm Password: </Form.Label>
                        
                        <Form.Control type="password" id="confirmPassword" placeholder="Enter Password Again" />
                        <p id="error-msg" style={{display:"none"}} className="text-danger ">Password didn't match</p>
                    </Form.Group>
                    <button className="btn btn-primary">Register</button>
                </Form>
            </div>

             

            
        </div>
    );
};

export default Signup;