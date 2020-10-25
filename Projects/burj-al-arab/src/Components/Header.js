import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 
} from 'reactstrap';
import './style.css';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const imgUrl="https://i.ibb.co/yYD42d7/pngegg-1.png";
  return (
    <>
      <Navbar color="dark" dark expand="md">
        <div className="container">
        <NavbarBrand href="/">
            <img src={imgUrl} style={{width:"50px"}} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="nav-item" href=" ">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-item" href=" ">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-item" href=" ">Logout</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-item" href=" ">Booking List</NavLink>
            </NavItem>
            
          </Nav>

          <Nav className="mx-auto">
            <NavItem>
              <h4 className="text-center">Burj Al Arab</h4>
            </NavItem>
          </Nav>

          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="nav-item" target="_blank" href="https://portfolio-zahid-bracu.netlify.app/">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-item" target="_blank" href="https://github.com/zahid-bracu">GitHub</NavLink>
            </NavItem>
          </Nav>
           
        </Collapse>
        </div>
      </Navbar>
    </>
  );
}

export default Header;