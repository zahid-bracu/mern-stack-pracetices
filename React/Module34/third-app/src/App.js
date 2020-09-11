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
import Review from './Components/Review';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>{/*Router Whole Wrapper*/}
        <Switch>{/*Switch for other page*/}
          <Route path='/shop'>
            <Shop></Shop>
          </Route>

          <Route path='/review'>
            <Review></Review>
          </Route>


          <Route exact path='/'> {/*This is default for Homepage...when the page is loaded*/}
            <Shop></Shop> {/*The Homepage*/}
          </Route>
          
          <Route path='/product/:pd'> {/*The Path for dynamic Data key*/}
            <ProductDetail></ProductDetail> {/*Page for Dynamic Key Passing*/}
          </Route>

          <Route path='*'>{/*Path for wrong URL*/}
            <Error></Error>{/*Wrong URL Page*/}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
