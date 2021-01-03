import React,{createContext,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Banner from './components/Banner'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import RegMsg from './components/RegMsg'
import LoginMsg from './components/LoginMsg';
import Shop from './components/Shop';
import ProductDetail from './components/ProductDetail';

export const UserContext = React.createContext();

function App() {
  
const [user,setUser]=useState();


  return (

    <UserContext.Provider value={[user,setUser]}>
    <div>
      
      <Router>
      <Navigation></Navigation>
        <Switch>
          


        <Route path='/product/:id'>
            <ProductDetail></ProductDetail> 
          </Route>
          

          <Route path="/register">
            <Signup/>
          </Route>


          <Route path="/shop">
            <Shop/>
          </Route>


          <Route path="/regmsg">
            <RegMsg/>
          </Route>

          <Route path="/loginmsg">
            <LoginMsg/>
          </Route>

          <Route path="/login">
            <Login/>
          </Route>


          <Route path="/">
            <Banner/>
          </Route>
        </Switch>
    </Router>
    </div>
    </UserContext.Provider>
  );
}

export default App;
