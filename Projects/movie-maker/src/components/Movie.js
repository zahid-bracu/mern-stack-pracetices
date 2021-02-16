import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import logo from './images/logo.png'
 function Movie(props) {
    console.log(props.data)
    var image=logo
    return (
        
      <Card style={{minWidth:"19rem"}} className="m-1">
        <CardImg top className="d-block mx-auto" style={{maxWidth:"10rem"}} src={image} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h6">{props.data.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Release Year : {props.data.year}</CardSubtitle>
          <CardText tag="h6">Genre : {props.data.genre}</CardText>
          
        </CardBody>
      </Card>
    
    )
}
export default Movie;