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
                <h5>Name : {name}</h5>
                <h6>Contact No. : {number}</h6>
                <h6>Mail : {mail}</h6>
                <h6>Address : {address}</h6>
                <button  className="btn btn-primary btn-sm">
                <Link style={{textDecoration:"inherit",color:"white"}} to={"/update/"+_id}>
                        Update
                    </Link>
                </button>
                <button className="btn btn-danger btn-sm ml-2">
                    <Link style={{textDecoration:"inherit",color:"white"}} to={"/delete/"+_id}>
                        Delete
                    </Link>
                </button>
            </div>
         
    );
};

export default InfoCard;