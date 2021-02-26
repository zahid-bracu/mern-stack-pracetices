import React from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import {
    BrowserRouter as Router,
 
    Link
  } from "react-router-dom";
import './style.css';
const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
            <div className="container">
                <Navbar.Brand >Rest Countries</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        
                    <Nav.Link >
                       <Link className="custom-nav" to="/home">Home</Link>
                    </Nav.Link>

                    <Nav.Link >
                       <Link className="custom-nav" to="/countries">Countries</Link>
                    </Nav.Link>

                    <Nav.Link >
                       <Link className="custom-nav" to="/addedCountries">Added Countries</Link>
                    </Nav.Link>


                    <Nav.Link  className="custom-nav" target="_blank" href="https://restcountries.eu/rest/v2/all">Api Data</Nav.Link>
                    <Nav.Link  className="custom-nav" target="_blank" href="https://github.com/zahid-bracu">Github</Nav.Link>

                    <Nav.Link  className="custom-nav" target="_blank" href="https://portfolio-zahid-bracu.netlify.app/">Portfolio</Nav.Link>
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

export default Navigation;