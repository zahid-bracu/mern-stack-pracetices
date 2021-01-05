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
function App() {
  return (
    <>
    <Router>
     
    <Navigation/>
    
    <Login/>
    <Works/>
    </Router>
    
    </>
  );
}

export default App;
