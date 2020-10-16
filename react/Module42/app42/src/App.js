import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// firebase imports
import * as firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

// the config file import
import firebaseConfig from './firebaseConfig';

// the config file initialization
firebase.initializeApp(firebaseConfig);


function App() {
  // this state is boolean used for hide/show a JSX file
  const [flag,setFlag]=useState(false);

  // this state is used for saving the user info directly from html page input field & form
  const [user,setUser]=useState({
  })
  
  function submitFunc(e){ // e is taken to prevent default
    if(flag && user.email && user.password && user.name){
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then(res=>{
        //infos are taken from user state to newInfo
        var newInfo={...user};

        // a message is submitted with the newInfo Json file to the user state
        newInfo.message="Submitted";
        setUser(newInfo);
        
        //sending the name to firebase database
        updateName(user.name)

      })
      .catch(function(error) {
        // Handle Errors here.
         
        var errorMessage = error.message;

        //infos are taken from user state to newInfo
        var newInfo={...user};

        // a message is submitted with the newInfo Json file to the user state
        newInfo.message=errorMessage;
        setUser(newInfo);
         
        // ...
      });
    }else if(!flag && user.email && user.password){
      firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(res=>{
        var newInfo={...user};
        newInfo.message="Logged in"
        setUser(newInfo);
        getInfo();
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorMessage = error.message;
        var newInfo={...user};
        newInfo.message=errorMessage;
        setUser(newInfo);
        // ...
      });
    }
    e.preventDefault();
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

  // Form Validation check
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
        
          <input type="checkbox"  onChange={()=> setFlag(!flag)} name="newUser" value="newuser"/>
          <label for="vehicle1"> New User</label><br></br>

          {flag && <input onBlur={changeFunc} type="text" name="name" placeholder="Enter Your Name" required/>}
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
          <p>{user.message}</p>
      </section>
    </div>
  );
}

export default App;
