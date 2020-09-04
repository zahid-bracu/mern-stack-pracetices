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

    function checkOut(){
        if(total>0){
            document.getElementById('checking').style.display="none";
            document.getElementById('msg').style.display="block";
        }
        
    }

    return(
        <Card  className="my-4" style={{position:'sticky',top:'0',width: 'auto',border:'none' }}>
            <Card.Body id="checking">
                <Card.Title>Cart</Card.Title>
                <p>Total Courses: {props.cart.length}</p>
                <p>Total Price: {total}</p>
                <Button onClick={(event) => {checkOut(event)}} variant="danger" size="sm">Check Out</Button>
            </Card.Body>

            <Card.Body id="msg" style={{display:"none"}}>
                <h3 className="text-center">Checked Out Successfully</h3>
            </Card.Body>
        </Card>

    )
}

export default Cart;