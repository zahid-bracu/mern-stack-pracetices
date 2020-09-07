import React from 'react';
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

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          
          <Route path='/order'>
            <Order></Order>
          </Route>
          <Route path='/display'>
            <Shop></Shop>
          </Route>
          <Route exact path='/'>
            <Shop></Shop>
          </Route>
          
          <Route path='/product/:key'>
            <ProductDetail></ProductDetail>
          </Route>

          <Route path='*'>
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
