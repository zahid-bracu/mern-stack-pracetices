import React, { useEffect, useState } from 'react';
import { Button,Card } from 'react-bootstrap';


const PostHeader = (props) => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=15&fbclid=IwAR2OhMWSjNcWpmFHUqm75NQfsB6g0DHWevl7fYpxRF0wQlgHIVmRQ9qXcuE')
        .then(response => response.json())
        .then(json => {setData(json.results)})
    },[])
    
    const array=[];
    data.map(key=>{
         array.push(key.picture.medium)
    })
    const imgUrl=array[3];
    console.log(imgUrl);



    
    const {id,title,body}=props.info;
    return (
        <Card style={{maxWidth:"1000px"}} className="mx-auto p-3 mb-3">
            <div className="">
                    <img src={imgUrl} className="img-fluid ml-3 mb-2"/>
                <div class="ml-3">
                    <Card.Title className="text-primary">Social Buddy {id}</Card.Title>
                        <Card.Text>
                        {body}
                        </Card.Text>
                        <div className="d-flex">
                            <Card.Text style={{color:"blue"}}>
                                Like
                            </Card.Text>
                            <Card.Text className="ml-3" style={{color:"blue"}}>
                                React
                            </Card.Text>
                            <Card.Text className="ml-3" style={{color:"blue"}}>
                                Comments
                            </Card.Text>
                            <Card.Text className="ml-3" style={{color:"blue"}}>
                                Share
                            </Card.Text>
                            <Card.Text className="ml-3" style={{color:"blue"}}>
                                Save
                            </Card.Text>
                            <Card.Text className="ml-3" style={{color:"blue"}}>
                                More
                            </Card.Text>
                        </div>
                </div>
            </div>
        </Card>
    );
};

export default PostHeader;