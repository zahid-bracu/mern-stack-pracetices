import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Contact from './components/Contact';
import FormPage from './components/FormPage';
import React, { useState, createContext } from 'react';
import Rooms from './components/Rooms';
import BookedRoom from './components/BookedRoom';


export const UserContext = React.createContext();
function App() {

  const [user,setUser]=useState({
    name:"",
    email:"",
    state:false
  });
  console.log(user)
  return (
    <>
    <UserContext.Provider value={[user,setUser]}>
      <Router>
      <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/rooms/:name">
              <Rooms></Rooms>
            </Route>

            <Route path="/booked">
              <BookedRoom></BookedRoom>
            </Route>


            <Route path="/contact">
              <Contact></Contact>
            </Route>

            <Route path="/form/:key">
              <FormPage></FormPage>
            </Route>
          </Switch>
        
      </Router>
    </UserContext.Provider>
    </>
  );
}

export default App;
