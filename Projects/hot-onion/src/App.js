import logo from './logo.svg';
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


function App() {
  return (
    <>
    
     
     


    <Router>
    <Navigation/>
      <Switch>

        


        <Route path="/foods">
          <Foods/>
        </Route>



        <Route path="/">
          <Banner/>
          <DataLoad/>
          <Description/>
        </Route>


      </Switch>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
