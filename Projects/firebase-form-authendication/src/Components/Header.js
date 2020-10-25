import React from 'react';
import { Button, Nav, Navbar, NavDropdown, Form, FormControl } from 'react-bootstrap';
const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
        <div className="container">
        <Navbar.Brand href="#home">Firebase Form</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>
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