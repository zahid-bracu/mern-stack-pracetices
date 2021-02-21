import React, {useState,useContext} from 'react';
import {UserContext} from '../App';
import { Nav, Navbar} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './style.css';
import logo from './image/logo.png'
const Navigation = () => {
    const [user,setUser]=useContext(UserContext);
    return (
        <>
            <Navbar className=" sticky-top bg-custom"  expand="lg">
                <div className="container">
                    <Navbar.Brand >
                        <Link className="nav-custom" style={{textDecoration:"inherit",color:"black"}} to="/">
                        <img src={logo} style={{width:"45px"}}/>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <Nav.Link className="nav-custom" >
                            <Link className="nav-custom" style={{textDecoration:"inherit",color:"black"}} to="/home">Home</Link>

                        </Nav.Link>

                        {
                            user.flag &&
                            <>
                            <Nav.Link  className="nav-custom">
                                <Link className="nav-custom" style={{textDecoration:"inherit",color:"black"}} to="/contact">
                                Contacts
                                </Link>
                            </Nav.Link>

                            <Nav.Link  className="nav-custom">
                                <Link className="nav-custom" style={{textDecoration:"inherit",color:"black"}} to="/form">
                                Add New Contacts
                                </Link>
                            </Nav.Link>


                            <Nav.Link  className="nav-custom">
                                <Link className="nav-custom" style={{textDecoration:"inherit",color:"black"}} to="/login">
                                {user.name}
                                </Link>
                            </Nav.Link>
                            </>
                        }

                        <Nav.Link href="https://github.com/zahid-bracu" target="_blank" className="nav-custom" >
                            
                            Github
                        </Nav.Link>

                         {
                             !user.flag && 
                             <Nav.Link   >
                             <Link   style={{textDecoration:"inherit",color:"black"}} to="/login">
                             <button className="btn btn-danger btn-sm">Login</button>
                             </Link>
                            </Nav.Link>
                         }
                         
                        {
                             user.flag && <Nav.Link>
                             <button className="btn btn-danger btn-sm">
                             <Link   style={{textDecoration:"inherit",color:"white"}} to="/login">
                             Account & Signout
                             </Link>
                             </button>
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