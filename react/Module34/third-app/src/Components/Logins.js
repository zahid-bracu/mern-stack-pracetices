import React, { useState,useContext  } from 'react';
import { useHistory,useLocation } from "react-router-dom";
import * as firebase from "../../node_modules/firebase/app";
import "../../node_modules/firebase/auth"; //import firebase authendication library
import "../../node_modules/firebase/firestore";
import firebaseConfig from './firebaseConfig'; //firebase config file import
import './style.css'
import { Button,Form } from 'react-bootstrap';
import {UserContext} from '../App'; // context API import from App


firebase.initializeApp(firebaseConfig); //fire base config file import

const Logins = () => {

    

    const provider = new firebase.auth.GoogleAuthProvider(); //google sign in provider import

    const [loggedInUser,setLoggedInUser]=useContext(UserContext); // context API import


    // after logged in below code is used to redirect to real page
    let history = useHistory(); // imported from react-router-dom
    let location = useLocation(); // ||  ||

    let { from } = location.state || { from: { pathname: "/" } };
    // after logged in below code is used to redirect to real page


    const [flag,setFlag]=useState(false) // boolean flag for hide/show a JSX tag

    const [user,setUser]=useState({
        // use state for user information
        
      })

      function signIn(){
        //google-auth provider from firebase->console->doc->develope(tab)->authendication->web->get started->google-sign-in
        firebase.auth().signInWithPopup(provider)
        .then(res=>{
          console.log(res.user);
          //fetching the datas from google auth
          const {displayName,photoURL,email}=res.user;
          var creationTime=res.user.metadata.creationTime;
          var lastOnlineTime=res.user.metadata.lastSignInTime;
    
    
          // now setting the data in a object
          var info={
            name:displayName,
            photo:photoURL,
            email:email,
            creates:creationTime,
            lastOnline:lastOnlineTime,
            state:true
          }
          // now passing the object in the useState
          setUser(info);
          
        })
      }

      // peronal sign up & sign in button
      function submitFunc(e){ // e is taken to prevent default
        if(flag && user.email && user.password && user.name){
          firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then(res=>{
            //infos are taken from user state to newInfo
            var newInfo={...user};
    
            // a message is submitted with the newInfo Json file to the user state
            newInfo.message="Submitted";
            setUser(newInfo);
            
            //sending the name to firebase database
            updateName(user.fname);
            console.log("Works Sign Up");
    
          })
          .catch(function(error) {
            // Handle Errors here.
             
            var errorMessage = error.message;
  
            console.log(errorMessage);
            //infos are taken from user state to newInfo
            var newInfo={...user};
    
            // a message is submitted with the newInfo Json file to the user state
            newInfo.message=errorMessage;
            setUser(newInfo);
             
            // ...
          });
        }else if(!flag && user.email && user.password){
          console.log("Entered");
          firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(res=>{
            console.log("Fire Entered");
            var newInfo={...user};
            newInfo.message="Logged in"
            setUser(newInfo);

            // setting in the context API state
            setLoggedInUser(newInfo);

            history.replace(from);

            getInfo();

            console.log("Works Sign In");
          })
          .catch(function(error) {
            // Handle Errors here.
            
            var errorMessage = error.message;
            console.log(errorMessage);
            var newInfo={...user};
            newInfo.message=errorMessage;
            setUser(newInfo);
            // ...
          });
        }
        e.preventDefault();
      }

      function updateName(name){
        var user = firebase.auth().currentUser;
    
        user.updateProfile({
          displayName: name,
           
        }).then(function() {
          // Update successful.
        }).catch(function(error) {
          // An error happened.
        });
      }

      function getInfo(){
        var user = firebase.auth().currentUser;
        var name, email;
    
        if (user != null) {
          name = user.displayName;
          email = user.email;
          console.log("Name :"+name);
          console.log("Email : "+email);
     
        }
      }

      

      function changeFunc(e){
        console.log(e.target.name +" : "+e.target.value);

        let isFormValid=true;
        if(e.target.na)
    
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
    return (

      <>
        <div>
            <button id="btn-signin" className="btn btn-success" onClick={()=>signIn()}>Sign In with Google Account</button>
        </div>
        
        <h5 style={{textAlign:"center"}} className="my-4" >Or</h5>

        <form onSubmit={submitFunc} className="form">

        {/* {value && <jsx>....</jsx>} */}

        {flag && <h3 style={{textAlign:"center"}}>Sign Up</h3>}
        {!flag && <h3 style={{textAlign:"center"}}>Sign In</h3>}

        <Form.Group controlId="formBasicCheckbox">
            <Form.Check  type="checkbox" onChange={()=>setFlag(!flag)} label="New User?" />
          </Form.Group>

        {
          flag && <Form.Group controlId="firstName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control name="name" onBlur={changeFunc} type="text" placeholder="Enter Your Full Name" />
                </Form.Group>
        }
           
          



          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" onBlur={changeFunc} name="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" onBlur={changeFunc}  type="password" placeholder="Password" />
          </Form.Group>

         
          
          
          <input className="btn btn-success"   type="submit" value="submit"/>
           
        </form>
        <p style={{textAlign:"center"}}>{user.message}</p>
      </>
    );
};

export default Logins;