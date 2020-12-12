import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './component/Header'


function App() {
  return (
    <>
    <Router>
       <Header></Header>

         
        <Switch>
          {/* <Route path="/about">
            <About />
          </Route> */}
          
          

        </Switch>
    </Router>
    </>
  );
}

export default App;
