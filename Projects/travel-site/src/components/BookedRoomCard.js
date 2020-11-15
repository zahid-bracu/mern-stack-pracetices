import React from 'react';
import { Button,Card, Badge } from 'react-bootstrap';


const BookedRoomCard = (props) => {

    const {key,title,photo,rooms,rating,price,service}=props.data;
    return (
        <div className="m-3">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={photo} />
            <Card.Body>
              <h6>{title}</h6>
             <h4 className="text-danger"></h4>
                <Button variant="danger" onClick={()=>props.remove(key)} className="px-5 d-block mx-auto">Remove</Button>
            </Card.Body>
            </Card>
        </div>
    );
};

export default BookedRoomCard;