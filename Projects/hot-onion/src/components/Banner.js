import React from 'react';
import { Form } from 'react-bootstrap';
import './style.css';
const Banner = () => {
    return (
        <div className="banner">
            <div className="search-bar">
            <h1 className="text-center mb-3 banner-text">Best Food For Your Belly</h1>
            <Form.Control className="search-input" type="text" placeholder="Normal text">
            
            </Form.Control>
            <button className="btn btn-danger search-btn">Search</button>
            </div>
            
        </div>
    );
};

export default Banner;