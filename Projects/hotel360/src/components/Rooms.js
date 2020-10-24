import React from 'react';
import Database from './Database';

import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useState } from 'react';
import RoomCard from './RoomCard';

const Rooms = () => {

    // loading data from Database
    const [room,setRoom]=useState(Database);
    console.log(room);


    
    return (
        <div className="container mx-auto d-block mt-5">
            <div className="row ">
        {
            room.map(key=> <RoomCard  info={key}></RoomCard>)
        }
        </div>
        </div>
        
    );
};

export default Rooms;