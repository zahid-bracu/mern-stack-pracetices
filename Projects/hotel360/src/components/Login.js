import React, {useContext, useState} from 'react';
import { Button, Form } from 'react-bootstrap';
import Google from './Google';
import {UserContext} from '../App';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebaseConfig';

if (!firebase.apps.length) {
    firebase.initializeApp({});
}

const Login = () => {
    const [user,setUser]=useContext(UserContext);
    const [users,setUsers]=useState({});

    


    function onChange(e){
        console.log(e.target.name +" : "+e.target.value);
        let newInfo={...users};
        newInfo[e.target.name]=e.target.value;
        setUsers(newInfo)
    }


    function submitFunc(e){
        e.preventDefault();

        firebase.auth().signInWithEmailAndPassword(users.email, users.password)
        .then(res=>{
            var newInfo={
                state:true
            }
            setUser(newInfo);
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            console.log(errorMessage);
          });
    }
    return (
        <>
        {
            !user.state && <div className="container">
            <h5 className="text-center mt-2">Login</h5>
            <Form onSubmit={submitFunc} className="mx-auto mt-2" style={{width:"400px"}}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={onChange} name="email" type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={onChange} name="password" type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
            <h5 className="text-center my-2">Or</h5>
            <Google></Google>
        </div>
        }
        {
            user.state && <div className="container">
                <h3 className="text-center mt-5">Logged In Successfully</h3>
                <Google></Google>
            </div>
        }
        </>
    );
};

export default Login;