import React from 'react';
import {
    Link
  } from "react-router-dom";
const InfoCard = (props) => {
    const {name,number,mail,address,_id}=props.data;
    function deleteIs(id,name){
        
    }

    return (
         
            <div className="info-card mt-3">
                <h5>{name}</h5>
                <h6>{number}</h6>
                <h6>{mail}</h6>
                <h6>{address}</h6>
                <h6>{_id}</h6>
                <button className="btn btn-primary btn-sm">Update</button>
                <button className="btn btn-danger btn-sm ml-2">
                    <Link to={"/delete/"+_id}>
                        Delete
                    </Link>
                </button>
            </div>
         
    );
};

export default InfoCard;