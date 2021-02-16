import React from 'react'
import {  Nav, NavDropdown, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import './style.css';
import logo from './images/logo.png'
export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" className="sticky-top" bg="dark" variant="dark">
            <div className="container">
            <Navbar.Brand href="#home">
            <img src={logo} style={{maxWidth:"30px",maxHeight:"30px"}}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link>Movie Maker</Nav.Link>
               
                 
                </Nav>
                <Nav>
                    <Nav.Link>Add Movies</Nav.Link>
                    
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <button className="btn btn-outline-light">Search</button>
                    </Form>
                </Nav>
            </Navbar.Collapse>
            </div>
        </Navbar>
    )
}
