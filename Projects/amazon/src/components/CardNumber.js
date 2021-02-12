import React, {useEffect, useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import './style.css';
import {
    BrowserRouter as Router,
     
    useHistory
  } from "react-router-dom";
const CardNumber = () => {

    const [address, setAddress]=useState({});

    function changeFunc(e) {
        console.log(e.target.name + " : " + e.target.value);
        var infos={...address};
        infos[e.target.name]=e.target.value;
        setAddress(infos);
    }


    let history = useHistory();
    function submitFunc(e) {
        e.preventDefault();
        console.log(address.card_number);
        history.push('/confirm')
    }

     

    return (
                    <div>
                        <Form onSubmit={submitFunc} className="form-check-out custom-form-card d-block mx-auto">
                            <h3 className="my-3 text-center text-danger">Credit Card Number</h3>
                            <Form.Group id="card-number">
                                <Form.Control onBlur={changeFunc} type="number" id="card-number" name="card_number" placeholder="Enter Credit Card Number" />
                                <p className="text-danger" id="card-error" style={{display:"none"}}>Card Number Invalid</p>
                            </Form.Group>
                            <button className="btn btn-warning font-weight-bold">Pay</button>
                        </Form>
                    </div>
    );
};

export default CardNumber;