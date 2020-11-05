import React from 'react';
import './style.css';

const RoomsCard = (props) => {
    const {title,photo,rooms,rating,price,service}=props.data;
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
            </div>
        </div>
    );
};

export default RoomsCard;