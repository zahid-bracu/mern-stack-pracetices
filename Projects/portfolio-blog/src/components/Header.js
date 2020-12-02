import React from 'react';
import { Button, Navbar, Nav, NavDropdown, FormControl, Form } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DataStructure from './DataStructure';
import Java from './Java';
const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
        <div className="container">
        <Navbar.Brand href="#home">Muhammad Zahidur Rahman's Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link >
              <Link style={{textDecoration:"inherit",color:"black"}} to="/">
                Home
              </Link>
            </Nav.Link>
             
            
            {/* Drop down */}
            <NavDropdown title="Design" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
              
              <Nav.Link >
                <Link style={{textDecoration:"inherit",color:"black"}}  className="dropdown-item" to="/uiux">
                  UX & UI Topics
                </Link>
              </Nav.Link>

               

              <Nav.Link >
                <Link style={{textDecoration:"inherit",color:"black"}}  className="dropdown-item" to="/uiuxtools">
                  UI & UX Tools
                </Link>
              </Nav.Link>
              <NavDropdown.Divider />
              <NavDropdown.Item >Separated link</NavDropdown.Item>
            </NavDropdown>


            {/* Drop down 2 */}
            <NavDropdown title="Programming" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
              
              <Nav.Link >
              <Link style={{textDecoration:"inherit",color:"black"}}  className="dropdown-item" to="/java">
                  Java Programming
                </Link>
                </Nav.Link>

                <Nav.Link>
                  <Link style={{textDecoration:"inherit",color:"black"}} className="dropdown-item"  to="/ds">
                    Data Structure
                  </Link>
                </Nav.Link>


                <Nav.Link>
                  <Link style={{textDecoration:"inherit",color:"black"}} className="dropdown-item"  to="/algo">
                    Algorithm
                  </Link>
                </Nav.Link>


              <NavDropdown.Divider />
              <NavDropdown.Item >Separated link</NavDropdown.Item>
            </NavDropdown>


          </Nav>

          <Nav className="ml-auto">
          <Nav.Link href="https://github.com/zahid-bracu" target="_blank">
               Github
            </Nav.Link>



            <Nav.Link href="https://portfolio-zahid-bracu.netlify.app/" target="_blank">
               Portfolio
            </Nav.Link>
          </Nav>


          
        </Navbar.Collapse>
        </div>
      </Navbar>
    );
};

export default Header;