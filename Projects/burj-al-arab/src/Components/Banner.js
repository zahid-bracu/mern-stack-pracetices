import { Button } from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import './style.css';
  import { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart, processOrder } from './databaseManager';


const Banner = () => {
    const [db,setDb]=useState({})
    useEffect(() => {
        var temp=getDatabaseCart();
        setDb(temp);
      },[]);

      console.log(db)
    var bg="https://i.ibb.co/sPNGmvc/bg.jpg";
    return (
        <div>
            
            <img src={bg} className="img-design" style={{width:"100%"}} alt=""/>
            <button className=" btn btn-dark d-block mx-auto my-5">
                <Link className="custom-font" to="/room">Check Our Room & Services</Link>
            </button>
        </div>
    );
};

export default Banner;