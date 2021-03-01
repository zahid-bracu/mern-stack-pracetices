import React from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import {
    BrowserRouter as Router,
 
    Link
  } from "react-router-dom";
import './style.css';
import logo from './resource/logo.jpg'
const Navigation = () => {
    return (
        <Navbar className="sticky-top nav-bar" bg="light" expand="lg">
            <div className="container">
                <Navbar.Brand >
                    <img src={logo} style={{maxWidth:'70px',width:"100%"}}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        
                    <Nav.Link >
                       <Link className="custom-nav" to="/home">Home</Link>
                    </Nav.Link>

                    <Nav.Link >
                       <Link className="custom-nav" to="/countries">Countries</Link>
                    </Nav.Link>

                    <Nav.Link >
                       <Link className="custom-nav" to="/addedCountries">Added Countries</Link>
                    </Nav.Link>


                    

                    
                    <Nav.Link  className="custom-nav" target="_blank" href="https://portfolio-zahid-bracu.netlify.app/">
                    
                    <button className="btn btn-outline-success btn-sm btn-round">
                        <span className="font-weight-bold">
                        Contact
                        </span>
                    </button>
                    
                    </Nav.Link>
                    

                    
                    </Nav>
                    
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default Navigation;