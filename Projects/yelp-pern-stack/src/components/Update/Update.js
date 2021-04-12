import React, { useState, useEffect, useContext } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import {RestaurantsContext} from '../../contextapi/RestaurantsContextProvider';
import {
    useParams, useHistory
  } from "react-router-dom";
import './style.css';
export default function Update() {
    let { id } = useParams();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [restaurants, setRestaurants]=useContext(RestaurantsContext);
    const [data,setData]=useState({
        name:"",
        location:"",
        price_range:null
    });


    useEffect( async () => {
        await fetch(`http://localhost:5000/api/v1/restaurants/${id}`)
       .then(response => response.json())
       .then(json => {
           console.log(json.data[0]);
           setData(json.data[0]);
       })
       .catch((err)=>{
           console.log(err);
       })
     },0);

    console.log(data.name);
    function changeFunc(event){
        const tempData={...data};
        tempData[event.target.name]=event.target.value;
        setData(tempData);
        console.log(data)
    }


    


    async function submitFunc(event){
        event.preventDefault();
        console.log(data)
        await fetch(`http://localhost:5000/api/v1/restaurants/${id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)})
            .then(res=>res.json())
            .then(result=>{
                console.log(result);
                handleShow();
            })
        }


        function executeFunc(){
            handleClose();
        }


        let history = useHistory();

        function goBack(){
            history.push(`/`);
        }

    return (
        <div className="container">
           <h2 className="text-center mt-5 mb-3">Update Restaurant</h2>
   
            <Form className="form" onSubmit={submitFunc}>
                <div className="">
                    <Form.Group>
                    <label for="name" class="form-label font-weight-bold">Restaurant's Name : </label>
                        <Form.Control defaultValue={data.name} onBlur={changeFunc} type="text" name="name" id="name" placeholder="Enter Restaurant Name" required/>
                    </Form.Group>

                    <Form.Group>
                    <label for="location" class="form-label font-weight-bold">Location : </label>
                        <Form.Control defaultValue={data.location} onBlur={changeFunc} type="text" name="location" id="location" placeholder="Enter Location" required/>
                    </Form.Group>


                    <Form.Group>
                    <label for="price_range" class="form-label font-weight-bold">Price Range : </label>
                        <Form.Control defaultValue={data.price_range} onBlur={changeFunc} type="number" name="price_range" id="price_range" placeholder="$" required/>
                    </Form.Group>
                </div>
                
                {
                    data.name && <Button className="mx-auto d-block btn btn-warning"   type="submit">
                    Update
                </Button>
                }
            </Form>

                <Button onClick={()=>goBack()} className="mx-auto mt-3 d-block btn btn-primary">
                    Back to List
                </Button>
      




        <Modal show={show} onHide={handleClose}>
         
        <Modal.Body>
            <h6 className="text-primary">
            Data has been Updated Successfully
            </h6>
            </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-dark btn-sm" onClick={executeFunc}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

        </div>
    )
}
