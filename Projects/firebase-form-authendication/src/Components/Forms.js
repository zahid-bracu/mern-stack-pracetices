import React, {useState,useContext, useEffect} from 'react'; //react hooks
import { Button,  Form } from 'react-bootstrap';  // bootstraps
import * as firebase from "firebase/app"; //importing firebase
import "firebase/auth"; //importing fire auth
import "firebase/firestore"; // firestore details import
import firebaseConfig from './firebasConfig'; //firebase config file import
import {information} from '../App'; //context api import
import './style.css';
firebase.initializeApp(firebaseConfig); // initialize the firebaseconfig app

const Forms = () => {
    const [flag,setFlag]=useState(false);
    const [user,setUser]=useState({});
    const [message,setMessage]=useState("");
    const [mail,setMail]=useState("")
    const [info,setInfo]=useContext(information);



    useEffect(() => {
         var tempMail=localStorage.getItem('email');
          
         setMail(tempMail);
      },0);

    

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
                 
                
                localStorage.setItem('email', newInfo.email);
                setMail(user.email)
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
     

    function logout(e){

        firebase.auth().signOut().then(function() {
            e.preventDefault();
            
            localStorage.setItem('email',"");
            setMail("")
            
            setInfo(false);
            setMessage("Logged Out");
            document.getElementById("message").style.color="Black";
            
          }).catch(function(error) {
            // An error happened.
          });
    }


     console.log(mail)
    return (
        <div className="container">
        {
            !mail && <> <Form onSubmit={submitFunc}  className="custom-form  mt-5" >

            {
                !flag && <h5 className="text-center">Sign In</h5>
            }

            {
                flag && <h5 className="text-center">Sign Up</h5>
            }

            
            <Form.Group className="mx-auto " controlId="formBasicCheckbox">
                <Form.Check onChange={()=>{
                    setFlag(!flag)
                }} type="checkbox"   label="New User?" />
            </Form.Group>

            {
                flag && <Form.Group controlId="Name">
                <Form.Label>Full Name</Form.Label>
                <Form.Control className="custom-input" onBlur={changeFunc} name="name" type="text" placeholder="Enter Full Name" />
            </Form.Group>
            }
            
            
            
            <Form.Group controlId="Email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control className="custom-input" onBlur={changeFunc} name="email" type="email" placeholder="Enter Email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control className="custom-input" onBlur={changeFunc} name="password" type="password" placeholder="Password" />
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
            mail && <>
            <div className="container">
                <h3 className="text-center my-5 text-success">You have logged in successfully</h3>
            </div>

            <button onClick={logout} className=" btn btn-primary d-block px-5 mx-auto">Logout</button>
            </>
        }
        </div>
    );
};

export default Forms;