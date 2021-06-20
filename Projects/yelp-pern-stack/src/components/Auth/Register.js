import React, {useState} from 'react';
import { Button,  Form } from 'react-bootstrap';
export default function Register() {
    const [registerInfo,setRegisterInfo]=useState({
        name:"",
        email:"",
        password:"",
        cpassword:""
    })

    const changeFunc=(e)=>{
        var temp={...registerInfo};
        temp[e.target.name]=e.target.value;
        setRegisterInfo(temp);
    }
    console.log(registerInfo);
    return (
        <div className="container">
            <h4 className="text-center text-success">Register as a new member</h4>
            <Form >
                <Form.Group controlId="Name">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" onBlur={changeFunc} name="name" placeholder="Enter Full Name" />
                </Form.Group>

                <Form.Group controlId="Email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" onBlur={changeFunc} name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="Password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onBlur={changeFunc} name="password" placeholder="Enter Password" />
                </Form.Group>


                <Form.Group controlId="ConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" onBlur={changeFunc} name="cpassword" placeholder="Confirm Password" />
                </Form.Group>

                 

                <button className="btn btn-success " value="submit" type="submit">
                    Submit
                </button>
            </Form>
        </div>
    )
}
