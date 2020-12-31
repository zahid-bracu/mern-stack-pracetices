import React from 'react';
import { Button, Nav, Navbar,NavDropdown,Form,FormControl } from 'react-bootstrap';
import logo from './images/logo.png'
const Navigation = () => {
    return (
        
            <Navbar bg="light"  expand="lg">
                <div className="container">
                <Navbar.Brand > 
                    <img src={logo} style={{width:"100px"}}/>    
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse  id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link0">Product</Nav.Link>
                    <Nav.Link href="#link1">Order Review</Nav.Link>
                    <Nav.Link href="#link2">Manage Inventory</Nav.Link>
                    <Nav.Link href="#link2">Contact Us</Nav.Link>
                    <NavDropdown title="My Account" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.0">Sign Up</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Sign In</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Sign Out</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">My Account Information</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                     
                </Navbar.Collapse>
                </div>
            </Navbar>
    
    );
};

export default Navigation;