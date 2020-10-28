import React, { useState, useContext } from 'react';
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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../App';
import {UserContext} from '../App';
import './style.css';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [user,setUser]=useContext(UserContext);

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

        <Nav className="mr-auto">
            <NavItem>
              <h4 className="text-center">Burj Al Arab</h4>
          
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
          <NavItem>
              <NavLink> <Link className="custom-font" to="/home">Home</Link> </NavLink>
            </NavItem>

            <NavItem>
              <NavLink  > <Link className="custom-font" to="/room">Room</Link> </NavLink>
            </NavItem>

            {
              !user.state && <NavItem>
                              <NavLink  > <Link className="custom-font" to="/login">Login</Link> </NavLink>
                            </NavItem>
            }

            {
              user.state && <NavItem>
                              <NavLink className="nav-item"  ><Link className="custom-font" to="/login">Logout</Link></NavLink>
                            </NavItem>
            }



            
            




            <NavItem>
              <NavLink className="nav-item"  >
                <Link className="custom-font" to="/booking">Booking List</Link>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink className="nav-item" target="_blank" href="https://portfolio-zahid-bracu.netlify.app/">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-item" target="_blank" href="https://github.com/zahid-bracu">GitHub</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-item"  >
                  <Link className="custom-font" >{user.name}</Link>
              </NavLink>
            </NavItem>
          </Nav>

          

           
           
        </Collapse>
        </div>
      </Navbar>
    </>
  );
}

export default Header;