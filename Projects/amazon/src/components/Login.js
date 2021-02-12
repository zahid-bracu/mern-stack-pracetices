
// importing
import React, {useState,useContext} from 'react';
import {UserContext} from '../App';
import { Form } from 'react-bootstrap';
import {
    Link,
    useHistory,
    useLocation
  } from "react-router-dom";
  import firebase from "firebase/app";
  import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebaseConfig';
if (!firebase.apps.length) {
    firebase.initializeApp({});
}



const Login = () => {

 
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/login" } };


    const [data,setData]=useState({})
    const [error,setError]=useState("")
    const [user,setUser]=useContext(UserContext);
    let history = useHistory();
    function saveData(event){
        event.preventDefault();
        var mail=document.getElementById('email').value;
        var password=document.getElementById('password').value;
        console.log("Entered")
        console.log(mail+":"+password)
        
        firebase.auth().signInWithEmailAndPassword(mail, password)
        .then((res) => {

            const {displayName,photoURL,email}=res.user;
            
             

             

            console.log("Logged In");
            setError("");
            setUser(mail);
            history.replace(from);
            // history.push("/loginmsg");
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
            setError(errorMessage)
        });
    }


    function SignOut(){
        firebase.auth().signOut().then(() => {
            setUser("");
          }).catch((error) => {
            // An
          });
    }

    console.log(user)

    return (
        <div>
            <div>
                {
                    user && <>
                    <h4 className="text-center mt-5">Welcome User  </h4>
                    <h6 className="text-center my-3">Your Account Email : </h6>
                    <h6  className="text-center text-primary my-3">{user}</h6>
                    <button onClick={()=>SignOut()} className="my-3 d-block mx-auto btn btn-danger">Logout</button> 
                    </>
                }
            </div>
            {
                !user && <div>
                <h5 className="text-center mt-5">Login</h5>
                <h6 className="text-center">
                    <Link to="/register">
                        New user? Register Here
                    </Link>
                </h6>
                <Form onSubmit={saveData} style={{maxWidth:"400px"}} className="d-block mx-auto">
                     


                    <Form.Group controlId="email">
                        <Form.Label>Email: </Form.Label>
                        <Form.Control type="email" id="email" placeholder="Enter Email" />
                    </Form.Group>

                     

                    
                    <Form.Group controlId="password">
                        <Form.Label>Password: </Form.Label>
                        <Form.Control type="password" id="password" placeholder="Enter Password" />
                    </Form.Group>


                    
                     
                    <button className="btn btn-primary">Login</button>
                </Form>
                <div className="d-block mx-auto" style={{maxWidth:"440px"}}>
                    <p className="text-center mt-4 text-danger" >{error}</p>
                </div>
                
            </div>
            }
        </div>
    );
};

export default Login;