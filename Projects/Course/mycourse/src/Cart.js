import React from "react";
import {
    Card,
    Button
  } from "react-bootstrap";


  
function Cart(props){
    
    var total=0;
    for(let i=0;i<props.cart.length;i++){
        total+=props.cart[i].price;
    }
    return(
        <Card className="my-4" style={{position:'sticky',top:'0',width: 'auto',border:'none' }}>
            <Card.Body>
                <Card.Title>Cart</Card.Title>
                <p>Total Courses: {props.cart.length}</p>
                <p>Total Price: {total}</p>
                <Button variant="danger" size="sm">Check Out</Button>
            </Card.Body>
        </Card>
    )
}

export default Cart;