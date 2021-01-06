import React from 'react';
import { Button, Card } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
const ProductOrdered = (props) => {

    const { img, name, seller, description,price, stock,key } = props.datas;
    console.log(props.datas)
    
    return (
        <div>
            <Card className="m-2" style={{ maxWidth: '18rem', minHeight:"25px"}}>
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
                        <Button variant="danger" onClick={()=>props.addProduct(props.data)}>Remove</Button>
                    </Card.Body>
            </Card>
        </div>
    );
};

export default ProductOrdered;