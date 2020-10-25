import React, {useState} from 'react';
import { Button,  Form } from 'react-bootstrap';
const Forms = () => {
    const [flag,setFlag]=useState(false);


    return (
        <>

        
        <Form className="mx-auto mt-5" style={{width:"25rem"}}>

            {
                !flag && <h5>Sign In</h5>
            }

            {
                flag && <h5>Sign Up</h5>
            }

            <Form.Group controlId="formBasicCheckbox">
                <Form.Check onChange={()=>{
                    setFlag(!flag)
                }} type="checkbox" label="New User?" />
            </Form.Group>


            {
                flag && <Form.Group controlId="Name">
                <Form.Label>Full Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Enter Full Name" />
            </Form.Group>
            }
            
            
            
            <Form.Group controlId="Email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter Email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </>
    );
};

export default Forms;