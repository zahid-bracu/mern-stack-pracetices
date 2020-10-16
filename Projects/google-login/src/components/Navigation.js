import React from 'react';
import { Button, Nav, Form, FormControl, Navbar } from 'react-bootstrap';


const Navigation = () => {
    const logo="https://i.ibb.co/H2ytkTL/kisspng-google-logo-business-microsoft-windows-operating-system-5b5cb99edbaff2-003672981532803486899.png"
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home"> <img src={logo} style={{width:"45px"}}/> </Navbar.Brand>

            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home" active>Home</Nav.Link>
                <Nav.Link href="https://portfolio-zahid-bracu.netlify.app/" active>Portfolio</Nav.Link>
                <Nav.Link href="https://github.com/zahid-bracu" active>Github</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            
        </Navbar>
    );
};

export default Navigation;