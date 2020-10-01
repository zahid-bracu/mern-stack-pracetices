import React from 'react';
// import css file
import './products.css';
// import font awesome library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import font awesome library font
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

  import { Button,Nav,Form,FormControl,Navbar,Card, Badge } from 'react-bootstrap';

const Products = (props) => {
    // using destructure from passed object through props
    const { img, name, seller, price, stock,key } = props.products;
    return (
        <Card className="col-lg-3 col-md-5 col-sm-10 col-12 mx-1 my-1" style={{width:"150px"  }}>
        <Card.Img variant="top" className="m-auto pt-3" style={{width:"50%"}} src={img} />
        <Card.Body>
            <Card.Title ><Link style={{ color: 'inherit', textDecoration: 'inherit',color:"#0065f2"}} to={"/product/"+key}>{name}</Link></Card.Title>
            <Card.Text>
                        <h6>By <span className="text-success">{seller}</span> </h6>
                        <h5 >Price: <Badge pill variant="danger">{price}$</Badge>   </h5>
                        <p className="font-weight-bold">only {stock} left in stock - order soon</p>
            </Card.Text>
            <button style={{position:"relative",bottom:"10px"}} onClick={()=> props.addCart(props.products)} className="btn btn-warning" style={{color:"black"}}><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
        </Card.Body>
        </Card>

        
    );
};

export default Products;