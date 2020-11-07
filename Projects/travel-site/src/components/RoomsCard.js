import React from 'react';
import './style.css';
import { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart, processOrder } from './databaseManager';

const RoomsCard = (props) => {
    const {key,title,photo,rooms,rating,price,service}=props.data;

    function roomSelect(e,key){
        e.target.classList.remove("btn-primary");
        e.target.classList.add("btn-secondary");
        console.log(key);
        addToDatabaseCart(key,1);
    }
    return (
        <div className=" my-5 rooms-card row justify-content-between align-items-center">
            <div className="col-md-12 mb-2 col-sm-12 col-12 col-lg-4">
                <img src={photo} style={{width:"100%"}} />
            </div>
            <div className="col-8">
                <h4>{title}</h4>
                <h6>{rooms}</h6>
                <p>Cancellation flexibility available</p>
                <p>{service}</p>
                <p>⭐{rating}/5</p>
                <p>${price}/night</p>
                <button id="btn" className="btn btn-primary btn-sm px-5" onClick={(event)=>roomSelect(event,key)}>select</button>
            </div>
            
        </div>
    );
};

export default RoomsCard;