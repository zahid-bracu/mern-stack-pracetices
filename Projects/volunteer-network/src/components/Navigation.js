
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import './style.css'
import {
    BrowserRouter as Router,
    Switch,
    useLocation,
    Link
  } from "react-router-dom";
import logo from './logos/logo.png'
const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <div className="container">
        <NavbarBrand href="/">
            <img src={logo} style={{maxWidth:"140px"}} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            
            
            <NavItem>
            <NavLink>
              <Link className="nav-custom" to="/">Home</Link>
              </NavLink>
            </NavItem>

            <NavItem>
            <NavLink>
              <Link className="nav-custom" to="/donation">Donation</Link>
              </NavLink>
            </NavItem>


            <NavItem>
            <NavLink>
              <Link className="nav-custom" to="/events">Events</Link>
              </NavLink>
            </NavItem>


            <NavItem>
            <NavLink>
              <Link className="nav-custom" to="/login">Login</Link>
              </NavLink>
            </NavItem>


            <NavItem>
            <NavLink>
              <Link className="nav-custom" to="/addevent">Add Event</Link>
              </NavLink>
            </NavItem>

            


            <NavItem>
              <NavLink className="nav-custom" target="_blank" href="https://github.com/zahid-bracu">GitHub</NavLink>
            </NavItem>

            <NavLink>
              <Link to="/register">
              <button style={{width:"80px"}} className="btn btn-primary btn-sm  ">Register</button>
              </Link>
              
              </NavLink> 
              
              <NavLink>
              <button style={{width:"70px"}} className="btn btn-secondary btn-sm">Admin</button>
              </NavLink>
            
             
          </Nav>
 
          
        </Collapse>
        </div>
      </Navbar>
    </div>
  );
}

 
export default Navigation;