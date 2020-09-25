import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebaseConfig';
firebase.initializeApp(firebaseConfig);


function App() {
  const [user,setUser]=useState({
  })
  
  function submitFunc(e){
    if(user.email && user.password && user.name){
      console.log("Submitted");
      console.log(user);
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then(res=>{
        console.log(res);
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        var newInfo={...user};
        newInfo.error=errorMessage;
        setUser(newInfo);
        console.log(user);
        // ...
      });
    }
    e.preventDefault();
  }

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
  console.log(user)
   
  return (
    <div className="App">
      <form onSubmit={submitFunc}>
          <input onBlur={changeFunc} type="text" name="name" placeholder="Enter Your Name" required/>
          <br/>
           
          <input onBlur={changeFunc} type="text" name="email" placeholder="Enter Your Email" required/>
          <br/>
          <input onBlur={changeFunc} type="password" name="password" placeholder="Enter Your Password" required/>
          <br/>
          <input type="submit" value="Submit" />
      </form>

      <section>
          <p>Name : {user.name}</p>
          <p>Email : {user.email}</p>
          <p>PassWord: {user.password}</p>
          <p>{user.error}</p>
      </section>
    </div>
  );
}

export default App;
