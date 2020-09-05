import React from 'react';
import { Card } from 'react-bootstrap';

const Cart = (props) => {

    console.log(props);
    const {title,author,description}=props.article;
    return (
        <div>
            <Card className="m-2" style={{ maxWidth: '300px',border:"none" }}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text style={{overflow:"hidden"}}>
                                {description}
                            </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Cart;