import React, { useEffect, useState,useContext } from 'react';
import { Button,Card } from 'react-bootstrap';
import {PhotoContext} from './PostDetails';

const PostDetailsDisplay = (props) => {
    const {postId,name,body,email,photo}=props.comments;
     
    var names=name.slice(0,12);

     
    
    return ( 
        <>
            
            <Card style={{maxWidth:"1000px"}} className="mx-auto ">
               <div  className="d-flex p-4">
               <img className="img-fluid" src={photo}  />
                <div className="ml-3">
                    <Card.Title className="text-primary">{names}</Card.Title>
                    <h6 className="text-secondary">{email}</h6>
                        <Card.Text>
                        {body} <span className="ml-2" style={{color:"blue"}}><a href="">See More</a></span>
                        </Card.Text>
                </div>
                
               </div>
            </Card>
        </>
    );
};

export default PostDetailsDisplay;