import React, {useState,useContext} from 'react';
import {UserContext} from '../App';
import { Nav, Navbar, FormControl, Form, Button} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './style.css';
import me from './image/me.jpg'
const Navigation = () => {
    const [user,setUser]=useContext(UserContext);
    return (
        <>
        <div>
        <Navbar bg="light" expand="lg">
       <div className="container">
       <Navbar.Brand href="#home">
            <img src='https://visualpharm.com/assets/319/Male%20User-595b40b65ba036ed117d3de6.svg' className="img-me" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav  >
             
            
            </Nav>
            <Form className="mx-auto" inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2 form-sm" />
            <Button id="no-shadow" className="btn btn-custom-two btn-sm">Search</Button>
            </Form>

            <Nav  >
            <Nav.Link href="#home"><h5 style={{color:"#4f4f4f"}}>Call : +8801612318884</h5></Nav.Link>
            
            </Nav>
        </Navbar.Collapse>
       </div>
        </Navbar>
        </div>
            <Navbar className=" sticky-top bg-custom"  expand="lg">
                <div className="container">
                     
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
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

                         
                        
                        </Nav>

                        <Nav className="ml-auto">
                        {
                             !user.flag && 
                             <Nav.Link   >
                             <Link   style={{textDecoration:"inherit",color:"black"}} to="/login">
                             <button className="btn btn-custom-two btn-sm">Login</button>
                             </Link>
                            </Nav.Link>
                         }
                         
                        {
                             user.flag && <Nav.Link>
                             <button className="btn btn-custom btn-sm">
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