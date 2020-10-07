import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom";
import PostDetailsDisplay from './PostDetailsDisplay';
import { Button,Card } from 'react-bootstrap';
import PostHeader from './PostHeader';

 

const PostDetails = () => {
    const { pd } = useParams();
    const [data,setData]=useState([]);

    const [post,setPost]=useState([]);

    const [photos,setPhoto]=useState([]);

    useEffect(() => {
        
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(json => setData(json))


        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
        setPost(json);
        })

        fetch('https://randomuser.me/api/?results=15&fbclid=IwAR2OhMWSjNcWpmFHUqm75NQfsB6g0DHWevl7fYpxRF0wQlgHIVmRQ9qXcuE')
        .then(response => response.json())
        .then(json => {
        setPhoto(json.results);
        })
    },[]);

    const objectArray=data.filter(key=> key.postId==pd);
    const comments=objectArray.slice(0,5);

    const postinfo=post.filter(key => key.id==pd);
    
    console.log(photos);

    var photoAlbum=[];

    photos.map(key =>{
        photoAlbum.push(key.picture.large);
    });

    comments.map((key,index)=>{
        key.photo=photoAlbum[index];
    })
    const imgURL=photoAlbum[14];
    
    console.log(comments);
    return (
        <div className="mt-3">
             
                {
                    postinfo.map(key=> <PostHeader info={key}></PostHeader>)
                }
                <h5 className="text-center text-primary">All Comments</h5>
                {   
                    
                    comments.map(key=>  <PostDetailsDisplay comments={key} ></PostDetailsDisplay>)
                }
             
            
        </div>
    );
};

export default PostDetails;