import React from 'react';
import { Button,Card } from 'react-bootstrap';
const InfoCard = (props) => {
     const {addToGroup}=props;
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.datas.name}</Card.Title>
                <Card.Text>
                {props.datas.phone}
                </Card.Text>
                <Button onClick={()=>{addToGroup(props.datas.id)}} variant="danger">Add this person</Button>
            </Card.Body>
        </Card>
    );
};

export default InfoCard;