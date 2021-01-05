import React  from 'react';
import { Button, Card } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

const Product = (props) => {
     
    const { img, name, seller, description,price, stock,key } = props.data;
    
    
    return (
        <Card className="m-2" style={{ maxWidth: '18rem' }}>
                <Card.Img variant="top" src={img} />
                    <Card.Body>
                         
                        <h6>
                            <Link to={"/product/"+key}>
                            {name}
                            </Link>
                            
                        </h6>
                        <Card.Text>
                        <p>Price : {price}$</p>
                        </Card.Text>
                        <Button variant="warning" onClick={()=>props.addProduct(props.data)}>Add to Cart</Button>
                    </Card.Body>
            </Card>
    );

}
export default Product;