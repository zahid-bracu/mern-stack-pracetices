import React, {useState,useContext} from 'react';
import {UserContext} from '../App';
import { Nav, Navbar} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Navigation = () => {
    const [user,setUser]=useContext(UserContext);
    return (
        <>
            <Navbar bg="white" expand="lg">
                <div className="container">
                    <Navbar.Brand >
                        <Link style={{textDecoration:"inherit",color:"black"}} to="/">
                        Address Book
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link >
                            <Link style={{textDecoration:"inherit",color:"black"}} to="/home">Home</Link>

                        </Nav.Link>

                        {
                            user.flag &&
                            <>
                            <Nav.Link  >
                                <Link style={{textDecoration:"inherit",color:"black"}} to="/contact">
                                Contacts
                                </Link>
                            </Nav.Link>

                            <Nav.Link  >
                                <Link style={{textDecoration:"inherit",color:"black"}} to="/form">
                                Add New Contacts
                                </Link>
                            </Nav.Link>
                            </>
                        }
                         {
                             !user.flag && <Nav.Link  >
                             <Link style={{textDecoration:"inherit",color:"black"}} to="/login">
                             Login
                             </Link>
                            </Nav.Link>
                         }

                        {
                             user.flag && <Nav.Link  >
                             <Link style={{textDecoration:"inherit",color:"black"}} to="/login">
                             Account & Signout
                             </Link>
                            </Nav.Link>
                         }
                        
                        </Nav>
                    </Navbar.Collapse> 
                </div>
            </Navbar>
        </>
    );
};

export default Navigation;