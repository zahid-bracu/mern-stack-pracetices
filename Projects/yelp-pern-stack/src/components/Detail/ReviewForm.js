 
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
        await fetch(`http://localhost:5000/api/v1/review/${id}`,{
             method:'POST',
             headers:{
                 'Content-Type':'application/json'
             },
             body:JSON.stringify(data)})
             .then(res=>res.json())
             .then(result=>{
                 console.log(result);
                 window.location.reload();
                //  handleShow();
             })
        }
    return (
        <div>
            <h4 className="text-center">Add your review below</h4>
             <Form className="form" onSubmit={submitFunc}>
                
                    <Form.Group>
                    <label for="name" class="form-label font-weight-bold">Your Name : </label>
                        <Form.Control   onBlur={changeFunc} type="text" name="name" id="name"   required/>
                    </Form.Group>

                    <Form.Group>
                    <label for="comment" class="form-label font-weight-bold">Comment : </label>
                        <Form.Control onBlur={changeFunc} as="textarea" rows={3} name="comment" id="comment" placeholder="Write your comment" required/>
                    </Form.Group>


                    <Form.Group controlId="mark">
                    <Form.Label for="mark" class="form-label font-weight-bold">Rating</Form.Label>
                        <Form.Control onBlur={changeFunc} name="mark" id="mark" as="select">
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </Form.Control>
                    </Form.Group>
                
                
                 
                <Button className=" d-block btn btn-success px-3"   type="submit">
                    Post
                </Button>
                
            </Form>
        </div>
    )
}
