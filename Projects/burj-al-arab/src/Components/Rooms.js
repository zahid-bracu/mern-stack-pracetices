import React, { useState, useEffect } from 'react';
import Database from './Database';
import RoomCard from './RoomCard';
import { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart, processOrder } from './databaseManager';
const Rooms = () => {
    

    

    


    function select(key){
        console.log(key)
        addToDatabaseCart(key,1);
        
    }

    

       

    
    return (
        <div className="container">
            <div className="row">
            {
                Database.map(key=> <RoomCard select={select} data={key}></RoomCard>)
            }
            </div>
        </div>
        
    );
};

export default Rooms;