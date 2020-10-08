import React, { useState } from 'react'; //import react libraries
import './App.css'; //import css design file 
import * as firebase from "firebase/app"; //import firebase library
import "firebase/auth"; //import firebase authendication library
import "firebase/firestore"; //import firebase firestore library
import firebaseConfig from '../src/firebaseConfig'; //import firebase config library


// initializing the firebase config library details
firebase.initializeApp(firebaseConfig);


// 
function App() {
  
  const provider = new firebase.auth.GoogleAuthProvider();
  // This provider is fetched from firebase->console->doc->develope(tab)->authendication->web->get started->google-sign-in

  //setting a useState to import data from google-auth
  const [user,setUser]=useState({
    name:"",
    photo:"",
    email:"",
    state:false
  })



  //sign in button function
  function signIn(){
    //google-auth provider from firebase->console->doc->develope(tab)->authendication->web->get started->google-sign-in
    firebase.auth().signInWithPopup(provider)
    .then(res=>{
       
      //fetching the datas from google auth
      const {displayName,photoURL,email}=res.user;

      // now setting the data in a object
      var info={
        name:displayName,
        photo:photoURL,
        email:email,
        state:true
      }
      // now passing the object in the useState
      setUser(info);
      
    })
  }
   
  
  
  // Log out / sign out button function
  function signOut(){
    if(user.state===true){
      firebase.auth().signOut().then(function() {
        var info={
          name:"",
          photo:"",
          email:"",
          state:false
        }
        setUser(info);
      }).catch(function(error) {
        // An error happened.
      });
    }
  }
   

  if(user.state===true){
    return (
      <div className="App">
         <button id="btn" onClick={()=>signOut()}>Sign Out</button>
          <h5>{user.name}</h5>
          <h6>{user.email}</h6>
          <img src={user.photo} />
          <Forms></Forms>
      </div>
    );
  }else{
    return (
      <div className="App">
         <button id="btn" onClick={()=>signIn()}>Sign In</button>
          <h5>{user.name}</h5>
          <h6>{user.email}</h6>
          <img src={user.photo} />
          <Forms></Forms>
      </div>
    );
  }
}


function Forms(){
  function submitFunc(){
    console.log("Submit button")
  }

  function changeFunc(e){
    console.log(e.target.name +" : "+e.target.value);
    if(e.target.name=='email'){
      const isEmailValid=/\S+@\S+\.\S+/.test(e.target.value);
      console.log(isEmailValid);
    }
    if(e.target.name=="password"){
      const isPasswordValid=e.target.value.length>6;
      const passwordHasNumber=/\d{1}/.test(e.target.value);
      console.log( isPasswordValid && passwordHasNumber)
    }
  }
  return(
    <>
          <form onSubmit={submitFunc}>
              <input onBlur={changeFunc} type="text" name="email" placeholder="Enter Your Email" required/>
              <br/>
              <input onBlur={changeFunc} type="password" name="password" placeholder="Enter Your Password" required/>
              <br/>
              <input type="submit" value="Submit" />
          </form>
    </>
  )
}


export default App;
