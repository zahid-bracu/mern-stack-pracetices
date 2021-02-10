import React from 'react';
import './style.css';
import {Card, Form, Button } from 'react-bootstrap';

export default function AddedFoodDetail(props) {
   

  const {id,type,name,price,count,shortDescription,fullDescription}=props.infos;
  const image=props.infos.images[0];

  return (
    <div class=" row border justify-content-center align-items-center my-3 p-3" >
      <img className="col-4"   src={image} style={{maxWidth:"200px"}} />
      <div className="col-8">
          <h4>{name}</h4>
          <Card.Text>
            <h5>Price <span className="badge badge-success">{price}$</span></h5>
            <h6>Quantity: <span className="badge badge-warning">{count}</span> </h6>
          </Card.Text>
          <Button className="btn-sm" onClick={()=>props.removeItem(id)} variant="danger">Remove</Button>
      </div>
    </div>
  );
}