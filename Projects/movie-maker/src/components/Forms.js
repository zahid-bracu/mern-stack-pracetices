import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';



export default function Forms() {
    
    function added(e){
        e.preventDefault();
        console.log("Movie Added")
    }

    return (
        <div className="container my-3 bg-white">
            <h4 className="my-3 text-center">Add Movie</h4>
            <Form style={{maxWidth:"400px"}} className="d-block mx-auto row" onSubmit={added}>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" name="name" id="name" placeholder="Enter Movie Name" required/>
                </FormGroup>

                <FormGroup>
                    <Label for="genre">Genre</Label>
                    <Input type="text" name="genre" id="genre" placeholder="Enter Movie Genre" required/>
                </FormGroup>


                <FormGroup>
                    <Label for="year">Year</Label>
                    <Input type="text" name="year" id="year" placeholder="Enter Movie Release Year" required/>
                </FormGroup>
                
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    )
}
