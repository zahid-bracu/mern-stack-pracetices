import React, {useState} from 'react';
import RoomsCard from './RoomsCard';
import RoomsDB from './RoomsDB';
import { Button, Card } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    Link
  } from "react-router-dom";
  import { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart, processOrder } from './databaseManager';
import { useEffect } from 'react';

const Rooms = () => {
    const [db,setDb]=useState(RoomsDB);
    console.log(db);

    const [flag,setFlag]=useState(false);

    useEffect(() => {
      var data=getDatabaseCart();
      console.log(data);
      if(Object.keys(data)!=0){
        console.log("existed");
        setFlag(true);
      }else{
        console.log("non existed");
        setFlag(false);
      }

    },[]);
  

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
        <div class="container">

        
            <h4 class="text-center mt-5">Stays in {name}</h4>
            <Link style={{textDecoration:"inherit",color:"black"}} class="text-white" to="/booked">
              <button class="btn btn-info px-5 mx-auto d-block my-4">
  
                Check your booked room
                </button>
  
              </Link>


              {/* <Link className="text-white mx-auto" to="/home">
                <Button variant="danger">
                Back to Previous Page  
                </Button></Link> */}
            
            
           {
               db.map(key=> <RoomsCard data={key}></RoomsCard>)
           }
        </div>
    );
};

export default Rooms;