import React, {useState} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Order from './Components/Order/Order';
import Error from './Components/Error';
import ProductDetail from './Components/ProductDetail';
import Review from './Components/Review';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Home';
import Logins from './Components/Logins';
import Shipment from './Components/Shipment';
import {createContext} from 'react';

export const UserContext = React.createContext();

function App() {
  const [loggedInUser,setLoggedInUser]=useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      {loggedInUser.email}
      <Header></Header>
      <Router>{/*Router Whole Wrapper*/}
        <Switch>{/*Switch for other page*/}
          <Route path='/shop'>
            <Shop></Shop>
          </Route>

          <Route path='/review'>
            <Review></Review>
          </Route>


          <Route exact path='/home'> {/*This is default for Homepage...when the page is loaded*/}
            <Home></Home> {/*The Homepage*/}
          </Route>

          <Route exact path='/logins'> {/*This is default for Homepage...when the page is loaded*/}
            <Logins></Logins> {/*The Homepage*/}
          </Route>

          <Route exact path='/shipment'> {/*This is default for Homepage...when the page is loaded*/}
            <Shipment></Shipment> {/*The Homepage*/}
          </Route>


          <Route exact path='/'> {/*This is default for Homepage...when the page is loaded*/}
            <Home></Home> {/*The Homepage*/}
          </Route>
          
          <Route path='/product/:pd'> {/*The Path for dynamic Data key*/}
            <ProductDetail></ProductDetail> {/*Page for Dynamic Key Passing*/}
          </Route>

          <Route path='*'>{/*Path for wrong URL*/}
            <Error></Error>{/*Wrong URL Page*/}
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
