import React from 'react';
import './style.css'
const Card = (props) => {
    const {id,name,picture}=props.data;
    return (
         
            <div className="card card-custom m-2" style={{width:"16rem"}}>
                <img className="card-img-top" src={picture}  alt="Card image cap"/>
                <div className="card-body">
                    <p className="card-text text-center " >{name}</p>
                </div>
            </div>
         
    );
};

export default Card;