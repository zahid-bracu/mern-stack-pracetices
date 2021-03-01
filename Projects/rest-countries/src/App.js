import Countries from "./component/Countries";
import Navigation from "./component/Navigation";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./component/Home";
import ViewDetail from "./component/ViewDetail";
import AddedCountry from "./component/AddedCountry";
import Footer from "./component/Footer";
import './App.css';

function App() {
  return (
    <>
      
      

      <Router>
      <Navigation/> 
        <Switch>

        <Route exact path="/home">
            <Home/>
          </Route>
          
          <Route path="/countries">
            <Countries/>
          </Route>

          <Route path="/addedCountries">
            <AddedCountry/>
          </Route>


          <Route path="/detail/:id">
            <ViewDetail/>
          </Route>

          <Route exact path="/">
            <Home/>
          </Route>

        </Switch>
        <hr/>
        <Footer/>
      </Router>
      
    </>
  );
}

export default App;
