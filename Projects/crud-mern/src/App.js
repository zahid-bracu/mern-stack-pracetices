import React, {useState,useContext} from 'react';
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
import {createContext} from 'react';
import Saved from './components/Saved';
import Delete from './components/Delete';
import DeleteMessage from './components/DeleteMessage';
import Update from './components/Update';
import UpdateMsg from './components/UpdateMsg';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
export const UserContext = React.createContext();
 


function App() {

  const [user,setUser]=useState({
    name:"",
    mail:"",
    flag:false
  });

  console.log(user);
  return (
    <>
      
      <UserContext.Provider value={[user,setUser]}>
        <Router>
        <Navigation></Navigation>
         
          <Switch>
            
            <Route path="/form">
            <FormPage></FormPage>
            </Route>


            <Route path="/deletemsg">
            <DeleteMessage></DeleteMessage>
            </Route>


            <Route path="/contactus">
            <ContactUs/>
            </Route>


            <Route path="/login">
            <Login></Login>
            </Route>

            <Route path="/saved">
            <Saved></Saved>
            </Route>

            <Route path="/contact">
              <Contact></Contact>
            </Route>

            <Route path="/delete/:id">
            <Delete></Delete>
            </Route>


            <Route path="/update/:id">
            <Update></Update>
            </Route>


            <Route path="/updatemsg">
            <UpdateMsg></UpdateMsg>
            </Route>


            <Route path="/home">
            <Home></Home>
            </Route>

            <Route path="/">
            <Home></Home>
            </Route>


          </Switch>
          <Footer/>
      </Router>
    </UserContext.Provider>
    </>
  );
}

export default App;
