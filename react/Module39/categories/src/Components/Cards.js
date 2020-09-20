import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
  } from 'react-bootstrap';
import './style.css';
const Cards = (props) => {
    const {img,name,price}=props.item;

    return (
        <Card style={{ width: '20rem', border:"none" }} className="m-3 cardBox">
        <Card.Img variant="top" className="w-50 mx-auto mt-5" src={img} />
        <Card.Body>
        <p>{name}</p>
        <h5>Price: <span className="text-danger">{price} USD</span></h5>
            <Button variant="danger">Buy Now</Button>
            <Button variant="info" className="ml-2">See Info</Button>
        </Card.Body>
        </Card>
    );
};

export default Cards;