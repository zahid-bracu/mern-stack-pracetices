import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";
  import './style.css';
const CountryInfo = (props) => {
     
    const {key,name,nativeName,region,flag,capital,population,area}=props.datas;

    return (
        <Card className="card" style={{ width: '18rem',paddingTop:"15px", height:"30rem", margin:"10px" }}>
        <Card.Img variant="top" style={{width:"200px",display:"block",margin:"0px auto"}} src={flag} />
        <Card.Body>
            <Card.Title><span className="bold">{name}</span>  </Card.Title>
            <p>{nativeName}</p>
            <Card.Text>
            <h6> The Capital of <span className="text-success bold">{name}</span> is <span className="text-danger bold">{capital}</span> </h6> 
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem> <h6> <span className="font-italic text-info">Region:</span> <span className="bold">{region} </span> </h6></ListGroupItem>
            <ListGroupItem> <h6><span className="font-italic text-info">Population :</span> <span className="bold">{population}</span>  people </h6></ListGroupItem>
             
        </ListGroup>
        <Card.Body>
            <button  onClick={()=>props.addCountry(props.datas)} className="btn btn-danger text-white" style={{marginRight:".5em"}}>Add</button>

            <Link to={'/detail/'+area}>
            <button className="btn btn-success">View Info</button>
            </Link>
            
        </Card.Body>
        </Card>
    );
};

export default CountryInfo;