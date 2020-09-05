import React from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';

const NavBar = () => {
    var imgUrl=""
    return (
        <div>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">BBC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#news">News</Nav.Link>
            <Nav.Link href="#sports">Sports</Nav.Link>
            <Nav.Link href="#reel">Reel</Nav.Link>

            <Nav.Link href="#work">Worklife</Nav.Link>
            <Nav.Link href="#travel">Travel</Nav.Link>
            <Nav.Link href="#Future">Future</Nav.Link>
            <Nav.Link href="#culture">Culture</Nav.Link>
            
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
        </div>
    );
};

export default NavBar;