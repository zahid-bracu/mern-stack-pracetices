import React, { useState, useEffect } from 'react';
import Database from './Database';
import RoomCard from './RoomCard';
import { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart, processOrder } from './databaseManager';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './style.css';


const Rooms = () => {
    const [length,setLength]=useState();
    const [flag,setFlag]=useState(false);

    useEffect(async () => {
        let temp=getDatabaseCart();
        let lengths=temp.length;
        setLength(lengths)                
      },[]);

      


    function select(key){
        console.log(key)
        addToDatabaseCart(key,1);
    }

    

       

    
    return (
        <div className="container">
            <button className="btn btn-danger my-3 d-block mx-auto">
                 <Link className="custom-font" to="/datepicker">Go to Booking Page</Link>
            </button>
            
            <div className="row">
            {
                Database.map(key=> <RoomCard select={select} data={key}></RoomCard>)
            }
            </div>
        </div>
        
    );
};

export default Rooms;