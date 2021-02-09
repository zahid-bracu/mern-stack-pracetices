import React, {createContext, useState} from 'react';
import './App.css';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import DataLoad from './components/DataLoad';
 

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Foods from './components/Foods';
import Description from './components/Description';
import Footer from './components/Footer';
import FoodDetails from './components/FoodDetails';
import Forms from './components/Forms';
import CheckOut from './components/CheckOut';
import AddedFood from './components/AddedFood';
export const UserContext = React.createContext();
export const FoodContext = React.createContext();


function App() {

  // 
  const [foodCart,setFoodCart]=useState([]);
  console.log(foodCart);
  const [user,setUser]=useState({
    email:"",
    password:"",
    state:false
  });
  console.log(user);
  return (
    <>
    <UserContext.Provider value={[user,setUser]}>

    
    <FoodContext.Provider value={[foodCart,setFoodCart]}>
     
     


    <Router>
    <Navigation/>
      <Switch>

        


        <Route path="/foods">
          <Foods/>
        </Route>


        <Route path="/checkout">
          <CheckOut/>
        </Route>


        <Route path="/addedfood">
          <AddedFood/>
        </Route>


        <Route path="/form/:bool">
          <Forms/>
        </Route>


        <Route path="/foodDetails/:id">
          <FoodDetails/>
        </Route>



        <Route path="/">
          <Banner/>
          <DataLoad/>
          <Description/>
        </Route>


      </Switch>
      <Footer/>
    </Router>

    </FoodContext.Provider>

    </UserContext.Provider>
    </>
  );
}

export default App;
