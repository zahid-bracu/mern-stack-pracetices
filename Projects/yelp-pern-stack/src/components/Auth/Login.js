import React, {useState} from 'react';
import { Button,  Form } from 'react-bootstrap';
export default function Login() {
    const [userInfo,setUserInfo]=useState({
        email:"",
        password:""
    })
    const changeFunc=(e)=>{
        var temp={...userInfo};
        temp[e.target.name]=e.target.value;
        setUserInfo(temp);
    }
    console.log(userInfo);
    return (
        <div className="container">
            <h4 className="text-center text-primary">Login</h4>
            <Form >
                <Form.Group controlId="Email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={changeFunc} type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="Password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={changeFunc} type="password" name="password" placeholder="Enter Password" />
                </Form.Group>

                <Button variant="primary" value="submit" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}
