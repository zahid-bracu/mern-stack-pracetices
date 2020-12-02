import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import Java from './components/Java';
import DataStructure from './components/DataStructure';
import Home from './components/Home';
import Algorithm from './components/Algorithm';
import UXUI from './components/UXUI';
import UIUXTools from './components/UIUXTools';

function App() {
  return (
    <>
    
    
    


    <Router>
    <Header></Header>
        <Switch>
        <Route path="/java">
          <Java></Java>
        </Route>


        <Route path="/uiux">
          <UXUI></UXUI>
        </Route>


        <Route path="/uiuxtools">
          <UIUXTools></UIUXTools>
        </Route>

        <Route path="/ds">
          <DataStructure></DataStructure>
        </Route>

        <Route path="/algo">
          <Algorithm></Algorithm>
        </Route>

        <Route path="/">
          <Home></Home>
        </Route>

        </Switch>
    </Router>
    </>
  );
}

export default App;
