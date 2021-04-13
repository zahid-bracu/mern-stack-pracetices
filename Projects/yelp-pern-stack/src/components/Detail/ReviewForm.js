 
import React, { useState, useEffect, useContext } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
export default function ReviewForm(props) {
    const {id}=props;
    const [data,setData]=useState({
        restaurants_id:id,
        name:"",
        comment:"",
        mark:""
    });

    function changeFunc(event){
        const tempData={...data};
        tempData[event.target.name]=event.target.value;
        setData(tempData);
        console.log(data)
    }

    async function submitFunc(event){
        event.preventDefault();
        console.log(data)
        // await fetch(`http://localhost:5000/api/v1/restaurants/${id}`,{
        //     method:'PUT',
        //     headers:{
        //         'Content-Type':'application/json'
        //     },
        //     body:JSON.stringify(data)})
        //     .then(res=>res.json())
        //     .then(result=>{
        //         console.log(result);
        //         handleShow();
        //     })
        }
    return (
        <div>
             <Form className="form" onSubmit={submitFunc}>
                <div className="container">
                    <Form.Group>
                    <label for="name" class="form-label font-weight-bold">Your Name : </label>
                        <Form.Control   onBlur={changeFunc} type="text" name="name" id="name"   required/>
                    </Form.Group>

                    <Form.Group>
                    <label for="comment" class="form-label font-weight-bold">Comment : </label>
                        <Form.Control onBlur={changeFunc} as="textarea" rows={3} name="comment" id="comment" placeholder="Write your comment" required/>
                    </Form.Group>


                    <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Example select</Form.Label>
                        <Form.Control onBlur={changeFunc} name="mark" id="mark" as="select">
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </Form.Control>
                    </Form.Group>
                </div>
                
                 
                <Button className="mx-auto d-block btn btn-success"   type="submit">
                    Add Comment
                </Button>
                
            </Form>
        </div>
    )
}
