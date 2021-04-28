import React, {useEffect, useState, useContext} from 'react';
import { Form, Button } from 'react-bootstrap';
import './style.css';
import {
    BrowserRouter as Router,
     
    useHistory
  } from "react-router-dom";
import {UserInfoContext, UserContext} from '../App';
import {getDatabaseCart, processOrder} from './databaseManager';

const CardNumber = () => {   
    const [UserInfo, setUserInfo]=useContext(UserInfoContext)
     
    const [address, setAddress]=useState({});
    const [user,setUser]=useContext(UserContext)

    function changeFunc(e) {
        var cart=getDatabaseCart();      
        var infos={...UserInfo, savedCart:cart, mail:user};
        infos[e.target.name]=e.target.value;
        setUserInfo(infos);
    }


    let history = useHistory();
    function submitFunc(e) {
        e.preventDefault();

        fetch('http://localhost:3060/orderProducts',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(UserInfo)
        }).then(res=>res.json).then(data=>{
            
            processOrder();
            var infos={
                name:"",
                business:"",
                flat:"",
                house:"",
                road:"",
                city:"",
                phone:"",
                card:"",
                mail:"",
                savedCart:""
            };
            setUserInfo(infos);
        })
       
        history.push('/confirm')
    }

    console.log(UserInfo)

    return (
                    <div>
                        <Form onSubmit={submitFunc} className="form-check-out custom-form-card d-block mx-auto">
                            <h3 className="my-3 text-center text-danger">Credit Card Number</h3>
                            <Form.Group id="card-number">
                                <Form.Control className="d-block mx-auto" style={{width:"90%",maxWidth:"500px"}} onBlur={changeFunc} defaultValue={UserInfo.card} type="number" id="card-number" name="card" placeholder="Enter Credit Card Number"    required/>
                                <p className="text-danger" id="card-error" style={{display:"none"}}>Card Number Invalid</p>
                            </Form.Group>
                            <button className="d-block mx-auto btn btn-warning font-weight-bold">Pay</button>
                        </Form>
                    </div>
    );
};

export default CardNumber;