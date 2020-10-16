import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './style.css';

const Display = (props) => {
    const {name,photo,email,creates,lastOnline}=props.info;
    return (
        <Card className="" style={{ width: '28rem', padding:"15px 20px" }}>
        <Card.Img variant="top" src={photo} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                <h5>{email}</h5>
            
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem> <h5>Creation Time : </h5> {creates} </ListGroupItem>
            <ListGroupItem> <h5>Last Online : </h5> {lastOnline} </ListGroupItem>
             
        </ListGroup>
        <Card.Body className="text-center">
            <Card.Link href="https://portfolio-zahid-bracu.netlify.app/">Portfolio</Card.Link>
            <Card.Link href="https://github.com/zahid-bracu">Github</Card.Link>
        </Card.Body>
        <Button className="btn btn-lg btn-danger btn-signout" onClick={()=>props.signOut()}>Sign Out</Button>
        </Card>
    );
};

export default Display;