import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Contact from './components/Contact';
import FormPage from './components/FormPage';

function App() {
  return (
    <>
    
    <Router>
    <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/contact">
            <Contact></Contact>
          </Route>

          <Route path="/form/:key">
            <FormPage></FormPage>
          </Route>
        </Switch>
       
    </Router>
    </>
  );
}

export default App;
