import React from 'react';
import { Card } from 'react-bootstrap';


const Cart = (props) => {

    console.log(props);
    const {title,author,description,urlToImage}=props.article;
    return (
        <React.Fragment>
            <Card className="m-2" style={{ maxWidth: '300px',border:"none" }}>
            <Card.Img variant="top" src={urlToImage} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
                            <Card.Text style={{minHeight:"100px",overflow:"hidden"}}>
                                {description}
                            </Card.Text>
                        <Card.Link href="#">Read More</Card.Link>
                </Card.Body>
            </Card>
             
        </React.Fragment>
    );
};

export default Cart;