import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from '../src/firebaseConfig';
firebase.initializeApp(firebaseConfig);

function App() {
  const provider = new firebase.auth.GoogleAuthProvider();
  function signIn(){
    firebase.auth().signInWithPopup(provider)
    .then(res=>{
      console.log("work");
      console.log(res);
      const {displayName,photoURL,email}=res.user;
      console.log(displayName);
      console.log(email);
      // The signed-in user info.
      
    })
  }
  return (
    <div className="App">
       <button onClick={()=>signIn()}>Sign in</button>
    </div>
  );
}

export default App;
