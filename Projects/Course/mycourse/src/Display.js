import React from "react";
import "./styles.css";
import {
  Card,
  Button
} from "react-bootstrap";

export default function Display(props) {
  const {name,id,tag,img}=props.Datas;
  console.log(props);
  return (
      <Card className=" col-lg-6 col-md-6 col-sm-12 col-12 my-4" style={{maxWidth: '18rem' }}>
        <Card.Img variant="top" src={img} />
          <Card.Body>
              <Card.Title>{name}</Card.Title>
                <Card.Text>
                  {tag}
                </Card.Text>
              <Button variant="primary">Go somewhere</Button>
          </Card.Body>
      </Card>
  );
}