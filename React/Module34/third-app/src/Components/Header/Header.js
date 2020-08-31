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
                <a>Home</a>
                <a>Shop</a>
                <a>Customer Service</a>
                <a>Today's Deal</a>
                <a>Order Review</a>
                <a>Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;
