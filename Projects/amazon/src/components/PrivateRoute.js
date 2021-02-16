import React, {useContext} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
  import {UserContext} from '../App';


  function PrivateRoute({ children, ...rest }) {
      
    const [user,setUser]=useContext(UserContext);
 
    let values=user;
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user ? ( //state is 
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

export default PrivateRoute;