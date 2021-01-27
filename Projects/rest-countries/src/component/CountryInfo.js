import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";
const CountryInfo = (props) => {
     
    const {key,name,nativeName,region,flag,capital,population,area}=props.datas;

    return (
        <Card style={{ width: '18rem',paddingTop:"15px", height:"30rem", margin:"10px" }}>
        <Card.Img variant="top" style={{width:"200px",display:"block",margin:"0px auto"}} src={flag} />
        <Card.Body>
            <Card.Title>{name}  </Card.Title>
            <p>{nativeName}</p>
            <Card.Text>
            <h6> The Capital of {name} is {capital} </h6> 
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem> <h6>Region : {region} </h6></ListGroupItem>
            <ListGroupItem> <h6>Population : {population} people </h6></ListGroupItem>
             
        </ListGroup>
        <Card.Body>
            <button  onClick={()=>props.addCountry(props.datas)} className="btn btn-danger px-5 text-white">Add</button>

            <Link to={'/detail/'+area}>
            <button className="btn btn-info ml-3">View Info</button>
            </Link>
            
        </Card.Body>
        </Card>
    );
};

export default CountryInfo;