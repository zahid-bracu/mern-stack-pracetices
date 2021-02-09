
import React, {useState,useContext,useEffect} from 'react';
import {CartContext} from '../App';
import { Button, Nav, Navbar,NavDropdown,Form,FormControl } from 'react-bootstrap';
import logo from './images/logo.png'
import {
    Link,
    useHistory
  } from "react-router-dom";
import {UserContext} from '../App';
import Cart from './Cart';
import { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart, processOrder } from './databaseManager';
import fakeData from './fakeData';
import './style.css';

const Navigation = () => {
    const [user,setUser]=useContext(UserContext);
    const [cart,setCart]=useContext(CartContext);
    const [data,setData]=useState([]);
     


    useEffect(() => {
        var savedCart=getDatabaseCart();
        const productKeys=Object.keys(savedCart);

        
        const cartProducts=productKeys.map(key=>{
            const product=fakeData.find(pd=> pd.key===key);
            product.quantiy=savedCart[key];
            return product;
        })

        console.log(cartProducts);
        setData(cartProducts);
      },[]);


      console.log(data);


    return (
        
            <Navbar bg="dark"  expand="lg">
                <div className="container">
                <Navbar.Brand > 
                    <img src={logo} style={{width:"100px"}}/>    
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse  id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        
                        <Nav.Link className="link-nav">
                            <Link className="link-nav" to="/banner">
                            Home
                            </Link>
                        </Nav.Link>


                        <Nav.Link className="link-nav">
                            <Link className="link-nav" to="/shop">
                            Products
                            </Link>
                        </Nav.Link>


                         
                        <Nav.Link className="link-nav" >
                            <Link className="link-nav" to="/cart">
                                Cart
                            </Link>
                        </Nav.Link>
                    
                        


                        <Nav.Link className="link-nav">
                            <Link className="link-nav" to="/orderreview">
                            Order Review
                            </Link>
                        </Nav.Link>


                        <Nav.Link className="link-nav">
                            <Link className="link-nav" to="/inventory">
                            Inventory
                            </Link>
                        </Nav.Link>
                    
                   
                     
                    <Nav.Link className="link-nav">
                    <Link className="link-nav" to="/contact">
                        Contact Us
                        </Link>
                    </Nav.Link>

                    
                    
                    


                    </Nav>

                    <Nav className="ml-auto">
                    <Nav.Link className="link-nav">
                        <Link className="link-nav" to="/login">
                            Login
                        </Link> 
                    </Nav.Link>

                    <Nav.Link className="link-nav">
                            <Link className="link-nav" to="/register">
                                <button className="btn btn-warning btn-sm text-dark font-weight-bold">Register</button>
                            </Link>
                    </Nav.Link>
                    

                    </Nav>
                     
                </Navbar.Collapse>
                </div>
            </Navbar>
    
    );
};

export default Navigation;