import React from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';

const NavBar = () => {
    var imgUrl="https://i.ibb.co/b5FKMg5/pngfuel-com.jpg";
    return (
        <div>
          <Navbar bg="light" expand="lg" className="fixed-top">
          <Navbar.Brand href="#home"><img src={imgUrl} style={{width:"100px"}}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home" active>Home</Nav.Link>
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