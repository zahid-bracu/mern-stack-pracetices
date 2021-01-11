import React from 'react';
import './style.css';
import { Button,Form,FormGroup,Label,Input } from 'reactstrap';
const Register = () => {


    function saveData(event){
        console.log("Ok");
        event.preventDefault();
        var name=document.getElementById('name').value;
        var date=document.getElementById('date').value;
        var mail=document.getElementById('email').value;
        var organize=document.getElementById('organize').value;
        var description=document.getElementById('description').value;

        //console.log(name+" : "+number+" : "+mail+" : "+address);
        var information={
            "name":name,
            "date":date,
            "mail":mail,
            "description":description,
            "organize":organize
        }

         console.log(information);


         fetch('http://localhost:3006/addPeople',{
               method:'POST',
               headers:{'Content-Type': 'application/json'},
               body:JSON.stringify(information)
           }).then(res=>res.json())
           .then(data=>{
               console.log(data);
           })
    }



    return (
        <div className="container">
           
            <div className="register-box mx-auto">
            <Form onSubmit={saveData}>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" name="name" id="name" placeholder="Enter Name" />
                </FormGroup>

                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="Enter Email" />
                </FormGroup>


                <FormGroup>
                    <Label for="date">Date</Label>
                    <Input
                    type="date"
                    name="date"
                    id="date"
                    placeholder="Enter Date"
                    />
                </FormGroup>



                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input type="text" name="description" id="description" placeholder="Enter Description" />
                </FormGroup>


                <FormGroup>
                    <Label for="organize">Organize</Label>
                    <Input type="text" name="organize" id="organize" placeholder="Organize Books at Library" />
                </FormGroup>

                <button className="btn btn-primary btn-custom-2">Registration</button>
            </Form>
            </div>
        </div>
    );
};

export default Register;