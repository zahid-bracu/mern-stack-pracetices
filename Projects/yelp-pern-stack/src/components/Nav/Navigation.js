import React from 'react'
import { Button, Form, Modal, Nav, Navbar, NavDropdown, FormControl } from 'react-bootstrap';
import './style.css';
export default function Navigation() {
    return (
    
            <Navbar className="bg-custom" expand="lg">
            <div className="container">
            <Navbar.Brand href="/" className="text-secondary font-weight-bold">Yelp</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link className=" font-weight-bold" href="/">
                    Home
                </Nav.Link>
                <Nav.Link className="font-weight-bold" href="/about">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </div>
            </Navbar>
            
     
    )
}
