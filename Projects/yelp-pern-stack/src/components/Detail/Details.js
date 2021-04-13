import React, { useState, useEffect, useContext } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import {RestaurantsContext} from '../../contextapi/RestaurantsContextProvider';
import {
    useParams, useHistory
  } from "react-router-dom";
import ReviewForm from './ReviewForm';
import CommentBox from './CommentBox';



export default function Details() {
    let { id } = useParams();

    const [data,setData]=useState({
        name:"",
        location:"",
        price_range:null
    });


    const [review,setReview]=useState([]);

    var sum=0;
    for(var i=0;i<review.length;i++){
        sum=sum+review[i].mark;
    }
    var reviewMark=sum/(review.length);
    var reviewValue=Math.round(reviewMark);


    useEffect( async () => {
        await fetch(`http://localhost:5000/api/v1/restaurants/${id}`)
       .then(response => response.json())
       .then(json => {
           console.log(json.data[0]);
           setData(json.data[0]);
       })
       .catch((err)=>{
           console.log(err);
       })



       await fetch(`http://localhost:5000/api/v1/review/${id}`)
       .then(response => response.json())
       .then(json => {
        //    console.log(json);
           setReview(json.review);
       })
       .catch((err)=>{
           console.log(err);
       })
     },0);
    
    
    console.log(review);



    return (
        <div className="container">
            <h1 className="text-center ">{data.name}, {data.location}</h1>
            <h4 className="text-center">{'⭐'.repeat(reviewValue)}</h4>
            <div className="container row justify-content-center align-items-center mb-4">
            {
                review.map(key=><CommentBox data={key}/>)
            }
            </div>
            
            <ReviewForm id={id}/>
        </div>
    )
}
