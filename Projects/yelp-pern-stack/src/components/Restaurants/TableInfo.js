import React, { useState, useEffect, useContext } from 'react';
import { Table, Modal, Button } from 'react-bootstrap';
import List from './List';
import {RestaurantsContext} from '../../contextapi/RestaurantsContextProvider';

export default function TableInfo(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [restaurants, setRestaurants]=useContext(RestaurantsContext);
    const [data,setData]=useState([])
    useEffect( async () => {
         await fetch('http://localhost:5000/api/v1/restaurants')
        .then(response => response.json())
        .then(json => {
            setData(json.restaurants);
            setRestaurants(json.restaurants)
        })
        .catch((err)=>{
            console.log(err);
        })
      },0);

      console.log(restaurants);



      async function deleteRes(id){
          console.log(id);

        await fetch(`http://localhost:5000/api/v1/restaurants/${id}`,{
              method:'DELETE'
          })
        .then(response => response.json())
        .then(json =>{
            console.log(json.status);
            var restData=restaurants.filter(key=>key.id !=id)
            setRestaurants(restData);
            handleShow();
        })
      }

    return (
        <>
        <div className="container mt-5">
            {
              restaurants && <Table striped>
              <thead className=" text-white bg-primary">
                  <tr>
                  <th>Restaurants</th>
                  <th>Location</th>
                  <th>Price Range</th>
                  <th>Ratings</th>
                  <th>Details</th>
                  <th>Edit</th>
                  <th>Delete</th>
                  </tr>
              </thead>
              <tbody className="table-dark">
                  {
                    restaurants  &&  restaurants.map(data=> <List id={data.id} info={data} deleteRes={deleteRes}/>)
                  }
              </tbody>
              </Table>
            }
             
        </div>


        <Modal show={show} onHide={handleClose}>
         
        <Modal.Body>
            <h6>Data has been deleted successfully</h6>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-dark btn-sm" onClick={handleClose}>
            Close
          </Button>
           
        </Modal.Footer>
      </Modal>


</>
    )
}
