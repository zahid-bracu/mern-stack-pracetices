import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Navigation = () => {
    return (
        <>
            <Navbar bg="white" expand="lg">
                <div className="container">
                    <Navbar.Brand href="#home">Address Book</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link >
                            <Link style={{textDecoration:"inherit",color:"black"}} to="/home">Home</Link>

                        </Nav.Link>

                        <Nav.Link  >
                            <Link style={{textDecoration:"inherit",color:"black"}} to="/contact">
                            Contacts
                            </Link>
                        </Nav.Link>

                        <Nav.Link  >
                            <Link style={{textDecoration:"inherit",color:"black"}} to="/form">
                            Add New Contacts
                            </Link>
                        </Nav.Link>
                         

                        <Nav.Link  >
                            <Link style={{textDecoration:"inherit",color:"black"}} to="/login">
                            Login
                            </Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse> 
                </div>
            </Navbar>
        </>
    );
};

export default Navigation;