import React, { useEffect, useState } from 'react';
import { Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './style.css';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';



const Header = ( ) => {
      

     
    const logo="https://i.ibb.co/mGXSkwn/sign.png";
    return (
        <div className="container">
            <Navbar bg="transparent" expand="lg">
            <Navbar.Brand  > 
                <Nav.Link>
                    <img src={logo} style={{width:"60px"}} alt=""/>    
                </Nav.Link>    
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                      
                      <Nav.Link   className="nav-item"  >About</Nav.Link>
                      <Nav.Link   className="nav-item"  >Skills</Nav.Link>     
                       <Nav.Link   className="nav-item"  >Education</Nav.Link>   
                       <Nav.Link   className="nav-item"  >Projects</Nav.Link>   
                       <Nav.Link   className="nav-item"  >Certifcation</Nav.Link>   
                      <Nav.Link   className="nav-item"  >Blog</Nav.Link>   
                      <Nav.Link   className="nav-item"  >Contact</Nav.Link>   
                    

                </Nav>
                 
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;