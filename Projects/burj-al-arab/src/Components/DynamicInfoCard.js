import React from 'react';
import { Button,Card } from 'react-bootstrap';
const DynamicInfoCard = (props) => {
    const {
        start,
        end,
        name,
        email,
        state

    }=props.info;
    return (
        <div>
            <Card className="mx-2 mt-2" border="dark" style={{ width: '18rem' }}>
                
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Check In : {start}
                </Card.Text>

                <Card.Text>
                    Check Out : {end}
                </Card.Text>
                </Card.Body>
                <Card.Header>Contact : {email}</Card.Header>
            </Card>
        </div>
    );
};

export default DynamicInfoCard;