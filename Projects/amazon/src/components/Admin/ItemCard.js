import React from 'react'
import { Button, Card } from 'react-bootstrap';
import './style.css';
export default function ItemCard(props) {
    
    return (
        <Card className="mx-1 item-card" style={{ maxWidth: '15rem' }}>
        <Card.Img variant="top" style={{maxWidth:"95%"}} src={props.details.img}   />
        <Card.Body>
            <h6> {props.details.name}</h6>
            <Card.Text>
            <strong>Item Count</strong> : <span class="badge badge-danger">{props.details.count}</span> 
            <br/>
            <strong>Product Key</strong> : <span class="badge badge-success">{props.details.key}</span> 

            </Card.Text>
            
        </Card.Body>
        </Card>
    )
}
