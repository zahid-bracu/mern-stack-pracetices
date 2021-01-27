import React, {useState,useEffect} from 'react';
import {
    useParams, Link
  } from "react-router-dom";

const ViewDetail = () => {
    const [data,setData]=useState();
    const {id}=useParams();
    
    useEffect(()=>{
        fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(json => {
           var info=json.find((key,index)=> key.area==id);
           setData(info)
        })
    },[])

    
    console.log(data)
    


    return (
        <>
        {
            data && <div style={{maxWidth:"600px",margin:"auto"}} className="card text-center mt-4">
            <img className="card-img-top" src={data.flag} style={{maxWidth:"500px",display:"block",margin:"auto"}}   alt="Card image cap"></img>
           <div className="card-header">
             Flag of {data.name}
           </div>
           <div  className="card-body">
               <h5 className="card-title">{data.name}</h5>
               <p className="text-justify">The Capital of {data.name} is {data.capital}.{data.name} is in {data.region} region.The Sub Region is {data.subregion}.There are total {data.population} people live in this country.The area of {data.name} is {data.area} Square Kilometre.The native language of {data.name} is {data.languages[0].nativeName}.</p>
               <Link to="/countries">
               <button className="btn btn-success">Go Back</button>
               </Link>
               
           </div>
       </div>
        }
        {
            !data && <h1 className="text-center my-5">Data is Loading</h1>
        }
        
        </>
    );
};

export default ViewDetail;