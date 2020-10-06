import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom";
import PostDetailsDisplay from './PostDetailsDisplay';

const PostDetails = () => {
    let { pd } = useParams();
    const [data,setData]=useState([]);

    useEffect(() => {
        
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(json => setData(json))
    });

    var objectArray=data.filter(key=> key.postId==pd);
    var comments=objectArray.slice(0,100);
    
    console.log(comments);
    return (
        <div>
            {
                comments.map(key=> <PostDetailsDisplay comments={comments}></PostDetailsDisplay>)
            }
        </div>
    );
};

export default PostDetails;