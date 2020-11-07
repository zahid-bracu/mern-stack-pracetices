import React, {useState} from 'react';
import RoomsCard from './RoomsCard';
import RoomsDB from './RoomsDB';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom";
  import { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart, processOrder } from './databaseManager';
import { useEffect } from 'react';

const Rooms = () => {
    const [db,setDb]=useState(RoomsDB);
    console.log(db);

  

    let {name}=useParams();
    name = name.toLowerCase();

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    name=capitalizeFirstLetter(name);


    useEffect(() => {
        var db=getDatabaseCart();
        console.log(db.length);
        
      },[]);
    
    return (
        <div className="container">
            <h4 className="text-center mt-5">Stays in {name}</h4>
           {
               db.map(key=> <RoomsCard data={key}></RoomsCard>)
           }
        </div>
    );
};

export default Rooms;