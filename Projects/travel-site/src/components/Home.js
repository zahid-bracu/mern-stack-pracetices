import React, { useState } from 'react';
import Database from './Database';
import ImageDisplay from './ImageDisplay';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Home = () => {

    const [flag,setFlag]=useState(false);
    const [db,setDb]=useState(Database);
    const [id,setID]=useState();
    const [dis,setDis]=useState([{
        name:"",
        description:"",
        photo:"",
        key:null
    }]);

    function display(key){
    
        const items=db.filter(id=> id.key==key);
        setDis(items);
        setFlag(true);
    }
    console.log(dis[0]);

    function empty(){
        const items=[
            {
                name:"",
                description:"",
                photo:"",
                key:null
            }
        ]
        setDis(items);
    }
   
     
    return (
        <div className="container">
            
            <div className="row mt-5 align-items-center justify-content-center">
             <div className="col-lg-3 col-md-12 col-sm-12 col-12 my-5 text-center justify-item-center align-items-center">
                {
                    !flag && <>
                    <h4 className=" text-white">
                     Welcome </h4>  
                     <h5 className="text-white">to</h5>
                     <h3 className="text-white">
                     Travel 360 Corp.
                         </h3>
                        <br/>

                        <h3>
                        <badge className="badge badge-pill badge-warning">
                       
                            Select your dream tour
                       
                        </badge>
                        </h3>
                        
                    </>
                }
                
                
                
                
                
                {
                    flag && <>
                    <h5 className=" text-white">
                     {dis[0].name}
                </h5>
                <p >
                    <span className="text-justify text-white">
                    {dis[0].description}
                    </span>
                   
                </p>
                {
                    dis[0].key && 
                    <>
                    <Link style={{textDecoration:"inherit",color:"black"}} to={"/form/"+dis[0].key}>
                    <button className="btn btn-warning">
                       
                        Book Now
                        
                    </button>
                    </Link> </>
                }
                    </>
                }
            </div>
            {
                db.map(key=> <ImageDisplay empty={empty} display={display} db={key}   ></ImageDisplay>)
            }
            </div>
        </div>
        
    );
};

export default Home;