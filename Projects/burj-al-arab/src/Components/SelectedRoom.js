import React from 'react';
import { Button, Card} from 'react-bootstrap';
const SelectedRoom = (props) => {
    console.log(props);
    const { key,description,title,bedType,price} = props.data;

    return (
        <div>
            <Card style={{maxWidth:"300px"}}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {description}
                    </Card.Text>
                    <Card.Footer>Price : {price}$ </Card.Footer>
                    <Button variant="danger"  onClick={()=>props.remove(key)}>Remove</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SelectedRoom;