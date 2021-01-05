import React, { useState,useContext } from 'react';
import { Form } from 'react-bootstrap';
import {
    Link,
    useHistory
  } from "react-router-dom";


const ShippingAddress = () => {

    function saveData(event){
        event.preventDefault();
    }

    return (
        <div className="container">
            <h5 className="text-center mt-5">Add new contact</h5>
            <Form onSubmit={saveData} style={{maxWidth:"400px"}} className="d-block mx-auto">
                <Form.Group controlId="name">
                    <Form.Label>Contact Name : </Form.Label>
                    <Form.Control type="name" id="name" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group controlId="number">
                    <Form.Label>Contact Number: </Form.Label>
                    <Form.Control type="number" id="number" placeholder="Enter Number" />
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Contact Email: </Form.Label>
                    <Form.Control type="email" id="email" placeholder="Enter Email" />
                </Form.Group>
             
            
                <Form.Group controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control as="textarea" id="address" rows={4} />
                </Form.Group>
                <button className="btn btn-primary">Continue</button>
            </Form>
        </div>
    );
};

export default ShippingAddress;