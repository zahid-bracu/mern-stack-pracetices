import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [user,setUser]=useState({
    id:""
  })
  
  function submitFunc(){
    console.log("Submit button")
    
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
          <input onBlur={changeFunc} type="text" name="email" placeholder="Enter Your Email" required/>
          <br/>
          <input onBlur={changeFunc} type="password" name="password" placeholder="Enter Your Password" required/>
          <br/>
          <input type="submit" value="Submit" />
      </form>

      <section>
          <p>Name : {user.email}</p>
          <p>PassWord: {user.password}</p>
      </section>
    </div>
  );
}

export default App;
