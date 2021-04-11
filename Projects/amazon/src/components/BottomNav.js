import React from 'react'
import { Button, Nav, Navbar, NavDropdown, Form, FormControl } from 'react-bootstrap';
import './style.css';
import amazon_icon from './images/amazon_icon.jpg';
export default function TopNav() {
    return (
        <div>
            <Navbar bg="dark" expand="lg">
            <div className="container">
            <Navbar.Brand href="#home">
                <img src={amazon_icon} style={{width:"40px"}}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               
                <Nav className="mx-auto">
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-dark" className="no-shadow">Search</Button>
                </Form>
                </Nav>

                <Nav className="ml-auto">
                    <h5 className="common-text">+8801717783803</h5>
                </Nav>
            </Navbar.Collapse>
            </div>
            </Navbar>
        </div>
    )
}
