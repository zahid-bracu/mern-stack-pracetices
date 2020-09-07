//rsc
import React from 'react';
//import image from upper folder
import logo from '../../images/logo.png';
//import css file
import './header.css'

//snippet
const Header = () => {
    return (
        //import class from css file
        <div className="header">
            <img  src={logo}/> 
            <nav>
                <a href="/display">Home</a>
                <a href="/display">Shop</a>
                <a href="/customer_service">Customer Service</a>
                <a href="/deal">Today's Deal</a>
                <a href="/order">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;
