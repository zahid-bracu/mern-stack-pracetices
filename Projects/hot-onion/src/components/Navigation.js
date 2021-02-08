import React, {useState,useContext} from 'react';
import {  NavDropdown, Navbar, Nav, Button, FormControl, Form } from 'react-bootstrap';
import './style.css';
import cart from './resources/cart.svg';
import logo2 from './resources/logo2.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import {UserContext} from '../App';
const Navigation = () => {
    const [user,setUser]=useContext(UserContext);
    console.log(user)
    return (
        <Navbar bg="light" className="sticky-top" expand="lg">
            <div className="container">
                <Navbar.Brand>
                    <Link to="/">
                    <img style={{width:"140px"}} src={logo2}/>
                    </Link>
                    
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link>
                        <img id="cart" src={cart}/>
                    </Nav.Link>
                    
                     {
                         user.state && 
                         <Nav.Link className="nav-link">
                    <Link   to={`/form/${true}`}>
                        <button className="btn-sign btn btn-danger">{user.email}</button>
                        </Link>
                    </Nav.Link>
                    
                     }
                    {
                        !user.state && <Nav.Link className="nav-link">
                        <Link   to={`/form/${true}`}>
                            <button className="btn-sign btn btn-danger">Login/Sign Up</button>
                            </Link>
                        </Nav.Link>
                    }
                    
                    



                    </Nav>
                    
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default Navigation;