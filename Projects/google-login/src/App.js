import React, { useState } from 'react'; //import react libraries
import './App.css'; //import css design file 
import * as firebase from "firebase/app"; //import firebase library
import "firebase/auth"; //import firebase authendication library
import "firebase/firestore"; //import firebase firestore library
import firebaseConfig from '../src/firebaseConfig'; //import firebase config library
import 'bootstrap/dist/css/bootstrap.min.css';
import Display from './components/Display';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

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
    creates:"",
    lastOnline:"",
    state:false
  })



  //sign in button function
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
   
  
  
  // Log out / sign out button function
  function signOut(){
    if(user.state===true){
      firebase.auth().signOut().then(function() {
        var info={
          name:"",
          photo:"",
          email:"",
          creates:"",
          lastOnline:"",
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
      <>
      <div className="App">
         <Navigation></Navigation>
         <h4 id="h4-text" className="text-success">Your are successfully Signed In</h4>
         <Display signOut={signOut} info={user}></Display>
          
      </div>
      <Footer></Footer>
      </>
    );
  }else{
    return (
      <>
      <div className="App">
         <Navigation></Navigation>
         <h4 id="h4-text">Press the Button Below to Sign in Using your Google Account</h4>
         <button id="btn-signin" className="btn btn-success" onClick={()=>signIn()}>Sign In</button>
         
      </div>
      <Footer></Footer>
      </>
    );
  }
}


 
export default App;
