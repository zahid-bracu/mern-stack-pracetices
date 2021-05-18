import React, {useState, useContext} from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import {RestaurantsContext} from '../../contextapi/RestaurantsContextProvider';


export default function AddRestaurants() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [restaurants, setRestaurants]=useContext(RestaurantsContext);
    const [data,setData]=useState({
        name:"",
        location:"",
        price_range:""
    });

    function changeFunc(event){
        const tempData={...data};
        tempData[event.target.name]=event.target.value;
        setData(tempData);
    }


    console.log(data);
    async function submitFunc(event){
         event.preventDefault();
         console.log(data)
         await fetch('http://localhost:5000/api/v1/restaurants',{
             method:'POST',
             headers:{
                 'Content-Type':'application/json'
             },
             body:JSON.stringify(data)})
             .then(res=>res.json())
             .then(result=>{
                console.log(result.id);
                data['id']=result.id;
                var temp=[...restaurants,data];
                setRestaurants(temp)
                handleShow()
                
             })
         }


         function executeFunc(){
             handleClose();
            //  window.location.reload();
         }
    
    return (

        <>
        <div className="container">
            <Form onSubmit={submitFunc}>
                <div className="row justify-content-center align-items-center">
                    <Form.Group className="col-lg-4 col-md-6 col-sm-12 col-12"  >
                        <Form.Control onBlur={changeFunc} type="text" name="name" id="name" placeholder="Enter Restaurant Name" required/>
                    </Form.Group>

                    <Form.Group className="col-lg-4 col-md-6 col-sm-12 col-12"  >
                        <Form.Control onBlur={changeFunc} type="text" name="location" id="location" placeholder="Enter Location" required/>
                    </Form.Group>


                    <Form.Group className="col-lg-4 col-md-6 col-sm-12 col-12"  >
                        <Form.Control onBlur={changeFunc} type="number" name="price_range" id="price_range" placeholder="Enter a number between 1 to 5" min="1" max="5" required/>
                    </Form.Group>
                </div>
                
                <Button className="mx-auto d-block btn btn-success"   type="submit">
                    Add Restaurant
                </Button>
            </Form>
        </div>




        <Modal show={show} onHide={handleClose}>
         
        <Modal.Body>
            <h6 className="text-primary">
            Data has been Saved Successfully
            </h6>
            </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-dark btn-sm" onClick={executeFunc}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

        </>
    )
}

