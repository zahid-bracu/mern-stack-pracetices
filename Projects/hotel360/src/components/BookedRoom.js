import React, {useEffect} from 'react';
import { useState } from 'react';
import BookedRoomCard from './BookedRoomCard';
import  { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart, processOrder } from './databaseManager';
import Database from './Database';

const BookedRoom = () => {
    
    const [totals,setTotal]=useState(0);
    const [rooms,setRoom]=useState([]);
    

    useEffect(() => {
        var roomsDB=getDatabaseCart();
        var keys=Object.keys(roomsDB)
        
        keys.pop();
        console.log(keys);

        let total=Object.keys(roomsDB).length;
        total--;
        setTotal(total);
         

        const finalArr = Database.filter(pd =>
            keys.some(exclude => exclude == pd.key)
        );
        console.log(finalArr);
        setRoom(finalArr);
      },[]);

      function remove(id){
        removeFromDatabaseCart(id);
        var roomsDB=getDatabaseCart();
        var keys=Object.keys(roomsDB)
        
        keys.pop();
        console.log(keys);

        let total=Object.keys(roomsDB).length;
        total--;
        setTotal(total);
         

        const finalArr = Database.filter(pd =>
            keys.some(exclude => exclude == pd.key)
        );
        console.log(finalArr);
        setRoom(finalArr);
      }
      console.log(rooms);
    return (
        <div className="container">
            <h4 className="text-center my-4 text-info">Current Bookings : {totals} Rooms</h4>
            <div className="row">
            {
                rooms.map(key => <BookedRoomCard remove={remove} data={key} ></BookedRoomCard>)
            }
            </div>
            
        </div>
    );
};

export default BookedRoom;