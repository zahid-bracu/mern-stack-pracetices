import React, {useContext,useState} from 'react';
import { Button,Nav, Navbar, NavDropdown, NavDropdownProps, Form, FormControl } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import {UserContext} from '../App';
  import './style.css';

const Header = () => {
    const [user,setUser]=useContext(UserContext);
    const imgUrl="https://i.ibb.co/CKbgxVK/travel.png";
    return (
        <Navbar className="sticky-top" bg="transparent" expand="lg">
        <div className="container">
        <Navbar.Brand href="#home">
            <img src={imgUrl} style={{width:"50px"}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            
            <Nav.Link className="nav-hover">
            <Link style={{textDecoration:"inherit",color:"white"}} to="/home">
                    Home
            </Link>
            </Nav.Link>

            <Nav.Link className="nav-hover">
                <Link style={{textDecoration:"inherit",color:"white"}} to="/contact">
                Contact
                </Link>
            </Nav.Link>
            


            {
                user.state &&
                <Nav.Link  className="nav-hover">
                    <Link style={{textDecoration:"inherit",color:"white"}} to="/booked">
                        Booked Room
                    </Link>    
                </Nav.Link>
            }
            

            <Nav.Link className="nav-hover" style={{textDecoration:"inherit",color:"white"}} target="_blank" href="https://portfolio-zahid-bracu.netlify.app/" >
                    Portfolio
            </Nav.Link>

            <Nav.Link className="nav-hover" style={{textDecoration:"inherit",color:"white"}} target="_blank" href="https://github.com/zahid-bracu" >
                    Github
            </Nav.Link>

            

            
             
            </Nav>

            <Nav className="ml-auto">

            <Nav.Link style={{textDecoration:"inherit",color:"white"}}  className="nav-hover">
                {user.name}    
            </Nav.Link>
            {user.state ? <Nav.Link  className="nav-hover">
                <Link style={{textDecoration:"inherit",color:"white"}} to="/login">
                    Logout
                </Link>    
            </Nav.Link> :
            <Nav.Link  className="nav-hover">
                <Link style={{textDecoration:"inherit",color:"white"}} to="/login">
                    Login
                </Link>    
            </Nav.Link>}
            </Nav>
             
        </Navbar.Collapse>

        </div>
        </Navbar>
    );
};

export default Header;