import React, {useEffect } from 'react';
import { useState } from 'react';
import BookedRoomCard from './BookedRoomCard';
import  { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart, processOrder } from './databaseManager';
import Database from './Database';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import AmountCard from './AmountCard';

const BookedRoom = () => {
    
    const [totals,setTotal]=useState(0);
    const [rooms,setRoom]=useState([]);
    const [flag,setFlag]=useState(false);

     

    useEffect(() => {
        window.scrollTo(0,0);
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
        
        console.log(finalArr.length);
        if(finalArr.length>0){
            setFlag(true);
        }else{
            setFlag(false);
        }
        setRoom(finalArr);
      },[]);

      console.log(rooms);
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
        <div className="container ">
            {
                !flag &&
                <div>
                <h4 className="text-center my-4 text-info">You Didn't Select Any Room</h4>

                <div style={{width:"178px" ,margin:"auto"}}>
                <Link style={{textDecoration:"inherit"}} to="/rooms">
                <button  className=" my-2 btn btn-info px-4 d-block mx-auto">    
                <span style={{textDecoration:"inherit",color:"white"}}>Check Our Rooms</span>
                </button></Link>


                <Link style={{textDecoration:"inherit"}} to="/home">
                <button className="btn px-2 btn-dark mx-auto d-block">
                    Go Back to Homepage
                </button></Link>
                </div>


                
            
                </div>
            }
            <div className="row">
            {
                flag &&
                <div className="col-lg-3 order-sm-last order-md-first order-sm-first order-first">
                     

                    <AmountCard data={rooms}></AmountCard>

                    
                   
                </div>
                
                
            }
            


            
                <div className="col-lg-9 order-lg-first order-md-last order-sm-last order-last">
                    <div className="row mt-2 justify-content-center ">
                    {
                        rooms.map(key => <BookedRoomCard remove={remove} data={key} ></BookedRoomCard>)
                    }
                    </div>
                </div>
            </div>
            
            
            
        </div>
    );
};

export default BookedRoom;