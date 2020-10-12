import React from 'react';
import { Navbar } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar bg="default" expand="lg">
            <div className="container">
                <Navbar.Brand href="#home">12:40PM</Navbar.Brand>
                <Navbar.Brand className="float-right" href="#home">Sunday</Navbar.Brand>     
            </div>
        </Navbar>
    );
};

export default Navigation;