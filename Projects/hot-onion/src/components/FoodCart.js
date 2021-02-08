import React from 'react';
import {  Card, Button } from 'react-bootstrap';
import './style.css';
import {Link} from 'react-router-dom';
const FoodCart = (props) => {
     
    
    const {fullDescription,name,price,shortDescription,type,id}=props.info;
    return (
        <>
            <Link className="card-link" to={`/foodDetails/${id}`}>
                <Card className="card mx-2" style={{ width: '18rem'}}>
                <Card.Img variant="top" style={{width:"14rem",margin:"auto"}} src={props.info.images[0]} />
                <Card.Body>
                    <Card.Title className="text-center card-name">{name}</Card.Title>
                    <p className="text-center card-description">{shortDescription}</p>
                    <Card.Text>
                    <h5 className="text-center card-price">${price}</h5>
                    </Card.Text>
                    
                </Card.Body>
                </Card>
            </Link>
        </>
    );
};

export default FoodCart;