//rsc
 
import React, { useEffect, useState } from 'react';
//import image from upper folder
 
//import css file
import './header.css';
import fakeData from '../../fakeData';
import { Button,Nav,Form,FormControl,Navbar } from 'react-bootstrap';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { faShoppingCart,faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Login from '../Login';
import Registration from '../Registration';

import { Route, Link } from "react-router-dom";

//snippet
const Header = () => {
    const [cart,setCart]=useState([]);

    setInterval(()=>{
        
        const savedCart=getDatabaseCart();
        const productkeys=Object.keys(savedCart);
        

        const cartProducts=productkeys.map(key =>{
            const product=fakeData.find(pd=>pd.key===key);
            product.count=savedCart[key];
            return product;
        },100)
        setCart(cartProducts);
        
    },[])
    
    var counts=0;
    cart.forEach(pd=>{
        counts+=pd.count;
    })
    

    const imgURL="https://i.ibb.co/j6Ls0F8/5f6cb2d88d716.png";
    return (
        //import class from css file


            <Navbar expand="lg" className="sticky-top navbar navbar-expand-lg" bg="dark" style={{textDecoration:"none",color:"white"}} variant="text-white font-weight-bold">
                
                <Navbar.Brand href="#home"><img style={{maxWidth:"80px"}} src={imgURL}/></Navbar.Brand>
                <Navbar.Toggle className="text-white"><FontAwesomeIcon icon={faAlignJustify} /></Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                            <Link to="/home">Home</Link>
                            <Link to="/shop">Shop</Link>
                            <Nav.Link target="_blank" href="https://portfolio-zahid-bracu.netlify.app/">  Developer's Portfolio</Nav.Link>
                            <Nav.Link target="_blank" href="https://github.com/zahid-bracu">Github</Nav.Link>
                            <Nav.Link > <Login></Login> </Nav.Link>
                            <Nav.Link > <Registration></Registration> </Nav.Link>
                            <Link to="/review">Order Review</Link> 
                            </Nav>
                            <Nav className="ml-auto mr-5 d-flex">
                                <Nav.Link href="/review">
                                    
                                <FontAwesomeIcon icon={faShoppingCart} /> <span style={{position:"relative",bottom:"0px",left:"7px"}}>{counts}</span>
                                </Nav.Link>
                            </Nav>
                    </Navbar.Collapse>
                </Navbar>
    );
};

export default Header;
