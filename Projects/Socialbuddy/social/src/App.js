import React, { useEffect, useState } from 'react';
import PrimarySearchAppBar from './Components/PrimarySearchAppBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from './Components/Post';
import Banner from './Components/Banner';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PostDetails from './Components/PostDetails';


function App() {
  return(
    <>
      <PrimarySearchAppBar></PrimarySearchAppBar>
      <Router>
        <Switch>
            <Route path="/" exact>
              <Banner/>
              <Post />
            </Route>

            <Route path="/post">
                <Post/>
            </Route>

            <Route path="/details/:pd">
              <PostDetails/>
            </Route>
            
        </Switch>
      </Router>
       
    </>
  )
}

export default App;
