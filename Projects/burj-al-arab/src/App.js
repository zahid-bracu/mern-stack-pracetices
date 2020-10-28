import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Rooms from './Components/Rooms';
import Login from './Components/Login';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import React, {createContext, useState} from 'react';
import Booking from './Components/Booking';

export const UserContext = React.createContext();

function App() {
  const [user,setUser]=useState({
    name:"",
    email:"",
    state:false
  });
  console.log(user);

  return (
    <>
    <UserContext.Provider value={[user,setUser]}>
    <Router>
      <Header></Header>
        <Switch>

        
        <Route path="/home">
            <Banner />
          </Route>

          <Route path="/room">
            <Rooms />
          </Route>

          <Route path="/booking">
            <Booking/>
          </Route>
          
          <Route path="/login">
            <Login />
          </Route>

          
           

          <Route path="*">
            <Banner />
          </Route>
        </Switch>
     
    </Router>
      
    </UserContext.Provider>
      
      
    </>
  );
}

export default App;
