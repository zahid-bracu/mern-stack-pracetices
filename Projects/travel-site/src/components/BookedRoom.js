import React, {useEffect} from 'react';
import { useState } from 'react';
import BookedRoomCard from './BookedRoomCard';
import { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart, processOrder } from './databaseManager';
import RoomsDB from './RoomsDB';

const BookedRoom = () => {
    const [rooms,setRooms]=useState([]);
    useEffect(() => {
        var db=getDatabaseCart();
        var keys=Object.keys(db);
        console.log(keys);

        const finalArr = RoomsDB.filter(pd =>
            keys.some(exclude => exclude == pd.key)
        );
        setRooms(finalArr);
      },[]);
      console.log(rooms);

      function remove(key){
        removeFromDatabaseCart(key);
        var db=getDatabaseCart();
        var keys=Object.keys(db);
        console.log(keys);

        const finalArr = RoomsDB.filter(pd =>
            keys.some(exclude => exclude == pd.key)
        );
        setRooms(finalArr);
      }
     
    return (
        <div className="container">
            <div className="row">
            {
                rooms.map(key => <BookedRoomCard remove={remove} data={key}></BookedRoomCard>)   
            }
            </div>
        </div>
    );
};

export default BookedRoom;