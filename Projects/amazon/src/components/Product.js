import React  from 'react';
import { Button, Card } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
import './style.css';
const Product = (props) => {
     
    const { img, name, seller, description,price, stock,key } = props.data;
    
    
    return (
        
        <Card className="m-2 card-custom"  >
                <Card.Img className="no-underline" variant="top" src={img} />
                    <Card.Body>
                         
                        <h6>
                            
                            {name}
                            
                            
                        </h6>
                       
                            {description}
                        {/* <p>Price : {price}$</p> */}
                        <small className="text-secondary">updated 3 minutes ago</small>
                        <h4  className="no-underline">${price}</h4>
                        
                        {/* <Button variant="warning" onClick={()=>props.addProduct(props.data)}>Add to Cart</Button> */}
                        <button className="btn btn-custom-product" onClick={()=>props.addProduct(props.data)}>Add to Cart</button>

                        <Link to={"/product/"+key}>
                            <button className="btn btn-custom-view">View Details</button>    
                        </Link>
                        
                    </Card.Body>
            </Card>
             
    );

}
export default Product;