
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Banner from './components/Banner'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Router>
        <Switch>
          
          <Route path="/">
            <Banner/>
          </Route>
          
        </Switch>
    </Router>
    </div>
  );
}

export default App;
