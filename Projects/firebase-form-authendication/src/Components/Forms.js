import React, {useState,useContext} from 'react';
import { Button,  Form } from 'react-bootstrap';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebasConfig';
import {information} from '../App';

firebase.initializeApp(firebaseConfig);

const Forms = () => {
    const [flag,setFlag]=useState(false);
    const [user,setUser]=useState({});
    const [message,setMessage]=useState("");

    const [info,setInfo]=useContext(information);


    function changeFunc(e){
        console.log(e.target.name +" : "+e.target.value);
        let isFormValid=true;
        

        if(e.target.name=='email'){
        isFormValid=/\S+@\S+\.\S+/.test(e.target.value);
        }

        if(e.target.name=="password"){
        const isPasswordValid=e.target.value.length>6;
        const passwordHasNumber=/\d{1}/.test(e.target.value);
        isFormValid=passwordHasNumber && isPasswordValid;
        }

        console.log(isFormValid);

        if(isFormValid){
            let newInfo={...user};
            newInfo[e.target.name]=e.target.value;
            setUser(newInfo);
          }
    }
    console.log(user);

    function submitFunc(e){
        if(flag && user.email && user.password && user.name){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(res=>{
                var newInfo={...user};
                console.log(newInfo);
                console.log("Submitted")
                setMessage("Form Submitted & New User Created");
                document.getElementById("message").style.color="green";
            })
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
                setMessage(errorMessage);
                document.getElementById("message").style.color="red";
                // ...
              });
        }else if(!flag && user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res=>{
                var newInfo={...user};
                console.log(newInfo);
                 
                 
                 
                setInfo(true);
            })
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
                setMessage(errorMessage);
                document.getElementById("message").style.color="red";
                // ...
              });
        }
        e.preventDefault();
    }
    console.log(info);

    function logout(){
        firebase.auth().signOut().then(function() {
            setInfo(false);
            setMessage("Logged Out");
            document.getElementById("message").style.color="Black";
          }).catch(function(error) {
            // An error happened.
          });
    }
    return (
        <>
        {
            !info && <> <Form onSubmit={submitFunc}  className="mx-auto mt-5" style={{width:"25rem"}}>

            {
                !flag && <h5>Sign In</h5>
            }

            {
                flag && <h5>Sign Up</h5>
            }

            
            <Form.Group className="mx-auto" controlId="formBasicCheckbox">
                <Form.Check onChange={()=>{
                    setFlag(!flag)
                }} type="checkbox" label="New User?" />
            </Form.Group>

            {
                flag && <Form.Group controlId="Name">
                <Form.Label>Full Name</Form.Label>
                <Form.Control onBlur={changeFunc} name="name" type="text" placeholder="Enter Full Name" />
            </Form.Group>
            }
            
            
            
            <Form.Group controlId="Email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control onBlur={changeFunc} name="email" type="email" placeholder="Enter Email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={changeFunc} name="password" type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            
            <Button variant="primary" value="submit" type="submit">
                Submit
            </Button>
        </Form>

        <h5 id="message" className="my-4 text-center">{message}</h5> </>
        }

        {
            info && <>
            <div className="container">
                <h3 className="text-center my-5 text-success">You have logged in successfully</h3>
            </div>

            <button onClick={logout} className=" btn btn-primary d-block px-5 mx-auto">Logout</button>
            </>
        }
        </>
    );
};

export default Forms;