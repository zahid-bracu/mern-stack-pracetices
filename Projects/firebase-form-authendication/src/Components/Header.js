import React, {useState,useContext} from 'react';
import { Button, Nav, Navbar, NavDropdown, Form, FormControl } from 'react-bootstrap';
import {information} from '../App';


const Header = () => {
    const [info,setInfo]=useContext(information);
    
    console.log(info);


    return (
        <Navbar bg="light" expand="lg">
        <div className="container">
        <Navbar.Brand href="#home">Firebase Form</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link target="_blank" href="https://portfolio-zahid-bracu.netlify.app/">Portfolio</Nav.Link>
            <Nav.Link target="_blank" href="https://github.com/zahid-bracu">Github</Nav.Link>
            {
                !info && <Nav.Link href="#link" active>Login</Nav.Link>
            }
            
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
        </div>
        </Navbar>
    );
};

export default Header;