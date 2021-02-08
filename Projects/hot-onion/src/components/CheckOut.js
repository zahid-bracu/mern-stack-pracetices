import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './style.css';
const CheckOut = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-7 col-md-12 col-sm-12 col-12 mt-4">

                    <h3 className="">Set Delivery Details</h3>
                        <hr style={{maxWidth:"500px"}}/>
                        <Form className="form-check-out">
                    
                            <Form.Group controlId="name">
                                <Form.Control type="text" id="name" placeholder="Name" />
                            </Form.Group>

                            <Form.Group controlId="business">
                                <Form.Control type="text" id="business" placeholder="Business Name" />
                            </Form.Group>

                            <Form.Group controlId="flat">
                                <Form.Control type="text" id="flat" placeholder="Flat No." />
                            </Form.Group>


                            <Form.Group controlId="house">
                                <Form.Control type="text" id="house" placeholder="House No." />
                            </Form.Group>


                            <Form.Group controlId="road">
                                <Form.Control type="text" id="road" placeholder="Road No." />
                            </Form.Group>


                            <Form.Group controlId="city">
                                <Form.Control type="text" id="city" placeholder="City" />
                            </Form.Group>

                            
                            
                            <button className="btn-check-out btn btn-danger" type="submit">
                                Submit
                            </button>
                        </Form>

                </div>

                <div className="col-lg-5  col-md-12 col-sm-12 col-12 mt-4">
                    <div>
                        <h4> From <strong className="text-danger">Red Onion Foods Restaurant</strong></h4>
                        <h5>Arriving in 10-20 min</h5>
                        <h6>House no. 105, Road no. 11-B</h6>
                        <h6>Aqua</h6>
                        <h6>Mymensingh</h6>
                    </div>
                    <div style={{maxWidth:"250px"}} className="mt-5">
                        <p className="d-flex justify-content-between"><span>Sub Total . 0 Item</span> <span>$0.00</span></p>
                        <p className="d-flex justify-content-between"><span>Tax</span> <span>$0.00</span></p>
                        <p className="d-flex justify-content-between"><span>Delivery Fee</span> <span>$0.00</span></p>
                        <hr/>
                        <h5 className="d-flex justify-content-between"><span>Total</span> <span>$0.00</span></h5>
                        <button className="btn btn-success mt-4">Proceed to CheckOut</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;