 
import './App.css';
import FormPage from './components/FormPage';
import Navigation from './components/Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import Contact from './components/Contact';
function App() {
  return (
    <>
      
      
      <Router>
      <Navigation></Navigation>
        <Switch>
          
          <Route path="/form">
          <FormPage></FormPage>
          </Route>


          <Route path="/login">
          <Login></Login>
          </Route>

          <Route path="/contact">
            <Contact></Contact>
          </Route>


          <Route path="/home">
          <Home></Home>
          </Route>


        </Switch>
    </Router>
    </>
  );
}

export default App;
