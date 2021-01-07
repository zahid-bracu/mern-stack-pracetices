import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login';
import Works from './components/Works';
import Register from './components/Register';
import AddEvent from './components/AddEvent';
import SelectedWorks from './components/SelectedWorks';
import VolunteerList from './components/VolunteerList';
function App() {
  return (
    <>
    <Router>
     
    <Navigation/>
    <Switch>


    <Route path="/login">
      <Login/>
    </Route>


    <Route path="/volunteerlist">
      <VolunteerList/>
    </Route>


    <Route path="/register">
      <Register/>
    </Route>

    <Route path="/addevent">
      <AddEvent/>
    </Route>


    <Route path="/selectedworks">
      <SelectedWorks/>
    </Route>

    <Route path="/">
      <Works/>
    </Route>
    
    </Switch>
    </Router>
    
    </>
  );
}

export default App;
