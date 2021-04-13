import React from 'react'
import { Button, Form, Modal, Card } from 'react-bootstrap';
export default function CommentBox(props) {
    const {name,comment, mark}=props.data;
    return (
 
        <Card
        bg="primary"
        // key={idx}
         text='white'
        style={{ width: '18rem' }}
        className=" mt-2 ml-2"
      >
        <Card.Header style={{fontWeight:"bold"}}>{name}</Card.Header>
        <Card.Body>
        
          <Card.Text>
            {comment}
          </Card.Text>

          <Card.Text>
            {'⭐'.repeat(mark)}
          </Card.Text> 
        </Card.Body>
      </Card>
  
    )
}
