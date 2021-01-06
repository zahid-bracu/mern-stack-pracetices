import React from 'react';
import './style.css';
import { Button,Form,FormGroup,Label,Input } from 'reactstrap';
const Register = () => {
    return (
        <div className="container">
           
            <div className="register-box mx-auto">
            <Form>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" name="name" id="name" placeholder="Enter Name" />
                </FormGroup>

                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="Enter Email" />
                </FormGroup>


                <FormGroup>
                    <Label for="exampleDate">Date</Label>
                    <Input
                    type="date"
                    name="date"
                    id="exampleDate"
                    placeholder="Enter Date"
                    />
                </FormGroup>



                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input type="text" name="description" id="description" placeholder="Enter Description" />
                </FormGroup>


                <FormGroup>
                    <Label for="organize">Organize</Label>
                    <Input type="text" name="Organize" id="Organize" placeholder="Organize Books at Library" />
                </FormGroup>

                <button className="btn btn-primary btn-custom-2">Registration</button>
            </Form>
            </div>
        </div>
    );
};

export default Register;