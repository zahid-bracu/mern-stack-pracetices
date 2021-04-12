import React, { useState, useEffect, useContext } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import {RestaurantsContext} from '../../contextapi/RestaurantsContextProvider';
import {
    useParams, useHistory
  } from "react-router-dom";
import ReviewForm from './ReviewForm';



export default function Details() {
    let { id } = useParams();

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
    



    return (
        <div>
            <h1 className="text-center my-5">{data.name} : {id}</h1>
            <ReviewForm id={id}/>
        </div>
    )
}
