import React from 'react';
import logo from './resource/logo.png'
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './style.css';
const Header = () => {
    return (
         
        <Navbar className="bg-custom" bg="dark" variant="dark" expand="lg">
            <div className="container">
                <Navbar.Brand href="#home">
                    <img src={logo} style={{width:"60px"}}/> Petuk <span className="font-montserrat" style={{color:" #bdf935"}}>Naki</span> 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto align-items-center">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">
                        <button className="btn btn-signup">Sign Up</button>
                    </Nav.Link>

                   
                </Nav>
                </Navbar.Collapse>
            </div>
      </Navbar>
         
    );
};

export default Header;