import React, {useEffect, useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import './style.css';
import {addToDatabaseCart, getDatabaseCart} from './databaseManager';
import { useHistory } from "react-router-dom";
const Forms = () => {
    let history = useHistory();
    var [completed,setCompleted]=useState(false);
    var [form,setForm]=useState(false);
    var [flag,setFlag]=useState(false);
    const [UserInfo, setUserInfo]=useState({
        name:"",
        business:"",
        flat:"",
        house:"",
        road:"",
        city:"",
        phone:""
    });


    function changeFunc(e) {
        console.log(e.target.name + " : " + e.target.value);
        var infos={...UserInfo};
        infos[e.target.name]=e.target.value;
        setUserInfo(infos);
    }


    function submitFunc(e) {
        setForm(true);
        e.preventDefault();
        console.log(UserInfo);
        console.log(Object.keys(UserInfo).length)


        if(UserInfo.phone!="" && UserInfo.name!=""){
            document.getElementById('name-error').style.display="none";
            document.getElementById('phone-error').style.display="none";
            history.push('/card');
             
            setFlag(true)
        }else{
            if(UserInfo.name==""){
                document.getElementById('name-error').style.display="block"
            }
            if(UserInfo.name!=""){
                document.getElementById('name-error').style.display="none"
            }
            if(UserInfo.phone==""){
                document.getElementById('phone-error').style.display="block"
            }

            if(UserInfo.phone!=""){
                document.getElementById('phone-error').style.display="none"
            }
        }

    }


    return (
        <>   <div className="custom-form d-block mx-auto">
            <h4 className="text-center my-4 font-weight-bold text-dark">Set Delivery Details</h4>
                        
                        <Form onSubmit={submitFunc} className="form-check-out">
                    
                            <Form.Group id="name">
                                <Form.Control onBlur={changeFunc} type="text" name="name" id="name" placeholder="Name" />
                                <p className="text-danger" id="name-error" style={{display:"none"}}>Enter your name</p>
                            </Form.Group>
                            

                            <Form.Group id="business">
                                <Form.Control onBlur={changeFunc} type="text" id="business" name="business" placeholder="Business Name" />
                            </Form.Group>

                            <Form.Group id="flat">
                                <Form.Control onBlur={changeFunc} type="text" id="flat" name="flat" placeholder="Flat No." />
                            </Form.Group>


                            <Form.Group id="house">
                                <Form.Control onBlur={changeFunc} type="text" id="house" name="house" placeholder="House No." />
                            </Form.Group>


                            <Form.Group id="road">
                                <Form.Control onBlur={changeFunc} type="text" id="road" name="road" placeholder="Road No." />
                            </Form.Group>


                            <Form.Group id="city">
                                <Form.Control onBlur={changeFunc} type="text" id="city" name="city" placeholder="City" />
                            </Form.Group>

                            <Form.Group id="phone">
                                <Form.Control onBlur={changeFunc} type="number" id="phone" name="phone" placeholder="phone" />
                                <p className="text-danger" id="phone-error" style={{display:"none"}}>Enter your phone number</p>
                            </Form.Group>

                            
                            
                            <button     className="btn-check-out btn btn-warning font-weight-bold " type="submit">
                                Submit
                            </button>
                        </Form>
            </div></>
    );
};

export default Forms;