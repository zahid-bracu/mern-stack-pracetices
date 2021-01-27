import React from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
            <div className="container">
                <Navbar.Brand href="#home">Rest Countries</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        
                    <Nav.Link href="#home">
                       <Link to="/home">Home</Link>
                    </Nav.Link>

                    <Nav.Link href="#home">
                       <Link to="/countries">Countries</Link>
                    </Nav.Link>


                    <Nav.Link target="_blank" href="https://restcountries.eu/rest/v2/all">API</Nav.Link>
                    <Nav.Link target="_blank" href="https://github.com/zahid-bracu">Github</Nav.Link>

                    <Nav.Link target="_blank" href="https://portfolio-zahid-bracu.netlify.app/">Portfolio</Nav.Link>
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