import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Rooms from './Components/Rooms';
import Login from './Components/Login';
import PrivateRoute from './Components/PrivateRoute';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import React, {createContext, useState} from 'react';
import Booking from './Components/Booking';
import Payment from './Components/Payment';

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

          <Route path="/payment">
            <Payment />
          </Route>

          <Route path="/room">
            <Rooms />
          </Route>

          <PrivateRoute path="/booking">
              <Booking/>
          </PrivateRoute>

           
          
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
