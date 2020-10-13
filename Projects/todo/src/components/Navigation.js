import React from 'react';
import { Nav,Navbar,Form,NavDropdown,FormControl,Button } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar bg="light" className="bg-transparent" expand="lg">
            <Navbar.Brand className="text-secondary" style={{fontWeight:"700"}} href="#home">
                <img src="https://i.ibb.co/y8cTxT0/kisspng-task-manager-task-management-action-item-tasks-together-5b4239324dec02-322892751531066674319.png" style={{width:"30px"}} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link  className="text-secondary" style={{fontWeight:"700"}} href="">Home</Nav.Link>
                <Nav.Link  className="text-secondary" style={{fontWeight:"700"}} href="https://portfolio-zahid-bracu.netlify.app/">Developer's Portfolio</Nav.Link>
                <Nav.Link  className="text-secondary"style={{fontWeight:"700"}} href="https://github.com/zahid-bracu">Developer's Github</Nav.Link>
                 
                </Nav>

                <Nav className="ml-auto">
                <Nav.Link  className="text-secondary"style={{fontWeight:"700"}} href="https://www.facebook.com/zahidur">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
    );
};

export default Navigation;