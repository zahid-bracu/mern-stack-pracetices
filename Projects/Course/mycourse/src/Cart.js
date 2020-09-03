import React from "react";
import {
    Card,
    Button
  } from "react-bootstrap";
  
function Cart(){
    return(
        <Card className="my-4" style={{ width: 'auto',border:'none' }}>
            <Card.Body>
                <Card.Title>Cart</Card.Title>
                <p>Total Courses:</p>
                <p>Total Price:</p>
                <Button variant="primary">Check Out</Button>
            </Card.Body>
        </Card>
    )
}

export default Cart;